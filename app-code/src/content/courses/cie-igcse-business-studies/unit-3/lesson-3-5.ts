import type { Lesson } from "../../../types.ts";

export const lesson35: Lesson = {
  id: "cieibs-u3-lesson-3-5",
  code: "3-5",
  title: "Case Study Analysis and Exam Technique",
  goal: "I CAN apply business concepts to case study material and structure exam answers effectively.",
  standards: [
    "Cambridge IGCSE Business Studies 0450",
    "Paper technique: case study, command words",
  ],
  vocabulary: [
    {
      term: "Case study",
      definition: "Real business scenario used as exam stimulus.",
    },
    {
      term: "Command word",
      definition:
        "Instruction word determining answer type — describe, explain, evaluate.",
    },
    { term: "Application", definition: "Linking theory to the specific case." },
    {
      term: "Evaluation",
      definition: "Weighing evidence to reach a judgement.",
    },
    {
      term: "Stakeholder",
      definition: "Anyone affected by the business decision.",
    },
  ],
  concepts: [
    {
      id: "cieibs-u3-s5-exam",
      title: "Case study and exam technique",
      skill: "Apply concepts to cases and answer command words precisely.",
      lesson: {
        sections: [
          {
            heading: "Case study technique",
            body: "IGCSE Business Papers 1 and 2 are case-study based. Read the case twice: once for context, once highlighting facts relevant to each question. Apply theory by naming the concept THEN linking it to specific case detail — generic answers score poorly.",
          },
          {
            heading: "Command words",
            body: "'Describe' = state features; 'Explain' = give reasons; 'Discuss' = present more than one side; 'Evaluate'/'To what extent' = weigh evidence and reach a judgement. Match answer depth to the word — 'evaluate' demands a conclusion.",
          },
        ],
        keyFormulas: [
          {
            name: "Application",
            statement: "concept + case detail = full marks",
          },
          {
            name: "Command words",
            statement: "describe = what; explain = why; evaluate = judgement",
          },
        ],
        workedExample: {
          problem:
            "Case: 'A bakery uses job production for wedding cakes.' Question: Explain one advantage of this method FOR THIS BUSINESS.",
          solution:
            "Job production allows customisation — wedding cakes are one-off orders, so the bakery can tailor design and ingredients to each customer.",
        },
      },
      questions: [
        {
          id: "cieibs-u3-exam-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the command word 'evaluate' require you to do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "List facts" },
              { id: "b", text: "Describe only" },
              { id: "c", text: "Give reasons" },
              { id: "d", text: "Weigh evidence and reach a judgement" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Command words",
                statement: "Evaluate demands a judgement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Evaluate requires weighing pros/cons and concluding.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Weigh evidence and reach a judgement",
          },
        },
        {
          id: "cieibs-u3-exam-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Case: 'TechStart, a 10-person app company, has no management layers.' Explain one advantage of this flat structure FOR TechStart.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Application",
                statement: "Concept + case detail.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Flat structure means fast communication — suitable for a small, fast-moving app company.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "With only 10 staff, decisions reach everyone quickly without distortion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Fast communication suits the small agile team",
          },
        },
        {
          id: "cieibs-u3-exam-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A student writes: 'Job production is good because it is flexible.' Using the command word 'explain', improve this answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Explain",
                statement: "Give reasons, not just claims.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Add the reason: each product is made individually, so designs can be customised.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Link consequence: suits one-off orders but is expensive per unit at volume.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Explained answer gives because-reasons, not just the claim.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Job production is flexible BECAUSE products are made individually allowing customisation — but costly at volume",
          },
        },
        {
          id: "cieibs-u3-exam-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Case: 'FreshMart supermarket is losing customers to online delivery.' Question: 'Evaluate two possible responses FreshMart could make.' Structure a model answer outline.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evaluation",
                statement: "Option + pros/cons + judgement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Option 1: launch online delivery — meets customer demand but adds costs and logistics complexity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Option 2: improve in-store experience — retains loyal customers but doesn't reach online shoppers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weigh both against the case: customer loss to delivery suggests online is the bigger threat.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Judgement: online delivery is more urgent, possibly combined with store improvements.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Evaluate online delivery vs store improvements against the case evidence; conclude online is priority",
          },
        },
        {
          id: "cieibs-u3-exam-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the command word 'describe' require?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To state features or characteristics" },
              { id: "b", text: "Reasons and justification" },
              { id: "c", text: "Comparison of two options" },
              { id: "d", text: "A final judgement" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Command words",
                statement:
                  "Describe = what; explain = why; evaluate = judgement.",
              },
            ],
            steps: [
              {
                reasoning: "Describe asks for features without reasons.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "State features",
          },
        },
        {
          id: "cieibs-u3-exam-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the command word 'explain' require beyond 'describe'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Numerical data only" },
              { id: "b", text: "Two opposing viewpoints" },
              { id: "c", text: "A written conclusion" },
              { id: "d", text: "Reasons — the 'why' behind the answer" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Command words",
                statement: "Explain = give reasons.",
              },
            ],
            steps: [
              {
                reasoning: "Explain needs because-reasons linked to the case.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Reasons — the why",
          },
        },
        {
          id: "cieibs-u3-exam-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "An exam paper is 2 hours long with 60 marks. (a) Calculate the recommended minutes per mark. (b) How long should a student spend on an 8-mark question?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2, unit: "minutes" },
              { label: "b", answer: 16, unit: "minutes" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Time management",
                statement: "Minutes per mark = total minutes / total marks.",
              },
            ],
            steps: [
              {
                reasoning: "120 minutes / 60 marks = 2 minutes per mark.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "8 marks x 2 = 16 minutes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 2 min/mark, b) 16 minutes",
          },
        },
        {
          id: "cieibs-u3-exam-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain how to apply a business theory to a case study question to gain full marks.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Case application",
                statement:
                  "Name the concept, then link it to specific case detail.",
              },
            ],
            steps: [
              {
                reasoning:
                  "State the theory or concept explicitly, e.g. 'This is batch production because...'",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reference the specific business/case facts — generic answers score poorly.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Concept + case detail = full marks",
          },
        },
        {
          id: "cieibs-u3-exam-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the command word 'discuss' require?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "More than one side of the issue" },
              { id: "b", text: "One-sided arguments only" },
              { id: "c", text: "A single definition" },
              { id: "d", text: "Purely numerical answers" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Command words",
                statement: "Discuss = present more than one side.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Discuss demands balanced treatment of perspectives.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "More than one side",
          },
        },
        {
          id: "cieibs-u3-exam-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 90-minute exam has 60 marks. (a) Calculate minutes per mark. (b) How much time should be allocated to a 6-mark question?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1.5, unit: "minutes" },
              { label: "b", answer: 9, unit: "minutes" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Time management",
                statement: "Minutes per mark = exam minutes / total marks.",
              },
            ],
            steps: [
              {
                reasoning: "90 / 60 = 1.5 minutes per mark.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "6 x 1.5 = 9 minutes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 1.5 min/mark, b) 9 minutes",
          },
        },
        {
          id: "cieibs-u3-exam-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between 'describe' and 'explain' command words, with an example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Describe vs explain",
                statement: "What vs why.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Describe = state what something is; e.g. 'The business uses batch production.'",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Explain = give reasons; e.g. '...because it makes identical items in groups efficiently.'",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Describe = what; explain = why",
          },
        },
        {
          id: "cieibs-u3-exam-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the best first step when reading a case study before answering questions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Start writing immediately" },
              { id: "b", text: "Skip the background section" },
              { id: "c", text: "Memorise the whole case" },
              {
                id: "d",
                text: "Read twice, highlighting facts relevant to each question",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Case technique",
                statement: "Read twice; highlight relevant facts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Two readings ensure context and fact retrieval for application.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Read twice and highlight facts",
          },
        },
        {
          id: "cieibs-u3-exam-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In a 40-mark exam, one question is worth 12 marks and another 5 marks. (a) What percentage of total marks is the 12-mark question? (b) If a student gets full marks on both, how many marks do they score in total?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 30, unit: "%" },
              { label: "b", answer: 17, unit: "marks" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Mark allocation",
                statement: "Question % = marks / total marks x 100.",
              },
            ],
            steps: [
              { reasoning: "12/40 x 100 = 30%.", marks: 1, markCode: "M" },
              { reasoning: "12 + 5 = 17 marks.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 30%, b) 17 marks",
          },
        },
        {
          id: "cieibs-u3-exam-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Outline a model answer structure for an 'evaluate' question on whether a business should expand overseas, using the case-study facts given.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evaluation structure",
                statement: "Points for, points against, judgement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Identify expansion benefits — new markets, growth — linked to case.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Identify risks — cost, unfamiliarity, competition — linked to case.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Weigh the evidence and reach a clear judgement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conclusion must commit to a decision, not sit on the fence.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "For/against/judgement structure applied to case",
          },
        },
        {
          id: "cieibs-u3-exam-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why do generic answers that do not reference the case study score poorly?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "They show the candidate cannot apply theory to the specific situation",
              },
              { id: "b", text: "Examiners cannot read them" },
              { id: "c", text: "They are always too short" },
              { id: "d", text: "They use too much theory" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Application",
                statement: "Marks reward linking theory to case detail.",
              },
            ],
            steps: [
              {
                reasoning:
                  "IGCSE questions demand application to the named business.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "No application to the specific case",
          },
        },
        {
          id: "cieibs-u3-exam-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define the command words 'describe', 'explain', 'discuss', 'evaluate'. (b) A 2-hour exam has 80 marks — calculate minutes per mark. (c) How long should a 10-mark question take? (d) Explain how to apply theory to a case. (e) What is the best first reading strategy? (f) Case: 'A bakery uses flow production for standard loaves.' Write a model 'explain' answer for one advantage FOR THIS BUSINESS. (g) What makes a good 'evaluate' answer? (h) Plan how you would answer 'Discuss two reasons why the bakery might switch to batch production.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Exam technique",
                statement: "Command words, timing, case application.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All four command word definitions given.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) 120 / 80 = 1.5 minutes per mark.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) 10 x 1.5 = 15 minutes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Name concept + cite case detail.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Read twice, highlight relevant facts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(f) E.g. 'Flow suits standard loaves — high volume, low unit cost, consistent quality.'",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(g) For/against points + clear justified conclusion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(h) Two reasons for switching (e.g. variety, lower setup cost) each with because-reasons — planned structure.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Command words, timing, case application, evaluation.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieibs-u3-exam-notes",
      title: "Case study technique — revision notes",
      summary: "Application, command words, evaluation structure.",
      sections: [
        {
          heading: "Key skills",
          body: "Name the concept, then cite case detail. Match depth to the command word — evaluate needs a conclusion.",
        },
        {
          heading: "Exam tips",
          body: "Underline key facts in the case before answering; every point should reference the business by name.",
        },
      ],
    },
  ],
};
