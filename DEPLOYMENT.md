# Deployment Guide - Mark Dev Portfolio Website

This guide will walk you through deploying your optimized portfolio website to GitHub Pages.

## 🚀 Quick Deployment

### Option 1: Automated Deployment Script (Recommended)

1. **Make sure you're in the project directory:**
   ```bash
   cd portflolio-website
   ```

2. **Run the deployment script:**
   ```bash
   ./deploy-gh-pages.sh
   ```

   The script will automatically:
   - Install dependencies
   - Build the project
   - Export for static hosting
   - Deploy to GitHub Pages

### Option 2: Manual Deployment

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Export for static hosting:**
   ```bash
   npm run export-gh-pages
   ```

4. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

## 📋 Prerequisites

Before deploying, ensure you have:

- ✅ Node.js 18+ installed
- ✅ Git configured with your GitHub credentials
- ✅ Repository cloned from GitHub
- ✅ Proper permissions to push to the repository

## 🔧 GitHub Repository Setup

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `portfolio-website` (or your preferred name)
3. Make it public (required for GitHub Pages)
4. Don't initialize with README, .gitignore, or license

### 2. Clone and Setup

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/portfolio-website.git
cd portfolio-website

# Copy your project files here
# Then initialize git and push
git add .
git commit -m "Initial commit"
git push origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Choose **gh-pages** branch and **/(root)** folder
6. Click **Save**

## 🚀 Deployment Process

### Step 1: Build and Export

The deployment process creates optimized static files:

```bash
npm run build        # Creates optimized build
npm run export-gh-pages  # Exports static files to 'out' directory
```

### Step 2: Deploy to GitHub Pages

```bash
npm run deploy      # Pushes 'out' directory to gh-pages branch
```

### Step 3: Verify Deployment

1. Wait 2-5 minutes for changes to propagate
2. Visit your GitHub Pages URL:
   - `https://YOUR_USERNAME.github.io/portfolio-website/`
   - Or your custom domain if configured

## 🔍 Troubleshooting

### Common Issues

#### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### Deployment Errors
```bash
# Check git status
git status

# Ensure you're on main branch
git checkout main

# Pull latest changes
git pull origin main

# Try deployment again
npm run deploy
```

#### GitHub Pages Not Updating
- Wait 5-10 minutes for changes to propagate
- Check GitHub Actions for deployment status
- Verify gh-pages branch has latest files

### Performance Issues

#### Mobile Performance
- The website is already optimized for mobile
- Check Lighthouse scores in Chrome DevTools
- Ensure images are properly optimized

#### Loading Speed
- Check network tab in DevTools
- Verify all assets are loading
- Consider using a CDN for better performance

## 📱 Mobile Optimization Verification

After deployment, test on various devices:

### Mobile Testing
- **iOS Safari**: iPhone/iPad
- **Android Chrome**: Various Android devices
- **Mobile Chrome DevTools**: Desktop testing

### Key Areas to Test
- ✅ Navigation menu (hamburger menu)
- ✅ Touch targets (44px minimum)
- ✅ Responsive layout
- ✅ Performance on slow networks
- ✅ Dark/light theme toggle

## 🔧 Custom Domain (Optional)

### Setup Custom Domain

1. **Add CNAME file:**
   Create `public/CNAME` with your domain:
   ```
   yourdomain.com
   ```

2. **Configure DNS:**
   Add these records to your domain provider:
   ```
   Type: CNAME
   Name: @
   Value: YOUR_USERNAME.github.io
   ```

3. **Update GitHub Pages settings:**
   - Go to repository Settings > Pages
   - Add your custom domain
   - Enable HTTPS (recommended)

## 📊 Performance Monitoring

### Lighthouse Scores
Regularly check your website performance:

1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Run audit for:
   - Performance
   - Accessibility
   - Best Practices
   - SEO

### Target Scores
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 90+
- **SEO**: 95+

## 🚀 Continuous Deployment

### GitHub Actions (Optional)

For automatic deployment on every push:

1. Create `.github/workflows/deploy.yml`
2. Configure GitHub Actions to:
   - Build on push to main
   - Deploy to gh-pages branch
   - Run tests before deployment

## 📞 Support

If you encounter issues:

1. Check the troubleshooting section above
2. Review GitHub Pages documentation
3. Check repository issues
4. Contact: marksalamon01@gmail.com

## 🎉 Success!

Once deployed, your portfolio website will be:
- ✅ Mobile-optimized
- ✅ Performance-optimized
- ✅ SEO-friendly
- ✅ Accessible
- ✅ Professional-looking

Your portfolio is now live and ready to impress potential employers and clients!
