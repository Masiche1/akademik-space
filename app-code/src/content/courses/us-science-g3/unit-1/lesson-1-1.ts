import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "sci3-u1-lesson-1-1",
  code: "1-1",
  title: "What Plants Need",
  goal: "I CAN explain what plants need to grow.",
  standards: ["LS1.A"],
  vocabulary: [
    { term: "Plant", definition: "A living thing that grows in ground." },
    { term: "Need", definition: "Something required." },
    { term: "Sunlight", definition: "Light from sun." },
    { term: "Water", definition: "Liquid for plants." },
    { term: "Air", definition: "Gases plants use." },
    { term: "Soil", definition: "Dirt where plants grow." },
    { term: "Grow", definition: "Get bigger." },
    { term: "Healthy", definition: "Growing well." },
  ],
  concepts: [
    {
      id: "sci3-u1-plant-needs",
      title: "What plants need",
      skill: "Identify what plants need: sunlight, water, air and soil.",
      lesson: {
        sections: [
          {
            heading: "Plants are living things",
            body: "Plants are **living things** that **grow**. Like all living things, they need certain things to stay **healthy**.",
          },
          {
            heading: "What they need",
            body: "Plants need **sunlight** (to make food), **water**, **air**, and **soil** (for nutrients). Without these, plants can't grow well.",
          },
        ],
        keyFormulas: [
          { name: "Plant needs", statement: "Sunlight + water + air + soil = healthy plant." },
        ],
        workedExample: {
          problem: "A plant in a dark closet is dying. What is it missing?",
          solution: "It's missing **sunlight** — plants need light to make food.",
        },
      },
      questions: [
        {
          id: "sci3-u1-plant-needs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What do plants need to grow?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only water"
                    },
                    {
                              "id": "b",
                              "text": "sunlight, water, air and soil"
                    },
                    {
                              "id": "c",
                              "text": "only sunlight"
                    },
                    {
                              "id": "d",
                              "text": "candy"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Plants need all four."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Plants need all four.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "sunlight, water, air and soil",
          "commonErrors": [
                    "Thinks plants need only one thing."
          ]
},
        },
        {
          id: "sci3-u1-plant-needs-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Plants use sunlight to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "make food"
                    },
                    {
                              "id": "b",
                              "text": "play"
                    },
                    {
                              "id": "c",
                              "text": "sleep"
                    },
                    {
                              "id": "d",
                              "text": "nothing"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Plants use sunlight to make food."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Plants use sunlight to make food.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "make food",
          "commonErrors": [
                    "Thinks sunlight is just for warmth."
          ]
},
        },
        {
          id: "sci3-u1-plant-needs-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Name two things a plant needs and explain why.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Plant needs",
                              "statement": "2 needs + why."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names 2 needs + reasons.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Sunlight — makes food; water — keeps it alive.'**",
          "commonErrors": [
                    "Cannot name needs.",
                    "No reasons."
          ]
},
        },
        {
          id: "sci3-u1-plant-needs-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Plants need air for...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "breathing in oxygen"
                    },
                    {
                              "id": "b",
                              "text": "making food with carbon dioxide"
                    },
                    {
                              "id": "c",
                              "text": "both breathing and making food"
                    },
                    {
                              "id": "d",
                              "text": "nothing"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Plants use CO2 for food and O2 for breathing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Plants use CO2 for food and O2 for breathing.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "both breathing and making food",
          "commonErrors": [
                    "Thinks plants only need water."
          ]
},
        },
        {
          id: "sci3-u1-plant-needs-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "What happens to a plant with no sunlight? Predict and explain.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Plant needs",
                              "statement": "Predict + explain."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Predicts what happens.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains why.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'It dies because it can't make food without sunlight.'**",
          "commonErrors": [
                    "Says it grows better.",
                    "No explanation."
          ]
},
        },
        {
          id: "sci3-u1-plant-needs-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Plant\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Something required."
                    },
                    {
                              "id": "b",
                              "text": "A living thing that grows in ground."
                    },
                    {
                              "id": "c",
                              "text": "Light from sun."
                    },
                    {
                              "id": "d",
                              "text": "Liquid for plants."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Plant\" means A living thing that grows in ground."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Plant\" means A living thing that grows in ground.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Plant** = A living thing that grows in ground.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u1-plant-needs-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Need\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Light from sun."
                    },
                    {
                              "id": "b",
                              "text": "Liquid for plants."
                    },
                    {
                              "id": "c",
                              "text": "Gases plants use."
                    },
                    {
                              "id": "d",
                              "text": "Something required."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Need\" means Something required."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Need\" means Something required.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Need** = Something required.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u1-plant-needs-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sunlight\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Liquid for plants."
                    },
                    {
                              "id": "b",
                              "text": "Light from sun."
                    },
                    {
                              "id": "c",
                              "text": "Gases plants use."
                    },
                    {
                              "id": "d",
                              "text": "Dirt where plants grow."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sunlight\" means Light from sun."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sunlight\" means Light from sun.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sunlight** = Light from sun.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
