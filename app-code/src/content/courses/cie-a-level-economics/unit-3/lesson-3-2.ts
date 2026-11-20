import type { Lesson } from "../../../types.ts";

export const lesson432: Lesson = {
  id: "ciealecon-u3-lesson-3-2",
  code: "3-2",
  title: "Exchange Rates and Balance of Payments",
  goal: "I CAN explain exchange rate determination, effects and balance of payments.",
  standards: ["Cambridge A Level Economics 9708", "Paper 3: exchange rates"],
  
  vocabulary: [
    { term: "Exchange rate", definition: "Price of one currency in terms of another." },
    { term: "Floating exchange rate", definition: "Rate determined by market forces." },
    { term: "Fixed exchange rate", definition: "Rate pegged to another currency/commodity." },
    { term: "Appreciation", definition: "Currency value increases." },
    { term: "Depreciation", definition: "Currency value decreases." },
    { term: "Balance of payments", definition: "Record of all international transactions." },
  ],
  concepts: [
    {
      id: "ciealecon-u3-s2-fx",
      title: "Exchange rates",
      skill: "Analyse exchange rate effects.",
      lesson: {
        sections: [
          {
            heading: "Exchange rate systems",
            body: "Floating: determined by demand/supply. Fixed: pegged, requires reserves to maintain. Managed float: central bank intervenes occasionally.",
          },
          {
            heading: "Effects",
            body: "Appreciation: exports expensive, imports cheap → trade deficit risk. Depreciation: exports cheap, imports expensive → trade surplus possible but inflation risk.",
          },
          {
            heading: "Balance of payments",
            body: "Current account: trade in goods/services + income transfers. Capital account: investment flows. Overall balance must equal zero.",
          },
        ],
        keyFormulas: [
          { name: "Exchange rate", statement: "currency price" },
          { name: "Appreciation", statement: "currency strengthens" },
          { name: "Balance of payments", statement: "international transactions" },
        ],
        workedExample: {
          problem: "Currency depreciates 20%. Effect on exports and inflation?",
          solution: "Exports cheaper → more competitive, exports↑. Imports expensive → import costs↑ → inflationary pressure.",
        },
      },
      questions: [
        {
          id: "ciealecon-u3-fx-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a floating exchange rate?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Rate determined by market forces"
                    },
                    {
                              "id": "b",
                              "text": "Fixed rate"
                    },
                    {
                              "id": "c",
                              "text": "Pegged rate"
                    },
                    {
                              "id": "d",
                              "text": "Government-set rate"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Floating rate",
                              "statement": "Market determined."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Floating = market forces determine.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Market determined"
},
        },
        {
          id: "ciealecon-u3-fx-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between appreciation and depreciation?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Appreciation vs depreciation",
                              "statement": "Currency movement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Appreciation: currency value increases.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Depreciation: currency value decreases.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Up vs down currency"
},
        },
        {
          id: "ciealecon-u3-fx-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are the components of the balance of payments?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Balance of payments",
                              "statement": "Components."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Current account: trade, income.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Capital account: investment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Overall must balance.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Current + capital accounts"
},
        },
        {
          id: "ciealecon-u3-fx-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define exchange rate, floating, fixed, appreciation, depreciation, balance of payments. (b) What is exchange rate? (c) What is floating vs fixed? (d) What is appreciation? (e) What is depreciation? (f) What are BOP components? (g) How does depreciation affect exports? (h) Evaluate whether countries should fix or float exchange rates.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Exchange rates",
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
                              "reasoning": "(b) Currency price.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Market vs pegged.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Currency strengthens.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Currency weakens.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Current + capital.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Cheaper exports.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Exchange rates and BOP."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealecon-u3-fx-notes",
      title: "Exchange rates — notes",
      summary: "Floating vs fixed rates. Appreciation/depreciation affect trade competitiveness.",
      sections: [
        { heading: "Key idea", body: "Exchange rates significantly impact international competitiveness." },
        { heading: "BOP", body: "Current account (trade) vs capital account (investment) must balance." },
      ],
    },
  ],
};
