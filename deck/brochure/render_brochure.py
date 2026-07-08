#!/usr/bin/env python3
"""
Render the tri-fold brochure HTML to a print-ready A4 PDF.
Uses Chrome headless --print-to-pdf for proper A4 sizing.
"""
import argparse, os, subprocess, sys
from pathlib import Path

def find_chrome():
    env = os.environ.get("CHROME_PATH")
    if env and Path(env).exists():
        return env
    candidates = [
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
        r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
        r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        "/usr/bin/google-chrome", "/usr/bin/chromium", "/usr/bin/chromium-browser",
    ]
    for c in candidates:
        if Path(c).exists():
            return c
    found = subprocess.run(["which", "google-chrome"], capture_output=True, text=True).stdout.strip()
    if found:
        return found
    # try 'open' on mac
    sys.exit("ERROR: Chrome/Edge not found. Set CHROME_PATH env var to the browser executable.")

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("deck", nargs="?", default="brochure.html",
                    help="Path to brochure HTML")
    ap.add_argument("--out", default=None,
                    help="Output PDF path (default: <deck_stem>.pdf)")
    ap.add_argument("--margin", type=float, default=0.0,
                    help="Page margin in mm (default: 0)")
    args = ap.parse_args()

    deck = Path(args.deck)
    if not deck.exists():
        sys.exit(f"ERROR: {deck} not found")
    work = deck.parent.resolve()
    out = Path(args.out).resolve() if args.out else work / (deck.stem + ".pdf")

    chrome = find_chrome()
    print(f"Browser: {chrome}")
    print(f"Rendering {deck.name} -> {out}")

    cmd = [
        chrome, "--headless=new", "--disable-gpu", "--no-sandbox",
        "--disable-software-rasterizer",
        f"--print-to-pdf={out}",
        f"--print-to-pdf-margin-bottom={args.margin}mm",
        f"--print-to-pdf-margin-left={args.margin}mm",
        f"--print-to-pdf-margin-right={args.margin}mm",
        f"--print-to-pdf-margin-top={args.margin}mm",
        f"--window-size=1240,1754",
        "-disable-display-font",
        "-disable-pdf-tagging",
        deck.resolve().as_uri(),
    ]
    r = subprocess.run(cmd, capture_output=True, text=True)
    if r.returncode != 0:
        print(r.stderr[-1000:])
        sys.exit(f"Rendering failed with code {r.returncode}")
    if out.exists():
        kb = out.stat().st_size / 1024
        print(f"OK: {out} ({kb:.0f} KB)")
    else:
        sys.exit("ERROR: PDF was not created")

if __name__ == "__main__":
    main()
