# Week 5 — Handoff notes (SIS 2 starter design)

## Routes (from the prototype)
- `/` — Posts list (posts-desktop / posts-phone)
- `/post/:id` — Single post (post-desktop)
- `/contact` — Contact page (in nav)
- `*` — 404 page (404-desktop)

## Components → React files
- Header → `src/components/Header.tsx`
- PostCard → `src/components/ui/Card.tsx`
- Button → `src/components/ui/Button.tsx`
- Tag → `src/components/ui/Tag.tsx`
- Logo → `src/assets/logo.svg`

## Button variants → prop
- `variant="primary"` — filled, blue (default)
- `variant="secondary"` — ghost, blue outline

## PostCard layout
- direction: vertical (image on top, content below)
- gap: 12px
- padding: 16px
- radius: 8px
- fill: color/surface
- stroke: color/border, 1px inside

## PostCards grid
- direction: horizontal (desktop)
- gap: 24px

## Breakpoint change
- phone: 1 column, header stacked (logo on top, nav below)
- desktop: 3 columns, header in one row
- Media query: `@media (min-width: 640px)`

## Tokens (all ten)
- color/primary → #1d4ed8
- color/background → #ffffff
- color/surface → #f8fafc
- color/text → #111827
- color/text-muted → #445266
- color/border → #e5e7eb
- space/2 → 8px
- space/4 → 16px
- space/6 → 24px
- radius/md → 12px
