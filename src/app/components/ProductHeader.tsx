"use client";

import {
  Input,
  Button,
  Icon,
  FlexBox,
  FlexBoxJustifyContent,
  FlexBoxAlignItems,
  Avatar,
  Title,
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import { useState } from "react";
import AppDropdown from "./AppDropdown";
import HamburgerMenu from "./HamburgerMenu";

interface ProductHeaderProps {
  productName: string;
}

// Define menu items for each product
const getMenuItems = (productName: string) => {
  switch (productName) {
    case "Sales Cloud":
      return [
        { label: "Sales Cloud Home", icon: "home", link: "/sales-cloud" },
        { label: "Forecast", icon: "trend-up", link: "/sales-cloud/forecast" },
        { label: "Pipeline Manager", icon: "workflow-tasks", link: "/sales-cloud/pipeline-manager" },
        { label: "Pipeline Flow", icon: "process", link: "/sales-cloud/pipeline-flow" },
        { label: "Guided Selling", icon: "target-group", link: "/sales-cloud/guided-selling" },
        { label: "Sales Orders", icon: "order-status", link: "/sales-cloud/sales-orders" },
        { label: "Appointments", icon: "appointment-2", link: "/sales-cloud/appointments" },
        { label: "Agent Desktop", icon: "customer-and-contacts", link: "/sales-cloud/agent-desktop" },
        { label: "Emails", icon: "email", link: "/sales-cloud/emails" },
        { label: "Phone Calls", icon: "phone", link: "/sales-cloud/phone-calls" },
        { label: "Accounts", icon: "person-placeholder", link: "/sales-cloud/accounts" },
        { label: "Route Groups", icon: "map-3", link: "/sales-cloud/route-groups" },
        { label: "Cockpit", icon: "business-card", link: "/sales-cloud/cockpit" },
        { label: "Tasks", icon: "task", link: "/sales-cloud/tasks" },
      ];
    case "SuccessFactors":
      return [
        { label: "SuccessFactors Home", icon: "home", link: "/successfactors" },
        { label: "Admin Center", icon: "settings", link: "/successfactors/admin-center" },
        { label: "Calibration", icon: "calibration", link: "/successfactors/calibration" },
        { label: "Careers", icon: "journey-arrive", link: "/successfactors/careers" },
        { label: "Company Info", icon: "building", link: "/successfactors/company-info" },
        { label: "Compensation", icon: "money-bills", link: "/successfactors/compensation" },
        { label: "My Employee File", icon: "employee", link: "/successfactors/my-employee-file" },
        { label: "Performance", icon: "performance", link: "/successfactors/performance" },
        { label: "Recruiting", icon: "add-employee", link: "/successfactors/recruiting" },
        { label: "Reports", icon: "bar-chart", link: "/successfactors/reports" },
        { label: "Succession", icon: "org-chart", link: "/successfactors/succession" },
        { label: "Learning", icon: "learning-assistant", link: "/successfactors/learning" },
        { label: "Position Budgeting Control", icon: "budget", link: "/successfactors/position-budgeting-control" },
      ];
    case "Concur":
      return [
        { label: "Concur Home", icon: "home", link: "/concur" },
        { label: "Requests", icon: "request", link: "/concur/requests" },
        { label: "Travel", icon: "suitcase", link: "/concur/travel" },
        { label: "Expense", icon: "credit-card", link: "/concur/expense" },
        { label: "Approvals", icon: "approvals", link: "/concur/approvals" },
        { label: "Reporting", icon: "bar-chart", link: "/concur/reporting" },
        { label: "App Center", icon: "grid", link: "/concur/app-center" },
        { label: "Administration", icon: "admin-users", link: "/concur/administration" },
        { label: "External Links", icon: "chain-link", link: "/concur/external-links" },
      ];
    case "Ariba":
      return [
        { label: "Ariba Home", icon: "home", link: "/ariba" },
        { label: "Tasks", icon: "task", link: "/ariba/tasks" },
        { label: "Purchasing", icon: "cart", link: "/ariba/purchasing" },
        { label: "Shopping", icon: "basket", link: "/ariba/shopping" },
        { label: "Supplier Management", icon: "supplier", link: "/ariba/supplier-management" },
        { label: "Analytics", icon: "pie-chart", link: "/ariba/analytics" },
      ];
    case "Cloud ERP":
      return [
        { label: "Cloud ERP Home", icon: "home", link: "/cloud-erp" },
        { 
          label: "Favorite Apps", 
          icon: "favorite", 
          children: [
            { label: "Self Service", icon: "person-placeholder", link: "/cloud-erp/self-service" },
            { label: "Commercial Projects", icon: "project", link: "/cloud-erp/commercial-projects" },
            { label: "Accounts Receivable", icon: "money-bills", link: "/cloud-erp/accounts-receivable" },
            { label: "Employee Master Data", icon: "employee", link: "/cloud-erp/employee-master-data" },
          ]
        },
        { 
          label: "Most Important", 
          icon: "warning", 
          children: [
            { label: "Manage Projects", icon: "project", link: "/cloud-erp/manage-projects" },
            { label: "Monitor Mass Changes", icon: "monitor-payments", link: "/cloud-erp/monitor-mass-changes" },
            { label: "Mass Changes to Purchase Requisitions", icon: "request", link: "/cloud-erp/mass-changes-purchase-requisitions" },
            { label: "Adjust Operational Supplier Evaluation", icon: "supplier", link: "/cloud-erp/adjust-operational-supplier-evaluation" },
            { label: "Manage Service Entry Sheets", icon: "timesheet", link: "/cloud-erp/manage-service-entry-sheets" },
          ]
        },
        { 
          label: "Team Priority Apps", 
          icon: "group", 
          children: []
        },
        { 
          label: "My Spaces", 
          icon: "building", 
          children: [
            { label: "Project Management", icon: "project", link: "/cloud-erp/project-management" },
            { label: "Project Billing", icon: "money-bills", link: "/cloud-erp/project-billing" },
          ]
        },
        { label: "All Spaces", icon: "grid", link: "/cloud-erp/all-spaces" },
      ];
    default:
      return [
        { label: `${productName} Home`, icon: "home", link: `/${productName.toLowerCase().replace(/\s+/g, '-')}` },
        { label: "Dashboard", icon: "business-card", link: "#" },
        { label: "Settings", icon: "action-settings", link: "#" },
      ];
  }
};

export default function ProductHeader({ productName }: ProductHeaderProps) {
  const [isAppsPopoverOpen, setIsAppsPopoverOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = getMenuItems(productName);

  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <div style={{ 
        backgroundColor: 'white', 
        padding: '0.75rem 1rem', 
        borderBottom: '1px solid #e5e7eb',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '52px'
      }}>
        {/* Left Section */}
        <FlexBox alignItems={FlexBoxAlignItems.Center} style={{ gap: '1rem' }}>
          <Button 
            id="hamburger-button"
            design="Transparent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name="menu2" />
          </Button>
          
          <FlexBox alignItems={FlexBoxAlignItems.Center} style={{ gap: '0.5rem' }}>
            <img 
              src="https://www.sap.com/content/dam/application/shared/logos/sap-logo-svg.svg" 
              alt="SAP" 
              style={{ height: '24px', width: 'auto' }}
            />
            <Title level="H5" style={{ margin: 0 }}>{`SAP ${productName}`}</Title>
          </FlexBox>
        </FlexBox>

        {/* Center Section - Search */}
        <FlexBox alignItems={FlexBoxAlignItems.Center} style={{ gap: '1rem', flex: 1, maxWidth: '500px', margin: '0 2rem' }}>
          <select 
            style={{ 
              padding: '0.5rem', 
              border: '1px solid #ccc', 
              borderRadius: '4px',
              fontSize: '0.875rem',
              backgroundColor: 'white'
            }}
          >
            <option>Select</option>
          </select>
          <Input 
            placeholder="Search" 
            style={{ width: '300px' }}
          />
        </FlexBox>

        {/* Right Section */}
        <FlexBox alignItems={FlexBoxAlignItems.Center} style={{ gap: '0.5rem' }}>
          <Button design="Transparent">
            <Icon name="locate-me" />
          </Button>
          <Button design="Transparent">
            <Icon name="bell" />
          </Button>
          <Button design="Transparent">
            <Icon name="message-information" />
          </Button>
          <Button design="Transparent">
            <Icon name="sync" />
          </Button>
          <Button design="Transparent">
            <Icon name="sys-help" />
          </Button>
          <Button design="Transparent">
            <Icon name="overflow" />
          </Button>
          <Avatar 
            size="S" 
            style={{ backgroundColor: '#0070f3', color: 'white', cursor: 'pointer' }}
          >
            JD
          </Avatar>
          <Button 
            id="grid-button"
            design="Transparent"
            onClick={() => setIsAppsPopoverOpen(!isAppsPopoverOpen)}
          >
            <Icon name="grid" />
          </Button>
        </FlexBox>
      </div>

      <AppDropdown 
        isOpen={isAppsPopoverOpen}
        onClose={() => setIsAppsPopoverOpen(false)}
        opener="grid-button"
      />

      <HamburgerMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        productName={productName}
        menuItems={menuItems}
        opener="hamburger-button"
      />
    </div>
  );
} 