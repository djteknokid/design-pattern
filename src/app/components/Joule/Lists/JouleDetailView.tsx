"use client";

import React from 'react';

/**
 * JouleDetailView - A comprehensive detail view component for displaying item details in the Joule design system
 * 
 * @description This component is perfect for showing detailed information about items from lists. 
 * It includes a header with navigation, item summary, scrollable content sections, and action buttons.
 * Designed to work seamlessly with JouleList component.
 * 
 * @usage Use this component when you need to display:
 * - Detailed task information with multiple fields
 * - Project details with specifications and status
 * - User profiles with comprehensive information
 * - Any detailed view that follows from a list item selection
 * 
 * @example
 * ```tsx
 * import { JouleDetailView } from '@/components/Joule';
 * 
 * const TaskDetail = () => (
 *   <JouleDetailView
 *     title="Review Budget Report"
 *     subtitle="Finance Team"
 *     description="Q4 budget analysis needs your approval"
 *     status="Urgent"
 *     statusColor="#FF4444"
 *     sectionTitle="Task Details"
 *     fields={[
 *       { label: "Due Date", content: "March 15, 2024" },
 *       { label: "Priority", content: "High" },
 *       { label: "Assigned By", content: "John Smith" }
 *     ]}
 *     actions={[
 *       { label: "Approve", onClick: () => console.log('Approved') },
 *       { label: "Request Changes", onClick: () => console.log('Changes requested') }
 *     ]}
 *     onBack={() => console.log('Go back')}
 *     onFullscreen={() => console.log('Fullscreen')}
 *     onClose={() => console.log('Close')}
 *   />
 * );
 * ```
 */

interface DetailField {
  label: string;
  content: string;
}

interface DetailAction {
  label: string;
  onClick: () => void;
}

interface JouleDetailViewProps {
  title?: string;
  subtitle?: string;
  description?: string;
  status?: string;
  statusColor?: string;
  sectionTitle?: string;
  fields?: DetailField[];
  actions?: DetailAction[];
  onBack?: () => void;
  onFullscreen?: () => void;
  onClose?: () => void;
}

const JouleDetailView: React.FC<JouleDetailViewProps> = ({
  title = "Title",
  subtitle = "Subtitle", 
  description = "This is a description that goes here",
  status = "Status",
  statusColor = "var(--Semantic-sapSuccessColor, #256F3A)",
  sectionTitle = "Section Title (1 section only)",
  fields = [
    { label: "Label Title", content: "Content" },
    { label: "Label Title", content: "Content" },
    { label: "Label Title", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { label: "Label Title", content: "Content" },
    { label: "Label Title", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
  ],
  actions = [
    { label: "Button 1", onClick: () => console.log('Button 1 clicked') },
    { label: "Button 2", onClick: () => console.log('Button 2 clicked') }
  ],
  onBack = () => console.log('Back clicked'),
  onFullscreen = () => console.log('Fullscreen clicked'),
  onClose = () => console.log('Close clicked')
}) => {
  return (
    <div 
      data-panel-mode="Default" 
      style={{
        width: '416px', 
        height: '742px', 
        background: 'var(--Main-sapBaseColor, white)', 
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.20)', 
        overflow: 'hidden', 
        borderRadius: '16px', 
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        alignItems: 'flex-start', 
        display: 'inline-flex'
      }}
    >
      {/* Header */}
      <div 
        data-state="Detail Screen" 
        style={{
          alignSelf: 'stretch', 
          height: '56px', 
          background: 'linear-gradient(180deg, #5D36FF 0%, #6431FA 100%)', 
          borderTopLeftRadius: '16px', 
          borderTopRightRadius: '16px', 
          justifyContent: 'center', 
          alignItems: 'center', 
          display: 'inline-flex'
        }}
      >
        <div style={{
          flex: '1 1 0', 
          paddingLeft: '4px', 
          justifyContent: 'flex-start', 
          alignItems: 'center', 
          gap: '8px', 
          display: 'flex'
        }}>
          <div 
            onClick={onBack}
            data-interaction-state="Regular" 
            style={{
              minHeight: '36px', 
              padding: '10px', 
              background: 'var(--Buttons-sapAssistant_lightButton_Lite_Background, rgba(255, 255, 255, 0))', 
              borderRadius: '8px', 
              outline: '1px var(--Buttons-sapAssistant_Button_Lite_Stroke, rgba(255, 255, 255, 0)) solid', 
              outlineOffset: '-1px', 
              justifyContent: 'center', 
              alignItems: 'center', 
              display: 'flex',
              cursor: 'pointer'
            }}
          >
            <div style={{width: '16px', height: '16px', position: 'relative'}}>
              <div style={{width: '6px', height: '10px', left: '5px', top: '3px', position: 'absolute', background: 'var(--Buttons-sapAssistant_lightButton_Lite_textColor, white)'}} />
            </div>
          </div>
        </div>
        <div style={{
          paddingTop: '10px', 
          paddingBottom: '10px', 
          paddingRight: '8px', 
          justifyContent: 'flex-end', 
          alignItems: 'center', 
          gap: '8px', 
          display: 'flex'
        }}>
          <div data-fullscreen="False" style={{
            justifyContent: 'flex-start', 
            alignItems: 'flex-start', 
            display: 'flex'
          }}>
            <div 
              onClick={onFullscreen}
              data-interaction-state="Regular" 
              style={{
                minHeight: '36px', 
                padding: '10px', 
                background: 'var(--Buttons-sapAssistant_lightButton_Lite_Background, rgba(255, 255, 255, 0))', 
                borderRadius: '8px', 
                outline: '1px var(--Buttons-sapAssistant_Button_Lite_Stroke, rgba(255, 255, 255, 0)) solid', 
                outlineOffset: '-1px', 
                justifyContent: 'center', 
                alignItems: 'center', 
                display: 'flex',
                cursor: 'pointer'
              }}
            >
              <div style={{width: '16px', height: '16px', position: 'relative'}}>
                <div style={{width: '16px', height: '15.99px', left: '0px', top: '0.01px', position: 'absolute', background: 'var(--Buttons-sapAssistant_lightButton_Lite_textColor, white)'}} />
              </div>
            </div>
          </div>
          <div 
            onClick={onClose}
            data-interaction-state="Regular" 
            style={{
              minHeight: '36px', 
              padding: '10px', 
              background: 'var(--Buttons-sapAssistant_lightButton_Lite_Background, rgba(255, 255, 255, 0))', 
              borderRadius: '8px', 
              outline: '1px var(--Buttons-sapAssistant_Button_Lite_Stroke, rgba(255, 255, 255, 0)) solid', 
              outlineOffset: '-1px', 
              justifyContent: 'center', 
              alignItems: 'center', 
              display: 'flex',
              cursor: 'pointer'
            }}
          >
            <div style={{width: '16px', height: '16px', position: 'relative'}}>
              <div style={{width: '9.99px', height: '9.99px', left: '3.01px', top: '3.02px', position: 'absolute', background: 'var(--Buttons-sapAssistant_lightButton_Lite_textColor, white)'}} />
            </div>
          </div>
        </div>
      </div>

      <div style={{
        alignSelf: 'stretch', 
        height: '680px', 
        position: 'relative', 
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        alignItems: 'flex-start', 
        display: 'flex'
      }}>
        {/* Item Header */}
        <div style={{
          alignSelf: 'stretch', 
          height: '99px', 
          padding: '16px', 
          background: 'var(--Main-sapBaseColor, white)', 
          borderTopLeftRadius: '16px', 
          borderTopRightRadius: '16px', 
          flexDirection: 'column', 
          justifyContent: 'flex-start', 
          alignItems: 'flex-start', 
          gap: '10px', 
          display: 'flex'
        }}>
          <div style={{
            alignSelf: 'stretch', 
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
              <div style={{
                flex: '1 1 0', 
                height: '67px', 
                position: 'relative', 
                justifyContent: 'flex-start', 
                alignItems: 'flex-start', 
                gap: '10px', 
                display: 'flex'
              }}>
                <div style={{
                  left: '0px', 
                  top: '0px', 
                  position: 'absolute', 
                  flexDirection: 'column', 
                  justifyContent: 'flex-start', 
                  alignItems: 'flex-start', 
                  gap: '5px', 
                  display: 'inline-flex'
                }}>
                  <div style={{
                    alignSelf: 'stretch', 
                    color: 'var(--Text-sapTextColor, #1D2D3E)', 
                    fontSize: '16px', 
                    fontFamily: '72', 
                    fontWeight: '400', 
                    lineHeight: '18px', 
                    wordWrap: 'break-word'
                  }}>
                    {title}
                  </div>
                  <div style={{
                    alignSelf: 'stretch', 
                    color: 'var(--Text-sapContent_LabelColor, #556B82)', 
                    fontSize: '14px', 
                    fontFamily: '72', 
                    fontWeight: '400', 
                    lineHeight: '20px', 
                    wordWrap: 'break-word'
                  }}>
                    {subtitle}
                  </div>
                  <div style={{
                    alignSelf: 'stretch', 
                    color: 'var(--Text-sapContent_LabelColor, #556B82)', 
                    fontSize: '14px', 
                    fontFamily: '72', 
                    fontWeight: '400', 
                    lineHeight: '20px', 
                    wordWrap: 'break-word'
                  }}>
                    {description}
                  </div>
                </div>
                <div style={{
                  left: '286px', 
                  top: '0px', 
                  position: 'absolute', 
                  textAlign: 'right', 
                  color: statusColor, 
                  fontSize: '12px', 
                  fontFamily: '72', 
                  fontWeight: '400', 
                  lineHeight: '14px', 
                  wordWrap: 'break-word'
                }}>
                  {status}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div style={{
          alignSelf: 'stretch', 
          height: '537px', 
          paddingTop: '24px', 
          overflow: 'hidden', 
          justifyContent: 'flex-start', 
          alignItems: 'flex-start', 
          gap: '10px', 
          display: 'inline-flex'
        }}>
          <div style={{
            flex: '1 1 0', 
            paddingLeft: '16px', 
            paddingRight: '16px', 
            flexDirection: 'column', 
            justifyContent: 'flex-start', 
            alignItems: 'flex-start', 
            gap: '12px', 
            display: 'inline-flex'
          }}>
            <div style={{
              alignSelf: 'stretch', 
              color: 'var(--Text-sapTextColor, #1D2D3E)', 
              fontSize: '16px', 
              fontFamily: '72', 
              fontWeight: '400', 
              lineHeight: '20px', 
              wordWrap: 'break-word'
            }}>
              {sectionTitle}
            </div>
            
            {fields.map((field, index) => (
              <div key={index} style={{
                alignSelf: 'stretch', 
                flexDirection: 'column', 
                justifyContent: 'flex-start', 
                alignItems: 'flex-start', 
                gap: '10px', 
                display: 'flex'
              }}>
                <div style={{
                  alignSelf: 'stretch', 
                  flexDirection: 'column', 
                  justifyContent: 'flex-start', 
                  alignItems: 'flex-start', 
                  gap: '2px', 
                  display: 'flex'
                }}>
                  <div style={{
                    alignSelf: 'stretch', 
                    color: 'var(--Text-sapContent_LabelColor, #556B82)', 
                    fontSize: '14px', 
                    fontFamily: '72', 
                    fontWeight: '400', 
                    lineHeight: '20px', 
                    wordWrap: 'break-word'
                  }}>
                    {field.label}
                  </div>
                  <div style={{
                    alignSelf: 'stretch', 
                    color: 'var(--Text-sapTextColor, #1D2D3E)', 
                    fontSize: '14px', 
                    fontFamily: '72', 
                    fontWeight: '400', 
                    lineHeight: '20px', 
                    wordWrap: 'break-word'
                  }}>
                    {field.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{
          width: '416px', 
          paddingLeft: '2px', 
          paddingRight: '2px', 
          left: '0px', 
          top: '591px', 
          position: 'absolute', 
          background: 'var(--Main-sapBaseColor, white)', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center', 
          gap: '1px', 
          display: 'flex'
        }}>
          {actions.map((action, index) => (
            <div 
              key={index}
              onClick={action.onClick}
              data-color="Blue" 
              data-state="Rest" 
              data-style="Naked" 
              style={{
                alignSelf: 'stretch', 
                height: '44px', 
                overflow: 'hidden', 
                borderRadius: '16px', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center', 
                gap: '10px', 
                display: 'flex',
                cursor: 'pointer'
              }}
            >
              <div style={{
                paddingLeft: '12px', 
                paddingRight: '12px', 
                paddingTop: '4px', 
                paddingBottom: '4px', 
                borderRadius: '8px', 
                justifyContent: 'center', 
                alignItems: 'center', 
                gap: '4px', 
                display: 'inline-flex'
              }}>
                <div style={{
                  textAlign: 'center', 
                  color: 'var(--Button-Standard-sapButton_TextColor, #0064D9)', 
                  fontSize: '14px', 
                  fontFamily: '72', 
                  fontWeight: '600', 
                  lineHeight: '24px', 
                  wordWrap: 'break-word'
                }}>
                  {action.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JouleDetailView; 