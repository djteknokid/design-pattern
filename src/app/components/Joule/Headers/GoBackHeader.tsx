"use client";

import React from 'react';
import { Icon } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/nav-back.js";
import "@ui5/webcomponents-icons/dist/full-screen.js";
import "@ui5/webcomponents-icons/dist/decline.js";

interface GoBackHeaderProps {
  onBackClick?: () => void;
  onFullscreenClick?: () => void;
  onDeclineClick?: () => void;
}

const GoBackHeader: React.FC<GoBackHeaderProps> = ({
  onBackClick,
  onFullscreenClick,
  onDeclineClick
}) => {
  return (
    <div data-state="Detail Screen" style={{
      alignSelf: 'stretch', 
      height: 56, 
      background: '#5D36FF', 
      borderTopLeftRadius: 16, 
      borderTopRightRadius: 16, 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      display: 'inline-flex'
    }}>
      {/* Back Button */}
      <div style={{
        flex: '1 1 0', 
        alignSelf: 'stretch', 
        paddingLeft: 4, 
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        gap: 8, 
        display: 'flex'
      }}>
        <div 
          data-interaction-state="Regular" 
          onClick={onBackClick}
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
          <Icon name="nav-back" style={{color: 'white'}} />
        </div>
      </div>

      {/* Action Buttons */}
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

export default GoBackHeader; 