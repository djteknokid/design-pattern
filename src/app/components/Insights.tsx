"use client";

import {
  Card,
  FlexBox,
  FlexBoxDirection,
  FlexBoxWrap,
  FlexBoxJustifyContent,
  FlexBoxAlignItems,
  Icon,
  Title,
  Text,
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

export default function Insights() {
  return (
    <FlexBox direction={FlexBoxDirection.Column}>
      <Title level="H2" style={{ marginBottom: '1.5rem' }}>Insights</Title>
      
      <FlexBox wrap={FlexBoxWrap.Wrap} justifyContent={FlexBoxJustifyContent.Start} style={{ gap: '1.5rem' }}>
        {/* Travel Expenses */}
        <Card style={{ width: 'calc(25% - 1.125rem)', minWidth: '300px', padding: '1.5rem' }}>
          <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween} alignItems={FlexBoxAlignItems.Start} style={{ marginBottom: '1rem' }}>
            <FlexBox direction={FlexBoxDirection.Column}>
              <Title level="H3" style={{ fontSize: '1rem', fontWeight: '600' }}>Travel Expenses</Title>
              <Text style={{ fontSize: '0.875rem', color: '#6b7280' }}>By Quarter | USD</Text>
            </FlexBox>
            <Icon name="overflow" style={{ color: '#9ca3af' }} />
          </FlexBox>
          <FlexBox direction={FlexBoxDirection.Column} style={{ marginBottom: '1rem' }}>
            <FlexBox alignItems={FlexBoxAlignItems.End}>
              <Title level="H1" style={{ fontSize: '1.875rem', fontWeight: '700', margin: 0 }}>23.7</Title>
              <Text style={{ fontSize: '0.875rem', color: '#ef4444', marginLeft: '0.5rem' }}>K</Text>
            </FlexBox>
            <Text style={{ fontSize: '0.875rem', color: '#6b7280' }}>(Q4) Current Quarter</Text>
          </FlexBox>
          {/* Placeholder for bar chart */}
          <FlexBox justifyContent={FlexBoxJustifyContent.Center} alignItems={FlexBoxAlignItems.Center} 
            style={{ height: '8rem', backgroundColor: '#f3f4f6', borderRadius: '0.5rem' }}>
            <Text style={{ color: '#6b7280' }}>Bar Chart Placeholder</Text>
          </FlexBox>
        </Card>

        {/* Age, Income, Performance */}
        <Card style={{ width: 'calc(25% - 1.125rem)', minWidth: '300px', padding: '1.5rem' }}>
          <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween} alignItems={FlexBoxAlignItems.Start} style={{ marginBottom: '1rem' }}>
            <FlexBox direction={FlexBoxDirection.Column}>
              <Title level="H3" style={{ fontSize: '1rem', fontWeight: '600' }}>Age, Income, Performance per Employee</Title>
              <Text style={{ fontSize: '0.875rem', color: '#6b7280' }}>In Year, USD</Text>
            </FlexBox>
            <Icon name="overflow" style={{ color: '#9ca3af' }} />
          </FlexBox>
          {/* Placeholder for bubble chart */}
          <FlexBox justifyContent={FlexBoxJustifyContent.Center} alignItems={FlexBoxAlignItems.Center} 
            style={{ height: '12rem', backgroundColor: '#f3f4f6', borderRadius: '0.5rem' }}>
            <Text style={{ color: '#6b7280' }}>Bubble Chart Placeholder</Text>
          </FlexBox>
        </Card>

        {/* Open Sales Orders */}
        <Card style={{ width: 'calc(25% - 1.125rem)', minWidth: '300px', padding: '1.5rem' }}>
          <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween} alignItems={FlexBoxAlignItems.Start} style={{ marginBottom: '1rem' }}>
            <FlexBox direction={FlexBoxDirection.Column}>
              <Title level="H3" style={{ fontSize: '1rem', fontWeight: '600' }}>Open Sales Orders</Title>
              <Text style={{ fontSize: '0.875rem', color: '#6b7280' }}>Sorted By: Last Updated</Text>
            </FlexBox>
            <FlexBox alignItems={FlexBoxAlignItems.Center} style={{ gap: '0.25rem' }}>
              <Text style={{ fontSize: '0.875rem', color: '#6b7280' }}>4 of 58</Text>
              <Icon name="overflow" style={{ color: '#9ca3af' }} />
            </FlexBox>
          </FlexBox>
          <FlexBox direction={FlexBoxDirection.Column} style={{ gap: '0.75rem' }}>
            <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween}>
              <FlexBox direction={FlexBoxDirection.Column}>
                <Text style={{ fontWeight: '600' }}>2540</Text>
                <Text style={{ fontSize: '0.875rem', color: '#6b7280' }}>Open</Text>
              </FlexBox>
              <FlexBox direction={FlexBoxDirection.Column} alignItems={FlexBoxAlignItems.End}>
                <Text style={{ fontSize: '0.875rem', color: '#6b7280' }}>2 days ago</Text>
                <Text style={{ fontWeight: '600' }}>106.5K USD</Text>
              </FlexBox>
            </FlexBox>
            <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween}>
              <FlexBox direction={FlexBoxDirection.Column}>
                <Text style={{ fontWeight: '600' }}>2539</Text>
                <Text style={{ fontSize: '0.875rem', color: '#6b7280' }}>Open</Text>
              </FlexBox>
              <FlexBox direction={FlexBoxDirection.Column} alignItems={FlexBoxAlignItems.End}>
                <Text style={{ fontSize: '0.875rem', color: '#6b7280' }}>6 days ago</Text>
                <Text style={{ fontWeight: '600' }}>54k USD</Text>
              </FlexBox>
            </FlexBox>
            <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween}>
              <FlexBox direction={FlexBoxDirection.Column}>
                <Text style={{ fontWeight: '600' }}>2538</Text>
                <Text style={{ fontSize: '0.875rem', color: '#6b7280' }}>In process</Text>
              </FlexBox>
              <FlexBox direction={FlexBoxDirection.Column} alignItems={FlexBoxAlignItems.End}>
                <Text style={{ fontSize: '0.875rem', color: '#6b7280' }}>10 days ago</Text>
                <Text style={{ fontWeight: '600' }}>61.6K USD</Text>
              </FlexBox>
            </FlexBox>
            <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween}>
              <FlexBox direction={FlexBoxDirection.Column}>
                <Text style={{ fontWeight: '600' }}>2540</Text>
                <Text style={{ fontSize: '0.875rem', color: '#6b7280' }}>Open</Text>
              </FlexBox>
              <FlexBox direction={FlexBoxDirection.Column} alignItems={FlexBoxAlignItems.End}>
                <Text style={{ fontSize: '0.875rem', color: '#6b7280' }}>1 month ago</Text>
                <Text style={{ fontWeight: '600' }}>41.5K USD</Text>
              </FlexBox>
            </FlexBox>
          </FlexBox>
        </Card>

        {/* Last Month Sales */}
        <Card style={{ width: 'calc(25% - 1.125rem)', minWidth: '300px', padding: '1.5rem' }}>
          <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween} alignItems={FlexBoxAlignItems.Start} style={{ marginBottom: '1rem' }}>
            <FlexBox direction={FlexBoxDirection.Column}>
              <Title level="H3" style={{ fontSize: '1rem', fontWeight: '600' }}>Last Month Sales</Title>
              <Text style={{ fontSize: '0.875rem', color: '#6b7280' }}>April, 2025</Text>
            </FlexBox>
            <Icon name="overflow" style={{ color: '#9ca3af' }} />
          </FlexBox>
          <FlexBox direction={FlexBoxDirection.Column} style={{ marginBottom: '1rem' }}>
            <FlexBox alignItems={FlexBoxAlignItems.Center} style={{ gap: '0.5rem' }}>
              <Title level="H1" style={{ fontSize: '1.875rem', fontWeight: '700', margin: 0 }}>65.5</Title>
              <Icon name="trend-up" style={{ color: '#10b981' }} />
              <Text style={{ fontSize: '0.875rem', color: '#6b7280' }}>K</Text>
            </FlexBox>
            <FlexBox style={{ gap: '1rem', marginTop: '0.5rem' }}>
              <Text style={{ fontSize: '0.875rem', color: '#6b7280' }}>Target: 20</Text>
              <Text style={{ fontSize: '0.875rem', color: '#6b7280' }}>Deviation: 956.00 USD</Text>
            </FlexBox>
            <Text style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.25rem' }}>By Revenue and Cost</Text>
          </FlexBox>
          {/* Placeholder for stacked bar chart */}
          <FlexBox justifyContent={FlexBoxJustifyContent.Center} alignItems={FlexBoxAlignItems.Center} 
            style={{ height: '6rem', backgroundColor: '#f3f4f6', borderRadius: '0.5rem' }}>
            <Text style={{ color: '#6b7280' }}>Stacked Bar Chart Placeholder</Text>
          </FlexBox>
        </Card>
      </FlexBox>
    </FlexBox>
  );
} 