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

export default function AribaPage() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100">
        <ProductHeader productName="Ariba" />
        
        <FlexBox direction={FlexBoxDirection.Column} style={{ padding: '2rem' }}>
          <Title level="H1" style={{ marginBottom: '2rem' }}>Ariba</Title>
          
          <Card style={{ padding: '2rem', marginBottom: '2rem' }}>
            <FlexBox direction={FlexBoxDirection.Column} style={{ gap: '1rem' }}>
              <Title level="H2">SAP Ariba</Title>
              <Text>
                SAP Ariba is the world's largest business commerce network, connecting buyers and suppliers 
                to enable efficient procurement processes and drive business value through spend management.
              </Text>
              
              <Title level="H3" style={{ marginTop: '1rem' }}>Core Solutions:</Title>
              <ul style={{ marginLeft: '1rem' }}>
                <li>Ariba Buying - Procurement and purchasing</li>
                <li>Ariba Sourcing - Strategic sourcing and supplier management</li>
                <li>Ariba Contracts - Contract lifecycle management</li>
                <li>Ariba Supplier Management - Supplier information and performance</li>
                <li>Ariba Network - B2B commerce platform</li>
              </ul>
            </FlexBox>
          </Card>
          
          <Card style={{ padding: '2rem' }}>
            <FlexBox direction={FlexBoxDirection.Column} style={{ gap: '1rem' }}>
              <Title level="H3">Procurement Excellence</Title>
              <Text>
                Optimize your procurement processes, reduce costs, mitigate risks, and collaborate effectively 
                with suppliers across the global Ariba Network.
              </Text>
            </FlexBox>
          </Card>
        </FlexBox>
      </div>
    </ThemeProvider>
  );
} 