'use client';

import React from 'react';
import { 
  Card,
  CardHeader,
  FlexBox,
  Title,
  Text,
  Button,
  Icon
} from '@ui5/webcomponents-react';

// Import UI5 icons
import '@ui5/webcomponents-icons/dist/time-entry-request.js';
import '@ui5/webcomponents-icons/dist/calendar.js';

export default function TimesheetUI5Page() {
  return (
    <div style={{ padding: '2rem', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <FlexBox
        direction="Column"
        alignItems="Center"
        justifyContent="Center"
        style={{ height: '60vh' }}
      >
        <Card style={{ padding: '2rem', maxWidth: '500px', textAlign: 'center' }}>
          <CardHeader>
            <Title level="H2">Timesheet Application</Title>
          </CardHeader>
          
          <FlexBox direction="Column" alignItems="Center" style={{ padding: '2rem' }}>
            <Icon name="time-entry-request" style={{ fontSize: '4rem', marginBottom: '1rem', color: '#0070f2' }} />
            
            <Text style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
              This is a placeholder for the Timesheet UI5 application. 
            </Text>
            
            <Text style={{ marginBottom: '2rem', color: '#666' }}>
              The full timesheet functionality will be implemented after 
              resolving UI5 Web Components compatibility issues.
            </Text>
            
            <FlexBox style={{ gap: '1rem' }}>
              <Button design="Emphasized" icon="calendar">
                View Timesheet
              </Button>
              <Button design="Default" icon="time-entry-request">
                Add Entry
              </Button>
            </FlexBox>
          </FlexBox>
        </Card>
      </FlexBox>
    </div>
  );
}
