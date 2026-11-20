import type { Lesson } from "../../../types.ts";

export const lesson533: Lesson = {
  id: "ciealgeo-u3-lesson-3-3",
  code: "3-3",
  title: "Tourism and Services",
  goal: "I CAN explain tourism impacts, sustainability and management.",
  standards: ["Cambridge A Level Geography 9696", "Paper 2: tourism"],
  
  vocabulary: [
    { term: "Mass tourism", definition: "Large-scale tourism development." },
    { term: "Eco-tourism", definition: "Responsible tourism to natural areas." },
    { term: "Tourism multiplier", definition: "Tourism spending → wider economic benefits." },
    { term: "Seasonality", definition: "Variation in tourism demand by season." },
    { term: "Carrying capacity", definition: "Max visitors environment can sustain." },
    { term: "Leakage", definition: "Tourism revenue lost to imports." },
  ],
  concepts: [
    {
      id: "ciealgeo-u3-s3-tour",
      title: "Tourism",
      skill: "Analyse tourism impacts.",
      lesson: {
        sections: [
          {
            heading: "Tourism impacts",
            body: "Economic: jobs, revenue, multiplier effect. Social: cultural exchange, but can cause tension. Environmental: pollution, habitat loss, but can fund conservation.",
          },
          {
            heading: "Sustainability",
            body: "Mass tourism vs eco-tourism. Carrying capacity limits. Seasonality challenges. Leakage reduces local benefits.",
          },
        ],
        keyFormulas: [
          { name: "Mass tourism", statement: "large-scale" },
          { name: "Eco-tourism", statement: "responsible" },
          { name: "Carrying capacity", statement: "visitor limit" },
        ],
        workedExample: {
          problem: "Why is mass tourism problematic for some destinations?",
          solution: "Environmental degradation, cultural commodification, infrastructure strain, seasonal unemployment, leakage reduces benefits.",
        },
      },
      questions: [
        {
          id: "ciealgeo-u3-tour-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is eco-tourism?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Responsible tourism to natural areas"
                    },
                    {
                              "id": "b",
                              "text": "Mass tourism"
                    },
                    {
                              "id": "c",
                              "text": "A type of hotel"
                    },
                    {
                              "id": "d",
                              "text": "A travel agency"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Eco-tourism",
                              "statement": "Responsible tourism."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Eco-tourism = responsible natural tourism.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Responsible tourism"
},
        },
        {
          id: "ciealgeo-u3-tour-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the tourism multiplier effect?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Multiplier",
                              "statement": "Economic benefit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tourism spending → wider economic benefits.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Revenue circulates through local economy.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Economic benefit"
},
        },
        {
          id: "ciealgeo-u3-tour-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are the environmental impacts of tourism?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Tourism impact",
                              "statement": "Environment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pollution, habitat loss, resource use.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Can also fund conservation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Carrying capacity limits needed.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Pollution, habitat loss"
},
        },
        {
          id: "ciealgeo-u3-tour-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define mass tourism, eco-tourism, multiplier, seasonality, carrying capacity, leakage. (b) What is eco-tourism? (c) What is multiplier? (d) What are tourism impacts? (e) What is seasonality? (f) What is leakage? (g) What is carrying capacity? (h) Evaluate whether tourism benefits or harms destinations.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Tourism",
                              "statement": "Impacts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Responsible tourism.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Economic benefit.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Economic, social, environmental.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Seasonal demand.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Revenue lost to imports.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Visitor limit.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Tourism analysis."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealgeo-u3-tour-notes",
      title: "Tourism — notes",
      summary: "Mass vs eco-tourism. Multiplier effect, seasonality, leakage challenges.",
      sections: [
        { heading: "Key idea", body: "Tourism can benefit or harm depending on management." },
        { heading: "Sustainability", body: "Carrying capacity, eco-tourism, local ownership key." },
      ],
    },
  ],
};
