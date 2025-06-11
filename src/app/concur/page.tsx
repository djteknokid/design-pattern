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

export default function ConcurPage() {
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
        <ProductHeader productName="Concur" onJouleClick={handleJouleToggle} />
        
        <FlexBox direction={FlexBoxDirection.Column} style={{ padding: '2rem' }}>
          <Title level="H1" style={{ marginBottom: '2rem' }}>Concur</Title>
          
          <Card style={{ padding: '2rem', marginBottom: '2rem' }}>
            <FlexBox direction={FlexBoxDirection.Column} style={{ gap: '1rem' }}>
              <Title level="H2">SAP Concur</Title>
              <Text>
                SAP Concur is a comprehensive travel and expense management solution that simplifies business spending, 
                from booking travel to submitting expenses and managing approvals.
              </Text>
              
              <Title level="H3" style={{ marginTop: '1rem' }}>Key Features:</Title>
              <ul style={{ marginLeft: '1rem' }}>
                <li>Travel booking and management</li>
                <li>Expense reporting and approval</li>
                <li>Invoice management</li>
                <li>Policy compliance and controls</li>
                <li>Real-time spending insights</li>
                <li>Mobile expense capture</li>
              </ul>
            </FlexBox>
          </Card>
          
          <Card style={{ padding: '2rem' }}>
            <FlexBox direction={FlexBoxDirection.Column} style={{ gap: '1rem' }}>
              <Title level="H3">Benefits</Title>
              <Text>
                Streamline your travel and expense processes with automated workflows, policy enforcement, and real-time visibility.
              </Text>
            </FlexBox>
          </Card>
        </FlexBox>

        {/* Joule Component */}
        {isJouleOpen && (
          <JouleComponent
            userName="Finance User"
            onClose={handleJouleClose}
            position={{ bottom: 20, right: 20 }}
            initialView="welcome"
          />
        )}
      </div>
    </ThemeProvider>
  );
} 