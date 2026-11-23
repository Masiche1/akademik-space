import type { Lesson } from "../../../types.ts";

export const lesson163: Lesson = {
  id: "ecn10-u10-lesson-10-3",
  code: "10-3",
  title: "Financial Analysis and Planning",
  goal: "I CAN calculate and interpret profitability ratios, liquidity ratios, break-even and budgets.",
  standards: ["Edexcel IGCSE Economics 4EC1 — Business finance"],
  
  vocabulary: [
    { term: "Gross profit margin", definition: "Gross profit as a percentage of sales." },
    { term: "Net profit margin", definition: "Net profit as a percentage of sales." },
    { term: "Break-even", definition: "Level of output where total revenue equals total cost." },
    { term: "Margin of safety", definition: "How far sales exceed break-even sales." },
    { term: "Current ratio", definition: "Current assets divided by current liabilities." },
    { term: "Budget", definition: "A financial plan compared against actual results." },
  ],
  concepts: [
    {
      id: "ecn10-u10-rat",
      title: "Profitability Ratios and Break-even",
      skill: "Calculate gross and net profit margins, break-even output and margin of safety.",
      lesson: {
        sections: [
          {
            heading: "Profitability ratios",
            body: "**Gross profit margin** = (gross profit ÷ sales) × 100 — shows pricing power over direct costs. **Net profit margin** = (net profit ÷ sales) × 100 — shows overall efficiency after all costs. Compare margins over time and with rivals; a falling margin signals rising costs or weaker pricing.",
          },
          {
            heading: "Break-even analysis",
            body: "Each unit sold earns a **contribution** = price − variable cost per unit. **Break-even output** = fixed costs ÷ contribution. **Margin of safety** = actual sales − break-even sales (or as a % of actual sales) — the buffer before losses begin. A small margin of safety means the firm is vulnerable to falling demand.",
          },
        ],
        keyFormulas: [
          { name: "Gross profit margin", statement: "GPM = (gross profit ÷ sales) × 100" },
          { name: "Net profit margin", statement: "NPM = (net profit ÷ sales) × 100" },
          { name: "Break-even output", statement: "BEP = fixed costs ÷ contribution per unit" },
          { name: "Margin of safety", statement: "MoS = actual sales − break-even sales" },
        ],
        workedExample: {
          problem: "Price £25, variable cost £15, fixed costs £30,000. Sales are £80,000. Find contribution, break-even output and margin of safety.",
          solution: "Contribution = 25 − 15 = £10. Break-even = 30,000 ÷ 10 = 3,000 units (£75,000 sales). Actual sales 80,000 → 8,000 units. Margin of safety = 8,000 − 3,000 = 5,000 units (or £80,000 − £75,000 = £5,000).",
        },
      },
      questions: [
        {
          id: "ecn10-u10-rat-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The gross profit margin is calculated as:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "(Net profit ÷ sales) × 100"
                    },
                    {
                              "id": "b",
                              "text": "(Gross profit ÷ sales) × 100"
                    },
                    {
                              "id": "c",
                              "text": "(Sales ÷ gross profit) × 100"
                    },
                    {
                              "id": "d",
                              "text": "(Cost of sales ÷ sales) × 100"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Gross profit margin",
                              "statement": "Gross profit ÷ sales × 100."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gross margin uses gross profit over revenue; net margin uses net profit — do not confuse them.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** (Gross profit ÷ sales) × 100",
          "commonErrors": [
                    "Using net profit in the gross margin formula."
          ]
},
        },
        {
          id: "ecn10-u10-rat-q2",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "A firm has sales of £120,000, cost of sales of £78,000 and net profit of £15,000.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Gross profit margin",
                              "answer": 35,
                              "unit": "%"
                    },
                    {
                              "label": "Net profit margin",
                              "answer": 12.5,
                              "unit": "%"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Margins",
                              "statement": "GPM = GP ÷ sales × 100; NPM = NP ÷ sales × 100"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gross profit = 120,000 − 78,000 = £42,000; GPM = 42,000 ÷ 120,000 × 100 = 35%.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "NPM = 15,000 ÷ 120,000 × 100 = 12.5%.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "GPM 35%; NPM 12.5%",
          "commonErrors": [
                    "Forgetting to multiply by 100 or using cost of sales in net margin."
          ]
},
        },
        {
          id: "ecn10-u10-rat-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A product sells at £25 with a variable cost of £15 per unit. Fixed costs are £30,000.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Contribution per unit",
                              "answer": 10,
                              "unit": "£"
                    },
                    {
                              "label": "Break-even output",
                              "answer": 3000,
                              "unit": "units"
                    },
                    {
                              "label": "Break-even revenue",
                              "answer": 75000,
                              "unit": "£"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Break-even",
                              "statement": "Contribution = P − AVC; BEP = FC ÷ contribution"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Contribution = 25 − 15 = £10 per unit.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Break-even output = 30,000 ÷ 10 = 3,000 units; revenue = 3,000 × 25 = £75,000.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Contribution £10; BEP 3,000 units / £75,000",
          "commonErrors": [
                    "Using price instead of contribution in the BEP formula."
          ]
},
        },
        {
          id: "ecn10-u10-rat-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A firm sells 8,000 units; its break-even output is 6,000 units.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the margin of safety in units and as a percentage of actual sales.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain what the margin of safety tells a manager about risk.",
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
                              "name": "Margin of safety",
                              "statement": "MoS = actual output − break-even output"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Margin of safety = 8,000 − 6,000 = 2,000 units; as % of actual = 2,000 ÷ 8,000 × 100 = 25%.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Sales can fall by 25% before the firm makes a loss — the buffer shows how much demand can drop safely.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) A small margin of safety means rising risk from falling demand, new competition or cost increases.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) 2,000 units / 25% (b) sales can fall 25% before losses begin",
          "commonErrors": [
                    "Expressing margin of safety as a % of break-even rather than actual sales."
          ]
},
        },
        {
          id: "ecn10-u10-rat-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Firm A has a gross profit margin of 40% while its rival Firm B has 25%.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain what a higher gross margin suggests about a firm.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why Firm B might still be the more profitable business overall.",
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
                              "name": "Margin interpretation",
                              "statement": "Gross margin covers direct costs only; other costs and scale matter too."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Higher gross margin suggests stronger pricing power or lower direct costs — more left over from each sale to cover expenses.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) It may reflect differentiation, brand strength or efficient production.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Firm B may have much higher sales volume, lower overheads, or a better net margin — gross margin ignores other expenses and scale.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Net profit margin and total profit are the real measures of overall performance.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) stronger pricing/lower direct costs (b) scale, overheads and net margin can reverse the picture",
          "commonErrors": [
                    "Assuming higher gross margin always means more profitable."
          ]
},
        },
        {
          id: "ecn10-u10-rat-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Assess the usefulness of break-even analysis to a business planning a new product.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two ways break-even analysis helps planning.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain two limitations of break-even analysis.",
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
                              "name": "Break-even analysis",
                              "statement": "Shows required output but assumes simple cost and demand patterns."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Benefit 1: shows the minimum output needed to avoid losses — a viability test before launch.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Benefit 2: helps set prices — raising price increases contribution but may reduce demand; margin of safety shows risk buffer.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Limitation 1: assumes fixed and variable costs are constant — in reality costs and demand change with output.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Limitation 2: ignores uncertainty in sales forecasts, competitor reactions and seasonal swings.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Conclusion: break-even is a useful planning tool but its assumptions must be treated with caution.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Break-even guides pricing and viability but relies on simplifying assumptions.",
          "commonErrors": [
                    "One-sided 'useful' or 'useless' answer without evaluation."
          ]
},
        },
      ],
    },
    {
      id: "ecn10-u10-liq",
      title: "Liquidity, Budgets and Financial Decisions",
      skill: "Interpret liquidity ratios and budgets to support financial decisions.",
      lesson: {
        sections: [
          {
            heading: "Liquidity ratios",
            body: "**Liquidity** is the ability to pay short-term debts. The **current ratio** = current assets ÷ current liabilities — compares short-term resources with short-term debts; above 1.5 is often comfortable. The **acid test ratio** excludes stock: (current assets − inventory) ÷ current liabilities — a stricter check of immediate liquidity.",
          },
          {
            heading: "Budgets and decisions",
            body: "A **budget** sets financial targets for revenue, costs and profit. Comparing **actual** results with budget reveals **variances** — e.g., sales £5,000 below budget. Adverse variances prompt investigation: was it price, volume, costs or external factors? Budgets and ratios together support decisions on pricing, spending, borrowing and investment.",
          },
        ],
        keyFormulas: [
          { name: "Current ratio", statement: "Current ratio = current assets ÷ current liabilities" },
          { name: "Acid test", statement: "Acid test = (current assets − inventory) ÷ current liabilities" },
          { name: "Budget variance", statement: "Variance = actual − budgeted (negative = adverse for revenue)" },
        ],
        workedExample: {
          problem: "Current assets £90,000, current liabilities £60,000, inventory £30,000. Calculate the current and acid-test ratios.",
          solution: "Current ratio = 90,000 ÷ 60,000 = 1.5. Acid test = (90,000 − 30,000) ÷ 60,000 = 60,000 ÷ 60,000 = 1.0.",
        },
      },
      questions: [
        {
          id: "ecn10-u10-liq-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The current ratio measures:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Profit as a percentage of sales"
                    },
                    {
                              "id": "b",
                              "text": "Current assets relative to current liabilities"
                    },
                    {
                              "id": "c",
                              "text": "Total assets relative to total debts"
                    },
                    {
                              "id": "d",
                              "text": "Sales relative to costs"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Current ratio",
                              "statement": "Current assets ÷ current liabilities — a liquidity measure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The current ratio compares short-term assets with short-term liabilities — it says nothing about profit.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Current assets relative to current liabilities",
          "commonErrors": [
                    "Confusing liquidity ratios with profitability ratios."
          ]
},
        },
        {
          id: "ecn10-u10-liq-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "A firm has current assets of £90,000 and current liabilities of £60,000.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Current ratio",
                              "answer": 1.5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Current ratio",
                              "statement": "CA ÷ CL = 90,000 ÷ 60,000"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Current ratio = 90,000 ÷ 60,000.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Current ratio = 1.5 — the firm has £1.50 of short-term assets per £1 of short-term debts.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Current ratio = 1.5",
          "commonErrors": [
                    "Inverting the ratio (liabilities ÷ assets)."
          ]
},
        },
        {
          id: "ecn10-u10-liq-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "A firm has a current ratio of 0.8. Explain what this indicates about its liquidity and the risk it faces.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Liquidity risk",
                              "statement": "Ratio below 1 means short-term debts exceed short-term assets."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A current ratio of 0.8 means current liabilities exceed current assets — the firm cannot cover all short-term debts from short-term resources.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Risk: it may struggle to pay suppliers, wages or loan repayments on time — raising the danger of insolvency or damaged credit.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Ratio < 1 signals liquidity strain — short-term bills may go unpaid.",
          "commonErrors": [
                    "Saying a low ratio is 'efficient' — it signals risk."
          ]
},
        },
        {
          id: "ecn10-u10-liq-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A firm's budgeted sales were £50,000 but actual sales were £45,000.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the sales variance and express it as a percentage of budget.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain two possible causes of this adverse variance.",
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
                              "name": "Budget variance",
                              "statement": "Variance = actual − budget = 45,000 − 50,000 = −£5,000"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Variance = 45,000 − 50,000 = −£5,000; as % of budget = 5,000 ÷ 50,000 × 100 = 10% adverse.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Cause 1: weaker demand — fewer customers bought or prices had to be cut.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Cause 2: supply problems, competitor action or an economic downturn reduced sales.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) −£5,000 / −10% (b) weak demand or external shocks",
          "commonErrors": [
                    "Quoting +£5,000 — sales below budget is adverse (negative)."
          ]
},
        },
        {
          id: "ecn10-u10-liq-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A firm has current assets of £120,000 (including stock of £40,000) and current liabilities of £80,000.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the current ratio and the acid-test ratio.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why the acid-test ratio gives a stricter test of liquidity.",
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
                              "name": "Liquidity ratios",
                              "statement": "CR = CA ÷ CL; acid test = (CA − inventory) ÷ CL"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Current ratio = 120,000 ÷ 80,000 = 1.5.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Acid test = (120,000 − 40,000) ÷ 80,000 = 80,000 ÷ 80,000 = 1.0.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Stock may take time to sell and convert to cash — excluding it shows whether the firm could pay debts without selling inventory.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Acid test of 1.0 is borderline — immediate liquidity is weaker than the current ratio suggests.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) CR 1.5; acid test 1.0 (b) stock is illiquid — acid test reveals tighter liquidity",
          "commonErrors": [
                    "Forgetting to subtract inventory in the acid test."
          ]
},
        },
        {
          id: "ecn10-u10-liq-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Assess whether a business's accounts alone are enough to guide its financial decisions.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two things accounts and ratios do reveal.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain two things accounts alone cannot reveal.",
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
                              "name": "Financial decision-making",
                              "statement": "Accounts inform but do not replace judgement and forecasts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) They reveal profitability — margins, profit trends and cost control.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) They reveal liquidity and solvency through ratios — whether bills can be paid.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) They are backward-looking — past accounts cannot predict future demand, competitor moves or economic change.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) They omit non-financial factors — staff morale, market opportunities, regulation, reputation.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Conclusion: accounts are essential evidence but decisions also need forecasts, cash-flow planning and judgement.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Accounts are necessary but not sufficient — combine with forecasts and qualitative judgement.",
          "commonErrors": [
                    "One-sided answer without acknowledging both strengths and limits."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecn10-u10-lesson-10-3-notes",
      title: "Financial Analysis and Planning — notes",
      summary: "Profitability margins, break-even and margin of safety, liquidity ratios, budgets and variances.",
      sections: [
        { heading: "Key idea", body: "Ratios turn accounts into comparable measures — margins for profitability, current/acid-test ratios for liquidity." },
        { heading: "Break-even", body: "Contribution = price − variable cost; BEP = fixed costs ÷ contribution; margin of safety buffers against falling sales." },
        { heading: "Planning", body: "Budgets set targets; variances highlight problems; combine ratios, cash-flow forecasts and judgement for decisions." },
      ],
    },
  ],
};
