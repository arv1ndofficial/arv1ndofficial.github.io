# arv1ndofficial.github.io

Interactive terminal-style personal site, served as a GitHub Pages user site
at [arv1ndofficial.github.io](https://arv1ndofficial.github.io).

Type `help` in the terminal for available commands. Contribution stats are
fetched live from `arv1ndofficial/arv1ndofficial`'s `data/contributions.json`
at page load, falling back to a baked-in snapshot if the fetch fails.

## Regenerating

`index.html` is generated from `index.template.html` — don't edit it
directly. After changing the template or pulling fresh contribution data
into `../arv1ndofficial/data/contributions.json`:

```
python build.py
```
