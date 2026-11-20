import type { Lesson } from "../../../types.ts";

export const lesson402: Lesson = {
  id: "ciealbus-u4-lesson-4-2",
  code: "4-2",
  title: "Multinational Corporations and Global Business",
  goal: "I CAN analyse MNC strategies and their impact on host and home countries.",
  standards: ["Cambridge A Level Business 9707", "Paper 4: MNCs"],
  
  vocabulary: [
    { term: "MNC", definition: "Company operating in multiple countries." },
    { term: "FDI", definition: "Foreign direct investment." },
    { term: "Transfer pricing", definition: "Pricing between MNC subsidiaries." },
    { term: "Offshoring", definition: "Moving production to lower-cost countries." },
    { term: "Global supply chain", definition: "International network of suppliers." },
    { term: "Tax haven", definition: "Country with low/no taxes attracting MNCs." },
  ],
  concepts: [
    {
      id: "ciealbus-u4-s2-mnc",
      title: "Multinational corporations",
      skill: "Analyse MNC impact and strategies.",
      lesson: {
        sections: [
          {
            heading: "MNC strategies",
            body: "Market-seeking: access new customers. Resource-seeking: cheaper inputs/labour. Efficiency-seeking: lower costs. Strategic asset-seeking: acquire technology/brands.",
          },
          {
            heading: "Impact on host countries",
            body: "Positive: jobs, technology transfer, tax revenue, infrastructure. Negative: profit repatriation, exploitation, environmental damage, crowding out local firms.",
          },
          {
            heading: "Impact on home countries",
            body: "Positive: market access, profits. Negative: job losses from offshoring, tax avoidance.",
          },
        ],
        keyFormulas: [
          { name: "MNC", statement: "multinational corporation" },
          { name: "FDI", statement: "foreign direct investment" },
          { name: "Offshoring", statement: "production abroad" },
        ],
        workedExample: {
          problem: "A clothing brand moves production to Bangladesh. Impacts?",
          solution: "Host: jobs but low wages/poor conditions. Home: cheaper goods but job losses. Consumer: lower prices. Complex trade-offs.",
        },
      },
      questions: [
        {
          id: "ciealbus-u4-mnc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an MNC?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Company operating in multiple countries"
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
                              "text": "A market structure"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "MNC",
                              "statement": "Multinational."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "MNC = operates in multiple countries.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Multinational corporation"
},
        },
        {
          id: "ciealbus-u4-mnc-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is FDI?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "FDI",
                              "statement": "Foreign investment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Investment in foreign business operations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Includes building factories, buying companies.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Foreign direct investment"
},
        },
        {
          id: "ciealbus-u4-mnc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are the impacts of MNCs on host countries?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "MNC impact",
                              "statement": "Host country effects."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Positive: jobs, technology, tax revenue.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Negative: exploitation, profit repatriation, environment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Net impact depends on regulation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Host country impacts"
},
        },
        {
          id: "ciealbus-u4-mnc-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define MNC, FDI, transfer pricing, offshoring, global supply chain, tax haven. (b) What is an MNC? (c) What is FDI? (d) What are MNC strategies? (e) What are impacts on host countries? (f) What are impacts on home countries? (g) What is offshoring? (h) Evaluate whether MNCs benefit or harm developing countries.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "MNCs",
                              "statement": "Impact analysis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Multinational corporation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Foreign direct investment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Market, resource, efficiency seeking.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Jobs vs exploitation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Profits vs job losses.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Production abroad.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "MNC impact analysis."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealbus-u4-mnc-notes",
      title: "MNCs — notes",
      summary: "MNCs seek markets/resources/efficiency. Host: jobs+technology vs exploitation+environment.",
      sections: [
        { heading: "Key idea", body: "MNCs create complex economic and social impacts — regulation matters." },
        { heading: "Strategies", body: "Market-seeking, resource-seeking, efficiency-seeking, strategic asset-seeking." },
      ],
    },
  ],
};
