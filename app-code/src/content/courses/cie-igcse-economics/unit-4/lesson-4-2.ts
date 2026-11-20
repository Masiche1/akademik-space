import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "cieiec-u4-lesson-4-2",
  code: "4-2",
  title: "Essay and Extended Response Technique",
  goal: "I CAN structure extended economics answers and evaluations at IGCSE standard.",
  standards: [
    "Cambridge IGCSE Economics 0455",
    "Paper technique: essays, evaluation",
  ],
  vocabulary: [
    {
      term: "Essay question",
      definition: "Extended question requiring structured argument.",
    },
    { term: "Thesis", definition: "The main argument or position taken." },
    {
      term: "Counter-argument",
      definition: "The opposing view addressed in the essay.",
    },
    {
      term: "Judgement",
      definition: "Final position reached after weighing evidence.",
    },
    {
      term: "Chain of reasoning",
      definition: "Logical sequence linking cause to effect.",
    },
  ],
  concepts: [
    {
      id: "cieiec-u4-s2-essay",
      title: "Essay technique",
      skill:
        "Structure extended answers with argument, counter-argument and judgement.",
      lesson: {
        sections: [
          {
            heading: "Essay structure",
            body: "IGCSE Economics extended answers reward: clear thesis → developed points with economic reasoning → counter-argument → judgement. Each point needs a chain: policy/market change → effect on actors → outcome. Avoid description-only answers — always explain WHY.",
          },
          {
            heading: "Evaluation",
            body: "'Discuss' and 'evaluate' demand balance: present the strongest case for AND against, then judge. 'To what extent' asks for a qualified position — 'largely yes, except when...'. A one-sided essay caps at mid-band regardless of knowledge.",
          },
        ],
        keyFormulas: [
          {
            name: "Essay chain",
            statement: "thesis → points + reasoning → counter → judgement",
          },
          {
            name: "Evaluation",
            statement: "both sides + qualified conclusion",
          },
        ],
        workedExample: {
          problem: "Evaluate 'Free trade benefits all countries'.",
          solution:
            "Benefits: specialisation gains, lower prices, efficiency. Costs: job losses in uncompetitive industries, dependency. Judgement: benefits are real but unevenly distributed — gains depend on adjustment policies.",
        },
      },
      questions: [
        {
          id: "cieiec-u4-es-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'chain of reasoning' in economics?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A list of definitions" },
              { id: "b", text: "Logical sequence linking cause to effect" },
              { id: "c", text: "A type of graph" },
              { id: "d", text: "A government policy" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Chain of reasoning",
                statement: "Cause→effect logic.",
              },
            ],
            steps: [
              {
                reasoning: "Chains link economic changes step by step.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Logical sequence linking cause to effect",
          },
        },
        {
          id: "cieiec-u4-es-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why a purely descriptive economics answer loses marks on an 'evaluate' question.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Command word",
                statement: "Evaluate demands judgement.",
              },
            ],
            steps: [
              {
                reasoning: "Description states facts without weighing them.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Evaluation requires pros/cons and a supported conclusion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "No weighing or judgement — misses the command word's requirement",
          },
        },
        {
          id: "cieiec-u4-es-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Improve this economics point: 'Inflation is bad.' Make it a proper evaluated point.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Developed point",
                statement: "Mechanism + consequence + nuance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Add mechanism: rising prices erode purchasing power, especially for fixed-income groups.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Add consequence: can trigger wage-price spiral if expectations rise.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Add nuance: moderate inflation can signal a growing economy — context matters.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Mechanism + consequence + nuance — evaluated, not just claimed",
          },
        },
        {
          id: "cieiec-u4-es-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Plan a 10-mark essay answer to 'To what extent do subsidies help farmers?'. Give the paragraph structure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Essay plan",
                statement: "Thesis + developed points + counter + judgement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Intro: thesis — subsidies support farm incomes but create distortions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "P1-P2: benefits — income stability, food security, rural employment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "P3-P4: costs — government spending, overproduction, trade distortion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conclusion: 'largely helpful for food security but costly and distortionary — depends on design'.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Thesis → benefits → costs → qualified judgement",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieiec-u4-essay-notes",
      title: "Essay technique — revision notes",
      summary:
        "Thesis, chains of reasoning, counter-arguments, qualified judgements.",
      sections: [
        {
          heading: "Key skills",
          body: "Every point needs mechanism + consequence; always address the counter-case before judging.",
        },
        {
          heading: "Exam tips",
          body: "Spend 5 minutes planning an essay outline — structure marks outweigh extra content.",
        },
      ],
    },
  ],
};
