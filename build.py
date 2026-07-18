#!/usr/bin/env python
"""Inject the real contribution-data fallback and ASCII banner into
index.template.html, producing the deployed index.html.

Usage: python build.py
"""
import json

import pyfiglet

with open("../arv1ndofficial/data/contributions.json", encoding="utf-8") as f:
    data = json.load(f)
data_json = json.dumps(data, separators=(",", ":"))

banner = pyfiglet.figlet_format("ARAVINDAN", font="standard").rstrip("\n")
banner_js = banner.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")

with open("index.template.html", encoding="utf-8") as f:
    tpl = f.read()

out = tpl.replace("__FALLBACK_DATA_JSON__", data_json).replace("__BANNER_ART__", banner_js)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(out)
print(f"wrote index.html ({len(out)} bytes)")
