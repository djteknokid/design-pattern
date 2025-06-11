"use client";

import React from 'react';
import { QuickReplies } from '../index';

const QuickRepliesShowcase: React.FC = () => {
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
          ⚡ Quick Replies
        </h2>
        <p style={{
          margin: 0,
          fontSize: 16,
          color: '#556B82',
          fontFamily: '72'
        }}>
          Interactive quick reply buttons that allow users to select responses instead of typing
        </p>
      </div>

      {/* Quick Replies Examples */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
        
        {/* Standard Quick Replies */}
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
              Quick Replies - Standard
            </h3>
            <p style={{
              margin: 0,
              fontSize: 14,
              color: '#556B82',
              fontFamily: '72'
            }}>
              Standard quick reply buttons for common follow-up questions and actions
            </p>
          </div>
          <div style={{
            background: '#f8f9fa',
            borderRadius: 8,
            padding: 16,
            display: 'flex',
            justifyContent: 'center'
          }}>
            <QuickReplies
              replies={[
                { id: '1', text: 'Tell me more', onClick: () => alert('Tell me more clicked!') },
                { id: '2', text: 'Show examples', onClick: () => alert('Show examples clicked!') },
                { id: '3', text: 'Explain this', onClick: () => alert('Explain this clicked!') },
                { id: '4', text: 'Next steps', onClick: () => alert('Next steps clicked!') }
              ]}
            />
          </div>
        </div>

        {/* Help & Support Quick Replies */}
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
              Quick Replies - Help & Support
            </h3>
            <p style={{
              margin: 0,
              fontSize: 14,
              color: '#556B82',
              fontFamily: '72'
            }}>
              Quick replies for help and support scenarios
            </p>
          </div>
          <div style={{
            background: '#f8f9fa',
            borderRadius: 8,
            padding: 16,
            display: 'flex',
            justifyContent: 'center'
          }}>
            <QuickReplies
              replies={[
                { id: '1', text: 'Get help', onClick: () => alert('Get help clicked!') },
                { id: '2', text: 'Contact support', onClick: () => alert('Contact support clicked!') },
                { id: '3', text: 'Report issue', onClick: () => alert('Report issue clicked!') },
                { id: '4', text: 'Documentation', onClick: () => alert('Documentation clicked!') },
                { id: '5', text: 'FAQ', onClick: () => alert('FAQ clicked!') },
                { id: '6', text: 'Video tutorials', onClick: () => alert('Video tutorials clicked!') }
              ]}
            />
          </div>
        </div>

        {/* Data & Analytics Quick Replies */}
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
              Quick Replies - Data & Analytics
            </h3>
            <p style={{
              margin: 0,
              fontSize: 14,
              color: '#556B82',
              fontFamily: '72'
            }}>
              Quick replies for data exploration and analytics workflows
            </p>
          </div>
          <div style={{
            background: '#f8f9fa',
            borderRadius: 8,
            padding: 16,
            display: 'flex',
            justifyContent: 'center'
          }}>
            <QuickReplies
              replies={[
                { id: '1', text: 'Show report', onClick: () => alert('Show report clicked!') },
                { id: '2', text: 'Export data', onClick: () => alert('Export data clicked!') },
                { id: '3', text: 'Create chart', onClick: () => alert('Create chart clicked!') },
                { id: '4', text: 'Filter results', onClick: () => alert('Filter results clicked!') },
                { id: '5', text: 'Compare periods', onClick: () => alert('Compare periods clicked!') },
                { id: '6', text: 'Drill down', onClick: () => alert('Drill down clicked!') },
                { id: '7', text: 'Schedule report', onClick: () => alert('Schedule report clicked!') },
                { id: '8', text: 'Share insights', onClick: () => alert('Share insights clicked!') }
              ]}
            />
          </div>
        </div>

        {/* Mixed Length Quick Replies */}
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
              Quick Replies - Mixed Lengths
            </h3>
            <p style={{
              margin: 0,
              fontSize: 14,
              color: '#556B82',
              fontFamily: '72'
            }}>
              Example showing how quick replies handle different text lengths and wrapping
            </p>
          </div>
          <div style={{
            background: '#f8f9fa',
            borderRadius: 8,
            padding: 16,
            display: 'flex',
            justifyContent: 'center'
          }}>
            <QuickReplies
              replies={[
                { id: '1', text: 'Yes', onClick: () => alert('Yes clicked!') },
                { id: '2', text: 'No', onClick: () => alert('No clicked!') },
                { id: '3', text: 'Maybe later', onClick: () => alert('Maybe later clicked!') },
                { id: '4', text: 'I need more information before I can make a decision', onClick: () => alert('Long response clicked!') }
              ]}
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
          Quick Replies Best Practices
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
              ✅ When to Use
            </h4>
            <ul style={{
              margin: 0,
              padding: '0 0 0 16px',
              fontSize: 14,
              color: '#556B82',
              fontFamily: '72'
            }}>
              <li>After AI responses to suggest follow-ups</li>
              <li>For common questions or actions</li>
              <li>To guide conversation flow</li>
              <li>When users need quick choices</li>
              <li>To reduce typing for frequent tasks</li>
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
              📝 Content Guidelines
            </h4>
            <ul style={{
              margin: 0,
              padding: '0 0 0 16px',
              fontSize: 14,
              color: '#556B82',
              fontFamily: '72'
            }}>
              <li>Keep text concise and clear</li>
              <li>Use action-oriented language</li>
              <li>Limit to 3-4 options per row</li>
              <li>Consider mobile screen sizes</li>
              <li>Ensure options are mutually exclusive</li>
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
              🎨 Design Features
            </h4>
            <ul style={{
              margin: 0,
              padding: '0 0 0 16px',
              fontSize: 14,
              color: '#556B82',
              fontFamily: '72'
            }}>
              <li>Hover effects for better interaction</li>
              <li>Blue accent color following SAP design</li>
              <li>Rounded corners for modern look</li>
              <li>Automatic text wrapping</li>
              <li>Responsive row layout</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickRepliesShowcase; 