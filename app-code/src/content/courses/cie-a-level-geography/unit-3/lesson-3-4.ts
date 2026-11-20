import type { Lesson } from "../../../types.ts";

export const lesson534: Lesson = {
  id: "ciealgeo-u3-lesson-3-4",
  code: "3-4",
  title: "Global Trade and Economic Integration",
  goal: "I CAN explain trade patterns, economic blocs and globalisation impacts.",
  standards: ["Cambridge A Level Geography 9696", "Paper 2: trade"],
  
  vocabulary: [
    { term: "Trade bloc", definition: "Group of countries with preferential trade." },
    { term: "FTA", definition: "Free trade agreement." },
    { term: "Customs union", definition: "FTA + common external tariff." },
    { term: "Single market", definition: "FTA + free movement of factors." },
    { term: "Globalisation", definition: "Increasing economic interconnectedness." },
    { term: "Offshoring", definition: "Moving production to lower-cost countries." },
  ],
  concepts: [
    {
      id: "ciealgeo-u3-s4-trade",
      title: "Global trade",
      skill: "Analyse trade patterns and integration.",
      lesson: {
        sections: [
          {
            heading: "Trade blocs",
            body: "FTA: reduce tariffs. Customs union: + common external tariff. Single market: + free movement of goods/services/capital/labour. EU most advanced.",
          },
          {
            heading: "Globalisation impacts",
            body: "Benefits: efficiency, growth, market access. Costs: job losses, inequality, environmental damage, loss of sovereignty.",
          },
        ],
        keyFormulas: [
          { name: "FTA", statement: "tariff reduction" },
          { name: "Customs union", statement: "+common tariff" },
          { name: "Single market", statement: "+free movement" },
        ],
        workedExample: {
          problem: "How does EU single market benefit businesses?",
          solution: "Free movement of goods, services, capital, labour — no tariffs, wider market access, economies of scale.",
        },
      },
      questions: [
        {
          id: "ciealgeo-u3-tr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a free trade agreement?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Agreement to reduce/eliminate tariffs"
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
                              "name": "FTA",
                              "statement": "Tariff reduction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "FTA = tariff reduction agreement.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Tariff reduction"
},
        },
        {
          id: "ciealgeo-u3-tr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between FTA and single market?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "FTA vs single market",
                              "statement": "Integration levels."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "FTA: reduce tariffs on goods.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Single market: + free movement of services/capital/labour.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "FTA vs single market"
},
        },
        {
          id: "ciealgeo-u3-tr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are the impacts of globalisation?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Globalisation",
                              "statement": "Impacts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Benefits: efficiency, growth, access.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Costs: jobs, inequality, environment.",
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
          id: "ciealgeo-u3-tr-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define trade bloc, FTA, customs union, single market, globalisation, offshoring. (b) What is FTA? (c) What is single market? (d) What are trade blocs? (e) What are globalisation impacts? (f) What is offshoring? (g) What are benefits of trade agreements? (h) Evaluate whether globalisation benefits or harms developing countries.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Global trade",
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
                              "reasoning": "(b) Tariff reduction.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Free movement.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Trade groups.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Efficiency vs inequality.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Production abroad.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Market access, efficiency.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Winners/losers — not equal.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Global trade analysis."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealgeo-u3-tr-notes",
      title: "Global trade — notes",
      summary: "FTA→customs union→single market increasing integration. Globalisation complex.",
      sections: [
        { heading: "Key idea", body: "Trade agreements reduce barriers but create winners/losers." },
        { heading: "Globalisation", body: "Integrates economies but inequality and environmental costs." },
      ],
    },
  ],
};
