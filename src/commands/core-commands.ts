import type { Command, CommandResult, TerminalContext } from '../types/terminal';
import { FileSystemHelper } from '../utils/file-system';

export const lsCommand: Command = {
  name: 'ls',
  description: 'List directory contents',
  aliases: ['dir'],
  category: 'navigation',
  execute: (args: string[], context: TerminalContext): CommandResult => {
    // Parse flags, including combined flags like -al
    let showHidden = false;
    let longFormat = false;

    args.forEach(arg => {
      if (arg === '-a' || arg === '--all') {
        showHidden = true;
      } else if (arg === '-l' || arg === '--long') {
        longFormat = true;
      } else if (arg.startsWith('-') && arg.length > 2) {
        // Handle combined flags like -al, -la
        if (arg.includes('a')) showHidden = true;
        if (arg.includes('l')) longFormat = true;
      }
    });

    // Get the target directory (default to current directory)
    const targetDir = args.find(arg => !arg.startsWith('-')) || context.currentDirectory;

    if (!FileSystemHelper.fileExists(context.fileSystem, targetDir, context.currentDirectory)) {
      return {
        output: '',
        error: `ls: cannot access '${targetDir}': No such file or directory`,
        exitCode: 2
      };
    }

    if (!FileSystemHelper.isDirectory(context.fileSystem, targetDir, context.currentDirectory)) {
      return {
        output: FileSystemHelper.getBaseName(targetDir),
        exitCode: 0
      };
    }

    const fullPath = targetDir.startsWith('/')
      ? targetDir
      : FileSystemHelper.joinPath(context.currentDirectory, targetDir);

    const items = FileSystemHelper.listDirectory(context.fileSystem, fullPath, showHidden);

    if (items.length === 0) {
      return { output: '', exitCode: 0 };
    }

    if (longFormat) {
      const output = items.map(item => {
        const type = item.type === 'directory' ? 'd' : '-';
        const permissions = item.type === 'directory' ? 'rwxr-xr-x' : 'rw-r--r--';
        const size = item.type === 'file' ? (item.content?.length || 0).toString().padStart(8) : '    4096';
        const date = new Date().toISOString().slice(0, 16).replace('T', ' ');

        return `${type}${permissions}  1 ${context.user} ${context.user} ${size} ${date} ${item.name}`;
      }).join('\n');

      return { output, exitCode: 0 };
    } else {
      // Regular format - colorize directories and files differently
      const output = items.map(item => {
        if (item.type === 'directory') {
          return `\x1b[34m${item.name}\x1b[0m`; // Blue for directories
        } else if (item.executable) {
          return `\x1b[32m${item.name}\x1b[0m`; // Green for executables
        } else {
          return item.name; // Default color for files
        }
      }).join('  ');

      return { output, exitCode: 0 };
    }
  }
};

export const cdCommand: Command = {
  name: 'cd',
  description: 'Change directory',
  category: 'navigation',
  execute: (args: string[], context: TerminalContext): CommandResult => {
    const targetDir = args[0] || '/home/kolby';

    let fullPath: string;
    if (targetDir.startsWith('/')) {
      fullPath = FileSystemHelper.normalizePath(targetDir);
    } else if (targetDir === '~') {
      fullPath = '/home/kolby';
    } else if (targetDir === '..') {
      fullPath = FileSystemHelper.getParentPath(context.currentDirectory);
    } else {
      fullPath = FileSystemHelper.joinPath(context.currentDirectory, targetDir);
    }

    if (!FileSystemHelper.fileExists(context.fileSystem, fullPath)) {
      return {
        output: '',
        error: `cd: ${targetDir}: No such file or directory`,
        exitCode: 1
      };
    }

    if (!FileSystemHelper.isDirectory(context.fileSystem, fullPath)) {
      return {
        output: '',
        error: `cd: ${targetDir}: Not a directory`,
        exitCode: 1
      };
    }

    context.setCurrentDirectory(fullPath);
    return { output: '', exitCode: 0 };
  }
};

export const pwdCommand: Command = {
  name: 'pwd',
  description: 'Print working directory',
  category: 'navigation',
  execute: (_args: string[], context: TerminalContext): CommandResult => {
    return {
      output: context.currentDirectory,
      exitCode: 0
    };
  }
};

export const catCommand: Command = {
  name: 'cat',
  description: 'Display file contents',
  category: 'navigation',
  execute: (args: string[], context: TerminalContext): CommandResult => {
    if (args.length === 0) {
      return {
        output: '',
        error: 'cat: missing file operand',
        exitCode: 1
      };
    }

    const results: string[] = [];
    for (const filename of args) {
      if (!FileSystemHelper.fileExists(context.fileSystem, filename, context.currentDirectory)) {
        return {
          output: '',
          error: `cat: ${filename}: No such file or directory`,
          exitCode: 1
        };
      }

      if (FileSystemHelper.isDirectory(context.fileSystem, filename, context.currentDirectory)) {
        return {
          output: '',
          error: `cat: ${filename}: Is a directory`,
          exitCode: 1
        };
      }

      const content = FileSystemHelper.readFile(context.fileSystem, filename, context.currentDirectory);
      if (content !== null) {
        results.push(content);
      }
    }

    return {
      output: results.join('\n'),
      exitCode: 0
    };
  }
};

export const clearCommand: Command = {
  name: 'clear',
  description: 'Clear the terminal screen',
  aliases: ['cls'],
  category: 'system',
  execute: (): CommandResult => {
    return {
      output: '\x1b[2J\x1b[H', // ANSI escape codes for clear screen
      exitCode: 0
    };
  }
};

export const whoamiCommand: Command = {
  name: 'whoami',
  description: 'Display current user',
  category: 'system',
  execute: (_args: string[], context: TerminalContext): CommandResult => {
    return {
      output: context.user,
      exitCode: 0
    };
  }
};

export const helpCommand: Command = {
  name: 'help',
  description: 'Display available commands',
  aliases: ['?'],
  category: 'system',
  execute: (): CommandResult => {
    const output = `Available Commands:

Navigation:
  ls [options] [path]    List directory contents
  cd [path]              Change directory
  pwd                    Print working directory
  cat <file>             Display file contents

Portfolio:
  about                  Learn about me
  skills                 View technical skills
  projects               Browse my projects
  experience             Work history
  contact                Get in touch

System:
  help                   Show this help message
  clear                  Clear terminal screen
  whoami                 Display current user
  history                Show command history

Examples:
  ls -a                  Show hidden files
  cd /home/kolby         Navigate to home
  cat about.txt          Read about file

Hint: Use 'ls -a' to find hidden files! 👀`;

    return {
      output,
      exitCode: 0
    };
  }
};

export const historyCommand: Command = {
  name: 'history',
  description: 'Show command history',
  category: 'system',
  execute: (): CommandResult => {
    // This will be implemented when we add the terminal context with history
    return {
      output: 'Command history will be available once terminal state is implemented.',
      exitCode: 0
    };
  }
};
