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
  Card
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

const categories = [
  {
    title: "Form Controls",
    description: "Input fields, checkboxes, radio buttons, and other form elements",
    icon: "form",
    path: "/design-patterns/form-controls"
  },
  {
    title: "Data Display",
    description: "Tables, lists, and data visualization components",
    icon: "table-view",
    path: "/design-patterns/data-display"
  },
  {
    title: "Navigation",
    description: "Menus, tabs, and navigation elements",
    icon: "navigation-right-arrow",
    path: "/design-patterns/navigation"
  },
  {
    title: "Layout",
    description: "Grid systems, containers, and layout components",
    icon: "grid",
    path: "/design-patterns/layout"
  },
  {
    title: "Charts",
    description: "Various chart types for data visualization",
    icon: "pie-chart",
    path: "/design-patterns/charts"
  },
  {
    title: "Advanced Components",
    description: "Complex components like calendars, file uploaders, etc.",
    icon: "puzzle",
    path: "/design-patterns/advanced"
  },
  {
    title: "Utility Components",
    description: "Notifications, filters, and other utility components",
    icon: "tools-opportunity",
    path: "/design-patterns/utility"
  }
];

export default function DesignPatternLibrary() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100">
        <ShellBar
          primaryTitle="UI5 Design Pattern Library"
          secondaryTitle="Component Showcase"
          showNotifications
          showProductSwitch
          profile={<Avatar icon="employee" />}
        >
          <ShellBarItem icon="home" text="Home" />
          <ShellBarItem icon="documentation" text="Documentation" />
          <ShellBarItem icon="help" text="Help" />
        </ShellBar>

        <div className="p-4">
          <Bar>
            <Title>UI5 Component Categories</Title>
          </Bar>

          <div className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((category, index) => (
                <Card
                  key={index}
                  header={
                    <div className="flex items-center gap-2 p-4">
                      <Icon name={category.icon} />
                      <span className="font-semibold">{category.title}</span>
                    </div>
                  }
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => window.location.href = category.path}
                >
                  <div className="p-4">
                    <div className="text-sm text-gray-600">{category.description}</div>
                    <div className="mt-4 flex justify-end">
                      <Icon name="navigation-right-arrow" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <Bar>
              <Title>Getting Started</Title>
            </Bar>
            <Card className="mt-4">
              <div className="p-4">
                <div className="text-sm text-gray-600">
                  <p className="mb-4">
                    Welcome to the UI5 Design Pattern Library. This library showcases all available UI5 Web Components
                    and provides examples of how to use them in your applications.
                  </p>
                  <p className="mb-4">
                    Each category contains:
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Component examples with code snippets</li>
                    <li>Usage guidelines and best practices</li>
                    <li>Interactive demos</li>
                    <li>Accessibility considerations</li>
                    <li>Responsive design patterns</li>
                  </ul>
                  <p>
                    Click on any category card above to explore the components in detail.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
} 