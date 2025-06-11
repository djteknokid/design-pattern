/**
 * JouleContextualList Usage Examples
 * 
 * This file contains common usage patterns for the JouleContextualList component.
 * Use these as reference when implementing contextual/collapsible lists in your application.
 */

import JouleContextualList from './JouleContextualList';

// Example 1: References List
export const ReferencesExample = () => (
  <JouleContextualList
    title="References"
    count={3}
    isExpanded={true}
    items={[
      {
        id: '1',
        title: '[1] AI in Business Processes',
        description: 'A comprehensive study on artificial intelligence applications in modern business workflows and process optimization.',
        link: 'https://example.com/ai-business-study'
      },
      {
        id: '2',
        title: '[2] SAP Design System Guidelines',
        description: 'Official documentation and best practices for implementing SAP Fiori design principles in enterprise applications.',
        link: 'https://experience.sap.com/fiori-design-web/'
      },
      {
        id: '3',
        title: '[3] User Experience Research',
        description: 'Latest findings in user experience research for enterprise software and recommendations for interface design.',
        link: 'https://example.com/ux-research'
      }
    ]}
    onToggle={(expanded) => console.log('References toggled:', expanded)}
    maxDescriptionLines={2}
  />
);

// Example 2: Related Documents
export const RelatedDocumentsExample = () => (
  <JouleContextualList
    title="Related Documents"
    count={4}
    isExpanded={false}
    items={[
      {
        id: '1',
        title: 'Project Requirements Document',
        description: 'Detailed specifications and requirements for the current project phase including functional and technical requirements.',
        onClick: () => console.log('Opening requirements document')
      },
      {
        id: '2',
        title: 'Technical Architecture Guide',
        description: 'System architecture overview and technical implementation guidelines for the development team.',
        onClick: () => console.log('Opening architecture guide')
      },
      {
        id: '3',
        title: 'User Acceptance Testing Plan',
        description: 'Comprehensive testing plan and acceptance criteria for user validation and quality assurance.',
        onClick: () => console.log('Opening testing plan')
      },
      {
        id: '4',
        title: 'Deployment Instructions',
        description: 'Step-by-step deployment guide and production environment configuration requirements.',
        onClick: () => console.log('Opening deployment guide')
      }
    ]}
    onToggle={(expanded) => console.log('Documents toggled:', expanded)}
    maxDescriptionLines={2}
  />
);

// Example 3: Helpful Resources
export const HelpfulResourcesExample = () => (
  <JouleContextualList
    title="Helpful Resources"
    count={5}
    isExpanded={true}
    items={[
      {
        id: '1',
        title: 'Getting Started Guide',
        description: 'Complete beginner\'s guide to using the platform with step-by-step tutorials and common workflows.',
        link: 'https://help.example.com/getting-started'
      },
      {
        id: '2',
        title: 'Video Tutorials',
        description: 'Collection of video tutorials covering advanced features and best practices for power users.',
        link: 'https://videos.example.com/tutorials'
      },
      {
        id: '3',
        title: 'Community Forum',
        description: 'Connect with other users, ask questions, and share knowledge in our active community forum.',
        link: 'https://community.example.com'
      },
      {
        id: '4',
        title: 'API Documentation',
        description: 'Complete API reference with examples, authentication details, and integration guides for developers.',
        link: 'https://api.example.com/docs'
      },
      {
        id: '5',
        title: 'Support Center',
        description: 'Access technical support, submit tickets, and find answers to frequently asked questions.',
        link: 'https://support.example.com'
      }
    ]}
    onToggle={(expanded) => console.log('Resources toggled:', expanded)}
    maxDescriptionLines={2}
  />
);

// Example 4: Related Tasks
export const RelatedTasksExample = () => (
  <JouleContextualList
    title="Related Tasks"
    count={3}
    isExpanded={false}
    items={[
      {
        id: '1',
        title: 'Update Project Timeline',
        description: 'Review and update the project timeline based on recent changes and stakeholder feedback.',
        onClick: () => console.log('Opening timeline update task')
      },
      {
        id: '2',
        title: 'Prepare Status Report',
        description: 'Compile weekly status report for management review including progress, risks, and next steps.',
        onClick: () => console.log('Opening status report task')
      },
      {
        id: '3',
        title: 'Schedule Team Meeting',
        description: 'Organize upcoming team meeting to discuss project milestones and resource allocation.',
        onClick: () => console.log('Opening meeting scheduler')
      }
    ]}
    onToggle={(expanded) => console.log('Tasks toggled:', expanded)}
    maxDescriptionLines={2}
  />
);

// Example 5: Knowledge Base Articles (4-line descriptions)
export const KnowledgeBaseExample = () => (
  <JouleContextualList
    title="Knowledge Base"
    count={2}
    isExpanded={true}
    items={[
      {
        id: '1',
        title: 'Troubleshooting Guide',
        description: 'Comprehensive troubleshooting guide covering common issues, error messages, and their solutions. This guide includes step-by-step instructions for resolving technical problems and system errors that users might encounter during daily operations.',
        link: 'https://kb.example.com/troubleshooting'
      },
      {
        id: '2',
        title: 'Best Practices Manual',
        description: 'Essential best practices and recommendations for optimal system usage, security guidelines, and performance optimization. This manual covers industry standards, compliance requirements, and proven methodologies for successful implementation.',
        link: 'https://kb.example.com/best-practices'
      }
    ]}
    onToggle={(expanded) => console.log('Knowledge base toggled:', expanded)}
    maxDescriptionLines={4}
  />
);

/**
 * Quick Reference for AI Tools:
 * 
 * When user asks for contextual lists or collapsible sections, use JouleContextualList with these patterns:
 * 
 * 1. For references: Use ReferencesExample pattern with numbered references and external links
 * 2. For documents: Use RelatedDocumentsExample pattern with internal navigation
 * 3. For resources: Use HelpfulResourcesExample pattern with mixed link types
 * 4. For tasks: Use RelatedTasksExample pattern with action callbacks
 * 5. For knowledge base: Use KnowledgeBaseExample with longer descriptions (4 lines)
 * 
 * Import: import { JouleContextualList } from '@/components/Joule';
 * 
 * Key props to customize:
 * - title: Section title (automatically includes count)
 * - count: Number of items in the section
 * - isExpanded: Initial expanded state (true/false)
 * - items: Array of contextual items with title, description, and link/onClick
 * - onToggle: Callback when section is expanded/collapsed
 * - maxDescriptionLines: 2 or 4 lines before truncation
 * 
 * Item structure:
 * - id: Unique identifier
 * - title: Link or item title (supports reference numbering like [1], [2])
 * - description: Item description (truncated based on maxDescriptionLines)
 * - link: External URL (opens in new tab)
 * - onClick: Custom click handler (alternative to link)
 */ 