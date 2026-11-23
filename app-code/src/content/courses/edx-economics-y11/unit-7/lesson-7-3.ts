import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "ecn11-u7-lesson-7-3",
  code: "7-3",
  title: "Business Size, Growth and Economies of Scale",
  goal: "I CAN measure business size and explain economies and diseconomies of scale.",
  standards: ["Edexcel IGCSE Economics 4EC1 — Paper 1: Investigating small businesses"],
  
  vocabulary: [
    { term: "Business size", definition: "The scale of a business, measured by output, employment, capital, market share or revenue." },
    { term: "Organic growth", definition: "Growth achieved by expanding a firm's own operations, e.g. new products or markets." },
    { term: "Inorganic growth", definition: "Growth achieved by merging with or acquiring other businesses." },
    { term: "Merger", definition: "Two businesses joining to form one larger business." },
    { term: "Takeover", definition: "One business gaining control of another, often against its wishes." },
    { term: "Economies of scale", definition: "Cost advantages a large firm gains as output increases." },
    { term: "Diseconomies of scale", definition: "Cost disadvantages that arise when a firm becomes too large." },
  ],
  concepts: [
    {
      id: "ecn11-u7-growth",
      title: "Measuring Business Size and Growth",
      skill: "Explain ways to measure business size and methods of business growth.",
      lesson: {
        sections: [
          {
            heading: "Measuring size",
            body: "Business size can be measured by **output** (units produced or value of sales), **employment** (number of workers), **capital employed** (value of assets), **market share** (percentage of the market served) or **profit/revenue**. Different measures can give different answers — a capital-intensive firm may employ few people but be very large by output.",
          },
          {
            heading: "Methods of growth",
            body: "**Organic growth** comes from inside the firm: increasing output, entering new markets, new products or more branches. **Inorganic growth** comes from outside: **mergers** (two firms combine) and **takeovers** (one firm acquires another). Firms may also **franchise** to expand quickly. Growth can bring economies of scale but also risk — large firms can suffer diseconomies and face tougher competition regulation.",
          },
        ],
        keyFormulas: [
          { name: "Market share", statement: "firm's sales ÷ total market sales × 100" },
        ],
        workedExample: {
          problem: "A market sells 2 million phones a year. A firm sells 300,000. What is its market share?",
          solution: "Market share = (300,000 ÷ 2,000,000) × 100 = 15%.",
        },
      },
      questions: [
        {
          id: "ecn11-u7-growth-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which of the following is a measure of business size?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Number of shareholders only"
                    },
                    {
                              "id": "b",
                              "text": "Number of employees"
                    },
                    {
                              "id": "c",
                              "text": "Colour of the logo"
                    },
                    {
                              "id": "d",
                              "text": "Day of the week"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Business size",
                              "statement": "Measured by output, employment, capital, market share or revenue."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Employment is one accepted measure of business size.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Number of employees",
          "commonErrors": [
                    "Choosing irrelevant options."
          ]
},
        },
        {
          id: "ecn11-u7-growth-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Distinguish between organic growth and inorganic growth.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Organic vs inorganic growth",
                              "statement": "Internal expansion vs mergers and takeovers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Organic growth = expanding from within — more output, new products, new markets.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Inorganic growth = growth through mergers or takeovers of other firms.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Organic is slower but keeps control; inorganic is faster but risks culture clashes.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Organic = internal expansion; inorganic = mergers/takeovers.",
          "commonErrors": [
                    "Definitions swapped."
          ]
},
        },
        {
          id: "ecn11-u7-growth-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two reasons why a small business might want to grow.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Reasons for growth",
                              "statement": "Survival, economies of scale, market position."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Economies of scale — larger output can lower average costs.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Survival — bigger firms can compete better and survive downturns.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Market share — growth can secure a leading position against rivals.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "More profit potential and ability to reward owners/staff.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Economies of scale, survival, market share, higher profits.",
          "commonErrors": [
                    "Only one reason.",
                    "Vague answers."
          ]
},
        },
        {
          id: "ecn11-u7-growth-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A firm selling 200,000 units in a total market of 1,000,000 units plans to double its sales next year while the market grows to 1,200,000 units.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the firm's current market share.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate its market share next year and state whether it rose or fell.",
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
                              "name": "Market share",
                              "statement": "firm sales ÷ total market sales × 100."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Current share = (200,000 ÷ 1,000,000) × 100 = 20%.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Next year sales = 400,000; share = (400,000 ÷ 1,200,000) × 100 = 33.3%.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Share rose from 20% to 33.3%.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) 20%. (b) 33.3% — rose.",
          "commonErrors": [
                    "Using old market size for (b).",
                    "Arithmetic slips."
          ]
},
        },
        {
          id: "ecn11-u7-growth-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A local bakery wants to expand into three neighbouring towns.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two methods of organic growth the bakery could use.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain one advantage and one disadvantage of growth through a takeover compared with organic growth.",
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
                              "name": "Growth methods",
                              "statement": "Organic keeps control; takeover is fast but risky."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Open new branches in the towns; or expand product range/delivery service.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Could also enter new markets or increase output gradually.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Takeover advantage: instant market presence and existing customers; disadvantage: high cost, culture clashes, debt.",
                              "marks": 3,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) New branches/products/markets. (b) Takeover = fast but costly and risky.",
          "commonErrors": [
                    "Takeover described as organic.",
                    "Only one side of comparison."
          ]
},
        },
        {
          id: "ecn11-u7-growth-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A small coffee-shop chain is deciding how to grow from 5 to 50 shops.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define the term business growth.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Name two measures that could be used to show the chain has grown.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain two ways the chain could achieve organic growth.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "Evaluate whether a takeover would be a better growth strategy than organic growth for this chain.",
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
                              "name": "Business growth",
                              "statement": "Expansion by internal means or acquisition; each has trade-offs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Increase in the size or scale of the business's operations.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Any two: number of shops, revenue, market share, employees.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Open new shops in new areas; expand product range (e.g. food, loyalty scheme).",
                              "marks": 3,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Takeover gives instant scale but costs more and risks culture clashes; organic keeps control but is slower — judgement depends on funds and speed needed.",
                              "marks": 3,
                              "markCode": "AO3",
                              "part": "d"
                    }
          ],
          "finalAnswer": "(a) expansion of scale; (b) two measures; (c) two organic methods; (d) balanced evaluation.",
          "commonErrors": [
                    "One-sided evaluation in (d).",
                    "Missing a part."
          ]
},
        },
      ],
    },
    {
      id: "ecn11-u7-eos",
      title: "Economies and Diseconomies of Scale",
      skill: "Explain internal and external economies and diseconomies of scale.",
      lesson: {
        sections: [
          {
            heading: "Economies of scale",
            body: "As output rises, **average cost per unit falls** — this is economies of scale. **Internal economies** come from within the firm: **purchasing** (bulk-buying discounts), **marketing** (spreading advertising over more units), **technical** (specialist machinery), **managerial** (division of labour and expert managers) and **financial** (borrowing at lower interest). **External economies** come from the industry or location growing — e.g. a skilled labour pool, specialist suppliers and better transport links.",
          },
          {
            heading: "Diseconomies of scale",
            body: "Very large firms can face **diseconomies of scale** — average costs rise again. Causes: communication breakdowns in tall hierarchies, worker alienation and demotivation, coordination problems, and industrial relations disputes. **External diseconomies** affect the whole industry — e.g. congestion, rising land and labour costs as firms cluster together.",
          },
        ],
        keyFormulas: [
          { name: "Average cost", statement: "total cost ÷ output" },
        ],
        workedExample: {
          problem: "A firm produces 1,000 units at total cost £10,000, then 2,000 units at total cost £16,000. Calculate average cost at each output.",
          solution: "AC at 1,000 = 10,000 ÷ 1,000 = £10. AC at 2,000 = 16,000 ÷ 2,000 = £8. Average cost fell — economies of scale.",
        },
      },
      questions: [
        {
          id: "ecn11-u7-eos-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What happens to average cost when a firm enjoys economies of scale?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "It rises"
                    },
                    {
                              "id": "b",
                              "text": "It stays the same"
                    },
                    {
                              "id": "c",
                              "text": "It falls"
                    },
                    {
                              "id": "d",
                              "text": "It becomes zero"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Economies of scale",
                              "statement": "Average cost falls as output rises."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Economies of scale mean cost per unit decreases with higher output.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(c)** It falls",
          "commonErrors": [
                    "Confusing economies with diseconomies."
          ]
},
        },
        {
          id: "ecn11-u7-eos-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give three examples of internal economies of scale.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Internal economies",
                              "statement": "Cost advantages from within the firm."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Purchasing — bulk-buying discounts from suppliers.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Technical — specialist machinery producing at lower cost.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Managerial/marketing/financial — e.g. division of labour, spread advertising, cheaper borrowing.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Any three of: purchasing, technical, managerial, marketing, financial.",
          "commonErrors": [
                    "Giving external economies.",
                    "Repeating one type."
          ]
},
        },
        {
          id: "ecn11-u7-eos-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the difference between internal and external economies of scale.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Internal vs external economies",
                              "statement": "Firm-level vs industry/location-level advantages."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Internal economies arise within the firm — e.g. bulk buying, specialist machinery.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "External economies arise outside the firm but benefit it — e.g. skilled labour pool, suppliers nearby.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Internal economies depend on the firm's own decisions.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "External economies depend on the growth of the whole industry or location.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Internal = firm's own efficiencies; external = industry/location benefits.",
          "commonErrors": [
                    "Definitions swapped."
          ]
},
        },
        {
          id: "ecn11-u7-eos-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A car manufacturer produces 50,000 cars at total cost £250m, then 100,000 cars at total cost £420m.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the average cost per car at each level of output.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State whether economies or diseconomies of scale are present and justify your answer.",
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
                              "statement": "total cost ÷ output."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) AC at 50,000 = 250,000,000 ÷ 50,000 = £5,000 per car.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) AC at 100,000 = 420,000,000 ÷ 100,000 = £4,200 per car.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Economies of scale — average cost fell from £5,000 to £4,200 as output doubled.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) £5,000 and £4,200. (b) Economies — AC fell.",
          "commonErrors": [
                    "Dividing cost by wrong output figure.",
                    "Wrong conclusion."
          ]
},
        },
        {
          id: "ecn11-u7-eos-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A national supermarket chain has grown so large that communication between head office and stores has become difficult.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two causes of diseconomies of scale the chain may face.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Suggest two ways management could reduce these diseconomies.",
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
                              "name": "Diseconomies of scale",
                              "statement": "Size can raise average costs through coordination and motivation problems."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Communication breakdowns — messages take longer through many layers.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Worker alienation — staff feel like cogs, losing motivation.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Coordination problems — departments fail to work together.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Flatten the hierarchy / improve communication systems.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Empower workers, improve motivation, delegate decisions.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) Communication, alienation, coordination. (b) Flatten structure, motivate/delegate.",
          "commonErrors": [
                    "Diseconomies confused with economies.",
                    "Suggestions unrelated to causes."
          ]
},
        },
        {
          id: "ecn11-u7-eos-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A bakery doubles output from 10,000 to 20,000 loaves. Total cost rises from £30,000 to £50,000.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate average cost per loaf at each output level.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Name three types of internal economy the bakery might be experiencing.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain one external economy the bakery might enjoy if many bakeries cluster in the area.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Evaluate whether continued growth would always reduce average cost.",
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
                              "name": "Average cost and scale",
                              "statement": "AC = total cost ÷ output; economies fall, diseconomies rise."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) AC at 10,000 = 30,000 ÷ 10,000 = £3 per loaf.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) AC at 20,000 = 50,000 ÷ 20,000 = £2.50 per loaf.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Any three: purchasing (bulk flour), technical (bigger ovens), managerial (specialist staff), marketing, financial.",
                              "marks": 3,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) E.g. skilled bakers available locally or specialist suppliers nearby.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) No — beyond a point diseconomies (communication, motivation) can raise AC.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "d"
                    }
          ],
          "finalAnswer": "(a) £3 and £2.50. (b) three economies. (c) labour pool/suppliers. (d) not always — diseconomies possible.",
          "commonErrors": [
                    "Calculation errors.",
                    "One-sided answer in (d)."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecn11-u7-scale-notes",
      title: "Growth and economies of scale — revision notes",
      summary: "Measure size by output, employment, capital, market share. Grow organically or by merger/takeover. Economies of scale lower average cost; diseconomies raise it.",
      sections: [
        { heading: "Measuring size", body: "Output, employment, capital employed, market share and revenue are all valid measures." },
        { heading: "Growth", body: "Organic = internal expansion; inorganic = mergers and takeovers." },
        { heading: "Scale", body: "Internal economies: purchasing, technical, managerial, marketing, financial. Diseconomies: communication breakdown, alienation." },
      ],
    },
  ],
};
