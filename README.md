# CodeNest 

> **The Smarter Way to Learn Code** — *Build. Break. Learn. Repeat.*

CodeNest is a modern, responsive developer education and community platform designed to take learners from curious beginners to production-ready software engineers. Through hands-on courses, structured career roadmaps, interactive coding challenges, and an active peer community, CodeNest emphasizes practical, project-first learning over passive video consumption.

---

##  Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Project Architecture & Structure](#project-architecture--structure)
- [Technology Stack](#technology-stack)
- [Page & Module Breakdown](#page--module-breakdown)
  - [1. Home (`index.html`)](#1-home-indexhtml)
  - [2. Courses Catalog (`courses.html`)](#2-courses-catalog-courseshtml)
  - [3. Learning Paths (`path.html`)](#3-learning-paths-pathhtml)
  - [4. Coding Challenges (`challenge.html`)](#4-coding-challenges-challengehtml)
  - [5. Developer Community (`community.html`)](#5-developer-community-communityhtml)
- [Getting Started](#getting-started)
- [Interactive Features](#interactive-features)
- [Roadmap & Enhancements](#roadmap--enhancements)
- [License](#license)

---

##  Overview

Traditional coding education often suffers from "tutorial hell"—watching hours of lectures without retaining real problem-solving instincts. **CodeNest** is built around an active learning philosophy:
- **Build**: Jump straight into practical exercises and full-stack projects.
- **Break**: Encounter realistic bugs and system constraints to master debugging and diagnostics.
- **Learn**: Internalize core concepts, design patterns, and modern industry standards.
- **Repeat**: Solidify knowledge through progressive coding challenges and community collaboration.

---

##  Key Features

- ** Curated Multi-Tier Courses**: Practical tracks across languages and disciplines (Python, JavaScript, TypeScript, React, SQL, Go, Rust, Backend, etc.) categorized by difficulty (`Beginner`, `Intermediate`, `Advanced`).
- ** Guided Learning Paths**: Structured roadmaps (Full Stack, Frontend, Backend, UI/UX, Data Analyst, Python Developer, Mobile) with step-by-step milestones, duration estimates, and certification outcomes.
- ** Interactive Problem Arena**: Algorithmic and systems challenges with starter code templates, test case benchmarks, completion rates, and an XP reward leveling system.
- ** Collaborative Community Hub**: Real-time style discussion forum supporting categorized threads (`Showcase`, `Help`, `Career`), comment replies, tag filtering, upvotes, and event announcements.
- ** Fully Responsive Dark UI**: Modern dark theme crafted with Bootstrap 5, custom CSS styling, glow effects, animated tech tickers, and mobile-friendly navigation.

---

##  Project Architecture & Structure

```text
CodeNest/
├── index.html                 # Platform landing page & feature highlights
├── courses.html               # Dynamic course catalog with search & filtering
├── path.html                  # Career roadmaps & learning tracks
├── challenge.html             # Coding arena with interactive code execution simulation
├── community.html             # Forum discussions, thread interactions & event calendar
├── images/
│   └── hero.jpg               # Hero section showcase visual asset
└── assets/
    ├── brand/                 # CodeNest brand SVG graphics
    │   ├── bootstrap-logo.svg
    │   └── bootstrap-logo-white.svg
    ├── bootstrap-icons/       # Bootstrap Icons library (SVG & font variants)
    └── dist/
        ├── css/
        │   ├── bootstrap.min.css      # Bootstrap 5 framework core styling
        │   ├── style.css              # Global styles, navbar, hero, dark theme & cards
        │   ├── challenge.css          # Challenge arena & code editor styling
        │   └── community.css          # Forum layout, author badges & modal styles
        └── js/
            ├── bootstrap.bundle.min.js# Bootstrap 5 interactive components (modal, collapse)
            ├── challenge.js           # Challenge filtering, test-runner & XP logic
            └── community.js           # Forum state management, replies, voting & posting
```

---

##  Technology Stack

- **Markup & Semantics**: [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML) with ARIA accessibility roles and semantic structure.
- **Styling & Layout**: 
  - [Bootstrap 5](https://getbootstrap.com/) for fluid grid layouts, modals, buttons, and responsive breakpoints.
  - Custom CSS (`style.css`, `challenge.css`, `community.css`) for sleek dark aesthetics, subtle borders, custom hover states, and glowing badges.
- **Iconography**: [Bootstrap Icons](https://icons.getbootstrap.com/) for developer tools and UI indicators.
- **Client-Side Scripting**: Modern Vanilla JavaScript (ES6+) for:
  - Dynamic dataset rendering and DOM updates.
  - Real-time client-side search and multi-criteria category filtering.
  - Interactive code test simulation and status toggling.
  - Discussion threads, reply chains, and local voting interactions.

---

##  Page & Module Breakdown

### 1. Home (`index.html`)
The front door of CodeNest, presenting the core value proposition and social proof:
- **Navbar**: Sticky dark header with brand logo, links, and "Sign in" / "Start Learning" call-to-actions.
- **Hero Section**: High-impact headlines, platform metrics (*120+ hands-on lessons*, *18k active learners*, *4.9/5 student rating*), and floating tech badges.
- **Technology Ticker**: Smooth marquee displaying supported technologies (TypeScript, Rust, Go, SQL, React, Docker, Kubernetes, etc.).
- **Featured Course Tracks**: Quick preview of foundational courses with level badges and metadata.
- **"How It Works" Section**: Visual 3-stage breakdown of the CodeNest methodology (Learn by Doing, Break & Debug, Portfolio Launch).

### 2. Courses Catalog (`courses.html`)
A searchable and filterable course repository:
- **Search & Filters**: Instant search by course title or keywords, plus category pills (All, Python, JavaScript, HTML & CSS, Git, SQL, React, etc.).
- **Course Cards**: Display duration, lesson count, student enrollment numbers, difficulty badges, and key curriculum highlights.
- **Course Recommendation Finder**: Quick assessment questionnaire widget to guide students toward the right course.

### 3. Learning Paths (`path.html`)
Goal-oriented career curriculums designed to transition learners into specific engineering roles:
- **Path Tracks**: Full Stack Developer (24 weeks), Frontend Developer (16 weeks), Backend Developer (20 weeks), UI/UX Designer (12 weeks), Data Analyst (18 weeks), and Mobile App Developer (20 weeks).
- **Curriculum Overview**: Lists all included modules, prerequisites, milestones, and capstone portfolio projects.
- **Certification Badges**: Details completion certificates and portfolio deliverables included in each path.

### 4. Coding Challenges (`challenge.html`)
A dedicated arena for deliberate practice and technical interview readiness:
- **Challenge Directory**: Categorized problem sets spanning Algorithms, Data Structures, Systems, Frontend, Databases, and Backend APIs.
- **Interactive Code Workspace**:
  - Starter code display with syntax highlighting cues.
  - Test case runner simulation with pass/fail verification.
  - XP points reward system and difficulty markers (Beginner, Intermediate, Advanced).
- **Daily Challenge**: Featured spotlight problem refreshed regularly to cultivate daily coding habits.

### 5. Developer Community (`community.html`)
A collaborative peer forum for software builders:
- **Discussion Channels**: Showcase new projects, ask debugging questions (`#help`), share career advice (`#career`), and discuss architectural paradigms.
- **Interactive Feed**:
  - Upvote/like counter with active state toggles.
  - Expandable nested comments and replies.
  - Real-time "Start a Discussion" modal form to publish new threads dynamically.
- **Community Events**: Upcoming livestreams, architecture teardowns, hackathons, and community member leaderboards.

---

##  Getting Started

Since CodeNest is built as a lightweight, client-side web application, running it requires no heavy server setup or package builds.

### Prerequisites
A modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, Brave, etc.).

### Running Locally

1. **Clone or Download the Repository**:
   ```bash
   git clone https://github.com/your-username/codenest.git
   cd codenest
   ```

2. **Launch with any Static Web Server**:
   - **VS Code Live Server**: Right-click `index.html` and choose **"Open with Live Server"**.
   - **Python 3**:
     ```bash
     python -m http.server 8000
     ```
     Navigate to `http://localhost:8000` in your browser.
   - **Node.js (`npx serve`)**:
     ```bash
     npx serve .
     ```
   - **Direct File Inspection**: You can also double-click `index.html` to open it directly in your browser.

---

##  Interactive Features

| Page | Script File | Key Capabilities |
| :--- | :--- | :--- |
| **Challenges** | `assets/dist/js/challenge.js` | Dynamic challenge card generation, category filter, code snippet runner modal, XP points accumulation, and solved status persistence. |
| **Community** | `assets/dist/js/community.js` | Thread filtering, interactive likes/upvotes, reply accordion, and custom discussion submission form. |
| **Courses & Paths** | Inline script in `courses.html` & `path.html` | Real-time search query filtering, track selection, and dynamic curriculum details rendering. |

---

##  Roadmap & Enhancements

- [ ] **Interactive In-Browser REPL**: Integrate WebAssembly-based code runners (e.g., Pyodide for Python, WebContainers for Node.js).
- [ ] **User Authentication & Profiles**: Implement OAuth/JWT authentication to store user XP, completed paths, and saved discussions.
- [ ] **Backend Database Integration**: Connect forum data and user submissions to a persistent database (PostgreSQL / Supabase / Firebase).
- [ ] **Dark / Light Theme Toggle**: Enhance the theme toggle with persistent `localStorage` preference.
- [ ] **Progress Dashboard**: Dedicated profile page showing learning streaks, earned badges, and project repositories.

---

## License

This project is licensed under the [MIT License](LICENSE) — free for educational, personal, and commercial usage.

---


