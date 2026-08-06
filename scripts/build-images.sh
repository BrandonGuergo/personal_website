#!/usr/bin/env bash
#
# One-time (re-)encode of the gallery photos.
#
# The three photos in assets/originals/ are static and change roughly never, so
# their derivatives are committed to the repo rather than produced by a
# build-time Vite plugin. Run this only when a photo is added or replaced.
#
# Requires ImageMagick 7 built with libheif (AVIF) and libwebp:
#   brew install imagemagick
#   magick -list format | grep -E 'AVIF|WEBP'
#
# Usage: ./scripts/build-images.sh

set -euo pipefail

cd "$(dirname "$0")/.."

SRC=assets/originals
OUT=public/images

# The gallery cell is ~392px wide at the max-w-7xl desktop layout and at most
# ~703px in the single-column mobile layout, so 400/800 carry the common cases
# and 1200/1600 exist for 2x and 3x displays.
WIDTHS=(400 800 1200 1600)

AVIF_QUALITY=50
WEBP_QUALITY=75

mkdir -p "$OUT"

for src in "$SRC"/*.{jpg,png}; do
  [ -e "$src" ] || continue
  base=$(basename "$src")
  base=${base%.*}

  for w in "${WIDTHS[@]}"; do
    for fmt in avif webp; do
      case "$fmt" in
        avif) q=$AVIF_QUALITY ;;
        webp) q=$WEBP_QUALITY ;;
      esac
      magick "$src" \
        -colorspace sRGB \
        -resize "${w}x" \
        -strip \
        -quality "$q" \
        "$OUT/${base}-${w}.${fmt}"
      printf '%-40s %s\n' "$OUT/${base}-${w}.${fmt}" \
        "$(du -h "$OUT/${base}-${w}.${fmt}" | cut -f1)"
    done
  done
done

# Open Graph / Twitter card image. Crawlers do not reliably decode AVIF or
# WebP, so this one stays JPEG. 1200x630 is the size both cards expect.
magick "$SRC/CaliforniaSkyline.png" \
  -colorspace sRGB \
  -resize 1200x630^ \
  -gravity center \
  -extent 1200x630 \
  -strip \
  -quality 82 \
  "$OUT/og-card.jpg"
printf '%-40s %s\n' "$OUT/og-card.jpg" "$(du -h "$OUT/og-card.jpg" | cut -f1)"

# Raster favicons, derived from public/favicon.svg (the hand-authored source).
# Modern browsers take the SVG; the .ico covers older ones and the Windows
# taskbar. apple-touch-icon is flattened because iOS applies its own mask and
# renders transparency as black.
magick -background none public/favicon.svg \
  -define icon:auto-resize=48,32,16 \
  public/favicon.ico

magick -background "#1f4d3a" public/favicon.svg \
  -flatten \
  -resize 180x180 \
  -depth 8 -strip \
  public/apple-touch-icon.png

printf '%-40s %s\n' public/favicon.ico "$(du -h public/favicon.ico | cut -f1)"
printf '%-40s %s\n' public/apple-touch-icon.png "$(du -h public/apple-touch-icon.png | cut -f1)"
