import type { Lesson } from "../../../types.ts";

export const lesson442: Lesson = {
  id: "ciealecon-u4-lesson-4-2",
  code: "4-2",
  title: "Causes of Underdevelopment",
  goal: "I CAN explain causes of poverty and underdevelopment.",
  standards: ["Cambridge A Level Economics 9708", "Paper 4: causes"],
  
  vocabulary: [
    { term: "Vicious circle of poverty", definition: "Poverty → low savings → low investment → low productivity → poverty." },
    { term: "Malthusian trap", definition: "Population growth outpaces resources." },
    { term: "Colonialism", definition: "Historical exploitation by colonial powers." },
    { term: "Dependency theory", definition: "Developing countries dependent on developed." },
    { term: "Structural adjustment", definition: "IMF/World Bank reform conditions." },
    { term: "Debt trap", definition: "Unable to repay loans, interest compounds." },
  ],
  concepts: [
    {
      id: "ciealecon-u4-s2-cause",
      title: "Causes of underdevelopment",
      skill: "Analyse development barriers.",
      lesson: {
        sections: [
          {
            heading: "Economic causes",
            body: "Low savings → low investment → low productivity → low income. Vicious circle. Limited capital, technology, infrastructure.",
          },
          {
            heading: "Social causes",
            body: "Poor education, health, gender inequality, population growth. Human capital deficiency.",
          },
          {
            heading: "Political/institutional",
            body: "Corruption, weak governance, conflict, colonial legacy. Dependency on primary products.",
          },
        ],
        keyFormulas: [
          { name: "Vicious circle", statement: "poverty cycle" },
          { name: "Dependency", statement: "reliance on developed" },
          { name: "Debt trap", statement: "loan burden" },
        ],
        workedExample: {
          problem: "Why do poor countries stay poor?",
          solution: "Low income → low savings → low investment → low productivity → low income. Vicious circle persists.",
        },
      },
      questions: [
        {
          id: "ciealecon-u4-cause-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the vicious circle of poverty?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Poverty → low savings → low investment → low productivity → poverty"
                    },
                    {
                              "id": "b",
                              "text": "A type of tax"
                    },
                    {
                              "id": "c",
                              "text": "A trade barrier"
                    },
                    {
                              "id": "d",
                              "text": "A business cycle"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Vicious circle",
                              "statement": "Poverty cycle."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Poverty cycle: low income→low savings→low investment→low productivity.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Poverty cycle"
},
        },
        {
          id: "ciealecon-u4-cause-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is dependency theory?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Dependency",
                              "statement": "Developing reliance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Developing countries dependent on developed.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Unequal trade relationships.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Developing reliance"
},
        },
        {
          id: "ciealecon-u4-cause-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are the main causes of underdevelopment?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Underdevelopment",
                              "statement": "Causes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Economic: low savings, investment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Social: poor education/health.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Political: corruption, conflict, colonial legacy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Economic, social, political causes"
},
        },
        {
          id: "ciealecon-u4-cause-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define vicious circle, Malthusian trap, colonialism, dependency theory, structural adjustment, debt trap. (b) What is vicious circle? (c) What is dependency theory? (d) What are economic causes? (e) What are social causes? (f) What are political causes? (g) What is debt trap? (h) Evaluate whether poverty is primarily economic or political.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Underdevelopment",
                              "statement": "Causes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Poverty cycle.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Developing reliance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Low savings, investment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Education, health.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Corruption, conflict.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Loan burden.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Causes of underdevelopment."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealecon-u4-cause-notes",
      title: "Underdevelopment — notes",
      summary: "Vicious circle, dependency, colonialism, corruption → persistent poverty.",
      sections: [
        { heading: "Key idea", body: "Underdevelopment has economic, social, political dimensions." },
        { heading: "Cycle", body: "Low income→low investment→low productivity→low income." },
      ],
    },
  ],
};
