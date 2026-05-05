# Hawklabs Website

Static website for Hawklabs and the Birds of War universe.

The site is the public home base for:

- Birds of War: Lost Contact demo updates
- Spoiler-safe lore drops
- Hawklabs contact and launch-list signup
- Public universe/worldbuilding pages

## Current Public Focus

Lost Contact is presented as a near-complete first level/demo.

Public messaging should mention:

- Build 1.5.3
- VFX polish
- Sound pass
- Game flow improvements
- Graphics polish
- Level optimization
- Commander Hawk losing contact during South recon

Do not publicly reveal classified endgame details, future FOB consequences, or later timeline twists.

## Project Structure

```text
.
├── index.html          # Main landing page
├── styles.css          # Site styling and responsive layout
├── script.js           # Mobile nav, email helpers, signup behavior
├── thanks.html         # Launch-list thank-you page
├── assets/             # Web-ready images used by the site
└── lore/               # Spoiler-safe public lore pages
```

## Local Preview

From this folder:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://127.0.0.1:8000/
```

## Lore Pages

The public lore hub lives at:

```text
/lore/
```

Current spoiler-safe pages:

- `/lore/universe/`
- `/lore/commander-hawk/`
- `/lore/crow-threat/`
- `/lore/the-drift/`
- `/lore/known-territories/`
- `/lore/lost-contact/`

## Brand Rules

Birds of War uses the Amber Command visual lock:

- Amber belongs to Hawk.
- Red belongs to danger.
- Blue and grey belong to the world.
- No magic. Strange events should stay science-forward.
- Readability beats realism.
- Hawk is the cleanest light source.

## Signup Behavior

The launch-list form tries to post to:

```text
/api/subscribe
```

If that endpoint is unavailable, `script.js` falls back to the normal form action:

```text
/thanks.html
```

## Notes

Unused assets have not been removed yet. Keep the cleanup pass separate so approved visuals are not accidentally deleted.
