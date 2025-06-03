'use client';

import React, { useState, useEffect } from 'react';
import { 
  Avatar,
  AvatarGroup,
  Badge,
  Bar,
  Button,
  Card,
  CardHeader,
  ComboBox,
  DatePicker,
  Dialog,
  DynamicPage,
  DynamicPageHeader,
  DynamicPageTitle,
  FilterBar,
  FilterGroupItem,
  FlexBox,
  Form,
  FormGroup,
  FormItem,
  Icon,
  Input,
  Label,
  List,
  MessageBox,
  MultiComboBox,
  ObjectPage,
  ObjectPageSection,
  Panel,
  ProgressIndicator,
  Select,
  ShellBar,
  StandardListItem,
  Switch,
  Tab,
  TabContainer,
  Table,
  TableCell,
  TableColumn,
  TableRow,
  Text,
  TextArea,
  Title,
  Toast,
  ToggleButton,
  Toolbar,
  ToolbarSpacer
} from '@ui5/webcomponents-react';

// Import UI5 types
import type { 
  ButtonDesign, 
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  MessageBoxActions,
  MessageBoxTypes,
} from '@ui5/webcomponents-react/types';

// Import UI5 icons
import '@ui5/webcomponents-icons/dist/time-entry-request.js';
import '@ui5/webcomponents-icons/dist/approvals.js';
import '@ui5/webcomponents-icons/dist/bar-chart.js';
import '@ui5/webcomponents-icons/dist/group.js';
import '@ui5/webcomponents-icons/dist/action-settings.js';
import '@ui5/webcomponents-icons/dist/add.js';
import '@ui5/webcomponents-icons/dist/paper-plane.js';
import '@ui5/webcomponents-icons/dist/download.js';
import '@ui5/webcomponents-icons/dist/edit.js';
import '@ui5/webcomponents-icons/dist/delete.js';
import '@ui5/webcomponents-icons/dist/pie-chart.js';
import '@ui5/webcomponents-icons/dist/status-completed.js';
import '@ui5/webcomponents-icons/dist/status-in-process.js';
import '@ui5/webcomponents-icons/dist/pending.js';
import '@ui5/webcomponents-icons/dist/complete.js';
import '@ui5/webcomponents-icons/dist/email.js';
import '@ui5/webcomponents-icons/dist/calendar.js';
import '@ui5/webcomponents-icons/dist/activity-items.js';
import '@ui5/webcomponents-icons/dist/settings.js';
import '@ui5/webcomponents-icons/dist/excel-attachment.js';
import '@ui5/webcomponents-icons/dist/pdf-attachment.js';
import '@ui5/webcomponents-icons/dist/display.js';
import '@ui5/webcomponents-icons/dist/share.js';
import '@ui5/webcomponents-icons/dist/person-placeholder.js';
import '@ui5/webcomponents-icons/dist/sap-logo-shape.js';

// Define mock data for our timesheet application
const mockTimeEntries = [
  { id: 1, date: '2025-05-20', project: 'SAP S/4HANA Implementation', task: 'Requirements Analysis', hours: 8, status: 'Approved' },
  { id: 2, date: '2025-05-21', project: 'SAP S/4HANA Implementation', task: 'System Configuration', hours: 7.5, status: 'Approved' },
  { id: 3, date: '2025-05-22', project: 'SAP S/4HANA Implementation', task: 'Testing', hours: 6, status: 'Pending' },
  { id: 4, date: '2025-05-23', project: 'SAP S/4HANA Implementation', task: 'Documentation', hours: 4, status: 'Pending' },
  { id: 5, date: '2025-05-24', project: 'Internal Meeting', task: 'Weekly Sync', hours: 2, status: 'Pending' },
  { id: 6, date: '2025-05-27', project: 'SAP Fiori Development', task: 'UI Design', hours: 8, status: 'Draft' },
];

const mockProjects = [
  { id: 1, name: 'SAP S/4HANA Implementation', client: 'Acme Corp', status: 'In Progress' },
  { id: 2, name: 'SAP Fiori Development', client: 'TechGlobal', status: 'In Progress' },
  { id: 3, name: 'SAP BW/4HANA Migration', client: 'IndustryCo', status: 'Planned' },
  { id: 4, name: 'Internal Meeting', client: 'Internal', status: 'Ongoing' },
  { id: 5, name: 'Training', client: 'Internal', status: 'Ongoing' },
];

const mockTasks = [
  { id: 1, name: 'Requirements Analysis', projectId: 1 },
  { id: 2, name: 'System Configuration', projectId: 1 },
  { id: 3, name: 'Testing', projectId: 1 },
  { id: 4, name: 'Documentation', projectId: 1 },
  { id: 5, name: 'UI Design', projectId: 2 },
  { id: 6, name: 'Development', projectId: 2 },
  { id: 7, name: 'Weekly Sync', projectId: 4 },
];

const mockTeamMembers = [
  { id: 1, name: 'John Smith', role: 'Project Manager', avatar: 'JS' },
  { id: 2, name: 'Sarah Johnson', role: 'SAP Consultant', avatar: 'SJ' },
  { id: 3, name: 'Michael Chen', role: 'Developer', avatar: 'MC' },
  { id: 4, name: 'Emma Wilson', role: 'Business Analyst', avatar: 'EW' },
  { id: 5, name: 'David Kim', role: 'QA Engineer', avatar: 'DK' },
];

// Define theme settings
const themeSettings = {
  contentDensity: 'Compact'
};

export default function TimesheetUI5Page() {
  // State variables
  const [selectedTab, setSelectedTab] = useState("timesheet");
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [selectedProject, setSelectedProject] = useState<string>("");
  const [selectedTask, setSelectedTask] = useState<string>("");
  const [hours, setHours] = useState<string>("8");
  const [timeEntries, setTimeEntries] = useState(mockTimeEntries);
  const [filteredTasks, setFilteredTasks] = useState(mockTasks);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [entryToDelete, setEntryToDelete] = useState<number | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [messageBoxConfig, setMessageBoxConfig] = useState({
    title: "",
    message: "",
    type: MessageBoxTypes.INFORMATION
  });

  // Filter tasks based on selected project
  useEffect(() => {
    if (selectedProject) {
      const projectId = mockProjects.find(p => p.name === selectedProject)?.id;
      setFilteredTasks(mockTasks.filter(task => task.projectId === projectId));
    } else {
      setFilteredTasks([]);
    }
  }, [selectedProject]);

  // Handle adding a new time entry
  const handleAddTimeEntry = () => {
    if (!selectedProject || !selectedTask || !hours) {
      setMessageBoxConfig({
        title: "Validation Error",
        message: "Please fill in all required fields",
        type: MessageBoxTypes.ERROR
      });
      setShowMessageBox(true);
      return;
    }

    const newEntry = {
      id: timeEntries.length + 1,
      date: selectedDate,
      project: selectedProject,
      task: selectedTask,
      hours: parseFloat(hours),
      status: 'Draft'
    };

    setTimeEntries([...timeEntries, newEntry]);
    setShowAddDialog(false);
    
    // Reset form
    setSelectedTask("");
    setHours("8");
    
    // Show success toast
    setToastMessage("Time entry added successfully");
    setShowToast(true);
  };

  // Handle deleting a time entry
  const handleDeleteTimeEntry = () => {
    if (entryToDelete !== null) {
      setTimeEntries(timeEntries.filter(entry => entry.id !== entryToDelete));
      setShowDeleteDialog(false);
      setEntryToDelete(null);
      
      // Show success toast
      setToastMessage("Time entry deleted successfully");
      setShowToast(true);
    }
  };

  // Handle submitting timesheet
  const handleSubmitTimesheet = () => {
    setMessageBoxConfig({
      title: "Submit Timesheet",
      message: "Are you sure you want to submit your timesheet for approval?",
      type: MessageBoxTypes.CONFIRM
    });
    setShowMessageBox(true);
  };

  // Handle message box actions
  const handleMessageBoxAction = (action: string) => {
    setShowMessageBox(false);
    
    if (action === MessageBoxActions.OK && messageBoxConfig.title === "Submit Timesheet") {
      // Update status of all draft entries to pending
      const updatedEntries = timeEntries.map(entry => 
        entry.status === 'Draft' ? {...entry, status: 'Pending'} : entry
      );
      setTimeEntries(updatedEntries);
      
      // Show success toast
      setToastMessage("Timesheet submitted successfully");
      setShowToast(true);
    }
  };

  return (
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Shell Bar */}
        <ShellBar 
          logo={<Icon name="sap-logo-shape" />}
          primaryTitle="SAP Timesheet"
          secondaryTitle="UI5 Components Demo"
          profile={
            <Avatar>
              <Icon name="person-placeholder" />
            </Avatar>
          }
          showNotifications
          showProductSwitch
          showCoPilot
        >
          <ShellBarItem icon="palette" text="Theme" />
          <ShellBarItem icon="action-settings" text="Settings" />
        </ShellBar>

        {/* Tab Navigation */}
        <TabContainer 
          onTabSelect={(e) => setSelectedTab(e.detail.tab.dataset.key || "")}
          fixed
          collapsed={false}
        >
          <Tab data-key="timesheet" text="My Timesheet" icon="time-entry-request" />
          <Tab data-key="approvals" text="Approvals" icon="approvals" />
          <Tab data-key="reports" text="Reports" icon="bar-chart" />
          <Tab data-key="team" text="Team" icon="group" />
          <Tab data-key="settings" text="Settings" icon="action-settings" />
        </TabContainer>

        {/* Main Content */}
        {selectedTab === "timesheet" && (
          <DynamicPage 
            headerTitle={
              <DynamicPageTitle
                header={<Title>My Timesheet</Title>}
                subHeader={<Text>Current Week: May 20 - May 26, 2025</Text>}
                actions={
                  <>
                    <Button 
                      design={ButtonDesign.Emphasized} 
                      icon="add"
                      onClick={() => setShowAddDialog(true)}
                    >
                      Add Time
                    </Button>
                    <Button 
                      design={ButtonDesign.Transparent} 
                      icon="paper-plane"
                      onClick={handleSubmitTimesheet}
                    >
                      Submit
                    </Button>
                  </>
                }
              />
            }
            headerContent={
              <DynamicPageHeader>
                <FlexBox
                  alignItems={FlexBoxAlignItems.Center}
                  justifyContent={FlexBoxJustifyContent.SpaceBetween}
                >
                  <FilterBar showFilterConfiguration>
                    <FilterGroupItem label="Date Range">
                      <FlexBox alignItems={FlexBoxAlignItems.Center}>
                        <DatePicker />
                        <Text style={{ margin: '0 8px' }}>to</Text>
                        <DatePicker />
                      </FlexBox>
                    </FilterGroupItem>
                    <FilterGroupItem label="Project">
                      <ComboBox>
                        {mockProjects.map(project => (
                          <ComboBoxItem key={project.id} text={project.name} />
                        ))}
                      </ComboBox>
                    </FilterGroupItem>
                    <FilterGroupItem label="Status">
                      <MultiComboBox>
                        <MultiComboBoxItem text="Draft" />
                        <MultiComboBoxItem text="Pending" />
                        <MultiComboBoxItem text="Approved" />
                        <MultiComboBoxItem text="Rejected" />
                      </MultiComboBox>
                    </FilterGroupItem>
                  </FilterBar>
                </FlexBox>
              </DynamicPageHeader>
            }
            style={{ flex: 1 }}
          >
            {/* Timesheet Table */}
            <Card
              header={
                <CardHeader
                  titleText="Time Entries"
                  subtitleText={`Total: ${timeEntries.reduce((sum, entry) => sum + entry.hours, 0)} hours`}
                  avatar={<Icon name="time-entry-request" />}
                  action={
                    <Button design={ButtonDesign.Transparent} icon="download" />
                  }
                />
              }
              style={{ margin: '16px' }}
            >
              <Table
                columns={
                  <>
                    <TableColumn style={{ width: '120px' }}>
                      <Text>Date</Text>
                    </TableColumn>
                    <TableColumn style={{ width: '250px' }}>
                      <Text>Project</Text>
                    </TableColumn>
                    <TableColumn style={{ width: '250px' }}>
                      <Text>Task</Text>
                    </TableColumn>
                    <TableColumn style={{ width: '100px' }}>
                      <Text>Hours</Text>
                    </TableColumn>
                    <TableColumn style={{ width: '120px' }}>
                      <Text>Status</Text>
                    </TableColumn>
                    <TableColumn>
                      <Text>Actions</Text>
                    </TableColumn>
                  </>
                }
              >
                {timeEntries.map(entry => (
                  <TableRow key={entry.id}>
                    <TableCell>
                      <Text>{entry.date}</Text>
                    </TableCell>
                    <TableCell>
                      <Text>{entry.project}</Text>
                    </TableCell>
                    <TableCell>
                      <Text>{entry.task}</Text>
                    </TableCell>
                    <TableCell>
                      <Text>{entry.hours}</Text>
                    </TableCell>
                    <TableCell>
                      <Badge
                        color={
                          entry.status === 'Approved' ? 'success' :
                          entry.status === 'Pending' ? 'warning' :
                          entry.status === 'Rejected' ? 'error' : 'information'
                        }
                      >
                        {entry.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <FlexBox>
                        <Button 
                          icon="edit" 
                          design={ButtonDesign.Transparent} 
                          disabled={entry.status === 'Approved'}
                          tooltip="Edit"
                        />
                        <Button 
                          icon="delete" 
                          design={ButtonDesign.Transparent} 
                          disabled={entry.status === 'Approved'}
                          tooltip="Delete"
                          onClick={() => {
                            setEntryToDelete(entry.id);
                            setShowDeleteDialog(true);
                          }}
                        />
                      </FlexBox>
                    </TableCell>
                  </TableRow>
                ))}
              </Table>
            </Card>

            {/* Weekly Summary */}
            <FlexBox style={{ margin: '16px' }}>
              <Card
                header={
                  <CardHeader
                    titleText="Weekly Summary"
                    subtitleText="Hours by Project"
                    avatar={<Icon name="pie-chart" />}
                  />
                }
                style={{ flex: 1, marginRight: '16px' }}
              >
                <FlexBox direction={FlexBoxDirection.Column} style={{ padding: '16px' }}>
                  {mockProjects.slice(0, 3).map(project => {
                    const projectHours = timeEntries
                      .filter(entry => entry.project === project.name)
                      .reduce((sum, entry) => sum + entry.hours, 0);
                    
                    const totalHours = timeEntries.reduce((sum, entry) => sum + entry.hours, 0);
                    const percentage = totalHours > 0 ? (projectHours / totalHours) * 100 : 0;
                    
                    return (
                      <div key={project.id} style={{ marginBottom: '16px' }}>
                        <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween} style={{ marginBottom: '8px' }}>
                          <Text>{project.name}</Text>
                          <Text>{projectHours} hours</Text>
                        </FlexBox>
                        <ProgressIndicator value={percentage} />
                      </div>
                    );
                  })}
                </FlexBox>
              </Card>

              <Card
                header={
                  <CardHeader
                    titleText="Status Overview"
                    subtitleText="Current Week"
                    avatar={<Icon name="status-completed" />}
                  />
                }
                style={{ flex: 1 }}
              >
                <List>
                  <StandardListItem
                    description="Entries ready for submission"
                    icon="status-in-process"
                    info={timeEntries.filter(entry => entry.status === 'Draft').length.toString()}
                    infoState="Information"
                  >
                    Draft
                  </StandardListItem>
                  <StandardListItem
                    description="Entries awaiting approval"
                    icon="pending"
                    info={timeEntries.filter(entry => entry.status === 'Pending').length.toString()}
                    infoState="Warning"
                  >
                    Pending
                  </StandardListItem>
                  <StandardListItem
                    description="Entries approved by manager"
                    icon="complete"
                    info={timeEntries.filter(entry => entry.status === 'Approved').length.toString()}
                    infoState="Success"
                  >
                    Approved
                  </StandardListItem>
                </List>
              </Card>
            </FlexBox>
          </DynamicPage>
        )}

        {selectedTab === "team" && (
          <ObjectPage
            headerTitle={
              <DynamicPageTitle
                header={<Title>Team Overview</Title>}
                subHeader={<Text>Project Team Members</Text>}
              />
            }
            headerContent={
              <FlexBox>
                <AvatarGroup type={AvatarGroupType.Group}>
                  {mockTeamMembers.map(member => (
                    <Avatar key={member.id} shape={AvatarShape.Circle}>
                      {member.avatar}
                    </Avatar>
                  ))}
                </AvatarGroup>
              </FlexBox>
            }
          >
            <ObjectPageSection titleText="Team Members" id="teamMembers">
              <FlexBox wrap="Wrap" style={{ gap: '16px', padding: '16px' }}>
                {mockTeamMembers.map(member => (
                  <Card key={member.id} style={{ width: '300px' }}>
                    <FlexBox alignItems={FlexBoxAlignItems.Center} style={{ padding: '16px' }}>
                      <Avatar shape={AvatarShape.Circle} size={AvatarSize.L} style={{ marginRight: '16px' }}>
                        {member.avatar}
                      </Avatar>
                      <FlexBox direction={FlexBoxDirection.Column}>
                        <Title level="H5">{member.name}</Title>
                        <Text>{member.role}</Text>
                      </FlexBox>
                    </FlexBox>
                    <List>
                      <StandardListItem icon="email">Contact</StandardListItem>
                      <StandardListItem icon="calendar">Schedule</StandardListItem>
                      <StandardListItem icon="activity-items">Activities</StandardListItem>
                    </List>
                  </Card>
                ))}
              </FlexBox>
            </ObjectPageSection>
          </ObjectPage>
        )}

        {selectedTab === "reports" && (
          <FlexBox direction={FlexBoxDirection.Column} style={{ padding: '16px', flex: 1 }}>
            <Panel
              headerText="Timesheet Reports"
              accessoryButton={<PanelAccessoryButton icon="settings" />}
              collapsed={false}
            >
              <Form
                titleText="Generate Report"
                style={{ width: '100%' }}
              >
                <FormGroup titleText="Report Parameters">
                  <FormItem label="Report Type">
                    <Select>
                      <SelectOption>Individual Timesheet</SelectOption>
                      <SelectOption>Project Summary</SelectOption>
                      <SelectOption>Team Overview</SelectOption>
                      <SelectOption>Billing Report</SelectOption>
                    </Select>
                  </FormItem>
                  <FormItem label="Date Range">
                    <FlexBox alignItems={FlexBoxAlignItems.Center}>
                      <DatePicker style={{ marginRight: '8px' }} />
                      <Text style={{ margin: '0 8px' }}>to</Text>
                      <DatePicker style={{ marginLeft: '8px' }} />
                    </FlexBox>
                  </FormItem>
                  <FormItem label="Format">
                    <FlexBox>
                      <ToggleButton icon="excel-attachment" pressed>Excel</ToggleButton>
                      <ToggleButton icon="pdf-attachment">PDF</ToggleButton>
                      <ToggleButton icon="display">Online</ToggleButton>
                    </FlexBox>
                  </FormItem>
                </FormGroup>
                <FormGroup>
                  <Button design={ButtonDesign.Emphasized} icon="download">Generate Report</Button>
                </FormGroup>
              </Form>
            </Panel>

            <Panel
              headerText="Saved Reports"
              style={{ marginTop: '16px' }}
            >
              <Table>
                <TableColumn>
                  <Text>Report Name</Text>
                </TableColumn>
                <TableColumn>
                  <Text>Type</Text>
                </TableColumn>
                <TableColumn>
                  <Text>Date Range</Text>
                </TableColumn>
                <TableColumn>
                  <Text>Created On</Text>
                </TableColumn>
                <TableColumn>
                  <Text>Actions</Text>
                </TableColumn>

                <TableRow>
                  <TableCell>
                    <Text>Weekly Timesheet</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Individual Timesheet</Text>
                  </TableCell>
                  <TableCell>
                    <Text>May 20 - May 26, 2025</Text>
                  </TableCell>
                  <TableCell>
                    <Text>May 27, 2025</Text>
                  </TableCell>
                  <TableCell>
                    <FlexBox>
                      <Button icon="download" design={ButtonDesign.Transparent} tooltip="Download" />
                      <Button icon="share" design={ButtonDesign.Transparent} tooltip="Share" />
                      <Button icon="delete" design={ButtonDesign.Transparent} tooltip="Delete" />
                    </FlexBox>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Text>Project Summary</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Project Summary</Text>
                  </TableCell>
                  <TableCell>
                    <Text>May 1 - May 31, 2025</Text>
                  </TableCell>
                  <TableCell>
                    <Text>May 26, 2025</Text>
                  </TableCell>
                  <TableCell>
                    <FlexBox>
                      <Button icon="download" design={ButtonDesign.Transparent} tooltip="Download" />
                      <Button icon="share" design={ButtonDesign.Transparent} tooltip="Share" />
                      <Button icon="delete" design={ButtonDesign.Transparent} tooltip="Delete" />
                    </FlexBox>
                  </TableCell>
                </TableRow>
              </Table>
            </Panel>
          </FlexBox>
        )}

        {/* Add Time Entry Dialog */}
        <Dialog
          open={showAddDialog}
          onAfterClose={() => setShowAddDialog(false)}
          headerText="Add Time Entry"
          footer={
            <Bar design={BarDesign.Footer}>
              <Button design={ButtonDesign.Emphasized} onClick={handleAddTimeEntry}>
                Save
              </Button>
              <Button design={ButtonDesign.Transparent} onClick={() => setShowAddDialog(false)}>
                Cancel
              </Button>
            </Bar>
          }
        >
          <Form style={{ padding: '16px' }}>
            <FormItem label="Date">
              <DatePicker
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.detail.value || "")}
              />
            </FormItem>
            <FormItem label="Project" required>
              <ComboBox
                value={selectedProject}
                onChange={(e) => setSelectedProject(e.detail.value)}
              >
                {mockProjects.map(project => (
                  <ComboBoxItem key={project.id} text={project.name} />
                ))}
              </ComboBox>
            </FormItem>
            <FormItem label="Task" required>
              <ComboBox
                value={selectedTask}
                onChange={(e) => setSelectedTask(e.detail.value)}
                disabled={!selectedProject}
              >
                {filteredTasks.map(task => (
                  <ComboBoxItem key={task.id} text={task.name} />
                ))}
              </ComboBox>
            </FormItem>
            <FormItem label="Hours" required>
              <Input
                type="Number"
                value={hours}
                onChange={(e) => setHours(e.detail.value)}
              />
            </FormItem>
            <FormItem label="Comments">
              <TextArea rows={3} />
            </FormItem>
            <FormItem label="Billable">
              <Switch />
            </FormItem>
          </Form>
        </Dialog>

        {/* Delete Confirmation Dialog */}
        <Dialog
          open={showDeleteDialog}
          onAfterClose={() => setShowDeleteDialog(false)}
          headerText="Confirm Deletion"
          footer={
            <Bar design={BarDesign.Footer}>
              <Button design={ButtonDesign.Negative} onClick={handleDeleteTimeEntry}>
                Delete
              </Button>
              <Button design={ButtonDesign.Transparent} onClick={() => setShowDeleteDialog(false)}>
                Cancel
              </Button>
            </Bar>
          }
        >
          <Text>Are you sure you want to delete this time entry? This action cannot be undone.</Text>
        </Dialog>

        {/* Toast Message */}
        <Toast
          open={showToast}
          onClose={() => setShowToast(false)}
          duration={3000}
        >
          {toastMessage}
        </Toast>

        {/* Message Box */}
        <MessageBox
          open={showMessageBox}
          onClose={(e) => handleMessageBoxAction(e.detail.action)}
          title={messageBoxConfig.title}
          type={messageBoxConfig.type}
          actions={messageBoxConfig.type === MessageBoxTypes.CONFIRM ? [MessageBoxActions.OK, MessageBoxActions.CANCEL] : [MessageBoxActions.OK]}
        >
          {messageBoxConfig.message}
        </MessageBox>
      </div>
  );
}
