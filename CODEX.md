## Codex Instructions

These instructions are specific to Codex and complement `CLAUDE.md`.

### Reading Order
- Start with `README.md`, then `ARCHITECTURE.md` and `SPEC.md`.
- Use `CLAUDE.md` for shared AI rules.

### Language Rules
- All documentation, code comments, class names, and identifiers must be in English.
- Website content stays in Croatian (copy, headings, and UI text in `content/`).

### Change Discipline
- Prefer minimal, focused diffs; avoid refactors unless explicitly requested.
- Do not add dependencies without a clear requirement.
- Do not change marketing copy unless explicitly requested.
- Preserve the static-site architecture and existing patterns.

### Practical Notes
- Content source of truth: `content/` for page copy, `lib/config/site.ts` for NAP data.
- If a change affects scope (forms, CMS, SSR), update `SPEC.md` and `ARCHITECTURE.md`.
- Avoid destructive git commands.
