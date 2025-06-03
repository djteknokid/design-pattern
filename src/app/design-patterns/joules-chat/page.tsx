"use client";

import { useState, useRef, useEffect } from "react";
import {
  ShellBar,
  ShellBarItem,
  Avatar,
  Title,
  Bar,
  ThemeProvider,
  MessageStrip,
  Card,
  Icon,
  Button,
  Input,
  List,
  FlexBox,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  FlexBoxAlignItems,
  MessageBox,
  MessageBoxType
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

interface ChatMessage {
  id: string;
  text: string;
  sender: "user" | "joules";
  timestamp: Date;
  type?: "text" | "suggestion" | "action";
  suggestions?: string[];
  actions?: {
    text: string;
    icon: string;
    handler: () => void;
  }[];
}

const mockResponses = {
  greeting: [
    "Hello! I'm Joules, your SAP AI assistant. How can I help you today?",
    "Hi there! I'm here to help with your SAP-related questions.",
    "Welcome! I'm Joules, ready to assist you with SAP solutions."
  ],
  help: [
    "I can help you with:",
    "Here are some things I can do:",
    "I'm capable of:"
  ],
  capabilities: [
    "Answer questions about SAP products and solutions",
    "Help with system navigation and common tasks",
    "Provide information about business processes",
    "Assist with troubleshooting",
    "Generate reports and analytics"
  ],
  fallback: [
    "I'm not sure I understand. Could you rephrase that?",
    "I'm still learning about that topic. Could you try asking differently?",
    "I don't have enough information to answer that. Could you provide more details?"
  ]
};

export default function JoulesChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      text: mockResponses.greeting[0],
      sender: "joules",
      timestamp: new Date(),
      type: "text",
      suggestions: ["What can you do?", "Help me with a task", "Show me some examples"]
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [messageBoxType, setMessageBoxType] = useState<MessageBoxType>(MessageBoxType.Information);
  const [messageBoxText, setMessageBoxText] = useState("");

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
      type: "text"
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate Joules response
    setTimeout(() => {
      let response: ChatMessage;
      
      if (inputValue.toLowerCase().includes("what can you do") || 
          inputValue.toLowerCase().includes("help")) {
        response = {
          id: Date.now().toString(),
          text: mockResponses.help[0],
          sender: "joules",
          timestamp: new Date(),
          type: "text",
          suggestions: mockResponses.capabilities
        };
      } else if (inputValue.toLowerCase().includes("example")) {
        response = {
          id: Date.now().toString(),
          text: "Here are some example actions I can help with:",
          sender: "joules",
          timestamp: new Date(),
          type: "action",
          actions: [
            {
              text: "Generate Report",
              icon: "bar-chart",
              handler: () => {
                setShowMessageBox(true);
                setMessageBoxType(MessageBoxType.Information);
                setMessageBoxText("Generating report...");
              }
            },
            {
              text: "Open Analytics",
              icon: "pie-chart",
              handler: () => {
                setShowMessageBox(true);
                setMessageBoxType(MessageBoxType.Information);
                setMessageBoxText("Opening analytics dashboard...");
              }
            },
            {
              text: "Show Help",
              icon: "sys-help",
              handler: () => {
                setShowMessageBox(true);
                setMessageBoxType(MessageBoxType.Information);
                setMessageBoxText("Opening help documentation...");
              }
            }
          ]
        };
      } else {
        response = {
          id: Date.now().toString(),
          text: mockResponses.fallback[0],
          sender: "joules",
          timestamp: new Date(),
          type: "text",
          suggestions: ["What can you do?", "Show me examples", "I need help with something else"]
        };
      }

      setMessages(prev => [...prev, response]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    handleSendMessage();
  };

  const renderMessage = (message: ChatMessage) => {
    const isUser = message.sender === "user";

    return (
      <div
        key={message.id}
        className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}
      >
        <div
          className={`max-w-[70%] rounded-lg p-4 ${
            isUser
              ? "bg-blue-100 text-blue-900"
              : "bg-gray-100 text-gray-900"
          }`}
        >
          {!isUser && (
            <div className="flex items-center gap-2 mb-2">
              <Avatar icon="bot" />
              <span className="font-semibold">Joules</span>
            </div>
          )}
          
          <div className="text-sm">{message.text}</div>
          
          {message.suggestions && (
            <div className="mt-2 flex flex-wrap gap-2">
              {message.suggestions.map((suggestion, index) => (
                <Button
                  key={index}
                  design="Transparent"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </Button>
              ))}
            </div>
          )}

          {message.actions && (
            <div className="mt-2 grid grid-cols-1 gap-2">
              {message.actions.map((action, index) => (
                <Button
                  key={index}
                  icon={action.icon}
                  onClick={action.handler}
                  design="Emphasized"
                >
                  {action.text}
                </Button>
              ))}
            </div>
          )}

          <div className="text-xs text-gray-500 mt-1">
            {message.timestamp.toLocaleTimeString()}
          </div>
        </div>
      </div>
    );
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100">
        <ShellBar
          primaryTitle="Joules Chat"
          secondaryTitle="SAP AI Assistant"
          showNotifications
          profile={<Avatar icon="bot" />}
        >
          <ShellBarItem icon="home" text="Home" />
          <ShellBarItem icon="documentation" text="Documentation" />
          <ShellBarItem icon="help" text="Help" />
        </ShellBar>

        <div className="p-4">
          <Bar>
            <Title>Chat with Joules</Title>
          </Bar>

          <MessageStrip className="mt-4">
            Joules is your AI assistant for SAP solutions. Ask questions, get help with tasks, or explore features.
          </MessageStrip>

          <Card className="mt-4">
            <div className="h-[600px] flex flex-col">
              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4">
                {messages.map(renderMessage)}
                {isTyping && (
                  <div className="flex justify-start mb-4">
                    <div className="bg-gray-100 rounded-lg p-4">
                      <div className="flex items-center gap-2">
                        <Avatar icon="bot" />
                        <span className="font-semibold">Joules</span>
                      </div>
                      <div className="flex gap-1 mt-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="border-t p-4 bg-white">
                <FlexBox
                  direction={FlexBoxDirection.Row}
                  justifyContent={FlexBoxJustifyContent.SpaceBetween}
                  alignItems={FlexBoxAlignItems.Center}
                  gap="0.5rem"
                >
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Type your message..."
                    style={{ flex: 1 }}
                  />
                  <Button
                    icon="send"
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim()}
                  >
                    Send
                  </Button>
                </FlexBox>
              </div>
            </div>
          </Card>
        </div>

        {showMessageBox && (
          <MessageBox
            type={messageBoxType}
            onClose={() => setShowMessageBox(false)}
          >
            {messageBoxText}
          </MessageBox>
        )}
      </div>
    </ThemeProvider>
  );
} 