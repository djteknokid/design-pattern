"use client";

import React, { useState } from 'react';
import { AIChat, WelcomeScreenShowcase, ContentComponentsShowcase, HeadersShowcase, ListsShowcase, QuickRepliesShowcase } from '../components/Joule';

const JouleDesignLibrary: React.FC = () => {
  const [activeSection, setActiveSection] = useState('welcome-screen');
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const navigationItems = [
    { id: 'welcome-screen', label: 'Welcome Screen', icon: '🌟' },
    { id: 'ai-chat', label: 'AI Chat', icon: '🤖' },
    { id: 'headers', label: 'Headers', icon: '📝' },
    { 
      id: 'content-components', 
      label: 'Content Components', 
      icon: '💭',
      isExpandable: true,
      subItems: [
        { id: 'text-messages', label: 'Text Messages', icon: '📝' },
        { id: 'quick-replies', label: 'Quick Replies', icon: '⚡' },
        { id: 'menu-selection', label: 'Menu Selection', icon: '📋' },
        { id: 'object-card', label: 'Object Card', icon: '🃏' },
        { id: 'illustrated-message', label: 'Illustrated Message', icon: '🎨' },
        { id: 'list', label: 'List', icon: '📊' },
        { id: 'carousel', label: 'Carousel', icon: '🎠' },
        { id: 'video', label: 'Video', icon: '🎥' },
        { id: 'media', label: 'Media', icon: '🖼️' },
        { id: 'response-actions', label: 'Response Actions', icon: '⚡' }
      ]
    },
    { id: 'chat', label: 'Chat', icon: '💬' },
    { id: 'navigation', label: 'Navigation', icon: '🧭' },
    { id: 'inputs', label: 'Inputs', icon: '⌨️' }
  ];

  const toggleSection = (sectionId: string) => {
    if (expandedSections.includes(sectionId)) {
      setExpandedSections(expandedSections.filter(id => id !== sectionId));
    } else {
      setExpandedSections([...expandedSections, sectionId]);
    }
  };

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
            <div key={item.id}>
              {/* Main Navigation Item */}
              <div
                onClick={() => {
                  if (item.isExpandable) {
                    toggleSection(item.id);
                  } else {
                    setActiveSection(item.id);
                  }
                }}
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
                  color: activeSection === item.id ? '#5D36FF' : '#556B82',
                  flex: 1
                }}>
                  {item.label}
                </span>
                {item.isExpandable && (
                  <span style={{
                    fontSize: 12,
                    color: '#8396A8',
                    transform: expandedSections.includes(item.id) ? 'rotate(90deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease'
                  }}>
                    ▶
                  </span>
                )}
              </div>

              {/* Sub-menu Items */}
              {item.isExpandable && expandedSections.includes(item.id) && item.subItems && (
                <div style={{
                  background: 'rgba(93, 54, 255, 0.02)',
                  borderLeft: '1px solid rgba(93, 54, 255, 0.1)',
                  marginLeft: 24
                }}>
                  {item.subItems.map((subItem) => (
                    <div
                      key={subItem.id}
                      onClick={() => setActiveSection(subItem.id)}
                      style={{
                        padding: '8px 24px',
                        cursor: 'pointer',
                        borderLeft: activeSection === subItem.id ? '3px solid #5D36FF' : '3px solid transparent',
                        background: activeSection === subItem.id ? 'rgba(93, 54, 255, 0.08)' : 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                        transition: 'all 0.2s ease',
                        fontFamily: '72'
                      }}
                    >
                      <span style={{ fontSize: 16 }}>{subItem.icon}</span>
                      <span style={{
                        fontSize: 13,
                        fontWeight: activeSection === subItem.id ? '600' : '400',
                        color: activeSection === subItem.id ? '#5D36FF' : '#556B82'
                      }}>
                        {subItem.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
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
        {/* Welcome Screen Section */}
        {activeSection === 'welcome-screen' && <WelcomeScreenShowcase />}

        {/* AI Chat Section */}
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

        {/* Content Components Subsections */}
        {activeSection === 'text-messages' && <ContentComponentsShowcase />}

        {activeSection === 'list' && <ListsShowcase />}

        {activeSection === 'quick-replies' && <QuickRepliesShowcase />}

        {activeSection === 'menu-selection' && (
          <div>
            <h2 style={{
              margin: '0 0 16px 0',
              fontSize: 32,
              fontWeight: '700',
              fontFamily: '72',
              color: '#1B2A3A'
            }}>
              📋 Menu Selection
            </h2>
            <p style={{
              fontSize: 16,
              color: '#556B82',
              fontFamily: '72'
            }}>
              Menu selection components for user choices - coming soon...
            </p>
          </div>
        )}

        {activeSection === 'object-card' && (
          <div>
            <h2 style={{
              margin: '0 0 16px 0',
              fontSize: 32,
              fontWeight: '700',
              fontFamily: '72',
              color: '#1B2A3A'
            }}>
              🃏 Object Card
            </h2>
            <p style={{
              fontSize: 16,
              color: '#556B82',
              fontFamily: '72'
            }}>
              Object card components for displaying structured data - coming soon...
            </p>
          </div>
        )}

        {activeSection === 'illustrated-message' && (
          <div>
            <h2 style={{
              margin: '0 0 16px 0',
              fontSize: 32,
              fontWeight: '700',
              fontFamily: '72',
              color: '#1B2A3A'
            }}>
              🎨 Illustrated Message
            </h2>
            <p style={{
              fontSize: 16,
              color: '#556B82',
              fontFamily: '72'
            }}>
              Illustrated message components with graphics and visuals - coming soon...
            </p>
          </div>
        )}

        {activeSection === 'carousel' && (
          <div>
            <h2 style={{
              margin: '0 0 16px 0',
              fontSize: 32,
              fontWeight: '700',
              fontFamily: '72',
              color: '#1B2A3A'
            }}>
              🎠 Carousel
            </h2>
            <p style={{
              fontSize: 16,
              color: '#556B82',
              fontFamily: '72'
            }}>
              Carousel components for scrollable content - coming soon...
            </p>
          </div>
        )}

        {activeSection === 'video' && (
          <div>
            <h2 style={{
              margin: '0 0 16px 0',
              fontSize: 32,
              fontWeight: '700',
              fontFamily: '72',
              color: '#1B2A3A'
            }}>
              🎥 Video
            </h2>
            <p style={{
              fontSize: 16,
              color: '#556B82',
              fontFamily: '72'
            }}>
              Video components for multimedia content - coming soon...
            </p>
          </div>
        )}

        {activeSection === 'media' && (
          <div>
            <h2 style={{
              margin: '0 0 16px 0',
              fontSize: 32,
              fontWeight: '700',
              fontFamily: '72',
              color: '#1B2A3A'
            }}>
              🖼️ Media
            </h2>
            <p style={{
              fontSize: 16,
              color: '#556B82',
              fontFamily: '72'
            }}>
              Media components for images and multimedia - coming soon...
            </p>
          </div>
        )}

        {activeSection === 'response-actions' && (
          <div>
            <h2 style={{
              margin: '0 0 16px 0',
              fontSize: 32,
              fontWeight: '700',
              fontFamily: '72',
              color: '#1B2A3A'
            }}>
              ⚡ Response Actions
            </h2>
            <p style={{
              fontSize: 16,
              color: '#556B82',
              fontFamily: '72'
            }}>
              Response action components for user interactions - coming soon...
            </p>
          </div>
        )}

        {/* Headers Section */}
        {activeSection === 'headers' && <HeadersShowcase />}

        {/* Other main sections */}
        {activeSection === 'chat' && (
          <div>
            <h2 style={{
              margin: '0 0 16px 0',
              fontSize: 32,
              fontWeight: '700',
              fontFamily: '72',
              color: '#1B2A3A'
            }}>
              💬 Chat Components
            </h2>
            <p style={{
              fontSize: 16,
              color: '#556B82',
              fontFamily: '72'
            }}>
              Chat components showcase coming soon...
            </p>
          </div>
        )}

        {activeSection === 'navigation' && (
          <div>
            <h2 style={{
              margin: '0 0 16px 0',
              fontSize: 32,
              fontWeight: '700',
              fontFamily: '72',
              color: '#1B2A3A'
            }}>
              🧭 Navigation
            </h2>
            <p style={{
              fontSize: 16,
              color: '#556B82',
              fontFamily: '72'
            }}>
              Navigation components showcase coming soon...
            </p>
          </div>
        )}

        {activeSection === 'inputs' && (
          <div>
            <h2 style={{
              margin: '0 0 16px 0',
              fontSize: 32,
              fontWeight: '700',
              fontFamily: '72',
              color: '#1B2A3A'
            }}>
              ⌨️ Input Components
            </h2>
            <p style={{
              fontSize: 16,
              color: '#556B82',
              fontFamily: '72'
            }}>
              Input components showcase coming soon...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JouleDesignLibrary; 