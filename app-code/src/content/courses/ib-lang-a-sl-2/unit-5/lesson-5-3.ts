import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "langa-u5-lesson-5-3",
  code: "5-3",
  title: "Timed Comparative Essay Practice",
  goal: "I CAN write a complete comparative essay under timed conditions with planning, execution and review.",
  standards: ["Timed writing", "Comparative essay", "Exam technique"],
  vocabulary: [
    { term: "Timed essay", definition: "A comparative essay written within a fixed period — typically 45-60 minutes for IB Language A." },
    { term: "Planning", definition: "The pre-writing stage: thesis, paragraph skeleton, key evidence." },
    { term: "Execution", definition: "The writing stage: producing the essay's prose within the allocated time." },
    { term: "Review", definition: "The final check: thesis present, balance maintained, conclusion resolves." },
    { term: "Time management", definition: "Allocating time across planning, writing and review to maximise marks." },
    { term: "Exam technique", definition: "Strategies specific to assessment: addressing the question, using terminology, structuring for the marker." },
  ],
  concepts: [
    {
      id: "langa-u5-timed-strategy",
      title: "Timed essay strategy",
      skill: "Plan, write and review a comparative essay within a fixed time limit.",
      lesson: {
        sections: [
          {
            heading: "The exam clock",
            body: "For a 60-minute comparative essay: **10 minutes planning** (thesis + paragraph skeleton + key evidence), **40 minutes writing**, **10 minutes review**. For 45 minutes: 8/30/7. The planning time is non-negotiable — it prevents the fatal error of discovering your thesis in paragraph three.",
          },
          {
            heading: "Planning a comparison fast",
            body: "Write the comparative thesis first — even rough. Then three point-of-comparison topic sentences. Select one anchor quotation per text per paragraph. If time runs short, the skeleton still produces a coherent essay.",
          },
          {
            heading: "Review priorities",
            body: "In the final minutes, check: comparative thesis present? Each paragraph pairs both texts? Evidence embedded? Conclusion synthesises? Fix errors of **argument** before errors of grammar — a missing comparison costs more than a comma.",
          },
        ],
        keyFormulas: [
          { name: "Time split", statement: "10% plan + 65% write + 15% review (adjust for duration)" },
          { name: "Priority check", statement: "Thesis → pairing → evidence → synthesis → grammar" },
        ],
        workedExample: {
          problem: "You have 50 minutes for a comparative essay on two poems. How do you allocate time?",
          solution: "5 minutes reading + planning, 35 minutes writing, 10 minutes review — with the thesis written in the first 2 minutes of planning.",
        },
      },
      questions: [
        {
          id: "langa-u5-pq1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What should you write first in a timed comparative essay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The introduction" },
              { id: "b", text: "The conclusion" },
              { id: "c", text: "The first body paragraph" },
              { id: "d", text: "A comparative thesis" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Timed planning", statement: "Thesis first — it controls the whole essay." },
            ],
            steps: [
              { reasoning: "The comparative thesis determines the essay's direction.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** A comparative thesis",
          },
        },
        {
          id: "langa-u5-pq2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why planning time should not be skipped even under time pressure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Planning value", statement: "Planning prevents structural failure; writing without it risks incoherence." },
            ],
            steps: [
              { reasoning: "Without planning, the essay may lack a comparative thesis — the most fundamental requirement.", marks: 1, markCode: "M" },
              { reasoning: "Planning ensures balance — you decide the points of comparison before writing, preventing one text from dominating.", marks: 1, markCode: "M" },
              { reasoning: "A skeleton (thesis + topic sentences) produces a coherent essay even if writing time runs short.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Planning ensures thesis, balance and structure — skipping it risks an incoherent essay that cannot be fixed in review.",
            commonErrors: ["Starting to write immediately to 'save time'."],
          },
        },
        {
          id: "langa-u5-pq3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "You have 40 minutes for a comparative essay on two texts you have not seen. Outline your time plan and first three actions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Timed strategy", statement: "Read, plan, write, review — in that order." },
            ],
            steps: [
              { reasoning: "Time plan: 5 minutes reading both texts, 5 minutes planning (thesis + 3 topic sentences), 22 minutes writing, 8 minutes review.", marks: 1, markCode: "M" },
              { reasoning: "First action: read both texts once for sense — identify the shared theme and the key difference in treatment.", marks: 1, markCode: "M" },
              { reasoning: "Second action: write a comparative thesis — even rough — claiming the relationship between treatments.", marks: 1, markCode: "M" },
              { reasoning: "Third action: draft three topic sentences pairing both texts on shared points of comparison.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5/5/22/8 split; read for theme, thesis, paired topic sentences — structure before prose.",
            commonErrors: ["Reading one text fully before the other; starting to write before planning."],
          },
        },
        {
          id: "langa-u5-pq4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Plan a timed comparative essay (50 minutes) on the following paired texts, including time allocation and paragraph outline.",
          extract: {
            title: "Two Crossings (reprise)",
            author: "Written for Akademik Space",
            source: "Original paired poems",
            text: "POEM A: The river took the bridge\nand gave it back at dawn —\na different bridge, they say,\nthough the carpenters insist\nit is the same.\nI cross it anyway.\nThe toll is one memory\nat a time.\n\nPOEM B: The old road ended\nat the river's edge.\nWe built a ferry instead —\ntwo planks and a rope.\nMy father called it progress.\nI call it a rope\nthat will hold until it doesn't.",
          },
          parts: [
            { label: "a", prompt: "Give your time allocation for 50 minutes.", marks: 2 },
            { label: "b", prompt: "Write a comparative thesis and three integrated topic sentences.", marks: 4 },
            { label: "c", prompt: "List the three most important review checks.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Timed essay plan", statement: "Time split + comparative thesis + integrated topic sentences + review priorities." },
            ],
            steps: [
              { part: "a", reasoning: "~5 minutes reading/planning, ~35 minutes writing, ~10 minutes review — or similar justified split.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Time allocation is realistic and reserves review time.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Thesis example: 'Both poems treat crossing as necessary but diverge on its cost — A makes it a debt paid in memory, B makes it a rope that may fail; the poems together suggest that every crossing is both continuation and risk.'", marks: 1, markCode: "A" },
              { part: "b", reasoning: "P1 topic sentence: the solutions — A's restored bridge (impersonal) versus B's improvised ferry (communal).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "P2 topic sentence: attitudes to change — A's denial ('insist it is the same') versus B's celebration ('calls it progress').", marks: 1, markCode: "M" },
              { part: "b", reasoning: "P3 topic sentence: the cost — A's internal erosion ('one memory at a time') versus B's external fragility ('rope that will hold until it doesn't').", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Check 1: comparative thesis present and arguable; Check 2: each paragraph pairs both texts; Check 3: conclusion synthesises rather than summarises.", marks: 2, markCode: "M" },
            ],
            finalAnswer: "Plan: 5/35/10. Thesis: crossing as continuation and risk. P1 solutions, P2 attitudes, P3 costs. Checks: thesis, pairing, synthesis.",
            commonErrors: ["No review time; topic sentences that are summaries rather than comparisons."],
          },
        },
        {
          id: "langa-u5-pq5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "For a 60-minute comparative essay, the recommended time split is approximately:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "10 minutes planning, 40 minutes writing, 10 minutes review" },
              { id: "b", text: "30 minutes planning, 20 minutes writing, 10 minutes review" },
              { id: "c", text: "50 minutes writing, 10 minutes planning" },
              { id: "d", text: "55 minutes writing, 5 minutes everything else" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Time management", statement: "Plan, write, review — with review time non-negotiable." },
            ],
            steps: [
              { reasoning: "The standard split reserves ~10% for planning, ~65% for writing and ~15% for review.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** 10/40/10",
          },
        },
        {
          id: "langa-u5-pq6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "During the planning stage of a timed comparative essay, you should first:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Count the words in the texts" },
              { id: "b", text: "Draft a comparative thesis, even if rough" },
              { id: "c", text: "Write the introduction" },
              { id: "d", text: "Choose quotations for every paragraph" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Planning", statement: "The thesis controls the essay — draft it first." },
            ],
            steps: [
              { reasoning: "The comparative thesis determines every paragraph's direction, so it comes first in planning.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Draft the comparative thesis",
          },
        },
        {
          id: "langa-u5-pq7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should review time be reserved even if the essay feels finished?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To check spelling only" },
              { id: "b", text: "To catch argument-level errors — missing comparison, imbalance, unresolved conclusion — that cost more marks than grammar" },
              { id: "c", text: "To rewrite the introduction" },
              { id: "d", text: "To add more quotations" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Review priorities", statement: "Fix argument errors before surface errors." },
            ],
            steps: [
              { reasoning: "Review prioritises thesis, pairing, evidence and synthesis — structural failures cost more than comma errors.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Argument errors cost more than grammar",
          },
        },
        {
          id: "langa-u5-pq8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The correct priority order during review is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Grammar, then thesis, then pairing" },
              { id: "b", text: "Thesis, pairing, evidence, synthesis, then grammar" },
              { id: "c", text: "Whatever is quickest to fix" },
              { id: "d", text: "Conclusion, then introduction, then body" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Review priorities", statement: "Thesis → pairing → evidence → synthesis → grammar." },
            ],
            steps: [
              { reasoning: "Argument-level checks come first; surface errors last.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Thesis → pairing → evidence → synthesis → grammar",
          },
        },
        {
          id: "langa-u5-pq9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A paragraph skeleton (thesis + topic sentences) protects a timed essay because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ensures a coherent, comparative structure even if writing time runs short" },
              { id: "b", text: "Guarantees a high grade" },
              { id: "c", text: "Eliminates the need for evidence" },
              { id: "d", text: "Counts as extra marks" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Planning value", statement: "A skeleton produces coherence even under time pressure." },
            ],
            steps: [
              { reasoning: "If time runs short, the skeleton still yields a structured essay — coherence survives even when prose is thin.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Coherence survives time pressure",
          },
        },
        {
          id: "langa-u5-pq10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "For a 45-minute comparative essay, the best adaptation of the 10/40/10 principle is approximately:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "15/20/10" },
              { id: "b", text: "20/20/5" },
              { id: "c", text: "5/35/5" },
              { id: "d", text: "8/30/7" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Time management", statement: "Scale the split proportionally: ~10% plan, ~65% write, ~15% review." },
            ],
            steps: [
              { reasoning: "45 minutes scales to roughly 8 planning, 30 writing, 7 review — preserving the proportions.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** 8/30/7",
          },
        },
        {
          id: "langa-u5-pq11",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Explain the '10% plan + 65% write + 15% review' rule and why each stage matters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Time management", statement: "Proportional allocation prevents structural failure and preserves review." },
            ],
            steps: [
              { reasoning: "Planning (~10%) produces the thesis and paragraph skeleton — without it, the essay lacks direction and balance.", marks: 1, markCode: "M" },
              { reasoning: "Writing (~65%) is the bulk — the prose that executes the plan; too little time here produces thin analysis.", marks: 1, markCode: "M" },
              { reasoning: "Review (~15%) catches argument-level errors — missing comparison, imbalance, unresolved conclusion — that cost more marks than surface errors.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Plan for structure, write for analysis, review for argument — each stage protects a different mark category.",
            commonErrors: ["Skipping review to write more; over-planning at the expense of prose."],
          },
        },
        {
          id: "langa-u5-pq12",
          difficulty: "core",
          totalMarks: 4,
          stem: "You have 50 minutes for a comparative essay on two texts you have already read once. Allocate your time and justify each stage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Time management", statement: "Allocation must match task demands — familiar texts need less reading time." },
            ],
            steps: [
              { reasoning: "Reading/planning: ~5 minutes — texts are familiar, so skim for the comparative thesis rather than full close reading.", marks: 1, markCode: "M" },
              { reasoning: "Writing: ~35 minutes — the bulk, executing the plan with paired evidence.", marks: 1, markCode: "M" },
              { reasoning: "Review: ~10 minutes — thesis check, pairing check, synthesis check, then surface errors.", marks: 1, markCode: "M" },
              { reasoning: "Justification: familiar texts free planning time for writing; review is preserved because argument errors are costliest.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5/35/10 — less reading time because texts are known; review preserved for argument checks.",
            commonErrors: ["Allocating equal time to all stages regardless of task demands."],
          },
        },
        {
          id: "langa-u5-pq13",
          difficulty: "core",
          totalMarks: 4,
          stem: "List the five most important checks to perform in the final review minutes of a comparative essay, in priority order.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Review priorities", statement: "Thesis → pairing → evidence → synthesis → grammar." },
            ],
            steps: [
              { reasoning: "Check 1: is the comparative thesis present and arguable — does it claim a relationship, not a shared topic?", marks: 1, markCode: "M" },
              { reasoning: "Check 2: does each body paragraph pair both texts on the same point of comparison?", marks: 1, markCode: "M" },
              { reasoning: "Check 3: is evidence embedded and analysed, not just quoted?", marks: 1, markCode: "M" },
              { reasoning: "Check 4: does the conclusion synthesise the comparison rather than summarise both texts?", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Thesis → pairing → evidence → synthesis → grammar — argument before surface.",
            commonErrors: ["Spending review time on spelling while a missing comparison goes unfixed."],
          },
        },
        {
          id: "langa-u5-pq14",
          difficulty: "core",
          totalMarks: 4,
          stem: "You have 8 minutes to plan a comparative essay on two poems about childhood. Write a rough comparative thesis and three topic sentences.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Fast planning", statement: "Thesis + paired topic sentences in minimal time." },
            ],
            steps: [
              { reasoning: "Thesis example: 'Both poems figure childhood as a country one leaves and one cannot — they converge on loss but diverge on whether it is exile or growth.'", marks: 2, markCode: "A" },
              { reasoning: "P1 topic sentence: imagery — one poem's pastoral landscapes versus the other's confined domestic spaces.", marks: 1, markCode: "M" },
              { reasoning: "P2 topic sentence: voice — the adult speaker's retrospective tone versus the child's immediate perception.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "Thesis: childhood as country — exile vs growth. P1 imagery, P2 voice (plus a third point such as structure or theme).",
            commonErrors: ["Spending planning time polishing sentences instead of fixing the argument's skeleton."],
          },
        },
        {
          id: "langa-u5-pq15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "You have 40 minutes to write a comparative essay on two unseen texts. Plan your time and first three actions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Timed strategy", statement: "Read, plan, write, review — structure before prose." },
            ],
            steps: [
              { reasoning: "Time plan: 5 minutes reading both texts, 5 minutes planning (thesis + 3 topic sentences), 23 minutes writing, 7 minutes review.", marks: 2, markCode: "M" },
              { reasoning: "First action: read both texts once for sense — identify the shared theme and the key divergence in treatment.", marks: 1, markCode: "M" },
              { reasoning: "Second action: write a comparative thesis — even rough — claiming the relationship between treatments.", marks: 1, markCode: "M" },
              { reasoning: "Third action: draft three topic sentences pairing both texts on shared points of comparison.", marks: 1, markCode: "M" },
              { reasoning: "The plan front-loads structure because unseen texts demand more reading time; writing and review still get their shares.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5/5/23/7 — read for theme, thesis, paired topic sentences; structure before prose.",
            commonErrors: ["Reading one text fully before the other; starting to write before planning."],
          },
        },
        {
          id: "langa-u5-pq16",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Two Endings",
            author: "Written for Akademik Space",
            source: "Original paired poems",
            text: "POEM A: The story ended\nwhere it began —\nthe same door,\nthe same knock,\nbut this time\nshe answered.\n\nPOEM B: The story ended\nwhere it always does —\nmid-sentence,\nthe kettle whistling,\nsomeone calling\nfrom the other room.",
          },
          stem: "Plan a timed comparative essay (45 minutes) on these poems.",
          parts: [
            { label: "a", prompt: "Give your time allocation for 45 minutes.", marks: 2 },
            { label: "b", prompt: "Write a comparative thesis and three integrated topic sentences.", marks: 4 },
            { label: "c", prompt: "List the three most important review checks.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Timed essay plan", statement: "Time split + comparative thesis + integrated topic sentences + review priorities." },
            ],
            steps: [
              { part: "a", reasoning: "~5 minutes reading/planning, ~30 minutes writing, ~10 minutes review — or similar justified split.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Review time is explicitly reserved.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Thesis example: 'Both poems end stories, but where A's ending circles back to its beginning with a difference, B's refuses ending altogether — they converge on narrative closure as impossible and diverge on whether the circle or the interruption is more honest.'", marks: 2, markCode: "A" },
              { part: "b", reasoning: "P1 topic sentence: structure — A's circular return ('where it began') versus B's open suspension ('mid-sentence').", marks: 1, markCode: "M" },
              { part: "b", reasoning: "P2 topic sentence: imagery — A's door and knock (ritual, repetition) versus B's kettle and calling voice (domestic interruption).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Check 1: comparative thesis present; Check 2: each paragraph pairs both texts; Check 3: conclusion synthesises rather than summarises.", marks: 2, markCode: "M" },
            ],
            finalAnswer: "Plan: ~5/30/10. Thesis: closure as impossible — circle vs interruption. P1 structure, P2 imagery. Checks: thesis, pairing, synthesis.",
            commonErrors: ["No review time; topic sentences that summarise rather than compare."],
          },
        },
      ],
    },
    {
      id: "langa-u5-exam-technique",
      title: "Exam technique",
      skill: "Apply IB Language A assessment criteria to maximise marks in written and oral components.",
      lesson: {
        sections: [
          {
            heading: "Understanding the criteria",
            body: "IB Language A assesses **knowledge, understanding, analysis, synthesis, evaluation, organisation, and communication**. For written tasks, this means: does the essay address the question? Is the analysis text-based? Is the argument organised? Is the evaluation balanced?",
          },
          {
            heading: "Addressing the question",
            body: "Every paragraph should serve the question, not just the texts. If the question asks 'how do the texts treat loss?', your paragraphs should answer that — not just analyse whatever interests you. The comparative thesis should be responsive to the question's terms.",
          },
          {
            heading: "For the oral commentary",
            body: "The oral assessment requires a **guided literary analysis** — a structured commentary on an unseen or prepared extract. Prepare a framework (context, structure, language, themes) but respond to what the text actually does. The best commentaries are responsive, not scripted.",
          },
        ],
        keyFormulas: [
          { name: "Criteria checklist", statement: "Question + text-based analysis + organisation + evaluation + communication" },
          { name: "Oral framework", statement: "Context + structure + language + themes — responsive, not scripted" },
        ],
        workedExample: {
          problem: "A comparative essay question asks 'How do the texts represent power?' Your essay analyses imagery but never mentions power. What went wrong?",
          solution: "The essay failed to address the question — analysis without relevance to the question's terms earns limited marks. Every paragraph should connect its analysis to 'power'.",
        },
      },
      questions: [
        {
          id: "langa-u5-eq1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does 'addressing the question' mean in IB Language A?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writing a long introduction" },
              { id: "b", text: "Using literary terminology" },
              { id: "c", text: "Ensuring every paragraph serves the question's terms" },
              { id: "d", text: "Writing about the texts generally" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Addressing the question", statement: "Every paragraph should connect analysis to the question's terms." },
            ],
            steps: [
              { reasoning: "Addressing the question means relevance — analysis must serve the question's terms.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Every paragraph serves the question",
          },
        },
        {
          id: "langa-u5-eq2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'responsive, not scripted' is the key principle for the oral commentary.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Oral commentary", statement: "The commentary must respond to what the text actually does, not deliver a prepared script." },
            ],
            steps: [
              { reasoning: "A scripted commentary ignores the text's actual features — it delivers what was prepared, not what the extract demands.", marks: 1, markCode: "M" },
              { reasoning: "Responsive commentary listens to the text — its structure, turns, surprises — and adjusts the analysis accordingly.", marks: 1, markCode: "M" },
              { reasoning: "The examiner rewards genuine engagement with the specific text, not generic literary commentary.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Responsive commentary engages the specific text; scripted commentary delivers preparation regardless of what the text does.",
            commonErrors: ["Preparing a fixed commentary that ignores the actual extract."],
          },
        },
        {
          id: "langa-u5-eq3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Crossing (extract)",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "The river took the bridge\nand gave it back at dawn —\na different bridge, they say,\nthough the carpenters insist\nit is the same.",
          },
          stem: "A question asks 'How does the text explore the relationship between change and continuity?' Analyse how the extract addresses this question.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Question-focused analysis", statement: "Every analytical point should connect to the question's terms." },
            ],
            steps: [
              { reasoning: "The question's terms — 'change' and 'continuity' — are both present: the bridge is 'a different bridge' (change) yet 'the carpenters insist / it is the same' (continuity).",
              marks: 1, markCode: "M" },
              { reasoning: "The extract explores their relationship through the gap between appearance and insistence — change is real but denied.", marks: 1, markCode: "M" },
              { reasoning: "The em-dash after 'dawn' creates a pause — the moment of return is suspended between what was lost and what was restored.", marks: 1, markCode: "M" },
              { reasoning: "Addressing the question means noting that the text does not resolve the tension — it stages it; the 'insist' suggests continuity is a claim, not a fact.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The extract stages the change/continuity tension: 'different bridge' vs 'insist it is the same' — continuity as claim, not fact.",
            commonErrors: ["Analysing the extract without connecting to the question's specific terms."],
          },
        },
        {
          id: "langa-u5-eq4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Prepare a 5-minute oral commentary plan on the following extract, including how you would address the question 'How does the text use form to create meaning?'",
          extract: {
            title: "The Gate (extract)",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "Morning opened its iron gate\nand let the light in like a debt\nI never agreed to pay.",
          },
          parts: [
            { label: "a", prompt: "Outline your commentary structure (opening, points, close).", marks: 2 },
            { label: "b", prompt: "Identify three formal features and their effects.", marks: 4 },
            { label: "c", prompt: "Explain how you would respond if the extract were different from your preparation.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Oral commentary planning", statement: "Structure + formal analysis + responsive flexibility." },
            ],
            steps: [
              { part: "a", reasoning: "Structure: opening (identify text, state focus on form), three points (personification, enjambment, rhythm), close (synthesis on form creating meaning).", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Feature 1: personification — 'morning opened its iron gate' gives the day mechanical agency.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Feature 2: enjambment — 'light in like a debt / I never agreed to pay' carries the debt-image across the break, enacting the burden.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Feature 3: rhythm — the three-line structure with a final short line creates a falling cadence, like a verdict.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each feature is linked to meaning: form enacts the poem's theme of involuntary existence.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Responsive strategy: if the extract differs, return to the question's terms — 'form' — and identify whatever formal features are actually present; the framework is flexible, the question is fixed.", marks: 2, markCode: "M" },
            ],
            finalAnswer: "Structure: frame → 3 formal points → synthesis. Features: personification, enjambment, falling rhythm — all linked to meaning. Responsive: return to question's terms if extract differs.",
            commonErrors: ["Scripted commentary that cannot adapt; formal features identified without linking to meaning."],
          },
        },
        {
          id: "langa-u5-eq5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "IB Language A written assessment primarily evaluates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Knowledge, understanding, analysis, synthesis, evaluation, organisation and communication" },
              { id: "b", text: "Only the number of quotations used" },
              { id: "c", text: "Only grammatical accuracy" },
              { id: "d", text: "Only the essay's length" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Assessment criteria", statement: "IB Language A assesses knowledge through communication." },
            ],
            steps: [
              { reasoning: "The criteria span knowledge to communication — analysis, synthesis and evaluation sit at their core.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Knowledge to communication",
          },
        },
        {
          id: "langa-u5-eq6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Text-based analysis' means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writing about literature in general" },
              { id: "b", text: "Quoting the entire text" },
              { id: "c", text: "Using critical theory terminology" },
              { id: "d", text: "Every claim is supported by evidence from the specific text" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Text-based analysis", statement: "Claims must be grounded in the specific text's features." },
            ],
            steps: [
              { reasoning: "Text-based analysis ties every interpretive claim to evidence — imagery, structure, diction — from the text itself.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Claims grounded in textual evidence",
          },
        },
        {
          id: "langa-u5-eq7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A question asks 'How do the texts represent power?' An essay analyses imagery but never mentions power. This essay:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Should be longer" },
              { id: "b", text: "Earns full marks for analysis" },
              { id: "c", text: "Fails to address the question — analysis without relevance to the question's terms earns limited marks" },
              { id: "d", text: "Needs more quotations" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Addressing the question", statement: "Analysis must connect to the question's terms." },
            ],
            steps: [
              { reasoning: "The essay never engages 'power' — the question's central term — so its analysis, however skilful, is irrelevant.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Fails to address the question",
          },
        },
        {
          id: "langa-u5-eq8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The oral assessment in IB Language A requires:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A creative writing piece" },
              { id: "b", text: "A guided literary analysis — a structured commentary on an extract" },
              { id: "c", text: "A memorised speech" },
              { id: "d", text: "A comparison of two full novels" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Oral commentary", statement: "Guided literary analysis of an extract." },
            ],
            steps: [
              { reasoning: "The oral is a guided literary analysis — structured commentary that responds to the extract's actual features.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Guided literary analysis",
          },
        },
        {
          id: "langa-u5-eq9",
          difficulty: "core",
          totalMarks: 2,
          stem: "The strongest approach to an unseen extract in the oral commentary is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reading the extract aloud slowly" },
              { id: "b", text: "Listing every literary device without analysis" },
              { id: "c", text: "Applying a flexible framework — context, structure, language, themes — while responding to what the text actually does" },
              { id: "d", text: "Delivering a fully prepared commentary regardless of the extract" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Oral commentary", statement: "Responsive, not scripted — framework flexible, engagement specific." },
            ],
            steps: [
              { reasoning: "A framework provides structure while responsiveness ensures the commentary engages this extract's actual features.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Flexible framework, responsive engagement",
          },
        },
        {
          id: "langa-u5-eq10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which essay best satisfies the criterion of 'synthesis' in comparative writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One that summarises each text in turn" },
              { id: "b", text: "One that lists similarities and differences" },
              { id: "c", text: "One that uses the most technical vocabulary" },
              { id: "d", text: "One whose conclusion draws the comparison together into a final judgement about how the texts relate" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Synthesis", statement: "Drawing the comparison together into a final judgement." },
            ],
            steps: [
              { reasoning: "Synthesis goes beyond listing — it resolves the accumulated comparison into a judgement about the texts' relationship.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Conclusion resolves the comparison",
          },
        },
        {
          id: "langa-u5-eq11",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Explain what 'addressing the question' requires of every paragraph in an IB Language A essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Addressing the question", statement: "Every paragraph must connect its analysis to the question's terms." },
            ],
            steps: [
              { reasoning: "Each paragraph's topic sentence and analysis should engage the question's specific terms — not just the texts generally.", marks: 1, markCode: "M" },
              { reasoning: "If the question asks 'how do the texts treat loss?', every paragraph must show how its point bears on 'loss' specifically.", marks: 1, markCode: "M" },
              { reasoning: "The comparative thesis should be responsive to the question — it claims a relationship relevant to what was asked.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Every paragraph ties its analysis to the question's terms; the thesis is responsive to what was asked.",
            commonErrors: ["Writing a good essay on the texts that ignores the question's actual terms."],
          },
        },
        {
          id: "langa-u5-eq12",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "The Toll",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "The bridge charges one memory\nat a time —\nyou pay as you cross,\nand arrive poorer\nbut lighter.",
          },
          stem: "A question asks 'How does the text represent the cost of progress?' Analyse how the extract addresses this question.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Question-focused analysis", statement: "Connect every analytical point to the question's terms." },
            ],
            steps: [
              { reasoning: "The question's term — 'cost of progress' — is literalised: the bridge 'charges one memory / at a time', making memory the currency of crossing.", marks: 1, markCode: "M" },
              { reasoning: "Progress is figured as transaction — 'you pay as you cross' — advancement requires payment; the poem does not ask whether the price is worth it, only that it exists.", marks: 1, markCode: "M" },
              { reasoning: "The ending complicates the cost — 'poorer / but lighter' suggests the payment is also relief; the cost and the benefit are the same act.", marks: 1, markCode: "M" },
              { reasoning: "Addressing the question means noting the text represents cost as ambiguous — progress's price is also its gift.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cost literalised as memory-payment; 'poorer but lighter' makes cost and benefit the same act — progress priced in remembrance.",
            commonErrors: ["Analysing the bridge metaphor without connecting to 'cost of progress'."],
          },
        },
        {
          id: "langa-u5-eq13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Outline the structure of a 5-minute oral commentary: opening, body points, and close.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Oral commentary structure", statement: "Frame → analysed points → synthesis." },
            ],
            steps: [
              { reasoning: "Opening (30-45 seconds): identify the text, state the focus — e.g. 'I will examine how form creates meaning in this extract.'", marks: 1, markCode: "M" },
              { reasoning: "Body (3-4 minutes): two or three analytical points — e.g. structure, imagery, voice — each linking feature to effect.", marks: 1, markCode: "M" },
              { reasoning: "Close (30-45 seconds): synthesise — what the text's methods achieve overall; do not summarise, resolve.", marks: 1, markCode: "M" },
              { reasoning: "The structure mirrors essay architecture — frame, evidence-led analysis, synthesis — compressed for speech.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Frame → 2-3 feature-to-meaning points → synthesis; ~5 minutes total.",
            commonErrors: ["A commentary that lists features without linking each to meaning."],
          },
        },
        {
          id: "langa-u5-eq14",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "The Map",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "The map was wrong\nabout the river —\nit dried up years ago,\nbut the map remembered\nthe water anyway.",
          },
          stem: "Identify three formal features in this extract and explain the effect of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Formal analysis", statement: "Each feature identified must be linked to its effect on meaning." },
            ],
            steps: [
              { reasoning: "Feature 1: present tense — 'the map remembered' gives the inanimate object ongoing mental life, suggesting memory outlives fact.", marks: 1, markCode: "M" },
              { reasoning: "Feature 2: line breaks — 'the map remembered / the water anyway' isolates the verb phrase, giving the act of remembering its own line.", marks: 1, markCode: "M" },
              { reasoning: "Feature 3: rhyme — 'ago' / 'anyway' creates a slant closure that mimics the map's imperfect accuracy — the rhyme is almost right, like the map.", marks: 1, markCode: "M" },
              { reasoning: "Each feature is linked to meaning: form enacts the poem's theme of representation outliving reality.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Present tense (memory as ongoing), enjambment (remembering isolated), slant rhyme (imperfect representation) — form enacts theme.",
            commonErrors: ["Naming features without explaining their effects."],
          },
        },
        {
          id: "langa-u5-eq15",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "The Archive",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "Every letter she sent\nis still in the box —\nunsent drafts of a life\nshe decided not to live.",
          },
          stem: "Analyse how this extract explores the relationship between intention and action, focusing on how the text's form creates meaning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Integrated analysis", statement: "Content + form + question terms." },
            ],
            steps: [
              { reasoning: "The question's terms — intention vs action — are literalised: 'every letter she sent' (action) versus 'unsent drafts' (intention unrealised).", marks: 1, markCode: "M" },
              { reasoning: "The box is an archive of the unlived — 'a life / she decided not to live' reframes drafts not as failure but as chosen renunciation.", marks: 1, markCode: "M" },
              { reasoning: "Form: the poem's short lines and end-stopped 'box' create archival stillness — the drafts are preserved, not erased; the form performs the keeping.", marks: 1, markCode: "M" },
              { reasoning: "The rhyme 'sent/life' is absent — the poem refuses closure, enacting the unfinished quality of the drafts themselves.", marks: 1, markCode: "M" },
              { reasoning: "The extract suggests intention and action are not opposed but layered — the drafts are a life too, just one kept in potential.", marks: 1, markCode: "A" },
              { reasoning: "Form creates meaning: archival stillness and withheld rhyme enact preservation and renunciation.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Intention vs action literalised as sent letters vs unsent drafts; archival form preserves the unlived life.",
            commonErrors: ["Discussing content without engaging the question's terms or formal features."],
          },
        },
        {
          id: "langa-u5-eq16",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "The Threshold",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "The door was neither open nor closed —\nshe stood before it for an hour,\nher hand on the handle,\nfeeling the wood's cool indifference.",
          },
          stem: "Prepare a 5-minute oral commentary plan on this extract for the question 'How does the text use form to create meaning?'",
          parts: [
            { label: "a", prompt: "Outline your commentary structure (opening, points, close).", marks: 2 },
            { label: "b", prompt: "Identify three formal features and their effects.", marks: 4 },
            { label: "c", prompt: "Explain how you would adapt if the extract differed from your preparation.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Oral commentary planning", statement: "Structure + formal analysis + responsive flexibility." },
            ],
            steps: [
              { part: "a", reasoning: "Structure: opening (identify text, state focus on form), three points (ambiguous syntax, tactile detail, falling rhythm), close (synthesis on form enacting hesitation).", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Feature 1: negation — 'neither open nor closed' suspends the binary, enacting indecision in syntax.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Feature 2: tactile detail — 'wood's cool indifference' personifies the door's refusal, making abstraction physical.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Feature 3: line length — the final line 'feeling the wood's cool indifference' is longest, letting the sensation of stasis fill the poem's space.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each feature links to meaning: form performs the hesitation it describes.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Adaptive strategy: return to the question's term — 'form' — and identify whatever formal features the actual extract contains; framework flexible, question fixed.", marks: 2, markCode: "M" },
            ],
            finalAnswer: "Frame → 3 formal points → synthesis. Features: negation, tactile personification, expanding line — form enacts hesitation. Adaptive: re-anchor to 'form'.",
            commonErrors: ["Scripted commentary that cannot adapt; features listed without linking to meaning."],
          },
        },
      ],
    },
  ],
};
