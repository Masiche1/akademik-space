import type { Lesson } from "../../../types.ts";

export const lesson531: Lesson = {
  id: "ciealgeo-u3-lesson-3-1",
  code: "3-1",
  title: "Economic Geography: Agriculture and Food Systems",
  goal: "I CAN explain agricultural systems, food production and sustainability.",
  standards: ["Cambridge A Level Geography 9696", "Paper 2: economic"],
  
  vocabulary: [
    { term: "Subsistence agriculture", definition: "Farming for own consumption." },
    { term: "Commercial agriculture", definition: "Farming for profit." },
    { term: "Intensive agriculture", definition: "High inputs per hectare." },
    { term: "Extensive agriculture", definition: "Low inputs per hectare." },
    { term: "Green revolution", definition: "Technology boosting food production." },
    { term: "Food security", definition: "Reliable access to sufficient food." },
  ],
  concepts: [
    {
      id: "ciealgeo-u3-s1-agri",
      title: "Agriculture",
      skill: "Analyse agricultural systems.",
      lesson: {
        sections: [
          {
            heading: "Agricultural systems",
            body: "Subsistence: family farms, low technology. Commercial: large-scale, mechanised. Intensive: high yield/hectare (rice paddies). Extensive: low yield/hectare (ranching).",
          },
          {
            heading: "Green revolution",
            body: "High-yield varieties, fertilisers, irrigation, pesticides. Increased production but environmental costs, dependency on inputs.",
          },
          {
            heading: "Food security",
            body: "Availability, access, utilisation, stability. Challenges: climate change, population growth, inequality, waste.",
          },
        ],
        keyFormulas: [
          { name: "Subsistence", statement: "own consumption" },
          { name: "Commercial", statement: "for profit" },
          { name: "Green revolution", statement: "tech boost" },
        ],
        workedExample: {
          problem: "How did the Green Revolution affect agriculture?",
          solution: "Increased yields dramatically but caused environmental degradation, soil depletion, pesticide resistance, dependency on chemical inputs.",
        },
      },
      questions: [
        {
          id: "ciealgeo-u3-ag-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is subsistence agriculture?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Farming for own consumption"
                    },
                    {
                              "id": "b",
                              "text": "Farming for profit"
                    },
                    {
                              "id": "c",
                              "text": "Large-scale farming"
                    },
                    {
                              "id": "d",
                              "text": "A type of industry"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Subsistence",
                              "statement": "Own consumption."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Subsistence = farming for self.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Own consumption"
},
        },
        {
          id: "ciealgeo-u3-ag-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between intensive and extensive agriculture?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Intensive vs extensive",
                              "statement": "Input levels."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Intensive: high inputs/hectare.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Extensive: low inputs/hectare.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "High vs low inputs"
},
        },
        {
          id: "ciealgeo-u3-ag-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What was the Green Revolution? What were its impacts?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Green Revolution",
                              "statement": "Tech boost."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "High-yield varieties, fertilisers, irrigation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Increased production massively.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Environmental costs, dependency.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Tech boost production"
},
        },
        {
          id: "ciealgeo-u3-ag-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define subsistence, commercial, intensive, extensive, Green Revolution, food security. (b) What is subsistence? (c) What is intensive? (d) What was Green Revolution? (e) What is food security? (f) What are agricultural challenges? (g) What are sustainable practices? (h) Evaluate whether Green Revolution was beneficial.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Agriculture",
                              "statement": "Systems, sustainability."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Own consumption.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) High inputs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Tech boost.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Reliable food access.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Climate, population, inequality.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Organic, permaculture, conservation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Production up but environmental costs.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Agricultural systems analysis."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealgeo-u3-ag-notes",
      title: "Agriculture — notes",
      summary: "Subsistence vs commercial. Green Revolution boosted production but environmental costs.",
      sections: [
        { heading: "Key idea", body: "Modern agriculture balances productivity with sustainability." },
        { heading: "Food security", body: "Availability + access + utilisation + stability needed." },
      ],
    },
  ],
};
