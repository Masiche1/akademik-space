# Pearson Edexcel English, Years 8-11: content plan and rules

Read `src/content/types.ts` first. This file REPLACES the maths rules in `AUTHORING.md` for English (only the file/id/verify
conventions from AUTHORING.md still apply). Quality reference for file shape: any `src/content/courses/edx-maths-y8/unit-1/lesson-1-1.ts`.

## Courses (folder = course id)
- English Language: `edx-englang-y8`, `edx-englang-y9` (Key Stage 3, Pearson Edexcel International Lower Secondary English),
  `edx-englang-y10`, `edx-englang-y11` (Pearson Edexcel International GCSE (9-1) English Language A, 4EA1).
- English Literature: `edx-englit-y8`, `edx-englit-y9` (Key Stage 3), `edx-englit-y10`, `edx-englit-y11` (International GCSE (9-1) English Literature, 4ET1).
- Unit folders `src/content/courses/<course-id>/unit-N/` (units 1-3). Unit index exports `unitN` (`code: "N"`). Lesson files
  `lesson-N-M.ts` export `lessonNM` (`code: "N-M"`). Do NOT create the course `index.ts`.
- Id prefixes (unit, lesson, concept, question): Language `el8-uN-` .. `el11-uN-`, Literature `et8-uN-` .. `et11-uN-`.
  Unit id is e.g. `el10-u2`. Question ids `<prefix><concept-slug>-q1` .. `-q4`.
- English is NOT tiered: never set `tier` or `paper`.

## Shape (tests enforce)
- 3 units per course, 3 lessons per unit, 2 concepts per lesson, exactly 4 questions per concept:
  1. q1 foundation, 1-2 marks, usually `mcq` (identify a technique, meaning of a word, purpose, which quotation shows X). Distractors must be plausible misreadings.
  2. q2 core, 2-4 marks, `mcq` or `open` (retrieve, explain with a quotation, rewrite a sentence correctly).
  3. q3 challenge, 4-8 marks, `open` (analyse how the writer creates an effect, short writing task).
  4. q4 structured, `open`, 3-4 parts building in demand, total 12-30 marks (e.g. (a) retrieve 2, (b) explain 4, (c) analyse 6, (d) extended response 12-15).
- Any `open` question with totalMarks >= 6 MUST have `markscheme.levels`. Structured questions: give levels for each part worth 6+ marks, with `part` set on each level.
  The highest level's upper mark MUST equal that question's (or part's) marks. Ranges are strings like "13-15", highest level first.
  Typical 5-level scheme: Level 5 "13-15", Level 4 "10-12", Level 3 "7-9", Level 2 "4-6", Level 1 "1-3". Use Edexcel-style descriptors
  (Level 1 "simple, limited", Level 2 "some understanding, some relevant references", Level 3 "clear, relevant", Level 4 "thorough, well-chosen", Level 5 "perceptive, discriminating, assured").
- Step marks MUST sum to totalMarks, and per part to that part's marks (every step of a structured question has `part`).
  For level-marked answers, steps are the **indicative content**: each step is one creditworthy point a top answer would make, with its marks and AO.
- `markCode` is an assessment objective, never M/A/B/R:
  - Language 4EA1: AO1 read and understand, select and interpret information; AO2 analyse how writers use language and structure;
    AO3 explore links and comparisons between texts; AO4 communicate effectively and imaginatively, adapting form, tone and register; AO5 vocabulary, sentence structure, spelling, punctuation and grammar.
  - Literature 4ET1: AO1 knowledge and understanding with textual references; AO2 analyse language, form and structure and their effects;
    AO3 explore links and connections between texts (comparison); AO4 relationship between texts and their contexts.
  - Key Stage 3 years use the same AO codes so students get used to them.
- `principles` (1-4) use kind `technique` (language or structural device), `convention` (form or genre), `context`, `skill` (exam skill such as PEE/PETAL, embedding quotations) or `definition`. Each has a precise statement.
- Step fields: `reasoning` = the point and WHY it earns credit; `evidence` = the short quotation it uses (plain text, exactly as in the extract). Never use `working` in English.
- `finalAnswer`: for mcq the correct option and why; for open questions a concise model answer (a top-level paragraph or a summary of the key points per part).
- `commonErrors` (real student mistakes: feature-spotting without effect, retelling the plot, no quotation, ignoring the question focus). `examinerNote` optional.
- Lessons: 2-3 sections teaching the skill properly, `keyFormulas` is used as "Key terms and techniques" (name + statement), and a fully worked example (question + model answer).
- Lesson `standards`: Years 8-9 e.g. `"KS3 Reading"`, `"KS3 Writing"`; Years 10-11 e.g. `"4EA1 Paper 1 Section A"`, `"4EA1 AO2"`, `"4ET1 Paper 2 Section B"`, `"4ET1 AO4"`. 4-7 vocabulary terms per lesson.

## Extracts and copyright (important)
- Put the passage in `question.extract` `{ title, author, source?, text, lineNumbers? }`. `text` is plain text: "\n" line break (poetry/drama), "\n\n" new paragraph/stanza. Use `lineNumbers: true` for poems and play extracts and refer to "lines 3-6" in prompts.
- ONLY use (a) public-domain texts (authors who died before 1950 and works published before 1929: Shakespeare, Dickens, Austen, Shelley, Stevenson, the Brontes, Poe, Hardy, Keats, Wordsworth, Blake, Rossetti, Tennyson, Browning, Owen, Kipling, Twain, Jack London, Conan Doyle, Wilde...) quoted accurately (only passages you know verbatim with high confidence; if unsure write an original passage instead), or (b) ORIGINAL passages you write yourself, with `author: "Written for Akademik Space"`.
- Copyrighted set texts (An Inspector Calls, Of Mice and Men): NO extracts. Ask essay and knowledge questions about the text; quotations in markschemes at most a few words each.
- Extracts: 8-30 lines / 120-450 words. Several questions in a concept may reuse the same extract.
- The `$` character is FORBIDDEN anywhere (it renders as maths). Write "dollars" or use "£". No LaTeX. `**bold**` is allowed. No emojis. British English.
- Double quotes inside TypeScript double-quoted strings must be escaped (\") or use single quotes / curly quotes for quotations.

## Unit plan ((a) and (b) are the two concepts of each lesson)

### edx-englang-y8 Year 8 English Language (KS3)
- unit-1 "Reading Fiction": 1-1 Retrieval and Inference (a) retrieving explicit information (b) inferring character and feeling; 1-2 Language for Effect (a) word choice and connotation (b) imagery: simile, metaphor, personification; 1-3 Structure (a) openings and shifts in focus (b) sentence length and paragraphing for effect
- unit-2 "Reading Non-fiction": 2-1 Purpose, Audience and Form (a) identifying purpose, audience and form (b) fact, opinion and bias; 2-2 Persuasive Techniques (a) rhetorical devices (b) tone and viewpoint; 2-3 Comparing Texts (a) comparing ideas (b) comparing methods
- unit-3 "Writing": 3-1 Descriptive Writing (a) sensory detail and figurative language (b) structuring a description; 3-2 Transactional Writing (a) formal letters and register (b) articles and speeches; 3-3 Technical Accuracy (a) commas, apostrophes and semicolons (b) sentence variety and grammar

### edx-englang-y9 Year 9 English Language (KS3)
- unit-1 "Reading 19th-century Fiction": 1-1 (a) inference from unfamiliar language (b) summarising character and setting; 1-2 (a) analysing language with terminology (b) narrative voice and perspective; 1-3 (a) structural analysis of a whole extract (b) evaluating a writer's success
- unit-2 "Non-fiction: Travel, Memoir and Journalism": 2-1 (a) explicit and implicit meaning (b) the writer's attitude; 2-2 (a) language in non-fiction (b) structure in non-fiction: anecdote and counter-argument; 2-3 (a) comparing perspectives across time (b) summarising and synthesising two texts
- unit-3 "Writing to Narrate and Argue": 3-1 (a) narrative structure (b) characterisation and dialogue; 3-2 (a) structuring an argument (b) persuasive speeches; 3-3 (a) ambitious vocabulary and register (b) proofreading and editing

### edx-englang-y10 Year 10 English Language A (4EA1)
- unit-1 "Paper 1 Section A: Non-fiction Reading": 1-1 (a) retrieval questions (b) explaining a writer's views; 1-2 (a) analysing language and structure (b) selecting and embedding evidence; 1-3 (a) comparing two texts (b) planning the comparison answer
- unit-2 "Paper 1 Section B: Transactional Writing": 2-1 (a) form conventions: letter, article, speech, review, report (b) tone and register for audience; 2-2 (a) writing to argue and persuade (b) writing to advise and inform; 2-3 (a) paragraphing and discourse markers (b) AO5 accuracy
- unit-3 "Paper 2: Poetry and Prose Texts and Imaginative Writing": 3-1 (a) language in poetry (b) form and structure in poetry; 3-2 (a) analysing prose fiction (b) writing about effects on the reader; 3-3 (a) imaginative writing: openings and hooks (b) imaginative writing: structure and endings

### edx-englang-y11 Year 11 English Language A (4EA1)
- unit-1 "Advanced Reading Analysis": 1-1 (a) subtle inference and implicit attitudes (b) irony and tone; 1-2 (a) rhetoric in speeches (public-domain speeches) (b) integrating language and structure analysis; 1-3 (a) evaluative comparison (b) exam technique and timing for Section A
- unit-2 "Mastering Transactional Writing": 2-1 (a) openings and conclusions (b) counter-argument and rebuttal; 2-2 (a) writing in response to a source text (b) reports and reviews; 2-3 (a) top-band AO4 crafting (b) top-band AO5 sophistication
- unit-3 "Mastering Paper 2": 3-1 (a) unseen poem full response (b) unseen prose full response; 3-2 (a) narrative perspective and time (b) symbolism and motif in your own writing; 3-3 (a) descriptive writing from a scene prompt (b) full exam-style questions

### edx-englit-y8 Year 8 English Literature (KS3)
- unit-1 "Poetry": 1-1 (a) speaker, subject and tone (b) imagery; 1-2 (a) sound: rhyme, rhythm, alliteration (b) form: sonnet, ballad, free verse; 1-3 (a) comparing two poems (b) writing an analytical paragraph
- unit-2 "Prose: A Christmas Carol": 2-1 (a) plot and the five staves (b) Scrooge's characterisation; 2-2 (a) themes: redemption, poverty and family (b) Victorian context; 2-3 (a) extract analysis (b) writing about the whole text
- unit-3 "Shakespeare: Romeo and Juliet": 3-1 (a) reading Shakespeare's language (b) dramatic devices: soliloquy, aside, dramatic irony; 3-2 (a) characters (b) themes: love, conflict, fate; 3-3 (a) extract analysis (b) Elizabethan context and audience

### edx-englit-y9 Year 9 English Literature (KS3)
- unit-1 "Gothic Fiction" (Frankenstein, Jekyll and Hyde, Poe, Dracula): 1-1 (a) gothic conventions (b) setting and atmosphere; 1-2 (a) narrators and unreliable narration (b) the monstrous and the double; 1-3 (a) extract analysis (b) context: science, religion and Victorian anxiety
- unit-2 "Poetry Through Time": 2-1 (a) Romantic poetry and nature (b) Victorian poetry and the dramatic monologue; 2-2 (a) First World War poetry (b) comparing poems on a theme; 2-3 (a) unseen poetry (b) the poetry essay
- unit-3 "Shakespeare: Julius Caesar": 3-1 (a) rhetoric in the funeral speeches (b) Brutus and Cassius; 3-2 (a) themes: power, loyalty, fate (b) Roman and Elizabethan context; 3-3 (a) extract analysis (b) whole-play essay

### edx-englit-y10 Year 10 English Literature (4ET1)
- unit-1 "Paper 1: Unseen Poetry and the Anthology" (public-domain poems only): 1-1 (a) approaching an unseen poem (b) language, form and structure in an unseen poem; 1-2 (a) poems of love and relationships (b) poems of conflict and loss; 1-3 (a) comparing two poems (AO3) (b) the comparison essay
- unit-2 "Paper 2 Section A: Modern Drama: An Inspector Calls" (no extracts): 2-1 (a) the Birlings and Gerald (b) the Inspector as a dramatic device; 2-2 (a) themes: responsibility, class, gender, age (b) context: 1912 and 1945; 2-3 (a) dramatic methods: stage directions, dramatic irony, structure (b) planning and writing the essay
- unit-3 "Paper 2 Section B: Literary Heritage: Macbeth": 3-1 (a) Macbeth's ambition and downfall (b) Lady Macbeth; 3-2 (a) the supernatural (b) guilt, kingship and Jacobean context; 3-3 (a) extract analysis (b) from extract to whole play

### edx-englit-y11 Year 11 English Literature (4ET1)
- unit-1 "Paper 1 Section B: Modern Prose: Of Mice and Men" (no extracts): 1-1 (a) George and Lennie (b) Curley's wife, Crooks and Candy; 1-2 (a) themes: dreams, loneliness, power (b) context: the Great Depression; 1-3 (a) Steinbeck's methods: setting, foreshadowing, cyclical structure (b) the essay
- unit-2 "Literary Heritage: Pride and Prejudice": 2-1 (a) Elizabeth Bennet (b) Mr Darcy; 2-2 (a) themes: marriage, class, reputation (b) Regency context; 2-3 (a) narrative voice and irony (b) from extract to whole novel
- unit-3 "Exam Mastery": 3-1 (a) timed unseen poetry (b) timed poetry comparison; 3-2 (a) thesis statements and conclusions (b) alternative interpretations; 3-3 (a) integrating context (AO4) (b) full exam-style questions

## Verify
- `run_tests` with `files: ["src/content/units.test"]` and `testNamePattern` set to your course folder (e.g. `edx-englang-y10/`). Fix every failure.
- `run_lint` target "eslint", fix errors in your files only.
