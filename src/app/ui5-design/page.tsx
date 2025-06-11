"use client";

import React from 'react';
import Link from 'next/link';
import {
  ShellBar,
  ShellBarItem,
  Avatar,
  Title,
  Card,
  Icon,
  ThemeProvider,
  Button
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

const UI5DesignSystem: React.FC = () => {
  const categories = [
    {
      title: "Form Controls",
      description: "Input fields, checkboxes, radio buttons, and other form elements",
      icon: "form",
      path: "/design-patterns/form-controls",
      count: "15+ Components"
    },
    {
      title: "Data Display",
      description: "Tables, lists, and data visualization components",
      icon: "table-view",
      path: "/design-patterns/data-display",
      count: "10+ Components"
    },
    {
      title: "Navigation",
      description: "Menus, tabs, and navigation elements",
      icon: "navigation-right-arrow",
      path: "/design-patterns/navigation",
      count: "8+ Components"
    },
    {
      title: "Layout",
      description: "Grid systems, containers, and layout components",
      icon: "grid",
      path: "/design-patterns/layout",
      count: "6+ Components"
    },
    {
      title: "Charts",
      description: "Various chart types for data visualization",
      icon: "pie-chart",
      path: "/design-patterns/charts",
      count: "12+ Chart Types"
    },
    {
      title: "Advanced Components",
      description: "Complex components like calendars, file uploaders, etc.",
      icon: "puzzle",
      path: "/design-patterns/advanced",
      count: "20+ Components"
    },
    {
      title: "Utility Components",
      description: "Notifications, filters, and other utility components",
      icon: "tools-opportunity",
      path: "/design-patterns/utility",
      count: "15+ Utilities"
    }
  ];

  const demoApps = [
    {
      title: "ERP System Demo",
      description: "Complete enterprise resource planning system showcase with Finance, HR, Sales, and Inventory modules",
      icon: "business-suite",
      path: "/design-patterns/erp",
      badge: "Full Demo"
    },
    {
      title: "Timesheet Application",
      description: "Time entry and management application with UI5 components",
      icon: "time-entry-request",
      path: "/timesheet-ui5",
      badge: "Prototype"
    },
    {
      title: "User Registration",
      description: "Complete user signup flow with form validation and UI5 components",
      icon: "user-edit",
      path: "/signup",
      badge: "Live Demo"
    }
  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100">
        <ShellBar
          primaryTitle="UI5 SAP Design System"
          secondaryTitle="Component Library & Pattern Collection"
          showNotifications
          showProductSwitch
          profile={<Avatar icon="employee" />}
        >
          <ShellBarItem icon="home" text="Home" />
          <ShellBarItem icon="documentation" text="Documentation" />
          <ShellBarItem icon="help" text="Help" />
        </ShellBar>

        <div style={{ padding: '2rem' }}>
          {/* Hero Section */}
          <div style={{
            background: 'linear-gradient(135deg, #FF9800 0%, #F57C00 100%)',
            borderRadius: 16,
            padding: '3rem 2rem',
            marginBottom: '2rem',
            color: 'white',
            textAlign: 'center'
          }}>
            <h1 style={{
              fontSize: '3rem',
              fontWeight: '700',
              margin: '0 0 1rem 0',
              fontFamily: '72'
            }}>
              🎨 UI5 SAP Design System
            </h1>
            <p style={{
              fontSize: '1.25rem',
              margin: '0 0 2rem 0',
              opacity: 0.9,
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
              fontFamily: '72'
            }}>
              Comprehensive component library built on SAP UI5 Web Components. 
              Featuring enterprise-grade patterns, accessibility compliance, and extensive documentation.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/design-patterns" style={{ textDecoration: 'none' }}>
                <Button design="Emphasized" style={{ background: 'white', color: '#FF9800' }}>
                  Explore All Components
                </Button>
              </Link>
              <Link href="/design-patterns/erp" style={{ textDecoration: 'none' }}>
                <Button design="Transparent" style={{ color: 'white', borderColor: 'white' }}>
                  View ERP Demo
                </Button>
              </Link>
            </div>
          </div>

          {/* Component Categories */}
          <div style={{ marginBottom: '3rem' }}>
            <Title level="H2" style={{ marginBottom: '1.5rem' }}>Component Categories</Title>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {categories.map((category, index) => (
                <Link key={index} href={category.path} style={{ textDecoration: 'none' }}>
                  <Card style={{
                    padding: '1.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    border: '2px solid transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                    e.currentTarget.style.borderColor = '#FF9800';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0px)';
                    e.currentTarget.style.boxShadow = '';
                    e.currentTarget.style.borderColor = 'transparent';
                  }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                      <Icon name={category.icon} style={{ fontSize: '2rem', color: '#FF9800' }} />
                      <div>
                        <h3 style={{
                          margin: 0,
                          fontSize: '1.25rem',
                          fontWeight: '600',
                          fontFamily: '72'
                        }}>
                          {category.title}
                        </h3>
                        <span style={{
                          fontSize: '0.875rem',
                          color: '#FF9800',
                          fontWeight: '500'
                        }}>
                          {category.count}
                        </span>
                      </div>
                    </div>
                    <p style={{
                      margin: 0,
                      fontSize: '0.875rem',
                      color: '#666',
                      lineHeight: 1.5
                    }}>
                      {category.description}
                    </p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Demo Applications */}
          <div style={{ marginBottom: '3rem' }}>
            <Title level="H2" style={{ marginBottom: '1.5rem' }}>Demo Applications</Title>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '1.5rem'
            }}>
              {demoApps.map((app, index) => (
                <Link key={index} href={app.path} style={{ textDecoration: 'none' }}>
                  <Card style={{
                    padding: '2rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    position: 'relative',
                    border: '2px solid transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                    e.currentTarget.style.borderColor = '#FF9800';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0px)';
                    e.currentTarget.style.boxShadow = '';
                    e.currentTarget.style.borderColor = 'transparent';
                  }}
                  >
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: '#FF9800',
                      color: 'white',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '12px',
                      fontSize: '0.75rem',
                      fontWeight: '600'
                    }}>
                      {app.badge}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                      <Icon name={app.icon} style={{ fontSize: '2.5rem', color: '#FF9800' }} />
                      <h3 style={{
                        margin: 0,
                        fontSize: '1.5rem',
                        fontWeight: '600',
                        fontFamily: '72'
                      }}>
                        {app.title}
                      </h3>
                    </div>
                    <p style={{
                      margin: 0,
                      fontSize: '1rem',
                      color: '#666',
                      lineHeight: 1.6
                    }}>
                      {app.description}
                    </p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Features & Highlights */}
          <div>
            <Title level="H2" style={{ marginBottom: '1.5rem' }}>System Highlights</Title>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem'
            }}>
              <Card style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <Icon name="validate" style={{ color: '#0F7B0F', fontSize: '1.5rem' }} />
                  <h4 style={{ margin: 0, fontFamily: '72', fontSize: '1.125rem' }}>Production Ready</h4>
                </div>
                <p style={{ margin: 0, fontSize: '0.875rem', color: '#666' }}>
                  Battle-tested components used in enterprise SAP applications worldwide
                </p>
              </Card>

              <Card style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <Icon name="accessibility" style={{ color: '#0070F2', fontSize: '1.5rem' }} />
                  <h4 style={{ margin: 0, fontFamily: '72', fontSize: '1.125rem' }}>Accessible</h4>
                </div>
                <p style={{ margin: 0, fontSize: '0.875rem', color: '#666' }}>
                  WCAG compliant with full keyboard navigation and screen reader support
                </p>
              </Card>

              <Card style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <Icon name="responsive" style={{ color: '#FF9800', fontSize: '1.5rem' }} />
                  <h4 style={{ margin: 0, fontFamily: '72', fontSize: '1.125rem' }}>Responsive</h4>
                </div>
                <p style={{ margin: 0, fontSize: '0.875rem', color: '#666' }}>
                  Mobile-first design that works seamlessly across all device sizes
                </p>
              </Card>

              <Card style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <Icon name="puzzle" style={{ color: '#5D36FF', fontSize: '1.5rem' }} />
                  <h4 style={{ margin: 0, fontFamily: '72', fontSize: '1.125rem' }}>Extensible</h4>
                </div>
                <p style={{ margin: 0, fontSize: '0.875rem', color: '#666' }}>
                  Modular architecture allows easy customization and extension
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default UI5DesignSystem; 