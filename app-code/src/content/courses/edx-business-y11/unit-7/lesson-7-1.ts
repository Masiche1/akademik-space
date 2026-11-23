import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "ebz11-u7-lesson-7-1",
  code: "7-1",
  title: "Budgets and Financial Planning",
  goal: "I CAN explain the purpose and types of budgets and use budgets to monitor and control performance.",
  standards: ["Edexcel IGCSE Business 4BS0 — Finance: budgeting and financial planning"],
  
  vocabulary: [
    { term: "Budget", definition: "A plan expressed in financial terms showing expected income and expenditure over a period." },
    { term: "Cash budget", definition: "Budget forecasting expected cash inflows and outflows period by period." },
    { term: "Sales budget", definition: "Budget estimating expected sales revenue for a period." },
    { term: "Expenditure budget", definition: "Budget setting planned spending on costs such as materials, wages and overheads." },
    { term: "Budgetary control", definition: "Comparing actual results with the budget and taking corrective action on variances." },
    { term: "Adverse variance", definition: "When actual results are worse than budgeted (higher costs or lower revenue than planned)." },
    { term: "Favourable variance", definition: "When actual results are better than budgeted (lower costs or higher revenue than planned)." },
  ],
  concepts: [
    {
      id: "ebz11-u7-budgets",
      title: "Budgets and Their Purpose",
      skill: "Identify budget types and explain why businesses prepare budgets.",
      lesson: {
        sections: [
          {
            heading: "What budgets are for",
            body: "A **budget** is a financial plan for a future period. Budgets force managers to think ahead, coordinate departments (sales plans drive production plans), set targets and provide a benchmark for measuring performance. Without budgets, businesses cannot tell whether they are spending too much or earning enough.",
          },
          {
            heading: "Types of budget",
            body: "**Sales budget** — forecast revenue; drives all other budgets. **Production/materials budget** — quantities needed to meet sales. **Expenditure/cost budget** — planned spending on wages, raw materials, rent, advertising. **Cash budget** — timing of cash in and out; predicts shortages or surpluses. **Master budget** — combines all budgets into an overall plan including profit.",
          },
          {
            heading: "Advantages and disadvantages",
            body: "**Advantages**: better planning and coordination; clear targets for managers; early warning of cash problems; basis for performance appraisal. **Disadvantages**: based on estimates — can be inaccurate; rigid, may discourage spending that would benefit the business; time-consuming to prepare; demotivating if targets are unrealistic.",
          },
        ],
        keyFormulas: [
          { name: "Budget", statement: "planned income − planned expenditure for a period" },
          { name: "Variance", statement: "actual result − budgeted result" },
        ],
        workedExample: {
          problem: "A business budgets sales of £80,000 and costs of £65,000. Actual sales are £85,000 and actual costs are £70,000. Calculate budgeted profit and actual profit, and the variance.",
          solution: "Budgeted profit = 80,000 − 65,000 = £15,000. Actual profit = 85,000 − 70,000 = £15,000. Profit variance = 15,000 − 15,000 = £0 — sales and costs were both £5,000 above budget, so profit matched the plan.",
        },
      },
      questions: [
        {
          id: "ebz11-u7-budgets-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which statement best defines a budget?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A record of past sales"
                    },
                    {
                              "id": "b",
                              "text": "A financial plan of expected income and expenditure"
                    },
                    {
                              "id": "c",
                              "text": "A bank loan agreement"
                    },
                    {
                              "id": "d",
                              "text": "A list of employees"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Budget",
                              "statement": "A financial plan for a future period."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A budget plans expected income and spending.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** A financial plan of expected income and expenditure"
},
        },
        {
          id: "ebz11-u7-budgets-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give three types of budget and state the purpose of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Budget types",
                              "statement": "Sales, production, expenditure, cash, master."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sales budget — forecast revenue for the period.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Production/expenditure budget — planned output and costs.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Cash budget — forecast timing of cash in and out.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Sales, production/expenditure and cash budgets each with a correct purpose.",
          "commonErrors": [
                    "Listing types without purposes.",
                    "Confusing budget with forecast only."
          ]
},
        },
        {
          id: "ebz11-u7-budgets-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two advantages and one disadvantage of using budgets in a business.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Budgeting",
                              "statement": "Planning tool with coordination benefits and rigidity costs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Advantage 1: improves planning and coordinates departments (e.g. sales drives production).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Advantage 2: sets targets and enables performance measurement/early cash warnings.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Disadvantage: based on estimates — can be inaccurate or demotivating if unrealistic.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Two advantages (planning/coordination, targets/control) and one valid disadvantage (estimates/rigidity).",
          "commonErrors": [
                    "Only advantages or only disadvantages.",
                    "Vague points without explanation."
          ]
},
        },
        {
          id: "ebz11-u7-budgets-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A café prepares a monthly budget.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State which budget would cover expected takings from customers.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain one reason why the café might produce a cash budget as well as a sales budget.",
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
                              "name": "Applying budgets",
                              "statement": "Match budget type to purpose; cash timing matters."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Sales budget — it forecasts expected revenue/takings.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Sales budget shows revenue but not when cash arrives.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Cash budget reveals timing gaps (e.g. slow card payments vs rent due).",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Helps avoid cash shortages even when sales look healthy.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) Sales budget. (b) Cash timing differs from sales — cash budget prevents shortages.",
          "commonErrors": [
                    "Choosing cash budget for (a).",
                    "No link between timing and shortage."
          ]
},
        },
        {
          id: "ebz11-u7-budgets-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A business budgets costs of £50,000 for a quarter but actual costs are £58,000.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the cost variance and state whether it is favourable or adverse.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Give two possible reasons for this variance.",
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
                              "name": "Variance",
                              "statement": "actual − budget; higher cost = adverse."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Variance = 58,000 − 50,000 = £8,000 over budget.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Costs above budget = adverse variance.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Possible cause: prices of materials rose unexpectedly.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Possible cause: higher output/overstaffing or waste.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) £8,000 adverse. (b) e.g. material price rises, higher output or waste.",
          "commonErrors": [
                    "Wrong direction (calling it favourable).",
                    "No calculation shown."
          ]
},
        },
        {
          id: "ebz11-u7-budgets-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A growing business wants to improve its financial planning.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define the term budget.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Name four types of budget a business might prepare.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain two advantages of budgeting for this business.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "Explain two disadvantages of budgeting that managers should be aware of.",
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
                              "name": "Budgeting evaluation",
                              "statement": "Budgets plan and control, but rely on estimates."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Financial plan of expected income/expenditure for a period.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Any four of: sales, production/materials, expenditure/cost, cash, master.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Advantage: forces forward planning and coordinates departments.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Advantage: sets targets and gives early warning of cash problems.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Disadvantage: based on estimates — can be inaccurate/unrealistic.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "d"
                    },
                    {
                              "reasoning": "(d) Disadvantage: rigid — may discourage beneficial spending; time-consuming.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "d"
                    }
          ],
          "finalAnswer": "Budgets = financial plans; types, advantages (planning/control) and disadvantages (estimates/rigidity) explained.",
          "commonErrors": [
                    "Missing a part.",
                    "Advantages and disadvantages swapped."
          ]
},
        },
      ],
    },
    {
      id: "ebz11-u7-budget-control",
      title: "Budgetary Control and Financial Planning",
      skill: "Use variances to monitor performance and link budgets to financial plans.",
      lesson: {
        sections: [
          {
            heading: "Variance analysis",
            body: "**Variance = actual result − budgeted result**. For revenue, actual above budget = **favourable**; for costs, actual below budget = **favourable**. Adverse variances signal a problem needing investigation — e.g. sales below target or costs above plan. Managers compare each budget line, identify causes and take corrective action (budgetary control).",
          },
          {
            heading: "Financial planning",
            body: "Budgets are part of wider **financial planning**: forecasting sales, costs and cash needs for the year ahead. Businesses use forecasts (based on past data and market trends) to set the master budget, decide on investment and arrange finance. Planning reduces surprises — e.g. knowing a cash gap is coming lets the business arrange an overdraft before it is needed.",
          },
        ],
        keyFormulas: [
          { name: "Variance", statement: "actual − budget (sign interpreted by cost vs revenue)" },
          { name: "Budgeted profit", statement: "budgeted revenue − budgeted costs" },
        ],
        workedExample: {
          problem: "Budgeted sales £120,000; actual sales £105,000. Budgeted costs £90,000; actual costs £88,000. Find the sales variance, cost variance and profit variance.",
          solution: "Sales variance = 105,000 − 120,000 = −£15,000 (adverse). Cost variance = 88,000 − 90,000 = −£2,000 actual vs budget — costs £2,000 below budget = favourable £2,000. Budgeted profit £30,000; actual profit 105,000 − 88,000 = £17,000; profit variance = £13,000 adverse.",
        },
      },
      questions: [
        {
          id: "ebz11-u7-budget-control-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does a favourable cost variance mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Costs were higher than budget"
                    },
                    {
                              "id": "b",
                              "text": "Costs were lower than budget"
                    },
                    {
                              "id": "c",
                              "text": "Sales were higher than budget"
                    },
                    {
                              "id": "d",
                              "text": "The budget was cancelled"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Favourable variance",
                              "statement": "Actual better than budget."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Favourable for costs = spent less than planned.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Costs were lower than budget"
},
        },
        {
          id: "ebz11-u7-budget-control-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Budgeted sales are £100,000 and actual sales are £112,000. Calculate the sales variance and state whether it is favourable or adverse.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "variance (£)",
                              "answer": 12000
                    },
                    {
                              "label": "favourable? (1 = yes, 0 = no)",
                              "answer": 1
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Variance",
                              "statement": "actual − budget; revenue above budget = favourable."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Variance = 112,000 − 100,000 = £12,000.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Sales above budget = favourable.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "£12,000 favourable",
          "commonErrors": [
                    "Wrong sign.",
                    "Wrong favourable/adverse label."
          ]
},
        },
        {
          id: "ebz11-u7-budget-control-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain what budgetary control involves and why businesses use it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Budgetary control",
                              "statement": "Compare actual vs budget; act on variances."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compare actual results with each budget line at intervals.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Calculate variances and identify adverse ones needing attention.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Investigate causes of variances — price changes, waste, demand shifts.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Take corrective action so year-end results stay on plan.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Monitor actual vs budget, investigate variances, take corrective action.",
          "commonErrors": [
                    "Only describing variance calculation.",
                    "No mention of corrective action."
          ]
},
        },
        {
          id: "ebz11-u7-budget-control-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A retailer's sales budget for December was £200,000. Actual sales were £175,000.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the sales variance and state whether it is favourable or adverse.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Give two possible reasons for this variance.",
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
                              "name": "Revenue variance",
                              "statement": "actual − budget; below budget = adverse."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Variance = 175,000 − 200,000 = −£25,000.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Sales below budget = £25,000 adverse.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Possible cause: weaker consumer demand or competitor promotion.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Possible cause: stock shortages, poor staff or bad weather reducing footfall.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) £25,000 adverse. (b) e.g. lower demand, competitor promotion, stock issues.",
          "commonErrors": [
                    "Sign error.",
                    "Labelling adverse as favourable."
          ]
},
        },
        {
          id: "ebz11-u7-budget-control-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A business is preparing its financial plan for next year.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why the sales budget is usually prepared before other budgets.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain how a cash budget differs from a sales budget.",
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
                              "name": "Budget hierarchy",
                              "statement": "Sales forecast drives production, expenditure and cash budgets."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Expected sales determine how much must be produced and bought.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Production and materials budgets depend on sales volume.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Expenditure budgets are built on the costs of meeting sales.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Sales budget = expected revenue; cash budget = timing of inflows/outflows.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Sales may be credit — cash arrives later; cash budget captures this gap.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) Sales drives all other budgets. (b) Sales=volume; cash=timing of payments.",
          "commonErrors": [
                    "Treating cash and sales budgets as identical.",
                    "No dependency explained."
          ]
},
        },
        {
          id: "ebz11-u7-budget-control-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A business prepared budgets but year-end results differ significantly from plan.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define variance and state how a favourable cost variance is identified.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Budgeted profit was £40,000; actual profit was £28,000. Calculate the profit variance and state whether it is favourable or adverse.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain two reasons why actual results may differ from budgets.",
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
                              "name": "Budget control",
                              "statement": "Variance = actual − budget; investigate and correct."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Variance = actual result − budgeted result.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Favourable cost variance = actual costs below budget.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Variance = 28,000 − 40,000 = −£12,000.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Profit below budget = £12,000 adverse.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Reason: budgets are estimates — demand, prices or costs changed unexpectedly.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Reason: poor budgetary control during the year — variances not acted on early.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) variance=actual−budget; (b) £12,000 adverse; (c) estimates wrong / weak control.",
          "commonErrors": [
                    "Missing calculation.",
                    "Reasons that repeat the same point."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebz11-u7-budgets-notes",
      title: "Budgets — revision notes",
      summary: "Budgets = financial plans. Types: sales, production, expenditure, cash, master. Variance = actual − budget; favourable = better than plan. Budgets coordinate, target and warn; they rely on estimates.",
      sections: [
        { heading: "Key idea", body: "Sales budget drives production, expenditure and cash budgets — prepare it first." },
        { heading: "Variance", body: "Revenue above budget or costs below budget = favourable; the reverse = adverse." },
        { heading: "Evaluation", body: "Budgets improve planning and control but are only as good as their forecasts." },
      ],
    },
  ],
};
