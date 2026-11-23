# Edexcel expansion spec (shared by all edx-* content agents)

Goal: every `edx-*` course under `src/content/courses/` reaches **300+ questions**,
with more units, more lessons and more questions per course. Work is split by
**unit**: each agent authors exactly the unit folders listed in its task.

## Pipeline (MANDATORY — agents write DATA files only; the coordinator generates .ts)

Background agents cannot run commands. For each assigned unit N:

1. Write `scripts/data-<course>-u<N>.cjs` (CommonJS, `module.exports = [...]`).
   One file per unit, containing exactly 3 lesson specs (lesson-<N>-1/2/3).
   See `scripts/data-igcsecs-u1.cjs` for the shape and `scripts/gen-lesson.cjs`
   for the supported fields. Each lesson spec has `lesson.concepts` = array of
   2 concepts; each concept has sections, keyFormulas, workedExample, questions.
2. Write `src/content/courses/<course>/unit-<N>/index.ts` by hand (copy the
   pattern from a neighbouring unit index.ts): imports `./lesson-<N>-1.ts` etc.
   and exports `export const unit<N>: Unit = { id, code, number, title,
   description, lessons: [...] }`. The `lesson-*.ts` files do NOT exist yet —
   the coordinator generates them. Use the course's existing unit-id prefix
   (e.g. `edm10-u5`).
3. Do NOT write lesson `.ts` files yourself. Do NOT run commands. Do NOT edit
   the course `index.ts`, `catalog.ts`, `curricula.ts`, `types.ts`, or any file
   outside your assigned unit folders and your data files.
4. The coordinator runs `node scripts/gen-lesson.cjs scripts/data-<course>-u<N>.cjs
   src/content/courses/<course>/unit-<N>` for every data file, then registers
   units and runs the test suite.

## Required shape per unit

- Exactly **3 lessons**, codes `<N>-1`, `<N>-2`, `<N>-3`.
- Each lesson: `id`, `code`, `title`, `goal` ("I CAN ..."), `standards` (real
  Edexcel references where they exist, e.g. "4MA1 1.1", "4ET1", "WEC11/01"),
  `vocabulary` (4-7 precise terms), `concepts` (see below), optional `notes`.
- Each lesson has **2 concepts**. Each concept has **6 questions**:
  1. foundation — 1-2 marks, MCQ or numeric
  2. foundation/core — 2-3 marks
  3. core — 3-4 marks
  4. challenge — 4-6 marks
  5. challenge — 5-7 marks (may be `parts`-structured)
  6. extended challenge — structured question worth 8-12 marks
- Every concept: `id`, `title`, `skill`, `lesson.sections` (2-3 teaching sections),
  `lesson.keyFormulas` (where applicable), `lesson.workedExample`, `questions`.
- ~36 questions per unit. Quality bar: exam-board standard, unambiguous, all
  answers verified. No placeholder/filler content.

## Question shape rules (from types.ts + validate.ts — enforced by tests)

- `markscheme.principles` non-empty; kinds depend on subject family (below).
- `markscheme.steps` marks MUST sum to `totalMarks`.
- If `parts` present: part marks sum to `totalMarks`, every step has `part: "a"`
  etc., and steps per part sum to that part's marks.
- `response`: `{type:"mcq", choices:[{id,text}...], correctChoiceId}` |
  `{type:"numeric", parts:[{label,answer,tolerance?,unit?}]}` |
  `{type:"open"}`. Numeric answers must be finite numbers.
- Use `numeric` (not `open`) whenever the answer is a small set of numbers —
  MCQ/numeric answers are auto-graded; `open` is for prose/proof/sketch.
- All ids GLOBALLY unique across the whole catalog. Prefix question ids with the
  course unit prefix, e.g. `edm10-u5-...-q1`. Never reuse an id.

## Subject-family conventions (copy from existing lessons in the SAME course)

| Family | markCode | principle kinds | notes |
|---|---|---|---|
| edx-maths-y7..11, edx-ias/ial maths/further-maths/pure-maths, edx-primary-maths | M A B R | formula, law, theorem, definition, principle, property, method | `edx-maths-y10/y11` are TIERED: every question needs `tier: "foundation"` or `tier: "higher"` (foundation = grades 1-5, higher = 4-9; most questions higher, some foundation per lesson) |
| edx-science-y7..11, edx-biology/chemistry/physics-y10..11, edx-primary-science, edx-ias/ial sciences, edx-btec-* | M A B R | same as maths | never tiered |
| edx-englang-*, edx-englit-*, edx-primary-english-* | AO1-AO5 | technique, convention, context, skill, definition | NO `$` anywhere in the unit (tests reject it); prose questions use `extract` + `response:{type:"open"}`; extended responses (>=6 marks) need `levels` bands whose top mark equals the part marks |
| edx-business-*, edx-economics-*, edx-ias/ial business/economics/accounting/psychology/sociology, edx-computerscience-* | AO1 AO2 AO3 (some files also M) | definition, principle, comparison, technique, skill, context, convention, formula | check the specific course's existing lessons and copy exactly |

For any family not listed, open 2-3 existing lesson files in the course and copy
their conventions exactly (mark codes, kinds, tier/paper fields, response types).

## Text/LaTeX rules (tests enforce)

- Inline math `$...$`, display `$$...$$`. In the .cjs data file a backslash must
  be DOUBLED (`\\frac`, `\\sqrt`, `\\text`, `\\times`, `\\%`, `\\circ`, `\\dot{x}`).
- `markscheme.steps[].working` is RAW LaTeX with no `$` delimiters.
- Never write a bare `$` for money in English-family units; maths uses `$\\$12$`.
- No `\begin{align}`; `aligned`/`cases` ok. No control characters.
- Edexcel-style command words: "Show that", "Prove", "Hence", "State",
  "Calculate", "Give your answer ..." are fine in stems.

## Worked-example / notes quality

- `workedExample`: a fully worked realistic problem, 3-8 lines of algebra.
- `notes` (optional per lesson): synthesis revision note, 3-5 sections.

## Validation (coordinator-run after generation)

```
npx vitest run src/content/units.test.ts -t "<course-dir-name>"
npx vitest run src/content/catalog.test.ts
npx eslint src/content/courses/<course> scripts/data-<course>-u<N>.cjs
```

The unit glob picks up `unit-*/index.ts` automatically — your unit is validated
even before registration. Before handing off, self-check: every markscheme step
marks sum to totalMarks; parts sums match; MCQ correctChoiceId exists; numeric
answers finite; LaTeX backslashes doubled; no stray control characters; ids unique.

## Split rules (only if your task says "SPLIT")

If an existing unit crams unrelated topics (e.g. a unit whose 3 lessons cover two
different syllabus areas), you may reorganise ONLY inside the unit folders you are
authorized for: move a lesson file to a new/existing sibling unit folder, update
both `index.ts` files, keep all ids unchanged. Do not touch other courses.
