# JouleDetailView Component

A comprehensive detail view component for displaying detailed item information in the Joule design system. Perfect companion to the JouleList component.

## Quick Usage

```tsx
import { JouleDetailView } from '@/components/Joule';

<JouleDetailView
  title="Review Budget Report"
  subtitle="Finance Team"
  description="Q4 budget analysis needs your approval"
  status="Urgent"
  statusColor="#FF4444"
  sectionTitle="Task Details"
  fields={[
    { label: "Due Date", content: "March 15, 2024" },
    { label: "Priority", content: "High" },
    { label: "Assigned By", content: "John Smith" }
  ]}
  actions={[
    { label: "Approve", onClick: () => console.log('Approved') },
    { label: "Request Changes", onClick: () => console.log('Changes requested') }
  ]}
  onBack={() => console.log('Back clicked')}
  onFullscreen={() => console.log('Fullscreen')}
  onClose={() => console.log('Close')}
/>
```

## Component Structure

### 1. Header Section
- **Purple gradient background** matching Joule design
- **Back button**: Navigate to previous view
- **Fullscreen button**: Expand to fullscreen mode
- **Close button**: Close the detail view

### 2. Item Summary
- **Avatar**: Visual identifier (uses same style as JouleList)
- **Title**: Main item name/title
- **Subtitle**: Secondary information (team, department, etc.)
- **Description**: Brief description of the item
- **Status**: Current status with color coding

### 3. Content Area
- **Section title**: Main heading for the detail fields
- **Fields**: Label-value pairs for detailed information
- **Scrollable**: Handles long content gracefully

### 4. Action Buttons
- **Customizable actions**: Up to multiple action buttons
- **SAP button styling**: Consistent with design system

## Common Use Cases

### 📋 Task Details
```tsx
<JouleDetailView
  title="Review Budget Report"
  subtitle="Finance Team"
  status="Urgent"
  statusColor="#FF4444"
  fields={[
    { label: "Due Date", content: "March 15, 2024" },
    { label: "Priority", content: "High" },
    { label: "Assigned By", content: "John Smith" }
  ]}
  actions={[
    { label: "Approve", onClick: handleApproval },
    { label: "Request Changes", onClick: handleChanges }
  ]}
/>
```

### 📁 Project Details
```tsx
<JouleDetailView
  title="Website Redesign"
  subtitle="Design Team"
  status="On Track"
  statusColor="#256F3A"
  fields={[
    { label: "Project Manager", content: "Sarah Wilson" },
    { label: "Budget", content: "$45,000" },
    { label: "Timeline", content: "Jan 10 - Apr 30, 2024" }
  ]}
  actions={[
    { label: "View Progress", onClick: handleProgress },
    { label: "Edit Details", onClick: handleEdit }
  ]}
/>
```

### 🔔 Notification Details
```tsx
<JouleDetailView
  title="System Update Available"
  subtitle="IT Department"
  status="High Priority"
  statusColor="#FF4444"
  fields={[
    { label: "Update Type", content: "Security Patch" },
    { label: "Downtime", content: "30 minutes" },
    { label: "Maintenance Window", content: "Sunday 2-4 AM EST" }
  ]}
  actions={[
    { label: "Schedule Update", onClick: handleSchedule },
    { label: "Learn More", onClick: handleLearnMore }
  ]}
/>
```

### 👤 User Profiles
```tsx
<JouleDetailView
  title="John Smith"
  subtitle="Senior Developer"
  status="Active"
  statusColor="#256F3A"
  fields={[
    { label: "Employee ID", content: "EMP-2024-0156" },
    { label: "Department", content: "Engineering" },
    { label: "Manager", content: "Sarah Johnson" }
  ]}
  actions={[
    { label: "Send Message", onClick: handleMessage },
    { label: "View Calendar", onClick: handleCalendar }
  ]}
/>
```

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | "Title" | Main item title |
| `subtitle` | string | "Subtitle" | Secondary information |
| `description` | string | "This is a description..." | Brief description |
| `status` | string | "Status" | Current status label |
| `statusColor` | string | "#256F3A" | Status color (hex or CSS variable) |
| `sectionTitle` | string | "Section Title..." | Main section heading |
| `fields` | DetailField[] | [...] | Array of label-value pairs |
| `actions` | DetailAction[] | [...] | Array of action buttons |
| `onBack` | function | - | Back button callback |
| `onFullscreen` | function | - | Fullscreen button callback |
| `onClose` | function | - | Close button callback |

## Interface Definitions

```tsx
interface DetailField {
  label: string;     // Field label (e.g., "Due Date")
  content: string;   // Field content (e.g., "March 15, 2024")
}

interface DetailAction {
  label: string;           // Button text (e.g., "Approve")
  onClick: () => void;     // Click handler function
}
```

## Design Guidelines

### Status Color System
- **Red (#FF4444)**: Urgent, High Priority, Delayed, Error
- **Orange (#FF9500)**: In Progress, Warning, Pending Review
- **Green (#256F3A)**: Complete, Success, On Track, Approved
- **Blue (#0064D9)**: Info, Pending, New, Default

### Content Guidelines
- **Keep titles concise**: 1-3 words when possible
- **Use descriptive subtitles**: Team name, department, or category
- **Limit fields**: 5-8 fields for optimal readability
- **Action buttons**: 1-3 actions for clarity

### Responsive Behavior
- **Fixed dimensions**: 416x742px for consistency
- **Scrollable content**: Long text automatically scrolls
- **Touch-friendly**: All interactive elements are properly sized

## Integration with JouleList

The JouleDetailView is designed to work seamlessly with JouleList:

```tsx
// In your list item click handler
const handleItemClick = (item) => {
  setSelectedItem(item);
  setShowDetail(true);
};

// In your detail view
<JouleDetailView
  title={selectedItem.title}
  subtitle={selectedItem.subtitle}
  description={selectedItem.description}
  status={selectedItem.status}
  statusColor={selectedItem.statusColor}
  // ... other props
  onBack={() => setShowDetail(false)}
/>
``` 