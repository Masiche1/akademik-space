import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "ecn10-u4-lesson-4-1",
  code: "4-1",
  title: "Exchange Rates",
  goal: "I CAN explain how exchange rates are determined and the effects of exchange rate changes.",
  standards: ["Edexcel IGCSE Economics 4EC1 — The Global Economy: exchange rates"],
  
  vocabulary: [
    { term: "Exchange rate", definition: "The price of one currency expressed in terms of another currency." },
    { term: "Appreciation", definition: "A rise in the value of a currency against other currencies." },
    { term: "Depreciation", definition: "A fall in the value of a currency against other currencies." },
    { term: "Floating exchange rate", definition: "A rate determined by demand and supply in foreign exchange markets." },
    { term: "Foreign exchange market", definition: "The market where currencies are bought and sold." },
  ],
  concepts: [
    {
      id: "ecn10-u4-fxr",
      title: "How Exchange Rates Are Determined",
      skill: "Explain the demand and supply forces that set a floating exchange rate.",
      lesson: {
        sections: [
          {
            heading: "What an exchange rate is",
            body: "An **exchange rate** is the price of one currency in terms of another, e.g. £1 = $1.50. It is quoted as the domestic currency per unit of foreign currency (or vice versa — always check the quote). Exchange rates are mainly determined in the **foreign exchange market** by the demand for and supply of each currency.",
          },
          {
            heading: "Demand and supply for a currency",
            body: "**Demand** for a currency rises when foreigners want to buy the country's exports, invest in its assets, or send money home — they must buy its currency to do so. **Supply** of a currency rises when domestic residents buy imports, invest abroad, or send money overseas — they sell their currency to get foreign currency. Higher demand or lower supply makes the currency **appreciate**; lower demand or higher supply makes it **depreciate**.",
          },
          {
            heading: "Factors that shift demand and supply",
            body: "**Appreciation pressures**: rising export demand, higher interest rates attracting capital inflows, strong economic growth, speculation that the currency will rise. **Depreciation pressures**: rising import demand, lower interest rates, trade deficits, inflation eroding competitiveness, speculation that the currency will fall.",
          },
        ],
        keyFormulas: [
          { name: "Exchange rate quote", statement: "Domestic currency per 1 unit of foreign currency" },
          { name: "Appreciation", statement: "Demand for currency rises or supply falls → currency value rises" },
          { name: "Depreciation", statement: "Demand for currency falls or supply rises → currency value falls" },
        ],
        workedExample: {
          problem: "Interest rates in Country A rise above those in Country B. What happens to A's exchange rate and why?",
          solution: "Capital flows into A to earn higher returns → demand for A's currency rises → A's currency appreciates.",
        },
      },
      questions: [
        {
          id: "ecn10-u4-fxr-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an exchange rate?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The total value of a country's exports"
                    },
                    {
                              "id": "b",
                              "text": "The price of one currency in terms of another currency"
                    },
                    {
                              "id": "c",
                              "text": "A tax on foreign goods"
                    },
                    {
                              "id": "d",
                              "text": "The interest rate set by the central bank"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Exchange rate",
                              "statement": "Price of one currency in terms of another."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Exchange rate = relative price of currencies.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Price of one currency in terms of another",
          "commonErrors": [
                    "Confused with interest rate or trade balance."
          ]
},
        },
        {
          id: "ecn10-u4-fxr-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give three factors that increase demand for a country's currency.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Currency demand",
                              "statement": "Demand rises when foreigners buy exports, invest, or receive income."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rising demand for the country's exports.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Foreign investment inflows into the country's assets.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Higher interest rates attracting capital inflows.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Export demand, investment inflows, higher interest rates.",
          "commonErrors": [
                    "Listing supply factors instead of demand."
          ]
},
        },
        {
          id: "ecn10-u4-fxr-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how a floating exchange rate is determined in the foreign exchange market.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Floating rate",
                              "statement": "Set by demand and supply of the currency."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Currencies are bought and sold in the foreign exchange market.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Demand comes from exports, investment and income flows into the country.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Supply comes from imports and investment abroad.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The rate settles where demand equals supply — no intervention needed.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Demand and supply of the currency set the rate where they are equal.",
          "commonErrors": [
                    "Saying the government sets it — that is a fixed rate."
          ]
},
        },
        {
          id: "ecn10-u4-fxr-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A country's currency has depreciated by 10% against the US dollar.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define depreciation of a currency.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Give two reasons why the currency might depreciate.",
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
                              "name": "Depreciation",
                              "statement": "Fall in a currency's value against others."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Depreciation = fall in the value of a currency against other currencies.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) E.g. £1 falls from $1.50 to $1.35.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Rising import demand increases supply of the currency.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Lower interest rates cause capital outflows.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Trade deficits or speculative selling also cause depreciation.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) currency value falls (b) imports, low interest rates, deficits, speculation",
          "commonErrors": [
                    "Confusing depreciation with devaluation (a deliberate policy)."
          ]
},
        },
        {
          id: "ecn10-u4-fxr-q5",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Speculators expect the pound to fall against the dollar.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain how speculation affects the exchange rate.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain how this could become a self-fulfilling expectation.",
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
                              "name": "Speculation",
                              "statement": "Expected currency movements change demand and supply today."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Speculators sell pounds now expecting to buy them back cheaper later.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Increased supply of pounds lowers the exchange rate immediately.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Other traders follow the selling, amplifying the fall.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) The actual fall makes the expectation come true.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) More sellers join, pushing the rate down further.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Confidence effects can then feed into the real economy.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) selling pounds now → rate falls (b) fall validates the expectation → more selling",
          "commonErrors": [
                    "Ignoring that expectations themselves move the rate."
          ]
},
        },
        {
          id: "ecn10-u4-fxr-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "An economy has rising export demand and rising inflation at the same time.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain the effect of rising export demand on the exchange rate.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain the effect of high inflation on the exchange rate.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate which force is likely to dominate and why.",
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
                              "name": "Exchange rate determinants",
                              "statement": "Exports raise demand for currency; inflation lowers competitiveness."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Foreigners need the domestic currency to buy exports.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Demand for the currency rises → appreciation pressure.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Higher exchange rate makes exports more expensive abroad.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) High inflation makes exports less competitive → export demand falls.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Imports become relatively cheaper → more currency supplied.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Both forces push the currency down → depreciation pressure.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Depends on relative strength; often inflation dominates in the long run.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Interest rates and speculation can also intervene.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) appreciation pressure (b) depreciation pressure (c) judgement — inflation often dominates long run",
          "commonErrors": [
                    "Assuming one force always wins without evaluation."
          ]
},
        },
      ],
    },
    {
      id: "ecn10-u4-fxre",
      title: "Effects of Exchange Rate Changes",
      skill: "Analyse how appreciation and depreciation affect trade, prices, growth and employment.",
      lesson: {
        sections: [
          {
            heading: "Effects of depreciation",
            body: "When a currency **depreciates**, exports become cheaper abroad → export volumes rise; imports become more expensive → import volumes fall. Effects: **improved trade balance** (if demand is price-sensitive), **lower unemployment** in export sectors, **higher growth**. Costs: **imported inflation** (cost-push), higher prices for consumers, possible retaliation.",
          },
          {
            heading: "Effects of appreciation",
            body: "When a currency **appreciates**, exports become more expensive → export volumes fall; imports become cheaper → import volumes rise. Effects: **worse trade balance**, **higher unemployment** in export industries, **lower inflation** (cheaper imports). Benefits: cheaper imports raise living standards, stronger currency attracts investment.",
          },
          {
            heading: "Winners and losers",
            body: "**Depreciation winners**: exporters, domestic producers competing with imports, the tourism industry. **Depreciation losers**: importers, consumers of imported goods, firms needing imported inputs, holders of foreign debt. **Appreciation** reverses these groups. The overall effect depends on the size of the change and price elasticity of demand.",
          },
        ],
        keyFormulas: [
          { name: "Depreciation", statement: "Exports cheaper abroad, imports dearer at home" },
          { name: "Appreciation", statement: "Exports dearer abroad, imports cheaper at home" },
        ],
        workedExample: {
          problem: "The pound depreciates from $1.50 to $1.20 per £1. What happens to a UK exporter charging £100 and a UK importer buying goods priced at $150?",
          solution: "Exporter: foreign buyer now pays $120 instead of $150 — exports cheaper and more competitive. Importer: the $150 goods now cost £125 instead of £100 — imports dearer.",
        },
      },
      questions: [
        {
          id: "ecn10-u4-fxre-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What happens to a country's export prices (in foreign currency) when its currency depreciates?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "They rise"
                    },
                    {
                              "id": "b",
                              "text": "They fall"
                    },
                    {
                              "id": "c",
                              "text": "They stay the same"
                    },
                    {
                              "id": "d",
                              "text": "They become zero"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Depreciation",
                              "statement": "Exports become cheaper abroad."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Depreciation lowers the foreign-currency price of exports.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** They fall",
          "commonErrors": [
                    "Reversing the effect."
          ]
},
        },
        {
          id: "ecn10-u4-fxre-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Explain how currency depreciation can cause inflation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Imported inflation",
                              "statement": "Depreciation raises import prices."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Imports become more expensive in domestic currency.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Firms pass higher import costs on to consumers.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Also domestic producers face less import competition and may raise prices.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Dearer imports → higher costs → higher prices = imported inflation.",
          "commonErrors": [
                    "Saying depreciation always lowers inflation."
          ]
},
        },
        {
          id: "ecn10-u4-fxre-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how depreciation can reduce unemployment.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Competitiveness",
                              "statement": "Cheaper exports raise demand for domestic output."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Depreciation makes exports cheaper for foreign buyers.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Export demand rises → firms expand output.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Expanding firms hire more workers.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Import-competing domestic firms also gain protection from cheaper rivals.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Cheaper exports → more demand → more output → more jobs.",
          "commonErrors": [
                    "Ignoring the demand mechanism."
          ]
},
        },
        {
          id: "ecn10-u4-fxre-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "The pound has depreciated by 15%.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify two groups that gain from depreciation.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Identify two groups that lose from depreciation.",
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
                              "name": "Winners and losers",
                              "statement": "Depreciation helps sellers of exports, hurts buyers of imports."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Exporters gain — foreign buyers pay less in their currency.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Tourism and domestic import-competing firms also gain.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Importers and consumers of imported goods face higher prices.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Firms needing imported raw materials face higher costs.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) exporters, tourism (b) importers, consumers of imports",
          "commonErrors": [
                    "Listing only one side of the effect."
          ]
},
        },
        {
          id: "ecn10-u4-fxre-q5",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "An economy with a persistent trade deficit decides to let its currency depreciate.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two ways depreciation could reduce the trade deficit.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain one reason the deficit might not improve.",
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
                              "name": "Trade balance",
                              "statement": "Cheaper exports and dearer imports improve the balance if demand is responsive."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Exports become cheaper abroad → export volumes rise.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Imports become dearer at home → import volumes fall.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) If PED for imports is low (necessities), import spending may not fall.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Foreign retaliation or inelastic export demand can offset gains.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) exports up, imports down (b) low price sensitivity can prevent improvement",
          "commonErrors": [
                    "Assuming depreciation always fixes the deficit."
          ]
},
        },
        {
          id: "ecn10-u4-fxre-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "The yen depreciates sharply against the dollar over one year.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain the likely effect on Japanese exporters.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain the likely effect on Japanese consumers and firms importing goods.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate the overall impact on the Japanese economy.",
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
                              "name": "Exchange rate effects",
                              "statement": "Depreciation boosts exports, raises import prices."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Japanese goods become cheaper for US buyers in dollar terms.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Export volumes and revenue rise → output and jobs expand.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Imported goods become dearer in yen → consumer prices rise.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Firms importing components face higher costs.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Likely positive for growth and employment via exports.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) But imported inflation may force tighter monetary policy — a judgement is needed.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) exports up (b) import prices up (c) growth positive, inflation risk — overall depends on magnitude",
          "commonErrors": [
                    "No evaluation; one-sided answer."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecn10-u4-fxr-notes",
      title: "Exchange rates — notes",
      summary: "Exchange rate = price of a currency; demand/supply determine floating rates; depreciation boosts exports but raises import prices.",
      sections: [
        { heading: "Key idea", body: "Demand for a currency comes from exports, investment and income flows; supply comes from imports and outward investment." },
        { heading: "Depreciation", body: "Exports cheaper, imports dearer: helps trade balance, growth and jobs; risks imported inflation." },
        { heading: "Appreciation", body: "Exports dearer, imports cheaper: hurts exporters and jobs; helps inflation and living standards." },
      ],
    },
  ],
};
