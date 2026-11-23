import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "ebz10-u5-lesson-5-3",
  code: "5-3",
  title: "Financial Ratios and Break-Even Analysis",
  goal: "I CAN calculate financial ratios and break-even figures to support decisions.",
  standards: ["Edexcel IGCSE Business 4BS0 — Finance and Accounting"],
  
  vocabulary: [
    { term: "Liquidity", definition: "Ability to pay short-term debts." },
    { term: "Profitability", definition: "Ability to earn profit from revenue." },
    { term: "Current ratio", definition: "Current assets divided by current liabilities." },
    { term: "Gross profit margin", definition: "Gross profit as a percentage of revenue." },
    { term: "Fixed cost", definition: "Cost that does not change with output in the short term." },
    { term: "Variable cost", definition: "Cost that changes with output." },
    { term: "Contribution", definition: "Selling price minus variable cost per unit." },
    { term: "Break-even", definition: "Level of output where total revenue equals total costs." },
  ],
  concepts: [
    {
      id: "ebz10-u5-financial-ratios",
      title: "Liquidity and Profitability Ratios",
      skill: "Calculate and interpret basic financial ratios.",
      lesson: {
        sections: [
          {
            heading: "Liquidity ratios",
            body: "The **current ratio** = current assets ÷ current liabilities. A ratio above 1 suggests the business can cover short-term debts, but too high may mean idle resources. The **acid test ratio** excludes stock for a stricter liquidity check.",
          },
          {
            heading: "Profitability ratios",
            body: "Gross profit margin = gross profit ÷ revenue × 100. Net profit margin = net profit ÷ revenue × 100. Higher margins indicate better pricing or cost control, but must be compared with industry norms and trends.",
          },
          {
            heading: "Using ratios",
            body: "Ratios turn figures into meaningful comparisons. They help identify strengths such as strong liquidity or weaknesses such as falling margins. Ratios should be interpreted alongside context, not alone.",
          },
        ],
        keyFormulas: [
          { name: "Current ratio", statement: "Current assets ÷ current liabilities" },
          { name: "Gross profit margin", statement: "(Gross profit ÷ revenue) × 100" },
          { name: "Net profit margin", statement: "(Net profit ÷ revenue) × 100" },
        ],
        workedExample: {
          problem: "Current assets £60,000, current liabilities £40,000, revenue £200,000 and gross profit £80,000. Calculate current ratio and gross margin.",
          solution: "Current ratio = £60,000 ÷ £40,000 = 1.5. Gross margin = (£80,000 ÷ £200,000) × 100 = 40%.",
        },
      },
      questions: [
        {
          id: "ebz10-u5-ratio-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How is the current ratio calculated?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Current liabilities ÷ current assets"
                    },
                    {
                              "id": "b",
                              "text": "Current assets ÷ current liabilities"
                    },
                    {
                              "id": "c",
                              "text": "Revenue ÷ net profit"
                    },
                    {
                              "id": "d",
                              "text": "Gross profit ÷ cost of sales"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Current ratio",
                              "statement": "Current assets ÷ current liabilities."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The current ratio measures short-term assets against short-term liabilities.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Current assets ÷ current liabilities",
          "commonErrors": [
                    "Inverting the formula.",
                    "Using total assets instead of current assets."
          ]
},
        },
        {
          id: "ebz10-u5-ratio-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Current assets are £60,000 and current liabilities are £40,000. Calculate the current ratio.",
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
                              "statement": "Current assets ÷ current liabilities."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Divide current assets by current liabilities: £60,000 ÷ £40,000 = 1.5.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "State the ratio as 1.5 : 1.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "1.5",
          "commonErrors": [
                    "Reversing the formula.",
                    "Multiplying instead of dividing."
          ]
},
        },
        {
          id: "ebz10-u5-ratio-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain what gross profit margin and current ratio each tell a manager.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Ratio interpretation",
                              "statement": "Margins show profitability; liquidity ratios show short-term security."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gross margin shows how much gross profit is earned per £1 of sales.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "It indicates pricing power and control of direct costs.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Current ratio shows whether short-term assets cover short-term debts.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "A higher ratio suggests better liquidity but may indicate inefficient asset use.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Gross margin measures sales profitability; current ratio measures short-term liquidity.",
          "commonErrors": [
                    "Same purpose assumed.",
                    "No interpretation."
          ]
},
        },
        {
          id: "ebz10-u5-ratio-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A business has revenue of £200,000, gross profit of £80,000 and net profit of £40,000.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the gross profit margin.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Calculate the net profit margin.",
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
                              "name": "Profitability ratios",
                              "statement": "Margin = profit ÷ revenue × 100."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Use gross profit divided by revenue: (£80,000 ÷ £200,000) × 100.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Calculate the percentage: 0.4 × 100 = 40%.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "State the gross margin: 40%.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Use net profit divided by revenue: (£40,000 ÷ £200,000) × 100.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Calculate the percentage: 0.2 × 100 = 20%.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "State the net margin: 20%.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Gross margin 40%; net margin 20%.",
          "commonErrors": [
                    "Using costs instead of profit.",
                    "Forgetting to multiply by 100."
          ]
},
        },
        {
          id: "ebz10-u5-ratio-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A manager calculates ratios but is unsure how useful they are.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two limitations of financial ratios.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Suggest two ways to make ratio analysis more useful.",
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
                              "name": "Ratio limitations",
                              "statement": "Ratios need context, trends and comparison."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "A single ratio does not show why performance changed.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Different accounting methods or one-off events can distort figures.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Compare ratios over several years or with competitors.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Use ratios alongside other information such as cash flow and market conditions.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Ratios need trends, benchmarks and context to be meaningful.",
          "commonErrors": [
                    "Only limitations or only improvements.",
                    "No comparison suggested."
          ]
},
        },
        {
          id: "ebz10-u5-ratio-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A business reports revenue £500,000, gross profit £200,000, net profit £90,000, current assets £80,000 and current liabilities £50,000.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the gross profit margin.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate the net profit margin.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Calculate the current ratio.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Interpret the liquidity and profitability results.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Ratio analysis",
                              "statement": "Margins measure profit; current ratio measures liquidity."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Gross margin = (£200,000 ÷ £500,000) × 100 = 40%.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Net margin = (£90,000 ÷ £500,000) × 100 = 18%.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Current ratio = £80,000 ÷ £50,000 = 1.6.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "d",
                              "reasoning": "A 40% gross margin suggests strong control of direct costs.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "d",
                              "reasoning": "An 18% net margin indicates reasonable overall profitability after expenses.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "d",
                              "reasoning": "A current ratio of 1.6 suggests current assets comfortably cover short-term debts.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "d",
                              "reasoning": "Compare with previous years and competitors before final judgement.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Gross margin 40%, net margin 18%, current ratio 1.6; generally profitable and liquid.",
          "commonErrors": [
                    "Calculation errors.",
                    "No interpretation or comparison."
          ]
},
        },
      ],
    },
    {
      id: "ebz10-u5-break-even-cvp",
      title: "Break-Even and Cost-Volume-Profit",
      skill: "Calculate contribution, break-even and margin of safety.",
      lesson: {
        sections: [
          {
            heading: "Costs and contribution",
            body: "**Fixed costs** do not change with output, such as rent. **Variable costs** change with output, such as materials. Contribution = selling price − variable cost per unit; it shows how much each unit contributes to fixed costs and profit.",
          },
          {
            heading: "Break-even",
            body: "Break-even occurs when total revenue equals total costs. Break-even units = fixed costs ÷ contribution per unit. Break-even revenue = break-even units × selling price, or fixed costs ÷ contribution margin ratio.",
          },
          {
            heading: "Using break-even",
            body: "Businesses use break-even to assess whether expected sales cover costs and to set targets. The **margin of safety** = actual or expected sales − break-even sales; a larger margin means more protection against losses. Assumptions include constant prices and costs per unit.",
          },
        ],
        keyFormulas: [
          { name: "Contribution", statement: "Selling price − variable cost per unit" },
          { name: "Break-even units", statement: "Fixed costs ÷ contribution per unit" },
          { name: "Break-even revenue", statement: "Break-even units × selling price" },
          { name: "Margin of safety", statement: "Expected sales − break-even sales" },
        ],
        workedExample: {
          problem: "Selling price £20, variable cost £12, fixed costs £16,000. Find contribution and break-even units.",
          solution: "Contribution = £20 − £12 = £8. Break-even units = £16,000 ÷ £8 = 2,000 units.",
        },
      },
      questions: [
        {
          id: "ebz10-u5-breakeven-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is contribution per unit?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Selling price + variable cost"
                    },
                    {
                              "id": "b",
                              "text": "Selling price − variable cost"
                    },
                    {
                              "id": "c",
                              "text": "Fixed costs ÷ sales"
                    },
                    {
                              "id": "d",
                              "text": "Revenue − profit"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Contribution",
                              "statement": "Selling price minus variable cost per unit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Contribution is the amount each unit contributes after variable costs.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Selling price − variable cost",
          "commonErrors": [
                    "Adding costs instead of subtracting.",
                    "Using fixed costs."
          ]
},
        },
        {
          id: "ebz10-u5-breakeven-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Selling price is £20, variable cost is £12 and fixed costs are £16,000. Calculate contribution and break-even units.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Contribution",
                              "answer": 8,
                              "unit": "£"
                    },
                    {
                              "label": "Break-even units",
                              "answer": 2000,
                              "unit": "units"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Break-even",
                              "statement": "Contribution = price − variable cost; break-even units = fixed costs ÷ contribution."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Calculate contribution per unit: £20 − £12 = £8.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Divide fixed costs by contribution: £16,000 ÷ £8 = 2,000 units.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "State both answers: contribution £8 and break-even 2,000 units.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Contribution £8; break-even 2,000 units.",
          "commonErrors": [
                    "Using fixed costs as variable costs.",
                    "Forgetting units."
          ]
},
        },
        {
          id: "ebz10-u5-breakeven-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain what margin of safety means and why it matters.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Margin of safety",
                              "statement": "Difference between expected sales and break-even sales."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "It measures how far sales can fall before losses begin.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Margin of safety = expected sales − break-even sales.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "A larger margin gives more protection against demand changes.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "A small margin means the business is vulnerable to lower sales.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Margin of safety shows how much sales can fall before break-even is breached.",
          "commonErrors": [
                    "Confused with profit.",
                    "No risk link."
          ]
},
        },
        {
          id: "ebz10-u5-breakeven-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A new product has a selling price of £30, variable cost of £18 and fixed costs of £24,000.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the break-even units.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Calculate the break-even revenue.",
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
                              "name": "Break-even calculation",
                              "statement": "Units = fixed costs ÷ contribution; revenue = units × price."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Find contribution per unit: £30 − £18 = £12.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Divide fixed costs by contribution: £24,000 ÷ £12 = 2,000 units.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Multiply break-even units by selling price: 2,000 × £30 = £60,000.",
                              "marks": 3,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Break-even = 2,000 units or £60,000 revenue.",
          "commonErrors": [
                    "Using price instead of contribution.",
                    "Revenue calculated as units × variable cost."
          ]
},
        },
        {
          id: "ebz10-u5-breakeven-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A manager uses break-even analysis to decide whether to launch a new product.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two assumptions behind break-even analysis.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Suggest two limitations of relying on break-even alone.",
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
                              "name": "Break-even limitations",
                              "statement": "Simple model assumes stable costs, prices and demand."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "It assumes selling price and variable cost per unit remain constant.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "It assumes all output is sold and fixed costs stay unchanged.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Real demand may be lower than expected or change with price.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "It ignores cash-flow timing, quality, competition and capacity limits.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Break-even assumes constant costs and sales; it ignores demand risk and cash-flow timing.",
          "commonErrors": [
                    "Assumptions repeated as limitations.",
                    "No real-world limitation."
          ]
},
        },
        {
          id: "ebz10-u5-breakeven-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A café considers selling a new cake at £6 with variable cost £2 and expects fixed costs of £1,200 per month. Expected sales are 400 cakes.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate contribution per cake.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate monthly break-even units.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Calculate monthly break-even revenue.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Calculate margin of safety in units and evaluate the decision.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Break-even decision",
                              "statement": "Compare expected sales with break-even before launching."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Contribution = £6 − £2 = £4 per cake.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Break-even units = £1,200 ÷ £4 = 300 cakes.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Break-even revenue = 300 × £6 = £1,800.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "d",
                              "reasoning": "Margin of safety = 400 − 300 = 100 cakes.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "d",
                              "reasoning": "Expected sales exceed break-even, so the product should cover fixed costs.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "d",
                              "reasoning": "But demand uncertainty and quality/cash-flow factors should also be checked.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "d",
                              "reasoning": "A 100-cake buffer gives some protection but not unlimited safety.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Contribution £4; break-even 300 cakes/£1,800; margin of safety 100 cakes; launch looks viable but test demand.",
          "commonErrors": [
                    "Break-even revenue using variable cost.",
                    "No margin or evaluation."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebz10-u5-finance-analysis-notes",
      title: "Financial ratios and break-even — notes",
      summary: "Ratios compare liquidity and profitability; break-even shows the sales needed to cover costs; both need context and trends.",
      sections: [
        { heading: "Liquidity", body: "Current ratio = current assets ÷ current liabilities." },
        { heading: "Profitability", body: "Margins = profit ÷ revenue × 100." },
        { heading: "Break-even", body: "Contribution = price − variable cost; break-even units = fixed costs ÷ contribution." },
        { heading: "Use", body: "Compare over time, with competitors and with cash-flow forecasts." },
      ],
    },
  ],
};
