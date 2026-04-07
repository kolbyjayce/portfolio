import type { Command, CommandResult, TerminalContext } from '../types/terminal';
import { FileSystemHelper } from '../utils/file-system';

export const aboutCommand: Command = {
  name: 'about',
  description: 'Learn about me',
  aliases: ['bio'],
  category: 'portfolio',
  execute: (_args: string[], context: TerminalContext): CommandResult => {
    const content = FileSystemHelper.readFile(context.fileSystem, '/home/kolby/about.txt');

    if (content === null) {
      return {
        output: '',
        error: 'About information not found',
        exitCode: 1
      };
    }

    return {
      output: content,
      exitCode: 0
    };
  }
};

export const skillsCommand: Command = {
  name: 'skills',
  description: 'View technical skills',
  aliases: ['tech'],
  category: 'portfolio',
  execute: (args: string[], context: TerminalContext): CommandResult => {
    const category = args[0];

    if (category) {
      // Show specific skill category
      const validCategories = ['frontend', 'backend', 'tools'];
      if (!validCategories.includes(category)) {
        return {
          output: `Invalid category. Available: ${validCategories.join(', ')}`,
          error: '',
          exitCode: 1
        };
      }

      const content = FileSystemHelper.readFile(
        context.fileSystem,
        `/home/kolby/skills/${category}.json`
      );

      if (content === null) {
        return {
          output: '',
          error: `Skills data for ${category} not found`,
          exitCode: 1
        };
      }

      try {
        const data = JSON.parse(content);
        let output = `${category.toUpperCase()} SKILLS\n${'='.repeat(category.length + 7)}\n\n`;

        Object.entries(data).forEach(([section, items]) => {
          output += `${section.charAt(0).toUpperCase() + section.slice(1)}:\n`;

          if (Array.isArray(items)) {
            items.forEach((item: any) => {
              if (typeof item === 'object' && item.name) {
                output += `  • ${item.name}`;
                if (item.level) output += ` (${item.level})`;
                if (item.years) output += ` - ${item.years} year${item.years !== 1 ? 's' : ''}`;
                output += '\n';
              } else {
                output += `  • ${item}\n`;
              }
            });
          }
          output += '\n';
        });

        return { output: output.trim(), exitCode: 0 };
      } catch (error) {
        return {
          output: '',
          error: 'Error parsing skills data',
          exitCode: 1
        };
      }
    }

    // Show skills overview
    return {
      output: `Technical Skills Overview
======================

Use these commands to explore my skills:
  skills frontend    - Frontend technologies
  skills backend     - Backend & databases
  skills tools       - Development tools

Or explore the skills directory:
  ls /home/kolby/skills
  cat /home/kolby/skills/frontend.json`,
      exitCode: 0
    };
  }
};

export const projectsCommand: Command = {
  name: 'projects',
  description: 'Browse my projects',
  aliases: ['portfolio', 'work'],
  category: 'portfolio',
  execute: (args: string[], context: TerminalContext): CommandResult => {
    const projectName = args[0];

    if (projectName) {
      // Show specific project
      const content = FileSystemHelper.readFile(
        context.fileSystem,
        `/home/kolby/projects/${projectName}.md`
      );

      if (content === null) {
        return {
          output: '',
          error: `Project '${projectName}' not found. Use 'projects' to list available projects.`,
          exitCode: 1
        };
      }

      return { output: content, exitCode: 0 };
    }

    // List all projects
    const projects = FileSystemHelper.listDirectory(context.fileSystem, '/home/kolby/projects');

    let output = `My Projects
===========

`;

    projects.forEach(project => {
      if (project.type === 'file' && project.name.endsWith('.md')) {
        const projectName = project.name.replace('.md', '');
        output += `• ${projectName}\n`;
      }
    });

    output += `
Usage:
  projects <name>        View project details
  ls /home/kolby/projects  List project files
  cat /home/kolby/projects/project1.md  Read project file`;

    return { output, exitCode: 0 };
  }
};

export const experienceCommand: Command = {
  name: 'experience',
  description: 'Work history',
  aliases: ['exp', 'career'],
  category: 'portfolio',
  execute: (args: string[], context: TerminalContext): CommandResult => {
    const target = args[0] || 'current';

    let filename: string;
    if (target === 'current' || target === 'recent') {
      filename = 'current.txt';
    } else if (target === 'previous' || target === 'past') {
      filename = 'previous.txt';
    } else {
      return {
        output: `Work Experience
==============

Available options:
  experience current     - Current position
  experience previous    - Previous roles

Or explore the experience directory:
  ls /home/kolby/experience`,
        exitCode: 0
      };
    }

    const content = FileSystemHelper.readFile(
      context.fileSystem,
      `/home/kolby/experience/${filename}`
    );

    if (content === null) {
      return {
        output: '',
        error: 'Experience information not found',
        exitCode: 1
      };
    }

    return { output: content, exitCode: 0 };
  }
};

export const contactCommand: Command = {
  name: 'contact',
  description: 'Get in touch',
  aliases: ['reach', 'connect'],
  category: 'portfolio',
  execute: (args: string[], context: TerminalContext): CommandResult => {
    const platform = args[0];

    if (platform) {
      const validPlatforms = ['email', 'linkedin', 'github', 'website'];
      if (!validPlatforms.includes(platform)) {
        return {
          output: `Invalid platform. Available: ${validPlatforms.join(', ')}`,
          exitCode: 1
        };
      }

      const content = FileSystemHelper.readFile(
        context.fileSystem,
        `/home/kolby/contact/${platform}.txt`
      );

      if (content === null) {
        return {
          output: '',
          error: `Contact info for ${platform} not found`,
          exitCode: 1
        };
      }

      return {
        output: `${platform.toUpperCase()}: ${content}`,
        exitCode: 0
      };
    }

    // Show all contact information
    const contactDir = FileSystemHelper.listDirectory(context.fileSystem, '/home/kolby/contact');
    let output = `Contact Information
==================

`;

    contactDir.forEach(file => {
      if (file.type === 'file') {
        const platform = file.name.replace('.txt', '');
        const content = FileSystemHelper.readFile(
          context.fileSystem,
          `/home/kolby/contact/${file.name}`
        );

        output += `${platform.toUpperCase()}: ${content}\n`;
      }
    });

    output += `
Usage:
  contact <platform>     Show specific contact info
  contact email          Show email address
  contact linkedin       Show LinkedIn profile`;

    return { output, exitCode: 0 };
  }
};