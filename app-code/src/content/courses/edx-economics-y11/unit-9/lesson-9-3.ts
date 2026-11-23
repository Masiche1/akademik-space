import type { Lesson } from "../../../types.ts";

export const lesson93: Lesson = {
  id: "ecn11-u9-lesson-9-3",
  code: "9-3",
  title: "External Influences on Business",
  goal: "I CAN explain economic, social, technological, environmental, political and legal influences on business.",
  standards: ["Edexcel IGCSE Economics 4EC1 — Paper 1: Investigating small businesses"],
  
  vocabulary: [
    { term: "External influences", definition: "Factors outside a business that affect it: economic, social, technological, environmental, political, legal." },
    { term: "Economic influences", definition: "Business cycle, inflation, interest rates and exchange rates affecting demand and costs." },
    { term: "Social influences", definition: "Demographics, lifestyle trends and consumer attitudes affecting demand." },
    { term: "Technological influences", definition: "New technologies changing production, products and competition." },
    { term: "Environmental influences", definition: "Pressure to reduce pollution and use resources sustainably." },
    { term: "Government support", definition: "Grants, subsidies, training schemes and advice provided to businesses." },
    { term: "Legal controls", definition: "Laws businesses must obey, e.g. employment law, health and safety, consumer protection." },
  ],
  concepts: [
    {
      id: "ecn11-u9-influences",
      title: "Economic, Social and Technological Influences",
      skill: "Explain how economic, social and technological changes affect businesses.",
      lesson: {
        sections: [
          {
            heading: "Economic influences",
            body: "The **business cycle** affects demand — recessions cut sales of luxuries; booms raise them. **Inflation** raises costs. **Interest rates** affect borrowing costs and consumer spending. **Exchange rates** affect import costs and export competitiveness. Firms must monitor the economy and adapt — e.g. cut costs in a recession, expand in a boom.",
          },
          {
            heading: "Social and technological influences",
            body: "**Social influences**: ageing populations, health trends, ethical consumerism — e.g. demand for vegan products or older-friendly services. **Technological influences**: the internet, automation, new materials — technology can cut costs and open markets but also create competition (e.g. e-commerce threatening shops) and require new skills. Businesses that adapt technology gain advantage; those that ignore it decline.",
          },
        ],
        keyFormulas: [

        ],
        workedExample: {
          problem: "A high-street shoe shop faces rising online competition. Identify two external influences and suggest responses.",
          solution: "Technological: e-commerce — respond by selling online too. Social: demand for convenience — offer click-and-collect and home delivery.",
        },
      },
      questions: [
        {
          id: "ecn11-u9-influences-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which of the following is an economic influence on business?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A new invention"
                    },
                    {
                              "id": "b",
                              "text": "Rising interest rates"
                    },
                    {
                              "id": "c",
                              "text": "A change in fashion"
                    },
                    {
                              "id": "d",
                              "text": "A new environmental law"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Economic influences",
                              "statement": "Business cycle, inflation, interest rates, exchange rates."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Interest rates are an economic factor affecting borrowing and spending.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Rising interest rates",
          "commonErrors": [
                    "Confusing economic with technological."
          ]
},
        },
        {
          id: "ecn11-u9-influences-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give three examples of external influences on a business.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "External influences",
                              "statement": "Economic, social, technological, environmental, political, legal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Economic — e.g. interest rates or recession.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Social — e.g. health trends or demographics.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Technological/environmental/political/legal — e.g. new technology, pollution rules, government policy.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Any three across the categories.",
          "commonErrors": [
                    "Only internal factors listed."
          ]
},
        },
        {
          id: "ecn11-u9-influences-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how a recession could affect a business that sells luxury holidays.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Business cycle",
                              "statement": "Recessions cut demand for discretionary/luxury goods."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "In a recession incomes fall and confidence drops.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Consumers cut discretionary spending — holidays are postponed.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Demand for luxury holidays falls sharply — revenue drops.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The firm may cut prices, reduce costs or target budget travellers.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Falling incomes → lower demand for luxury holidays → adapt prices/costs.",
          "commonErrors": [
                    "No link to demand."
          ]
},
        },
        {
          id: "ecn11-u9-influences-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A local bookstore faces competition from online retailers.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify two external influences causing this competition.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Suggest two ways the bookstore could respond.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "External influences",
                              "statement": "Technology and consumer habits change markets."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Technological — internet/e-commerce; social — preference for convenience/price comparison.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Sell online itself; or differentiate — events, personalised service, local community focus.",
                              "marks": 3,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) Technology + consumer habits. (b) Go online or differentiate via service/community.",
          "commonErrors": [
                    "Only one influence.",
                    "Response unrelated to causes."
          ]
},
        },
        {
          id: "ecn11-u9-influences-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Demand for electric vehicles is rising rapidly.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two external influences driving this rise in demand.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Suggest two ways a car manufacturer could respond to this trend.",
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
                              "name": "Responding to trends",
                              "statement": "Firms adapt products and strategy to external changes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Environmental — concern about emissions/climate; political/legal — subsidies and bans on petrol cars.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Technological — improving battery range and charging.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Invest in EV production/research; or partner with charging networks.",
                              "marks": 3,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) environmental + policy + technology. (b) EV investment, charging partnerships.",
          "commonErrors": [
                    "Influences not explained.",
                    "Vague response."
          ]
},
        },
        {
          id: "ecn11-u9-influences-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A high-street retailer is reviewing the external environment in which it operates.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define the term external influences.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Name three types of external influence and give an example of each.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain how a rise in interest rates could affect the retailer.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Evaluate whether the retailer can control these external influences.",
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
                              "name": "External environment",
                              "statement": "Outside factors businesses must adapt to but cannot fully control."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Factors outside the business affecting its operation — economic, social, technological, environmental, political, legal.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) e.g. economic (inflation), social (health trends), technological (e-commerce) — with examples.",
                              "marks": 3,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Higher rates → costlier borrowing, less consumer spending → lower sales.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Businesses cannot control them but can adapt — monitor, diversify, innovate; some influence via lobbying.",
                              "marks": 3,
                              "markCode": "AO3",
                              "part": "d"
                    }
          ],
          "finalAnswer": "(a) definition; (b) three types + examples; (c) rates → costs/spending; (d) can't control but can adapt.",
          "commonErrors": [
                    "Types without examples.",
                    "Claiming full control."
          ]
},
        },
      ],
    },
    {
      id: "ecn11-u9-government",
      title: "Environmental, Political and Legal Influences and Government Support",
      skill: "Explain environmental, political and legal influences and government support for business.",
      lesson: {
        sections: [
          {
            heading: "Environmental, political and legal influences",
            body: "**Environmental**: pressure to reduce pollution, waste and carbon — firms may need eco-friendly processes or face boycotts. **Political**: government policy — tax rates, subsidies, trade deals — shapes the business environment. **Legal**: laws businesses must obey — employment law (minimum wage, discrimination), health and safety, consumer protection, planning permission. Breaking laws brings fines or closure.",
          },
          {
            heading: "Government support",
            body: "Governments support business through **grants** (money not repaid), **subsidies** (payments to reduce costs), **training schemes**, **advice services** and **tax breaks**. Support aims to create jobs, growth and regional balance — but costs taxpayers money and can prop up inefficient firms. Businesses must weigh support against the taxes that fund it.",
          },
        ],
        keyFormulas: [

        ],
        workedExample: {
          problem: "A factory is told it must fit pollution filters costing £50,000 to meet new emissions law. Identify the influence and a response.",
          solution: "Legal/environmental influence — the firm must comply or face fines/closure. Response: install filters, apply for a government grant, or raise prices to cover the cost.",
        },
      },
      questions: [
        {
          id: "ecn11-u9-government-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a subsidy?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A tax on business profits"
                    },
                    {
                              "id": "b",
                              "text": "A payment by government to reduce a firm's costs"
                    },
                    {
                              "id": "c",
                              "text": "A fine for breaking the law"
                    },
                    {
                              "id": "d",
                              "text": "A loan that must be repaid with interest"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Subsidy",
                              "statement": "Government payment reducing business costs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Subsidies are payments to support businesses and lower their costs.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Government payment to cut costs",
          "commonErrors": [
                    "Confusing subsidy with tax or loan."
          ]
},
        },
        {
          id: "ecn11-u9-government-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give three ways a government can support businesses.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Government support",
                              "statement": "Grants, subsidies, training, advice, tax breaks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Grants — money given that need not be repaid.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Subsidies — payments that reduce costs.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Training schemes, advice services or tax breaks.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Grants, subsidies, training/advice, tax breaks.",
          "commonErrors": [
                    "Listing legal controls instead."
          ]
},
        },
        {
          id: "ecn11-u9-government-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why a business might have to change its practices because of a new environmental law.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Environmental/legal influence",
                              "statement": "Laws force changes to reduce environmental harm."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The law sets limits — e.g. emissions, waste disposal.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The firm must invest in cleaner technology or processes.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Non-compliance brings fines or closure.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "There may be costs — but also reputation benefits and possible grants.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Legal limits force cleaner practices; costs vs fines/reputation trade-off.",
          "commonErrors": [
                    "No consequence mentioned."
          ]
},
        },
        {
          id: "ecn11-u9-government-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A small bakery is offered a government grant to buy energy-efficient ovens.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two benefits the bakery gains from the grant.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain one reason why taxpayers might question this grant.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Government support",
                              "statement": "Grants cut costs; funded by taxpayers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Lower upfront cost of efficient ovens; reduced energy bills long-term.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Environmental benefit — less carbon — plus possible reputation gain.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Grants cost taxpayers money — some argue it should fund schools/health instead.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) cheaper investment, lower bills, greener. (b) opportunity cost of public money.",
          "commonErrors": [
                    "Only business view in (b)."
          ]
},
        },
        {
          id: "ecn11-u9-government-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A clothing factory is accused of polluting a local river and faces a new emissions law.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the type of external influence the law represents and explain it.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Suggest two ways the factory could respond to reduce pollution.",
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
                              "name": "Legal/environmental pressure",
                              "statement": "Laws and public pressure force cleaner operations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Legal and environmental influence — government rule plus public concern.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Breaking it risks fines, prosecution and reputational damage.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Install treatment filters; switch to cleaner production methods or renewable energy.",
                              "marks": 3,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) legal/environmental — fines and reputation at stake. (b) filters, cleaner methods.",
          "commonErrors": [
                    "Only one influence type.",
                    "Response unrelated to pollution."
          ]
},
        },
        {
          id: "ecn11-u9-government-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A government wants to support small businesses while also protecting the environment.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Name three forms of government support for business.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain one advantage and one disadvantage of government grants for businesses.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Explain why environmental laws can benefit businesses in the long run.",
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
                              "name": "Government and business",
                              "statement": "Support helps firms; laws shape behaviour for long-term benefit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Grants, subsidies, training schemes, advice, tax breaks — any three.",
                              "marks": 3,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Advantage: reduces costs/investment burden, encourages growth.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Disadvantage: funded by taxpayers; may support inefficient firms or distort markets.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Cleaner production cuts waste and future costs; reputation improves; avoids stricter future rules.",
                              "marks": 3,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) three supports; (b) advantage + disadvantage; (c) long-run cost/reputation benefits.",
          "commonErrors": [
                    "Only one side of grants.",
                    "No long-run link for (c)."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecn11-u9-external-notes",
      title: "External influences — revision notes",
      summary: "Economic (cycle, rates), social (trends), technological (innovation), environmental (pollution), political (policy) and legal (laws) influences shape business. Government supports via grants/subsidies; laws force cleaner, safer practice.",
      sections: [
        { heading: "Influences", body: "Economic, social, technological, environmental, political, legal — businesses must monitor and adapt." },
        { heading: "Government support", body: "Grants, subsidies, training, advice, tax breaks — help growth but cost taxpayers." },
        { heading: "Laws", body: "Employment, health and safety, consumer protection, environmental limits — breaking them brings fines." },
      ],
    },
  ],
};
