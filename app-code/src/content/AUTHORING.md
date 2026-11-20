# Akademik Space content authoring spec (shared by all content agents)

Project: a US Grades 9-12 math practice platform. Content is static TypeScript in `src/content/courses/<course>/<unit>/`.
Types are in `src/content/types.ts` (READ IT FIRST). Quality reference: `src/content/courses/algebra-2/unit-3a/lesson-3-1.ts` (READ IT).

## Quality bar (most important)
- Professional, exam-board quality (Common Core HS standards, comparable to state EOC / SAT / ACT / AP-prep style). Real mathematics, never vocabulary filler.
- Every number must be verified. Do the arithmetic carefully and double check every answer, every MCQ distractor, every markscheme step. Wrong answers are the worst possible defect.
- Markschemes: `principles` first (the formulas, laws, theorems, definitions, properties that justify the reasoning; 1-4 items, each with a precise statement), then `steps` with reasoning (the WHY), `working` (the math), marks and markCode (M method, A accuracy, B independent, R reasoning), `finalAnswer`, `commonErrors` (real misconceptions), optional `examinerNote`.
- Sum of step marks MUST equal totalMarks.
- MCQ distractors must be plausible results of real misconceptions.
- Lessons (`concept.lesson`): 2-3 sections that teach the idea properly, `keyFormulas`, and a fully worked example.

## Required shape per unit
- A unit has 3 lessons. Each lesson has 2 concepts (granular skills). Each concept has exactly 4 questions:
  1. foundation (1-2 marks, often MCQ)
  2. core (2-4 marks, numeric or MCQ)
  3. challenge (3-5 marks)
  4. **structured** challenge question (7-12 marks) — see below
- Each lesson: id, code (e.g. "5-2"), title, goal ("I CAN ..."), standards (real Common Core codes e.g. "HSA-SSE.B.3"), vocabulary (4-7 terms with precise definitions), concepts.

## Structured (multi-part, exam-style) questions
- `stem`: the shared scenario/context (function definition, real-world setup, diagram described in words).
- `parts`: `[{ label: "a", prompt: "...", marks: 2 }, { label: "b", ... }, ...]` with 3-5 parts that build in difficulty (state/compute -> apply -> interpret/justify/prove/extend). Part marks must sum to totalMarks.
- Every markscheme step of a structured question MUST have `part: "a"` etc. and the step marks for each part must equal that part's marks.
- `response`: use `{ type: "numeric", parts: [...] }` if the key answers are numbers (labels like "(a) $x$-intercept", "(c) maximum height"), otherwise `{ type: "open" }`.
- `finalAnswer` should summarize the answer to each part, e.g. "(a) ... (b) ... (c) ...".

## Text formatting rules (CRITICAL, tests enforce these)
- Inline math `$...$`, display math `$$...$$`. Bold `**x**`. Paragraphs separated by "\n\n". Lists with lines starting "- ".
- This is TypeScript source in double-quoted strings: EVERY LaTeX backslash must be DOUBLED: `\\frac`, `\\sqrt`, `\\text`, `\\le`, `\\pi`, `\\theta`, `\\ne`, `\\times`, `\\circ`. A single backslash (`\frac`) silently becomes a control character and breaks rendering.
- `working` fields are raw LaTeX (NO `$` delimiters), e.g. `working: "x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}"`.
- Money: write `$\\$12$` (escaped dollar inside math). Never write a bare `$` for currency.
- Percent inside math: `$5\\%$`.
- Use `^\\circ` for degrees. Use `\\text{...}` for words inside math.
- Do not use `\\begin{align}`; `\\begin{aligned}...\\end{aligned}` and `\\begin{cases}` are fine.
- Numeric answers: finite numbers; give `tolerance` (e.g. 0.01) when rounding is involved and say in the stem how to round. Use `unordered: true` for roots in any order.
- No emojis.

## Files and ids
- Lesson file exports `export const lessonNM: Lesson = {...}` (e.g. lesson51). Import type: `import type { Lesson } from "../../../types.ts";`
- Unit `index.ts` exports `export const unitN: Unit = { id, code, title, description, lessons: [...] }` importing the lessons with `.ts` extensions (copy the pattern from an existing unit index.ts).
- All ids (lesson, concept, question) must be globally unique: prefix with the given unit id prefix, e.g. `alg1-u3-...`. Question ids like `alg1-u3-slope-q1` .. `-q4`.
- DO NOT edit any file outside your assigned unit folders. Do not edit course index.ts files.

## Verify
- Run `run_tests` with `testNamePattern` set to your unit path (e.g. `algebra-1/unit-3`) and `files: ["src/content/units.test"]`. Fix every failure (marks mismatches, LaTeX errors). Then run `run_lint` with target "eslint" and fix errors in your files only (a `no-useless-escape` error means a single backslash that must be doubled).
- Re-check all arithmetic once more before finishing.
