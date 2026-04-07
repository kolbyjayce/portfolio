import { useRef, useEffect } from "react";
import { InputLine } from "./components/input-line";
import { InputHistory } from "./components/input-history";
import { WelcomeMessage } from "./components/welcome-message";
import { CommandSuggestions } from "./components/command-suggestions";
import { TerminalProvider, useTerminal } from "./hooks/useTerminal";
import styles from "./App.module.css";

function TerminalContent() {
  const { state } = useTerminal();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto-scroll to bottom when new history is added
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [state.history.length]);

  return (
    <div className={styles.container}>
      <div className={styles.terminal}>
        <WelcomeMessage />
        <div className={styles.content} ref={contentRef}>
          <div className={styles.terminalOutput}>
            <InputHistory />
            <InputLine />
          </div>
        </div>
        <div className={styles.commandMenu}>
          <CommandSuggestions />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <TerminalProvider>
      <TerminalContent />
    </TerminalProvider>
  );
}

export default App;
