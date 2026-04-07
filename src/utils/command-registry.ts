import type { Command, CommandResult, TerminalContext } from '../types/terminal';

export class CommandRegistry {
  private commands: Map<string, Command> = new Map();
  private aliases: Map<string, string> = new Map();

  register(command: Command): void {
    this.commands.set(command.name, command);

    // Register aliases
    if (command.aliases) {
      command.aliases.forEach(alias => {
        this.aliases.set(alias, command.name);
      });
    }
  }

  getCommand(name: string): Command | undefined {
    // Check if it's an alias first
    const aliasTarget = this.aliases.get(name);
    if (aliasTarget) {
      return this.commands.get(aliasTarget);
    }

    return this.commands.get(name);
  }

  getAllCommands(): Command[] {
    return Array.from(this.commands.values());
  }

  getCommandsByCategory(category: string): Command[] {
    return this.getAllCommands().filter(cmd => cmd.category === category);
  }

  async executeCommand(
    input: string,
    context: TerminalContext
  ): Promise<CommandResult> {
    const trimmedInput = input.trim();
    if (!trimmedInput) {
      return { output: '', exitCode: 0 };
    }

    const [commandName, ...args] = this.parseCommand(trimmedInput);
    const command = this.getCommand(commandName);

    if (!command) {
      return {
        output: '',
        error: `bash: ${commandName}: command not found`,
        exitCode: 127
      };
    }

    try {
      const result = await command.execute(args, context);
      return result;
    } catch (error) {
      return {
        output: '',
        error: `Error executing command: ${error instanceof Error ? error.message : String(error)}`,
        exitCode: 1
      };
    }
  }

  private parseCommand(input: string): string[] {
    // Simple command parsing - split by spaces but preserve quoted strings
    const args: string[] = [];
    let current = '';
    let inQuotes = false;
    let quoteChar = '';

    for (let i = 0; i < input.length; i++) {
      const char = input[i];

      if ((char === '"' || char === "'") && !inQuotes) {
        inQuotes = true;
        quoteChar = char;
      } else if (char === quoteChar && inQuotes) {
        inQuotes = false;
        quoteChar = '';
      } else if (char === ' ' && !inQuotes) {
        if (current) {
          args.push(current);
          current = '';
        }
      } else {
        current += char;
      }
    }

    if (current) {
      args.push(current);
    }

    return args;
  }

  getCommandCompletions(partial: string): string[] {
    const completions: string[] = [];

    // Get command completions
    for (const [name] of this.commands) {
      if (name.startsWith(partial)) {
        completions.push(name);
      }
    }

    // Get alias completions
    for (const [alias] of this.aliases) {
      if (alias.startsWith(partial)) {
        completions.push(alias);
      }
    }

    return completions.sort();
  }
}