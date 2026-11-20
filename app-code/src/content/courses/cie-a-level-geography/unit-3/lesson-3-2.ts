import type { Lesson } from "../../../types.ts";

export const lesson532: Lesson = {
  id: "ciealgeo-u3-lesson-3-2",
  code: "3-2",
  title: "Industrialisation and Economic Change",
  goal: "I CAN explain industrial location, deindustrialisation and economic restructuring.",
  standards: ["Cambridge A Level Geography 9696", "Paper 2: economic"],
  
  vocabulary: [
    { term: "Industrialisation", definition: "Shift from agriculture to manufacturing." },
    { term: "Deindustrialisation", definition: "Decline of manufacturing sector." },
    { term: "Footloose industry", definition: "Industry not tied to location." },
    { term: "Agglomeration", definition: "Clustering of industries." },
    { term: "Globalisation", definition: "Increasing economic interconnectedness." },
    { term: "Post-industrial economy", definition: "Service-dominated economy." },
  ],
  concepts: [
    {
      id: "ciealgeo-u3-s2-ind",
      title: "Industrialisation",
      skill: "Analyse industrial change.",
      lesson: {
        sections: [
          {
            heading: "Industrial location",
            body: "Factors: raw materials, labour, transport, markets, agglomeration economies, government incentives. Footloose industries seek low costs.",
          },
          {
            heading: "Deindustrialisation",
            body: "Manufacturing decline in developed countries — automation, competition from low-cost countries, service sector growth.",
          },
          {
            heading: "Globalisation",
            body: "Production fragmented globally. Supply chains span countries. MNCs locate where costs lowest.",
          },
        ],
        keyFormulas: [
          { name: "Industrialisation", statement: "agriculture→manufacturing" },
          { name: "Deindustrialisation", statement: "manufacturing decline" },
          { name: "Footloose", statement: "location flexible" },
        ],
        workedExample: {
          problem: "Why did manufacturing decline in UK/US?",
          solution: "Automation reduced labour needs, competition from Asia, service sector growth, globalisation shifted production.",
        },
      },
      questions: [
        {
          id: "ciealgeo-u3-ind-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is deindustrialisation?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Decline of manufacturing sector"
                    },
                    {
                              "id": "b",
                              "text": "Increase in manufacturing"
                    },
                    {
                              "id": "c",
                              "text": "A type of trade"
                    },
                    {
                              "id": "d",
                              "text": "Population growth"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Deindustrialisation",
                              "statement": "Manufacturing decline."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Deindustrialisation = manufacturing decline.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Manufacturing decline"
},
        },
        {
          id: "ciealgeo-u3-ind-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a footloose industry?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Footloose",
                              "statement": "Location flexible."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Industry not tied to specific location.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Seeks low costs, incentives.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Location flexible"
},
        },
        {
          id: "ciealgeo-u3-ind-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What factors influence industrial location?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Location",
                              "statement": "Factors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Raw materials, labour, transport.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Markets, agglomeration, incentives.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Globalisation changes calculus.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Location factors"
},
        },
        {
          id: "ciealgeo-u3-ind-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define industrialisation, deindustrialisation, footloose industry, agglomeration, globalisation, post-industrial. (b) What is industrialisation? (c) What is deindustrialisation? (d) What is footloose? (e) What factors influence location? (f) What causes deindustrialisation? (g) What is post-industrial economy? (h) Evaluate whether deindustrialisation is positive or negative.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Industrialisation",
                              "statement": "Change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Agriculture→manufacturing.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Manufacturing decline.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Location flexible.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Materials, labour, transport, markets.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Automation, competition, globalisation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Service-dominated.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Jobs lost but efficiency gained.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Industrial change analysis."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealgeo-u3-ind-notes",
      title: "Industrialisation — notes",
      summary: "Deindustrialisation=manufacturing decline. Footloose industries seek low costs.",
      sections: [
        { heading: "Key idea", body: "Economic restructuring shifts from manufacturing to services." },
        { heading: "Globalisation", body: "Production fragmented — supply chains span countries." },
      ],
    },
  ],
};
