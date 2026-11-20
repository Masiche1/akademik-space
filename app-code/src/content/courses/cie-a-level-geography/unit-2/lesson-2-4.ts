import type { Lesson } from "../../../types.ts";

export const lesson524: Lesson = {
  id: "ciealgeo-u2-lesson-2-4",
  code: "2-4",
  title: "Resource Issues and Sustainability",
  goal: "I CAN explain resource scarcity, sustainability and management.",
  standards: ["Cambridge A Level Geography 9696", "Paper 2: resources"],
  
  vocabulary: [
    { term: "Renewable resources", definition: "Resources that regenerate." },
    { term: "Non-renewable resources", definition: "Finite resources." },
    { term: "Carrying capacity", definition: "Max population environment supports." },
    { term: "Sustainability", definition: "Meeting needs without compromising future." },
    { term: "Tragedy of commons", definition: "Overuse of shared resources." },
    { term: "Resource curse", definition: "Resource wealth harming development." },
  ],
  concepts: [
    {
      id: "ciealgeo-u2-s4-res",
      title: "Resources",
      skill: "Analyse resource issues.",
      lesson: {
        sections: [
          {
            heading: "Resource types",
            body: "Renewable: solar, wind, water, forests (if managed). Non-renewable: fossil fuels, minerals. Some resources renewable but overexploited → effectively non-renewable.",
          },
          {
            heading: "Resource challenges",
            body: "Scarcity, degradation, pollution, conflict over resources. Water stress, soil erosion, deforestation.",
          },
          {
            heading: "Management",
            body: "Sustainable use, efficiency, substitution, recycling, protected areas. Resource curse: abundance can harm governance/development.",
          },
        ],
        keyFormulas: [
          { name: "Renewable", statement: "regenerate" },
          { name: "Non-renewable", statement: "finite" },
          { name: "Tragedy", statement: "overuse" },
        ],
        workedExample: {
          problem: "Why do some resource-rich countries remain poor?",
          solution: "Resource curse: Dutch disease (currency appreciation), corruption, conflict, lack of diversification.",
        },
      },
      questions: [
        {
          id: "ciealgeo-u2-res-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between renewable and non-renewable resources?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Renewable regenerates, non-renewable is finite"
                    },
                    {
                              "id": "b",
                              "text": "Same thing"
                    },
                    {
                              "id": "c",
                              "text": "Renewable is cheaper"
                    },
                    {
                              "id": "d",
                              "text": "Non-renewable is cleaner"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Resources",
                              "statement": "Types."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Renewable regenerates, non-renewable finite.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Regenerate vs finite"
},
        },
        {
          id: "ciealgeo-u2-res-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the tragedy of the commons?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Tragedy",
                              "statement": "Overuse."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Overuse of shared resources.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Individual benefits exceed individual costs.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Shared resource overuse"
},
        },
        {
          id: "ciealgeo-u2-res-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the resource curse?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Resource curse",
                              "statement": "Wealth harm."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Resource abundance harms development.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Dutch disease, corruption, conflict.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Lack of diversification.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Resource wealth harm"
},
        },
        {
          id: "ciealgeo-u2-res-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define renewable, non-renewable, carrying capacity, sustainability, tragedy of commons, resource curse. (b) What is renewable? (c) What is non-renewable? (d) What is tragedy of commons? (e) What is resource curse? (f) What are resource challenges? (g) What are management strategies? (h) Evaluate whether resource scarcity is a major development barrier.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Resources",
                              "statement": "Sustainability."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Regenerate.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Finite.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Overuse shared.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Wealth harm.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Scarcity, degradation, conflict.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Efficiency, substitution, recycling.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Resource issues analysis."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealgeo-u2-res-notes",
      title: "Resources — notes",
      summary: "Renewable vs non-renewable. Tragedy of commons. Resource curse paradox.",
      sections: [
        { heading: "Key idea", body: "Resource management crucial for sustainable development." },
        { heading: "Resource curse", body: "Abundance can harm development through corruption/dependency." },
      ],
    },
  ],
};
