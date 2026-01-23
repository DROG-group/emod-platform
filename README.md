# EMOD Platform

**European Master of (countering) Disinformation**

A comprehensive e-learning platform by SAUFEX offering 59+ modules on countering disinformation, understanding FIMI (Foreign Information Manipulation and Interference), and protecting democratic processes.

## Features

- 🎓 **59+ Learning Modules** across multiple learning paths
- 🌐 **Free & Self-Paced** learning experience
- 📚 **Multiple Learning Paths**:
  - Understanding Disinformation Basics
  - AI and Hybrid Threats
  - Counter-Messaging & Response
  - Detection & Verification
  - And many more...

- ⏱️ **400+ hours** of expert content
- 👥 **Expert-curated** by SAUFEX Consortium specialists

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
emod-platform/
├── app/                    # Next.js app directory
│   ├── dashboard/         # Dashboard page
│   ├── modules/[slug]/    # Individual module pages
│   ├── login/             # Login page
│   ├── register/          # Registration page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── lib/                   # Utilities and data
│   └── modules-data.json  # Module content data
├── types/                 # TypeScript type definitions
│   └── module.ts          # Module type definitions
└── scripts/               # Build scripts
    └── parse-modules.mjs  # Module parsing script
```

## Deployment

This project is designed to be deployed on Vercel:

1. Push to GitHub repository
2. Import to Vercel
3. Deploy automatically

## About SAUFEX

SAUFEX is an EU Horizon Europe funded research project dedicated to combating Foreign Information Manipulation and Interference (FIMI) and protecting democratic processes.

Learn more at [saufex.eu](https://saufex.eu)

## License

© 2025 SAUFEX Consortium. All rights reserved.
