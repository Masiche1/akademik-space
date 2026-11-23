import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "ebz11-u7-lesson-7-2",
  code: "7-2",
  title: "Investment Appraisal",
  goal: "I CAN calculate payback period and return on investment and evaluate investment decisions.",
  standards: ["Edexcel IGCSE Business 4BS0 — Finance: investment appraisal"],
  
  vocabulary: [
    { term: "Investment appraisal", definition: "Techniques used to decide whether a project or asset is worth investing in." },
    { term: "Payback period", definition: "Time taken for cumulative cash inflows to cover the initial investment." },
    { term: "Return on investment (ROI)", definition: "Profit as a percentage of the amount invested." },
    { term: "Average annual profit", definition: "Total profit over the project life divided by the number of years." },
    { term: "Non-financial factors", definition: "Considerations that cannot be measured in money, e.g. environmental impact or staff morale." },
  ],
  concepts: [
    {
      id: "ebz11-u7-appraisal",
      title: "Payback and Return on Investment",
      skill: "Calculate and interpret payback period and ROI for investment projects.",
      lesson: {
        sections: [
          {
            heading: "Payback period",
            body: "**Payback period = time for cumulative net cash inflows to equal the initial investment.** Shorter payback = less risk, capital recovered quickly. Where annual returns are equal, **payback = initial investment ÷ annual net cash inflow**. If returns differ by year, add inflows year by year until the investment is recovered.",
          },
          {
            heading: "Return on investment",
            body: "**ROI = average annual profit ÷ initial investment × 100%**. It measures profitability of the investment as a percentage. Compare ROI across projects or against alternatives (e.g. bank interest). **Average annual profit = total profit ÷ number of years**. Note: ROI ignores the time value of money and is based on profit, not cash flow.",
          },
        ],
        keyFormulas: [
          { name: "Payback", statement: "initial investment ÷ annual net cash inflow (years)" },
          { name: "ROI", statement: "(average annual profit ÷ initial investment) × 100" },
          { name: "Average annual profit", statement: "total profit ÷ project life in years" },
        ],
        workedExample: {
          problem: "A machine costs £60,000 and generates net cash inflows of £20,000, £25,000, £15,000, £10,000 over four years. Find the payback period.",
          solution: "Cumulative inflows: year 1 = 20,000; year 2 = 45,000; year 3 = 60,000. The investment is fully recovered during year 3, so payback = 3 years (reached at the end of year 3).",
        },
      },
      questions: [
        {
          id: "ebz11-u7-appraisal-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does the payback period measure?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Total profit of a project"
                    },
                    {
                              "id": "b",
                              "text": "Time taken to recover the initial investment"
                    },
                    {
                              "id": "c",
                              "text": "Annual interest earned"
                    },
                    {
                              "id": "d",
                              "text": "Number of employees needed"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Payback period",
                              "statement": "Time to recover the initial investment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Payback = time until cumulative inflows cover the cost.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Time to recover the investment"
},
        },
        {
          id: "ebz11-u7-appraisal-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "A project costs £40,000 and is expected to generate net cash inflows of £10,000 per year. Calculate the payback period.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "payback (years)",
                              "answer": 4,
                              "tolerance": 0
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Payback",
                              "statement": "investment ÷ annual inflow."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Payback = 40,000 ÷ 10,000 = 4 years.",
                              "marks": 3,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "4 years",
          "commonErrors": [
                    "Dividing by the wrong figure.",
                    "Answering in months without converting."
          ]
},
        },
        {
          id: "ebz11-u7-appraisal-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "A project costs £50,000 and makes an average annual profit of £8,000 over 5 years. Calculate the return on investment.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "ROI (%)",
                              "answer": 16,
                              "tolerance": 0.01
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "ROI",
                              "statement": "(average annual profit ÷ investment) × 100."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "ROI = (8,000 ÷ 50,000) × 100.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "ROI = 0.16 × 100 = 16%.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "16%",
          "commonErrors": [
                    "Forgetting ×100 (answering 0.16).",
                    "Using total profit instead of average annual."
          ]
},
        },
        {
          id: "ebz11-u7-appraisal-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A business compares two machines.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Machine A costs £30,000 with annual net cash inflow £7,500. Calculate its payback period.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Machine B costs £45,000 with annual net cash inflow £9,000. Calculate its payback period and state which machine has the shorter payback.",
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
                              "name": "Payback comparison",
                              "statement": "investment ÷ annual inflow; shorter is preferable."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Payback A = 30,000 ÷ 7,500 = 4 years.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Payback B = 45,000 ÷ 9,000 = 5 years.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Machine A has the shorter payback (4 < 5 years).",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) 4 years. (b) 5 years — Machine A shorter.",
          "commonErrors": [
                    "Calculation errors.",
                    "Comparing costs instead of payback."
          ]
},
        },
        {
          id: "ebz11-u7-appraisal-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A project costs £80,000. Expected annual profits are £12,000 for years 1-3 and £20,000 for years 4-5.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate total profit over the five years.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate the average annual profit.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Calculate the ROI and state what it means.",
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
                              "name": "ROI calculation",
                              "statement": "avg annual profit ÷ investment × 100."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Total profit = (12,000 × 3) + (20,000 × 2) = 36,000 + 40,000 = £76,000.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Average annual profit = 76,000 ÷ 5 = £15,200.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) ROI = (15,200 ÷ 80,000) × 100 = 19%.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) ROI 19% means the investment earns 19p profit per £1 invested per year on average.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) £76,000. (b) £15,200. (c) 19%.",
          "commonErrors": [
                    "Using total instead of average profit.",
                    "Forgetting ×100."
          ]
},
        },
        {
          id: "ebz11-u7-appraisal-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A firm must choose between investing £50,000 in Project X or Project Y.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define payback period.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Project X: annual net cash inflow £12,500. Calculate the payback period.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Project Y: net cash inflows £10,000 (year 1), £15,000 (year 2), £25,000 (year 3). Calculate the payback period.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "Explain one limitation of the payback method when comparing projects.",
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
                              "name": "Investment appraisal",
                              "statement": "Payback measures speed of return; ignores later years and profit levels."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Time for cumulative cash inflows to recover the initial investment.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Payback X = 50,000 ÷ 12,500 = 4 years.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Cumulative: 10,000; 25,000; 50,000 — recovered during year 3.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Payback Y = 3 years.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Limitation: ignores cash flows after payback — a project with later high returns may be rejected.",
                              "marks": 3,
                              "markCode": "AO3",
                              "part": "d"
                    }
          ],
          "finalAnswer": "(a) time to recover investment; (b) 4 yrs; (c) 3 yrs; (d) ignores later cash flows.",
          "commonErrors": [
                    "Wrong cumulative calculation for Y.",
                    "Limitation that applies to ROI not payback."
          ]
},
        },
      ],
    },
    {
      id: "ebz11-u7-appraisal-eval",
      title: "Evaluating Investment Decisions",
      skill: "Assess strengths and weaknesses of appraisal methods and non-financial factors.",
      lesson: {
        sections: [
          {
            heading: "Strengths and limitations",
            body: "**Payback**: simple, quick, focuses on risk and cash recovery — but ignores total profit and cash flows after payback, and treats all projects with the same payback as equal. **ROI**: shows profitability as a percentage, easy to compare — but based on profit (not cash), ignores timing of returns, and average annual profit can hide uneven returns. Neither method considers the **time value of money** (a £1 received next year is worth more than £1 in five years).",
          },
          {
            heading: "Non-financial factors",
            body: "Appraisal methods only measure money. Decisions also depend on factors that cannot be easily quantified: environmental impact, staff training needs, reputation, legal requirements, whether the project fits the firm's strategy, and staff morale or safety. A project with a good payback may still be rejected if it damages the firm's image or breaches environmental rules — and a project with a modest return may be chosen for strategic reasons.",
          },
        ],
        keyFormulas: [
          { name: "Decision rule", statement: "shorter payback / higher ROI generally preferred, subject to non-financial factors" },
        ],
        workedExample: {
          problem: "Project A pays back in 2 years with ROI 12%; Project B pays back in 5 years with ROI 25%. Which should the business choose? Justify.",
          solution: "Depends on priorities. If cash flow and low risk matter (e.g. limited funds), choose A — capital recovered quickly. If long-term profitability matters and the firm can afford the wait, B gives a higher return. Also consider non-financial factors: market growth, strategic fit, environmental impact.",
        },
      },
      questions: [
        {
          id: "ebz11-u7-appraisal-eval-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is an advantage of the payback method?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "It measures total profit over the project life"
                    },
                    {
                              "id": "b",
                              "text": "It is simple and shows how quickly capital is recovered"
                    },
                    {
                              "id": "c",
                              "text": "It accounts for the time value of money"
                    },
                    {
                              "id": "d",
                              "text": "It includes non-financial factors"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Payback strengths",
                              "statement": "Simple; focuses on capital recovery and risk."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Payback is simple and highlights liquidity/risk.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Simple; shows speed of capital recovery"
},
        },
        {
          id: "ebz11-u7-appraisal-eval-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "State one limitation of using ROI to compare investment projects.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "ROI limitations",
                              "statement": "Profit-based; ignores timing and cash flow."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "ROI uses profit not cash flow, and ignores when returns occur.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Two projects with the same ROI can have very different risk profiles.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Averaging can hide uneven or back-loaded returns.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Any valid limitation: profit-based, ignores timing/risk, averaging hides uneven returns.",
          "commonErrors": [
                    "Repeating a strength as a limitation."
          ]
},
        },
        {
          id: "ebz11-u7-appraisal-eval-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why a business should consider non-financial factors when appraising an investment.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Non-financial factors",
                              "statement": "Appraisal methods only measure money."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Payback and ROI only capture financial returns.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Projects may affect environment, staff morale, reputation or legal compliance.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Strategic fit matters — a project may support long-term goals beyond this year's profit.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Ignoring these can lead to decisions that are profitable but harmful or illegal.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Appraisal methods measure only money; environment, strategy, morale and legal factors can change the decision.",
          "commonErrors": [
                    "Only listing factors without explaining why they matter."
          ]
},
        },
        {
          id: "ebz11-u7-appraisal-eval-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Project P pays back in 3 years with ROI of 14%. The firm could instead leave money in a savings account earning 5% interest.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain how the business should use the savings-account comparison in its decision.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Give two non-financial factors the business should also consider.",
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
                              "name": "Opportunity cost",
                              "statement": "Investment must beat the best alternative use of funds."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Compare ROI 14% with 5% — the project earns more, so it is financially attractive.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Valid factor: environmental impact of the project.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Valid factor: effect on staff training/morale or strategic fit with firm goals.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) ROI 14% > 5% interest so project beats the alternative. (b) e.g. environment, morale, strategy.",
          "commonErrors": [
                    "Ignoring the alternative return.",
                    "Repeating financial factors in (b)."
          ]
},
        },
        {
          id: "ebz11-u7-appraisal-eval-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Two projects both have a payback period of 4 years.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why payback alone cannot decide between them.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State two other pieces of information the business should gather before deciding.",
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
                              "name": "Limits of payback",
                              "statement": "Same payback can hide very different total returns."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Payback ignores cash flows after year 4 — one project may earn far more later.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Same payback does not mean same total profit or risk profile.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Information: total expected profit / ROI for each project.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Information: non-financial factors — strategy fit, environmental impact, staffing needs.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) Payback ignores post-payback returns and total profit. (b) ROI/total profit and non-financial factors.",
          "commonErrors": [
                    "Saying payback is useless.",
                    "Gathering only financial data."
          ]
},
        },
        {
          id: "ebz11-u7-appraisal-eval-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A business is deciding whether to invest £100,000 in new machinery.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the formula for payback period and for ROI.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "The machinery gives net cash inflows of £25,000 per year for 4 years. Calculate the payback period.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Total profit over 4 years is £60,000. Calculate the ROI.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "Evaluate whether the business should go ahead, considering at least one limitation of the methods used.",
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
                              "name": "Appraisal decision",
                              "statement": "Use methods plus judgement; methods have limits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Payback = investment ÷ annual inflow; ROI = (avg annual profit ÷ investment) × 100.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Payback = 100,000 ÷ 25,000 = 4 years.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Average annual profit = 60,000 ÷ 4 = £15,000.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) ROI = (15,000 ÷ 100,000) × 100 = 15%.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Payback 4 years is relatively long; ROI 15% may or may not beat alternatives.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "d"
                    },
                    {
                              "reasoning": "(d) Limitation: methods ignore non-financial factors and cash-flow timing; decision needs judgement.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "d"
                    }
          ],
          "finalAnswer": "(a) formulas; (b) 4 yrs; (c) 15%; (d) evaluate with limitation.",
          "commonErrors": [
                    "Wrong ROI denominator.",
                    "No evaluation, just numbers."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebz11-u7-appraisal-notes",
      title: "Investment appraisal — revision notes",
      summary: "Payback = investment ÷ annual inflow (shorter = safer). ROI = avg annual profit ÷ investment × 100 (higher = more profitable). Both ignore non-financial factors and the time value of money.",
      sections: [
        { heading: "Key idea", body: "Payback measures speed of return; ROI measures profitability. Use both, plus non-financial factors." },
        { heading: "Common errors", body: "Using total instead of average profit for ROI; forgetting ×100; ignoring cash flows after payback." },
        { heading: "Evaluation", body: "Compare against the best alternative use of funds, e.g. interest earned elsewhere." },
      ],
    },
  ],
};
