# JouleList Component

A comprehensive list component for displaying structured data in the Joule design system.

## Quick Usage

```tsx
import { JouleList } from '@/components/Joule';

<JouleList
  headerTitle="My Tasks"
  headerSubtitle="Today's assignments"
  currentCount={3}
  totalCount={8}
  items={[
    {
      id: '1',
      title: 'Review Budget Report',
      subtitle: 'Finance Team', 
      description: 'Q4 budget analysis needs approval',
      status: 'Urgent',
      statusColor: '#FF4444',
      buttonText: 'Review',
      onButtonClick: () => console.log('Review clicked')
    }
  ]}
/>
```

## Common Use Cases

### 📋 Task Lists
- Use for todo items, assignments, action items
- Status colors: Red (Urgent), Orange (In Progress), Green (Complete)

### 🔔 Notifications
- Use for alerts, updates, system messages
- Status colors: Red (High Priority), Blue (Info), Orange (Warning)

### 📁 Projects
- Use for project status, team assignments
- Status colors: Green (On Track), Red (Delayed), Orange (In Review)

## Status Color Guide

- **Red (#FF4444)**: Urgent, High Priority, Delayed, Error
- **Orange (#FF9500)**: In Progress, Warning, Pending Review
- **Green (#256F3A)**: Complete, Success, On Track, Approved
- **Blue (#0064D9)**: Info, Pending, New, Default

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `headerTitle` | string | "Header Title" | Main title for the list |
| `headerSubtitle` | string | "This is a subtitle" | Secondary description |
| `headerDescription` | string | "Add a description" | Additional context |
| `currentCount` | number | 3 | Number of items shown |
| `totalCount` | number | 6 | Total number of items |
| `items` | ListItem[] | [...] | Array of list items |
| `onViewMore` | function | - | Callback for "View More" button |
| `onFooterButton` | function | - | Callback for footer button |
| `footerButtonText` | string | "Button" | Text for footer button |
| `viewMoreText` | string | "View More" | Text for view more button |

## ListItem Interface

```tsx
interface ListItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  status: string;
  statusColor?: string;
  buttonText: string;
  onButtonClick?: () => void;
}
``` 