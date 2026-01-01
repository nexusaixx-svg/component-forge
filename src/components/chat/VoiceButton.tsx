import React from "react";

interface VoiceButtonProps {
  onClick?: () => void;
}

export const VoiceButton: React.FC<VoiceButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center justify-center relative shrink-0 transition-colors h-8 w-8 rounded-xl active:scale-95 bg-primary text-primary-foreground hover:bg-primary/90 shadow-md overflow-hidden"
      type="button"
      aria-label="Voice mode"
    >
      {/* Seamless wave bars */}
      <div className="flex items-center justify-center gap-[2px] h-4">
        <span className="w-[2px] h-full bg-primary-foreground rounded-full wave-bar" style={{ animationDelay: '0ms' }} />
        <span className="w-[2px] h-full bg-primary-foreground rounded-full wave-bar" style={{ animationDelay: '150ms' }} />
        <span className="w-[2px] h-full bg-primary-foreground rounded-full wave-bar" style={{ animationDelay: '300ms' }} />
        <span className="w-[2px] h-full bg-primary-foreground rounded-full wave-bar" style={{ animationDelay: '450ms' }} />
        <span className="w-[2px] h-full bg-primary-foreground rounded-full wave-bar" style={{ animationDelay: '600ms' }} />
      </div>
    </button>
  );
};
