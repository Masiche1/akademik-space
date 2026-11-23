import type { Lesson } from "../../../types.ts";

export const lesson101: Lesson = {
  id: "ebz11-u10-lesson-10-1",
  code: "10-1",
  title: "Internal and External Business Growth",
  goal: "I CAN distinguish organic (internal) growth from external growth methods and evaluate mergers, takeovers, joint ventures and franchising.",
  standards: ["Edexcel IGCSE Business 4BS0 — Business activity and influences on business", "4BS0: growth strategies and business expansion"],
  
  vocabulary: [
    { term: "Organic growth", definition: "Growth achieved from within the business — more sales, new products, new markets." },
    { term: "External growth", definition: "Growth achieved by joining with or taking over another business." },
    { term: "Merger", definition: "Two businesses combine to form one new, larger business." },
    { term: "Takeover", definition: "One business buys control of another, which may be hostile." },
    { term: "Joint venture", definition: "Two or more businesses set up a new shared business, sharing risks and profits." },
    { term: "Franchise", definition: "A business buys the right to trade under an established brand and business model." },
  ],
  concepts: [
    {
      id: "ebz11-u10-organic",
      title: "Organic (Internal) Growth",
      skill: "Explain how a business grows internally and evaluate its advantages and limitations.",
      lesson: {
        sections: [
          {
            heading: "What organic growth means",
            body: "**Organic growth** is expansion achieved from inside the existing business — no outside firm is bought or merged with. Typical routes: increasing sales of existing products, developing new products, entering new markets or export markets, hiring more staff, and improving marketing. **Growth rate** = (new sales − old sales) ÷ old sales × 100%.\n\n**Benefits**: the owners keep full control; growth is gradual and financed from retained profits or normal borrowing; the business builds on strengths it already has; less risky than big takeovers.\n\n**Drawbacks**: usually slower than external growth; limited by the firm's own resources, skills and finance; may be outpaced by rivals who grow externally.",
          },
          {
            heading: "When organic growth works",
            body: "Best for small and medium businesses that cannot afford acquisitions, businesses in stable markets, and owners who want to keep control. Success depends on reinvesting profit, effective marketing and good financial planning. A business can combine organic growth with external methods — for example, growing sales organically before considering a merger.",
          },
        ],
        keyFormulas: [
          { name: "Growth rate", statement: "(New sales − old sales) ÷ old sales × 100%" },
        ],
        workedExample: {
          problem: "A bakery's sales rise from £180,000 to £216,000 in one year. Calculate its growth rate.",
          solution: "Growth = (216,000 − 180,000) ÷ 180,000 × 100% = 36,000 ÷ 180,000 × 100% = 20%.",
        },
      },
      questions: [
        {
          id: "ebz11-u10-organic-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is organic (internal) growth?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Buying another business outright"
                    },
                    {
                              "id": "b",
                              "text": "Growth achieved from within the existing business"
                    },
                    {
                              "id": "c",
                              "text": "Setting up a joint venture abroad"
                    },
                    {
                              "id": "d",
                              "text": "Selling shares to raise finance"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Organic growth",
                              "statement": "Growth from within — more sales, products, markets."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Organic = internal expansion of the same business.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** From within the business",
          "commonErrors": [
                    "Confused with external growth."
          ]
},
        },
        {
          id: "ebz11-u10-organic-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "A firm's sales rise from £120,000 to £150,000. Calculate the percentage growth rate.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Growth rate (%)",
                              "answer": 25
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Growth rate",
                              "statement": "(150,000 − 120,000) ÷ 120,000 × 100% = 25%."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Increase = £30,000; 30,000 ÷ 120,000 × 100% = 25%.",
                              "marks": 3,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "25%",
          "commonErrors": [
                    "Divided by new sales instead of old sales."
          ]
},
        },
        {
          id: "ebz11-u10-organic-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Give two advantages and one disadvantage of organic growth for a small business.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Organic growth",
                              "statement": "Control retained but growth is slower and resource-limited."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Owners keep full control — no outside shareholders.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Growth is gradual and lower risk, funded from retained profit.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Slower than external growth; limited by own resources and finance.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Control + lower risk; slower, resource-limited growth.",
          "commonErrors": [
                    "Vague answers with no business link."
          ]
},
        },
        {
          id: "ebz11-u10-organic-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A local coffee shop wants to grow organically.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Suggest two ways it could grow organically.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain one limitation of organic growth for this business.",
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
                              "name": "Organic growth routes",
                              "statement": "More sales, new products, new markets."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Raise sales of existing products — longer hours, more bookings, better marketing.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Develop new products (e.g. food) or open a second site / sell online to widen reach.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Growth limited by its own profit and cash flow — cannot expand as fast as a takeover could.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) More sales, new products/markets (b) limited by own resources",
          "commonErrors": [
                    "Suggestions that are actually external growth."
          ]
},
        },
        {
          id: "ebz11-u10-organic-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain why a growing business might prefer organic growth over buying another firm.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Growth choice",
                              "statement": "Control, risk and speed differ between organic and external growth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Keeps full ownership and control — no new shareholders or hostile takeover.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Lower financial risk — no large acquisition cost or debt.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Builds on existing strengths and customer base gradually.",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Control, lower risk, builds on existing strengths.",
          "commonErrors": [
                    "One-sided answer ignoring speed of external growth."
          ]
},
        },
        {
          id: "ebz11-u10-organic-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A profitable family restaurant has grown sales by 30% organically over two years and is considering its next step.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define organic growth and give two ways this restaurant could continue it.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain two reasons organic growth may suit a family-owned business.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Evaluate whether the restaurant should switch to external growth.",
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
                              "name": "Organic growth evaluation",
                              "statement": "Internal routes, control benefits, and judgement on external options."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Growth from within the existing business.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Two routes: new dishes/catering, second site, online ordering, longer hours.",
                              "marks": 3,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Family keeps full control and ownership of decisions.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Lower risk; profits reinvested, no takeover debt or culture clash.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Balanced judgement — external growth gives speed but risks control/loss of identity.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Organic = internal growth; control and lower risk; external only if speed needed.",
          "commonErrors": [
                    "No evaluation in (c).",
                    "Confusing organic with external growth."
          ]
},
        },
      ],
    },
    {
      id: "ebz11-u10-external",
      title: "External Growth Methods",
      skill: "Compare mergers, takeovers, joint ventures and franchising as routes to external growth.",
      lesson: {
        sections: [
          {
            heading: "Mergers, takeovers and joint ventures",
            body: "**Merger**: two businesses combine into one new firm — usually friendly and agreed. **Takeover** (acquisition): one firm buys a controlling stake in another; may be hostile if unwanted. **Joint venture**: firms create a new shared business, sharing costs, risks, skills and profits — common for entering foreign markets.\n\n**Benefits of external growth**: fast — instant market share, customers, skills and distribution; economies of scale; removes a competitor; buys technology or brands.\n\n**Drawbacks**: expensive (may need large loans); loss of control for the acquired firm; culture clashes and integration problems; higher risk of failure; possible job losses.",
          },
          {
            heading: "Franchising",
            body: "A **franchise** lets a business (franchisee) buy the right to trade under an established brand and use its proven business model, often with training and support. The franchisee pays an initial fee plus ongoing royalties.\n\n**Benefits**: established brand and systems reduce risk; proven model; ongoing support; faster than building from scratch. **Drawbacks**: ongoing royalty payments; limited freedom to change the business; dependence on the franchisor's reputation; franchise failure hurts both parties.",
          },
        ],
        keyFormulas: [

        ],
        workedExample: {
          problem: "Firm A (sales £1m) merges with Firm B (sales £2m). What is the combined sales figure and what does the merger achieve?",
          solution: "Combined sales = £3m. The new firm instantly has larger scale, more customers and possibly market power — faster growth than either could achieve alone.",
        },
      },
      questions: [
        {
          id: "ebz11-u10-external-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between a merger and a takeover?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Both are identical — buying shares"
                    },
                    {
                              "id": "b",
                              "text": "Merger = combine into new firm; takeover = one buys control of another"
                    },
                    {
                              "id": "c",
                              "text": "Merger is hostile; takeover is friendly"
                    },
                    {
                              "id": "d",
                              "text": "Takeover is always smaller than merger"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Merger vs takeover",
                              "statement": "Merger creates a new combined firm; takeover buys control."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Merger = new firm formed; takeover = one firm acquires control.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Merger combines; takeover buys control",
          "commonErrors": [
                    "Thinking hostile/friendly is the main distinction."
          ]
},
        },
        {
          id: "ebz11-u10-external-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Define a joint venture and state one benefit for the businesses involved.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Joint venture",
                              "statement": "Shared new business — shared costs, risks, skills and profits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Definition: two+ firms set up a new shared business.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Benefit: share costs/risks or access new markets and skills.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Shared new business; shares costs, risks and skills.",
          "commonErrors": [
                    "Describing a merger instead."
          ]
},
        },
        {
          id: "ebz11-u10-external-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Give two benefits and two drawbacks of a takeover for the business being acquired.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Takeover effects",
                              "statement": "Fast growth but loss of control and integration risk."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Benefit: instant access to new markets, customers and resources.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Benefit: economies of scale and stronger market position.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Drawback: loss of independence — decisions now made by new owners.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Faster growth/resources; but loss of control.",
          "commonErrors": [
                    "Listing only benefits or only drawbacks."
          ]
},
        },
        {
          id: "ebz11-u10-external-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A small UK software firm wants to enter the Indian market quickly.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Suggest and explain one external growth method it could use.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain one drawback of that method.",
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
                              "name": "External growth choice",
                              "statement": "Joint venture suits foreign entry — shared risk and local knowledge."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Joint venture with an Indian firm — shares costs and gives local market knowledge.",
                              "marks": 4,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Shared profits / loss of full control / partner may become competitor.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "Joint venture — local knowledge, shared risk; but shared profits/control.",
          "commonErrors": [
                    "Unjustified method choice."
          ]
},
        },
        {
          id: "ebz11-u10-external-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Compare franchising and setting up a new business from scratch as ways to expand.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Franchise vs start-up",
                              "statement": "Franchise = proven brand, fees, less freedom; start-up = full control, more risk."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Franchise: proven brand and systems reduce risk; ongoing royalties and limited freedom.",
                              "marks": 3,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Start-up: full control and keep all profit; but slow, risky, must build brand from zero.",
                              "marks": 3,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Franchise = lower risk/less control; start-up = full control/more risk.",
          "commonErrors": [
                    "One-sided comparison."
          ]
},
        },
        {
          id: "ebz11-u10-external-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A national bakery chain with 40 shops is offered a takeover by a large food company.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define merger and takeover and explain why this is a takeover.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain two benefits the bakery might gain from the takeover.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Evaluate whether the bakery should accept the takeover.",
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
                              "name": "Takeover evaluation",
                              "statement": "Fast growth and resources vs loss of control and integration risk."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Merger = two firms combine into a new firm; takeover = one buys control of another.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) It is a takeover because the food company buys control — bakery becomes part of a bigger group.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Access to national distribution, finance and bulk-buying power.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Brand recognition and economies of scale.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Balanced judgement — accept if growth/resources outweigh loss of independence; reject if owners value control.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Takeover = bought control; gains scale/resources; judge against loss of control.",
          "commonErrors": [
                    "No evaluation in (c).",
                    "Confusing merger with takeover."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebz11-u10-growth-notes",
      title: "Business growth — notes",
      summary: "Organic growth is internal and keeps control; external growth (mergers, takeovers, JVs, franchises) is faster but riskier and costs control.",
      sections: [
        { heading: "Key idea", body: "Organic = from within (sales, products, markets); external = joining or buying another firm." },
        { heading: "External methods", body: "Merger combines into a new firm; takeover buys control; joint venture shares a new business; franchise buys a proven brand model." },
        { heading: "Trade-off", body: "External growth is fast and gives scale but is expensive and risks loss of control, culture clashes and debt." },
      ],
    },
  ],
};
