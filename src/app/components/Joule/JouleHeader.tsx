"use client";

import React from 'react';

const JouleHeader: React.FC = () => {
  return (
    <div style={{
      width: 416, 
      height: 56, 
      paddingTop: 4, 
      paddingBottom: 4, 
      borderTopLeftRadius: 16, 
      borderTopRightRadius: 16, 
      justifyContent: 'space-between', 
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
        <div style={{
          paddingRight: 4, 
          justifyContent: 'flex-start', 
          alignItems: 'center', 
          display: 'flex'
        }}>
          <div data-interaction-state="Regular" style={{
            minHeight: 36, 
            padding: 10, 
            background: 'var(--Buttons-sapAssistant_lightButton_Lite_Background, rgba(255, 255, 255, 0))', 
            borderRadius: 8, 
            outline: '1px var(--Buttons-sapAssistant_Button_Lite_Stroke, rgba(255, 255, 255, 0)) solid', 
            outlineOffset: '-1px', 
            justifyContent: 'center', 
            alignItems: 'center', 
            display: 'flex'
          }}>
            <div style={{width: 16, height: 16, position: 'relative'}}>
              <div style={{
                width: 16, 
                height: 12, 
                left: 0, 
                top: 2, 
                position: 'absolute', 
                background: 'var(--Buttons-sapAssistant_lightButton_Lite_textColor, white)'
              }} />
            </div>
          </div>
        </div>
        <div style={{
          color: 'white', 
          fontSize: 16, 
          fontFamily: '72', 
          fontWeight: '700', 
          wordWrap: 'break-word'
        }}>
          Joule
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
        <div data-fullscreen="False" style={{
          justifyContent: 'flex-start', 
          alignItems: 'flex-start', 
          display: 'flex'
        }}>
          <div data-interaction-state="Regular" style={{
            minHeight: 36, 
            padding: 10, 
            background: 'var(--Buttons-sapAssistant_lightButton_Lite_Background, rgba(255, 255, 255, 0))', 
            borderRadius: 8, 
            outline: '1px var(--Buttons-sapAssistant_Button_Lite_Stroke, rgba(255, 255, 255, 0)) solid', 
            outlineOffset: '-1px', 
            justifyContent: 'center', 
            alignItems: 'center', 
            display: 'flex'
          }}>
            <div style={{width: 16, height: 16, position: 'relative'}}>
              <div style={{
                width: 16, 
                height: 15.99, 
                left: 0, 
                top: 0.01, 
                position: 'absolute', 
                background: 'var(--Buttons-sapAssistant_lightButton_Lite_textColor, white)'
              }} />
            </div>
          </div>
        </div>
        <div data-interaction-state="Regular" style={{
          minHeight: 36, 
          padding: 10, 
          background: 'var(--Buttons-sapAssistant_lightButton_Lite_Background, rgba(255, 255, 255, 0))', 
          borderRadius: 8, 
          outline: '1px var(--Buttons-sapAssistant_Button_Lite_Stroke, rgba(255, 255, 255, 0)) solid', 
          outlineOffset: '-1px', 
          justifyContent: 'center', 
          alignItems: 'center', 
          display: 'flex'
        }}>
          <div style={{width: 16, height: 16, position: 'relative'}}>
            <div style={{
              width: 9.99, 
              height: 9.99, 
              left: 3.01, 
              top: 3.02, 
              position: 'absolute', 
              background: 'var(--Buttons-sapAssistant_lightButton_Lite_textColor, white)'
            }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JouleHeader; 