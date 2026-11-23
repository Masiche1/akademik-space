import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "ebz10-u7-lesson-7-1",
  code: "7-1",
  title: "Revenue, Costs and Profit",
  goal: "I CAN calculate revenue, costs and profit and explain fixed and variable costs.",
  standards: ["Edexcel IGCSE Business 4BS0 — Financial Information and Decisions"],
  
  vocabulary: [
    { term: "Revenue", definition: "Total income from sales of goods or services." },
    { term: "Fixed costs", definition: "Costs that do not change with output, e.g. rent." },
    { term: "Variable costs", definition: "Costs that change with output, e.g. raw materials." },
    { term: "Total cost", definition: "Fixed costs plus variable costs." },
    { term: "Profit", definition: "Revenue minus total costs." },
    { term: "Gross profit", definition: "Revenue minus cost of sales." },
  ],
  concepts: [
    {
      id: "ebz10-u7-revenue-costs",
      title: "Revenue, Costs and Profit",
      skill: "Calculate revenue, total cost and profit and classify costs.",
      lesson: {
        sections: [
          {
            heading: "Revenue and costs",
            body: "**Revenue** = price per unit x quantity sold. **Fixed costs** stay the same whatever the output (rent, salaries, insurance). **Variable costs** rise and fall with output (materials, packaging, hourly wages). **Total cost** = fixed costs + variable costs. **Profit** = revenue - total cost; a business trading at a loss has costs greater than revenue. **Gross profit** = revenue - cost of sales; **net profit** deducts all other expenses too.",
          },
          {
            heading: "Using the numbers",
            body: "Managers use these calculations to set prices, judge whether to expand, and check performance against targets. If variable costs rise, either prices must rise or profit per unit falls. Break-even and profit calculations build directly on revenue and cost data.",
          },
        ],
        keyFormulas: [
          { name: "Revenue", statement: "Revenue = price per unit x quantity sold" },
          { name: "Total cost", statement: "Total cost = fixed costs + variable costs" },
          { name: "Profit", statement: "Profit = revenue - total cost" },
          { name: "Gross profit", statement: "Gross profit = revenue - cost of sales" },
        ],
        workedExample: {
          problem: "A business sells 500 units at £12 each. Fixed costs are £1 500 and variable costs are £6 per unit. Calculate profit.",
          solution: "Revenue = 500 x £12 = £6 000. Variable costs = 500 x £6 = £3 000. Total cost = £1 500 + £3 000 = £4 500. Profit = £6 000 - £4 500 = £1 500.",
        },
      },
      questions: [
        {
          id: "ebz10-u7-revcost-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which of these is a variable cost?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Monthly rent on the factory"
                    },
                    {
                              "id": "b",
                              "text": "Raw materials used in production"
                    },
                    {
                              "id": "c",
                              "text": "Annual insurance premium"
                    },
                    {
                              "id": "d",
                              "text": "Salaries of permanent managers"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Variable cost",
                              "statement": "Cost that changes with the level of output."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Raw materials are used per unit produced, so they vary with output.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Raw materials",
          "commonErrors": [
                    "Rent and insurance confused with variable costs."
          ]
},
        },
        {
          id: "ebz10-u7-revcost-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "A café sells 400 cups of coffee at £2.50 each. Its fixed costs are £800 and variable costs are £0.80 per cup. Calculate total cost.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Total cost",
                              "statement": "Total cost = fixed costs + variable costs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Variable costs = 400 x £0.80 = £320.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Total cost = fixed + variable = £800 + £320.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Total cost = £1 120.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "£1 120",
          "commonErrors": [
                    "Forgetting to multiply variable cost by quantity."
          ]
},
        },
        {
          id: "ebz10-u7-revcost-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the difference between gross profit and net profit.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Gross vs net profit",
                              "statement": "Revenue minus cost of sales vs revenue minus all costs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gross profit = revenue - cost of sales only.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Net profit = revenue - all costs including expenses, interest, tax.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Gross profit shows trading performance before overheads.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Net profit is the final figure after every deduction.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Gross = revenue minus cost of sales; net = after all expenses."
},
        },
        {
          id: "ebz10-u7-revcost-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A toy maker sells 2 000 units a year at £15 each. Fixed costs are £30 000 and variable costs are £9 per unit.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate revenue, total cost and profit.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain one way the business could increase profit.",
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
                              "name": "Profit calculation",
                              "statement": "Revenue - total cost."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Revenue = 2 000 x £15 = £30 000.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Total cost = £30 000 + (2 000 x £9) = £48 000.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Profit = £30 000 - £48 000 = -£18 000 (a loss).",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Raise price or cut variable/fixed costs.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Or increase sales volume if contribution is positive.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "Revenue £30 000, total cost £48 000, loss £18 000; raise price/cut costs or grow sales.",
          "commonErrors": [
                    "Variable costs not multiplied by output.",
                    "Sign of loss ignored."
          ]
},
        },
        {
          id: "ebz10-u7-revcost-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A company currently sells 1 000 units at £20 each. Fixed costs are £12 000 and variable costs are £11 per unit.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate current profit.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "If the price rises to £22 with the same costs and sales, calculate the new profit and explain the change.",
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
                              "name": "Profit sensitivity",
                              "statement": "A £2 price rise adds £2 per unit to profit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Revenue = 1 000 x £20 = £20 000.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Total cost = £12 000 + £11 000 = £23 000; profit = -£3 000 (loss).",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) New revenue = 1 000 x £22 = £22 000; costs unchanged at £23 000.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) New profit = -£1 000; loss falls by £2 000 (assuming demand unchanged).",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) -£3 000 (b) -£1 000 — loss reduced by £2 000"
},
        },
        {
          id: "ebz10-u7-revcost-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A shoe business sells 5 000 pairs a year at £40 each. Fixed costs are £60 000 and variable costs are £24 per pair.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate revenue, total cost and profit.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Calculate gross profit if cost of sales is £90 000 and explain what other costs net profit must deduct.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate whether the business should try to double output to 10 000 pairs.",
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
                              "name": "Profit analysis",
                              "statement": "Revenue - costs; gross vs net; contribution per unit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Revenue = 5 000 x £40 = £200 000.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Variable = 5 000 x £24 = £120 000; total cost = £180 000.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Profit = £200 000 - £180 000 = £20 000.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Gross profit = £200 000 - £90 000 = £110 000.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Net profit deducts all other costs: fixed costs, expenses, interest, tax.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Contribution per pair = £40 - £24 = £16; doubling adds £80 000 contribution.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Evaluation: profitable only if demand exists and fixed costs do not rise disproportionately; capacity and market limits apply.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Revenue £200 000, cost £180 000, profit £20 000; gross £110 000; doubling adds £16 x 5 000 = £80 000 contribution if feasible."
},
        },
      ],
    },
    {
      id: "ebz10-u7-breakeven",
      title: "Break-even Analysis",
      skill: "Calculate the break-even point in units and revenue.",
      lesson: {
        sections: [
          {
            heading: "Contribution and break-even",
            body: "**Contribution per unit** = selling price - variable cost per unit; it is the amount each unit contributes towards covering fixed costs and making profit. **Break-even point** = fixed costs / contribution per unit — the output at which total revenue equals total cost. Below break-even the business makes a loss; above it, profit. In revenue terms, break-even revenue = fixed costs x (price / variable cost), or break-even units x price.",
          },
          {
            heading: "Why it matters",
            body: "Break-even tells managers the minimum sales needed to survive — useful for pricing decisions, launching products and judging whether a plan is viable. A lower fixed cost or higher contribution lowers the break-even point, making the business safer. It assumes price and costs stay constant.",
          },
        ],
        keyFormulas: [
          { name: "Contribution", statement: "Contribution per unit = selling price - variable cost per unit" },
          { name: "Break-even units", statement: "Fixed costs / contribution per unit" },
          { name: "Break-even revenue", statement: "Break-even units x selling price" },
        ],
        workedExample: {
          problem: "Fixed costs £20 000, price £50, variable cost £30 per unit. Find break-even.",
          solution: "Contribution = £50 - £30 = £20. Break-even units = £20 000 / £20 = 1 000 units. Break-even revenue = 1 000 x £50 = £50 000.",
        },
      },
      questions: [
        {
          id: "ebz10-u7-bep-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the contribution per unit if price is £25 and variable cost is £15?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "£10"
                    },
                    {
                              "id": "b",
                              "text": "£40"
                    },
                    {
                              "id": "c",
                              "text": "£15"
                    },
                    {
                              "id": "d",
                              "text": "£25"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Contribution",
                              "statement": "Price - variable cost per unit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "£25 - £15 = £10.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "**(a)** £10"
},
        },
        {
          id: "ebz10-u7-bep-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "A business has fixed costs of £10 000 and contribution of £5 per unit. How many units must it sell to break even?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Break-even",
                              "statement": "Fixed costs / contribution per unit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Break-even = fixed costs / contribution.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "= £10 000 / £5.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "= 2 000 units.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "2 000 units"
},
        },
        {
          id: "ebz10-u7-bep-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain what happens to the break-even point if fixed costs rise but price and variable cost stay the same.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Break-even drivers",
                              "statement": "Break-even rises with fixed costs, falls with contribution."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Contribution per unit is unchanged (price - variable cost).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Break-even = fixed costs / contribution, so higher fixed costs raise the point.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The business must sell more units just to cover costs.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Risk increases — more vulnerable to low demand.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Break-even point rises — more units needed to cover higher fixed costs."
},
        },
        {
          id: "ebz10-u7-bep-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Fixed costs are £45 000. The selling price is £60 and variable cost is £36 per unit.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate contribution per unit and break-even output.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Calculate break-even revenue and profit at 2 000 units sold.",
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
                              "name": "Break-even",
                              "statement": "FC / (P - VC); BE revenue = BE units x price."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Contribution = £60 - £36 = £24.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Break-even units = £45 000 / £24.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) = 1 875 units.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Break-even revenue = 1 875 x £60 = £112 500.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Profit at 2 000 units = (2 000 - 1 875) x £24 = £3 000.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "Contribution £24; break-even 1 875 units / £112 500; profit at 2 000 units = £3 000."
},
        },
        {
          id: "ebz10-u7-bep-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A business sells a product at £30 with variable cost £18 and fixed costs £24 000.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the break-even output in units and in revenue.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "A new machine would cut variable cost to £15 but add £6 000 fixed costs. Recalculate break-even and comment on the change.",
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
                              "name": "Break-even comparison",
                              "statement": "Compare break-even before and after the change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Contribution = £30 - £18 = £12; BE units = £24 000 / £12 = 2 000.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) BE revenue = 2 000 x £30 = £60 000.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) New contribution = £30 - £15 = £15; new fixed = £30 000; BE = 2 000 units.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Break-even unchanged at 2 000 units — the machine only pays off above break-even.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) 2 000 units / £60 000 (b) still 2 000 units — benefit only above break-even"
},
        },
        {
          id: "ebz10-u7-bep-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A publisher plans a new textbook selling at £25 with variable cost £10 per copy. Fixed costs for the project are £60 000.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate contribution, break-even units and break-even revenue.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "If expected sales are 6 000 copies, calculate profit and the margin of safety in units.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate whether the project should go ahead if a competitor may force the price down to £22.",
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
                              "name": "Break-even evaluation",
                              "statement": "BE point, margin of safety, sensitivity to price."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Contribution = £25 - £10 = £15.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Break-even units = £60 000 / £15 = 4 000 copies.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Break-even revenue = 4 000 x £25 = £100 000.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Contribution stated correctly.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Profit = (6 000 - 4 000) x £15 = £30 000; margin of safety = 2 000 units.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Margin of safety stated as 6 000 - 4 000 = 2 000.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) At £22 contribution falls to £12; break-even rises to 5 000 copies — still below expected 6 000 but safety is thin.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Judgement: viable only if sales forecast is reliable; risk of loss if demand disappoints.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "BE 4 000 copies / £100 000; profit £30 000; margin of safety 2 000; at £22 BE = 5 000 — riskier."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebz10-u7-fin1-notes",
      title: "Revenue, costs and break-even — notes",
      summary: "Revenue = price x quantity; profit = revenue - total cost; break-even = fixed costs / contribution.",
      sections: [
        { heading: "Key formulas", body: "Revenue = P x Q. Total cost = fixed + variable. Profit = revenue - total cost. Contribution = P - VC. Break-even units = FC / contribution." },
        { heading: "Fixed vs variable", body: "Fixed costs do not change with output (rent, salaries). Variable costs do (materials, packaging)." },
        { heading: "Break-even use", body: "Minimum output to avoid loss. Higher fixed costs or lower contribution raise the break-even point." },
      ],
    },
  ],
};
