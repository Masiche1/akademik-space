import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "ecn10-u4-lesson-4-2",
  code: "4-2",
  title: "The Balance of Payments",
  goal: "I CAN explain the components of the balance of payments and analyse deficits and surpluses.",
  standards: ["Edexcel IGCSE Economics 4EC1 — The Global Economy: balance of payments"],
  
  vocabulary: [
    { term: "Balance of payments", definition: "A record of all economic transactions between a country and the rest of the world." },
    { term: "Current account", definition: "Record of trade in goods, services, income and transfers." },
    { term: "Trade balance", definition: "Exports of goods minus imports of goods." },
    { term: "Capital account", definition: "Record of transfers of assets such as debt forgiveness and migrants' assets." },
    { term: "Financial account", definition: "Record of investment flows — direct and portfolio investment." },
    { term: "Balance of payments deficit", definition: "When outflows exceed inflows on the current account." },
  ],
  concepts: [
    {
      id: "ecn10-u4-bop",
      title: "Components of the Balance of Payments",
      skill: "Identify and explain the parts of the balance of payments accounts.",
      lesson: {
        sections: [
          {
            heading: "Current account",
            body: "The **current account** records trade in **goods** (visible trade — exports minus imports of physical products), trade in **services** (invisible trade — tourism, banking, insurance), **income** flows (wages, profits, interest earned abroad minus paid abroad), and **current transfers** (foreign aid, remittances, gifts).",
          },
          {
            heading: "Capital and financial accounts",
            body: "The **capital account** records transfers of assets — e.g. debt forgiveness, migrants' assets. The **financial account** records investment flows: **foreign direct investment** (building factories abroad) and **portfolio investment** (buying shares and bonds). Together they record how the current account is financed.",
          },
          {
            heading: "Overall balance",
            body: "The **balance of payments** must balance overall — a **current account deficit** must be financed by a **financial account surplus** (net inflows of investment) or reserve changes. Exam questions usually focus on the **current account balance**: exports minus imports of goods and services, plus income and transfers.",
          },
        ],
        keyFormulas: [
          { name: "Current account", statement: "Trade in goods + services + income + current transfers" },
          { name: "Trade balance", statement: "Visible exports − visible imports" },
          { name: "Overall BOP", statement: "Current account + capital account + financial account = 0 (balanced overall)" },
        ],
        workedExample: {
          problem: "A country exports £500bn of goods, imports £450bn, earns £30bn income from abroad, pays £20bn, and receives £10bn in transfers. What is its current account balance?",
          solution: "Trade balance = 500−450 = +50. Income = 30−20 = +10. Transfers = +10. Current account = +70 (surplus).",
        },
      },
      questions: [
        {
          id: "ecn10-u4-bop-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does the current account of the balance of payments record?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Only trade in goods"
                    },
                    {
                              "id": "b",
                              "text": "Only investment flows"
                    },
                    {
                              "id": "c",
                              "text": "Trade in goods, services, income and transfers"
                    },
                    {
                              "id": "d",
                              "text": "Government spending and taxation"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Current account",
                              "statement": "Goods, services, income and transfers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Current account covers all four components.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(c)** Goods, services, income and transfers",
          "commonErrors": [
                    "Confusing with the financial account."
          ]
},
        },
        {
          id: "ecn10-u4-bop-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Distinguish between visible and invisible trade.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Visible vs invisible trade",
                              "statement": "Goods are visible; services, income and transfers are invisible."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Visible trade = physical goods — cars, food, machinery.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Invisible trade = services — tourism, banking, insurance.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Also includes income and transfer flows.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Visible = goods; invisible = services, income, transfers.",
          "commonErrors": [
                    "Thinking services are visible trade."
          ]
},
        },
        {
          id: "ecn10-u4-bop-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain what the financial account of the balance of payments records.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Financial account",
                              "statement": "Records investment flows between countries."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Records flows of investment assets across borders.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Foreign direct investment — firms building/owning assets abroad.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Portfolio investment — buying shares, bonds, other financial assets.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Inward investment creates a surplus; outward creates a deficit on this account.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Investment flows: FDI and portfolio investment.",
          "commonErrors": [
                    "Confusing with the current account's trade flows."
          ]
},
        },
        {
          id: "ecn10-u4-bop-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A country records a current account deficit of £20bn.",
          parts: [
          {
                    "label": "a",
                    "prompt": "What is a current account deficit?",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "How can this deficit be financed?",
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
                              "name": "Current account deficit",
                              "statement": "Outflows exceed inflows on the current account."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Imports of goods/services/income exceed exports and receipts.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) The country is spending more abroad than it earns.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Borrowing from abroad or selling assets to foreigners.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Inflows on the financial account must match the deficit.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) spending > earnings abroad (b) foreign borrowing or asset sales",
          "commonErrors": [
                    "Saying the deficit must equal zero immediately — it is financed over time."
          ]
},
        },
        {
          id: "ecn10-u4-bop-q5",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A country's exports of services grow strongly while goods imports rise.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain how each flow affects the current account.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain why the overall current account balance might still improve.",
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
                              "name": "Current account",
                              "statement": "All components together determine the balance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Rising service exports increase receipts on the current account.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Rising goods imports increase payments on the current account.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) If service export growth exceeds goods import growth, the balance improves.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Income and transfer flows may also contribute positively.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) services up = receipts up; goods imports up = payments up (b) net effect depends on relative sizes",
          "commonErrors": [
                    "Looking at only one component of the account."
          ]
},
        },
        {
          id: "ecn10-u4-bop-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Country X has a large and persistent current account deficit.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two possible causes of a persistent current account deficit.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain two possible consequences of the deficit.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate whether the deficit is necessarily a problem.",
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
                              "name": "BOP deficit",
                              "statement": "Persistent deficits may signal uncompetitiveness or may finance investment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Loss of competitiveness — high prices or low quality exports.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Strong domestic demand pulling in imports.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Rising foreign debt as the deficit must be financed.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Pressure on the exchange rate and possible depreciation.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) If financed by investment inflows it can support growth — not always bad.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) But persistent deficits risk debt burdens and loss of confidence — judgement needed.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) uncompetitiveness, import demand (b) debt, exchange rate pressure (c) depends on financing and persistence",
          "commonErrors": [
                    "Declaring all deficits bad without evaluation."
          ]
},
        },
      ],
    },
    {
      id: "ecn10-u4-bopd",
      title: "Balance of Payments Problems",
      skill: "Analyse causes and consequences of BOP deficits and surpluses and possible responses.",
      lesson: {
        sections: [
          {
            heading: "Causes of a deficit",
            body: "A **current account deficit** arises when spending abroad exceeds earnings: **loss of competitiveness** (high wages, inflation, poor quality), **strong domestic demand** sucking in imports, **recession abroad** cutting export demand, or **currency appreciation** making exports dear. A **surplus** has the opposite causes.",
          },
          {
            heading: "Consequences of a deficit",
            body: "Must be financed by **borrowing** or **selling assets** → rising foreign debt and interest payments. Can cause **exchange rate depreciation** as confidence falls. Can be acceptable if it funds **investment** that later boosts exports. Surpluses can cause **currency appreciation**, hurting exporters, and trade tensions from partners.",
          },
          {
            heading: "Policy responses",
            body: "Governments may **devalue** the currency (under fixed rates), pursue **contractionary policy** to cut import demand, use **protectionism** (tariffs, quotas), or pursue **supply-side policies** to raise competitiveness. Central banks may raise **interest rates** to attract capital inflows.",
          },
        ],
        keyFormulas: [
          { name: "Deficit financing", statement: "Current account deficit = financial account surplus (borrowing/investment inflows)" },
          { name: "Competitiveness", statement: "Low prices or high quality → export demand" },
        ],
        workedExample: {
          problem: "A country runs persistent current account deficits and its currency is under downward pressure. Explain one chain of consequences.",
          solution: "Deficit → need for capital inflows → if inflows slow, currency depreciates → imports dearer → inflation; exports cheaper → eventual improvement possible.",
        },
      },
      questions: [
        {
          id: "ecn10-u4-bopd-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What must happen on the financial account when there is a current account deficit?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "It must also be in deficit"
                    },
                    {
                              "id": "b",
                              "text": "It must be in surplus"
                    },
                    {
                              "id": "c",
                              "text": "It must be zero"
                    },
                    {
                              "id": "d",
                              "text": "Nothing — the accounts are unrelated"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "BOP identity",
                              "statement": "Overall balance is zero; accounts offset each other."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A current account deficit is financed by a financial account surplus.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** It must be in surplus",
          "commonErrors": [
                    "Thinking deficits are impossible."
          ]
},
        },
        {
          id: "ecn10-u4-bopd-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give three causes of a current account deficit.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Deficit causes",
                              "statement": "Uncompetitiveness, import demand, exchange rate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Loss of export competitiveness — high prices or low quality.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Strong domestic demand increasing imports.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Currency appreciation making exports dearer.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Uncompetitiveness, strong import demand, appreciation.",
          "commonErrors": [
                    "Repeating the definition as a cause."
          ]
},
        },
        {
          id: "ecn10-u4-bopd-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why a current account deficit can lead to a rising foreign debt.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Deficit financing",
                              "statement": "Deficits must be financed by borrowing or asset sales."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The country spends more abroad than it earns.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The gap must be financed — borrowing from abroad.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Repeated borrowing accumulates into foreign debt.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Interest and debt repayments then worsen future current accounts.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Deficit → foreign borrowing → accumulating debt → future repayment burden.",
          "commonErrors": [
                    "Ignoring the financing requirement."
          ]
},
        },
        {
          id: "ecn10-u4-bopd-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A government wants to reduce a persistent current account deficit.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two demand-side policies that could reduce the deficit.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain one supply-side policy that could reduce the deficit.",
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
                              "name": "Deficit policies",
                              "statement": "Cut import demand or raise export competitiveness."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Contractionary fiscal/monetary policy cuts domestic demand and imports.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Depreciation or protectionism makes imports dearer.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Education and training raise labour productivity and export quality.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Infrastructure investment lowers business costs, improving competitiveness.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) demand reduction, dearer imports (b) supply-side competitiveness",
          "commonErrors": [
                    "Proposing policies with no link to the trade balance."
          ]
},
        },
        {
          id: "ecn10-u4-bopd-q5",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A current account surplus has persisted for five years in an export-driven economy.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two consequences of a large current account surplus for the economy.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain one consequence for the country's trading partners.",
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
                              "name": "Surplus effects",
                              "statement": "Surpluses can appreciate the currency and create trade tensions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Sustained inflows may appreciate the currency, hurting exporters.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Reserve accumulation or lending abroad can create risks.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Partners face deficits and may retaliate with protectionism.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Currency appreciation pressures their own exporters.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) appreciation pressure, reserve/lending risks (b) partner deficits and retaliation",
          "commonErrors": [
                    "Assuming surpluses are always beneficial."
          ]
},
        },
        {
          id: "ecn10-u4-bopd-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Country Y records a current account deficit equal to 4% of GDP.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain what a deficit of this size suggests about the economy.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain two ways the deficit could be reduced.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Evaluate whether reducing the deficit should be a policy priority.",
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
                              "name": "Deficit evaluation",
                              "statement": "Size, financing and causes determine whether action is needed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Spending abroad exceeds earnings by a significant share of output.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Suggests uncompetitiveness or strong import demand.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Depreciation makes exports cheaper and imports dearer.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Supply-side policies raise competitiveness over time.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) If it finances productive investment, reducing it may harm growth.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) But if persistent and debt-financed, it threatens stability — judgement required.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) large external imbalance (b) depreciation, supply-side (c) depends on financing and causes",
          "commonErrors": [
                    "No evaluation of context."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecn10-u4-bop-notes",
      title: "Balance of payments — notes",
      summary: "Current account = goods + services + income + transfers; deficits are financed by financial account surpluses.",
      sections: [
        { heading: "Key idea", body: "The balance of payments must balance overall — a current account deficit is paid for by borrowing or selling assets." },
        { heading: "Deficits", body: "Causes: uncompetitiveness, strong import demand, appreciation. Risks: rising foreign debt, currency pressure." },
        { heading: "Responses", body: "Depreciation, contractionary demand policies, protectionism, or supply-side competitiveness policies." },
      ],
    },
  ],
};
