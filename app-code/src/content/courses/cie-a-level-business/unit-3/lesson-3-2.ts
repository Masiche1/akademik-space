import type { Lesson } from "../../../types.ts";

export const lesson392: Lesson = {
  id: "ciealbus-u3-lesson-3-2",
  code: "3-2",
  title: "International Trade and Exchange Rates",
  goal: "I CAN explain international trade, exchange rates and their business impact.",
  standards: ["Cambridge A Level Business 9707", "Paper 4: global business"],
  
  vocabulary: [
    { term: "Exchange rate", definition: "Value of one currency in terms of another." },
    { term: "Appreciation", definition: "Increase in currency value." },
    { term: "Depreciation", definition: "Decrease in currency value." },
    { term: "Balance of trade", definition: "Difference between exports and imports." },
    { term: "Tariff", definition: "Tax on imported goods." },
    { term: "Quota", definition: "Limit on quantity of imports." },
  ],
  concepts: [
    {
      id: "ciealbus-u3-s2-trade",
      title: "International trade",
      skill: "Understand exchange rates and trade barriers.",
      lesson: {
        sections: [
          {
            heading: "Exchange rates",
            body: "Strong currency: exports expensive, imports cheap. Weak currency: exports cheap, imports expensive. Affects competitiveness and profit margins.",
          },
          {
            heading: "Trade barriers",
            body: "Tariffs: taxes on imports protect domestic industry. Quotas: limit import quantities. Non-tariff barriers: regulations, standards. Free trade agreements reduce barriers.",
          },
        ],
        keyFormulas: [
          { name: "Exchange rate", statement: "currency value" },
          { name: "Appreciation", statement: "currency strengthens" },
          { name: "Depreciation", statement: "currency weakens" },
        ],
        workedExample: {
          problem: "A UK exporter sells to US. Pound appreciates 20%. What happens?",
          solution: "Exports become more expensive in dollars — US customers buy less. Exporter's revenue may fall unless prices adjusted.",
        },
      },
      questions: [
        {
          id: "ciealbus-u3-tr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an exchange rate?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Value of one currency in terms of another"
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
                              "text": "A business objective"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Exchange rate",
                              "statement": "Currency value."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Exchange rate = currency value ratio.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Currency value"
},
        },
        {
          id: "ciealbus-u3-tr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a tariff?",
          response: {
          "type": "open"
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
                              "reasoning": "Tax on imported goods.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Protects domestic industry from competition.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Import tax"
},
        },
        {
          id: "ciealbus-u3-tr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does currency depreciation affect a business?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Depreciation",
                              "statement": "Business impact."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Exports become cheaper — more competitive.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Imports become expensive — higher costs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Affects profit margins and competitiveness.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Currency depreciation impact"
},
        },
        {
          id: "ciealbus-u3-tr-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define exchange rate, appreciation, depreciation, balance of trade, tariff, quota. (b) What is an exchange rate? (c) What is depreciation? (d) What is a tariff? (e) How does currency appreciation affect exporters? (f) What is balance of trade? (g) What are trade barriers? (h) Evaluate whether tariffs benefit or harm an economy.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Trade",
                              "statement": "Exchange rates, barriers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Currency value ratio.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Currency weakens.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Import tax.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Exports more expensive.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Exports minus imports.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Tariffs, quotas, regulations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "International trade and exchange rates."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealbus-u3-tr-notes",
      title: "Trade — notes",
      summary: "Exchange rates affect competitiveness. Tariffs/quotas protect domestic industry but may harm economy.",
      sections: [
        { heading: "Key idea", body: "Currency movements and trade barriers significantly impact international business." },
        { heading: "Trade-offs", body: "Protectionism vs free trade — complex economic and political debate." },
      ],
    },
  ],
};
