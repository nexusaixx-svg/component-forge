import React from "react";
import { Video, FileText, MessageSquare, Sparkles, X } from "lucide-react";

interface SmartRecommendationsProps {
  lastMessage: string;
  onDismiss: () => void;
}

interface Recommendation {
  icon: React.ElementType;
  label: string;
  action: string;
}

export const SmartRecommendations: React.FC<SmartRecommendationsProps> = ({ 
  lastMessage, 
  onDismiss 
}) => {
  // Generate contextual recommendations based on last message
  const getRecommendations = (): Recommendation[] => {
    const lowerMessage = lastMessage.toLowerCase();
    
    if (lowerMessage.includes("blog") || lowerMessage.includes("article") || lowerMessage.includes("write")) {
      return [
        { icon: Video, label: "Turn into video", action: "convert-video" },
        { icon: FileText, label: "Summarize", action: "summarize" },
        { icon: MessageSquare, label: "Make it a tweet", action: "tweet" },
      ];
    }
    
    if (lowerMessage.includes("image") || lowerMessage.includes("photo") || lowerMessage.includes("picture")) {
      return [
        { icon: Sparkles, label: "Enhance image", action: "enhance" },
        { icon: FileText, label: "Add caption", action: "caption" },
        { icon: Video, label: "Create slideshow", action: "slideshow" },
      ];
    }
    
    // Default recommendations
    return [
      { icon: Sparkles, label: "Expand on this", action: "expand" },
      { icon: FileText, label: "Summarize", action: "summarize" },
      { icon: MessageSquare, label: "Ask follow-up", action: "followup" },
    ];
  };

  const recommendations = getRecommendations();

  return (
    <div className="w-full max-w-2xl mt-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="flex items-center justify-between mb-2">
        <p className="text-xs text-muted-foreground flex items-center gap-1.5">
          <Sparkles className="w-3 h-3" />
          Suggested next steps
        </p>
        <button
          onClick={onDismiss}
          className="p-1 hover:bg-secondary rounded-lg transition-colors"
        >
          <X className="w-3 h-3 text-muted-foreground" />
        </button>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {recommendations.map((rec, index) => (
          <button
            key={index}
            onClick={() => console.log(`Action: ${rec.action}`)}
            className="inline-flex items-center gap-2 px-3 py-2 text-sm bg-card border border-border rounded-xl hover:border-primary/50 hover:bg-secondary transition-all duration-200 group"
          >
            <rec.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="text-foreground">{rec.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
