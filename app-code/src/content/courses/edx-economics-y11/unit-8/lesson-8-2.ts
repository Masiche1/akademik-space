import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "ecn11-u8-lesson-8-2",
  code: "8-2",
  title: "Production and Operations",
  goal: "I CAN compare methods of production and explain productivity and quality.",
  standards: ["Edexcel IGCSE Economics 4EC1 — Paper 1: Investigating small businesses"],
  
  vocabulary: [
    { term: "Production", definition: "The process of turning factors of production into goods and services." },
    { term: "Job production", definition: "Making one-off or bespoke items, e.g. a tailor-made suit." },
    { term: "Batch production", definition: "Producing a group of identical items together, then switching to another batch." },
    { term: "Flow production", definition: "Continuous production on an assembly line, e.g. cars or bread." },
    { term: "Productivity", definition: "Output per worker or per unit of input over a period of time." },
    { term: "Quality", definition: "How well a product meets customer expectations." },
    { term: "Just-in-time (JIT)", definition: "Receiving materials only when needed in production, reducing storage costs." },
  ],
  concepts: [
    {
      id: "ecn11-u8-methods",
      title: "Methods of Production",
      skill: "Compare job, batch and flow production and choose the right method.",
      lesson: {
        sections: [
          {
            heading: "Three methods",
            body: "**Job production** makes one-off or customised items — suits low volume, high variety (e.g. tailoring, furniture making). **Batch production** makes groups of identical products — suits medium volume and variety (e.g. bakery batches, school uniforms). **Flow production** uses an assembly line for continuous, high-volume output — suits standardised goods (e.g. cars, electronics, bread).",
          },
          {
            heading: "Choosing a method",
            body: "The choice depends on **volume**, **variety**, **cost** and **customer demand**. Flow production has low unit costs at high volume but needs big capital investment and is inflexible. Job production is flexible and high quality but expensive per unit. Batch production sits in between.",
          },
        ],
        keyFormulas: [
          { name: "Productivity", statement: "output ÷ number of workers (or inputs)" },
        ],
        workedExample: {
          problem: "A car maker produces 500 identical cars a day on a moving line. Which production method is this and why?",
          solution: "Flow production — continuous, high-volume, standardised output on an assembly line gives low unit costs.",
        },
      },
      questions: [
        {
          id: "ecn11-u8-methods-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which method of production suits making one-off, customised products?",
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
                              "statement": "One-off or bespoke items."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Job production handles customised, low-volume work.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(c)** Job production",
          "commonErrors": [
                    "Confusing job with batch."
          ]
},
        },
        {
          id: "ecn11-u8-methods-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Describe batch production and give an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Batch production",
                              "statement": "Identical items produced in groups."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Products are made in groups of identical items.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The line then switches to a different batch/product.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Example: school uniforms, bakery batches, tablet computers.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Groups of identical items, then switch — e.g. uniforms or baked goods.",
          "commonErrors": [
                    "No example."
          ]
},
        },
        {
          id: "ecn11-u8-methods-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two advantages of flow production for a high-volume manufacturer.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Flow production benefits",
                              "statement": "Low unit cost, speed, consistency at high volume."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Low unit costs — automation and specialisation at high volume.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Fast, continuous output meets high demand.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Consistent quality — standardised processes.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Workers can specialise in narrow tasks, raising productivity.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Low cost, speed, consistent quality, specialisation.",
          "commonErrors": [
                    "Advantages of job production listed."
          ]
},
        },
        {
          id: "ecn11-u8-methods-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A furniture maker produces handmade, one-off dining tables and is considering switching to flow production.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify its current method of production and explain why it suits the product.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain two problems the firm might face if it switched to flow production.",
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
                              "name": "Matching method to product",
                              "statement": "Bespoke products suit job production; standardised suits flow."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Job production — one-off custom tables need flexible, skilled work.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Flow production needs standardised products — custom designs would be lost.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Huge capital cost of machinery for a small-volume maker.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) Job production suits bespoke work. (b) Lost customisation; high capital cost.",
          "commonErrors": [
                    "Wrong current method.",
                    "Problems not linked to bespoke product."
          ]
},
        },
        {
          id: "ecn11-u8-methods-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A bakery currently bakes 500 loaves a day in batches but wants to increase output tenfold.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Suggest which method of production the bakery should move towards and why.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain one disadvantage of this method the bakery must accept.",
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
                              "name": "Method choice",
                              "statement": "High volume standardised output suits flow production."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Flow production — continuous baking gives low unit costs at high volume.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Bread is standardised — suits an assembly line.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Needs large capital investment in machinery; inflexible — hard to switch products.",
                              "marks": 3,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) Flow production — volume and standardisation. (b) Capital cost, inflexibility.",
          "commonErrors": [
                    "Recommending job production for volume.",
                    "Disadvantage unrelated."
          ]
},
        },
        {
          id: "ecn11-u8-methods-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A clothing company makes T-shirts in three ways: bespoke orders, runs of 200 identical shirts, and continuous production of a standard design.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Match each situation to job, batch or flow production.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State one advantage and one disadvantage of batch production.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Explain why flow production lowers unit costs at high volume.",
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
                              "name": "Production methods",
                              "statement": "Job = bespoke; batch = groups; flow = continuous standardised."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Bespoke = job; runs of 200 = batch; continuous standard = flow.",
                              "marks": 3,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Advantage: flexible — can switch between product lines; lower cost than job per unit.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Disadvantage: setup costs between batches; less flexible than job production.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Specialisation, automation and continuous running spread fixed costs over more units.",
                              "marks": 3,
                              "markCode": "AO2",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) job/batch/flow matched. (b) flexibility vs setup costs. (c) specialisation spreads fixed costs.",
          "commonErrors": [
                    "Mismatched methods.",
                    "Missing advantage or disadvantage."
          ]
},
        },
      ],
    },
    {
      id: "ecn11-u8-operations",
      title: "Productivity, Quality and Efficiency",
      skill: "Explain productivity, quality control and techniques such as just-in-time.",
      lesson: {
        sections: [
          {
            heading: "Productivity and efficiency",
            body: "**Productivity** = output per worker (or per unit of input). Raising productivity means producing more with the same resources — through training, better machinery, motivation or leaner processes. Higher productivity lowers **average cost** and can lower prices or raise profit. **Efficiency** means using the minimum resources to produce a given output with least waste.",
          },
          {
            heading: "Quality and lean production",
            body: "**Quality** means meeting or exceeding customer expectations — poor quality loses customers and creates returns/waste. Firms improve quality through **quality control** (checking output) and **total quality management** (everyone responsible for quality). **Just-in-time (JIT)** delivers materials only when needed, cutting storage costs — but risks stoppages if deliveries fail. **Kaizen** means continuous small improvements.",
          },
        ],
        keyFormulas: [
          { name: "Productivity", statement: "output ÷ number of workers" },
        ],
        workedExample: {
          problem: "A factory produces 4,000 widgets with 20 workers, then 5,000 widgets with the same 20 workers. Calculate productivity before and after.",
          solution: "Before = 4,000 ÷ 20 = 200 widgets per worker. After = 5,000 ÷ 20 = 250 per worker — productivity rose 25%.",
        },
      },
      questions: [
        {
          id: "ecn11-u8-operations-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is productivity?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Total output of a business"
                    },
                    {
                              "id": "b",
                              "text": "Output per worker or per unit of input"
                    },
                    {
                              "id": "c",
                              "text": "Number of machines owned"
                    },
                    {
                              "id": "d",
                              "text": "Total profit earned"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Productivity",
                              "statement": "Output per worker or input."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Productivity measures output relative to workers or inputs.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Output per worker/input",
          "commonErrors": [
                    "Confusing with total output."
          ]
},
        },
        {
          id: "ecn11-u8-operations-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give three ways a business can improve productivity.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Improving productivity",
                              "statement": "Training, technology, motivation, efficient processes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Train workers to work faster and more accurately.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Invest in better machinery or automation.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Motivate staff or streamline processes to reduce waste.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Training, technology, motivation, process improvement.",
          "commonErrors": [
                    "Only one way.",
                    "Vague answers."
          ]
},
        },
        {
          id: "ecn11-u8-operations-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why quality is important to a business.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Importance of quality",
                              "statement": "Quality builds reputation, reduces waste, retains customers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Poor quality loses customers and damages reputation.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Returns and repairs create extra costs and waste.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "High quality can justify premium prices.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Good quality builds customer loyalty and repeat sales.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Reputation, lower waste/costs, premium prices, loyalty.",
          "commonErrors": [
                    "Only one point."
          ]
},
        },
        {
          id: "ecn11-u8-operations-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A furniture workshop produces 300 chairs per month with 15 workers. After training and new machinery it produces 450 chairs with the same 15 workers.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate productivity before and after the changes.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain one benefit the firm gains from this higher productivity.",
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
                              "name": "Productivity",
                              "statement": "output ÷ workers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Before = 300 ÷ 15 = 20 chairs per worker.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) After = 450 ÷ 15 = 30 chairs per worker.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Productivity rose from 20 to 30 — a 50% increase.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Lower average cost per chair — can cut prices or raise profit; or meet more demand.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) 20 → 30 per worker. (b) Lower unit cost / more output.",
          "commonErrors": [
                    "Wrong division.",
                    "Benefit unrelated to productivity."
          ]
},
        },
        {
          id: "ecn11-u8-operations-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A car manufacturer wants to cut storage costs and reduce waste.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain how just-in-time production could help.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain one risk the manufacturer faces with just-in-time.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Just-in-time",
                              "statement": "Materials arrive only when needed — cuts storage."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) JIT means parts arrive only as needed — no large warehouses.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Cuts storage costs, insurance and waste from unused stock.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Frees up cash tied up in inventory.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) If a delivery is late the whole production line stops — no buffer stock.",
                              "marks": 3,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) Less storage, waste, freed cash. (b) Supply failure stops production.",
          "commonErrors": [
                    "JIT confused with holding more stock.",
                    "No risk identified."
          ]
},
        },
        {
          id: "ecn11-u8-operations-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A bakery makes 800 loaves a day with 10 workers and wants to improve efficiency.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define productivity.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate current productivity.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain two ways the bakery could raise productivity.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "Explain why improving quality could also raise productivity or profit.",
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
                              "name": "Productivity and quality",
                              "statement": "Output per worker rises through efficiency; quality reduces waste."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Output per worker or per unit of input.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) 800 ÷ 10 = 80 loaves per worker per day.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Train staff / better ovens / motivate workers / streamline the process.",
                              "marks": 3,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Fewer mistakes mean less waste and rework — more saleable output from same inputs.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "d"
                    },
                    {
                              "reasoning": "(d) Better quality builds reputation and repeat sales, raising profit.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "d"
                    }
          ],
          "finalAnswer": "(a) output/input. (b) 80 loaves/worker. (c) two methods. (d) less waste + loyalty.",
          "commonErrors": [
                    "Calculation error.",
                    "No link between quality and profit."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecn11-u8-operations-notes",
      title: "Production and operations — revision notes",
      summary: "Job = bespoke, batch = groups, flow = continuous. Productivity = output per worker. JIT cuts storage but risks stoppages. Quality builds reputation and reduces waste.",
      sections: [
        { heading: "Methods", body: "Job suits custom, batch suits medium variety, flow suits high-volume standardised goods." },
        { heading: "Productivity", body: "Output ÷ workers; rises via training, technology, motivation." },
        { heading: "Quality and JIT", body: "Quality = meeting expectations; JIT = materials when needed, saving storage but risking stoppages." },
      ],
    },
  ],
};
