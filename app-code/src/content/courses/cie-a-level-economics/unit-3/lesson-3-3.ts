import type { Lesson } from "../../../types.ts";

export const lesson433: Lesson = {
  id: "ciealecon-u3-lesson-3-3",
  code: "3-3",
  title: "Globalisation and International Institutions",
  goal: "I CAN explain globalisation drivers, institutions and implications.",
  standards: ["Cambridge A Level Economics 9708", "Paper 3: globalisation"],
  
  vocabulary: [
    { term: "Globalisation", definition: "Increasing interconnectedness of world economies." },
    { term: "WTO", definition: "World Trade Organization." },
    { term: "IMF", definition: "International Monetary Fund." },
    { term: "World Bank", definition: "International development lender." },
    { term: "Multinational corporation", definition: "Company operating in multiple countries." },
    { term: "Foreign direct investment", definition: "Investment in foreign operations." },
  ],
  concepts: [
    {
      id: "ciealecon-u3-s3-glob",
      title: "Globalisation",
      skill: "Analyse globalisation and institutions.",
      lesson: {
        sections: [
          {
            heading: "Drivers",
            body: "Technology (internet, transport), trade liberalisation, financial deregulation, MNC expansion. Reduces barriers, increases interdependence.",
          },
          {
            heading: "Institutions",
            body: "WTO: trade rules. IMF: balance of payments support, surveillance. World Bank: development lending. Regional: EU, ASEAN, NAFTA.",
          },
          {
            heading: "Implications",
            body: "Benefits: efficiency, growth, poverty reduction. Costs: inequality, job losses, environmental damage, loss of sovereignty.",
          },
        ],
        keyFormulas: [
          { name: "Globalisation", statement: "world integration" },
          { name: "WTO", statement: "trade rules" },
          { name: "IMF", statement: "BOP support" },
        ],
        workedExample: {
          problem: "How does globalisation affect developing countries?",
          solution: "Positive: market access, FDI, technology. Negative: exploitation, environmental damage, dependency on volatile markets.",
        },
      },
      questions: [
        {
          id: "ciealecon-u3-gl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is globalisation?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A business structure"
                    },
                    {
                              "id": "b",
                              "text": "Increasing interconnectedness of world economies"
                    },
                    {
                              "id": "c",
                              "text": "A type of tax"
                    },
                    {
                              "id": "d",
                              "text": "A trade barrier"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Globalisation",
                              "statement": "World integration."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Globalisation = interconnected economies.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "World integration"
},
        },
        {
          id: "ciealecon-u3-gl-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the WTO?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "WTO",
                              "statement": "Trade rules."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "World Trade Organization.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Sets trade rules, resolves disputes.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Trade rules body"
},
        },
        {
          id: "ciealecon-u3-gl-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are the drivers of globalisation?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Globalisation drivers",
                              "statement": "Causes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Technology, trade liberalisation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Financial deregulation, MNCs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Reduced barriers.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Technology, liberalisation"
},
        },
        {
          id: "ciealecon-u3-gl-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define globalisation, WTO, IMF, World Bank, MNC, FDI. (b) What is globalisation? (c) What is WTO? (d) What is IMF? (e) What are globalisation drivers? (f) What are benefits? (g) What are costs? (h) Evaluate whether globalisation benefits developing countries.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Globalisation",
                              "statement": "Analysis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) World integration.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Trade rules.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) BOP support.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Technology, liberalisation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Efficiency, growth, poverty reduction.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Inequality, job losses, environment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Globalisation analysis."
},
        },
        {
          id: "ciealecon-u3-gl-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is a driver of globalisation?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Rising tariffs on imports"
                    },
                    {
                              "id": "b",
                              "text": "Trade embargoes"
                    },
                    {
                              "id": "c",
                              "text": "Tight exchange controls"
                    },
                    {
                              "id": "d",
                              "text": "Advances in transport and communications technology"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Globalisation drivers",
                              "statement": "Technology reduces barriers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Technology (internet, transport) is a key driver of globalisation.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Transport and communications technology"
},
        },
        {
          id: "ciealecon-u3-gl-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A country's exports are $300bn and its GDP is $1200bn. Calculate exports as a percentage of GDP.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 25
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Export ratio",
                              "statement": "Exports / GDP x 100."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "300 / 1200 x 100 = 25%.",
                              "working": "(300 / 1200) x 100 = 25",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "25%"
},
        },
        {
          id: "ciealecon-u3-gl-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the main role of the IMF?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "IMF",
                              "statement": "BOP support and surveillance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Provides financial support to countries with balance of payments problems.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Conducts surveillance of member economies and promotes stability.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "BOP support and economic surveillance"
},
        },
        {
          id: "ciealecon-u3-gl-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A multinational corporation (MNC) contributes to globalisation by:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Investing and operating across national borders"
                    },
                    {
                              "id": "b",
                              "text": "Selling only within its home country"
                    },
                    {
                              "id": "c",
                              "text": "Issuing its own currency"
                    },
                    {
                              "id": "d",
                              "text": "Setting tariffs on imports"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "MNC",
                              "statement": "Operates in multiple countries."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "MNCs operate across borders → FDI → globalisation.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Operating across national borders"
},
        },
        {
          id: "ciealecon-u3-gl-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how globalisation can increase inequality within a country.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Globalisation and inequality",
                              "statement": "Winners vs losers within economies."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Some sectors (export-oriented, skilled) gain while others (import-competing, low-skill) lose.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Offshoring and automation reduce demand for low-skilled labour → wage gaps widen.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Capital mobility lets firms relocate to low-wage locations, weakening bargaining power of workers.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Globalisation rewards mobile capital and skilled labour while low-skilled workers face competition from abroad."
},
        },
        {
          id: "ciealecon-u3-gl-q10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether globalisation benefits developing countries.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Globalisation and development",
                              "statement": "Opportunities vs vulnerabilities."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Benefits: market access, FDI inflows, technology and skills transfer.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Risks: exploitation of resources/labour, environmental damage, dependency on volatile markets.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Outcomes depend on domestic institutions, education and policy choices.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Evidence is mixed — some countries have gained greatly, others have been marginalised.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Balanced judgement: benefits are real but conditional on good governance and careful sequencing.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Globalisation can benefit developing countries but outcomes depend on institutions and policy."
},
        },
        {
          id: "ciealecon-u3-gl-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The World Bank primarily:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Provides loans and grants for development projects"
                    },
                    {
                              "id": "b",
                              "text": "Defends fixed exchange rates"
                    },
                    {
                              "id": "c",
                              "text": "Sets and enforces global trade rules"
                    },
                    {
                              "id": "d",
                              "text": "Regulates international banks"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "World Bank",
                              "statement": "Development lender."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "World Bank funds development projects and poverty reduction.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Development lending"
},
        },
        {
          id: "ciealecon-u3-gl-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Foreign direct investment inflows rise from $40bn to $46bn. Calculate the percentage increase.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 15
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Percentage change",
                              "statement": "(New - Old) / Old x 100."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(46 - 40) / 40 x 100 = 15%.",
                              "working": "(6 / 40) x 100 = 15",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "FDI inflows rose by 15%.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "15%"
},
        },
        {
          id: "ciealecon-u3-gl-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the WTO promotes freer international trade.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "WTO role",
                              "statement": "Rules and negotiation forum."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Provides a forum for negotiating reductions in tariffs and other barriers.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Settles trade disputes between members through a rules-based system.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Enforceable agreements give members confidence to liberalise.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "WTO negotiates liberalisation and enforces trade rules through dispute settlement."
},
        },
        {
          id: "ciealecon-u3-gl-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A likely cost of globalisation for a developed economy is:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Always higher consumer prices"
                    },
                    {
                              "id": "b",
                              "text": "Job losses in industries exposed to low-cost imports"
                    },
                    {
                              "id": "c",
                              "text": "Reduced competition in domestic markets"
                    },
                    {
                              "id": "d",
                              "text": "Lower productivity growth"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Globalisation costs",
                              "statement": "Structural job losses."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cheap imports can displace domestic production and jobs.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Job losses in import-exposed industries"
},
        },
        {
          id: "ciealecon-u3-gl-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A country's export earnings grow by 5% each year. If exports are initially $200bn, calculate export earnings after two years.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 220.5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Compound growth",
                              "statement": "Final = Initial x (1 + g)^n."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "200 x (1.05)^2 = 200 x 1.1025 = 220.5.",
                              "working": "200 x 1.05^2 = 220.5",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Exports reach $220.5bn after two years.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$220.5bn"
},
        },
        {
          id: "ciealecon-u3-gl-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Discuss the implications of regional trading blocs for the world trading system.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Regional blocs",
                              "statement": "Trade creation vs diversion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Blocs promote trade creation among members by removing internal barriers.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Trade diversion: imports shift from efficient outsiders to bloc members.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Can undermine the multilateral WTO system if blocs become exclusionary.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Net effect depends on whether blocs are open or closed to outsiders.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Regional blocs boost internal trade but may divert trade and weaken multilateral liberalisation."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealecon-u3-gl-notes",
      title: "Globalisation — notes",
      summary: "Technology+liberalisation→globalisation. WTO/IMF/World Bank shape rules.",
      sections: [
        { heading: "Key idea", body: "Globalisation integrates economies but creates winners and losers." },
        { heading: "Institutions", body: "WTO (trade), IMF (BOP), World Bank (development)." },
      ],
    },
  ],
};
