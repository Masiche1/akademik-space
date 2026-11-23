import type { Lesson } from "../../../types.ts";

export const lesson91: Lesson = {
  id: "ebz10-u9-lesson-9-1",
  code: "9-1",
  title: "Why Businesses Go Global",
  goal: "I CAN explain why businesses expand internationally and identify the barriers they face.",
  standards: ["Edexcel IGCSE Business 4BS0 — External Influences: globalisation and international business"],
  
  vocabulary: [
    { term: "Globalisation", definition: "The increasing interconnectedness of world economies through trade, investment and communication." },
    { term: "International trade", definition: "The exchange of goods and services between countries." },
    { term: "Market saturation", definition: "When demand for a product in a market is fully met and growth stalls." },
    { term: "Economies of scale", definition: "Lower average costs achieved by producing on a larger scale." },
    { term: "Trade barrier", definition: "A restriction, such as a tariff or quota, on international trade." },
  ],
  concepts: [
    {
      id: "ebz10-u9-global-drivers",
      title: "Drivers of Globalisation",
      skill: "Explain why businesses expand into foreign markets and the barriers they face.",
      lesson: {
        sections: [
          {
            heading: "What is globalisation?",
            body: "**Globalisation** is the process by which economies, markets and cultures become increasingly interconnected. Falling transport and communication costs, trade agreements and multinational companies have made it easier for businesses to sell abroad.\n\nFor a business, going global means selling products or services in other countries — through exports, licensing, joint ventures or setting up subsidiaries.",
          },
          {
            heading: "Why businesses go global",
            body: "**Market reasons**: the home market may be **saturated** — demand is met and growth has stalled — so new customers must be found abroad. Larger markets also allow **economies of scale**, lowering average costs.\n\n**Competitive and financial reasons**: rivals may already be trading internationally, so the firm must follow or lose share. A stronger currency at home makes exports cheaper for foreign buyers. Businesses also spread risk by not depending on one market, and may access cheaper labour or raw materials overseas.",
          },
          {
            heading: "Barriers to going global",
            body: "**Trade barriers**: tariffs (taxes on imports), quotas (limits on quantities) and embargoes restrict trade. **Costs**: transport, packaging and insurance raise prices. **Other barriers**: different languages and cultures require adaptation; exchange-rate movements can wipe out profits; foreign laws, regulations and payment risks differ from home; protectionist governments may favour local firms.",
          },
        ],
        keyFormulas: [
          { name: "Market saturation", statement: "Home demand fully met → growth requires new markets" },
          { name: "Economies of scale", statement: "Higher output → lower average cost per unit" },
        ],
        workedExample: {
          problem: "A UK bakery sells out every day and cannot expand its shop. Its main rival now sells online to France. What pressures push the bakery to go global?",
          solution: "Home market is saturated (no room to grow) and the rival's international sales threaten its position — so exporting or selling online abroad offers new customers, economies of scale and protection against losing share.",
        },
      },
      questions: [
        {
          id: "ebz10-u9-drivers-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which statement best defines globalisation?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A tax charged on goods imported into a country"
                    },
                    {
                              "id": "b",
                              "text": "A limit on the quantity of goods a country may import"
                    },
                    {
                              "id": "c",
                              "text": "Increasing interconnectedness of world economies through trade and investment"
                    },
                    {
                              "id": "d",
                              "text": "A merger between two companies in the same country"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Globalisation",
                              "statement": "Increasing interconnectedness of world economies."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Globalisation = interconnected world trade and investment, not tariffs, quotas or mergers.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(c)** Interconnectedness of world economies",
          "commonErrors": [
                    "Confused with a trade barrier."
          ]
},
        },
        {
          id: "ebz10-u9-drivers-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give three reasons why a successful domestic business might expand into foreign markets.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Motives for international expansion",
                              "statement": "New markets, scale, competition, cost advantages."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Home market saturated — needs new customers.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Larger markets give economies of scale / lower costs.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Follows competitors or spreads risk / cheaper resources.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "New markets, economies of scale, competitive pressure/risk spreading.",
          "commonErrors": [
                    "Only one reason.",
                    "Vague answers without business link."
          ]
},
        },
        {
          id: "ebz10-u9-drivers-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how increased competition can push a business to trade internationally.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Competition as a driver",
                              "statement": "Rivals' global reach forces a firm to expand or lose share."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Competitors begin selling abroad and gain new customers.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The firm risks losing market share at home and abroad.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "To defend position it must match rivals' reach.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "International sales can also bring cost/scale advantages.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Rivals going global threatens market share, so the firm must follow to compete and gain scale.",
          "commonErrors": [
                    "No link between competition and expansion."
          ]
},
        },
        {
          id: "ebz10-u9-drivers-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A small furniture maker wants to export to another country.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State two trade barriers the firm may face.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how each barrier could reduce the firm's export sales.",
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
                              "name": "Trade barriers",
                              "statement": "Tariffs, quotas, transport costs, cultural and legal differences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Tariffs or quotas on imported goods.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) High transport costs or cultural/language differences.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Tariffs raise the foreign price, cutting demand for exports.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) High transport costs make the product uncompetitive abroad.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Language/cultural differences reduce appeal or cause marketing errors.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) tariffs/quotas, transport or cultural barriers (b) higher prices and weaker demand abroad",
          "commonErrors": [
                    "Barriers not linked to sales effect."
          ]
},
        },
        {
          id: "ebz10-u9-drivers-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A profitable national coffee chain is considering opening stores in two neighbouring countries.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two reasons why the chain might seek new markets abroad.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Evaluate one advantage and one disadvantage for the chain of going global.",
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
                              "name": "International expansion evaluation",
                              "statement": "Growth and scale versus risk and adaptation costs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Home market saturated — new countries offer growth.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Larger scale lowers costs and counters competitors.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Advantage: access to new customers and revenue streams.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Disadvantage: barriers such as tariffs, language and exchange-rate risk raise costs.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) growth beyond home market, economies of scale (b) new customers vs tariffs/cultural/exchange risks",
          "commonErrors": [
                    "Only one side evaluated in (b)."
          ]
},
        },
        {
          id: "ebz10-u9-drivers-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A clothing firm currently sells only in its home country and is debating whether to expand abroad.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define globalisation.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Give two reasons why the firm might expand internationally.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Identify two barriers to international expansion.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain one benefit and one cost of globalisation for the firm's home country.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Reach a justified conclusion on whether the firm should expand.",
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
                              "name": "Globalisation decision-making",
                              "statement": "Weigh growth and scale against barriers and risks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Increasing interconnectedness of world economies via trade and investment.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Home market saturated / economies of scale / competitive pressure.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Tariffs and quotas, or transport costs and cultural differences.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Benefit: jobs and export earnings; cost: competition may hurt local firms or jobs move abroad.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "d"
                    },
                    {
                              "reasoning": "(e) Balanced judgement weighing growth benefits against barriers and risks.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "e"
                    }
          ],
          "finalAnswer": "Globalisation defined; expansion weighed against barriers; justified conclusion.",
          "commonErrors": [
                    "No judgement in (e).",
                    "Benefits and costs not explained."
          ]
},
        },
      ],
    },
    {
      id: "ebz10-u9-expand-methods",
      title: "Methods of International Expansion",
      skill: "Compare exporting, licensing, joint ventures and wholly-owned subsidiaries.",
      lesson: {
        sections: [
          {
            heading: "Low-control methods: exporting and licensing",
            body: "**Exporting**: selling goods produced at home to foreign customers — lowest risk and cost, but the firm has little control over marketing abroad and transport costs can be high.\n\n**Licensing and franchising**: a foreign firm pays for the right to make or sell the product under agreed terms. The licensor earns royalties with little investment, but risks losing control of quality and creating a future competitor. Franchising is licensing of a whole business format (e.g. fast-food chains).",
          },
          {
            heading: "Higher-control methods: joint ventures and subsidiaries",
            body: "**Joint venture**: two firms from different countries set up a new business together, sharing costs, risks and local knowledge — but profits and control are shared.\n\n**Wholly-owned subsidiary**: the firm sets up or buys a business it fully owns abroad. Maximum control and potential profit, but requires the most investment and bears all the risk. Larger, experienced firms usually choose this route.",
          },
          {
            heading: "Choosing a method",
            body: "Small firms with limited funds usually start with **exporting** or **licensing** — low risk, low investment. Firms wanting local market knowledge without full risk may use **joint ventures**. Large multinationals with abundant capital often go for **wholly-owned subsidiaries** to keep full control. The choice depends on size, resources, risk appetite and how much control the firm wants over quality and branding.",
          },
        ],
        keyFormulas: [
          { name: "Risk–control trade-off", statement: "Exporting = low risk, low control; subsidiary = high risk, high control" },
          { name: "Licensing", statement: "Foreign firm pays royalties for production/selling rights" },
        ],
        workedExample: {
          problem: "A small UK crisp brand wants to sell in Japan but cannot afford a factory there. Which method fits best and why?",
          solution: "Licensing or franchising — a Japanese firm pays royalties to make and sell the crisps, giving market access without the capital cost or risk of building a subsidiary.",
        },
      },
      questions: [
        {
          id: "ebz10-u9-methods-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A foreign company pays a UK firm royalties for the right to manufacture its product abroad. What is this method called?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Exporting"
                    },
                    {
                              "id": "b",
                              "text": "A joint venture"
                    },
                    {
                              "id": "c",
                              "text": "Licensing"
                    },
                    {
                              "id": "d",
                              "text": "A wholly-owned subsidiary"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Licensing",
                              "statement": "Selling rights to a foreign firm for royalties."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Paying royalties for rights to make/sell = licensing.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(c)** Licensing",
          "commonErrors": [
                    "Confused with franchising a whole format or exporting finished goods."
          ]
},
        },
        {
          id: "ebz10-u9-methods-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give three methods a business can use to enter a foreign market.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Market entry methods",
                              "statement": "Exporting, licensing/franchising, joint ventures, subsidiaries."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Exporting goods produced at home.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Licensing or franchising rights to a foreign firm.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Joint venture or wholly-owned subsidiary.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Exporting, licensing/franchising, joint venture, subsidiary.",
          "commonErrors": [
                    "Only one method.",
                    "Methods confused."
          ]
},
        },
        {
          id: "ebz10-u9-methods-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the difference between exporting and licensing as ways of entering foreign markets.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Exporting vs licensing",
                              "statement": "Sell finished goods vs sell rights; control and risk differ."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Exporting: the firm sells its own goods abroad — keeps control of production.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Exporting bears transport costs and has less control over foreign marketing.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Licensing: a foreign firm makes/sells the product and pays royalties.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Licensing needs little investment but risks loss of quality control and future competition.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Exporting = sell own goods abroad; licensing = sell rights for royalties — different control/risk profiles.",
          "commonErrors": [
                    "No comparison, only one method described."
          ]
},
        },
        {
          id: "ebz10-u9-methods-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A small craft-jewellery business wants to sell overseas for the first time.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State two low-risk methods of entering foreign markets.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why the business might choose exporting.",
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
                              "name": "Entry method choice",
                              "statement": "Limited funds favour low-investment, low-risk methods."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Exporting and licensing/franchising.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Or joint ventures as a moderate-risk option.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) No need to build foreign factories — low capital required.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Keeps full control of the product and brand.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Easy to test demand before committing more resources.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) exporting, licensing/franchising (b) low cost, keeps control, tests demand",
          "commonErrors": [
                    "High-investment method suggested for a small firm."
          ]
},
        },
        {
          id: "ebz10-u9-methods-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A UK electronics firm is choosing between forming a joint venture with a Brazilian company and setting up a wholly-owned subsidiary.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe what a joint venture is.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Compare the joint venture with a wholly-owned subsidiary in terms of control and risk.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Joint venture vs subsidiary",
                              "statement": "Shared ownership vs full ownership — control, risk, profit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Two firms from different countries set up a new business together.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Joint venture: control and profits are shared between partners.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Joint venture: costs and risks are shared, and local knowledge helps.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Subsidiary: full control and all profits kept by the UK firm.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Subsidiary: bears all costs and risks — needs the most investment.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) shared new business (b) JV shares control/risk/profit; subsidiary keeps all control but bears all risk",
          "commonErrors": [
                    "Control and risk not both compared."
          ]
},
        },
        {
          id: "ebz10-u9-methods-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "An established UK food company wants maximum control over its brand in Asia.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define exporting.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Define licensing.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Describe a joint venture.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Describe a wholly-owned subsidiary.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Recommend and justify the best method for this company.",
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
                              "name": "Market entry methods",
                              "statement": "Control rises from exporting to subsidiaries; risk rises too."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Selling goods produced at home to foreign customers.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Allowing a foreign firm to make/sell the product for royalties.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Two firms jointly set up a new business abroad, sharing ownership.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) A foreign business fully owned and controlled by the firm.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "d"
                    },
                    {
                              "reasoning": "(e) Wholly-owned subsidiary justified by the need for maximum brand control and resources to fund it.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "e"
                    }
          ],
          "finalAnswer": "Four methods defined; subsidiary recommended for control.",
          "commonErrors": [
                    "Recommendation without justification.",
                    "Definitions inaccurate."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebz10-u9-91-notes",
      title: "Why businesses go global — notes",
      summary: "Globalisation = interconnected world economies. Firms expand for new markets, scale and competition; entry methods range from exporting to subsidiaries.",
      sections: [
        { heading: "Drivers", body: "Saturated home markets, economies of scale, competitive pressure, cheaper resources and risk spreading push firms abroad." },
        { heading: "Barriers", body: "Tariffs, quotas, transport costs, language/culture differences, exchange-rate risk and foreign laws." },
        { heading: "Entry methods", body: "Exporting (low risk, low control) → licensing/franchising → joint ventures → wholly-owned subsidiaries (high risk, high control). Small firms start low; multinationals go high." },
      ],
    },
  ],
};
