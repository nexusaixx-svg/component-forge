import React, { useState, useRef, useEffect } from "react";
import { User, Settings, Sparkles, CreditCard, LogOut, ChevronRight, Shield } from "lucide-react";

export const AccountMenu: React.FC = () => {
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

  const menuItems = [
    { icon: Settings, label: "Personalization", onClick: () => setIsOpen(false) },
    { icon: Sparkles, label: "VOXS", onClick: () => setIsOpen(false) },
    { icon: Shield, label: "Privacy Dashboard", onClick: () => setIsOpen(false) },
    { icon: CreditCard, label: "Upgrade Plan", onClick: () => setIsOpen(false) },
    { icon: LogOut, label: "Sign Out", onClick: () => setIsOpen(false) },
  ];

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-secondary text-left transition-colors"
      >
        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
          <User className="w-4 h-4 text-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-foreground truncate">Account</p>
          <p className="text-xs text-muted-foreground truncate">Free Plan</p>
        </div>
        <ChevronRight className={`w-4 h-4 text-muted-foreground transition-transform ${isOpen ? 'rotate-90' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute bottom-full left-0 mb-2 w-full bg-card border border-border rounded-xl shadow-lg overflow-hidden z-50 p-1">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={item.onClick}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors hover:bg-secondary text-foreground"
            >
              <item.icon className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
          
          {/* Privacy note */}
          <div className="px-3 py-2 mt-1 border-t border-border">
            <p className="text-[10px] text-muted-foreground leading-relaxed">
              Your data never leaves this site. No ads. No tracking. Just better results.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
