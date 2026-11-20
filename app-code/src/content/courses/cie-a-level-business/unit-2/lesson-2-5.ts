import type { Lesson } from "../../../types.ts";

export const lesson385: Lesson = {
  id: "ciealbus-u2-lesson-2-5",
  code: "2-5",
  title: "Globalisation and International Business",
  goal: "I CAN explain globalisation drivers and international business strategies.",
  standards: ["Cambridge A Level Business 9707", "Paper 2: international"],
  
  vocabulary: [
    { term: "Globalisation", definition: "Increasing interconnectedness of world economies." },
    { term: "Multinational corporation (MNC)", definition: "Company operating in multiple countries." },
    { term: "Foreign direct investment (FDI)", definition: "Investment in foreign business operations." },
    { term: "Outsourcing", definition: "Contracting work to external providers." },
    { term: "Offshoring", definition: "Moving production to lower-cost countries." },
    { term: "Supply chain", definition: "Global network of suppliers/producers." },
  ],
  concepts: [
    {
      id: "ciealbus-u2-s5-glob",
      title: "Globalisation",
      skill: "Understand global business drivers and strategies.",
      lesson: {
        sections: [
          {
            heading: "Globalisation drivers",
            body: "Technology (internet, transport), trade liberalisation, MNC expansion, economic integration. Reduces barriers, increases interdependence.",
          },
          {
            heading: "International strategies",
            body: "Exporting, licensing, franchising, joint ventures, wholly-owned subsidiaries. MNCs seek markets, resources, cost advantages.",
          },
          {
            heading: "Implications",
            body: "Benefits: economies of scale, market access, technology transfer. Costs: job losses in home country, exploitation in developing countries, environmental damage.",
          },
        ],
        keyFormulas: [
          { name: "Globalisation", statement: "world economic integration" },
          { name: "MNC", statement: "multinational corporation" },
          { name: "FDI", statement: "foreign direct investment" },
        ],
        workedExample: {
          problem: "Why do companies offshore production?",
          solution: "Lower labour costs, weaker regulations, access to resources/markets. But risks: quality control, ethical concerns, supply chain disruption.",
        },
      },
      questions: [
        {
          id: "ciealbus-u2-gb-q1",
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
                              "reasoning": "Globalisation = interconnected world economies.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "World integration"
},
        },
        {
          id: "ciealbus-u2-gb-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an MNC? Give an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "MNC",
                              "statement": "Multinational corporation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Company operating in multiple countries.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Example: Coca-Cola, McDonald's, Toyota.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Multinational corporation example"
},
        },
        {
          id: "ciealbus-u2-gb-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are the benefits and costs of globalisation?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Globalisation",
                              "statement": "Benefits vs costs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Benefits: economies of scale, market access.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Costs: job losses, exploitation, environment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Complex trade-offs.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Benefits vs costs"
},
        },
        {
          id: "ciealbus-u2-gb-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define globalisation, MNC, FDI, outsourcing, offshoring, supply chain. (b) What is globalisation? (c) What is an MNC? (d) What is FDI? (e) What are globalisation drivers? (f) What are international business strategies? (g) What are benefits of globalisation? (h) Evaluate whether globalisation benefits or harms developing countries.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Globalisation",
                              "statement": "Drivers, strategies."
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
                              "reasoning": "(c) Multinational corporation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Foreign direct investment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Technology, trade liberalisation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Exporting, licensing, FDI.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Scale, markets, technology.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Globalisation and international business."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealbus-u2-gb-notes",
      title: "Globalisation — notes",
      summary: "Technology+trade liberalisation→globalisation. MNCs seek markets/resources. Benefits vs costs complex.",
      sections: [
        { heading: "Key idea", body: "Globalisation integrates economies but creates winners and losers." },
        { heading: "Strategies", body: "Exporting→licensing→joint ventures→wholly-owned subsidiaries." },
      ],
    },
  ],
};
