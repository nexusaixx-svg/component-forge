import React, { useState, useRef, useEffect } from "react";
import { Paperclip, Image, FileText, Search, Brain, Sparkles } from "lucide-react";

interface PlusMenuProps {
  onAttachFile: () => void;
  onAttachImage: () => void;
}

export const PlusMenu: React.FC<PlusMenuProps> = ({ onAttachFile, onAttachImage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const attachItems = [
    { icon: Paperclip, label: "Attach file", onClick: onAttachFile },
    { icon: Image, label: "Attach image", onClick: onAttachImage },
    { icon: FileText, label: "Paste text", onClick: () => setIsOpen(false) },
  ];

  const featureItems = [
    { icon: Search, label: "Deep Research", onClick: () => setIsOpen(false) },
    { icon: Brain, label: "Brain Thinking", onClick: () => setIsOpen(false) },
    { icon: Sparkles, label: "VOXS Expert", onClick: () => setIsOpen(false) },
  ];

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-flex items-center justify-center relative shrink-0 transition-colors duration-200 h-8 w-8 rounded-lg active:scale-95 
          ${isOpen ? 'text-foreground bg-secondary' : 'text-muted-foreground hover:text-foreground hover:bg-secondary'}`}
        type="button"
        aria-label="Open menu"
      >
        <svg 
          className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`} 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute bottom-full left-0 mb-2 w-48 bg-card border border-border rounded-xl shadow-lg overflow-hidden z-50 p-1">
          {/* Attach section */}
          <div className="py-1">
            {attachItems.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  item.onClick();
                  setIsOpen(false);
                }}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors hover:bg-secondary text-foreground"
              >
                <item.icon className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-border mx-2 my-1" />

          {/* Features section */}
          <div className="py-1">
            {featureItems.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  item.onClick();
                  setIsOpen(false);
                }}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors hover:bg-secondary text-foreground"
              >
                <item.icon className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
