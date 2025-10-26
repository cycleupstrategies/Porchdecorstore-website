# 🚀 NETLIFY DEPLOYMENT GUIDE - AI Porch Visualizer

## What You're Getting:
✅ Secure serverless functions (your API key stays private)
✅ Real OpenAI DALL-E AI image generation
✅ Zero cost unless you exceed free tier
✅ Professional, scalable infrastructure

---

## 📋 STEP 1: Set Up Netlify Account

1. Go to **https://www.netlify.com**
2. Click **"Sign Up"** 
3. Choose **"Sign up with GitHub"** (easiest)
4. Authorize Netlify to access your GitHub

---

## 📤 STEP 2: Upload New Files to GitHub

You need to upload these NEW files to your GitHub repository:

### Files to Upload:
1. **netlify.toml** (configuration file)
2. **package.json** (dependencies)
3. **netlify/functions/generate-visualization.js** (the AI function)
4. **visualizer.js** (updated version)

### How to Upload:

**Option A: Create the netlify folder first**
1. Go to your GitHub repo: `github.com/cycleupstrategies/Porchdecorstore-website`
2. Click **"Add file"** → **"Create new file"**
3. Type: `netlify/functions/generate-visualization.js`
4. Paste the code from the `generate-visualization.js` file I created
5. Click **"Commit new file"**

**Option B: Upload via GitHub web interface**
1. Click **"Add file"** → **"Upload files"**
2. Drag the files from your downloads
3. Commit changes

---

## 🔗 STEP 3: Connect GitHub to Netlify

1. In Netlify, click **"Add new site"** → **"Import an existing project"**
2. Choose **"Deploy with GitHub"**
3. Find and select: **`Porchdecorstore-website`**
4. Click **"Deploy site"**

**Build Settings (Netlify will auto-detect):**
- Build command: (leave empty)
- Publish directory: `.` (root)
- Functions directory: `netlify/functions`

5. Click **"Deploy"**

Wait 2-3 minutes for initial deployment.

---

## 🔑 STEP 4: Add Your OpenAI API Key (SECURELY)

**IMPORTANT: Create a NEW API key first!**

1. Go to **https://platform.openai.com/api-keys**
2. Click **"Create new secret key"**
3. Name it: "PorchDecor Production"
4. Copy the key (starts with `sk-proj-...`)

**Now add it to Netlify:**

1. In Netlify, click your site
2. Go to **"Site configuration"** → **"Environment variables"**
3. Click **"Add a variable"** → **"Add a single variable"**
4. Key: `OPENAI_API_KEY`
5. Value: (paste your NEW OpenAI key)
6. Click **"Create variable"**

**IMPORTANT:** After adding the key, click **"Trigger deploy"** to redeploy with the new environment variable.

---

## 🌐 STEP 5: Update Your Custom Domain

1. In Netlify, go to **"Domain management"**
2. Click **"Add custom domain"**
3. Enter: `porchdecorstore.com`
4. Click **"Verify"**

Netlify will show you DNS records to add in Squarespace (similar to what we did for GitHub Pages, but with Netlify's servers instead).

**OR keep using GitHub Pages for the main site** and just use Netlify for the visualizer function.

---

## ✅ STEP 6: Test Your AI Visualizer!

Once deployed:

1. Go to: `https://YOUR-SITE-NAME.netlify.app/visualizer.html`
2. Upload a porch photo
3. Enter email
4. Wait 30-60 seconds for AI to generate all 4 images
5. See REAL AI-generated pumpkin displays on YOUR porch!

---

## 🎯 FILE STRUCTURE YOU NEED:

```
Porchdecorstore-website/
├── index.html
├── visualizer.html
├── visualizer.js (UPDATED VERSION)
├── styles.css
├── script.js
├── netlify.toml (NEW)
├── package.json (NEW)
└── netlify/
    └── functions/
        └── generate-visualization.js (NEW)
```

---

## 💰 COSTS:

**Netlify:**
- Free tier: 100GB bandwidth, 300 build minutes/month
- Your site is well within free tier
- $0/month

**OpenAI API:**
- DALL-E 3: ~$0.04-0.08 per image
- You generate 4 images per user
- Cost: ~$0.16-0.32 per user
- 100 users = $16-32
- Your existing credits will cover testing

---

## 🔧 TROUBLESHOOTING:

**Function not working?**
- Check Netlify Function logs: Site → Functions → generate-visualization → Logs
- Verify environment variable is set correctly
- Make sure files are in correct folder structure

**Images not generating?**
- Check OpenAI API usage at platform.openai.com
- Verify API key has credits
- Check browser console for errors

**Deploy failed?**
- Make sure netlify.toml and package.json are in root folder
- Check that netlify/functions folder structure is correct

---

## 📞 NEED HELP?

- Netlify Docs: https://docs.netlify.com
- OpenAI API Docs: https://platform.openai.com/docs
- Contact: hello@porchdecor.com

---

## 🎉 WHAT HAPPENS WHEN IT'S LIVE:

1. User uploads porch photo
2. Enters email
3. Your Netlify function securely calls OpenAI
4. DALL-E AI generates 4 unique images showing different package sizes
5. User sees photorealistic pumpkins added to THEIR specific porch
6. User clicks "Add to Cart" or "Schedule Consultation"
7. You get their info and follow up!

**This is a GAME CHANGER for your business!** 🎃
