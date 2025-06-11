"use client";

import { useState } from "react";
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
import { JouleComponent } from "../components/Joule";

export default function SalesCloudPage() {
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
        <ProductHeader productName="Sales Cloud" onJouleClick={handleJouleToggle} />
        
        <FlexBox direction={FlexBoxDirection.Column} style={{ padding: '2rem' }}>
          <Title level="H1" style={{ marginBottom: '2rem' }}>Sales Cloud</Title>
          
          <Card style={{ padding: '2rem', marginBottom: '2rem' }}>
            <FlexBox direction={FlexBoxDirection.Column} style={{ gap: '1rem' }}>
              <Title level="H2">SAP Sales Cloud</Title>
              <Text>
                SAP Sales Cloud is a comprehensive customer relationship management (CRM) solution that helps sales teams 
                build stronger customer relationships, accelerate sales cycles, and drive revenue growth.
              </Text>
              
              <Title level="H3" style={{ marginTop: '1rem' }}>Key Features:</Title>
              <ul style={{ marginLeft: '1rem' }}>
                <li>Lead and Opportunity Management</li>
                <li>Account and Contact Management</li>
                <li>Sales Forecasting and Analytics</li>
                <li>Mobile Sales Tools</li>
                <li>Territory and Quota Management</li>
                <li>Sales Performance Insights</li>
              </ul>
            </FlexBox>
          </Card>
          
          <Card style={{ padding: '2rem' }}>
            <FlexBox direction={FlexBoxDirection.Column} style={{ gap: '1rem' }}>
              <Title level="H3">Getting Started</Title>
              <Text>
                Explore the Sales Cloud modules to streamline your sales processes and improve customer engagement.
              </Text>
            </FlexBox>
          </Card>
        </FlexBox>

        {/* Joule Component */}
        {isJouleOpen && (
          <JouleComponent
            userName="Sales Rep"
            onClose={handleJouleClose}
            position={{ bottom: 20, right: 20 }}
            initialView="welcome"
          />
        )}
      </div>
    </ThemeProvider>
  );
} 