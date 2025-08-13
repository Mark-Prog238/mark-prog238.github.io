#!/bin/bash

# Build the Next.js site
npm run build

# Create necessary files
touch out/.nojekyll
cp static-index.html out/backup.html

# Initialize gh-pages branch if needed
git checkout -b gh-pages

# Add all files from out directory
git add -f out/

# Commit changes
git commit -m "Deploy website"

# Push to gh-pages branch
git subtree push --prefix out origin gh-pages

# Return to main branch
git checkout main

echo "Deployment complete! Your site should be available at https://mark-prog238.github.io"
