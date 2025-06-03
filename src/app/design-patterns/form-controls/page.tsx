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
  TextArea,
  Select,
  ComboBox,
  MultiComboBox,
  DatePicker,
  DateTimePicker,
  TimePicker,
  CheckBox,
  RadioButton,
  Switch,
  Slider,
  StepInput,
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
  FlexBoxAlignItems
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

const formControls = [
  {
    title: "Input",
    description: "Basic text input field",
    component: (
      <div>
        <Label>Text Input</Label>
        <Input placeholder="Enter text here" />
      </div>
    ),
    code: `<Label>Text Input</Label>
<Input placeholder="Enter text here" />`
  },
  {
    title: "TextArea",
    description: "Multi-line text input",
    component: (
      <div>
        <Label>Text Area</Label>
        <TextArea placeholder="Enter multiple lines of text" rows={3} />
      </div>
    ),
    code: `<Label>Text Area</Label>
<TextArea placeholder="Enter multiple lines of text" rows={3} />`
  },
  {
    title: "Select",
    description: "Dropdown selection",
    component: (
      <div>
        <Label>Select</Label>
        <Select>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </Select>
      </div>
    ),
    code: `<Label>Select</Label>
<Select>
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</Select>`
  },
  {
    title: "ComboBox",
    description: "Editable dropdown with filtering",
    component: (
      <div>
        <Label>ComboBox</Label>
        <ComboBox>
          <option>Item 1</option>
          <option>Item 2</option>
          <option>Item 3</option>
        </ComboBox>
      </div>
    ),
    code: `<Label>ComboBox</Label>
<ComboBox>
  <option>Item 1</option>
  <option>Item 2</option>
  <option>Item 3</option>
</ComboBox>`
  },
  {
    title: "DatePicker",
    description: "Date selection component",
    component: (
      <div>
        <Label>Date Picker</Label>
        <DatePicker />
      </div>
    ),
    code: `<Label>Date Picker</Label>
<DatePicker />`
  },
  {
    title: "CheckBox",
    description: "Boolean selection",
    component: (
      <div>
        <Label>Checkbox</Label>
        <CheckBox text="Accept terms and conditions" />
      </div>
    ),
    code: `<Label>Checkbox</Label>
<CheckBox text="Accept terms and conditions" />`
  },
  {
    title: "RadioButton",
    description: "Single selection from options",
    component: (
      <div>
        <Label>Radio Buttons</Label>
        <div className="flex flex-col gap-2">
          <RadioButton text="Option 1" name="group1" />
          <RadioButton text="Option 2" name="group1" />
          <RadioButton text="Option 3" name="group1" />
        </div>
      </div>
    ),
    code: `<Label>Radio Buttons</Label>
<div className="flex flex-col gap-2">
  <RadioButton text="Option 1" name="group1" />
  <RadioButton text="Option 2" name="group1" />
  <RadioButton text="Option 3" name="group1" />
</div>`
  },
  {
    title: "Switch",
    description: "Toggle switch",
    component: (
      <div>
        <Label>Switch</Label>
        <Switch />
      </div>
    ),
    code: `<Label>Switch</Label>
<Switch />`
  },
  {
    title: "Slider",
    description: "Range selection",
    component: (
      <div>
        <Label>Slider</Label>
        <Slider min={0} max={100} value={50} />
      </div>
    ),
    code: `<Label>Slider</Label>
<Slider min={0} max={100} value={50} />`
  },
  {
    title: "StepInput",
    description: "Numeric input with increment/decrement",
    component: (
      <div>
        <Label>Step Input</Label>
        <StepInput min={0} max={100} value={50} />
      </div>
    ),
    code: `<Label>Step Input</Label>
<StepInput min={0} max={100} value={50} />`
  }
];

export default function FormControls() {
  const [showCode, setShowCode] = useState<{ [key: string]: boolean }>({});

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100">
        <ShellBar
          primaryTitle="UI5 Design Pattern Library"
          secondaryTitle="Form Controls"
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
            <Title>Form Controls</Title>
          </Bar>

          <MessageStrip className="mt-4">
            Form controls are the building blocks of user input in applications. They allow users to enter, select, and manipulate data.
          </MessageStrip>

          <div className="mt-8">
            <div
              style={{
                width: "100%",
                maxWidth: "800px",
                margin: "0 auto",
                backgroundColor: "white",
                padding: "2rem",
                borderRadius: "0.5rem",
                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
              }}
            >
              <Title className="mb-4">Form Controls Examples</Title>
              <Form>
                {formControls.map((control, index) => (
                  <Card
                    key={index}
                    header={
                      <div className="flex items-center justify-between p-4">
                        <div className="flex items-center gap-2">
                          <Icon name="form" />
                          <span className="font-semibold">{control.title}</span>
                        </div>
                        <Button
                          icon={showCode[control.title] ? "hide" : "show"}
                          onClick={() => setShowCode(prev => ({
                            ...prev,
                            [control.title]: !prev[control.title]
                          }))}
                        >
                          {showCode[control.title] ? "Hide Code" : "Show Code"}
                        </Button>
                      </div>
                    }
                    className="mb-4"
                  >
                    <div className="p-4">
                      <div className="text-sm text-gray-600 mb-4">
                        {control.description}
                      </div>
                      <div className="mb-4">
                        {control.component}
                      </div>
                      {showCode[control.title] && (
                        <div className="bg-gray-100 p-4 rounded">
                          <pre className="text-sm">
                            <code>{control.code}</code>
                          </pre>
                        </div>
                      )}
                    </div>
                  </Card>
                ))}
              </Form>
            </div>
          </div>

          <div className="mt-8">
            <Card>
              <div className="p-4">
                <Title>Best Practices</Title>
                <div className="mt-4 text-sm text-gray-600">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Always provide clear labels for form controls</li>
                    <li>Use appropriate input types for different data types</li>
                    <li>Implement proper validation and error handling</li>
                    <li>Ensure keyboard navigation works correctly</li>
                    <li>Follow accessibility guidelines (ARIA attributes)</li>
                    <li>Provide helpful placeholder text when appropriate</li>
                    <li>Group related form controls logically</li>
                    <li>Use consistent styling across all form controls</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
} 