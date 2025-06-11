"use client";

import React from 'react';
import { JouleList, JouleContextualList } from '../index';

const ListsShowcase: React.FC = () => {
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
          📊 Lists
        </h2>
        <p style={{
          margin: 0,
          fontSize: 16,
          color: '#556B82',
          fontFamily: '72'
        }}>
          List components for displaying structured data with actions and contextual information
        </p>
      </div>

      {/* List Examples */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
        
        {/* Standard JouleList */}
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
              Joule List - Standard
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

        {/* Custom JouleList with Real Data */}
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
              Joule List - Custom Data
            </h3>
            <p style={{
              margin: 0,
              fontSize: 14,
              color: '#556B82',
              fontFamily: '72'
            }}>
              List with custom data and different status colors for project management
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

        {/* Task List Example */}
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
              Joule List - Task Management
            </h3>
            <p style={{
              margin: 0,
              fontSize: 14,
              color: '#556B82',
              fontFamily: '72'
            }}>
              Real-world task list example with urgency indicators and actions
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
              headerTitle="My Tasks"
              headerSubtitle="Today's assignments"
              headerDescription="Complete these tasks to stay on track"
              currentCount={3}
              totalCount={8}
              items={[
                {
                  id: '1',
                  title: 'Review Budget Report',
                  subtitle: 'Finance Team',
                  description: 'Q4 budget analysis needs your approval',
                  status: 'Urgent',
                  statusColor: '#FF4444',
                  buttonText: 'Review',
                  onButtonClick: () => console.log('Review budget report')
                },
                {
                  id: '2',
                  title: 'Team Meeting Prep',
                  subtitle: 'Project Alpha',
                  description: 'Prepare slides for tomorrow\'s standup',
                  status: 'In Progress',
                  statusColor: '#FF9500',
                  buttonText: 'Edit',
                  onButtonClick: () => console.log('Edit meeting prep')
                },
                {
                  id: '3',
                  title: 'Code Review',
                  subtitle: 'Development',
                  description: 'Review pull request #247 for new features',
                  status: 'Ready',
                  statusColor: '#256F3A',
                  buttonText: 'Review',
                  onButtonClick: () => console.log('Review code')
                }
              ]}
              onViewMore={() => console.log('View all tasks')}
              onFooterButton={() => console.log('Create new task')}
              footerButtonText="New Task"
              viewMoreText="View All"
            />
          </div>
        </div>

        {/* Contextual List Example - Expanded */}
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
              Contextual List - References
            </h3>
            <p style={{
              margin: 0,
              fontSize: 14,
              color: '#556B82',
              fontFamily: '72'
            }}>
              Collapsible contextual list for references and related information
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
              title="References"
              count={3}
              isExpanded={true}
              items={[
                {
                  id: '1',
                  title: '[1] AI in Business Processes',
                  description: 'A comprehensive study on artificial intelligence applications in modern business workflows and process optimization.',
                  link: 'https://example.com/ai-business-study'
                },
                {
                  id: '2',
                  title: '[2] SAP Design System Guidelines',
                  description: 'Official documentation and best practices for implementing SAP Fiori design principles in enterprise applications.',
                  link: 'https://experience.sap.com/fiori-design-web/'
                },
                {
                  id: '3',
                  title: '[3] User Experience Research',
                  description: 'Latest findings in user experience research for enterprise software and recommendations for interface design.',
                  link: 'https://example.com/ux-research'
                }
              ]}
              onToggle={(expanded) => console.log('References toggled:', expanded)}
              maxDescriptionLines={2}
            />
          </div>
        </div>

        {/* Contextual List Example - Collapsed */}
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
              Contextual List - Related Documents
            </h3>
            <p style={{
              margin: 0,
              fontSize: 14,
              color: '#556B82',
              fontFamily: '72'
            }}>
              Collapsed contextual list showing how content can be hidden until needed
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
              title="Related Documents"
              count={4}
              isExpanded={false}
              items={[
                {
                  id: '1',
                  title: 'Project Requirements Document',
                  description: 'Detailed specifications and requirements for the current project phase including functional and technical requirements.',
                  onClick: () => console.log('Opening requirements document')
                },
                {
                  id: '2',
                  title: 'Technical Architecture Guide',
                  description: 'System architecture overview and technical implementation guidelines for the development team.',
                  onClick: () => console.log('Opening architecture guide')
                },
                {
                  id: '3',
                  title: 'User Acceptance Testing Plan',
                  description: 'Comprehensive testing plan and acceptance criteria for user validation and quality assurance.',
                  onClick: () => console.log('Opening testing plan')
                },
                {
                  id: '4',
                  title: 'Deployment Instructions',
                  description: 'Step-by-step deployment guide and production environment configuration requirements.',
                  onClick: () => console.log('Opening deployment guide')
                }
              ]}
              onToggle={(expanded) => console.log('Documents toggled:', expanded)}
              maxDescriptionLines={2}
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
          When to Use Each List Type
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
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
              📋 Standard Joule List
            </h4>
            <ul style={{
              margin: 0,
              padding: '0 0 0 16px',
              fontSize: 14,
              color: '#556B82',
              fontFamily: '72'
            }}>
              <li>Task lists with actions and status</li>
              <li>Project management workflows</li>
              <li>Notification and alert lists</li>
              <li>Any structured data with actions</li>
              <li>Content that needs status indicators</li>
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
              📑 Contextual Lists
            </h4>
            <ul style={{
              margin: 0,
              padding: '0 0 0 16px',
              fontSize: 14,
              color: '#556B82',
              fontFamily: '72'
            }}>
              <li>Reference lists and citations</li>
              <li>Related documents and links</li>
              <li>Optional/supplementary content</li>
              <li>Grouped information that can be hidden</li>
              <li>Secondary navigation or quick access</li>
            </ul>
          </div>
        </div>

        {/* Status Color Guide */}
        <div style={{ marginTop: 24 }}>
          <h4 style={{
            margin: '0 0 12px 0',
            fontSize: 16,
            fontWeight: '600',
            fontFamily: '72',
            color: '#1B2A3A'
          }}>
            Status Color Guidelines
          </h4>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 16
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: 8,
              borderRadius: 6,
              background: 'rgba(255, 68, 68, 0.1)'
            }}>
              <div style={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                background: '#FF4444'
              }} />
              <span style={{
                fontSize: 13,
                fontFamily: '72',
                color: '#556B82'
              }}>
                Red: Urgent, High Priority, Delayed
              </span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: 8,
              borderRadius: 6,
              background: 'rgba(255, 149, 0, 0.1)'
            }}>
              <div style={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                background: '#FF9500'
              }} />
              <span style={{
                fontSize: 13,
                fontFamily: '72',
                color: '#556B82'
              }}>
                Orange: In Progress, Warning
              </span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: 8,
              borderRadius: 6,
              background: 'rgba(37, 111, 58, 0.1)'
            }}>
              <div style={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                background: '#256F3A'
              }} />
              <span style={{
                fontSize: 13,
                fontFamily: '72',
                color: '#556B82'
              }}>
                Green: Complete, Success, Ready
              </span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: 8,
              borderRadius: 6,
              background: 'rgba(0, 100, 217, 0.1)'
            }}>
              <div style={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                background: '#0064D9'
              }} />
              <span style={{
                fontSize: 13,
                fontFamily: '72',
                color: '#556B82'
              }}>
                Blue: Info, Pending, New
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListsShowcase; 