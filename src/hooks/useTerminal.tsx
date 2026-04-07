import { createContext, useContext, useReducer, useCallback } from 'react';
import type { ReactNode } from 'react';
import type { TerminalState, HistoryEntry, TerminalContext } from '../types/terminal';
import { CommandRegistry } from '../utils/command-registry';
import { portfolioFileSystem } from '../data/file-system';

// Import all commands
import {
  lsCommand,
  cdCommand,
  pwdCommand,
  catCommand,
  clearCommand,
  whoamiCommand,
  helpCommand,
  historyCommand
} from '../commands/core-commands';

import {
  aboutCommand,
  skillsCommand,
  projectsCommand,
  experienceCommand,
  contactCommand
} from '../commands/portfolio-commands';

import {
  konamiCommand,
  coffeeCommand,
  jokesCommand,
  matrixCommand,
  sudoCommand,
  exitCommand,
  unameCommand,
  uptimeCommand
} from '../commands/easter-egg-commands';

type TerminalAction =
  | { type: 'ADD_HISTORY'; payload: HistoryEntry }
  | { type: 'CHANGE_DIRECTORY'; payload: string }
  | { type: 'CLEAR_HISTORY' }
  | { type: 'ADD_COMMAND_HISTORY'; payload: string }
  | { type: 'SET_HISTORY_INDEX'; payload: number };

const initialState: TerminalState = {
  history: [],
  currentDirectory: '/home/kolby',
  commandHistory: [],
  historyIndex: -1
};

function terminalReducer(state: TerminalState, action: TerminalAction): TerminalState {
  switch (action.type) {
    case 'ADD_HISTORY':
      return {
        ...state,
        history: [...state.history, action.payload]
      };
    case 'CHANGE_DIRECTORY':
      return {
        ...state,
        currentDirectory: action.payload
      };
    case 'CLEAR_HISTORY':
      return {
        ...state,
        history: []
      };
    case 'ADD_COMMAND_HISTORY':
      return {
        ...state,
        commandHistory: [...state.commandHistory, action.payload],
        historyIndex: -1
      };
    case 'SET_HISTORY_INDEX':
      return {
        ...state,
        historyIndex: action.payload
      };
    default:
      return state;
  }
}

interface TerminalContextType {
  state: TerminalState;
  executeCommand: (command: string) => Promise<void>;
  clearHistory: () => void;
  getHistoryCommand: (direction: 'up' | 'down') => string;
}

const TerminalReactContext = createContext<TerminalContextType | undefined>(undefined);

// Initialize command registry
const commandRegistry = new CommandRegistry();

// Register all commands
const commands = [
  // Core commands
  lsCommand,
  cdCommand,
  pwdCommand,
  catCommand,
  clearCommand,
  whoamiCommand,
  helpCommand,
  historyCommand,
  // Portfolio commands
  aboutCommand,
  skillsCommand,
  projectsCommand,
  experienceCommand,
  contactCommand,
  // Easter egg commands
  konamiCommand,
  coffeeCommand,
  jokesCommand,
  matrixCommand,
  sudoCommand,
  exitCommand,
  unameCommand,
  uptimeCommand
];

commands.forEach(command => commandRegistry.register(command));

interface TerminalProviderProps {
  children: ReactNode;
}

export function TerminalProvider({ children }: TerminalProviderProps) {
  const [state, dispatch] = useReducer(terminalReducer, initialState);

  const executeCommand = useCallback(async (command: string) => {
    const trimmedCommand = command.trim();

    // Add to command history if not empty
    if (trimmedCommand) {
      dispatch({ type: 'ADD_COMMAND_HISTORY', payload: trimmedCommand });
    }

    // Create terminal context
    const context: TerminalContext = {
      currentDirectory: state.currentDirectory,
      user: 'kolby',
      hostname: 'portfolio',
      fileSystem: portfolioFileSystem,
      setCurrentDirectory: (newDir: string) => {
        dispatch({ type: 'CHANGE_DIRECTORY', payload: newDir });
      }
    };

    // Execute command
    const result = await commandRegistry.executeCommand(trimmedCommand, context);

    // Handle clear command specially
    if (trimmedCommand === 'clear' || trimmedCommand === 'cls') {
      dispatch({ type: 'CLEAR_HISTORY' });
      return;
    }

    // Add to history
    const historyEntry: HistoryEntry = {
      id: Date.now(),
      command: trimmedCommand,
      output: result.output,
      error: result.error,
      timestamp: new Date(),
      directory: state.currentDirectory
    };

    dispatch({ type: 'ADD_HISTORY', payload: historyEntry });
  }, [state.currentDirectory]);

  const clearHistory = useCallback(() => {
    dispatch({ type: 'CLEAR_HISTORY' });
  }, []);

  const getHistoryCommand = useCallback((direction: 'up' | 'down') => {
    const { commandHistory, historyIndex } = state;

    if (commandHistory.length === 0) return '';

    let newIndex = historyIndex;

    if (direction === 'up') {
      newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
    } else {
      newIndex = historyIndex === -1 ? -1 : Math.min(commandHistory.length - 1, historyIndex + 1);
      if (newIndex === commandHistory.length - 1) newIndex = -1;
    }

    dispatch({ type: 'SET_HISTORY_INDEX', payload: newIndex });

    return newIndex === -1 ? '' : commandHistory[newIndex];
  }, [state.commandHistory, state.historyIndex]);

  const value: TerminalContextType = {
    state,
    executeCommand,
    clearHistory,
    getHistoryCommand
  };

  return (
    <TerminalReactContext.Provider value={value}>
      {children}
    </TerminalReactContext.Provider>
  );
}

export function useTerminal(): TerminalContextType {
  const context = useContext(TerminalReactContext);
  if (context === undefined) {
    throw new Error('useTerminal must be used within a TerminalProvider');
  }
  return context;
}