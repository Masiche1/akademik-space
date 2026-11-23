import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "ecn10-u4-lesson-4-3",
  code: "4-3",
  title: "Exchange Rate Policy and Competitiveness",
  goal: "I CAN compare exchange rate systems and evaluate how exchange rates affect competitiveness.",
  standards: ["Edexcel IGCSE Economics 4EC1 — The Global Economy: exchange rate policy"],
  
  vocabulary: [
    { term: "Fixed exchange rate", definition: "A rate maintained by the central bank at a set level." },
    { term: "Managed float", definition: "A floating rate where the central bank intervenes occasionally." },
    { term: "Devaluation", definition: "A deliberate reduction in the value of a fixed exchange rate." },
    { term: "Revaluation", definition: "A deliberate increase in the value of a fixed exchange rate." },
    { term: "Price competitiveness", definition: "Competing through lower prices." },
    { term: "Non-price competitiveness", definition: "Competing through quality, design, service or branding." },
  ],
  concepts: [
    {
      id: "ecn10-u4-fxsys",
      title: "Exchange Rate Systems and Policy",
      skill: "Compare fixed, floating and managed exchange rate systems and their policy tools.",
      lesson: {
        sections: [
          {
            heading: "Exchange rate systems",
            body: "**Floating**: rate set by market demand and supply — automatic adjustment, no intervention needed, but can be volatile. **Fixed**: central bank commits to a set rate, buying or selling currency reserves to hold it — certainty for traders, but reserves can run out. **Managed float (dirty float)**: floating rate with occasional central bank intervention to steer it.",
          },
          {
            heading: "Devaluation and revaluation",
            body: "Under a **fixed** system, the central bank may **devalue** (lower the rate) to boost exports and cut imports — costs: imported inflation, loss of confidence. **Revaluation** (raise the rate) does the opposite — helps control inflation, hurts exporters. Under a float, a fall is called **depreciation** — the market does it, not the government.",
          },
          {
            heading: "Policy trade-offs",
            body: "Floating rates give automatic adjustment to trade imbalances but expose the economy to speculation and volatility. Fixed rates give stability and discipline on inflation but require large reserves and may need periodic painful devaluations. Most modern economies use some form of **managed float**.",
          },
        ],
        keyFormulas: [
          { name: "Devaluation", statement: "Deliberate cut in a fixed rate → cheaper exports, dearer imports" },
          { name: "Revaluation", statement: "Deliberate rise in a fixed rate → dearer exports, cheaper imports" },
          { name: "Managed float", statement: "Market rate with occasional central bank intervention" },
        ],
        workedExample: {
          problem: "A country on a fixed exchange rate wants to reduce its trade deficit. What can it do and what is the main cost?",
          solution: "Devalue the currency — exports become cheaper and imports dearer. Cost: imported inflation and possible loss of confidence.",
        },
      },
      questions: [
        {
          id: "ecn10-u4-fxsys-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a fixed exchange rate?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A rate set by supply and demand"
                    },
                    {
                              "id": "b",
                              "text": "A rate maintained by the central bank at a set level"
                    },
                    {
                              "id": "c",
                              "text": "A rate that changes every day"
                    },
                    {
                              "id": "d",
                              "text": "A tax on currency exchange"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Fixed rate",
                              "statement": "Central bank holds the rate at a set level."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fixed = government/central bank commitment.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Maintained by the central bank",
          "commonErrors": [
                    "Confusing with floating."
          ]
},
        },
        {
          id: "ecn10-u4-fxsys-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Distinguish between depreciation and devaluation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Depreciation vs devaluation",
                              "statement": "Depreciation = market fall; devaluation = deliberate cut in fixed rate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Depreciation happens under a floating rate via market forces.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Devaluation is a deliberate policy under a fixed rate.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Both lower the currency's value and have similar effects on trade.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Depreciation = market; devaluation = policy choice.",
          "commonErrors": [
                    "Using the terms interchangeably."
          ]
},
        },
        {
          id: "ecn10-u4-fxsys-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two advantages of a floating exchange rate system.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Floating rates",
                              "statement": "Automatic adjustment without reserve use."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The rate adjusts automatically to trade imbalances.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "No need to hold large foreign currency reserves.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Monetary policy is free — no need to defend a rate.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The market sets the rate, reducing political interference.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Automatic adjustment, no reserve burden, free monetary policy.",
          "commonErrors": [
                    "Listing disadvantages instead."
          ]
},
        },
        {
          id: "ecn10-u4-fxsys-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A country operates a fixed exchange rate and runs out of foreign currency reserves.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why reserves are needed to maintain a fixed rate.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain what the country must do if reserves run out.",
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
                              "name": "Fixed rate defence",
                              "statement": "Reserves are used to buy the currency when it weakens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) When the currency weakens, the central bank buys it using reserves.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) This supports demand and holds the rate at the fixed level.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) It must devalue — let the rate fall to a new fixed level.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Or abandon the fixed rate and float the currency.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) reserves buy the currency to defend the rate (b) devalue or float",
          "commonErrors": [
                    "Saying reserves are irrelevant to fixed rates."
          ]
},
        },
        {
          id: "ecn10-u4-fxsys-q5",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Two countries, P and Q, have identical economies but P has a fixed rate and Q floats.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain how each country's exchange rate would respond to a fall in export demand.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Evaluate which system gives more stability for exporters.",
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
                              "name": "Rate systems",
                              "statement": "Fixed rates resist change until reserves fail; floats adjust continuously."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) P's central bank uses reserves to defend the fixed rate — delayed adjustment.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Eventually P may be forced to devalue sharply.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Q's rate depreciates smoothly via market forces — no defence needed.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Fixed gives short-term certainty but risks a sudden devaluation.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Floating is volatile but avoids the risk of abrupt collapse — judgement needed.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) P defends then devalues; Q adjusts smoothly (b) fixed = certainty then risk; float = volatility",
          "commonErrors": [
                    "Ignoring the risk of a forced devaluation."
          ]
},
        },
        {
          id: "ecn10-u4-fxsys-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Country R, with a fixed exchange rate, faces a large trade deficit and falling reserves.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two policies R could use to defend the fixed rate.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain two costs of defending the rate.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate whether R should devalue the currency.",
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
                              "name": "Rate defence",
                              "statement": "Reserves, interest rates and capital controls can defend a fixed rate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Sell foreign currency reserves to buy domestic currency.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Raise interest rates to attract capital inflows.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Reserves are finite — defence may only delay the fall.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) High interest rates slow growth and raise unemployment.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Devaluation could restore competitiveness and save reserves.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) But it causes imported inflation and may hurt confidence — judgement needed.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) reserves, interest rates (b) finite reserves, slower growth (c) devalue if fundamentals weak — evaluate",
          "commonErrors": [
                    "No evaluation of the trade-off."
          ]
},
        },
      ],
    },
    {
      id: "ecn10-u4-comp",
      title: "Exchange Rates and Competitiveness",
      skill: "Evaluate how exchange rates affect price and non-price competitiveness.",
      lesson: {
        sections: [
          {
            heading: "Price vs non-price competitiveness",
            body: "**Price competitiveness** = ability to compete on low prices — driven by low costs, exchange rates and productivity. **Non-price competitiveness** = quality, design, reliability, branding, after-sales service — lets firms charge premium prices. A strong currency hurts price competitiveness but may reflect non-price strength.",
          },
          {
            heading: "Exchange rates and competitiveness",
            body: "A **weaker currency** makes exports cheaper → boosts price competitiveness but raises import costs. A **stronger currency** does the reverse. However, non-price factors can outweigh price: German cars remain competitive despite a strong euro because of quality and brand.",
          },
          {
            heading: "Policy links",
            body: "Governments cannot sustainably rely on a weak currency — it causes imported inflation and may not fix underlying inefficiency. **Supply-side policies** (education, infrastructure, innovation) build **non-price competitiveness** — a more durable advantage. Exchange rate policy is one tool among many.",
          },
        ],
        keyFormulas: [
          { name: "Price competitiveness", statement: "Low prices via low costs, weak currency, high productivity" },
          { name: "Non-price competitiveness", statement: "Quality, design, service, brand — sustainable advantage" },
        ],
        workedExample: {
          problem: "Country S has a weak currency but poor product quality. Will depreciation alone make it competitive?",
          solution: "Only partly — cheaper prices help, but low quality limits demand; supply-side improvement is needed for lasting competitiveness.",
        },
      },
      questions: [
        {
          id: "ecn10-u4-comp-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is non-price competitiveness?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Competing only on low prices"
                    },
                    {
                              "id": "b",
                              "text": "Competing through quality, design, service or branding"
                    },
                    {
                              "id": "c",
                              "text": "Setting prices below cost"
                    },
                    {
                              "id": "d",
                              "text": "Competing on exchange rates"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Non-price competitiveness",
                              "statement": "Quality, design, service, brand."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Non-price = competing on factors other than price.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Quality, design, service or branding",
          "commonErrors": [
                    "Confusing with price competitiveness."
          ]
},
        },
        {
          id: "ecn10-u4-comp-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Explain two ways a weaker currency can improve a country's competitiveness.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Weak currency",
                              "statement": "Exports cheaper abroad → more competitive."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Exports become cheaper for foreign buyers → higher demand.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Imports become dearer → domestic firms gain protection.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Tourism and services also become cheaper for foreigners.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Cheaper exports, protected domestic market, cheaper tourism.",
          "commonErrors": [
                    "Claiming a weaker currency always helps competitiveness."
          ]
},
        },
        {
          id: "ecn10-u4-comp-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why non-price competitiveness may be more sustainable than price competitiveness.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Sustainable competitiveness",
                              "statement": "Quality advantages are harder to copy than low prices."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Low prices can be matched by rivals cutting costs too.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Price advantages erode as wages and exchange rates change.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Quality and brand build customer loyalty over time.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Non-price advantages usually mean higher profit margins.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Non-price advantages are harder to replicate and more profitable long term.",
          "commonErrors": [
                    "Assuming price always wins."
          ]
},
        },
        {
          id: "ecn10-u4-comp-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Country T's currency has appreciated by 20% over two years.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain the effect on T's price competitiveness.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain how non-price competitiveness could reduce the damage.",
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
                              "name": "Appreciation",
                              "statement": "Strong currency raises export prices."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Exports become 20% more expensive for foreign buyers.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Export demand falls unless quality offsets the price rise.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Superior quality, design or service can justify higher prices.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Brand loyalty keeps customers despite dearer prices.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) exports dearer, demand falls (b) quality/brand can offset",
          "commonErrors": [
                    "Ignoring non-price factors."
          ]
},
        },
        {
          id: "ecn10-u4-comp-q5",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Two firms compete in the same export market: Firm A has low prices, Firm B has high quality.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain the price competitiveness of each firm.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain which firm is likely to be more resilient to a currency appreciation.",
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
                              "name": "Price vs non-price",
                              "statement": "A competes on price; B competes on quality."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) A's low prices attract price-sensitive customers.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) B's quality attracts customers willing to pay more.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) B is more resilient — quality justifies higher prices after appreciation.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) A's thin margins cannot absorb the higher foreign price.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) A price-led, B quality-led (b) B — quality buffers currency shocks",
          "commonErrors": [
                    "Assuming low prices always win."
          ]
},
        },
        {
          id: "ecn10-u4-comp-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A developing country wants to improve its export competitiveness.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two price-based ways to improve competitiveness.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain two non-price ways to improve competitiveness.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate which approach is likely to be more successful long term.",
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
                              "name": "Competitiveness policy",
                              "statement": "Price and non-price strategies both matter; non-price is more durable."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Depreciation or lower production costs reduce export prices.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Productivity gains lower unit labour costs.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Investment in education and training raises product quality.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Innovation, design and branding build customer loyalty.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Reliable infrastructure and service standards help too.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Non-price advantage is more sustainable but takes longer to build.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Price strategies give quick wins — best combined over time.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) depreciation, cost cuts (b) quality, innovation, infrastructure (c) non-price more durable; combine both",
          "commonErrors": [
                    "No evaluation or one-sided strategy."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecn10-u4-fxsys-notes",
      title: "Exchange rate policy — notes",
      summary: "Fixed vs floating vs managed rates; devaluation vs depreciation; price vs non-price competitiveness.",
      sections: [
        { heading: "Key idea", body: "Fixed rates need reserves and risk devaluation; floats adjust automatically but are volatile." },
        { heading: "Devaluation", body: "Deliberate cut in a fixed rate — cheaper exports but imported inflation." },
        { heading: "Competitiveness", body: "Price advantages are fragile; quality and innovation give durable advantage." },
      ],
    },
  ],
};
