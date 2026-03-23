#!/bin/sh
#
# Build DSPDemo-Web for GitHub Pages (served at /DSPDemo-Web/)
#

BASE="/DSPDemo-Web"
OUT="docs"

# Build with the subpath base
yarn vite build --base="$BASE/" --outDir="$OUT"

echo ""
echo "Done. Commit and push — GitHub Pages serves from /docs on main."
