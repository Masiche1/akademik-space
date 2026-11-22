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
                              "text": "Pegged rate"
                    },
                    {
                              "id": "c",
                              "text": "Fixed rate"
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
        {
          id: "ciealecon-u3-fx-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Under a fixed exchange rate system, the central bank must:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Hold foreign currency reserves to defend the peg"
                    },
                    {
                              "id": "b",
                              "text": "Allow the rate to float freely"
                    },
                    {
                              "id": "c",
                              "text": "Impose tariffs on all imports"
                    },
                    {
                              "id": "d",
                              "text": "Abolish its own currency"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Fixed rate",
                              "statement": "Reserves defend the peg."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fixed rates require reserves and intervention to maintain the peg.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Hold reserves to defend the peg"
},
        },
        {
          id: "ciealecon-u3-fx-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The exchange rate is 1.25 domestic currency units per unit of foreign currency. Calculate the domestic currency cost of an imported good priced at 80 units of foreign currency.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 100
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Exchange rate conversion",
                              "statement": "Domestic price = foreign price x exchange rate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "80 x 1.25 = 100 domestic units.",
                              "working": "80 x 1.25 = 100",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "100 domestic units"
},
        },
        {
          id: "ciealecon-u3-fx-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is meant by a 'managed float' exchange rate system?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Managed float",
                              "statement": "Market rate with occasional intervention."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rate mainly determined by market demand and supply.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Central bank intervenes occasionally to smooth volatility or steer the rate.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Market-determined rate with occasional central bank intervention"
},
        },
        {
          id: "ciealecon-u3-fx-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A domestic currency depreciates by 20% against the dollar. If an imported US good previously cost 100 units of domestic currency, calculate its new domestic currency cost.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 120
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Depreciation effect",
                              "statement": "Import prices rise in proportion to depreciation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "20% depreciation → import price rises by 20%.",
                              "working": "100 x 1.2 = 120",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "New cost = 120 domestic units.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "120 domestic units"
},
        },
        {
          id: "ciealecon-u3-fx-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which item is recorded in the current account of the balance of payments?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Purchase of foreign shares by residents"
                    },
                    {
                              "id": "b",
                              "text": "Central bank foreign exchange reserves"
                    },
                    {
                              "id": "c",
                              "text": "Repayment of foreign loans"
                    },
                    {
                              "id": "d",
                              "text": "Exports of goods and services"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Current account",
                              "statement": "Trade in goods/services and income transfers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Exports of goods and services are part of the current account.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Exports of goods and services"
},
        },
        {
          id: "ciealecon-u3-fx-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a depreciation of the exchange rate can affect a country's inflation rate and current account.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Depreciation effects",
                              "statement": "Competitiveness vs imported inflation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Imports become more expensive in domestic currency → cost-push inflation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Exports become cheaper abroad → export volumes and earnings may rise → current account improves.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Effects may be limited by the J-curve and weak pass-through of prices.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Depreciation raises import costs (inflation) but can improve the current account via cheaper exports."
},
        },
        {
          id: "ciealecon-u3-fx-q11",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether a government should fix or float its exchange rate.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Fixed vs floating",
                              "statement": "Certainty vs automatic adjustment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fixed advantages: certainty for trade/investment, discipline on inflation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Fixed disadvantages: reserve drain, imported inflation, loss of monetary autonomy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Floating advantages: automatic BOP adjustment, monetary policy independence.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Floating disadvantages: volatility harms trade and investment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Balanced judgement: depends on economy's structure and policy credibility — managed float often preferred.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Neither is universally superior; a managed float balances flexibility and stability."
},
        },
        {
          id: "ciealecon-u3-fx-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A country records export earnings of $100m and import payments of $120m. Calculate the trade balance.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": -20
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Trade balance",
                              "statement": "Exports - imports."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Trade balance = 100 - 120 = -20.",
                              "working": "100 - 120 = -20",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "A deficit of $20m.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "-$20m (deficit)"
},
        },
        {
          id: "ciealecon-u3-fx-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A speculative attack on a fixed exchange rate is most likely when:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The trade balance is zero"
                    },
                    {
                              "id": "b",
                              "text": "Speculators expect the peg to break"
                    },
                    {
                              "id": "c",
                              "text": "Inflation is zero"
                    },
                    {
                              "id": "d",
                              "text": "Foreign reserves are large"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Speculative attack",
                              "statement": "Expectation of devaluation triggers attack."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Speculators attack when they expect the fixed rate to be unsustainable.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "When speculators expect the peg to break"
},
        },
        {
          id: "ciealecon-u3-fx-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A depreciation of the domestic currency is most likely to improve the current account because:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Domestic interest rates necessarily fall"
                    },
                    {
                              "id": "b",
                              "text": "Exports become more expensive abroad"
                    },
                    {
                              "id": "c",
                              "text": "Exports become cheaper abroad and imports dearer at home"
                    },
                    {
                              "id": "d",
                              "text": "Government tax revenue rises"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Depreciation and CA",
                              "statement": "Cheaper exports, dearer imports."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Depreciation improves competitiveness → current account may improve.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Exports cheaper, imports dearer"
},
        },
        {
          id: "ciealecon-u3-fx-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "A country earns $150m from exports and spends $90m on imports of goods and services. Calculate the current account surplus (ignoring income and transfers).",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 60
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Current account",
                              "statement": "Exports - imports + net income/transfers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "150 - 90 = 60 surplus.",
                              "working": "150 - 90 = 60",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Current account surplus of $60m.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$60m surplus"
},
        },
        {
          id: "ciealecon-u3-fx-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Discuss the possible causes of a persistent current account deficit and evaluate the policies available to correct it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Current account deficit",
                              "statement": "Causes and policy responses."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Causes: loss of competitiveness, high import propensity, low saving/investment gap.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Expenditure-reducing policies: higher interest rates, fiscal tightening.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Expenditure-switching policies: depreciation, supply-side improvements.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Evaluation: policies may conflict with other objectives like growth and employment.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Deficits reflect competitiveness and savings gaps; correction policies involve demand management and supply-side reform."
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
