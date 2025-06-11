"use client";

import React from 'react';
import { WelcomeHeader, JouleHeader, NewConversationHeader, GoBackHeader } from '../index';

const HeadersShowcase: React.FC = () => {
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
          📝 Headers
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
          When to Use Each Header
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
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
              🌟 Welcome Header
            </h4>
            <ul style={{
              margin: 0,
              padding: '0 0 0 16px',
              fontSize: 14,
              color: '#556B82',
              fontFamily: '72'
            }}>
              <li>Initial Joule welcome screen</li>
              <li>First-time user experience</li>
              <li>Onboarding flows</li>
              <li>Getting started interface</li>
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
              🤖 Joule Header
            </h4>
            <ul style={{
              margin: 0,
              padding: '0 0 0 16px',
              fontSize: 14,
              color: '#556B82',
              fontFamily: '72'
            }}>
              <li>Main Joule interface</li>
              <li>Standard navigation pattern</li>
              <li>Simple menu access</li>
              <li>Clean, minimal design</li>
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
              💬 New Conversation Header
            </h4>
            <ul style={{
              margin: 0,
              padding: '0 0 0 16px',
              fontSize: 14,
              color: '#556B82',
              fontFamily: '72'
            }}>
              <li>Active conversation interface</li>
              <li>Full feature set with all actions</li>
              <li>Overflow menu for options</li>
              <li>Fullscreen and close controls</li>
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
              ⬅️ Go Back Header
            </h4>
            <ul style={{
              margin: 0,
              padding: '0 0 0 16px',
              fontSize: 14,
              color: '#556B82',
              fontFamily: '72'
            }}>
              <li>Detail view interfaces</li>
              <li>Secondary screen navigation</li>
              <li>Back button functionality</li>
              <li>Modal or overlay contexts</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadersShowcase; 