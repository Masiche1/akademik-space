# AUDIT.md — Akademik Space content architecture

**Audited:** 2026-11-13, from `Akademik Space.tar.gz` (extracted to `app-code/`).
**Live site:** https://akademik.space (client-rendered SPA; Convex backend).

---

## 1. Stack

- React 19 + TypeScript (~6.0) + Vite 8, React Router 7.
- Backend: Convex (`convex/`), used for auth, classes, assignments, attempts, progress, reports — **not for content**.
- Math rendering: KaTeX 0.19 via `src/components/math-text.tsx`.
- Package manager: pnpm (`pnpm-lock.yaml`, `pnpm-workspace.yaml`). Scripts: `dev`, `build` (`tsc -b && vite build`), `test` (`vitest run`), `lint`, `prettier-check`.

## 2. Content model (verified in `src/content/types.ts`)

```
Curriculum → Course → Unit → Lesson → Concept → Question
```

- `Course`: `id`, `title`, `shortTitle?`, `grade`, `framework`, `description`, `units[]`, plus **exactly one** family tag: `ib?`, `edexcel?`, `us?`, `myp?`.
- `Unit`: `id`, `code` (e.g. "3A"), `title`, `description`, `lessons[]`.
- `Lesson`: `id`, `code` (e.g. "3-1"), `title`, `goal` ("I CAN ..."), `standards[]` (curriculum codes), `vocabulary[]`, `concepts[]`.
- `Concept`: `id`, `title`, `skill`, `lesson` (mini-lesson), `questions[]`.
- Concept lesson = `sections[]` (`{heading, body}`), optional `keyFormulas[]`, optional single `workedExample{problem, solution}`.
- `Question`: `id`, `difficulty` (foundation|core|challenge), optional `paper` (IB) / `tier` (Edexcel IGCSE maths only), `totalMarks`, optional `extract` (English), `stem`, optional `parts[]`, `response`, `markscheme`.
- `response` types: `mcq`, `numeric` (parts with answers/tolerance/unit), `open` (self-assessed written response).
- `Markscheme`: `principles[]` (kind+name+statement), `steps[]` (reasoning, working, marks, markCode M/A/B/R or AO1–AO5 for English, optional `part`, optional `evidence`), `finalAnswer`, `commonErrors?`, `examinerNote?`, `levels?` (English extended-response bands).

## 3. Content authoring conventions (AUTHORING.md + observed files)

- Static TypeScript modules. **No database seeding, no importer, no CMS.** Content ships in the JS bundle.
- File layout: `src/content/courses/<course-id>/index.ts` → `unit-N/index.ts` → `lesson-N-M.ts`.
- Unit index exports `unitN`; course index exports camelCase course const; `catalog.ts` imports every course and registers it in `COURSES`.
- ID prefixes are per-course, e.g. Edexcel Y10 maths = `edm10-uN-...`, IB = `ibaas1-...` style, US = course-specific.
- Required shape per unit: **3 lessons × 2 concepts × 4 questions** = 24 questions (foundation → core → challenge → structured 7–12 mark multi-part).
- Structured questions: `parts[]` marks must sum to `totalMarks`; every markscheme step carries `part`; per-part step marks must equal part marks.
- Text formatting: `$...$` inline math, `$$...$$` display math, `**bold**`, blank-line paragraphs, `- ` bullet lists, markdown tables. **Every LaTeX backslash doubled** in TS strings; `working` fields are raw LaTeX without `$`.
- English courses: AO1–AO5 mark codes, English `principle.kind` set, no `$` allowed, extended responses need `levels`.

## 4. Validation (already in repo)

- `src/content/validate.ts`: KaTeX-renders every math fragment, checks control characters, mark sums, part/step consistency, MCQ keys, numeric answers, IB paper rules, Edexcel tier rules, English rules.
- `src/content/units.test.ts`: **auto-discovers every `courses/*/*/index.ts` via glob** — new units are validated even before course registration.
- `src/content/catalog.test.ts`: LaTeX validity + ID uniqueness + per-question checks over registered courses.

## 5. Curriculum registration

- `src/content/curricula.ts`: `Curriculum.id` is a **closed union** `"us" | "ib" | "myp" | "edexcel"`; `CURRICULA` array drives header nav, footer, home page, `/curricula/:slug` pages. `VISIBLE_CURRICULA` hides empty curricula.
- `catalog.ts` derives `US_COURSES`/`IB_COURSES`/`MYP_COURSES`/`EDEXCEL_COURSES` by the family tag on `Course`.
- Course pages (`src/pages/courses/page.tsx`) have family-specific panels (IB papers, Edexcel tiers); generic rendering otherwise.

## 6. What does NOT exist (gaps vs. the PR requirements)

1. **No notes entity.** Revision notes today = `concept.lesson.sections`. There is no separate notes type, route, or link. → Needs a minimal additive type (see CONTENT_PLAN §4).
2. **No image/asset pipeline.** No `<img>`, no asset fields, no `public/content/` convention. `MathText` renders only text/math/tables/lists. Diagrams must be described in words/LaTeX, or a small renderer extension is needed (see CONTENT_PLAN §5).
3. **No curriculum families beyond us/ib/myp/edexcel.** CIE, ICSE, CBSE, SAT, AU, CA, SG, ZA, KE all require: new optional `Course` info type + `Curriculum.id` union member + `CURRICULA` entry + catalogue filter. All additive.
4. **Question `tier` is Edexcel-only** (`"foundation" | "higher"`). Cambridge Core/Extended, ICSE/ISC, etc. need their own routing — recommend course-level tier fields rather than widening `ExamTier`.
5. **No worked-example list** — only one `workedExample` per concept lesson.

## 7. Convex / student data

- Schema has no content tables; `courseId`/`questionId` are plain strings referencing the static catalog. Progress (`questionProgress`, `courseProgress`), attempts, sets, assignments all key off those IDs → **ID stability is critical; never rename existing IDs.**
- Adding content cannot break student data as long as IDs are new and unique.

## 8. Integration method (lowest-cost path)

1. Author TypeScript modules under `src/content/courses/<new-course>/`.
2. New courses are auto-validated by `units.test.ts` on `pnpm test` even unregistered.
3. Register by: import in `catalog.ts` → add to `COURSES` → add family filter export if needed → add `Curriculum` entry in `curricula.ts`.
4. Verify with `pnpm test`, `pnpm lint`, `pnpm build`.
5. **No Hercules AI credits needed** — everything is deterministic code + content.

## 9. Commands

```bash
pnpm install
pnpm test        # vitest: units.test.ts + catalog.test.ts + convex tests
pnpm lint        # eslint --max-warnings=0
pnpm build       # tsc -b && vite build
pnpm prettier-check
```

## 10. Hercules/credits note

Content is authored as TS in-repo; nothing requires the Hercules agent runtime. The archive (`revisionshub.zip`) is 3,321 **images only** (no text layer) — extraction requires OCR/vision, which is the one step that may need an AI/vision pass; everything after that is deterministic.
