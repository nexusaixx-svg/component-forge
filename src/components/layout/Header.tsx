import { useState } from "react";
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

  return (
    <>
      <header className="fixed top-0 right-0 z-30 p-4 flex items-center gap-2">
        <button
          onClick={toggleGhostMode}
          className={`p-2 rounded-lg transition-colors ${isGhostMode ? 'bg-primary/10' : 'hover:bg-secondary'}`}
          aria-label="Ghost mode"
          title="Ghost Mode - History not saved"
        >
          <span className="text-xl">👻</span>
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
          <div className="pointer-events-auto bg-card/95 backdrop-blur-sm border border-border rounded-2xl p-6 max-w-md mx-4 shadow-lg text-center">
            <div className="text-4xl mb-4">👻</div>
            <h2 className="text-lg font-semibold text-foreground mb-2">Ghost Mode Active</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Your conversations won't be saved to history. Browse privately without leaving a trace.
            </p>
            <button
              onClick={toggleGhostMode}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground text-sm font-medium transition-colors"
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
