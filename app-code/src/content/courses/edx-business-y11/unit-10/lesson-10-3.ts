import type { Lesson } from "../../../types.ts";

export const lesson103: Lesson = {
  id: "ebz11-u10-lesson-10-3",
  code: "10-3",
  title: "International Trade",
  goal: "I CAN explain exports, imports, exchange rates and trade barriers, and evaluate their effects on businesses.",
  standards: ["Edexcel IGCSE Business 4BS0 — External influences on business", "4BS0: international trade and exchange rates"],
  
  vocabulary: [
    { term: "Export", definition: "Goods or services sold to buyers in another country." },
    { term: "Import", definition: "Goods or services bought from another country." },
    { term: "Exchange rate", definition: "The price of one currency in terms of another." },
    { term: "Appreciation", definition: "A rise in a currency's value against other currencies." },
    { term: "Depreciation", definition: "A fall in a currency's value against other currencies." },
    { term: "Tariff", definition: "A tax on imported goods." },
    { term: "Quota", definition: "A limit on the quantity of a good that can be imported." },
    { term: "Trade bloc", definition: "Group of countries that agree to reduce or remove trade barriers between them." },
  ],
  concepts: [
    {
      id: "ebz11-u10-exchange",
      title: "Exports, Imports and Exchange Rates",
      skill: "Explain how exchange rate changes affect exporters and importers.",
      lesson: {
        sections: [
          {
            heading: "Trade flows",
            body: "**Exports** earn foreign currency for the home economy; **imports** spend it. A business that sells abroad is an exporter; one buying foreign inputs or goods is an importer. Trade can be affected by trade agreements, transport costs, tariffs and consumer tastes.",
          },
          {
            heading: "Exchange rates",
            body: "An **exchange rate** is the price of one currency in another (e.g. £1 = USD 1.50).\n\n**Depreciation** (currency falls, e.g. £1 = USD 1.20): exports become cheaper abroad → exports rise; imports become more expensive → imports fall. **Appreciation** (currency rises, e.g. £1 = USD 1.80): exports become pricier → exports may fall; imports cheaper → imports may rise.\n\n**Example**: a UK exporter selling a £100 product earns USD 150 at £1=USD 1.50. If sterling appreciates to £1=USD 1.80, the same product earns USD 180 — but a US rival's price may now look cheaper, so competitiveness can fall.",
          },
        ],
        keyFormulas: [
          { name: "Exchange rate effect", statement: "Depreciation ↑ exports, ↓ imports; appreciation ↓ exports, ↑ imports." },
        ],
        workedExample: {
          problem: "A UK importer buys components priced at USD 60 each. Calculate the sterling cost when £1 = USD 1.50 and when £1 = USD 2.00.",
          solution: "At USD 1.50: USD 60 ÷ 1.50 = £40. At USD 2.00: USD 60 ÷ 2.00 = £30 — depreciation of sterling raised the cost from £30 to £40.",
        },
      },
      questions: [
        {
          id: "ebz11-u10-exchange-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an exchange rate?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A tax on imported goods"
                    },
                    {
                              "id": "b",
                              "text": "The price of one currency in terms of another"
                    },
                    {
                              "id": "c",
                              "text": "The total value of exports"
                    },
                    {
                              "id": "d",
                              "text": "A limit on imports"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Exchange rate",
                              "statement": "Price of one currency expressed in another."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Exchange rate = relative price of currencies.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Price of one currency in another",
          "commonErrors": [
                    "Confusing with tariffs/quotas."
          ]
},
        },
        {
          id: "ebz11-u10-exchange-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "A UK importer buys goods priced at USD 90 each. The exchange rate is £1 = USD 1.50. What is the cost in pounds?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Cost (£)",
                              "answer": 60
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Currency conversion",
                              "statement": "USD 90 ÷ 1.50 = £60."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Divide dollars by the rate: 90 ÷ 1.5 = 60.",
                              "marks": 3,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "£60",
          "commonErrors": [
                    "Multiplied instead of divided."
          ]
},
        },
        {
          id: "ebz11-u10-exchange-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the effect of a depreciation of sterling on UK exporters and importers.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Exchange rate effects",
                              "statement": "Depreciation makes exports cheaper abroad and imports dearer at home."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Exports cheaper for foreign buyers → exports likely rise.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Imports more expensive in sterling → imports likely fall.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Exports ↑, imports ↓ after depreciation.",
          "commonErrors": [
                    "Reversing the effects."
          ]
},
        },
        {
          id: "ebz11-u10-exchange-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A UK exporter sells bikes for £500 each to customers in the eurozone.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain what happens to its competitiveness if sterling depreciates.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain one drawback if sterling appreciates instead.",
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
                              "name": "Exchange rate and competitiveness",
                              "statement": "Weaker currency = cheaper exports; stronger = dearer exports."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Depreciation makes £500 cheaper in euros → exports more competitive, demand rises.",
                              "marks": 4,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Appreciation makes bikes dearer in euros → demand may fall.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "Depreciation helps exports; appreciation hurts them.",
          "commonErrors": [
                    "Confusing exporter and importer effects."
          ]
},
        },
        {
          id: "ebz11-u10-exchange-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A UK supermarket imports 40% of its fresh produce. Analyse the impact on it if sterling depreciates sharply.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Importer exposure",
                              "statement": "Depreciation raises import costs — prices up or margins squeezed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Imported produce becomes more expensive in sterling → costs rise.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Supermarket must raise prices (risk losing customers) or accept lower margins.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Could switch to more UK suppliers — but availability/price may be worse.",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Higher import costs → price rises or margin squeeze; may switch suppliers.",
          "commonErrors": [
                    "Only stating 'costs rise' with no consequence."
          ]
},
        },
        {
          id: "ebz11-u10-exchange-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A UK car manufacturer exports to the USA and imports steel priced in dollars.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define export and import and identify which activity is which for this firm.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain the effect on the firm if sterling depreciates against both the dollar and the euro.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Evaluate the overall impact on the firm's profits.",
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
                              "name": "Mixed trade exposure",
                              "statement": "Depreciation helps exports but hurts import-dependent costs — net effect needs judgement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Export = sold abroad (cars to USA); import = bought abroad (dollar-priced steel).",
                              "marks": 4,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Exports cheaper abroad → car sales/competitiveness may rise.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Imported steel costs more in sterling → production costs rise.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Net effect depends on whether export gains outweigh cost rises — justified judgement.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Depreciation boosts exports but raises import costs — net profit effect depends on balance.",
          "commonErrors": [
                    "Ignoring one side of the trade in (b).",
                    "No judgement in (c)."
          ]
},
        },
      ],
    },
    {
      id: "ebz11-u10-barriers",
      title: "Trade Barriers and Trade Blocs",
      skill: "Explain tariffs, quotas and embargoes and evaluate the effects of trade blocs on businesses.",
      lesson: {
        sections: [
          {
            heading: "Types of trade barrier",
            body: "**Tariff**: a tax on imports — raises the price of foreign goods, protecting domestic producers but raising prices for consumers. **Quota**: a physical limit on import volumes — same protective aim. **Embargo**: a total ban on trade with a country, usually for political reasons. **Non-tariff barriers**: rules, standards and red tape that make importing harder.\n\nGovernments use barriers to protect domestic jobs and industries, raise revenue, or respond to unfair practices or political disputes.",
          },
          {
            heading: "Trade blocs",
            body: "A **trade bloc** is a group of countries agreeing to reduce or remove barriers between members — e.g. the EU single market, USMCA (US-Mexico-Canada), ASEAN. **Benefits for member businesses**: free movement of goods, services, capital and often labour; bigger markets; economies of scale; lower prices via competition. **Drawbacks**: common external tariffs on non-members; rules may not suit every member; dependence on bloc decisions. Businesses outside blocs face tariffs and quotas when selling in.",
          },
        ],
        keyFormulas: [

        ],
        workedExample: {
          problem: "Country X imposes a 20% tariff on imported cars. A foreign car costs USD 20,000 before duty. What is the duty and the new price?",
          solution: "Duty = 20% × USD 20,000 = USD 4,000. New price = USD 24,000 — less competitive against domestic cars.",
        },
      },
      questions: [
        {
          id: "ebz11-u10-barriers-q1",
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
                              "text": "A total ban on trade"
                    },
                    {
                              "id": "d",
                              "text": "A free-trade agreement"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Tariff",
                              "statement": "Tax on imports that raises their price."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tariff = tax on imports.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** A tax on imported goods",
          "commonErrors": [
                    "Confusing tariff with quota."
          ]
},
        },
        {
          id: "ebz11-u10-barriers-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Define a quota and give one reason governments use trade barriers.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Quota",
                              "statement": "Limit on quantity of imports."
                    },
                    {
                              "kind": "context",
                              "name": "Barriers rationale",
                              "statement": "Protect domestic jobs/industries."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Quota = limit on the volume of a good that can be imported.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Reason: protect domestic industries/jobs or raise revenue.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Quantity limit; used to protect domestic industry.",
          "commonErrors": [
                    "Defining quota as a tax."
          ]
},
        },
        {
          id: "ebz11-u10-barriers-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two ways a tariff affects an exporting business selling into the taxing country.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Tariff effects",
                              "statement": "Import price rises — exporter must absorb cost or lose sales."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Foreign price rises by the tariff amount → product less competitive vs domestic rivals.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Exporter must cut its own price/margin, find tariff-free routes, or lose customers.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Higher landed price → lower competitiveness; must cut margin or lose sales.",
          "commonErrors": [
                    "Thinking tariff only affects the importing government."
          ]
},
        },
        {
          id: "ebz11-u10-barriers-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A UK fashion brand wants to sell in two markets: Country A (EU member) and Country B (non-member with 15% tariff on clothing).",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain the advantage of selling in Country A.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain the disadvantage of selling in Country B.",
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
                              "name": "Trade bloc vs tariff",
                              "statement": "Bloc membership removes internal barriers; non-members face tariffs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) EU single market: no tariffs on UK goods, free movement, huge customer base.",
                              "marks": 4,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) 15% tariff raises prices → less competitive unless brand absorbs cost.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "A = free trade access; B = 15% tariff reduces competitiveness.",
          "commonErrors": [
                    "Not linking the tariff to price/competitiveness."
          ]
},
        },
        {
          id: "ebz11-u10-barriers-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the use of tariffs by a government to protect its domestic car industry.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Tariff evaluation",
                              "statement": "Protects jobs/prices but raises consumer costs and invites retaliation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pros: protects domestic jobs and firms; keeps money in the economy; may build an infant industry.",
                              "marks": 3,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Cons: consumers pay higher prices; less competition reduces efficiency; trading partners may retaliate.",
                              "marks": 3,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Protects jobs but raises prices and risks retaliation — balanced judgement needed.",
          "commonErrors": [
                    "One-sided evaluation."
          ]
},
        },
        {
          id: "ebz11-u10-barriers-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Two countries sign a trade agreement removing tariffs between them. Country C is not a member.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define trade bloc and tariff and explain how they differ.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain two benefits member businesses gain from the agreement.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Evaluate the impact on an exporter in Country C selling to the bloc.",
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
                              "name": "Trade bloc effects",
                              "statement": "Members trade freely internally; outsiders face barriers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Trade bloc = group removing barriers internally; tariff = tax on imports.",
                              "marks": 4,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) No tariffs between members → cheaper cross-border sales and bigger market.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Easier access to partner inputs/suppliers and economies of scale.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Country C exporter faces tariffs/quotas at bloc border → less competitive; may need local production or price cuts.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Bloc = free internal trade; members gain access, outsiders face barriers.",
          "commonErrors": [
                    "Ignoring Country C in (c)."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebz11-u10-trade-notes",
      title: "International trade — notes",
      summary: "Exchange rates swing trade flows: depreciation helps exporters, hurts importers. Tariffs, quotas and embargoes protect domestic industry; trade blocs remove barriers internally.",
      sections: [
        { heading: "Key idea", body: "Depreciation ↑ exports and ↓ imports; appreciation does the reverse." },
        { heading: "Barriers", body: "Tariff = tax, quota = quantity limit, embargo = ban; used to protect domestic industry." },
        { heading: "Trade blocs", body: "Members trade freely internally; non-members face tariffs and quotas." },
      ],
    },
  ],
};
