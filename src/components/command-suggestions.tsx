import { useTerminal } from '../hooks/useTerminal';
import styles from './command-suggestions.module.css';

interface CommandButton {
  label: string;
  command: string;
  description: string;
  icon: string;
}

const commandButtons: CommandButton[] = [
  {
    label: 'About Me',
    command: 'about',
    description: 'Learn about my background and experience',
    icon: '👋'
  },
  {
    label: 'Skills',
    command: 'cat skills.txt',
    description: 'View my technical skills and expertise',
    icon: '🛠️'
  },
  {
    label: 'Projects',
    command: 'cat projects.txt',
    description: 'Browse my portfolio and projects',
    icon: '💼'
  },
  {
    label: 'Experience',
    command: 'cat OVERVIEW.txt',
    description: 'Check out my work history',
    icon: '🏢'
  },
  {
    label: 'Contact',
    command: 'contact',
    description: 'Get my contact information',
    icon: '📫'
  },
  {
    label: 'Explore Files',
    command: 'ls',
    description: 'Browse the file system',
    icon: '📁'
  },
  {
    label: 'Help',
    command: 'help',
    description: 'See all available commands',
    icon: '❓'
  }
];

export function CommandSuggestions() {
  const { executeCommand } = useTerminal();

  const handleButtonClick = async (command: string) => {
    // Execute the command which will add it to history and show output
    await executeCommand(command);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.headerIcon}>💡</span>
        <span className={styles.headerText}>Quick Commands</span>
        <span className={styles.helpText}>(Click to try)</span>
      </div>

      <div className={styles.buttonGrid}>
        {commandButtons.map((button) => (
          <button
            key={button.command}
            className={styles.commandButton}
            onClick={() => handleButtonClick(button.command)}
            title={button.description}
            type="button"
          >
            <span className={styles.buttonIcon}>{button.icon}</span>
            <span className={styles.buttonLabel}>{button.label}</span>
          </button>
        ))}
      </div>

      <div className={styles.footer}>
        <span className={styles.footerText}>
          💻 Or type commands directly above • Try 'ls' to explore files
        </span>
      </div>
    </div>
  );
}
