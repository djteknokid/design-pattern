"use client";

import { useState } from "react";
import {
  ShellBar,
  ShellBarItem,
  Avatar,
  Title,
  Bar,
  ThemeProvider,
  List,
  Icon,
  FlexBox,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  FlexBoxAlignItems,
  Card,
  TabContainer,
  Tab,
  TabSeparator,
  Table,
  Button,
  Menu,
  MenuItem,
  MessageBox,
  MessageBoxType,
  MessageStrip,
  Panel,
  Form,
  FormItem,
  Label,
  Input,
  Select,
  DatePicker,
  TextArea,
  Dialog
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

// Mock data for different modules
const mockData = {
  finance: [
    { id: "F001", type: "Invoice", amount: 15000, currency: "USD", status: "Approved", date: "2024-03-15" },
    { id: "F002", type: "Payment", amount: 8500, currency: "EUR", status: "Pending", date: "2024-03-14" },
    { id: "F003", type: "Invoice", amount: 23000, currency: "USD", status: "Rejected", date: "2024-03-13" },
  ],
  hr: [
    { id: "H001", name: "John Doe", position: "Developer", department: "IT", status: "Active" },
    { id: "H002", name: "Jane Smith", position: "Manager", department: "HR", status: "Active" },
    { id: "H003", name: "Mike Johnson", position: "Analyst", department: "Finance", status: "On Leave" },
  ],
  sales: [
    { id: "S001", customer: "Acme Corp", value: 45000, status: "Closed", date: "2024-03-15" },
    { id: "S002", customer: "TechStart", value: 28000, status: "In Progress", date: "2024-03-14" },
    { id: "S003", customer: "Global Inc", value: 75000, status: "Pending", date: "2024-03-13" },
  ],
  inventory: [
    { id: "I001", item: "Laptop", quantity: 50, location: "Warehouse A", status: "In Stock" },
    { id: "I002", item: "Monitor", quantity: 30, location: "Warehouse B", status: "Low Stock" },
    { id: "I003", item: "Keyboard", quantity: 100, location: "Warehouse A", status: "In Stock" },
  ]
};

const modules = [
  {
    id: "finance",
    title: "Finance",
    icon: "money-bills",
    description: "Financial transactions, invoices, and payments",
    color: "#0070F2"
  },
  {
    id: "hr",
    title: "Human Resources",
    icon: "employee",
    description: "Employee management and HR processes",
    color: "#FFB300"
  },
  {
    id: "sales",
    title: "Sales",
    icon: "cart",
    description: "Sales orders and customer management",
    color: "#36A41D"
  },
  {
    id: "inventory",
    title: "Inventory",
    icon: "inventory-management",
    description: "Stock management and warehouse operations",
    color: "#E9730C"
  }
];

export default function ERP() {
  const [activeModule, setActiveModule] = useState("finance");
  const [showDialog, setShowDialog] = useState(false);
  const [dialogType, setDialogType] = useState("");
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [messageBoxType, setMessageBoxType] = useState<MessageBoxType>(MessageBoxType.Success);
  const [messageBoxText, setMessageBoxText] = useState("");

  const handleModuleClick = (moduleId: string) => {
    setActiveModule(moduleId);
  };

  const handleAction = (action: string) => {
    setDialogType(action);
    setShowDialog(true);
  };

  const handleDialogClose = () => {
    setShowDialog(false);
    setShowMessageBox(true);
    setMessageBoxType(MessageBoxType.Success);
    setMessageBoxText(`${dialogType} action completed successfully!`);
  };

  const renderModuleContent = () => {
    const data = mockData[activeModule as keyof typeof mockData];
    const module = modules.find(m => m.id === activeModule);

    return (
      <div className="space-y-4">
        <Bar>
          <Title>{module?.title}</Title>
          <div className="flex gap-2">
            <Button onClick={() => handleAction("Create")}>Create New</Button>
            <Button onClick={() => handleAction("Export")}>Export</Button>
            <Button onClick={() => handleAction("Report")}>Generate Report</Button>
          </div>
        </Bar>

        <MessageStrip>
          Welcome to the {module?.title} module. Here you can manage all {module?.title.toLowerCase()} related activities.
        </MessageStrip>

        <Card>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {Object.keys(data[0]).map(key => (
                    <th
                      key={key}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((item: any) => (
                  <tr key={item.id}>
                    {Object.values(item).map((value: any, index: number) => (
                      <td
                        key={index}
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    );
  };

  const renderDialog = () => {
    const module = modules.find(m => m.id === activeModule);

    return (
      <Dialog
        header={
          <Bar>
            <Title>{dialogType} {module?.title}</Title>
          </Bar>
        }
        open={showDialog}
        onClose={handleDialogClose}
      >
        <Form
          style={{
            padding: "1rem",
            width: "100%",
            maxWidth: "600px"
          }}
        >
          {dialogType === "Create" && (
            <>
              <FormItem>
                <Label>ID</Label>
                <Input />
              </FormItem>
              {activeModule === "finance" && (
                <>
                  <FormItem>
                    <Label>Type</Label>
                    <Select>
                      <option>Invoice</option>
                      <option>Payment</option>
                      <option>Credit Note</option>
                    </Select>
                  </FormItem>
                  <FormItem>
                    <Label>Amount</Label>
                    <Input type="Number" />
                  </FormItem>
                </>
              )}
              {activeModule === "hr" && (
                <>
                  <FormItem>
                    <Label>Name</Label>
                    <Input />
                  </FormItem>
                  <FormItem>
                    <Label>Position</Label>
                    <Input />
                  </FormItem>
                </>
              )}
              <FormItem>
                <Label>Date</Label>
                <DatePicker />
              </FormItem>
              <FormItem>
                <Label>Description</Label>
                <TextArea rows={3} />
              </FormItem>
            </>
          )}
          {dialogType === "Export" && (
            <FormItem>
              <Label>Export Format</Label>
              <Select>
                <option>Excel</option>
                <option>PDF</option>
                <option>CSV</option>
              </Select>
            </FormItem>
          )}
          {dialogType === "Report" && (
            <>
              <FormItem>
                <Label>Report Type</Label>
                <Select>
                  <option>Summary</option>
                  <option>Detailed</option>
                  <option>Analytics</option>
                </Select>
              </FormItem>
              <FormItem>
                <Label>Date Range</Label>
                <DatePicker />
              </FormItem>
            </>
          )}
        </Form>
        <div style={{ padding: "1rem", display: "flex", justifyContent: "flex-end", gap: "0.5rem" }}>
          <Button onClick={() => setShowDialog(false)}>Cancel</Button>
          <Button design="Emphasized" onClick={handleDialogClose}>Submit</Button>
        </div>
      </Dialog>
    );
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100">
        <ShellBar
          primaryTitle="SAP ERP System"
          secondaryTitle="Enterprise Resource Planning"
          showNotifications
          showProductSwitch
          profile={<Avatar icon="employee" />}
        >
          <ShellBarItem icon="home" text="Home" />
          <ShellBarItem icon="documentation" text="Documentation" />
          <ShellBarItem icon="help" text="Help" />
        </ShellBar>

        <div className="flex h-[calc(100vh-64px)]">
          {/* Sidebar Navigation */}
          <div className="w-64 bg-white border-r border-gray-200 p-4">
            <Title className="mb-4">Modules</Title>
            <div className="space-y-1">
              {modules.map((module) => (
                <div
                  key={module.id}
                  onClick={() => handleModuleClick(module.id)}
                  className={`
                    flex items-center gap-2 p-3 cursor-pointer rounded
                    ${activeModule === module.id ? 'bg-gray-100' : 'hover:bg-gray-50'}
                  `}
                  style={{
                    borderLeft: activeModule === module.id ? `4px solid ${module.color}` : "none"
                  }}
                >
                  <Icon name={module.icon} />
                  <div>
                    <div className="font-medium">{module.title}</div>
                    <div className="text-sm text-gray-500">{module.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6 overflow-auto">
            {renderModuleContent()}
          </div>
        </div>

        {renderDialog()}

        {showMessageBox && (
          <MessageBox
            type={messageBoxType}
            onClose={() => setShowMessageBox(false)}
          >
            {messageBoxText}
          </MessageBox>
        )}
      </div>
    </ThemeProvider>
  );
} 