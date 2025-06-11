/**
 * JouleDetailView Usage Examples
 * 
 * This file contains common usage patterns for the JouleDetailView component.
 * Use these as reference when implementing detail views in your application.
 */

import JouleDetailView from './JouleDetailView';

// Example 1: Task Detail View
export const TaskDetailExample = () => (
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
      { label: "Assigned By", content: "John Smith (Finance Manager)" },
      { label: "Description", content: "Please review the Q4 budget analysis document. This includes revenue projections, expense allocations, and resource planning for the next quarter. Your approval is required before we can proceed with the budget implementation." },
      { label: "Attachments", content: "Q4_Budget_Report.pdf, Financial_Summary.xlsx" }
    ]}
    actions={[
      { label: "Approve", onClick: () => console.log('Task approved') },
      { label: "Request Changes", onClick: () => console.log('Changes requested') }
    ]}
    onBack={() => console.log('Back to task list')}
    onFullscreen={() => console.log('Fullscreen view')}
    onClose={() => console.log('Close detail view')}
  />
);

// Example 2: Project Detail View
export const ProjectDetailExample = () => (
  <JouleDetailView
    title="Website Redesign"
    subtitle="Design Team"
    description="Modernize company website with new branding"
    status="On Track"
    statusColor="#256F3A"
    sectionTitle="Project Information"
    fields={[
      { label: "Project Manager", content: "Sarah Wilson" },
      { label: "Start Date", content: "January 10, 2024" },
      { label: "Expected Completion", content: "April 30, 2024" },
      { label: "Budget", content: "$45,000" },
      { label: "Team Members", content: "5 designers, 3 developers, 1 content specialist" },
      { label: "Current Phase", content: "User interface design and prototyping. We are currently working on the desktop and mobile layouts, incorporating the new brand guidelines and ensuring accessibility compliance." },
      { label: "Next Milestones", content: "Complete wireframes (March 20), Begin development (March 25), User testing (April 10)" }
    ]}
    actions={[
      { label: "View Progress", onClick: () => console.log('View project progress') },
      { label: "Edit Details", onClick: () => console.log('Edit project details') }
    ]}
    onBack={() => console.log('Back to project list')}
    onFullscreen={() => console.log('Fullscreen project view')}
    onClose={() => console.log('Close project detail')}
  />
);

// Example 3: Notification Detail View
export const NotificationDetailExample = () => (
  <JouleDetailView
    title="System Update Available"
    subtitle="IT Department"
    description="New security patches are ready for installation"
    status="High Priority"
    statusColor="#FF4444"
    sectionTitle="Update Information"
    fields={[
      { label: "Update Type", content: "Security Patch" },
      { label: "Release Date", content: "March 12, 2024" },
      { label: "Affected Systems", content: "All user workstations and servers" },
      { label: "Estimated Downtime", content: "30 minutes during maintenance window" },
      { label: "Details", content: "This critical security update addresses several vulnerabilities in the operating system and installed applications. The update includes patches for network security, user authentication, and data encryption improvements. All systems will be automatically updated during the scheduled maintenance window." },
      { label: "Maintenance Window", content: "Sunday, March 17, 2024 - 2:00 AM to 4:00 AM EST" }
    ]}
    actions={[
      { label: "Schedule Update", onClick: () => console.log('Update scheduled') },
      { label: "Learn More", onClick: () => console.log('More information') }
    ]}
    onBack={() => console.log('Back to notifications')}
    onFullscreen={() => console.log('Fullscreen notification')}
    onClose={() => console.log('Close notification')}
  />
);

// Example 4: User Profile Detail View
export const UserProfileDetailExample = () => (
  <JouleDetailView
    title="John Smith"
    subtitle="Senior Developer"
    description="Full-stack developer with 8 years experience"
    status="Active"
    statusColor="#256F3A"
    sectionTitle="Profile Information"
    fields={[
      { label: "Employee ID", content: "EMP-2024-0156" },
      { label: "Department", content: "Engineering" },
      { label: "Manager", content: "Sarah Johnson" },
      { label: "Start Date", content: "September 15, 2019" },
      { label: "Skills", content: "React, Node.js, TypeScript, Python, AWS, Docker" },
      { label: "Biography", content: "John is a seasoned full-stack developer with expertise in modern web technologies. He has been instrumental in developing our customer-facing applications and has mentored several junior developers. John is passionate about clean code, performance optimization, and staying up-to-date with the latest industry trends." },
      { label: "Recent Projects", content: "Customer Portal Redesign, API Gateway Implementation, Mobile App Backend" }
    ]}
    actions={[
      { label: "Send Message", onClick: () => console.log('Message sent') },
      { label: "View Calendar", onClick: () => console.log('Calendar opened') }
    ]}
    onBack={() => console.log('Back to team directory')}
    onFullscreen={() => console.log('Fullscreen profile')}
    onClose={() => console.log('Close profile')}
  />
);

/**
 * Quick Reference for AI Tools:
 * 
 * When user asks for a detail view component, use JouleDetailView with these patterns:
 * 
 * 1. For task details: Use TaskDetailExample pattern with due dates, priorities, assignments
 * 2. For project details: Use ProjectDetailExample pattern with timelines, budgets, team info
 * 3. For notifications: Use NotificationDetailExample pattern with urgency and technical details
 * 4. For user profiles: Use UserProfileDetailExample pattern with personal and professional info
 * 
 * Import: import { JouleDetailView } from '@/components/Joule';
 * 
 * Key props to customize:
 * - title, subtitle, description: Item summary information
 * - status, statusColor: Current state with appropriate color coding
 * - sectionTitle: Main section heading for the detail fields
 * - fields: Array of { label, content } pairs for detailed information
 * - actions: Array of { label, onClick } pairs for available actions
 * - onBack, onFullscreen, onClose: Navigation callbacks
 * 
 * Status colors: Red (#FF4444), Orange (#FF9500), Green (#256F3A), Blue (#0064D9)
 */ 