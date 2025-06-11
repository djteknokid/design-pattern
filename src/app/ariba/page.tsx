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

export default function AribaPage() {
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
        <ProductHeader productName="Ariba" onJouleClick={handleJouleToggle} />
        
        <FlexBox direction={FlexBoxDirection.Column} style={{ padding: '2rem' }}>
          <Title level="H1" style={{ marginBottom: '2rem' }}>Ariba</Title>
          
          <Card style={{ padding: '2rem', marginBottom: '2rem' }}>
            <FlexBox direction={FlexBoxDirection.Column} style={{ gap: '1rem' }}>
              <Title level="H2">SAP Ariba</Title>
              <Text>
                SAP Ariba is a comprehensive procurement and supply chain solution that connects buyers and suppliers 
                through the world's largest business commerce network.
              </Text>
              
              <Title level="H3" style={{ marginTop: '1rem' }}>Key Features:</Title>
              <ul style={{ marginLeft: '1rem' }}>
                <li>Procurement and sourcing</li>
                <li>Supplier management</li>
                <li>Contract management</li>
                <li>Supply chain collaboration</li>
                <li>Spend analysis and insights</li>
                <li>Risk management</li>
              </ul>
            </FlexBox>
          </Card>
          
          <Card style={{ padding: '2rem' }}>
            <FlexBox direction={FlexBoxDirection.Column} style={{ gap: '1rem' }}>
              <Title level="H3">Benefits</Title>
              <Text>
                Optimize your procurement processes, reduce costs, and manage supplier relationships more effectively.
              </Text>
            </FlexBox>
          </Card>
        </FlexBox>

        {/* Joule Component */}
        {isJouleOpen && (
          <JouleComponent
            userName="Procurement Manager"
            onClose={handleJouleClose}
            position={{ bottom: 20, right: 20 }}
            initialView="welcome"
          />
        )}
      </div>
    </ThemeProvider>
  );
} 