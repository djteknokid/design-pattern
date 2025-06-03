"use client";

import { useState } from "react";
import {
  ShellBar,
  ShellBarItem,
  Avatar,
  Title,
  Bar,
  ThemeProvider,
  Input,
  Select,
  DatePicker,
  TimePicker,
  TextArea,
  Form,
  FormItem,
  Label,
  MessageStrip,
  Card,
  Icon,
  Button,
  FlexBox,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  FlexBoxAlignItems,
  List,
  TabContainer,
  Tab,
  TabSeparator,
  MessageBox,
  MessageBoxType
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

interface TimeEntry {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  project: string;
  activity: string;
  description: string;
  status: "draft" | "submitted" | "approved" | "rejected";
}

export default function MobileTimesheet() {
  const [activeTab, setActiveTab] = useState("entry");
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>([]);
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [messageBoxType, setMessageBoxType] = useState<MessageBoxType>(MessageBoxType.Success);
  const [messageBoxText, setMessageBoxText] = useState("");

  const projects = [
    "Project Alpha",
    "Project Beta",
    "Project Gamma",
    "Project Delta"
  ];

  const activities = [
    "Development",
    "Testing",
    "Documentation",
    "Meeting",
    "Code Review",
    "Planning"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    setShowMessageBox(true);
    setMessageBoxType(MessageBoxType.Success);
    setMessageBoxText("Time entry submitted successfully!");
  };

  const renderTimeEntryForm = () => (
    <Form
      onSubmit={handleSubmit}
      style={{
        padding: "1rem",
        backgroundColor: "white",
        borderRadius: "0.5rem",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
      }}
    >
      <FormItem>
        <Label>Date</Label>
        <DatePicker required />
      </FormItem>

      <FormItem>
        <Label>Start Time</Label>
        <TimePicker required />
      </FormItem>

      <FormItem>
        <Label>End Time</Label>
        <TimePicker required />
      </FormItem>

      <FormItem>
        <Label>Project</Label>
        <Select required>
          {projects.map((project) => (
            <option key={project} value={project}>
              {project}
            </option>
          ))}
        </Select>
      </FormItem>

      <FormItem>
        <Label>Activity</Label>
        <Select required>
          {activities.map((activity) => (
            <option key={activity} value={activity}>
              {activity}
            </option>
          ))}
        </Select>
      </FormItem>

      <FormItem>
        <Label>Description</Label>
        <TextArea rows={3} placeholder="Enter activity description" />
      </FormItem>

      <div style={{ marginTop: "1rem" }}>
        <Button design="Emphasized" type="Submit">
          Submit Time Entry
        </Button>
      </div>
    </Form>
  );

  const renderTimeEntriesList = () => (
    <List>
      {timeEntries.map((entry) => (
        <div
          key={entry.id}
          style={{
            padding: "1rem",
            borderBottom: "1px solid #e5e7eb",
            backgroundColor: "white"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
            <span style={{ fontWeight: "bold" }}>{entry.project}</span>
            <span style={{
              color: entry.status === "approved" ? "green" : 
                     entry.status === "rejected" ? "red" : "blue"
            }}>
              {entry.status}
            </span>
          </div>
          <div style={{ color: "#6b7280" }}>{entry.activity}</div>
          <div style={{ fontSize: "0.875rem", color: "#6b7280" }}>
            {entry.startTime} - {entry.endTime}
          </div>
        </div>
      ))}
    </List>
  );

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100">
        <ShellBar
          primaryTitle="Mobile Timesheet"
          secondaryTitle="Time Entry"
          showNotifications
          profile={<Avatar icon="employee" />}
        >
          <ShellBarItem icon="home" text="Home" />
          <ShellBarItem icon="documentation" text="Reports" />
        </ShellBar>

        <div className="p-4">
          <Bar>
            <Title>Timesheet</Title>
          </Bar>

          <MessageStrip className="mt-4">
            Enter your time entries for the week. Make sure to include project, activity, and description.
          </MessageStrip>

          <TabContainer
            className="mt-4"
            onTabSelect={() => {
              // Toggle between tabs
              setActiveTab(prev => prev === "entry" ? "entries" : "entry");
            }}
          >
            <Tab
              text="Time Entry"
              selected={activeTab === "entry"}
            />
            <TabSeparator />
            <Tab
              text="Entries"
              selected={activeTab === "entries"}
            />
          </TabContainer>

          <div className="mt-4">
            {activeTab === "entry" ? renderTimeEntryForm() : renderTimeEntriesList()}
          </div>

          {showMessageBox && (
            <MessageBox
              type={messageBoxType}
              onClose={() => setShowMessageBox(false)}
            >
              {messageBoxText}
            </MessageBox>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
} 