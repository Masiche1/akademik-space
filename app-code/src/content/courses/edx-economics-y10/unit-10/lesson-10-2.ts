import type { Lesson } from "../../../types.ts";

export const lesson162: Lesson = {
  id: "ecn10-u10-lesson-10-2",
  code: "10-2",
  title: "Business Accounts and Cash Flow",
  goal: "I CAN read an income statement, explain profit versus cash flow and use cash-flow forecasts.",
  standards: ["Edexcel IGCSE Economics 4EC1 — Business finance"],
  
  vocabulary: [
    { term: "Revenue", definition: "Total income from sales before costs." },
    { term: "Cost of sales", definition: "Direct costs of producing goods sold — materials and labour." },
    { term: "Gross profit", definition: "Revenue minus cost of sales." },
    { term: "Net profit", definition: "Profit remaining after all costs, interest and tax." },
    { term: "Cash flow", definition: "Movement of money into and out of the business." },
    { term: "Cash-flow forecast", definition: "Prediction of expected receipts and payments over time." },
  ],
  concepts: [
    {
      id: "ecn10-u10-acc",
      title: "Income Statements and Profit",
      skill: "Calculate and interpret gross profit, operating profit and net profit.",
      lesson: {
        sections: [
          {
            heading: "The income statement",
            body: "An **income statement** shows performance over a period. **Revenue** (sales) minus **cost of sales** gives **gross profit**. Subtract other expenses — wages, rent, marketing — to get **operating profit**. Deduct **interest** to get **profit before tax**; deduct **tax** to get **net profit** (profit after tax).",
          },
          {
            heading: "Profit is not cash",
            body: "**Accrual accounting** records sales when made, not when paid — so revenue can include unpaid credit sales. Costs like **depreciation** are non-cash charges spread over an asset's life. A firm can be profitable yet short of cash because money is tied up in stock, owed by debtors, or spent on equipment.",
          },
        ],
        keyFormulas: [
          { name: "Gross profit", statement: "Gross profit = revenue − cost of sales" },
          { name: "Net profit", statement: "Net profit = revenue − all costs including interest and tax" },
        ],
        workedExample: {
          problem: "Revenue £50,000, cost of sales £30,000, other expenses £8,000, tax £2,000. Calculate gross, operating and net profit.",
          solution: "Gross profit = 50,000 − 30,000 = £20,000. Operating profit = 20,000 − 8,000 = £12,000. Net profit = 12,000 − 2,000 = £10,000.",
        },
      },
      questions: [
        {
          id: "ecn10-u10-acc-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Gross profit is calculated as:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Revenue minus all costs including tax"
                    },
                    {
                              "id": "b",
                              "text": "Revenue minus cost of sales"
                    },
                    {
                              "id": "c",
                              "text": "Cost of sales minus revenue"
                    },
                    {
                              "id": "d",
                              "text": "Revenue minus interest only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Gross profit",
                              "statement": "Revenue − cost of sales."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gross profit strips out only the direct costs of producing what was sold; other expenses come later.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Revenue minus cost of sales",
          "commonErrors": [
                    "Confusing gross profit with net profit."
          ]
},
        },
        {
          id: "ecn10-u10-acc-q2",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "A business records revenue of £50,000, cost of sales of £30,000, other expenses of £8,000 and tax of £2,000.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Gross profit",
                              "answer": 20000,
                              "unit": "£"
                    },
                    {
                              "label": "Profit before tax",
                              "answer": 12000,
                              "unit": "£"
                    },
                    {
                              "label": "Net profit",
                              "answer": 10000,
                              "unit": "£"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Profit steps",
                              "statement": "GP = revenue − cost of sales; PBT = GP − other expenses; NP = PBT − tax"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gross profit = 50,000 − 30,000 = £20,000.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Profit before tax = 20,000 − 8,000 = £12,000.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Net profit = 12,000 − 2,000 = £10,000.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "GP £20,000; PBT £12,000; NP £10,000",
          "commonErrors": [
                    "Deducting tax before expenses or skipping a step."
          ]
},
        },
        {
          id: "ecn10-u10-acc-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the difference between profit and cash flow.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Profit vs cash flow",
                              "statement": "Profit measures performance; cash flow measures money in and out."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Profit is revenue minus costs over a period, including non-cash items like depreciation.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Cash flow tracks actual money received and paid — credit sales count as revenue but not yet as cash.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Profit = earned minus spent on paper; cash flow = money actually moving in and out.",
          "commonErrors": [
                    "Treating them as identical concepts."
          ]
},
        },
        {
          id: "ecn10-u10-acc-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A firm's net profit rose by £15,000 this year, yet its bank balance fell by £9,000. Explain two reasons why this can happen.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Profit vs cash",
                              "statement": "Timing differences between earning profit and receiving/spending cash."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Credit sales: revenue counted in profit may not have been collected in cash yet — debtors owe money.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Cash spent on long-term assets or stock build-up reduces the bank balance without appearing as an expense in the same period.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Non-cash items such as depreciation reduce profit but never touched the bank account.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Profit is earned on credit and accruals; the bank balance reflects actual cash timing.",
          "commonErrors": [
                    "Saying the accounts must be wrong without timing explanation."
          ]
},
        },
        {
          id: "ecn10-u10-acc-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A business records: sales revenue £120,000; cost of sales £78,000; wages £20,000; rent £8,000; interest £4,000; tax £3,000.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the gross profit and the operating profit.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Calculate the profit before tax and the net profit.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Income statement",
                              "statement": "GP = revenue − cost of sales; NP = GP − expenses − interest − tax"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Gross profit = 120,000 − 78,000 = £42,000.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Operating profit = 42,000 − 20,000 − 8,000 = £14,000.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Profit before tax = 14,000 − 4,000 = £10,000.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Net profit = 10,000 − 3,000 = £7,000.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) GP £42,000; operating profit £14,000 (b) PBT £10,000; NP £7,000",
          "commonErrors": [
                    "Deducting interest from gross profit or forgetting tax."
          ]
},
        },
        {
          id: "ecn10-u10-acc-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A company's income statement shows a healthy profit. Assess whether this proves the business is financially healthy.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain what an income statement does show about a business.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain two things an income statement does not reveal about financial health.",
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
                              "name": "Limits of accounts",
                              "statement": "Income statements show performance, not liquidity or solvency."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) It shows whether revenue exceeds costs — profitability over the period.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) It allows comparison of gross, operating and net margins — efficiency and cost control.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) It ignores cash timing — a profitable firm can still face cash shortages from credit sales or asset purchases.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) It says nothing about liquidity, debt levels or whether the firm can pay its bills — that needs the balance sheet and cash-flow forecast.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Conclusion: profit is necessary but not sufficient — health also requires cash, liquidity and sustainable debt.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Profit alone does not prove financial health — cash flow, liquidity and debt matter too.",
          "commonErrors": [
                    "One-sided answer without mentioning cash or balance sheet."
          ]
},
        },
      ],
    },
    {
      id: "ecn10-u10-cash",
      title: "Cash-Flow Forecasts and Survival",
      skill: "Use a cash-flow forecast and explain why profitable firms can fail.",
      lesson: {
        sections: [
          {
            heading: "Building a cash-flow forecast",
            body: "A **cash-flow forecast** lists expected **cash receipts** (sales paid in cash, debtors paying) and **cash payments** (suppliers, wages, rent, loan repayments, tax) month by month. **Net cash flow = receipts − payments**; the **closing balance = opening balance + net cash flow**. Negative balances signal when the firm may need an overdraft.",
          },
          {
            heading: "Why profitable firms fail",
            body: "Profits can rise while cash runs out: credit sales delay receipts; buying stock or equipment drains cash; loan and dividend payments are fixed. **Liquidity** — the ability to pay short-term debts — matters more for survival than paper profit. Firms manage this by chasing debtors, delaying supplier payments, arranging overdrafts and keeping cash reserves.",
          },
        ],
        keyFormulas: [
          { name: "Net cash flow", statement: "Net cash flow = cash receipts − cash payments" },
          { name: "Closing balance", statement: "Closing balance = opening balance + net cash flow" },
        ],
        workedExample: {
          problem: "Opening balance £10,000. Receipts £45,000; payments £40,000. Find net cash flow and closing balance.",
          solution: "Net cash flow = 45,000 − 40,000 = £5,000. Closing balance = 10,000 + 5,000 = £15,000.",
        },
      },
      questions: [
        {
          id: "ecn10-u10-cf-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The main purpose of a cash-flow forecast is to:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Calculate the firm's annual profit"
                    },
                    {
                              "id": "b",
                              "text": "Predict when cash may run short"
                    },
                    {
                              "id": "c",
                              "text": "Pay the firm's tax bill"
                    },
                    {
                              "id": "d",
                              "text": "Set the price of products"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Cash-flow forecast",
                              "statement": "Predicted receipts and payments used to spot cash shortages."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "By projecting receipts and payments, the firm sees future balances and can plan finance before cash runs out.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Predict when cash may run short",
          "commonErrors": [
                    "Confusing cash-flow forecasting with profit calculation."
          ]
},
        },
        {
          id: "ecn10-u10-cf-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "State three items that would appear in a firm's cash-flow forecast.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Cash-flow forecast items",
                              "statement": "Expected receipts and payments over time."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Expected sales receipts — cash and credit customers paying.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Payments to suppliers and for wages and rent.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Loan repayments, tax payments or capital spending.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Any three: sales receipts, supplier payments, wages, rent, loan repayments, tax.",
          "commonErrors": [
                    "Listing non-cash items such as depreciation."
          ]
},
        },
        {
          id: "ecn10-u10-cf-q3",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "A firm's cash-flow forecast shows: opening balance £10,000; expected receipts £45,000; payments to suppliers £20,000, wages £15,000, rent £3,000 and a loan repayment £2,000.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Net cash flow",
                              "answer": 5000,
                              "unit": "£"
                    },
                    {
                              "label": "Closing balance",
                              "answer": 15000,
                              "unit": "£"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Cash flow",
                              "statement": "Net flow = receipts − payments; closing = opening + net"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Total payments = 20,000 + 15,000 + 3,000 + 2,000 = £40,000.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Net cash flow = 45,000 − 40,000 = £5,000; closing = 10,000 + 5,000 = £15,000.",
                              "marks": 3,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Net cash flow £5,000; closing balance £15,000",
          "commonErrors": [
                    "Forgetting the loan repayment in total payments."
          ]
},
        },
        {
          id: "ecn10-u10-cf-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain why a profitable business can still run out of cash.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Cash vs profit",
                              "statement": "Profit is earned on credit; cash arrives later or is spent on assets."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sales on credit count as revenue/profit but cash arrives weeks or months later — debtors must pay.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Cash spent buying stock, equipment or paying dividends is not an expense in the same period — it drains the bank.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Fixed obligations — loan repayments, rent, wages — must be paid even when receipts are delayed.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Timing gaps between earning profit and receiving/paying cash can bankrupt a profitable firm.",
          "commonErrors": [
                    "Saying profit equals cash — the core misconception."
          ]
},
        },
        {
          id: "ecn10-u10-cf-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A firm's cash-flow forecast shows a negative balance of £5,000 in month 3.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain what the negative balance means and one likely cause.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Suggest two ways the firm could avoid the cash shortage.",
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
                              "name": "Cash shortage",
                              "statement": "Forecast warnings allow action before insolvency."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Negative balance means payments exceed receipts — the firm cannot cover its bills in month 3.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Likely cause: seasonal sales dip or a large payment (e.g., tax or equipment) falling in that month.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Arrange an overdraft or short-term loan to cover the gap.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Speed up receipts — chase debtors, offer early-payment discounts; or delay payments to suppliers.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) cannot pay bills — seasonal dip or big payment (b) overdraft; faster receipts or delayed payments",
          "commonErrors": [
                    "Suggesting 'raise prices' without addressing the timing problem."
          ]
},
        },
        {
          id: "ecn10-u10-cf-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Assess the view that managing cash flow matters more than making a profit.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two reasons why cash flow is vital for survival.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain two reasons why profit still matters.",
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
                              "name": "Cash vs profit",
                              "statement": "Cash keeps the firm alive; profit determines long-run viability."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Reason 1: bills, wages and loan repayments need actual cash — no cash means insolvency.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Reason 2: cash flow warnings let firms plan finance before crisis — survival tool.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Reason 1: sustained losses mean the business model fails — cash flow alone cannot fix that.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Reason 2: profit funds growth, rewards owners and shows efficiency — the long-run objective.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Conclusion: cash flow is more urgent short-term but profit matters long-term — a firm needs both.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Cash flow ensures survival now; profit ensures viability later — neither alone is sufficient.",
          "commonErrors": [
                    "One-sided claim that one measure is everything."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecn10-u10-lesson-10-2-notes",
      title: "Business Accounts and Cash Flow — notes",
      summary: "Income statement structure, profit versus cash, cash-flow forecasts and why profitable firms can fail.",
      sections: [
        { heading: "Key idea", body: "Accounts measure performance (profit); cash flow measures survival — they answer different questions." },
        { heading: "Income statement", body: "Revenue − cost of sales = gross profit; − expenses = operating profit; − interest − tax = net profit." },
        { heading: "Cash flow", body: "Forecast receipts minus payments each month; negative balances need overdrafts, faster debtor collection or delayed payments." },
      ],
    },
  ],
};
