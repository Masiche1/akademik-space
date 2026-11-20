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
                              "text": "Increasing interconnectedness of world economies"
                    },
                    {
                              "id": "b",
                              "text": "A type of tax"
                    },
                    {
                              "id": "c",
                              "text": "A trade barrier"
                    },
                    {
                              "id": "d",
                              "text": "A business structure"
                    }
          ],
          "correctChoiceId": "a"
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
