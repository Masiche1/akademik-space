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
              { id: "a", text: "Writing to convince" },
              { id: "b", text: "Writing facts" },
              { id: "c", text: "Writing stories" },
              { id: "d", text: "Writing poems" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "Convince reader" },
              { id: "b", text: "Inform only" },
              { id: "c", text: "Entertain only" },
              { id: "d", text: "Describe only" },
            ],
            correctChoiceId: "a",
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
              { id: "b", text: "Writing that persuades" },
              { id: "c", text: "Writing stories" },
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
