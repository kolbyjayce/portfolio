import { useTerminal } from '../hooks/useTerminal';
import { AnsiText } from './ansi-text';
import styles from './input-history.module.css';

export function InputHistory() {
  const { state } = useTerminal();

  return (
    <div className={styles.history}>
      {state.history.map((entry) => (
        <div key={entry.id} className={styles.entry}>
          <div className={styles.command}>
            <span className={styles.prompt}>
              {state.currentDirectory === '/' ? '' : state.currentDirectory.split('/').pop()}
              @kolby-portfolio:
              {entry.directory === '/home/kolby' ? '~' : entry.directory.replace('/home/kolby', '~')}
              $
            </span>
            <span className={styles.commandText}>{entry.command}</span>
          </div>

          {entry.error ? (
            <div className={styles.error}>{entry.error}</div>
          ) : entry.output ? (
            <pre className={styles.output}>
              <AnsiText>{entry.output}</AnsiText>
            </pre>
          ) : null}
        </div>
      ))}
    </div>
  );
}
