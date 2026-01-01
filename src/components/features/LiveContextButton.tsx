import React, { useState } from "react";
import { Activity, X } from "lucide-react";

interface ContextInfo {
  workingOn: string;
  lastTool: string;
  role: string;
}

export const LiveContextButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Mock context data - in real app this would come from state/context
  const contextInfo: ContextInfo = {
    workingOn: "General conversation",
    lastTool: "Chat Assistant",
    role: "Creator",
  };

  return (
    <div className="fixed bottom-24 right-4 z-40">
      {/* Context Panel */}
      {isOpen && (
        <div className="absolute bottom-12 right-0 w-64 bg-card border border-border rounded-xl shadow-dropdown p-4 mb-2 animate-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <Activity className="w-4 h-4 text-primary" />
              Live Context
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-secondary rounded-lg transition-colors"
            >
              <X className="w-3 h-3 text-muted-foreground" />
            </button>
          </div>
          
          <div className="space-y-2.5">
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 animate-pulse" />
              <div>
                <p className="text-xs text-muted-foreground">Working on</p>
                <p className="text-sm text-foreground">{contextInfo.workingOn}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5" />
              <div>
                <p className="text-xs text-muted-foreground">Last tool used</p>
                <p className="text-sm text-foreground">{contextInfo.lastTool}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5" />
              <div>
                <p className="text-xs text-muted-foreground">Role</p>
                <p className="text-sm text-foreground">{contextInfo.role}</p>
              </div>
            </div>
          </div>

          <p className="text-[10px] text-muted-foreground mt-3 pt-3 border-t border-border">
            Context helps personalize your experience
          </p>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg ${
          isOpen 
            ? "bg-primary text-primary-foreground" 
            : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
        }`}
        aria-label="View live context"
      >
        <Activity className="w-5 h-5" />
      </button>
    </div>
  );
};
