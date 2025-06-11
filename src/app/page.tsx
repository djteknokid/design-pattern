"use client";

import React from 'react';
import Link from 'next/link';

const Homepage: React.FC = () => {
  const designSystems = [
    {
      id: 'suite-first',
      title: 'Suite First',
      subtitle: 'Current Production System',
      description: 'Our current suite of design components and patterns used in production applications. Features enterprise-grade components built for SAP business applications.',
      icon: '🏢',
      status: 'Production Ready',
      statusColor: '#0F7B0F',
      backgroundColor: 'linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)',
      borderColor: '#2196F3',
      features: [
        'Production-tested components',
        'Enterprise application patterns',
        'Consistent business workflows',
        'Scalable architecture',
        'Performance optimized'
      ],
      path: '/suite-first',
      comingSoon: false
    },
    {
      id: 'joule-design',
      title: 'Joule Design Guide',
      subtitle: 'AI Assistant Components',
      description: 'Next-generation design system for SAP Joule AI Assistant. Features conversational UI components, intelligent interactions, and modern design patterns.',
      icon: '🤖',
      status: 'In Development',
      statusColor: '#5D36FF',
      backgroundColor: 'linear-gradient(135deg, #F3E5F5 0%, #E1BEE7 100%)',
      borderColor: '#5D36FF',
      features: [
        'AI-first component library',
        'Conversational interfaces',
        'Interactive message types',
        'Smart quick replies',
        'Modern design language'
      ],
      path: '/joule-library',
      comingSoon: false
    },
    {
      id: 'ui5-design',
      title: 'UI5 SAP Design System',
      subtitle: 'Legacy Foundation',
      description: 'Traditional SAP design system based on UI5 framework. Comprehensive component library with established patterns and enterprise-grade functionality.',
      icon: '🎨',
      status: 'Stable',
      statusColor: '#FF6B35',
      backgroundColor: 'linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%)',
      borderColor: '#FF9800',
      features: [
        'Comprehensive component set',
        'Established design patterns',
        'Cross-platform compatibility',
        'Accessibility compliant',
        'Extensive documentation'
      ],
      path: '/ui5-design',
      comingSoon: false
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '40px 20px'
    }}>
      {/* Hero Section */}
      <div style={{
        textAlign: 'center',
        marginBottom: 60,
        color: 'white'
      }}>
        <h1 style={{
          fontSize: 48,
          fontWeight: '700',
          fontFamily: '72',
          margin: '0 0 16px 0',
          textShadow: '0 2px 10px rgba(0,0,0,0.3)'
        }}>
          Prototype in SAP
        </h1>
        <p style={{
          fontSize: 20,
          fontFamily: '72',
          margin: 0,
          opacity: 0.9,
          maxWidth: 600,
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          Explore our collection of design systems, from current production solutions to next-generation AI interfaces
        </p>
        
        {/* GitHub CTA */}
        <div style={{ marginTop: 32 }}>
          <a 
            href="https://github.com/yourusername/design-pattern" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '12px 24px',
              background: 'rgba(255,255,255,0.2)',
              border: '2px solid rgba(255,255,255,0.3)',
              borderRadius: 8,
              color: 'white',
              fontSize: 16,
              fontFamily: '72',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.3)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
              e.currentTarget.style.transform = 'translateY(0px)';
            }}
            >
              <span style={{ fontSize: 20 }}>⭐</span>
              View on GitHub
            </div>
          </a>
        </div>
      </div>

      {/* Design Systems Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
        gap: 32,
        maxWidth: 1200,
        margin: '0 auto'
      }}>
        {designSystems.map((system) => (
          <div
            key={system.id}
            style={{
              background: 'white',
              borderRadius: 16,
              padding: 32,
              boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
              border: `2px solid ${system.borderColor}`,
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              cursor: system.comingSoon ? 'default' : 'pointer'
            }}
            onMouseEnter={(e) => {
              if (!system.comingSoon) {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.16)';
              }
            }}
            onMouseLeave={(e) => {
              if (!system.comingSoon) {
                e.currentTarget.style.transform = 'translateY(0px)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.12)';
              }
            }}
          >
            {/* Background Pattern */}
            <div style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: 120,
              height: 120,
              background: system.backgroundColor,
              borderRadius: '50%',
              transform: 'translate(40px, -40px)',
              opacity: 0.6
            }} />

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 1 }}>
              {/* Header */}
              <div style={{ marginBottom: 24 }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  marginBottom: 8
                }}>
                  <span style={{ fontSize: 32 }}>{system.icon}</span>
                  <div>
                    <h2 style={{
                      fontSize: 24,
                      fontWeight: '700',
                      fontFamily: '72',
                      margin: 0,
                      color: '#1B2A3A'
                    }}>
                      {system.title}
                    </h2>
                    <p style={{
                      fontSize: 14,
                      fontFamily: '72',
                      margin: 0,
                      color: '#556B82',
                      fontWeight: '500'
                    }}>
                      {system.subtitle}
                    </p>
                  </div>
                </div>

                {/* Status Badge */}
                <div style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  background: system.statusColor,
                  color: 'white',
                  borderRadius: 20,
                  fontSize: 12,
                  fontFamily: '72',
                  fontWeight: '600'
                }}>
                  {system.status}
                </div>
              </div>

              {/* Description */}
              <p style={{
                fontSize: 16,
                fontFamily: '72',
                lineHeight: '24px',
                color: '#556B82',
                margin: '0 0 24px 0'
              }}>
                {system.description}
              </p>

              {/* Features */}
              <div style={{ marginBottom: 24 }}>
                <h4 style={{
                  fontSize: 14,
                  fontWeight: '600',
                  fontFamily: '72',
                  margin: '0 0 12px 0',
                  color: '#1B2A3A',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Key Features
                </h4>
                <ul style={{
                  margin: 0,
                  padding: '0 0 0 16px',
                  fontSize: 14,
                  fontFamily: '72',
                  color: '#556B82'
                }}>
                  {system.features.map((feature, index) => (
                    <li key={index} style={{ marginBottom: 4 }}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              {system.comingSoon ? (
                <div style={{
                  padding: '12px 24px',
                  background: '#f5f5f5',
                  color: '#999',
                  borderRadius: 8,
                  fontSize: 14,
                  fontFamily: '72',
                  fontWeight: '600',
                  textAlign: 'center',
                  border: '2px solid #e0e0e0'
                }}>
                  Coming Soon
                </div>
              ) : (
                <Link href={system.path} style={{ textDecoration: 'none' }}>
                  <div style={{
                    padding: '12px 24px',
                    background: system.borderColor,
                    color: 'white',
                    borderRadius: 8,
                    fontSize: 14,
                    fontFamily: '72',
                    fontWeight: '600',
                    textAlign: 'center',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = system.statusColor;
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = system.borderColor;
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  >
                    Explore Design System →
                  </div>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{
        textAlign: 'center',
        marginTop: 60,
        color: 'white',
        opacity: 0.8
      }}>
        <p style={{
          fontSize: 14,
          fontFamily: '72',
          margin: 0
        }}>
          SAP Design Systems Collection • Built with Next.js and React
        </p>
      </div>
    </div>
  );
};

export default Homepage;
