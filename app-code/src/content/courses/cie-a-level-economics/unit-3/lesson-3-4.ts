import type { Lesson } from "../../../types.ts";

export const lesson434: Lesson = {
  id: "ciealecon-u3-lesson-3-4",
  code: "3-4",
  title: "Protectionism and Trade Policy",
  goal: "I CAN evaluate protectionist measures and their economic effects.",
  standards: ["Cambridge A Level Economics 9708", "Paper 3: protectionism"],
  
  vocabulary: [
    { term: "Tariff", definition: "Tax on imported goods." },
    { term: "Quota", definition: "Limit on import quantity." },
    { term: "Subsidy", definition: "Government payment to domestic producers." },
    { term: "Embargo", definition: "Complete trade ban." },
    { term: "Voluntary export restraint", definition: "Exporter limits shipments." },
    { term: "Trade war", definition: "Retaliatory trade restrictions." },
  ],
  concepts: [
    {
      id: "ciealecon-u3-s4-prot",
      title: "Protectionism",
      skill: "Evaluate protectionist policies.",
      lesson: {
        sections: [
          {
            heading: "Protectionist measures",
            body: "Tariffs: raise import prices. Quotas: limit quantities. Subsidies: lower domestic costs. Embargoes: complete ban. All reduce competition.",
          },
          {
            heading: "Arguments for",
            body: "Protect jobs, infant industries, national security, unfair competition (dumping). Against: higher prices, inefficiency, retaliation, consumer harm.",
          },
        ],
        keyFormulas: [
          { name: "Tariff", statement: "import tax" },
          { name: "Quota", statement: "import limit" },
          { name: "Subsidy", statement: "producer support" },
        ],
        workedExample: {
          problem: "Why might a government impose tariffs on steel imports?",
          solution: "Protect domestic steel industry, preserve jobs, national security. But raises costs for users and invites retaliation.",
        },
      },
      questions: [
        {
          id: "ciealecon-u3-pr-q1",
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
                              "text": "A subsidy"
                    },
                    {
                              "id": "c",
                              "text": "A quota"
                    },
                    {
                              "id": "d",
                              "text": "A trade agreement"
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
                              "reasoning": "Tariff = tax on imports.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Import tax"
},
        },
        {
          id: "ciealecon-u3-pr-q2",
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
                              "reasoning": "Limit on import quantity.",
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
          id: "ciealecon-u3-pr-q3",
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
                              "reasoning": "For: jobs, infant industries, security.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Against: prices, inefficiency, trade wars.",
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
          id: "ciealecon-u3-pr-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define tariff, quota, subsidy, embargo, VER, trade war. (b) What is a tariff? (c) What is a quota? (d) What is a subsidy? (e) What are arguments for protectionism? (f) What are arguments against? (g) What is a trade war? (h) Evaluate whether protectionism benefits or harms an economy.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Protectionism",
                              "statement": "Analysis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Import tax.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Import limit.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Producer support.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Jobs, industries, security.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Prices, efficiency, retaliation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Retaliatory restrictions.",
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
      id: "ciealecon-u3-pr-notes",
      title: "Protectionism — notes",
      summary: "Tariffs, quotas, subsidies protect domestic industry. Trade-offs complex.",
      sections: [
        { heading: "Key idea", body: "Protectionism shields domestic firms but may reduce efficiency and invite retaliation." },
        { heading: "Trade war", body: "Retaliation can escalate — all parties lose." },
      ],
    },
  ],
};
