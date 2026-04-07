import type { FileSystem } from '../types/terminal';

export const portfolioFileSystem: FileSystem = {
  home: {
    name: 'home',
    type: 'directory',
    children: {
      kolby: {
        name: 'kolby',
        type: 'directory',
        children: {
          'OVERVIEW.txt': {
            name: 'OVERVIEW.txt',
            type: 'file',
            content: `📋 KOLBY CHRISTIANSEN - PORTFOLIO SUMMARY
===============================================

Software Engineer @ Spudnik (May 2022 - Present)
hi@kolby.sh | +1 720-773-0632
BS Computer Science - Idaho State University

CORE TECHNOLOGIES
• Languages: TypeScript, Python, Java, C++, C, C#, Rust, SQL, PHP
• Frameworks: React, React Native, Express, Flask, Node.js, Jest
• Tech Stack: AWS EC2, Docker, Redis, GitHub Actions, tRPC, PostgreSQL

KEY ACHIEVEMENTS
• 40% faster compression vs jszip for 500MB+ software directories
• Reduced engineering change implementation: 5 days → 8 hours
• Real-time telemetry pipeline for 300+ machines across 5 countries
• 90%+ accuracy CNN model for agricultural image classification
• Modernized legacy PHP → TypeScript/React, resolved 45 CVEs

NOTABLE PROJECTS
1. Engineering Change System (Lead Developer, 3-person team)
   → 250+ part revisions/week, 10k+ daily API requests, <100ms response

2. GrosToGo iOS App (Personal Project)
   → React Native, offline-first, tRPC, 95% test coverage

3. AI Image Classification (Agricultural automation)
   → CNN/TensorFlow, real-time processing, $50K savings/machine

Quick Navigation:
• 'cat about.txt' - Detailed background
• 'ls projects/' - View all projects
• 'ls skills/' - Technical skills breakdown
• 'cat experience/current.txt' - Spudnik role details
• 'ls contact/' - Contact information`
          },

          'about.txt': {
            name: 'about.txt',
            type: 'file',
            content: `About Kolby Christiansen
========================

Hello! I'm a passionate Software Engineer at Spudnik with expertise in
full-stack development, agricultural technology, and real-time systems.

I graduated from Idaho State University with a Bachelor of Science in
Computer Science and have been building
solutions in the agricultural equipment industry since May 2022.

I specialize in architecting high-performance systems from the ground up, real-time telemetry,
and modernizing legacy applications. My work directly impacts 300+ machines
across 5 countries, processing 250+ engineering changes per week.

When I'm not coding, you can find me exploring new technologies,
building personal projects like iOS apps for grocery automation, or working on
AI/ML solutions for personal automation.

Quick Commands:
• 'cat OVERVIEW.txt' - Complete executive summary
• 'cat skills.txt' - All technical skills
• 'cat projects.txt' - All projects and achievements
• 'ls contact/' - Contact information
`
          },

          'README.md': {
            name: 'README.md',
            type: 'file',
            content: `# Kolby Christiansen - Software Engineer Portfolio

Welcome to my interactive terminal portfolio!

## Quick Access Guide

### 📁 Key Files (All in Home Directory - One-Click Access!)
- \`cat OVERVIEW.txt\` - **EXECUTIVE SUMMARY** (Perfect for managers!)
- \`cat about.txt\` - Detailed background & bio
- \`cat skills.txt\` - **COMPLETE SKILLS** (All skills in one view)
- \`cat projects.txt\` - **ALL PROJECTS** (All projects in one view)
- \`cat experience.txt\` - Experience summary (links to OVERVIEW.txt)
- \`ls contact/\` - Contact information

### 🚀 Quick Access for Managers
- \`cat OVERVIEW.txt\` - Complete executive summary with all key info
- \`cat skills.txt\` - All technical skills and achievements
- \`cat projects.txt\` - All 3 major projects with business impact
- Perfect for non-technical stakeholders and hiring managers!

### 💼 Professional Highlights
- **Current Role:** Software Engineer at Spudnik (May 2022 - Present)
- **Education:** BS Computer Science, Idaho State University (2021-2024)
- **Specialization:** Agricultural tech, real-time systems, AI/ML

### 📊 Key Achievements
- 40% faster compression than industry standard (jszip)
- Reduced implementation time from 5 days to 8 hours
- 90%+ accuracy in AI image classification
- 300+ machines supported across 5 countries

## Available Commands

### Navigation & Files
- \`ls [path]\` - List files and directories
- \`cd <path>\` - Change directory
- \`cat <file>\` - Display file contents
- \`pwd\` - Show current directory

### Portfolio Commands
- \`about\` - Learn about me
- \`skills\` - View technical skills
- \`projects\` - Browse my projects
- \`experience\` - Work history
- \`contact\` - Get in touch

### System Commands
- \`help\` - Show all commands
- \`clear\` - Clear terminal
- \`whoami\` - Current user info
- \`history\` - Command history

**Pro Tip:** Use \`ls -a\` to discover hidden easter eggs! 🎮

Happy exploring!`
          },

          'skills.txt': {
            name: 'skills.txt',
            type: 'file',
            content: `KOLBY CHRISTIANSEN - TECHNICAL SKILLS
========================================

PROGRAMMING LANGUAGES
• TypeScript (Expert) - Production systems at Spudnik
• JavaScript (Expert) - Full-stack development
• Python (Advanced) - AI/ML, automation scripts
• Java (Intermediate) - Backend services
• C++ (Intermediate) - Performance-critical applications
• C (Intermediate) - Low-level programming
• C# (Intermediate) - Desktop applications
• Rust (Learning) - Systems programming
• SQL (Advanced) - Database optimization
• PHP (Advanced) - Legacy system modernization

FRAMEWORKS & TECHNOLOGIES
• React (Expert) - Component optimization, 70% bundle reduction
• Express.js (Expert) - RESTful APIs, 10k+ daily requests
• Node.js (Expert) - Custom streaming compression package
• Flask (Advanced) - Python web services
• React Native (Advanced) - GrosToGo iOS app, offline-first architecture
• Jest/Vitest (Advanced) - 95% code coverage, 50+ tRPC endpoints

INFRASTRUCTURE & TOOLS
• AWS EC2 (Advanced) - Production deployments, infrastructure
• Docker (Expert) - Zero-downtime rolling updates, containerization
• Redis (Advanced) - Real-time telemetry pipeline caching
• GitHub Actions (Expert) - Automated security scanning, CI/CD
• tRPC (Expert) - Type-safe APIs, 50+ endpoints
• PostgreSQL (Expert) - Query optimization, <100ms response times

SPECIALIZED TECHNOLOGIES
• WebSockets (Expert) - Real-time telemetry for 300+ machines
• Keras & TensorFlow (Intermediate) - CNN classification, 90% accuracy
• Instacart API (Intermediate) - Automated grocery ordering
• JWT & Session Auth (Expert) - Secure authentication systems
• ERP Integration (Advanced) - Automated workflows, part management

KEY ACHIEVEMENTS
• 40% faster compression vs jszip for 500MB+ directories
• Reduced API response times to <100ms with optimization
• 70% reduction in initial bundle size through optimization
• 95% code coverage across 50+ tRPC endpoints
• 90%+ accuracy in CNN-based vegetable classification
• 5 days → 8 hours: Engineering change implementation time

BUSINESS IMPACT
• 300+ machines across 5 countries supported
• 250+ part revisions processed per week
• 10,000+ daily API requests handled
• 500+ daily document uploads managed
• 45 high-severity CVEs resolved
• $50K annually projected savings per machine

SPECIALIZATIONS
• Real-time telemetry systems
• Legacy system modernization
• Performance optimization
• Agricultural technology
• AI/ML integration
• Offline-first mobile architecture
`
          },

          'projects.txt': {
            name: 'projects.txt',
            type: 'file',
            content: `KOLBY CHRISTIANSEN - NOTABLE PROJECTS
=======================================

PROJECT 1: ENGINEERING CHANGE SYSTEM
Duration: May 2022 - Jul 2025 | Role: Lead Full Stack Developer (3-person team)
Tech Stack: TypeScript, React, Express.js, PostgreSQL, ERP Integration

BUSINESS IMPACT
• Reduced machine change implementation: 5 days → 8 hours (88% faster)
• Processing 250+ part revisions per week for 50+ engineers
• Handling 10,000+ daily API requests + 500+ daily uploads
• Revolutionized engineering workflow efficiency

TECHNICAL ACHIEVEMENTS
• Architected high-performance RESTful API (<100ms response times)
• Optimized React components: 4.5s → 1.1s page load (76% faster)
• Eliminated 70% of initial bundle size through optimization
• Automated workflow integration with existing ERP systems

=======================================

PROJECT 2: GROSTOGO iOS APP (Personal Project)
Duration: Aug 2024 - Dec 2025 | Role: Solo Developer
Tech Stack: React Native, tRPC, PostgreSQL, Instacart API, Docker, ChatGPT API

BUSINESS VALUE
• Recipe management with automated grocery ordering
• Production-grade mobile app showcasing full-stack expertise
• Deployed on self-hosted Ubuntu servers with blue-green deployments

TECHNICAL ACHIEVEMENTS
• Built 50+ tRPC endpoints with 95% code coverage
• Implemented local-cloud data sync engine
• Secure session-based authentication with JWT token rotation
• Integrated Instacart API for automated grocery ordering
• Recipe import integration with ChatGPT API

=======================================

PROJECT 3: AI IMAGE CLASSIFICATION (Agricultural Automation)
Duration: Jun 2023 - May 2024 | Role: AI Engineer
Tech Stack: Python, Keras, TensorFlow, CNN Architecture

BUSINESS IMPACT
• 90%+ accuracy in real-time vegetable/contaminant detection
• Production-ready design for agricultural equipment integration

TECHNICAL ACHIEVEMENTS
• Engineered CNN-based classification model using TensorFlow
• Hardware integration specifications for production deployment
• Performance optimization for real-time agricultural environments

=======================================

COMBINED PROJECT IMPACT
• Total machines supported: 300+ across 5 countries
• Daily API requests handled: 10,000+
• Engineering efficiency improvement: 88% faster implementation
• Projected annual cost savings: $50K+ per machine
• Code coverage across projects: 90-95%

For complete technical details on any project, check the projects/ directory.
For executive summary of all work, type: cat OVERVIEW.txt`
          },

          'projects': {
            name: 'projects',
            type: 'directory',
            children: {
              'engineering-change-system.md': {
                name: 'engineering-change-system.md',
                type: 'file',
                content: `# Engineering Change System

**Project Duration:** May 2022 - Jul 2025
**Role:** Lead Full Stack Developer
**Team:** 3-developer team
**Tech Stack:** TypeScript, React, Express.js, PostgreSQL, ERP Integration

A version-controlled engineering change management system processing 250+ part
revisions per week for 50+ engineers at Spudnik.

## Key Achievements

• **Dramatic Efficiency Gains:** Reduced timing to implement machine changes
  from 5 days to 8 hours through automated workflows and ERP integration

• **High-Performance API:** Architected RESTful API with Express.js handling
  10,000+ daily requests and 500+ daily document uploads

• **Performance Optimization:** Implemented query optimization reducing API
  response times to less than 100ms

• **Frontend Optimization:** Optimized React component rendering with memoization,
  code-splitting, and dynamic imports, reducing initial page load time from
  4.5s to 1.1s and eliminating 70% of initial bundle size

## Technical Implementation
- Version-controlled part revision management
- Automated workflow integration with existing ERP systems
- Real-time collaboration features for engineering teams
- Document management and upload system
- Performance-optimized React frontend with advanced optimization techniques

**Impact:** Revolutionized engineering workflow efficiency at agricultural
equipment manufacturer, enabling rapid machine development cycles`
              },

              'grostogo-ios-app.md': {
                name: 'grostogo-ios-app.md',
                type: 'file',
                content: `# GrosToGo iOS App

**Project Duration:** Aug 2024 - Dec 2025
**Role:** Full Stack Developer (Personal Project)
**Tech Stack:** React Native, tRPC, PostgreSQL, Instacart API, JWT/Session Auth

A full-stack iOS recipe management app with offline-first architecture featuring
local-cloud data sync and automated grocery ordering.

## Key Features

• **Offline-First Architecture:** Built with React Native ensuring seamless
  functionality without internet connectivity

• **Advanced Data Sync:** Implemented local-cloud data sync engine for
  seamless user experience across devices

• **Automated Grocery Integration:** Integrated Instacart API for automated
  grocery ordering directly from recipes

• **Secure Authentication:** Implemented session-based authentication using
  cookies and JWT refresh token rotation

• **Production-Grade Backend:** Deployed 50+ tRPC endpoints with 95% code
  coverage on self-hosted Ubuntu servers

## Technical Achievements
- Type-safe API development with tRPC
- Zero-downtime rolling updates with Docker
- Comprehensive testing coverage (95%)
- Mobile-first responsive design
- Real-time data synchronization
- Secure token-based authentication system

**Tech Highlights:** React Native, tRPC, PostgreSQL, Docker, Ubuntu servers
**Status:** Personal project showcasing full-stack mobile development expertise`
              },

              'ai-image-classification.md': {
                name: 'ai-image-classification.md',
                type: 'file',
                content: `# Image Classification Neural Network

**Project Duration:** Jun 2023 - May 2024
**Role:** AI Engineer
**Tech Stack:** Python, Keras, TensorFlow, CNN Architecture

An AI-powered image classification model designed for real-time vegetable/
contaminant detection in agricultural harvesting equipment.

## Technical Achievement

• **High Accuracy Model:** Engineered CNN-based image classification model
  using Keras and TensorFlow achieving over 90% accuracy in real-time
  vegetable/contaminant detection

• **Production-Ready Design:** Designed specifically for integration into
  harvesting equipment with real-time processing requirements

• **Business Impact:** Documented deployment pipeline to hardware integration
  specifications for production systems

• **Cost Savings:** Projected to reduce manual sorting costs by $50K annually
  per machine when implemented

## Technical Implementation
- Convolutional Neural Network architecture optimization
- Real-time image processing pipeline
- TensorFlow model optimization for embedded systems
- Hardware integration specifications
- Performance benchmarking and accuracy validation

## Business Value
- Automated quality control for agricultural products
- Significant cost reduction in manual labor
- Improved product consistency and quality
- Scalable solution for multiple harvesting machines

**Tech Highlights:** Python, Keras, TensorFlow, CNN, Real-time Processing
**Impact:** AI solution for agricultural automation with measurable ROI`
              }
            }
          },

          'experience.txt': {
            name: 'experience.txt',
            type: 'file',
            content: `For complete experience details, please view:

cat OVERVIEW.txt

This file contains a comprehensive summary of:
• Current role at Spudnik with key achievements
• Education background from Idaho State University
• Technical skills and expertise
• Notable project highlights

For managers: The OVERVIEW.txt file provides a complete
executive summary format that's easy to review.`
          },

          contact: {
            name: 'contact',
            type: 'directory',
            children: {
              'email.txt': {
                name: 'email.txt',
                type: 'file',
                content: 'hi@kolby.sh'
              },
              'linkedin.txt': {
                name: 'linkedin.txt',
                type: 'file',
                content: 'https://www.linkedin.com/in/kolbychristiansen'
              },
              'github.txt': {
                name: 'github.txt',
                type: 'file',
                content: 'https://github.com/kolbyjayce'
              },
              'website.txt': {
                name: 'website.txt',
                type: 'file',
                content: 'https://kolby.sh',
              }
            }
          },

          '.secrets': {
            name: '.secrets',
            type: 'directory',
            hidden: true,
            children: {
              'konami.txt': {
                name: 'konami.txt',
                type: 'file',
                content: `🎮 Konami Code Activated! 🎮

██╗  ██╗ ██████╗ ███╗   ██╗ █████╗ ███╗   ███╗██╗
██║ ██╔╝██╔═══██╗████╗  ██║██╔══██╗████╗ ████║██║
█████╔╝ ██║   ██║██╔██╗ ██║███████║██╔████╔██║██║
██╔═██╗ ██║   ██║██║╚██╗██║██╔══██║██║╚██╔╝██║██║
██║  ██╗╚██████╔╝██║ ╚████║██║  ██║██║ ╚═╝ ██║██║
╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝

You found the secret area! 30 extra lives granted.
(Not really, but thanks for exploring! 😄)`
              },

              'coffee.ascii': {
                name: 'coffee.ascii',
                type: 'file',
                content: `
     )  (
    (   ) )
     ) ( (
  ╭─────────╮
  │ ☕ FUEL │
  │ FOR CODE │
  ╰─────────╯

"Coffee: Because coding at 3 AM requires supernatural powers"

Fun fact: This portfolio was built with approximately 7 cups of coffee! ☕`
              },

              'jokes.txt': {
                name: 'jokes.txt',
                type: 'file',
                content: `Programming Jokes Collection
===========================

Q: Why do programmers prefer dark mode?
A: Because light attracts bugs! 🐛

---

Q: How many programmers does it take to change a light bulb?
A: None. That's a hardware problem.

---

"There are only 10 types of people in the world:
those who understand binary and those who don't."

---

99 little bugs in the code,
99 little bugs,
take one down, patch it around,
117 little bugs in the code...

---

Q: Why did the programmer quit his job?
A: He didn't get arrays! 📊`
              },

              'matrix.txt': {
                name: 'matrix.txt',
                type: 'file',
                content: `Wake up, Neo...

01001000 01100101 01101100 01101100 01101111
01010111 01101111 01110010 01101100 01100100

You found the rabbit hole! 🐰

"Do you take the red pill or the blue pill?"
- Red pill: type 'red'
- Blue pill: type 'blue'

(Just kidding, they both just show this message!)

The Matrix has you... but at least you have a cool portfolio! 😎`
              }
            }
          }
        }
      }
    }
  },

  bin: {
    name: 'bin',
    type: 'directory',
    children: {
      'portfolio-info': {
        name: 'portfolio-info',
        type: 'file',
        executable: true,
        content: 'Interactive portfolio system v1.0.0'
      }
    }
  },

  usr: {
    name: 'usr',
    type: 'directory',
    children: {
      share: {
        name: 'share',
        type: 'directory',
        children: {
          'motd.txt': {
            name: 'motd.txt',
            type: 'file',
            content: `
╔══════════════════════════════════════════════════════════════════════╗
║                    Welcome to Kolby's Portfolio                      ║
║                         Terminal Interface                           ║
╚══════════════════════════════════════════════════════════════════════╝

Type 'help' to see available commands
Type 'about' to learn about me
Type 'projects' to view my work
Type 'ls' to explore the file system

Hint: Try exploring hidden files with 'ls -a' 👀
`
          }
        }
      }
    }
  }
};
