export interface AttachedFile {
  id: string;
  file: File;
  type: string;
  preview: string | null;
  uploadStatus: string;
  content?: string;
}

export interface PastedContent {
  id: string;
  content: string;
  timestamp: Date;
}

export interface Model {
  id: string;
  name: string;
  description: string;
  badge?: string;
}

export interface ChatMessage {
  message: string;
  files: AttachedFile[];
  pastedContent: PastedContent[];
  model: string;
  isThinkingEnabled: boolean;
}
