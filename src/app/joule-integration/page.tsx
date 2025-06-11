"use client";

import React, { useState } from 'react';
import { 
  JouleHeader, 
  NewConversationHeader, 
  GoBackHeader, 
  WelcomeHeader,
  JouleList,
  JouleDetailView,
  JouleContextualList
} from '@/app/components/Joule';

/**
 * Joule Integration Demo
 * 
 * This page demonstrates how all Joule components work together using different headers.
 * Shows real-world usage scenarios and state management between components.
 */

const JouleIntegrationDemo: React.FC = () => {
  const [currentView, setCurrentView] = useState<'welcome' | 'main' | 'conversation' | 'detail'>('welcome');
  const [selectedItem, setSelectedItem] = useState<any>(null);

  // Sample data for demonstrations
  const taskItems = [
    {
      id: '1',
      title: 'Review Budget Report',
      subtitle: 'Finance Team',
      description: 'Q4 budget analysis needs your approval',
      status: 'Urgent',
      statusColor: '#FF4444',
      buttonText: 'Review',
      onButtonClick: () => {
        setSelectedItem({
          title: 'Review Budget Report',
          subtitle: 'Finance Team',
          description: 'Q4 budget analysis needs your approval',
          status: 'Urgent',
          statusColor: '#FF4444',
          sectionTitle: 'Task Details',
          fields: [
            { label: 'Due Date', content: 'March 15, 2024' },
            { label: 'Priority', content: 'High' },
            { label: 'Assigned By', content: 'John Smith' },
            { label: 'Budget Amount', content: '$125,000' },
            { label: 'Department', content: 'Finance & Operations' }
          ],
          actions: [
            { label: 'Approve', onClick: () => alert('Budget approved!') },
            { label: 'Request Changes', onClick: () => alert('Changes requested!') }
          ]
        });
        setCurrentView('detail');
      }
    },
    {
      id: '2',
      title: 'Team Standup Meeting',
      subtitle: 'Development Team',
      description: 'Daily standup at 10:00 AM',
      status: 'Today',
      statusColor: '#0064D9',
      buttonText: 'Join',
      onButtonClick: () => {
        setSelectedItem({
          title: 'Team Standup Meeting',
          subtitle: 'Development Team',
          description: 'Daily standup at 10:00 AM',
          status: 'Today',
          statusColor: '#0064D9',
          sectionTitle: 'Meeting Details',
          fields: [
            { label: 'Time', content: '10:00 AM - 10:30 AM EST' },
            { label: 'Location', content: 'Conference Room A / Virtual' },
            { label: 'Organizer', content: 'Sarah Wilson' },
            { label: 'Attendees', content: '8 team members' },
            { label: 'Agenda', content: 'Sprint progress, blockers, and planning for next sprint cycle' }
          ],
          actions: [
            { label: 'Join Meeting', onClick: () => alert('Joining meeting...') },
            { label: 'View Agenda', onClick: () => alert('Opening agenda...') }
          ]
        });
        setCurrentView('detail');
      }
    }
  ];

  const contextualItems = [
    {
      id: '1',
      title: '[1] Project Documentation',
      description: 'Complete project documentation including technical specifications, user guides, and API references.',
      onClick: () => alert('Opening project documentation...')
    },
    {
      id: '2',
      title: '[2] Related Tasks',
      description: 'View all tasks related to this project including dependencies and upcoming milestones.',
      onClick: () => alert('Opening related tasks...')
    },
    {
      id: '3',
      title: '[3] Team Resources',
      description: 'Access team communication channels, shared files, and collaboration tools.',
      onClick: () => alert('Opening team resources...')
    }
  ];

  const renderHeader = () => {
    switch (currentView) {
      case 'welcome':
        return (
          <WelcomeHeader
            title="Joule"
            onMenuClick={() => alert('Menu opened')}
            onFullscreenClick={() => alert('Fullscreen toggled')}
            onDeclineClick={() => alert('Chat closed')}
          />
        );
      case 'main':
        return (
          <JouleHeader
            title="Joule Assistant"
            onMenuClick={() => alert('Menu opened')}
          />
        );
      case 'conversation':
        return (
          <NewConversationHeader
            title="New Conversation"
            onMenuClick={() => alert('Menu opened')}
            onOverflowClick={() => alert('More options')}
            onFullscreenClick={() => alert('Fullscreen mode')}
            onDeclineClick={() => alert('Conversation ended')}
          />
        );
      case 'detail':
        return (
          <GoBackHeader
            onBackClick={() => setCurrentView('main')}
            onFullscreenClick={() => alert('Fullscreen view')}
            onDeclineClick={() => setCurrentView('welcome')}
          />
        );
      default:
        return null;
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case 'welcome':
        return (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '400px',
            background: 'white',
            borderRadius: '16px',
            margin: '20px',
            padding: '40px'
          }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '700',
              fontFamily: '72',
              color: '#1D2D3E',
              marginBottom: '16px'
            }}>
              Welcome to Joule
            </h2>
            <p style={{
              fontSize: '16px',
              color: '#556B82',
              fontFamily: '72',
              textAlign: 'center',
              marginBottom: '32px',
              maxWidth: '400px'
            }}>
              Your AI assistant is ready to help you manage tasks, find information, and streamline your workflow.
            </p>
            <button
              onClick={() => setCurrentView('main')}
              style={{
                padding: '12px 24px',
                background: '#5D36FF',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                fontFamily: '72',
                cursor: 'pointer'
              }}
            >
              Get Started
            </button>
          </div>
        );

      case 'main':
        return (
          <div style={{
            display: 'flex',
            gap: '24px',
            padding: '20px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            {/* Main Task List */}
            <JouleList
              headerTitle="My Tasks"
              headerSubtitle="Today's Schedule"
              headerDescription="Your pending tasks and upcoming meetings"
              currentCount={2}
              totalCount={5}
              items={taskItems}
              onViewMore={() => alert('Showing all 5 tasks...')}
              onFooterButton={() => setCurrentView('conversation')}
              footerButtonText="Start New Conversation"
              viewMoreText="View All Tasks"
            />

            {/* Contextual Information */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <JouleContextualList
                title="Quick Access"
                count={3}
                isExpanded={true}
                items={contextualItems}
                onToggle={(expanded) => console.log('Quick access toggled:', expanded)}
                maxDescriptionLines={2}
              />

              <JouleContextualList
                title="Recent Documents"
                count={2}
                isExpanded={false}
                items={[
                  {
                    id: '1',
                    title: 'Q4 Financial Report',
                    description: 'Latest quarterly financial analysis and performance metrics for stakeholder review.',
                    onClick: () => alert('Opening financial report...')
                  },
                  {
                    id: '2',
                    title: 'Project Timeline',
                    description: 'Updated project timeline with milestones, dependencies, and resource allocation.',
                    onClick: () => alert('Opening timeline...')
                  }
                ]}
                onToggle={(expanded) => console.log('Documents toggled:', expanded)}
                maxDescriptionLines={2}
              />
            </div>
          </div>
        );

      case 'conversation':
        return (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '20px'
          }}>
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '32px',
              maxWidth: '600px',
              width: '100%'
            }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                fontFamily: '72',
                color: '#1D2D3E',
                marginBottom: '16px'
              }}>
                New Conversation
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#556B82',
                fontFamily: '72',
                marginBottom: '24px'
              }}>
                Ask me anything about your tasks, schedule, or work processes. I'm here to help!
              </p>
              <div style={{
                background: '#f8f9fa',
                borderRadius: '8px',
                padding: '16px',
                marginBottom: '16px'
              }}>
                <p style={{
                  fontSize: '14px',
                  color: '#1D2D3E',
                  fontFamily: '72',
                  margin: '0'
                }}>
                  <strong>Suggested questions:</strong><br />
                  • "What are my high-priority tasks?"<br />
                  • "Schedule a team meeting for next week"<br />
                  • "Show me the latest budget reports"
                </p>
              </div>
              <button
                onClick={() => setCurrentView('main')}
                style={{
                  padding: '8px 16px',
                  background: 'transparent',
                  color: '#0064D9',
                  border: '1px solid #0064D9',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  fontFamily: '72',
                  cursor: 'pointer'
                }}
              >
                Back to Dashboard
              </button>
            </div>
          </div>
        );

      case 'detail':
        return (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '20px'
          }}>
            {selectedItem && (
              <JouleDetailView
                title={selectedItem.title}
                subtitle={selectedItem.subtitle}
                description={selectedItem.description}
                status={selectedItem.status}
                statusColor={selectedItem.statusColor}
                sectionTitle={selectedItem.sectionTitle}
                fields={selectedItem.fields}
                actions={selectedItem.actions}
                onBack={() => setCurrentView('main')}
                onFullscreen={() => alert('Fullscreen view')}
                onClose={() => setCurrentView('welcome')}
              />
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '20px'
      }}>
        {renderHeader()}
      </div>

      {/* Content */}
      {renderContent()}

      {/* Navigation Info */}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        background: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '12px',
        padding: '16px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        maxWidth: '280px'
      }}>
        <h4 style={{
          margin: '0 0 8px 0',
          fontSize: '14px',
          fontWeight: '600',
          fontFamily: '72',
          color: '#5D36FF'
        }}>
          Current View: {currentView.charAt(0).toUpperCase() + currentView.slice(1)}
        </h4>
        <p style={{
          margin: '0',
          fontSize: '12px',
          color: '#556B82',
          fontFamily: '72',
          lineHeight: '1.4'
        }}>
          Navigate through different states to see how all headers and components work together.
        </p>
      </div>
    </div>
  );
};

export default JouleIntegrationDemo; 