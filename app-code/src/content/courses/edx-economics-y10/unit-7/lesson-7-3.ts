import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "ecn10-u7-lesson-7-3",
  code: "7-3",
  title: "Business Growth and Enterprise",
  goal: "I CAN explain internal and external growth, economies of scale and support for enterprise.",
  standards: ["Edexcel IGCSE Economics 4EC1/01 — Business Economics: growth and enterprise"],
  
  vocabulary: [
    { term: "Internal growth", definition: "Growth achieved by expanding within the existing firm." },
    { term: "External growth", definition: "Growth through merger or takeover." },
    { term: "Merger", definition: "Two firms combining to form one larger firm." },
    { term: "Takeover", definition: "One firm gaining control of another." },
    { term: "Economies of scale", definition: "Cost advantages from producing on a larger scale." },
    { term: "Diseconomies of scale", definition: "Cost disadvantages when a firm becomes too large." },
    { term: "Entrepreneur", definition: "A person who organises factors of production and takes risk." },
  ],
  concepts: [
    {
      id: "ecn10-u7-growth",
      title: "Business Growth and Economies of Scale",
      skill: "Distinguish internal and external growth and analyse economies and diseconomies of scale.",
      lesson: {
        sections: [
          {
            heading: "Internal and external growth",
            body: "**Internal growth** expands output, workers, machinery or new products within the firm. **External growth** combines firms through a **merger** (agreement to form one firm) or **takeover** (one firm gains control of another).\n\nGrowth can bring economies of scale but may reduce competition or create diseconomies if the firm becomes too large.",
          },
          {
            heading: "Economies and diseconomies",
            body: "Economies include **purchasing** (bulk-buying discounts), **technical** (specialised machinery), **marketing** (advertising across brands), **financial** (cheaper borrowing) and **managerial** (division of labour). Diseconomies include communication problems, coordination costs and slow decisions.",
          },
        ],
        keyFormulas: [
          { name: "Internal growth", statement: "Expansion within the existing firm." },
          { name: "External growth", statement: "Merger or takeover with another firm." },
          { name: "Economies of scale", statement: "Lower average cost as output rises." },
        ],
        workedExample: {
          problem: "A bakery buys flour in larger quantities after opening a second branch. Which economy of scale applies?",
          solution: "Purchasing economy — bulk buying lowers input costs.",
        },
      },
      questions: [
        {
          id: "ecn10-u7-growth-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between a merger and a takeover?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A merger is agreed combination; a takeover is gaining control"
                    },
                    {
                              "id": "b",
                              "text": "They are identical"
                    },
                    {
                              "id": "c",
                              "text": "A merger always fails"
                    },
                    {
                              "id": "d",
                              "text": "A takeover is internal growth only"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Merger and takeover",
                              "statement": "Agreement to combine versus gaining control."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Merger = agreed combination; takeover = control gained.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Merger agreed, takeover control"
},
        },
        {
          id: "ecn10-u7-growth-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A firm opens three new shops using its own profits. Is this internal or external growth?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "External growth"
                    },
                    {
                              "id": "b",
                              "text": "Internal growth"
                    },
                    {
                              "id": "c",
                              "text": "No growth"
                    },
                    {
                              "id": "d",
                              "text": "Merger"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Internal growth",
                              "statement": "Expansion within the existing firm."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Expanding own shops is internal growth.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Internal growth"
},
        },
        {
          id: "ecn10-u7-growth-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two examples of economies of scale.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Economies of scale",
                              "statement": "Cost advantages from larger scale."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Purchasing economies — bulk-buy discounts.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Technical economies — specialised machinery.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Marketing or financial economies also acceptable.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Purchasing, technical, marketing, financial or managerial economies."
},
        },
        {
          id: "ecn10-u7-growth-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Two supermarkets merge to form one national chain.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define external growth.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain two possible economies of scale from the merger.",
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
                              "name": "External growth",
                              "statement": "Growth through merger or takeover."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) External growth is combining with another firm through merger or takeover.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Larger buying power can reduce input costs.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Shared distribution and advertising can lower costs per unit.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) merger/takeover growth (b) purchasing and marketing economies"
},
        },
        {
          id: "ecn10-u7-growth-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A rapidly expanding multinational finds average cost rising despite higher output.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define diseconomies of scale.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain two causes of diseconomies.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Suggest one way the firm could reduce diseconomies.",
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
                              "name": "Diseconomies of scale",
                              "statement": "Rising average cost as firm becomes too large."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Diseconomies occur when size causes average cost to rise.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Causes: poor communication or coordination across many departments.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Causes: slower decisions or worker motivation falling in a large bureaucracy.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Solution: decentralise decisions or improve communication and management.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) rising AC from size (b) communication/coordination (c) decentralise or improve management"
},
        },
        {
          id: "ecn10-u7-growth-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A successful small software firm must decide between internal growth and a takeover.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Distinguish internal and external growth.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain two benefits of internal growth.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain two risks of a takeover.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Evaluate which growth route is likely better for this firm.",
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
                              "name": "Internal vs external growth",
                              "statement": "Control and organic expansion versus combination risks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Internal growth expands within the firm; external growth is merger or takeover.",
                              "marks": 3,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Internal growth preserves control and allows gradual skills/culture development.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) It may avoid integration problems and excessive debt.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Takeover risks: culture clash, debt and loss of control.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Internal growth is safer but slower; takeover gives instant scale if risks are managed.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "d"
                    }
          ],
          "finalAnswer": "(a) definitions (b) control/gradual growth (c) debt/clash/loss control (d) balanced evaluation",
          "commonErrors": [
                    "No distinction.",
                    "No evaluation."
          ]
},
        },
      ],
    },
    {
      id: "ecn10-u7-enterprise",
      title: "Entrepreneurship and Business Support",
      skill: "Explain the role of entrepreneurs and evaluate government support for enterprise.",
      lesson: {
        sections: [
          {
            heading: "Entrepreneurship",
            body: "An **entrepreneur** combines land, labour and capital, takes risk and seeks profit through innovation or new markets. Entrepreneurship can create jobs, new products and competition. Risks include failure, uncertainty and financial loss.",
          },
          {
            heading: "Government support",
            body: "Governments may support enterprise through **grants**, subsidised loans, tax relief, business-rate reductions, training and export advice. Support can encourage start-ups and investment, but may cost taxpayers and sometimes support firms that would have succeeded anyway.",
          },
        ],
        keyFormulas: [
          { name: "Entrepreneur", statement: "Organises factors and takes risk for profit." },
          { name: "Grant", statement: "Government payment that does not have to be repaid." },
          { name: "Subsidy", statement: "Government payment lowering costs for a firm or consumer." },
        ],
        workedExample: {
          problem: "A government gives a start-up £5,000 that does not need repayment and reduces its business rates. Identify the two support measures.",
          solution: "The £5,000 is a grant; the lower rates are a subsidy/tax relief measure.",
        },
      },
      questions: [
        {
          id: "ecn10-u7-enterprise-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Who is the factor of production that takes risk and organises the others?",
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
                              "statement": "Entrepreneurial factor taking risk."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Enterprise is the entrepreneurial factor.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Enterprise"
},
        },
        {
          id: "ecn10-u7-enterprise-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Define entrepreneur and state one benefit of entrepreneurship to the economy.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Entrepreneur",
                              "statement": "Person who organises factors and takes risk."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Definition correct.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Benefit: creates jobs, innovation or competition.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Benefit linked to economic activity.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Risk-taking organiser; benefits include jobs, innovation or competition."
},
        },
        {
          id: "ecn10-u7-enterprise-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two ways government can support small businesses.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Business support",
                              "statement": "Grants, loans, tax relief and advice lower barriers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Grants or subsidised loans reduce start-up costs.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Tax relief or business-rate reductions lower ongoing costs.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Training or export advice improves skills and market access.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Both methods explained as support for enterprise.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Grants/loans, tax relief, advice and training support small firms."
},
        },
        {
          id: "ecn10-u7-enterprise-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A government offers tax relief to new businesses in a deprived area.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain one benefit of the policy.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain one cost or drawback.",
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
                              "name": "Enterprise policy",
                              "statement": "Support can encourage start-ups but has opportunity costs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Lower taxes raise profits and may encourage new firms and jobs.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Government loses tax revenue that could fund services.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Some firms may relocate only for the relief or would have started anyway.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Opportunity cost means less spending elsewhere.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) more start-ups/jobs (b) lost revenue/opportunity cost or relocation"
},
        },
        {
          id: "ecn10-u7-enterprise-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A start-up founder risks savings to launch an app.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define enterprise as a factor of production.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why entrepreneurship can benefit consumers.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain one risk borne by the entrepreneur.",
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
                              "name": "Enterprise",
                              "statement": "Risk-taking organisation of factors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Enterprise is the entrepreneurial factor combining land, labour and capital.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) New products, competition and jobs can improve choice and welfare.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Risk: savings or business may fail and financial loss occurs.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) risk-taking factor (b) innovation/competition/jobs (c) financial failure risk"
},
        },
        {
          id: "ecn10-u7-enterprise-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A government must decide whether to expand support for small businesses.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define entrepreneurship and give one economic benefit.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain two ways government support can help enterprise.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain two drawbacks of generous support.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Evaluate whether support should be expanded.",
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
                              "name": "Enterprise support evaluation",
                              "statement": "Weigh jobs and innovation against fiscal cost and inefficiency."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Entrepreneurship = risk-taking organisation; benefit = jobs, innovation or competition.",
                              "marks": 3,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Grants/loans reduce start-up costs; tax relief lowers ongoing costs.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Training/advice improves skills and survival rates.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Drawbacks: lost tax revenue and support may go to firms that would succeed anyway.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Expand if targeted at viable start-ups; limit if costs outweigh benefits.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "d"
                    }
          ],
          "finalAnswer": "(a) definition/benefit (b) finance+advice (c) cost/inefficiency (d) conditional evaluation",
          "commonErrors": [
                    "No drawbacks.",
                    "No judgement."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecn10-u7-growth-enterprise-notes",
      title: "Business growth and enterprise — notes",
      summary: "Firms grow internally or externally; scale can lower or raise costs; enterprise needs risk and support.",
      sections: [
        { heading: "Growth", body: "Internal = expand own firm; external = merger or takeover." },
        { heading: "Scale", body: "Economies lower average cost; diseconomies raise it through coordination problems." },
        { heading: "Enterprise", body: "Entrepreneurs take risk; government support can help but has opportunity costs." },
      ],
    },
  ],
};
