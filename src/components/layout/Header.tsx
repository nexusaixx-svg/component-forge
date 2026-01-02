import { useState, useEffect } from "react";
import { BookOpen, X } from "lucide-react";

interface HeaderProps {
  onGhostModeChange?: (isActive: boolean) => void;
}

export const Header = ({ onGhostModeChange }: HeaderProps) => {
  const [isGhostMode, setIsGhostMode] = useState(false);

  const toggleGhostMode = () => {
    const newState = !isGhostMode;
    setIsGhostMode(newState);
    onGhostModeChange?.(newState);
  };

  // Apply ghost theme to document
  useEffect(() => {
    if (isGhostMode) {
      document.documentElement.classList.add('ghost-mode');
    } else {
      document.documentElement.classList.remove('ghost-mode');
    }
    return () => {
      document.documentElement.classList.remove('ghost-mode');
    };
  }, [isGhostMode]);

  return (
    <>
      <header className="fixed top-0 right-0 z-30 p-4 flex items-center gap-2">
        <button
          onClick={toggleGhostMode}
          className={`p-2 rounded-lg transition-all duration-300 ${isGhostMode ? 'bg-ghost-accent/20 ring-2 ring-ghost-accent/50' : 'hover:bg-secondary'}`}
          aria-label="Ghost mode"
          title="Ghost Mode - History not saved"
        >
          <span className={`text-xl transition-transform duration-300 inline-block ${isGhostMode ? 'scale-110' : ''}`}>👻</span>
        </button>
        <button
          className="p-2 rounded-lg hover:bg-secondary transition-colors"
          aria-label="VOXS Learn mode"
          title="VOXS Learn Mode"
        >
          <BookOpen className="w-5 h-5 text-foreground" />
        </button>
      </header>

      {/* Ghost Mode Overlay */}
      {isGhostMode && (
        <div className="fixed inset-0 z-20 pointer-events-none flex items-center justify-center">
          <div className="pointer-events-auto bg-ghost-card/95 backdrop-blur-md border border-ghost-border rounded-2xl p-8 max-w-md mx-4 shadow-2xl text-center animate-fade-in">
            <div className="text-5xl mb-4 animate-pulse">👻</div>
            <h2 className="text-xl font-semibold text-ghost-foreground mb-3">Ghost Mode Active</h2>
            <p className="text-sm text-ghost-muted leading-relaxed mb-6">
              You're browsing in stealth. Your conversations are private and won't be saved to history. 
              No traces, no records — just you and your thoughts.
            </p>
            <button
              onClick={toggleGhostMode}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-ghost-accent/20 hover:bg-ghost-accent/30 text-ghost-foreground text-sm font-medium transition-all duration-200 border border-ghost-accent/30"
            >
              <X className="w-4 h-4" />
              Exit Ghost Mode
            </button>
          </div>
        </div>
      )}
    </>
  );
};
