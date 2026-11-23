import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "ebz11-u7-lesson-7-3",
  code: "7-3",
  title: "Working Capital and Credit Control",
  goal: "I CAN explain working capital, manage it effectively and operate a credit control system.",
  standards: ["Edexcel IGCSE Business 4BS0 — Finance: working capital and credit control"],
  
  vocabulary: [
    { term: "Working capital", definition: "Current assets minus current liabilities — the funds available for day-to-day operations." },
    { term: "Current assets", definition: "Assets convertible to cash within one year: cash, debtors, inventory." },
    { term: "Current liabilities", definition: "Amounts owed within one year: creditors, overdrafts, wages due." },
    { term: "Trade credit", definition: "Buying goods now and paying the supplier later, e.g. 30 days." },
    { term: "Credit control", definition: "System for checking customers' ability to pay and collecting debts on time." },
    { term: "Bad debt", definition: "A debt that cannot be collected and must be written off as a loss." },
    { term: "Cash conversion cycle", definition: "Time taken to convert resources into cash through operations." },
  ],
  concepts: [
    {
      id: "ebz11-u7-working-capital",
      title: "Working Capital Management",
      skill: "Calculate working capital and explain how to manage its components.",
      lesson: {
        sections: [
          {
            heading: "What working capital is",
            body: "**Working capital = current assets − current liabilities**. It is the money tied up in day-to-day trading — stock, money owed by customers, cash — minus short-term debts like supplier invoices and overdrafts. **Too little** working capital means the business cannot pay bills on time (illiquidity, possible failure). **Too much** means cash sits idle earning nothing — it could be invested or used to reduce borrowing.",
          },
          {
            heading: "Managing the components",
            body: "Manage three current assets: **inventory** — hold enough stock to meet demand but not so much it ties up cash or risks obsolescence; use just-in-time ordering. **Debtors** — control credit given to customers so cash is collected quickly. **Cash** — reconcile bank accounts and forecast cash needs. Manage **creditors** — take full credit periods offered by suppliers (paying early wastes cash), but do not damage supplier relationships.",
          },
        ],
        keyFormulas: [
          { name: "Working capital", statement: "current assets − current liabilities" },
          { name: "Liquidity test", statement: "positive working capital needed for day-to-day payments" },
        ],
        workedExample: {
          problem: "A business has current assets of £95,000 (cash £15,000, debtors £40,000, inventory £40,000) and current liabilities of £60,000. Calculate working capital and comment.",
          solution: "Working capital = 95,000 − 60,000 = £35,000 positive — the business can cover short-term debts. However, £40,000 is tied up in inventory and £40,000 in debtors, so there is room to improve collection speed and stock levels.",
        },
      },
      questions: [
        {
          id: "ebz11-u7-working-capital-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How is working capital calculated?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Current liabilities − current assets"
                    },
                    {
                              "id": "b",
                              "text": "Current assets − current liabilities"
                    },
                    {
                              "id": "c",
                              "text": "Total assets − total liabilities"
                    },
                    {
                              "id": "d",
                              "text": "Revenue − costs"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Working capital",
                              "statement": "current assets − current liabilities."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Working capital = current assets minus current liabilities.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Current assets − current liabilities"
},
        },
        {
          id: "ebz11-u7-working-capital-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "A business has current assets of £120,000 and current liabilities of £85,000. Calculate its working capital.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "working capital (£)",
                              "answer": 35000,
                              "tolerance": 0
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Working capital",
                              "statement": "CA − CL."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Working capital = 120,000 − 85,000 = £35,000.",
                              "marks": 3,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "£35,000",
          "commonErrors": [
                    "Subtracting in the wrong direction."
          ]
},
        },
        {
          id: "ebz11-u7-working-capital-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why both too little and too much working capital can be a problem for a business.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Working capital balance",
                              "statement": "Too little = illiquid; too much = idle funds."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Too little: cannot pay short-term debts — risk of illiquidity or failure.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Too much: cash sits idle earning nothing while borrowing costs continue.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Ideal level funds operations without waste — balance needed.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Too little = cannot pay bills; too much = wasted earning potential. Balance required.",
          "commonErrors": [
                    "Only one side explained.",
                    "Confusing working capital with profit."
          ]
},
        },
        {
          id: "ebz11-u7-working-capital-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A retailer finds £50,000 of its working capital is tied up in slow-moving stock.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain one problem caused by holding excessive inventory.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Suggest two ways the retailer could reduce inventory levels safely.",
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
                              "name": "Inventory management",
                              "statement": "Excess stock ties up cash and risks obsolescence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Cash tied up in stock cannot be used elsewhere; risk of stock becoming obsolete or damaged.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Method: order stock just-in-time / more frequently in smaller quantities.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Method: run promotions or discounts to clear slow lines; improve demand forecasting.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) ties up cash/obsolescence risk. (b) JIT ordering, promotions, better forecasting.",
          "commonErrors": [
                    "Suggesting buying even more stock.",
                    "No link to working capital."
          ]
},
        },
        {
          id: "ebz11-u7-working-capital-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A business wants to improve its working capital position without harming customer or supplier relationships.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain how faster collection of debts from customers would affect working capital.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain how taking the full credit period offered by suppliers would affect working capital.",
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
                              "name": "WC components",
                              "statement": "Faster debtors and slower creditors both raise working capital."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Faster collection converts debtors to cash sooner — improves liquidity even though the WC total is unchanged.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Reduces the time cash is tied up and lowers bad-debt risk.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Paying at the end of the credit period keeps cash longer — reduces cash outflow timing.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Within agreed terms it does not damage supplier relationships.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Improves liquidity without extra cost (unlike early-payment discounts which cost money).",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) faster debtor collection improves cash flow/liquidity. (b) full credit terms keep cash longer, improving liquidity at no cost.",
          "commonErrors": [
                    "Saying WC must rise — liquidity vs WC level confusion.",
                    "Ignoring the 'without harming relationships' condition."
          ]
},
        },
        {
          id: "ebz11-u7-working-capital-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A business has current assets of £150,000 and current liabilities of £110,000.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define working capital.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate the working capital and state whether the business is likely to have liquidity problems.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "List the three main components of current assets that businesses manage.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain one way the business could improve its working capital management.",
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
                              "name": "Working capital evaluation",
                              "statement": "WC = CA − CL; manage cash, debtors, inventory, creditors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Working capital = current assets − current liabilities.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) WC = 150,000 − 110,000 = £40,000.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Positive WC means short-term debts are covered — liquidity problems unlikely but £40,000 margin is modest.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Cash, debtors (receivables) and inventory (stock).",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) e.g. tighten credit control to collect debts faster, reduce slow stock, or use supplier credit terms fully.",
                              "marks": 3,
                              "markCode": "AO2",
                              "part": "d"
                    }
          ],
          "finalAnswer": "(a) CA−CL; (b) £40,000, covered but modest; (c) cash, debtors, inventory; (d) improve collections/stock/creditors.",
          "commonErrors": [
                    "Wrong formula.",
                    "Claiming liquidity problems with positive WC."
          ]
},
        },
      ],
    },
    {
      id: "ebz11-u7-credit-control",
      title: "Credit Control",
      skill: "Explain how businesses grant credit safely and collect debts effectively.",
      lesson: {
        sections: [
          {
            heading: "Granting credit safely",
            body: "Most businesses sell on **trade credit** — customers pay later (e.g. 30 days). Credit boosts sales but risks **bad debts**. A **credit control** system manages this risk: check new customers' creditworthiness (references, credit agency reports, financial history); set **credit limits** per customer; issue invoices promptly with clear payment terms; send reminders before and after the due date; stop supply to customers who exceed limits or pay late; consider **factoring** — selling debts to a finance company for immediate cash at a discount.",
          },
          {
            heading: "Collecting debts",
            body: "Effective collection starts early: invoices must be accurate and sent immediately. Use a **creditors/debtors ledger** to track who owes what and for how long. Phone or write to overdue accounts politely but firmly; charge interest or late fees where contract allows. For persistent non-payers, use debt collection agencies or legal action as a last resort. Persistent late payers may be moved to cash-only terms. Bad debts should be provided for in accounts and written off when unrecoverable — prevention is far cheaper than recovery.",
          },
        ],
        keyFormulas: [
          { name: "Credit terms", statement: "e.g. payment due within 30 days of invoice" },
          { name: "Factoring", statement: "selling trade debts to a factor for immediate cash minus a fee" },
        ],
        workedExample: {
          problem: "A firm sells £10,000 of goods on 30-day credit. It uses a factoring company charging 3% of invoice value. How much cash does it receive immediately, and what does it give up?",
          solution: "Cash received = 10,000 × (1 − 0.03) = £9,700 immediately. The firm gives up £300 (the factor's fee) and the factor takes on the risk and effort of collecting the debt.",
        },
      },
      questions: [
        {
          id: "ebz11-u7-credit-control-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is trade credit?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A bank overdraft"
                    },
                    {
                              "id": "b",
                              "text": "Buying now and paying the supplier later"
                    },
                    {
                              "id": "c",
                              "text": "A type of insurance"
                    },
                    {
                              "id": "d",
                              "text": "A government loan"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Trade credit",
                              "statement": "Deferred payment for goods purchased."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Trade credit = buy now, pay later (e.g. 30 days).",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Buy now, pay later"
},
        },
        {
          id: "ebz11-u7-credit-control-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give three steps a business can take when setting up credit control for new customers.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Credit control steps",
                              "statement": "Check, limit, monitor."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Check creditworthiness — references, credit reports, past payment history.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Set a credit limit appropriate to the customer's size and risk.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Monitor the account — track payments, send reminders, stop supply if overdue.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Check creditworthiness, set limits, monitor and enforce terms.",
          "commonErrors": [
                    "Only listing collection actions after debt exists."
          ]
},
        },
        {
          id: "ebz11-u7-credit-control-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why offering too much credit to customers can be dangerous for a business.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Credit risk",
                              "statement": "Credit sales raise revenue but risk bad debts and cash shortages."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Customers may pay late or not at all — creating bad debts.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Cash is tied up in debtors instead of being available for wages and bills.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Bad debts reduce profit and may require write-offs.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Severe cases cause liquidity problems — profitable sales but no cash to survive.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Late/non-payment → bad debts, tied-up cash, possible liquidity crisis.",
          "commonErrors": [
                    "Ignoring the cash-flow effect.",
                    "Only mentioning lost sales if credit refused."
          ]
},
        },
        {
          id: "ebz11-u7-credit-control-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A customer exceeds its credit limit and an invoice is now 60 days overdue.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State two actions the business should take immediately.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why the business should act now rather than wait.",
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
                              "name": "Debt collection",
                              "statement": "Early, firm action protects cash flow."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Action: contact the customer to request payment / send a formal reminder.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Action: stop further credit — move to cash-only terms or suspend supply.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Older debts are less likely to be paid — the longer it waits, the higher the bad-debt risk.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Continued supply on credit increases the amount at risk.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Prompt action signals seriousness and often prompts payment without escalation.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) chase payment, restrict further credit. (b) older debts risk becoming bad debts; limit exposure.",
          "commonErrors": [
                    "Waiting passively.",
                    "Actions that damage the relationship without cause."
          ]
},
        },
        {
          id: "ebz11-u7-credit-control-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A business is owed £20,000 by customers and needs cash urgently for wages.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain what factoring is.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain one benefit and one drawback of using a factor in this situation.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Factoring",
                              "statement": "Selling trade debts to a finance company for immediate cash."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Business sells its trade debts (invoices owed) to a factor.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Factor pays most of the invoice value immediately, minus a fee/discount.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Factor then collects the debts from customers and bears the non-payment risk.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Benefit: instant cash flow to cover wages/bills.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Drawback: cost — fees reduce the amount received; also loses control over customer relationships.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) sell debts for immediate cash less fee. (b) benefit: instant liquidity; drawback: cost and lost control.",
          "commonErrors": [
                    "Confusing factoring with a loan.",
                    "No cost mentioned."
          ]
},
        },
        {
          id: "ebz11-u7-credit-control-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A wholesaler sells goods on 30-day credit and is experiencing rising bad debts.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define bad debt.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain two ways bad debts harm a business.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Describe three steps the wholesaler could take to improve credit control.",
                    "marks": 5
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Credit control system",
                              "statement": "Prevent bad debts through checks, limits, monitoring and firm collection."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) A debt that cannot be collected and must be written off as a loss.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Harm 1: reduces profit — revenue was recorded but cash never arrives.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Harm 2: cash tied up in debtors — liquidity problems, less cash for operations.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Step 1: check creditworthiness of new customers before granting credit.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Step 2: set and enforce credit limits per customer.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Step 3: monitor the debtors ledger, send reminders, stop supply to late payers.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Step 4 (bonus within 5): use collection agencies/factoring for persistent debts.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) uncollectable debt written off. (b) profit loss + cash tied up. (c) check, limit, monitor/collect.",
          "commonErrors": [
                    "Treating bad debt as recoverable later.",
                    "Steps that do not address credit granting."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebz11-u7-working-capital-notes",
      title: "Working capital and credit control — revision notes",
      summary: "Working capital = current assets − current liabilities. Manage cash, debtors, inventory, creditors. Credit control = check customers, set limits, monitor, collect firmly; bad debts hurt profit and liquidity.",
      sections: [
        { heading: "Key idea", body: "Too little WC = cannot pay bills; too much = wasted earning potential." },
        { heading: "Credit control", body: "Prevent bad debts: check creditworthiness, set limits, chase payments early, restrict credit to late payers." },
        { heading: "Factoring", body: "Sell trade debts for immediate cash less a fee — improves liquidity at a cost." },
      ],
    },
  ],
};
