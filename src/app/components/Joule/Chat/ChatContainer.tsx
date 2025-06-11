"use client";

import React, { useState } from 'react';
import { NewConversationHeader } from '../Headers';
import ChatBubble from './ChatBubble';
import ChatTimestamp from './ChatTimestamp';
import MessageInput from '../Input/MessageInput';

/**
 * ChatContainer - Complete chat interface component for the Joule design system
 * 
 * @description This component provides a full chat interface with header, message area, and input.
 * Manages message state and provides a complete chat experience.
 * 
 * @usage Use this component for:
 * - Complete chat interfaces
 * - Conversation views
 * - Interactive chat experiences
 * 
 * @example
 * ```tsx
 * import { ChatContainer } from '@/components/Joule';
 * 
 * <ChatContainer
 *   title="New Conversation"
 *   initialMessages={[
 *     { type: 'user', message: 'Hello!', timestamp: '8:00 AM' }
 *   ]}
 *   onSendMessage={(message) => console.log('Sent:', message)}
 * />
 * ```
 */

interface ChatMessage {
  id: string;
  type: 'user' | 'assistant';
  message: string;
  timestamp?: string;
}

interface ChatContainerProps {
  title?: string;
  initialMessages?: ChatMessage[];
  onSendMessage?: (message: string) => void;
  onMenuClick?: () => void;
  onOverflowClick?: () => void;
  onFullscreenClick?: () => void;
  onDeclineClick?: () => void;
  placeholder?: string;
  showTimestamp?: boolean;
  timestampDate?: string;
  timestampTime?: string;
}

const ChatContainer: React.FC<ChatContainerProps> = ({
  title = "New Conversation",
  initialMessages = [
    {
      id: '1',
      type: 'user',
      message: "I'd like to create a maternity leave request."
    },
    {
      id: '2',
      type: 'assistant',
      message: "Ok, please upload your maternity leave documents first."
    }
  ],
  onSendMessage = () => {},
  onMenuClick = () => {},
  onOverflowClick = () => {},
  onFullscreenClick = () => {},
  onDeclineClick = () => {},
  placeholder = "Message Joule...",
  showTimestamp = true,
  timestampDate = "Today",
  timestampTime = "8:00 AM"
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);

  const handleSendMessage = (message: string) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      message: message
    };
    
    setMessages(prev => [...prev, newMessage]);
    onSendMessage(message);

    // Simulate assistant response after a short delay
    setTimeout(() => {
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        message: "I understand. Let me help you with that request."
      };
      setMessages(prev => [...prev, assistantMessage]);
    }, 1000);
  };

  return (
    <div style={{
      width: '430px',
      height: '742px',
      position: 'relative'
    }}>
      <div style={{
        height: '742px',
        minWidth: '416px',
        left: '0px',
        top: '0px',
        position: 'absolute',
        background: 'white',
        boxShadow: '0px 32px 64px rgba(91, 115, 139, 0.16)',
        borderRadius: '16px',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        display: 'inline-flex'
      }}>
        {/* Header */}
        <NewConversationHeader
          title={title}
          onMenuClick={onMenuClick}
          onOverflowClick={onOverflowClick}
          onFullscreenClick={onFullscreenClick}
          onDeclineClick={onDeclineClick}
        />

        {/* Messages Area */}
        <div style={{
          width: '416px',
          flex: '1 1 0',
          overflow: 'hidden',
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '16px',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: '10px',
          display: 'inline-flex'
        }}>
          <div style={{
            flex: '1 1 0',
            height: '616px',
            maxWidth: '1200px',
            minWidth: '416px',
            paddingTop: '16px',
            paddingBottom: '16px',
            overflow: 'auto',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '16px',
            display: 'inline-flex'
          }}>
            {/* Timestamp */}
            {showTimestamp && (
              <ChatTimestamp 
                date={timestampDate} 
                time={timestampTime} 
              />
            )}

            {/* Messages */}
            {messages.map((message) => (
              <ChatBubble
                key={message.id}
                type={message.type}
                message={message.message}
              />
            ))}
          </div>
        </div>

        {/* Input Area */}
        <div style={{
          width: '100%',
          padding: '16px',
          background: 'white',
          borderBottomLeftRadius: '16px',
          borderBottomRightRadius: '16px'
        }}>
          <MessageInput
            placeholder={placeholder}
            onSend={handleSendMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatContainer; 