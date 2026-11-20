# Pearson Edexcel IAS & IAL: content plan and rules

Read `src/content/AUTHORING.md` first (shape, quality bar, LaTeX rules, verification). This file ADDS the Edexcel
IAS/IAL rules and lists every course. Where they differ, this file wins for these courses.

## Rules
- Courses (folder = course id): `edx-ias-<subject>` for International Advanced Subsidiary and
  `edx-ial-<subject>` for International Advanced Level. `edx-ial-<subject>-y1` / `-y2` split a qualification
  across its two years of study where the spec is large.
- `edexcel` field: `{ stage: "ias" | "ial", subject, year }`. IAS uses `year: 1`; IAL uses `year: 1` (AS content:
  first-half units) and `year: 2` (A2 content: second-half units).
- Unit folders: `src/content/courses/<course-id>/unit-N/` with `index.ts` exporting `unitN`. Lesson files
  `lesson-N-M.ts` export `lessonNM`; lesson `code` is "N-M".
- Id prefixes: `edias-<subject>-uN-` (IAS), `edial-<subject>-uN-` (IAL). Question ids:
  `<prefix><concept-slug>-q1` .. `-q4`.
- British English everywhere: "factorise", "metres", "colour", "whilst" is fine but prefer "while",
  "programme". Edexcel command words: "Show that", "Prove", "Deduce", "Hence", "Obtain", "Evaluate",
  "Express ... in the form", "State the value of".
- `standards`: use the real Edexcel unit codes, e.g. `"WMA11 P1"`, `"WME01 M1"`, `"WST01 S1"`, `"WDM11 D1"`.
- Mark codes: M (method), A (accuracy, depends on M), B (independent). Use "oe" (or equivalent), "cao"
  (correct answer only) and "ft" (follow through) in `examinerNote` where appropriate.
- Accuracy: exact answers unless the stem says otherwise; give 3 significant figures where rounding is needed
  and set `tolerance` to match. Calculators are allowed on all IAS/IAL papers except where a question says
  otherwise, so calculator questions are fine.
- Every question in these courses is compulsory-style: NO `tier` field.
- Structured questions (q4) are multi-part exam-style questions with `parts` and `part:`-tagged markscheme steps.

## IAS Mathematics (XMA01) — course `edx-ias-maths`

IAS Mathematics certifies with P1 + P2 + one applied unit (M1, S1 or D1). This course covers all three applied
options so students can pick their pathway.

- unit-1 "Pure Mathematics 1" (WMA11): algebra and functions; coordinate geometry; trigonometry;
  differentiation; integration.
- unit-2 "Pure Mathematics 2" (WMA12): proof; algebra and functions; coordinate geometry; sequences and
  series; exponentials and logarithms; trigonometry; differentiation; integration; numerical methods.
- unit-3 "Mechanics 1" (WME01): mathematical models in mechanics; vectors in mechanics; kinematics of a
  particle in a straight line; dynamics (Newton's laws, connected particles, friction, momentum and
  impulse); statics of a particle; moments.
- unit-4 "Statistics 1" (WST01): representation and summary of data; probability; correlation and
  regression; discrete random variables and distributions; the Normal distribution.
- unit-5 "Decision 1" (WDM11): algorithms; linear programming; network algorithms; critical path analysis;
  game theory.

## IAL subjects planned (author after IAS maths)

IAL Mathematics (YMA01) adds P3, P4, M2, M3, S2, S3, D1 to the IAS content — build on `edx-ias-maths` units.
IAL Biology (4BI1/9BI01), Chemistry (4CH1), Physics (4PH1), Business, Economics (WEC01/WEC02), Accounting
(WAC01/WAC02), Psychology (WPS01/WPS02), Sociology (WSO01/WSO02), Computer Science (WCS01/WCS02),
English Language and Literature all follow the same rules. Author one `edx-ial-<subject>` course at a time.
