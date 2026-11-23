import type { Lesson } from "../../../types.ts";

export const lesson92: Lesson = {
  id: "ebz11-u9-lesson-9-2",
  code: "9-2",
  title: "Innovation and Technology",
  goal: "I CAN explain product and process innovation and evaluate the impact of technology on business.",
  standards: ["Edexcel IGCSE Business 4BS0 — Innovation, technology and change"],
  
  vocabulary: [
    { term: "Product innovation", definition: "Developing new or improved goods or services for customers." },
    { term: "Process innovation", definition: "Improving how products are made or delivered — new methods, machinery or systems." },
    { term: "Research and development (R&D)", definition: "Formal activity to create new products, processes or knowledge." },
    { term: "Automation", definition: "Using machines/computers to perform tasks previously done by people." },
    { term: "CAD/CAM", definition: "Computer-aided design/manufacture — designing and producing via computer systems." },
    { term: "Obsolescence", definition: "A product or skill becoming outdated and worthless." },
    { term: "Competitive advantage", definition: "Something a business does better than rivals, giving it an edge." },
  ],
  concepts: [
    {
      id: "ebz11-u9-innovation",
      title: "Product and Process Innovation",
      skill: "Explain why businesses innovate and distinguish product from process innovation.",
      lesson: {
        sections: [
          {
            heading: "Types of innovation",
            body: "**Product innovation** creates new or improved goods/services — e.g. a phone maker adding a camera. **Process innovation** improves how things are made or delivered — e.g. a car plant using robots, or a restaurant switching to online ordering. Innovation often involves **R&D** — formal spending on research to create new products/processes. Innovation can be **radical** (completely new — e.g. the internet) or **incremental** (improvements to existing products — e.g. a better battery).",
          },
          {
            heading: "Why businesses innovate",
            body: "**Reasons**: competition — rivals innovate so must you; changing customer tastes and expectations; extending product life cycles; reducing costs via process innovation; creating competitive advantage and premium pricing; entering new markets. **Benefits**: higher sales and market share, efficiency gains, differentiation, survival. **Costs/risks**: R&D is expensive and may fail; new products need marketing; process change disrupts production; innovations can be copied by rivals; new technology can make skills/stock obsolete.",
          },
        ],
        keyFormulas: [
          { name: "Product innovation", statement: "new/improved goods or services for customers" },
          { name: "Process innovation", statement: "new/improved ways of making or delivering" },
        ],
        workedExample: {
          problem: "A bicycle maker invests in R&D to develop an electric bike (product innovation) and a robot welding line (process innovation). Explain the different aims of each.",
          solution: "The electric bike aims to create a new product that attracts customers and commands a premium — product innovation targets demand. The robot welding line aims to cut production costs and improve consistency — process innovation targets efficiency. Together they could give both higher revenue and lower costs.",
        },
      },
      questions: [
        {
          id: "ebz11-u9-innovation-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is process innovation?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Developing a new product for customers"
                    },
                    {
                              "id": "b",
                              "text": "Improving the way products are made or delivered"
                    },
                    {
                              "id": "c",
                              "text": "Selling products online"
                    },
                    {
                              "id": "d",
                              "text": "Hiring more staff"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Process innovation",
                              "statement": "Improved methods of production/delivery."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Process innovation = better ways of making/delivering, not the product itself.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Improving production/delivery methods"
},
        },
        {
          id: "ebz11-u9-innovation-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Distinguish between product innovation and process innovation, giving an example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Innovation types",
                              "statement": "Product = what is sold; process = how it is made/delivered."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Product innovation: new/improved goods or services — e.g. adding a camera to a phone.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Process innovation: new/improved production or delivery methods — e.g. robot assembly line.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Clear distinction: what customers buy vs how it is produced.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Product=new/improved offering; process=better production/delivery — with examples.",
          "commonErrors": [
                    "Examples without type labels."
          ]
},
        },
        {
          id: "ebz11-u9-innovation-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two reasons why businesses invest in research and development.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "R&D motives",
                              "statement": "Competition, changing tastes, differentiation, efficiency."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Reason 1: keep pace with rivals — competitors innovate, so the firm must to stay competitive.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Reason 2: respond to changing customer tastes/times, or reduce costs through process innovation.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Competition/innovation race and changing customer needs or cost reduction.",
          "commonErrors": [
                    "Saying R&D is required by law."
          ]
},
        },
        {
          id: "ebz11-u9-innovation-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A furniture company is deciding whether to spend £2m on R&D for a new smart sofa.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two potential benefits of this product innovation.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain one risk of the investment.",
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
                              "name": "Innovation evaluation",
                              "statement": "New products can differentiate and earn premiums but R&D may fail."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Benefit: differentiated product can command premium prices and attract new customers.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Benefit: extends product range/life cycle and can open new markets.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Risk: R&D may fail — the product may not sell, leaving £2m wasted; rivals may copy it.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) differentiation/premium, new markets. (b) R&D failure/copying.",
          "commonErrors": [
                    "Risk that is not innovation-specific.",
                    "Benefits without link to new product."
          ]
},
        },
        {
          id: "ebz11-u9-innovation-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A manufacturer is choosing between investing in product innovation or process innovation.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain one way product innovation could benefit the firm.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain one way process innovation could benefit the firm.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain one drawback common to both types of innovation.",
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
                              "name": "Innovation trade-offs",
                              "statement": "Product targets demand; process targets efficiency; both cost money and can fail."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Product innovation benefit: new/improved products attract customers and can earn higher prices.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Process innovation benefit: cheaper/faster/more consistent production lowers unit costs.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Drawback: development costs money and may not pay off; innovation can be copied by rivals.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) demand/prices; (b) efficiency/costs; (c) cost + copying risk.",
          "commonErrors": [
                    "Product/process benefits swapped.",
                    "Drawback that applies to only one type."
          ]
},
        },
        {
          id: "ebz11-u9-innovation-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A traditional retailer is losing customers to online competitors.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define product innovation and process innovation.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Suggest one product innovation the retailer could pursue.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Suggest one process innovation the retailer could pursue.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain one risk the retailer faces in innovating.",
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
                              "name": "Innovating to compete",
                              "statement": "Respond to rivals with new products and better processes, weighed against cost/risk."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Product innovation = new/improved goods/services for customers; process = improved production/delivery methods.",
                              "marks": 3,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Product idea: click-and-collect, personalised recommendations, new product lines — anything new for customers.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Process idea: online ordering system, automated warehouse, faster delivery logistics.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Risk: innovation is costly and may fail or be copied; disruption during implementation.",
                              "marks": 3,
                              "markCode": "AO2",
                              "part": "d"
                    }
          ],
          "finalAnswer": "(a) definitions; (b) customer-facing innovation; (c) operational innovation; (d) cost/failure/copying.",
          "commonErrors": [
                    "Suggestions that are neither product nor process innovation.",
                    "Risk unrelated to innovation."
          ]
},
        },
      ],
    },
    {
      id: "ebz11-u9-technology",
      title: "Technology and Automation",
      skill: "Evaluate how new technology affects productivity, employment and competitiveness.",
      lesson: {
        sections: [
          {
            heading: "Technology in business",
            body: "**ICT** (information and communication technology) supports nearly every function — email and video calls for communication, databases for stock and customer records, e-commerce for sales, and accounting software. **Automation** uses machines/computers for tasks previously done by people — robot arms in assembly, self-service checkouts, automated warehouses. **CAD/CAM** lets designers create products on screen and machines produce them directly — faster, more accurate, less waste.",
          },
          {
            heading: "Impact of technology",
            body: "**Benefits**: higher productivity and consistency; lower labour costs per unit; 24/7 operation; better information for decisions; new products/services possible. **Costs/risks**: high capital cost; staff need retraining; jobs lost to automation — unemployment and skills obsolescence; over-reliance creates vulnerability (system failure stops the business); security risks (data breaches); implementation disruption. Technology gives competitive advantage only if rivals cannot easily copy it, and it must fit the business's strategy and skills.",
          },
        ],
        keyFormulas: [
          { name: "Automation", statement: "machines/computers replacing human tasks" },
          { name: "CAD/CAM", statement: "computer design + computer-controlled manufacture" },
        ],
        workedExample: {
          problem: "A warehouse replaces 30 pickers with an automated system costing £500,000. Output doubles and errors fall. Evaluate the decision.",
          solution: "Benefits: labour costs fall per unit, output and accuracy rise, system works 24/7. Costs: £500,000 capital, 30 jobs lost, retraining needed for remaining staff, dependence on the system. Payback depends on labour savings vs the investment — the firm should also consider the social/reputational impact of redundancies.",
        },
      },
      questions: [
        {
          id: "ebz11-u9-technology-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is automation?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Using machines or computers to do tasks previously done by people"
                    },
                    {
                              "id": "b",
                              "text": "A type of staff training"
                    },
                    {
                              "id": "c",
                              "text": "Selling products abroad"
                    },
                    {
                              "id": "d",
                              "text": "A marketing technique"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Automation",
                              "statement": "Machines replacing human tasks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Automation = machines/computers doing tasks humans used to do.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(a)** Machines doing human tasks"
},
        },
        {
          id: "ebz11-u9-technology-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give three benefits to a business of introducing new technology.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Technology benefits",
                              "statement": "Productivity, cost, consistency, information."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Higher productivity/efficiency — machines work faster, longer, more consistently.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Lower unit labour costs once investment is recovered.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Better information for decisions (databases, ICT) or new products possible.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Any three: productivity, lower costs, consistency, better info, new products.",
          "commonErrors": [
                    "Listing drawbacks as benefits."
          ]
},
        },
        {
          id: "ebz11-u9-technology-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two problems a business may face when introducing automation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Automation problems",
                              "statement": "Cost, job losses, retraining, dependence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Problem 1: high capital cost — the machinery must earn its investment back.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Problem 2: job losses and need to retrain remaining staff; morale/industrial relations issues.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "High cost and job losses/retraining — or dependence on systems.",
          "commonErrors": [
                    "Problems unrelated to automation."
          ]
},
        },
        {
          id: "ebz11-u9-technology-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A factory replaces manual assembly with robots.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two benefits the factory gains.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain one problem the factory may face with its workforce.",
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
                              "name": "Automation trade-offs",
                              "statement": "Efficiency gains vs employment and cost burdens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Benefit: robots work faster and consistently — higher output and quality.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Benefit: lower unit labour costs over time and 24/7 operation possible.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Problem: redundancies — displaced workers need retraining or lose jobs; morale may fall.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) productivity/quality, lower costs. (b) redundancies/retraining.",
          "commonErrors": [
                    "Benefits that are actually costs.",
                    "Workforce problem that is not realistic."
          ]
},
        },
        {
          id: "ebz11-u9-technology-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A small business is considering investing in computer-aided design and manufacture (CAD/CAM).",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain what CAD/CAM means.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Give two benefits CAD/CAM could bring.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Give one drawback.",
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
                              "name": "CAD/CAM",
                              "statement": "Computer design linked to computer-controlled production."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) CAD = designing products on computer; CAM = machines produce directly from the design.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Benefit: faster, more accurate design and production; less material waste.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Benefit: easy to modify designs and produce customised/batch variations.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Drawback: very high capital cost; needs skilled staff to operate.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) computer design+manufacture. (b) speed/accuracy, flexibility. (c) cost/skills.",
          "commonErrors": [
                    "CAD and CAM defined identically.",
                    "Drawback unrelated to the technology."
          ]
},
        },
        {
          id: "ebz11-u9-technology-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "An established manufacturer wants to modernise with new technology.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define automation.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain two benefits automation could bring to the manufacturer.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain two problems the manufacturer might face.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "Suggest one way to reduce the workforce problems of automation.",
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
                              "name": "Technology adoption",
                              "statement": "Automation raises efficiency but brings cost, employment and skill challenges."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Automation = machines/computers performing tasks previously done by people.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Benefit: higher productivity, consistency and output quality.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Benefit: lower unit labour costs and ability to operate longer hours.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Problem: high capital cost — investment must be recovered.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Problem: job losses and need for retraining; dependence on the system.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) e.g. retrain displaced workers for technical/maintenance roles or redeploy them.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "d"
                    }
          ],
          "finalAnswer": "(a) definition; (b) productivity, cost; (c) capital cost, jobs/skills; (d) retrain/redeploy.",
          "commonErrors": [
                    "Benefits and problems swapped.",
                    "No concrete workforce solution."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebz11-u9-innovation-notes",
      title: "Innovation and technology — revision notes",
      summary: "Product innovation = new/improved offerings; process innovation = better production/delivery. Both driven by competition and changing tastes but cost money and can be copied. Technology (automation, CAD/CAM, ICT) raises productivity but brings capital costs, job losses and dependence.",
      sections: [
        { heading: "Key idea", body: "Product innovation targets demand/prices; process innovation targets efficiency/costs." },
        { heading: "Risks", body: "R&D may fail; innovations can be copied; automation displaces workers and creates dependence." },
        { heading: "Management", body: "Retrain and redeploy staff; phase technology adoption; keep systems maintained and secure." },
      ],
    },
  ],
};
