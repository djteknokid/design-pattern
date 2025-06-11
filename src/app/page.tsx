"use client";

import React from 'react';
import Link from 'next/link';

const Homepage: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      {/* Hero Section - SAP VIBES */}
      <section style={{
        background: 'linear-gradient(135deg, #0070F2 0%, #5D36FF 100%)',
        padding: '100px 20px',
        textAlign: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          backgroundImage: 'radial-gradient(circle at 20% 80%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }} />
        
        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h1 style={{
            fontSize: '4rem',
            fontWeight: '800',
            fontFamily: '72',
            margin: '0 0 24px 0',
            lineHeight: '1.1',
            background: 'linear-gradient(135deg, #ffffff 0%, #e8f4fd 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            SAP Prototype Library
          </h1>
          
          <p style={{
            fontSize: '1.5rem',
            fontFamily: '72',
            margin: '0 0 16px 0',
            fontWeight: '600',
            opacity: 0.95
          }}>
            Build AI prototype on SAP products with SAP design library
          </p>
          
          <p style={{
            fontSize: '1.125rem',
            fontFamily: '72',
            margin: '0 0 48px 0',
            opacity: 0.9,
            lineHeight: '1.6',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            A comprehensive toolkit that empowers SAP designers to rapidly build and test prototypes. 
            Pre-built components, AI patterns, and enterprise workflows ready to copy, customize, and deploy. 
            Stop reinventing the wheel—focus on innovation and user experience instead.
          </p>

          <div style={{
            display: 'flex',
            gap: '24px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '60px'
          }}>
                         <Link href="/suite-first" style={{ textDecoration: 'none' }}>
               <button style={{
                 background: 'rgba(255, 255, 255, 0.2)',
                 color: 'white',
                 border: '2px solid rgba(255, 255, 255, 0.3)',
                 backdropFilter: 'blur(10px)',
                 padding: '16px 32px',
                 borderRadius: '12px',
                 fontSize: '18px',
                 fontWeight: '700',
                 fontFamily: '72',
                 cursor: 'pointer',
                 display: 'flex',
                 alignItems: 'center',
                 gap: '10px',
                 transition: 'all 0.3s ease'
               }}>
                 <span>🚀</span> Launch Suite First Prototype
               </button>
             </Link>
            <a 
              href="https://github.com/djteknokid/design-pattern" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <button style={{
                background: 'white',
                color: '#0070F2',
                border: '2px solid white',
                padding: '16px 32px',
                borderRadius: '12px',
                fontSize: '18px',
                fontWeight: '700',
                fontFamily: '72',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'all 0.3s ease'
              }}>
                <span>📦</span> View Source Code
              </button>
            </a>
                    </div>
        </div>
      </section>

      {/* Design Libraries Section */}
      <section style={{
        background: '#f8f9fa',
        padding: '100px 20px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px'
          }}>
            {/* Suite First Demo Card */}
            <div style={{
              background: 'white',
              borderRadius: '20px',
              padding: '40px',
              boxShadow: '0 10px 40px rgba(15, 123, 15, 0.1)',
              border: '1px solid rgba(15, 123, 15, 0.1)',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}>
              {/* Background Accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100px',
                height: '100px',
                background: 'linear-gradient(135deg, #0F7B0F, #4CAF50)',
                borderRadius: '0 20px 0 100px',
                opacity: 0.1
              }} />
              
              <div style={{ 
                position: 'relative', 
                zIndex: 1, 
                display: 'flex', 
                flexDirection: 'column', 
                height: '100%' 
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '24px'
                }}>
                  <div style={{
                    fontSize: '2.5rem'
                  }}>🏢</div>
                  <div>
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      fontFamily: '72',
                      margin: '0 0 4px 0',
                      color: '#1B2A3A'
                    }}>
                      Suite First Demo
                    </h3>
                    <p style={{
                      fontSize: '1rem',
                      color: '#0F7B0F',
                      fontFamily: '72',
                      margin: 0,
                      fontWeight: '600'
                    }}>
                      Complete Business Application
                    </p>
                  </div>
                </div>

                <div style={{
                  background: 'rgba(15, 123, 15, 0.1)',
                  color: '#0F7B0F',
                  display: 'inline-block',
                  padding: '6px 12px',
                  borderRadius: '16px',
                  fontSize: '12px',
                  fontWeight: '600',
                  fontFamily: '72',
                  marginBottom: '20px'
                }}>
                  Live Demo
                </div>

                <p style={{
                  fontSize: '1rem',
                  color: '#556B82',
                  fontFamily: '72',
                  margin: '0 0 32px 0',
                  lineHeight: '1.6'
                }}>
                  See SAP prototyping in action with a complete business application featuring modern UX patterns, 
                  AI assistant integration, and real workflow demonstrations.
                </p>

                                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  marginTop: 'auto'
                }}>
                  <Link href="/suite-first" style={{ 
                    textDecoration: 'underline',
                    color: '#0F7B0F',
                    fontSize: '16px',
                    fontWeight: '400',
                    fontFamily: '72'
                  }}>
                    Launch Prototype
                  </Link>
                  <a 
                    href="https://github.com/djteknokid/design-pattern/tree/main/src/app/suite-first" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      textDecoration: 'underline',
                      color: '#556B82',
                      fontSize: '16px',
                      fontWeight: '400',
                      fontFamily: '72'
                    }}
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>

            {/* Joule Library Card */}
            <div style={{
              background: 'white',
              borderRadius: '20px',
              padding: '40px',
              boxShadow: '0 10px 40px rgba(93, 54, 255, 0.1)',
              border: '1px solid rgba(93, 54, 255, 0.1)',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}>
              {/* Background Accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100px',
                height: '100px',
                background: 'linear-gradient(135deg, #5D36FF, #8B5DFF)',
                borderRadius: '0 20px 0 100px',
                opacity: 0.1
              }} />
              
              <div style={{ 
                position: 'relative', 
                zIndex: 1, 
                display: 'flex', 
                flexDirection: 'column', 
                height: '100%' 
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '24px'
                }}>
                  <div style={{
                    fontSize: '2.5rem'
                  }}>🤖</div>
                  <div>
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      fontFamily: '72',
                      margin: '0 0 4px 0',
                      color: '#1B2A3A'
                    }}>
                      Joule Design Library
                    </h3>
                    <p style={{
                      fontSize: '1rem',
                      color: '#5D36FF',
                      fontFamily: '72',
                      margin: 0,
                      fontWeight: '600'
                    }}>
                      AI & Conversational UI Components
                    </p>
                  </div>
                </div>

                <div style={{
                  background: 'rgba(93, 54, 255, 0.1)',
                  color: '#5D36FF',
                  display: 'inline-block',
                  padding: '6px 12px',
                  borderRadius: '16px',
                  fontSize: '12px',
                  fontWeight: '600',
                  fontFamily: '72',
                  marginBottom: '20px'
                }}>
                  25+ Components
                </div>

                <p style={{
                  fontSize: '1rem',
                  color: '#556B82',
                  fontFamily: '72',
                  margin: '0 0 32px 0',
                  lineHeight: '1.6'
                }}>
                  Production-ready components for AI-powered SAP experiences. Copy-paste chat interfaces, 
                  conversation patterns, and intelligent workflows—perfect for rapid AI prototype development.
                </p>

                                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  marginTop: 'auto'
                }}>
                  <Link href="/joule-library" style={{ 
                    textDecoration: 'underline',
                    color: '#5D36FF',
                    fontSize: '16px',
                    fontWeight: '400',
                    fontFamily: '72'
                  }}>
                    View Components
                  </Link>
                  <a 
                    href="https://github.com/djteknokid/design-pattern/tree/main/src/app/components/Joule" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      textDecoration: 'underline',
                      color: '#556B82',
                      fontSize: '16px',
                      fontWeight: '400',
                      fontFamily: '72'
                    }}
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>

            {/* UI5 Library Card */}
            <div style={{
              background: 'white',
              borderRadius: '20px',
              padding: '40px',
              boxShadow: '0 10px 40px rgba(255, 107, 53, 0.1)',
              border: '1px solid rgba(255, 107, 53, 0.1)',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}>
              {/* Background Accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100px',
                height: '100px',
                background: 'linear-gradient(135deg, #FF6B35, #FF8A65)',
                borderRadius: '0 20px 0 100px',
                opacity: 0.1
              }} />
              
              <div style={{ 
                position: 'relative', 
                zIndex: 1, 
                display: 'flex', 
                flexDirection: 'column', 
                height: '100%' 
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '24px'
                }}>
                  <div style={{
                    fontSize: '2.5rem'
                  }}>🎨</div>
                  <div>
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      fontFamily: '72',
                      margin: '0 0 4px 0',
                      color: '#1B2A3A'
                    }}>
                      UI5 Design Library
                    </h3>
                    <p style={{
                      fontSize: '1rem',
                      color: '#FF6B35',
                      fontFamily: '72',
                      margin: 0,
                      fontWeight: '600'
                    }}>
                      Enterprise Application Foundation
                    </p>
                  </div>
                </div>

                <div style={{
                  background: 'rgba(255, 107, 53, 0.1)',
                  color: '#FF6B35',
                  display: 'inline-block',
                  padding: '6px 12px',
                  borderRadius: '16px',
                  fontSize: '12px',
                  fontWeight: '600',
                  fontFamily: '72',
                  marginBottom: '20px'
                }}>
                  100+ Components
                </div>

                <p style={{
                  fontSize: '1rem',
                  color: '#556B82',
                  fontFamily: '72',
                  margin: '0 0 32px 0',
                  lineHeight: '1.6'
                }}>
                  Enterprise-grade UI5 components ready for immediate use. Pre-configured with SAP design standards, 
                  accessibility features, and responsive layouts—accelerate your enterprise prototype development.
                </p>

                                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  marginTop: 'auto'
                }}>
                  <Link href="/ui5-design" style={{ 
                    textDecoration: 'underline',
                    color: '#FF6B35',
                    fontSize: '16px',
                    fontWeight: '400',
                    fontFamily: '72'
                  }}>
                    View Components
                  </Link>
                  <a 
                    href="https://github.com/djteknokid/design-pattern/tree/main/src/app/components/UI5" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      textDecoration: 'underline',
                      color: '#556B82',
                      fontSize: '16px',
                      fontWeight: '400',
                      fontFamily: '72'
                    }}
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Homepage;
