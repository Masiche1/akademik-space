import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "ecn11-u8-lesson-8-1",
  code: "8-1",
  title: "Marketing",
  goal: "I CAN explain market research and the elements of the marketing mix.",
  standards: ["Edexcel IGCSE Economics 4EC1 — Paper 1: Investigating small businesses"],
  
  vocabulary: [
    { term: "Marketing", definition: "The process of identifying customer needs and satisfying them profitably." },
    { term: "Market research", definition: "Gathering and analysing information about customers, markets and competitors." },
    { term: "Primary research", definition: "New data collected first-hand, e.g. surveys, interviews, observation." },
    { term: "Secondary research", definition: "Using existing data, e.g. government statistics, reports, the internet." },
    { term: "Marketing mix", definition: "The four Ps: product, price, place and promotion." },
    { term: "Promotion", definition: "Communicating the product to customers through advertising, sales promotion, PR and personal selling." },
    { term: "Niche market", definition: "A small, specialised segment of the market." },
  ],
  concepts: [
    {
      id: "ecn11-u8-research",
      title: "Market Research",
      skill: "Distinguish primary and secondary research and explain why businesses do market research.",
      lesson: {
        sections: [
          {
            heading: "Why market research",
            body: "**Market research** reduces uncertainty before launching a product or entering a market. It helps firms understand **customer needs**, estimate **demand**, identify **competitors**, test prices and reduce the risk of failure. Without research, businesses guess — and guesses are often wrong.",
          },
          {
            heading: "Primary vs secondary",
            body: "**Primary research** collects new data first-hand: **questionnaires/surveys**, **interviews**, **observation**, **focus groups**. It is up-to-date and specific but costly and time-consuming. **Secondary research** uses existing information: government statistics, market reports, competitor websites, social media. It is cheap and fast but may be outdated, biased or not specific to the firm's needs. Most firms use a **combination** — secondary first to frame questions, then primary to fill gaps.",
          },
        ],
        keyFormulas: [

        ],
        workedExample: {
          problem: "A firm wants to launch a new energy drink. It reads industry reports (secondary), then runs a survey of 500 students (primary). Explain why both were used.",
          solution: "Secondary research gave a cheap overview of market size and competitors; the primary survey tested the specific product idea with the target customers, giving up-to-date, tailored data.",
        },
      },
      questions: [
        {
          id: "ecn11-u8-research-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which of the following is an example of primary market research?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Reading government statistics"
                    },
                    {
                              "id": "b",
                              "text": "Using a competitor's website"
                    },
                    {
                              "id": "c",
                              "text": "Conducting a customer survey"
                    },
                    {
                              "id": "d",
                              "text": "Reading an old market report"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Primary research",
                              "statement": "New data collected first-hand."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A customer survey collects new first-hand data — primary research.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(c)** Customer survey",
          "commonErrors": [
                    "Confusing primary with secondary."
          ]
},
        },
        {
          id: "ecn11-u8-research-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give three reasons why a business might carry out market research.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Purpose of market research",
                              "statement": "Reduce uncertainty; understand customers, demand and competitors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Understand customer needs and preferences.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Estimate demand and test prices before launching.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Identify competitors and reduce the risk of failure.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Customer needs, demand/price testing, competitor analysis, lower risk.",
          "commonErrors": [
                    "Only one reason.",
                    "Vague answers."
          ]
},
        },
        {
          id: "ecn11-u8-research-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two disadvantages of using secondary research.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Secondary research limits",
                              "statement": "Existing data may be outdated, biased or irrelevant."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Data may be outdated — collected for another purpose or time.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "May be biased — the original collector may have had different aims.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "May not be specific to the firm's market or product.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Free/cheap data can be low quality or incomplete.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Outdated, biased, not specific, possibly low quality.",
          "commonErrors": [
                    "Only advantages listed."
          ]
},
        },
        {
          id: "ecn11-u8-research-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A café is thinking of opening a second branch but is unsure about the best location.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Suggest two primary research methods the café could use.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain one advantage of each method you suggested.",
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
                              "name": "Choosing research methods",
                              "statement": "Match method to the information needed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Any two: customer questionnaire, footfall observation, interviews with local residents.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Questionnaires reach many people cheaply and give quantitative data.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Observation shows real behaviour — e.g. actual footfall at different times.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Interviews give detailed reasons behind preferences.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) Two suitable methods. (b) Each with a matching advantage.",
          "commonErrors": [
                    "Methods not suited to location question.",
                    "Advantages unrelated to method."
          ]
},
        },
        {
          id: "ecn11-u8-research-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A smartphone firm has a limited research budget before launching a new model.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why the firm should use secondary research first.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Suggest one primary research method to use afterwards and explain why.",
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
                              "name": "Research sequence",
                              "statement": "Cheap secondary data frames targeted primary research."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Secondary data is cheap and fast — industry reports, sales data.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) It identifies the market size, competitors and gaps to investigate.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Saves budget for targeted primary research on real questions.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) e.g. focus groups with target customers to test design/pricing.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Gives specific feedback on the actual product idea.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) Cheap overview first. (b) Targeted primary method for specific feedback.",
          "commonErrors": [
                    "Skipping secondary despite budget limit.",
                    "Primary method too vague."
          ]
},
        },
        {
          id: "ecn11-u8-research-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A new gym wants to check whether there is enough demand for its services in a town of 50,000 people.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define the term market research.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Distinguish between primary and secondary research.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Suggest two secondary sources the gym could use and what each might show.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Evaluate whether the gym needs primary research at all, given its budget is tight.",
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
                              "name": "Market research",
                              "statement": "Gather data to reduce uncertainty; primary is specific but costly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Gathering and analysing information about customers, markets and competitors.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Primary = new first-hand data; secondary = existing data.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Primary is specific/up-to-date but costly; secondary is cheap but may be outdated/biased.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) e.g. council demographics (age/income) and competitor gym membership data.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Some primary research is valuable — e.g. a cheap questionnaire tests real willingness to pay; but it can be limited due to budget.",
                              "marks": 3,
                              "markCode": "AO3",
                              "part": "d"
                    }
          ],
          "finalAnswer": "(a) definition; (b) primary vs secondary; (c) two sources; (d) balanced judgement.",
          "commonErrors": [
                    "One-sided evaluation in (d).",
                    "Secondary sources unrelated to demand."
          ]
},
        },
      ],
    },
    {
      id: "ecn11-u8-mix",
      title: "The Marketing Mix",
      skill: "Explain the four Ps of the marketing mix and how they are combined.",
      lesson: {
        sections: [
          {
            heading: "The four Ps",
            body: "The **marketing mix** combines four decisions: **Product** — what is sold: design, quality, features, branding, after-sales service. **Price** — how much is charged: must cover costs and reflect demand, competition and image. **Place** — how the product reaches customers: distribution channels, location, online vs physical. **Promotion** — how customers learn about it: advertising, sales promotion, public relations, personal selling.",
          },
          {
            heading: "Combining the mix",
            body: "The Ps must work together — a luxury product needs a high price, selective place and prestige promotion; a budget product needs low price, wide availability and value promotion. Changing one P affects the others: a price cut may need more promotion to be noticed, and may change the product's image.",
          },
        ],
        keyFormulas: [
          { name: "Revenue", statement: "price × quantity sold" },
        ],
        workedExample: {
          problem: "A firm launches an eco-friendly cleaning spray. Suggest a marketing mix for it.",
          solution: "Product: concentrated, recyclable packaging. Price: premium to reflect quality. Place: sold online and in green stores. Promotion: emphasise environmental benefits via social media and eco-certification.",
        },
      },
      questions: [
        {
          id: "ecn11-u8-mix-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which of the following is NOT one of the four Ps of the marketing mix?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Product"
                    },
                    {
                              "id": "b",
                              "text": "Price"
                    },
                    {
                              "id": "c",
                              "text": "Profit"
                    },
                    {
                              "id": "d",
                              "text": "Promotion"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Marketing mix",
                              "statement": "Product, price, place, promotion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The four Ps are product, price, place and promotion — profit is not one.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(c)** Profit",
          "commonErrors": [
                    "Confusing profit with promotion."
          ]
},
        },
        {
          id: "ecn11-u8-mix-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Name the four Ps of the marketing mix and state what each one covers.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Marketing mix",
                              "statement": "Product, price, place, promotion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Product — design, quality, features, branding.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Price — how much is charged.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Place — distribution channels and location; Promotion — advertising and communication.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Product, price, place, promotion with correct coverage.",
          "commonErrors": [
                    "Missing one P.",
                    "No description of each."
          ]
},
        },
        {
          id: "ecn11-u8-mix-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why the four Ps of the marketing mix must be consistent with each other.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Marketing mix consistency",
                              "statement": "The Ps must reinforce a single positioning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A premium product needs premium price and promotion — mixed signals confuse customers.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Place must match image — luxury goods in exclusive outlets.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Changing one P affects others — a price cut may need extra promotion.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Consistency builds a clear brand image and avoids wasting money.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Inconsistent Ps confuse customers and weaken the brand.",
          "commonErrors": [
                    "No example given."
          ]
},
        },
        {
          id: "ecn11-u8-mix-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A bakery wants to sell a new range of vegan cakes.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Suggest one decision under each of the four Ps for this product.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain how these decisions work together.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Applying the marketing mix",
                              "statement": "Each P should support the same product positioning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Product: attractive design, clear vegan labelling. Price: premium for quality ingredients. Place: sold in health-food shops and online. Promotion: social media, vegan food events.",
                              "marks": 4,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) All four support the same image — quality vegan product at a premium price, promoted to health-conscious buyers.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) One decision per P. (b) Consistent premium vegan positioning.",
          "commonErrors": [
                    "Missing a P.",
                    "Decisions inconsistent."
          ]
},
        },
        {
          id: "ecn11-u8-mix-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A coffee shop currently sells coffee at £3 a cup and is considering cutting the price to £2 to increase sales.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the revenue change if sales rise from 200 to 280 cups per day.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain one other marketing-mix change the shop could make to boost sales instead of a price cut.",
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
                              "name": "Revenue",
                              "statement": "price × quantity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Old revenue = 3 × 200 = £600 per day.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) New revenue = 2 × 280 = £560 per day.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Revenue falls by £40 — the price cut loses money despite higher sales.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) e.g. improve promotion (social media, loyalty card) or product (new flavours, better coffee).",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Keeps price and margin while boosting demand.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) Revenue falls £600→£560. (b) Promotion or product improvement.",
          "commonErrors": [
                    "Wrong multiplication.",
                    "Suggesting another price change."
          ]
},
        },
        {
          id: "ecn11-u8-mix-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A small online retailer of handmade jewellery is reviewing its marketing mix.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define the marketing mix.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Name the four elements of the marketing mix.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain two ways the retailer could use promotion to reach more customers.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "Evaluate whether a low-price strategy would suit this business.",
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
                              "name": "Marketing mix",
                              "statement": "Product, price, place, promotion must fit the product's positioning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) The combination of product, price, place and promotion used to market a product.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Product, price, place, promotion.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Social media advertising targeted at jewellery buyers; influencer reviews or craft-fair presence.",
                              "marks": 3,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Handmade goods have high costs — low price may not cover costs and could damage the quality image; premium pricing may suit better.",
                              "marks": 3,
                              "markCode": "AO3",
                              "part": "d"
                    }
          ],
          "finalAnswer": "(a) four-P combination; (b) named; (c) two promotion methods; (d) low price probably unsuitable — costs/image.",
          "commonErrors": [
                    "One-sided evaluation in (d).",
                    "Promotion methods too generic."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecn11-u8-marketing-notes",
      title: "Marketing — revision notes",
      summary: "Market research uses primary (surveys, interviews) and secondary (existing data) methods. The marketing mix = product, price, place, promotion — the Ps must be consistent.",
      sections: [
        { heading: "Market research", body: "Primary = first-hand, specific, costly. Secondary = existing data, cheap, may be outdated." },
        { heading: "Marketing mix", body: "Product (design/quality), price (charge), place (distribution), promotion (communication)." },
        { heading: "Evaluation", body: "Mix must match positioning — premium product needs premium price and promotion." },
      ],
    },
  ],
};
