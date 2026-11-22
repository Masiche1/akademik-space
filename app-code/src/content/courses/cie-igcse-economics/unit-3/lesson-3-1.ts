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
                              "text": "A type of tax"
                    },
                    {
                              "id": "b",
                              "text": "A market structure"
                    },
                    {
                              "id": "c",
                              "text": "Domestic trade"
                    },
                    {
                              "id": "d",
                              "text": "Exchange of goods/services between countries"
                    }
          ],
          "correctChoiceId": "d"
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
        {
          id: "cieiec-u3-tr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An exchange rate is best defined as:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A government tax on imports"
                    },
                    {
                              "id": "b",
                              "text": "The value of one currency in terms of another"
                    },
                    {
                              "id": "c",
                              "text": "The price of gold"
                    },
                    {
                              "id": "d",
                              "text": "The total value of a country's exports"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Exchange rate",
                              "statement": "Currency value relative to another."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Exchange rate = value of one currency in terms of another.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Value of one currency in another"
},
        },
        {
          id: "cieiec-u3-tr-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When a country's currency depreciates, its exports generally become:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "More expensive for foreign buyers"
                    },
                    {
                              "id": "b",
                              "text": "Cheaper for foreign buyers"
                    },
                    {
                              "id": "c",
                              "text": "Subject to quotas"
                    },
                    {
                              "id": "d",
                              "text": "Unaffected in price"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Depreciation",
                              "statement": "Currency value falls."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Weaker currency -> exports cheaper abroad.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Cheaper for foreign buyers"
},
        },
        {
          id: "cieiec-u3-tr-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A trade deficit occurs when:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Exports exceed imports"
                    },
                    {
                              "id": "b",
                              "text": "Imports exceed exports"
                    },
                    {
                              "id": "c",
                              "text": "Savings exceed investment"
                    },
                    {
                              "id": "d",
                              "text": "Government spending exceeds tax revenue"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Trade deficit",
                              "statement": "Imports > exports."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Deficit = imports exceed exports.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Imports exceed exports"
},
        },
        {
          id: "cieiec-u3-tr-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Currency appreciation tends to have which effect on a country's exports?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "They are unaffected"
                    },
                    {
                              "id": "b",
                              "text": "They become cheaper for foreign buyers"
                    },
                    {
                              "id": "c",
                              "text": "They rise in quantity automatically"
                    },
                    {
                              "id": "d",
                              "text": "They become more expensive for foreign buyers, reducing export competitiveness"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Appreciation",
                              "statement": "Currency value rises."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Stronger currency -> exports dearer abroad.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Exports become less competitive"
},
        },
        {
          id: "cieiec-u3-tr-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A US dollar previously bought €0.80 and now buys €0.90. How many euros does $100 buy at the new rate?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 90,
                              "unit": "euros"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Exchange rate",
                              "statement": "Currency conversion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "100 x 0.90 = 90.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$100 buys €90.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "€90"
},
        },
        {
          id: "cieiec-u3-tr-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A country records exports of $120 billion and imports of $150 billion. What is the trade balance, defined as exports minus imports, in billions of dollars?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": -30,
                              "unit": "$ billion"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Trade balance",
                              "statement": "Exports minus imports."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "120 - 150 = -30.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Trade deficit of $30 billion.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "-$30 billion (deficit)"
},
        },
        {
          id: "cieiec-u3-tr-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "After its currency depreciates, a country's exports rise from $100 billion to $130 billion. By how much do exports increase, in billions of dollars?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 30,
                              "unit": "$ billion"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Depreciation",
                              "statement": "Currency value falls -> exports cheaper."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "130 - 100 = 30.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Exports increase by $30 billion.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$30 billion"
},
        },
        {
          id: "cieiec-u3-tr-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between appreciation and depreciation of a currency.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Exchange rate changes",
                              "statement": "Appreciation vs depreciation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Appreciation = rise in currency value.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Depreciation = fall in currency value.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Appreciation up; depreciation down"
},
        },
        {
          id: "cieiec-u3-tr-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a depreciation of the exchange rate can help reduce a trade deficit.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Exchange rates",
                              "statement": "Effect on trade balance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Weaker currency makes exports cheaper for foreign buyers.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Imports become more expensive, reducing demand for them.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Exports rise and imports fall -> deficit narrows.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Cheaper exports, dearer imports"
},
        },
        {
          id: "cieiec-u3-tr-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two benefits a country can gain from international trade.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "International trade",
                              "statement": "Benefits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Access to a wider range of goods and services.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Economies of scale and greater competition lower prices.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Allows specialisation based on comparative advantage.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Choice, lower prices, specialisation"
},
        },
        {
          id: "cieiec-u3-tr-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two risks a country faces when it depends heavily on international trade.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "International trade",
                              "statement": "Risks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Vulnerability to exchange rate volatility.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Dependence on foreign markets for essential goods.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Job losses in uncompetitive domestic industries.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Exchange risk and dependency"
},
        },
        {
          id: "cieiec-u3-tr-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether a persistent trade deficit is always harmful for an economy.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Balance of payments",
                              "statement": "Deficit evaluation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Harm: may signal weak competitiveness and rising debt.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Harm: could lead to loss of jobs in import-competing sectors.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Benefit: deficits can reflect strong domestic demand for imports.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Benefit: foreign investment inflows can finance the deficit.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Judgement: context matters — not automatically harmful.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Context-dependent"
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
