import type { Lesson } from "../../../types.ts";

export const lesson121: Lesson = {
  id: "ebz11-u12-lesson-12-1",
  code: "12-1",
  title: "Factors of Production and Productivity",
  goal: "I CAN classify the factors of production and explain how productivity affects business performance.",
  standards: ["Edexcel IGCSE Business 4BS0 — Business Operations", "4BS0 5.2 Production", "4BS0 5.3 Factors of production"],
  
  vocabulary: [
    { term: "Land", definition: "Natural resources used in production, including buildings and sites." },
    { term: "Labour", definition: "Human effort used to produce goods or services." },
    { term: "Capital", definition: "Man-made resources such as machinery, equipment and tools." },
    { term: "Enterprise", definition: "The entrepreneur or manager who organises the other factors." },
    { term: "Productivity", definition: "Output produced per unit of input, usually per worker or per hour." },
  ],
  concepts: [
    {
      id: "ebz11-u12-factors",
      title: "The Four Factors of Production",
      skill: "Classify resources as land, labour, capital or enterprise.",
      lesson: {
        sections: [
          {
            heading: "Land, labour, capital and enterprise",
            body: "**Land** includes natural resources such as soil, water, minerals and space, as well as buildings and sites used for production. **Labour** is the human input — workers, managers and skilled specialists. **Capital** is man-made equipment such as machinery, vehicles, computers and tools. **Enterprise** is the individual or team that combines the other factors, takes risks and makes decisions.\n\nAll businesses need a combination of these factors. A bakery uses premises and ovens (land and capital), bakers (labour), and an owner-manager who organises production and finds customers (enterprise).",
          },
          {
            heading: "Scarcity and opportunity cost",
            body: "Resources are scarce, so choosing more of one factor usually means less of another. A restaurant with limited capital may employ more workers but fewer automated machines. Every choice has an **opportunity cost** — the next best alternative given up.\n\nThe mix of factors affects efficiency, cost, quality and flexibility. Choosing more capital may raise output but increase fixed costs; choosing more labour may add flexibility but ongoing wage costs.",
          },
        ],
        keyFormulas: [
          { name: "Factors of production", statement: "Land + Labour + Capital + Enterprise" },
          { name: "Opportunity cost", statement: "Value of the best alternative forgone" },
        ],
        workedExample: {
          problem: "A mobile coffee van uses a van, coffee machine, two baristas and an owner who plans routes. Classify the factors.",
          solution: "Van and machine = capital; route stops and workspace = land; baristas = labour; owner organising routes and sales = enterprise.",
        },
      },
      questions: [
        {
          id: "ebz11-u12-factors-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which factor of production is represented by the entrepreneur who organises resources and takes risks?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Land"
                    },
                    {
                              "id": "b",
                              "text": "Labour"
                    },
                    {
                              "id": "c",
                              "text": "Capital"
                    },
                    {
                              "id": "d",
                              "text": "Enterprise"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Enterprise",
                              "statement": "The organiser who combines factors and takes risks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Organising resources and risk-taking is enterprise.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(d)** Enterprise",
          "commonErrors": [
                    "Confusing enterprise with capital."
          ]
},
        },
        {
          id: "ebz11-u12-factors-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Explain the difference between land and capital, giving one example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Land and capital",
                              "statement": "Land is natural/site resource; capital is man-made."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Land = natural resources or site, e.g. farmland or premises.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Capital = man-made equipment, e.g. machinery or vehicles.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The key difference is natural/site versus produced equipment.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Land is natural/site; capital is man-made equipment.",
          "commonErrors": [
                    "Treating buildings only as land without explaining capital."
          ]
},
        },
        {
          id: "ebz11-u12-factors-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Classify each resource for a pizza restaurant: dough mixers, pizza chefs, the restaurant building, the owner-manager, flour and delivery scooters.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Factor classification",
                              "statement": "Assign resources to land, labour, capital or enterprise."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Dough mixers and delivery scooters are capital.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Pizza chefs are labour.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Restaurant building and flour are land/natural resources.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Owner-manager is enterprise.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Mixers/scooters=capital; chefs=labour; building/flour=land; owner=enterprise.",
          "commonErrors": [
                    "Classifying all equipment as land."
          ]
},
        },
        {
          id: "ebz11-u12-factors-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain why scarcity of factors of production creates opportunity cost for a growing business.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Scarcity",
                              "statement": "Limited resources force choices."
                    },
                    {
                              "kind": "principle",
                              "name": "Opportunity cost",
                              "statement": "Best alternative forgone."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Land, labour, capital and enterprise are limited.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "A growing business cannot use every factor in every way.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Choosing one use means giving up another use.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "For example, capital spent on a van cannot buy a machine.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The forgone benefit is the opportunity cost.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Scarcity forces choices; every choice has a forgone alternative.",
          "commonErrors": [
                    "Defining opportunity cost as only money spent."
          ]
},
        },
        {
          id: "ebz11-u12-factors-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A successful family bakery must decide whether to buy a second oven or hire two more bakers. Evaluate the factors of production involved in each option.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Factor mix",
                              "statement": "Different factors create different cost, capacity and flexibility outcomes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The oven is capital: high initial cost but may raise capacity consistently.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Bakers are labour: flexible but add ongoing wage costs.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Both options require enterprise to organise production and demand.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Premises/land must support either option.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Buying the oven may be better if demand is stable and capital is available.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Hiring may be better if demand fluctuates or skills differ.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "The best choice depends on cost, demand and opportunity cost.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Evaluate capital versus labour using cost, demand and flexibility.",
          "commonErrors": [
                    "Ignoring opportunity cost.",
                    "Assuming one option is always best."
          ]
},
        },
        {
          id: "ebz11-u12-factors-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A school canteen wants to increase output. It can invest in a faster till system, recruit more lunchtime staff, extend opening hours or improve staff training. Discuss how the factors of production and productivity are affected by these options.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Production choices",
                              "statement": "Different factors affect output, cost and quality differently."
                    },
                    {
                              "kind": "skill",
                              "name": "Evaluation",
                              "statement": "Judge options against business needs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A faster till system adds capital and can raise throughput.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "More staff increases labour but also wage costs.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Extending hours changes use of land/time rather than adding a new factor.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Training improves labour productivity without necessarily adding workers.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Enterprise is needed to coordinate the chosen option.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Capital may give consistent gains if demand is high.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Labour is more flexible if demand varies.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Training can improve quality as well as speed.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Opening longer may increase fixed costs if sales do not rise.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Best answer links factor choice to cost, output and demand.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Choose the factor mix that balances output, cost, quality and demand.",
          "commonErrors": [
                    "Listing options without evaluation.",
                    "Ignoring costs."
          ]
},
        },
      ],
    },
    {
      id: "ebz11-u12-productivity",
      title: "Productivity and Efficiency",
      skill: "Calculate productivity and explain how efficiency can be improved.",
      lesson: {
        sections: [
          {
            heading: "Measuring productivity",
            body: "**Productivity** measures how much output is produced from inputs. Labour productivity is usually output divided by workers or hours worked. Higher productivity means more output for the same input, which can lower unit costs and improve competitiveness.\n\nProductivity can rise through better training, new technology, improved motivation, better organisation or reduced waste. It can fall through poor management, low motivation, outdated equipment or inefficiency.",
          },
          {
            heading: "Improving efficiency",
            body: "Businesses can raise productivity by training workers, improving processes, motivating staff, maintaining equipment and using appropriate technology. Efficiency means using resources without unnecessary waste.\n\nProductivity measures should be interpreted carefully: higher output per worker is useful but does not always mean better quality, customer satisfaction or long-term performance.",
          },
        ],
        keyFormulas: [
          { name: "Labour productivity", statement: "Output / number of workers or labour hours" },
          { name: "Efficiency", statement: "Output achieved with minimum waste" },
        ],
        workedExample: {
          problem: "A workshop produces 1,200 units using 40 workers. What is output per worker?",
          solution: "Productivity = 1,200 / 40 = 30 units per worker.",
        },
      },
      questions: [
        {
          id: "ebz11-u12-productivity-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A factory produces 1,200 units using 40 workers. Calculate labour productivity in units per worker.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "productivity",
                              "answer": 30,
                              "unit": "units per worker"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Labour productivity",
                              "statement": "Output / workers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Use output divided by workers: 1,200 / 40.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Calculate 30 units per worker.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "30 units per worker",
          "commonErrors": [
                    "Dividing workers by output."
          ]
},
        },
        {
          id: "ebz11-u12-productivity-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "What is productivity and why does higher productivity matter to a business?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Productivity",
                              "statement": "Output per input."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Productivity = output produced per worker or hour.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Higher productivity can reduce unit costs.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "It can improve competitiveness and profit.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Output per input; higher productivity lowers costs and improves competitiveness.",
          "commonErrors": [
                    "Confusing productivity with total output only."
          ]
},
        },
        {
          id: "ebz11-u12-productivity-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Give two ways a business can increase labour productivity and explain one limitation of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Raising productivity",
                              "statement": "Training, technology, motivation and organisation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Training improves skills and reduces errors.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Limitation: training costs time and money.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "New technology can speed up work.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Limitation: high capital cost and possible job losses.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Training and technology raise productivity but involve costs.",
          "commonErrors": [
                    "Only one method.",
                    "No limitation."
          ]
},
        },
        {
          id: "ebz11-u12-productivity-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain why measuring productivity per worker may be more useful than measuring only total output.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Productivity measurement",
                              "statement": "Per-worker output shows efficiency, not just size."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Total output can rise simply by hiring more workers.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Output per worker shows how efficiently labour is used.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "It helps compare performance over time or between sites.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "It can reveal whether new systems improve efficiency.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "It must still be judged with quality and cost measures.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Per-worker productivity measures efficiency rather than just total production.",
          "commonErrors": [
                    "Confusing output growth with efficiency."
          ]
},
        },
        {
          id: "ebz11-u12-productivity-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Discuss the drawbacks of measuring a business's success only by labour productivity.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Productivity limits",
                              "statement": "One measure cannot capture quality, welfare or all costs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Output per worker ignores quality of the product.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "It may ignore customer satisfaction and complaints.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Rushed work can raise output but increase errors or waste.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "It may encourage overwork and lower motivation.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "It ignores capital productivity and total profit.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Some businesses need flexible, creative work rather than speed.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "A balanced view should include quality, cost and stakeholder effects.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Labour productivity is useful but incomplete without quality, cost and welfare measures.",
          "commonErrors": [
                    "Assuming higher productivity always means better business."
          ]
},
        },
        {
          id: "ebz11-u12-productivity-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A bakery wants to raise productivity without cutting jobs. It can invest in staff training or a new automated oven. Evaluate both options.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Productivity improvement",
                              "statement": "Training improves skills; equipment improves speed."
                    },
                    {
                              "kind": "skill",
                              "name": "Evaluation",
                              "statement": "Balance gains against cost, flexibility and staff effects."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Training improves skills and reduces errors.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Training is cheaper than major equipment.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Training keeps jobs and builds capability.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Training may take time before gains appear.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The oven can increase output speed and consistency.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The oven has high capital and maintenance costs.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "The oven may suit only standard products.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "A mixed approach can combine both.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Demand and product variety should guide the choice.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Best decision depends on cost, capacity and staff needs.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Choose training for flexible skill gains or equipment for speed, ideally combining both.",
          "commonErrors": [
                    "Only listing benefits.",
                    "Ignoring costs and flexibility."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebz11-u12-factors-productivity-notes",
      title: "Factors of production and productivity — notes",
      summary: "Land, labour, capital and enterprise are scarce resources; productivity measures output per input.",
      sections: [
        { heading: "Key idea", body: "Every business combines four factors: land, labour, capital and enterprise." },
        { heading: "Productivity", body: "Output divided by workers or hours shows efficiency; higher productivity can lower unit costs." },
        { heading: "Improvement", body: "Training, technology, motivation and process improvements can raise productivity; measure it with quality and cost in mind." },
      ],
    },
  ],
};
