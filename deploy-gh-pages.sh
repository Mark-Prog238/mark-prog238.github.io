#!/bin/bash

# Mark Dev Portfolio Website - GitHub Pages Deployment Script
# This script builds and deploys the portfolio website to GitHub Pages

echo "🚀 Starting deployment to GitHub Pages..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Check if git is available
if ! command -v git &> /dev/null; then
    echo "❌ Error: Git is not installed or not in PATH."
    exit 1
fi

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Error: Not a git repository. Please initialize git first."
    exit 1
fi

# Check if we have uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  Warning: You have uncommitted changes. Consider committing them first."
    read -p "Continue anyway? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Deployment cancelled."
        exit 1
    fi
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Error: Failed to install dependencies."
        exit 1
    fi
fi

# Build and export the project
echo "🔨 Building and exporting the project..."
npm run export-gh-pages
if [ $? -ne 0 ]; then
    echo "❌ Error: Build and export failed."
    exit 1
fi

# Check if out directory exists
if [ ! -d "out" ]; then
    echo "❌ Error: Build output directory 'out' not found."
    exit 1
fi

# Add all files to git
echo "📝 Adding build files to git..."
git add out/
git add .nojekyll

# Commit the changes
echo "💾 Committing build files..."
git commit -m "Deploy to GitHub Pages - $(date '+%Y-%m-%d %H:%M:%S')"

# Push to gh-pages branch
echo "🚀 Pushing to GitHub Pages..."
git subtree push --prefix out origin gh-pages

if [ $? -eq 0 ]; then
    echo "✅ Deployment successful!"
    echo "🌐 Your portfolio website should be available at: https://mark-prog238.github.io/portfolio-website/"
    echo "⏰ It may take a few minutes for changes to appear."
else
    echo "❌ Error: Failed to push to GitHub Pages."
    echo "💡 Make sure you have the gh-pages branch set up and have proper permissions."
    exit 1
fi

echo "🎉 Deployment completed!"