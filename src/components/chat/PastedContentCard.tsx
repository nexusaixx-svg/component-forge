import React from "react";
import { Icons } from "./Icons";
import type { PastedContent } from "./types";

interface PastedContentCardProps {
  content: PastedContent;
  onRemove: (id: string) => void;
}

export const PastedContentCard: React.FC<PastedContentCardProps> = ({ content, onRemove }) => {
  return (
    <div className="relative group flex-shrink-0 w-28 h-28 rounded-2xl overflow-hidden border border-border bg-card p-3 flex flex-col justify-between shadow-sm">
      <div className="overflow-hidden w-full">
        <p className="text-[10px] text-muted-foreground leading-[1.4] font-mono break-words whitespace-pre-wrap line-clamp-4 select-none">
          {content.content}
        </p>
      </div>

      <div className="flex items-center justify-between w-full mt-2">
        <div className="inline-flex items-center justify-center px-1.5 py-[2px] rounded border border-border bg-background">
          <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider font-sans">PASTED</span>
        </div>
      </div>

      <button
        onClick={() => onRemove(content.id)}
        className="absolute top-2 right-2 p-[3px] bg-background border border-border rounded-full text-muted-foreground hover:text-foreground transition-colors shadow-sm opacity-0 group-hover:opacity-100"
      >
        <Icons.X className="w-2 h-2" />
      </button>
    </div>
  );
};
