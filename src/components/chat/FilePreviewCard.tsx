import React from "react";
import { Icons } from "./Icons";
import { formatFileSize } from "./utils";
import type { AttachedFile } from "./types";

interface FilePreviewCardProps {
  file: AttachedFile;
  onRemove: (id: string) => void;
}

export const FilePreviewCard: React.FC<FilePreviewCardProps> = ({ file, onRemove }) => {
  const isImage = file.type.startsWith("image/") && file.preview;

  return (
    <div className="relative group flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden border border-bg-300 bg-bg-200 transition-all hover:border-text-400">
      {isImage ? (
        <div className="w-full h-full relative">
          <img src={file.preview!} alt={file.file.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/20 group-hover:bg-transparent transition-colors" />
        </div>
      ) : (
        <div className="w-full h-full p-3 flex flex-col justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-bg-300 rounded">
              <Icons.FileText className="w-4 h-4 text-text-300" />
            </div>
            <span className="text-[10px] font-medium text-text-400 uppercase tracking-wider truncate">
              {file.file.name.split('.').pop()}
            </span>
          </div>
          <div className="space-y-0.5">
            <p className="text-xs font-medium text-text-200 truncate" title={file.file.name}>
              {file.file.name}
            </p>
            <p className="text-[10px] text-text-500">
              {formatFileSize(file.file.size)}
            </p>
          </div>
        </div>
      )}

      <button
        onClick={() => onRemove(file.id)}
        className="absolute top-1 right-1 p-1 bg-foreground/50 hover:bg-foreground/70 rounded-full text-background opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <Icons.X className="w-3 h-3" />
      </button>

      {file.uploadStatus === 'uploading' && (
        <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
          <Icons.Loader2 className="w-5 h-5 text-background animate-spin" />
        </div>
      )}
    </div>
  );
};
