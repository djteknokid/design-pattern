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
  CheckBox,
  RadioButton,
  Switch,
  MessageStrip,
  Card,
  Icon,
  Button,
  Form,
  Label,
  TextArea,
  StepInput,
  Slider,
  ComboBox,
  MultiComboBox,
  Panel,
  FlexBox,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  FlexBoxAlignItems,
  FlexBoxWrap,
  MessageBox,
  MessageBoxType,
  MessageBoxAction
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

// US States data
const states = [
  { text: "Alabama", value: "AL" },
  { text: "Alaska", value: "AK" },
  { text: "Arizona", value: "AZ" },
  { text: "Arkansas", value: "AR" },
  { text: "California", value: "CA" },
  { text: "Colorado", value: "CO" },
  { text: "Connecticut", value: "CT" },
  { text: "Delaware", value: "DE" },
  { text: "Florida", value: "FL" },
  { text: "Georgia", value: "GA" },
  // Add more states as needed
];

// Interests for MultiComboBox
const interests = [
  "Technology",
  "Business",
  "Healthcare",
  "Education",
  "Finance",
  "Marketing",
  "Design",
  "Engineering",
  "Science",
  "Arts"
];

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    state: "",
    birthDate: "",
    password: "",
    confirmPassword: "",
    newsletter: false,
    terms: false,
    communication: "email",
    experience: 50,
    interests: [] as string[],
    bio: "",
    notificationLevel: 3
  });

  const [showMessageBox, setShowMessageBox] = useState(false);
  const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    
    if (!formData.firstName) errors.firstName = "First name is required";
    if (!formData.lastName) errors.lastName = "Last name is required";
    if (!formData.email) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.phone) errors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      errors.phone = "Invalid phone number format";
    }
    if (!formData.state) errors.state = "State is required";
    if (!formData.password) errors.password = "Password is required";
    else if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    if (!formData.terms) errors.terms = "You must accept the terms and conditions";

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setShowMessageBox(true);
    }
  };

  const handleMessageBoxClose = () => {
    setShowMessageBox(false);
    // Reset form or redirect
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100">
        <ShellBar
          primaryTitle="UI5 Demo Application"
          secondaryTitle="User Registration"
          showNotifications
          showProductSwitch
          profile={<Avatar icon="employee" />}
        >
          <ShellBarItem icon="home" text="Home" />
          <ShellBarItem icon="documentation" text="Documentation" />
          <ShellBarItem icon="help" text="Help" />
        </ShellBar>

        <div className="p-4">
          <div className="max-w-4xl mx-auto">
            <Card
              header={
                <div className="flex items-center gap-2 p-4">
                  <Icon name="user-edit" />
                  <span className="font-semibold text-xl">Create Your Account</span>
                </div>
              }
            >
              <div className="p-4">
                <MessageStrip className="mb-4">
                  Please fill out all required fields marked with an asterisk (*). We'll use this information to create your account.
                </MessageStrip>

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Personal Information Panel */}
                    <Panel headerText="Personal Information" collapsed={false}>
                      <div className="space-y-4">
                        <div>
                          <Label required>First Name</Label>
                          <Input
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            placeholder="Enter your first name"
                          />
                          {validationErrors.firstName && (
                            <div className="text-red-500 text-sm mt-1">{validationErrors.firstName}</div>
                          )}
                        </div>

                        <div>
                          <Label required>Last Name</Label>
                          <Input
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            placeholder="Enter your last name"
                          />
                          {validationErrors.lastName && (
                            <div className="text-red-500 text-sm mt-1">{validationErrors.lastName}</div>
                          )}
                        </div>

                        <div>
                          <Label required>Email Address</Label>
                          <Input
                            type="Email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="Enter your email"
                          />
                          {validationErrors.email && (
                            <div className="text-red-500 text-sm mt-1">{validationErrors.email}</div>
                          )}
                        </div>

                        <div>
                          <Label required>Phone Number</Label>
                          <Input
                            type="Tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="Enter your phone number"
                          />
                          {validationErrors.phone && (
                            <div className="text-red-500 text-sm mt-1">{validationErrors.phone}</div>
                          )}
                        </div>

                        <div>
                          <Label required>State</Label>
                          <Select
                            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                          >
                            <option value="">Select a state</option>
                            {states.map((state) => (
                              <option key={state.value} value={state.value}>
                                {state.text}
                              </option>
                            ))}
                          </Select>
                          {validationErrors.state && (
                            <div className="text-red-500 text-sm mt-1">{validationErrors.state}</div>
                          )}
                        </div>

                        <div>
                          <Label>Birth Date</Label>
                          <DatePicker
                            onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                          />
                        </div>
                      </div>
                    </Panel>

                    {/* Account Settings Panel */}
                    <Panel headerText="Account Settings" collapsed={false}>
                      <div className="space-y-4">
                        <div>
                          <Label required>Password</Label>
                          <Input
                            type="Password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            placeholder="Enter your password"
                          />
                          {validationErrors.password && (
                            <div className="text-red-500 text-sm mt-1">{validationErrors.password}</div>
                          )}
                        </div>

                        <div>
                          <Label required>Confirm Password</Label>
                          <Input
                            type="Password"
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            placeholder="Confirm your password"
                          />
                          {validationErrors.confirmPassword && (
                            <div className="text-red-500 text-sm mt-1">{validationErrors.confirmPassword}</div>
                          )}
                        </div>

                        <div>
                          <Label>Experience Level</Label>
                          <Slider
                            min={0}
                            max={100}
                            value={formData.experience}
                            onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                          />
                          <div className="text-sm text-gray-600 mt-1">
                            {formData.experience}% Experience
                          </div>
                        </div>

                        <div>
                          <Label>Notification Level</Label>
                          <StepInput
                            min={1}
                            max={5}
                            value={formData.notificationLevel}
                            onChange={(e) => setFormData({ ...formData, notificationLevel: e.target.value })}
                          />
                        </div>

                        <div>
                          <Label>Interests</Label>
                          <MultiComboBox
                            onChange={(e) => setFormData({ ...formData, interests: Array.isArray(e.target.value) ? e.target.value : [] })}
                          >
                            {interests.map((interest) => (
                              <option key={interest} value={interest}>
                                {interest}
                              </option>
                            ))}
                          </MultiComboBox>
                        </div>

                        <div>
                          <Label>Bio</Label>
                          <TextArea
                            value={formData.bio}
                            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                            rows={3}
                            placeholder="Tell us about yourself"
                          />
                        </div>
                      </div>
                    </Panel>

                    {/* Preferences Panel */}
                    <Panel headerText="Preferences" collapsed={false}>
                      <div className="space-y-4">
                        <div>
                          <Label>Preferred Communication</Label>
                          <div className="flex flex-col gap-2">
                            <RadioButton
                              text="Email"
                              name="communication"
                              checked={formData.communication === "email"}
                              onChange={() => setFormData({ ...formData, communication: "email" })}
                            />
                            <RadioButton
                              text="Phone"
                              name="communication"
                              checked={formData.communication === "phone"}
                              onChange={() => setFormData({ ...formData, communication: "phone" })}
                            />
                            <RadioButton
                              text="Both"
                              name="communication"
                              checked={formData.communication === "both"}
                              onChange={() => setFormData({ ...formData, communication: "both" })}
                            />
                          </div>
                        </div>

                        <div>
                          <CheckBox
                            text="Subscribe to newsletter"
                            checked={formData.newsletter}
                            onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                          />
                        </div>

                        <div>
                          <CheckBox
                            text="I accept the terms and conditions"
                            checked={formData.terms}
                            onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
                          />
                          {validationErrors.terms && (
                            <div className="text-red-500 text-sm mt-1">{validationErrors.terms}</div>
                          )}
                        </div>

                        <div>
                          <Label>Dark Mode</Label>
                          <Switch
                            checked={false}
                            onChange={() => {}}
                          />
                        </div>
                      </div>
                    </Panel>
                  </div>

                  <div className="mt-6 flex justify-end gap-4">
                    <Button design="Transparent">Cancel</Button>
                    <Button design="Emphasized" type="Submit">Create Account</Button>
                  </div>
                </form>
              </div>
            </Card>
          </div>
        </div>

        {showMessageBox && (
          <MessageBox
            type={MessageBoxType.Success}
            actions={[MessageBoxAction.OK]}
            onClose={handleMessageBoxClose}
            children="Account created successfully!"
          />
        )}
      </div>
    </ThemeProvider>
  );
} 