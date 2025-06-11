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

export default function CloudERPPage() {
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
        <ProductHeader productName="Cloud ERP" onJouleClick={handleJouleToggle} />
        
        <FlexBox direction={FlexBoxDirection.Column} style={{ padding: '2rem' }}>
          <Title level="H1" style={{ marginBottom: '2rem' }}>Cloud ERP</Title>
          
          <Card style={{ padding: '2rem', marginBottom: '2rem' }}>
            <FlexBox direction={FlexBoxDirection.Column} style={{ gap: '1rem' }}>
              <Title level="H2">SAP S/4HANA Cloud</Title>
              <Text>
                SAP S/4HANA Cloud is the next-generation ERP suite designed to help you run simple in the cloud. 
                It provides real-time insights, intelligent automation, and seamless integration across your business processes.
              </Text>
              
              <Title level="H3" style={{ marginTop: '1rem' }}>Key Features:</Title>
              <ul style={{ marginLeft: '1rem' }}>
                <li>Real-time analytics and insights</li>
                <li>Intelligent automation with AI/ML</li>
                <li>Cloud-native architecture</li>
                <li>Industry-specific best practices</li>
                <li>Seamless integration capabilities</li>
              </ul>
            </FlexBox>
          </Card>
          
          <Card style={{ padding: '2rem' }}>
            <FlexBox direction={FlexBoxDirection.Column} style={{ gap: '1rem' }}>
              <Title level="H3">Getting Started</Title>
              <Text>
                Explore the Cloud ERP modules and capabilities to transform your business operations.
              </Text>
            </FlexBox>
          </Card>
        </FlexBox>

        {/* Joule Component */}
        {isJouleOpen && (
          <JouleComponent
            userName="ERP User"
            onClose={handleJouleClose}
            position={{ bottom: 20, right: 20 }}
            initialView="welcome"
          />
        )}
      </div>
    </ThemeProvider>
  );
} 