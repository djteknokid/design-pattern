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

interface TodoData {
  id: string;
  icon: string;
  title: string;
  userName: string;
  timeAgo: string;
  description: string;
  metricValue: string;
  metricUnit: string;
  buttons: {
    primary: { text: string; design: "Positive" | "Negative" | "Attention" };
    secondary: { text: string; design: "Positive" | "Negative" | "Attention" };
  };
}

const todoData: TodoData[] = [
  {
    id: "time-off",
    icon: "employee",
    title: "Time Off Request",
    userName: "Frederic Manson",
    timeAgo: "11 minutes ago",
    description: "Vacation\nJuly 1st - 4th",
    metricValue: "4",
    metricUnit: "Days",
    buttons: {
      primary: { text: "Approve", design: "Positive" },
      secondary: { text: "Decline", design: "Negative" }
    }
  },
  {
    id: "request-approval",
    icon: "travel-expense",
    title: "Request Approval",
    userName: "Marie Johnson",
    timeAgo: "15 minutes ago",
    description: "Travel to Las Vegas Fair Tech Ed\nJune 3rd - 5th",
    metricValue: "3,954.00",
    metricUnit: "USD",
    buttons: {
      primary: { text: "Approve", design: "Positive" },
      secondary: { text: "Send Back", design: "Attention" }
    }
  },
  {
    id: "project-team",
    icon: "group",
    title: "New project team request",
    userName: "Ted Walsh",
    timeAgo: "33 minutes ago",
    description: "Comment: Please assemble a new project team to create the CRM Tool.",
    metricValue: "2",
    metricUnit: "Days",
    buttons: {
      primary: { text: "Create team", design: "Positive" },
      secondary: { text: "Reject", design: "Negative" }
    }
  },
  {
    id: "sales-quotation",
    icon: "document",
    title: "Release Sales Quotation 6566654",
    userName: "Andreas Niamz",
    timeAgo: "1 hour ago",
    description: "Comment: As discussed I have updated the quote. Please release.",
    metricValue: "8,565.00",
    metricUnit: "USD",
    buttons: {
      primary: { text: "Release", design: "Positive" },
      secondary: { text: "Request Rework", design: "Attention" }
    }
  }
];

interface TodoCardProps {
  data: TodoData;
}

function TodoCard({ data }: TodoCardProps) {
  const cardStyle = {
    width: '438px',
    height: '240px',
    padding: '16px',
    borderRadius: '16px',
    background: '#FFF',
    boxShadow: '0px 0px 2px 0px rgba(34, 54, 73, 0.20), 0px 2px 4px 0px rgba(34, 54, 73, 0.20)',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '12px',
    alignItems: 'flex-start'
  };

  const headerFlexStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    position: 'relative' as const,
    width: '100%'
  };

  const userInfoFlexStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    flex: 1
  };

  const timeStyle = {
    position: 'absolute' as const,
    right: '0',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '0.75rem',
    color: '#9ca3af'
  };

  const metricFlexStyle = {
    display: 'flex',
    alignItems: 'end'
  };

  const buttonFlexStyle = {
    display: 'flex',
    gap: '0.5rem',
    marginTop: 'auto'
  };

  return (
    <div style={cardStyle}>
      <div style={headerFlexStyle}>
        <Icon name={data.icon} style={{ color: '#6b7280', width: '32px', height: '32px' }} />
        <div style={userInfoFlexStyle}>
          <Title level="H3" style={{ 
            color: 'var(--Tile-sapTile_TitleTextColor, #1D2D3E)',
            fontFamily: '72',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: '700',
            lineHeight: 'normal'
          }}>{data.title}</Title>
          <Text style={{ 
            color: 'var(--Tile-sapTile_TextColor, #556B82)',
            fontFamily: '72',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 'normal'
          }}>{data.userName}</Text>
        </div>
        <Text style={timeStyle}>{data.timeAgo}</Text>
      </div>
      <Text style={{ 
        color: 'var(--Text-sapTextColor, #1D2D3E)',
        fontFamily: '72',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '21px'
      }}>
        {data.description.split('\n').map((line, index) => (
          <span key={index}>
            {line}
            {index < data.description.split('\n').length - 1 && <br />}
          </span>
        ))}
      </Text>
      <div style={metricFlexStyle}>
        <Title level="H1" style={{ 
          color: 'var(--Semantic-Text-sapNeutralTextColor, #1D2D3E)',
          textAlign: 'right',
          fontFamily: '72',
          fontSize: '36px',
          fontStyle: 'normal',
          fontWeight: '300',
          lineHeight: 'normal',
          margin: 0 
        }}>{data.metricValue}</Title>
        <Text style={{ fontSize: '0.875rem', marginLeft: '0.5rem' }}>{data.metricUnit}</Text>
      </div>
      <div style={buttonFlexStyle}>
        <Button design={data.buttons.primary.design}>{data.buttons.primary.text}</Button>
        <Button design={data.buttons.secondary.design}>{data.buttons.secondary.text}</Button>
      </div>
    </div>
  );
}

export default function ToDos() {
  return (
    <FlexBox direction={FlexBoxDirection.Column} style={{ marginBottom: '3rem' }}>
      <Title level="H2" style={{ 
        color: 'var(--Text-sapTitleColor, #1D2D3E)',
        fontFamily: '72',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
        marginBottom: '1.5rem'
      }}>To Dos</Title>
      
      <FlexBox wrap={FlexBoxWrap.Wrap} justifyContent={FlexBoxJustifyContent.Start} style={{ gap: '1.5rem' }}>
        {todoData.map((todo) => (
          <TodoCard key={todo.id} data={todo} />
        ))}
      </FlexBox>
    </FlexBox>
  );
} 