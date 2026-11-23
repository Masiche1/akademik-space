import type { Lesson } from "../../../types.ts";

export const lesson102: Lesson = {
  id: "ebz11-u10-lesson-10-2",
  code: "10-2",
  title: "Globalisation and Multinational Corporations",
  goal: "I CAN explain globalisation and the role of multinational corporations, and evaluate the benefits and drawbacks for businesses and stakeholders.",
  standards: ["Edexcel IGCSE Business 4BS0 — External influences on business", "4BS0: globalisation and international business"],
  
  vocabulary: [
    { term: "Globalisation", definition: "The growing integration of world markets — trade, investment and flows of people and information across borders." },
    { term: "Multinational corporation (MNC)", definition: "A large business that operates in many countries, e.g. through subsidiaries." },
    { term: "Offshoring", definition: "Moving production or services to another country, usually to cut costs." },
    { term: "Foreign direct investment (FDI)", definition: "A firm investing in building or buying operations in another country." },
    { term: "Economies of scale", definition: "Lower average costs achieved by producing on a larger scale." },
  ],
  concepts: [
    {
      id: "ebz11-u10-global",
      title: "Globalisation and MNCs",
      skill: "Explain what globalisation is, how MNCs operate internationally and why firms go global.",
      lesson: {
        sections: [
          {
            heading: "What globalisation is",
            body: "**Globalisation** is the increasing interconnectedness of the world's economies — goods, services, capital, technology and people move across borders more freely. Drivers: falling transport and communication costs, trade agreements, containerisation, the internet, and multinational investment.\n\n**Multinational corporations (MNCs)** are firms operating in many countries — e.g. through overseas subsidiaries, factories or sales offices. They spread production and sales globally to reach more customers and cut costs.",
          },
          {
            heading: "Why businesses go global",
            body: "**Reasons**: access to new and larger markets; cheaper labour, materials or land abroad; access to raw materials and skills; spread risk across countries; benefit from economies of scale; follow customers or competitors overseas. **Risks**: exchange rate changes, different laws and cultures, political instability, complex management and logistics.",
          },
        ],
        keyFormulas: [

        ],
        workedExample: {
          problem: "A shoe manufacturer opens factories in Vietnam and Vietnam-free sales offices in Germany. Explain two ways it benefits.",
          solution: "Lower labour costs in Vietnam reduce unit costs; German sales offices give direct access to a large European market — both are globalisation strategies.",
        },
      },
      questions: [
        {
          id: "ebz11-u10-global-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is globalisation?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A business selling only in its home country"
                    },
                    {
                              "id": "b",
                              "text": "The increasing integration of world markets and economies"
                    },
                    {
                              "id": "c",
                              "text": "A government tax on imports"
                    },
                    {
                              "id": "d",
                              "text": "A type of business merger"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Globalisation",
                              "statement": "Growing integration of world trade, investment and flows."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Globalisation = world markets becoming more interconnected.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Integration of world markets",
          "commonErrors": [
                    "Confusing with a single firm's exports."
          ]
},
        },
        {
          id: "ebz11-u10-global-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Define a multinational corporation (MNC) and give one example of how it operates abroad.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "MNC",
                              "statement": "Firm operating in many countries via subsidiaries, factories or offices."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Definition: large business operating in many countries.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Example: overseas factory, sales subsidiary or joint venture abroad.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Firm operating in many countries; e.g. foreign factories/sales offices.",
          "commonErrors": [
                    "Defining as just 'a big company'."
          ]
},
        },
        {
          id: "ebz11-u10-global-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Give two reasons why a business might become multinational.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Reasons to go global",
                              "statement": "New markets, lower costs, resources, risk spreading."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Access to new/larger markets and more customers.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Lower costs — cheaper labour/materials or access to raw materials abroad.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "New markets + lower costs/resources.",
          "commonErrors": [
                    "Only one reason."
          ]
},
        },
        {
          id: "ebz11-u10-global-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A UK phone maker is deciding whether to build a factory in India.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two benefits of this international expansion.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain one risk it faces.",
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
                              "name": "International expansion",
                              "statement": "Market access and cost savings vs exchange, legal and cultural risks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Access to India's huge market and cheaper labour reduces costs.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Economies of scale from larger production.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Exchange rate risk / different laws and culture / political instability.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "Market access + cost savings; risk = exchange rates/laws/culture.",
          "commonErrors": [
                    "No risk identified in (b)."
          ]
},
        },
        {
          id: "ebz11-u10-global-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain two ways globalisation has made it easier for small businesses to trade internationally.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Globalisation enablers",
                              "statement": "Technology, cheaper transport and trade agreements."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Internet/e-commerce lets small firms sell online worldwide at low cost.",
                              "marks": 3,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Cheaper transport and trade agreements/blocs reduce barriers to exporting.",
                              "marks": 3,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "E-commerce/internet + cheaper transport and trade agreements.",
          "commonErrors": [
                    "Vague answers not linked to small firms."
          ]
},
        },
        {
          id: "ebz11-u10-global-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A multinational corporation plans to move production from its home country to a low-cost country.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define globalisation and explain what makes a firm an MNC.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain two benefits the MNC gains from moving production abroad.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Evaluate the impact of this decision on the home country's workers.",
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
                              "name": "Offshoring evaluation",
                              "statement": "Cost savings and scale vs job losses at home."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Globalisation = increasing integration of world markets and economies.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) MNC = operates in many countries via subsidiaries, factories or offices.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Lower labour/material costs raise profit margins.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Access to new markets and economies of scale.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Job losses and wage pressure at home vs possible retraining/new roles — balanced judgement.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "MNC goes global for markets and cost savings; offshoring hurts home jobs.",
          "commonErrors": [
                    "Ignoring home-country impact in (c)."
          ]
},
        },
      ],
    },
    {
      id: "ebz11-u10-mnc-effects",
      title: "Benefits and Drawbacks of Globalisation",
      skill: "Evaluate the effects of globalisation and MNC activity on businesses, workers and countries.",
      lesson: {
        sections: [
          {
            heading: "Benefits of globalisation",
            body: "**For businesses**: bigger markets and customers; lower costs through cheaper inputs; economies of scale; access to ideas, technology and skills; ability to spread risk across countries.\n\n**For countries/workers**: MNC investment creates jobs and tax revenue in poorer countries; consumers get cheaper, more varied goods; knowledge and technology transfer.",
          },
          {
            heading: "Drawbacks and criticism",
            body: "**For businesses**: intense global competition; exchange rate and political risks; complex management and logistics; supply chain dependence.\n\n**For stakeholders**: MNCs may exploit cheap labour and weak environmental rules abroad; jobs can be lost in the home country; profits may leave the host country; small local firms can be driven out. **Verdict**: globalisation creates winners and losers — exam answers should weigh benefits against costs for specific stakeholders.",
          },
        ],
        keyFormulas: [

        ],
        workedExample: {
          problem: "A clothing MNC shifts production to Bangladesh where wages are low. List one benefit and one drawback for each of: the MNC, Bangladeshi workers, UK consumers.",
          solution: "MNC: lower costs, higher profit. Workers: new jobs but low pay/long hours. UK consumers: cheaper clothes but possible job losses at home.",
        },
      },
      questions: [
        {
          id: "ebz11-u10-mnc-effects-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which of these is a benefit of globalisation for a business?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Access to larger markets and cheaper inputs"
                    },
                    {
                              "id": "b",
                              "text": "Guaranteed profits every year"
                    },
                    {
                              "id": "c",
                              "text": "No competition from abroad"
                    },
                    {
                              "id": "d",
                              "text": "Freedom from all government rules"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Globalisation benefits",
                              "statement": "Bigger markets, lower costs, scale, spread risk."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Larger markets and cheaper inputs are genuine benefits.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(a)** Larger markets and cheaper inputs",
          "commonErrors": [
                    "Choosing 'guaranteed profits' — too absolute."
          ]
},
        },
        {
          id: "ebz11-u10-mnc-effects-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give one benefit and one drawback of globalisation for workers in a developing country.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Globalisation and workers",
                              "statement": "Jobs and income vs exploitation and job insecurity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Benefit: new jobs and income from MNC investment.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Drawback: low wages, poor conditions or jobs lost to offshoring elsewhere.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Benefit = jobs; drawback = low pay/exploitation risk.",
          "commonErrors": [
                    "Only one side covered."
          ]
},
        },
        {
          id: "ebz11-u10-mnc-effects-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two drawbacks of globalisation for a business that stays small and local.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Globalisation pressures",
                              "statement": "Global competition and cheap imports squeeze local firms."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Faces competition from cheaper imported goods and global brands.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Customers can buy online from anywhere, reducing local loyalty; also may lose skilled staff to MNCs.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Global competition and loss of customers/staff to bigger firms.",
          "commonErrors": [
                    "Repeating business benefits instead of drawbacks."
          ]
},
        },
        {
          id: "ebz11-u10-mnc-effects-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "An MNC wants to build a factory in a country with weak labour laws.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two reasons the MNC might choose this location.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain one ethical issue this raises.",
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
                              "name": "Offshore location choice",
                              "statement": "Low costs vs ethical/reputational risk."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Very low wages and weak regulation cut production costs.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Government incentives/tax breaks and access to new markets.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Exploiting workers — poor conditions, child labour risk, damage to reputation if exposed.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "Low costs/incentives chosen; ethical issue = worker exploitation.",
          "commonErrors": [
                    "No ethical point in (b)."
          ]
},
        },
        {
          id: "ebz11-u10-mnc-effects-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate whether globalisation is good for a country's economy overall.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Globalisation verdict",
                              "statement": "Weigh growth and investment against inequality, dependency and job losses."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Positives: FDI creates jobs, tax revenue and technology transfer; cheaper goods for consumers.",
                              "marks": 3,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Negatives: profits repatriated, local firms outcompeted, inequality and environmental costs.",
                              "marks": 3,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Balanced: growth and jobs vs inequality/dependency — judgement depends on country.",
          "commonErrors": [
                    "One-sided answer with no evaluation."
          ]
},
        },
        {
          id: "ebz11-u10-mnc-effects-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A government in a developing country is deciding whether to welcome a large MNC.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two benefits the country could gain from the MNC.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain two potential drawbacks for the country.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Make a justified recommendation on whether to welcome it.",
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
                              "name": "MNC impact on host country",
                              "statement": "Jobs/investment vs exploitation/dependency."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Jobs and training for local workers.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Tax revenue and infrastructure development; technology transfer.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Profits may leave the country (repatriation) limiting local gain.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Local firms may be outcompeted; possible exploitation of weak labour/environmental laws.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Recommend welcome with conditions (tax, labour standards) — balanced judgement.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Jobs/tax vs profit leakage and exploitation risk — welcome with safeguards.",
          "commonErrors": [
                    "No recommendation in (c)."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebz11-u10-global-notes",
      title: "Globalisation and MNCs — notes",
      summary: "Globalisation integrates world markets; MNCs operate in many countries. Benefits: markets, costs, scale. Drawbacks: risk, exploitation, job losses.",
      sections: [
        { heading: "Key idea", body: "MNCs go global for new markets, cheaper inputs and economies of scale." },
        { heading: "Benefits", body: "Businesses gain customers and lower costs; countries gain jobs, tax and technology." },
        { heading: "Drawbacks", body: "Exchange/political risk for firms; exploitation, dependency and home job losses for stakeholders." },
      ],
    },
  ],
};
