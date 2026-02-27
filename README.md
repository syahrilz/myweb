# myweb

A terminal-themed personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Tech Stack

- **Next.js 14** — React framework
- **TypeScript** — Type safety
- **Tailwind CSS** — Utility-first CSS
- **JetBrains Mono** — Monospace font (via Google Fonts)

## Structure

```
/
├── app/
│   ├── layout.tsx        # Root layout with font and metadata
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/
│   ├── Navbar.tsx
│   ├── WhoamiSection.tsx
│   ├── NowPlayingSection.tsx
│   ├── BlogSection.tsx
│   ├── SkillsSection.tsx
│   ├── ContactsSection.tsx
│   └── Footer.tsx
├── tailwind.config.ts
├── postcss.config.js
├── next.config.ts
├── tsconfig.json
└── package.json
```
