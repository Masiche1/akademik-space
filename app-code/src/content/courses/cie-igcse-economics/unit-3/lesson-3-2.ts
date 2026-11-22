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
                              "text": "Import limit"
                    },
                    {
                              "id": "b",
                              "text": "Government subsidy"
                    },
                    {
                              "id": "c",
                              "text": "Tax on imported goods"
                    },
                    {
                              "id": "d",
                              "text": "Trade agreement"
                    }
          ],
          "correctChoiceId": "c"
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
        {
          id: "cieiec-u3-pt-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A tariff is best defined as:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A free trade agreement"
                    },
                    {
                              "id": "b",
                              "text": "A limit on the quantity of imports"
                    },
                    {
                              "id": "c",
                              "text": "A payment to domestic producers"
                    },
                    {
                              "id": "d",
                              "text": "A tax on imported goods"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Tariff",
                              "statement": "Tax on imports."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tariff = tax on imported goods.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Tax on imported goods"
},
        },
        {
          id: "cieiec-u3-pt-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A quota is a government policy that:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Bans all exports"
                    },
                    {
                              "id": "b",
                              "text": "Limits the physical quantity of imports allowed"
                    },
                    {
                              "id": "c",
                              "text": "Taxes each imported unit"
                    },
                    {
                              "id": "d",
                              "text": "Subsidises domestic firms"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Quota",
                              "statement": "Import quantity limit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Quota = quantitative limit on imports.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Limits quantity of imports"
},
        },
        {
          id: "cieiec-u3-pt-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is an argument in favour of protectionism?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "To eliminate all trade"
                    },
                    {
                              "id": "b",
                              "text": "To guarantee lower prices for all consumers"
                    },
                    {
                              "id": "c",
                              "text": "To protect infant industries while they develop"
                    },
                    {
                              "id": "d",
                              "text": "To maximise allocative efficiency"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Protectionism",
                              "statement": "Arguments for."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Infant industry argument is a classic case for protection.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Protect infant industries"
},
        },
        {
          id: "cieiec-u3-pt-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A likely short-run effect of imposing a tariff on imported cars is:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Higher prices for cars in the domestic market"
                    },
                    {
                              "id": "b",
                              "text": "Lower prices for cars in the domestic market"
                    },
                    {
                              "id": "c",
                              "text": "A fall in domestic car production"
                    },
                    {
                              "id": "d",
                              "text": "No change in domestic prices"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Tariff",
                              "statement": "Effect on prices."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tariff raises import prices -> domestic prices rise.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Higher domestic prices"
},
        },
        {
          id: "cieiec-u3-pt-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A government imposes a tariff of $2 per unit on 50,000 imported units. What is the total tariff revenue collected?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 100000,
                              "unit": "$"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Tariff",
                              "statement": "Revenue = tariff x quantity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Revenue = 2 x 50000 = 100000.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Total tariff revenue = $100,000.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$100,000"
},
        },
        {
          id: "cieiec-u3-pt-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Free-trade imports of a product would be 25,000 units, but a quota limits imports to 10,000 units. By how many units does the quota reduce imports?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 15000,
                              "unit": "units"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Quota",
                              "statement": "Import quantity limit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "25000 - 10000 = 15000.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Imports reduced by 15,000 units.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "15,000 units"
},
        },
        {
          id: "cieiec-u3-pt-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A government pays a subsidy of $3 per unit on 4,000 units of domestic output. What is the total subsidy cost?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 12000,
                              "unit": "$"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Subsidy",
                              "statement": "Payment per unit to producers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "3 x 4000 = 12000.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$12,000"
},
        },
        {
          id: "cieiec-u3-pt-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between a tariff and a quota as methods of protectionism.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Tariff vs quota",
                              "statement": "Price vs quantity restriction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tariff = tax on imports, raises price.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Quota = limit on import quantity, sets maximum amount.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Tariff=price; quota=quantity"
},
        },
        {
          id: "cieiec-u3-pt-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two arguments in favour of protectionism.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Protectionism",
                              "statement": "Arguments for."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Protect infant industries until they can compete.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Save domestic jobs in import-competing industries.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "National security / strategic industries argument.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Infant industries, jobs, security"
},
        },
        {
          id: "cieiec-u3-pt-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two reasons why protectionism can harm consumers.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Protectionism",
                              "statement": "Consumer costs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tariffs/quota raise prices of imported and domestic goods.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Reduced competition lowers quality and choice.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "May provoke retaliatory tariffs -> trade war.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Higher prices, less choice, trade wars"
},
        },
        {
          id: "cieiec-u3-pt-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is a trade bloc? Give an example and explain one effect of belonging to it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Trade bloc",
                              "statement": "Group with trade agreements."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Group of countries with trade agreements reducing barriers.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Example: EU, USMCA, ASEAN.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Effect: increased trade between members, possible trade diversion from outsiders.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Trade agreement group; e.g. EU"
},
        },
        {
          id: "cieiec-u3-pt-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether a developing economy should use protectionist policies.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Protectionism",
                              "statement": "Development context."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "For: infant industry protection, job creation, food security.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "For: reduces dependence on volatile import prices.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Against: higher prices, inefficiency, retaliation, less FDI.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Temporary/narrow protection may be more defensible than blanket.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Judgement: selective short-term use, not permanent.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Selective use only"
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
