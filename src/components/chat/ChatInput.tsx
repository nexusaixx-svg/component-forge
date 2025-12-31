import React, { useState, useRef, useEffect, useCallback } from "react";
import { Icons } from "./Icons";
import { FilePreviewCard } from "./FilePreviewCard";
import { PastedContentCard } from "./PastedContentCard";
import { ModelSelector } from "./ModelSelector";
import { PlusMenu } from "./PlusMenu";
import { VoiceButton } from "./VoiceButton";
import { generateId } from "./utils";
import type { AttachedFile, PastedContent, ChatMessage, Model } from "./types";

interface ChatInputProps {
  onSendMessage?: (data: ChatMessage) => void;
}

const defaultModels: Model[] = [
  { id: "opus-4.5", name: "Opus 4.5", description: "Most capable for complex work" },
  { id: "sonnet-4.5", name: "Sonnet 4.5", description: "Best for everyday tasks" },
  { id: "haiku-4.5", name: "Haiku 4.5", description: "Fastest for quick answers" }
];

export const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage = () => {} }) => {
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<AttachedFile[]>([]);
  const [pastedContent, setPastedContent] = useState<PastedContent[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedModel, setSelectedModel] = useState("sonnet-4.5");
  const [isThinkingEnabled, setIsThinkingEnabled] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 384) + "px";
    }
  }, [message]);

  const handleFiles = useCallback((newFilesList: FileList | File[]) => {
    const newFiles = Array.from(newFilesList).map(file => {
      const isImage = file.type.startsWith('image/') || /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(file.name);
      return {
        id: generateId(),
        file,
        type: isImage ? 'image/unknown' : (file.type || 'application/octet-stream'),
        preview: isImage ? URL.createObjectURL(file) : null,
        uploadStatus: 'pending'
      };
    });

    setFiles(prev => [...prev, ...newFiles]);

    setMessage(prev => {
      if (prev) return prev;
      if (newFiles.length === 1) {
        const f = newFiles[0];
        if (f.type.startsWith('image/')) return "Analyze this image...";
        return "Analyze this document...";
      }
      return `Analyze these ${newFiles.length} files...`;
    });

    newFiles.forEach(f => {
      setTimeout(() => {
        setFiles(prev => prev.map(p => p.id === f.id ? { ...p, uploadStatus: 'complete' } : p));
      }, 800 + Math.random() * 1000);
    });
  }, []);

  const onDragOver = (e: React.DragEvent) => { e.preventDefault(); setIsDragging(true); };
  const onDragLeave = (e: React.DragEvent) => { e.preventDefault(); setIsDragging(false); };
  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files) handleFiles(e.dataTransfer.files);
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    const items = e.clipboardData.items;
    const pastedFiles: File[] = [];
    for (let i = 0; i < items.length; i++) {
      if (items[i].kind === 'file') {
        const file = items[i].getAsFile();
        if (file) pastedFiles.push(file);
      }
    }

    if (pastedFiles.length > 0) {
      e.preventDefault();
      handleFiles(pastedFiles);
      return;
    }

    const text = e.clipboardData.getData('text');
    if (text.length > 300) {
      e.preventDefault();
      const snippet = {
        id: generateId(),
        content: text,
        timestamp: new Date()
      };
      setPastedContent(prev => [...prev, snippet]);

      if (!message) {
        setMessage("Analyze this pasted text...");
      }
    }
  };

  const handleSend = () => {
    if (!message.trim() && files.length === 0 && pastedContent.length === 0) return;
    onSendMessage({ message, files, pastedContent, model: selectedModel, isThinkingEnabled });
    setMessage("");
    setFiles([]);
    setPastedContent([]);
    if (textareaRef.current) textareaRef.current.style.height = 'auto';
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const hasContent = message.trim() || files.length > 0 || pastedContent.length > 0;

  return (
    <div
      className="relative w-full max-w-2xl mx-auto transition-all duration-300 font-sans"
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <div className="flex flex-col mx-2 md:mx-0 items-stretch transition-all duration-200 relative z-10 rounded-2xl cursor-text border border-border shadow-chat hover:shadow-chat-hover focus-within:shadow-chat-focus bg-card font-sans antialiased">
        <div className="flex flex-col px-3 pt-3 pb-2 gap-2">
          {(files.length > 0 || pastedContent.length > 0) && (
            <div className="flex gap-3 overflow-x-auto pb-2 px-1 scrollbar-thin">
              {pastedContent.map(content => (
                <PastedContentCard
                  key={content.id}
                  content={content}
                  onRemove={id => setPastedContent(prev => prev.filter(c => c.id !== id))}
                />
              ))}
              {files.map(file => (
                <FilePreviewCard
                  key={file.id}
                  file={file}
                  onRemove={id => setFiles(prev => prev.filter(f => f.id !== id))}
                />
              ))}
            </div>
          )}

          <div className="relative mb-1">
            <div className="max-h-96 w-full overflow-y-auto font-sans break-words transition-opacity duration-200 min-h-[2.5rem] pl-1">
              <textarea
                ref={textareaRef}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onPaste={handlePaste}
                onKeyDown={handleKeyDown}
                placeholder="How can I help you today?"
                className="w-full bg-transparent border-0 outline-none text-foreground text-base placeholder:text-muted-foreground resize-none overflow-hidden py-0 leading-relaxed block font-normal antialiased"
                rows={1}
                autoFocus
                style={{ minHeight: '1.5em' }}
              />
            </div>
          </div>

          <div className="flex gap-2 w-full items-center">
            <div className="relative flex-1 flex items-center shrink min-w-0 gap-1">
              <PlusMenu 
                onAttachFile={() => fileInputRef.current?.click()}
                onAttachImage={() => imageInputRef.current?.click()}
              />

              <div className="flex shrink min-w-8 shrink-0 group relative">
                <button
                  onClick={() => setIsThinkingEnabled(!isThinkingEnabled)}
                  className={`transition-all duration-200 h-8 w-8 flex items-center justify-center rounded-lg active:scale-95
                    ${isThinkingEnabled
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary'}
                  `}
                  aria-pressed={isThinkingEnabled}
                  aria-label="Extended thinking"
                >
                  <Icons.Thinking className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex flex-row items-center min-w-0 gap-1">
              <div className="shrink-0 p-1 -m-1">
                <ModelSelector
                  models={defaultModels}
                  selectedModel={selectedModel}
                  onSelect={setSelectedModel}
                />
              </div>

              <div>
                {hasContent ? (
                  <button
                    onClick={handleSend}
                    className="inline-flex items-center justify-center relative shrink-0 transition-colors h-8 w-8 rounded-xl active:scale-95 bg-primary text-primary-foreground hover:bg-primary/90 shadow-md"
                    type="button"
                    aria-label="Send message"
                  >
                    <Icons.ArrowUp className="w-4 h-4" />
                  </button>
                ) : (
                  <VoiceButton onClick={() => console.log('Voice mode activated')} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {isDragging && (
        <div className="absolute inset-0 bg-bg-200/90 border-2 border-dashed border-primary rounded-2xl z-50 flex flex-col items-center justify-center backdrop-blur-sm pointer-events-none">
          <Icons.Archive className="w-10 h-10 text-primary mb-2 animate-bounce-subtle" />
          <p className="text-primary font-medium">Drop files to upload</p>
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        multiple
        onChange={(e) => {
          if (e.target.files) handleFiles(e.target.files);
          e.target.value = '';
        }}
        className="hidden"
      />
      <input
        ref={imageInputRef}
        type="file"
        multiple
        accept="image/*"
        onChange={(e) => {
          if (e.target.files) handleFiles(e.target.files);
          e.target.value = '';
        }}
        className="hidden"
      />

      <div className="text-center mt-4">
        <p className="text-xs text-muted-foreground">
          AI can make mistakes. Please check important information.
        </p>
      </div>
    </div>
  );
};
