import type { Lesson } from "../../../types.ts";

export const lesson112: Lesson = {
  id: "ebz11-u11-lesson-11-2",
  code: "11-2",
  title: "Product Development and the Product Life Cycle",
  goal: "I CAN describe new product development and the stages of the product life cycle, and link strategies to each stage.",
  standards: ["Edexcel IGCSE Business 4BS0 — Marketing", "4BS0: product in the marketing mix"],
  
  vocabulary: [
    { term: "New product development", definition: "The process of creating and launching a new product." },
    { term: "Product life cycle", definition: "Stages a product passes through: introduction, growth, maturity, decline." },
    { term: "Introduction stage", definition: "Launch phase — low sales, high costs and promotional spending." },
    { term: "Maturity stage", definition: "Peak sales — market saturated, competition intense." },
    { term: "Decline stage", definition: "Falling sales as demand shifts or better products appear." },
    { term: "Product differentiation", definition: "Making a product distinct from rivals through features, branding or quality." },
  ],
  concepts: [
    {
      id: "ebz11-u11-npd",
      title: "New Product Development",
      skill: "Explain the stages of developing a new product and the risks involved.",
      lesson: {
        sections: [
          {
            heading: "Stages of development",
            body: "1. **Idea generation** — suggestions from staff, customers, rivals and research. 2. **Research and development (R&D)** — feasibility studies, design and prototypes. 3. **Testing** — market tests and trials to check demand and flaws. 4. **Launch** — production, distribution, promotion and pricing.\n\nDevelopment keeps businesses competitive — markets change and products eventually decline. Many firms invest heavily in R&D to stay ahead.",
          },
          {
            heading: "Risks and costs",
            body: "Most new products fail — estimates suggest the majority never become profitable. Costs include R&D spending, testing, launch marketing and production setup, all before revenue is certain. **Risk reduction**: market research, test marketing, phased launches. **Rewards**: first-mover advantage, higher margins on new products, extension of the product range.",
          },
        ],
        keyFormulas: [

        ],
        workedExample: {
          problem: "A snack company wants a new flavour. Outline the development steps in order.",
          solution: "Idea (customer feedback) → R&D recipe and cost checks → taste-test with a sample → launch with promotion and distribution.",
        },
      },
      questions: [
        {
          id: "ebz11-u11-npd-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is the correct order of new product development?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Launch → testing → R&D → idea"
                    },
                    {
                              "id": "b",
                              "text": "Idea → R&D → testing → launch"
                    },
                    {
                              "id": "c",
                              "text": "R&D → launch → idea → testing"
                    },
                    {
                              "id": "d",
                              "text": "Testing → idea → launch → R&D"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "NPD sequence",
                              "statement": "Idea → R&D → testing → launch."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Development runs idea → R&D → testing → launch.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Idea → R&D → testing → launch",
          "commonErrors": [
                    "Putting launch before testing."
          ]
},
        },
        {
          id: "ebz11-u11-npd-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give two reasons why businesses develop new products.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "NPD motives",
                              "statement": "Stay competitive, grow sales, extend product range."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Keep pace with changing customer tastes and rival products.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Grow sales/profit and reduce dependence on declining products.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Stay competitive + grow sales.",
          "commonErrors": [
                    "Repeating the definition rather than reasons."
          ]
},
        },
        {
          id: "ebz11-u11-npd-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two risks a business faces when developing a new product.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "NPD risks",
                              "statement": "High failure rate and heavy upfront costs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Most new products fail — demand may be lower than expected.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "R&D, testing and launch costs are incurred before any revenue is certain.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Failure risk + heavy upfront costs.",
          "commonErrors": [
                    "Listing benefits as risks."
          ]
},
        },
        {
          id: "ebz11-u11-npd-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A dairy firm is developing a plant-based milk product.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe two stages of development it should complete before launch.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain one way it can reduce the risk of failure.",
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
                              "name": "NPD stages and risk reduction",
                              "statement": "R&D and testing before launch; market research reduces failure risk."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) R&D: recipe formulation, cost and shelf-life checks.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Testing: taste trials and test marketing to check demand.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Market research / test marketing with real customers before full launch.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "R&D + testing; reduce risk via market research/test marketing.",
          "commonErrors": [
                    "Skipping testing stage."
          ]
},
        },
        {
          id: "ebz11-u11-npd-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate whether a small bakery should invest in developing a new product range.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "NPD decision",
                              "statement": "Innovation drives growth but is costly and risky for small firms."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pros: new products can grow sales, meet changing tastes, and reduce reliance on declining lines.",
                              "marks": 3,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Cons: limited funds make failures damaging; a small test range is lower risk than full-scale development.",
                              "marks": 3,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Worth it if demand exists — start small to limit risk.",
          "commonErrors": [
                    "One-sided answer."
          ]
},
        },
        {
          id: "ebz11-u11-npd-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A phone maker spends £2m on R&D for a folding phone, then test-markets it in three cities before a national launch.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the development stages shown and their purpose.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain why test marketing reduces risk.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Evaluate whether the £2m R&D spend was justified if the launch succeeds.",
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
                              "name": "NPD investment judgement",
                              "statement": "R&D + test marketing reduce risk; payoff depends on launch success."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) R&D = design/development; test marketing = trial with real customers before full launch.",
                              "marks": 4,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Reveals demand, flaws and pricing issues cheaply before full-scale investment.",
                              "marks": 4,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Justified if profits from sales exceed £2m+launch costs — depends on market size; judgement needed.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "R&D + testing cut risk; R&D justified if launch profits cover costs.",
          "commonErrors": [
                    "No cost-benefit judgement in (c)."
          ]
},
        },
      ],
    },
    {
      id: "ebz11-u11-plc",
      title: "The Product Life Cycle",
      skill: "Identify the stages of the product life cycle and recommend strategies for each stage.",
      lesson: {
        sections: [
          {
            heading: "The four stages",
            body: "**Introduction**: product launched — sales low, costs high (development, promotion), little competition; profits negative or small. **Growth**: sales rise rapidly as awareness spreads; profits begin; competitors start entering. **Maturity**: sales peak and level off; market saturated; competition intense; profits may still be high but growth slows. **Decline**: sales fall as tastes change or better products appear; firms harvest profits or withdraw.",
          },
          {
            heading: "Strategies per stage",
            body: "**Introduction**: high price (skimming) or low price (penetration); heavy promotion to build awareness. **Growth**: widen distribution, improve product, defend share against entrants. **Maturity**: differentiate (brand, features, service), cut costs, find new markets — longest and most competitive stage. **Decline**: reduce spending, harvest remaining profits, or discontinue. Not all products follow the curve exactly — some decline slowly, some revive.",
          },
        ],
        keyFormulas: [

        ],
        workedExample: {
          problem: "A console game's sales have peaked and rival games are taking share. Which life-cycle stage is it in and what should the maker do?",
          solution: "Maturity — differentiate with updates/add-ons and cut costs to defend share; plan a successor product before decline.",
        },
      },
      questions: [
        {
          id: "ebz11-u11-plc-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are the four stages of the product life cycle in order?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Maturity → growth → introduction → decline"
                    },
                    {
                              "id": "b",
                              "text": "Introduction → growth → maturity → decline"
                    },
                    {
                              "id": "c",
                              "text": "Growth → introduction → decline → maturity"
                    },
                    {
                              "id": "d",
                              "text": "Introduction → maturity → growth → decline"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "PLC stages",
                              "statement": "Introduction → growth → maturity → decline."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Correct sequence is intro, growth, maturity, decline.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Introduction → growth → maturity → decline",
          "commonErrors": [
                    "Wrong order of maturity and growth."
          ]
},
        },
        {
          id: "ebz11-u11-plc-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Describe what happens to sales and profits during the introduction stage.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Introduction stage",
                              "statement": "Low sales, high costs, heavy promotion; profits low or negative."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sales are low as customers are still learning about the product.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Costs high (R&D, promotion); profits low or negative.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Low sales, high costs, weak profits.",
          "commonErrors": [
                    "Describing maturity instead."
          ]
},
        },
        {
          id: "ebz11-u11-plc-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two strategies a firm might use during the maturity stage.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Maturity strategies",
                              "statement": "Differentiate, cut costs, find new markets."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Differentiate via branding, features, quality or service to defend share.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Reduce costs for efficiency and/or enter new markets or segments.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Differentiate and cut costs / find new markets.",
          "commonErrors": [
                    "Strategies belonging to other stages."
          ]
},
        },
        {
          id: "ebz11-u11-plc-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Sales of a firm's product are rising fast and profits are growing, but two competitors have just launched similar products.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the likely life-cycle stage.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Suggest two strategies to respond to the new competitors.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Growth-stage response",
                              "statement": "Rising sales + new entrants = growth stage; defend share."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Growth stage — sales rising fast, profits growing.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Improve/differentiate the product to stay ahead of rivals.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Increase promotion or widen distribution to lock in market share.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "Growth stage; differentiate and promote to defend share.",
          "commonErrors": [
                    "Identifying wrong stage."
          ]
},
        },
        {
          id: "ebz11-u11-plc-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain why businesses need to plan for the decline stage before it arrives.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Decline planning",
                              "statement": "Early planning allows harvest, replacement or exit before losses."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Decline is inevitable for most products — waiting means sudden losses.",
                              "marks": 3,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Early planning allows harvesting profits, developing successors, or orderly withdrawal.",
                              "marks": 3,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Plan early to harvest profits, launch successors or exit cleanly.",
          "commonErrors": [
                    "No mention of planning ahead."
          ]
},
        },
        {
          id: "ebz11-u11-plc-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A firm's smartphone has passed maturity and sales are now falling as newer models arrive.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define the product life cycle and name the current stage.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Suggest two strategies for the declining product.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Evaluate whether the firm should discontinue it immediately.",
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
                              "name": "Decline-stage decision",
                              "statement": "Harvest or withdraw — but immediate discontinuation may waste remaining profit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) PLC = stages a product passes through; current stage = decline.",
                              "marks": 4,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Harvest: cut costs, reduce promotion, sell at lower price to loyal customers.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Redirect resources to the successor model or niche markets.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Not necessarily — remaining sales may still profit; judge by margin, not just falling sales.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Decline stage; harvest or pivot; immediate discontinuation not always best.",
          "commonErrors": [
                    "Automatic discontinuation answer without judgement."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebz11-u11-plc-notes",
      title: "Product development and life cycle — notes",
      summary: "NPD runs idea → R&D → testing → launch and most products fail. The life cycle runs introduction → growth → maturity → decline, each needing different strategies.",
      sections: [
        { heading: "Key idea", body: "Develop products to stay competitive, but expect most launches to fail — test first." },
        { heading: "Life cycle", body: "Introduction (low sales, high cost) → growth (rising sales) → maturity (peak, intense competition) → decline (falling sales)." },
        { heading: "Strategy link", body: "Skim/promote at launch; defend share in growth; differentiate in maturity; harvest or exit in decline." },
      ],
    },
  ],
};
