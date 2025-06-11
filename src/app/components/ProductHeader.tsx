"use client";

import { useState } from "react";
import { Icon } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import "@ui5/webcomponents-icons/dist/menu2.js";
import "@ui5/webcomponents-icons/dist/slim-arrow-down.js";
import "@ui5/webcomponents-icons/dist/search.js";
import "@ui5/webcomponents-icons/dist/bell.js";
import "@ui5/webcomponents-icons/dist/feedback.js";
import "@ui5/webcomponents-icons/dist/sys-help.js";
import "@ui5/webcomponents-icons/dist/grid.js";
import "@ui5/webcomponents-icons/dist/walk-me.js";
import AppDropdown from "./AppDropdown";
import HamburgerMenu from "./HamburgerMenu";

interface ProductHeaderProps {
  productName: string;
  onJouleClick?: () => void;
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

export default function ProductHeader({ productName, onJouleClick }: ProductHeaderProps) {
  const [isAppsPopoverOpen, setIsAppsPopoverOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = getMenuItems(productName);

  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
      <div style={{
        width: '100%', 
        maxWidth: 1920, 
        minWidth: 1440, 
        paddingLeft: 14, 
        paddingRight: 16, 
        background: 'var(--Shell-sapShellColor, white)', 
        borderBottom: '1px var(--Indication-sapIndicationColor_10_Active_BorderColor, #EAECEE) solid', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        display: 'inline-flex'
      }}>
        {/* Left Section */}
        <div style={{height: 52, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
          {/* Hamburger Menu */}
          <div data-interaction-state="Regular" style={{justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
            <div 
              id="hamburger-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-attention-badge="false" 
              data-counter-badge="False" 
              data-form-factor="Cozy" 
              data-interaction-state="Regular" 
              data-toggled="False" 
              data-type="Tertiary" 
              style={{
                minHeight: 36, 
                padding: 10, 
                background: 'var(--Button-Lite-sapButton_Lite_Background, rgba(0, 0, 0, 0))', 
                borderRadius: 8, 
                outline: '1px var(--Button-Lite-sapButton_Lite_BorderColor, rgba(0, 0, 0, 0)) solid', 
                outlineOffset: '-1px', 
                justifyContent: 'center', 
                alignItems: 'center', 
                display: 'flex',
                cursor: 'pointer'
              }}
            >
              <Icon name="menu2" style={{ color: 'var(--Shell-sapShell_InteractiveTextColor, #1D2D3E)' }} />
            </div>
          </div>
          
          {/* Logo and Product Name */}
          <div data-state="Off" style={{paddingTop: 2, paddingBottom: 2, paddingLeft: 4, paddingRight: 8, background: 'var(--Button-Lite-sapButton_Lite_Background, rgba(0, 0, 0, 0))', borderRadius: 8, outline: '1px var(--Button-Lite-sapButton_Lite_BorderColor, rgba(0, 0, 0, 0)) solid', outlineOffset: '-1px', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <div style={{width: 68, height: 32, paddingLeft: 4, paddingRight: 4, paddingTop: 1, paddingBottom: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
              <img style={{width: 60, height: 30.06}} src="/SAP_2011_logo.png" alt="SAP Logo" />
            </div>
            <div style={{color: 'var(--Shell-sapShell_SubBrand_TextColor, #003E87)', fontSize: 16, fontFamily: '72', fontWeight: '700', wordWrap: 'break-word'}}>{productName}</div>
          </div>
          <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}} />
        </div>

        {/* Right Section */}
        <div style={{justifyContent: 'flex-end', alignItems: 'center', gap: 8, display: 'flex'}}>
          {/* Search */}
          <div data-select="true" data-state="Normal" style={{width: 400, height: 36, maxWidth: 576, minWidth: 288, paddingTop: 4, paddingBottom: 4, paddingLeft: 14, paddingRight: 4, position: 'relative', background: 'var(--Shell-sapShell_InteractiveBackground, #EFF1F2)', boxShadow: '0px 0px 0px 1px rgba(85, 107, 129, 0.25) inset', overflow: 'hidden', borderRadius: 18, justifyContent: 'flex-end', alignItems: 'center', gap: 4, display: 'flex'}}>
            <div style={{width: 96, paddingRight: 5, justifyContent: 'flex-end', alignItems: 'center', display: 'flex'}}>
              <div data-form-factor="Compact" data-icon-left="false" data-interaction-state="Regular" data-type="Tertiary" style={{width: 100, height: 28, minHeight: 26, paddingLeft: 8, paddingRight: 8, paddingTop: 5, paddingBottom: 5, background: 'var(--Button-Lite-sapButton_Lite_Background, rgba(0, 0, 0, 0))', borderRadius: 8, outline: '1px var(--Button-Lite-sapButton_Lite_BorderColor, rgba(0, 0, 0, 0)) solid', outlineOffset: '-1px', justifyContent: 'center', alignItems: 'center', gap: 6, display: 'flex'}}>
                <div style={{flex: '1 1 0', color: 'var(--Input-Standard-sapField_PlaceholderTextColor, #556B82)', fontSize: 14, fontFamily: '72', fontWeight: '400', wordWrap: 'break-word'}}>Select</div>
                <div style={{width: 16, height: 16, position: 'relative'}}>
                  <Icon name="slim-arrow-down" style={{ color: 'var(--Shell-sapShell_InteractiveTextColor, #1D2D3E)' }} />
                </div>
              </div>
              <div style={{width: 1, height: 24, background: 'var(--Shell-sapShell_InteractiveBorderColor, #556B81)', borderRadius: 12}} />
            </div>
            <div style={{flex: '1 1 0', height: 16, justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'var(--Input-Standard-sapField_PlaceholderTextColor, #556B82)', fontSize: 14, fontFamily: '72', fontStyle: 'italic', fontWeight: '400', wordWrap: 'break-word'}}>Search</div>
            <div style={{width: 28, minHeight: 26, paddingLeft: 8, paddingRight: 8, paddingTop: 5, paddingBottom: 5, background: 'var(--Button-Lite-sapButton_Lite_Background, rgba(0, 0, 0, 0))', borderRadius: 17, outline: '1px var(--Button-Lite-sapButton_Lite_BorderColor, rgba(0, 0, 0, 0)) solid', outlineOffset: '-1px', justifyContent: 'center', alignItems: 'center', gap: 6, display: 'flex'}}>
              <div style={{width: 16, height: 16, position: 'relative'}}>
                <Icon name="search" style={{ color: 'var(--Shell-sapShell_InteractiveTextColor, #1D2D3E)' }} />
              </div>
            </div>
            <div style={{width: 400, height: 0, left: 0, top: 36, position: 'absolute', outline: '1px var(--Input-Standard-sapField_BorderColor, #556B81) solid', outlineOffset: '-0.50px'}}></div>
          </div>

          {/* Icon Buttons */}
          <div data-state="Off" style={{minHeight: 36, padding: 10, background: 'var(--Button-Lite-sapButton_Lite_Background, rgba(0, 0, 0, 0))', borderRadius: 8, outline: '1px var(--Button-Lite-sapButton_Lite_BorderColor, rgba(0, 0, 0, 0)) solid', outlineOffset: '-1px', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <div style={{width: 16, height: 16, position: 'relative'}}>
              <Icon name="bell" style={{ color: 'var(--Shell-sapShell_InteractiveTextColor, #1D2D3E)' }} />
            </div>
          </div>

          <div data-state="Off" style={{justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
            <div data-state="Off" style={{minHeight: 36, padding: 10, background: 'var(--Button-Lite-sapButton_Lite_Background, rgba(0, 0, 0, 0))', borderRadius: 8, outline: '1px var(--Button-Lite-sapButton_Lite_BorderColor, rgba(0, 0, 0, 0)) solid', outlineOffset: '-1px', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
              <div style={{width: 16, height: 16, position: 'relative'}}>
                <Icon name="feedback" style={{ color: 'var(--Shell-sapShell_InteractiveTextColor, #1D2D3E)' }} />
              </div>
            </div>
          </div>

          {/* Joule Icon */}
          <div 
            data-state="Off" 
            style={{
              minHeight: 36, 
              padding: 10, 
              background: 'var(--Button-Lite-sapButton_Lite_Background, rgba(0, 0, 0, 0))', 
              borderRadius: 8, 
              outline: '1px var(--Button-Lite-sapButton_Lite_BorderColor, rgba(0, 0, 0, 0)) solid', 
              outlineOffset: '-1px', 
              justifyContent: 'center', 
              alignItems: 'center', 
              display: 'flex', 
              cursor: 'pointer'
            }}
            onClick={onJouleClick}
          >
            <img 
              src="/da.svg" 
              alt="Joule" 
              style={{ width: '16px', height: '16px' }} 
            />
          </div>

          {/* Walkme Icon */}
          <div data-state="Off" style={{minHeight: 36, padding: 10, background: 'var(--Button-Lite-sapButton_Lite_Background, rgba(0, 0, 0, 0))', borderRadius: 8, outline: '1px var(--Button-Lite-sapButton_Lite_BorderColor, rgba(0, 0, 0, 0)) solid', outlineOffset: '-1px', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <div style={{width: 16, height: 16, position: 'relative'}}>
              <Icon name="walk-me" style={{ color: 'var(--Shell-sapShell_InteractiveTextColor, #1D2D3E)' }} />
            </div>
          </div>

          {/* Sys-help Icon */}
          <div data-state="Off" style={{minHeight: 36, padding: 10, background: 'var(--Button-Lite-sapButton_Lite_Background, rgba(0, 0, 0, 0))', borderRadius: 8, outline: '1px var(--Button-Lite-sapButton_Lite_BorderColor, rgba(0, 0, 0, 0)) solid', outlineOffset: '-1px', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <div style={{width: 16, height: 16, position: 'relative'}}>
              <Icon name="sys-help" style={{ color: 'var(--Shell-sapShell_InteractiveTextColor, #1D2D3E)' }} />
            </div>
          </div>

          {/* User Avatar */}
          <div data-state="Off" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', display: 'inline-flex'}}>
            <img data-badge="false" data-border="false" data-color="Image" data-content="Person" data-interaction-state="Regular" data-size="XS" data-type="Image" style={{maxWidth: 32, maxHeight: 32, borderRadius: 100, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}} src="https://placehold.co/32x32" />
          </div>

          {/* App Grid Button */}
          <div data-state="Off" style={{justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
            <div data-interaction-state="Regular" style={{justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
              <div 
                id="grid-button"
                onClick={() => setIsAppsPopoverOpen(!isAppsPopoverOpen)}
                data-attention-badge="false" 
                data-counter-badge="False" 
                data-form-factor="Cozy" 
                data-interaction-state="Regular" 
                data-toggled="False" 
                data-type="Tertiary" 
                style={{
                  minHeight: 36, 
                  padding: 10, 
                  background: 'var(--Button-Lite-sapButton_Lite_Background, rgba(0, 0, 0, 0))', 
                  borderRadius: 8, 
                  outline: '1px var(--Button-Lite-sapButton_Lite_BorderColor, rgba(0, 0, 0, 0)) solid', 
                  outlineOffset: '-1px', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  display: 'flex',
                  cursor: 'pointer'
                }}
              >
                <div style={{width: 16, height: 16, position: 'relative'}}>
                  <Icon name="grid" style={{ color: 'var(--Shell-sapShell_InteractiveTextColor, #1D2D3E)' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
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