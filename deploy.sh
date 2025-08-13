#!/bin/bash

# Build the Next.js site
npm run build

# Create necessary files
touch out/.nojekyll
cp static-index.html out/backup.html

# Initialize main branch if needed
git checkout -b main

# Add all files from out directory
git add -f out/

# Commit changes
git commit -m "Deploy website"

# Push to main branch
git subtree push --prefix out origin main

# Return to main branch
git checkout main

echo "Deployment complete! Your site should be available at https://mark-prog238.github.io"
