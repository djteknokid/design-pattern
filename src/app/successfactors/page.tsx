"use client";

import {
  ThemeProvider,
  Title,
  FlexBox,
  FlexBoxDirection,
  Card,
  Text,
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import ProductHeader from "../components/ProductHeader";

export default function SuccessFactorsPage() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100">
        <ProductHeader productName="SuccessFactors" />
        
        <FlexBox direction={FlexBoxDirection.Column} style={{ padding: '2rem' }}>
          <Title level="H1" style={{ marginBottom: '2rem' }}>SuccessFactors</Title>
          
          <Card style={{ padding: '2rem', marginBottom: '2rem' }}>
            <FlexBox direction={FlexBoxDirection.Column} style={{ gap: '1rem' }}>
              <Title level="H2">SAP SuccessFactors HXM Suite</Title>
              <Text>
                SAP SuccessFactors is a comprehensive human experience management (HXM) suite that helps organizations 
                manage their entire employee lifecycle from recruitment to retirement.
              </Text>
              
              <Title level="H3" style={{ marginTop: '1rem' }}>Core Modules:</Title>
              <ul style={{ marginLeft: '1rem' }}>
                <li>Employee Central</li>
                <li>Recruiting</li>
                <li>Performance & Goals</li>
                <li>Learning</li>
                <li>Compensation</li>
                <li>Succession & Development</li>
              </ul>
            </FlexBox>
          </Card>
          
          <Card style={{ padding: '2rem' }}>
            <FlexBox direction={FlexBoxDirection.Column} style={{ gap: '1rem' }}>
              <Title level="H3">Benefits</Title>
              <Text>
                Transform your HR processes with intelligent automation, analytics, and employee engagement tools.
              </Text>
            </FlexBox>
          </Card>
        </FlexBox>
      </div>
    </ThemeProvider>
  );
} 