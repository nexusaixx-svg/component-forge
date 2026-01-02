import React from "react";

interface VoiceButtonProps {
  onClick?: () => void;
}

export const VoiceButton: React.FC<VoiceButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center justify-center relative shrink-0 transition-all h-9 w-9 rounded-xl active:scale-95 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl overflow-hidden group"
      type="button"
      aria-label="Voice mode"
    >
      {/* Premium wave bars with gradient effect */}
      <div className="flex items-center justify-center gap-[2px] h-5">
        <span className="w-[2.5px] rounded-full bg-gradient-to-t from-primary-foreground/60 to-primary-foreground wave-bar-smooth" style={{ height: '6px', animationDelay: '0ms' }} />
        <span className="w-[2.5px] rounded-full bg-gradient-to-t from-primary-foreground/60 to-primary-foreground wave-bar-smooth" style={{ height: '10px', animationDelay: '80ms' }} />
        <span className="w-[2.5px] rounded-full bg-gradient-to-t from-primary-foreground/60 to-primary-foreground wave-bar-smooth" style={{ height: '14px', animationDelay: '160ms' }} />
        <span className="w-[2.5px] rounded-full bg-gradient-to-t from-primary-foreground/60 to-primary-foreground wave-bar-smooth" style={{ height: '18px', animationDelay: '240ms' }} />
        <span className="w-[2.5px] rounded-full bg-gradient-to-t from-primary-foreground/60 to-primary-foreground wave-bar-smooth" style={{ height: '14px', animationDelay: '320ms' }} />
        <span className="w-[2.5px] rounded-full bg-gradient-to-t from-primary-foreground/60 to-primary-foreground wave-bar-smooth" style={{ height: '10px', animationDelay: '400ms' }} />
        <span className="w-[2.5px] rounded-full bg-gradient-to-t from-primary-foreground/60 to-primary-foreground wave-bar-smooth" style={{ height: '6px', animationDelay: '480ms' }} />
      </div>
    </button>
  );
};
