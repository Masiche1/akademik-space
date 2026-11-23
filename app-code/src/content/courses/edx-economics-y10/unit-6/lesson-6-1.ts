import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "ecn10-u6-lesson-6-1",
  code: "6-1",
  title: "Multinational Corporations and Globalisation",
  goal: "I CAN explain what MNCs are, how globalisation works and evaluate their impacts.",
  standards: ["Edexcel IGCSE Economics 4EC1 — The Global Economy: globalisation and MNCs"],
  
  vocabulary: [
    { term: "Multinational corporation (MNC)", definition: "A company operating in more than one country." },
    { term: "Globalisation", definition: "The growing interconnectedness of the world economy through trade, investment, migration and information." },
    { term: "Foreign direct investment (FDI)", definition: "Investment by a firm in productive assets in another country." },
    { term: "Offshoring", definition: "Moving production or services to another country to cut costs." },
    { term: "Outsourcing", definition: "Contracting work to another firm, often abroad." },
  ],
  concepts: [
    {
      id: "ecn10-u6-mnc",
      title: "Multinational Corporations",
      skill: "Explain the motives and impacts of multinational corporations on home and host countries.",
      lesson: {
        sections: [
          {
            heading: "What MNCs are",
            body: "An **MNC** is a firm operating in two or more countries — e.g. Nike, Toyota, Samsung. MNCs locate abroad to access **larger markets**, **cheaper labour**, **raw materials**, **tax advantages**, and to be closer to customers. They transfer **technology, management skills and capital**.",
          },
          {
            heading: "Benefits to host countries",
            body: "MNCs bring **jobs**, **export earnings**, **technology and skills transfer**, **infrastructure investment**, and **tax revenue**. They may also upgrade local suppliers through supply chains. For developing countries, FDI is often the largest source of external finance.",
          },
          {
            heading: "Costs and concerns",
            body: "MNCs can **repatriate profits** out of the host country, pay **low wages** in export zones, **avoid tax** via transfer pricing, **squeeze out local firms**, and create **environmental damage**. In home countries, offshoring can **lose jobs**. MNCs also gain huge **market power**.",
          },
        ],
        keyFormulas: [
          { name: "MNC", statement: "Firm operating in 2+ countries via FDI" },
          { name: "FDI", statement: "Investment in productive assets abroad" },
        ],
        workedExample: {
          problem: "A shoe MNC builds a factory in a poor country paying low wages. Give one benefit and one cost to the host country.",
          solution: "Benefit: jobs and skills for local workers. Cost: profits repatriated abroad and possible wage exploitation.",
        },
      },
      questions: [
        {
          id: "ecn10-u6-mnc-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a multinational corporation (MNC)?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A company owned by many shareholders"
                    },
                    {
                              "id": "b",
                              "text": "A company operating in more than one country"
                    },
                    {
                              "id": "c",
                              "text": "A very large domestic company"
                    },
                    {
                              "id": "d",
                              "text": "A government-owned enterprise"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "MNC",
                              "statement": "Operates in 2+ countries."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "MNC = multinational operations via FDI.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Operating in more than one country",
          "commonErrors": [
                    "Confusing size with multinationality."
          ]
},
        },
        {
          id: "ecn10-u6-mnc-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give three reasons an MNC might locate production in a developing country.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "MNC motives",
                              "statement": "Low costs, markets, resources, tax."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lower labour costs — cheap workforce.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Access to raw materials or a growing consumer market.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Lower taxes or weaker regulation in the host country.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Cheap labour, resources/markets, tax/regulatory advantages.",
          "commonErrors": [
                    "Listing benefits to the host country instead of motives."
          ]
},
        },
        {
          id: "ecn10-u6-mnc-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two benefits MNCs bring to a developing host country.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "FDI benefits",
                              "statement": "Jobs, skills, technology, tax revenue."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Create jobs and raise local incomes.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Transfer technology and management skills.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Generate export earnings and tax revenue.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Invest in infrastructure and upgrade local suppliers.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Jobs, skills/technology, exports/tax, infrastructure.",
          "commonErrors": [
                    "Only listing costs."
          ]
},
        },
        {
          id: "ecn10-u6-mnc-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A clothing MNC closes its factory in Country A and opens one in Country B where wages are lower.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain the effect on Country A's economy.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain the effect on Country B's economy.",
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
                              "name": "Offshoring",
                              "statement": "Production moves to lower-cost locations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Job losses in Country A — unemployment rises.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Lost export earnings and tax revenue decline.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) New jobs and incomes created in Country B.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Export earnings and tax revenue rise for Country B.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) A loses jobs and revenue (b) B gains jobs and revenue",
          "commonErrors": [
                    "Treating MNC decisions as costless for both."
          ]
},
        },
        {
          id: "ecn10-u6-mnc-q5",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A developing country welcomes a large MNC to build a factory.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain three ways the MNC could benefit the host country.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain three ways the MNC could harm the host country.",
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
                              "name": "MNC impact",
                              "statement": "Jobs and investment vs profit repatriation and exploitation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Jobs and skills for local workers.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Technology transfer and export earnings.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Tax revenue and infrastructure investment.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Supply-chain links benefit local firms.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Profits repatriated — little stays in the host economy.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Low wages and poor conditions in export zones.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Tax avoidance and environmental damage.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) May squeeze out local firms unable to compete.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) jobs, technology, tax/infrastructure, links (b) repatriation, low wages, tax avoidance, displacement",
          "commonErrors": [
                    "One-sided impact analysis."
          ]
},
        },
        {
          id: "ecn10-u6-mnc-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "An MNC announces it will build a factory in a developing country.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two reasons the host country might welcome the investment.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain two reasons the host country might be cautious.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Evaluate whether the host country should welcome the MNC.",
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
                              "name": "FDI evaluation",
                              "statement": "FDI brings jobs and capital but with conditions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Jobs and income for local workers.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Technology, skills and export earnings.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Tax revenue and infrastructure investment.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Profit repatriation limits local benefit.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Possible low wages, poor conditions, environmental damage.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Generally positive if terms are fair — but depends on regulation and linkages.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Host countries can negotiate conditions or use the investment as leverage.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) jobs, technology, tax (b) repatriation, exploitation risk (c) welcome with regulation",
          "commonErrors": [
                    "No balanced evaluation."
          ]
},
        },
      ],
    },
    {
      id: "ecn10-u6-glob",
      title: "Globalisation",
      skill: "Explain the drivers and impacts of globalisation on economies and societies.",
      lesson: {
        sections: [
          {
            heading: "Drivers of globalisation",
            body: "**Trade liberalisation** (lower tariffs, WTO rules), **transport and communication costs** falling (containers, internet), **financial liberalisation** (capital flows freely), **MNCs** spreading production globally, and **technology** enabling global supply chains.",
          },
          {
            heading: "Benefits of globalisation",
            body: "**Efficiency gains** from specialisation and economies of scale; **lower prices** for consumers; **access to markets** for poor countries' exports; **technology and ideas transfer**; **higher growth** and **poverty reduction** in many developing countries (e.g. China, Vietnam).",
          },
          {
            heading: "Costs of globalisation",
            body: "**Job losses** in developed countries as production offshores; **wage inequality** (skilled wages rise, unskilled fall); **environmental damage** from increased production and transport; **cultural homogenisation**; **volatility** — global financial crises spread faster; **tax competition** as countries cut rates to attract MNCs.",
          },
        ],
        keyFormulas: [
          { name: "Globalisation", statement: "Growing interconnectedness of the world economy" },
          { name: "Trade liberalisation", statement: "Lowering barriers to international trade" },
        ],
        workedExample: {
          problem: "A factory worker in the US loses their job as production moves to Vietnam. Is this a benefit or cost of globalisation?",
          solution: "A cost for that worker and the US economy, but a benefit for Vietnamese workers and consumers who get cheaper goods — globalisation creates winners and losers.",
        },
      },
      questions: [
        {
          id: "ecn10-u6-glob-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is globalisation?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The growth of a single country's economy"
                    },
                    {
                              "id": "b",
                              "text": "The growing interconnectedness of the world economy"
                    },
                    {
                              "id": "c",
                              "text": "International travel and tourism"
                    },
                    {
                              "id": "d",
                              "text": "The rise of multinational companies only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Globalisation",
                              "statement": "Interconnectedness of the world economy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Globalisation = integration of trade, finance, production, information.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Interconnectedness of the world economy",
          "commonErrors": [
                    "Confusing with MNCs alone."
          ]
},
        },
        {
          id: "ecn10-u6-glob-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give three drivers of globalisation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Globalisation drivers",
                              "statement": "Trade liberalisation, technology, falling transport costs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Trade liberalisation — lower tariffs and fewer barriers.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Falling transport and communication costs.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Financial liberalisation and technology (internet, containers).",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Trade liberalisation, technology, falling transport/communication costs.",
          "commonErrors": [
                    "Listing effects instead of drivers."
          ]
},
        },
        {
          id: "ecn10-u6-glob-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two benefits of globalisation for developing countries.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Globalisation benefits",
                              "statement": "Market access, investment, technology, growth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Access to large export markets for their goods.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "FDI brings jobs, capital and technology.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Technology and ideas transfer raises productivity.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Integration has lifted millions out of poverty in many countries.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Market access, FDI/jobs, technology transfer, poverty reduction.",
          "commonErrors": [
                    "Only listing benefits to rich countries."
          ]
},
        },
        {
          id: "ecn10-u6-glob-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A developed country's manufacturing sector shrinks as production moves abroad.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two costs of this for the developed country.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain two benefits it may still gain.",
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
                              "name": "Globalisation impacts",
                              "statement": "Job losses vs cheaper goods and services."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Job losses in manufacturing — unemployment and wage pressure.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Regional decline — whole towns dependent on one industry suffer.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Consumers get cheaper imported goods — higher living standards.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Economy shifts to higher-value services — potentially more productive.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) job losses, regional decline (b) cheaper goods, shift to services",
          "commonErrors": [
                    "One-sided analysis of globalisation."
          ]
},
        },
        {
          id: "ecn10-u6-glob-q5",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Globalisation has increased the gap between skilled and unskilled workers in many countries.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why globalisation may increase wage inequality.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain one way governments could reduce this inequality.",
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
                              "name": "Skill-biased change",
                              "statement": "Globalisation rewards skills; unskilled wages stagnate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) MNCs and trade reward skilled workers — demand for them rises.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Unskilled jobs move to low-wage countries — domestic wages stagnate.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Invest in education and training to upskill workers.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Progressive taxes and benefits redistribute gains.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) skilled demand up, unskilled jobs offshored (b) upskilling, redistribution",
          "commonErrors": [
                    "Treating globalisation as uniformly beneficial."
          ]
},
        },
        {
          id: "ecn10-u6-glob-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A country debates whether to embrace deeper globalisation.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two benefits of deeper globalisation for the country.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain two costs of deeper globalisation for the country.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Evaluate whether the country should embrace it.",
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
                              "name": "Globalisation evaluation",
                              "statement": "Benefits and costs depend on how integration is managed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Access to bigger markets and cheaper inputs.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) FDI brings jobs, technology and capital.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Job losses in uncompetitive sectors and regions.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Vulnerability to global shocks and inequality risks.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Generally beneficial if managed — openness plus social safety nets.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) markets, investment (b) job losses, vulnerability (c) embrace with safeguards",
          "commonErrors": [
                    "No evaluation or one-sided answer."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecn10-u6-glob-notes",
      title: "Globalisation and MNCs — notes",
      summary: "MNCs bring FDI, jobs and technology but can exploit; globalisation creates winners and losers.",
      sections: [
        { heading: "Key idea", body: "Globalisation integrates economies through trade, investment, migration and information." },
        { heading: "MNCs", body: "Benefits: jobs, skills, exports. Costs: profit repatriation, low wages, displacement." },
        { heading: "Impacts", body: "Winners: consumers, investors, skilled workers, developing exporters. Losers: unskilled workers, import-competing firms." },
      ],
    },
  ],
};
