"use client";

import React from 'react';

/**
 * ChatBubble - Chat message bubble component for the Joule design system
 * 
 * @description This component renders chat messages with proper styling for both user and assistant messages.
 * Supports different message types and proper bubble positioning.
 * 
 * @usage Use this component for:
 * - User messages (right-aligned, purple background)
 * - Assistant messages (left-aligned, gray background)
 * - Different message types and content
 * 
 * @example
 * ```tsx
 * import { ChatBubble } from '@/components/Joule';
 * 
 * // User message
 * <ChatBubble
 *   type="user"
 *   message="I'd like to create a maternity leave request."
 * />
 * 
 * // Assistant message
 * <ChatBubble
 *   type="assistant"
 *   message="Ok, please upload your maternity leave documents first."
 * />
 * ```
 */

interface ChatBubbleProps {
  type: 'user' | 'assistant';
  message: string;
  maxWidth?: number;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({
  type,
  message,
  maxWidth = 268
}) => {
  const isUser = type === 'user';

  return (
    <div 
      data-mode="Default" 
      data-state="Default" 
      data-type={isUser ? undefined : "Basic text"}
      data-copy-code={isUser ? undefined : "false"}
      style={{
        width: '384px',
        maxWidth: '384px',
        flexDirection: 'column',
        justifyContent: isUser ? 'center' : 'flex-start',
        alignItems: isUser ? 'flex-end' : 'flex-start',
        gap: '10px',
        display: 'flex'
      }}
    >
      <div style={{
        width: isUser ? undefined : '100%',
        maxWidth: isUser ? `${maxWidth}px` : '384px',
        paddingLeft: '16px',
        paddingRight: '16px',
        paddingTop: '8px',
        paddingBottom: '8px',
        background: isUser 
          ? 'var(--sapAssistant_Question_Background, #EAE5FF)' 
          : 'var(--sapAssistant_Answer_Background, #EFF1F2)',
        overflow: 'hidden',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
        borderBottomLeftRadius: isUser ? '8px' : undefined,
        borderBottomRightRadius: isUser ? undefined : '8px',
        outline: isUser 
          ? '1px var(--sapAssistant_Question_BorderColor, #EAE5FF) solid'
          : '1px var(--sapAssistant_Answer_BorderColor, #EFF1F2) solid',
        outlineOffset: '-1px',
        flexDirection: 'column',
        justifyContent: isUser ? 'center' : 'flex-start',
        alignItems: isUser ? 'flex-end' : 'center',
        gap: '10px',
        display: 'flex'
      }}>
        <div style={{
          maxWidth: isUser ? `${maxWidth - 32}px` : undefined,
          alignSelf: isUser ? undefined : 'stretch',
          color: isUser 
            ? 'var(--sapAssistant_Answer_TextColor, #1D2D3E)' 
            : '#223548',
          fontSize: '14px',
          fontFamily: '72',
          fontWeight: '400',
          lineHeight: '21px',
          wordWrap: 'break-word'
        }}>
          {message}
        </div>
      </div>
    </div>
  );
};

export default ChatBubble; 