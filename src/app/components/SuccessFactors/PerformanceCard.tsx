"use client";

import React from 'react';

interface PerformanceCardProps {
  title: string;
  reviewTitle: string;
  dueStatus: string;
  dueDate: string;
  buttonText?: string;
}

const PerformanceCard: React.FC<PerformanceCardProps> = ({
  title,
  reviewTitle,
  dueStatus,
  dueDate,
  buttonText = "Review"
}) => {
  return (
    <div style={{
      alignSelf: 'stretch', 
      padding: 24, 
      flexDirection: 'column', 
      justifyContent: 'space-between', 
      alignItems: 'flex-start', 
      gap: 16,
      display: 'inline-flex'
    }}>
      {/* Header with title and menu */}
      <div style={{
        alignSelf: 'stretch', 
        justifyContent: 'space-between', 
        alignItems: 'flex-start', 
        display: 'inline-flex'
      }}>
        <div style={{
          flex: '1 1 0',
          color: '#1D2D3E', 
          fontSize: 16, 
          fontFamily: '72', 
          fontWeight: 600, 
          wordWrap: 'break-word'
        }}>{title}</div>
        
        {/* Menu dots */}
        <div style={{
          paddingLeft: 8, 
          paddingRight: 8, 
          paddingTop: 5, 
          paddingBottom: 5, 
          background: 'rgba(0, 0, 0, 0)', 
          borderRadius: 8, 
          justifyContent: 'center', 
          alignItems: 'center', 
          gap: 6, 
          display: 'flex'
        }}>
          <div style={{width: 16, height: 16, position: 'relative'}}>
            <div style={{
              width: 16, 
              height: 4, 
              left: 0, 
              top: 6, 
              position: 'absolute', 
              background: '#0064D9'
            }}></div>
          </div>
        </div>
      </div>

      {/* Review details with calendar icon */}
      <div style={{
        alignSelf: 'stretch', 
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        alignItems: 'flex-start', 
        gap: 12, 
        display: 'flex'
      }}>
        <div style={{
          alignSelf: 'stretch', 
          justifyContent: 'flex-start', 
          alignItems: 'center', 
          gap: 12, 
          display: 'inline-flex'
        }}>
          {/* Calendar icon */}
          <div style={{
            width: 32, 
            height: 32, 
            background: '#E3F2FD', 
            borderRadius: 8, 
            justifyContent: 'center', 
            alignItems: 'center', 
            display: 'flex'
          }}>
            <div style={{
              width: 16, 
              height: 16, 
              background: '#0064D9',
              borderRadius: 2
            }}></div>
          </div>
          
          <div style={{
            flex: '1 1 0',
            flexDirection: 'column', 
            justifyContent: 'flex-start', 
            alignItems: 'flex-start', 
            gap: 4, 
            display: 'inline-flex'
          }}>
            <div style={{
              alignSelf: 'stretch',
              color: '#1D2D3E', 
              fontSize: 14, 
              fontFamily: '72', 
              fontWeight: 600, 
              wordWrap: 'break-word'
            }}>{reviewTitle}</div>
            <div style={{
              alignSelf: 'stretch',
              color: '#556B82', 
              fontSize: 14, 
              fontFamily: '72', 
              fontWeight: 400, 
              wordWrap: 'break-word'
            }}>{dueStatus}</div>
          </div>
        </div>
        
        {/* Due date badge */}
        <div style={{
          paddingLeft: 8, 
          paddingRight: 8, 
          paddingTop: 4, 
          paddingBottom: 4, 
          background: '#FFE6E6', 
          borderRadius: 12, 
          justifyContent: 'center', 
          alignItems: 'center', 
          gap: 6, 
          display: 'inline-flex'
        }}>
          <div style={{
            color: '#D32F2F', 
            fontSize: 12, 
            fontFamily: '72', 
            fontWeight: 600, 
            wordWrap: 'break-word'
          }}>{dueDate}</div>
        </div>
      </div>

      {/* Action button */}
      <div style={{
        alignSelf: 'stretch', 
        justifyContent: 'flex-end', 
        alignItems: 'center', 
        display: 'inline-flex'
      }}>
        <div style={{
          paddingLeft: 16, 
          paddingRight: 16, 
          paddingTop: 8, 
          paddingBottom: 8, 
          background: 'var(--Button-Standard-sapButton_Background, white)', 
          borderRadius: 8, 
          outline: '1px var(--Button-Standard-sapButton_BorderColor, #0064D9) solid', 
          outlineOffset: -1, 
          justifyContent: 'center', 
          alignItems: 'center', 
          gap: 6, 
          display: 'flex',
          cursor: 'pointer'
        }}>
          <div style={{
            color: 'var(--Button-Standard-sapButton_TextColor, #0064D9)', 
            fontSize: 14, 
            fontFamily: '72', 
            fontWeight: 600, 
            wordWrap: 'break-word'
          }}>{buttonText}</div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceCard; 