import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "ebz10-u5-lesson-5-1",
  code: "5-1",
  title: "Business Finance Needs and Sources",
  goal: "I CAN explain finance needs, working capital and sources of business finance.",
  standards: ["Edexcel IGCSE Business 4BS0 — Finance and Accounting"],
  
  vocabulary: [
    { term: "Finance", definition: "Money needed to start and run a business." },
    { term: "Fixed capital", definition: "Long-term assets such as buildings, machinery and vehicles." },
    { term: "Working capital", definition: "Current assets minus current liabilities used in day-to-day operations." },
    { term: "Cash flow", definition: "Movement of money into and out of a business." },
    { term: "Retained profit", definition: "Profit kept by the business instead of paid to owners." },
    { term: "Source of finance", definition: "Internal or external way a business obtains money." },
  ],
  concepts: [
    {
      id: "ebz10-u5-finance-needs-working-capital",
      title: "Finance Needs and Working Capital",
      skill: "Distinguish fixed and working capital and explain cash-flow needs.",
      lesson: {
        sections: [
          {
            heading: "Why businesses need finance",
            body: "Businesses need finance to start up, buy equipment, expand, pay wages and manage day-to-day costs. Finance can come from owners, retained profit, loans, share issues or grants. The right source depends on amount, duration, cost and risk.",
          },
          {
            heading: "Fixed capital and working capital",
            body: "**Fixed capital** buys long-term assets such as premises, machinery and vehicles. **Working capital** funds short-term needs such as stock, wages and bills. Working capital = current assets − current liabilities. Too little working capital causes cash-flow problems; too much ties up money unnecessarily.",
          },
          {
            heading: "Cash flow",
            body: "A business can be profitable but still fail if it cannot pay bills on time. Cash-flow forecasts track expected receipts and payments to identify shortages. Timing differences between sales, purchases and payments are a common cause of cash-flow pressure.",
          },
        ],
        keyFormulas: [
          { name: "Working capital", statement: "Current assets − current liabilities" },
        ],
        workedExample: {
          problem: "A business has current assets of £45,000 and current liabilities of £30,000. Calculate working capital and interpret it.",
          solution: "Working capital = £45,000 − £30,000 = £15,000. The positive figure means the business can cover short-term debts.",
        },
      },
      questions: [
        {
          id: "ebz10-u5-need-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which statement defines working capital?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Money invested in long-term assets"
                    },
                    {
                              "id": "b",
                              "text": "Current assets minus current liabilities"
                    },
                    {
                              "id": "c",
                              "text": "Total sales for one year"
                    },
                    {
                              "id": "d",
                              "text": "Profit after tax"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Working capital",
                              "statement": "Current assets − current liabilities."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Working capital measures short-term resources available after short-term debts.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Current assets minus current liabilities",
          "commonErrors": [
                    "Confusing working capital with fixed capital or profit."
          ]
},
        },
        {
          id: "ebz10-u5-need-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "A business has current assets of £45,000 and current liabilities of £30,000. Calculate working capital.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Working capital",
                              "answer": 15000,
                              "unit": "£"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Working capital",
                              "statement": "Current assets − current liabilities."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identify the correct figures: current assets £45,000 and current liabilities £30,000.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Subtract liabilities from assets: £45,000 − £30,000 = £15,000.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "State the positive working capital figure: £15,000.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "£15,000",
          "commonErrors": [
                    "Adding instead of subtracting.",
                    "Using total assets rather than current assets."
          ]
},
        },
        {
          id: "ebz10-u5-need-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the difference between fixed capital and working capital, giving one example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Fixed vs working capital",
                              "statement": "Long-term assets versus short-term operating funds."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fixed capital is used to buy long-term assets.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Example: machinery, vehicles or premises.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Working capital funds day-to-day operations.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Example: stock, wages or payment of supplier bills.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Fixed capital buys long-term assets; working capital funds daily operations.",
          "commonErrors": [
                    "Examples swapped.",
                    "No clear distinction."
          ]
},
        },
        {
          id: "ebz10-u5-need-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A bakery plans to buy a new oven and increase its stock of flour and ingredients.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify which purchase is fixed capital and which is working capital.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain one cash-flow problem the bakery might face.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Capital classification",
                              "statement": "Match each finance need to fixed or working capital."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "The oven is a long-term asset, so it is fixed capital.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Flour and ingredients are short-term operating needs, so they are working capital.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The bakery may pay for ingredients before selling the finished products.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "If sales are delayed, it may struggle to pay wages or suppliers despite future demand.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Oven = fixed capital; ingredients = working capital; timing of receipts and payments can cause cash-flow pressure.",
          "commonErrors": [
                    "Wrong classification.",
                    "No timing explanation."
          ]
},
        },
        {
          id: "ebz10-u5-need-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A retailer must decide how much working capital to keep.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two problems of holding too little working capital.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain one problem of holding too much working capital.",
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
                              "name": "Working capital balance",
                              "statement": "Too little causes shortages; too much ties up resources."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "The business may be unable to pay suppliers, wages or bills on time.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "It may miss discounts, damage supplier relationships or lose stock opportunities.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Excess cash or stock earns little return and may become obsolete or damaged.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Money tied up in stock cannot be used for investment or emergencies.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Too little risks unpaid bills and shortages; too much wastes resources and opportunity.",
          "commonErrors": [
                    "Only one side.",
                    "No business consequence."
          ]
},
        },
        {
          id: "ebz10-u5-need-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A furniture maker receives payment 60 days after delivery but must pay suppliers monthly.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why this creates a cash-flow gap.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Describe two ways the business could manage the gap.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain the role of a cash-flow forecast.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Recommend one short-term finance source and justify it.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Cash-flow management",
                              "statement": "Timing differences require forecasting and appropriate finance."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Costs are paid before customer payments arrive.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "The 60-day delay creates a period when expenses exceed receipts.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Negotiate shorter customer payment terms or deposits to improve timing.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Use an overdraft or invoice financing to bridge the gap.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "A cash-flow forecast predicts receipts and payments, identifying future shortages.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "part": "d",
                              "reasoning": "Recommend a bank overdraft because it is flexible short-term finance.",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Manage the timing gap with better payment terms, short-term finance and cash-flow forecasting.",
          "commonErrors": [
                    "Profit confused with cash flow.",
                    "No short-term source recommended."
          ]
},
        },
      ],
    },
    {
      id: "ebz10-u5-sources-finance",
      title: "Internal and External Sources of Finance",
      skill: "Evaluate appropriate sources of finance for business needs.",
      lesson: {
        sections: [
          {
            heading: "Internal sources",
            body: "Internal finance comes from the business itself: owners' capital, retained profit, selling assets and reducing costs. It avoids interest and loss of control but may be limited, especially for new or growing businesses.",
          },
          {
            heading: "External sources",
            body: "External finance includes bank overdrafts and loans, share issues, hire purchase, leasing, trade credit, government grants, crowdfunding and business angels. Short-term sources suit working capital; long-term sources suit expansion and major assets.",
          },
          {
            heading: "Choosing finance",
            body: "Businesses consider amount needed, repayment period, interest cost, security required, ownership dilution and risk. Grants and retained profit may be cheaper but are limited; loans provide larger sums but create repayment obligations.",
          },
        ],
        keyFormulas: [

        ],
        workedExample: {
          problem: "A startup needs £50,000 for equipment but has no profit yet. Which sources are most suitable?",
          solution: "Consider owner investment, a bank loan, angel investment or asset finance such as hire purchase, depending on risk and repayment ability.",
        },
      },
      questions: [
        {
          id: "ebz10-u5-source-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is an internal source of finance?",
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
                              "text": "Crowdfunding"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Internal finance",
                              "statement": "Finance generated within the business."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Retained profit comes from the business's own earnings rather than outside providers.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Retained profit",
          "commonErrors": [
                    "Confusing internal finance with external borrowing or investment."
          ]
},
        },
        {
          id: "ebz10-u5-source-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give three internal sources of finance.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Internal sources",
                              "statement": "Funds generated by the business itself."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Owners can invest additional capital.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The business can retain profit rather than distribute it.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "It can sell unused assets or reduce operating costs.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Owners' capital, retained profit, asset sales and cost reduction.",
          "commonErrors": [
                    "Only one source.",
                    "External sources listed."
          ]
},
        },
        {
          id: "ebz10-u5-source-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare a bank loan and issuing shares as sources of finance.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Loan vs shares",
                              "statement": "Debt finance versus equity finance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A bank loan must be repaid with interest over an agreed period.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "It does not dilute ownership but creates repayment risk.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Issuing shares raises capital without repayment but gives investors ownership.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "It may dilute control and is only suitable for limited companies or partnerships with share capital.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Loans require repayment and interest; shares avoid repayment but dilute ownership.",
          "commonErrors": [
                    "No repayment difference.",
                    "Ownership impact ignored."
          ]
},
        },
        {
          id: "ebz10-u5-source-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A retailer needs £5,000 to cover a temporary stock shortage and £80,000 to open a new store.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Suggest a suitable source for the £5,000 shortage.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Suggest a suitable source for the £80,000 expansion and justify it.",
                    "marks": 3
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
                              "statement": "Short-term needs need flexible finance; expansion needs longer-term capital."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Use a bank overdraft or trade credit for the short-term stock shortage.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "part": "a",
                              "reasoning": "This is flexible, quick and repaid when sales recover.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Use a long-term bank loan, retained profit or share issue for the store.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "The asset has a long life, so long-term finance matches its repayment period.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Overdraft/trade credit for short-term; long-term loan, retained profit or shares for expansion.",
          "commonErrors": [
                    "Long-term loan for a small temporary gap.",
                    "No justification."
          ]
},
        },
        {
          id: "ebz10-u5-source-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A start-up wants to raise £100,000 through crowdfunding.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two advantages of crowdfunding.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain two risks or disadvantages.",
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
                              "name": "Crowdfunding evaluation",
                              "statement": "Accessible capital versus uncertainty and obligations."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "It can reach many small investors quickly without a bank loan.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "It may also provide market validation and publicity for the product.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The campaign may fail to raise the target amount.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Depending on the model, it may create rewards, equity obligations or ongoing communication duties.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Crowdfunding is accessible and promotional but uncertain and may create obligations.",
          "commonErrors": [
                    "Only advantages or only disadvantages.",
                    "No link to start-up context."
          ]
},
        },
        {
          id: "ebz10-u5-source-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A new app developer needs £20,000 for development and may need £200,000 later for expansion.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Recommend a source for the initial £20,000 and justify it.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Recommend a source for the later £200,000 and justify it.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain why retained profit may become useful later.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Evaluate whether taking investment is better than a loan for expansion.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Finance strategy",
                              "statement": "Use different sources as the business grows."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Use savings, a small bank loan, crowdfunding or an angel investor for development.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "part": "a",
                              "reasoning": "The amount is modest and proof of concept may be limited.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Use retained profit, bank finance, venture capital or share issue for expansion.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "The larger amount and growth stage justify more substantial finance.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "If the app succeeds, profit can fund expansion without interest or dilution.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "d",
                              "reasoning": "Investment avoids repayment but dilutes ownership; loans preserve ownership but require repayment.",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Use small flexible finance first, then retained profit or larger investment/loan as the business proves itself.",
          "commonErrors": [
                    "One source for both stages.",
                    "No evaluation of ownership versus repayment."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebz10-u5-finance-sources-notes",
      title: "Finance needs and sources — notes",
      summary: "Businesses need fixed capital for assets and working capital for operations; choose finance by amount, duration, cost and ownership impact.",
      sections: [
        { heading: "Needs", body: "Fixed capital = long-term assets; working capital = current assets − current liabilities." },
        { heading: "Cash flow", body: "Profitable businesses can still fail if payments are mistimed." },
        { heading: "Internal", body: "Owners' capital, retained profit, asset sales and cost savings." },
        { heading: "External", body: "Overdrafts, loans, shares, hire purchase, grants, crowdfunding and investors." },
      ],
    },
  ],
};
