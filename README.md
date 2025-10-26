# PorchDecor Website

A modern, professional website for PorchDecor - the platform connecting growers, logistics partners, and consumers for seasonal porch decor.

## 🎨 Features

- **Modern iOS-quality Design**: Clean, professional interface with smooth animations
- **Fully Responsive**: Works beautifully on all devices (desktop, tablet, mobile)
- **Multiple Pages**: 
  - Landing page with three-path navigation
  - Holidays showcase page
  - Consumer information page
  - Grower partnership page
  - Logistics partner page
  - About us page
  - Contact page with form
- **Beautiful Imagery**: Seasonal photos from Unsplash
- **Smooth Animations**: Scroll-triggered animations and hover effects
- **SEO-Friendly**: Semantic HTML and proper meta tags

## 📁 File Structure

```
├── index.html          # Landing page
├── holidays.html       # Seasonal holidays showcase
├── consumer.html       # For homeowners/customers
├── grower.html         # For growers/farmers
├── logistics.html      # For delivery partners
├── about.html          # About PorchDecor
├── contact.html        # Contact form
├── styles.css          # All styling
├── script.js           # Interactive features
└── README.md           # This file
```

## 🚀 Deploying to GitHub Pages

### Step 1: Create a GitHub Account
If you don't have one already, go to https://github.com and sign up.

### Step 2: Create a New Repository

1. Log in to GitHub
2. Click the "+" icon in the top right
3. Select "New repository"
4. Name it: `porchdecor-website` (or any name you prefer)
5. Make it **Public**
6. DO NOT initialize with README, .gitignore, or license
7. Click "Create repository"

### Step 3: Upload Your Files

**Option A: Via GitHub Website (Easiest)**

1. In your new repository, click "uploading an existing file"
2. Drag and drop ALL the files from your website folder:
   - index.html
   - holidays.html
   - consumer.html
   - grower.html
   - logistics.html
   - about.html
   - contact.html
   - styles.css
   - script.js
   - README.md
3. Add a commit message like "Initial website upload"
4. Click "Commit changes"

**Option B: Via Git Command Line**

```bash
# Navigate to your website folder
cd path/to/your/website

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/porchdecor-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. In your repository, click "Settings"
2. Scroll down to "Pages" in the left sidebar
3. Under "Source", select "Deploy from a branch"
4. Under "Branch", select "main" and "/ (root)"
5. Click "Save"

### Step 5: Wait for Deployment

- GitHub will take 1-3 minutes to build and deploy your site
- Refresh the Pages settings page to see your site URL
- Your site will be live at: `https://YOUR-USERNAME.github.io/porchdecor-website/`

### Step 6: Connect Your Squarespace Domain

1. **In Squarespace:**
   - Go to Settings > Domains
   - Click on your domain
   - Click "DNS Settings"
   - Add a CNAME record:
     - Host: `www`
     - Points to: `YOUR-USERNAME.github.io`
   - Add an A record:
     - Host: `@`
     - Points to these IP addresses (add 4 A records):
       - `185.199.108.153`
       - `185.199.109.153`
       - `185.199.110.153`
       - `185.199.111.153`

2. **In GitHub:**
   - Go to your repository Settings > Pages
   - Under "Custom domain", enter your domain (e.g., `porchdecor.com`)
   - Click "Save"
   - Check "Enforce HTTPS" (may take a few minutes to become available)

3. **Wait for DNS Propagation**
   - DNS changes can take 24-48 hours to fully propagate
   - Your site will be accessible at your custom domain once complete

## 🔧 Making Updates

### Via GitHub Website:
1. Navigate to the file you want to edit
2. Click the pencil icon (Edit)
3. Make your changes
4. Click "Commit changes"
5. Your site will automatically update in 1-2 minutes

### Via Git Command Line:
```bash
# Make your changes to files locally
# Then commit and push:
git add .
git commit -m "Description of changes"
git push
```

## 🎨 Customization Guide

### Changing Colors
Edit `styles.css` and modify the CSS variables:
```css
:root {
    --primary: #FF6B35;      /* Main orange color */
    --secondary: #F7931E;    /* Secondary orange */
    --dark: #1a1a1a;         /* Dark text */
    --light: #ffffff;        /* White */
    --gray: #6b7280;         /* Gray text */
}
```

### Updating Images
Replace the Unsplash URLs in HTML files with your own images:
- Upload images to your GitHub repository
- Reference them like: `images/your-image.jpg`
- Or use external URLs

### Changing Text
Simply edit the HTML files and change the text content. The styling will automatically apply.

### Adding New Pages
1. Create a new HTML file (e.g., `services.html`)
2. Copy the structure from an existing page
3. Update the navigation in ALL HTML files to include your new page
4. Upload/push to GitHub

## 📱 Testing Your Site

Before deploying:
1. Open `index.html` in your browser
2. Test all links
3. Test on different screen sizes (use browser dev tools)
4. Check that forms display correctly
5. Verify all pages load properly

## 🐛 Troubleshooting

**Site not showing up?**
- Wait 3-5 minutes after enabling Pages
- Check that your repository is public
- Ensure `index.html` is in the root directory
- Clear your browser cache

**Custom domain not working?**
- DNS changes take 24-48 hours
- Verify all DNS records are correct
- Check GitHub Pages settings show "DNS check successful"

**Changes not appearing?**
- Wait 1-2 minutes for GitHub to rebuild
- Clear your browser cache (Ctrl+Shift+Delete)
- Try incognito/private browsing mode

## 📧 Contact

For questions about the website:
- Email: hello@porchdecor.com

For technical support with GitHub Pages:
- https://docs.github.com/en/pages

## 📄 License

This website is proprietary to PorchDecor. All rights reserved.

---

Built with ❤️ for PorchDecor - Connecting communities through seasonal celebrations
