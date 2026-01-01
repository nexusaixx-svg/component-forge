import React from "react";

interface VoiceButtonProps {
  onClick?: () => void;
}

export const VoiceButton: React.FC<VoiceButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center justify-center relative shrink-0 transition-all h-8 w-8 rounded-xl active:scale-95 bg-primary text-primary-foreground hover:bg-primary/90 shadow-md overflow-hidden group"
      type="button"
      aria-label="Voice mode"
    >
      {/* Smooth flowing wave bars */}
      <div className="flex items-end justify-center gap-[3px] h-4">
        <span className="w-[3px] rounded-full bg-primary-foreground wave-bar-smooth" style={{ height: '8px', animationDelay: '0ms' }} />
        <span className="w-[3px] rounded-full bg-primary-foreground wave-bar-smooth" style={{ height: '12px', animationDelay: '100ms' }} />
        <span className="w-[3px] rounded-full bg-primary-foreground wave-bar-smooth" style={{ height: '16px', animationDelay: '200ms' }} />
        <span className="w-[3px] rounded-full bg-primary-foreground wave-bar-smooth" style={{ height: '12px', animationDelay: '300ms' }} />
        <span className="w-[3px] rounded-full bg-primary-foreground wave-bar-smooth" style={{ height: '8px', animationDelay: '400ms' }} />
      </div>
    </button>
  );
};
