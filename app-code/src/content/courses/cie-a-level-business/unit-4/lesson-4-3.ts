import type { Lesson } from "../../../types.ts";

export const lesson403: Lesson = {
  id: "ciealbus-u4-lesson-4-3",
  code: "4-3",
  title: "International Trade Agreements and Bodies",
  goal: "I CAN explain WTO, regional trade agreements and their implications.",
  standards: ["Cambridge A Level Business 9707", "Paper 4: trade agreements"],
  
  vocabulary: [
    { term: "WTO", definition: "World Trade Organization — global trade rules." },
    { term: "FTA", definition: "Free trade agreement between countries." },
    { term: "Customs union", definition: "FTA + common external tariff." },
    { term: "Single market", definition: "FTA + free movement of goods/services/capital/labour." },
    { term: "Most favoured nation", definition: "WTO principle of equal treatment." },
    { term: "Trade dispute", definition: "Conflict between trading nations." },
  ],
  concepts: [
    {
      id: "ciealbus-u4-s3-trade",
      title: "Trade agreements",
      skill: "Understand international trade frameworks.",
      lesson: {
        sections: [
          {
            heading: "WTO",
            body: "Global body promoting free trade. Sets rules, resolves disputes. Most favoured nation principle — equal treatment. Can authorise sanctions.",
          },
          {
            heading: "Regional agreements",
            body: "FTA: reduce/eliminate tariffs between members. Customs union: FTA + common external tariff. Single market: + free movement of factors. EU is most advanced example.",
          },
        ],
        keyFormulas: [
          { name: "WTO", statement: "World Trade Organization" },
          { name: "FTA", statement: "Free trade agreement" },
          { name: "Single market", statement: "Full economic integration" },
        ],
        workedExample: {
          problem: "How does EU single market benefit businesses?",
          solution: "Free movement of goods, services, capital, labour — no tariffs, no border checks, wider market access.",
        },
      },
      questions: [
        {
          id: "ciealbus-u4-ta-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the WTO?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "World Trade Organization — global trade rules"
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
                              "name": "WTO",
                              "statement": "Trade rules body."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "WTO = global trade rules.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Global trade rules"
},
        },
        {
          id: "ciealbus-u4-ta-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a free trade agreement?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "FTA",
                              "statement": "Trade agreement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Agreement between countries to reduce/eliminate tariffs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Increases trade between members.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Tariff reduction agreement"
},
        },
        {
          id: "ciealbus-u4-ta-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the difference between FTA and single market?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Trade agreements",
                              "statement": "FTA vs single market."
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
                    },
                    {
                              "reasoning": "Single market deeper integration.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "FTA vs single market"
},
        },
        {
          id: "ciealbus-u4-ta-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define WTO, FTA, customs union, single market, most favoured nation, trade dispute. (b) What is WTO? (c) What is FTA? (d) What is a single market? (e) What is most favoured nation? (f) What are benefits of trade agreements? (g) What are drawbacks? (h) Evaluate whether trade agreements benefit businesses.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Trade agreements",
                              "statement": "Frameworks, effects."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Global trade rules.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Tariff reduction.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Full economic integration.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Equal treatment principle.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Market access, efficiency.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Job losses, sovereignty loss.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Trade agreements analysis."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealbus-u4-ta-notes",
      title: "Trade agreements — notes",
      summary: "WTO global rules. FTA→customs union→single market increasing integration.",
      sections: [
        { heading: "Key idea", body: "Trade agreements reduce barriers but create winners and losers." },
        { heading: "EU example", body: "Single market allows free movement of goods, services, capital, labour." },
      ],
    },
  ],
};
