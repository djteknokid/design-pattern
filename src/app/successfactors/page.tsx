"use client";

import { useState } from "react";
import {
  ThemeProvider,
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import ProductHeader from "../components/ProductHeader";
import { JouleComponent } from "../components/Joule";
import NeedsAttention from "../components/SuccessFactors/NeedsAttention";

export default function SuccessFactorsPage() {
  const [isJouleOpen, setIsJouleOpen] = useState(false);

  const handleJouleToggle = () => {
    setIsJouleOpen(!isJouleOpen);
  };

  const handleJouleClose = () => {
    setIsJouleOpen(false);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100">
        <ProductHeader productName="SuccessFactors" onJouleClick={handleJouleToggle} />
        
        {/* Main Banner */}
        <div style={{
          alignSelf: 'stretch', 
          paddingLeft: 48, 
          paddingRight: 48, 
          flexDirection: 'column', 
          justifyContent: 'flex-start', 
          alignItems: 'flex-start', 
          gap: 10, 
          display: 'inline-flex'
        }}>
          <div style={{
            width: 1344, 
            flexDirection: 'column', 
            justifyContent: 'flex-start', 
            alignItems: 'flex-start', 
            gap: 10, 
            display: 'flex'
          }}>
            <div style={{
              alignSelf: 'stretch', 
              padding: 32, 
              background: 'rgba(255, 255, 255, 0.40)', 
              borderRadius: 16, 
              backdropFilter: 'blur(30px)', 
              justifyContent: 'space-between', 
              alignItems: 'flex-start', 
              display: 'inline-flex'
            }}>
              {/* Left Side - Greeting and Actions */}
              <div style={{
                width: 650, 
                alignSelf: 'stretch', 
                paddingTop: 16, 
                flexDirection: 'column', 
                justifyContent: 'space-between', 
                alignItems: 'flex-start', 
                display: 'inline-flex'
              }}>
                {/* Greeting */}
                <div style={{
                  justifyContent: 'flex-start', 
                  alignItems: 'flex-start', 
                  gap: 163, 
                  display: 'inline-flex'
                }}>
                  <div style={{
                    flexDirection: 'column', 
                    justifyContent: 'flex-start', 
                    alignItems: 'flex-start', 
                    gap: 4, 
                    display: 'inline-flex'
                  }}>
                    <div style={{
                      justifyContent: 'center', 
                      alignItems: 'center', 
                      display: 'inline-flex'
                    }}>
                      <div style={{
                        width: 542, 
                        justifyContent: 'flex-start', 
                        alignItems: 'center', 
                        gap: 10, 
                        display: 'flex'
                      }}>
                        <div style={{
                          color: '#1D2D3E', 
                          fontSize: 30, 
                          fontFamily: '72', 
                          fontWeight: 700, 
                          wordWrap: 'break-word'
                        }}>Hello, </div>
                        <div style={{
                          color: '#1D2D3E', 
                          fontSize: 30, 
                          fontFamily: '72', 
                          fontWeight: 700, 
                          wordWrap: 'break-word'
                        }}>Jordan</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Action Buttons */}
                <div style={{
                  alignSelf: 'stretch', 
                  justifyContent: 'flex-start', 
                  alignItems: 'center', 
                  gap: 6, 
                  display: 'inline-flex', 
                  flexWrap: 'wrap', 
                  alignContent: 'center'
                }}>
                  <div style={{
                    minHeight: 26, 
                    paddingLeft: 8, 
                    paddingRight: 8, 
                    paddingTop: 5, 
                    paddingBottom: 5, 
                    background: 'var(--Button-Standard-sapButton_Background, white)', 
                    borderRadius: 8, 
                    outline: '1px var(--Button-Standard-sapButton_BorderColor, #BCC3CA) solid', 
                    outlineOffset: -1, 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    gap: 6, 
                    display: 'flex',
                    cursor: 'pointer'
                  }}>
                    <div style={{
                      color: 'var(--Button-Standard-sapButton_TextColor, #0064D9)', 
                      fontSize: 14, 
                      fontFamily: '72', 
                      fontWeight: 600, 
                      wordWrap: 'break-word'
                    }}>Manage Goals</div>
                  </div>
                  
                  <div style={{
                    minHeight: 26, 
                    paddingLeft: 8, 
                    paddingRight: 8, 
                    paddingTop: 5, 
                    paddingBottom: 5, 
                    background: 'var(--Button-Standard-sapButton_Background, white)', 
                    borderRadius: 8, 
                    outline: '1px var(--Button-Standard-sapButton_BorderColor, #BCC3CA) solid', 
                    outlineOffset: -1, 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    gap: 6, 
                    display: 'flex',
                    cursor: 'pointer'
                  }}>
                    <div style={{
                      color: 'var(--Button-Standard-sapButton_TextColor, #0064D9)', 
                      fontSize: 14, 
                      fontFamily: '72', 
                      fontWeight: 600, 
                      wordWrap: 'break-word'
                    }}>View Payslip</div>
                  </div>
                  
                  <div style={{
                    minHeight: 26, 
                    paddingLeft: 8, 
                    paddingRight: 8, 
                    paddingTop: 5, 
                    paddingBottom: 5, 
                    background: 'var(--Button-Standard-sapButton_Background, white)', 
                    borderRadius: 8, 
                    outline: '1px var(--Button-Standard-sapButton_BorderColor, #BCC3CA) solid', 
                    outlineOffset: -1, 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    gap: 6, 
                    display: 'flex',
                    cursor: 'pointer'
                  }}>
                    <div style={{
                      color: 'var(--Button-Standard-sapButton_TextColor, #0064D9)', 
                      fontSize: 14, 
                      fontFamily: '72', 
                      fontWeight: 600, 
                      wordWrap: 'break-word'
                    }}>Take Time Off</div>
                  </div>
                  
                  <div style={{
                    minHeight: 26, 
                    paddingLeft: 8, 
                    paddingRight: 8, 
                    paddingTop: 5, 
                    paddingBottom: 5, 
                    background: 'var(--Button-Standard-sapButton_Background, white)', 
                    borderRadius: 8, 
                    outline: '1px var(--Button-Standard-sapButton_BorderColor, #BCC3CA) solid', 
                    outlineOffset: -1, 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    gap: 6, 
                    display: 'flex',
                    cursor: 'pointer'
                  }}>
                    <div style={{
                      color: 'var(--Button-Standard-sapButton_TextColor, #0064D9)', 
                      fontSize: 14, 
                      fontFamily: '72', 
                      fontWeight: 600, 
                      wordWrap: 'break-word'
                    }}>Delegate Workflow</div>
                  </div>
                  
                  <div style={{
                    minHeight: 26, 
                    paddingLeft: 8, 
                    paddingRight: 8, 
                    paddingTop: 5, 
                    paddingBottom: 5, 
                    background: 'var(--Button-Standard-sapButton_Background, white)', 
                    borderRadius: 8, 
                    outline: '1px var(--Button-Standard-sapButton_BorderColor, #BCC3CA) solid', 
                    outlineOffset: -1, 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    gap: 6, 
                    display: 'flex',
                    cursor: 'pointer'
                  }}>
                    <div style={{
                      color: 'var(--Button-Standard-sapButton_TextColor, #0064D9)', 
                      fontSize: 14, 
                      fontFamily: '72', 
                      fontWeight: 600, 
                      wordWrap: 'break-word'
                    }}>Create Team Event</div>
                  </div>
                  
                  <div style={{
                    minHeight: 26, 
                    paddingLeft: 8, 
                    paddingRight: 8, 
                    paddingTop: 5, 
                    paddingBottom: 5, 
                    background: 'var(--Button-Standard-sapButton_Background, white)', 
                    borderRadius: 8, 
                    outline: '1px var(--Button-Standard-sapButton_BorderColor, #BCC3CA) solid', 
                    outlineOffset: -1, 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    gap: 6, 
                    display: 'flex',
                    cursor: 'pointer'
                  }}>
                    <div style={{
                      color: 'var(--Button-Standard-sapButton_TextColor, #0064D9)', 
                      fontSize: 14, 
                      fontFamily: '72', 
                      fontWeight: 600, 
                      wordWrap: 'break-word'
                    }}>Appreciate a Colleague</div>
                  </div>
                  
                  {/* More button */}
                  <div style={{
                    minHeight: 26, 
                    paddingLeft: 8, 
                    paddingRight: 8, 
                    paddingTop: 5, 
                    paddingBottom: 5, 
                    background: 'var(--Button-Standard-sapButton_Background, white)', 
                    borderRadius: 8, 
                    outline: '1px var(--Button-Standard-sapButton_BorderColor, #BCC3CA) solid', 
                    outlineOffset: -1, 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    display: 'flex',
                    cursor: 'pointer'
                  }}>
                    <div style={{width: 16, height: 16, position: 'relative'}}>
                      <div style={{
                        width: 16, 
                        height: 4, 
                        left: 0, 
                        top: 6, 
                        position: 'absolute', 
                        background: 'var(--Button-Standard-sapButton_TextColor, #0064D9)'
                      }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Wellness Card */}
              <div style={{
                minHeight: 144, 
                flexDirection: 'column', 
                justifyContent: 'flex-start', 
                alignItems: 'center', 
                gap: 17, 
                display: 'inline-flex'
              }}>
                <div style={{
                  alignSelf: 'stretch', 
                  justifyContent: 'flex-start', 
                  alignItems: 'center', 
                  display: 'inline-flex'
                }}>
                  <img style={{
                    width: 110, 
                    height: 110, 
                    borderTopLeftRadius: 16, 
                    borderBottomLeftRadius: 16
                  }} src="https://placehold.co/110x110" />
                  
                  <div style={{
                    height: 110, 
                    paddingLeft: 24, 
                    paddingRight: 24, 
                    paddingTop: 16, 
                    paddingBottom: 16, 
                    background: 'white', 
                    borderTopRightRadius: 16, 
                    borderBottomRightRadius: 16, 
                    flexDirection: 'column', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-end', 
                    display: 'inline-flex'
                  }}>
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
                        height: 26, 
                        paddingTop: 1, 
                        paddingBottom: 1, 
                        justifyContent: 'space-between', 
                        alignItems: 'center', 
                        display: 'inline-flex'
                      }}>
                        <div style={{
                          flex: '1 1 0', 
                          color: '#1D2D3E', 
                          fontSize: 16, 
                          fontFamily: '72', 
                          fontWeight: 700, 
                          lineHeight: '24px', 
                          wordWrap: 'break-word'
                        }}>Take Some Time Off To Recharge</div>
                      </div>
                    </div>
                    
                    <div style={{
                      width: 320, 
                      justifyContent: 'flex-start', 
                      alignItems: 'center', 
                      gap: 8, 
                      display: 'inline-flex'
                    }}>
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
                            fontSize: 14, 
                            fontFamily: '72', 
                            fontWeight: 400, 
                            lineHeight: '24px', 
                            wordWrap: 'break-word'
                          }}>Did you know? Maintaining a balanced lifestyle is essential for your well-being.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Pagination Dots */}
                <div style={{
                  justifyContent: 'flex-start', 
                  alignItems: 'center', 
                  gap: 8, 
                  display: 'inline-flex'
                }}>
                  <div style={{
                    width: 40, 
                    height: 8, 
                    background: 'rgba(117, 140, 164, 0.40)', 
                    borderRadius: 60, 
                    flexDirection: 'column', 
                    justifyContent: 'flex-start', 
                    alignItems: 'flex-start', 
                    gap: 10, 
                    display: 'inline-flex'
                  }}>
                    <div style={{
                      width: 8, 
                      height: 8, 
                      background: '#758CA4', 
                      borderRadius: 60
                    }}></div>
                  </div>
                  <div style={{
                    width: 8, 
                    height: 8, 
                    background: '#758CA4', 
                    borderRadius: 9999
                  }}></div>
                  <div style={{
                    width: 8, 
                    height: 8, 
                    background: '#758CA4', 
                    borderRadius: 9999
                  }}></div>
                  <div style={{
                    width: 8, 
                    height: 8, 
                    background: '#758CA4', 
                    borderRadius: 9999
                  }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Needs Attention Section */}
        <NeedsAttention />

        {/* Joule Component */}
        {isJouleOpen && (
          <JouleComponent
            userName="HR Manager"
            onClose={handleJouleClose}
            position={{ bottom: 20, right: 20 }}
            initialView="welcome"
          />
        )}
      </div>
    </ThemeProvider>
  );
} 