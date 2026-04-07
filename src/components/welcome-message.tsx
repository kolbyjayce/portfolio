import { useEffect, useState } from 'react';
import { useTerminal } from '../hooks/useTerminal';
import styles from './welcome-message.module.css';

export function WelcomeMessage() {
  const { state, executeCommand } = useTerminal();
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // Hide welcome message after any command is executed
    if (state.history.length > 0) {
      setShowWelcome(false);
    }
  }, [state.history.length]);

  if (!showWelcome) {
    return null;
  }

  return (
    <div className={styles.welcome}>
      <pre className={styles.ascii}>
        {`
██╗  ██╗ ██████╗ ██╗     ██████╗ ██╗   ██╗███████╗
██║ ██╔╝██╔═══██╗██║     ██╔══██╗╚██╗ ██╔╝██╔════╝
█████╔╝ ██║   ██║██║     ██████╔╝ ╚████╔╝ ███████╗
██╔═██╗ ██║   ██║██║     ██╔══██╗  ╚██╔╝  ╚════██║
██║  ██╗╚██████╔╝███████╗██████╔╝   ██║   ███████║
╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═════╝    ╚═╝   ╚══════╝

██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗
██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝
`}
      </pre>

      <div className={styles.subtitle}>
        <p className={styles.tagline}>Interactive Portfolio • Full Stack Developer</p>
        <div className={styles.motd}>
          <div className={styles.motdContent}>
            <p>Type 'help' to see available commands</p>
            <p>Type 'about' to learn about me</p>
            <p>Type 'projects' to view my work</p>
            <p>Type 'ls' to explore the file system</p>
          </div>
        </div>
      </div>
    </div>
  );
}
