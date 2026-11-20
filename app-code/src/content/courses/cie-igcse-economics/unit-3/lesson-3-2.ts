import type { Lesson } from "../../../types.ts";

export const lesson292: Lesson = {
  id: "cieiec-u3-lesson-3-2",
  code: "3-2",
  title: "Protectionism and Free Trade",
  goal: "I CAN explain protectionist policies and evaluate free trade vs protectionism.",
  standards: ["Cambridge IGCSE Economics 0455", "Paper 6: trade policy"],
  
  vocabulary: [
    { term: "Protectionism", definition: "Government policies restricting free trade." },
    { term: "Tariff", definition: "Tax on imported goods." },
    { term: "Quota", definition: "Limit on quantity of imports." },
    { term: "Subsidy", definition: "Government support to domestic producers." },
    { term: "Free trade", definition: "Trade without government restrictions." },
    { term: "Trade bloc", definition: "Group of countries with trade agreements." },
  ],
  concepts: [
    {
      id: "cieiec-u3-s2-prot",
      title: "Protectionism",
      skill: "Understand trade policies and their effects.",
      lesson: {
        sections: [
          {
            heading: "Protectionist measures",
            body: "Tariffs: tax on imports — raises price, protects domestic industry. Quotas: limit import quantity. Subsidies: support domestic producers. Non-tariff barriers: regulations, standards.",
          },
          {
            heading: "Arguments for/against",
            body: "For: protect infant industries, save jobs, national security. Against: higher prices, reduced efficiency, trade wars, consumer harm.",
          },
        ],
        keyFormulas: [
          { name: "Tariff", statement: "tax on imports" },
          { name: "Quota", statement: "import limit" },
          { name: "Free trade", statement: "no restrictions" },
        ],
        workedExample: {
          problem: "A country imposes a tariff on imported cars. What are the effects?",
          solution: "Domestic car prices rise, domestic producers benefit, consumers pay more, government gains tariff revenue.",
        },
      },
      questions: [
        {
          id: "cieiec-u3-pt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a tariff?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Tax on imported goods"
                    },
                    {
                              "id": "b",
                              "text": "Import limit"
                    },
                    {
                              "id": "c",
                              "text": "Government subsidy"
                    },
                    {
                              "id": "d",
                              "text": "Trade agreement"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Tariff",
                              "statement": "Import tax."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tariff = tax on imported goods.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Tax on imports"
},
        },
        {
          id: "cieiec-u3-pt-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is protectionism?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Protectionism",
                              "statement": "Trade restrictions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Government policies restricting free trade.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Includes tariffs, quotas, subsidies.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Trade restrictions"
},
        },
        {
          id: "cieiec-u3-pt-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the difference between a tariff and a quota?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Trade policies",
                              "statement": "Tariff vs quota."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tariff = tax on imports (price effect).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Quota = quantity limit (quantity effect).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both protect domestic industry.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Price vs quantity restriction"
},
        },
        {
          id: "cieiec-u3-pt-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define protectionism, tariff, quota, subsidy, free trade, trade bloc. (b) What is protectionism? (c) What is a tariff? (d) What is a quota? (e) What are arguments for protectionism? (f) What are arguments against protectionism? (g) What is free trade? (h) Evaluate whether countries should use protectionist policies.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Protectionism",
                              "statement": "Policies, evaluation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Trade restrictions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Import tax.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Import quantity limit.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Protect jobs, infant industries, security.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Higher prices, inefficiency, trade wars.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Trade without restrictions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Protectionism and free trade."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieiec-u3-pt-notes",
      title: "Protectionism — notes",
      summary: "Tariffs=tax, quotas=limits, subsidies=support. Protectionism protects domestic but raises prices/reduces efficiency.",
      sections: [
        { heading: "Key idea", body: "Trade policy involves balancing protection vs free trade benefits." },
        { heading: "Trade blocs", body: "Groups like EU, USMCA reduce barriers between members." },
      ],
    },
  ],
};
