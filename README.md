# Credoz — Personal Profile (React)

## Description

A cyberpunk-inspired personal profile built as a **bento grid dashboard** using **React 19**, **Vite 8**, and modern CSS. The design features a sleek **green and black motif** with a terminal-hacker aesthetic — completely distinct from traditional portfolio layouts.

Key visual elements include an interactive particle network background with connection lines, a mouse-tracking glow effect on each card, a terminal window with a typing animation for the bio, animated skill progress bars, a rotating SVG avatar graphic, a live clock in the status bar, and a **contact form powered by Web3Forms**. The entire layout uses CSS Grid to create an asymmetric, dashboard-style composition.

## Purpose

This project serves as:

- **A personal profile card** showcasing Casey Freud J. Madriaga's identity, skills, and accomplishments.
- **A demonstration of modern React development** using Vite, functional components, hooks, and CSS custom properties.
- **A visual differentiator** from conventional portfolio sites, utilizing a cyberpunk/terminal aesthetic to reflect a tech-forward personality.
- **An OJT-ready portfolio piece** that highlights both soft skills (leadership, communication, teamwork) and technical achievements (game development, Scrum certification).

## Features

- **Bento Grid Layout** — Asymmetric dashboard-style card composition using CSS Grid
- **Particle Network Background** — Animated canvas with floating particles and proximity-based connection lines
- **Mouse-Tracking Card Glow** — Radial gradient follows cursor position on hover
- **Terminal Typing Effect** — Bio text types out character by character with a blinking cursor
- **Animated Skill Bars** — Progress bars with eased CSS transitions triggered on scroll
- **Rotating SVG Avatar** — Custom animated graphic with dashed orbit ring and spinning hexagon
- **Live Clock** — Real-time clock display in the top status bar
- **Scanline Overlay** — Subtle CRT-style scanline effect for atmosphere
- **Contact Form** — Web3Forms-powered email form with terminal-style UI
- **Fully Responsive** — Adapts from 4-column desktop to single-column mobile

## Technologies Used

- **React 19** — Functional components, hooks (useState, useEffect, useRef, useCallback)
- **Vite 8** — Lightning-fast build tool with HMR
- **CSS3** — Custom properties, CSS Grid, Flexbox, animations, media queries, backdrop-filter
- **Web3Forms** — Serverless email API for the contact form
- **Canvas API** — Particle network animation

## Environment Variables

This project uses a `.env` file for the Web3Forms API key:

```
VITE_WEB3FORMS_KEY=your_web3forms_access_key_here
```

See `.env.example` for the template. The `.env` file is gitignored for security.

## Sections

| Card | Content |
|------|---------|
| Identity | Name, alias (Credoz), animated SVG avatar, hexagon decoration |
| Terminal | About/bio displayed in a terminal window with typing animation |
| Status | Quick info grid (status, role, focus, certification) |
| Skills | Animated progress bars for 6 soft skills |
| Project 1 | Castlefall — 2D RPG Game in Java (2024–2025) |
| Project 2 | SFPC Scrum Foundation Professional Certification (Feb 2026) |
| Contact | Web3Forms-powered contact form |
| Footer | Branding bar |

## Deployment on Vercel

1. Import the repository on [Vercel](https://vercel.com/new)
2. Select the **feature/react-contact-form** branch
3. Vercel auto-detects Vite via `vercel.json` config
4. Add environment variable: `VITE_WEB3FORMS_KEY` = your Web3Forms access key
5. Deploy!

## Project Structure

```
src/
├── components/
│   ├── ParticleCanvas.jsx   # Canvas particle network
│   ├── Scanlines.jsx        # CRT scanline overlay
│   ├── TopBar.jsx           # Status bar with live clock
│   ├── IdentityCard.jsx     # Name, alias, avatar
│   ├── TerminalCard.jsx     # Bio with typing effect
│   ├── StatusCard.jsx       # Quick info grid
│   ├── SkillsCard.jsx       # Animated skill bars
│   ├── ProjectCard.jsx      # Reusable project/cert card
│   ├── ContactCard.jsx      # Web3Forms contact form
│   └── FooterCard.jsx       # Branding footer
├── App.jsx                  # Main layout
├── main.jsx                 # React entry point
└── index.css                # All styles
```

## Author

**Casey Freud J. Madriaga** (Credoz)
Computer Science Student | Aspiring Professional

## License

This project is for educational and portfolio purposes.