#!/bin/bash
# Compile all Faust .dsp files to WASM + JSON for use in the web app.
# Run automatically as part of `yarn build` via the prebuild script.

set -e

SRC_DIR="src/audio/faust"
OUT_DIR="src/audio/faust/compiled"

mkdir -p "$OUT_DIR"

for dsp in "$SRC_DIR"/*.dsp; do
  name=$(basename "$dsp" .dsp)
  echo "Compiling $name.dsp..."

  # Compile to a temp dir
  tmpdir=$(mktemp -d)
  npx faust2wasm-ts "$dsp" "$tmpdir" 2>&1 | grep -E "Compilation|Error"

  # Move only the files we need
  mv "$tmpdir/dsp-module.wasm" "$OUT_DIR/$name.wasm"
  mv "$tmpdir/dsp-meta.json" "$OUT_DIR/$name-meta.json"
  rm -rf "$tmpdir"
done

echo "All Faust DSPs compiled."
