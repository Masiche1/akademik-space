import type { Lesson } from "../../../types.ts";

export const lesson161: Lesson = {
  id: "ecn10-u10-lesson-10-1",
  code: "10-1",
  title: "Sources of Finance",
  goal: "I CAN explain internal and external sources of finance and evaluate their costs and risks.",
  standards: ["Edexcel IGCSE Economics 4EC1 — Business finance"],
  
  vocabulary: [
    { term: "Retained profit", definition: "Profit kept back by the firm instead of paid out as dividends." },
    { term: "Overdraft", definition: "Short-term borrowing up to an agreed limit on a current account." },
    { term: "Shares", definition: "Units of ownership in a company sold to raise capital." },
    { term: "Loan", definition: "Borrowed money repaid with interest over an agreed period." },
    { term: "Leasing", definition: "Renting equipment or premises from a finance company instead of buying." },
    { term: "Grant", definition: "Money given by government or an agency, usually not repayable." },
  ],
  concepts: [
    {
      id: "ecn10-u10-fin-sources",
      title: "Internal and External Sources of Finance",
      skill: "Identify and describe internal and external sources of finance for a business.",
      lesson: {
        sections: [
          {
            heading: "Internal sources",
            body: "**Internal sources** come from inside the business: **retained profit** (profit reinvested rather than paid as dividends), **depreciation funds**, **selling assets** and, for sole traders, **owner's capital**. Advantages: no interest or dividends to outsiders, no loss of control. Disadvantages: limited in amount and may slow growth if profit is small.",
          },
          {
            heading: "External sources",
            body: "**External sources** come from outside: **bank loans and overdrafts**, **share issues** (selling ownership), **leasing**, **trade credit** (paying suppliers later), **factoring** and **government grants**. Each has a cost: interest, dividends, hire charges or lost control. Grants are rare but cost nothing to repay; share issues raise large sums but dilute ownership.",
          },
        ],
        keyFormulas: [
          { name: "Internal vs external", statement: "Internal = own funds (retained profit, asset sales); external = other people's money (loans, shares, grants)" },
        ],
        workedExample: {
          problem: "A profitable café wants £15,000 for a second branch. It has £9,000 of retained profit. Name one internal and two external sources it could combine.",
          solution: "Internal: retained profit (£9,000). External: a bank loan or overdraft for the £6,000 gap, or a small share issue if it is a limited company.",
        },
      },
      questions: [
        {
          id: "ecn10-u10-src-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which of the following is an internal source of finance?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Retained profit"
                    },
                    {
                              "id": "b",
                              "text": "A bank loan"
                    },
                    {
                              "id": "c",
                              "text": "Issuing shares"
                    },
                    {
                              "id": "d",
                              "text": "A government grant"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Internal source",
                              "statement": "Finance raised from within the business — e.g., retained profit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Retained profit is the firm's own money; loans, shares and grants all come from outside.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(a)** Retained profit",
          "commonErrors": [
                    "Confusing sources of finance with revenue."
          ]
},
        },
        {
          id: "ecn10-u10-src-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "State three external sources of finance available to a business.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "External source",
                              "statement": "Finance from outside the business — loans, shares, grants."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Bank loan or overdraft — borrowed money repaid with interest.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Share issue — selling ownership to raise capital.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Government grant, leasing or trade credit — other external options.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Any three: bank loan, overdraft, share issue, leasing, trade credit, grant.",
          "commonErrors": [
                    "Listing internal sources such as retained profit."
          ]
},
        },
        {
          id: "ecn10-u10-src-q3",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "A firm needs £90,000 for new equipment. It has £10,000 of retained profit and issues 400,000 shares at 20p each.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the capital raised by the share issue.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate the total finance the firm now has available.",
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
                              "name": "Share capital raised",
                              "statement": "Number of shares × price per share"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Share capital = 400,000 × £0.20.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Share capital = £80,000.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Total finance = £80,000 + £10,000 retained profit.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Total = £90,000 — exactly meets the need.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) £80,000 (b) £90,000",
          "commonErrors": [
                    "Using £20 per share instead of 20p."
          ]
},
        },
        {
          id: "ecn10-u10-src-q4",
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
                              "statement": "Own funds — no interest, but limited and reduces dividends."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Advantage 1: no interest payments or dividends owed to outsiders.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Advantage 2: no loss of ownership or control; simple to arrange.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Disadvantage 1: limited by how much profit the firm makes.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Disadvantage 2: shareholders may be unhappy if dividends are cut to fund investment.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Cheap and control-preserving but limited and may disappoint shareholders.",
          "commonErrors": [
                    "Only advantages or only disadvantages given."
          ]
},
        },
        {
          id: "ecn10-u10-src-q5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain why a growing firm might prefer a bank loan to issuing shares.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Loan vs shares",
                              "statement": "Debt keeps control but requires repayment; equity dilutes ownership."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A loan must be repaid with interest but does not dilute the owners' share of the business.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Issuing shares gives away part-ownership — new shareholders gain voting rights and a claim on dividends.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Control is valuable to founders/managers, so avoiding dilution can be decisive for a growing firm.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Loans preserve control and ownership at the cost of interest; shares dilute control.",
          "commonErrors": [
                    "Ignoring the control/dilution issue."
          ]
},
        },
        {
          id: "ecn10-u10-src-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Assess whether a business should rely mainly on internal sources of finance.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two advantages of internal finance.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain two limitations of internal finance.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Reach a justified conclusion.",
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
                              "name": "Internal finance",
                              "statement": "Own funds avoid outside costs but are limited by profitability."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Advantage 1: no interest or dividend payments to outsiders — lower cost of capital.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Advantage 2: no loss of control or ownership; decisions stay with existing owners.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Limitation 1: amount is capped by retained profit — cannot fund rapid or large expansion.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Limitation 2: opportunity cost — profit reinvested is not paid out as dividends to shareholders.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Conclusion: internal finance is cheap and safe but too limited for growth; a mix matched to needs is best.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Internal finance is low-cost but limited — best as part of a mixed funding strategy.",
          "commonErrors": [
                    "One-sided argument without a conclusion."
          ]
},
        },
      ],
    },
    {
      id: "ecn10-u10-fin-choice",
      title: "Costs and Risks of Different Finance",
      skill: "Evaluate the cost, repayment terms and risk of different sources of finance.",
      lesson: {
        sections: [
          {
            heading: "Short-term vs long-term finance",
            body: "**Short-term finance** (overdrafts, trade credit, short loans) is quick but must be repaid soon and interest rates can rise. **Long-term finance** (mortgages, long loans, shares, retained profit) costs less per year but ties up assets or ownership for years. Match the source to the asset's life — do not fund a long-term machine with a 90-day overdraft.",
          },
          {
            heading: "Costs and risk",
            body: "Every source has a **cost of finance**: interest on loans and overdrafts, dividends on shares, hire charges on leasing. **Risk** also differs — loans create fixed repayments that can threaten survival in a bad year; shares have no fixed repayment but dilute control; overdrafts can be withdrawn. A firm with volatile cash flow should prefer flexible finance.",
          },
        ],
        keyFormulas: [
          { name: "Interest cost", statement: "Interest = principal borrowed × annual interest rate" },
          { name: "Total repayment", statement: "Total repaid = principal + interest" },
        ],
        workedExample: {
          problem: "A firm borrows £50,000 at 8% interest for one year. Calculate the interest and total repayment.",
          solution: "Interest = 50,000 × 0.08 = £4,000. Total repayment = 50,000 + 4,000 = £54,000.",
        },
      },
      questions: [
        {
          id: "ecn10-u10-fin-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An overdraft is best described as:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A long-term mortgage on the business premises"
                    },
                    {
                              "id": "b",
                              "text": "Short-term borrowing up to an agreed limit"
                    },
                    {
                              "id": "c",
                              "text": "Selling shares to raise capital"
                    },
                    {
                              "id": "d",
                              "text": "Money given by the government"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Overdraft",
                              "statement": "Short-term credit on a current account up to an agreed limit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "An overdraft lets the firm spend more than its balance, up to a limit, usually for the short term.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Short-term borrowing up to an agreed limit",
          "commonErrors": [
                    "Confusing an overdraft with a term loan."
          ]
},
        },
        {
          id: "ecn10-u10-fin-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "State three factors a business should consider when choosing a source of finance.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Choosing finance",
                              "statement": "Match cost, terms and risk to the purpose of the funds."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cost of finance — interest, dividends or hire charges.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Repayment terms — how soon and how flexibly the money must be repaid.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Amount needed, timescale and effect on control/ownership.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Any three: cost, repayment terms, amount/timescale, risk, control.",
          "commonErrors": [
                    "Listing sources instead of decision factors."
          ]
},
        },
        {
          id: "ecn10-u10-fin-q3",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "A business borrows £50,000 at 8% annual interest for one year.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Interest paid",
                              "answer": 4000,
                              "unit": "£"
                    },
                    {
                              "label": "Total repayment",
                              "answer": 54000,
                              "unit": "£"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Interest",
                              "statement": "Interest = principal × rate = 50,000 × 0.08"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Interest = 50,000 × 0.08 = £4,000.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Total repayment = 50,000 + 4,000 = £54,000.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Interest £4,000; total repayment £54,000",
          "commonErrors": [
                    "Forgetting to add the principal back for total repayment."
          ]
},
        },
        {
          id: "ecn10-u10-fin-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two advantages and two disadvantages of leasing equipment instead of buying it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Leasing",
                              "statement": "Renting assets — preserves cash but costs more long-run."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Advantage 1: preserves cash flow — no large upfront payment.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Advantage 2: payments spread over time; often includes maintenance; easy to upgrade.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Disadvantage 1: higher total cost than buying outright over the asset's life.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Disadvantage 2: the firm never owns the asset and may face penalties for early return.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Leasing saves cash and spreads cost but is dearer and gives no ownership.",
          "commonErrors": [
                    "Only one side evaluated."
          ]
},
        },
        {
          id: "ecn10-u10-fin-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A small retailer needs £20,000 to renovate its shop and expects strong sales next year.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Recommend a suitable source of finance and justify your choice.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain one risk of your chosen source.",
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
                              "name": "Matching finance",
                              "statement": "Small, short-term need with predictable sales suits flexible debt."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) A bank loan or overdraft — moderate amount, short/medium term, firm is trading so banks will lend.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Strong expected sales make repayment feasible — debt is affordable.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Risk: fixed repayments — if sales disappoint, the firm may struggle to meet interest and repayments.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Overdrafts specifically can be withdrawn or their limit cut if the bank loses confidence.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) bank loan/overdraft — affordable given expected sales (b) fixed repayments risk if sales fall",
          "commonErrors": [
                    "Recommending shares for a small private retailer without justification."
          ]
},
        },
        {
          id: "ecn10-u10-fin-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Assess the view that a business should always use internal finance before seeking external finance.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two advantages of prioritising internal finance.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain two situations where external finance may be necessary or better.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Reach a justified conclusion.",
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
                              "name": "Internal first?",
                              "statement": "Cheap and safe but limited — external finance unlocks growth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Advantage 1: no interest or dividends owed — cheaper source of funds.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Advantage 2: no dilution of ownership or control; no lender pressure.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Situation 1: large expansion needs more than retained profit can supply — internal funds are capped.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Situation 2: start-ups with no profit history must use external finance; timing matters — waiting for profit may miss opportunities.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Conclusion: internal finance should be used where sufficient, but 'always first' is wrong — match the source to the need and timing.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Internal finance is preferred when adequate, but growth often requires external sources.",
          "commonErrors": [
                    "One-sided answer without evaluation."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecn10-u10-lesson-10-1-notes",
      title: "Sources of Finance — notes",
      summary: "Internal sources (retained profit) vs external sources (loans, overdrafts, shares, leasing, grants) and how to weigh cost, terms and risk.",
      sections: [
        { heading: "Key idea", body: "Businesses raise finance internally (own funds) or externally (other people's money) — each with different costs and risks." },
        { heading: "Internal", body: "Retained profit and asset sales: cheap, no loss of control, but limited by profitability." },
        { heading: "External", body: "Loans and overdrafts must be repaid with interest; shares dilute ownership but have no fixed repayment; leasing spreads asset cost." },
      ],
    },
  ],
};
