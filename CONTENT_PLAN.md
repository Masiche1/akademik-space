# CONTENT_PLAN.md — Akademik Space expansion plan

Pairs with `AUDIT.md`. Archive inventory: `SOURCE_INVENTORY.csv` (3,321 files, all images).

---

## 1. Archive reality check

`revisionshub.zip` contains **no documents, PDFs or text** — only images:

| Pattern | Count | What it likely is | Extraction difficulty |
|---|---|---|---|
| `timestamp-ms` (`1794…jpg`) | 2,673 | Gallery/camera roll dump, mostly 2026-11-06→09 | High (photos, possibly handwriting) |
| `android-screenshot` (`Screenshot_…`) | 241 | Screenshots of digital notes/docs, 2026-11-08/09 | Medium (clean text, OCR-friendly) |
| `whatsapp` (`IMG-YYYYMMDD-WA…`) | 336 | WhatsApp forwards, 2020-06 → 2026-06 | Medium–high |
| `facebook-saved` (`FB_IMG_…`) | 60 | Saved Facebook images, 2026-11-07 | Medium |
| `phone-photo` (`IMG_YYYYMMDD_…`) | 10 | High-res phone photos | High |
| encrypted `.crypt14` | 1 | Encrypted webp, undecryptable | — |

**Implication:** the archive is *source evidence*, not structured content. Every item needs OCR/vision → transcript → curriculum mapping → authoring. This is the only stage where AI/vision credits are unavoidable; everything downstream is deterministic TypeScript.

### Recommended processing pipeline (minimal AI spend)

1. **Extract** zip to `archive/` (never modify original).
2. **Deduplicate** by perceptual hash (e.g. `imagededup`/`dupes`) — WhatsApp forwards repeat heavily.
3. **OCR pass** — Tesseract for screenshots (fast, free); a vision model only for photos/handwriting, batched, and only after OCR confidence filtering.
4. **Auto-classify** transcripts with cheap heuristics + a small LLM pass: detect curriculum markers ("Edexcel", "Cambridge", "CBSE", "CIE 0607", "IB AA", mark scheme logos, paper codes like `4MA1`, `0580`, `9709`).
5. **Human/agent review queue** for low-confidence items → `CURRICULUM_MAP.csv`.
6. **Author** into TS modules per `AUTHORING.md`; archive images become *references* for diagrams, not embedded assets (see §5).

Do **not** attempt to auto-convert archive pages into questions — handwriting/OCR errors make wrong-answer risk too high. Use the archive to (a) identify which topics students struggle with, (b) source diagram references, (c) recover markscheme-style phrasing, then author clean content.

---

## 2. Coverage matrix — current vs. proposed

### Live today (verified in `catalog.ts`/`curricula.ts`)

| Curriculum | Courses live | Status |
|---|---|---|
| US K-12 (CCSS/NGSS) | 13 (math g7-8, science g7-8, ELA g7-11, bio g9, earth-space g9, chem g10, physics g11) + algebra-1/geometry/algebra-2/precalc | Good; gaps: g9-12 ELA thin, no g12, no stats beyond precalc |
| IB Diploma | AA SL/HL y1-2, AI SL/HL y1-2 (8 courses) | Maths only; no sciences/humanities DP |
| IB MYP | maths y1-2, sciences y1-2 (4 courses) | Thin — only y1-2 of 5 |
| Pearson Edexcel | maths y8-11, englang y8-11, englit y8-11, science y8-9, bio/chem/phys y10-11 (22 courses) | Strongest coverage; sciences split y10-11 only |

### Proposed additions (priority order)

| # | Curriculum | Families/codes | Entry point | Notes |
|---|---|---|---|---|
| 1 | **Cambridge IGCSE** | 0580 Maths, 0606/0625/0627 Bio/Chem/Phys, 0500/0990 English | `cie` | Core/Extended tier; biggest international demand after Edexcel. **Decision (confirmed):** IGCSE is exam-board content, NOT year-banded — `CieInfo` has no year field and none is added; the qualification itself is the level signal. Year-banded Cambridge coverage comes from Lower Secondary (row 3), not by splitting IGCSE. |
| 2 | **Cambridge AS & A Level** | 9709 Maths, 9702/9701/9700 sciences, 9093 English | `cie` (same family, `qualification:"a-level"`) | Reuses CIE plumbing |
| 3 | **Cambridge Primary/Lower Secondary** | 0843/0990 etc. | `cie` | Later |
| 4 | **CBSE** | Class 9-10 Maths/Science/English (coded 041/086/184), Class 11-12 | `cbse` | NCERT-aligned; distinct mark codes (competency-based Qs) |
| 5 | **ICSE / ISC** | ICSE 2026 spec (Sel/Spec), ISC | `icse` | Keep separate from CBSE — different paper style, 80-mark papers, step marking |
| 6 | **SAT** | Digital SAT (R&W + Math) | `sat` | Exam-prep pathway, not a grade — section/domain tags |
| 7 | **ACT** | | `act` | Optional, after SAT |
| 8 | **Australian Curriculum** | Year 7-10 Maths/Science/English; state variants (NSW etc.) | `au` | Identify state in `framework` string |
| 9 | **Canadian** | Provincial — start Ontario (Grade 9-12 de-streamed Maths) | `ca` | Province field required |
| 10 | **Singapore** | MOE primary/secondary maths/science | `sg` | Model papers style |
| 11 | **South Africa CAPS** | Grades 10-12 Maths/Physical Science/English | `za` | CAPS terminology distinct |
| 12 | **Kenya CBC/ KCSE** | CBC lower/upper primary, secondary | `ke` | Only if source quality justifies |
| 13 | **New Zealand** | NZ Curriculum levels 2-8 | `nz` | Later |

**Rule (from PR):** no empty catalogue entries. A curriculum appears only when ≥1 course with real reviewed units exists. `VISIBLE_CURRICULA` already hides empty groups, but don't register a `Curriculum` entry with zero courses.

---

## 3. New-curriculum plumbing recipe (minimal, additive)

Each new family needs exactly four touch-points — all backward compatible:

1. **`types.ts`**: add info type + optional field on `Course`:
   ```ts
   export type CieInfo = { qualification: string; subject: string; tier?: "core" | "extended" };
   // Course: cie?: CieInfo;
   ```
   Reuse the same pattern for `CbseInfo`, `IcseInfo`, `SatInfo`, etc. Keep `ExamTier` untouched — Cambridge Core/Extended lives at course level (two courses or one course + `tier` field on `CieInfo` per course variant, e.g. `cie-igcse-maths-core` / `-extended`).
2. **`curricula.ts`**: add `"cie"` etc. to `Curriculum.id` union + a `CURRICULA` entry with groups filtered on the new tag.
3. **`catalog.ts`**: import course, add to `COURSES`, add `CIE_COURSES`-style export if the UI needs it.
4. **Course `index.ts`**: set the family field, e.g. `cie: { qualification: "igcse", subject: "mathematics-0580", tier: "extended" }`.

The sample batch (`app-code/src/content/courses/cie-igcse-maths/`) demonstrates steps 1 and 4; it is intentionally **not yet registered** in `catalog.ts`/`curricula.ts` so it can't appear half-finished — registration is a 6-line diff once more units land.

---

## 4. Synthesised notes — proposed minimal design

Requirement: notes render on a **separate topic-notes page**, linked from the lesson. Notes must include worked examples with diagrams/descriptions.

**Recommended additive model** (no existing type changes needed beyond one optional field):

```ts
// types.ts
export type TopicNote = {
  id: string;                    // unique, e.g. "ciem-u1-indices-notes"
  title: string;                 // "Laws of Indices — revision notes"
  summary?: string;              // one line for the link card
  sections: LessonSection[];     // same renderer as lesson sections (headings + math + tables + lists)
};

// Lesson:
notes?: TopicNote[];             // 1+ per lesson, usually one per concept/topic
```

- Reuses `LessonSection`, so `MathText` renders notes with zero new renderer work.
- Notes page route: `/courses/:courseId/lessons/:lessonId/notes/:noteId` (or a `/notes/:noteId` flat route keyed off a generated index like `catalog.ts` does for questions).
- Lesson UI adds a "Revision notes" link card per `notes[]` entry — small additive component.
- Worked examples inside notes: `$$...$$` display math + optional ASCII/word-described diagrams until §5 lands.
- **Alternative considered:** separate `src/content/notes/` modules keyed by lesson id. Rejected for now — co-locating `notes` on the lesson keeps provenance and IDs together; can be split later without data loss.

---

## 5. Diagrams and visuals — honest constraint

The app has **no image pipeline**. Options, in order of preference:

1. **Describe diagrams precisely in text + LaTeX** (works today): "In the diagram, triangle ABC has AB = 5 cm, angle ABC = 90°…" — already the de-facto convention; every existing question does this.
2. **Markdown-table "diagrams"** for grids/coordinates — already supported by `MathText`.
3. **Small additive extension (recommended next sprint):** allow `![alt](/content/<file>.svg)` inside `MathText` text and render `<img>`; add `public/content/` for SVGs. ~30 lines in `math-text.tsx` + asset manifest. Enables the labelled diagrams the PR wants without a CMS.
4. TikZ/PGF is **not** an option — KaTeX doesn't render it.

For the sample unit, diagrams are described in words + LaTeX (convention-compliant). Where a figure is essential, the stem says "The diagram shows…" and the markscheme references it.

---

## 6. Batch plan

| Batch | Content | Effort | Gate |
|---|---|---|---|
| **B0 (this delivery)** | AUDIT, inventory, plan, type extensions, 1 CIE sample unit | Done here | B |
| B1 | CIE IGCSE Maths 0580 Extended — remaining 3 units (Number complete → Algebra → Geometry/Trigonometry → Statistics/Probability) | ~3 units × 24 Qs | C |
| B2 | CIE IGCSE Sciences (0653/0654/0655 or separate) y10 equivalent | 3 courses | C |
| B3 | CBSE Class 10 Maths + Science | 2 courses | C |
| B4 | ICSE Class 10 Maths + Science | 2 courses | C |
| B5 | SAT Math + Reading | 2 "courses" (section-based) | C |
| B6 | Edexcel gap-fill (MYP y3-5, DP sciences, US g12) | several | C |
| B7 | AU/CA/SG/ZA/KE first courses | 1-2 each | C |

Each batch = one reviewable PR: new folders + ≤10 lines of registration diff. Run `pnpm test && pnpm lint && pnpm build` before handoff.

---

## 7. Quality gates per batch

- `validateUnit` clean (auto via `units.test.ts` glob — works unregistered).
- Every question: principles ≥1, step marks = totalMarks, parts consistent, plausible MCQ distractors, `commonErrors` real.
- Every lesson: goal, 4-7 vocabulary terms, 2-3 sections, keyFormulas, 1 worked example, **plus `notes[]`** with worked examples.
- IDs globally unique with course prefix; never reuse/rename existing IDs.
- Numbers double-checked; LaTeX backslashes doubled; `working` fields raw LaTeX.
