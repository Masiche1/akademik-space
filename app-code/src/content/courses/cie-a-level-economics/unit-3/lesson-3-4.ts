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
                              "text": "A subsidy"
                    },
                    {
                              "id": "b",
                              "text": "Tax on imported goods"
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
          "correctChoiceId": "b"
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
        {
          id: "ciealecon-u3-pr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A quota differs from a tariff in that a quota:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Is a tax levied on imported goods"
                    },
                    {
                              "id": "b",
                              "text": "Subsidises domestic producers"
                    },
                    {
                              "id": "c",
                              "text": "Bans all trade with a country"
                    },
                    {
                              "id": "d",
                              "text": "Directly limits the physical quantity of imports"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Quota",
                              "statement": "Quantity limit on imports."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Quotas restrict quantities directly; tariffs restrict via price.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Limits the quantity of imports"
},
        },
        {
          id: "ciealecon-u3-pr-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The world price of an imported good is $20. A tariff of $5 per unit is imposed. Calculate the new domestic price of the good.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 25
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Tariff effect",
                              "statement": "Domestic price = world price + tariff."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "20 + 5 = 25.",
                              "working": "20 + 5 = 25",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$25"
},
        },
        {
          id: "ciealecon-u3-pr-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is an embargo?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Embargo",
                              "statement": "Complete trade ban."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A complete prohibition on trade with a particular country.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Used for political, security or economic punishment — the most extreme form of protection.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "A complete ban on trade with a country"
},
        },
        {
          id: "ciealecon-u3-pr-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A subsidy to domestic producers is economically similar to a tariff in that both:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Increase the quantity of imports"
                    },
                    {
                              "id": "b",
                              "text": "Generate government revenue"
                    },
                    {
                              "id": "c",
                              "text": "Protect domestic industry from cheaper imports"
                    },
                    {
                              "id": "d",
                              "text": "Lower the domestic price of the good"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Tariff vs subsidy",
                              "statement": "Both protect domestic producers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Subsidies lower domestic costs; tariffs raise import prices — both protect domestic industry.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Both protect domestic industry"
},
        },
        {
          id: "ciealecon-u3-pr-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A tariff of $10 per unit is applied to imports of 5,000 units. Calculate total tariff revenue.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 50000
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Tariff revenue",
                              "statement": "Tariff per unit x quantity imported."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "10 x 5,000 = 50,000.",
                              "working": "10 x 5000 = 50000",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Revenue = $50,000.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$50,000"
},
        },
        {
          id: "ciealecon-u3-pr-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a tariff creates deadweight loss.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Tariff DWL",
                              "statement": "Consumption loss + production inefficiency."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Higher domestic price reduces consumption below the free-trade level.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Domestic production expands to higher-cost firms that couldn't compete at world prices.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "The gap between consumer benefit and production cost creates a net welfare loss.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Tariffs create deadweight loss via reduced consumption and inefficient domestic production."
},
        },
        {
          id: "ciealecon-u3-pr-q11",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the 'infant industry' argument for protection.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Infant industry",
                              "statement": "Temporary protection to build competitiveness."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Argument: new industries need protection until they achieve economies of scale and competitiveness.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Justification: temporary and targeted support may be justified for strategic industries.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Difficulties: governments struggle to pick winners; protection often becomes permanent.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Costs: higher consumer prices, retaliation by trading partners.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Balanced judgement: theoretically plausible but practically hard to implement well.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Infant industry protection is theoretically justified but practically difficult and often abused."
},
        },
        {
          id: "ciealecon-u3-pr-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Dumping' refers to:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Exporting more than the quota allows"
                    },
                    {
                              "id": "b",
                              "text": "Selling exports below cost or below the domestic price"
                    },
                    {
                              "id": "c",
                              "text": "Smuggling goods across borders"
                    },
                    {
                              "id": "d",
                              "text": "Fixing prices with foreign rivals"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Dumping",
                              "statement": "Below-cost export sales."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Dumping = selling exports below cost or below domestic price.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Selling exports below cost"
},
        },
        {
          id: "ciealecon-u3-pr-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "With free trade, consumers buy 2,000 units of a good at $10 each. After a tariff is imposed, the price rises to $14 and the quantity falls to 1,500 units. Calculate the change in total consumer expenditure on the good.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 1000
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Consumer expenditure",
                              "statement": "Price x quantity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Before: 2000 x 10 = 20,000. After: 1500 x 14 = 21,000.",
                              "working": "21000 - 20000 = 1000",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Expenditure rises by $1,000 despite lower quantity.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$1,000 increase"
},
        },
        {
          id: "ciealecon-u3-pr-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between a tariff and a voluntary export restraint (VER).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Tariff vs VER",
                              "statement": "Importer vs exporter restriction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tariff: tax on imports imposed by the importing government — raises price.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "VER: exporting country voluntarily limits quantity shipped — restricts supply.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both protect domestic industry but differ in who imposes them and where revenue/windfall gains accrue.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Tariff = importer tax on imports; VER = exporter-imposed quantity limit."
},
        },
        {
          id: "ciealecon-u3-pr-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Protectionist measures are most likely to provoke:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Retaliatory trade restrictions by trading partners"
                    },
                    {
                              "id": "b",
                              "text": "Increased export earnings"
                    },
                    {
                              "id": "c",
                              "text": "Appreciation of the domestic currency"
                    },
                    {
                              "id": "d",
                              "text": "Lower world prices for the protected good"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Retaliation",
                              "statement": "Protection invites counter-measures."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Trading partners typically retaliate → trade war risk.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Retaliatory restrictions"
},
        },
        {
          id: "ciealecon-u3-pr-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Discuss whether protectionism can benefit an economy in the long run.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Long-run protectionism",
                              "statement": "Temporary shield vs permanent cost."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Short-term: protects jobs and allows infant industries to develop.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Long-term costs: inefficiency, higher prices, reduced competition and innovation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Exceptions may exist for strategic industries or national security.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Overall: protection is justified only if temporary and targeted; long-run protection usually harms welfare.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Protection can help temporarily but long-run protection generally reduces welfare."
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
