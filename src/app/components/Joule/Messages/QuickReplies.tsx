"use client";

import React from 'react';

/**
 * QuickReplies - Interactive quick reply buttons component
 * 
 * @description This component displays a set of quick reply buttons that users can click
 * instead of typing responses. Arranged in multiple rows with proper spacing and styling.
 * 
 * @usage Use this component for:
 * - Quick response options after AI responses
 * - Guided conversation flows
 * - Common follow-up questions
 * - Action buttons for user interaction
 * 
 * @example
 * ```tsx
 * import { QuickReplies } from '@/components/Joule';
 * 
 * <QuickReplies
 *   replies={[
 *     { id: '1', text: 'Tell me more', onClick: () => console.log('More info') },
 *     { id: '2', text: 'Show examples', onClick: () => console.log('Examples') }
 *   ]}
 * />
 * ```
 */

interface QuickReply {
  id: string;
  text: string;
  onClick?: () => void;
}

interface QuickRepliesProps {
  replies?: QuickReply[];
  maxWidth?: number;
  maxRepliesPerRow?: number;
}

const QuickReplies: React.FC<QuickRepliesProps> = ({
  replies = [
    { id: '1', text: 'Tell me more', onClick: () => console.log('Tell me more clicked') },
    { id: '2', text: 'Show examples', onClick: () => console.log('Show examples clicked') },
    { id: '3', text: 'Explain this', onClick: () => console.log('Explain this clicked') },
    { id: '4', text: 'Next steps', onClick: () => console.log('Next steps clicked') },
    { id: '5', text: 'Related topics', onClick: () => console.log('Related topics clicked') },
    { id: '6', text: 'Best practices', onClick: () => console.log('Best practices clicked') },
    { id: '7', text: 'Common issues', onClick: () => console.log('Common issues clicked') },
    { id: '8', text: 'Advanced features', onClick: () => console.log('Advanced features clicked') },
    { id: '9', text: 'How does this work in practice with real world scenarios?', onClick: () => console.log('Long question clicked') }
  ],
  maxWidth = 385,
  maxRepliesPerRow = 4
}) => {
  
  // Group replies into rows
  const groupRepliesIntoRows = (replies: QuickReply[], maxPerRow: number) => {
    const rows: QuickReply[][] = [];
    for (let i = 0; i < replies.length; i += maxPerRow) {
      rows.push(replies.slice(i, i + maxPerRow));
    }
    return rows;
  };

  const replyRows = groupRepliesIntoRows(replies, maxRepliesPerRow);

  return (
    <div style={{
      width: maxWidth, 
      paddingLeft: 2, 
      paddingRight: 2, 
      paddingTop: 8, 
      paddingBottom: 8, 
      overflow: 'hidden', 
      flexDirection: 'column', 
      justifyContent: 'flex-start', 
      alignItems: 'flex-start', 
      gap: 8, 
      display: 'inline-flex'
    }}>
      {replyRows.map((row, rowIndex) => (
        <div 
          key={rowIndex}
          style={{
            justifyContent: 'flex-start', 
            alignItems: 'flex-start', 
            gap: 8, 
            display: 'inline-flex',
            flexWrap: 'wrap'
          }}
        >
          {row.map((reply) => (
            <button
              key={reply.id}
              onClick={reply.onClick}
              style={{
                paddingLeft: 8, 
                paddingRight: 8, 
                paddingTop: 4, 
                paddingBottom: 4, 
                background: 'white', 
                boxShadow: '0px 4px 8px rgba(27, 144, 255, 0.16)', 
                overflow: 'hidden', 
                borderRadius: 16, 
                justifyContent: 'center', 
                alignItems: 'center', 
                gap: 4, 
                display: 'flex',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                maxWidth: '100%'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0px 6px 12px rgba(27, 144, 255, 0.24)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0px 4px 8px rgba(27, 144, 255, 0.16)';
                e.currentTarget.style.transform = 'translateY(0px)';
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = 'translateY(0px)';
                e.currentTarget.style.boxShadow = '0px 2px 4px rgba(27, 144, 255, 0.12)';
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0px 6px 12px rgba(27, 144, 255, 0.24)';
              }}
            >
              <div style={{
                textAlign: 'center', 
                color: '#0064D9', 
                fontSize: 14, 
                fontFamily: '72', 
                fontWeight: '400', 
                lineHeight: '20px', 
                wordWrap: 'break-word'
              }}>
                {reply.text}
              </div>
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default QuickReplies; 