import type { Lesson } from "../../../types.ts";

export const lesson92: Lesson = {
  id: "ecn11-u9-lesson-9-2",
  code: "9-2",
  title: "Costs, Revenue and Break-even",
  goal: "I CAN distinguish fixed and variable costs and calculate break-even output.",
  standards: ["Edexcel IGCSE Economics 4EC1 — Paper 1: Investigating small businesses"],
  
  vocabulary: [
    { term: "Fixed costs", definition: "Costs that do not change with output, e.g. rent, insurance, salaried managers." },
    { term: "Variable costs", definition: "Costs that change directly with output, e.g. raw materials, hourly wages, packaging." },
    { term: "Total cost", definition: "Fixed costs plus variable costs." },
    { term: "Average cost", definition: "Total cost divided by output." },
    { term: "Revenue", definition: "Total money received from sales (price × quantity)." },
    { term: "Contribution", definition: "Revenue per unit minus variable cost per unit — what each unit contributes to fixed costs." },
    { term: "Break-even", definition: "The output level where total revenue equals total cost — no profit or loss." },
  ],
  concepts: [
    {
      id: "ecn11-u9-costs",
      title: "Costs and Revenue",
      skill: "Distinguish fixed and variable costs and calculate revenue, cost and profit.",
      lesson: {
        sections: [
          {
            heading: "Fixed and variable costs",
            body: "**Fixed costs (FC)** stay the same whatever the output — rent, insurance, salaried staff. **Variable costs (VC)** change with output — raw materials, hourly wages, packaging. **Total cost (TC) = FC + VC**. **Average cost (AC) = TC ÷ output**. **Total revenue (TR) = price × quantity**. **Profit = TR − TC**. At low output, fixed costs dominate and average cost is high; as output rises, fixed costs spread over more units and average cost falls.",
          },
          {
            heading: "Contribution",
            body: "**Contribution per unit = price − variable cost per unit** — the amount each unit sold contributes towards covering fixed costs. Once fixed costs are covered, contribution becomes profit. Contribution is what matters for decisions about whether to keep producing.",
          },
        ],
        keyFormulas: [
          { name: "Total cost", statement: "fixed costs + variable costs" },
          { name: "Average cost", statement: "total cost ÷ output" },
          { name: "Revenue", statement: "price × quantity" },
          { name: "Contribution", statement: "price − variable cost per unit" },
          { name: "Profit", statement: "total revenue − total cost" },
        ],
        workedExample: {
          problem: "A firm sells 500 units at £10 each. Fixed costs £2,000; variable cost £6 per unit. Calculate revenue, total cost, contribution and profit.",
          solution: "Revenue = 500 × 10 = £5,000. VC = 500 × 6 = £3,000; TC = 2,000 + 3,000 = £5,000. Contribution = 10 − 6 = £4 per unit. Profit = 5,000 − 5,000 = £0 — this is break-even.",
        },
      },
      questions: [
        {
          id: "ecn11-u9-costs-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which of the following is a fixed cost?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Raw materials"
                    },
                    {
                              "id": "b",
                              "text": "Rent"
                    },
                    {
                              "id": "c",
                              "text": "Packaging"
                    },
                    {
                              "id": "d",
                              "text": "Hourly wages"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Fixed costs",
                              "statement": "Costs unchanged by output, e.g. rent."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rent is paid regardless of output — a fixed cost.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Rent",
          "commonErrors": [
                    "Confusing fixed and variable."
          ]
},
        },
        {
          id: "ecn11-u9-costs-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Distinguish between fixed costs and variable costs, giving one example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Fixed vs variable costs",
                              "statement": "Output-independent vs output-dependent."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fixed costs do not change with output — e.g. rent.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Variable costs change directly with output — e.g. raw materials.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Second example acceptable for either type.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Fixed = rent/insurance; variable = materials/wages per unit.",
          "commonErrors": [
                    "No examples."
          ]
},
        },
        {
          id: "ecn11-u9-costs-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "A firm sells 200 units at £15 each. Fixed costs are £1,500 and variable cost is £8 per unit. Calculate profit.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Profit",
                              "statement": "revenue − total cost; TC = FC + VC."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Revenue = 200 × 15 = £3,000.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Variable cost = 200 × 8 = £1,600; total cost = 1,500 + 1,600 = £3,100.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Profit = 3,000 − 3,100 = −£100 (a loss).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Loss of £100",
          "commonErrors": [
                    "Forgot to add fixed costs.",
                    "Sign error on profit."
          ]
},
        },
        {
          id: "ecn11-u9-costs-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A bakery sells loaves at £4 each. Variable cost is £1.80 per loaf and fixed costs are £660 per week.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the contribution per loaf.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate the profit if the bakery sells 500 loaves in a week.",
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
                              "name": "Contribution and profit",
                              "statement": "contribution = price − VC; profit = TR − TC."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Contribution = 4.00 − 1.80 = £2.20 per loaf.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Revenue = 500 × 4 = £2,000.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) VC = 500 × 1.80 = £900; TC = 660 + 900 = £1,560.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Profit = 2,000 − 1,560 = £440.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) £2.20. (b) £440 profit.",
          "commonErrors": [
                    "Contribution confused with profit.",
                    "Fixed costs omitted."
          ]
},
        },
        {
          id: "ecn11-u9-costs-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A firm produces 1,000 units at total cost £8,000 and 2,000 units at total cost £13,000. Price is £10 per unit.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate average cost at each output level.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate profit at 2,000 units.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why average cost fell as output rose.",
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
                              "name": "Average cost",
                              "statement": "TC ÷ output; fixed costs spread over more units."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) AC at 1,000 = 8,000 ÷ 1,000 = £8; at 2,000 = 13,000 ÷ 2,000 = £6.50.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Revenue = 2,000 × 10 = £20,000; profit = 20,000 − 13,000 = £7,000.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Fixed costs spread over more units — economies of scale.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) £8 and £6.50. (b) £7,000. (c) Fixed costs spread — economies of scale.",
          "commonErrors": [
                    "Dividing wrong figures.",
                    "No link to fixed costs."
          ]
},
        },
        {
          id: "ecn11-u9-costs-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A publisher sells books at £12 each. Fixed costs are £24,000 per year; variable cost is £7 per book.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define fixed costs and variable costs.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Calculate revenue, total cost and profit if 4,000 books are sold.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Calculate the contribution per book.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Explain what contribution tells the publisher about each book sold.",
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
                              "name": "Costs and revenue",
                              "statement": "TR = P×Q; TC = FC+VC; contribution = P−VC."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Fixed = unchanged by output (e.g. rent); variable = changes with output (e.g. paper/printing).",
                              "marks": 4,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Revenue = 4,000 × 12 = £48,000; VC = 4,000 × 7 = £28,000; TC = 52,000; profit = 48,000 − 52,000 = −£4,000 loss.",
                              "marks": 3,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Contribution = 12 − 7 = £5 per book.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Each book contributes £5 towards fixed costs; above break-even it becomes profit.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "d"
                    }
          ],
          "finalAnswer": "(a) definitions; (b) loss £4,000; (c) £5; (d) contribution covers fixed costs then profit.",
          "commonErrors": [
                    "Contribution used as profit.",
                    "Arithmetic slips."
          ]
},
        },
      ],
    },
    {
      id: "ecn11-u9-breakeven",
      title: "Break-even Analysis",
      skill: "Calculate break-even output and revenue and interpret the results.",
      lesson: {
        sections: [
          {
            heading: "Break-even",
            body: "**Break-even** is where total revenue = total cost — no profit or loss. **Break-even output = fixed costs ÷ contribution per unit**. **Break-even revenue = break-even output × price** (or fixed costs ÷ contribution margin %). Below break-even the firm makes a loss; above it makes a profit. The **margin of safety** = actual output − break-even output — the cushion before losses begin.",
          },
          {
            heading: "Using break-even",
            body: "Break-even helps firms set prices, plan output and assess risk. If break-even output is very high, the firm needs large sales to survive. Raising price or cutting variable costs increases contribution and lowers break-even; higher fixed costs raise it. Break-even ignores external factors like competition and assumes price and costs stay constant.",
          },
        ],
        keyFormulas: [
          { name: "Break-even output", statement: "fixed costs ÷ contribution per unit" },
          { name: "Break-even revenue", statement: "break-even output × price" },
          { name: "Contribution", statement: "price − variable cost per unit" },
        ],
        workedExample: {
          problem: "Fixed costs £12,000; price £10; variable cost £6 per unit. Find break-even output and revenue.",
          solution: "Contribution = 10 − 6 = £4. BEP output = 12,000 ÷ 4 = 3,000 units. BEP revenue = 3,000 × 10 = £30,000.",
        },
      },
      questions: [
        {
          id: "ecn11-u9-breakeven-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does break-even mean for a business?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Maximum profit is earned"
                    },
                    {
                              "id": "b",
                              "text": "Total revenue equals total cost — no profit or loss"
                    },
                    {
                              "id": "c",
                              "text": "All debts are repaid"
                    },
                    {
                              "id": "d",
                              "text": "The business closes down"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Break-even",
                              "statement": "Revenue = cost; zero profit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "At break-even revenue exactly covers all costs.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Revenue = cost",
          "commonErrors": [
                    "Confusing with profit."
          ]
},
        },
        {
          id: "ecn11-u9-breakeven-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Explain the formula for break-even output in words.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Break-even output",
                              "statement": "fixed costs ÷ contribution per unit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Each unit sold contributes (price − variable cost) towards fixed costs.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Break-even output = how many units are needed to cover all fixed costs.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Formula: fixed costs ÷ contribution per unit.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Fixed costs ÷ contribution per unit.",
          "commonErrors": [
                    "Using price instead of contribution."
          ]
},
        },
        {
          id: "ecn11-u9-breakeven-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Fixed costs £9,000; price £15; variable cost £9 per unit. Calculate the break-even output.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Break-even",
                              "statement": "FC ÷ (P − VC)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Contribution = 15 − 9 = £6 per unit.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "BEP output = 9,000 ÷ 6 = 1,500 units.",
                              "marks": 3,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "1,500 units",
          "commonErrors": [
                    "Dividing by price instead of contribution."
          ]
},
        },
        {
          id: "ecn11-u9-breakeven-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A stall has fixed costs of £200 per week. It sells cakes at £5 each with variable cost £2 per cake.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the break-even output and break-even revenue per week.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain what happens to profit if the stall sells 100 cakes.",
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
                              "statement": "FC ÷ contribution; BEP revenue = BEP × price."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Contribution = 5 − 2 = £3; BEP = 200 ÷ 3 = 66.7 → 67 cakes.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) BEP revenue = 67 × 5 ≈ £335 (or 66.7 × 5 = £333.33).",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Above break-even — profit = (100 − 66.7) × 3 ≈ £100 profit.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) ~67 cakes / ~£335. (b) Profit ~£100.",
          "commonErrors": [
                    "Forgetting revenue step.",
                    "Wrong direction on profit."
          ]
},
        },
        {
          id: "ecn11-u9-breakeven-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A gym has fixed costs of £12,000 per month. Membership costs £30 per month and variable cost is £10 per member.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the break-even number of members.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "If the gym has 700 members, calculate the monthly profit.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain one way the gym could lower its break-even point.",
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
                              "statement": "FC ÷ contribution per unit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Contribution = 30 − 10 = £20; BEP = 12,000 ÷ 20 = 600 members.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Profit = (700 − 600) × 20 = £2,000 (or TR 21,000 − TC 19,000).",
                              "marks": 2,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Cut fixed costs, raise price, or reduce variable cost — all raise contribution or lower FC.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) 600 members. (b) £2,000 profit. (c) cut FC / raise price / cut VC.",
          "commonErrors": [
                    "Contribution miscalculated.",
                    "Profit formula wrong."
          ]
},
        },
        {
          id: "ecn11-u9-breakeven-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A publisher considers printing a book. Fixed costs £10,000; variable cost £4 per book; planned price £9.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate contribution per book.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate break-even output and break-even revenue.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Calculate profit if 3,000 books are sold.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Evaluate two assumptions break-even analysis makes that may not hold in reality.",
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
                              "name": "Break-even analysis",
                              "statement": "BEP = FC ÷ contribution; assumes constant price and costs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Contribution = 9 − 4 = £5.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) BEP output = 10,000 ÷ 5 = 2,000 books.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) BEP revenue = 2,000 × 9 = £18,000.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Profit = 3,000 × 5 − 10,000 = £5,000.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Assumes price and costs stay constant — demand may fall, prices may need discounting.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "d"
                    },
                    {
                              "reasoning": "(d) Ignores competition and non-financial factors like reputation.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "d"
                    }
          ],
          "finalAnswer": "(a) £5. (b) 2,000 books / £18,000. (c) £5,000. (d) constant price/costs, ignores competition.",
          "commonErrors": [
                    "Using price not contribution.",
                    "No evaluation of assumptions."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecn11-u9-breakeven-notes",
      title: "Costs, revenue and break-even — revision notes",
      summary: "Fixed costs unchanged by output; variable costs change with it. Contribution = price − VC. Break-even output = FC ÷ contribution; BEP revenue = BEP × price.",
      sections: [
        { heading: "Costs", body: "TC = FC + VC; AC = TC ÷ output; TR = price × quantity; profit = TR − TC." },
        { heading: "Break-even", body: "BEP output = FC ÷ contribution per unit; BEP revenue = BEP × price." },
        { heading: "Limitations", body: "Assumes constant price/costs; ignores demand shifts and competition." },
      ],
    },
  ],
};
