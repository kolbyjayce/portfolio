import { useEffect, useRef, useState } from "react";
import { Cursor } from "./cursor";
import { useTerminal } from '../hooks/useTerminal';
import styles from "./input-line.module.css";

export function InputLine() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [text, setText] = useState("");
  const { state, executeCommand, getHistoryCommand } = useTerminal();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault();

      if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
        // Printable characters
        setText((prev) => prev + e.key);
      } else if (e.key === "Backspace") {
        setText((prev) => prev.slice(0, -1));
      } else if (e.key === "Enter") {
        if (text.trim()) {
          executeCommand(text);
        }
        setText("");
      } else if (e.key === "ArrowUp") {
        const historyCommand = getHistoryCommand('up');
        setText(historyCommand);
      } else if (e.key === "ArrowDown") {
        const historyCommand = getHistoryCommand('down');
        setText(historyCommand);
      } else if (e.key === "Tab") {
        // TODO: Implement tab completion
        e.preventDefault();
      } else if (e.ctrlKey && e.key === "c") {
        setText("");
      } else if (e.ctrlKey && e.key === "l") {
        executeCommand("clear");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [text, executeCommand, getHistoryCommand]);

  // Keep the hidden input focused for accessibility
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Auto-focus when clicking anywhere in terminal
  useEffect(() => {
    const handleClick = () => {
      inputRef.current?.focus();
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const getPrompt = () => {
    const currentDir = state.currentDirectory;
    const displayDir = currentDir === '/home/kolby' ? '~' : currentDir.replace('/home/kolby', '~');
    return `kolby@portfolio:${displayDir}$ `;
  };

  return (
    <div className={styles.container} onClick={() => inputRef.current?.focus()}>
      <div className={styles.line}>
        <span className={styles.prompt}>{getPrompt()}</span>
        <span className={styles.input}>{text}</span>
        <Cursor />
      </div>
      <input
        ref={inputRef}
        style={{ opacity: 0, position: "absolute", left: "-9999px" }}
        autoFocus
        value=""
        onChange={() => {}} // Prevent React warning
      />
    </div>
  );
}
