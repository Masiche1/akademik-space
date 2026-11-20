import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "cieict-u4-lesson-4-2",
  code: "4-2",
  title: "ICT Exam Technique and Project Evaluation",
  goal: "I CAN apply exam technique to IGCSE ICT questions and evaluate ICT projects critically.",
  standards: ["Cambridge IGCSE ICT 0413", "Exam technique, project evaluation"],
  vocabulary: [
    {
      term: "Critical evaluation",
      definition: "Judging a system or project against objectives.",
    },
    {
      term: "Success criteria",
      definition: "Measurable standards a project must meet.",
    },
    {
      term: "Fitness for purpose",
      definition: "Whether the system actually meets user needs.",
    },
    { term: "Limitation", definition: "A weakness or boundary of the system." },
    {
      term: "Improvement",
      definition: "Specific change that would make the system better.",
    },
  ],
  concepts: [
    {
      id: "cieict-u4-s2-exam",
      title: "Exam technique and evaluation",
      skill: "Answer ICT questions precisely and evaluate projects critically.",
      lesson: {
        sections: [
          {
            heading: "Exam technique",
            body: "ICT 0413 questions test application to scenarios — name the software/feature THEN explain its use in the scenario. 'Suggest' questions want plausible options with justification; 'evaluate' wants judgement against objectives, not just a feature list.",
          },
          {
            heading: "Critical evaluation",
            body: "Strong evaluations compare the system against its original objectives: did it meet them? What are the limitations? What improvements would help? Reference specific features — 'the database lacks validation' beats 'it could be better'.",
          },
        ],
        keyFormulas: [
          {
            name: "Evaluation",
            statement: "objectives + evidence + judgement + improvements",
          },
        ],
        workedExample: {
          problem:
            "Evaluate a school website that lists contact details but has no news section.",
          solution:
            "Meets basic contact objective; fails communication objective — no updates; improvement: add a news/blog section.",
        },
      },
      questions: [
        {
          id: "cieict-u4-ex-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'fitness for purpose' mean in ICT evaluation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The system is cheap" },
              { id: "b", text: "The system actually meets the user's needs" },
              { id: "c", text: "The system uses the latest software" },
              { id: "d", text: "The system is easy to install" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fitness for purpose",
                statement: "Meets actual needs.",
              },
            ],
            steps: [
              {
                reasoning: "Fitness = does it do what users need.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "The system actually meets the user's needs",
          },
        },
        {
          id: "cieict-u4-ex-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should an ICT evaluation mention limitations, not just strengths?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Critical evaluation",
                statement: "Balanced judgement.",
              },
            ],
            steps: [
              {
                reasoning: "Limitations show honest critical analysis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They justify the improvement recommendations that follow.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Shows critical analysis and justifies improvements",
          },
        },
        {
          id: "cieict-u4-ex-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A student project creates a revision website but only works on one computer. Identify two limitations and one improvement for each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evaluation",
                statement: "Limitation → specific improvement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Limitation: single computer — not accessible to users elsewhere.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Improvement: publish online/host it for remote access.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Limitation: no search or navigation aids; improvement: add index or menu.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Accessibility limit → host online; navigation limit → add menu/search",
          },
        },
        {
          id: "cieict-u4-ex-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Scenario: 'A library wants a system to manage book loans.' Describe how you would evaluate whether their new ICT system is successful.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evaluation framework",
                statement: "Objectives + evidence + judgement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Check against objectives: faster loans, accurate stock records, fewer lost books.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Gather evidence: loan processing time before/after, error rates.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Identify limitations: e.g. no barcode scanner, staff training gaps.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Judge success and recommend specific improvements.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Compare to objectives with evidence; note limitations; judge and recommend improvements",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieict-u4-exam-notes",
      title: "Exam technique — revision notes",
      summary: "Scenario application, critical evaluation, improvements.",
      sections: [
        {
          heading: "Key skills",
          body: "Name the feature/technique then apply to scenario; evaluate against objectives with specific limitations and improvements.",
        },
        {
          heading: "Exam tips",
          body: "Vague improvements ('make it better') lose marks — specify WHAT to change and WHY.",
        },
      ],
    },
  ],
};
