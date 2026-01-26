# EMOD Platform

**European Master of (countering) Disinformation**

A comprehensive e-learning platform by SAUFEX offering 59+ modules on countering disinformation, understanding FIMI (Foreign Information Manipulation and Interference), and protecting democratic processes.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/DROG-group/emod-platform&env=NEXT_PUBLIC_SUPABASE_URL,NEXT_PUBLIC_SUPABASE_ANON_KEY&envDescription=Optional%20Supabase%20credentials%20for%20user%20authentication&envLink=https://github.com/DROG-group/emod-platform#supabase-setup-optional)

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

Or use the **Deploy button** at the top of this README for one-click deployment.

## Supabase Setup (Optional)

The platform works without authentication - users can browse all modules freely. To enable user accounts and progress tracking:

### 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Create a new project

### 2. Run the Database Schema

1. In your Supabase dashboard, go to **SQL Editor**
2. Copy the contents of [`supabase-schema.sql`](./supabase-schema.sql) and run it
3. This creates the `profiles` and `module_progress` tables with Row Level Security

### 3. Add Environment Variables

Get your credentials from **Project Settings → API**:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your anon/public key |

Add these to:
- **Vercel**: Project Settings → Environment Variables
- **Local development**: Create a `.env.local` file

```bash
# .env.local
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### Features Enabled with Supabase

- User registration and login
- Progress tracking across devices
- "Continue where you left off" functionality
- Completion statistics

## About SAUFEX

SAUFEX is an EU Horizon Europe funded research project dedicated to combating Foreign Information Manipulation and Interference (FIMI) and protecting democratic processes.

Learn more at [saufex.eu](https://saufex.eu)

## License

© 2025 SAUFEX Consortium. All rights reserved.

