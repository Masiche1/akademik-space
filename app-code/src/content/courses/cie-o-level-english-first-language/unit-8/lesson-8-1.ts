import type { Lesson } from "../../../types.ts";

export const lesson181: Lesson = {
  id: "cie-ol-fl-lesson-8-1",
  code: "8-1",
  title: "Exam structure and timing",
  goal: "I CAN plan exam time, understand question types and manage each paper effectively.",
  standards: ["1119 Exam technique"],
  vocabulary: [
    {
      term: "Reading time",
      definition: "The period before writing when you may read the paper.",
    },
    {
      term: "Marks allocation",
      definition: "The number of marks each question or part is worth.",
    },
    {
      term: "Time budget",
      definition: "Planned minutes per question based on mark weighting.",
    },
    {
      term: "Question command words",
      definition:
        "Words like 'describe', 'explain', 'analyse' that signal the required response type.",
    },
    {
      term: "Spare time",
      definition: "Reserved minutes at the end for checking and finishing.",
    },
    {
      term: "Mark scheme",
      definition: "The examiner's guide to what earns marks in each answer.",
    },
  ],
  concepts: [
    {
      id: "cie-ol-fl-exam-timing",
      title: "Time management in exams",
      skill: "Allocate time across questions and reserve time for review.",
      lesson: {
        sections: [
          {
            heading: "Marks = minutes",
            body: "A reliable rule: allow roughly one minute per mark. A 10-mark essay deserves about 10 minutes of planning and writing. Calculate your time budget before you start — not when you run out.",
          },
          {
            heading: "The order of attack",
            body: "Answer questions in an order that suits you: often easiest first to build confidence and secure marks, or in order if the paper builds difficulty. Never leave a question blank — attempt every part; partial credit exists for every markscheme step.",
          },
          {
            heading: "Reserve check time",
            body: "Block the last 5-10% of exam time for review: finish incomplete answers, check you've answered every question, proofread for errors, and ensure legibility. An unfinished brilliant answer earns less than a complete good one.",
          },
        ],
        keyFormulas: [
          {
            name: "Time budget",
            statement:
              "Marks×minutes per mark=per-question budget+reserve check time.",
          },
        ],
        workedExample: {
          problem: "Paper: 100 marks, 2 hours. How long per mark?",
          solution:
            "120 minutes / 100 marks = 1.2 minutes per mark. Reserve 10 minutes for checking → ~1.1 minutes per mark for writing.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-et-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a good rule of thumb for exam time per mark?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "About one minute per mark" },
              { id: "b", text: "Five minutes per mark" },
              { id: "c", text: "No time needed for low-mark questions" },
              { id: "d", text: "Equal time for every question" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Time budgeting",
                statement:
                  "Marks roughly correspond to time needed — about one minute per mark.",
              },
            ],
            steps: [
              {
                reasoning: "Marks weighting guides time allocation.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** About one minute per mark",
            commonErrors: [
              "Spending equal time on 2-mark and 10-mark questions.",
            ],
          },
        },
        {
          id: "cie-ol-fl-et-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should you never leave an exam question blank?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Attempt all questions",
                statement:
                  "Markschemes award credit for each valid step, so partial answers earn marks.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each markscheme step can earn credit independently.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "A blank answer earns zero regardless of ability.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Partial credit exists for every markscheme step — attempt everything.",
            commonErrors: ["Believing only perfect answers earn marks."],
          },
        },
        {
          id: "cie-ol-fl-et-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How should command words like 'describe', 'explain' and 'analyse' shape your answer?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Command words",
                statement:
                  "Each command word demands a specific response type — match your answer to it.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Describe' = give features/details; 'explain' = give reasons/how; 'analyse' = break down and examine parts.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'Analyse' requires going beyond description to technique and effect.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Misreading the command word produces an answer that cannot score full marks.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Match response type to command word — describe=features, explain=reasons, analyse=examine parts.",
            commonErrors: ["Writing a description when 'analyse' is required."],
          },
        },
        {
          id: "cie-ol-fl-et-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Exam structure and timing.",
          parts: [
            { label: "a", prompt: "State a time-per-mark rule.", marks: 1 },
            {
              label: "b",
              prompt:
                "A paper has 80 marks and 2 hours. Calculate writing time per mark, reserving 8 minutes for checking.",
              marks: 3,
            },
            { label: "c", prompt: "Why reserve checking time?", marks: 3 },
            {
              label: "d",
              prompt: "Name two command words and what each requires.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Exam timing",
                statement: "Marks→minutes+checking+command words.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "About one minute per mark.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "120 - 8 = 112 minutes writing.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "112 / 80 = 1.4 minutes per mark.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Correct calculation shown.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning:
                  "To proofread, finish incomplete answers, check coverage.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Errors caught cost marks if unchecked.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Complete answers score better than rushed ones.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning:
                  "Any two of describe/explain/analyse/compare/evaluate with correct demands.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Requirements accurate.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Clear distinction.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) 1 min/mark (b) 112/80=1.4 min (c) proofread+finish (d) two command words",
            levels: [
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Correct.",
                part: "a",
              },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Correct calculation.",
                part: "b",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Reasons clear.",
                part: "c",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "c",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Two accurate.",
                part: "d",
              },
              { level: "Level 2", marks: "1", descriptor: "One.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Ignoring mark weighting and running out of time."],
          },
        },
      ],
    },
    {
      id: "cie-ol-fl-question-types",
      title: "Question types and answer shapes",
      skill: "Recognise exam question formats and shape responses to match.",
      lesson: {
        sections: [
          {
            heading: "Short answers",
            body: "1-3 mark questions usually need concise, precise answers: a definition, a quoted phrase, a stated fact. Do not over-write — the markscheme rewards accuracy, not length.",
          },
          {
            heading: "Extended responses",
            body: "Higher-mark questions (6+) reward developed argument: point, evidence, explanation, evaluation. Structure helps: intro stating your line, paragraphs each making one point, conclusion. Quality of analysis beats quantity of content.",
          },
          {
            heading: "Structured questions",
            body: "Multi-part questions (a, b, c...) build in difficulty. Answer each part independently — later parts often depend on earlier answers. Watch the mark allocation per part; it tells you how much to write.",
          },
        ],
        keyFormulas: [
          {
            name: "Answer shaping",
            statement:
              "Short=precise; extended=point+evidence+explanation; parts=independent.",
          },
        ],
        workedExample: {
          problem: "A 12-mark question has parts (a) 2, (b) 4, (c) 6 marks.",
          solution:
            "Spend effort proportionally: brief for (a), developed for (b), essay-level for (c). Marks signal depth.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-qt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How should you answer a 1-mark question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Concise and precise" },
              { id: "b", text: "As long as possible" },
              { id: "c", text: "Skip it" },
              { id: "d", text: "Write an essay" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Short answers",
                statement:
                  "Low-mark questions reward accuracy and brevity, not length.",
              },
            ],
            steps: [
              {
                reasoning: "Marks determine required depth.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Concise and precise",
            commonErrors: ["Over-writing low-mark answers."],
          },
        },
        {
          id: "cie-ol-fl-qt-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does an extended (high-mark) response need?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Extended response",
                statement:
                  "Developed argument: point, evidence, explanation, evaluation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Structure: intro, paragraphs with points+evidence, conclusion.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Depth of analysis beats length of content.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Point+evidence+explanation+evaluation, well structured.",
            commonErrors: ["Listing points without development."],
          },
        },
        {
          id: "cie-ol-fl-qt-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In a structured question, why must each part be answered independently?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Structured questions",
                statement:
                  "Each part is marked separately against its own markscheme.",
              },
            ],
            steps: [
              {
                reasoning: "Marks are awarded per part, not per question.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Later parts often build on earlier ones but are marked independently.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "A good (a) does not guarantee (b) — each needs its own answer.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Each part has its own marks and markscheme — answer each separately.",
            commonErrors: ["Assuming one good answer covers all parts."],
          },
        },
        {
          id: "cie-ol-fl-qt-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Question types and answer shapes.",
          parts: [
            {
              label: "a",
              prompt:
                "How should a 1-mark answer differ from a 10-mark answer?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Name three elements of an extended response.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Why are parts of a structured question marked independently?",
              marks: 3,
            },
            {
              label: "d",
              prompt:
                "A question says 'Evaluate...' — what must your answer do?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Answer shapes",
                statement: "Marks→depth+structure+independence+command words.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "1-mark = concise precise; 10-mark = developed structured argument.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "a",
                reasoning: "Contrast clear.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning:
                  "Any three of point, evidence, explanation, evaluation, conclusion.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Correctly identified.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Three valid elements.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "Each part has separate marks and markscheme.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Later parts may build on earlier but are marked separately.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Explanation clear.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "Weigh strengths and weaknesses before judging.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "Requires balanced assessment, not just description.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) depth differs (b) point/evidence/evaluation (c) separate marks (d) balanced judgement",
            levels: [
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Contrast clear.",
                part: "a",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "a" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Three elements.",
                part: "b",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "One or two.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Independence explained.",
                part: "c",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "c",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Evaluation understood.",
                part: "d",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Same answer length regardless of marks."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-fl-exam-technique-notes",
      title: "Exam structure and timing — revision notes",
      summary:
        "Time budgeting, question types, command words and answer shaping.",
      sections: [
        {
          heading: "Time",
          body: "~1 minute per mark. Reserve last 5-10% for checking. Attempt every question — partial credit exists.",
        },
        {
          heading: "Command words",
          body: "Describe=features; explain=reasons; analyse=examine parts and technique; evaluate=weigh and judge; compare=similarities and differences.",
        },
        {
          heading: "Answer shapes",
          body: "Low marks = precise short answers. High marks = structured extended responses (point, evidence, explanation, evaluation). Structured questions: each part marked independently.",
        },
        {
          heading: "Exam checklist",
          body: "Did I budget time per marks? Did I match answer depth to mark allocation? Did I read command words carefully? Did I reserve checking time?",
        },
      ],
    },
  ],
};
