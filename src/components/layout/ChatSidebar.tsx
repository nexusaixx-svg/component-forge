import { useState } from "react";
import { PanelLeftClose, PanelLeftOpen, MessageSquare, Plus } from "lucide-react";
import voxsLogo from "@/assets/voxs-logo.png";
import { AccountMenu } from "./AccountMenu";

interface ChatHistory {
  id: string;
  title: string;
  date: string;
}

interface ChatSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const mockChatHistory: ChatHistory[] = [
  { id: "1", title: "React component help", date: "Today" },
  { id: "2", title: "API integration question", date: "Today" },
  { id: "3", title: "CSS styling advice", date: "Yesterday" },
  { id: "4", title: "Database design tips", date: "Yesterday" },
  { id: "5", title: "Authentication setup", date: "Last week" },
];

export const ChatSidebar = ({ isOpen, onToggle }: ChatSidebarProps) => {
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-background border-r border-border z-40 transition-all duration-300 ease-in-out ${
          isOpen ? "w-64" : "w-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col h-full w-64">
          {/* Header with Logo/Icon */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div
              className="relative w-8 h-8 cursor-pointer"
              onMouseEnter={() => setIsLogoHovered(true)}
              onMouseLeave={() => setIsLogoHovered(false)}
              onClick={onToggle}
            >
              {isLogoHovered ? (
                <PanelLeftClose className="w-8 h-8 text-foreground transition-all duration-200" />
              ) : (
                <img
                  src={voxsLogo}
                  alt="VOXS Logo"
                  className="w-8 h-8 object-contain transition-all duration-200"
                />
              )}
            </div>
          </div>

          {/* Chat History */}
          <div className="flex-1 overflow-y-auto p-3 scrollbar-thin">
            <div className="space-y-1">
              {mockChatHistory.map((chat, index) => (
                <div key={chat.id}>
                  {(index === 0 || mockChatHistory[index - 1].date !== chat.date) && (
                    <p className="text-xs text-muted-foreground px-3 py-2 font-medium">
                      {chat.date}
                    </p>
                  )}
                  <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-secondary text-left transition-colors group">
                    <MessageSquare className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <span className="text-sm text-foreground truncate">
                      {chat.title}
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* New Chat Button - moved to bottom */}
          <div className="p-3 border-t border-border">
            <button
              className="w-full flex items-center justify-center gap-2 p-2.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium text-sm"
              aria-label="New chat"
            >
              <Plus className="w-4 h-4" />
              <span>New chat</span>
            </button>
          </div>

          {/* Account Menu at bottom */}
          <div className="p-3 border-t border-border">
            <AccountMenu />
          </div>
        </div>
      </aside>

      {/* Toggle button when closed - shows logo */}
      {!isOpen && (
        <button
          onClick={onToggle}
          className="fixed top-4 left-4 z-50 p-2 rounded-lg hover:bg-secondary transition-colors"
          aria-label="Open sidebar"
        >
          <img src={voxsLogo} alt="VOXS" className="w-6 h-6 object-contain" />
        </button>
      )}
    </>
  );
}
