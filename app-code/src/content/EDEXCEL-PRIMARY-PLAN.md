# Pearson Edexcel Primary: content plan and rules

Read `src/content/AUTHORING.md` first (shape, quality bar, LaTeX rules, verification) and
`src/content/EDEXCEL-IAL-PLAN.md` for shared Edexcel conventions (British English, command words, mark codes).
This file ADDS the Primary rules and lists every planned course.

## Rules
- Pearson Edexcel International Primary Curriculum covers Years 1-6 (Key Stage 1 and Key Stage 2). Content is
  pitched progressively: each course spans all six years, with earlier content pitched at KS1 and later content
  at upper-KS2. Tag the target year band inside lesson `standards`, e.g. `"Y1-Y2 Number"`, `"Y5-Y6 Algebra"`.
- Courses (folder = course id): `edx-primary-maths`, `edx-primary-english`, `edx-primary-science`,
  `edx-primary-computing`, `edx-primary-geography`, `edx-primary-history` (add more as needed).
- `edexcel` field: `{ stage: "primary", subject, year }`. Because one course covers Years 1-6, set `year: 1`
  and put the real year band in each lesson's `standards` and title/description.
- Unit folders: `src/content/courses/<course-id>/unit-N/` with `index.ts` exporting `unitN`. Lesson files
  `lesson-N-M.ts` export `lessonNM`; lesson `code` is "N-M". A primary unit may hold more than 3 lessons
  (Cambridge primary units use up to 14); keep 3-6 lessons per unit, one per year band or topic cluster.
- Id prefixes: `edxp-<subject>-uN-` (e.g. `edxp-maths-u1-`). Question ids: `<prefix><concept-slug>-q1` .. `-q4`.
- Age-appropriate language: short sentences, concrete contexts (shopping, measuring, weather, playground),
  British spellings and units (metres, centimetres, kilograms, litres, pounds where money appears).
- Questions are simpler than secondary: foundation-heavy, 1-4 marks typical; the q4 structured question may be
  4-6 marks for younger bands and up to 8-10 for upper-KS2. No `tier`, no `paper`.
- Mark codes M/A/B as usual; markschemes stay short and concrete. `principles` still required (definition,
  property, formula).
- Maths: use `$...$` only where genuinely needed; whole-number and simple fraction/decimal answers dominate.
  Money in pounds: write `£5` inside math as `$\\pounds5$`? No — use plain text "£5" outside math, or
  `$\\pound5$` only if needed. Prefer plain "£5.50" in stems.
- English/science primary courses use the same AO-free M/A/B/R codes; keep markschemes factual and kind.

## Planned courses

- `edx-primary-maths`: number and place value; addition and subtraction; multiplication and division;
  fractions, decimals and percentages; measurement; shape and position; statistics.
- `edx-primary-english`: phonics/spelling/vocabulary foundations; reading comprehension; writing composition;
  grammar and punctuation; speaking and listening.
- `edx-primary-science`: working scientifically; plants; animals including humans; everyday materials;
  seasonal change; uses of electricity; forces and magnets.
- `edx-primary-computing`: digital literacy; coding basics; data and information; online safety.
- `edx-primary-geography` / `edx-primary-history`: locality and the wider world; people and communities;
  chronology and enquiry.
