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

export default function ConcurPage() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100">
        <ProductHeader productName="Concur" />
        
        <FlexBox direction={FlexBoxDirection.Column} style={{ padding: '2rem' }}>
          <Title level="H1" style={{ marginBottom: '2rem' }}>Concur</Title>
          
          <Card style={{ padding: '2rem', marginBottom: '2rem' }}>
            <FlexBox direction={FlexBoxDirection.Column} style={{ gap: '1rem' }}>
              <Title level="H2">SAP Concur</Title>
              <Text>
                SAP Concur is the world's leading provider of integrated travel, expense, and invoice management solutions. 
                Drive efficiency and compliance while gaining complete visibility into business spend.
              </Text>
              
              <Title level="H3" style={{ marginTop: '1rem' }}>Solutions:</Title>
              <ul style={{ marginLeft: '1rem' }}>
                <li>Concur Expense - Automated expense management</li>
                <li>Concur Travel - Business travel booking and management</li>
                <li>Concur Invoice - Invoice and accounts payable automation</li>
                <li>Concur Request - Travel request and approval workflow</li>
              </ul>
            </FlexBox>
          </Card>
          
          <Card style={{ padding: '2rem' }}>
            <FlexBox direction={FlexBoxDirection.Column} style={{ gap: '1rem' }}>
              <Title level="H3">Key Benefits</Title>
              <Text>
                Streamline your spend management processes, improve compliance, and gain real-time visibility into business expenses.
              </Text>
            </FlexBox>
          </Card>
        </FlexBox>
      </div>
    </ThemeProvider>
  );
} 