import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "ecn10-u7-lesson-7-1",
  code: "7-1",
  title: "Production and Costs",
  goal: "I CAN explain production methods, productivity and the main types of business cost.",
  standards: ["Edexcel IGCSE Economics 4EC1/01 — Business Economics: production and costs"],
  
  vocabulary: [
    { term: "Production", definition: "Using factors of production to make goods or provide services." },
    { term: "Productivity", definition: "Output produced per unit of input, usually per worker or hour." },
    { term: "Job production", definition: "One-off or small-batch production of customised products." },
    { term: "Batch production", definition: "Producing a set quantity of identical items in stages." },
    { term: "Flow production", definition: "Continuous production of identical items on an assembly line." },
    { term: "Fixed cost", definition: "A cost that does not change with output in the short run." },
    { term: "Variable cost", definition: "A cost that changes directly with output." },
  ],
  concepts: [
    {
      id: "ecn10-u7-production",
      title: "Production Methods and Productivity",
      skill: "Compare methods of production and explain how productivity is measured and improved.",
      lesson: {
        sections: [
          {
            heading: "Methods of production",
            body: "Businesses choose how to organise production. **Job production** makes one-off or customised items, such as handmade furniture. **Batch production** makes a set number of similar products, such as school uniforms. **Flow production** uses assembly lines for continuous output, such as cars or bottling.\n\nJob production is flexible but costly per unit. Flow production has high initial capital costs but low unit costs at high output. Batch production lies between the two.",
          },
          {
            heading: "Productivity and efficiency",
            body: "**Labour productivity** is output per worker or per hour worked: $\\text{labour productivity}=\\frac{\\text{output}}{\\text{workers}}$. Higher productivity means more output from the same inputs, lowering average cost.\n\nProductivity rises through better training, motivation, technology, efficient machines and specialisation. Firms must also avoid waste, downtime and poor quality.",
          },
        ],
        keyFormulas: [
          { name: "Labour productivity", statement: "Output divided by number of workers or hours worked." },
          { name: "Average cost", statement: "Total cost divided by output." },
          { name: "Marginal cost", statement: "Change in total cost divided by change in output." },
        ],
        workedExample: {
          problem: "A bakery employs 8 workers and produces 1,600 loaves per week. Calculate labour productivity.",
          solution: "Labour productivity = 1,600 ÷ 8 = 200 loaves per worker per week.",
        },
      },
      questions: [
        {
          id: "ecn10-u7-production-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which production method is most likely to be used for custom-built wedding cakes?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Flow production"
                    },
                    {
                              "id": "b",
                              "text": "Batch production"
                    },
                    {
                              "id": "c",
                              "text": "Job production"
                    },
                    {
                              "id": "d",
                              "text": "Mass production"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Job production",
                              "statement": "One-off or customised production."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Custom products need flexible one-off methods.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Job production",
          "commonErrors": [
                    "Choosing flow because output is high volume."
          ]
},
        },
        {
          id: "ecn10-u7-production-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A factory produces 4,800 units using 12 workers. Calculate labour productivity per worker.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Productivity",
                              "answer": 400,
                              "unit": "units per worker"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Labour productivity",
                              "statement": "Output ÷ workers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Use output divided by workers.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "4,800 ÷ 12 = 400 units per worker.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "400 units per worker"
},
        },
        {
          id: "ecn10-u7-production-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two advantages of flow production for a car manufacturer.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Flow production",
                              "statement": "Continuous assembly-line production lowers unit costs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "High output and specialisation can reduce average cost.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Assembly lines allow continuous, consistent production.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Both points linked to large-scale manufacturing.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Low unit costs through continuous output and efficient specialisation.",
          "commonErrors": [
                    "Listing advantages without explaining."
          ]
},
        },
        {
          id: "ecn10-u7-production-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A clothing firm currently makes uniforms in batches but is considering flow production.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Compare batch and flow production for this firm.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain one risk of moving to flow production.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Batch vs flow",
                              "statement": "Flexibility and set batches versus continuous low-cost output."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Batch suits variety and moderate volumes; flow suits standardised high volume.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Flow may need large investment and reduce flexibility.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Risk: machinery breakdown or demand changes can cause costly downtime/inflexibility.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) batch flexible, flow low-cost/high-volume (b) inflexibility or breakdown risk",
          "commonErrors": [
                    "No comparison.",
                    "No risk."
          ]
},
        },
        {
          id: "ecn10-u7-production-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Productivity in a call centre rises after staff training and new software are introduced.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define labour productivity.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how training can raise productivity.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain one possible limitation of measuring productivity only by output per worker.",
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
                              "name": "Labour productivity",
                              "statement": "Output per worker or per hour."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Output produced per worker or per hour worked.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Training improves skills and reduces errors or time per call.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Ignores quality, wellbeing and wider costs, so output may rise while service falls.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) output per worker (b) better skills/fewer errors (c) quality may be ignored"
},
        },
        {
          id: "ecn10-u7-production-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A furniture maker must choose between job, batch and flow production.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define each production method.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain which method suits bespoke furniture and why.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate whether a mass-produced chair maker should use flow production.",
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
                              "name": "Choosing production method",
                              "statement": "Match method to customisation, volume and cost."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Job=custom one-offs; batch=set quantity; flow=continuous assembly line.",
                              "marks": 3,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Bespoke furniture needs job production because products differ and flexibility matters.",
                              "marks": 3,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Flow suits standard chairs at high volume, but requires capital and demand stability.",
                              "marks": 3,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) definitions (b) job for bespoke (c) flow likely for mass chairs, evaluated",
          "commonErrors": [
                    "No evaluation.",
                    "Ignoring capital cost."
          ]
},
        },
      ],
    },
    {
      id: "ecn10-u7-costs",
      title: "Costs of Production",
      skill: "Calculate and interpret fixed, variable, total, average and marginal costs.",
      lesson: {
        sections: [
          {
            heading: "Main cost concepts",
            body: "**Fixed costs** do not change with output in the short run, such as rent or insurance. **Variable costs** change with output, such as raw materials and hourly wages. **Total cost** is fixed plus variable cost.\n\n**Average cost** is total cost per unit: $\\text{AC}=\\frac{TC}{Q}$. **Marginal cost** is the extra cost of one more unit: $\\text{MC}=\\frac{\\Delta TC}{\\Delta Q}$.",
          },
          {
            heading: "Using cost data",
            body: "Average total cost usually falls at first as fixed costs are spread over more units, then may rise if variable costs increase. Marginal cost matters when deciding whether to produce another unit. A firm compares price or marginal revenue with marginal cost.",
          },
        ],
        keyFormulas: [
          { name: "Total cost", statement: "Fixed cost plus variable cost." },
          { name: "Average cost", statement: "Total cost ÷ output." },
          { name: "Marginal cost", statement: "Change in total cost ÷ change in output." },
        ],
        workedExample: {
          problem: "Fixed cost is £500 and variable cost is £2 per unit. Find total and average cost at 100 units.",
          solution: "TC = 500 + (2 × 100) = £700. AC = 700 ÷ 100 = £7 per unit.",
        },
      },
      questions: [
        {
          id: "ecn10-u7-costs-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which cost is most likely to be fixed in the short run?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Raw materials"
                    },
                    {
                              "id": "b",
                              "text": "Factory rent"
                    },
                    {
                              "id": "c",
                              "text": "Hourly wages for production staff"
                    },
                    {
                              "id": "d",
                              "text": "Packaging per item"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Fixed cost",
                              "statement": "Cost that does not vary with output in the short run."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rent is payable even if output falls.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Factory rent"
},
        },
        {
          id: "ecn10-u7-costs-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Fixed cost is £800 and variable cost is £4 per unit. Calculate total cost at 150 units.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Total cost",
                              "answer": 1400,
                              "unit": "£"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Total cost",
                              "statement": "Fixed cost + variable cost."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Variable cost = £4 × 150 = £600.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Total cost = £800 + £600.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Total cost = £1,400.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "£1,400"
},
        },
        {
          id: "ecn10-u7-costs-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Output rises from 100 to 120 units and total cost rises from £1,000 to £1,160. Calculate marginal cost.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Marginal cost",
                              "answer": 8,
                              "unit": "£ per unit"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Marginal cost",
                              "statement": "Change in total cost ÷ change in output."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Change in total cost = £160; change in output = 20 units.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "MC = 160 ÷ 20.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Marginal cost = £8 per unit.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "£8 per unit"
},
        },
        {
          id: "ecn10-u7-costs-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A café has fixed costs of £1,200 per month and variable costs of £3 per customer.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate total cost and average cost at 600 customers.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why average cost falls as customer numbers rise from 200 to 600.",
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
                              "name": "Cost calculations",
                              "statement": "TC = FC + VC; AC = TC ÷ Q."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) VC = £3 × 600 = £1,800; TC = £1,200 + £1,800 = £3,000.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) AC = £3,000 ÷ 600 = £5.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Fixed costs are spread over more customers, so average fixed cost falls.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) TC £3,000, AC £5 (b) fixed costs spread over more output"
},
        },
        {
          id: "ecn10-u7-costs-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A firm produces 50 units at total cost £900 and 70 units at total cost £1,120.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate average cost at 50 and 70 units.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Calculate marginal cost between 50 and 70 units.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Explain why marginal cost is useful for output decisions.",
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
                              "name": "Cost measures",
                              "statement": "AC = TC ÷ Q; MC = ΔTC ÷ ΔQ."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) AC at 50 = £900 ÷ 50 = £18.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) AC at 70 = £1,120 ÷ 70 = £16.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Both averages stated correctly.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) MC = (1,120 − 900) ÷ (70 − 50) = £11 per unit.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) It shows the cost of the next unit, helping decide whether extra output adds profit.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) £18 and £16 (b) £11 (c) next-unit cost guides output"
},
        },
        {
          id: "ecn10-u7-costs-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A manufacturer has fixed costs of £10,000, variable cost of £25 per unit and sells 500 units.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate total cost and average cost.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "If output rises by 20 units and total cost rises by £600, calculate marginal cost.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why a firm might produce more when price is above marginal cost.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Evaluate whether falling average cost always means rising profit.",
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
                              "name": "Cost and output decisions",
                              "statement": "Costs guide output; profit depends on revenue too."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) VC = £25 × 500 = £12,500; TC = £10,000 + £12,500 = £22,500.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) AC = £22,500 ÷ 500 = £45.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) MC = £600 ÷ 20 = £30 per unit.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) If price exceeds MC, each extra unit adds more revenue than cost, raising profit.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Not necessarily: revenue may fall, demand may be limited, and fixed costs still matter.",
                              "marks": 3,
                              "markCode": "AO3",
                              "part": "d"
                    }
          ],
          "finalAnswer": "(a) TC £22,500, AC £45 (b) £30 (c) price>MC adds profit (d) revenue and demand also matter",
          "commonErrors": [
                    "Forgetting fixed costs.",
                    "Treating lower AC as automatic profit."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecn10-u7-production-costs-notes",
      title: "Production and costs — notes",
      summary: "Match production method to output needs; productivity rises with efficiency; costs determine unit profitability.",
      sections: [
        { heading: "Production methods", body: "Job = customised one-offs; batch = set quantities; flow = continuous assembly-line output." },
        { heading: "Productivity", body: "Output per worker or hour rises through training, technology and efficient organisation." },
        { heading: "Costs", body: "TC = fixed + variable; AC = TC ÷ output; MC = change in TC ÷ change in output." },
      ],
    },
  ],
};
