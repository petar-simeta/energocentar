## AI Instructions (Claude Code + Codex)

This project uses both Claude Code and Codex. These rules apply to both tools.

### Priorities
- Read `README.md`, then `ARCHITECTURE.md` and `SPEC.md` before making changes.
- Follow the existing content system in `content/` and the NAP source of truth in `lib/config/site.ts`.
- Avoid new dependencies unless explicitly requested.
- Prefer small, clearly explained changes (minimal diff).
- Do not change marketing copy unless explicitly requested.

### Language Rules
- All documentation, code comments, class names, and identifiers must be in English.
- Website content stays in Croatian (copy, headings, and UI text in `content/`).

### Workflow
- For design or content tasks, verify the structure in `SPEC.md`.
- For technical tasks, check `ARCHITECTURE.md` for existing patterns.
- Do not run destructive git commands.

### Plan Mode
- Plan must be extremely concise (grammar is secondary).
- At the end of the plan, list unresolved questions, if any.
