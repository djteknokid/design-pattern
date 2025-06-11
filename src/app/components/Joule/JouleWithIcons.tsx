"use client";

import React from 'react';
import { Icon } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/menu.js";
import "@ui5/webcomponents-icons/dist/full-screen.js";
import "@ui5/webcomponents-icons/dist/exit-full-screen.js";
import "@ui5/webcomponents-icons/dist/close.js";

const JouleWithIcons: React.FC = () => {
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  return (
    <div style={{width: 430, height: 742, position: 'relative'}}>
      <div style={{
        height: 742, 
        minWidth: 416, 
        left: 0, 
        top: 0, 
        position: 'absolute', 
        background: 'white', 
        boxShadow: '0px 32px 64px rgba(91, 115, 139, 0.16)', 
        borderRadius: 16, 
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        alignItems: 'flex-start', 
        display: 'inline-flex'
      }}>
        {/* Header with UI5 Icons */}
        <div style={{
          alignSelf: 'stretch', 
          height: 62, 
          minWidth: 416, 
          minHeight: 62, 
          paddingTop: 4, 
          paddingBottom: 4, 
          background: 'linear-gradient(180deg, #5D36FF 0%, #6431FA 100%)', 
          borderTopLeftRadius: 16, 
          borderTopRightRadius: 16, 
          justifyContent: 'center', 
          alignItems: 'center', 
          display: 'inline-flex'
        }}>
          <div style={{
            flex: '1 1 0', 
            paddingLeft: 4, 
            justifyContent: 'flex-start', 
            alignItems: 'center', 
            display: 'flex'
          }}>
            {/* Hamburger Menu Icon */}
            <div style={{
              paddingRight: 4, 
              justifyContent: 'flex-start', 
              alignItems: 'center', 
              display: 'flex'
            }}>
              <div style={{
                minHeight: 36, 
                padding: 10, 
                background: 'var(--Buttons-sapAssistant_lightButton_Lite_Background, rgba(255, 255, 255, 0))', 
                borderRadius: 8, 
                outline: '1px var(--Buttons-sapAssistant_Button_Lite_Stroke, rgba(255, 255, 255, 0)) solid', 
                outlineOffset: '-1px', 
                justifyContent: 'center', 
                alignItems: 'center', 
                display: 'flex',
                cursor: 'pointer'
              }}>
                <Icon name="menu" style={{color: 'white'}} />
              </div>
            </div>
            <div style={{
              color: 'white', 
              fontSize: 16, 
              fontFamily: '72', 
              fontWeight: '700', 
              wordWrap: 'break-word'
            }}>
              New Conversation
            </div>
          </div>

          <div style={{
            paddingTop: 10, 
            paddingBottom: 10, 
            paddingRight: 8, 
            justifyContent: 'flex-end', 
            alignItems: 'center', 
            gap: 8, 
            display: 'flex'
          }}>
            {/* Minimize Icon */}
            <div style={{
              minHeight: 36, 
              padding: 10, 
              background: 'var(--Buttons-sapAssistant_lightButton_Lite_Background, rgba(255, 255, 255, 0))', 
              borderRadius: 8, 
              outline: '1px var(--Buttons-sapAssistant_Button_Lite_Stroke, rgba(255, 255, 255, 0)) solid', 
              outlineOffset: '-1px', 
              justifyContent: 'center', 
              alignItems: 'center', 
              display: 'flex',
              cursor: 'pointer'
            }}>
              <div style={{
                width: 16, 
                height: 4, 
                background: 'white'
              }} />
            </div>

            {/* Fullscreen Icon */}
            <div style={{
              minHeight: 36, 
              padding: 10, 
              background: 'var(--Buttons-sapAssistant_lightButton_Lite_Background, rgba(255, 255, 255, 0))', 
              borderRadius: 8, 
              outline: '1px var(--Buttons-sapAssistant_Button_Lite_Stroke, rgba(255, 255, 255, 0)) solid', 
              outlineOffset: '-1px', 
              justifyContent: 'center', 
              alignItems: 'center', 
              display: 'flex',
              cursor: 'pointer'
            }}
            onClick={() => setIsFullscreen(!isFullscreen)}
            >
              <Icon 
                name={isFullscreen ? "exit-full-screen" : "full-screen"} 
                style={{color: 'white'}} 
              />
            </div>

            {/* Close Icon */}
            <div style={{
              minHeight: 36, 
              padding: 10, 
              background: 'var(--Buttons-sapAssistant_lightButton_Lite_Background, rgba(255, 255, 255, 0))', 
              borderRadius: 8, 
              outline: '1px var(--Buttons-sapAssistant_Button_Lite_Stroke, rgba(255, 255, 255, 0)) solid', 
              outlineOffset: '-1px', 
              justifyContent: 'center', 
              alignItems: 'center', 
              display: 'flex',
              cursor: 'pointer'
            }}>
              <Icon name="close" style={{color: 'white'}} />
            </div>
          </div>
        </div>

        {/* Rest of the component remains the same */}
        <div style={{
          width: 416, 
          flex: '1 1 0', 
          overflow: 'hidden', 
          borderTopLeftRadius: 16, 
          borderTopRightRadius: 16, 
          justifyContent: 'center', 
          alignItems: 'flex-start', 
          gap: 10, 
          display: 'inline-flex'
        }}>
          <div style={{
            flex: '1 1 0', 
            height: 616, 
            maxWidth: 1200, 
            minWidth: 416, 
            paddingTop: 16, 
            paddingBottom: 16, 
            overflow: 'hidden', 
            flexDirection: 'column', 
            justifyContent: 'flex-start', 
            alignItems: 'center', 
            gap: 16, 
            display: 'inline-flex'
          }}>
            <div style={{alignSelf: 'stretch', height: 20, position: 'relative'}}>
              <div style={{width: 416, left: 0, top: 0, position: 'absolute', textAlign: 'center'}}>
                <span style={{
                  color: '#8396A8', 
                  fontSize: 14, 
                  fontFamily: '72', 
                  fontWeight: '700', 
                  lineHeight: '20px', 
                  wordWrap: 'break-word'
                }}>Today</span>
                <span style={{
                  color: '#8396A8', 
                  fontSize: 14, 
                  fontFamily: '72', 
                  fontWeight: '400', 
                  lineHeight: '20px', 
                  wordWrap: 'break-word'
                }}> 8:00 AM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div style={{
          alignSelf: 'stretch', 
          height: 107, 
          minWidth: 416, 
          paddingTop: 16, 
          paddingBottom: 12, 
          paddingLeft: 8, 
          paddingRight: 6, 
          justifyContent: 'center', 
          alignItems: 'flex-end', 
          display: 'inline-flex'
        }}>
          <div style={{
            width: 416, 
            maxWidth: 800, 
            minWidth: 416, 
            maxHeight: 482, 
            paddingTop: 16, 
            paddingBottom: 12, 
            paddingLeft: 16, 
            paddingRight: 16, 
            justifyContent: 'center', 
            alignItems: 'flex-end', 
            display: 'flex'
          }}>
            <div style={{
              flex: '1 1 0', 
              paddingTop: 4, 
              paddingBottom: 4, 
              background: 'white', 
              boxShadow: '0px 4px 8px rgba(27, 144, 255, 0.16)', 
              borderRadius: 4, 
              outline: '2px var(--Input-Standard-sapField_Active_BorderColor, #0064D8) solid', 
              justifyContent: 'center', 
              alignItems: 'flex-end', 
              display: 'flex'
            }}>
              <div style={{
                flex: '1 1 0', 
                paddingTop: 5, 
                paddingBottom: 7, 
                paddingLeft: 8, 
                position: 'relative', 
                justifyContent: 'flex-start', 
                alignItems: 'center', 
                gap: 10, 
                display: 'flex'
              }}>
                <div style={{
                  flex: '1 1 0', 
                  justifyContent: 'center', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  color: '#556B82', 
                  fontSize: 14, 
                  fontFamily: '72', 
                  fontStyle: 'italic', 
                  fontWeight: '400', 
                  wordWrap: 'break-word'
                }}>
                  Message Joule...
                </div>
              </div>
              <div style={{
                height: 28, 
                paddingRight: 8, 
                justifyContent: 'flex-end', 
                alignItems: 'center', 
                gap: 4, 
                display: 'flex'
              }}>
                <div style={{
                  width: 28, 
                  height: 28, 
                  minHeight: 26, 
                  paddingLeft: 6, 
                  paddingRight: 6, 
                  opacity: 0.40, 
                  background: 'var(--Button-Emphasized-sapButton_Emphasized_Background, #0070F2)', 
                  borderRadius: 24, 
                  outline: '1px var(--Button-Emphasized-sapButton_Emphasized_BorderColor, #0070F2) solid', 
                  outlineOffset: '-1px', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  gap: 6, 
                  display: 'flex'
                }}>
                  <div style={{width: 16, height: 16, position: 'relative'}}>
                    <div style={{
                      width: 13.99, 
                      height: 14, 
                      left: 1, 
                      top: 1, 
                      position: 'absolute', 
                      background: 'var(--Button-Emphasized-sapButton_Emphasized_TextColor, white)'
                    }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JouleWithIcons; 