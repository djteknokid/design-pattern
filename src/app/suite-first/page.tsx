"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Title,
  Text,
  Button,
  FlexBox,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  FlexBoxAlignItems,
  Icon,
  ThemeProvider,
  Link
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import Header from "../components/Header";
import ToDos from "../components/ToDos";
import Insights from "../components/Insights";
import { JouleComponent } from "../components/Joule";

export default function SuiteFirst() {
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
        <Header onJouleClick={handleJouleToggle} />

        {/* Hero Banner */}
        <div className="relative py-8 bg-gray-50 min-h-[600px]">
          {/* Geometric Background Shape */}
          <div className="absolute right-0 top-0 w-1/2 h-full">
            <div className="w-full h-full bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 transform skew-x-12 origin-top-right opacity-90"></div>
          </div>
          
          <div className="relative w-full px-8 py-12">
            {/* Greeting */}
            <div className="mb-8">
              <h2 style={{
                color: 'var(--sapTile_TextColor)',
                fontFamily: 'var(--Font-Family-sapFontFamily, 72)',
                fontSize: '24px',
                fontStyle: 'normal',
                fontWeight: '700',
                lineHeight: 'normal'
              }}>Hello, Jordan</h2>
            </div>
            
            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Text Content */}
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h1 style={{
                    color: '#364A5E',
                    fontFamily: 'var(--Font-Family-sapFontFamily, 72)',
                    fontSize: '64px',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    lineHeight: 'normal',
                    whiteSpace: 'nowrap'
                  }}>
                    Welcome to SAP Business Suite
                  </h1>
                </div>
                
                <p style={{
                  color: 'var(--sapTile_TextColor)',
                  fontFamily: 'var(--Font-Family-sapFontFamily, 72)',
                  fontSize: '28px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: '150%'
                }}>
                  One Suite. Applications, Data and AI at your fingertips.
                </p>
              </div>
              
              {/* Right Column - Placeholder for geometric design */}
              <div className="hidden lg:block">
                {/* The geometric shape is handled by the absolute positioned div above */}
              </div>
            </div>
            
            {/* Your Products Section */}
            <div className="mt-16">
              <h3 style={{
                color: 'var(--Text-sapTitleColor, #1D2D3E)',
                fontFamily: '72',
                fontSize: '20px',
                fontStyle: 'normal',
                fontWeight: '700',
                lineHeight: 'normal',
                marginBottom: '1.5rem'
              }}>Your products</h3>
              
              <div style={{ 
                display: 'flex', 
                flexWrap: 'nowrap', 
                gap: '16px',
                justifyContent: 'flex-start',
                overflowX: 'auto'
              }}>
                {[
                  { label: "Cloud ERP", iconPath: "/appIcon-cloudERP.png", link: "/cloud-erp" },
                  { label: "SuccessFactors", iconPath: "/appIcon-successFactors.png", link: "/successfactors" },
                  { label: "Concur", iconPath: "/appIcon-concour.png", link: "/concur" },
                  { label: "Sales Cloud", iconPath: "/appicon-salescloud.png", link: "/sales-cloud" },
                  { label: "Ariba", iconPath: "/appIcon-ariba.png", link: "/ariba" },
                ].map((product, index) => (
                  <Link key={index} href={product.link} className="no-underline">
                    <div style={{
                      display: 'flex',
                      width: '220px',
                      padding: '32px 16px',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '8px',
                      borderRadius: '16px',
                      border: '1px solid #D5DDE4',
                      background: '#F7F8FA',
                      cursor: 'pointer',
                      transition: 'box-shadow 0.2s ease',
                      flexShrink: 0
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    >
                      <img
                        src={product.iconPath}
                        alt={product.label + ' icon'}
                        style={{
                          width: '48px',
                          height: '48px',
                          objectFit: 'contain'
                        }}
                      />
                      <span style={{
                        fontSize: '14px',
                        fontWeight: '500',
                        color: '#374151',
                        textAlign: 'center'
                      }}>
                        {product.label}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <FlexBox direction={FlexBoxDirection.Column} className="bg-gray-50" style={{ padding: '2rem' }}>
          <ToDos />
          <Insights />
        </FlexBox>

        {/* Joule Component */}
        {isJouleOpen && (
          <JouleComponent
            userName="Jordan"
            onClose={handleJouleClose}
            position={{ bottom: 20, right: 20 }}
            initialView="welcome"
          />
        )}
      </div>
    </ThemeProvider>
  );
} 