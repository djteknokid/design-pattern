"use client";

import React, { useState } from 'react';

/**
 * JouleContextualList - A collapsible contextual list component for the Joule design system
 * 
 * @description This component creates collapsible sections with contextual information like references,
 * related items, or grouped content. Features expand/collapse functionality with proper SAP styling.
 * 
 * @usage Use this component when you need to display:
 * - Reference lists that can be collapsed
 * - Contextual information that users can show/hide
 * - Grouped content with optional visibility
 * - Related items or links with descriptions
 * 
 * @example
 * ```tsx
 * import { JouleContextualList } from '@/components/Joule';
 * 
 * const References = () => (
 *   <JouleContextualList
 *     title="References"
 *     count={3}
 *     isExpanded={true}
 *     items={[
 *       {
 *         id: '1',
 *         title: '[1] Research Paper Title',
 *         description: 'A comprehensive study on AI applications in business processes.',
 *         link: 'https://example.com/paper1'
 *       }
 *     ]}
 *     onToggle={(expanded) => console.log('Toggled:', expanded)}
 *   />
 * );
 * ```
 */

interface ContextualItem {
  id: string;
  title: string;
  description: string;
  link?: string;
  onClick?: () => void;
}

interface JouleContextualListProps {
  title?: string;
  count?: number;
  isExpanded?: boolean;
  items?: ContextualItem[];
  onToggle?: (isExpanded: boolean) => void;
  maxDescriptionLines?: 2 | 4;
}

const JouleContextualList: React.FC<JouleContextualListProps> = ({
  title = "Title",
  count = 2,
  isExpanded = false,
  items = [
    {
      id: '1',
      title: '[1] Link 1',
      description: 'This is a description that goes here. It is a shorter description (2/4 lines) before ellipsis appear. In the fullscreen mode the text is also accommodating 2 or 4 lines and then it truncates'
    },
    {
      id: '2',
      title: '[2] Link 2', 
      description: 'This is a description that goes here. It is a shorter description (2/4 lines) before ellipsis appear. In the fullscreen mode the text is also accommodating 2 or 4 lines and then it truncates'
    }
  ],
  onToggle = () => {},
  maxDescriptionLines = 2
}) => {
  const [expanded, setExpanded] = useState(isExpanded);

  const handleToggle = () => {
    const newExpanded = !expanded;
    setExpanded(newExpanded);
    onToggle(newExpanded);
  };

  const handleItemClick = (item: ContextualItem) => {
    if (item.onClick) {
      item.onClick();
    } else if (item.link) {
      window.open(item.link, '_blank');
    }
  };

  return (
    <div 
      data-details="False" 
      data-footer="true" 
      data-fullscreen="False" 
      data-header="true" 
      data-mode="Default" 
      data-type="Contextual" 
      data-view-more="true" 
      style={{
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        alignItems: 'flex-start', 
        display: 'inline-flex'
      }}
    >
      <div style={{
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        alignItems: 'flex-start', 
        display: 'flex'
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
          display: 'flex'
        }}>
          {/* Header */}
          <div style={{
            width: '384px', 
            background: 'var(--Container-sapGroup_TitleBackground, white)', 
            overflow: 'hidden', 
            borderRadius: '12px', 
            flexDirection: 'column', 
            justifyContent: 'flex-start', 
            alignItems: 'flex-start', 
            display: 'flex'
          }}>
            <div style={{
              alignSelf: 'stretch', 
              minHeight: '40px', 
              paddingLeft: '6px', 
              paddingRight: '8px', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              display: 'inline-flex'
            }}>
              <div 
                onClick={handleToggle}
                data-attention-badge="false" 
                data-counter-badge="False" 
                data-form-factor="Compact" 
                data-interaction-state="Regular" 
                data-toggled="False" 
                data-type="Tertiary" 
                style={{
                  minHeight: '26px', 
                  paddingLeft: '8px', 
                  paddingRight: '8px', 
                  paddingTop: '5px', 
                  paddingBottom: '5px', 
                  background: 'var(--Button-Lite-sapButton_Lite_Background, rgba(0, 0, 0, 0))', 
                  borderRadius: '8px', 
                  outline: '1px var(--Button-Lite-sapButton_Lite_BorderColor, rgba(0, 0, 0, 0)) solid', 
                  outlineOffset: '-1px', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  display: 'flex',
                  cursor: 'pointer'
                }}
              >
                <div style={{width: '16px', height: '16px', position: 'relative'}}>
                  {expanded ? (
                    // Down arrow (expanded state)
                    <div style={{width: '10px', height: '6px', left: '3px', top: '5px', position: 'absolute', background: 'var(--Button-Lite-sapButton_Lite_TextColor, #0064D9)'}} />
                  ) : (
                    // Right arrow (collapsed state)
                    <div style={{width: '6px', height: '10px', left: '5px', top: '3px', position: 'absolute', background: 'var(--Button-Lite-sapButton_Lite_TextColor, #0064D9)'}} />
                  )}
                </div>
              </div>
              <div style={{
                flex: '1 1 0', 
                height: '18px', 
                color: 'var(--Container-sapGroup_TitleTextColor, #1D2D3E)', 
                fontSize: '16px', 
                fontFamily: '72', 
                fontWeight: '700', 
                wordWrap: 'break-word'
              }}>
                {title} ({count})
              </div>
            </div>

            {/* Expanded Content */}
            {expanded && (
              <div style={{
                alignSelf: 'stretch', 
                paddingBottom: '12px', 
                flexDirection: 'column', 
                justifyContent: 'flex-start', 
                alignItems: 'flex-start', 
                display: 'flex'
              }}>
                <div style={{
                  alignSelf: 'stretch', 
                  flexDirection: 'column', 
                  justifyContent: 'flex-start', 
                  alignItems: 'flex-start', 
                  display: 'flex'
                }}>
                  {items.map((item) => (
                    <div 
                      key={item.id}
                      data-description-length={`${maxDescriptionLines} lines`}
                      style={{
                        alignSelf: 'stretch', 
                        padding: '16px', 
                        background: 'white', 
                        flexDirection: 'column', 
                        justifyContent: 'flex-start', 
                        alignItems: 'flex-start', 
                        gap: '10px', 
                        display: 'flex'
                      }}
                    >
                      <div style={{
                        alignSelf: 'stretch', 
                        justifyContent: 'flex-start', 
                        alignItems: 'flex-start', 
                        display: 'inline-flex'
                      }}>
                        <div style={{
                          flex: '1 1 0', 
                          justifyContent: 'flex-start', 
                          alignItems: 'flex-start', 
                          display: 'flex'
                        }}>
                          <div style={{
                            flex: '1 1 0', 
                            flexDirection: 'column', 
                            justifyContent: 'flex-start', 
                            alignItems: 'flex-start', 
                            gap: '8px', 
                            display: 'inline-flex'
                          }}>
                            <div 
                              onClick={() => handleItemClick(item)}
                              style={{
                                alignSelf: 'stretch', 
                                justifyContent: 'center', 
                                display: 'flex', 
                                flexDirection: 'column', 
                                color: 'var(--Link-sapLinkColor, #0064D9)', 
                                fontSize: '16px', 
                                fontFamily: '72', 
                                fontWeight: '400', 
                                wordWrap: 'break-word',
                                cursor: item.link || item.onClick ? 'pointer' : 'default'
                              }}
                            >
                              {item.title}
                            </div>
                            <div style={{
                              alignSelf: 'stretch', 
                              color: '#556B82', 
                              fontSize: '14px', 
                              fontFamily: '72', 
                              fontWeight: '400', 
                              wordWrap: 'break-word',
                              display: '-webkit-box',
                              WebkitLineClamp: maxDescriptionLines,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden'
                            }}>
                              {item.description}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JouleContextualList; 