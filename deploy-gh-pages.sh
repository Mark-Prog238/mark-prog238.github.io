#!/bin/bash

# Build the site
npm run build

# Create .nojekyll file
touch out/.nojekyll

# Navigate to the out directory
cd out

# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Deploy to GitHub Pages"

# Add remote if not already done
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/Mark-Prog238/mark-prog238.github.io.git

# Force push to main branch
git push -f origin main

echo "Deployed to GitHub Pages!"
