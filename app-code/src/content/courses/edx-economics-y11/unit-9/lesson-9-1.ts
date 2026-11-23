import type { Lesson } from "../../../types.ts";

export const lesson91: Lesson = {
  id: "ecn11-u9-lesson-9-1",
  code: "9-1",
  title: "Business Finance",
  goal: "I CAN distinguish sources of finance and explain cash flow and profit.",
  standards: ["Edexcel IGCSE Economics 4EC1 — Paper 1: Investigating small businesses"],
  
  vocabulary: [
    { term: "Sources of finance", definition: "The ways a business raises money: internal (retained profit) and external (loans, shares, overdrafts)." },
    { term: "Retained profit", definition: "Profit kept back by the business instead of paid out to owners." },
    { term: "Loan", definition: "Money borrowed that must be repaid with interest over an agreed period." },
    { term: "Share capital", definition: "Money raised by selling shares in a company to shareholders." },
    { term: "Overdraft", definition: "A short-term bank facility allowing a business to spend more than it has in its account." },
    { term: "Cash flow", definition: "The movement of cash into and out of a business over a period." },
    { term: "Profit", definition: "Total revenue minus total cost — the reward for enterprise." },
  ],
  concepts: [
    {
      id: "ecn11-u9-sources",
      title: "Sources of Finance",
      skill: "Distinguish internal and external sources of finance and match them to business needs.",
      lesson: {
        sections: [
          {
            heading: "Internal and external sources",
            body: "**Internal sources** come from inside the business: **retained profit** (most common — free of interest but limited by past profits) and **selling assets**. **External sources**: **owner's capital** (sole traders/partnerships), **bank loans** (repayable with interest, suits long-term needs), **overdrafts** (short-term, flexible, for cash-flow gaps), **share capital** (companies — permanent but gives away ownership), **hire purchase/leasing** (spreading asset costs), **trade credit** (buy now, pay suppliers later).",
          },
          {
            heading: "Choosing finance",
            body: "The right source depends on **amount needed**, **time period**, **cost** and **risk**. Long-term expansion suits loans or share capital; short-term gaps suit overdrafts or trade credit. Loans must be repaid even if profits fall; share capital never has to be repaid but dilutes control.",
          },
        ],
        keyFormulas: [
          { name: "Profit", statement: "total revenue − total cost" },
        ],
        workedExample: {
          problem: "A café needs £5,000 to buy a new oven (lasting 5 years) but also faces a £500 seasonal cash gap. Suggest finance for each need.",
          solution: "Oven: bank loan or hire purchase — long-term asset, spread cost. Cash gap: overdraft — short-term, flexible, only for the temporary shortfall.",
        },
      },
      questions: [
        {
          id: "ecn11-u9-sources-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which of the following is an internal source of finance?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Bank loan"
                    },
                    {
                              "id": "b",
                              "text": "Retained profit"
                    },
                    {
                              "id": "c",
                              "text": "Share issue"
                    },
                    {
                              "id": "d",
                              "text": "Overdraft"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Internal finance",
                              "statement": "Money from inside the business, e.g. retained profit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Retained profit comes from the business itself — internal source.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Retained profit",
          "commonErrors": [
                    "Confusing internal with external."
          ]
},
        },
        {
          id: "ecn11-u9-sources-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give three external sources of finance for a business.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "External finance",
                              "statement": "Money from outside: loans, shares, overdrafts, credit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Bank loan.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Share capital (selling shares).",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Overdraft, hire purchase, trade credit or owner's capital.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Any three: loan, shares, overdraft, hire purchase, trade credit.",
          "commonErrors": [
                    "Listing internal sources."
          ]
},
        },
        {
          id: "ecn11-u9-sources-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two advantages and two disadvantages of using retained profit as a source of finance.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Retained profit",
                              "statement": "Free of interest but limited by past profits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Advantage: no interest to pay and no loss of control.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Advantage: no repayment schedule — flexible.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Disadvantage: limited by how much profit was actually made.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Disadvantage: owners may want dividends — keeping profit back can cause conflict.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Advantages: free, flexible. Disadvantages: limited amount, dividend conflict.",
          "commonErrors": [
                    "Only one side."
          ]
},
        },
        {
          id: "ecn11-u9-sources-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A clothing shop needs £20,000 to renovate and extend its premises.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Suggest two suitable sources of finance and explain why each fits.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why an overdraft would be unsuitable for this need.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Matching finance to need",
                              "statement": "Long-term, large needs suit loans/shares; short-term gaps suit overdrafts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Bank loan — large amount, long-term, repayable over time.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Share capital/hire purchase — shares give permanent finance; hire purchase spreads cost.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Overdrafts are short-term and small — unsuitable for a £20,000 long-term project.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) Loan or shares/hire purchase. (b) Overdraft = short-term only.",
          "commonErrors": [
                    "Suggesting overdraft for (a).",
                    "No reason linked to time period."
          ]
},
        },
        {
          id: "ecn11-u9-sources-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A start-up tech firm needs £200,000 to develop a product but is unsure whether to borrow or sell shares.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two advantages of borrowing the money.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain two disadvantages of selling shares to raise the money.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Debt vs equity",
                              "statement": "Loans keep ownership but must be repaid; shares dilute control."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Keep full ownership and control; interest is a known cost.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) If profitable, owners keep all the gains.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Shares never have to be repaid; selling them gives up some ownership and control.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) New shareholders may demand dividends or a say in decisions.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) Keep control, known cost. (b) Lose control, dividends demanded.",
          "commonErrors": [
                    "Confusing shares with loans.",
                    "One side only."
          ]
},
        },
        {
          id: "ecn11-u9-sources-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A small manufacturer must raise £100,000 to buy machinery that will last 10 years.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define the term retained profit.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Name three external sources of finance the firm could use.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why a bank loan might suit this purchase better than an overdraft.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "Evaluate whether the firm should use retained profit instead of borrowing.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Sources of finance",
                              "statement": "Match source to amount, term, cost and risk."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Profit kept back by the business rather than paid to owners.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Any three: bank loan, share issue, hire purchase, overdraft.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Loan = long-term, large, fixed repayments matching the machine's life.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Overdraft is short-term and for small gaps — wrong tool for £100,000.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Retained profit avoids interest and keeps control — good if enough profit exists; but it may be insufficient and reduces dividends.",
                              "marks": 3,
                              "markCode": "AO3",
                              "part": "d"
                    }
          ],
          "finalAnswer": "(a) kept-back profit; (b) three sources; (c) loan suits long-term asset; (d) balanced judgement.",
          "commonErrors": [
                    "Retained profit treated as external.",
                    "One-sided evaluation."
          ]
},
        },
      ],
    },
    {
      id: "ecn11-u9-cashflow",
      title: "Cash Flow and Profit",
      skill: "Distinguish profit from cash flow and explain why cash flow matters.",
      lesson: {
        sections: [
          {
            heading: "Profit vs cash flow",
            body: "**Profit** = total revenue − total cost, measured over a period (often a year). **Cash flow** = actual money moving in and out — timing matters. A business can be **profitable but short of cash**: e.g. it sells goods on credit — profit is earned but cash arrives later, while rent and wages must be paid now. Conversely a business can have cash but no profit if it sells assets or borrows.",
          },
          {
            heading: "Managing cash flow",
            body: "Poor cash flow is a leading cause of business failure — 'cash is king'. Firms manage it through **cash-flow forecasts**, **credit control** (chasing late payments), **stock control**, **agreed payment terms** and **overdrafts** as a buffer. A healthy business keeps enough liquid cash to meet short-term obligations.",
          },
        ],
        keyFormulas: [
          { name: "Profit", statement: "total revenue − total cost" },
        ],
        workedExample: {
          problem: "A firm earns £10,000 profit but £8,000 of sales are unpaid credit. It must pay £9,000 in wages this month. Is it safe?",
          solution: "No — profit is £10,000 but cash received is only £2,000 (10,000 − 8,000). It cannot pay £9,000 wages — it needs an overdraft or faster collections despite being profitable.",
        },
      },
      questions: [
        {
          id: "ecn11-u9-cashflow-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is cash flow?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Total profit earned in a year"
                    },
                    {
                              "id": "b",
                              "text": "The movement of cash into and out of a business"
                    },
                    {
                              "id": "c",
                              "text": "The value of a firm's assets"
                    },
                    {
                              "id": "d",
                              "text": "Money borrowed from a bank"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Cash flow",
                              "statement": "Cash moving in and out over time."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cash flow tracks actual money movements, not just profit.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Cash movements in and out",
          "commonErrors": [
                    "Confusing cash flow with profit."
          ]
},
        },
        {
          id: "ecn11-u9-cashflow-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Explain how a business can be profitable but still run out of cash.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Profit vs cash",
                              "statement": "Credit sales create profit before cash arrives."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sales on credit count as revenue/profit immediately but cash arrives later.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Costs like wages and rent must be paid now — cash gap opens.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "If too much cash is tied up in unpaid invoices or stock, bills can't be paid.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Credit sales delay cash while costs are paid immediately.",
          "commonErrors": [
                    "Saying profit and cash are the same."
          ]
},
        },
        {
          id: "ecn11-u9-cashflow-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two ways a business can improve its cash flow.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Improving cash flow",
                              "statement": "Collect faster, pay slower, forecast, control stock."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Improve credit control — chase late payments, offer early-payment discounts.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Negotiate longer payment terms with suppliers — pay later.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Produce cash-flow forecasts to spot gaps early.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Reduce stock levels or use an overdraft as a buffer.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Faster collections, later payments, forecasting, stock control, overdraft.",
          "commonErrors": [
                    "Only one method."
          ]
},
        },
        {
          id: "ecn11-u9-cashflow-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A retailer has annual revenue of £120,000 and total costs of £95,000, all sales are for cash except £20,000 sold on credit still unpaid.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the firm's profit and cash received from sales.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why the cash position matters even though profit is positive.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Profit and cash",
                              "statement": "Profit = revenue − cost; credit sales delay cash."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Profit = 120,000 − 95,000 = £25,000.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Cash received = 120,000 − 20,000 = £100,000.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Bills must be paid in cash — £25,000 credit is still owed to the firm.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) Profit £25,000; cash £100,000. (b) Costs need cash now; credit is only a promise.",
          "commonErrors": [
                    "Confusing profit with cash received."
          ]
},
        },
        {
          id: "ecn11-u9-cashflow-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A builder wins a £50,000 contract paid in three instalments, but must pay £30,000 in materials upfront.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain the cash-flow problem the builder faces.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Suggest two ways the builder could solve it.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Cash-flow timing",
                              "statement": "Costs paid before income arrives create a gap."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) £30,000 must be paid now but only part of the £50,000 arrives later.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Without enough cash the builder cannot buy materials or pay wages.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Renegotiate instalments — get an upfront payment; or use an overdraft/loan to bridge the gap.",
                              "marks": 3,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) Costs precede income — cash gap. (b) Advance payment or overdraft.",
          "commonErrors": [
                    "Treating contract value as available cash.",
                    "No solution offered."
          ]
},
        },
        {
          id: "ecn11-u9-cashflow-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A profitable café has revenue of £8,000 a month and costs of £6,500, but £3,000 of sales are unpaid credit.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate monthly profit and cash received.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why cash flow can be a bigger problem than profit for a small business.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Suggest two ways the café could improve its cash flow.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Cash flow management",
                              "statement": "Profit ≠ cash; timing gaps kill businesses."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Profit = 8,000 − 6,500 = £1,500.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Cash received = 8,000 − 3,000 = £5,000 — less than the £6,500 costs.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Bills are paid in cash — a cash shortfall means failure even if profitable.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Small firms have little reserve — one bad month can be fatal.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Chase credit customers faster; encourage cash/card payments; negotiate supplier terms.",
                              "marks": 4,
                              "markCode": "AO2",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) profit £1,500; cash £5,000 < costs £6,500. (b) cash gaps are fatal. (c) faster collections, cash incentives, supplier terms.",
          "commonErrors": [
                    "Wrong subtraction.",
                    "Treating profit as cash."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecn11-u9-finance-notes",
      title: "Business finance — revision notes",
      summary: "Internal finance = retained profit; external = loans, shares, overdrafts, credit. Match source to need. Cash flow = money in/out — profit can exist without cash (credit sales).",
      sections: [
        { heading: "Sources", body: "Retained profit = free but limited. Loans = repayable. Shares = permanent but dilute control. Overdrafts = short-term." },
        { heading: "Profit vs cash", body: "Credit sales create profit before cash — a profitable firm can still fail on cash flow." },
        { heading: "Managing cash", body: "Forecast, collect faster, negotiate terms, use overdraft buffer." },
      ],
    },
  ],
};
