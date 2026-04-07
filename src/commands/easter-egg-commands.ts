import type { Command, CommandResult, TerminalContext } from '../types/terminal';
import { FileSystemHelper } from '../utils/file-system';

export const konamiCommand: Command = {
  name: 'konami',
  description: 'Activate Konami code',
  category: 'hidden',
  execute: (_args: string[], context: TerminalContext): CommandResult => {
    const content = FileSystemHelper.readFile(context.fileSystem, '/home/kolby/.secrets/konami.txt');
    return {
      output: content || 'Konami code not found!',
      exitCode: 0
    };
  }
};

export const coffeeCommand: Command = {
  name: 'coffee',
  description: 'Get some coffee',
  aliases: ['☕', 'fuel'],
  category: 'hidden',
  execute: (_args: string[], context: TerminalContext): CommandResult => {
    const content = FileSystemHelper.readFile(context.fileSystem, '/home/kolby/.secrets/coffee.ascii');
    return {
      output: content || 'Coffee machine is broken! ☹️',
      exitCode: 0
    };
  }
};

export const jokesCommand: Command = {
  name: 'jokes',
  description: 'Tell me a programming joke',
  aliases: ['joke', 'humor'],
  category: 'hidden',
  execute: (_args: string[], context: TerminalContext): CommandResult => {
    const content = FileSystemHelper.readFile(context.fileSystem, '/home/kolby/.secrets/jokes.txt');
    return {
      output: content || 'Joke database is empty! 😢',
      exitCode: 0
    };
  }
};

export const matrixCommand: Command = {
  name: 'matrix',
  description: 'Enter the Matrix',
  aliases: ['neo', 'redpill', 'bluepill'],
  category: 'hidden',
  execute: (_args: string[], context: TerminalContext): CommandResult => {
    const content = FileSystemHelper.readFile(context.fileSystem, '/home/kolby/.secrets/matrix.txt');
    return {
      output: content || 'There is no Matrix... or is there? 🤔',
      exitCode: 0
    };
  }
};

export const sudoCommand: Command = {
  name: 'sudo',
  description: 'Execute commands as another user',
  category: 'hidden',
  execute: (_args: string[], context: TerminalContext): CommandResult => {
    if (args.length === 0) {
      return {
        output: 'usage: sudo [-h] command',
        exitCode: 1
      };
    }

    const command = args[0];

    // Fun responses for common sudo commands
    const responses: Record<string, string> = {
      'rm': `
╭─────────────────────────────────────╮
│ 🚨 DANGER: DESTRUCTIVE COMMAND 🚨  │
╰─────────────────────────────────────╯

Nice try! This is a portfolio, not a real terminal.
No files were harmed in the making of this command.

P.S. - Always be careful with 'rm' in real systems! 😅`,

      'reboot': `
Rebooting system...
Just kidding! This is a web portfolio.
But if it were real, you'd be waiting a few minutes! ⏰`,

      'shutdown': `
System is shutting down...

Wait, this is just a website!
Thanks for visiting my portfolio though! 👋`,

      'apt': `
apt: command not found

This portfolio runs on JavaScript, not Ubuntu!
Try 'npm' instead... just kidding, that won't work either! 😄`,

      'yum': `
yum: command not found

Wrong package manager for a React portfolio!
Maybe try 'npm install happiness'? 📦`,

      'pacman': `
pacman: command not found

Waka waka waka! 👻
This isn't Arch Linux, it's a web portfolio!`
    };

    if (responses[command]) {
      return {
        output: responses[command],
        exitCode: 0
      };
    }

    return {
      output: `sudo: ${command}: command not found

[sudo] password for ${context.user}:
Sorry, try again.
[sudo] password for ${context.user}:
Sorry, try again.
sudo: 3 incorrect password attempts

Just kidding! This is a portfolio website, not a real terminal! 😉`,
      exitCode: 1
    };
  }
};

export const exitCommand: Command = {
  name: 'exit',
  description: 'Exit the terminal',
  aliases: ['logout', 'quit'],
  category: 'system',
  execute: (): CommandResult => {
    return {
      output: `
Thank you for visiting my terminal portfolio! 🎉

╔════════════════════════════════════════════════════╗
║  Thanks for exploring my interactive portfolio!   ║
║                                                    ║
║  💼 Liked what you saw? Let's connect!            ║
║  📧 Email: kolby@example.com                      ║
║  🔗 LinkedIn: linkedin.com/in/kolby-dev           ║
║  🐙 GitHub: github.com/kolby                      ║
║                                                    ║
║  Type 'clear' to start fresh or just refresh      ║
║  the page to begin again!                         ║
╚════════════════════════════════════════════════════╝

Connection to kolby-portfolio closed.`,
      exitCode: 0
    };
  }
};

export const unameCommand: Command = {
  name: 'uname',
  description: 'System information',
  category: 'system',
  execute: (args: string[]): CommandResult => {
    const showAll = args.includes('-a') || args.includes('--all');

    if (showAll) {
      return {
        output: 'Portfolio 1.0.0 Kolby-Terminal React-Node.js x86_64 TypeScript/JavaScript Web-Browser 2024',
        exitCode: 0
      };
    }

    return {
      output: 'Portfolio',
      exitCode: 0
    };
  }
};

export const uptimeCommand: Command = {
  name: 'uptime',
  description: 'Show system uptime',
  category: 'system',
  execute: (): CommandResult => {
    const startTime = Date.now();
    const sessionTime = Math.floor((Date.now() - startTime) / 1000);
    const hours = Math.floor(sessionTime / 3600);
    const minutes = Math.floor((sessionTime % 3600) / 60);
    const seconds = sessionTime % 60;

    const timeStr = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    return {
      output: `Portfolio up ${timeStr}, 1 user, load average: 0.42, 0.36, 0.31

Fun fact: I've been coding professionally for 4+ years!
This portfolio has been running smoothly since you opened it! ⚡`,
      exitCode: 0
    };
  }
};