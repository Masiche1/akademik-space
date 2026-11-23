import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "ebz10-u8-lesson-8-3",
  code: "8-3",
  title: "Competition and Globalisation",
  goal: "I CAN explain market structures, competitive pressures and the effects of globalisation on business.",
  standards: ["Edexcel IGCSE Business 4BS0 — External Influences on Business Activity"],
  
  vocabulary: [
    { term: "Perfect competition", definition: "Market with many small firms selling identical products." },
    { term: "Monopoly", definition: "Market dominated by a single supplier." },
    { term: "Oligopoly", definition: "Market dominated by a few large firms." },
    { term: "Market share", definition: "A firm's percentage of total market sales." },
    { term: "Globalisation", definition: "Growing integration of world markets and economies." },
    { term: "Multinational", definition: "Company operating in more than one country." },
    { term: "Free trade", definition: "Trade between countries without tariffs or quotas." },
  ],
  concepts: [
    {
      id: "ebz10-u8-competition",
      title: "Market Structures and Competition",
      skill: "Compare perfect competition, monopoly and oligopoly and explain competitive strategy.",
      lesson: {
        sections: [
          {
            heading: "Market structures",
            body: "**Perfect competition**: many small firms, identical products, free entry — prices set by the market, low profits. **Monopoly**: one dominant firm controls supply — can charge higher prices but may face regulation. **Oligopoly**: a few large firms dominate (e.g. car makers, airlines) — intense competition through branding, price and product differentiation; high barriers to entry protect incumbents.",
          },
          {
            heading: "Competitive strategy",
            body: "Firms compete on **price** (risking margin wars), **quality** (premium positioning), **service** (customer loyalty) and **innovation** (new products). Monitoring market share and rivals' actions guides strategy. Barriers to entry — capital needs, brand loyalty, patents — determine how contestable a market is.",
          },
        ],
        keyFormulas: [

        ],
        workedExample: {
          problem: "Three firms supply 90% of a country's smartphone market. What market structure is this and why?",
          solution: "Oligopoly — a few dominant firms control the market; high barriers (R&D costs, brand loyalty) keep new entrants out.",
        },
      },
      questions: [
        {
          id: "ebz10-u8-comp-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a monopoly?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A market dominated by a single supplier"
                    },
                    {
                              "id": "b",
                              "text": "A market with many small firms"
                    },
                    {
                              "id": "c",
                              "text": "A type of tax"
                    },
                    {
                              "id": "d",
                              "text": "Free trade between countries"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Monopoly",
                              "statement": "Single dominant supplier controls the market."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Monopoly gives the firm power over price and supply.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(a)** Single dominant supplier"
},
        },
        {
          id: "ebz10-u8-comp-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give two characteristics of an oligopoly.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Oligopoly",
                              "statement": "Few dominant firms, high barriers to entry."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A small number of large firms dominate the market.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "High barriers to entry — capital, brands, technology needed.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Firms compete on non-price factors like branding and service.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Few dominant firms, high entry barriers, non-price competition."
},
        },
        {
          id: "ebz10-u8-comp-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why perfect competition tends to keep prices low.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Competition and price",
                              "statement": "Many rivals prevent price rises."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Many firms sell identical products — no differentiation.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "If one firm raises price, customers switch to rivals instantly.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Free entry forces prices toward cost levels.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Result: only normal profits — firms cannot earn supernormal profit long-term.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Identical products and free entry force prices down to competitive levels."
},
        },
        {
          id: "ebz10-u8-comp-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A small coffee shop competes with a large chain in the same town.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the market structure and explain one advantage the small shop has.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Suggest two strategies the small shop could use to compete.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Competitive strategy",
                              "statement": "Small firms differentiate on service, niche, locality."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Oligopoly or imperfect competition — chains dominate but independents exist.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Small shop can offer personalised service and local character the chain cannot.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Differentiate — specialist products, local sourcing, community ties.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Focus on niche customers; build loyalty through service quality.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) oligopoly-ish; advantage = personal service/local identity (b) differentiate, niche focus, loyalty."
},
        },
        {
          id: "ebz10-u8-comp-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Firm A has 35% market share, Firm B 25%, Firm C 20%, and smaller firms share the rest in the soft-drinks market.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe the market structure and justify your answer.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain two strategies Firm A might use to defend its leading share.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Market structure identification",
                              "statement": "Few large shares = oligopoly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Oligopoly — three firms control 80% of the market.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Large shares indicate dominant players and entry barriers.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Remaining 20% split among small firms — not perfect competition.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Brand advertising to reinforce loyalty and raise switching costs.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Innovation — new flavours, healthier options, packaging.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Distribution deals with retailers to keep shelf space exclusive.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) oligopoly — 3 firms hold 80% (b) branding, innovation, distribution exclusivity."
},
        },
        {
          id: "ebz10-u8-comp-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A national bus company faces new competition from ride-sharing apps and privately owned coaches.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two ways competition affects the bus company's prices and profits.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Suggest three ways the company could respond strategically.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Evaluate whether price competition is the best response.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Competitive response",
                              "statement": "New entrants force adaptation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Price pressure — rivals may undercut fares to win passengers.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Market share and revenue fall if passengers switch.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Matching low prices could trigger a profit-damaging price war.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Differentiate: reliable timetables, comfort, safety record.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Improve service quality and customer experience.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Cut costs — route optimisation, fuel efficiency, technology.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Adopt technology — booking apps, contactless payment.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Pure price war hurts both sides; differentiation and efficiency protect margins better.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Selective price matching on key routes may be needed, but not across the board.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) price pressure, share loss, price-war risk (b) differentiate, service, cost control, apps (c) avoid blanket price cuts — mix value and efficiency."
},
        },
      ],
    },
    {
      id: "ebz10-u8-global",
      title: "Globalisation",
      skill: "Explain globalisation, multinationals and its opportunities and threats for business.",
      lesson: {
        sections: [
          {
            heading: "What globalisation is",
            body: "**Globalisation** = growing integration of world markets through trade, investment and technology. **Multinationals** operate across borders, sourcing inputs and selling globally. **Free trade** agreements remove tariffs and quotas, opening markets. Falling transport and communication costs accelerate it.",
          },
          {
            heading: "Opportunities and threats",
            body: "**Opportunities**: access to billions of customers, cheaper inputs from low-cost countries, economies of scale, overseas investment incentives. **Threats**: foreign competition at home, exchange-rate risk, complex regulation, ethical concerns (sweatshops, environment). Small firms face the same global competition through imports and online rivals.",
          },
        ],
        keyFormulas: [

        ],
        workedExample: {
          problem: "A shoe brand sells in 40 countries and sources leather from three continents. Name two opportunities and two threats it faces.",
          solution: "Opportunities: huge customer base, cheap inputs. Threats: currency swings, rival brands, supply-chain disruption, ethical scrutiny.",
        },
      },
      questions: [
        {
          id: "ebz10-u8-glob-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is globalisation?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Growing integration of world markets"
                    },
                    {
                              "id": "b",
                              "text": "A single country's economic policy"
                    },
                    {
                              "id": "c",
                              "text": "Domestic competition between firms"
                    },
                    {
                              "id": "d",
                              "text": "A type of monopoly"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Globalisation",
                              "statement": "Integration of world markets through trade and investment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Globalisation links economies through trade, capital flows and technology.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(a)** Integration of world markets"
},
        },
        {
          id: "ebz10-u8-glob-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give two opportunities globalisation creates for a business.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Globalisation opportunities",
                              "statement": "Markets, inputs, scale."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Access to much larger overseas customer markets.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Cheaper raw materials and labour from low-cost countries.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Economies of scale from higher output volumes.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Bigger markets, cheaper inputs, economies of scale."
},
        },
        {
          id: "ebz10-u8-glob-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two threats globalisation poses to a local business.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Globalisation threats",
                              "statement": "Foreign competition, exchange risk, complexity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Foreign firms selling cheaper imports compete directly at home.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Exchange-rate movements can raise input costs or cut export earnings.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Operating abroad means navigating unfamiliar laws and cultures.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Ethical scrutiny — labour and environmental practices abroad — can damage reputation.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Import competition, exchange-rate risk, regulatory complexity, ethical scrutiny."
},
        },
        {
          id: "ebz10-u8-glob-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A UK furniture maker currently sells only domestically. Free-trade agreements open markets in three neighbouring countries.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two opportunities the new markets offer.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Suggest two challenges the maker must overcome before exporting.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Export opportunities",
                              "statement": "New markets, scale, but logistics and regulation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Much larger customer base — sales can grow several-fold.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Free trade removes tariffs, making exports cheaper and competitive.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Higher volumes enable economies of scale and lower unit costs.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Understand foreign regulations, standards and distribution channels.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Manage exchange-rate risk and higher transport costs.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) bigger market, tariff-free access, scale economies (b) regulation, exchange and logistics risk."
},
        },
        {
          id: "ebz10-u8-glob-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A multinational opens a factory in a low-wage country, paying workers less than home-country minimum wage.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two economic benefits of this decision for the multinational.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain two ethical or reputational risks it creates.",
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
                              "name": "Offshoring trade-offs",
                              "statement": "Cost savings vs ethical exposure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Much lower labour costs raise profit margins.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Proximity to raw materials or new customer markets.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Government incentives — tax breaks, grants — reduce costs further.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Paying below ethical standards invites boycott and media attacks.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Pressure groups and consumers may damage the brand globally.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Possible legal issues if home-country standards apply to subsidiaries.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) lower costs, incentives, market access (b) boycott risk, brand damage, legal exposure."
},
        },
        {
          id: "ebz10-u8-glob-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A regional food company must decide whether to remain domestic-only or expand into two neighbouring countries over five years.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain three potential benefits of international expansion.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain three risks the company would face.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate whether the company should expand internationally.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Internationalisation decision",
                              "statement": "Growth opportunity vs risk and complexity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Access to larger customer base — revenue growth potential.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Economies of scale — higher volumes lower unit costs.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Diversification — reduces dependence on one domestic market.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Brand building and learning from international competition.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Exchange-rate and demand uncertainty abroad.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Higher costs — logistics, regulation, local adaptation.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Strong domestic rivals or cultural barriers may limit success.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Recommendation: expand cautiously — start with one market, use local partners, phase investment.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Justified if domestic market is saturated or growth is slowing; not if capacity is strained.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Benefits: growth, scale, diversification. Risks: currency, cost, competition. Expand cautiously via one market and local partners."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebz10-u8-env3-notes",
      title: "Competition and globalisation — notes",
      summary: "Oligopolies dominate many markets; competition drives strategy. Globalisation opens markets but adds currency, cost and ethical risks.",
      sections: [
        { heading: "Market structures", body: "Perfect competition = many firms, low prices. Monopoly = one firm. Oligopoly = few firms, high barriers." },
        { heading: "Globalisation", body: "Trade integration and multinationals create bigger markets, cheaper inputs — but also foreign rivals and currency risk." },
        { heading: "Strategy", body: "Compete on price, quality, service or innovation; expand internationally only when the domestic position is strong." },
      ],
    },
  ],
};
