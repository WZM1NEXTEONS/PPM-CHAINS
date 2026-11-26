#!/usr/bin/env bash
# Downloads the original Figma assets used by index.html into ./assets
# Source: Figma file PAfjhjXKNj26KyP3fDgYTl, node 96:542
# NOTE: these Figma MCP asset URLs are temporary (~7 days from 14 Oct 2026).
# If any fail, re-run the Figma MCP get_design_context for that node to get fresh URLs.
set -u
cd "$(dirname "$0")" && mkdir -p assets
B=https://www.figma.com/api/mcp/asset
get(){ curl -fL --silent --show-error -o "assets/$1" "$B/$2" && echo "ok   $1" || echo "FAIL $1"; }

# Hero (96:1922)
get hero-portrait.png   c90f297b-b276-46fa-8613-5cd188d78ec0/85d07.png
get hero-fade.svg       c90f297b-b276-46fa-8613-5cd188d78ec0/138de.svg
get logo.svg            c90f297b-b276-46fa-8613-5cd188d78ec0/461ab.svg
get icon-search.svg     c90f297b-b276-46fa-8613-5cd188d78ec0/482d0.svg
# Trending cards (96:972)
get chain-pendant.png   6e9eac75-2f4f-4cb1-930b-b7fda6cbe107/267ea.png
get chain-beads.png     6e9eac75-2f4f-4cb1-930b-b7fda6cbe107/aa560.png
get icon-arrow.svg      6e9eac75-2f4f-4cb1-930b-b7fda6cbe107/bfc27.svg
# Stats bar (96:1009)
get icon-cad.svg        7216612f-9271-4cff-8ea1-96bb1f85594e/58bde.svg
get divider.svg         7216612f-9271-4cff-8ea1-96bb1f85594e/d6478.svg
get icon-facility.svg   7216612f-9271-4cff-8ea1-96bb1f85594e/dd173.svg
get icon-team.svg       7216612f-9271-4cff-8ea1-96bb1f85594e/ac4b9.svg
get icon-quality.svg    7216612f-9271-4cff-8ea1-96bb1f85594e/d5034.svg
# Two approaches (96:1054)
get machine-made-bg.png 6816d297-5810-4565-857c-78e7bd8b2cc8/2d9ec.png
get kerala-bg.png       6816d297-5810-4565-857c-78e7bd8b2cc8/b1e33.png
# Selected chain designs (96:780)
get ring.png            5d11943c-5408-4111-9310-5ec69f4b2b48/5e6f1.png
# Craft (96:2297)
get icon-arrow-right.svg dd774a11-3f67-47f8-88d4-b351e5a3158a/27c5b.svg
# Range (96:1122)
get range-wholesale.png 333218e3-3d09-4f29-b7b6-3de0db3f3598/de122.png
get range-machine.png   333218e3-3d09-4f29-b7b6-3de0db3f3598/32557.png
get range-kerala.png    333218e3-3d09-4f29-b7b6-3de0db3f3598/38a40.png
# About (96:2208)
get glow.svg            90821b40-6de8-42fc-abb8-c5fe68ea2782/bc372.svg
get icon-tag.svg        90821b40-6de8-42fc-abb8-c5fe68ea2782/f1280.svg
# CTA (96:2499)
get cta-bg.png          7b11a7bd-d2dc-4b0d-af93-40c808af11de/adf75.png
# Footer (96:1539)
get footer-glow.svg     992318c0-f20c-400a-8b7f-bd8e25decb60/58576.svg
echo "Done. Open index.html"

