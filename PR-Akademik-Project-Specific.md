# Akademik Space — Curriculum Content Expansion & Production Pipeline
## Project-specific Product Requirements and Engineering Brief

**Target application:** https://akademik.space  
**Hercules project:** Akademik Space  
**Project ID:** `01M5PQ2QCCNE512DX0CY4TG22J`  
**Workspace:** https://hercules.app/org/org_01M5PPJ7HRD1VS42N9XNBB4SWW/app/akademik-space  
**Published URL observed in Hercules metadata:** https://revisions-hub.onhercules.app  
**Purpose:** Convert the supplied unorganised archive into accurate, structured, production-ready learning content that fits the existing Akademik Space architecture and can be integrated with minimal manual effort and minimal Hercules AI-credit consumption.

---

# 1. Mission

You are working on an existing live learning product, not building a new LMS. Your job is to:

1. Audit the actual repository, content architecture, curriculum catalogue, authoring conventions, renderers and assessment flows.
2. Inventory and process the supplied ZIP archive, including questions, markschemes, notes, documents, diagrams, images and other resources.
3. Transform the source materials into coherent lessons, synthesised notes, worked examples, practice questions, detailed markschemes and visual learning assets.
4. Map every content item to the correct curriculum, qualification, grade/year, subject, course, unit, topic and learning outcome.
5. Deliver content in the format expected by the existing application.
6. Validate the package and integration before release.

**Do not rebuild, redesign or unnecessarily refactor the application.** Preserve current functionality, visual language, student data, authentication, subscriptions, teacher workflows, assessment history, attempts, mastery and progress.

## Non-negotiable rules

- Inspect before editing. The repository is the source of truth for implementation.
- Treat archive materials as source evidence, not automatically correct or curriculum-aligned content.
- Preserve provenance down to source file and page/question/slide where possible.
- Do not fabricate syllabus statements, official markscheme wording, answers, diagrams, citations or question origins.
- Flag uncertain curriculum alignment, conflicting answers and unclear rights for review.
- Do not expose answers or markschemes prematurely in student-facing experiences.
- Do not create duplicate IDs or break existing course references and learner progress.
- Prefer deterministic scripts, direct code changes and batch validation over AI generation inside Hercules.
- Do not spend Hercules AI credits or invoke paid AI workflows unless explicitly authorised.
- Do not deploy to production, change billing/authentication or perform destructive data operations without explicit approval.

---

# 2. Confirmed project context — verify against the repository

The following is based on the available Hercules project inspection and development history. It is a starting point, not permission to assume the current code is identical.

## 2.1 Observed architecture

- Frontend: React + TypeScript.
- Backend/data platform: Convex.
- Existing curriculum content is authored primarily through structured TypeScript content modules.
- Known content files include:
  - `src/content/types.ts`
  - `src/content/catalog.ts`
  - `src/content/curricula.ts`
  - `src/content/AUTHORING.md`
  - `src/content/EDEXCEL-SCIENCE-PLAN.md`
  - `src/content/EDEXCEL-ENGLISH-PLAN.md`
  - `src/content/US-MIDDLE-PLAN.md`
  - `src/content/courses/...`
- Existing curriculum registration has referenced Edexcel, IB and US course groups.
- The observed content hierarchy is:
  **Curriculum → Course → Unit → Lesson → Concept → Question**
- Existing features include interactive practice, detailed markschemes, attempts/progress/mastery, hints, lesson-on-demand, student tools and AI-assisted practice.
- Mathematical content uses KaTeX/React Markdown or a comparable rendering path; confirm the actual renderer and supported syntax.
- Teacher/class/assignment and administrative capabilities exist and must be preserved.

## 2.2 Curriculum coverage seen in project history

Confirm whether each item is implemented, complete, partial, planned or only listed.

- Pearson Edexcel: Years 8–11; Mathematics, English Language, English Literature and Sciences; Foundation/Higher Mathematics pathways have been referenced.
- IB: Diploma Programme Mathematics AA/AI, SL/HL and Year 1/Year 2; MYP Mathematics and Integrated Sciences have also been referenced.
- United States: Grades 7–12 Mathematics, Science and ELA, with Common Core and NGSS alignment.
- US middle-school IDs seen in a plan: `us-math-g7`, `us-math-g8`, `us-science-g7`, `us-science-g8`, `us-ela-g7`, `us-ela-g8`.
- Existing catalogue examples have included Algebra 1, Geometry, Algebra 2, Precalculus and IB AA SL Year 1.

These are clues to conventions, not an exhaustive or guaranteed list of live courses. Never reuse an ID without checking for collisions.

---

# 3. Phase 0 — mandatory repository and application audit

Before transforming the archive or authoring production content, inspect the repository and produce `AUDIT.md`.

## 3.1 Inspect

Read and trace:
- `package.json` and lockfile.
- `src/content/types.ts`, `catalog.ts`, `curricula.ts`, `AUTHORING.md`.
- All relevant curriculum/course planning documents.
- Representative complete courses, units and lessons from each existing curriculum family.
- Existing question, answer, markscheme, rubric and assessment types.
- Components that render lessons, notes, examples, questions, diagrams, hints, feedback and markschemes.
- Course indexes/barrel exports and curriculum registration.
- Catalogue navigation, search and filtering.
- Asset storage, references and rendering.
- Tests, validation scripts, lint, typecheck and build commands.
- Convex schemas/functions actually used for content, publishing, assessment and progress.

Initial representative lesson candidates, if present:
- `src/content/courses/edx-maths-y8/unit-1/lesson-1-1.ts`
- `src/content/courses/edx-science-y8/unit-1/lesson-1-1.ts`
- `src/content/courses/edx-englang-y8/unit-1/lesson-1-1.ts`

Also inspect at least one IB and one US course module.

## 3.2 Audit findings required

Document:
1. Actual TypeScript interfaces and required/optional fields.
2. Exact course/unit/lesson/question file and ID conventions.
3. How notes, explanations, worked examples and questions are represented.
4. Whether notes are lesson blocks, a separate content type or another structure. Do not introduce a new entity before understanding the renderer and model.
5. How diagrams/assets are stored, referenced and rendered.
6. How markschemes, marking points, partial credit and feedback work.
7. How courses are registered and made visible in the curriculum catalogue.
8. Whether content is statically imported, dynamically loaded, stored in Convex or delivered by a combination.
9. Safest low-cost way to add and publish a content batch.
10. Exact commands for typecheck, lint, tests, build and content validation.
11. Any genuine architecture gaps.

**Critical format decision:** project evidence indicates TypeScript-authored content. Unless repository inspection proves otherwise, the primary production deliverable must be TypeScript modules conforming to the existing types and import conventions. JSON/CSV can be used for intermediate inventories, mapping and manifests, but must not replace the production content format by assumption.

Do not edit application files during the initial audit. Submit `AUDIT.md` and a proposed implementation plan first. If full content preparation has been authorised, non-destructive archive processing can proceed while keeping production integration gated.

---

# 4. Phase 1 — archive inventory and source management

Extract the supplied ZIP into a working directory. Never modify or overwrite the original archive.

Create `SOURCE_INVENTORY.csv` or `.json` with:
- Original relative path, filename, file type and size.
- Detected curriculum, subject, grade/year, topic and resource category.
- Language, page/slide/sheet count and extraction/OCR status.
- Duplicate/similarity status.
- Suspected source/publisher where identifiable.
- Rights status: user-owned, licensed, public domain, unclear or restricted.
- Quality/confidence score, processing status and review notes.

Resource categories may include syllabus, notes, textbook extract, question, markscheme, worksheet, exam paper, diagram, image, graph, presentation, video or other.

## Extraction requirements

Use suitable tools for PDF, DOCX, PPTX, XLSX, CSV and image files. Apply OCR to scanned documents and images when necessary. Preserve page numbers, headings, question numbers, figure labels, tables and source paths.

Do not silently lose:
- Figures, graphs, tables, geometric constructions or diagrams.
- Subscripts, superscripts, formulae, chemical notation or units.
- Negative signs, inequality signs, decimal points or answer options.
- Markscheme annotations, examiner comments or marking codes.

When extraction is uncertain, retain the original and flag the affected item for manual review.

## Duplicate and conflict handling

- Detect exact duplicates with hashes and near-duplicates with text/structure similarity.
- Record differences between versions; choose an authoritative/current version only when evidence supports it.
- Do not merge distinct questions simply because wording is similar.
- Preserve variants where values, diagrams, context, marks, difficulty or command words differ.
- Flag conflicting answers and markschemes.

## Provenance

Every derived lesson, question, markscheme and asset must be traceable to its source file and, where possible, page, slide, sheet, question number or heading. Record transformation notes and rights/review status. Use existing app metadata if suitable; otherwise keep provenance in sidecar manifests rather than adding unnecessary user-facing fields.

---

# 5. Phase 2 — curriculum mapping

Create `CURRICULUM_MAP.csv` or `.json` before production. Do not assign content based only on filenames.

## Target curriculum families

Subject to source availability and syllabus verification, plan for:

**UK and international examination pathways**
- Pearson Edexcel GCSE/International GCSE.
- Cambridge International IGCSE, O Level and AS & A Level.
- International Baccalaureate MYP and Diploma Programme.
- UK National Curriculum / Key Stages where relevant.

**United States**
- K–12.
- Common Core Mathematics and ELA.
- NGSS Science.
- Advanced Placement (AP), with subject-specific course alignment.
- SAT preparation as a separate exam-preparation pathway, not a school grade.

**India**
- CBSE.
- ICSE / ISC. Keep these distinct; do not collapse them into one generic Indian curriculum.

**Other international pathways**
- Australian Curriculum and relevant state/territory pathways.
- Canadian provincial curricula, identifying the province.
- New Zealand Curriculum.
- Singapore curriculum.
- South African CAPS.
- Kenya CBC/CBE and KCSE where applicable.

Do not create empty catalogue entries merely to claim coverage. Mark a course available only when meaningful, reviewed content exists.

## Mapping fields

For each item, identify:
- Curriculum and awarding body/authority.
- Qualification/pathway and specification version.
- Grade/year/level and subject.
- Course/paper, topic and subtopic.
- Learning outcome/objective.
- Relevant assessment objective or standard.
- Tier/route (Foundation/Higher, SL/HL, Core/Extended) where applicable.
- Prerequisites, difficulty and cognitive demand.
- Syllabus source/version/date and mapping confidence.

Use official specifications where available. If alignment is provisional, label it and state what verification is required.

## Cross-curriculum reuse

Reuse shared explanations only where learning outcomes and expected depth genuinely align. Keep curriculum-specific terminology, depth, command words, assessment style and markscheme conventions distinct. Where possible, use a shared concept core with curriculum-specific objectives and assessment variants, but only if the current architecture supports it.

---

# 6. Phase 3 — production content package

## 6.1 Production format

Unless the audit identifies another established convention, deliver:
- TypeScript course/unit/lesson modules conforming to `src/content/types.ts`.
- Existing folder, filename and stable-ID conventions.
- Existing question and markscheme structures.
- Assets in the existing application asset convention.
- Minimal necessary course-index/catalogue/curriculum registration changes.
- Sidecar provenance and asset manifests.
- Validation reports.

Do not invent a new schema. Do not make broad changes to shared types for one batch. If a required learning element cannot be represented, document the gap and propose the smallest backward-compatible extension before implementation.

## 6.2 Course and unit organisation

Each course should include, where supported:
- Accurate title, curriculum/qualification, subject and grade/year.
- Description and intended learner.
- Tier/route information.
- Specification references and course-level outcomes.
- Unit sequence and prerequisite assumptions.
- Stable IDs following existing conventions.

Each unit should include:
- Meaningful title and short introduction.
- Learning objectives and prerequisite concepts.
- Ordered lessons.
- Key vocabulary/notation where appropriate.
- Unit review or assessment where supported.

## 6.3 Lesson quality standard

A lesson must be a complete teaching experience, not a short note or a list of definitions.

Include, where pedagogically appropriate and supported by the existing type:
1. Title and learning objectives.
2. Introduction and relevance.
3. Prerequisite knowledge.
4. Conceptual explanation from intuitive to formal.
5. Definitions, laws, principles, formulae and rules.
6. Synthesised notes with logical headings.
7. Fully explained worked examples.
8. Diagrams, graphs, tables, constructions or other visuals.
9. Common misconceptions and errors.
10. Guided practice/checkpoints.
11. Independent practice.
12. Exam-style application/problem solving.
13. Recap and links to prerequisite/follow-on concepts.

Do not force identical templates onto Mathematics, English Literature, Physics practicals, Geography case studies and other subjects with different pedagogical needs.

## 6.4 Synthesised notes

Notes must be original, accurate, concise and sufficiently complete for revision. Organise them with clear headings. Explain definitions, relationships, conditions and exceptions. Use formulae, tables, examples and diagrams where helpful. Match the selected curriculum's depth.

For Maths and Science:
- Define every symbol and variable.
- State units and conditions of use.
- Explain when a formula/law applies.
- Preserve signs, subscripts, superscripts, significant figures and notation.
- Distinguish scalar/vector quantities and exact/approximate values where relevant.

For languages and humanities:
- Include concepts, arguments, evidence, context and assessment skills.
- Do not reduce complex topics to vocabulary lists.
- Distinguish fact, interpretation and evaluation.

## 6.5 Worked examples

Each example must state the problem, identify the concept/method, show all material intermediate steps and explain why each step is taken. Include diagrams/data where needed, correct units/notation/rounding, common errors where useful, and a clearly identified final answer or conclusion. Do not jump straight to the answer or hide reasoning behind “solve normally”.

## 6.6 Practice question bank

Use formats supported by the current application, such as:
- Multiple choice and multiple select.
- Numeric response and short answer.
- Structured and extended response.
- Matching/ordering.
- Graph/table interpretation.
- Diagram labelling.
- Proofs and constructions.
- Practical/data-analysis tasks.
- Source-based or case-study questions.

Each question needs:
- Stable unique ID.
- Curriculum/course/unit/lesson/concept mapping.
- Clear stem and command word.
- Marks, difficulty and question/response type.
- Correct answer or expected response.
- Detailed markscheme/rubric.
- Appropriate explanation/feedback.
- Provenance and review status.

Provide a meaningful range of foundational, standard and challenging questions. Do not inflate counts with trivial numerical variations. Vary context, reasoning, representation and cognitive demand.

## 6.7 Detailed markschemes

Markschemes must assess and teach. Include expected answer, step-by-step method, mark allocation, method/accuracy/independent/reasoning marks, acceptable alternatives, equivalent forms, follow-through rules, units, significant figures, rounding, partial-credit guidance and common errors where applicable.

Subject-specific expectations:
- **Mathematics:** distinguish method and accuracy; show valid alternatives and acceptable exact/decimal forms.
- **Physics:** distinguish formula, substitution, calculation, units and interpretation.
- **Chemistry:** preserve balanced equations, state symbols, conditions, formulae, ionic charges and observations.
- **Biology:** distinguish key points, processes, terminology and linked reasoning.
- **English:** use relevant assessment objectives, evidence, analysis, structure, interpretation and level descriptors.
- **Humanities:** credit knowledge, explanation, evidence, evaluation and supported judgement according to the relevant rubric.

Do not fabricate official examiner wording or imply an internally created rubric is an official board markscheme. Label original Akademik guidance accurately.

---

# 7. Visual learning assets

Create visuals where they materially improve understanding:
- Scientific diagrams.
- Mathematical graphs and coordinate plots.
- Geometry diagrams and constructions.
- Flowcharts and process diagrams.
- Tables and data displays.
- Circuit diagrams and practical apparatus.
- Chemistry particle models, structures and reaction diagrams.
- Biology systems and processes.
- Geography maps/fieldwork visuals where rights and accuracy permit.
- English annotation/structural-analysis examples.

Prefer clean SVG for precise diagrams, graphs and constructions where feasible. Follow the existing asset pipeline. Ensure responsive sizing, legible labels, accessible contrast and meaningful alt text. Do not bake long explanations into images. Verify mathematical axes, scales, arrows, units and plotted points. Use original or appropriately licensed assets. Do not use generated pictures where a precise SVG, chart or construction is required.

Maintain an asset manifest with filename, linked lesson/question IDs, description, alt text, source/creator, rights status and dimensions.

---

# 8. Quality assurance

Automated checks do not replace subject-expert review.

## Structural checks
- Unique IDs.
- Valid imports and required fields.
- Resolvable course/unit/lesson/question references.
- Correct catalogue/curriculum registration.
- Existing asset paths and valid formats.
- No unintended duplicates or orphaned content.
- Type compatibility.
- No unnecessary or incompatible schema changes.

## Academic checks
- Correct concepts, facts, formulae and calculations.
- Curriculum and level alignment.
- Appropriate command words and expected depth.
- Correct answers and mark allocations.
- Complete, internally consistent markschemes.
- Accurate diagrams.
- Correct units, signs, notation and rounding.
- No ambiguity or unintended multiple correct answers.
- No answer leakage in student-facing prompts.
- No unsupported claims of official endorsement or board authorship.

Independently recompute numerical answers using a separate method or script where practical. Compare diagrams with the question text and solution.

## Editorial checks
- Clear, age-appropriate language.
- Consistent terminology, grammar and spelling.
- Logical sequencing and explained jargon.
- No repetitive filler.
- No OCR artefacts, page headers or watermarks.
- Accessible formatting and readable notation.

Use existing review/publishing states. If none exist, maintain sidecar statuses such as `draft`, `automatically_checked`, `subject_review_required`, `subject_reviewed` and `approved_for_import`. Do not present uncertain/unreviewed content as verified.

---

# 9. Low-cost integration and release

## Preferred workflow

1. Extract, organise and author outside Hercules.
2. Generate TypeScript modules compatible with the verified app types.
3. Run deterministic checks for IDs, references, assets and mappings.
4. Run typecheck, lint, tests and production build.
5. Produce a clean, reviewable diff.
6. Integrate in a development branch/staging environment.
7. Verify representative courses, lessons and questions in the actual UI.
8. Obtain approval before production deployment.

## Do not assume generic bulk import

The project evidence indicates TypeScript-authored content. Do not create a generic CSV importer, new Convex bulk-import pipeline or new database tables unless repository inspection proves they are needed.

If content is statically imported, follow existing module/index conventions and make the smallest necessary catalogue changes. If content is stored/delivered through Convex, inspect the actual schema and query/mutation flow first. Use deterministic, idempotent seed/import scripts only where compatible.

Any import process must support dry-run, validation before writes, idempotent reruns, batching, clear logs/counts, rollback and protection of student attempts/scores/mastery/progress.

## Hercules safeguards

At the time of project inspection, the workspace reported zero available AI credits. Check current status rather than assuming it remains unchanged.
- Do not use Hercules AI generation for content production.
- Do not repeatedly invoke workflows that fail for lack of credits.
- Prefer external local coding tools and scripts.
- Stop and report if an essential Hercules action requires credits.
- Never use production deployment as a test.
- Back up relevant data before any approved production mutation.

---

# 10. Prioritised curriculum rollout

Do not populate every curriculum and subject in one unreviewable batch. Prioritise using source quality, current gaps, learner demand, syllabus verifiability, content volume, visual requirements and review capacity.

Suggested sequence:
1. Complete and strengthen existing partially implemented courses.
2. Fill gaps in existing Edexcel, IB and US pathways.
3. Add Cambridge International courses using verified specifications.
4. Expand US K–12/AP with correct standards and course alignment.
5. Add CBSE and ICSE/ISC as distinct curriculum families.
6. Add Australian, Canadian, New Zealand, Singaporean, South African and Kenyan pathways based on source quality and demand.

This is a suggested sequence, not an instruction to create superficial catalogue entries. Deliver a coverage matrix and recommend the first production batch.

---

# 11. Required deliverables

| Deliverable | Contents |
|---|---|
| `AUDIT.md` | Actual architecture, types, conventions, renderers, registration and integration method |
| `SOURCE_INVENTORY.csv` or `.json` | Archive inventory and processing status |
| `CURRICULUM_MAP.csv` or `.json` | Curriculum/qualification/grade/subject/topic/outcome mappings, confidence and source references |
| `CONTENT_PLAN.md` | Proposed course/unit/lesson structure, gaps, priorities and batch plan |
| `content/` | Production TypeScript modules in the application's expected structure |
| `assets/` | Optimised and correctly referenced visual assets |
| `ASSET_MANIFEST.csv` or `.json` | Asset metadata, rights, alt text and linked content IDs |
| `PROVENANCE.csv` or `.json` | Traceability from derived content to source archive files |
| `VALIDATION_REPORT.md` | Structural, academic, editorial and technical results |
| `IMPORT_REPORT.md` | Files changed, registration updates and import/seed counts if applicable |
| `ROLLBACK.md` | Safe rollback instructions |
| `README.md` | Review, test, integrate and maintain instructions |

Do not deliver only a spreadsheet, JSON dump, PDF or prose report. The production modules must be in the actual application structure.

---

# 12. Batch delivery and approval gates

Every batch must be independently reviewable and testable. Report curriculum, subject, grade/year, courses, units, lessons, concepts, questions, assets, source files, uncertain items, review needs, automated checks, typecheck/build/test results, changed files and unresolved risks.

- **Gate A — Audit:** Submit `AUDIT.md`, archive inventory summary (once ZIP is supplied) and proposed plan.
- **Gate B — Sample:** Produce one representative complete unit or small lesson batch with notes, examples, questions, markschemes and visuals. Validate against actual app renderers.
- **Gate C — Production batches:** Scale using the approved sample and quality standard.
- **Gate D — Integration:** Integrate approved content in development/staging and provide a report.
- **Gate E — Production:** Deploy/publish only after explicit user approval.

If full preparation is authorised, proceed through audit, archive processing and sample preparation without pausing for approval at every small step. Do not bypass production approval.

---

# 13. Definition of done

Complete only when:
1. The archive is inventoried and processed without losing source traceability.
2. Content is accurately mapped to curricula, courses, levels and outcomes.
3. Lessons are pedagogically complete and contain useful synthesised notes.
4. Worked examples show correct, understandable reasoning.
5. Questions are varied, curriculum-appropriate and correctly keyed.
6. Markschemes explain mark allocation and partial credit.
7. Visuals are accurate, legible and correctly referenced.
8. Production content follows the existing Akademik Space types and conventions.
9. Catalogue/registration changes are minimal and correct.
10. Existing app features and student data remain intact.
11. Automated checks pass, with exceptions documented.
12. Representative content is verified in the actual app UI.
13. The user receives source modules, manifests, reports, integration and rollback instructions.
14. No production deployment or destructive action occurs without explicit approval.

---

# 14. First instructions to the agent

Act as a senior full-stack engineer, curriculum content architect, instructional designer and QA lead.

Be evidence-led. Inspect the actual repository and archive. Do not guess types or invent an import method. Do not produce filler content. Prioritise academic correctness, pedagogical quality, curriculum alignment, maintainability and safe integration.

**First action:** complete Phase 0. Produce `AUDIT.md`, summarise the archive inventory once the ZIP is supplied, and propose the first production batch. Then create a representative sample using the real application types and renderers before scaling.

**Remember:** the archive is source material, not the specification for app architecture. The Akademik Space repository is the source of truth for the production content format.
