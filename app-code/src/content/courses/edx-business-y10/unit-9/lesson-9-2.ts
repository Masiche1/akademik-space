import type { Lesson } from "../../../types.ts";

export const lesson92: Lesson = {
  id: "ebz10-u9-lesson-9-2",
  code: "9-2",
  title: "International Trade and Exchange Rates",
  goal: "I CAN explain free trade, protectionism and the effect of exchange-rate changes on businesses.",
  standards: ["Edexcel IGCSE Business 4BS0 — External Influences: trade and exchange rates"],
  
  vocabulary: [
    { term: "Free trade", definition: "Trade between countries without tariffs, quotas or other restrictions." },
    { term: "Protectionism", definition: "Government policies restricting imports to protect domestic industries." },
    { term: "Tariff", definition: "A tax on imported goods." },
    { term: "Quota", definition: "A limit on the quantity of a good that may be imported." },
    { term: "Exchange rate", definition: "The price of one currency in terms of another." },
    { term: "Appreciation", definition: "A rise in the value of a currency relative to others." },
  ],
  concepts: [
    {
      id: "ebz10-u9-trade-protection",
      title: "Free Trade and Protectionism",
      skill: "Compare free trade and protectionist policies and their effects on business.",
      lesson: {
        sections: [
          {
            heading: "Free trade",
            body: "**Free trade** removes tariffs, quotas and other barriers, letting goods flow at world prices. It encourages **specialisation** (countries produce what they do best), gives consumers lower prices and more choice, and lets efficient firms reach larger markets. Trade agreements such as free-trade areas reduce barriers between member countries.",
          },
          {
            heading: "Protectionist methods",
            body: "**Tariffs** tax imports, raising their price. **Quotas** cap the quantity imported. **Subsidies** give domestic producers financial help so they can charge lower prices. **Embargoes** ban trade with a country entirely, often for political reasons. **Administrative barriers** (complex paperwork, product standards) can also slow imports.",
          },
          {
            heading: "Arguments for and against protectionism",
            body: "**For**: protects new or vulnerable industries ('infant industries'), saves jobs in declining sectors, blocks unfairly cheap imports, can be used as leverage in negotiations, protects strategic industries. **Against**: raises prices for consumers, invites retaliation (trade wars), protects inefficient firms, reduces competition and choice, can cost jobs in export industries.",
          },
        ],
        keyFormulas: [
          { name: "Tariff", statement: "Import tax → higher import price, protects domestic sales" },
          { name: "Quota", statement: "Quantity limit on imports" },
          { name: "Subsidy", statement: "Government support lowering domestic firms' costs" },
        ],
        workedExample: {
          problem: "A government imposes a 20% tariff on imported steel. What happens to domestic steel prices and imports?",
          solution: "Imported steel becomes 20% more expensive, so domestic steel looks cheaper by comparison — imports fall and domestic producers gain sales, but buyers pay higher prices.",
        },
      },
      questions: [
        {
          id: "ebz10-u9-trade-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a tariff?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A limit on the quantity of imports"
                    },
                    {
                              "id": "b",
                              "text": "A tax on imported goods"
                    },
                    {
                              "id": "c",
                              "text": "Government money given to domestic firms"
                    },
                    {
                              "id": "d",
                              "text": "A complete ban on trade with a country"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Tariff",
                              "statement": "Tax on imported goods."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tariff = import tax; quota = quantity limit; subsidy = support; embargo = ban.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Tax on imported goods",
          "commonErrors": [
                    "Confused with quota or subsidy."
          ]
},
        },
        {
          id: "ebz10-u9-trade-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give three methods of protectionism a government might use.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Protectionist methods",
                              "statement": "Tariffs, quotas, subsidies, embargoes, red tape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tariffs — taxes on imports.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Quotas — limits on import quantities.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Subsidies or embargoes / administrative barriers.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Tariffs, quotas, subsidies, embargoes, administrative barriers.",
          "commonErrors": [
                    "Only tariffs named.",
                    "Free-trade measures listed."
          ]
},
        },
        {
          id: "ebz10-u9-trade-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how a tariff affects domestic consumers and domestic producers.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Tariff effects",
                              "statement": "Higher import prices protect domestic firms but raise consumer prices."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tariff raises the price of imported goods.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Consumers face higher prices and less choice.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Imports become less competitive — domestic producers gain sales.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Domestic jobs may be protected but at higher cost to buyers.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Consumers pay more; domestic producers gain protected sales.",
          "commonErrors": [
                    "Only one group affected mentioned."
          ]
},
        },
        {
          id: "ebz10-u9-trade-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Two neighbouring countries remove all tariffs between them but keep tariffs on imports from elsewhere.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Name this type of trade arrangement.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Give one benefit of free trade between the two countries.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain one cost of free trade for workers in inefficient industries.",
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
                              "name": "Free trade effects",
                              "statement": "Efficiency and choice rise; uncompetitive jobs are at risk."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) A free-trade area / customs union.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Lower prices and more choice for consumers / specialisation gains.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Cheap imports undercut inefficient firms, threatening jobs.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) free-trade area (b) lower prices/choice or efficiency (c) job losses in uncompetitive industries",
          "commonErrors": [
                    "Arrangement misnamed.",
                    "Costs ignored."
          ]
},
        },
        {
          id: "ebz10-u9-trade-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A government is considering whether to protect its domestic car industry with tariffs and subsidies.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two arguments in favour of protecting the car industry.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Evaluate one argument against protectionism.",
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
                              "name": "Protectionism debate",
                              "statement": "Protects jobs/infant industries but raises prices and invites retaliation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Protects domestic jobs in the car industry.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Gives an infant industry time to develop and compete.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Strategic/security or anti-dumping argument.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Consumers pay higher prices for cars — costs outweigh benefits.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Retaliation risk and protection of inefficient firms weaken the economy.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) jobs, infant-industry, strategic (b) higher consumer prices / retaliation",
          "commonErrors": [
                    "One-sided answer.",
                    "No evaluation of the argument."
          ]
},
        },
        {
          id: "ebz10-u9-trade-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A developing country must decide whether to protect its new textile industry from cheap imports.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define free trade.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Define protectionism and name two of its methods.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain two benefits of free trade for consumers.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain two arguments for protecting a new industry.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Reach a justified conclusion on whether to protect the textile industry.",
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
                              "name": "Trade policy evaluation",
                              "statement": "Free trade lowers prices; protection may nurture infant industries at consumer cost."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Trade without tariffs, quotas or other barriers.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Policies restricting imports to protect domestic firms — tariffs and quotas (or subsidies).",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Lower prices from competition and greater choice of goods.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Infant industry needs time to grow; protects jobs from cheap imports.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "d"
                    },
                    {
                              "reasoning": "(e) Balanced judgement — e.g. temporary protection justified, permanent protection not.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "e"
                    }
          ],
          "finalAnswer": "Free trade vs protectionism defined; effects explained; justified conclusion.",
          "commonErrors": [
                    "No judgement.",
                    "Methods of protectionism missing."
          ]
},
        },
      ],
    },
    {
      id: "ebz10-u9-exchange-rates",
      title: "Exchange Rates and Their Impact",
      skill: "Explain how exchange-rate changes affect exporters, importers and the economy.",
      lesson: {
        sections: [
          {
            heading: "What exchange rates are",
            body: "An **exchange rate** is the price of one currency in terms of another — e.g. £1 = 1.30 dollars. Rates move constantly on foreign-exchange markets, driven by demand for currencies, interest rates, inflation, economic growth and speculation.\n\nWhen a currency **appreciates**, its value rises (more foreign currency per unit). When it **depreciates**, its value falls (fewer foreign currency per unit).",
          },
          {
            heading: "Effects of a stronger currency",
            body: "**Appreciation** makes exports more expensive abroad (foreign buyers pay more) → export volumes and revenue may fall; importers benefit because foreign goods become cheaper → import prices fall, helping reduce inflation. However, exporters' profits can shrink and jobs in export industries may be threatened.",
          },
          {
            heading: "Effects of a weaker currency",
            body: "**Depreciation** makes exports cheaper abroad → exporters gain competitiveness, volumes and jobs. Imports become more expensive → import prices and inflation rise, hitting consumers and firms that rely on imported raw materials. Depreciation can also reduce the real value of foreign earnings when converted back.",
          },
        ],
        keyFormulas: [
          { name: "Appreciation", statement: "Currency value rises → exports dearer, imports cheaper" },
          { name: "Depreciation", statement: "Currency value falls → exports cheaper, imports dearer" },
          { name: "% change", statement: "(New rate − Old rate) ÷ Old rate × 100" },
        ],
        workedExample: {
          problem: "The pound rises from 1.20 to 1.26 dollars per pound. Calculate the percentage change and state the effect on UK exporters.",
          solution: "Change = (1.26 − 1.20) ÷ 1.20 × 100 = 5% appreciation. UK goods become 5% more expensive in dollar terms, so US demand for UK exports likely falls.",
        },
      },
      questions: [
        {
          id: "ebz10-u9-fx-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The exchange rate changes from £1 = 1.20 dollars to £1 = 1.26 dollars. Calculate the percentage increase in the value of the pound.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Percentage increase",
                              "answer": 5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Percentage change",
                              "statement": "(New − Old) ÷ Old × 100."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(1.26 − 1.20) ÷ 1.20 × 100 = 0.06 ÷ 1.20 × 100 = 5%.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "5%",
          "commonErrors": [
                    "Dividing by the new rate instead of the old."
          ]
},
        },
        {
          id: "ebz10-u9-fx-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "What is an exchange rate, and what does it mean if a currency appreciates?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Exchange rate",
                              "statement": "Price of one currency in terms of another; appreciation = rise in value."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Exchange rate = price of one currency in another.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Appreciation = the currency's value rises against others.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Example: more dollars/euros per pound.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Price of one currency in another; appreciation = value rises.",
          "commonErrors": [
                    "Appreciation confused with depreciation."
          ]
},
        },
        {
          id: "ebz10-u9-fx-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how a depreciation of the pound affects UK importers and UK consumers.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Depreciation effects",
                              "statement": "Imports become dearer; export prices fall."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Weaker pound means foreign currency buys more pounds — imports cost more.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Importers pay more for foreign goods and materials.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Higher import prices feed through to consumers via prices.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Inflation may rise, reducing consumers' purchasing power.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Imports dearer → higher prices and inflation for consumers.",
          "commonErrors": [
                    "Effects on exporters given instead of importers."
          ]
},
        },
        {
          id: "ebz10-u9-fx-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "The value of the pound falls from €1.15 to €1.05 against the euro.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State whether this is an appreciation or depreciation, and define that term.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain the effect on a UK company that exports to Germany.",
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
                              "name": "Depreciation and exporters",
                              "statement": "Weaker currency makes exports cheaper abroad → more competitive."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Depreciation — the pound's value fell against the euro.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Depreciation = currency buys less foreign currency.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) UK goods become cheaper for German buyers in euro terms.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Export demand and volumes likely rise.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Exporter gains competitiveness — though imported inputs may cost more.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) depreciation (b) exports cheaper → more competitive, higher demand",
          "commonErrors": [
                    "Wrong direction of effect."
          ]
},
        },
        {
          id: "ebz10-u9-fx-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A UK fashion retailer imports most of its clothes and also sells online to customers in the USA.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two factors that influence exchange rates.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Evaluate the impact on this retailer if the pound depreciates.",
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
                              "name": "Exchange-rate impacts",
                              "statement": "Depreciation helps exports but hurts importers' costs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Interest rates / inflation differentials between countries.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Economic growth and demand for the currency.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Speculation and government intervention.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) US sales become cheaper for Americans → online exports rise.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Imported clothing costs more in pounds → margins squeezed.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Net effect depends on balance of export gains vs import cost rises.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) interest rates, growth, speculation (b) exports gain, imports cost more — net effect judged",
          "commonErrors": [
                    "Only one side of impact considered."
          ]
},
        },
        {
          id: "ebz10-u9-fx-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "The pound appreciates against the dollar and the euro over one year.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define exchange rate.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Define appreciation.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain two effects of appreciation on UK exporters.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain two effects of appreciation on UK importers and consumers.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Evaluate whether appreciation is good or bad for the UK economy overall.",
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
                              "name": "Appreciation evaluation",
                              "statement": "Exports suffer, imports cheapen — winners and losers depend on the economy's structure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Price of one currency expressed in another.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) A rise in the value of a currency against others.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Exports become dearer abroad → demand and revenue fall; export jobs at risk.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Imports cheaper → lower prices/inflation; consumers benefit.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "d"
                    },
                    {
                              "reasoning": "(e) Balanced judgement — depends on export vs import share of the economy.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "e"
                    }
          ],
          "finalAnswer": "Definitions given; exporters lose, importers/consumers gain; justified overall judgement.",
          "commonErrors": [
                    "Effects reversed.",
                    "No overall judgement."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebz10-u9-92-notes",
      title: "Trade and exchange rates — notes",
      summary: "Free trade lowers prices; protectionism (tariffs, quotas, subsidies, embargoes) shields domestic firms at consumer cost. Exchange-rate moves shift export/import competitiveness.",
      sections: [
        { heading: "Free trade vs protectionism", body: "Free trade → specialisation, lower prices, more choice. Protectionism → protects jobs/infant industries but raises prices and risks retaliation." },
        { heading: "Protectionist tools", body: "Tariffs (tax), quotas (quantity cap), subsidies (support), embargoes (ban), red tape (barriers)." },
        { heading: "Exchange rates", body: "Appreciation: exports dearer, imports cheaper. Depreciation: exports cheaper, imports dearen. % change = (new − old) ÷ old × 100." },
      ],
    },
  ],
};
