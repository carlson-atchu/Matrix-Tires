# Matrix Tires — Storefront Website
## AWS Amplify Deployment Guide

---

## What's Included

```
matrix-tires/
├── index.html          ← Customer storefront (homepage)
├── css/store.css       ← Storefront styles
├── js/store.js         ← Search, filter, cart logic
├── admin/index.html    ← Staff-only admin panel (inventory, sales, expenses, P&L)
├── amplify.yml         ← AWS Amplify build config
├── _redirects.json     ← Routing rules for Amplify
└── README.md           ← This file
```

---

## Features

### Customer-Facing Storefront (`/`)
- **Hero search** — search tires by width, aspect ratio, and rim size
- **Live inventory** — pulls directly from your Firebase database in real time
- **Filter bar** — filter by condition (New/Used), brand, type, price
- **Tire cards** — each card shows size, brand, type, stock level, and price
- **Brand browser** — clickable brand pills that filter the grid
- **Shopping cart** — sidebar cart, persists across page refresh
- **Quote request form** — customers fill out details, you get notified
- **Services section** — lists your service offerings
- **Mobile responsive** — works on phones, tablets, and desktops

### Admin Panel (`/admin`)
- All your original tools: inventory, sales, expenses, P&L, PDF export
- Firebase sync (same database as the storefront — inventory updates instantly)
- Password-protect this page (instructions below)

---

## Step-by-Step: Deploy to AWS Amplify

### Prerequisites
- An AWS account (free tier works): https://aws.amazon.com/free/
- Your project folder (this ZIP file, unzipped)

---

### Step 1 — Push to GitHub (recommended)

1. Create a free GitHub account at https://github.com if you don't have one
2. Create a new repository called `matrix-tires`
3. Upload all files from this folder to the repo (drag & drop in GitHub UI, or use Git)

---

### Step 2 — Connect to AWS Amplify

1. Log in to AWS Console: https://console.aws.amazon.com
2. Search for **"Amplify"** in the top search bar → click **AWS Amplify**
3. Click **"Create new app"** → **"Host web app"**
4. Choose **GitHub** → Authorize AWS to access your GitHub
5. Select your `matrix-tires` repository and the `main` branch
6. On the build settings screen, Amplify will auto-detect `amplify.yml` — leave defaults
7. Click **"Save and deploy"**

Amplify will give you a live URL like:
`https://main.d1abc123.amplifyapp.com`

---

### Step 3 — Add a Custom Domain (Optional but recommended)

1. In Amplify Console → your app → **"Domain management"**
2. Click **"Add domain"**
3. Enter your domain (e.g. `matrixtires.com`)
4. Follow the DNS instructions (Amplify walks you through it)
5. SSL certificate is created automatically (free HTTPS)

**To buy a domain**, use:
- AWS Route 53: https://console.aws.amazon.com/route53
- Or Namecheap / GoDaddy (then point DNS to Amplify)

---

### Step 4 — Password-Protect the Admin Panel

To keep `/admin` private:

1. In Amplify Console → your app → **"Access control"**
2. Click **"Manage access"**
3. Set access level for `/admin/*` → **"Restricted - Password required"**
4. Set a username and password
5. Save — only staff with the password can reach the admin panel

---

### Step 5 — Set Up Quote Email Notifications (Optional)

To receive an email when a customer submits a quote:

**Option A — Firebase + Email (free)**
1. Go to https://console.firebase.google.com → your project
2. Enable **"Extensions"** → search **"Trigger Email"**
3. Connect to a Gmail or SMTP account
4. Configure trigger on new documents in the `quotes` collection

**Option B — Formspree (easiest, free tier)**
1. Sign up at https://formspree.io
2. Create a form and get your endpoint URL
3. In `js/store.js`, replace the quote submission logic with a fetch POST to your Formspree URL

---

## Firebase Security Rules

Add these rules in Firebase Console → Firestore → Rules to protect your data:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Public: read inventory only
    match /business/matrixdata {
      allow read: if true;
      allow write: if false; // only admin app writes via auth
    }
    // Public: write quote requests
    match /quotes/{quoteId} {
      allow create: if true;
      allow read, update, delete: if false;
    }
  }
}
```

---

## Updating Inventory

Your inventory updates automatically from the admin panel. When you:
- Add/edit/remove tires in the Admin panel
- Changes sync to Firebase instantly
- The storefront reflects the new inventory in real time (no redeployment needed)

---

## Cost Estimate (Monthly)

| Service | Free Tier | Paid (after free) |
|---------|-----------|-------------------|
| AWS Amplify Hosting | 5 GB storage, 15 GB bandwidth | ~$0.01/GB |
| Firebase Firestore | 1 GB storage, 50k reads/day | ~$0.06/100k reads |
| Custom Domain (Route 53) | — | ~$12/year |
| **Total for small business** | **$0/month** | **~$1–5/month** |

---

## Support

For help with deployment, contact your web developer or visit:
- AWS Amplify Docs: https://docs.amplify.aws/gen1/javascript/tools/console/hosting/hosting/
- Firebase Docs: https://firebase.google.com/docs/firestore

---

*Matrix Tires Storefront v2.0 — Built for AWS Amplify*
