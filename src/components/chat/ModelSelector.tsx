import React, { useState, useRef, useEffect } from "react";
import { Icons } from "./Icons";
import type { Model } from "./types";

interface ModelSelectorProps {
  models: Model[];
  selectedModel: string;
  onSelect: (modelId: string) => void;
}

export const ModelSelector: React.FC<ModelSelectorProps> = ({ models, selectedModel, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentModel = models.find(m => m.id === selectedModel) || models[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-flex items-center justify-center relative shrink-0 transition font-medium duration-300 ease-[cubic-bezier(0.165,0.85,0.45,1)] h-8 rounded-xl px-3 min-w-[4rem] active:scale-[0.98] whitespace-nowrap text-xs pl-2.5 pr-2 gap-1 
        ${isOpen
            ? 'bg-bg-200 text-text-100'
            : 'text-text-300 hover:text-text-200 hover:bg-bg-200'}`}
      >
        <div className="inline-flex gap-[3px] text-sm h-[14px] leading-none items-baseline">
          <div className="flex items-center gap-[4px]">
            <div className="whitespace-nowrap select-none font-medium">{currentModel.name}</div>
          </div>
        </div>
        <div className="flex items-center justify-center opacity-75" style={{ width: '20px', height: '20px' }}>
          <Icons.SelectArrow className={`shrink-0 opacity-75 transition-transform duration-200 w-4 h-4 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>

      {isOpen && (
        <div className="absolute bottom-full right-0 mb-2 w-[260px] bg-card border border-border rounded-2xl shadow-dropdown overflow-hidden z-50 flex flex-col p-1.5 origin-bottom-right animate-in fade-in slide-in-from-bottom-2 duration-200">
          {models.map(model => (
            <button
              key={model.id}
              onClick={() => {
                onSelect(model.id);
                setIsOpen(false);
              }}
              className="w-full text-left px-3 py-2.5 rounded-xl flex items-start justify-between group transition-colors hover:bg-bg-200"
            >
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-[13px] font-semibold text-foreground">
                    {model.name}
                  </span>
                  {model.badge && (
                    <span className={`px-1.5 py-[1px] rounded-full text-[10px] font-medium border ${
                      model.badge === 'Upgrade'
                        ? 'border-primary/30 text-primary bg-primary/10'
                        : 'border-bg-300 text-text-300'
                    }`}>
                      {model.badge}
                    </span>
                  )}
                </div>
                <span className="text-[11px] text-muted-foreground">
                  {model.description}
                </span>
              </div>
              {selectedModel === model.id && (
                <Icons.Check className="w-4 h-4 text-primary mt-1" />
              )}
            </button>
          ))}

          <div className="h-px bg-border my-1 mx-2" />

          <button className="w-full text-left px-3 py-2.5 rounded-xl flex items-center justify-between group transition-colors hover:bg-bg-200 text-foreground">
            <span className="text-[13px] font-semibold">More models</span>
            <Icons.SelectArrow className="w-4 h-4 -rotate-90 text-muted-foreground" />
          </button>
        </div>
      )}
    </div>
  );
};
