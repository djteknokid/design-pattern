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

export default function SalesCloudPage() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100">
        <ProductHeader productName="Sales Cloud" />
        
        <FlexBox direction={FlexBoxDirection.Column} style={{ padding: '2rem' }}>
          <Title level="H1" style={{ marginBottom: '2rem' }}>Sales Cloud</Title>
          
          <Card style={{ padding: '2rem', marginBottom: '2rem' }}>
            <FlexBox direction={FlexBoxDirection.Column} style={{ gap: '1rem' }}>
              <Title level="H2">SAP Sales Cloud</Title>
              <Text>
                SAP Sales Cloud is a comprehensive sales force automation solution that empowers sales teams 
                to build stronger customer relationships and drive revenue growth through intelligent insights and automation.
              </Text>
              
              <Title level="H3" style={{ marginTop: '1rem' }}>Key Capabilities:</Title>
              <ul style={{ marginLeft: '1rem' }}>
                <li>Account and Contact Management</li>
                <li>Opportunity Management</li>
                <li>Sales Planning and Forecasting</li>
                <li>Activity Management</li>
                <li>Territory Management</li>
                <li>Sales Analytics and Reporting</li>
              </ul>
            </FlexBox>
          </Card>
          
          <Card style={{ padding: '2rem' }}>
            <FlexBox direction={FlexBoxDirection.Column} style={{ gap: '1rem' }}>
              <Title level="H3">Sales Excellence</Title>
              <Text>
                Accelerate sales performance with AI-powered insights, mobile capabilities, and seamless integration 
                with SAP's ecosystem of business applications.
              </Text>
            </FlexBox>
          </Card>
        </FlexBox>
      </div>
    </ThemeProvider>
  );
} 