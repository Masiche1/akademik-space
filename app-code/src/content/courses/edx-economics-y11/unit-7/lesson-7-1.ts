import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "ecn11-u7-lesson-7-1",
  code: "7-1",
  title: "Business Activity, Enterprise and Objectives",
  goal: "I CAN explain business activity, the factors of production and the objectives of business.",
  standards: ["Edexcel IGCSE Economics 4EC1 — Paper 1: Investigating small businesses"],
  
  vocabulary: [
    { term: "Business activity", definition: "The production of goods and services to satisfy wants and needs in exchange for payment." },
    { term: "Factors of production", definition: "The resources used to produce goods and services: land, labour, capital and enterprise." },
    { term: "Land", definition: "Natural resources used in production, including raw materials and space." },
    { term: "Labour", definition: "The human effort, skills and time used in production." },
    { term: "Capital", definition: "Man-made resources used in production, such as machinery, tools and buildings." },
    { term: "Enterprise", definition: "The willingness and ability of an entrepreneur to organise the other factors of production and take risk." },
    { term: "Profit", definition: "The reward for enterprise, calculated as total revenue minus total cost." },
  ],
  concepts: [
    {
      id: "ecn11-u7-activity",
      title: "Business Activity and the Factors of Production",
      skill: "Identify and explain the four factors of production used in business activity.",
      lesson: {
        sections: [
          {
            heading: "What business activity is",
            body: "**Business activity** is the production and sale of goods and services in exchange for money. Every economy depends on businesses converting **factors of production** into output that satisfies consumer wants and needs. The four factors are **land** (natural resources), **labour** (human effort and skills), **capital** (man-made resources such as machinery and buildings) and **enterprise** (the entrepreneur who organises the other factors and takes risk).",
          },
          {
            heading: "Rewards to the factors",
            body: "Each factor earns a reward: land earns **rent**, labour earns **wages or salaries**, capital earns **interest**, and enterprise earns **profit**. Profit is therefore not a factor of production — it is the reward for organising the factors and bearing uncertainty. If a business makes a loss, enterprise has failed to cover all costs.",
          },
        ],
        keyFormulas: [
          { name: "Profit", statement: "total revenue − total cost" },
        ],
        workedExample: {
          problem: "A farmer uses a field (land), workers (labour), a tractor (capital) and his own organisation (enterprise) to grow wheat. Identify the reward each factor earns.",
          solution: "Land earns rent, labour earns wages, capital earns interest, and enterprise earns profit (or suffers the loss if revenue does not cover costs).",
        },
      },
      questions: [
        {
          id: "ecn11-u7-activity-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which of the following is NOT a factor of production?",
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
                              "text": "Enterprise"
                    },
                    {
                              "id": "d",
                              "text": "Profit"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Factors of production",
                              "statement": "Land, labour, capital and enterprise."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Profit is the reward for enterprise, not a factor of production.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(d)** Profit",
          "commonErrors": [
                    "Confusing profit with enterprise."
          ]
},
        },
        {
          id: "ecn11-u7-activity-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Explain the role of the entrepreneur in business activity.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Enterprise",
                              "statement": "Organising the other factors and taking risk."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The entrepreneur organises land, labour and capital into a productive business.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "They take risks — the business may fail and they may lose money.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "In return they earn profit if the business is successful.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Organises the factors, takes risk, earns profit.",
          "commonErrors": [
                    "Only mentioning profit, not organisation or risk."
          ]
},
        },
        {
          id: "ecn11-u7-activity-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Distinguish between capital and enterprise as factors of production.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Capital vs enterprise",
                              "statement": "Capital is a resource; enterprise is the organising role."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Capital = man-made resources such as machinery, tools and buildings.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Capital is a passive resource — it is used, not decision-making.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Enterprise = the entrepreneur who combines and manages all factors.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Enterprise takes the risk and earns profit; capital only earns interest.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Capital = man-made resources earning interest; enterprise = organising role earning profit and bearing risk.",
          "commonErrors": [
                    "Treating capital and enterprise as the same thing."
          ]
},
        },
        {
          id: "ecn11-u7-activity-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Aisha opens a clothing shop in her town centre.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify two factors of production Aisha uses and give an example of each.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how enterprise adds value to these other factors.",
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
                              "name": "Applying factors of production",
                              "statement": "Match real examples to land, labour, capital, enterprise."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Any two with examples, e.g. premises = land, staff = labour, stock/display units = capital.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Aisha organises the factors into a working shop.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) She takes risk — the shop may lose money.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Her decisions (location, stock, pricing) determine whether profit is earned.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) Two factors with examples. (b) Enterprise organises factors, takes risk, drives profit.",
          "commonErrors": [
                    "Listing factors without examples.",
                    "No link to risk or reward."
          ]
},
        },
        {
          id: "ecn11-u7-activity-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A student is considering starting a small business after graduation.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State three objectives a new business might have.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why survival is often the first objective of a new business.",
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
                              "name": "Business objectives",
                              "statement": "New firms prioritise survival before growth or profit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Any three of: survival, profit, growth, market share, customer satisfaction.",
                              "marks": 3,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) New businesses face uncertainty and may run out of cash.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) If the business fails there is no chance to pursue other objectives.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Survival requires covering costs and building customers first.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) e.g. survival, profit, growth. (b) Failure risk means survival comes first.",
          "commonErrors": [
                    "Only one objective listed.",
                    "No explanation of risk."
          ]
},
        },
        {
          id: "ecn11-u7-activity-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A bakery converts flour, ovens, bakers and the owner's management into loaves of bread.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define business activity.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Name the four factors of production and give one example from the bakery for each.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Explain why enterprise is described as the most important factor of production.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Evaluate the view that profit is the only objective of a business.",
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
                              "name": "Factors of production",
                              "statement": "Land, labour, capital, enterprise — each essential."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Production of goods/services for payment to satisfy wants.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Land — flour/wheat fields; labour — bakers; capital — ovens/machines; enterprise — owner.",
                              "marks": 4,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Enterprise organises the other factors and bears the risk of failure.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Without enterprise the other factors remain uncombined and unproductive.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Profit is important but businesses also pursue growth, market share, survival, social aims.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "d"
                    },
                    {
                              "reasoning": "(d) However profit is needed to reward enterprise and fund future activity.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "d"
                    }
          ],
          "finalAnswer": "(a) production for payment; (b) four factors with bakery examples; (c) enterprise organises and risks; (d) profit important but not the only objective.",
          "commonErrors": [
                    "Missing an example in (b).",
                    "One-sided evaluation in (d)."
          ]
},
        },
      ],
    },
    {
      id: "ecn11-u7-objectives",
      title: "Business Objectives and Stakeholders",
      skill: "Explain business objectives and the conflicting aims of stakeholders.",
      lesson: {
        sections: [
          {
            heading: "Business objectives",
            body: "Businesses pursue several objectives: **profit maximisation**, **growth** (higher output or market share), **survival**, **customer satisfaction**, **market leadership** and, for some firms, **social or environmental aims**. Objectives differ by business type and stage — a new firm prioritises survival, a mature firm may prioritise profit or growth, and a social enterprise may put its mission before profit.",
          },
          {
            heading: "Stakeholders",
            body: "**Stakeholders** are groups affected by or with an interest in a business: **internal** stakeholders include owners, managers and employees; **external** stakeholders include customers, suppliers, the government, the local community and pressure groups. Each stakeholder has its own objectives — employees want job security and pay, customers want quality and low prices, owners want returns — so objectives often **conflict** and managers must balance them.",
          },
        ],
        keyFormulas: [
          { name: "Profit", statement: "total revenue − total cost" },
        ],
        workedExample: {
          problem: "A factory announces plans to automate, cutting 200 jobs but raising profits. Identify two groups of stakeholders affected and their likely reactions.",
          solution: "Employees (internal): lose jobs — oppose the plan, want redundancy pay or retraining. Shareholders/owners: gain higher profits — support the plan. The conflict shows why managers must balance stakeholder objectives.",
        },
      },
      questions: [
        {
          id: "ecn11-u7-objectives-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which of the following is an internal stakeholder of a business?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Employees"
                    },
                    {
                              "id": "b",
                              "text": "Customers"
                    },
                    {
                              "id": "c",
                              "text": "Government"
                    },
                    {
                              "id": "d",
                              "text": "Local community"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Internal stakeholder",
                              "statement": "Part of the business organisation, e.g. owners, managers, employees."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Employees work inside the business, so they are internal stakeholders.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(a)** Employees",
          "commonErrors": [
                    "Confusing internal with external stakeholders."
          ]
},
        },
        {
          id: "ecn11-u7-objectives-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give three possible objectives of a business.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Business objectives",
                              "statement": "Profit, growth, survival, market share, customer satisfaction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Any one objective, e.g. profit or survival.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Second objective, e.g. growth or market share.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Third objective, e.g. customer satisfaction or market leadership.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Any three of: profit, growth, survival, market share, customer satisfaction.",
          "commonErrors": [
                    "Repeating the same objective.",
                    "Listing stakeholders instead of objectives."
          ]
},
        },
        {
          id: "ecn11-u7-objectives-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how the objective of profit can conflict with the objective of growth.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Objective conflict",
                              "statement": "Resources used for one objective may reduce another."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Profit maximisation may mean keeping costs low and prices high.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Growth requires investment — new premises, staff, marketing — which cuts short-run profit.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "A firm chasing growth may sacrifice profit in the short term.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Conversely, a firm maximising short-run profit may under-invest and fail to grow.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Growth needs investment that reduces short-run profit — the objectives conflict.",
          "commonErrors": [
                    "Saying objectives never conflict.",
                    "No explanation of why."
          ]
},
        },
        {
          id: "ecn11-u7-objectives-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A supermarket decides to pay all staff the 'real living wage', which raises costs.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify two stakeholder groups affected by this decision.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how the objectives of these stakeholders may conflict with each other.",
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
                              "name": "Stakeholder conflicts",
                              "statement": "Different groups want different outcomes from the same decision."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Any two: employees, owners/shareholders, customers, local community.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Employees want higher pay; owners want lower costs/higher profit.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Customers may benefit from better service but face higher prices.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Managers must weigh these conflicting objectives when deciding.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) e.g. employees and owners. (b) Pay vs profit; possibly prices vs service quality.",
          "commonErrors": [
                    "Only one stakeholder.",
                    "No explanation of the conflict."
          ]
},
        },
        {
          id: "ecn11-u7-objectives-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A family-owned restaurant must choose between modernising its kitchen (costly) or keeping profits for the owners.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify two internal and two external stakeholders in this business.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain one way the owners' objectives may differ from those of customers.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Internal vs external stakeholders",
                              "statement": "Internal = inside the firm; external = affected from outside."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Internal: owners, managers, kitchen staff. External: customers, suppliers, local council.",
                              "marks": 3,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Owners want profit and possibly higher prices or lower costs.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Customers want quality food at low prices and good service.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Modernising may raise prices, so the objectives can conflict.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) Internal: owners/managers/staff; external: customers/suppliers/council. (b) Owners want profit; customers want quality and low prices.",
          "commonErrors": [
                    "Misclassifying stakeholders.",
                    "No conflict identified."
          ]
},
        },
        {
          id: "ecn11-u7-objectives-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A high street retailer is debating whether to expand overseas or reward shareholders with higher dividends.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define the term stakeholder.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Name two internal and two external stakeholders of the retailer.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain two business objectives the retailer might pursue in this situation.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "Evaluate the view that businesses should always put profit before other objectives.",
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
                              "name": "Stakeholders and objectives",
                              "statement": "Firms balance competing objectives of different groups."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Anyone affected by or with an interest in the business.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Internal: shareholders, managers/employees. External: customers, suppliers or government.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Growth — expanding overseas increases size and market share.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Profit/dividends — rewarding owners; possibly survival or market leadership.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Profit rewards enterprise and funds investment — important.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "d"
                    },
                    {
                              "reasoning": "(d) But growth, survival, jobs and reputation also matter; ignoring stakeholders can hurt long-run profit.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "d"
                    }
          ],
          "finalAnswer": "(a) interested/affected party; (b) two internal + two external; (c) growth and dividends; (d) profit important but not everything.",
          "commonErrors": [
                    "Only one-sided evaluation.",
                    "Stakeholders not split correctly."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecn11-u7-activity-notes",
      title: "Business activity and objectives — revision notes",
      summary: "Business = production for payment using land, labour, capital and enterprise. Rewards: rent, wages, interest, profit. Objectives include profit, growth, survival; stakeholders have conflicting aims.",
      sections: [
        { heading: "Factors of production", body: "Land earns rent, labour earns wages, capital earns interest, enterprise earns profit — profit is a reward, not a factor." },
        { heading: "Objectives", body: "Profit, growth, survival, market share and customer satisfaction; new firms prioritise survival." },
        { heading: "Stakeholders", body: "Internal (owners, managers, employees) and external (customers, suppliers, government); their objectives often conflict." },
      ],
    },
  ],
};
