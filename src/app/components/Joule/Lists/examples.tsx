/**
 * JouleList Usage Examples
 * 
 * This file contains common usage patterns for the JouleList component.
 * Use these as reference when implementing lists in your application.
 */

import JouleList from './JouleList';

// Example 1: Task List
export const TaskListExample = () => (
  <JouleList
    headerTitle="My Tasks"
    headerSubtitle="Today's assignments"
    headerDescription="Complete these tasks to stay on track"
    currentCount={3}
    totalCount={8}
    items={[
      {
        id: '1',
        title: 'Review Budget Report',
        subtitle: 'Finance Team',
        description: 'Q4 budget analysis needs your approval',
        status: 'Urgent',
        statusColor: '#FF4444',
        buttonText: 'Review',
        onButtonClick: () => console.log('Review budget report')
      },
      {
        id: '2',
        title: 'Team Meeting Prep',
        subtitle: 'Project Alpha',
        description: 'Prepare slides for tomorrow\'s standup',
        status: 'In Progress',
        statusColor: '#FF9500',
        buttonText: 'Edit',
        onButtonClick: () => console.log('Edit meeting prep')
      },
      {
        id: '3',
        title: 'Code Review',
        subtitle: 'Development',
        description: 'Review pull request #247 for new features',
        status: 'Ready',
        statusColor: '#256F3A',
        buttonText: 'Review',
        onButtonClick: () => console.log('Review code')
      }
    ]}
    onViewMore={() => console.log('View all tasks')}
    onFooterButton={() => console.log('Create new task')}
    footerButtonText="New Task"
    viewMoreText="View All"
  />
);

// Example 2: Notification List
export const NotificationListExample = () => (
  <JouleList
    headerTitle="Notifications"
    headerSubtitle="Recent updates"
    headerDescription="Stay informed about important changes"
    currentCount={2}
    totalCount={5}
    items={[
      {
        id: '1',
        title: 'System Update Available',
        subtitle: 'IT Department',
        description: 'New security patches are ready for installation',
        status: 'High Priority',
        statusColor: '#FF4444',
        buttonText: 'Update',
        onButtonClick: () => console.log('System update')
      },
      {
        id: '2',
        title: 'Welcome Message',
        subtitle: 'HR Team',
        description: 'Complete your onboarding checklist',
        status: 'Pending',
        statusColor: '#0064D9',
        buttonText: 'View',
        onButtonClick: () => console.log('View onboarding')
      }
    ]}
    onViewMore={() => console.log('View all notifications')}
    onFooterButton={() => console.log('Mark all as read')}
    footerButtonText="Mark Read"
    viewMoreText="See All"
  />
);

// Example 3: Project List
export const ProjectListExample = () => (
  <JouleList
    headerTitle="Active Projects"
    headerSubtitle="Current assignments"
    headerDescription="Monitor progress across all your projects"
    currentCount={3}
    totalCount={7}
    items={[
      {
        id: '1',
        title: 'Website Redesign',
        subtitle: 'Design Team',
        description: 'Modernize company website with new branding',
        status: 'On Track',
        statusColor: '#256F3A',
        buttonText: 'Details',
        onButtonClick: () => console.log('Website redesign details')
      },
      {
        id: '2',
        title: 'Mobile App Launch',
        subtitle: 'Development Team',
        description: 'Final testing phase before app store release',
        status: 'Delayed',
        statusColor: '#FF4444',
        buttonText: 'Manage',
        onButtonClick: () => console.log('Manage mobile app')
      },
      {
        id: '3',
        title: 'Customer Survey',
        subtitle: 'Marketing Team',
        description: 'Gather feedback on new product features',
        status: 'In Review',
        statusColor: '#FF9500',
        buttonText: 'Review',
        onButtonClick: () => console.log('Review survey')
      }
    ]}
    onViewMore={() => console.log('View all projects')}
    onFooterButton={() => console.log('New project')}
    footerButtonText="New Project"
    viewMoreText="View All"
  />
);

/**
 * Quick Reference for AI Tools:
 * 
 * When user asks for a list component, use JouleList with these patterns:
 * 
 * 1. For tasks/todos: Use TaskListExample pattern with status colors (Red=Urgent, Orange=InProgress, Green=Complete)
 * 2. For notifications: Use NotificationListExample pattern with priority indicators
 * 3. For projects: Use ProjectListExample pattern with progress status
 * 
 * Import: import { JouleList } from '@/components/Joule';
 * 
 * Key props to customize:
 * - headerTitle: Main title for the list
 * - headerSubtitle: Secondary description
 * - currentCount/totalCount: Shows "X of Y" counter
 * - items: Array of list items with title, subtitle, description, status, button
 * - Status colors: Red (#FF4444), Orange (#FF9500), Green (#256F3A), Blue (#0064D9)
 */ 