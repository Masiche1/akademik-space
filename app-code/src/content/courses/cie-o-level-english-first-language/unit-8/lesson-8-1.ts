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
              { id: "a", text: "Five minutes per mark" },
              { id: "b", text: "No time needed for low-mark questions" },
              { id: "c", text: "Equal time for every question" },
              { id: "d", text: "About one minute per mark" },
            ],
            correctChoiceId: "d",
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
            finalAnswer: "**(d)** About one minute per mark",
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
        {
          id: "cie-ol-fl-et-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the first thing you should do with your time when an exam begins?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Leave time for the last question" },
              { id: "b", text: "Start writing the first question immediately" },
              {
                id: "c",
                text: "Plan a time budget based on the mark allocation",
              },
              { id: "d", text: "Read every question fully and slowly" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Time budgeting",
                statement:
                  "Calculate your time budget before you start — not when you run out.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Planning first prevents running out of time mid-answer.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Plan a time budget based on marks",
            commonErrors: ["Diving in without checking the mark allocation."],
          },
        },
        {
          id: "cie-ol-fl-et-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How much time should you reserve at the end of an exam for checking?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only if you finish early" },
              { id: "b", text: "Half the exam" },
              { id: "c", text: "No time — finish as early as possible" },
              { id: "d", text: "The last 5-10% of the exam" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reserve check time",
                statement:
                  "Block the last 5-10% for review: finish answers, check coverage, proofread.",
              },
            ],
            steps: [
              {
                reasoning: "A reserved block guarantees review time.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** The last 5-10%",
            commonErrors: ["Using all the time and leaving no review."],
          },
        },
        {
          id: "cie-ol-fl-et-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might answering easier questions first be a good exam strategy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Examiners only mark the first answers" },
              {
                id: "b",
                text: "It secures marks early and builds confidence",
              },
              { id: "c", text: "Hard questions are never marked" },
              { id: "d", text: "It is required by the rules" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Order of attack",
                statement:
                  "Answering in a suitable order — often easiest first — secures marks and confidence.",
              },
            ],
            steps: [
              {
                reasoning: "Early success builds confidence and banks marks.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Leaving time for harder questions preserves options.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(b)** Secures marks early and builds confidence",
            commonErrors: ["Believing questions must be answered in order."],
          },
        },
        {
          id: "cie-ol-fl-et-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why calculate a time budget before writing rather than during the exam?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It makes handwriting faster" },
              { id: "b", text: "Examiners check your budget" },
              { id: "c", text: "The rules require it" },
              {
                id: "d",
                text: "It prevents running out of time mid-answer",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Time budgeting",
                statement:
                  "A pre-planned budget stops you spending too long on one question.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Planning ahead avoids discovering there is no time left.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Without a budget, high-mark questions can consume all remaining time.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "**(d)** It prevents running out of time mid-answer",
            commonErrors: ["Deciding time allocation reactively, question by question."],
          },
        },
        {
          id: "cie-ol-fl-et-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A paper is worth 80 marks and lasts 100 minutes. You reserve 10 minutes for checking. How many minutes are available for writing?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 90 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Time budgeting",
                statement: "Reserve check time first, then allocate the rest.",
              },
            ],
            steps: [
              {
                reasoning: "100 - 10 = 90 minutes for writing.",
                working: "100 - 10 = 90",
                marks: 2,
                markCode: "AO3",
              },
            ],
            finalAnswer: "90",
            commonErrors: ["Forgetting to subtract the reserve time."],
          },
        },
        {
          id: "cie-ol-fl-et-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "A paper has 60 marks and lasts 90 minutes. You reserve 9 minutes for checking. What is the writing time per mark?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1.35 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Time budgeting",
                statement: "Marks roughly correspond to time needed — about one minute per mark.",
              },
            ],
            steps: [
              {
                reasoning: "90 - 9 = 81 minutes available for writing.",
                working: "90 - 9 = 81",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "81 / 60 = 1.35 minutes per mark.",
                working: "81 / 60 = 1.35",
                marks: 2,
                markCode: "AO3",
              },
            ],
            finalAnswer: "1.35",
            commonErrors: ["Dividing the full 90 minutes by 60 instead of the writing time."],
          },
        },
        {
          id: "cie-ol-fl-et-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A 60-minute paper has three questions worth 10, 20 and 30 marks. After reserving 6 minutes, how many minutes should the 30-mark question receive if time is shared in proportion to marks?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 27 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Proportional timing",
                statement:
                  "Time should be shared in proportion to mark weighting.",
              },
            ],
            steps: [
              {
                reasoning: "Writing time = 60 - 6 = 54 minutes.",
                working: "60 - 6 = 54",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Total marks = 10 + 20 + 30 = 60.",
                working: "10 + 20 + 30 = 60",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "30 / 60 x 54 = 27 minutes.",
                working: "30 / 60 x 54 = 27",
                marks: 2,
                markCode: "AO3",
              },
            ],
            finalAnswer: "27",
            commonErrors: ["Giving the 30-mark question 30 minutes without adjusting for the reserve."],
          },
        },
        {
          id: "cie-ol-fl-et-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is it better to answer questions in an order that suits you rather than always in order?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Order of attack",
                statement:
                  "A flexible order secures accessible marks and protects time for harder questions.",
              },
            ],
            steps: [
              {
                reasoning: "You can secure easier marks first and build momentum.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Hard questions get the time they deserve instead of being rushed at the end.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "A suitable order secures marks early and protects time for harder questions.",
            commonErrors: ["Assuming the paper must be answered top to bottom."],
          },
        },
        {
          id: "cie-ol-fl-et-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "What should you do with the reserved checking time at the end of an exam?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reserve check time",
                statement:
                  "Review time is for finishing, checking coverage and proofreading.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Finish incomplete answers and check every question has been attempted.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Proofread for errors and ensure legibility.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Finish answers, verify coverage of all questions, and proofread.",
            commonErrors: ["Using reserve time to start a brand-new answer."],
          },
        },
        {
          id: "cie-ol-fl-et-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student spends 45 minutes on a 15-mark question in a 2-hour paper and runs out of time before finishing. Analyse the problem and suggest a better strategy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Time management diagnosis",
                statement:
                  "Time spent should roughly match mark weighting — overspending starves later questions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Problem identified: 15 marks cannot justify 45 minutes when the rule is ~1 minute per mark.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Overspending on one question starves later, possibly higher-mark questions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Strategy: plan a per-question budget before writing and move on when time expires.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reserve checking time so the budget is protected.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Budget ~15 minutes for 15 marks; plan ahead, move on when time expires, reserve checking time.",
            commonErrors: ["Blaming the question instead of poor budgeting."],
          },
        },
        {
          id: "cie-ol-fl-et-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does the mark allocation of a question guide your answer?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Marks = depth",
                statement:
                  "Marks signal how much detail, development and time the answer deserves.",
              },
            ],
            steps: [
              {
                reasoning: "Low marks need concise, precise answers.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "High marks need developed argument — point, evidence, explanation, evaluation.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Mark allocation signals required depth — and therefore time to spend.",
            commonErrors: ["Writing the same length regardless of marks."],
          },
        },
        {
          id: "cie-ol-fl-et-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Create a time budget for a 100-mark, 2-hour paper with a 10-minute reserve, showing how you would divide the writing time across four equal 25-mark essays.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Time budgeting",
                statement:
                  "Reserve check time, then share the rest in proportion to marks.",
              },
            ],
            steps: [
              {
                reasoning: "Writing time = 120 - 10 = 110 minutes.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "110 / 4 = 27.5 minutes per essay (about 27-28).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Each essay budget includes planning and proofreading.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Total accounts for all 110 minutes with no time left over.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "~27-28 minutes per essay after reserving 10 minutes.",
            commonErrors: ["Forgetting the reserve leaves 110, not 120, minutes."],
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
              { id: "a", text: "Write an essay" },
              { id: "b", text: "Skip it" },
              { id: "c", text: "Concise and precise" },
              { id: "d", text: "As long as possible" },
            ],
            correctChoiceId: "c",
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
            finalAnswer: "**(c)** Concise and precise",
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
        {
          id: "cie-ol-fl-qt-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How should a 2-mark question be answered?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "With one word if possible" },
              {
                id: "b",
                text: "Concise but complete enough to earn both marks",
              },
              { id: "c", text: "Skipped to save time" },
              { id: "d", text: "As long as possible" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Answer shaping",
                statement:
                  "Match depth to marks — enough development for each mark, no padding.",
              },
            ],
            steps: [
              {
                reasoning: "Two marks need two pieces of valid material.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Concise but complete for both marks",
            commonErrors: ["Writing one point for a two-mark question."],
          },
        },
        {
          id: "cie-ol-fl-qt-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a structured question, how are the marks awarded?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "As one total at the end" },
              { id: "b", text: "By the examiner's mood" },
              { id: "c", text: "Only for the final part" },
              { id: "d", text: "Per part, independently" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Structured questions",
                statement: "Each part has its own marks and markscheme.",
              },
            ],
            steps: [
              {
                reasoning: "Marks are awarded per part against its own criteria.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Per part, independently",
            commonErrors: ["Thinking a strong (a) guarantees marks in (b)."],
          },
        },
        {
          id: "cie-ol-fl-qt-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does the mark allocation shown for each part of a structured question tell you?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing useful" },
              { id: "b", text: "Which part is easiest" },
              {
                id: "c",
                text: "How much detail and development is expected",
              },
              { id: "d", text: "The order to answer in" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Marks = depth",
                statement: "Marks signal how much to write for each part.",
              },
            ],
            steps: [
              {
                reasoning: "Higher marks demand more developed answers.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The allocation guides effort and time across parts.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(c)** How much detail is expected",
            commonErrors: ["Ignoring the marks and writing equal-length answers."],
          },
        },
        {
          id: "cie-ol-fl-qt-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A question says 'Compare the two characters.' What must your answer do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Say which is better" },
              { id: "b", text: "Retell the plot" },
              { id: "c", text: "Describe only one character" },
              {
                id: "d",
                text: "Give both similarities and differences",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Command words",
                statement: "'Compare' requires similarities and differences.",
              },
            ],
            steps: [
              {
                reasoning: "Compare = likenesses and differences.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "One-sided description misses half the task.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(d)** Similarities and differences",
            commonErrors: ["Describing each character separately without linking."],
          },
        },
        {
          id: "cie-ol-fl-qt-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A structured question has parts worth 2, 3 and 5 marks. What is the total value of the question?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Marks allocation",
                statement: "Total marks = sum of part marks.",
              },
            ],
            steps: [
              {
                reasoning: "2 + 3 + 5 = 10 marks.",
                working: "2 + 3 + 5 = 10",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "10",
            commonErrors: ["Counting parts instead of summing marks."],
          },
        },
        {
          id: "cie-ol-fl-qt-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A paper contains five questions worth 4, 6, 8, 10 and 12 marks. What is the total value of the paper?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 40 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Marks allocation",
                statement: "Total marks = sum of all question marks.",
              },
            ],
            steps: [
              {
                reasoning: "4 + 6 + 8 + 10 + 12 = 40 marks.",
                working: "4 + 6 + 8 + 10 + 12 = 40",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Total determines the overall time budget.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "40",
            commonErrors: ["Miscounting the number of questions."],
          },
        },
        {
          id: "cie-ol-fl-qt-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A 90-minute paper is worth 100 marks. You reserve 10 minutes for checking. How many writing minutes are available per mark?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.8 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Time budgeting",
                statement: "Subtract reserve time, then divide by total marks.",
              },
            ],
            steps: [
              {
                reasoning: "Writing time = 90 - 10 = 80 minutes.",
                working: "90 - 10 = 80",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "80 / 100 = 0.8 minutes per mark.",
                working: "80 / 100 = 0.8",
                marks: 2,
                markCode: "AO3",
              },
            ],
            finalAnswer: "0.8",
            commonErrors: ["Forgetting to subtract the reserve before dividing."],
          },
        },
        {
          id: "cie-ol-fl-qt-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should a low-mark answer be precise rather than long?",
          response: { type: "open" },
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
                reasoning: "The markscheme credits specific accurate points only.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Padding wastes time that higher-mark questions need.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Accuracy earns the marks; length adds nothing and wastes time.",
            commonErrors: ["Over-writing low-mark answers."],
          },
        },
        {
          id: "cie-ol-fl-qt-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the ideal shape of an extended (high-mark) response.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Extended response",
                statement:
                  "Point, evidence, explanation, evaluation — structured and developed.",
              },
            ],
            steps: [
              {
                reasoning: "Brief introduction framing the argument.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Body paragraphs each making one point with evidence and explanation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Conclusion synthesising the argument.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Intro + developed PEE-style paragraphs + conclusion.",
            commonErrors: ["Listing points without development."],
          },
        },
        {
          id: "cie-ol-fl-qt-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why later parts of a structured question may depend on earlier answers yet are still marked independently.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Structured questions",
                statement:
                  "Parts can build on each other but each has its own marks and markscheme.",
              },
            ],
            steps: [
              {
                reasoning: "Later parts often reuse material or context from earlier parts.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Each part is assessed against its own criteria and mark allocation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "A good answer to (a) does not automatically earn marks in (b).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear explanation of independence.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Parts build on each other but each is marked separately against its own markscheme.",
            commonErrors: ["Assuming one good answer covers all parts."],
          },
        },
        {
          id: "cie-ol-fl-qt-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "How should your response differ between 'Describe...' and 'Evaluate...' questions?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Command words",
                statement:
                  "'Describe' = give features; 'evaluate' = weigh strengths and judge.",
              },
            ],
            steps: [
              {
                reasoning: "Describe requires accurate features/details.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Evaluate requires balanced judgement, not just description.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Describe gives features; evaluate weighs and judges effectiveness.",
            commonErrors: ["Writing a description when evaluation is required."],
          },
        },
        {
          id: "cie-ol-fl-qt-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A question has parts worth (a) 2, (b) 4 and (c) 8 marks. Explain how you would allocate effort and time across the parts.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Answer shaping",
                statement:
                  "Effort should be proportional to marks — parts signal required depth.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 2 marks: brief, precise answer.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "(b) 4 marks: developed but concise response.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "(c) 8 marks: essay-level developed argument.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Time mirrors marks — roughly one minute per mark.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Effort proportional to marks: brief (a), developed (b), essay-level (c).",
            commonErrors: ["Giving equal effort to every part."],
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
