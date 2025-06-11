"use client";

import React, { useState } from 'react';

/**
 * ChatInput - Message input component for chat conversations
 * 
 * @description This component provides a text input field with send button for chat messages.
 * Features focus states, placeholder text, and send functionality with proper styling.
 * 
 * @usage Use this component for:
 * - Message input in chat interfaces
 * - Text input with send functionality
 * - Interactive chat conversation input
 * 
 * @example
 * ```tsx
 * import { ChatInput } from '@/components/Joule';
 * 
 * <ChatInput
 *   placeholder="Message Joule..."
 *   onSend={(message) => console.log('Sending:', message)}
 *   disabled={false}
 * />
 * ```
 */

interface ChatInputProps {
  placeholder?: string;
  onSend?: (message: string) => void;
  disabled?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({
  placeholder = "Message Joule...",
  onSend = () => {},
  disabled = false,
  value: controlledValue,
  onChange
}) => {
  const [internalValue, setInternalValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;
  const isEmpty = !value || value.trim().length === 0;

  const handleChange = (newValue: string) => {
    if (isControlled) {
      onChange?.(newValue);
    } else {
      setInternalValue(newValue);
    }
  };

  const handleSend = () => {
    if (!isEmpty && !disabled) {
      onSend(value.trim());
      if (!isControlled) {
        setInternalValue('');
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div style={{
      alignSelf: 'stretch',
      height: '107px',
      minWidth: '416px',
      paddingTop: '16px',
      paddingBottom: '12px',
      paddingLeft: '8px',
      paddingRight: '6px',
      justifyContent: 'center',
      alignItems: 'flex-end',
      display: 'inline-flex'
    }}>
      <div 
        data-attachment="False" 
        data-mode="Default" 
        data-multi-line-text="False" 
        data-state="default (regular)" 
        style={{
          width: '416px',
          maxWidth: '800px',
          minWidth: '416px',
          maxHeight: '482px',
          paddingTop: '16px',
          paddingBottom: '12px',
          paddingLeft: '16px',
          paddingRight: '16px',
          justifyContent: 'center',
          alignItems: 'flex-end',
          display: 'flex'
        }}
      >
        <div style={{
          flex: '1 1 0',
          paddingTop: '4px',
          paddingBottom: '4px',
          background: 'white',
          boxShadow: isFocused ? '0px 4px 8px rgba(27, 144, 255, 0.16)' : '0px 2px 4px rgba(0, 0, 0, 0.1)',
          borderRadius: '4px',
          outline: isFocused ? '2px var(--Input-Standard-sapField_Active_BorderColor, #0064D8) solid' : '1px #D9D9D9 solid',
          justifyContent: 'center',
          alignItems: 'flex-end',
          display: 'flex'
        }}>
          <div style={{
            flex: '1 1 0',
            paddingTop: '5px',
            paddingBottom: '7px',
            paddingLeft: '8px',
            position: 'relative',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '10px',
            display: 'flex'
          }}>
            {/* Cursor indicator when focused and empty */}
            {isFocused && isEmpty && (
              <div 
                data-cursor="on" 
                style={{
                  width: '1px',
                  height: '18px',
                  left: '7px',
                  top: '3px',
                  position: 'absolute'
                }}
              >
                <div style={{
                  width: '1px',
                  height: '18px',
                  left: '0px',
                  top: '0px',
                  position: 'absolute',
                  background: '#223548'
                }} />
              </div>
            )}
            
            <input
              type="text"
              value={value}
              onChange={(e) => handleChange(e.target.value)}
              onKeyPress={handleKeyPress}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder={placeholder}
              disabled={disabled}
              style={{
                flex: '1 1 0',
                border: 'none',
                outline: 'none',
                background: 'transparent',
                color: '#223548',
                fontSize: '14px',
                fontFamily: '72',
                fontWeight: '400',
                fontStyle: isEmpty ? 'italic' : 'normal',
                wordWrap: 'break-word'
              }}
            />
          </div>
          
          <div style={{
            height: '28px',
            paddingRight: '8px',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: '4px',
            display: 'flex'
          }}>
            <button
              onClick={handleSend}
              disabled={isEmpty || disabled}
              data-badge="false" 
              data-form-factor="Compact" 
              data-interaction-state={isEmpty || disabled ? "Disabled" : "Regular"}
              data-toggled="False" 
              data-type="Primary" 
              style={{
                width: '28px',
                height: '28px',
                minHeight: '26px',
                paddingLeft: '6px',
                paddingRight: '6px',
                opacity: isEmpty || disabled ? 0.40 : 1,
                background: 'var(--Button-Emphasized-sapButton_Emphasized_Background, #0070F2)',
                borderRadius: '24px',
                outline: '1px var(--Button-Emphasized-sapButton_Emphasized_BorderColor, #0070F2) solid',
                outlineOffset: '-1px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '6px',
                display: 'flex',
                border: 'none',
                cursor: isEmpty || disabled ? 'not-allowed' : 'pointer'
              }}
            >
              <div style={{
                width: '16px',
                height: '16px',
                position: 'relative'
              }}>
                <div style={{
                  width: '13.99px',
                  height: '14px',
                  left: '1px',
                  top: '1px',
                  position: 'absolute',
                  background: 'var(--Button-Emphasized-sapButton_Emphasized_TextColor, white)'
                }} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInput; 