import type { Lesson } from "../../../types.ts";

export const lesson544: Lesson = {
  id: "ciealgeo-u4-lesson-4-4",
  code: "4-4",
  title: "Contemporary Geographical Issues",
  goal: "I CAN analyse current geographical challenges and solutions.",
  standards: ["Cambridge A Level Geography 9696", "Paper 4: contemporary"],
  
  vocabulary: [
    { term: "Climate change", definition: "Long-term climate alteration." },
    { term: "Sea level rise", definition: "Rising ocean levels from warming." },
    { term: "Food security", definition: "Reliable access to sufficient food." },
    { term: "Water stress", definition: "Demand exceeds supply." },
    { term: "Sustainable development", definition: "Meeting needs without compromising future." },
    { term: "Resilience", definition: "Ability to recover from shocks." },
  ],
  concepts: [
    {
      id: "ciealgeo-u4-s4-cont",
      title: "Contemporary issues",
      skill: "Analyse current geographical challenges.",
      lesson: {
        sections: [
          {
            heading: "Climate change",
            body: "Rising temperatures, sea level rise, extreme weather. Impacts: agriculture, water, health, displacement. Mitigation vs adaptation.",
          },
          {
            heading: "Resource issues",
            body: "Food security, water stress, energy transitions. Population growth vs resource limits.",
          },
          {
            heading: "Solutions",
            body: "Renewable energy, sustainable agriculture, water management, international cooperation.",
          },
        ],
        keyFormulas: [
          { name: "Climate change", statement: "long-term alteration" },
          { name: "Sea level rise", statement: "ocean warming" },
          { name: "Resilience", statement: "recovery ability" },
        ],
        workedExample: {
          problem: "How can cities adapt to climate change?",
          solution: "Green infrastructure, flood defences, heat action plans, resilient building codes, water management.",
        },
      },
      questions: [
        {
          id: "ciealgeo-u4-cont-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is climate change?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Long-term climate alteration"
                    },
                    {
                              "id": "b",
                              "text": "Daily weather"
                    },
                    {
                              "id": "c",
                              "text": "Seasonal change"
                    },
                    {
                              "id": "d",
                              "text": "A natural cycle"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Climate change",
                              "statement": "Long-term alteration."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Climate change = long-term alteration.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Long-term alteration"
},
        },
        {
          id: "ciealgeo-u4-cont-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is sea level rise caused by?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Sea level rise",
                              "statement": "Ocean warming."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Thermal expansion of water.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Melting glaciers/ice caps.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Thermal expansion + melting"
},
        },
        {
          id: "ciealgeo-u4-cont-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are the impacts of climate change?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Climate impacts",
                              "statement": "Effects."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Agriculture, water, health affected.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Extreme weather, displacement.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Disproportionate impact on poor.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Agriculture, water, health"
},
        },
        {
          id: "ciealgeo-u4-cont-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define climate change, sea level rise, food security, water stress, sustainable development, resilience. (b) What is climate change? (c) What causes sea level rise? (d) What are climate impacts? (e) What is water stress? (f) What are solutions? (g) What is resilience? (h) Evaluate whether countries should prioritise mitigation or adaptation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Contemporary",
                              "statement": "Issues, solutions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Long-term alteration.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Thermal expansion + melting.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Agriculture, water, health.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Demand exceeds supply.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Renewables, sustainable agriculture.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Recovery ability.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Both needed — context dependent.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Contemporary issues analysis."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealgeo-u4-cont-notes",
      title: "Contemporary — notes",
      summary: "Climate change impacts agriculture/water/health. Mitigation vs adaptation needed.",
      sections: [
        { heading: "Key idea", body: "Contemporary challenges require both mitigation and adaptation." },
        { heading: "Resilience", body: "Ability to recover from shocks crucial for vulnerable communities." },
      ],
    },
  ],
};
