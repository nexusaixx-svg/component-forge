import { useState } from "react";
import { ChatInput, QuickActions, Icons, getGreeting } from "@/components/chat";
import type { ChatMessage } from "@/components/chat";

const Index = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const greeting = getGreeting();
  const userName = "there";

  const handleSendMessage = (data: ChatMessage) => {
    console.log('Sending message:', data.message);
    console.log('Attached files:', data.files);
    console.log('Pasted content:', data.pastedContent);
    console.log('Model:', data.model);
    console.log('Thinking enabled:', data.isThinkingEnabled);
    setMessages(prev => [...prev, data.message]);
  };

  return (
    <div className="min-h-screen w-full bg-background flex flex-col items-center justify-center p-4 font-sans text-foreground transition-colors duration-200">
      <div className="w-full max-w-3xl mb-8 sm:mb-12 text-center">
        {/* Logo */}
        <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center text-primary">
          <Icons.Logo className="w-full h-full" />
        </div>

        {/* Greeting */}
        <h1 className="text-3xl sm:text-4xl font-serif font-normal text-foreground mb-3 tracking-tight">
          {greeting},{" "}
          <span className="relative inline-block pb-2">
            {userName}
            <svg
              className="absolute w-[140%] h-5 -bottom-1 -left-[5%] text-primary"
              viewBox="0 0 140 24"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M6 16 Q 70 24, 134 14"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </span>
        </h1>
      </div>

      {/* Chat Input */}
      <ChatInput onSendMessage={handleSendMessage} />

      {/* Quick Actions */}
      <QuickActions />

      {/* Message History (for demo) */}
      {messages.length > 0 && (
        <div className="w-full max-w-2xl mt-8 space-y-3">
          <h2 className="text-sm font-medium text-muted-foreground mb-3">Recent messages</h2>
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-card border border-border text-foreground text-sm"
            >
              {msg}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Index;
