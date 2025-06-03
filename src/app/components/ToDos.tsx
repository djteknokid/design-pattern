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
  Button,
  Text,
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

export default function ToDos() {
  const cardStyle = {
    width: '438px',
    height: '240px',
    padding: '16px',
    borderRadius: '16px',
    background: '#FFF',
    boxShadow: '0px 0px 2px 0px rgba(34, 54, 73, 0.20), 0px 2px 4px 0px rgba(34, 54, 73, 0.20)'
  };

  return (
    <FlexBox direction={FlexBoxDirection.Column} style={{ marginBottom: '3rem' }}>
      <Title level="H2" style={{ marginBottom: '1.5rem' }}>To Dos</Title>
      
      <FlexBox wrap={FlexBoxWrap.Wrap} justifyContent={FlexBoxJustifyContent.Start} style={{ gap: '1.5rem' }}>
        {/* Time Off Request */}
        <Card style={cardStyle}>
          <FlexBox direction={FlexBoxDirection.Column} style={{ height: '100%', gap: '12px', alignItems: 'flex-start' }}>
            <FlexBox alignItems={FlexBoxAlignItems.Center} style={{ gap: '0.75rem' }}>
              <Icon name="employee" style={{ color: '#6b7280' }} />
              <FlexBox direction={FlexBoxDirection.Column}>
                <Title level="H3" style={{ fontSize: '1rem', fontWeight: '600' }}>Time Off Request</Title>
                <Text style={{ fontSize: '0.875rem', color: '#6b7280' }}>Frederic Manson</Text>
                <Text style={{ fontSize: '0.75rem', color: '#9ca3af' }}>11 minutes ago</Text>
              </FlexBox>
            </FlexBox>
            <Text style={{ fontSize: '0.875rem', color: '#6b7280' }}>
              Vacation<br />July 1st - 4th
            </Text>
            <FlexBox alignItems={FlexBoxAlignItems.End}>
              <Title level="H1" style={{ fontSize: '1.875rem', fontWeight: '700', margin: 0 }}>4</Title>
              <Text style={{ fontSize: '0.875rem', marginLeft: '0.5rem' }}>Days</Text>
            </FlexBox>
            <FlexBox style={{ gap: '0.5rem', marginTop: 'auto' }}>
            <Button design="Positive">Approve</Button>
            <Button design="Negative">Decline</Button>
            </FlexBox>
          </FlexBox>
        </Card>

        {/* Request Approval */}
        <Card style={cardStyle}>
          <FlexBox direction={FlexBoxDirection.Column} style={{ height: '100%', gap: '12px', alignItems: 'flex-start' }}>
            <FlexBox alignItems={FlexBoxAlignItems.Center} style={{ gap: '0.75rem' }}>
              <Icon name="travel-expense" style={{ color: '#6b7280' }} />
              <FlexBox direction={FlexBoxDirection.Column}>
                <Title level="H3" style={{ fontSize: '1rem', fontWeight: '600' }}>Request Approval</Title>
                <Text style={{ fontSize: '0.875rem', color: '#6b7280' }}>Marie Johnson</Text>
                <Text style={{ fontSize: '0.75rem', color: '#9ca3af' }}>15 minutes ago</Text>
              </FlexBox>
            </FlexBox>
            <Text style={{ fontSize: '0.875rem', color: '#6b7280' }}>
              Travel to Las Vegas Fair Tech Ed<br />June 3rd - 5th
            </Text>
            <FlexBox alignItems={FlexBoxAlignItems.End}>
              <Title level="H1" style={{ fontSize: '1.875rem', fontWeight: '700', margin: 0 }}>3,954.00</Title>
              <Text style={{ fontSize: '0.875rem', marginLeft: '0.5rem' }}>USD</Text>
            </FlexBox>
            <FlexBox style={{ gap: '0.5rem', marginTop: 'auto' }}>
            <Button design="Positive">Approve</Button>
            <Button design="Attention">Send Back</Button>
            </FlexBox>
          </FlexBox>
        </Card>

        {/* New Project Team Request */}
        <Card style={cardStyle}>
          <FlexBox direction={FlexBoxDirection.Column} style={{ height: '100%', gap: '12px', alignItems: 'flex-start' }}>
            <FlexBox alignItems={FlexBoxAlignItems.Center} style={{ gap: '0.75rem' }}>
              <Icon name="group" style={{ color: '#6b7280' }} />
              <FlexBox direction={FlexBoxDirection.Column}>
                <Title level="H3" style={{ fontSize: '1rem', fontWeight: '600' }}>New project team request</Title>
                <Text style={{ fontSize: '0.875rem', color: '#6b7280' }}>Ted Walsh</Text>
                <Text style={{ fontSize: '0.75rem', color: '#9ca3af' }}>33 minutes ago</Text>
              </FlexBox>
            </FlexBox>
            <Text style={{ fontSize: '0.875rem', color: '#6b7280' }}>
              Comment: Please assemble a new project team to create the CRM Tool.
            </Text>
            <FlexBox alignItems={FlexBoxAlignItems.End}>
              <Title level="H1" style={{ fontSize: '1.875rem', fontWeight: '700', margin: 0 }}>2</Title>
              <Text style={{ fontSize: '0.875rem', marginLeft: '0.5rem' }}>Days</Text>
            </FlexBox>
            <FlexBox style={{ gap: '0.5rem', marginTop: 'auto' }}>
            <Button design="Positive">Create team</Button>
            <Button design="Negative">Reject</Button>
            </FlexBox>
          </FlexBox>
        </Card>

        {/* Release Sales Quotation */}
        <Card style={cardStyle}>
          <FlexBox direction={FlexBoxDirection.Column} style={{ height: '100%', gap: '12px', alignItems: 'flex-start' }}>
            <FlexBox alignItems={FlexBoxAlignItems.Center} style={{ gap: '0.75rem' }}>
              <Icon name="document" style={{ color: '#6b7280' }} />
              <FlexBox direction={FlexBoxDirection.Column}>
                <Title level="H3" style={{ fontSize: '1rem', fontWeight: '600' }}>Release Sales Quotation 6566654</Title>
                <Text style={{ fontSize: '0.875rem', color: '#6b7280' }}>Andreas Niamz</Text>
                <Text style={{ fontSize: '0.75rem', color: '#9ca3af' }}>1 hour ago</Text>
              </FlexBox>
            </FlexBox>
            <Text style={{ fontSize: '0.875rem', color: '#6b7280' }}>
              Comment: As discussed I have updated the quote. Please release.
            </Text>
            <FlexBox alignItems={FlexBoxAlignItems.End}>
              <Title level="H1" style={{ fontSize: '1.875rem', fontWeight: '700', margin: 0 }}>8,565.00</Title>
              <Text style={{ fontSize: '0.875rem', marginLeft: '0.5rem' }}>USD</Text>
            </FlexBox>
            <FlexBox style={{ gap: '0.5rem', marginTop: 'auto' }}>
            <Button design="Positive">Release</Button>
            <Button design="Attention">Request Rework</Button>
            </FlexBox>
          </FlexBox>
        </Card>
      </FlexBox>
    </FlexBox>
  );
} 