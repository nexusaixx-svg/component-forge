import React from "react";
import { Brain } from "lucide-react";

export const VoxBrainIndicator: React.FC = () => {
  return (
    <div className="flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
      <span className="text-sm">🧠</span>
      <span className="text-xs font-medium text-primary">VOX Brain Active</span>
      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
    </div>
  );
};
