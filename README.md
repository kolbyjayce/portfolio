# Kolby's Terminal Portfolio

An interactive terminal-style portfolio website built with React, TypeScript, and Vite. Experience a fully functional Linux-like terminal interface to explore my skills, projects, and experience.

## ✨ Features

- **Interactive Terminal Interface**: Full Linux-like terminal with command history, tab completion, and keyboard shortcuts
- **Portfolio Commands**: Dedicated commands to explore skills, projects, and experience
- **Virtual File System**: Navigate through a realistic directory structure containing portfolio content
- **Easter Eggs**: Hidden commands and fun surprises for curious visitors
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **GitHub Pages Deployment**: Automatically deployed via GitHub Actions

## 🎮 Available Commands

### Navigation
- `ls [options] [path]` - List directory contents
- `cd [path]` - Change directory
- `pwd` - Print working directory
- `cat <file>` - Display file contents

### Portfolio
- `about` - Learn about me
- `skills [category]` - View technical skills (frontend, backend, tools)
- `projects [name]` - Browse portfolio projects
- `experience [type]` - Work history and experience
- `contact [platform]` - Contact information

### System
- `help` - Show all available commands
- `clear` - Clear terminal screen
- `whoami` - Display current user
- `history` - Show command history
- `exit` - Fun goodbye message

### Hidden Commands
Try discovering these yourself! Hint: `ls -a` to find hidden files 👀

## 🚀 Development

### Prerequisites
- [Bun](https://bun.sh/) (recommended) or [Node.js](https://nodejs.org/)

### Getting Started

1. Clone the repository:
```bash
git clone https://github.com/kolby/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
bun install
# or
npm install
```

3. Start development server:
```bash
bun run dev
# or
npm run dev
```

4. Build for production:
```bash
bun run build
# or
npm run build
```

5. Preview production build:
```bash
bun run preview
# or
npm run preview
```

## 📦 Deployment

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

### Setup GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. Push to the `main` branch to trigger deployment

### Manual Deployment

To deploy manually:

```bash
bun run build
# Upload the dist/ folder to your hosting provider
```

### Environment Variables

For production builds, the following environment variables are used:
- `NODE_ENV=production` - Enables production optimizations
- Base URL is automatically set to `/portfolio/` for GitHub Pages

## 🛠️ Technical Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite 6
- **Styling**: CSS Modules, Custom CSS
- **Package Manager**: Bun (with npm fallback)
- **Deployment**: GitHub Actions + GitHub Pages
- **Linting**: ESLint with TypeScript support

## 📁 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── src/
│   ├── commands/               # Terminal command implementations
│   ├── components/             # React components
│   ├── data/                   # Portfolio data and file system
│   ├── hooks/                  # React hooks and context
│   ├── types/                  # TypeScript type definitions
│   ├── utils/                  # Utility functions
│   └── App.tsx                 # Main application component
├── public/                     # Static assets
└── dist/                       # Production build output
```

## 🎯 Key Features Implementation

### Command System
- Modular command registry with category-based organization
- Async command execution with proper error handling
- Command aliases and help system

### Virtual File System
- Hierarchical directory structure
- File and directory navigation
- Hidden files and easter eggs
- Realistic Unix-like permissions display

### Terminal Interface
- Command history with arrow key navigation
- Auto-focus and click-to-focus behavior
- ANSI color code support
- Responsive terminal window design

## 🤝 Contributing

Feel free to explore the code, suggest improvements, or use this as inspiration for your own terminal portfolio!

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Connect

- **Portfolio**: [Live Demo](https://kolby.github.io/portfolio/)
- **Email**: kolby@example.com
- **LinkedIn**: [linkedin.com/in/kolby-dev](https://linkedin.com/in/kolby-dev)
- **GitHub**: [github.com/kolby](https://github.com/kolby)
