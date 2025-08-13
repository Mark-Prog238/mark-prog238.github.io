#!/bin/bash

# Build the Next.js project for static export
echo "Building project..."
npm run build

# Create .nojekyll file to prevent GitHub Pages from processing with Jekyll
touch out/.nojekyll

# Initialize git if not already done
if [ ! -d ".git" ]; then
    git init
    git add .
    git commit -m "Initial commit"
fi

# Add the built files
git add out/
git commit -m "Deploy to GitHub Pages"

# Create and switch to gh-pages branch
git subtree push --prefix out origin gh-pages

echo "Deployment complete! Your site should be available at: https://mark-prog238.github.io"