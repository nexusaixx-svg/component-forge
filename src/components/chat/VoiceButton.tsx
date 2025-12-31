import React from "react";
import { Mic } from "lucide-react";

interface VoiceButtonProps {
  onClick?: () => void;
}

export const VoiceButton: React.FC<VoiceButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center justify-center relative shrink-0 transition-colors h-8 w-8 rounded-xl active:scale-95 bg-primary text-primary-foreground hover:bg-primary/90 shadow-md"
      type="button"
      aria-label="Voice mode"
    >
      {/* Mic icon with animated waves */}
      <div className="relative flex items-center justify-center">
        <Mic className="w-4 h-4" />
        {/* Animated wave circles */}
        <span className="absolute inset-0 rounded-full animate-ping opacity-20 bg-primary-foreground" style={{ animationDuration: '1.5s' }} />
      </div>
    </button>
  );
};
