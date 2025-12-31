import { useState } from "react";
import { ChatInput, QuickActions, getGreeting } from "@/components/chat";
import { ChatSidebar, Header } from "@/components/layout";
import type { ChatMessage } from "@/components/chat";
import voxsLogo from "@/assets/voxs-logo.png";

const Index = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen w-full bg-background flex flex-col text-foreground transition-colors duration-200">
      {/* Sidebar */}
      <ChatSidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
      
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main
        className={`flex-1 flex flex-col items-center justify-center p-4 transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        <div className="w-full max-w-3xl mb-8 sm:mb-12 text-center">
          {/* Logo */}
          <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
            <img src={voxsLogo} alt="VOXS Logo" className="w-full h-full object-contain" />
          </div>

          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl font-serif font-normal text-foreground mb-3 tracking-tight">
            {greeting},{" "}
            <span className="relative inline-block pb-2">
              {userName}
              <svg
                className="absolute w-[140%] h-5 -bottom-1 -left-[5%] text-foreground"
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
      </main>
    </div>
  );
};

export default Index;
