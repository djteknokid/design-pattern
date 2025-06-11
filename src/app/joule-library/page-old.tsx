"use client";

import React, { useState } from 'react';
import { 
  AIChat,
  WelcomeHeader, 
  NewConversationHeader, 
  JouleList, 
  JouleDetailView, 
  JouleContextualList,
  ChatBubble, 
  ChatTimestamp, 
  ChatContainer, 
  NavigationSidebar, 
  MessageInput
} from '../components/Joule';
import { JouleHeader, GoBackHeader } from '@/app/components/Joule/Headers';
import { ChatInput } from '@/app/components/Joule/Chat';

// Showcase Components
import WelcomeScreenShowcase from '../components/Joule/Showcases/WelcomeScreenShowcase';
import ContentComponentsShowcase from '../components/Joule/Showcases/ContentComponentsShowcase';

const ChatContainerWithNavigation: React.FC = () => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  const handleMenuClick = () => {
    setIsNavigationOpen(!isNavigationOpen);
  };

  const handleCloseNavigation = () => {
    setIsNavigationOpen(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Navigation Sidebar Overlay within Chat */}
      {isNavigationOpen && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 10,
          display: 'flex'
        }}>
          {/* Backdrop */}
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.3)',
              backdropFilter: 'blur(2px)'
            }}
            onClick={handleCloseNavigation}
          />
          
          {/* Navigation Sidebar */}
          <NavigationSidebar
            activeConversations={[
              { id: '1', title: 'Project Planning Discussion', isSelected: true },
              { id: '2', title: 'Budget Review Meeting' },
              { id: '3', title: 'Team Performance Analysis' }
            ]}
            expiredConversations={[
              { id: '4', title: 'Last Week Sprint Review' },
              { id: '5', title: 'Q3 Goals Discussion' }
            ]}
            activeCount={3}
            activeTotal={10}
            onNewConversation={() => {
              alert('Starting new conversation!');
              handleCloseNavigation();
            }}
            onConversationClick={(id) => {
              alert(`Opening conversation: ${id}`);
              handleCloseNavigation();
            }}
            onMenuClick={handleMenuClick}
            onSettingsClick={() => {
              alert('Opening settings!');
              handleCloseNavigation();
            }}
            onAINoticeClick={() => {
              alert('Showing AI notice!');
              handleCloseNavigation();
            }}
            isExpanded={isNavigationOpen}
          />
        </div>
      )}

      {/* Chat Container */}
      <ChatContainer
        title="New Conversation"
        initialMessages={[
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
        ]}
        onSendMessage={(message) => alert(`Message sent: ${message}`)}
        onMenuClick={handleMenuClick}
        onOverflowClick={() => alert('More options!')}
        onFullscreenClick={() => alert('Fullscreen mode!')}
        onDeclineClick={() => alert('Conversation ended!')}
        placeholder="Message Joule..."
        showTimestamp={true}
        timestampDate="Today"
        timestampTime="8:00 AM"
      />
    </div>
  );
};

const JouleDesignLibrary: React.FC = () => {
  const [activeSection, setActiveSection] = useState('welcome-screen');

  const navigationItems = [
    { id: 'welcome-screen', label: 'Welcome Screen', icon: '🌟' },
    { id: 'ai-chat', label: 'AI Chat', icon: '🤖' },
    { id: 'headers', label: 'Headers', icon: '📝' },
    { id: 'content-components', label: 'Content Components', icon: '💭' },
    { id: 'lists', label: 'Lists', icon: '📋' },
    { id: 'chat', label: 'Chat', icon: '💬' },
    { id: 'navigation', label: 'Navigation', icon: '🧭' },
    { id: 'inputs', label: 'Inputs', icon: '⌨️' }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      display: 'flex'
    }}>
      {/* Left Navigation */}
      <div style={{
        width: 280,
        background: 'white',
        boxShadow: '2px 0 10px rgba(0,0,0,0.1)',
        padding: '24px 0',
        borderRight: '1px solid #e1e5e9'
      }}>
        {/* Library Title */}
        <div style={{
          padding: '0 24px 32px 24px',
          borderBottom: '1px solid #e1e5e9'
        }}>
          <h1 style={{
            margin: 0,
            fontSize: 24,
            fontWeight: '700',
            fontFamily: '72',
            color: '#5D36FF',
            background: 'linear-gradient(135deg, #5D36FF 0%, #6431FA 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Joule Design Library
          </h1>
          <p style={{
            margin: '8px 0 0 0',
            fontSize: 14,
            color: '#8396A8',
            fontFamily: '72'
          }}>
            SAP AI Assistant Components
          </p>
        </div>

        {/* Navigation Items */}
        <nav style={{ padding: '24px 0' }}>
          {navigationItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              style={{
                padding: '12px 24px',
                cursor: 'pointer',
                borderLeft: activeSection === item.id ? '3px solid #5D36FF' : '3px solid transparent',
                background: activeSection === item.id ? 'rgba(93, 54, 255, 0.08)' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                transition: 'all 0.2s ease',
                fontFamily: '72'
              }}
            >
              <span style={{ fontSize: 18 }}>{item.icon}</span>
              <span style={{
                fontSize: 14,
                fontWeight: activeSection === item.id ? '600' : '400',
                color: activeSection === item.id ? '#5D36FF' : '#556B82'
              }}>
                {item.label}
              </span>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div style={{
        flex: 1,
        padding: '32px',
        overflow: 'auto',
        position: 'relative'
      }}>
        {/* Live Demo Section */}
        {activeSection === 'demo' && (
          <div style={{ position: 'relative' }}>
            <ChatContainerWithNavigation />
          </div>
        )}

        {/* Build Your Own Section */}
        {activeSection === 'build' && (
          <div style={{
            position: 'fixed',
            bottom: 0,
            left: '280px', // Account for left navigation width
            right: 0,
            padding: '20px 32px',
            background: 'white',
            borderTop: '1px solid #e1e5e9',
            boxShadow: '0 -4px 12px rgba(0,0,0,0.1)'
          }}>
            <div style={{
              width: '100%',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              {/* Input Area */}
              <div style={{
                display: 'flex',
                gap: 12,
                alignItems: 'flex-end'
              }}>
                <div style={{
                  flex: 1,
                  position: 'relative'
                }}>
                  <textarea
                    placeholder="Describe the Joule component you want to build..."
                    style={{
                      width: '100%',
                      height: '60px',
                      padding: '12px 16px',
                      border: '2px solid #e1e5e9',
                      borderRadius: 12,
                      fontSize: 14,
                      fontFamily: '72',
                      color: '#1B2A3A',
                      background: 'white',
                      outline: 'none',
                      resize: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#5D36FF';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e1e5e9';
                    }}
                  />
                </div>
                <button
                  onClick={() => alert('AI component generation coming soon! This will connect to ChatGPT API.')}
                  style={{
                    height: '60px',
                    padding: '0 24px',
                    background: 'linear-gradient(135deg, #5D36FF 0%, #9A2BF2 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: 12,
                    fontSize: 14,
                    fontWeight: '600',
                    fontFamily: '72',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    transition: 'transform 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    (e.target as HTMLButtonElement).style.transform = 'translateY(-1px)';
                  }}
                  onMouseOut={(e) => {
                    (e.target as HTMLButtonElement).style.transform = 'translateY(0)';
                  }}
                >
                  <span>Generate</span>
                  <span style={{ fontSize: 16 }}>✨</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Welcome Screen Section */}
        {activeSection === 'welcome-screen' && (
          <WelcomeScreenShowcase />
        )}

        {/* AIChat Section */}
        {activeSection === 'ai-chat' && (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '80vh'
          }}>
            <AIChat
              title="Joule AI Assistant"
              placeholder="Ask me anything about your data..."
              onMenuClick={() => alert('Menu clicked')}
              onFullscreenClick={() => alert('Fullscreen clicked')}
              onDeclineClick={() => alert('Decline clicked')}
            />
          </div>
        )}

        {/* Headers Section */}
        {activeSection === 'headers' && (
          <div>
            <div style={{ marginBottom: 32 }}>
              <h2 style={{
                margin: '0 0 8px 0',
                fontSize: 32,
                fontWeight: '700',
                fontFamily: '72',
                color: '#1B2A3A'
              }}>
                Headers
              </h2>
              <p style={{
                margin: 0,
                fontSize: 16,
                color: '#556B82',
                fontFamily: '72'
              }}>
                Collection of header components for different Joule interface states
              </p>
            </div>

            {/* Header Examples */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
              
              {/* Welcome Header */}
              <div style={{
                background: 'white',
                borderRadius: 12,
                padding: 24,
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
              }}>
                <div style={{ marginBottom: 16 }}>
                  <h3 style={{
                    margin: '0 0 4px 0',
                    fontSize: 18,
                    fontWeight: '600',
                    fontFamily: '72',
                    color: '#1B2A3A'
                  }}>
                    Welcome Header
                  </h3>
                  <p style={{
                    margin: 0,
                    fontSize: 14,
                    color: '#556B82',
                    fontFamily: '72'
                  }}>
                    Welcome screen header when first starting Joule
                  </p>
                </div>
                <div style={{
                  background: '#f8f9fa',
                  borderRadius: 8,
                  padding: 16,
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <WelcomeHeader 
                    title="Joule"
                    onMenuClick={() => {
                      alert('Opening navigation!');
                    }}
                    onFullscreenClick={() => console.log('Fullscreen clicked')}
                    onDeclineClick={() => console.log('Decline clicked')}
                  />
                </div>
              </div>

              {/* Joule Header */}
              <div style={{
                background: 'white',
                borderRadius: 12,
                padding: 24,
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
              }}>
                <div style={{ marginBottom: 16 }}>
                  <h3 style={{
                    margin: '0 0 4px 0',
                    fontSize: 18,
                    fontWeight: '600',
                    fontFamily: '72',
                    color: '#1B2A3A'
                  }}>
                    Joule Header
                  </h3>
                  <p style={{
                    margin: 0,
                    fontSize: 14,
                    color: '#556B82',
                    fontFamily: '72'
                  }}>
                    Basic header for main Joule interface
                  </p>
                </div>
                <div style={{
                  background: '#f8f9fa',
                  borderRadius: 8,
                  padding: 16,
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <JouleHeader 
                    title="Joule"
                    onMenuClick={() => {
                      alert('Opening navigation!');
                    }}
                  />
                </div>
              </div>

              {/* New Conversation Header */}
              <div style={{
                background: 'white',
                borderRadius: 12,
                padding: 24,
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
              }}>
                <div style={{ marginBottom: 16 }}>
                  <h3 style={{
                    margin: '0 0 4px 0',
                    fontSize: 18,
                    fontWeight: '600',
                    fontFamily: '72',
                    color: '#1B2A3A'
                  }}>
                    New Conversation Header
                  </h3>
                  <p style={{
                    margin: 0,
                    fontSize: 14,
                    color: '#556B82',
                    fontFamily: '72'
                  }}>
                    Full-featured header for conversation interface with all action buttons
                  </p>
                </div>
                <div style={{
                  background: '#f8f9fa',
                  borderRadius: 8,
                  padding: 16,
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <NewConversationHeader 
                    title="New Conversation"
                    onMenuClick={() => {
                      alert('Opening navigation!');
                    }}
                    onOverflowClick={() => console.log('Overflow clicked')}
                    onFullscreenClick={() => console.log('Fullscreen clicked')}
                    onDeclineClick={() => console.log('Decline clicked')}
                  />
                </div>
              </div>

              {/* Go Back Header */}
              <div style={{
                background: 'white',
                borderRadius: 12,
                padding: 24,
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
              }}>
                <div style={{ marginBottom: 16 }}>
                  <h3 style={{
                    margin: '0 0 4px 0',
                    fontSize: 18,
                    fontWeight: '600',
                    fontFamily: '72',
                    color: '#1B2A3A'
                  }}>
                    Go Back Header
                  </h3>
                  <p style={{
                    margin: 0,
                    fontSize: 14,
                    color: '#556B82',
                    fontFamily: '72'
                  }}>
                    Detail screen header with back navigation and action buttons
                  </p>
                </div>
                <div style={{
                  background: '#f8f9fa',
                  borderRadius: 8,
                  padding: 16,
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <GoBackHeader 
                    onBackClick={() => console.log('Back clicked')}
                    onFullscreenClick={() => console.log('Fullscreen clicked')}
                    onDeclineClick={() => console.log('Decline clicked')}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Messages Section */}
        {activeSection === 'messages' && (
          <div>
            <div style={{ marginBottom: 32 }}>
              <h2 style={{
                margin: '0 0 8px 0',
                fontSize: 32,
                fontWeight: '700',
                fontFamily: '72',
                color: '#1B2A3A'
              }}>
                💭 Message Components
              </h2>
              <p style={{
                margin: 0,
                fontSize: 16,
                color: '#556B82',
                fontFamily: '72'
              }}>
                Rich text message components for displaying formatted content
              </p>
            </div>

            {/* Message Components Examples */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
              
              {/* Markdown Message */}
              <div style={{
                background: 'white',
                borderRadius: 12,
                padding: 24,
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
              }}>
                <div style={{ marginBottom: 16 }}>
                  <h3 style={{
                    margin: '0 0 4px 0',
                    fontSize: 18,
                    fontWeight: '600',
                    fontFamily: '72',
                    color: '#1B2A3A'
                  }}>
                    Markdown Message
                  </h3>
                  <p style={{
                    margin: 0,
                    fontSize: 14,
                    color: '#556B82',
                    fontFamily: '72'
                  }}>
                    Rich text message with markdown-style formatting, headings, and structured content
                  </p>
                </div>
                <div style={{
                  background: '#f8f9fa',
                  borderRadius: 8,
                  padding: 16,
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <ContentComponentsShowcase />
                </div>
              </div>

              {/* Chat Bubble for Comparison */}
              <div style={{
                background: 'white',
                borderRadius: 12,
                padding: 24,
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
              }}>
                <div style={{ marginBottom: 16 }}>
                  <h3 style={{
                    margin: '0 0 4px 0',
                    fontSize: 18,
                    fontWeight: '600',
                    fontFamily: '72',
                    color: '#1B2A3A'
                  }}>
                    Chat Bubble (Basic Text)
                  </h3>
                  <p style={{
                    margin: 0,
                    fontSize: 14,
                    color: '#556B82',
                    fontFamily: '72'
                  }}>
                    Simple text messages without rich formatting
                  </p>
                </div>
                <div style={{
                  background: '#f8f9fa',
                  borderRadius: 8,
                  padding: 16,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                  alignItems: 'center'
                }}>
                  <ChatBubble
                    type="user"
                    message="Can you explain the scientific method?"
                  />
                  <ChatBubble
                    type="assistant"
                    message="The scientific method is a systematic approach to gathering and analyzing evidence to support or refute hypotheses."
                  />
                </div>
              </div>
            </div>

            {/* Usage Guidelines */}
            <div style={{
              background: 'white',
              borderRadius: 12,
              padding: 32,
              marginTop: 32,
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
            }}>
              <h3 style={{
                margin: '0 0 16px 0',
                fontSize: 20,
                fontWeight: '600',
                fontFamily: '72',
                color: '#1B2A3A'
              }}>
                When to Use Each Component
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: 24,
                marginTop: 16
              }}>
                <div>
                  <h4 style={{
                    margin: '0 0 8px 0',
                    fontSize: 16,
                    fontWeight: '600',
                    fontFamily: '72',
                    color: '#5D36FF'
                  }}>
                    📝 Markdown Message
                  </h4>
                  <ul style={{
                    margin: 0,
                    padding: '0 0 0 16px',
                    fontSize: 14,
                    color: '#556B82',
                    fontFamily: '72'
                  }}>
                    <li>Educational content with structure</li>
                    <li>Documentation and help articles</li>
                    <li>AI responses with formatting</li>
                    <li>Content with headings and lists</li>
                    <li>Long-form explanations</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{
                    margin: '0 0 8px 0',
                    fontSize: 16,
                    fontWeight: '600',
                    fontFamily: '72',
                    color: '#5D36FF'
                  }}>
                    💬 Chat Bubble
                  </h4>
                  <ul style={{
                    margin: 0,
                    padding: '0 0 0 16px',
                    fontSize: 14,
                    color: '#556B82',
                    fontFamily: '72'
                  }}>
                    <li>Simple conversational messages</li>
                    <li>Quick questions and answers</li>
                    <li>Status updates and notifications</li>
                    <li>Short responses</li>
                    <li>Real-time chat conversations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Lists Section */}
        {activeSection === 'lists' && (
          <div>
            <div style={{ marginBottom: 32 }}>
              <h2 style={{
                margin: '0 0 8px 0',
                fontSize: 32,
                fontWeight: '700',
                fontFamily: '72',
                color: '#1B2A3A'
              }}>
                Lists
              </h2>
              <p style={{
                margin: 0,
                fontSize: 16,
                color: '#556B82',
                fontFamily: '72'
              }}>
                List components for displaying structured data with actions
              </p>
            </div>

            {/* List Examples */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
              
              {/* Default List */}
              <div style={{
                background: 'white',
                borderRadius: 12,
                padding: 24,
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
              }}>
                <div style={{ marginBottom: 16 }}>
                  <h3 style={{
                    margin: '0 0 4px 0',
                    fontSize: 18,
                    fontWeight: '600',
                    fontFamily: '72',
                    color: '#1B2A3A'
                  }}>
                    Joule List
                  </h3>
                  <p style={{
                    margin: 0,
                    fontSize: 14,
                    color: '#556B82',
                    fontFamily: '72'
                  }}>
                    Standard list component with header, items, and footer actions
                  </p>
                </div>
                <div style={{
                  background: '#f8f9fa',
                  borderRadius: 8,
                  padding: 16,
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <JouleList 
                    headerTitle="Sample List"
                    headerSubtitle="This is a sample subtitle"
                    headerDescription="Sample description for the list"
                    currentCount={3}
                    totalCount={6}
                    onViewMore={() => console.log('View More clicked')}
                    onFooterButton={() => console.log('Footer button clicked')}
                  />
                </div>
              </div>

              {/* Custom List */}
              <div style={{
                background: 'white',
                borderRadius: 12,
                padding: 24,
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
              }}>
                <div style={{ marginBottom: 16 }}>
                  <h3 style={{
                    margin: '0 0 4px 0',
                    fontSize: 18,
                    fontWeight: '600',
                    fontFamily: '72',
                    color: '#1B2A3A'
                  }}>
                    Custom List Example
                  </h3>
                  <p style={{
                    margin: 0,
                    fontSize: 14,
                    color: '#556B82',
                    fontFamily: '72'
                  }}>
                    List with custom data and different status colors
                  </p>
                </div>
                <div style={{
                  background: '#f8f9fa',
                  borderRadius: 8,
                  padding: 16,
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <JouleList 
                    headerTitle="Project Tasks"
                    headerSubtitle="Development Sprint"
                    headerDescription="Current sprint tasks and their status"
                    currentCount={2}
                    totalCount={5}
                    items={[
                      {
                        id: '1',
                        title: 'API Integration',
                        subtitle: 'Backend Team',
                        description: 'Integrate third-party payment API',
                        status: 'In Progress',
                        statusColor: '#FF9800',
                        buttonText: 'View',
                        onButtonClick: () => console.log('API task clicked')
                      },
                      {
                        id: '2',
                        title: 'UI Testing',
                        subtitle: 'QA Team',
                        description: 'Complete user interface testing',
                        status: 'Completed',
                        statusColor: '#4CAF50',
                        buttonText: 'Review',
                        onButtonClick: () => console.log('UI testing clicked')
                      }
                    ]}
                    onViewMore={() => console.log('View all tasks')}
                    onFooterButton={() => console.log('Add new task')}
                    footerButtonText="Add Task"
                    viewMoreText="View All"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contextual Lists Section */}
        {activeSection === 'contextual' && (
          <div>
            <div style={{ marginBottom: 32 }}>
              <h2 style={{
                margin: '0 0 8px 0',
                fontSize: 32,
                fontWeight: '700',
                fontFamily: '72',
                color: '#1B2A3A'
              }}>
                Contextual Lists
              </h2>
              <p style={{
                margin: 0,
                fontSize: 16,
                color: '#556B82',
                fontFamily: '72'
              }}>
                List components for displaying contextual data with actions
              </p>
            </div>

            {/* Contextual List Examples */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
              
              {/* Default Contextual List */}
              <div style={{
                background: 'white',
                borderRadius: 12,
                padding: 24,
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
              }}>
                <div style={{ marginBottom: 16 }}>
                  <h3 style={{
                    margin: '0 0 4px 0',
                    fontSize: 18,
                    fontWeight: '600',
                    fontFamily: '72',
                    color: '#1B2A3A'
                  }}>
                    Joule Contextual List
                  </h3>
                  <p style={{
                    margin: 0,
                    fontSize: 14,
                    color: '#556B82',
                    fontFamily: '72'
                  }}>
                    Standard contextual list component with header, items, and footer actions
                  </p>
                </div>
                <div style={{
                  background: '#f8f9fa',
                  borderRadius: 8,
                  padding: 16,
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <JouleContextualList
                    title="Sample Contextual List"
                    count={6}
                    isExpanded={true}
                    onToggle={(expanded) => console.log('Toggled:', expanded)}
                  />
                </div>
              </div>

              {/* Custom Contextual List */}
              <div style={{
                background: 'white',
                borderRadius: 12,
                padding: 24,
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
              }}>
                <div style={{ marginBottom: 16 }}>
                  <h3 style={{
                    margin: '0 0 4px 0',
                    fontSize: 18,
                    fontWeight: '600',
                    fontFamily: '72',
                    color: '#1B2A3A'
                  }}>
                    Custom Contextual List Example
                  </h3>
                  <p style={{
                    margin: 0,
                    fontSize: 14,
                    color: '#556B82',
                    fontFamily: '72'
                  }}>
                    List with custom data and different status colors
                  </p>
                </div>
                <div style={{
                  background: '#f8f9fa',
                  borderRadius: 8,
                  padding: 16,
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <JouleContextualList
                    title="Project Tasks"
                    count={5}
                    isExpanded={true}
                    items={[
                      {
                        id: '1',
                        title: 'API Integration',
                        description: 'Integrate third-party payment API for Backend Team'
                      },
                      {
                        id: '2',
                        title: 'UI Testing',
                        description: 'Complete user interface testing for QA Team'
                      }
                    ]}
                    onToggle={(expanded) => console.log('Toggled:', expanded)}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Chat Components Section */}
        {activeSection === 'chat' && (
          <div>
            <div style={{ marginBottom: 32 }}>
              <h2 style={{
                margin: '0 0 8px 0',
                fontSize: 32,
                fontWeight: '700',
                fontFamily: '72',
                color: '#1B2A3A'
              }}>
                💬 Chat Components
              </h2>
              <p style={{
                margin: 0,
                fontSize: 16,
                color: '#556B82',
                fontFamily: '72'
              }}>
                Complete chat interface components with bubbles, input, and container
              </p>
            </div>

            {/* Chat Components Examples */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
              
              {/* Complete Chat Container */}
              <div style={{
                background: 'white',
                borderRadius: 12,
                padding: 24,
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
              }}>
                <div style={{ marginBottom: 16 }}>
                  <h3 style={{
                    margin: '0 0 4px 0',
                    fontSize: 18,
                    fontWeight: '600',
                    fontFamily: '72',
                    color: '#1B2A3A'
                  }}>
                    Complete Chat Interface
                  </h3>
                  <p style={{
                    margin: 0,
                    fontSize: 14,
                    color: '#556B82',
                    fontFamily: '72'
                  }}>
                    Full chat interface with header, messages, timestamp, and input
                  </p>
                </div>
                <div style={{
                  background: '#f8f9fa',
                  borderRadius: 8,
                  padding: 16,
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <ChatContainer
                    title="HR Support"
                    initialMessages={[
                      {
                        id: '1',
                        type: 'assistant',
                        message: "Hello! I'm here to help with HR-related questions. What can I assist you with today?"
                      },
                      {
                        id: '2',
                        type: 'user',
                        message: "I need information about the company's remote work policy."
                      },
                      {
                        id: '3',
                        type: 'assistant',
                        message: "I can help you with that. Our remote work policy allows eligible employees to work from home up to 3 days per week."
                      }
                    ]}
                    onSendMessage={(message) => alert(`New message: ${message}`)}
                    onMenuClick={() => {
                      alert('Opening navigation!');
                    }}
                    onOverflowClick={() => alert('More options!')}
                    onFullscreenClick={() => alert('Fullscreen mode!')}
                    onDeclineClick={() => alert('Chat closed!')}
                    placeholder="Ask about HR policies..."
                    timestampDate="Today"
                    timestampTime="9:15 AM"
                  />
                </div>
              </div>

              {/* Individual Components */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: 24
              }}>
                
                {/* Chat Bubbles */}
                <div style={{
                  background: 'white',
                  borderRadius: 12,
                  padding: 24,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                }}>
                  <div style={{ marginBottom: 16 }}>
                    <h3 style={{
                      margin: '0 0 4px 0',
                      fontSize: 18,
                      fontWeight: '600',
                      fontFamily: '72',
                      color: '#1B2A3A'
                    }}>
                      Chat Bubbles
                    </h3>
                    <p style={{
                      margin: 0,
                      fontSize: 14,
                      color: '#556B82',
                      fontFamily: '72'
                    }}>
                      Message bubbles for user and assistant messages
                    </p>
                  </div>
                  <div style={{
                    background: '#f8f9fa',
                    borderRadius: 8,
                    padding: 16,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16,
                    alignItems: 'center'
                  }}>
                    <ChatBubble
                      type="user"
                      message="Can you help me with my task list?"
                    />
                    <ChatBubble
                      type="assistant"
                      message="Of course! I can help you organize and prioritize your tasks. What would you like to work on first?"
                    />
                  </div>
                </div>

                {/* Chat Input */}
                <div style={{
                  background: 'white',
                  borderRadius: 12,
                  padding: 24,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                }}>
                  <div style={{ marginBottom: 16 }}>
                    <h3 style={{
                      margin: '0 0 4px 0',
                      fontSize: 18,
                      fontWeight: '600',
                      fontFamily: '72',
                      color: '#1B2A3A'
                    }}>
                      Chat Input
                    </h3>
                    <p style={{
                      margin: 0,
                      fontSize: 14,
                      color: '#556B82',
                      fontFamily: '72'
                    }}>
                      Message input with send button and focus states
                    </p>
                  </div>
                  <div style={{
                    background: '#f8f9fa',
                    borderRadius: 8,
                    padding: 16,
                    display: 'flex',
                    justifyContent: 'center'
                  }}>
                    <div style={{ width: '100%', maxWidth: '430px' }}>
                      <ChatInput
                        placeholder="Type your message..."
                        onSend={(message) => alert(`Message sent: ${message}`)}
                      />
                    </div>
                  </div>
                </div>

                {/* Chat Timestamp */}
                <div style={{
                  background: 'white',
                  borderRadius: 12,
                  padding: 24,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                }}>
                  <div style={{ marginBottom: 16 }}>
                    <h3 style={{
                      margin: '0 0 4px 0',
                      fontSize: 18,
                      fontWeight: '600',
                      fontFamily: '72',
                      color: '#1B2A3A'
                    }}>
                      Chat Timestamp
                    </h3>
                    <p style={{
                      margin: 0,
                      fontSize: 14,
                      color: '#556B82',
                      fontFamily: '72'
                    }}>
                      Time separators for grouping messages
                    </p>
                  </div>
                  <div style={{
                    background: '#f8f9fa',
                    borderRadius: 8,
                    padding: 16,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16,
                    alignItems: 'center'
                  }}>
                    <ChatTimestamp date="Today" time="8:00 AM" />
                    <ChatTimestamp date="Yesterday" time="3:45 PM" />
                  </div>
                </div>
              </div>
            </div>

            {/* Usage Guidelines */}
            <div style={{
              background: 'white',
              borderRadius: 12,
              padding: 32,
              marginTop: 32,
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
            }}>
              <h3 style={{
                margin: '0 0 16px 0',
                fontSize: 20,
                fontWeight: '600',
                fontFamily: '72',
                color: '#1B2A3A'
              }}>
                Usage Guidelines
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: 24,
                marginTop: 16
              }}>
                <div>
                  <h4 style={{
                    margin: '0 0 8px 0',
                    fontSize: 16,
                    fontWeight: '600',
                    fontFamily: '72',
                    color: '#5D36FF'
                  }}>
                    Chat Bubbles
                  </h4>
                  <ul style={{
                    margin: 0,
                    padding: '0 0 0 16px',
                    fontSize: 14,
                    color: '#556B82',
                    fontFamily: '72'
                  }}>
                    <li>User messages: Right-aligned, purple background</li>
                    <li>Assistant messages: Left-aligned, gray background</li>
                    <li>Configurable max width for responsive design</li>
                    <li>Automatic text wrapping and spacing</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{
                    margin: '0 0 8px 0',
                    fontSize: 16,
                    fontWeight: '600',
                    fontFamily: '72',
                    color: '#5D36FF'
                  }}>
                    Chat Input
                  </h4>
                  <ul style={{
                    margin: 0,
                    padding: '0 0 0 16px',
                    fontSize: 14,
                    color: '#556B82',
                    fontFamily: '72'
                  }}>
                    <li>Focus states with blue border and shadow</li>
                    <li>Send button disabled when empty</li>
                    <li>Enter key to send messages</li>
                    <li>Customizable placeholder text</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Section */}
        {activeSection === 'navigation' && (
          <div>
            <div style={{ marginBottom: 32 }}>
              <h2 style={{
                margin: '0 0 8px 0',
                fontSize: 32,
                fontWeight: '700',
                fontFamily: '72',
                color: '#1B2A3A'
              }}>
                🧭 Navigation Components
              </h2>
              <p style={{
                margin: 0,
                fontSize: 16,
                color: '#556B82',
                fontFamily: '72'
              }}>
                Global navigation sidebar that opens when any hamburger menu is clicked
              </p>
            </div>

            {/* How to Use Navigation */}
            <div style={{
              background: 'white',
              borderRadius: 12,
              padding: 32,
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              marginBottom: 32
            }}>
              <h3 style={{
                margin: '0 0 16px 0',
                fontSize: 20,
                fontWeight: '600',
                fontFamily: '72',
                color: '#1B2A3A'
              }}>
                🎯 Try the Navigation
              </h3>
              <p style={{
                margin: '0 0 24px 0',
                fontSize: 16,
                color: '#556B82',
                fontFamily: '72',
                lineHeight: 1.6
              }}>
                The navigation sidebar is now globally integrated! Click any hamburger menu (☰) button throughout the design library to open the navigation sidebar. You can find hamburger menus in:
              </p>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 16,
                marginBottom: 24
              }}>
                {[
                  { section: 'Live Demo', description: 'Chat containers and Joule lists' },
                  { section: 'Headers', description: 'All header component examples' },
                  { section: 'Chat Components', description: 'ChatContainer examples' }
                ].map((item, index) => (
                  <div key={index} style={{
                    padding: 16,
                    background: 'rgba(93, 54, 255, 0.05)',
                    borderRadius: 8,
                    border: '1px solid rgba(93, 54, 255, 0.1)'
                  }}>
                    <h4 style={{
                      margin: '0 0 8px 0',
                      fontSize: 14,
                      fontWeight: '600',
                      fontFamily: '72',
                      color: '#5D36FF'
                    }}>
                      {item.section}
                    </h4>
                    <p style={{
                      margin: 0,
                      fontSize: 13,
                      color: '#556B82',
                      fontFamily: '72'
                    }}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div style={{
                padding: 16,
                background: '#f8f9fa',
                borderRadius: 8,
                border: '1px solid #e1e5e9'
              }}>
                <p style={{
                  margin: 0,
                  fontSize: 14,
                  color: '#1B2A3A',
                  fontFamily: '72',
                  fontWeight: '600'
                }}>
                  💡 Click any ☰ hamburger menu button to see the navigation sidebar in action!
                </p>
              </div>
            </div>

            {/* Features List */}
            <div style={{
              background: 'white',
              borderRadius: 12,
              padding: 32,
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
            }}>
              <h3 style={{
                margin: '0 0 24px 0',
                fontSize: 20,
                fontWeight: '600',
                fontFamily: '72',
                color: '#1B2A3A'
              }}>
                ✨ Navigation Features
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: 24
              }}>
                {[
                  {
                    title: "Global Integration",
                    description: "All hamburger menus throughout the library open the same navigation sidebar",
                    icon: "🌐"
                  },
                  {
                    title: "Conversation Management",
                    description: "Active (5/15) and expired conversation lists with expandable sections",
                    icon: "💬"
                  },
                  {
                    title: "Click Outside to Close",
                    description: "Sidebar closes when clicking on the backdrop or completing actions",
                    icon: "👆"
                  },
                  {
                    title: "Backdrop Blur",
                    description: "Semi-transparent backdrop with blur effect for focus",
                    icon: "🌫️"
                  },
                  {
                    title: "Interactive Elements",
                    description: "New conversation, settings, AI notice, and conversation selection",
                    icon: "🎯"
                  },
                  {
                    title: "Collapsible Sections",
                    description: "Expand/collapse active and expired conversation groups independently",
                    icon: "📁"
                  }
                ].map((feature, index) => (
                  <div key={index}>
                    <h4 style={{
                      margin: '0 0 8px 0',
                      fontSize: 16,
                      fontWeight: '600',
                      fontFamily: '72',
                      color: '#5D36FF'
                    }}>
                      {feature.icon} {feature.title}
                    </h4>
                    <p style={{
                      margin: 0,
                      fontSize: 14,
                      color: '#556B82',
                      fontFamily: '72',
                      lineHeight: 1.4
                    }}>
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Detail Views Section */}
        {activeSection === 'details' && (
          <div>
            <div style={{ marginBottom: 32 }}>
              <h2 style={{
                margin: '0 0 8px 0',
                fontSize: 32,
                fontWeight: '700',
                fontFamily: '72',
                color: '#1B2A3A'
              }}>
                🔍 Detail Views
              </h2>
              <p style={{
                margin: 0,
                fontSize: 16,
                color: '#556B82',
                fontFamily: '72'
              }}>
                Comprehensive detail view components for displaying item information
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
              gap: 24
            }}>
              {/* Task Detail Example */}
              <div style={{
                background: 'white',
                borderRadius: 12,
                padding: 24,
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
              }}>
                <div style={{ marginBottom: 16 }}>
                  <h3 style={{
                    margin: '0 0 4px 0',
                    fontSize: 18,
                    fontWeight: '600',
                    fontFamily: '72',
                    color: '#1B2A3A'
                  }}>
                    Task Detail View
                  </h3>
                  <p style={{
                    margin: 0,
                    fontSize: 14,
                    color: '#556B82',
                    fontFamily: '72'
                  }}>
                    Detailed view for task items with due dates, priorities, and actions
                  </p>
                </div>
                <div style={{
                  background: '#f8f9fa',
                  borderRadius: 8,
                  padding: 16,
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <JouleDetailView
                    title="Review Budget Report"
                    subtitle="Finance Team"
                    description="Q4 budget analysis needs your approval"
                    status="Urgent"
                    statusColor="#FF4444"
                    sectionTitle="Task Details"
                    fields={[
                      { label: "Due Date", content: "March 15, 2024" },
                      { label: "Priority", content: "High" },
                      { label: "Assigned By", content: "John Smith" },
                      { label: "Description", content: "Please review the Q4 budget analysis for approval before the deadline." }
                    ]}
                    actions={[
                      { label: "Approve", onClick: () => alert('Task approved!') },
                      { label: "Request Changes", onClick: () => alert('Changes requested!') }
                    ]}
                    onBack={() => alert('Back to task list')}
                    onFullscreen={() => alert('Fullscreen view')}
                    onClose={() => alert('Close detail view')}
                  />
                </div>
              </div>

              {/* Project Detail Example */}
              <div style={{
                background: 'white',
                borderRadius: 12,
                padding: 24,
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
              }}>
                <div style={{ marginBottom: 16 }}>
                  <h3 style={{
                    margin: '0 0 4px 0',
                    fontSize: 18,
                    fontWeight: '600',
                    fontFamily: '72',
                    color: '#1B2A3A'
                  }}>
                    Project Detail View
                  </h3>
                  <p style={{
                    margin: 0,
                    fontSize: 14,
                    color: '#556B82',
                    fontFamily: '72'
                  }}>
                    Comprehensive project information with timelines and team details
                  </p>
                </div>
                <div style={{
                  background: '#f8f9fa',
                  borderRadius: 8,
                  padding: 16,
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <JouleDetailView
                    title="Website Redesign"
                    subtitle="Design Team"
                    description="Modernize company website with new branding"
                    status="On Track"
                    statusColor="#256F3A"
                    sectionTitle="Project Information"
                    fields={[
                      { label: "Project Manager", content: "Sarah Wilson" },
                      { label: "Start Date", content: "January 10, 2024" },
                      { label: "Expected Completion", content: "April 30, 2024" },
                      { label: "Budget", content: "$45,000" },
                      { label: "Team Size", content: "9 members" }
                    ]}
                    actions={[
                      { label: "View Progress", onClick: () => alert('Progress dashboard opened!') },
                      { label: "Edit Details", onClick: () => alert('Edit mode activated!') }
                    ]}
                    onBack={() => alert('Back to project list')}
                    onFullscreen={() => alert('Fullscreen project view')}
                    onClose={() => alert('Close project detail')}
                  />
                </div>
              </div>

              {/* Notification Detail Example */}
              <div style={{
                background: 'white',
                borderRadius: 12,
                padding: 24,
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
              }}>
                <div style={{ marginBottom: 16 }}>
                  <h3 style={{
                    margin: '0 0 4px 0',
                    fontSize: 18,
                    fontWeight: '600',
                    fontFamily: '72',
                    color: '#1B2A3A'
                  }}>
                    Notification Detail View
                  </h3>
                  <p style={{
                    margin: 0,
                    fontSize: 14,
                    color: '#556B82',
                    fontFamily: '72'
                  }}>
                    System notifications with priority indicators and actions
                  </p>
                </div>
                <div style={{
                  background: '#f8f9fa',
                  borderRadius: 8,
                  padding: 16,
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <JouleDetailView
                    title="System Update Available"
                    subtitle="IT Department"
                    description="New security patches ready for installation"
                    status="High Priority"
                    statusColor="#FF4444"
                    sectionTitle="Update Information"
                    fields={[
                      { label: "Update Type", content: "Security Patch" },
                      { label: "Release Date", content: "March 12, 2024" },
                      { label: "Affected Systems", content: "All workstations" },
                      { label: "Downtime", content: "30 minutes" }
                    ]}
                    actions={[
                      { label: "Schedule Update", onClick: () => alert('Update scheduled!') },
                      { label: "Learn More", onClick: () => alert('More information!') }
                    ]}
                    onBack={() => alert('Back to notifications')}
                    onFullscreen={() => alert('Fullscreen notification')}
                    onClose={() => alert('Close notification')}
                  />
                </div>
              </div>

              {/* User Profile Detail Example */}
              <div style={{
                background: 'white',
                borderRadius: 12,
                padding: 24,
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
              }}>
                <div style={{ marginBottom: 16 }}>
                  <h3 style={{
                    margin: '0 0 4px 0',
                    fontSize: 18,
                    fontWeight: '600',
                    fontFamily: '72',
                    color: '#1B2A3A'
                  }}>
                    User Profile Detail View
                  </h3>
                  <p style={{
                    margin: 0,
                    fontSize: 14,
                    color: '#556B82',
                    fontFamily: '72'
                  }}>
                    Employee profiles with comprehensive information and contact options
                  </p>
                </div>
                <div style={{
                  background: '#f8f9fa',
                  borderRadius: 8,
                  padding: 16,
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <JouleDetailView
                    title="John Smith"
                    subtitle="Senior Developer"
                    description="Full-stack developer with 8 years experience"
                    status="Active"
                    statusColor="#256F3A"
                    sectionTitle="Profile Information"
                    fields={[
                      { label: "Employee ID", content: "EMP-2024-0156" },
                      { label: "Department", content: "Engineering" },
                      { label: "Manager", content: "Sarah Johnson" },
                      { label: "Start Date", content: "September 15, 2019" },
                      { label: "Skills", content: "React, Node.js, TypeScript" }
                    ]}
                    actions={[
                      { label: "Send Message", onClick: () => alert('Message sent!') },
                      { label: "View Calendar", onClick: () => alert('Calendar opened!') }
                    ]}
                    onBack={() => alert('Back to team directory')}
                    onFullscreen={() => alert('Fullscreen profile')}
                    onClose={() => alert('Close profile')}
                  />
                </div>
              </div>
            </div>

            {/* Usage Guidelines */}
            <div style={{
              background: 'white',
              borderRadius: 12,
              padding: 32,
              marginTop: 32,
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
            }}>
              <h3 style={{
                margin: '0 0 16px 0',
                fontSize: 20,
                fontWeight: '600',
                fontFamily: '72',
                color: '#1B2A3A'
              }}>
                Usage Guidelines
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: 24,
                marginTop: 16
              }}>
                <div>
                  <h4 style={{
                    margin: '0 0 8px 0',
                    fontSize: 16,
                    fontWeight: '600',
                    fontFamily: '72',
                    color: '#5D36FF'
                  }}>
                    Status Colors
                  </h4>
                  <ul style={{
                    margin: 0,
                    padding: '0 0 0 16px',
                    fontSize: 14,
                    color: '#556B82',
                    fontFamily: '72'
                  }}>
                    <li>Red (#FF4444): Urgent, High Priority, Delayed</li>
                    <li>Orange (#FF9500): In Progress, Warning</li>
                    <li>Green (#256F3A): Complete, Success, On Track</li>
                    <li>Blue (#0064D9): Info, Pending, New</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{
                    margin: '0 0 8px 0',
                    fontSize: 16,
                    fontWeight: '600',
                    fontFamily: '72',
                    color: '#5D36FF'
                  }}>
                    When to Use
                  </h4>
                  <ul style={{
                    margin: 0,
                    padding: '0 0 0 16px',
                    fontSize: 14,
                    color: '#556B82',
                    fontFamily: '72'
                  }}>
                    <li>Task details with assignments and deadlines</li>
                    <li>Project information with timelines</li>
                    <li>System notifications with action items</li>
                    <li>User profiles and contact information</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Placeholder sections for other components */}
        {activeSection === 'buttons' && (
          <div>
            <h2 style={{
              margin: '0 0 16px 0',
              fontSize: 32,
              fontWeight: '700',
              fontFamily: '72',
              color: '#1B2A3A'
            }}>
              Buttons
            </h2>
            <p style={{
              fontSize: 16,
              color: '#556B82',
              fontFamily: '72'
            }}>
              Button components coming soon...
            </p>
          </div>
        )}

        {activeSection === 'inputs' && (
          <div>
            <div style={{ marginBottom: 32 }}>
              <h2 style={{
                margin: '0 0 8px 0',
                fontSize: 32,
                fontWeight: '700',
                fontFamily: '72',
                color: '#1B2A3A'
              }}>
                ⌨️ Input Components
              </h2>
              <p style={{
                margin: 0,
                fontSize: 16,
                color: '#556B82',
                fontFamily: '72'
              }}>
                Interactive input components for chat and message functionality
              </p>
            </div>

            {/* MessageInput Component */}
            <div style={{
              background: 'white',
              borderRadius: 12,
              padding: 32,
              marginBottom: 32,
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
            }}>
              <div style={{ marginBottom: 24 }}>
                <h3 style={{
                  margin: '0 0 4px 0',
                  fontSize: 20,
                  fontWeight: '600',
                  fontFamily: '72',
                  color: '#1B2A3A'
                }}>
                  MessageInput
                </h3>
                <p style={{
                  margin: 0,
                  fontSize: 14,
                  color: '#556B82',
                  fontFamily: '72'
                }}>
                  Input field with integrated paper-plane send button for chat interfaces
                </p>
              </div>

              {/* Interactive Example */}
              <div style={{
                background: '#f8f9fa',
                borderRadius: 8,
                padding: 24,
                marginBottom: 24
              }}>
                <h4 style={{
                  margin: '0 0 16px 0',
                  fontSize: 16,
                  fontWeight: '600',
                  fontFamily: '72',
                  color: '#1B2A3A'
                }}>
                  Interactive Example
                </h4>
                <div style={{
                  maxWidth: 500,
                  margin: '0 auto'
                }}>
                  <MessageInput
                    placeholder="Message Joule..."
                    onSend={(message) => alert(`Message sent: "${message}"`)}
                    onChange={(value) => console.log('Typing:', value)}
                  />
                </div>
              </div>

              {/* Variations */}
              <div>
                <h4 style={{
                  margin: '0 0 16px 0',
                  fontSize: 16,
                  fontWeight: '600',
                  fontFamily: '72',
                  color: '#1B2A3A'
                }}>
                  Variations
                </h4>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                  gap: 24
                }}>
                  {/* Default State */}
                  <div>
                    <h5 style={{
                      margin: '0 0 8px 0',
                      fontSize: 14,
                      fontWeight: '600',
                      fontFamily: '72',
                      color: '#5D36FF'
                    }}>
                      Default
                    </h5>
                    <MessageInput
                      placeholder="Type your message..."
                      onSend={(message) => alert(`Default: ${message}`)}
                    />
                  </div>

                  {/* Disabled State */}
                  <div>
                    <h5 style={{
                      margin: '0 0 8px 0',
                      fontSize: 14,
                      fontWeight: '600',
                      fontFamily: '72',
                      color: '#5D36FF'
                    }}>
                      Disabled
                    </h5>
                    <MessageInput
                      placeholder="Input disabled..."
                      disabled={true}
                      onSend={(message) => alert(`Disabled: ${message}`)}
                    />
                  </div>

                  {/* Custom Placeholder */}
                  <div>
                    <h5 style={{
                      margin: '0 0 8px 0',
                      fontSize: 14,
                      fontWeight: '600',
                      fontFamily: '72',
                      color: '#5D36FF'
                    }}>
                      Custom Placeholder
                    </h5>
                    <MessageInput
                      placeholder="Ask me anything about your data..."
                      onSend={(message) => alert(`Custom: ${message}`)}
                    />
                  </div>

                  {/* With Character Limit */}
                  <div>
                    <h5 style={{
                      margin: '0 0 8px 0',
                      fontSize: 14,
                      fontWeight: '600',
                      fontFamily: '72',
                      color: '#5D36FF'
                    }}>
                      Character Limit (50)
                    </h5>
                    <MessageInput
                      placeholder="Max 50 characters..."
                      maxLength={50}
                      onSend={(message) => alert(`Limited: ${message}`)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Usage Guidelines */}
            <div style={{
              background: 'white',
              borderRadius: 12,
              padding: 32,
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
            }}>
              <h3 style={{
                margin: '0 0 16px 0',
                fontSize: 20,
                fontWeight: '600',
                fontFamily: '72',
                color: '#1B2A3A'
              }}>
                Usage Guidelines
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 24,
                marginTop: 16
              }}>
                <div>
                  <h4 style={{
                    margin: '0 0 8px 0',
                    fontSize: 16,
                    fontWeight: '600',
                    fontFamily: '72',
                    color: '#5D36FF'
                  }}>
                    Features
                  </h4>
                  <ul style={{
                    margin: 0,
                    padding: '0 0 0 16px',
                    fontSize: 14,
                    color: '#556B82',
                    fontFamily: '72'
                  }}>
                    <li>Paper-plane send icon that activates when text is entered</li>
                    <li>Enter key support for quick sending</li>
                    <li>Auto-clear input after sending</li>
                    <li>Focus states with blue border highlight</li>
                    <li>Disabled states with visual feedback</li>
                    <li>Character limit support</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{
                    margin: '0 0 8px 0',
                    fontSize: 16,
                    fontWeight: '600',
                    fontFamily: '72',
                    color: '#5D36FF'
                  }}>
                    When to Use
                  </h4>
                  <ul style={{
                    margin: 0,
                    padding: '0 0 0 16px',
                    fontSize: 14,
                    color: '#556B82',
                    fontFamily: '72'
                  }}>
                    <li>Chat interfaces and messaging</li>
                    <li>Command input for AI assistants</li>
                    <li>Quick text submissions</li>
                    <li>Search input with instant send</li>
                    <li>Comment and feedback forms</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{
                    margin: '0 0 8px 0',
                    fontSize: 16,
                    fontWeight: '600',
                    fontFamily: '72',
                    color: '#5D36FF'
                  }}>
                    Props
                  </h4>
                  <ul style={{
                    margin: 0,
                    padding: '0 0 0 16px',
                    fontSize: 14,
                    color: '#556B82',
                    fontFamily: '72'
                  }}>
                    <li><code>placeholder</code>: Input placeholder text</li>
                    <li><code>onSend</code>: Callback when message is sent</li>
                    <li><code>onChange</code>: Callback on input change</li>
                    <li><code>disabled</code>: Disable input and button</li>
                    <li><code>maxLength</code>: Character limit</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'layouts' && (
          <div>
            <h2 style={{
              margin: '0 0 16px 0',
              fontSize: 32,
              fontWeight: '700',
              fontFamily: '72',
              color: '#1B2A3A'
            }}>
              Layouts
            </h2>
            <p style={{
              fontSize: 16,
              color: '#556B82',
              fontFamily: '72'
            }}>
              Layout components coming soon...
            </p>
          </div>
        )}

        {/* Content Components Section */}
        {activeSection === 'content-components' && (
          <ContentComponentsShowcase />
        )}
      </div>
    </div>
  );
};

export default JouleDesignLibrary; 