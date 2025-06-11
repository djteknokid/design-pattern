"use client";

import React, { useState } from 'react';
import { Icon } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/paper-plane.js";

/**
 * MessageInput - Input component with paper-plane send icon for the Joule design system
 * 
 * @description This component provides a message input field with an integrated
 * paper-plane send button. Features placeholder text, focus states, and proper
 * SAP design system styling.
 * 
 * @usage Use this component for:
 * - Chat message input
 * - Command input interfaces
 * - General text input with send functionality
 * 
 * @example
 * ```tsx
 * import { MessageInput } from '@/components/Joule';
 * 
 * <MessageInput
 *   placeholder="Message Joule..."
 *   onSend={(message) => console.log('Send:', message)}
 *   onChange={(value) => console.log('Input changed:', value)}
 * />
 * ```
 */

interface MessageInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSend?: (message: string) => void;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  maxLength?: number;
}

const MessageInput: React.FC<MessageInputProps> = ({
  placeholder = "Message Joule...",
  value = "",
  onChange = () => {},
  onSend = () => {},
  onKeyPress = () => {},
  disabled = false,
  maxLength = 1000
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange(newValue);
  };

  const handleSend = () => {
    if (inputValue.trim() && !disabled) {
      onSend(inputValue.trim());
      setInputValue("");
      onChange("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
    onKeyPress(e);
  };

  return (
    <div style={{
      width: '100%',
      alignSelf: 'stretch', 
      paddingTop: 4, 
      paddingBottom: 4, 
      background: 'white', 
      boxShadow: '0px 4px 8px rgba(27, 144, 255, 0.16)', 
      borderRadius: 4, 
      outline: '2px var(--Input-Standard-sapField_Active_BorderColor, #0064D8) solid', 
      justifyContent: 'center', 
      alignItems: 'flex-end', 
      display: 'flex'
    }}>
      <div style={{
        flex: '1 1 0', 
        paddingTop: 5, 
        paddingBottom: 7, 
        paddingLeft: 8, 
        position: 'relative', 
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        gap: 10, 
        display: 'flex'
      }}>
        <div data-cursor="on" style={{
          width: 1, 
          height: 18, 
          left: 7, 
          top: 3, 
          position: 'absolute'
        }}>
          <div style={{
            width: 1, 
            height: 18, 
            left: 0, 
            top: 0, 
            position: 'absolute', 
            background: '#223548'
          }} />
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          disabled={disabled}
          maxLength={maxLength}
          style={{
            flex: '1 1 0',
            border: 'none',
            outline: 'none',
            background: 'transparent',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
            color: inputValue ? '#223548' : '#556B82',
            fontSize: 14,
            fontFamily: '72',
            fontStyle: inputValue ? 'normal' : 'italic',
            fontWeight: '400',
            wordWrap: 'break-word',
            width: '100%'
          }}
        />
      </div>
      <div style={{
        height: 28, 
        paddingRight: 8, 
        justifyContent: 'flex-end', 
        alignItems: 'center', 
        gap: 4, 
        display: 'flex'
      }}>
        <button
          data-badge="false" 
          data-form-factor="Compact" 
          data-interaction-state={inputValue.trim() && !disabled ? "Regular" : "Disabled"} 
          data-toggled="False" 
          data-type="Primary"
          onClick={handleSend}
          disabled={disabled || !inputValue.trim()}
          style={{
            width: 28, 
            height: 28, 
            minHeight: 26, 
            paddingLeft: 6, 
            paddingRight: 6, 
            opacity: inputValue.trim() && !disabled ? 1 : 0.40, 
            background: 'var(--Button-Emphasized-sapButton_Emphasized_Background, #0070F2)', 
            borderRadius: 24, 
            border: 'none',
            outline: '1px var(--Button-Emphasized-sapButton_Emphasized_BorderColor, #0070F2) solid', 
            outlineOffset: '-1px', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: 6, 
            display: 'flex',
            cursor: inputValue.trim() && !disabled ? 'pointer' : 'not-allowed'
          }}
        >
          <Icon 
            name="paper-plane" 
            style={{ 
              color: 'var(--Button-Emphasized-sapButton_Emphasized_TextColor, white)',
              fontSize: '12px'
            }} 
          />
        </button>
      </div>
    </div>
  );
};

export default MessageInput; 