"use client";

import React from 'react';
import { Icon } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/menu2.js";

interface JouleHeaderProps {
  title?: string;
  onMenuClick?: () => void;
}

const JouleHeader: React.FC<JouleHeaderProps> = ({
  title = "Joule",
  onMenuClick
}) => {
  return (
    <div data-state="Joule" style={{
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
    </div>
  );
};

export default JouleHeader; 