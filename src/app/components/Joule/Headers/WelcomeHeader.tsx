"use client";

import React from 'react';
import { Icon } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/menu2.js";
import "@ui5/webcomponents-icons/dist/full-screen.js";
import "@ui5/webcomponents-icons/dist/decline.js";

interface WelcomeHeaderProps {
  title?: string;
  onMenuClick?: () => void;
  onFullscreenClick?: () => void;
  onDeclineClick?: () => void;
}

const WelcomeHeader: React.FC<WelcomeHeaderProps> = ({
  title = "Joule",
  onMenuClick,
  onFullscreenClick,
  onDeclineClick
}) => {
  return (
    <div data-state="Welcome Screen" style={{
      alignSelf: 'stretch', 
      height: 56, 
      minWidth: 416, 
      paddingTop: 4, 
      paddingBottom: 4, 
      background: 'linear-gradient(180deg, #5D36FF 0%, #6431FA 100%)', 
      borderTopLeftRadius: 16, 
      borderTopRightRadius: 16, 
      justifyContent: 'center', 
      alignItems: 'center', 
      display: 'inline-flex'
    }}>
      {/* Left Side - Menu and Title */}
      <div style={{
        flex: '1 1 0', 
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
              background: 'var(--Buttons-sapAssistant_lightButton_Lite_Background, rgba(255, 255, 255, 0))', 
              borderRadius: 8, 
              outline: '1px var(--Buttons-sapAssistant_Button_Lite_Stroke, rgba(255, 255, 255, 0)) solid', 
              outlineOffset: '-1px', 
              justifyContent: 'center', 
              alignItems: 'center', 
              display: 'flex',
              cursor: 'pointer'
            }}
          >
            <Icon name="menu2" style={{color: 'white'}} />
          </div>
        </div>
        <div style={{
          color: 'white', 
          fontSize: 16, 
          fontFamily: '72', 
          fontWeight: '700', 
          wordWrap: 'break-word'
        }}>
          {title}
        </div>
      </div>

      {/* Right Side - Action Buttons */}
      <div style={{
        paddingTop: 10, 
        paddingBottom: 10, 
        paddingRight: 8, 
        justifyContent: 'flex-end', 
        alignItems: 'center', 
        gap: 8, 
        display: 'flex'
      }}>
        {/* Fullscreen Button */}
        <div data-fullscreen="False" style={{
          justifyContent: 'flex-start', 
          alignItems: 'flex-start', 
          display: 'flex'
        }}>
          <div 
            data-interaction-state="Regular"
            onClick={onFullscreenClick}
            style={{
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
          >
            <Icon name="full-screen" style={{color: 'white'}} />
          </div>
        </div>
        
        {/* Decline Button */}
        <div 
          data-interaction-state="Regular"
          onClick={onDeclineClick}
          style={{
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
        >
          <Icon name="decline" style={{color: 'white'}} />
        </div>
      </div>
    </div>
  );
};

export default WelcomeHeader; 