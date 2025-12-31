import React from "react";

const actions = [
  {
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    label: "Write",
  },
  {
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 2.5 6 2.5 6 2.5s6 0 6-2.5v-5" />
      </svg>
    ),
    label: "Learn",
  },
  {
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    label: "Code",
  },
  {
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    label: "Life stuff",
  },
];

export const QuickActions: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mt-4 max-w-2xl mx-auto px-4">
      {actions.map((action) => (
        <button
          key={action.label}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-muted-foreground bg-transparent border border-border rounded-full hover:bg-bg-200 hover:text-foreground transition-colors duration-150"
        >
          {action.icon}
          {action.label}
        </button>
      ))}
    </div>
  );
};
