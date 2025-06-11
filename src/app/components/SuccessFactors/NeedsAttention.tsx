"use client";

import React, { useState } from 'react';
import ApprovalCard from './ApprovalCard';
import LearningCard from './LearningCard';
import PerformanceCard from './PerformanceCard';

const NeedsAttention: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const mockCards = [
    {
      type: 'approval',
      data: {
        title: "PTO Leave",
        requesterName: "Debra Labadie",
        period: "Jan 10, 25 - Jan 17, 2025",
        type: "Annual Leave",
        avatarUrl: "https://placehold.co/48x48"
      }
    },
    {
      type: 'learning',
      data: {
        title: "Information Security Overview",
        subtitle: "In Your Learning Assignments",
        courseType: "Online",
        duration: "3.0 Hours"
      }
    },
    {
      type: 'learning',
      data: {
        title: "Compliance Overview",
        subtitle: "In Your Learning Assignments",
        courseType: "Online",
        duration: "1.5 Hours"
      }
    },
    {
      type: 'performance',
      data: {
        title: "Review Your Performance",
        reviewTitle: "2025 Performance Review",
        dueStatus: "Due soon",
        dueDate: "Due June 1, 2025"
      }
    }
  ];

  const renderCard = (card: any, index: number) => {
    const cardStyle = {
      background: 'white',
      borderRadius: 16,
      border: '1px solid #E5E5E5',
      overflow: 'hidden',
      minWidth: '320px',
      maxWidth: '380px'
    };

    switch (card.type) {
      case 'approval':
        return (
          <div key={index} style={cardStyle}>
            <ApprovalCard {...card.data} />
          </div>
        );
      case 'learning':
        return (
          <div key={index} style={cardStyle}>
            <LearningCard {...card.data} />
          </div>
        );
      case 'performance':
        return (
          <div key={index} style={cardStyle}>
            <PerformanceCard {...card.data} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{
      alignSelf: 'stretch', 
      paddingTop: 48, 
      flexDirection: 'column', 
      justifyContent: 'flex-start', 
      alignItems: 'flex-start', 
      gap: 22, 
      display: 'inline-flex'
    }}>
      {/* Header with filters */}
      <div style={{
        alignSelf: 'stretch', 
        paddingLeft: 48, 
        paddingRight: 48, 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        display: 'inline-flex'
      }}>
        <div style={{
          justifyContent: 'flex-start', 
          alignItems: 'center', 
          gap: 16, 
          display: 'flex'
        }}>
          <div style={{
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: 100, 
            display: 'flex'
          }}>
            <div style={{
              justifyContent: 'center', 
              display: 'flex', 
              flexDirection: 'column', 
              color: '#1D2D3E', 
              fontSize: 18, 
              fontFamily: '72', 
              fontWeight: 400, 
              wordWrap: 'break-word'
            }}>Needs Attention</div>
          </div>
        </div>
        
        {/* Filter buttons */}
        <div style={{
          justifyContent: 'flex-start', 
          alignItems: 'center', 
          gap: 8, 
          display: 'flex'
        }}>
          {['All (9)', 'Approvals (2)', 'Feedback (2)'].map((filter) => (
            <div
              key={filter}
              onClick={() => setActiveFilter(filter.split(' ')[0])}
              style={{
                minHeight: 26, 
                paddingLeft: 8, 
                paddingRight: 8, 
                paddingTop: 5, 
                paddingBottom: 5, 
                background: activeFilter === filter.split(' ')[0] ? 'var(--Button-Emphasized-sapButton_Emphasized_Background, #0064D9)' : 'var(--Button-Standard-sapButton_Background, white)', 
                borderRadius: 8, 
                outline: activeFilter === filter.split(' ')[0] ? '1px var(--Button-Emphasized-sapButton_Emphasized_BorderColor, #0064D9) solid' : '1px var(--Button-Standard-sapButton_BorderColor, #BCC3CA) solid', 
                outlineOffset: -1, 
                justifyContent: 'center', 
                alignItems: 'center', 
                gap: 6, 
                display: 'flex',
                cursor: 'pointer'
              }}
            >
              <div style={{
                color: activeFilter === filter.split(' ')[0] ? 'var(--Button-Emphasized-sapButton_Emphasized_TextColor, white)' : 'var(--Button-Standard-sapButton_TextColor, #0064D9)', 
                fontSize: 14, 
                fontFamily: '72', 
                fontWeight: 600, 
                wordWrap: 'break-word'
              }}>{filter}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Cards section */}
      <div style={{
        alignSelf: 'stretch',
        paddingLeft: 48,
        paddingRight: 48
      }}>
        {/* Horizontal scrolling container */}
        <div style={{
          display: 'flex',
          gap: 16,
          overflowX: 'auto',
          paddingBottom: 8,
          scrollbarWidth: 'thin'
        }}>
          {mockCards.map((card, index) => renderCard(card, index))}
        </div>
      </div>
    </div>
  );
};

export default NeedsAttention; 