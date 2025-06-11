/**
 * Joule Chat Components Usage Examples
 * 
 * This file contains common usage patterns for the chat components.
 * Use these as reference when implementing chat interfaces in your application.
 */

import ChatBubble from './ChatBubble';
import ChatTimestamp from './ChatTimestamp';
import ChatInput from './ChatInput';
import ChatContainer from './ChatContainer';

// Example 1: Individual Chat Bubbles
export const UserMessageExample = () => (
  <ChatBubble
    type="user"
    message="I'd like to create a maternity leave request."
  />
);

export const AssistantMessageExample = () => (
  <ChatBubble
    type="assistant"
    message="Ok, please upload your maternity leave documents first."
  />
);

export const LongUserMessageExample = () => (
  <ChatBubble
    type="user"
    message="Can you help me understand the difference between various types of leave policies available in our company? I want to make sure I'm choosing the right option for my situation."
    maxWidth={300}
  />
);

export const LongAssistantMessageExample = () => (
  <ChatBubble
    type="assistant"
    message="I'll be happy to help you understand our leave policies. We offer several types of leave including maternity/paternity leave, personal leave, sick leave, and vacation time. Each has different requirements, duration limits, and approval processes. Would you like me to explain the specific details for any particular type of leave?"
  />
);

// Example 2: Chat Timestamp
export const TimestampExample = () => (
  <ChatTimestamp 
    date="Today" 
    time="8:00 AM" 
  />
);

export const YesterdayTimestampExample = () => (
  <ChatTimestamp 
    date="Yesterday" 
    time="3:45 PM" 
  />
);

// Example 3: Chat Input Component
export const ChatInputExample = () => (
  <ChatInput
    placeholder="Message Joule..."
    onSend={(message) => console.log('Sending message:', message)}
    disabled={false}
  />
);

export const DisabledChatInputExample = () => (
  <ChatInput
    placeholder="Please wait..."
    onSend={(message) => console.log('Sending message:', message)}
    disabled={true}
  />
);

// Example 4: Complete Chat Container
export const ChatContainerExample = () => (
  <ChatContainer
    title="New Conversation"
    initialMessages={[
      {
        id: '1',
        type: 'user',
        message: "I'd like to create a maternity leave request."
      },
      {
        id: '2',
        type: 'assistant',
        message: "Ok, please upload your maternity leave documents first."
      }
    ]}
    onSendMessage={(message) => console.log('Message sent:', message)}
    onMenuClick={() => console.log('Menu clicked')}
    onOverflowClick={() => console.log('Overflow clicked')}
    onFullscreenClick={() => console.log('Fullscreen clicked')}
    onDeclineClick={() => console.log('Decline clicked')}
    placeholder="Message Joule..."
    showTimestamp={true}
    timestampDate="Today"
    timestampTime="8:00 AM"
  />
);

// Example 5: HR Support Chat
export const HRSupportChatExample = () => (
  <ChatContainer
    title="HR Support"
    initialMessages={[
      {
        id: '1',
        type: 'assistant',
        message: "Hello! I'm here to help with HR-related questions. What can I assist you with today?"
      },
      {
        id: '2',
        type: 'user',
        message: "I need information about the company's remote work policy."
      },
      {
        id: '3',
        type: 'assistant',
        message: "I can help you with that. Our remote work policy allows eligible employees to work from home up to 3 days per week. Would you like me to explain the eligibility criteria?"
      }
    ]}
    onSendMessage={(message) => console.log('HR message sent:', message)}
    placeholder="Ask about HR policies, benefits, or procedures..."
    timestampDate="Today"
    timestampTime="9:15 AM"
  />
);

// Example 6: IT Support Chat  
export const ITSupportChatExample = () => (
  <ChatContainer
    title="IT Support"
    initialMessages={[
      {
        id: '1',
        type: 'user',
        message: "My laptop is running very slowly and I can't access the company network."
      },
      {
        id: '2',
        type: 'assistant',
        message: "I'll help you troubleshoot this issue. Let's start by checking your network connection. Can you try disconnecting and reconnecting to the WiFi?"
      },
      {
        id: '3',
        type: 'user',
        message: "I tried that but it's still not working."
      },
      {
        id: '4',
        type: 'assistant',
        message: "Let's try a few more steps. Please restart your laptop and try connecting again. If that doesn't work, I'll create a support ticket for our technical team."
      }
    ]}
    onSendMessage={(message) => console.log('IT message sent:', message)}
    placeholder="Describe your technical issue..."
    timestampDate="Today"
    timestampTime="2:30 PM"
  />
);

/**
 * Quick Reference for AI Tools:
 * 
 * When user asks for chat components, use these patterns:
 * 
 * 1. For individual messages: Use ChatBubble with type 'user' or 'assistant'
 * 2. For time separators: Use ChatTimestamp with date and time
 * 3. For message input: Use ChatInput with proper event handlers
 * 4. For complete chat: Use ChatContainer with all components
 * 
 * Import: import { ChatBubble, ChatTimestamp, ChatInput, ChatContainer } from '@/components/Joule';
 * 
 * ChatBubble props:
 * - type: 'user' | 'assistant' (required)
 * - message: string (required)
 * - maxWidth: number (optional, default 268)
 * 
 * ChatTimestamp props:
 * - date: string (required, e.g., "Today", "Yesterday")
 * - time: string (required, e.g., "8:00 AM", "3:45 PM")
 * 
 * ChatInput props:
 * - placeholder: string (optional)
 * - onSend: (message: string) => void (optional)
 * - disabled: boolean (optional)
 * - value: string (optional, for controlled input)
 * - onChange: (value: string) => void (optional)
 * 
 * ChatContainer props:
 * - title: string (optional)
 * - initialMessages: ChatMessage[] (optional)
 * - onSendMessage: (message: string) => void (optional)
 * - Header callbacks: onMenuClick, onOverflowClick, onFullscreenClick, onDeclineClick
 * - placeholder: string (optional)
 * - showTimestamp: boolean (optional)
 * - timestampDate, timestampTime: string (optional)
 */ 