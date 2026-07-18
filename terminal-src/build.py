#!/usr/bin/env python
"""Inject the real contribution-data fallback and ASCII banner into
index.template.html, producing ../public/terminal/index.html (picked up
verbatim by the Vite build and served at /terminal/).

Usage: python build.py
"""
import json
from pathlib import Path

import pyfiglet

HERE = Path(__file__).parent
DATA_PATH = HERE / "../../arv1ndofficial/data/contributions.json"
OUT_PATH = HERE / "../public/terminal/index.html"

with open(DATA_PATH, encoding="utf-8") as f:
    data = json.load(f)
data_json = json.dumps(data, separators=(",", ":"))

banner = pyfiglet.figlet_format("ARAVINDAN", font="standard").rstrip("\n")
banner_js = banner.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")

with open(HERE / "index.template.html", encoding="utf-8") as f:
    tpl = f.read()

out = tpl.replace("__FALLBACK_DATA_JSON__", data_json).replace("__BANNER_ART__", banner_js)

OUT_PATH.parent.mkdir(parents=True, exist_ok=True)
with open(OUT_PATH, "w", encoding="utf-8") as f:
    f.write(out)
print(f"wrote {OUT_PATH} ({len(out)} bytes)")
