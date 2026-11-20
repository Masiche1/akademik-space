import type { Lesson } from "../../../types.ts";

export const lesson291: Lesson = {
  id: "cieiec-u3-lesson-3-1",
  code: "3-1",
  title: "International Trade and Exchange Rates",
  goal: "I CAN explain international trade, exchange rates and their effects.",
  standards: ["Cambridge IGCSE Economics 0455", "Paper 6: international trade"],
  
  vocabulary: [
    { term: "International trade", definition: "Exchange of goods/services between countries." },
    { term: "Exchange rate", definition: "Value of one currency in terms of another." },
    { term: "Appreciation", definition: "Increase in currency value." },
    { term: "Depreciation", definition: "Decrease in currency value." },
    { term: "Balance of payments", definition: "Record of all transactions with other countries." },
    { term: "Trade deficit", definition: "Imports exceed exports." },
  ],
  concepts: [
    {
      id: "cieiec-u3-s1-trade",
      title: "International trade",
      skill: "Understand trade and exchange rates.",
      lesson: {
        sections: [
          {
            heading: "International trade",
            body: "Countries specialise and trade based on comparative advantage. Benefits: access to more goods, economies of scale, competition. Risks: dependency, exchange rate volatility.",
          },
          {
            heading: "Exchange rates",
            body: "Currency value affects trade. Appreciation: exports more expensive, imports cheaper — may reduce exports. Depreciation: exports cheaper, imports expensive — may boost exports.",
          },
          {
            heading: "Balance of payments",
            body: "Current account: trade in goods/services. Capital account: investments. Overall balance shows whether country is net lender or borrower.",
          },
        ],
        keyFormulas: [
          { name: "Exchange rate", statement: "currency value" },
          { name: "Appreciation", statement: "currency value↑" },
          { name: "Depreciation", statement: "currency value↓" },
        ],
        workedExample: {
          problem: "A country's currency depreciates. How does this affect exports and imports?",
          solution: "Exports become cheaper for foreign buyers → exports increase. Imports become more expensive → imports decrease.",
        },
      },
      questions: [
        {
          id: "cieiec-u3-tr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is international trade?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Exchange of goods/services between countries"
                    },
                    {
                              "id": "b",
                              "text": "Domestic trade"
                    },
                    {
                              "id": "c",
                              "text": "A type of tax"
                    },
                    {
                              "id": "d",
                              "text": "A market structure"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "International trade",
                              "statement": "Cross-border exchange."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Trade between countries.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Cross-border exchange"
},
        },
        {
          id: "cieiec-u3-tr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an exchange rate?",
          response: {
          "type": "open"
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
                              "reasoning": "Value of one currency in another.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Determines import/export prices.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Currency value"
},
        },
        {
          id: "cieiec-u3-tr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does currency depreciation affect exports?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Depreciation",
                              "statement": "Export impact."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Exports become cheaper for foreign buyers.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Exports increase.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Imports become more expensive.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Cheaper exports → increase"
},
        },
        {
          id: "cieiec-u3-tr-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define international trade, exchange rate, appreciation, depreciation, balance of payments, trade deficit. (b) What is international trade? (c) What is an exchange rate? (d) What is depreciation? (e) How does depreciation affect exports? (f) How does appreciation affect exports? (g) What is the balance of payments? (h) Evaluate benefits and risks of international trade.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "International trade",
                              "statement": "Trade, exchange rates."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Cross-border exchange.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Currency value.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Currency value decrease.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Cheaper exports → increase.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) More expensive exports → decrease.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Record of international transactions.",
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
      id: "cieiec-u3-tr-notes",
      title: "International trade — notes",
      summary: "Trade based on comparative advantage. Exchange rates affect export/import competitiveness.",
      sections: [
        { heading: "Key idea", body: "Exchange rate changes have significant impact on trade balances." },
        { heading: "Balance of payments", body: "Records all international transactions — trade, investment, transfers." },
      ],
    },
  ],
};
