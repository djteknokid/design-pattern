"use client";

import React from 'react';
import { ThemeProvider } from "@ui5/webcomponents-react";
import { Joule } from '../components/Joule';

export default function JoulePage() {
  return (
    <ThemeProvider>
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px'
      }}>
        <Joule />
      </div>
    </ThemeProvider>
  );
} 