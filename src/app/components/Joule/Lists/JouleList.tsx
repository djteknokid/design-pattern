"use client";

import React from 'react';

/**
 * JouleList - A comprehensive list component for displaying structured data in the Joule design system
 * 
 * @description This component is perfect for displaying lists of items with avatars, titles, descriptions, 
 * status indicators, and action buttons. It follows SAP's design system and includes header, items, and footer sections.
 * 
 * @usage Use this component when you need to display:
 * - Task lists with status and actions
 * - Project lists with team members
 * - Notification lists with timestamps
 * - Any structured data that needs visual hierarchy
 * 
 * @example
 * ```tsx
 * import { JouleList } from '@/components/Joule';
 * 
 * const MyTaskList = () => (
 *   <JouleList
 *     headerTitle="My Tasks"
 *     headerSubtitle="Today's assignments"
 *     currentCount={3}
 *     totalCount={8}
 *     items={[
 *       {
 *         id: '1',
 *         title: 'Review Budget Report',
 *         subtitle: 'Finance Team',
 *         description: 'Q4 budget analysis needs approval',
 *         status: 'Urgent',
 *         statusColor: '#FF4444',
 *         buttonText: 'Review',
 *         onButtonClick: () => console.log('Review clicked')
 *       }
 *     ]}
 *     onViewMore={() => console.log('View more clicked')}
 *     onFooterButton={() => console.log('Footer action')}
 *   />
 * );
 * ```
 */

interface ListItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  status: string;
  statusColor?: string;
  buttonText: string;
  onButtonClick?: () => void;
}

interface JouleListProps {
  headerTitle?: string;
  headerSubtitle?: string;
  headerDescription?: string;
  currentCount?: number;
  totalCount?: number;
  items?: ListItem[];
  onViewMore?: () => void;
  onFooterButton?: () => void;
  footerButtonText?: string;
  viewMoreText?: string;
}

const JouleList: React.FC<JouleListProps> = ({
  headerTitle = "Header Title",
  headerSubtitle = "This is a subtitle",
  headerDescription = "Add a description",
  currentCount = 3,
  totalCount = 6,
  items = [
    {
      id: '1',
      title: 'Title',
      subtitle: 'Subtitle',
      description: 'This is a description that goes here',
      status: 'Status',
      statusColor: 'var(--Semantic-sapSuccessColor, #256F3A)',
      buttonText: 'Button',
      onButtonClick: () => console.log('Item 1 button clicked')
    },
    {
      id: '2',
      title: 'Title',
      subtitle: 'Subtitle',
      description: 'This is a description that goes here',
      status: 'Status',
      statusColor: 'var(--Semantic-sapSuccessColor, #256F3A)',
      buttonText: 'Button',
      onButtonClick: () => console.log('Item 2 button clicked')
    },
    {
      id: '3',
      title: 'Title',
      subtitle: 'Subtitle',
      description: 'This is a description that goes here',
      status: 'Status',
      statusColor: 'var(--Semantic-sapSuccessColor, #256F3A)',
      buttonText: 'Button',
      onButtonClick: () => console.log('Item 3 button clicked')
    }
  ],
  onViewMore = () => console.log('View More clicked'),
  onFooterButton = () => console.log('Footer button clicked'),
  footerButtonText = "Button",
  viewMoreText = "View More"
}) => {
  return (
    <div 
      data-details="False" 
      data-footer="true" 
      data-fullscreen="False" 
      data-header="true" 
      data-mode="Default" 
      data-type="Default" 
      data-view-more="true" 
      style={{
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        alignItems: 'flex-start', 
        display: 'inline-flex'
      }}
    >
      <div style={{
        justifyContent: 'flex-start', 
        alignItems: 'flex-start', 
        gap: '16px', 
        display: 'inline-flex'
      }}>
        <div style={{
          width: '384px', 
          background: 'white', 
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.20)', 
          overflow: 'hidden', 
          borderRadius: '8px', 
          flexDirection: 'column', 
          justifyContent: 'flex-start', 
          alignItems: 'flex-start', 
          gap: '2px', 
          display: 'inline-flex'
        }}>
          {/* Header */}
          <div style={{
            alignSelf: 'stretch', 
            padding: '16px', 
            background: 'white', 
            borderTopLeftRadius: '8px', 
            borderTopRightRadius: '8px', 
            flexDirection: 'column', 
            justifyContent: 'flex-start', 
            alignItems: 'flex-start', 
            gap: '10px', 
            display: 'flex'
          }}>
            <div style={{
              alignSelf: 'stretch', 
              justifyContent: 'flex-start', 
              alignItems: 'flex-start', 
              gap: '16px', 
              display: 'inline-flex'
            }}>
              <div 
                data-badge="false" 
                data-border="false" 
                data-color="10" 
                data-content="Object" 
                data-interaction-state="Regular" 
                data-size="Small" 
                data-type="Icon" 
                style={{
                  maxWidth: '48px', 
                  maxHeight: '48px', 
                  padding: '15px', 
                  background: 'var(--Avatar-sapAvatar_10_Background, #EAECEE)', 
                  borderRadius: '12px', 
                  outline: '1px var(--Avatar-sapAvatar_10_BorderColor, #EAECEE) solid', 
                  outlineOffset: '-1px', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  gap: '10px', 
                  display: 'flex'
                }}
              >
                <div style={{width: '18px', height: '18px', position: 'relative'}}>
                  <div style={{width: '15.75px', height: '18px', left: '1.13px', top: '0px', position: 'absolute', background: 'var(--Avatar-sapAvatar_10_TextColor, #556B82)'}} />
                </div>
              </div>
              <div style={{
                flex: '1 1 0', 
                flexDirection: 'column', 
                justifyContent: 'flex-start', 
                alignItems: 'flex-start', 
                gap: '4px', 
                display: 'inline-flex'
              }}>
                <div style={{
                  alignSelf: 'stretch', 
                  justifyContent: 'space-between', 
                  alignItems: 'flex-start', 
                  display: 'inline-flex'
                }}>
                  <div style={{
                    color: '#1D2D3E', 
                    fontSize: '16px', 
                    fontFamily: '72', 
                    fontWeight: '600', 
                    lineHeight: '20px', 
                    wordWrap: 'break-word'
                  }}>
                    {headerTitle}
                  </div>
                  <div style={{
                    textAlign: 'right', 
                    justifyContent: 'center', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    color: '#556B82', 
                    fontSize: '12px', 
                    fontFamily: '72', 
                    fontWeight: '400', 
                    lineHeight: '14px', 
                    wordWrap: 'break-word'
                  }}>
                    {currentCount} of {totalCount}
                  </div>
                </div>
                <div style={{
                  alignSelf: 'stretch', 
                  flexDirection: 'column', 
                  justifyContent: 'flex-start', 
                  alignItems: 'flex-start', 
                  gap: '4px', 
                  display: 'flex'
                }}>
                  <div style={{
                    alignSelf: 'stretch', 
                    color: '#556B82', 
                    fontSize: '14px', 
                    fontFamily: '72', 
                    fontWeight: '400', 
                    lineHeight: '20px', 
                    wordWrap: 'break-word'
                  }}>
                    {headerSubtitle}
                  </div>
                  <div style={{
                    alignSelf: 'stretch', 
                    color: '#556B82', 
                    fontSize: '14px', 
                    fontFamily: '72', 
                    fontWeight: '400', 
                    lineHeight: '20px', 
                    wordWrap: 'break-word'
                  }}>
                    {headerDescription}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* List Items */}
          <div style={{
            width: '384px', 
            flexDirection: 'column', 
            justifyContent: 'flex-start', 
            alignItems: 'flex-start', 
            display: 'flex'
          }}>
            {items.map((item) => (
              <div 
                key={item.id}
                data-button="true" 
                data-description="true" 
                data-image="true" 
                data-state="Default" 
                data-status="true" 
                data-subtitle="true" 
                style={{
                  alignSelf: 'stretch', 
                  padding: '16px', 
                  background: 'var(--Main-sapBaseColor, white)', 
                  justifyContent: 'flex-start', 
                  alignItems: 'flex-start', 
                  gap: '10px', 
                  display: 'inline-flex'
                }}
              >
                <div style={{
                  flex: '1 1 0', 
                  justifyContent: 'flex-start', 
                  alignItems: 'flex-start', 
                  gap: '6px', 
                  display: 'flex'
                }}>
                  <div style={{
                    flex: '1 1 0', 
                    justifyContent: 'flex-start', 
                    alignItems: 'center', 
                    gap: '16px', 
                    display: 'flex'
                  }}>
                    <div style={{
                      alignSelf: 'stretch', 
                      justifyContent: 'flex-start', 
                      alignItems: 'flex-start', 
                      gap: '10px', 
                      display: 'flex'
                    }}>
                      <div data-thumbnail="Avatar" style={{
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        display: 'flex'
                      }}>
                        <div 
                          data-color="7" 
                          data-content="Object" 
                          data-type="Icon" 
                          style={{
                            maxWidth: '48px', 
                            maxHeight: '48px', 
                            padding: '15px', 
                            background: 'var(--Avatar-sapAvatar_7_Background, #C2FCEE)', 
                            borderRadius: '12px', 
                            outline: '1px var(--Avatar-sapAvatar_7_BorderColor, #C2FCEE) solid', 
                            outlineOffset: '-1px', 
                            justifyContent: 'center', 
                            alignItems: 'center', 
                            gap: '10px', 
                            display: 'flex'
                          }}
                        >
                          <div style={{width: '18px', height: '18px', position: 'relative'}}>
                            <div style={{width: '15.75px', height: '18px', left: '1.13px', top: '0px', position: 'absolute', background: 'var(--Avatar-sapAvatar_7_TextColor, #046C7A)'}} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      flex: '1 1 0', 
                      flexDirection: 'column', 
                      justifyContent: 'center', 
                      alignItems: 'flex-start', 
                      gap: '8px', 
                      display: 'inline-flex'
                    }}>
                      <div style={{
                        alignSelf: 'stretch', 
                        justifyContent: 'center', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        color: 'var(--Text-sapTitleColor, #1D2D3E)', 
                        fontSize: '16px', 
                        fontFamily: '72', 
                        fontWeight: '400', 
                        wordWrap: 'break-word'
                      }}>
                        {item.title}
                      </div>
                      <div style={{
                        alignSelf: 'stretch', 
                        justifyContent: 'center', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        color: 'var(--Text-sapContent_LabelColor, #556B82)', 
                        fontSize: '14px', 
                        fontFamily: '72', 
                        fontWeight: '400', 
                        wordWrap: 'break-word'
                      }}>
                        {item.subtitle}
                      </div>
                      <div style={{
                        alignSelf: 'stretch', 
                        color: 'var(--Text-sapContent_LabelColor, #556B82)', 
                        fontSize: '14px', 
                        fontFamily: '72', 
                        fontWeight: '400', 
                        wordWrap: 'break-word'
                      }}>
                        {item.description}
                      </div>
                    </div>
                  </div>
                  <div style={{
                    alignSelf: 'stretch', 
                    flexDirection: 'column', 
                    justifyContent: 'flex-start', 
                    alignItems: 'flex-end', 
                    gap: '14px', 
                    display: 'inline-flex'
                  }}>
                    <div style={{
                      textAlign: 'right', 
                      justifyContent: 'center', 
                      display: 'flex', 
                      flexDirection: 'column', 
                      color: item.statusColor || 'var(--Semantic-sapSuccessColor, #256F3A)', 
                      fontSize: '12px', 
                      fontFamily: '72', 
                      fontWeight: '400', 
                      lineHeight: '14px', 
                      wordWrap: 'break-word'
                    }}>
                      {item.status}
                    </div>
                    <div data-buttons="1" style={{
                      flexDirection: 'column', 
                      justifyContent: 'flex-start', 
                      alignItems: 'flex-start', 
                      gap: '10px', 
                      display: 'flex'
                    }}>
                      <div 
                        onClick={item.onButtonClick}
                        data-attention-badge="false" 
                        data-counter-badge="False" 
                        data-form-factor="Cozy" 
                        data-icon-left="false" 
                        data-interaction-state="Regular" 
                        data-toggled="False" 
                        data-type="Secondary" 
                        style={{
                          alignSelf: 'stretch', 
                          minHeight: '36px', 
                          padding: '10px', 
                          background: 'var(--Button-Standard-sapButton_Background, white)', 
                          borderRadius: '8px', 
                          outline: '1px var(--Button-Standard-sapButton_BorderColor, #BCC3CA) solid', 
                          outlineOffset: '-1px', 
                          justifyContent: 'flex-end', 
                          alignItems: 'center', 
                          gap: '6px', 
                          display: 'inline-flex',
                          cursor: 'pointer'
                        }}
                      >
                        <div style={{
                          color: 'var(--Button-Standard-sapButton_TextColor, #0064D9)', 
                          fontSize: '14px', 
                          fontFamily: '72', 
                          fontWeight: '600', 
                          wordWrap: 'break-word'
                        }}>
                          {item.buttonText}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div style={{
            width: '384px', 
            height: '48px', 
            position: 'relative', 
            background: 'white', 
            borderBottomRightRadius: '16px', 
            borderBottomLeftRadius: '16px'
          }}>
            <div 
              onClick={onFooterButton}
              data-attention-badge="false" 
              data-counter-badge="False" 
              data-form-factor="Compact" 
              data-icon-left="false" 
              data-interaction-state="Regular" 
              data-toggled="False" 
              data-type="Tertiary" 
              style={{
                height: '32px', 
                minHeight: '26px', 
                paddingLeft: '8px', 
                paddingRight: '8px', 
                paddingTop: '5px', 
                paddingBottom: '5px', 
                left: '8px', 
                top: '8px', 
                position: 'absolute', 
                background: 'var(--Button-Lite-sapButton_Lite_Background, rgba(0, 0, 0, 0))', 
                overflow: 'hidden', 
                borderRadius: '8px', 
                outline: '1px var(--Button-Lite-sapButton_Lite_BorderColor, rgba(0, 0, 0, 0)) solid', 
                outlineOffset: '-1px', 
                justifyContent: 'center', 
                alignItems: 'center', 
                gap: '6px', 
                display: 'inline-flex',
                cursor: 'pointer'
              }}
            >
              <div style={{
                color: 'var(--Button-Lite-sapButton_Lite_TextColor, #0064D9)', 
                fontSize: '14px', 
                fontFamily: '72', 
                fontWeight: '600', 
                wordWrap: 'break-word'
              }}>
                {footerButtonText}
              </div>
            </div>
            <div style={{
              width: '81px', 
              height: '32px', 
              left: '295px', 
              top: '8px', 
              position: 'absolute'
            }}>
              <div 
                onClick={onViewMore}
                data-attention-badge="false" 
                data-counter-badge="False" 
                data-form-factor="Compact" 
                data-icon-left="false" 
                data-interaction-state="Regular" 
                data-toggled="False" 
                data-type="Tertiary" 
                style={{
                  height: '32px', 
                  minHeight: '26px', 
                  paddingLeft: '8px', 
                  paddingRight: '8px', 
                  paddingTop: '5px', 
                  paddingBottom: '5px', 
                  left: '0px', 
                  top: '0px', 
                  position: 'absolute', 
                  background: 'var(--Button-Lite-sapButton_Lite_Background, rgba(0, 0, 0, 0))', 
                  overflow: 'hidden', 
                  borderRadius: '8px', 
                  outline: '1px var(--Button-Lite-sapButton_Lite_BorderColor, rgba(0, 0, 0, 0)) solid', 
                  outlineOffset: '-1px', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  gap: '6px', 
                  display: 'inline-flex',
                  cursor: 'pointer'
                }}
              >
                <div style={{
                  color: 'var(--Button-Lite-sapButton_Lite_TextColor, #0064D9)', 
                  fontSize: '14px', 
                  fontFamily: '72', 
                  fontWeight: '600', 
                  wordWrap: 'break-word'
                }}>
                  {viewMoreText}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JouleList; 