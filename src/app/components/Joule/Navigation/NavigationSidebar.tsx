"use client";

import React, { useState } from 'react';

/**
 * NavigationSidebar - Expandable navigation sidebar for the Joule design system
 * 
 * @description This component provides a full navigation sidebar with conversation management,
 * collapsible sections, and settings. Features hamburger menu, active/expired conversations,
 * and proper SAP design system styling.
 * 
 * @usage Use this component for:
 * - Main navigation in Joule interface
 * - Conversation management and history
 * - Settings and AI notice access
 * - Expandable/collapsible sidebar functionality
 * 
 * @example
 * ```tsx
 * import { NavigationSidebar } from '@/components/Joule';
 * 
 * <NavigationSidebar
 *   activeConversations={[
 *     { id: '1', title: 'First Active Conversation Item' },
 *     { id: '2', title: 'Second Active Conversation Item' }
 *   ]}
 *   expiredConversations={[
 *     { id: '3', title: 'Old Conversation' }
 *   ]}
 *   onNewConversation={() => console.log('New conversation')}
 *   onConversationClick={(id) => console.log('Conversation clicked:', id)}
 * />
 * ```
 */

interface ConversationItem {
  id: string;
  title: string;
  isSelected?: boolean;
  isUpdated?: boolean;
}

interface NavigationSidebarProps {
  activeConversations?: ConversationItem[];
  expiredConversations?: ConversationItem[];
  activeCount?: number;
  activeTotal?: number;
  onNewConversation?: () => void;
  onConversationClick?: (id: string) => void;
  onMenuClick?: () => void;
  onSettingsClick?: () => void;
  onAINoticeClick?: () => void;
  isExpanded?: boolean;
}

const NavigationSidebar: React.FC<NavigationSidebarProps> = ({
  activeConversations = [
    { id: '1', title: 'First Active Conversation Item' },
    { id: '2', title: 'Second Active Conversation Item' }
  ],
  expiredConversations = [],
  activeCount = 2,
  activeTotal = 10,
  onNewConversation = () => {},
  onConversationClick = () => {},
  onMenuClick = () => {},
  onSettingsClick = () => {},
  onAINoticeClick = () => {},
  isExpanded = true
}) => {
  const [activeExpanded, setActiveExpanded] = useState(true);
  const [expiredExpanded, setExpiredExpanded] = useState(false);

  if (!isExpanded) return null;

  return (
    <div 
      data-form-factor="Compact" 
      data-type="Default" 
      style={{
        width: 256, 
        height: 742, 
        left: 0, 
        top: 0, 
        position: 'absolute', 
        background: 'var(--List-sapList_Background, white)', 
        boxShadow: '0px 8px 16px rgba(34, 53, 72, 0.16)', 
        overflow: 'hidden', 
        borderTopLeftRadius: 16, 
        borderBottomLeftRadius: 16, 
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        alignItems: 'flex-start', 
        display: 'inline-flex'
      }}
    >
      {/* Header */}
      <div style={{
        alignSelf: 'stretch', 
        paddingBottom: 12, 
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        alignItems: 'flex-start', 
        display: 'flex'
      }}>
        <div style={{
          alignSelf: 'stretch', 
          height: 56, 
          maxHeight: 56, 
          paddingTop: 2, 
          paddingBottom: 2, 
          background: 'var(--List-sapList_Background, white)', 
          borderTopLeftRadius: 16, 
          justifyContent: 'flex-end', 
          alignItems: 'center', 
          display: 'inline-flex'
        }}>
          <div style={{
            flex: '1 1 0', 
            maxWidth: 1016, 
            paddingLeft: 4, 
            justifyContent: 'flex-start', 
            alignItems: 'center', 
            display: 'flex'
          }}>
            <div style={{
              paddingRight: 4, 
              justifyContent: 'flex-start', 
              alignItems: 'center', 
              display: 'flex'
            }}>
              <div 
                data-interaction-state="Regular" 
                onClick={onMenuClick}
                style={{
                  minHeight: 36, 
                  padding: 10, 
                  background: 'var(--Buttons-sapAssistant_Button_Lite_Background, rgba(255, 255, 255, 0))', 
                  borderRadius: 8, 
                  outline: '1px var(--Buttons-sapAssistant_Button_Lite_Stroke, rgba(255, 255, 255, 0)) solid', 
                  outlineOffset: '-1px', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  display: 'flex',
                  cursor: 'pointer'
                }}
              >
                <div style={{width: 16, height: 16, position: 'relative'}}>
                  {/* Menu2 Icon - Modern hamburger menu */}
                  <div style={{
                    width: 14,
                    height: 2,
                    left: 1,
                    top: 3,
                    position: 'absolute',
                    background: 'var(--Buttons-sapAssistant_darkButton_Lite_textColor, #1D2D3E)',
                    borderRadius: 1
                  }} />
                  <div style={{
                    width: 14,
                    height: 2,
                    left: 1,
                    top: 7,
                    position: 'absolute',
                    background: 'var(--Buttons-sapAssistant_darkButton_Lite_textColor, #1D2D3E)',
                    borderRadius: 1
                  }} />
                  <div style={{
                    width: 14,
                    height: 2,
                    left: 1,
                    top: 11,
                    position: 'absolute',
                    background: 'var(--Buttons-sapAssistant_darkButton_Lite_textColor, #1D2D3E)',
                    borderRadius: 1
                  }} />
                </div>
              </div>
            </div>
            <div style={{
              color: 'var(--List-sapList_TextColor, #131E29)', 
              fontSize: 16, 
              fontFamily: '72', 
              fontWeight: '700', 
              wordWrap: 'break-word'
            }}>
              Joule
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        alignSelf: 'stretch', 
        flex: '1 1 0', 
        paddingBottom: 8, 
        paddingLeft: 8, 
        paddingRight: 8, 
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        alignItems: 'flex-start', 
        gap: 4, 
        display: 'flex'
      }}>
        {/* New Conversation */}
        <div 
          data-form-factor="Compact" 
          data-interaction-state="Regular" 
          onClick={onNewConversation}
          style={{
            width: 240, 
            height: 32, 
            padding: 8, 
            background: 'var(--List-sapList_Background, white)', 
            borderRadius: 6, 
            borderBottom: '1px var(--Components-Item-List-Border, rgba(255, 255, 255, 0)) solid', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            display: 'inline-flex',
            cursor: 'pointer'
          }}
        >
          <div style={{
            flex: '1 1 0', 
            justifyContent: 'flex-start', 
            alignItems: 'center', 
            gap: 4, 
            display: 'flex'
          }}>
            <div style={{
              flex: '1 1 0', 
              justifyContent: 'flex-start', 
              alignItems: 'center', 
              gap: 8, 
              display: 'flex'
            }}>
              <div style={{
                width: 16, 
                justifyContent: 'flex-start', 
                alignItems: 'center', 
                display: 'flex'
              }}>
                <div style={{width: 16, height: 16, position: 'relative'}}>
                  {/* Add Icon - Plus symbol */}
                  <div style={{
                    width: 12,
                    height: 2,
                    left: 2,
                    top: 7,
                    position: 'absolute',
                    background: 'var(--List-sapList_TextColor, #1D2D3E)',
                    borderRadius: 1
                  }} />
                  <div style={{
                    width: 2,
                    height: 12,
                    left: 7,
                    top: 2,
                    position: 'absolute',
                    background: 'var(--List-sapList_TextColor, #1D2D3E)',
                    borderRadius: 1
                  }} />
                </div>
              </div>
              <div style={{
                flex: '1 1 0', 
                color: 'var(--List-sapList_TextColor, #1D2D3E)', 
                fontSize: 14, 
                fontFamily: '72', 
                fontWeight: '700', 
                wordWrap: 'break-word'
              }}>
                New Conversation
              </div>
            </div>
          </div>
        </div>

        {/* Active Conversations Section */}
        <div 
          data-collapsed={!activeExpanded} 
          data-form-factor="Compact" 
          data-interaction-state="Regular" 
          data-type="Active Conversations" 
          style={{
            width: 240, 
            height: 32, 
            padding: 8, 
            background: 'var(--List-sapList_Background, white)', 
            borderRadius: 6, 
            borderBottom: '1px var(--Components-Item-List-Border, rgba(255, 255, 255, 0)) solid', 
            justifyContent: 'flex-start', 
            alignItems: 'center', 
            gap: 4, 
            display: 'inline-flex'
          }}
        >
          <div style={{
            flex: '1 1 0', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            display: 'flex'
          }}>
            <div style={{
              justifyContent: 'flex-start', 
              alignItems: 'center', 
              gap: 4, 
              display: 'flex'
            }}>
              <div style={{
                color: 'var(--List-sapList_TextColor, #1D2D3E)', 
                fontSize: 14, 
                fontFamily: '72', 
                fontWeight: '700', 
                wordWrap: 'break-word'
              }}>
                Active
              </div>
            </div>
            <div style={{
              justifyContent: 'flex-start', 
              alignItems: 'center', 
              gap: 10, 
              display: 'flex'
            }}>
              <div style={{
                paddingLeft: 4, 
                paddingRight: 4, 
                background: 'var(--Assistant-Badge-BG, rgba(93, 54, 255, 0.05))', 
                borderRadius: 27, 
                justifyContent: 'flex-end', 
                alignItems: 'center', 
                gap: 4, 
                display: 'flex'
              }}>
                <div data-expired="True" style={{width: 28, height: 16, position: 'relative'}}>
                  <div style={{
                    left: 0, 
                    top: 0, 
                    position: 'absolute', 
                    textAlign: 'right', 
                    color: 'var(--sapAssistant_List_badge-Text, #5D36FF)', 
                    fontSize: 14, 
                    fontFamily: '72', 
                    fontWeight: '400', 
                    wordWrap: 'break-word'
                  }}>
                    {activeCount}/{activeTotal}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div 
            data-interaction-state="Regular" 
            onClick={() => setActiveExpanded(!activeExpanded)}
            style={{
              minHeight: 26, 
              paddingLeft: 8, 
              paddingRight: 8, 
              paddingTop: 5, 
              paddingBottom: 5, 
              background: 'var(--Buttons-sapAssistant_Button_Lite_Background, rgba(255, 255, 255, 0))', 
              borderRadius: 8, 
              outline: '1px var(--Buttons-sapAssistant_Button_Lite_Stroke, rgba(255, 255, 255, 0)) solid', 
              outlineOffset: '-1px', 
              justifyContent: 'center', 
              alignItems: 'center', 
              display: 'flex',
              cursor: 'pointer'
            }}
          >
            <div style={{width: 16, height: 16, position: 'relative'}}>
              {/* Paper-plane icon */}
              <div style={{
                width: 12,
                height: 8,
                left: 2,
                top: 4,
                position: 'absolute',
                background: 'transparent',
                border: '1px solid var(--Buttons-sapAssistant_darkButton_Lite_textColor, #1D2D3E)',
                borderLeft: 'none',
                borderRadius: '0 2px 2px 0',
                transform: activeExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                transformOrigin: 'center'
              }} />
              <div style={{
                width: 0,
                height: 0,
                left: activeExpanded ? 6 : 2,
                top: activeExpanded ? 2 : 6,
                position: 'absolute',
                borderLeft: '4px solid var(--Buttons-sapAssistant_darkButton_Lite_textColor, #1D2D3E)',
                borderTop: '2px solid transparent',
                borderBottom: '2px solid transparent',
                transform: activeExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                transformOrigin: 'left center'
              }} />
            </div>
          </div>
        </div>

        {/* Active Conversations List */}
        {activeExpanded && (
          <div style={{
            flexDirection: 'column', 
            justifyContent: 'flex-start', 
            alignItems: 'flex-start', 
            gap: 4, 
            display: 'flex'
          }}>
            {activeConversations.map((conversation) => (
              <div 
                key={conversation.id}
                data-form-factor="Compact" 
                data-interaction-state="Regular" 
                data-selected={conversation.isSelected} 
                data-updated={conversation.isUpdated} 
                onClick={() => onConversationClick(conversation.id)}
                style={{
                  width: 240, 
                  height: 32, 
                  paddingTop: 8, 
                  paddingBottom: 8, 
                  paddingLeft: 12, 
                  paddingRight: 8, 
                  background: conversation.isSelected 
                    ? 'var(--List-sapList_SelectionBackground, rgba(93, 54, 255, 0.1))' 
                    : 'var(--List-sapList_Background, white)', 
                  borderRadius: 6, 
                  borderBottom: '1px var(--Components-Item-List-Border, rgba(255, 255, 255, 0)) solid', 
                  justifyContent: 'flex-start', 
                  alignItems: 'center', 
                  gap: 8, 
                  display: 'inline-flex',
                  cursor: 'pointer'
                }}
              >
                <div style={{
                  flex: '1 1 0', 
                  color: 'var(--List-sapList_TextColor, #1D2D3E)', 
                  fontSize: 14, 
                  fontFamily: '72', 
                  fontWeight: '400', 
                  wordWrap: 'break-word'
                }}>
                  {conversation.title}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Expired Conversations Section */}
        <div 
          data-collapsed={!expiredExpanded} 
          data-form-factor="Compact" 
          data-interaction-state="Regular" 
          data-type="Expired Conversations" 
          style={{
            width: 240, 
            height: 32, 
            padding: 8, 
            background: 'var(--List-sapList_Background, white)', 
            borderRadius: 6, 
            borderBottom: '1px var(--Components-Item-List-Border, rgba(255, 255, 255, 0)) solid', 
            justifyContent: 'flex-start', 
            alignItems: 'center', 
            gap: 4, 
            display: 'inline-flex'
          }}
        >
          <div style={{
            flex: '1 1 0', 
            justifyContent: 'flex-start', 
            alignItems: 'center', 
            gap: 4, 
            display: 'flex'
          }}>
            <div style={{
              justifyContent: 'flex-start', 
              alignItems: 'center', 
              gap: 4, 
              display: 'flex'
            }}>
              <div style={{
                color: 'var(--List-sapList_TextColor, #1D2D3E)', 
                fontSize: 14, 
                fontFamily: '72', 
                fontWeight: '700', 
                wordWrap: 'break-word'
              }}>
                Expired
              </div>
            </div>
          </div>
          <div 
            data-interaction-state="Regular" 
            onClick={() => setExpiredExpanded(!expiredExpanded)}
            style={{
              minHeight: 26, 
              paddingLeft: 8, 
              paddingRight: 8, 
              paddingTop: 5, 
              paddingBottom: 5, 
              background: 'var(--Buttons-sapAssistant_Button_Lite_Background, rgba(255, 255, 255, 0))', 
              borderRadius: 8, 
              outline: '1px var(--Buttons-sapAssistant_Button_Lite_Stroke, rgba(255, 255, 255, 0)) solid', 
              outlineOffset: '-1px', 
              justifyContent: 'center', 
              alignItems: 'center', 
              display: 'flex',
              cursor: 'pointer'
            }}
          >
            <div style={{width: 16, height: 16, position: 'relative'}}>
              {/* Paper-plane icon */}
              <div style={{
                width: 12,
                height: 8,
                left: 2,
                top: 4,
                position: 'absolute',
                background: 'transparent',
                border: '1px solid var(--Buttons-sapAssistant_darkButton_Lite_textColor, #1D2D3E)',
                borderLeft: 'none',
                borderRadius: '0 2px 2px 0',
                transform: expiredExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                transformOrigin: 'center'
              }} />
              <div style={{
                width: 0,
                height: 0,
                left: expiredExpanded ? 6 : 2,
                top: expiredExpanded ? 2 : 6,
                position: 'absolute',
                borderLeft: '4px solid var(--Buttons-sapAssistant_darkButton_Lite_textColor, #1D2D3E)',
                borderTop: '2px solid transparent',
                borderBottom: '2px solid transparent',
                transform: expiredExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                transformOrigin: 'left center'
              }} />
            </div>
          </div>
        </div>

        {/* Expired Conversations List */}
        {expiredExpanded && expiredConversations.length > 0 && (
          <div style={{
            flexDirection: 'column', 
            justifyContent: 'flex-start', 
            alignItems: 'flex-start', 
            gap: 4, 
            display: 'flex'
          }}>
            {expiredConversations.map((conversation) => (
              <div 
                key={conversation.id}
                data-form-factor="Compact" 
                data-interaction-state="Regular" 
                data-selected={conversation.isSelected} 
                data-updated={conversation.isUpdated} 
                onClick={() => onConversationClick(conversation.id)}
                style={{
                  width: 240, 
                  height: 32, 
                  paddingTop: 8, 
                  paddingBottom: 8, 
                  paddingLeft: 12, 
                  paddingRight: 8, 
                  background: conversation.isSelected 
                    ? 'var(--List-sapList_SelectionBackground, rgba(93, 54, 255, 0.1))' 
                    : 'var(--List-sapList_Background, white)', 
                  borderRadius: 6, 
                  borderBottom: '1px var(--Components-Item-List-Border, rgba(255, 255, 255, 0)) solid', 
                  justifyContent: 'flex-start', 
                  alignItems: 'center', 
                  gap: 8, 
                  display: 'inline-flex',
                  cursor: 'pointer'
                }}
              >
                <div style={{
                  flex: '1 1 0', 
                  color: 'var(--List-sapList_TextColor, #1D2D3E)', 
                  fontSize: 14, 
                  fontFamily: '72', 
                  fontWeight: '400', 
                  wordWrap: 'break-word'
                }}>
                  {conversation.title}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{
        alignSelf: 'stretch', 
        paddingBottom: 8, 
        paddingLeft: 8, 
        paddingRight: 8, 
        background: 'var(--List-sapList_Background, white)', 
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        alignItems: 'flex-start', 
        gap: 8, 
        display: 'flex'
      }}>
        {/* Separator */}
        <div style={{
          alignSelf: 'stretch', 
          height: 1, 
          background: 'var(--Toolbar-sapToolbar_SeparatorColor, #D9D9D9)', 
          borderRadius: 2
        }} />

        {/* Settings */}
        <div 
          data-form-factor="Compact" 
          data-interaction-state="Regular" 
          data-type="Settings" 
          onClick={onSettingsClick}
          style={{
            width: 240, 
            height: 32, 
            padding: 8, 
            background: 'var(--List-sapList_Background, white)', 
            borderRadius: 6, 
            borderBottom: '1px var(--Components-Item-List-Border, rgba(255, 255, 255, 0)) solid', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            display: 'inline-flex',
            cursor: 'pointer'
          }}
        >
          <div style={{
            flex: '1 1 0', 
            justifyContent: 'flex-start', 
            alignItems: 'center', 
            gap: 4, 
            display: 'flex'
          }}>
            <div style={{
              flex: '1 1 0', 
              justifyContent: 'flex-start', 
              alignItems: 'center', 
              gap: 8, 
              display: 'flex'
            }}>
              <div style={{
                width: 16, 
                justifyContent: 'flex-start', 
                alignItems: 'center', 
                display: 'flex'
              }}>
                <div style={{width: 16, height: 16, position: 'relative'}}>
                  <div style={{
                    width: 14.99, 
                    height: 16, 
                    left: 0.49, 
                    top: 0.01, 
                    position: 'absolute', 
                    background: 'var(--List-sapList_TextColor, #1D2D3E)'
                  }} />
                </div>
              </div>
              <div style={{
                flex: '1 1 0', 
                color: 'var(--List-sapList_TextColor, #1D2D3E)', 
                fontSize: 14, 
                fontFamily: '72', 
                fontWeight: '700', 
                wordWrap: 'break-word'
              }}>
                Settings
              </div>
            </div>
          </div>
        </div>

        {/* AI Notice */}
        <div 
          data-form-factor="Compact" 
          data-interaction-state="Regular" 
          data-type="AI Notice" 
          onClick={onAINoticeClick}
          style={{
            width: 240, 
            height: 32, 
            padding: 8, 
            background: 'var(--List-sapList_Background, white)', 
            borderRadius: 6, 
            borderBottom: '1px var(--Components-Item-List-Border, rgba(255, 255, 255, 0)) solid', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            display: 'inline-flex',
            cursor: 'pointer'
          }}
        >
          <div style={{
            flex: '1 1 0', 
            justifyContent: 'flex-start', 
            alignItems: 'center', 
            gap: 4, 
            display: 'flex'
          }}>
            <div style={{
              flex: '1 1 0', 
              justifyContent: 'flex-start', 
              alignItems: 'center', 
              gap: 8, 
              display: 'flex'
            }}>
              <div style={{
                justifyContent: 'flex-start', 
                alignItems: 'center', 
                display: 'flex'
              }}>
                <div style={{width: 16, height: 16, position: 'relative'}}>
                  <div style={{
                    width: 16, 
                    height: 16, 
                    left: 0, 
                    top: 0, 
                    position: 'absolute', 
                    background: 'var(--List-sapList_TextColor, #1D2D3E)'
                  }} />
                </div>
              </div>
              <div style={{
                flex: '1 1 0', 
                color: 'var(--List-sapList_TextColor, #1D2D3E)', 
                fontSize: 14, 
                fontFamily: '72', 
                fontWeight: '700', 
                wordWrap: 'break-word'
              }}>
                AI Notice
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationSidebar; 