"use client";

import React from 'react';
import { MarkdownMessage, TableMessage, CodeMessage, QuickReplies, ChatBubble } from '../index';

const ContentComponentsShowcase: React.FC = () => {
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
          💭 Content Components
        </h2>
        <p style={{
          margin: 0,
          fontSize: 16,
          color: '#556B82',
          fontFamily: '72'
        }}>
          Rich content message components for displaying formatted text, tables, code, quick replies, and structured data
        </p>
      </div>

      {/* Content Components Examples */}
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
              Text Message - Markdown
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
            <MarkdownMessage
              title="Science"
              content="Science is a vast and ever-expanding field..."
            />
          </div>
        </div>

        {/* Table Message */}
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
              Text Message - Table
            </h3>
            <p style={{
              margin: 0,
              fontSize: 14,
              color: '#556B82',
              fontFamily: '72'
            }}>
              Content message with embedded tables/charts and descriptive text
            </p>
          </div>
          <div style={{
            background: '#f8f9fa',
            borderRadius: 8,
            padding: 16,
            display: 'flex',
            justifyContent: 'center'
          }}>
            <TableMessage
              title="Compensation"
              description="This table shows the compensation analysis across different departments and roles in the organization."
            />
          </div>
        </div>

        {/* Code Message */}
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
              Text Message - Code
            </h3>
            <p style={{
              margin: 0,
              fontSize: 14,
              color: '#556B82',
              fontFamily: '72'
            }}>
              Code examples with syntax highlighting for programming tutorials and documentation
            </p>
          </div>
          <div style={{
            background: '#f8f9fa',
            borderRadius: 8,
            padding: 16,
            display: 'flex',
            justifyContent: 'center'
          }}>
            <CodeMessage
              title="Expected Value Calculation"
              description="Expectation or expected value of any group of numbers in probability is the long-run average value of repetitions of the experiment it represents."
            />
          </div>
        </div>

        {/* Quick Replies */}
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
              Quick Replies
            </h3>
            <p style={{
              margin: 0,
              fontSize: 14,
              color: '#556B82',
              fontFamily: '72'
            }}>
              Interactive quick reply buttons for users to select responses instead of typing
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
                { id: '4', text: 'Next steps', onClick: () => alert('Next steps clicked!') },
                { id: '5', text: 'Related topics', onClick: () => alert('Related topics clicked!') },
                { id: '6', text: 'Best practices', onClick: () => alert('Best practices clicked!') },
                { id: '7', text: 'Common issues', onClick: () => alert('Common issues clicked!') },
                { id: '8', text: 'Advanced usage', onClick: () => alert('Advanced usage clicked!') },
                { id: '9', text: 'How does this work in practice with real world scenarios?', onClick: () => alert('Long question clicked!') }
              ]}
            />
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
              message="Can you show me how to calculate expected value?"
            />
            <ChatBubble
              type="assistant"
              message="I'll show you a Java implementation with detailed explanation."
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
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
              📝 Text Message - Markdown
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
              📊 Text Message - Table
            </h4>
            <ul style={{
              margin: 0,
              padding: '0 0 0 16px',
              fontSize: 14,
              color: '#556B82',
              fontFamily: '72'
            }}>
              <li>Data visualization responses</li>
              <li>Reports with charts and tables</li>
              <li>Content with embedded media</li>
              <li>Structured data presentation</li>
              <li>Analytics and dashboard content</li>
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
              👨‍💻 Text Message - Code
            </h4>
            <ul style={{
              margin: 0,
              padding: '0 0 0 16px',
              fontSize: 14,
              color: '#556B82',
              fontFamily: '72'
            }}>
              <li>Programming tutorials and examples</li>
              <li>API documentation with samples</li>
              <li>Technical explanations with code</li>
              <li>Educational programming content</li>
              <li>Code snippets with syntax highlighting</li>
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
              ⚡ Quick Replies
            </h4>
            <ul style={{
              margin: 0,
              padding: '0 0 0 16px',
              fontSize: 14,
              color: '#556B82',
              fontFamily: '72'
            }}>
              <li>Follow-up question suggestions</li>
              <li>Guided conversation flows</li>
              <li>Common response options</li>
              <li>Action buttons for user interaction</li>
              <li>Reducing typing for frequent actions</li>
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
  );
};

export default ContentComponentsShowcase; 