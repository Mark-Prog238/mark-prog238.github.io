#!/bin/bash

# Build the site
npm run build

# Navigate to the out directory (for Next.js static export)

# Create .nojekyll file
touch .nojekyll

# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Deploy to GitHub Pages"

# Rename branch to gh-pages
git branch -M gh-pages

# Add remote if not already done
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/Mark-Prog238/mark-prog238.github.io.git

# Force push to gh-pages branch
git push -f origin gh-pages

echo "Deployed to GitHub Pages!"