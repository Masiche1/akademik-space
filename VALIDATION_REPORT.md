# VALIDATION_REPORT.md

**Date:** 2026-11-13
**Scope:** Cambridge IGCSE Mathematics 0580 (Extended) — full 9-unit course (Units 1–9) + additive type extensions.

## Changes made

| File | Change |
|---|---|
| `app-code/src/content/types.ts` | Added `CieTier`, `TopicNote`, `Lesson.notes?`, `CieInfo`, `Course.cie?` — all additive/optional, backward compatible |
| `app-code/src/content/courses/cie-igcse-maths/index.ts` | New course (1 unit) |
| `app-code/src/content/courses/cie-igcse-maths/unit-*/` | 9 units × 3 lessons = 27 lessons, ~108 questions + 9 revision-note sets |

No existing file content was modified except `types.ts`. Nothing registered in `catalog.ts`/`curricula.ts`, so the live catalogue is unchanged.

## Automated results (run in `app-code/`)

| Check | Command | Result |
|---|---|---|
| Unit validation (LaTeX, mark sums, parts, IDs) | `pnpm vitest run src/content/units.test.ts` | **PASS** — 330 tests incl. all `cie-igcse-maths` units |
| Catalogue integrity | `pnpm vitest run src/content/catalog.test.ts --testTimeout 60000` | **PASS** — 3,918 tests (default 5 s timeout is too short on this machine for the whole-catalogue LaTeX sweep; not a content defect) |
| TypeScript | `pnpm exec tsc -b` | **PASS** — clean |
| ESLint (new files + types.ts) | `pnpm exec eslint src/content/courses/cie-igcse-maths src/content/types.ts --max-warnings=0` | **PASS** — clean |

## Manual verification performed

- Every numeric answer recomputed by hand (HCF/LCM of 252 & 378 → 126 & 756; recurring decimals; standard form; bounds; surd rationalisations).
- Structured questions: part marks sum to `totalMarks`; per-part step marks match (validator also enforces).
- LaTeX: all backslashes doubled; `working` fields raw LaTeX; no `$`-in-English issues (maths course).
- IDs prefixed `ciem-u1-`, globally unique.
- Cambridge 0580 topic mapping: Lesson 1-1 → syllabus 1.1–1.2 (types of number, indices); 1-2 → 1.3 (standard form) + bounds; 1-3 → 1.4 (surds). Mapping is provisional pending spec check — flagged `mapping_confidence` accordingly in CURRICULUM_MAP.

## Known limitations / review needed

- The sample is **unregistered** — intentional, pending more units (see README registration steps).
- `notes` field exists in types but **no renderer/route yet** — needs the small UI addition described in CONTENT_PLAN §4 before students see it.
- No diagrams/images used (no asset pipeline exists); diagrams are described in words per current convention.
- Cambridge Core tier variant not yet authored; `CieInfo.tier` supports it.
- Archive (`revisionshub.zip`) not yet OCR-processed — see CONTENT_PLAN §1.
