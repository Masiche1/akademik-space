import type { Lesson } from "../../../types.ts";

export const lesson401: Lesson = {
  id: "ciealbus-u4-lesson-4-1",
  code: "4-1",
  title: "Protectionism and Trade Policy",
  goal: "I CAN explain protectionist measures and their effects.",
  standards: ["Cambridge A Level Business 9707", "Paper 4: trade policy"],
  
  vocabulary: [
    { term: "Protectionism", definition: "Policies protecting domestic industry from foreign competition." },
    { term: "Tariff", definition: "Tax on imported goods." },
    { term: "Quota", definition: "Limit on import quantities." },
    { term: "Subsidy", definition: "Government financial support to domestic industry." },
    { term: "Embargo", definition: "Complete ban on trade with a country." },
    { term: "Free trade", definition: "Unrestricted trade between countries." },
  ],
  concepts: [
    {
      id: "ciealbus-u4-s1-prot",
      title: "Protectionism",
      skill: "Analyse trade protection measures.",
      lesson: {
        sections: [
          {
            heading: "Protectionist measures",
            body: "Tariffs make imports expensive. Quotas limit quantities. Subsidies give domestic firms cost advantage. Embargoes ban trade entirely. All protect domestic industry but may invite retaliation.",
          },
          {
            heading: "Arguments for protectionism",
            body: "Protect jobs, infant industries, national security, unfair competition. Against: higher prices, reduced efficiency, trade wars, consumer harm.",
          },
        ],
        keyFormulas: [
          { name: "Protectionism", statement: "protect domestic industry" },
          { name: "Tariff", statement: "import tax" },
          { name: "Quota", statement: "import limit" },
        ],
        workedExample: {
          problem: "Why might a government impose tariffs on steel imports?",
          solution: "Protect domestic steel industry from cheaper foreign competition, preserve jobs, national security. But raises costs for steel users and invites retaliation.",
        },
      },
      questions: [
        {
          id: "ciealbus-u4-pr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is protectionism?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Policies protecting domestic industry"
                    },
                    {
                              "id": "b",
                              "text": "Free trade"
                    },
                    {
                              "id": "c",
                              "text": "A type of tax"
                    },
                    {
                              "id": "d",
                              "text": "A business structure"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Protectionism",
                              "statement": "Domestic protection."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Protectionism = protecting domestic industry.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Domestic protection"
},
        },
        {
          id: "ciealbus-u4-pr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a quota?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Quota",
                              "statement": "Import limit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Limit on quantity of imports.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Directly restricts foreign competition.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Import limit"
},
        },
        {
          id: "ciealbus-u4-pr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are arguments for and against protectionism?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Protectionism",
                              "statement": "Pros vs cons."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "For: protect jobs, infant industries, security.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Against: higher prices, inefficiency, trade wars.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Complex trade-offs.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Pros vs cons"
},
        },
        {
          id: "ciealbus-u4-pr-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define protectionism, tariff, quota, subsidy, embargo, free trade. (b) What is protectionism? (c) What is a tariff? (d) What is a quota? (e) What is a subsidy? (f) What are arguments for protectionism? (g) What are arguments against? (h) Evaluate whether protectionism benefits or harms an economy.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Protectionism",
                              "statement": "Measures, effects."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Domestic protection.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Import tax.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Import limit.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Government support.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Jobs, infant industries, security.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Prices, efficiency, trade wars.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Protectionism analysis."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealbus-u4-pr-notes",
      title: "Protectionism — notes",
      summary: "Tariffs, quotas, subsidies, embargoes protect domestic industry. Trade-offs complex.",
      sections: [
        { heading: "Key idea", body: "Protectionism shields domestic firms but may reduce efficiency and invite retaliation." },
        { heading: "Free trade", body: "Opposite approach — unrestricted trade promotes efficiency but may hurt vulnerable industries." },
      ],
    },
  ],
};
