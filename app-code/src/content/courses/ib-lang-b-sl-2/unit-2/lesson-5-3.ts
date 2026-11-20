import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "langb-u5-lesson-5-3",
  code: "5-3",
  title: "Timed Writing and Revision Strategies",
  goal: "I CAN manage time in writing exams and revise effectively for accuracy, range and task fulfilment.",
  standards: [
    "Writing",
    "Exam technique",
    "Revision",
    "Time management",
    "Language B SL",
  ],
  vocabulary: [
    {
      term: "Timed writing",
      definition: "Producing a text within a fixed exam time limit.",
    },
    {
      term: "Revision",
      definition:
        "Reviewing and improving a draft for accuracy, range, organisation and task fulfilment.",
    },
    {
      term: "Proofreading",
      definition:
        "Checking for surface errors: spelling, punctuation, grammar.",
    },
    {
      term: "Self-assessment",
      definition:
        "Reviewing your own work against criteria to identify improvements.",
    },
    {
      term: "Time pressure",
      definition:
        "The constraint of limited exam time that affects planning and execution.",
    },
    {
      term: "Range of language",
      definition:
        "Variety in vocabulary, structures and sentence patterns — a marked criterion.",
    },
  ],
  concepts: [
    {
      id: "langb-u5-timed-writing",
      title: "Managing time under exam conditions",
      skill:
        "Allocate time for planning, writing and checking to produce a complete, task-focused text under pressure.",
      lesson: {
        sections: [
          {
            heading: "Time is part of the task",
            body: "In a timed Language B writing task, time management is a skill in itself. The standard split: **plan ~15%**, **write ~65%**, **check ~20%**. For a 45-minute task: ~7 min plan, ~30 min write, ~8 min check. Running out of time and leaving the conclusion unwritten costs more marks than a shorter checked essay.",
          },
          {
            heading: "Writing fast without losing quality",
            body: "Speed comes from preparation, not rushing. A clear plan means you write without stopping to decide what comes next. Write your strongest material first — if time runs short, you've covered the most important points. Keep sentences moving: don't perfect each sentence as you write; get the ideas down, refine in the check phase.",
          },
          {
            heading: "When time runs short",
            body: "If you're behind, cut strategically: shorten the conclusion to two sentences rather than skipping it entirely — every essay needs closure. Drop the weakest supporting point rather than rushing all of them. Never sacrifice the introduction or conclusion for a slightly longer body — those frame the whole task.",
          },
        ],
        keyFormulas: [
          {
            name: "Time split",
            statement:
              "Plan 15% / Write 65% / Check 20% — never skip the check",
          },
          {
            name: "Emergency rules",
            statement:
              "Shorten conclusion, not skip it; drop weakest point; protect intro + conclusion",
          },
        ],
        workedExample: {
          problem:
            "30 minutes left, essay half-written, no conclusion started. What do you do?",
          solution:
            "Finish current paragraph quickly, then write a 2-3 sentence conclusion restating the thesis. Leave 5 minutes for checking. Never skip the conclusion.",
        },
      },
      questions: [
        {
          id: "langb-u5-q17",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a reasonable time split for a timed writing task?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Write 100%, check if time remains" },
              { id: "b", text: "Plan ~15%, write ~65%, check ~20%" },
              { id: "c", text: "Plan 50%, write 50%" },
              { id: "d", text: "Check first, then write" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Time allocation",
                statement:
                  "Planning + writing + checking all need dedicated time.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The standard split reserves time for all three phases.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Plan ~15%, write ~65%, check ~20%",
            commonErrors: [
              "Spending all time writing and leaving errors unchecked.",
            ],
          },
        },
        {
          id: "langb-u5-q18",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three things to check during the revision phase of a timed essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Revision checklist",
                statement: "Task fulfilment, organisation, accuracy, range.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Task fulfilment: does the text answer the prompt in the right text type/register?",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Organisation: clear intro/body/conclusion, logical paragraph order.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Accuracy + range: fix errors, vary vocabulary and sentence structures.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Task fulfilment, organisation, accuracy/range.",
            commonErrors: [
              "Only checking spelling and missing structural problems.",
            ],
          },
        },
        {
          id: "langb-u5-q19",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why 'getting ideas down first, refining later' is better than perfecting each sentence while writing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Drafting strategy",
                statement:
                  "Flow of ideas first; polish in revision — perfectionism kills completion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Stopping to perfect each sentence breaks the flow of ideas.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "A complete draft gives you something to revise — better than a perfect opening and nothing else.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Revision is more efficient: you fix errors with fresh eyes at the end.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Under time pressure, completion + revision beats perfectionism + incompletion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Draft first for idea flow; revise later — completion beats perfection under time pressure.",
            commonErrors: [
              "Stalling on the first paragraph and never finishing.",
            ],
          },
        },
        {
          id: "langb-u5-q20",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "You have 40 minutes to write a 180-word essay. Plan your time allocation.",
          parts: [
            {
              label: "a",
              prompt: "Allocate minutes to planning, writing and checking.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Describe what you would do in the planning minutes.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Explain what you would prioritise in the final checking minutes.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Time management",
                statement:
                  "15/65/20 split scaled to 40 min: 6 plan / 26 write / 8 check.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "6 min plan, 26 min write, 8 min check — proportional split.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "All three phases allocated.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Planning: thesis + 3 points + paragraph order, written quickly.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Plan is compressed but sufficient to guide writing.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Check prioritises: conclusion present, task fulfilled, then accuracy errors.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Structural check before surface errors — bigger mark impact.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Fix spelling/grammar only after confirming structure is sound.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 6/26/8 split. (b) Thesis + points + order. (c) Structure first, then accuracy.",
            commonErrors: ["Allocating zero time to checking or planning."],
          },
        },
        {
          id: "langb-u5-q73",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why is time management itself a skill in timed Language B writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It only matters for the longest essays" },
              {
                id: "b",
                text: "Poor allocation loses marks through unfinished or unchecked work",
              },
              { id: "c", text: "It is only relevant in the reading section" },
              { id: "d", text: "Fast writers never need a plan" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Time as a criterion",
                statement: "Unfinished or unchecked work directly costs marks.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Running out of time leaves conclusions unwritten and errors unfixed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Poor allocation loses marks through unfinished or unchecked work",
            commonErrors: [
              "Believing writing speed alone determines exam success.",
            ],
          },
        },
        {
          id: "langb-u5-q74",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "When time runs short, which parts of an essay should you never sacrifice?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The body paragraphs" },
              { id: "b", text: "The introduction and conclusion" },
              { id: "c", text: "The examples" },
              { id: "d", text: "The connectives" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Protected elements",
                statement:
                  "Introduction and conclusion frame the whole task — protect them.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Intro and conclusion frame the essay's task fulfilment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** The introduction and conclusion",
            commonErrors: ["Cutting the conclusion to lengthen the body."],
          },
        },
        {
          id: "langb-u5-q75",
          difficulty: "core",
          totalMarks: 3,
          stem: "You are behind schedule with an unfinished conclusion. What is the best move?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Skip the conclusion entirely" },
              {
                id: "b",
                text: "Write a shortened two-to-three-sentence conclusion",
              },
              { id: "c", text: "Keep writing the body until time ends" },
              { id: "d", text: "Restart the essay" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Emergency time management",
                statement: "Shorten the conclusion rather than skipping it.",
              },
            ],
            steps: [
              {
                reasoning: "Every essay needs closure for task fulfilment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "A short conclusion costs less than no conclusion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Write a shortened two-to-three-sentence conclusion",
            commonErrors: [
              "Skipping the conclusion completely — every essay needs closure.",
            ],
          },
        },
        {
          id: "langb-u5-q76",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should you write your strongest material first in a timed essay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Examiners only read the first paragraph" },
              {
                id: "b",
                text: "If time runs short, the most important points are already covered",
              },
              { id: "c", text: "It makes the essay look longer" },
              { id: "d", text: "It saves vocabulary for later" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Priority writing",
                statement:
                  "Cover essential points first as insurance against lost time.",
              },
            ],
            steps: [
              {
                reasoning: "Front-loading protects the essay's core argument.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** If time runs short, the most important points are already covered",
            commonErrors: [
              "Saving the best material for last and losing it to the clock.",
            ],
          },
        },
        {
          id: "langb-u5-q77",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why is 'get ideas down first, refine later' better than perfecting each sentence while writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is less work overall" },
              {
                id: "b",
                text: "Perfectionism breaks idea flow and risks an unfinished essay",
              },
              { id: "c", text: "Examiners prefer rough drafts" },
              { id: "d", text: "It uses more advanced grammar" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Drafting strategy",
                statement: "Idea flow first; polish in the check phase.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Stopping to perfect sentences interrupts the flow of ideas.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Perfectionism breaks idea flow and risks an unfinished essay",
            commonErrors: [
              "Stalling on the first paragraph and never finishing.",
            ],
          },
        },
        {
          id: "langb-u5-q78",
          difficulty: "core",
          totalMarks: 2,
          stem: "When behind schedule, which point should you drop first?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The weakest supporting point" },
              { id: "b", text: "The introduction" },
              { id: "c", text: "The conclusion" },
              { id: "d", text: "The thesis statement" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Strategic cutting",
                statement:
                  "Drop the weakest point; protect the thesis, intro and conclusion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The weakest point contributes least to the argument.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** The weakest supporting point",
            commonErrors: [
              "Cutting structural elements instead of a weak point.",
            ],
          },
        },
        {
          id: "langb-u5-q79",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "State the 15/65/20 time rule and what each phase covers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Time allocation",
                statement: "Plan 15%, write 65%, check 20% of total time.",
              },
            ],
            steps: [
              {
                reasoning: "Plan ~15%: thesis, points and structure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Write ~65%: execute the plan, strongest material first.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Check ~20%: task fulfilment, organisation, accuracy.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Plan 15% / write 65% / check 20% — never skip the check.",
            commonErrors: ["Allocating zero time to planning or checking."],
          },
        },
        {
          id: "langb-u5-q80",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how a clear plan lets you write faster under exam pressure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Plan and speed",
                statement:
                  "A plan removes in-writing decisions, so writing flows.",
              },
            ],
            steps: [
              {
                reasoning: "The plan fixes what each paragraph covers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "You write without stopping to decide what comes next.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Ordering is already done — no mid-essay restructuring.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Speed comes from preparation, not rushing.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "A clear plan removes decisions during writing — flow replaces hesitation.",
            commonErrors: [
              "Thinking speed comes from typing faster rather than planning better.",
            ],
          },
        },
        {
          id: "langb-u5-q81",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe what you should prioritise in the final checking minutes of a timed essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Check priority",
                statement:
                  "Structural check before surface errors — bigger mark impact first.",
              },
            ],
            steps: [
              {
                reasoning:
                  "First confirm the conclusion exists and the task is fulfilled.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Then check organisation: paragraph order and linkers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Finally fix surface errors: spelling, punctuation, grammar.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Structural problems cost more marks than minor errors.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Conclusion present -> task fulfilled -> organisation -> surface accuracy.",
            commonErrors: [
              "Spending all check time on spelling while missing structural problems.",
            ],
          },
        },
        {
          id: "langb-u5-q82",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Scenario: you have ten minutes left and your essay is unfinished with no conclusion. Outline your response.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Time-pressure response",
                statement:
                  "Protect closure; shorten, don't skip; leave time to check.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Finish the current paragraph quickly rather than starting a new one.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Write a two-to-three-sentence conclusion restating the thesis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Drop or compress the weakest remaining material if needed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reserve the last few minutes for checking.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Never sacrifice the conclusion — closure is essential for task fulfilment.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Finish paragraph -> short conclusion -> reserve check time; never skip closure.",
            commonErrors: [
              "Continuing to write body content until time runs out.",
            ],
          },
        },
        {
          id: "langb-u5-q83",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "You have 60 minutes to write a timed essay. Plan your time allocation.",
          parts: [
            {
              label: "a",
              prompt: "Allocate minutes to planning, writing and checking.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Describe what you would do in the planning minutes.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Explain what you would prioritise in the final checking minutes.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Time management",
                statement:
                  "15/65/20 split scaled to 60 min: 9 plan / 39 write / 12 check.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "9 min plan, 39 min write, 12 min check — proportional split.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "All three phases allocated.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Planning: thesis + 3-4 points + paragraph order, written quickly.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Plan is compressed but sufficient to guide writing.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Check prioritises: conclusion present, task fulfilled, then accuracy errors.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Structural check before surface errors — bigger mark impact.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Fix spelling/grammar only after confirming structure is sound.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 9/39/12 split. (b) Thesis + points + order. (c) Structure first, then accuracy.",
            commonErrors: ["Allocating zero time to checking or planning."],
          },
        },
        {
          id: "langb-u5-q84",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why a shorter but checked essay can beat a longer unchecked one.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Completion vs length",
                statement:
                  "Assessment rewards accuracy, organisation and task fulfilment — not word count.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A checked essay has errors fixed and structure confirmed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "An unchecked essay may contain errors that cost language marks.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Length does not compensate for missing conclusion or poor accuracy.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Completing and checking serves every assessment criterion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Checked work scores higher on accuracy, organisation and task fulfilment than unchecked length.",
            commonErrors: ["Believing longer always means better."],
          },
        },
      ],
    },
    {
      id: "langb-u5-revision",
      title: "Revision and self-assessment",
      skill:
        "Review drafts systematically for task fulfilment, range, accuracy and organisation — the four assessment criteria.",
      lesson: {
        sections: [
          {
            heading: "The four criteria",
            body: "Language B writing is marked on: **task fulfilment** (did you answer the prompt in the right format?), **organisation** (clear structure, logical flow), **language** (accuracy + range of vocabulary and structures), and for higher levels **communication** (appropriateness). Revision means checking each criterion deliberately — not just hunting spelling mistakes.",
          },
          {
            heading: "A systematic revision pass",
            body: "Read your draft once for **content**: does every paragraph serve the thesis? Cut or fix anything off-topic. Read again for **organisation**: are paragraphs in logical order? Do linkers guide the reader? Read a third time for **language**: fix errors, upgrade weak words, vary sentence structures. Three focused passes beat one rushed read-through.",
          },
          {
            heading: "Self-assessment as a skill",
            body: "Learn to assess your own writing against criteria — this is what examiners do and what Language B rewards. After practice essays, ask: Did I answer the task? Was my register right? Where did I repeat myself? Keep an error log of your recurring mistakes (articles, tense, word order) and target them specifically. Self-assessment turns practice into progress.",
          },
        ],
        keyFormulas: [
          {
            name: "Revision passes",
            statement:
              "Pass 1: content/task. Pass 2: organisation. Pass 3: language/accuracy.",
          },
          {
            name: "Error log",
            statement:
              "Record recurring mistakes and drill them — targeted practice beats random review",
          },
        ],
        workedExample: {
          problem:
            "Your essay uses 'good' six times. What do you do in revision?",
          solution:
            "Upgrade weak adjectives: 'good' -> 'excellent', 'valuable', 'effective', 'beneficial' depending on context. Varying vocabulary raises the language-range mark.",
        },
      },
      questions: [
        {
          id: "langb-u5-q21",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are the main criteria for Language B writing assessment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only spelling and grammar" },
              {
                id: "b",
                text: "Task fulfilment, organisation, language and communication",
              },
              { id: "c", text: "Speed of writing" },
              { id: "d", text: "Length of the essay" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Assessment criteria",
                statement:
                  "Task fulfilment, organisation, language, communication.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Writing is assessed on multiple criteria, not just accuracy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Task fulfilment, organisation, language and communication",
            commonErrors: ["Believing perfect grammar alone earns top marks."],
          },
        },
        {
          id: "langb-u5-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "List the three focused revision passes and what each checks.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Systematic revision",
                statement: "Content, then organisation, then language.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Pass 1 — content: does every paragraph serve the task/thesis?",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Pass 2 — organisation: paragraph order, linkers, logical flow.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Pass 3 — language: errors, weak vocabulary, repetitive structures.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Content/task -> organisation -> language/accuracy.",
            commonErrors: ["Doing all checks at once and missing problems."],
          },
        },
        {
          id: "langb-u5-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why an 'error log' improves language learning more than random review.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Targeted practice",
                statement:
                  "Recurring errors identified and drilled individually produce faster improvement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Errors recur because they are systematic — the same mistakes repeat.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "An error log identifies YOUR specific patterns rather than general weaknesses.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Targeted practice on known errors is more efficient than reviewing everything.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Over time the log shrinks — measurable evidence of progress.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Error logs target your specific recurring mistakes — efficient, measurable improvement.",
            commonErrors: [
              "Reviewing randomly without identifying personal error patterns.",
            ],
          },
        },
        {
          id: "langb-u5-q24",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Review this draft sentence from a timed essay and improve it: 'Homework is good. It helps students. Students do homework. Homework is bad too.'",
          parts: [
            {
              label: "a",
              prompt: "Identify the main problem with the draft.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Rewrite it as two cohesive, developed sentences.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Explain which assessment criteria your revision improves.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Revision in action",
                statement:
                  "Repetition + undeveloped ideas -> cohesive, developed sentences.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Problem: repetitive 'homework/students', no development, contradictory without explanation.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Problem identified accurately.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Rewrite develops ideas with connectives and varied reference, e.g. 'Homework can reinforce learning, although excessive amounts may cause stress.'",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Sentences are cohesive, varied and developed.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Language criterion: varied vocabulary, better structures.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Organisation/communication: contradiction resolved logically.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Overall: revision directly targets marked criteria.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Repetition + no development. (b) Cohesive developed sentences. (c) Improves language range, organisation and logical communication.",
            commonErrors: [
              "Only fixing grammar while leaving repetitive structure unchanged.",
            ],
          },
        },
        {
          id: "langb-u5-q85",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which two criteria does Language B writing assessment include?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Speed and handwriting" },
              { id: "b", text: "Task fulfilment and language" },
              { id: "c", text: "Length and vocabulary count" },
              { id: "d", text: "Only spelling and punctuation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Assessment criteria",
                statement:
                  "Task fulfilment, organisation, language, communication.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Task fulfilment and language are two of the four criteria.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Task fulfilment and language",
            commonErrors: ["Believing only surface accuracy is assessed."],
          },
        },
        {
          id: "langb-u5-q86",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does 'task fulfilment' mean in writing assessment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writing as many words as possible" },
              {
                id: "b",
                text: "Answering the prompt in the required text type and register",
              },
              { id: "c", text: "Using advanced vocabulary" },
              { id: "d", text: "Finishing before the time limit" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Task fulfilment",
                statement:
                  "Did you answer the actual prompt in the right format and register?",
              },
            ],
            steps: [
              {
                reasoning:
                  "Task fulfilment means matching the prompt's requirements.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Answering the prompt in the required text type and register",
            commonErrors: [
              "Writing well but answering a different question than the one asked.",
            ],
          },
        },
        {
          id: "langb-u5-q87",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which should the first revision pass check?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Spelling mistakes" },
              { id: "b", text: "Content and task fulfilment" },
              { id: "c", text: "Paragraph length" },
              { id: "d", text: "Font size" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Revision order",
                statement: "Content first, then organisation, then language.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Pass 1 checks whether every paragraph serves the task.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Content and task fulfilment",
            commonErrors: [
              "Starting revision with surface errors before checking content.",
            ],
          },
        },
        {
          id: "langb-u5-q88",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is proofreading?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rewriting the whole essay" },
              {
                id: "b",
                text: "Checking for surface errors: spelling, punctuation and grammar",
              },
              { id: "c", text: "Planning a new essay" },
              { id: "d", text: "Checking word count only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Proofreading",
                statement:
                  "Surface-error check: spelling, punctuation, grammar.",
              },
            ],
            steps: [
              {
                reasoning: "Proofreading targets surface accuracy errors.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Checking for surface errors: spelling, punctuation and grammar",
            commonErrors: [
              "Confusing proofreading (surface) with revision (structural).",
            ],
          },
        },
        {
          id: "langb-u5-q89",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why does the 'language' criterion reward range, not just accuracy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Examiners prefer longer sentences" },
              {
                id: "b",
                text: "Varied vocabulary and structures show control of the language",
              },
              { id: "c", text: "Range matters only at HL" },
              { id: "d", text: "Accuracy is not assessed at all" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Language range",
                statement:
                  "Range of vocabulary and structures is a marked criterion alongside accuracy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Controlled variety demonstrates linguistic competence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Varied vocabulary and structures show control of the language",
            commonErrors: [
              "Revising only for error-free sentences while repeating weak words.",
            ],
          },
        },
        {
          id: "langb-u5-q90",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which revision targets the organisation criterion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fixing spelling mistakes" },
              { id: "b", text: "Checking paragraph order and linkers" },
              { id: "c", text: "Adding more examples" },
              { id: "d", text: "Counting the words" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Organisation check",
                statement:
                  "Logical paragraph order and connective flow = organisation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Paragraph order and linkers are organisational features.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Checking paragraph order and linkers",
            commonErrors: ["Checking grammar while ignoring paragraph order."],
          },
        },
        {
          id: "langb-u5-q91",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "List the three focused revision passes and what each checks.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Systematic revision",
                statement: "Content, then organisation, then language.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Pass 1 — content: does every paragraph serve the task/thesis?",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Pass 2 — organisation: paragraph order, linkers, logical flow.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Pass 3 — language: errors, weak vocabulary, repetitive structures.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Content/task -> organisation -> language/accuracy.",
            commonErrors: ["Doing all checks at once and missing problems."],
          },
        },
        {
          id: "langb-u5-q92",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how to upgrade weak vocabulary during revision, with examples.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Vocabulary upgrade",
                statement:
                  "Replace generic adjectives with precise, context-appropriate alternatives.",
              },
            ],
            steps: [
              {
                reasoning: "Identify repeated weak words like 'good' or 'bad'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Choose precise alternatives: 'good' -> 'effective', 'valuable', 'beneficial'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Match the word to context — 'bad' -> 'harmful', 'costly', 'counterproductive'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Varying vocabulary raises the language-range mark.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Swap generic words for precise alternatives — e.g. 'good' -> 'effective' or 'beneficial'.",
            commonErrors: [
              "Using rare words incorrectly — precision beats obscurity.",
            ],
          },
        },
        {
          id: "langb-u5-q93",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe how self-assessment turns practice into progress.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Self-assessment",
                statement:
                  "Reviewing work against criteria identifies specific improvements.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ask examiners' questions: did I answer the task? Was my register right?",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Identify where you repeated yourself or drifted off-topic.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Keep an error log of recurring mistakes to target them.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Each cycle of write-assess-fix produces measurable improvement.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Assess against criteria, log errors, target fixes — practice becomes measurable progress.",
            commonErrors: [
              "Practising without reviewing — repeating the same mistakes.",
            ],
          },
        },
        {
          id: "langb-u5-q94",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain why fixing only spelling and grammar can miss bigger mark gains in revision.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Revision scope",
                statement:
                  "Criteria include task fulfilment and organisation, not just accuracy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Surface fixes improve accuracy but ignore content problems.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Off-topic paragraphs or wrong register cost task-fulfilment marks.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Poor paragraph order costs organisation marks regardless of grammar.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Repetitive vocabulary limits the language-range mark.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A systematic three-pass revision addresses all criteria.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Grammar fixes ignore content, organisation and range — all marked criteria.",
            commonErrors: ["Treating revision as proofreading only."],
          },
        },
        {
          id: "langb-u5-q95",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Review this draft and improve it: 'The city is good. The city is bad. People live in the city. City life is hard.'",
          parts: [
            {
              label: "a",
              prompt: "Identify the main problems with the draft.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Rewrite it as two cohesive, developed sentences.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Explain which assessment criteria your revision improves.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Revision in action",
                statement:
                  "Repetition + undeveloped ideas -> cohesive, developed sentences.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Problem: repetitive 'city', contradictory ideas unexplained, no development.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Problem identified accurately.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Rewrite develops ideas with connectives, e.g. 'City life offers opportunities, although it can also be stressful and expensive.'",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Sentences are cohesive, varied and developed.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Language criterion: varied vocabulary, better structures.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Organisation/communication: contradiction resolved logically.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Overall: revision directly targets marked criteria.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Repetition + contradiction without development. (b) Cohesive developed sentences. (c) Improves language range, organisation and logical communication.",
            commonErrors: [
              "Only fixing grammar while leaving repetitive structure unchanged.",
            ],
          },
        },
        {
          id: "langb-u5-q96",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe how to check register and text-type appropriateness during revision.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Register check",
                statement:
                  "Language must suit the task's audience, purpose and text type.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ask: is the tone appropriate for the required text type?",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Check vocabulary level matches the audience and purpose.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Remove slang or overly casual phrasing in formal tasks.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Inappropriate register costs task-fulfilment and communication marks.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Check tone, vocabulary level and formality match the task — wrong register fails task fulfilment.",
            commonErrors: ["Ignoring register because the grammar is correct."],
          },
        },
      ],
    },
  ],
};
