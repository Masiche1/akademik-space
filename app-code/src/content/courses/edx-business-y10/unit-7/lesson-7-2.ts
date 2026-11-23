import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "ebz10-u7-lesson-7-2",
  code: "7-2",
  title: "Cash Flow and Budgets",
  goal: "I CAN forecast cash flow, identify cash-flow gaps and use budgets for control.",
  standards: ["Edexcel IGCSE Business 4BS0 — Financial Information and Decisions"],
  
  vocabulary: [
    { term: "Cash flow", definition: "Movement of cash into and out of a business over time." },
    { term: "Cash-flow forecast", definition: "Prediction of future cash inflows and outflows." },
    { term: "Cash-flow gap", definition: "Period when outflows exceed inflows." },
    { term: "Budget", definition: "Financial plan for a future period." },
    { term: "Variance", definition: "Difference between budgeted and actual figures." },
    { term: "Liquidity", definition: "Ability to pay short-term debts." },
  ],
  concepts: [
    {
      id: "ebz10-u7-cashflow",
      title: "Cash Flow Forecasting",
      skill: "Interpret a cash-flow forecast and manage cash-flow gaps.",
      lesson: {
        sections: [
          {
            heading: "Why cash flow matters",
            body: "Profit and cash are different: a profitable business can fail if it cannot pay bills on time. **Cash inflows** come from customers paying; **outflows** go to suppliers, wages, rent and loans. **Net cash flow** = inflows - outflows. A **cash-flow gap** is when outflows exceed inflows in a period — dangerous even for profitable firms.",
          },
          {
            heading: "Managing gaps",
            body: "A forecast shows future gaps before they happen. Remedies: delay payments, speed up collections (offer early-payment discounts), arrange an overdraft or loan, reduce spending, or build up reserves in good months. Regular forecasting is essential for survival.",
          },
        ],
        keyFormulas: [
          { name: "Net cash flow", statement: "Total inflows - total outflows" },
          { name: "Closing balance", statement: "Opening balance + net cash flow" },
        ],
        workedExample: {
          problem: "Opening balance £5 000. Inflows £20 000, outflows £24 000. What is the closing balance and is there a gap?",
          solution: "Net cash flow = £20 000 - £24 000 = -£4 000. Closing balance = £5 000 - £4 000 = £1 000. There is a gap of £4 000 but reserves prevent insolvency.",
        },
      },
      questions: [
        {
          id: "ebz10-u7-cf-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a cash-flow gap?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "When outflows exceed inflows in a period"
                    },
                    {
                              "id": "b",
                              "text": "When a business makes a loss"
                    },
                    {
                              "id": "c",
                              "text": "When sales are lower than expected"
                    },
                    {
                              "id": "d",
                              "text": "When stock runs out"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Cash-flow gap",
                              "statement": "Period where outflows exceed inflows."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A gap is a timing problem of cash, not necessarily a loss.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(a)** Outflows exceed inflows"
},
        },
        {
          id: "ebz10-u7-cf-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Why can a profitable business still run out of cash? Give two reasons.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Profit vs cash",
                              "statement": "Profit is earned; cash is received — timing differs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sales on credit mean revenue is earned before cash arrives.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Large one-off payments (tax, equipment) can drain cash.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Stockpiling inventory ties up cash without immediate return.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Credit sales delay cash; large payments and stock tie up cash."
},
        },
        {
          id: "ebz10-u7-cf-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two ways a business can reduce a forecast cash-flow gap.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Gap management",
                              "statement": "Bring forward inflows, delay outflows, or borrow."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Speed up collections — offer discounts for early payment or chase debtors.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Delay outflows — negotiate later payment terms with suppliers.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Arrange an overdraft or short-term loan to cover the gap.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Reduce discretionary spending in the gap period.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Collect faster, pay later, borrow, or cut spending."
},
        },
        {
          id: "ebz10-u7-cf-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A business forecasts: Month 1 opening balance £8 000, inflows £15 000, outflows £19 000. Month 2 opening balance £4 000, inflows £22 000, outflows £17 000.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate net cash flow and closing balance for each month.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain whether the business faces a liquidity problem.",
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
                              "name": "Cash-flow forecast",
                              "statement": "Closing balance = opening + net cash flow."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Month 1 net = £15 000 - £19 000 = -£4 000; closing = £8 000 - £4 000 = £4 000.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Month 2 net = £22 000 - £17 000 = +£5 000; closing = £4 000 + £5 000 = £9 000.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Month 1 shows a £4 000 gap but reserves cover it.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) No immediate liquidity crisis, but thin reserves increase risk if outflows rise.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "M1: -£4 000 / £4 000 closing; M2: +£5 000 / £9 000 closing; manageable but watch reserves."
},
        },
        {
          id: "ebz10-u7-cf-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A retailer expects seasonal sales: high inflows in December, low in January. Fixed outflows of £30 000 occur monthly.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why a cash-flow forecast is especially important for seasonal businesses.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Suggest two strategies the retailer could use in the low-cash month.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Seasonality",
                              "statement": "Uneven inflows create predictable gaps."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Inflows fluctuate while fixed costs continue every month.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Forecasting identifies the gap months in advance.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Allows planning reserves or finance before the gap.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Build cash reserves in peak months to cover January.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Arrange an overdraft or invoice factoring for the quiet period.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Reduce stock purchases or offer promotions to lift January sales.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) Fixed costs vs seasonal inflows — forecast reveals gap timing (b) reserves, overdraft, promotions."
},
        },
        {
          id: "ebz10-u7-cf-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A growing café forecasts opening balance £2 000, monthly inflows £12 000, outflows £13 500 in months 1-3, then inflows rising to £16 000 from month 4 while outflows stay £13 500.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the closing balance at the end of month 3.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Calculate the monthly net cash flow from month 4 onwards.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Evaluate the café's cash position and recommend two actions.",
                    "marks": 5
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Cash-flow analysis",
                              "statement": "Track balances across periods and evaluate risk."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Monthly net = £12 000 - £13 500 = -£1 500.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) After 3 months: £2 000 - (3 x £1 500) = £2 000 - £4 500.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Closing balance = -£2 500 — overdraft needed.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) From month 4: £16 000 - £13 500 = +£2 500 per month.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Position: cash-negative by month 3 despite growth in sales — forecast unreliability or slow collections likely.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Actions: arrange overdraft/short-term finance; improve collections or raise prices; delay equipment purchases.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Longer term, growth turns cash-positive from month 4, so short-term finance bridges the gap.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "End month 3: -£2 500; month 4+ net +£2 500; needs short-term finance until growth pays off."
},
        },
      ],
    },
    {
      id: "ebz10-u7-budgets",
      title: "Budgets and Variance",
      skill: "Explain budgets and use variances to control performance.",
      lesson: {
        sections: [
          {
            heading: "What budgets do",
            body: "A **budget** is a financial plan for a future period — sales, production, cash or expenditure budgets. Budgets set targets, coordinate departments and provide a benchmark for control. **Adverse variance** = actual worse than budget (overspend or undersell); **favourable variance** = actual better than budget.",
          },
          {
            heading: "Variance analysis",
            body: "Managers compare actual results with budget to find problems early. Causes of adverse variance include rising input prices, inefficiency, or unrealistic targets; favourable variance may mean underspending that harms quality. Variances should trigger investigation, not blame — some are outside management control.",
          },
        ],
        keyFormulas: [
          { name: "Variance", statement: "Actual result - budgeted result" },
          { name: "Adverse/favourable", statement: "Negative difference = adverse; positive = favourable" },
        ],
        workedExample: {
          problem: "Budgeted sales £50 000, actual £46 000. What is the variance and what does it mean?",
          solution: "Variance = £46 000 - £50 000 = -£4 000 — an adverse variance of £4 000; sales were below target.",
        },
      },
      questions: [
        {
          id: "ebz10-u7-budget-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a budget?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A financial plan for a future period"
                    },
                    {
                              "id": "b",
                              "text": "A record of past sales"
                    },
                    {
                              "id": "c",
                              "text": "A type of loan"
                    },
                    {
                              "id": "d",
                              "text": "A tax return"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Budget",
                              "statement": "Financial plan for a future period."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Budgets plan ahead and set targets.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(a)** Financial plan"
},
        },
        {
          id: "ebz10-u7-budget-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give two purposes of budgeting in a business.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Budget purposes",
                              "statement": "Planning, coordination, control."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Planning — sets targets and coordinates resources.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Control — provides a benchmark to compare actual results.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Motivation — gives staff clear objectives to work towards.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Planning, coordination, control and motivation."
},
        },
        {
          id: "ebz10-u7-budget-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the difference between an adverse variance and a favourable variance.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Variances",
                              "statement": "Actual vs budget."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Variance = actual result - budgeted result.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Adverse = actual worse than budget (overspend or undersell).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Favourable = actual better than budget.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Sign depends on the item — for costs, underspend is favourable.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Adverse = worse than budget; favourable = better than budget."
},
        },
        {
          id: "ebz10-u7-budget-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A department budgets £20 000 spending but actually spends £23 500. Revenue was budgeted at £60 000 but achieved £58 000.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate both variances.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain two possible causes and what management should do.",
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
                              "name": "Variance calculation",
                              "statement": "Actual - budget; sign shows direction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Cost variance = £23 500 - £20 000 = +£3 500 adverse.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Revenue variance = £58 000 - £60 000 = -£2 000 adverse.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Causes: input prices rose, inefficiency, or weaker demand than forecast.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Investigate causes; some may be external (price rises) beyond control.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Revise future budgets or take corrective action such as cost control.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "Costs +£3 500 adverse, revenue -£2 000 adverse; investigate causes and correct."
},
        },
        {
          id: "ebz10-u7-budget-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A business sets a sales budget of £120 000 but achieves only £105 000.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the variance and state whether it is adverse or favourable.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Give three possible reasons for the shortfall.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Sales variance",
                              "statement": "Actual sales - budgeted sales."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Variance = £105 000 - £120 000 = -£15 000 — adverse.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Lower demand due to economic downturn or competitor action.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Poor marketing or weaker promotion than planned.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Production or stock problems limiting supply.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Budget was unrealistic — set without market research.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "-£15 000 adverse; causes include weak demand, marketing, supply problems or bad forecasting."
},
        },
        {
          id: "ebz10-u7-budget-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A café budgets monthly revenue of £18 000 and costs of £15 000. Actual results: revenue £16 500, costs £14 200.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate budgeted profit and actual profit.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Calculate the revenue and cost variances and classify each.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate the café's performance and recommend two improvements to budgeting.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Budget control",
                              "statement": "Compare actual with budget; investigate variances."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Budgeted profit = £18 000 - £15 000 = £3 000.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Actual profit = £16 500 - £14 200 = £2 300.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Profit £700 below budget — both variances negative for revenue.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Revenue variance = -£1 500 adverse; cost variance = -£800 favourable (underspend).",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Classify both correctly.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Performance: profitable but below plan; cost underspend may mean lower quality or less stock.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Improvements: investigate revenue shortfall causes; use rolling budgets; involve managers in setting targets.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Budgeted £3 000, actual £2 300; revenue -£1 500 adverse, costs -£800 favourable; investigate revenue and check quality of underspend."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebz10-u7-fin2-notes",
      title: "Cash flow and budgets — notes",
      summary: "Profit is not cash; forecast gaps early. Budgets set targets; variances trigger control.",
      sections: [
        { heading: "Cash flow", body: "Net cash flow = inflows - outflows; closing balance = opening + net. Gaps need finance or timing fixes." },
        { heading: "Budgets", body: "Plan ahead, set targets, compare actual vs budget. Adverse variance = worse than plan." },
        { heading: "Control", body: "Investigate variances, distinguish controllable from external causes, update budgets." },
      ],
    },
  ],
};
