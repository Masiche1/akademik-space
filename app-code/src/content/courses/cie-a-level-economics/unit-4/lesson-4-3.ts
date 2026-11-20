import type { Lesson } from "../../../types.ts";

export const lesson443: Lesson = {
  id: "ciealecon-u4-lesson-4-3",
  code: "4-3",
  title: "Development Policies",
  goal: "I CAN explain development strategies and aid effectiveness.",
  standards: ["Cambridge A Level Economics 9708", "Paper 4: development policy"],
  
  vocabulary: [
    { term: "ODA", definition: "Official Development Assistance." },
    { term: "Remittances", definition: "Money sent by migrants to home country." },
    { term: "Microfinance", definition: "Small loans to poor entrepreneurs." },
    { term: "Fair trade", definition: "Trading ensuring fair prices for producers." },
    { term: "Capacity building", definition: "Developing skills/institutions." },
    { term: "Conditionality", definition: "IMF/World Bank loan conditions." },
  ],
  concepts: [
    {
      id: "ciealecon-u4-s3-pol",
      title: "Development policies",
      skill: "Evaluate development strategies.",
      lesson: {
        sections: [
          {
            heading: "Aid types",
            body: "ODA: government aid. Private investment: FDI. Remittances: migrant money. Trade: market access. Each has benefits/limitations.",
          },
          {
            heading: "Microfinance",
            body: "Small loans to poor — Yunus Nobel Prize. Empowers entrepreneurship but may not reach poorest or create sustainable businesses.",
          },
          {
            heading: "Fair trade",
            body: "Ensures minimum prices, premiums for development. Limited reach but improves producer incomes.",
          },
        ],
        keyFormulas: [
          { name: "ODA", statement: "official aid" },
          { name: "Remittances", statement: "migrant money" },
          { name: "Microfinance", statement: "small loans" },
        ],
        workedExample: {
          problem: "Does aid help development? Evaluate.",
          solution: "Can fund infrastructure/education but may create dependency, corruption, misallocation. Effectiveness depends on governance and design.",
        },
      },
      questions: [
        {
          id: "ciealecon-u4-pol-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is microfinance?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Small loans to poor entrepreneurs"
                    },
                    {
                              "id": "b",
                              "text": "Government aid"
                    },
                    {
                              "id": "c",
                              "text": "Large infrastructure projects"
                    },
                    {
                              "id": "d",
                              "text": "Trade agreements"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Microfinance",
                              "statement": "Small loans."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Microfinance = small loans to poor.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Small loans"
},
        },
        {
          id: "ciealecon-u4-pol-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are remittances?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Remittances",
                              "statement": "Migrant money."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Money sent by migrants to home country.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Significant income source for many countries.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Migrant money"
},
        },
        {
          id: "ciealecon-u4-pol-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are the benefits and limitations of aid?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Aid",
                              "statement": "Benefits vs limits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Benefits: infrastructure, education, emergency relief.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Limitations: dependency, corruption, misallocation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Effectiveness depends on governance.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Benefits vs limitations"
},
        },
        {
          id: "ciealecon-u4-pol-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define ODA, remittances, microfinance, fair trade, capacity building, conditionality. (b) What is ODA? (c) What is microfinance? (d) What are remittances? (e) What are benefits of aid? (f) What are limitations? (g) What is fair trade? (h) Evaluate whether aid helps or hinders development.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Development policy",
                              "statement": "Evaluation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Official aid.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Small loans.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Migrant money.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Infrastructure, education.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Dependency, corruption.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Fair producer prices.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Development policies."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealecon-u4-pol-notes",
      title: "Development policy — notes",
      summary: "ODA, remittances, microfinance, fair trade. Aid effectiveness depends on governance.",
      sections: [
        { heading: "Key idea", body: "Multiple approaches to development — effectiveness varies by context." },
        { heading: "Conditionality", body: "IMF/World Bank loans require reforms — controversial." },
      ],
    },
  ],
};
