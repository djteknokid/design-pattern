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
import ProductHeader from "../../components/ProductHeader";

export default function ForecastPage() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100">
        <ProductHeader productName="Sales Cloud" />
        
        <FlexBox direction={FlexBoxDirection.Column} style={{ padding: '2rem' }}>
          <Title level="H1" style={{ marginBottom: '2rem' }}>Forecast</Title>
          
          <Card style={{ padding: '2rem', marginBottom: '2rem' }}>
            <FlexBox direction={FlexBoxDirection.Column} style={{ gap: '1rem' }}>
              <Title level="H2">Sales Forecasting</Title>
              <Text>
                Analyze and predict future sales performance with intelligent forecasting tools. 
                Track your team's progress against targets and make data-driven decisions.
              </Text>
              
              <Title level="H3" style={{ marginTop: '1rem' }}>Key Features:</Title>
              <ul style={{ marginLeft: '1rem' }}>
                <li>Real-time forecast updates</li>
                <li>Predictive analytics</li>
                <li>Territory-based forecasting</li>
                <li>Quarterly and annual projections</li>
                <li>Confidence level indicators</li>
              </ul>
            </FlexBox>
          </Card>
          
          <Card style={{ padding: '2rem' }}>
            <FlexBox direction={FlexBoxDirection.Column} style={{ gap: '1rem' }}>
              <Title level="H3">Current Period Overview</Title>
              <Text>
                View your current forecast performance and make adjustments to meet your targets.
              </Text>
            </FlexBox>
          </Card>
        </FlexBox>
      </div>
    </ThemeProvider>
  );
} 