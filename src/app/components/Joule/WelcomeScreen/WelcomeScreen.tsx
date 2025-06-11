"use client";

import React from 'react';
import { WelcomeHeader } from '../Headers';
import MessageInput from '../Input/MessageInput';

/**
 * WelcomeScreen - Complete welcome screen component for the Joule design system
 * 
 * @description This component provides the full welcome screen experience with header,
 * gradient background, welcome message, starter capabilities, and input.
 * 
 * @usage Use this component for:
 * - Initial Joule welcome screen
 * - First-time user experience
 * - Onboarding interface
 * 
 * @example
 * ```tsx
 * import { WelcomeScreen } from '@/components/Joule';
 * 
 * <WelcomeScreen
 *   userName="John"
 *   onMenuClick={() => console.log('Menu clicked')}
 *   onSend={(message) => console.log('Message sent:', message)}
 * />
 * ```
 */

interface StarterCapability {
  id: string;
  text: string;
  onClick?: () => void;
}

interface WelcomeScreenProps {
  userName?: string;
  onMenuClick?: () => void;
  onFullscreenClick?: () => void;
  onDeclineClick?: () => void;
  onSend?: (message: string) => void;
  starterCapabilities?: StarterCapability[];
  placeholder?: string;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  userName = "User name",
  onMenuClick,
  onFullscreenClick,
  onDeclineClick,
  onSend = () => {},
  starterCapabilities = [
    { id: '1', text: 'Starter capability 1', onClick: () => console.log('Capability 1 clicked') },
    { id: '2', text: 'Starter capability 2', onClick: () => console.log('Capability 2 clicked') },
    { id: '3', text: 'Starter capability 3', onClick: () => console.log('Capability 3 clicked') },
    { id: '4', text: 'Starter capability 4', onClick: () => console.log('Capability 4 clicked') }
  ],
  placeholder = "Message Joule..."
}) => {
  return (
    <div style={{
      width: 416,
      height: 742,
      minWidth: 416,
      background: 'white',
      boxShadow: '0px 32px 64px rgba(91, 115, 139, 0.16)',
      borderRadius: 16,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      display: 'flex',
      overflow: 'hidden'
    }}>
      {/* Header */}
      <WelcomeHeader
        title="Joule"
        onMenuClick={onMenuClick}
        onFullscreenClick={onFullscreenClick}
        onDeclineClick={onDeclineClick}
      />

      {/* Gradient Background with Welcome Content */}
      <div style={{
        width: 416,
        height: 433,
        position: 'relative'
      }}>
        {/* Background layers */}
        <div style={{
          width: 416,
          height: 433,
          left: 0,
          top: 0,
          position: 'absolute',
          background: 'linear-gradient(180deg, #5D36FF 6%, #A100C2 94%)',
          overflow: 'hidden'
        }}>
          <div style={{
            width: 416,
            height: 433,
            left: 0,
            top: 0,
            position: 'absolute',
            background: '#F7F7F7'
          }} />
          <div style={{
            width: 416,
            height: 433,
            left: 0,
            top: 0,
            position: 'absolute',
            background: 'linear-gradient(180deg, #6135FE 0%, #A100C2 100%)'
          }} />
        </div>

        {/* Content overlay */}
        <div style={{
          width: 384,
          left: 16,
          top: 60,
          position: 'absolute',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: 75,
          display: 'flex'
        }}>
          {/* Joule Logo */}
          <div style={{
            width: 120,
            height: 127,
            position: 'relative',
            overflow: 'hidden'
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="127" viewBox="0 0 120 127" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M46.6026 39.0858C45.3357 39.0858 44.1364 39.6895 43.3379 40.7291L24.9405 64.6818C23.7324 66.2546 23.6834 68.4919 24.8211 70.1222L61.616 122.846C62.4087 123.982 63.6647 124.652 65 124.652C66.3353 124.652 67.5913 123.982 68.384 122.846L105.179 70.1222C106.317 68.4919 106.268 66.2546 105.06 64.6818L86.6621 40.7291C85.8636 39.6895 84.6643 39.0858 83.3974 39.0858H46.6026ZM88.3249 67.1211C79.643 65.5741 76.8647 58.3635 75.9469 53.8535C75.8477 53.4078 75.302 53.434 75.2276 53.8798C73.764 63.0569 66.9425 65.9936 62.6759 66.9638C62.2543 67.0687 62.2791 67.6455 62.7008 67.7242C71.3827 69.2712 74.1609 76.4819 75.0787 80.9918C75.178 81.4375 75.7237 81.4113 75.7981 80.9656C77.2616 71.7884 84.0832 68.8517 88.3497 67.8815C88.7714 67.7766 88.7466 67.1998 88.3249 67.1211Z" fill="white"/>
              <path d="M101.542 21.4457C102.16 24.4296 104.032 29.2004 109.878 30.224C110.162 30.276 110.179 30.6577 109.895 30.7271C107.022 31.369 102.428 33.312 101.442 39.3839C101.392 39.6788 101.024 39.6961 100.958 39.4012C100.34 36.4173 98.4685 31.6465 92.6216 30.623C92.3376 30.5709 92.3209 30.1893 92.6049 30.1199C95.4782 29.478 100.072 27.535 101.058 21.4631C101.108 21.1682 101.476 21.1508 101.542 21.4457Z" fill="white"/>
              <path d="M42.2811 0.319062C43.1925 4.79492 45.9515 11.9511 54.5733 13.4864C54.9921 13.5645 55.0167 14.137 54.598 14.2411C50.361 15.2039 43.5867 18.1184 42.1333 27.2262C42.0594 27.6686 41.5174 27.6946 41.4189 27.2523C40.5074 22.7764 37.7485 15.6202 29.1267 14.0849C28.7079 14.0069 28.6832 13.4344 29.102 13.3303C33.339 12.3674 40.1133 9.45293 41.5667 0.345083C41.6406 -0.0972982 42.1825 -0.123319 42.2811 0.319062Z" fill="white"/>
              <path d="M16.7874 27.7877C17.395 30.823 19.2343 35.676 24.9822 36.7172C25.2614 36.7702 25.2778 37.1584 24.9986 37.229C22.174 37.882 17.6578 39.8585 16.6888 46.0351C16.6396 46.3351 16.2783 46.3527 16.2126 46.0527C15.605 43.0174 13.7656 38.1643 8.01777 37.1231C7.73858 37.0702 7.72216 36.6819 8.00134 36.6114C10.826 35.9584 15.3422 33.9819 16.3111 27.8053C16.3604 27.5053 16.7217 27.4877 16.7874 27.7877Z" fill="white"/>
            </svg>
          </div>

          {/* Welcome Text */}
          <div style={{
            alignSelf: 'stretch',
            height: 162.68,
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
            gap: 4,
            display: 'flex'
          }}>
            {/* Greeting */}
            <div style={{
              alignSelf: 'stretch',
              justifyContent: 'center',
              display: 'flex',
              flexDirection: 'column',
              color: 'white',
              fontSize: 20,
              fontFamily: '72',
              fontWeight: '300',
              lineHeight: '30px',
              wordWrap: 'break-word'
            }}>
              Hello {userName},
            </div>

            {/* Main question */}
            <div style={{
              justifyContent: 'center',
              alignItems: 'center',
              gap: 10,
              display: 'flex'
            }}>
              <div style={{
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                color: 'white',
                fontSize: 42,
                fontFamily: '72',
                fontWeight: '300',
                lineHeight: '60px',
                wordWrap: 'break-word'
              }}>
                How can I
              </div>
              <div style={{
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
                display: 'flex'
              }}>
                <div style={{
                  justifyContent: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  color: 'white',
                  fontSize: 42,
                  fontFamily: '72',
                  fontWeight: '300',
                  lineHeight: '60px',
                  wordWrap: 'break-word'
                }}>
                  help
                </div>
              </div>
              <div style={{
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                color: 'white',
                fontSize: 42,
                fontFamily: '72',
                fontWeight: '300',
                lineHeight: '60px',
                wordWrap: 'break-word'
              }}>
                you?
              </div>
            </div>

            {/* Suggestion bubble */}
            <div style={{
              width: 384,
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: 8,
              display: 'flex'
            }}>
              <div style={{
                maxWidth: 384,
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 8,
                paddingBottom: 8,
                background: '#EFF1F2',
                overflow: 'hidden',
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                borderBottomRightRadius: 8,
                border: '1px solid #EFF1F2',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
                display: 'flex'
              }}>
                <div style={{
                  flex: '1 1 0',
                  color: '#1D2D3E',
                  fontSize: 14,
                  fontFamily: '72',
                  fontWeight: '400',
                  lineHeight: '20px',
                  wordWrap: 'break-word'
                }}>
                  Talk to me naturally. For example, "what are my tasks for today?"
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{
        width: 416,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'flex',
        padding: '16px'
      }}>
        {/* Get Started and Starter Capabilities */}
        <div style={{
          alignSelf: 'stretch',
          maxWidth: 1200,
          minWidth: 416,
          paddingTop: 8,
          paddingBottom: 16,
          overflow: 'hidden',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: 16,
          display: 'inline-flex'
        }}>
          <div
            data-copy-code="false"
            data-mode="Default"
            data-state="Default"
            data-type="Basic text"
            style={{
              width: '100%',
              maxWidth: 384,
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: 10,
              display: 'flex'
            }}
          >
            <div style={{
              maxWidth: 384,
              paddingLeft: 16,
              paddingRight: 16,
              paddingTop: 8,
              paddingBottom: 8,
              background: '#EFF1F2',
              overflow: 'hidden',
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              borderBottomRightRadius: 8,
              outline: '1px #EFF1F2 solid',
              outlineOffset: '-1px',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center',
              display: 'flex'
            }}>
              <div style={{
                alignSelf: 'stretch',
                color: '#1D2D3E',
                fontSize: 14,
                fontFamily: '72',
                fontWeight: '400',
                lineHeight: '21px',
                wordWrap: 'break-word'
              }}>
                Get started
              </div>
            </div>
          </div>
          <div
            data-type="Starter skills - Max width 384"
            style={{
              width: 385,
              paddingLeft: 2,
              paddingRight: 2,
              paddingTop: 8,
              paddingBottom: 8,
              overflow: 'hidden',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              alignItems: 'flex-start',
              gap: 8,
              display: 'flex'
            }}
          >
            <div style={{
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: 8,
              display: 'inline-flex'
            }}>
              {starterCapabilities.slice(0, 2).map((capability) => (
                <div
                  key={capability.id}
                  onClick={capability.onClick}
                  style={{
                    paddingLeft: 8,
                    paddingRight: 8,
                    paddingTop: 4,
                    paddingBottom: 4,
                    background: 'white',
                    boxShadow: '0px 4px 8px rgba(27, 144, 255, 0.16)',
                    overflow: 'hidden',
                    borderRadius: 16,
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 4,
                    display: 'flex',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{
                    textAlign: 'center',
                    color: '#0064D9',
                    fontSize: 14,
                    fontFamily: '72',
                    fontWeight: '400',
                    lineHeight: '20px',
                    wordWrap: 'break-word'
                  }}>
                    {capability.text}
                  </div>
                </div>
              ))}
            </div>
            <div style={{
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: 8,
              display: 'inline-flex'
            }}>
              {starterCapabilities.slice(2, 4).map((capability) => (
                <div
                  key={capability.id}
                  onClick={capability.onClick}
                  style={{
                    paddingLeft: 8,
                    paddingRight: 8,
                    paddingTop: 4,
                    paddingBottom: 4,
                    background: 'white',
                    boxShadow: '0px 4px 8px rgba(27, 144, 255, 0.16)',
                    overflow: 'hidden',
                    borderRadius: 16,
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 4,
                    display: 'flex',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{
                    textAlign: 'center',
                    color: '#0064D9',
                    fontSize: 14,
                    fontFamily: '72',
                    fontWeight: '400',
                    lineHeight: '20px',
                    wordWrap: 'break-word'
                  }}>
                    {capability.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div style={{
          width: '100%',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: 8,
          display: 'flex'
        }}>
          {/* Message Input */}
          <div style={{
            width: '100%',
            maxWidth: 384
          }}>
            <MessageInput
              placeholder={placeholder}
              onSend={onSend}
            />
          </div>

          {/* Footer disclaimer */}
          <div style={{
            textAlign: 'center',
            color: '#32363A',
            fontSize: 11,
            fontFamily: '72',
            fontWeight: '400',
            lineHeight: '12px',
            wordWrap: 'break-word'
          }}>
            Joule uses AI, verify results.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen; 