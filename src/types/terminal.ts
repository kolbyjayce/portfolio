export interface CommandResult {
  output: string;
  error?: string;
  exitCode: number;
}

export interface Command {
  name: string;
  description: string;
  aliases?: string[];
  execute: (args: string[], context: TerminalContext) => CommandResult | Promise<CommandResult>;
  category?: 'navigation' | 'portfolio' | 'system' | 'hidden';
}

export interface TerminalContext {
  currentDirectory: string;
  user: string;
  hostname: string;
  fileSystem: FileSystem;
  setCurrentDirectory: (path: string) => void;
}

export interface HistoryEntry {
  id: number;
  command: string;
  output: string;
  error?: string;
  timestamp: Date;
  directory: string;
}

export interface FileSystemNode {
  name: string;
  type: 'file' | 'directory';
  content?: string;
  children?: { [key: string]: FileSystemNode };
  hidden?: boolean;
  executable?: boolean;
}

export interface FileSystem {
  [key: string]: FileSystemNode;
}

export interface TerminalState {
  history: HistoryEntry[];
  currentDirectory: string;
  commandHistory: string[];
  historyIndex: number;
}