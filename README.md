# Bike Geometry Compare

Compare mountain bike frame geometries side by side – drawn to scale, with all wheels standing on the ground.

**👉 Open the app: https://ollliegits.github.io/bike-geometry/**

No installation, no account – it runs entirely in your browser.

## What you can do

- **See the difference.** Frames are overlaid in one side view, all in the same scale. Pick one frame as the *reference* and see every other frame's deviation (Δ) in the table.
- **Try different wheel sizes.** Choose 26", 27.5" or 29" for the front and rear wheel of each frame separately. The frame tilts the way the real bike would, so head angle, seat angle and bottom bracket height update automatically.
- **Show or hide frames** with the checkbox on each card.
- **Read the numbers.** Head angle, seat angle, reach, stack, chainstay length, seat tube length, travel, wheel sizes – plus wheelbase, BB height, BB drop, head tube length, fork length, fork offset and trail. Frame material and frame weight are shown too, whenever that information is available (missing values appear as "–").
- **Show dimensions** directly in the drawing, and optionally the compressed suspension travel.
- Switch the language between **English and German**.

### Navigating the drawing

| Action | How |
|---|---|
| Zoom | `Ctrl` / `Cmd` + mouse wheel (or pinch on a trackpad) |
| Move | Click and drag |
| Reset view | "Fit view" button |

### Values: selected wheels vs. manufacturer data

The *Values* menu switches the table between:

- **With selected wheels** – values recalculated for the wheel sizes you picked.
- **Manufacturer data** – the numbers as published by the manufacturer.

## Add your own frame

Click **+ Add frame**. You can either type the numbers in manually, or let an AI assistant do the research:

1. Enter the frame name including size and year, e.g. `Santa Cruz Bronson (M, 2025)`.
2. Click **Copy prompt** and paste it into any AI assistant with web access (ChatGPT, Gemini, Claude, …).
3. Paste the assistant's JSON answer into the reply field and click **Apply to form**.
4. Check the values, then **Save**.

Missing values are left empty so you can fill them in. Your frames are stored in your browser only (nothing is uploaded). Use **Export custom frames** to download them as a JSON file.

## Included frames

| Frame | Wheels (front / rear) | Source |
|---|---|---|
| Commencal Clash XS (2027) – *reference* | 27.5" / 26" | [Commencal](https://www.commencal.com/de/enduro-fully-commencal-clash-xs-pure-white-kleiner-rahmen/BT7CLAXSEU1.html) |
| Lapierre Spicy CF (XS) | 29" / 27.5" | [Lapierre](https://lapierrebikes.com/products/spicy-cf-79-lscua) |
| Kona Hei Hei Trail CR (XS, model year 2019) | 27.5" / 27.5" | [Kona archive](https://archive.konaworld.com/archive/2019/hei_hei_trail_cr.cfm) |

Each frame card shows notes on assumptions (for example derived or estimated values).

## Good to know

- Geometry data is collected from public sources and may contain errors or derived values. **Always check the manufacturer's chart before buying.**
- Drawings are a simplified model (frame, fork and wheels in side view). Wheel diameters are approximations (26" ≈ 680 mm, 27.5" ≈ 710 mm, 29" ≈ 745 mm including tyres).
- With mixed wheel sizes, calculated angles can differ slightly (up to ~0.5°) from the published ones; "Manufacturer data" shows the original numbers.
- This project is not affiliated with any bike manufacturer.

## Run it locally

Download the repository and open `index.html` in a browser. No build step required.

## For contributors

New frames can also be added permanently in [`frames-data.js`](frames-data.js) – the field definitions are described at the top of that file.
