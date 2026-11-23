import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "s1-u1-lesson-1-1",
  code: "1-1",
  title: "What Plants Need",
  goal: "I CAN identify what plants need to survive.",
  standards: ["1-LS1-1", "1-LS1-2"],
  vocabulary: [
    { term: "Plant", definition: "A living thing that makes food from sunlight." },
    { term: "Need", definition: "Something required to live." },
    { term: "Sunlight", definition: "Light plants need to make food." },
    { term: "Water", definition: "Liquid plants need." },
    { term: "Air", definition: "Plants need air." },
    { term: "Soil", definition: "Dirt plants grow in." },
    { term: "Root", definition: "Part that takes in water." },
    { term: "Leaf", definition: "Part that catches sunlight." },
  ],
  concepts: [
    {
      id: "s1-u1-plant-needs",
      title: "What plants need",
      skill: "Plants need sunlight, water, air and soil to survive and grow.",
      lesson: {
        sections: [
          {
            heading: "Plants need care",
            body: "Plants are **living things**. They need **sunlight** (to make food), **water**, **air**, and **soil** to survive and grow.",
          },
          {
            heading: "Root and leaf",
            body: "**Roots** take in water from the soil; **leaves** catch **sunlight** to make food for the plant.",
          },
        ],
        keyFormulas: [
          { name: "Plant needs", statement: "Sunlight + water + air + soil = healthy plant." },
        ],
        workedExample: {
          problem: "A plant is wilting. What might it be missing?",
          solution: "It might need more **water** or **sunlight**.",
        },
      },
      questions: [
        {
          id: "s1-u1-plant-needs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What do plants need to make food?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "water only"
                    },
                    {
                              "id": "b",
                              "text": "sunlight"
                    },
                    {
                              "id": "c",
                              "text": "soil only"
                    },
                    {
                              "id": "d",
                              "text": "nothing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Plants need sunlight for food."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Plants need sunlight for food.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**sunlight**",
          "commonErrors": [
                    "Picks water/soil only."
          ]
},
        },
        {
          id: "s1-u1-plant-needs-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which part of a plant takes in water?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "leaf"
                    },
                    {
                              "id": "b",
                              "text": "root"
                    },
                    {
                              "id": "c",
                              "text": "flower"
                    },
                    {
                              "id": "d",
                              "text": "stem"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Roots take in water."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Roots take in water.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**root**",
          "commonErrors": [
                    "Picks leaf."
          ]
},
        },
        {
          id: "s1-u1-plant-needs-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "List the four things plants need to survive. What happens if they miss one?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Plant needs",
                              "statement": "Sunlight + water + air + soil."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lists all four needs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains what happens if missing.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Needs sunlight, water, air, soil; without water plant wilts.'**",
          "commonErrors": [
                    "Lists fewer than 4.",
                    "No effect stated."
          ]
},
        },
        {
          id: "s1-u1-plant-needs-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a need of plants?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "sunlight"
                    },
                    {
                              "id": "b",
                              "text": "water"
                    },
                    {
                              "id": "c",
                              "text": "a dog"
                    },
                    {
                              "id": "d",
                              "text": "soil"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Plants need sunlight, water, soil — not a dog."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Plants need sunlight, water, soil — not a dog.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**a dog**",
          "commonErrors": [
                    "Picks a real need."
          ]
},
        },
        {
          id: "s1-u1-plant-needs-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Experiment: put one plant in sunlight+water and one without. Predict what happens to each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Plant needs",
                              "statement": "Needs affect growth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Predicts sunny/watered plant grows.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Predicts deprived plant wilts.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Plant with needs grows healthy; plant without wilts.'**",
          "commonErrors": [
                    "Both grow same.",
                    "No prediction."
          ]
},
        },
        {
          id: "s1-u1-plant-needs-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Plant\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Something required to live."
                    },
                    {
                              "id": "b",
                              "text": "A living thing that makes food from sunlight."
                    },
                    {
                              "id": "c",
                              "text": "Light plants need to make food."
                    },
                    {
                              "id": "d",
                              "text": "Liquid plants need."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Plant\" means A living thing that makes food from sunlight."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Plant\" means A living thing that makes food from sunlight.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Plant** = A living thing that makes food from sunlight.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u1-plant-needs-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Need\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Light plants need to make food."
                    },
                    {
                              "id": "b",
                              "text": "Liquid plants need."
                    },
                    {
                              "id": "c",
                              "text": "Plants need air."
                    },
                    {
                              "id": "d",
                              "text": "Something required to live."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Need\" means Something required to live."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Need\" means Something required to live.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Need** = Something required to live.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u1-plant-needs-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sunlight\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Liquid plants need."
                    },
                    {
                              "id": "b",
                              "text": "Light plants need to make food."
                    },
                    {
                              "id": "c",
                              "text": "Plants need air."
                    },
                    {
                              "id": "d",
                              "text": "Dirt plants grow in."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sunlight\" means Light plants need to make food."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sunlight\" means Light plants need to make food.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sunlight** = Light plants need to make food.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
