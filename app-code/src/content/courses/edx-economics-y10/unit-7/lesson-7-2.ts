import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "ecn10-u7-lesson-7-2",
  code: "7-2",
  title: "Revenue, Profit and Competition",
  goal: "I CAN calculate revenue and profit and compare business competition and market structures.",
  standards: ["Edexcel IGCSE Economics 4EC1/01 — Business Economics: revenue, profit and competition"],
  
  vocabulary: [
    { term: "Total revenue", definition: "Price multiplied by quantity sold." },
    { term: "Average revenue", definition: "Revenue per unit sold." },
    { term: "Marginal revenue", definition: "Extra revenue from selling one more unit." },
    { term: "Profit", definition: "Total revenue minus total cost." },
    { term: "Break-even", definition: "Output where total revenue equals total cost." },
    { term: "Monopoly", definition: "A single seller dominating a market." },
    { term: "Oligopoly", definition: "A market dominated by a few large firms." },
  ],
  concepts: [
    {
      id: "ecn10-u7-revenue-profit",
      title: "Revenue and Profit",
      skill: "Calculate total, average and marginal revenue and explain profit and break-even.",
      lesson: {
        sections: [
          {
            heading: "Revenue measures",
            body: "**Total revenue** is price × quantity sold: $\\text{TR}=P\\times Q$. **Average revenue** is revenue per unit: $\\text{AR}=\\frac{TR}{Q}=P$. **Marginal revenue** is the change in total revenue from one extra unit: $\\text{MR}=\\frac{\\Delta TR}{\\Delta Q}$.",
          },
          {
            heading: "Profit and break-even",
            body: "**Profit** = total revenue − total cost. Normal profit is the minimum reward needed to keep resources in their current use; supernormal profit is above this. **Break-even** occurs where total revenue equals total cost, so the firm covers all costs but makes no supernormal profit.",
          },
        ],
        keyFormulas: [
          { name: "Total revenue", statement: "Price × quantity sold." },
          { name: "Profit", statement: "Total revenue − total cost." },
          { name: "Break-even", statement: "Total revenue = total cost." },
          { name: "Marginal revenue", statement: "Change in total revenue ÷ change in quantity." },
        ],
        workedExample: {
          problem: "A firm sells 200 units at £15 each and has total cost £2,400. Calculate profit.",
          solution: "TR = 15 × 200 = £3,000. Profit = £3,000 − £2,400 = £600.",
        },
      },
      questions: [
        {
          id: "ecn10-u7-revenue-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A firm sells 80 units at £12 each. What is total revenue?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Total revenue",
                              "answer": 960,
                              "unit": "£"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Total revenue",
                              "statement": "Price × quantity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "TR = price × quantity.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "TR = £12 × 80 = £960.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "£960"
},
        },
        {
          id: "ecn10-u7-revenue-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Total revenue is £5,000 and total cost is £4,200. What is profit?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Profit",
                              "answer": 800,
                              "unit": "£"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Profit",
                              "statement": "Total revenue − total cost."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Profit = revenue − cost.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Profit = £5,000 − £4,200 = £800.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "£800"
},
        },
        {
          id: "ecn10-u7-revenue-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "A firm sells 300 units at £20 each. Total cost is £5,400.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Revenue and profit",
                              "statement": "TR = P × Q; profit = TR − TC."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "TR = £20 × 300 = £6,000.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Profit = £6,000 − £5,400 = £600.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Average revenue equals price = £20.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Positive profit means revenue exceeds cost.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "TR £6,000; profit £600; AR £20"
},
        },
        {
          id: "ecn10-u7-revenue-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A firm has fixed costs of £2,000 and variable cost of £10 per unit.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate total cost at 400 units.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "If price is £20, calculate profit at 400 units.",
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
                              "name": "Cost and profit",
                              "statement": "TC = FC + VC; profit = TR − TC."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) TC = £2,000 + (£10 × 400) = £6,000.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) TR = £20 × 400 = £8,000.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Profit = £8,000 − £6,000 = £2,000.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) £6,000 (b) profit £2,000"
},
        },
        {
          id: "ecn10-u7-revenue-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A café sells 500 coffees at £4 each. Costs are £1,200 fixed plus £1.50 variable per coffee.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate total revenue and total cost.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Calculate profit and state whether the café is above break-even.",
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
                              "name": "Revenue, cost and profit",
                              "statement": "TR = P × Q; TC = FC + VC; profit = TR − TC."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) TR = £4 × 500 = £2,000.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) VC = £1.50 × 500 = £750; TC = £1,200 + £750 = £1,950.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Profit = £2,000 − £1,950 = £50, above break-even.",
                              "marks": 3,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) TR £2,000, TC £1,950 (b) profit £50, above break-even"
},
        },
        {
          id: "ecn10-u7-revenue-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A phone maker considers cutting price from £200 to £180, increasing sales from 1,000 to 1,300 units. Variable cost is £90 per phone and fixed cost is £40,000.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate total revenue and profit at the original price.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Calculate total revenue and profit at the lower price.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain whether the price cut raises profit.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Evaluate one limitation of using only current figures to decide price.",
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
                              "name": "Price and profit",
                              "statement": "Lower price can raise revenue but must cover higher variable costs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) TR = £200 × 1,000 = £200,000.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) TC = £40,000 + (£90 × 1,000) = £130,000; profit = £70,000.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) TR = £180 × 1,300 = £234,000.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) TC = £40,000 + (£90 × 1,300) = £157,000; profit = £77,000.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Profit rises from £70,000 to £77,000 because extra revenue outweighs extra variable cost.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Future demand, competitor response and capacity may change, so current figures are limited.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "d"
                    }
          ],
          "finalAnswer": "(a) profit £70,000 (b) profit £77,000 (c) yes, higher profit (d) demand/competition may change",
          "commonErrors": [
                    "Forgetting fixed cost.",
                    "Comparing revenue only, not profit."
          ]
},
        },
      ],
    },
    {
      id: "ecn10-u7-competition",
      title: "Market Structures and Competition",
      skill: "Compare perfect competition, monopolistic competition, oligopoly and monopoly.",
      lesson: {
        sections: [
          {
            heading: "Market structures",
            body: "**Perfect competition** has many small firms, identical products and free entry, so firms are price takers. **Monopolistic competition** has many firms selling differentiated products and some price-setting power. **Oligopoly** has a few dominant firms, often with barriers to entry and interdependence. **Monopoly** has one dominant seller with strong barriers to entry.",
          },
          {
            heading: "Competition and efficiency",
            body: "More competition usually pushes firms toward lower prices and efficient output. Monopoly can restrict output and charge higher prices, but may also fund research if profitable. Governments may regulate monopolies or break them up where competition is harmed.",
          },
        ],
        keyFormulas: [
          { name: "Price taker", statement: "Firm accepts the market price." },
          { name: "Price maker", statement: "Firm can influence its price." },
          { name: "Barriers to entry", statement: "Obstacles preventing new firms entering a market." },
        ],
        workedExample: {
          problem: "A market has four large firms selling similar smartphones and high start-up costs. Which structure is most likely?",
          solution: "Oligopoly — few dominant firms and barriers to entry.",
        },
      },
      questions: [
        {
          id: "ecn10-u7-competition-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which market structure has many firms selling identical products with free entry?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Perfect competition"
                    },
                    {
                              "id": "b",
                              "text": "Monopoly"
                    },
                    {
                              "id": "c",
                              "text": "Oligopoly"
                    },
                    {
                              "id": "d",
                              "text": "Monopolistic competition"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Perfect competition",
                              "statement": "Many firms, identical products, free entry."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All features match perfect competition.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Perfect competition"
},
        },
        {
          id: "ecn10-u7-competition-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Define barriers to entry and give two examples.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Barriers to entry",
                              "statement": "Obstacles that prevent new firms entering a market."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Definition given correctly.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Example: high capital costs or patents.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Example: brand loyalty or government licences.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Obstacles to entry, e.g. capital costs, patents, brand loyalty, licences."
},
        },
        {
          id: "ecn10-u7-competition-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare perfect competition and monopoly in terms of number of firms and price-setting power.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Perfect competition vs monopoly",
                              "statement": "Many price takers vs one price maker."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Perfect competition has many firms; monopoly has one dominant seller.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Perfect competition firms are price takers.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Monopoly has strong barriers and can act as a price maker.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Comparison is explicit and accurate.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Many price takers vs one price maker with barriers."
},
        },
        {
          id: "ecn10-u7-competition-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A smartphone market is dominated by three large firms with high research costs.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the market structure.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why firms in this market may watch each other's prices.",
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
                              "name": "Oligopoly",
                              "statement": "Few dominant firms with interdependence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Oligopoly — few large firms dominate.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Firms are interdependent: one price change can trigger reactions from rivals.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) High barriers reduce threat of new entrants.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) oligopoly (b) interdependence and barriers to entry"
},
        },
        {
          id: "ecn10-u7-competition-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A town has many small restaurants selling differentiated meals and few barriers to entry.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the market structure.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how competition affects prices and quality.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Give one reason a restaurant may still have some price-setting power.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Monopolistic competition",
                              "statement": "Many firms with differentiated products."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Monopolistic competition.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Competition pressures firms to keep prices reasonable and improve quality/service.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Differentiation, branding or location can give limited price-making power.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) monopolistic competition (b) lower prices/better quality (c) differentiation gives some power"
},
        },
        {
          id: "ecn10-u7-competition-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A government must decide whether to break up a dominant electricity supplier.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define monopoly and give two possible barriers to entry.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain two ways monopoly power may harm consumers.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain one possible benefit of a monopoly.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Evaluate whether the government should break up the supplier.",
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
                              "name": "Monopoly policy",
                              "statement": "Weigh consumer harm against possible efficiency gains."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Monopoly = one dominant seller; barriers e.g. economies of scale, patents, licences.",
                              "marks": 3,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Higher prices and restricted output can reduce consumer welfare.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Less competitive pressure may allow inefficiency and poor service.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Large scale may fund infrastructure and research, lowering long-run costs.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Break-up may increase competition but raise costs if scale economies are lost; regulation may be better.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "d"
                    }
          ],
          "finalAnswer": "(a) monopoly/barriers (b) higher prices/restricted output (c) scale/innovation (d) evaluate competition vs scale",
          "commonErrors": [
                    "One-sided argument.",
                    "No policy evaluation."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecn10-u7-revenue-competition-notes",
      title: "Revenue, profit and competition — notes",
      summary: "Revenue minus cost gives profit; market structure affects pricing power and efficiency.",
      sections: [
        { heading: "Revenue and profit", body: "TR = price × quantity; profit = TR − total cost; break-even means TR = TC." },
        { heading: "Market structures", body: "Perfect competition = many price takers; monopoly = one price maker; oligopoly = few interdependent firms." },
        { heading: "Evaluation", body: "Competition can lower prices, but scale economies and innovation may justify large firms." },
      ],
    },
  ],
};
