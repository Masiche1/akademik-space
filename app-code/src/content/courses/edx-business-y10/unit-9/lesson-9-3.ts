import type { Lesson } from "../../../types.ts";

export const lesson93: Lesson = {
  id: "ebz10-u9-lesson-9-3",
  code: "9-3",
  title: "Multinationals and Globalisation Impacts",
  goal: "I CAN describe multinationals and evaluate the benefits and costs of globalisation.",
  standards: ["Edexcel IGCSE Business 4BS0 — External Influences: globalisation impacts"],
  
  vocabulary: [
    { term: "Multinational corporation (MNC)", definition: "A company operating in more than one country." },
    { term: "Foreign direct investment (FDI)", definition: "Investment by a firm in business operations in another country." },
    { term: "Profit repatriation", definition: "Sending profits earned abroad back to the home country." },
    { term: "Offshoring", definition: "Moving production or services to another country, usually for lower costs." },
    { term: "Economies of scale", definition: "Lower average costs from producing on a larger scale." },
  ],
  concepts: [
    {
      id: "ebz10-u9-mncs",
      title: "Multinational Corporations",
      skill: "Describe MNCs and evaluate their effects on host and home countries.",
      lesson: {
        sections: [
          {
            heading: "What is an MNC?",
            body: "A **multinational corporation (MNC)** is a business that owns or controls operations in more than one country — e.g. McDonald's, Nike, Toyota. MNCs enter foreign markets through **foreign direct investment (FDI)**: building factories, buying local firms, or setting up subsidiaries.",
          },
          {
            heading: "Advantages of MNCs for the host country",
            body: "MNCs bring **jobs**, training and skills; **investment** in infrastructure and facilities; **tax revenue**; access to **new technologies and products**; and often better pay and conditions than local alternatives. Their presence can also stimulate local suppliers and competition.",
          },
          {
            heading: "Criticisms of MNCs",
            body: "**Profit repatriation**: most profits are sent home, limiting local benefit. MNCs may **exploit** cheap labour with poor conditions; **outcompete** local small firms; move to cheaper countries when costs rise ('footloose'); and cause **environmental damage** with weak enforcement. Their size gives them power to influence governments and evade taxes through transfer pricing.",
          },
        ],
        keyFormulas: [
          { name: "MNC", statement: "Operates in 2+ countries via FDI" },
          { name: "Profit repatriation", statement: "Profits sent to home country, not reinvested locally" },
        ],
        workedExample: {
          problem: "A US phone company builds a factory in Vietnam. List one benefit and one criticism for Vietnam.",
          solution: "Benefit: jobs, skills and tax revenue. Criticism: profits are repatriated to the US, so local economic gains may be limited.",
        },
      },
      questions: [
        {
          id: "ebz10-u9-mnc-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a multinational corporation (MNC)?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A company exporting goods to one foreign country"
                    },
                    {
                              "id": "b",
                              "text": "A company operating in more than one country"
                    },
                    {
                              "id": "c",
                              "text": "A government agency promoting trade"
                    },
                    {
                              "id": "d",
                              "text": "A small family business"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "MNC",
                              "statement": "Company operating in more than one country."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "MNC = multi-country operations, usually via FDI.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Operates in more than one country",
          "commonErrors": [
                    "Confused with simple exporting."
          ]
},
        },
        {
          id: "ebz10-u9-mnc-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give three benefits MNCs can bring to a host (receiving) country.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "MNC benefits",
                              "statement": "Jobs, investment, tax revenue, technology, skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Creates jobs and employment.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Brings investment (FDI) and infrastructure.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Pays taxes and transfers technology/skills.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Jobs, investment, tax revenue, technology transfer.",
          "commonErrors": [
                    "Only one benefit.",
                    "Benefit to home country given instead."
          ]
},
        },
        {
          id: "ebz10-u9-mnc-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain what is meant by profit repatriation and why it is criticised.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Profit repatriation",
                              "statement": "Profits sent from host country to the MNC's home country."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "MNC earns profits in the host country.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Profits are sent back ('repatriated') to headquarters.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Criticism: little money stays to benefit the local economy.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Criticism: host country bears costs (jobs, environment) without full gains.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Profits sent home; criticised because local economies keep little of the gain.",
          "commonErrors": [
                    "Definition missing — only criticism given."
          ]
},
        },
        {
          id: "ebz10-u9-mnc-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A multinational garment company opens factories in a low-wage country.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two ways the MNC might exploit workers there.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain one way the host country still benefits.",
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
                              "name": "MNC exploitation vs benefit",
                              "statement": "Weak labour laws allow poor conditions; jobs still transfer income."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Pays very low wages below a living standard.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Long hours, unsafe conditions or child labour due to weak enforcement.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Threatens to move production if workers demand better pay.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Workers gain jobs and income that would otherwise not exist.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) low wages, poor conditions, footloose threats (b) jobs and income for locals",
          "commonErrors": [
                    "No benefit acknowledged in (b)."
          ]
},
        },
        {
          id: "ebz10-u9-mnc-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A government wants to attract a major MNC to build an electronics plant in its country.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two benefits the government hopes to gain.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Evaluate one risk the government faces if the MNC later moves production elsewhere.",
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
                              "name": "FDI attraction and risk",
                              "statement": "Jobs and tax revenue vs dependence on a footloose investor."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) New jobs and skills for local workers.",
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
                              "reasoning": "(a) Technology transfer and export earnings.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Jobs and investment can vanish quickly if costs rise elsewhere — 'footloose' risk.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Local suppliers and workers become dependent on one firm.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) jobs, tax/investment, technology (b) footloose risk — jobs can leave",
          "commonErrors": [
                    "Risk not linked to the scenario."
          ]
},
        },
        {
          id: "ebz10-u9-mnc-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A developing country is deciding whether to welcome a large foreign supermarket chain.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define an MNC.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Define FDI.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain two benefits the chain could bring to the country.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain two criticisms of allowing the chain to operate.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Reach a justified conclusion on whether to welcome the chain.",
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
                              "name": "MNC impact evaluation",
                              "statement": "Weigh jobs/investment against repatriation, exploitation and local firm damage."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Company operating in more than one country.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Investment by a firm in operations in another country.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Jobs, investment, tax revenue, lower prices for consumers.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Profit repatriation; outcompeting local shops; possible poor labour conditions.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "d"
                    },
                    {
                              "reasoning": "(e) Balanced judgement — e.g. welcome with conditions/regulation.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "e"
                    }
          ],
          "finalAnswer": "Definitions; benefits vs criticisms weighed; justified conclusion.",
          "commonErrors": [
                    "One-sided judgement.",
                    "Definitions missing."
          ]
},
        },
      ],
    },
    {
      id: "ebz10-u9-gbl-impact",
      title: "Benefits and Costs of Globalisation",
      skill: "Evaluate globalisation's effects on businesses, consumers and countries.",
      lesson: {
        sections: [
          {
            heading: "Benefits of globalisation",
            body: "**For businesses**: access to huge new markets; **economies of scale** from global production; cheaper raw materials and labour; international sourcing of components; spread of risk across countries.\n\n**For consumers and countries**: lower prices and greater choice from competition; higher-quality goods; more jobs via exports and FDI; faster technology transfer; developing countries can industrialise through export-led growth.",
          },
          {
            heading: "Costs and risks of globalisation",
            body: "**For businesses**: foreign competitors can undercut home firms; exchange-rate and political risks abroad; supply chains can be disrupted by distant events.\n\n**For countries and workers**: jobs move to low-cost countries (offshoring); wage inequality grows as unskilled jobs decline; over-dependence on a few exports or foreign investors; environmental damage from long-distance trade; cultural homogenisation and loss of local industries.",
          },
          {
            heading: "Balancing the debate",
            body: "Globalisation is not simply 'good' or 'bad' — outcomes depend on how countries manage it. **Winners** are typically skilled workers, exporters and consumers; **losers** are workers in uncompetitive industries and regions dependent on declining sectors. Policies such as retraining, trade adjustment support and labour/environmental standards can spread the gains more fairly.",
          },
        ],
        keyFormulas: [
          { name: "Economies of scale", statement: "Global output lowers average cost per unit" },
          { name: "Offshoring", statement: "Moving jobs abroad for lower costs" },
        ],
        workedExample: {
          problem: "A car maker sources parts globally and sells in 40 countries. Give one benefit and one risk of this globalised strategy.",
          solution: "Benefit: cheaper parts and huge market reach raise profits. Risk: exchange-rate swings or supply disruption in one country can raise costs or halt production.",
        },
      },
      questions: [
        {
          id: "ebz10-u9-impact-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is a benefit of globalisation for consumers?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Fewer goods to choose from"
                    },
                    {
                              "id": "b",
                              "text": "Lower prices and greater choice"
                    },
                    {
                              "id": "c",
                              "text": "Higher prices due to transport costs"
                    },
                    {
                              "id": "d",
                              "text": "Less competition in markets"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Consumer benefits",
                              "statement": "Competition lowers prices and widens choice."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Global competition → lower prices and more choice.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Lower prices and greater choice",
          "commonErrors": [
                    "Cost/negative option chosen."
          ]
},
        },
        {
          id: "ebz10-u9-impact-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give three benefits of globalisation for businesses.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Business benefits",
                              "statement": "New markets, scale, cheaper inputs, risk spreading."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Access to larger foreign markets.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Economies of scale / cheaper labour and materials.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Spread of risk across countries / technology access.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "New markets, economies of scale, cheaper inputs, risk spreading.",
          "commonErrors": [
                    "Consumer benefits listed instead."
          ]
},
        },
        {
          id: "ebz10-u9-impact-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how globalisation can cause job losses in developed countries.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Offshoring and job losses",
                              "statement": "Firms move production to lower-cost countries."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Firms can produce more cheaply abroad.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Production is offshored to low-wage countries.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Home factories close and workers lose jobs.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Regions dependent on those industries suffer decline.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Offshoring to low-cost countries closes home jobs and hurts dependent regions.",
          "commonErrors": [
                    "Imports blamed without mechanism."
          ]
},
        },
        {
          id: "ebz10-u9-impact-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A small town's main employer, a clothing factory, moves production to a low-cost country.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two costs of globalisation for the town.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain one benefit the firm gained by moving.",
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
                              "name": "Globalisation winners and losers",
                              "statement": "Firm gains efficiency; the town bears concentrated job losses."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Mass unemployment as the factory closes.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Local shops and services lose income and customers.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Long-term decline of skills and community investment.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Lower labour costs raise profit margins for the firm.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) unemployment, lost local spending, decline (b) lower costs → higher profit",
          "commonErrors": [
                    "Benefit not credited to the firm."
          ]
},
        },
        {
          id: "ebz10-u9-impact-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A developing country opens its economy fully to international trade.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two benefits the country may gain.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Evaluate one risk of full openness for the country's new industries.",
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
                              "name": "Openness evaluation",
                              "statement": "Export-led growth vs vulnerability of infant industries."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Export markets and foreign investment create jobs.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Technology transfer and higher incomes over time.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Consumers gain lower prices and choice.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Cheap imports can wipe out new domestic industries before they grow.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Economy becomes dependent on a few exports or foreign capital.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) jobs/investment, technology, choice (b) infant-industry risk and dependence",
          "commonErrors": [
                    "Risks not evaluated, just listed."
          ]
},
        },
        {
          id: "ebz10-u9-impact-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A country is debating whether to reduce barriers to international trade and investment.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define globalisation.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Give two benefits of globalisation for the country's consumers.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Give two benefits of globalisation for the country's businesses.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain two costs of globalisation for workers and the environment.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Reach a justified conclusion on reducing trade barriers.",
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
                              "statement": "Weigh consumer/business gains against job losses, inequality and environmental costs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Increasing interconnectedness of world economies.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Lower prices and greater product choice.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) New export markets and economies of scale.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Job losses via offshoring; pollution from long-distance production and transport.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "d"
                    },
                    {
                              "reasoning": "(e) Balanced judgement — e.g. reduce barriers with support for affected workers.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "e"
                    }
          ],
          "finalAnswer": "Definition; benefits to consumers and businesses; costs to workers/environment; justified conclusion.",
          "commonErrors": [
                    "No conclusion.",
                    "Costs ignored."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebz10-u9-93-notes",
      title: "MNCs and globalisation impacts — notes",
      summary: "MNCs invest abroad (FDI) bringing jobs and tax but repatriating profits. Globalisation helps consumers and exporters; it can cost jobs, equality and the environment.",
      sections: [
        { heading: "MNCs", body: "Operate in 2+ countries. Benefits: jobs, FDI, technology. Criticisms: profit repatriation, exploitation, footloose relocation." },
        { heading: "Benefits", body: "Businesses: new markets, scale, cheaper inputs. Consumers: lower prices, choice. Countries: jobs, investment, growth." },
        { heading: "Costs", body: "Offshored jobs, wage inequality, environmental damage, dependence on foreign investors and few exports." },
      ],
    },
  ],
};
