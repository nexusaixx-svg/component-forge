import { UserRoundX, BookOpen } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 right-0 z-30 p-4 flex items-center gap-2">
      <button
        className="p-2 rounded-lg hover:bg-secondary transition-colors"
        aria-label="Incognito mode"
        title="Incognito Mode"
      >
        <UserRoundX className="w-5 h-5 text-foreground" />
      </button>
      <button
        className="p-2 rounded-lg hover:bg-secondary transition-colors"
        aria-label="VOXS Learn mode"
        title="VOXS Learn Mode"
      >
        <BookOpen className="w-5 h-5 text-foreground" />
      </button>
    </header>
  );
};
