import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "cie-ol-el-lesson-7-2",
  code: "7-2",
  title: "Writing to persuade and inform",
  goal: "I CAN write effectively for different purposes.",
  standards: ["1123 Writing: purpose"],
  vocabulary: [
    { term: "Persuasive", definition: "Writing to convince reader of a view." },
    { term: "Informative", definition: "Writing to convey facts clearly." },
    { term: "Expository", definition: "Writing that explains or describes." },
    { term: "Audience awareness", definition: "Adapting language to reader." },
    { term: "Tone", definition: "Attitude conveyed — formal, casual, urgent." },
    { term: "Purpose", definition: "Why the text was written." },
  ],
  concepts: [
    {
      id: "cie-ol-el-writing-purpose",
      title: "Writing for purpose",
      skill: "Adapt writing style to different purposes and audiences.",
      lesson: {
        sections: [
          {
            heading: "Persuasive writing",
            body: "Convince reader — thesis, evidence, techniques, counterarguments. Used in editorials, speeches, campaigns.",
          },
          {
            heading: "Informative writing",
            body: "Convey facts clearly — structure, clarity, objectivity. Used in reports, textbooks, news.",
          },
          {
            heading: "Audience adaptation",
            body: "Formal for officials, informal for friends, technical for experts. Match vocabulary, tone, examples.",
          },
        ],
        keyFormulas: [
          { name: "Purpose", statement: "Persuasive=convince; informative=facts; audience determines register/tone." },
        ],
        workedExample: {
          problem: "Write about school uniforms for students vs parents.",
          solution: "Students: casual, relatable examples. Parents: formal, cost/benefit analysis, expert opinions.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-wp2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'persuasive writing'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writing poems" },
              { id: "b", text: "Writing to convince" },
              { id: "c", text: "Writing stories" },
              { id: "d", text: "Writing facts" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Persuasive", statement: "Writing to convince reader." },
            ],
            steps: [
              { reasoning: "Persuasive = convince.", working: "convince", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Writing to convince",
            commonErrors: ["Choosing (b) — that's informative."],
          },
        },
        {
          id: "cie-ol-el-wp2-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two writing purposes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Purposes", statement: "Persuade, inform, entertain, describe." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "purposes", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Persuade, inform, entertain, describe (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-wp2-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How to adapt writing for different audiences?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Audience", statement: "Formal for officials, informal for friends, technical for experts." },
            ],
            steps: [
              { reasoning: "Formal register for officials/business.", working: "formal", marks: 1, markCode: "AO2" },
              { reasoning: "Informal for friends/family.", working: "informal", marks: 1, markCode: "AO2" },
              { reasoning: "Technical vocabulary for experts; simple for general public.", working: "technical", marks: 1, markCode: "AO2" },
              { reasoning: "Adaptation explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Formal/informal/technical — match to audience.",
            commonErrors: ["Same style for all — must adapt."],
          },
        },
        {
          id: "cie-ol-el-wp2-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Write for different purposes.",
          parts: [
            { label: "a", prompt: "Define persuasive writing.", marks: 1 },
            { label: "b", prompt: "Define informative writing.", marks: 2 },
            { label: "c", prompt: "How to adapt for audience?", marks: 3 },
            { label: "d", prompt: "Name writing purposes.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Writing purpose", statement: "Persuasive, informative, audience adaptation." },
            ],
            steps: [
              { part: "a", reasoning: "Writing to convince reader of a view.", working: "persuasive", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Writing to convey facts clearly — objective.", working: "informative", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Formal/informal/technical — match register to audience.", working: "audience", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Multiple adaptations.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Persuade, inform, entertain, describe.", working: "purposes", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) convince (b) facts (c) audience adaptation (d) purposes",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Adaptation clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple purposes.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "d" },
            ],
            commonErrors: ["Same style for all audiences — must adapt."],
          },
        },
    {
      id: "cie-ol-el-wp2-q5",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is persuasive writing?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Writing to convince the reader" },
          { id: "b", text: "Writing to describe" },
          { id: "c", text: "Writing to entertain" },
          { id: "d", text: "Writing to inform only" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          { kind: "definition", name: "Persuasive", statement: "Writing to convince reader." },
        ],
        steps: [
          { reasoning: "Persuasive = convince.", working: "persuasive", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(a)** Writing to convince the reader",
        commonErrors: ["Confusing with informative."],
      },
    },
    {
      id: "cie-ol-el-wp2-q6",
      difficulty: "core",
      totalMarks: 1,
      stem: "What is informative writing?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Writing to inform or explain" },
          { id: "b", text: "Writing to persuade" },
          { id: "c", text: "Writing to entertain" },
          { id: "d", text: "Writing to convince" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          { kind: "definition", name: "Informative", statement: "Writing to inform or explain." },
        ],
        steps: [
          { reasoning: "Informative = inform/explain.", working: "informative", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(a)** Writing to inform or explain",
        commonErrors: ["Confusing with persuasive."],
      },
    },
    {
      id: "cie-ol-el-wp2-q7",
      difficulty: "challenge",
      totalMarks: 1,
      stem: "What determines the register of your writing?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "The topic only" },
          { id: "b", text: "The length" },
          { id: "c", text: "The audience" },
          { id: "d", text: "The font" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Audience", statement: "Audience determines register." },
        ],
        steps: [
          { reasoning: "Audience determines register.", working: "audience", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "**(a)** The audience",
        commonErrors: ["Using wrong register for audience."],
      },
    },
    {
      id: "cie-ol-el-wp2-q8",
      difficulty: "core",
      totalMarks: 1,
      stem: "Which register is appropriate for writing to a company director?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Slang" },
          { id: "b", text: "Casual" },
          { id: "c", text: "Formal" },
          { id: "d", text: "Informal" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Register", statement: "Formal for officials." },
        ],
        steps: [
          { reasoning: "Director = formal register.", working: "formal", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(a)** Formal",
        commonErrors: ["Using informal register."],
      },
    },
    {
      id: "cie-ol-el-wp2-q9",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What are the main writing purposes?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Only persuade" },
          { id: "b", text: "Only entertain" },
          { id: "c", text: "Only inform" },
          { id: "d", text: "Persuade, inform, entertain, describe" },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Purposes", statement: "Persuade, inform, entertain, describe." },
        ],
        steps: [
          { reasoning: "Four main purposes.", working: "purposes", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(a)** Persuade, inform, entertain, describe",
        commonErrors: ["Knowing only one purpose."],
      },
    },
    {
      id: "cie-ol-el-wp2-q10",
      difficulty: "foundation",
      totalMarks: 2,
      stem: "A writing task has 4 purposes: persuade, inform, entertain, describe. A student uses only 2. How many purposes are unused?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 2 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Purposes", statement: "Four main purposes." },
        ],
        steps: [
          { reasoning: "4 - 2 = 2 unused.", working: "4 - 2 = 2", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "2",
        commonErrors: ["Using limited purposes."],
      },
    },
    {
      id: "cie-ol-el-wp2-q11",
      difficulty: "core",
      totalMarks: 2,
      stem: "A writing task requires at least 250 words. A draft is 200 words. How many more words are needed?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 50 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Word limit", statement: "Meet the minimum." },
        ],
        steps: [
          { reasoning: "250 - 200 = 50 words short.", working: "250 - 200 = 50", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "50",
        commonErrors: ["Adding instead of subtracting."],
      },
    },
    {
      id: "cie-ol-el-wp2-q12",
      difficulty: "core",
      totalMarks: 3,
      stem: "A writing task has 3 audience types: formal, semi-formal, informal. A writer uses only formal. How many audience types are unused?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 2 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Register", statement: "Formal, semi-formal, informal." },
        ],
        steps: [
          { reasoning: "3 types; 1 used.", working: "3 - 1 = 2", marks: 1, markCode: "AO2" },
          { reasoning: "Two types unused (semi-formal, informal).", working: "2", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "2",
        commonErrors: ["Using only one register."],
      },
    },
    {
      id: "cie-ol-el-wp2-q13",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "A writing task must be between 180 and 220 words. A draft is 210 words, and the student adds a 15-word title. How many words must the body lose to stay within the limit?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 5 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Word limit", statement: "Additions count." },
        ],
        steps: [
          { reasoning: "210 + 15 = 225 words after title.", working: "210 + 15 = 225", marks: 1, markCode: "AO3" },
          { reasoning: "225 - 220 = 5 words over.", working: "225 - 220 = 5", marks: 2, markCode: "AO3" },
          { reasoning: "Body must lose 5 words.", working: "5", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "5",
        commonErrors: ["Forgetting title counts."],
      },
    },
    {
      id: "cie-ol-el-wp2-q14",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain the main writing purposes and when to use each.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Purposes", statement: "Persuade, inform, entertain, describe." },
        ],
        steps: [
          { reasoning: "Persuade: convince reader of a view.", working: "persuade", marks: 1, markCode: "AO2" },
          { reasoning: "Inform: present facts clearly.", working: "inform", marks: 1, markCode: "AO2" },
          { reasoning: "Entertain/describe: engage or create picture.", working: "entertain", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Persuade=convince; inform=facts; entertain/describe=engage.",
        commonErrors: ["Confusing purposes."],
      },
    },
    {
      id: "cie-ol-el-wp2-q15",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Explain how to adapt writing style to different audiences.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Audience", statement: "Formal for officials, informal for friends." },
        ],
        steps: [
          { reasoning: "Formal audience: professional, objective, no slang.", working: "formal", marks: 1, markCode: "AO2" },
          { reasoning: "Informal audience: casual, friendly, contractions.", working: "informal", marks: 1, markCode: "AO2" },
          { reasoning: "Semi-formal: middle ground — polite but approachable.", working: "semi", marks: 1, markCode: "AO2" },
          { reasoning: "Adapt tone, vocabulary, structure to audience.", working: "adapt", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Formal=officials; informal=friends; semi-formal=middle.",
        commonErrors: ["Using same register for all."],
      },
    },
    {
      id: "cie-ol-el-wp2-q16",
      difficulty: "challenge",
      totalMarks: 8,
      stem: "Answer all parts about writing purpose.",
      parts: [
        { label: "a", prompt: "Define persuasive writing.", marks: 2 },
        { label: "b", prompt: "Define informative writing.", marks: 2 },
        { label: "c", prompt: "What determines register?", marks: 2 },
        { label: "d", prompt: "Name two audiences and registers.", marks: 2 },
      ],
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Purpose", statement: "Persuasive, informative, audience, register." },
        ],
        steps: [
          { part: "a", reasoning: "Writing to convince reader.", working: "persuasive", marks: 1, markCode: "AO1" },
          { part: "a", reasoning: "Clear definition.", working: "clear", marks: 1, markCode: "AO3" },
          { part: "b", reasoning: "Writing to inform or explain.", working: "informative", marks: 1, markCode: "AO1" },
          { part: "b", reasoning: "Clear definition.", working: "clear", marks: 1, markCode: "AO3" },
          { part: "c", reasoning: "Audience determines register.", working: "audience", marks: 1, markCode: "AO2" },
          { part: "c", reasoning: "Clear explanation.", working: "clear", marks: 1, markCode: "AO3" },
          { part: "d", reasoning: "Formal for officials, informal for friends.", working: "audiences", marks: 1, markCode: "AO1" },
          { part: "d", reasoning: "Two audiences with registers.", working: "two", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "(a) convince (b) inform (c) audience (d) formal/informal",
        levels: [
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
          { level: "Level 2", marks: "1-2", descriptor: "Two audiences.", part: "d" },
          { level: "Level 1", marks: "0", descriptor: "One.", part: "d" },
        ],
        commonErrors: ["Confusing persuasive and informative."],
      },
    },
      ],
    },
    {
      id: "cie-ol-el-persuasive-writing",
      title: "Persuasive writing skills",
      skill: "Write effectively to persuade readers.",
      lesson: {
        sections: [
          {
            heading: "Structure",
            body: "Introduction (thesis) → main points with evidence → counterarguments → conclusion. Each point needs support.",
          },
          {
            heading: "Techniques",
            body: "Rhetorical questions, emotive language, statistics, expert endorsements, inclusive language ('we').",
          },
          {
            heading: "Tone",
            body: "Formal for serious issues, passionate for causes. Firm but respectful — avoid insults.",
          },
        ],
        keyFormulas: [
          { name: "Persuasive", statement: "Thesis→points+evidence→counterarguments→conclusion; techniques+appropriate tone." },
        ],
        workedExample: {
          problem: "Persuade readers to recycle.",
          solution: "Thesis: recycling beneficial. Points: environment, cost, future. Evidence: statistics, examples. Techniques: emotional appeal, inclusive 'we'.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-pw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main purpose of persuasive writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Inform only" },
              { id: "b", text: "Entertain only" },
              { id: "c", text: "Describe only" },
              { id: "d", text: "Convince reader" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Persuasive", statement: "Convince reader of a view." },
            ],
            steps: [
              { reasoning: "Persuasive = convince.", working: "convince", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Convince reader",
            commonErrors: ["Choosing (b) — that's informative."],
          },
        },
        {
          id: "cie-ol-el-pw-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two persuasive techniques.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Techniques", statement: "Rhetorical Q, emotive, statistics, expert, inclusive." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "techniques", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Rhetorical Q, emotive, statistics, expert, inclusive (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-pw-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How to structure persuasive writing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Structure", statement: "Thesis→points+evidence→counterarguments→conclusion." },
            ],
            steps: [
              { reasoning: "Introduction states thesis clearly.", working: "thesis", marks: 1, markCode: "AO2" },
              { reasoning: "Main points each with evidence.", working: "points", marks: 1, markCode: "AO2" },
              { reasoning: "Address counterarguments, conclude strongly.", working: "conclusion", marks: 1, markCode: "AO2" },
              { reasoning: "Structure clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Thesis→points+evidence→counterarguments→conclusion.",
            commonErrors: ["No counterarguments — weak argument."],
          },
        },
        {
          id: "cie-ol-el-pw-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Apply persuasive writing skills.",
          parts: [
            { label: "a", prompt: "Define persuasive writing.", marks: 1 },
            { label: "b", prompt: "Name techniques.", marks: 3 },
            { label: "c", prompt: "Describe structure.", marks: 2 },
            { label: "d", prompt: "How to choose tone?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Persuasive", statement: "Definition, techniques, structure, tone." },
            ],
            steps: [
              { part: "a", reasoning: "Writing to convince reader.", working: "definition", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Rhetorical Q, emotive, statistics, expert, inclusive.", working: "techniques", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Three+ valid.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Thesis→points+evidence→counterarguments→conclusion.", working: "structure", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Formal for serious, passionate for causes — firm but respectful.", working: "tone", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Multiple tones.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) convince (b) techniques (c) structure (d) tone selection",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Three+ techniques.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Tone explained.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Wrong tone — too casual or aggressive."],
          },
        },
    {
      id: "cie-ol-el-pw-q5",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is the structure of a persuasive essay?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Only conclusion" },
          { id: "b", text: "Thesis → points+evidence → counterarguments → conclusion" },
          { id: "c", text: "Only introduction" },
          { id: "d", text: "Random paragraphs" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Structure", statement: "Thesis→points→counterarguments→conclusion." },
        ],
        steps: [
          { reasoning: "Persuasive follows thesis→points→counterarguments→conclusion.", working: "structure", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(a)** Thesis → points+evidence → counterarguments → conclusion",
        commonErrors: ["Missing counterarguments."],
      },
    },
    {
      id: "cie-ol-el-pw-q6",
      difficulty: "core",
      totalMarks: 1,
      stem: "Which technique is most persuasive?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Emotional only" },
          { id: "b", text: "Statistics and expert opinions" },
          { id: "c", text: "Personal feelings only" },
          { id: "d", text: "Unverified claims" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Techniques", statement: "Statistics, expert opinions effective." },
        ],
        steps: [
          { reasoning: "Statistics/expert opinions are strong evidence.", working: "statistics", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(a)** Statistics and expert opinions",
        commonErrors: ["Using only emotion."],
      },
    },
    {
      id: "cie-ol-el-pw-q7",
      difficulty: "challenge",
      totalMarks: 1,
      stem: "What tone is appropriate for a persuasive speech?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Sarcastic" },
          { id: "b", text: "Boring and flat" },
          { id: "c", text: "Confused" },
          { id: "d", text: "Passionate and engaging" },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Tone", statement: "Formal/passionate — appropriate to context." },
        ],
        steps: [
          { reasoning: "Passionate tone suits speeches.", working: "passionate", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "**(a)** Passionate and engaging",
        commonErrors: ["Using flat or sarcastic tone."],
      },
    },
    {
      id: "cie-ol-el-pw-q8",
      difficulty: "core",
      totalMarks: 1,
      stem: "Why include counterarguments in persuasive writing?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "It confuses readers" },
          { id: "b", text: "It shows balance and strengthens your position" },
          { id: "c", text: "It weakens your argument" },
          { id: "d", text: "It is pointless" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Counterarguments", statement: "Shows balance, strengthens position." },
        ],
        steps: [
          { reasoning: "Counterarguments strengthen argument.", working: "balance", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "**(a)** It shows balance and strengthens your position",
        commonErrors: ["Avoiding counterarguments."],
      },
    },
    {
      id: "cie-ol-el-pw-q9",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is a thesis statement in persuasive writing?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "A counterargument" },
          { id: "b", text: "A supporting detail" },
          { id: "c", text: "The conclusion" },
          { id: "d", text: "The main argument stated in introduction" },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          { kind: "definition", name: "Thesis", statement: "Main argument in introduction." },
        ],
        steps: [
          { reasoning: "Thesis = main argument.", working: "thesis", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(a)** The main argument stated in introduction",
        commonErrors: ["Confusing with conclusion."],
      },
    },
    {
      id: "cie-ol-el-pw-q10",
      difficulty: "foundation",
      totalMarks: 2,
      stem: "A persuasive essay requires at least 350 words. A draft is 280 words. How many more words are needed?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 70 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Word limit", statement: "Meet the minimum." },
        ],
        steps: [
          { reasoning: "350 - 280 = 70 words short.", working: "350 - 280 = 70", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "70",
        commonErrors: ["Adding instead of subtracting."],
      },
    },
    {
      id: "cie-ol-el-pw-q11",
      difficulty: "core",
      totalMarks: 2,
      stem: "A persuasive essay uses 4 techniques. A student includes 3. How many techniques are missing?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 1 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Techniques", statement: "Multiple techniques needed." },
        ],
        steps: [
          { reasoning: "4 - 3 = 1 missing.", working: "4 - 3 = 1", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "1",
        commonErrors: ["Using only one technique."],
      },
    },
    {
      id: "cie-ol-el-pw-q12",
      difficulty: "core",
      totalMarks: 3,
      stem: "A persuasive essay has 3 main points. A student develops only 2. How many points are undeveloped?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 1 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Points", statement: "Each point needs development." },
        ],
        steps: [
          { reasoning: "3 points; 2 developed.", working: "3 - 2 = 1", marks: 1, markCode: "AO2" },
          { reasoning: "One point undeveloped.", working: "1", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "1",
        commonErrors: ["Listing points without developing."],
      },
    },
    {
      id: "cie-ol-el-pw-q13",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "A persuasive essay must be between 400 and 450 words. A draft is 440 words, and the student adds a 20-word introduction. How many words must the body lose to stay within the limit?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 10 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Word limit", statement: "Additions count." },
        ],
        steps: [
          { reasoning: "440 + 20 = 460 words after introduction.", working: "440 + 20 = 460", marks: 1, markCode: "AO3" },
          { reasoning: "460 - 450 = 10 words over.", working: "460 - 450 = 10", marks: 2, markCode: "AO3" },
          { reasoning: "Body must lose 10 words.", working: "10", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "10",
        commonErrors: ["Forgetting introduction counts."],
      },
    },
    {
      id: "cie-ol-el-pw-q14",
      difficulty: "core",
      totalMarks: 3,
      stem: "Describe the structure of a persuasive essay.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Structure", statement: "Thesis→points→counterarguments→conclusion." },
        ],
        steps: [
          { reasoning: "Introduction with thesis statement.", working: "thesis", marks: 1, markCode: "AO2" },
          { reasoning: "Body: points with evidence and counterarguments.", working: "body", marks: 1, markCode: "AO2" },
          { reasoning: "Conclusion: summarise and restate.", working: "conclusion", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Thesis→points+evidence→counterarguments→conclusion.",
        commonErrors: ["Missing counterarguments."],
      },
    },
    {
      id: "cie-ol-el-pw-q15",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Explain how to use persuasive techniques effectively.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Techniques", statement: "Rhetorical Q, emotive, statistics, expert, inclusive." },
        ],
        steps: [
          { reasoning: "Use rhetorical questions to engage.", working: "rhetorical", marks: 1, markCode: "AO2" },
          { reasoning: "Use statistics/expert opinions for evidence.", working: "statistics", marks: 1, markCode: "AO2" },
          { reasoning: "Use emotive language for emotional appeal.", working: "emotive", marks: 1, markCode: "AO2" },
          { reasoning: "Balance logical and emotional appeals.", working: "balance", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Rhetorical Q, statistics, emotive — balance appeals.",
        commonErrors: ["Using only one technique."],
      },
    },
    {
      id: "cie-ol-el-pw-q16",
      difficulty: "challenge",
      totalMarks: 8,
      stem: "Answer all parts about persuasive writing.",
      parts: [
        { label: "a", prompt: "What is the structure?", marks: 2 },
        { label: "b", prompt: "Name two techniques.", marks: 2 },
        { label: "c", prompt: "What tone is appropriate?", marks: 2 },
        { label: "d", prompt: "Why include counterarguments?", marks: 2 },
      ],
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Persuasive", statement: "Structure, techniques, tone, counterarguments." },
        ],
        steps: [
          { part: "a", reasoning: "Thesis→points→counterarguments→conclusion.", working: "structure", marks: 1, markCode: "AO1" },
          { part: "a", reasoning: "Correct structure.", working: "correct", marks: 1, markCode: "AO3" },
          { part: "b", reasoning: "Rhetorical Q, emotive, statistics, expert, inclusive.", working: "techniques", marks: 1, markCode: "AO1" },
          { part: "b", reasoning: "Two valid techniques.", working: "two", marks: 1, markCode: "AO3" },
          { part: "c", reasoning: "Passionate/formal — appropriate to context.", working: "tone", marks: 1, markCode: "AO2" },
          { part: "c", reasoning: "Clear explanation.", working: "clear", marks: 1, markCode: "AO3" },
          { part: "d", reasoning: "Shows balance, strengthens position.", working: "counterarguments", marks: 1, markCode: "AO2" },
          { part: "d", reasoning: "Clear explanation.", working: "clear", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "(a) thesis→points→counterarguments→conclusion (b) rhetorical/statistics (c) passionate/formal (d) shows balance",
        levels: [
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
          { level: "Level 2", marks: "1-2", descriptor: "Two techniques.", part: "b" },
          { level: "Level 1", marks: "0", descriptor: "One.", part: "b" },
          { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "c" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
          { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "d" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
        ],
        commonErrors: ["Missing counterarguments."],
      },
    },
      ],
    },
    {
      id: "cie-ol-el-informative-writing",
      title: "Informative and expository writing",
      skill: "Write clearly to inform and explain.",
      lesson: {
        sections: [
          {
            heading: "Informative writing",
            body: "Convey facts clearly — objective, structured, accessible. Used in reports, textbooks, news articles.",
          },
          {
            heading: "Expository writing",
            body: "Explain or describe — process, comparison, cause-effect, problem-solution. Clear logical structure.",
          },
          {
            heading: "Clarity techniques",
            body: "Simple sentences, precise vocabulary, logical organisation, examples to illustrate.",
          },
        ],
        keyFormulas: [
          { name: "Informative", statement: "Facts clearly; objective; structured; accessible; examples illustrate." },
        ],
        workedExample: {
          problem: "Explain photosynthesis to students.",
          solution: "Define clearly, use simple sentences, provide examples, structured logically — sunlight→chlorophyll→glucose+oxygen.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-iw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'expository writing'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writing that explains" },
              { id: "b", text: "Writing stories" },
              { id: "c", text: "Writing that persuades" },
              { id: "d", text: "Writing poems" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Expository", statement: "Writing that explains or describes." },
            ],
            steps: [
              { reasoning: "Expository = explains.", working: "explains", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Writing that explains",
            commonErrors: ["Choosing (b) — that's persuasive."],
          },
        },
        {
          id: "cie-ol-el-iw-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two clarity techniques.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Clarity", statement: "Simple sentences, precise vocabulary, logical organisation." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "techniques", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Simple sentences, precise vocabulary, logical organisation, examples (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-iw-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How to write clearly for general audience?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Clarity", statement: "Simple sentences, precise words, logical structure, examples." },
            ],
            steps: [
              { reasoning: "Use simple sentences — avoid complex structures.", working: "simple", marks: 1, markCode: "AO2" },
              { reasoning: "Precise vocabulary — avoid jargon.", working: "vocabulary", marks: 1, markCode: "AO2" },
              { reasoning: "Logical organisation + examples to illustrate.", working: "organisation", marks: 1, markCode: "AO2" },
              { reasoning: "Techniques explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Simple sentences, precise words, logical structure, examples.",
            commonErrors: ["Using jargon — general audience needs clarity."],
          },
        },
        {
          id: "cie-ol-el-iw-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Apply informative writing skills.",
          parts: [
            { label: "a", prompt: "Define expository writing.", marks: 1 },
            { label: "b", prompt: "Name clarity techniques.", marks: 3 },
            { label: "c", prompt: "How to write for general audience?", marks: 2 },
            { label: "d", prompt: "Common mistakes?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Informative", statement: "Expository definition, clarity techniques, audience, mistakes." },
            ],
            steps: [
              { part: "a", reasoning: "Writing that explains or describes.", working: "definition", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Simple sentences, precise vocabulary, logical organisation, examples.", working: "techniques", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Simple sentences, precise words, examples — avoid jargon.", working: "audience", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Jargon, complex sentences, unclear organisation, missing examples.", working: "mistakes", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) explains (b) clarity techniques (c) general audience (d) mistakes",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple techniques.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple mistakes.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "d" },
            ],
            commonErrors: ["Using jargon — general audience needs clarity."],
          },
        },
    {
      id: "cie-ol-el-iw-q5",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is expository writing?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Writing that explains or describes" },
          { id: "b", text: "Writing to convince" },
          { id: "c", text: "Writing to persuade" },
          { id: "d", text: "Writing to entertain" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          { kind: "definition", name: "Expository", statement: "Writing that explains or describes." },
        ],
        steps: [
          { reasoning: "Expository = explain/describe.", working: "expository", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(a)** Writing that explains or describes",
        commonErrors: ["Confusing with persuasive."],
      },
    },
    {
      id: "cie-ol-el-iw-q6",
      difficulty: "core",
      totalMarks: 1,
      stem: "What is the main feature of informative writing?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Emotional and personal" },
          { id: "b", text: "Factual and objective" },
          { id: "c", text: "Persuasive" },
          { id: "d", text: "Entertaining" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Informative", statement: "Facts clearly, objective." },
        ],
        steps: [
          { reasoning: "Informative = factual, objective.", working: "factual", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(a)** Factual and objective",
        commonErrors: ["Adding personal opinion."],
      },
    },
    {
      id: "cie-ol-el-iw-q7",
      difficulty: "challenge",
      totalMarks: 1,
      stem: "Which clarity technique is most effective?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Complex jargon" },
          { id: "b", text: "Simple sentences and precise vocabulary" },
          { id: "c", text: "Long sentences" },
          { id: "d", text: "Vague words" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Clarity", statement: "Simple sentences, precise vocabulary." },
        ],
        steps: [
          { reasoning: "Simple sentences + precise words = clarity.", working: "clarity", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "**(a)** Simple sentences and precise vocabulary",
        commonErrors: ["Using jargon or vague words."],
      },
    },
    {
      id: "cie-ol-el-iw-q8",
      difficulty: "core",
      totalMarks: 1,
      stem: "What should informative writing include?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Only persuasion" },
          { id: "b", text: "Only opinions" },
          { id: "c", text: "Facts, examples, logical organisation" },
          { id: "d", text: "Only emotions" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Informative", statement: "Facts, examples, logical organisation." },
        ],
        steps: [
          { reasoning: "Facts + examples + logical structure.", working: "facts", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(a)** Facts, examples, logical organisation",
        commonErrors: ["Using opinions instead of facts."],
      },
    },
    {
      id: "cie-ol-el-iw-q9",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is the difference between informative and persuasive writing?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Persuasive is factual" },
          { id: "b", text: "Informative is shorter" },
          { id: "c", text: "They are identical" },
          { id: "d", text: "Informative presents facts; persuasive convinces" },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Difference", statement: "Informative=facts; persuasive=convince." },
        ],
        steps: [
          { reasoning: "Informative=facts; persuasive=convince.", working: "difference", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "**(a)** Informative presents facts; persuasive convinces",
        commonErrors: ["Confusing the two."],
      },
    },
    {
      id: "cie-ol-el-iw-q10",
      difficulty: "foundation",
      totalMarks: 2,
      stem: "An informative article requires at least 400 words. A draft is 320 words. How many more words are needed?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 80 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Word limit", statement: "Meet the minimum." },
        ],
        steps: [
          { reasoning: "400 - 320 = 80 words short.", working: "400 - 320 = 80", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "80",
        commonErrors: ["Adding instead of subtracting."],
      },
    },
    {
      id: "cie-ol-el-iw-q11",
      difficulty: "core",
      totalMarks: 2,
      stem: "An informative piece uses 5 clarity techniques. A writer uses only 3. How many techniques are unused?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 2 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Clarity", statement: "Use multiple techniques." },
        ],
        steps: [
          { reasoning: "5 - 3 = 2 unused.", working: "5 - 3 = 2", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "2",
        commonErrors: ["Using limited techniques."],
      },
    },
    {
      id: "cie-ol-el-iw-q12",
      difficulty: "core",
      totalMarks: 3,
      stem: "An informative piece has 4 sections. A writer covers only 3. How many sections are missing?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 1 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Structure", statement: "Cover all sections." },
        ],
        steps: [
          { reasoning: "4 sections; 3 covered.", working: "4 - 3 = 1", marks: 1, markCode: "AO2" },
          { reasoning: "One section missing.", working: "1", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "1",
        commonErrors: ["Incomplete coverage."],
      },
    },
    {
      id: "cie-ol-el-iw-q13",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "An informative piece must be between 350 and 400 words. A draft is 390 words, and the student adds a 15-word introduction. How many words must the body lose to stay within the limit?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 5 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Word limit", statement: "Additions count." },
        ],
        steps: [
          { reasoning: "390 + 15 = 405 words after introduction.", working: "390 + 15 = 405", marks: 1, markCode: "AO3" },
          { reasoning: "405 - 400 = 5 words over.", working: "405 - 400 = 5", marks: 2, markCode: "AO3" },
          { reasoning: "Body must lose 5 words.", working: "5", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "5",
        commonErrors: ["Forgetting introduction counts."],
      },
    },
    {
      id: "cie-ol-el-iw-q14",
      difficulty: "core",
      totalMarks: 3,
      stem: "Describe the key features of informative/expository writing.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Informative", statement: "Facts, objective, structured, accessible." },
        ],
        steps: [
          { reasoning: "Present facts clearly and objectively.", working: "facts", marks: 1, markCode: "AO2" },
          { reasoning: "Use simple sentences and precise vocabulary.", working: "clarity", marks: 1, markCode: "AO2" },
          { reasoning: "Organise logically with examples.", working: "organise", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Facts, objective, structured, accessible, examples.",
        commonErrors: ["Using opinions instead of facts."],
      },
    },
    {
      id: "cie-ol-el-iw-q15",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Explain how to write clearly and accessibly in informative writing.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Clarity", statement: "Simple sentences, precise words, logical structure." },
        ],
        steps: [
          { reasoning: "Use simple sentences — avoid complexity.", working: "simple", marks: 1, markCode: "AO2" },
          { reasoning: "Use precise vocabulary — avoid jargon.", working: "precise", marks: 1, markCode: "AO2" },
          { reasoning: "Organise logically — clear structure.", working: "organise", marks: 1, markCode: "AO2" },
          { reasoning: "Use examples to illustrate.", working: "examples", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Simple sentences, precise words, logical structure, examples.",
        commonErrors: ["Using jargon or complex sentences."],
      },
    },
    {
      id: "cie-ol-el-iw-q16",
      difficulty: "challenge",
      totalMarks: 8,
      stem: "Answer all parts about informative writing.",
      parts: [
        { label: "a", prompt: "What is expository writing?", marks: 2 },
        { label: "b", prompt: "What is the main feature?", marks: 2 },
        { label: "c", prompt: "Name two clarity techniques.", marks: 2 },
        { label: "d", prompt: "How does it differ from persuasive?", marks: 2 },
      ],
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Informative", statement: "Expository, factual, clarity, vs persuasive." },
        ],
        steps: [
          { part: "a", reasoning: "Writing that explains or describes.", working: "expository", marks: 1, markCode: "AO1" },
          { part: "a", reasoning: "Clear definition.", working: "clear", marks: 1, markCode: "AO3" },
          { part: "b", reasoning: "Factual and objective.", working: "factual", marks: 1, markCode: "AO1" },
          { part: "b", reasoning: "Clear feature.", working: "clear", marks: 1, markCode: "AO3" },
          { part: "c", reasoning: "Simple sentences, precise vocabulary, logical organisation.", working: "techniques", marks: 1, markCode: "AO1" },
          { part: "c", reasoning: "Two valid techniques.", working: "two", marks: 1, markCode: "AO3" },
          { part: "d", reasoning: "Informative=facts; persuasive=convince.", working: "difference", marks: 1, markCode: "AO2" },
          { part: "d", reasoning: "Clear distinction.", working: "clear", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "(a) explains (b) factual (c) simple/precise (d) facts vs convince",
        levels: [
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
          { level: "Level 2", marks: "1-2", descriptor: "Two techniques.", part: "c" },
          { level: "Level 1", marks: "0", descriptor: "One.", part: "c" },
          { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "d" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
        ],
        commonErrors: ["Confusing with persuasive."],
      },
    },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-el-u7-writing-notes",
      title: "Writing for purpose — revision notes",
      summary: "Persuasive, informative, expository writing; audience adaptation.",
      sections: [
        {
          heading: "Writing purposes",
          body: "Persuasive: convince. Informative: facts. Expository: explain. Adapt to audience: formal/informal/technical.",
        },
      ],
    },
  ],
};
