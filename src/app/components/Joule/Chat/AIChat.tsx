"use client";

import React, { useState, useRef, useEffect } from 'react';
import { WelcomeHeader } from '../Headers';
import MessageInput from '../Input/MessageInput';
import ChatBubble from './ChatBubble';

/**
 * AIChat - AI-powered chat interface using OpenAI ChatGPT API
 * 
 * @description This component provides a complete chat interface with real AI responses
 * using OpenAI's ChatGPT API. Features message bubbles, typing indicators, and conversation history.
 * 
 * @usage Use this component for:
 * - AI-powered chat interfaces
 * - Real-time conversations with ChatGPT
 * - Interactive AI assistance
 * 
 * @example
 * ```tsx
 * import { AIChat } from '@/components/Joule';
 * 
 * <AIChat
 *   title="Joule AI Assistant"
 *   userName="John"
 *   onMenuClick={() => console.log('Menu clicked')}
 * />
 * ```
 */

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface AIChatProps {
  title?: string;
  userName?: string;
  onMenuClick?: () => void;
  onFullscreenClick?: () => void;
  onDeclineClick?: () => void;
  placeholder?: string;
  initialMessage?: string;
}

const AIChat: React.FC<AIChatProps> = ({
  title = "Joule AI Assistant",
  userName = "User",
  onMenuClick,
  onFullscreenClick,
  onDeclineClick,
  placeholder = "Message Joule...",
  initialMessage = "Hello! I'm Joule, your SAP AI assistant. How can I help you today?"
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: initialMessage,
      timestamp: new Date()
    }
  ]);
  const [conversation, setConversation] = useState<Array<{role: string, content: string}>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (message: string) => {
    if (!message.trim() || isLoading) return;

    // Add user message immediately
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: message.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    try {
      // Call our API endpoint
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message.trim(),
          conversation: conversation
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get AI response');
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      // Add AI response
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.message,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setConversation(data.conversation);

    } catch (error) {
      console.error('Error sending message:', error);
      setError('Sorry, I couldn\'t process your message. Please try again.');
      
      // Add error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Sorry, I couldn\'t process your message. Please try again.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{
      width: 416,
      height: 742,
      minWidth: 416,
      background: 'white',
      boxShadow: '0px 32px 64px rgba(91, 115, 139, 0.16)',
      borderRadius: 16,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      display: 'flex',
      overflow: 'hidden'
    }}>
      {/* Header */}
      <WelcomeHeader
        title={title}
        onMenuClick={onMenuClick}
        onFullscreenClick={onFullscreenClick}
        onDeclineClick={onDeclineClick}
      />

      {/* Chat Messages Area */}
      <div style={{
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        display: 'flex',
        overflow: 'hidden'
      }}>
        <div style={{
          width: '100%',
          flex: 1,
          maxWidth: 1200,
          minWidth: 416,
          paddingTop: 16,
          paddingBottom: 16,
          paddingLeft: 16,
          paddingRight: 16,
          overflow: 'auto',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: 16,
          display: 'flex'
        }}>
          {/* Welcome message */}
          <div style={{
            alignSelf: 'stretch',
            textAlign: 'center',
            color: '#556B82',
            fontSize: 14,
            fontFamily: '72',
            fontWeight: '400',
            lineHeight: '20px',
            wordWrap: 'break-word',
            marginBottom: 8
          }}>
            Chat with Joule AI Assistant
          </div>

          {/* Messages */}
          {messages.map((message) => (
            <ChatBubble
              key={message.id}
              type={message.role}
              message={message.content}
            />
          ))}

          {/* Loading indicator */}
          {isLoading && (
            <div style={{
              alignSelf: 'flex-start',
              maxWidth: 384,
              paddingLeft: 16,
              paddingRight: 16,
              paddingTop: 12,
              paddingBottom: 12,
              background: '#EFF1F2',
              borderRadius: 16,
              borderTopLeftRadius: 4,
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: 8,
              display: 'flex'
            }}>
              <div style={{
                color: '#556B82',
                fontSize: 14,
                fontFamily: '72',
                fontWeight: '400',
                lineHeight: '20px',
                fontStyle: 'italic'
              }}>
                Joule is typing...
              </div>
              <div style={{
                display: 'flex',
                gap: 4
              }}>
                <div style={{
                  width: 4,
                  height: 4,
                  background: '#556B82',
                  borderRadius: '50%',
                  animation: 'bounce 1.4s infinite ease-in-out'
                }} />
                <div style={{
                  width: 4,
                  height: 4,
                  background: '#556B82',
                  borderRadius: '50%',
                  animation: 'bounce 1.4s infinite ease-in-out 0.16s'
                }} />
                <div style={{
                  width: 4,
                  height: 4,
                  background: '#556B82',
                  borderRadius: '50%',
                  animation: 'bounce 1.4s infinite ease-in-out 0.32s'
                }} />
              </div>
            </div>
          )}

          {/* Error message */}
          {error && (
            <div style={{
              alignSelf: 'stretch',
              padding: 12,
              background: '#FFE6E6',
              borderRadius: 8,
              border: '1px solid #FF4444',
              textAlign: 'center',
              color: '#CC0000',
              fontSize: 14,
              fontFamily: '72',
              fontWeight: '400'
            }}>
              {error}
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div style={{
        width: '100%',
        padding: 16,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 8,
        display: 'flex'
      }}>
        <div style={{
          width: '100%',
          maxWidth: 384
        }}>
          <MessageInput
            placeholder={placeholder}
            onSend={handleSendMessage}
            disabled={isLoading}
          />
        </div>

        {/* Footer disclaimer */}
        <div style={{
          textAlign: 'center',
          color: '#32363A',
          fontSize: 11,
          fontFamily: '72',
          fontWeight: '400',
          lineHeight: '12px',
          wordWrap: 'break-word'
        }}>
          Joule uses AI, verify results.
        </div>
      </div>

      {/* CSS for typing animation */}
      <style jsx>{`
        @keyframes bounce {
          0%, 80%, 100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default AIChat; 