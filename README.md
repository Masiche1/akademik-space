# Akademik Space — content expansion package

Prepared 2026-11-13. Everything here is designed to integrate into the existing
TypeScript-authored content system with **zero Hercules AI credits**.

## Contents

| File / folder | What it is |
|---|---|
| `AUDIT.md` | Verified architecture audit of `app-code/` (the app source from `Akademik Space.tar.gz`) |
| `CONTENT_PLAN.md` | Coverage matrix, curriculum expansion recipes, notes/asset design, batch plan |
| `SOURCE_INVENTORY.csv` | All 3,321 files in `revisionshub.zip` classified by naming pattern and batch group |
| `CURRICULUM_MAP.csv` | Per-file curriculum mapping skeleton — fill after OCR/vision pass |
| `app-code/` | Extracted application source (read-only reference copy) |
| `app-code/src/content/courses/cie-igcse-maths/` | **Gate B sample**: Cambridge IGCSE Maths 0580 Extended, Unit 1 "Number" (3 lessons, 24 questions, revision notes) |
| `app-code/src/content/types.ts` | Minimal additive extensions: `TopicNote`/`Lesson.notes`, `CieInfo`/`Course.cie` |

## What was changed in `app-code/`

Only `src/content/types.ts` (additive optional fields — fully backward compatible)
and the new `cie-igcse-maths` course folder. **Nothing is registered** in
`catalog.ts`/`curricula.ts` yet, so the live app is unaffected. The sample unit is
still validated automatically by `src/content/units.test.ts` (glob-based).

## To validate the sample

```bash
cd app-code
corepack pnpm install --frozen-lockfile
corepack pnpm test     # runs units.test.ts + catalog.test.ts
corepack pnpm lint
corepack pnpm build
```

## To register the Cambridge course once more units exist

1. `catalog.ts`: `import { cieIgcseMaths } from "./courses/cie-igcse-maths/index.ts";` → add to `COURSES` → add `export const CIE_COURSES = COURSES.filter((c) => c.cie);`
2. `curricula.ts`: add `"cie"` to the `Curriculum.id` union and a `CURRICULA` entry grouping `CIE_COURSES` (see CONTENT_PLAN §3).

## Processing `revisionshub.zip`

The archive is 3,321 images (photos, screenshots, WhatsApp/Facebook saves) with no
text layer. See CONTENT_PLAN §1 for the recommended low-cost pipeline: dedupe →
Tesseract OCR on screenshots → vision pass only on photos → auto-classify →
`CURRICULUM_MAP.csv` → author into TS modules. The archive should inform content;
it should not be auto-converted into questions.
