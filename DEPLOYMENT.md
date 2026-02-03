# EMOD Platform Deployment Guide

## Repository URLs

- **DROG Group**: https://github.com/DROG-group/emod-platform
- **Original**: https://github.com/phanivarnava-hue/emod-platform

---

## 🖥️ Self-Hosted Deployment (Oracle Server)

### Prerequisites on the server

1. Docker and Docker Compose installed
2. Git installed
3. Port 80 and 443 open in firewall
4. DNS record for `emod.saufex.eu` pointing to the server IP

### Initial Setup

SSH into your Oracle server:

```bash
ssh oracledrog
```

Clone the repository:

```bash
cd /opt
sudo git clone https://github.com/DROG-group/emod-platform.git
cd emod-platform
sudo chown -R $USER:$USER .
```

Create environment file:

```bash
cp .env.example .env
nano .env
```

Add your Supabase credentials:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

Make deploy script executable and run:

```bash
chmod +x deploy.sh
./deploy.sh
```

### Updating the deployment

```bash
ssh oracledrog
cd /opt/emod-platform
./deploy.sh
```

### Useful commands

```bash
# View logs
docker compose logs -f

# View app logs only
docker compose logs -f app

# Restart containers
docker compose restart

# Stop everything
docker compose down

# Check container status
docker compose ps
```

---

## 🚀 Deploy to Vercel (Alternative)

### Step 1: Import from GitHub

1. Go to **https://vercel.com/new**
2. Sign in with your GitHub account (phanivarnava-hue)
3. Click "Import" next to `emod-platform` repository
4. Vercel will auto-detect Next.js settings - just click **Deploy**
5. Wait 2-3 minutes for deployment to complete

### Step 2: Get Your Live URL

After deployment completes, you'll get a URL like:
- `https://emod-platform.vercel.app` (or similar)

### Step 3: Invite Bram Alkema

#### Option A: Via Vercel Dashboard
1. Go to your project settings: `https://vercel.com/phanivarnava-hue/emod-platform/settings/members`
2. Click **"Invite Member"**
3. Enter Bram's email address
4. Select role: **Viewer** (to view) or **Member** (to edit)
5. Send invitation

#### Option B: Share the Live URL
Simply send Bram the deployment URL (it's public by default):
- Deployment URL: Will be shown after deployment
- GitHub Repo: https://github.com/phanivarnava-hue/emod-platform

## 📧 Message Template for Bram

```
Hi Bram,

I've deployed the EMOD platform with all 59 modules!

Live Site: [YOUR-VERCEL-URL]
GitHub: https://github.com/phanivarnava-hue/emod-platform

The platform includes:
- 59 learning modules across 11 learning paths
- Full content for each module
- Responsive design matching substance-frontend
- All modules from the saufex-website project

Please check it out and let me know what you think!

Best,
[Your name]
```

## 🔄 Future Updates

To update the live site:
```bash
cd ~/projects/emod-platform
# Make changes, then:
git add .
git commit -m "Your update message"
git push
```

Vercel will automatically redeploy on every push to GitHub!

## 📊 What's Deployed

- **59 modules** across topics like:
  - Understanding Disinformation Basics
  - AI and Hybrid Threats
  - FIMI Fundamentals
  - Counter-Messaging & Response
  - Detection & Verification
  - Media Literacy
  - And more...

- **Pages**:
  - Homepage with features & about
  - Dashboard with all modules organized
  - Individual module pages with full content
  - Login/Register pages

All content is live and browsable!

---

## Analytics (Matomo)

Privacy-friendly, cookieless tracking via a self-hosted Matomo instance.

- **Dashboard**: https://analytics.saufex.eu
- **Site ID**: 4
- **Implementation**: `components/MatomoAnalytics.tsx` (loaded in root layout)
- **Settings**: cookies disabled, DoNotTrack respected, campaign parameters disabled
- **SPA tracking**: client-side route changes are tracked automatically via Next.js `usePathname`

### Tracked Goals

#### Learner Funnel

| Goal | URL match | Type |
|------|-----------|------|
| Account Registration | `/register` | contains |
| Module Dashboard Visit | `/dashboard` | contains |
| Module Started | `/modules/` | contains |
| Certificate Earned | `/certificates/` | contains |
| Certificate Verified | `/verify/` | contains |

#### Learning Path Engagement

Module slugs contain the learning path name, so these goals fire when any module in that path is viewed:

| Goal | URL match |
|------|-----------|
| Path: Disinformation Basics | `Disinformation-Basics` |
| Path: Media Literacy | `Media-Literacy` |
| Path: Detection and Verification | `Detection-and-Verification` |
| Path: Counter-Messaging | `Counter-Messaging` |
| Path: Platform Governance | `Platform-Governance` |
| Path: Disinfonomics | `Disinfonomics` |
| Path: FIMI Operations | `FIMI-Operations` |
| Path: AI and Hybrid Threats | `AI-and-Hybrid` |
| Path: Data Analysis | `Data-Analysis` |

#### Support Pages

| Goal | URL match |
|------|-----------|
| Glossary Visit | `/glossary` |
| Educator Handbook Visit | `/handbook` |
| About Page Visit | `/about` |

### URL Route Reference

| Pattern | Type | Protected | Purpose |
|---------|------|-----------|---------|
| `/` | Static | No | Landing page |
| `/dashboard` | Protected | Yes | Main learning hub |
| `/modules/[slug]` | Dynamic | No* | Module content + quizzes |
| `/certificates` | Protected | Yes | Certificate list |
| `/certificates/[code]` | Dynamic | No | View/print certificate |
| `/verify` | Static | No | Certificate verification form |
| `/verify/[code]` | Dynamic | No | Verification result |
| `/login` | Static | No | Authentication |
| `/about` | Static | No | About EMOD |
| `/handbook` | Static | No | Educator resources |
| `/glossary` | Static | No | Definitions |
| `/faq` | Static | No | FAQ |

\* Modules are accessible without auth but progress tracking requires login.
