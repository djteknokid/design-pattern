"use client";

import React from 'react';

interface ApprovalCardProps {
  title: string;
  requesterName: string;
  period: string;
  type: string;
  avatarUrl?: string;
  viewAllCount?: number;
}

const ApprovalCard: React.FC<ApprovalCardProps> = ({
  title,
  requesterName,
  period,
  type,
  avatarUrl = "https://placehold.co/48x48",
  viewAllCount = 4
}) => {
  return (
    <div style={{
      alignSelf: 'stretch', 
      padding: 24, 
      flexDirection: 'column', 
      justifyContent: 'space-between', 
      alignItems: 'flex-start', 
      display: 'inline-flex'
    }}>
      <div style={{
        alignSelf: 'stretch', 
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        alignItems: 'flex-start', 
        gap: 16, 
        display: 'flex'
      }}>
        <div style={{
          alignSelf: 'stretch', 
          position: 'relative', 
          justifyContent: 'flex-start', 
          alignItems: 'center', 
          gap: 8, 
          display: 'inline-flex'
        }}>
          <div style={{
            width: 48, 
            height: 48, 
            position: 'relative', 
            borderRadius: 100, 
            backgroundImage: `url(${avatarUrl})`
          }}>
            <div style={{
              width: 48, 
              height: 48, 
              left: 0, 
              top: 0, 
              position: 'absolute', 
              borderRadius: 9999
            }}></div>
          </div>
          
          <div style={{
            flex: '1 1 0', 
            flexDirection: 'column', 
            justifyContent: 'flex-start', 
            alignItems: 'flex-start', 
            gap: 8, 
            display: 'inline-flex'
          }}>
            <div style={{
              alignSelf: 'stretch', 
              justifyContent: 'center', 
              alignItems: 'center', 
              gap: 10, 
              display: 'inline-flex'
            }}>
              <div style={{
                flex: '1 1 0', 
                color: '#1D2D3E', 
                fontSize: 16, 
                fontFamily: '72', 
                fontWeight: 600, 
                wordWrap: 'break-word'
              }}>{title}</div>
            </div>
            <div style={{
              alignSelf: 'stretch', 
              justifyContent: 'center', 
              alignItems: 'center', 
              gap: 10, 
              display: 'inline-flex'
            }}>
              <div style={{
                flex: '1 1 0', 
                justifyContent: 'center', 
                alignItems: 'center', 
                gap: 10, 
                display: 'flex'
              }}>
                <div style={{
                  flex: '1 1 0', 
                  color: '#556B82', 
                  fontSize: 14, 
                  fontFamily: '72', 
                  fontWeight: 400, 
                  wordWrap: 'break-word'
                }}>{requesterName}</div>
              </div>
            </div>
          </div>
          
          <div style={{
            left: 246, 
            top: 2, 
            position: 'absolute', 
            justifyContent: 'flex-end', 
            alignItems: 'flex-start', 
            gap: 8, 
            display: 'flex'
          }}>
            <div style={{
              paddingLeft: 8, 
              paddingRight: 8, 
              paddingTop: 5, 
              paddingBottom: 5, 
              background: 'rgba(0, 0, 0, 0)', 
              borderRadius: 8, 
              outline: '1px rgba(0, 0, 0, 0) solid', 
              outlineOffset: -1, 
              justifyContent: 'center', 
              alignItems: 'center', 
              gap: 6, 
              display: 'flex'
            }}>
              <div style={{width: 16, height: 16, position: 'relative'}}>
                <div style={{
                  width: 16, 
                  height: 4, 
                  left: 0, 
                  top: 6, 
                  position: 'absolute', 
                  background: '#0064D9'
                }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div style={{
          alignSelf: 'stretch', 
          flexDirection: 'column', 
          justifyContent: 'flex-start', 
          alignItems: 'flex-start', 
          gap: 8, 
          display: 'flex'
        }}>
          <div style={{
            alignSelf: 'stretch', 
            justifyContent: 'flex-start', 
            alignItems: 'flex-start', 
            gap: 8, 
            display: 'inline-flex'
          }}>
            <div style={{
              justifyContent: 'center', 
              alignItems: 'center', 
              gap: 10, 
              display: 'flex'
            }}>
              <div style={{
                width: 60, 
                justifyContent: 'center', 
                alignItems: 'center', 
                gap: 10, 
                display: 'flex'
              }}>
                <div style={{
                  flex: '1 1 0', 
                  color: '#556B82', 
                  fontSize: 14, 
                  fontFamily: '72', 
                  fontWeight: 400, 
                  wordWrap: 'break-word'
                }}>Period</div>
              </div>
            </div>
            <div style={{
              flex: '1 1 0', 
              justifyContent: 'flex-end', 
              alignItems: 'center', 
              gap: 10, 
              display: 'flex'
            }}>
              <div style={{
                textAlign: 'right', 
                color: '#1D2D3E', 
                fontSize: 14, 
                fontFamily: '72', 
                fontWeight: 600, 
                wordWrap: 'break-word'
              }}>{period}</div>
            </div>
          </div>
          <div style={{
            alignSelf: 'stretch', 
            justifyContent: 'flex-start', 
            alignItems: 'flex-start', 
            gap: 8, 
            display: 'inline-flex'
          }}>
            <div style={{
              flex: '1 1 0', 
              justifyContent: 'center', 
              alignItems: 'center', 
              gap: 10, 
              display: 'flex'
            }}>
              <div style={{
                flex: '1 1 0', 
                justifyContent: 'center', 
                alignItems: 'center', 
                gap: 10, 
                display: 'flex'
              }}>
                <div style={{
                  flex: '1 1 0', 
                  color: '#556B82', 
                  fontSize: 14, 
                  fontFamily: '72', 
                  fontWeight: 400, 
                  wordWrap: 'break-word'
                }}>Type</div>
              </div>
            </div>
            <div style={{
              flex: '1 1 0', 
              justifyContent: 'center', 
              alignItems: 'center', 
              gap: 10, 
              display: 'flex'
            }}>
              <div style={{
                flex: '1 1 0', 
                textAlign: 'right', 
                color: '#1D2D3E', 
                fontSize: 14, 
                fontFamily: '72', 
                fontWeight: 600, 
                wordWrap: 'break-word'
              }}>{type}</div>
            </div>
          </div>
        </div>
      </div>
      
      <div style={{
        alignSelf: 'stretch', 
        justifyContent: 'flex-end', 
        alignItems: 'flex-start', 
        gap: 8, 
        display: 'inline-flex'
      }}>
        <div style={{
          paddingLeft: 8, 
          paddingRight: 8, 
          paddingTop: 5, 
          paddingBottom: 5, 
          background: 'rgba(0, 0, 0, 0)', 
          borderRadius: 8, 
          outline: '1px rgba(0, 0, 0, 0) solid', 
          outlineOffset: -1, 
          justifyContent: 'center', 
          alignItems: 'center', 
          gap: 6, 
          display: 'flex'
        }}>
          <div style={{
            color: '#0064D9', 
            fontSize: 14, 
            fontFamily: '72', 
            fontWeight: 400, 
            wordWrap: 'break-word'
          }}>View All ({viewAllCount})</div>
        </div>
        <div style={{
          flex: '1 1 0', 
          justifyContent: 'flex-end', 
          alignItems: 'flex-start', 
          gap: 8, 
          display: 'flex'
        }}>
          <div style={{
            paddingLeft: 8, 
            paddingRight: 8, 
            paddingTop: 5, 
            paddingBottom: 5, 
            background: '#EBF5CB', 
            borderRadius: 6, 
            outline: '1px #DBEDA1 solid', 
            outlineOffset: -1, 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: 6, 
            display: 'flex'
          }}>
            <div style={{width: 16, height: 16, position: 'relative'}}>
              <div style={{
                width: 11.99, 
                height: 10, 
                left: 2, 
                top: 3, 
                position: 'absolute', 
                background: '#256F3A'
              }}></div>
            </div>
          </div>
          <div style={{
            paddingLeft: 8, 
            paddingRight: 8, 
            paddingTop: 5, 
            paddingBottom: 5, 
            background: '#FFD6E9', 
            borderRadius: 6, 
            outline: '1px #FFC1DF solid', 
            outlineOffset: -1, 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: 6, 
            display: 'flex'
          }}>
            <div style={{width: 16, height: 16, position: 'relative'}}>
              <div style={{
                width: 9.99, 
                height: 9.99, 
                left: 3.01, 
                top: 3.02, 
                position: 'absolute', 
                background: '#AA0808'
              }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard; 