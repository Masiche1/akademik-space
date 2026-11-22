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
              { id: "a", text: "Every detail" },
              { id: "b", text: "Minor examples" },
              { id: "c", text: "Personal opinions" },
              { id: "d", text: "Main points only" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Summary", statement: "Main points only — no minor details." },
            ],
            steps: [
              { reasoning: "Summary = main points.", working: "main points", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Main points only",
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
    {
      id: "cie-ol-el-sa-q5",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "Which of these should be INCLUDED in a summary?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "A minor anecdote" },
          { id: "b", text: "The main argument" },
          { id: "c", text: "Repetitive examples" },
          { id: "d", text: "Introductory filler" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Include", statement: "Main argument, key evidence, conclusion." },
        ],
        steps: [
          { reasoning: "Main argument is a key point.", working: "argument", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(b)** The main argument",
        commonErrors: ["Choosing anecdotes — those are excluded."],
      },
    },
    {
      id: "cie-ol-el-sa-q6",
      difficulty: "core",
      totalMarks: 1,
      stem: "Which should be EXCLUDED from a summary?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Key evidence" },
          { id: "b", text: "Conclusion" },
          { id: "c", text: "Supporting details" },
          { id: "d", text: "Main points" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Exclude", statement: "Supporting details, opinions, minor examples, redundancy." },
        ],
        steps: [
          { reasoning: "Supporting details are excluded.", working: "details", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(c)** Supporting details",
        commonErrors: ["Excluding main points — those must stay."],
      },
    },
    {
      id: "cie-ol-el-sa-q7",
      difficulty: "challenge",
      totalMarks: 1,
      stem: "Why must a summary be written in your own words?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "To copy the original style" },
          { id: "b", text: "To make it longer" },
          { id: "c", text: "To show understanding through paraphrase" },
          { id: "d", text: "To avoid reading the text" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Paraphrase", statement: "Summaries must use own words." },
        ],
        steps: [
          { reasoning: "Own words demonstrate comprehension.", working: "paraphrase", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "**(c)** To show understanding through paraphrase",
        commonErrors: ["Copying phrases — plagiarism and poor technique."],
      },
    },
    {
      id: "cie-ol-el-sa-q8",
      difficulty: "core",
      totalMarks: 1,
      stem: "What is the typical length of a summary compared to the original?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Twice as long" },
          { id: "b", text: "One sentence only" },
          { id: "c", text: "Exactly the same length" },
          { id: "d", text: "About one quarter to one third" },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Length", statement: "Usually 1/4 to 1/3 of original." },
        ],
        steps: [
          { reasoning: "Summary is much shorter than original.", working: "quarter", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(d)** About one quarter to one third",
        commonErrors: ["Writing a full-length retelling."],
      },
    },
    {
      id: "cie-ol-el-sa-q9",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What tone should a summary have?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Objective and concise" },
          { id: "b", text: "Humorous" },
          { id: "c", text: "Emotional and dramatic" },
          { id: "d", text: "Sarcastic" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Style", statement: "Concise, objective, own words, logical order." },
        ],
        steps: [
          { reasoning: "Summary is objective and concise.", working: "objective", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(a)** Objective and concise",
        commonErrors: ["Adding personal opinion — summaries are neutral."],
      },
    },
    {
      id: "cie-ol-el-sa-q10",
      difficulty: "foundation",
      totalMarks: 2,
      stem: "A summary must be under 60 words. A draft is 75 words. How many words must be cut?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 15 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Word limit", statement: "Stay under the maximum." },
        ],
        steps: [
          { reasoning: "75 - 60 = 15 words over.", working: "75 - 60 = 15", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "15",
        commonErrors: ["Cutting to the wrong limit."],
      },
    },
    {
      id: "cie-ol-el-sa-q11",
      difficulty: "core",
      totalMarks: 2,
      stem: "A passage has 5 main points. A summary draft covers only 3 of them. How many main points are missing?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 2 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Completeness", statement: "All main points must be included." },
        ],
        steps: [
          { reasoning: "5 - 3 = 2 main points missing.", working: "5 - 3 = 2", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "2",
        commonErrors: ["Counting supporting details as main points."],
      },
    },
    {
      id: "cie-ol-el-sa-q12",
      difficulty: "core",
      totalMarks: 2,
      stem: "A summary task allows 40-60 words. A draft is 70 words. How many words must be removed?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 10 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Word limit", statement: "Maximum is 60 words." },
        ],
        steps: [
          { reasoning: "70 - 60 = 10 words over.", working: "70 - 60 = 10", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "10",
        commonErrors: ["Using 40 as the maximum."],
      },
    },
    {
      id: "cie-ol-el-sa-q13",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "An original text is 400 words. A summary should be about one quarter of the original. What is the target word count for the summary?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 100 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Length", statement: "Summary is typically 1/4 to 1/3 of original." },
        ],
        steps: [
          { reasoning: "One quarter of 400 = 400 / 4.", working: "400 / 4 = 100", marks: 1, markCode: "AO3" },
          { reasoning: "Target is approximately 100 words.", working: "100", marks: 1, markCode: "AO2" },
          { reasoning: "Accept answers in the 1/4-1/3 range near 100-133, but the standard target is 100.", working: "range", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "100",
        commonErrors: ["Summarising to the same length as the original."],
      },
    },
    {
      id: "cie-ol-el-sa-q14",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain what a summary should include and what it should exclude.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Summary", statement: "Include main points; exclude details." },
        ],
        steps: [
          { reasoning: "Include: main argument, key evidence, conclusion.", working: "include", marks: 1, markCode: "AO2" },
          { reasoning: "Exclude: examples, anecdotes, minor details, repetition.", working: "exclude", marks: 1, markCode: "AO2" },
          { reasoning: "Clear distinction between the two.", working: "clear", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Include main points; exclude supporting details and examples.",
        commonErrors: ["Including every detail — defeats the purpose."],
      },
    },
    {
      id: "cie-ol-el-sa-q15",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Describe how to structure a summary in terms of paragraph, order, language and length.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Structure", statement: "One paragraph, logical order, own words, concise." },
        ],
        steps: [
          { reasoning: "One paragraph, logical order following the original.", working: "paragraph", marks: 1, markCode: "AO2" },
          { reasoning: "Own words — paraphrase, not copy.", working: "own words", marks: 1, markCode: "AO2" },
          { reasoning: "Concise and objective — no personal opinion.", working: "concise", marks: 1, markCode: "AO2" },
          { reasoning: "Within specified word limit, typically 1/4-1/3 length.", working: "length", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "One paragraph, logical order, own words, concise, ~1/4-1/3 length.",
        commonErrors: ["Multiple paragraphs or copying sentences."],
      },
    },
    {
      id: "cie-ol-el-sa-q16",
      difficulty: "challenge",
      totalMarks: 8,
      stem: "Answer all parts about summary technique.",
      parts: [
        { label: "a", prompt: "Name two things to include in a summary.", marks: 2 },
        { label: "b", prompt: "Name two things to exclude.", marks: 2 },
        { label: "c", prompt: "State the typical length ratio.", marks: 2 },
        { label: "d", prompt: "Why use own words?", marks: 2 },
      ],
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Summary technique", statement: "Include/exclude, length, paraphrase." },
        ],
        steps: [
          { part: "a", reasoning: "Main argument, key evidence, conclusion.", working: "include", marks: 1, markCode: "AO1" },
          { part: "a", reasoning: "Two valid items.", working: "two", marks: 1, markCode: "AO3" },
          { part: "b", reasoning: "Examples, anecdotes, minor details, repetition.", working: "exclude", marks: 1, markCode: "AO1" },
          { part: "b", reasoning: "Two valid items.", working: "two", marks: 1, markCode: "AO3" },
          { part: "c", reasoning: "About 1/4 to 1/3 of original.", working: "ratio", marks: 1, markCode: "AO1" },
          { part: "c", reasoning: "Correct ratio stated.", working: "correct", marks: 1, markCode: "AO3" },
          { part: "d", reasoning: "Shows understanding through paraphrase.", working: "paraphrase", marks: 1, markCode: "AO2" },
          { part: "d", reasoning: "Clear explanation.", working: "clear", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "(a) main points (b) details/examples (c) 1/4-1/3 (d) shows understanding",
        levels: [
          { level: "Level 2", marks: "1-2", descriptor: "Two items.", part: "a" },
          { level: "Level 1", marks: "0", descriptor: "One.", part: "a" },
          { level: "Level 2", marks: "1-2", descriptor: "Two items.", part: "b" },
          { level: "Level 1", marks: "0", descriptor: "One.", part: "b" },
          { level: "Level 2", marks: "1-2", descriptor: "Correct ratio.", part: "c" },
          { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
          { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "d" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
        ],
        commonErrors: ["Including minor details."],
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
              { id: "c", text: "Skip reading" },
              { id: "d", text: "Copy text" },
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
    {
      id: "cie-ol-el-sp-q5",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is the FIRST step in writing a summary?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Check the word count" },
          { id: "b", text: "Edit the summary" },
          { id: "c", text: "Write the summary" },
          { id: "d", text: "Read the text carefully" },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Process", statement: "Read first — understand before summarising." },
        ],
        steps: [
          { reasoning: "Reading comes first.", working: "read", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(d)** Read the text carefully",
        commonErrors: ["Writing before reading — cannot summarise what you haven't read."],
      },
    },
    {
      id: "cie-ol-el-sp-q6",
      difficulty: "core",
      totalMarks: 1,
      stem: "Why should you read a text twice before summarising?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "To memorise every word" },
          { id: "b", text: "First for understanding, second for key points" },
          { id: "c", text: "To waste time productively" },
          { id: "d", text: "To find spelling mistakes only" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Reading", statement: "Double reading: understand then identify." },
        ],
        steps: [
          { reasoning: "First read = understanding; second = key points.", working: "twice", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "**(b)** First for understanding, second for key points",
        commonErrors: ["Reading once — misses key points."],
      },
    },
    {
      id: "cie-ol-el-sp-q7",
      difficulty: "challenge",
      totalMarks: 1,
      stem: "What does 'paraphrase' mean in the context of summary writing?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Translate to another language" },
          { id: "b", text: "Restate in your own words" },
          { id: "c", text: "Shorten by deleting half" },
          { id: "d", text: "Copy word for word" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "definition", name: "Paraphrase", statement: "Restate meaning in own words." },
        ],
        steps: [
          { reasoning: "Paraphrase = own words.", working: "paraphrase", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(b)** Restate in your own words",
        commonErrors: ["Confusing paraphrase with copying."],
      },
    },
    {
      id: "cie-ol-el-sp-q8",
      difficulty: "core",
      totalMarks: 1,
      stem: "Which is the correct order of the summary writing process?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Edit → read → identify → write" },
          { id: "b", text: "Write → read → copy → submit" },
          { id: "c", text: "Check → write → read → paraphrase" },
          { id: "d", text: "Read → identify → paraphrase → check → edit" },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Process", statement: "Read→identify→paraphrase→check→edit." },
        ],
        steps: [
          { reasoning: "Correct sequence starts with reading.", working: "order", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(d)** Read → identify → paraphrase → check → edit",
        commonErrors: ["Editing before writing — wrong order."],
      },
    },
    {
      id: "cie-ol-el-sp-q9",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "When should you check the word limit in summary writing?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Only at the very end without editing" },
          { id: "b", text: "Before reading the text" },
          { id: "c", text: "Never — word count doesn't matter" },
          { id: "d", text: "After writing, during the edit stage" },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Checking", statement: "Check word limit during editing." },
        ],
        steps: [
          { reasoning: "Word count checked in edit stage.", working: "edit", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(d)** After writing, during the edit stage",
        commonErrors: ["Ignoring word limits entirely."],
      },
    },
    {
      id: "cie-ol-el-sp-q10",
      difficulty: "foundation",
      totalMarks: 2,
      stem: "The summary process has 5 steps. A student completes read, identify and paraphrase. How many steps remain?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 2 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Process", statement: "Five steps total." },
        ],
        steps: [
          { reasoning: "5 - 3 = 2 steps remain (check and edit).", working: "5 - 3 = 2", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "2",
        commonErrors: ["Forgetting check and edit are separate steps."],
      },
    },
    {
      id: "cie-ol-el-sp-q11",
      difficulty: "core",
      totalMarks: 2,
      stem: "A summary draft is 85 words but the limit is 60. How many words must be cut?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 25 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Word limit", statement: "Stay within maximum." },
        ],
        steps: [
          { reasoning: "85 - 60 = 25 words over.", working: "85 - 60 = 25", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "25",
        commonErrors: ["Using a different limit."],
      },
    },
    {
      id: "cie-ol-el-sp-q12",
      difficulty: "core",
      totalMarks: 2,
      stem: "Best practice is to read the text twice before summarising. If a student reads it only once, how many additional readings are recommended?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 1 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Reading", statement: "Read twice — once for understanding, once for key points." },
        ],
        steps: [
          { reasoning: "2 - 1 = 1 additional reading.", working: "2 - 1 = 1", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "1",
        commonErrors: ["Thinking one reading is enough."],
      },
    },
    {
      id: "cie-ol-el-sp-q13",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "An original passage is 400 words. If a summary should be about one quarter of the original length, approximately how many words should the summary contain?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 100 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Length", statement: "Summary is 1/4 to 1/3 of original." },
        ],
        steps: [
          { reasoning: "One quarter of 400 = 400 / 4.", working: "400 / 4 = 100", marks: 1, markCode: "AO3" },
          { reasoning: "Target is approximately 100 words.", working: "100", marks: 1, markCode: "AO2" },
          { reasoning: "Accept 100-133 (1/4 to 1/3 range); 100 is standard.", working: "range", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "100",
        commonErrors: ["Writing a summary as long as the original."],
      },
    },
    {
      id: "cie-ol-el-sp-q14",
      difficulty: "core",
      totalMarks: 3,
      stem: "Describe the systematic process for writing a summary.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Process", statement: "Read→identify→paraphrase→check→edit." },
        ],
        steps: [
          { reasoning: "Read carefully — twice for understanding and key points.", working: "read", marks: 1, markCode: "AO2" },
          { reasoning: "Identify main argument, key evidence, conclusion.", working: "identify", marks: 1, markCode: "AO2" },
          { reasoning: "Paraphrase, check word limit, edit for conciseness.", working: "edit", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Read→identify key points→paraphrase→check word limit→edit.",
        commonErrors: ["Skipping the identification step."],
      },
    },
    {
      id: "cie-ol-el-sp-q15",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Explain why reading the text twice improves summary quality.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Reading", statement: "First read = understanding; second = key points." },
        ],
        steps: [
          { reasoning: "First reading builds overall understanding.", working: "understanding", marks: 1, markCode: "AO2" },
          { reasoning: "Second reading identifies main points specifically.", working: "key points", marks: 1, markCode: "AO2" },
          { reasoning: "Reduces risk of missing important ideas.", working: "miss", marks: 1, markCode: "AO2" },
          { reasoning: "Leads to more accurate and complete summary.", working: "accurate", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "First read understands; second identifies key points — better accuracy.",
        commonErrors: ["Thinking one read is sufficient."],
      },
    },
    {
      id: "cie-ol-el-sp-q16",
      difficulty: "challenge",
      totalMarks: 8,
      stem: "Answer all parts about the summary writing process.",
      parts: [
        { label: "a", prompt: "What is the first step?", marks: 2 },
        { label: "b", prompt: "What do you do in step 2?", marks: 2 },
        { label: "c", prompt: "What checks happen in step 3?", marks: 2 },
        { label: "d", prompt: "Why is the process systematic?", marks: 2 },
      ],
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Process", statement: "Read, identify, paraphrase, check, edit." },
        ],
        steps: [
          { part: "a", reasoning: "Read the text carefully — twice.", working: "read", marks: 1, markCode: "AO1" },
          { part: "a", reasoning: "Correct.", working: "correct", marks: 1, markCode: "AO3" },
          { part: "b", reasoning: "Identify main argument, key evidence, conclusion.", working: "identify", marks: 1, markCode: "AO1" },
          { part: "b", reasoning: "Correct.", working: "correct", marks: 1, markCode: "AO3" },
          { part: "c", reasoning: "Check word limit, objectivity, conciseness.", working: "check", marks: 1, markCode: "AO1" },
          { part: "c", reasoning: "Multiple checks.", working: "multiple", marks: 1, markCode: "AO3" },
          { part: "d", reasoning: "Ensures nothing is missed and quality is maintained.", working: "ensures", marks: 1, markCode: "AO2" },
          { part: "d", reasoning: "Clear explanation.", working: "clear", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "(a) read (b) identify key points (c) word limit/objectivity/conciseness (d) ensures accuracy",
        levels: [
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
          { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
          { level: "Level 2", marks: "1-2", descriptor: "Checks listed.", part: "c" },
          { level: "Level 1", marks: "0", descriptor: "Few.", part: "c" },
          { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "d" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
        ],
        commonErrors: ["Skipping steps — leads to poor summaries."],
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
              { id: "a", text: "Many details" },
              { id: "b", text: "Personal opinion" },
              { id: "c", text: "Correctly reflects main points" },
              { id: "d", text: "Long summary" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Accuracy", statement: "Correctly reflects main points." },
            ],
            steps: [
              { reasoning: "Accuracy = correct reflection.", working: "correct", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Correctly reflects main points",
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
    {
      id: "cie-ol-el-se-q5",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What does the 'accuracy check' verify in a summary?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Correctly reflects main points" },
          { id: "b", text: "Many examples included" },
          { id: "c", text: "Summary is very long" },
          { id: "d", text: "Personal opinions present" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          { kind: "definition", name: "Accuracy", statement: "Correctly reflects main points." },
        ],
        steps: [
          { reasoning: "Accuracy = correct reflection of main points.", working: "accuracy", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(a)** Correctly reflects main points",
        commonErrors: ["Confusing accuracy with length."],
      },
    },
    {
      id: "cie-ol-el-se-q6",
      difficulty: "core",
      totalMarks: 1,
      stem: "What are the three main criteria for evaluating a summary?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Length, speed, handwriting" },
          { id: "b", text: "Accuracy, completeness, style" },
          { id: "c", text: "Title, author, date" },
          { id: "d", text: "Grammar only" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Criteria", statement: "Accuracy, completeness, style." },
        ],
        steps: [
          { reasoning: "Three criteria: accuracy, completeness, style.", working: "criteria", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(b)** Accuracy, completeness, style",
        commonErrors: ["Checking only one criterion."],
      },
    },
    {
      id: "cie-ol-el-se-q7",
      difficulty: "challenge",
      totalMarks: 1,
      stem: "A summary copies sentences word-for-word from the original. Which evaluation criterion does this fail?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Style" },
          { id: "b", text: "Accuracy" },
          { id: "c", text: "Completeness" },
          { id: "d", text: "All of the above equally" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Style", statement: "Must use own words, not copied." },
        ],
        steps: [
          { reasoning: "Copying fails the own-words style requirement.", working: "style", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "**(a)** Style",
        commonErrors: ["Thinking copying is acceptable."],
      },
    },
    {
      id: "cie-ol-el-se-q8",
      difficulty: "core",
      totalMarks: 1,
      stem: "What does the 'completeness check' verify?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Handwriting is neat" },
          { id: "b", text: "All main points are included" },
          { id: "c", text: "Summary is very short" },
          { id: "d", text: "Title is bold" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "definition", name: "Completeness", statement: "All main points included." },
        ],
        steps: [
          { reasoning: "Completeness = all main points present.", working: "completeness", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(b)** All main points are included",
        commonErrors: ["Confusing completeness with accuracy."],
      },
    },
    {
      id: "cie-ol-el-se-q9",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "Which is part of the 'style check' for a summary?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Own words, concise, within word limit" },
          { id: "b", text: "Is longer than original" },
          { id: "c", text: "Uses personal pronouns" },
          { id: "d", text: "Contains every example" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Style", statement: "Own words, concise, objective, word limit." },
        ],
        steps: [
          { reasoning: "Style = own words, concise, within limit.", working: "style", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(a)** Own words, concise, within word limit",
        commonErrors: ["Including examples — style excludes them."],
      },
    },
    {
      id: "cie-ol-el-se-q10",
      difficulty: "foundation",
      totalMarks: 2,
      stem: "A summary should cover 4 main points but only covers 3. How many points are missing?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 1 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Completeness", statement: "All main points required." },
        ],
        steps: [
          { reasoning: "4 - 3 = 1 point missing.", working: "4 - 3 = 1", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "1",
        commonErrors: ["Counting supporting details as main points."],
      },
    },
    {
      id: "cie-ol-el-se-q11",
      difficulty: "core",
      totalMarks: 2,
      stem: "A summary draft is 80 words but the limit is 60. How many words must be cut?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 20 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Word limit", statement: "Stay within maximum." },
        ],
        steps: [
          { reasoning: "80 - 60 = 20 words over.", working: "80 - 60 = 20", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "20",
        commonErrors: ["Using wrong limit."],
      },
    },
    {
      id: "cie-ol-el-se-q12",
      difficulty: "core",
      totalMarks: 3,
      stem: "There are 3 evaluation criteria for summaries. A student checks accuracy and completeness but forgets style. How many criteria remain unchecked?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 1 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Criteria", statement: "Check all three criteria." },
        ],
        steps: [
          { reasoning: "3 criteria total; 2 checked.", working: "3 - 2 = 1", marks: 1, markCode: "AO2" },
          { reasoning: "One criterion (style) remains unchecked.", working: "1", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "1",
        commonErrors: ["Thinking two checks are enough."],
      },
    },
    {
      id: "cie-ol-el-se-q13",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "A summary is 75 words but the maximum allowed is 50. By what percentage does it exceed the limit? Round to the nearest whole number.",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 50 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Word limit", statement: "Must stay within maximum." },
        ],
        steps: [
          { reasoning: "Excess = 75 - 50 = 25 words.", working: "75 - 50 = 25", marks: 1, markCode: "AO3" },
          { reasoning: "Percentage = 25 / 50 x 100 = 50%.", working: "25 / 50 x 100 = 50", marks: 2, markCode: "AO3" },
          { reasoning: "Exceeds by approximately 50%.", working: "50", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "50",
        commonErrors: ["Calculating percentage of original instead of limit."],
      },
    },
    {
      id: "cie-ol-el-se-q14",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain the three checks used to evaluate a summary.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Evaluation", statement: "Accuracy, completeness, style." },
        ],
        steps: [
          { reasoning: "Accuracy: correctly reflects main points, no distortions.", working: "accuracy", marks: 1, markCode: "AO2" },
          { reasoning: "Completeness: all main points included, conclusion captured.", working: "completeness", marks: 1, markCode: "AO2" },
          { reasoning: "Style: own words, concise, objective, within word limit.", working: "style", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Accuracy+completeness+style — check all three.",
        commonErrors: ["Checking only one criterion."],
      },
    },
    {
      id: "cie-ol-el-se-q15",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "A summary misses the conclusion of the original text. Which evaluation criterion does this fail, and how would you fix it?",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Completeness", statement: "Conclusion must be captured." },
        ],
        steps: [
          { reasoning: "Fails completeness — conclusion is a main point.", working: "completeness", marks: 1, markCode: "AO2" },
          { reasoning: "Re-read the conclusion of the original.", working: "reread", marks: 1, markCode: "AO2" },
          { reasoning: "Add a sentence capturing the conclusion in own words.", working: "add", marks: 1, markCode: "AO2" },
          { reasoning: "Check word limit still met.", working: "limit", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Fails completeness; add conclusion in own words.",
        commonErrors: ["Ignoring the missing conclusion."],
      },
    },
    {
      id: "cie-ol-el-se-q16",
      difficulty: "challenge",
      totalMarks: 8,
      stem: "Answer all parts about evaluating summaries.",
      parts: [
        { label: "a", prompt: "Define accuracy check.", marks: 2 },
        { label: "b", prompt: "Define completeness check.", marks: 2 },
        { label: "c", prompt: "Name two style requirements.", marks: 2 },
        { label: "d", prompt: "Why check all three criteria?", marks: 2 },
      ],
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Evaluation", statement: "Accuracy, completeness, style." },
        ],
        steps: [
          { part: "a", reasoning: "Correctly reflects main points.", working: "accuracy", marks: 1, markCode: "AO1" },
          { part: "a", reasoning: "No distortions or omissions.", working: "no distortions", marks: 1, markCode: "AO3" },
          { part: "b", reasoning: "All main points included.", working: "completeness", marks: 1, markCode: "AO1" },
          { part: "b", reasoning: "Conclusion captured.", working: "conclusion", marks: 1, markCode: "AO3" },
          { part: "c", reasoning: "Own words, concise, objective, within word limit.", working: "style", marks: 1, markCode: "AO1" },
          { part: "c", reasoning: "Two valid requirements.", working: "two", marks: 1, markCode: "AO3" },
          { part: "d", reasoning: "Each checks a different aspect — all needed for quality.", working: "all", marks: 1, markCode: "AO2" },
          { part: "d", reasoning: "Clear explanation.", working: "clear", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "(a) accurate reflection (b) all points (c) own words/concise (d) all aspects needed",
        levels: [
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
          { level: "Level 2", marks: "1-2", descriptor: "Two requirements.", part: "c" },
          { level: "Level 1", marks: "0", descriptor: "One.", part: "c" },
          { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "d" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
        ],
        commonErrors: ["Checking only accuracy."],
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
