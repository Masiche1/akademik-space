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
              { id: "a", text: "Describe only" },
              { id: "b", text: "Give reasons" },
              { id: "c", text: "Weigh evidence and reach a judgement" },
              { id: "d", text: "List facts" },
            ],
            correctChoiceId: "c",
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
