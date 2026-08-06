# assets/

Source material that is **not** shipped. Nothing in this directory is served or
copied into `dist/` — only `public/` is. It lives here so other sizes can be
re-derived later without digging through git history.

## originals/

The full-resolution gallery photographs.

| File | Dimensions | Size |
| --- | --- | --- |
| `BlackAndWhiteBoat.jpg` | 5909 × 3939 | 2.0 MB |
| `CaliforniaSkyline.png` | 3246 × 2164 | 9.4 MB |
| `CuriousFox.png` | 3238 × 2156 | 13.1 MB |

The two PNGs are photographs that were saved in the wrong format; their
derivatives in `public/images/` are AVIF and WebP.

## Re-deriving `public/images/`

```sh
./scripts/build-images.sh
```

That regenerates every `<name>-<width>.{avif,webp}` derivative, the
`og-card.jpg` social image, and the raster favicons from `public/favicon.svg`.
Add or replace a photo here, adjust the `WIDTHS` array in the script if the
gallery layout changes, and re-run it — the derivatives are committed, so
there is no build-time image step to keep in sync.
