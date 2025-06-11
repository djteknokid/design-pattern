"use client";

import React from 'react';

/**
 * ChatTimestamp - Timestamp separator component for chat conversations
 * 
 * @description This component displays date and time information as a separator between chat messages.
 * Commonly used to show when conversations started or group messages by time periods.
 * 
 * @usage Use this component for:
 * - Date separators in chat conversations
 * - Time indicators for message groups
 * - Session start timestamps
 * 
 * @example
 * ```tsx
 * import { ChatTimestamp } from '@/components/Joule';
 * 
 * <ChatTimestamp 
 *   date="Today" 
 *   time="8:00 AM" 
 * />
 * ```
 */

interface ChatTimestampProps {
  date: string;
  time: string;
}

const ChatTimestamp: React.FC<ChatTimestampProps> = ({
  date,
  time
}) => {
  return (
    <div style={{
      alignSelf: 'stretch',
      height: '20px',
      position: 'relative'
    }}>
      <div style={{
        width: '416px',
        left: '0px',
        top: '0px',
        position: 'absolute',
        textAlign: 'center'
      }}>
        <span style={{
          color: '#8396A8',
          fontSize: '14px',
          fontFamily: '72',
          fontWeight: '700',
          lineHeight: '20px',
          wordWrap: 'break-word'
        }}>
          {date}
        </span>
        <span style={{
          color: '#8396A8',
          fontSize: '14px',
          fontFamily: '72',
          fontWeight: '400',
          lineHeight: '20px',
          wordWrap: 'break-word'
        }}>
          {' '}{time}
        </span>
      </div>
    </div>
  );
};

export default ChatTimestamp; 