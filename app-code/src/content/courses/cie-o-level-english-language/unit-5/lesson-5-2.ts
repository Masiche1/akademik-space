import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "cie-ol-el-lesson-5-2",
  code: "5-2",
  title: "Summary writing advanced",
  goal: "I CAN write precise summaries that capture essential information.",
  standards: ["1123 Writing: summary"],
  vocabulary: [
    { term: "Summary", definition: "Brief statement of main points in own words." },
    { term: "Key point", definition: "Most important idea — must include." },
    { term: "Supporting detail", definition: "Evidence/examples — omit in summary." },
    { term: "Condense", definition: "Express in fewer words without losing meaning." },
    { term: "Paraphrase", definition: "Rewrite in own words — not copy." },
    { term: "Objective", definition: "Factual — no personal opinion." },
  ],
  concepts: [
    {
      id: "cie-ol-el-summary-adv",
      title: "Advanced summary technique",
      skill: "Identify key points and condense them into precise summaries.",
      lesson: {
        sections: [
          {
            heading: "What to include",
            body: "Main argument/point, key evidence, conclusion. Omit: examples, anecdotes, minor details, repetition.",
          },
          {
            heading: "What to exclude",
            body: "Supporting details, personal opinions, minor examples, redundant information, introductory/concluding fluff.",
          },
          {
            heading: "Structure",
            body: "One paragraph, logical order, own words, concise, objective. Usually 1/4 to 1/3 of original length.",
          },
        ],
        keyFormulas: [
          { name: "Summary", statement: "Main points only, own words, concise, objective, logical order." },
        ],
        workedExample: {
          problem: "How to summarise a report on climate change?",
          solution: "Identify: causes (emissions), effects (warming), solutions (renewable energy). Condense each into one sentence.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-sa-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should a summary include?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Main points only" },
              { id: "b", text: "Every detail" },
              { id: "c", text: "Personal opinions" },
              { id: "d", text: "Minor examples" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Summary", statement: "Main points only — no minor details." },
            ],
            steps: [
              { reasoning: "Summary = main points.", working: "main points", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Main points only",
            commonErrors: ["Choosing (b) — that's copying."],
          },
        },
        {
          id: "cie-ol-el-sa-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What language should a summary use?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Language", statement: "Own words — paraphrase, not copy." },
            ],
            steps: [
              { reasoning: "Paraphrase — own words.", working: "paraphrase", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Own words — paraphrase, don't copy sentences.",
            commonErrors: ["Copying verbatim — must paraphrase."],
          },
        },
        {
          id: "cie-ol-el-sa-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What should be excluded from a summary?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Exclusions", statement: "Supporting details, opinions, minor examples, redundant info." },
            ],
            steps: [
              { reasoning: "Omit supporting details and examples.", working: "details", marks: 1, markCode: "AO2" },
              { reasoning: "Omit personal opinions — objective only.", working: "opinions", marks: 1, markCode: "AO2" },
              { reasoning: "Omit minor examples and redundant information.", working: "redundant", marks: 1, markCode: "AO2" },
              { reasoning: "Exclusions clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Supporting details, opinions, minor examples, redundant info.",
            commonErrors: ["Including everything — summary must be selective."],
          },
        },
        {
          id: "cie-ol-el-sa-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Apply advanced summary skills.",
          parts: [
            { label: "a", prompt: "What to include?", marks: 2 },
            { label: "b", prompt: "What to exclude?", marks: 3 },
            { label: "c", prompt: "How to structure summary?", marks: 2 },
            { label: "d", prompt: "Common mistakes?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Summary", statement: "Include/exclude, structure, mistakes." },
            ],
            steps: [
              { part: "a", reasoning: "Main argument, key evidence, conclusion.", working: "include", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Details, opinions, minor examples, redundant info.", working: "exclude", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "One paragraph, logical order, own words, concise.", working: "structure", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Copying, details, opinions, word limit.", working: "mistakes", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple valid.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) include (b) exclude (c) structure (d) mistakes",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple exclusions.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Multiple mistakes.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "One.", part: "d" },
            ],
            commonErrors: ["Summary as opinion — must be objective."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-summary-process",
      title: "Summary writing process",
      skill: "Follow systematic process for summary writing.",
      lesson: {
        sections: [
          {
            heading: "Step 1: Read carefully",
            body: "Read text twice — first for understanding, second for identifying main points.",
          },
          {
            heading: "Step 2: Identify key points",
            body: "Underline or note main argument, key evidence, conclusion. Distinguish from supporting details.",
          },
          {
            heading: "Step 3: Write and edit",
            body: "Paraphrase in own words, check word limit, ensure objectivity, edit for conciseness.",
          },
        ],
        keyFormulas: [
          { name: "Process", statement: "Read→identify key points→paraphrase→check word limit→edit." },
        ],
        workedExample: {
          problem: "How to write summary in exam?",
          solution: "Read text carefully, identify main points, paraphrase in own words, check word count, edit.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-sp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the first step in summary writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Read carefully" },
              { id: "b", text: "Write immediately" },
              { id: "c", text: "Copy text" },
              { id: "d", text: "Skip reading" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Process", statement: "Read first — understand before summarising." },
            ],
            steps: [
              { reasoning: "Read first.", working: "read", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Read carefully",
            commonErrors: ["Writing without reading — misses key points."],
          },
        },
        {
          id: "cie-ol-el-sp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two steps in summary process.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Steps", statement: "Read, identify, paraphrase, check, edit." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "steps", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Read, identify key points, paraphrase, check word limit, edit (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-sp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why read the text twice before summarising?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Double reading", statement: "First for understanding, second for key points." },
            ],
            steps: [
              { reasoning: "First read: understand overall meaning.", working: "understand", marks: 1, markCode: "AO2" },
              { reasoning: "Second read: identify main points vs details.", working: "identify", marks: 1, markCode: "AO2" },
              { reasoning: "Ensures accurate, complete summary.", working: "accurate", marks: 1, markCode: "AO2" },
              { reasoning: "Reason explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "First for understanding, second for key points — ensures accuracy.",
            commonErrors: ["Single read — miss key points."],
          },
        },
        {
          id: "cie-ol-el-sp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Apply summary process skills.",
          parts: [
            { label: "a", prompt: "First step?", marks: 1 },
            { label: "b", prompt: "Name process steps.", marks: 3 },
            { label: "c", prompt: "Why read twice?", marks: 2 },
            { label: "d", prompt: "How to check word limit?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Summary process", statement: "Read→identify→paraphrase→check→edit." },
            ],
            steps: [
              { part: "a", reasoning: "Read carefully — understand first.", working: "read", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Read, identify, paraphrase, check, edit.", working: "steps", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "First for understanding, second for key points.", working: "twice", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Count words, prioritise key points, edit for conciseness.", working: "check", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Multiple strategies.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) read (b) process steps (c) understanding+key points (d) count/prioritise/edit",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple steps.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Strategies clear.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Single read — miss key points."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-summary-evaluation",
      title: "Evaluating summaries",
      skill: "Check summaries for accuracy and completeness.",
      lesson: {
        sections: [
          {
            heading: "Accuracy check",
            body: "Does summary accurately reflect main points? No distortions or omissions of key ideas.",
          },
          {
            heading: "Completeness check",
            body: "Are all main points included? Is conclusion captured? Any key evidence missing?",
          },
          {
            heading: "Style check",
            body: "Own words (not copied)? Concise? Objective? Within word limit? Logical order?",
          },
        ],
        keyFormulas: [
          { name: "Evaluation", statement: "Accuracy+completeness+style — check all three." },
        ],
        workedExample: {
          problem: "How to evaluate a summary?",
          solution: "Check accuracy (correct?), completeness (all points?), style (own words, concise, objective, word limit).",
        },
      },
      questions: [
        {
          id: "cie-ol-el-se-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'accuracy' in summary evaluation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Correctly reflects main points" },
              { id: "b", text: "Long summary" },
              { id: "c", text: "Many details" },
              { id: "d", text: "Personal opinion" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Accuracy", statement: "Correctly reflects main points." },
            ],
            steps: [
              { reasoning: "Accuracy = correct reflection.", working: "correct", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Correctly reflects main points",
            commonErrors: ["Choosing (d) — summaries are objective."],
          },
        },
        {
          id: "cie-ol-el-se-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two evaluation criteria.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Criteria", statement: "Accuracy, completeness, style, word limit." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "criteria", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Accuracy, completeness, style, word limit (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-se-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How to check completeness of a summary?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Completeness", statement: "All main points included? Conclusion captured? Key evidence present?" },
            ],
            steps: [
              { reasoning: "Check all main points are included.", working: "points", marks: 1, markCode: "AO2" },
              { reasoning: "Check conclusion is captured.", working: "conclusion", marks: 1, markCode: "AO2" },
              { reasoning: "Check key evidence is present.", working: "evidence", marks: 1, markCode: "AO2" },
              { reasoning: "Checks explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Main points+conclusion+key evidence — all present.",
            commonErrors: ["Missing key points — incomplete summary."],
          },
        },
        {
          id: "cie-ol-el-se-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Evaluate summaries.",
          parts: [
            { label: "a", prompt: "Define accuracy.", marks: 1 },
            { label: "b", prompt: "Name evaluation criteria.", marks: 2 },
            { label: "c", prompt: "How to check completeness?", marks: 3 },
            { label: "d", prompt: "Style checks?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluation", statement: "Accuracy, completeness, style." },
            ],
            steps: [
              { part: "a", reasoning: "Correctly reflects main points.", working: "accuracy", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Accuracy, completeness, style, word limit.", working: "criteria", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Multiple valid.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Main points, conclusion, key evidence present.", working: "completeness", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Multiple checks.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Own words, concise, objective, word limit, logical order.", working: "style", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple checks.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) correct reflection (b) criteria (c) completeness checks (d) style checks",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Multiple criteria.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "One.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Checks clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Style checks.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Only checking accuracy — need all criteria."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-el-summary-notes",
      title: "Summary writing — revision notes",
      summary: "Advanced summary technique, process, evaluation.",
      sections: [
        {
          heading: "Summary skills",
          body: "Include main points, exclude details. Process: read→identify→paraphrase→check→edit. Evaluate: accuracy+completeness+style.",
        },
      ],
    },
  ],
};
