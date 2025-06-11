"use client";

import React from 'react';
import { WelcomeScreen } from '../index';

const WelcomeScreenShowcase: React.FC = () => {
  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <h2 style={{
          margin: '0 0 8px 0',
          fontSize: 32,
          fontWeight: '700',
          fontFamily: '72',
          color: '#1B2A3A'
        }}>
          🌟 Welcome Screen
        </h2>
        <p style={{
          margin: 0,
          fontSize: 16,
          color: '#556B82',
          fontFamily: '72'
        }}>
          Complete welcome screen experience with header, onboarding content, and input
        </p>
      </div>

      {/* WelcomeScreen Component Showcase */}
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
            Complete Welcome Screen
          </h3>
          <p style={{
            margin: 0,
            fontSize: 14,
            color: '#556B82',
            fontFamily: '72'
          }}>
            Full welcome screen experience with personalized greeting, onboarding content, and message input
          </p>
        </div>

        {/* Interactive Example */}
        <div style={{
          background: '#f8f9fa',
          borderRadius: 8,
          padding: 24,
          marginBottom: 24,
          display: 'flex',
          justifyContent: 'center'
        }}>
          <WelcomeScreen
            userName="Sarah"
            onMenuClick={() => alert('Navigation menu opened!')}
            onFullscreenClick={() => alert('Fullscreen mode toggled!')}
            onDeclineClick={() => alert('Welcome screen closed!')}
            onSend={(message) => alert(`Welcome message sent: "${message}"`)}
            starterCapabilities={[
              { id: '1', text: 'View my tasks', onClick: () => alert('Navigating to tasks...') },
              { id: '2', text: 'Check calendar', onClick: () => alert('Opening calendar...') },
              { id: '3', text: 'Recent documents', onClick: () => alert('Showing documents...') },
              { id: '4', text: 'Team updates', onClick: () => alert('Loading updates...') }
            ]}
            placeholder="Message Joule..."
          />
        </div>

        {/* Usage Examples */}
        <div>
          <h4 style={{
            margin: '0 0 16px 0',
            fontSize: 16,
            fontWeight: '600',
            fontFamily: '72',
            color: '#1B2A3A'
          }}>
            Usage Examples
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
                Default Welcome
              </h5>
              <div style={{
                transform: 'scale(0.6)',
                transformOrigin: 'top left',
                marginBottom: '-100px'
              }}>
                <WelcomeScreen
                  onSend={(message) => alert(`Default: ${message}`)}
                />
              </div>
            </div>

            {/* Custom User */}
            <div>
              <h5 style={{
                margin: '0 0 8px 0',
                fontSize: 14,
                fontWeight: '600',
                fontFamily: '72',
                color: '#5D36FF'
              }}>
                Personalized
              </h5>
              <div style={{
                transform: 'scale(0.6)',
                transformOrigin: 'top left',
                marginBottom: '-100px'
              }}>
                <WelcomeScreen
                  userName="Alex"
                  starterCapabilities={[
                    { id: '1', text: 'Project updates', onClick: () => {} },
                    { id: '2', text: 'Time tracking', onClick: () => {} },
                    { id: '3', text: 'Reports', onClick: () => {} },
                    { id: '4', text: 'Team chat', onClick: () => {} }
                  ]}
                  onSend={(message) => alert(`Personalized: ${message}`)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features and Guidelines */}
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
          Features & Guidelines
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
              Key Features
            </h4>
            <ul style={{
              margin: 0,
              padding: '0 0 0 16px',
              fontSize: 14,
              color: '#556B82',
              fontFamily: '72'
            }}>
              <li>Reuses existing WelcomeHeader and MessageInput components</li>
              <li>Personalized greeting with user name</li>
              <li>Gradient background with Joule branding</li>
              <li>Interactive starter capability buttons</li>
              <li>Built-in suggestion prompts</li>
              <li>Fully functional message input</li>
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
              <li>First-time user onboarding</li>
              <li>Initial Joule interface load</li>
              <li>Welcome back experiences</li>
              <li>Quick access to common actions</li>
              <li>Guided user engagement</li>
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
              <li><code>userName</code>: Personalized greeting name</li>
              <li><code>onSend</code>: Message input callback</li>
              <li><code>starterCapabilities</code>: Custom action buttons</li>
              <li><code>onMenuClick</code>: Navigation menu handler</li>
              <li><code>placeholder</code>: Input placeholder text</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreenShowcase; 