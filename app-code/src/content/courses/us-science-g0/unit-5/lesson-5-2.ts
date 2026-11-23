import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "s0-u5-lesson-5-2",
  code: "5-2",
  title: "What Plants Need",
  goal: "I CAN describe what plants need to grow.",
  standards: ["K-LS1-1", "K-LS1-2"],
  vocabulary: [
    { term: "Need", definition: "Something required to live/grow." },
    { term: "Water", definition: "Liquid plants need." },
    { term: "Sunlight", definition: "Light plants need for food." },
    { term: "Soil", definition: "Dirt plants grow in." },
    { term: "Air", definition: "Plants need air too." },
    { term: "Grow", definition: "Get bigger." },
    { term: "Healthy", definition: "Growing well." },
    { term: "Die", definition: "Stop growing/living." },
  ],
  concepts: [
    {
      id: "s0-u5-plant-needs",
      title: "What plants need",
      skill: "Describe what plants need to grow: water, sunlight, soil, air.",
      lesson: {
        sections: [
          {
            heading: "Plants need things to grow",
            body: "Plants need **water**, **sunlight**, **soil**, and **air** to **grow**. Without these, plants may not grow well or may **die**.",
          },
          {
            heading: "Healthy plants",
            body: "A **healthy** plant has all its needs met — enough water, sunlight, soil and air. Watch a plant grow and see how it changes.",
          },
        ],
        keyFormulas: [
          { name: "Plant needs", statement: "Water + sunlight + soil + air = healthy growth." },
        ],
        workedExample: {
          problem: "A plant gets no water or sunlight. What happens?",
          solution: "It will **not grow well** or may **die** — it needs water and sunlight.",
        },
      },
      questions: [
        {
          id: "s0-u5-plant-needs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Plants need which of these to grow?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "candy"
                    },
                    {
                              "id": "b",
                              "text": "water, sunlight, soil, air"
                    },
                    {
                              "id": "c",
                              "text": "toys"
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
                              "statement": "Water + sunlight + soil + air."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Water + sunlight + soil + air.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**water, sun, soil, air**",
          "commonErrors": [
                    "Picks wrong needs."
          ]
},
        },
        {
          id: "s0-u5-plant-needs-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Sunlight helps plants by...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "making them cold"
                    },
                    {
                              "id": "b",
                              "text": "helping them make food"
                    },
                    {
                              "id": "c",
                              "text": "drying them out"
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
                              "statement": "Sunlight -> food (photosynthesis)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sunlight -> food (photosynthesis).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**makes food**",
          "commonErrors": [
                    "Thinks sunlight is useless."
          ]
},
        },
        {
          id: "s0-u5-plant-needs-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "List what a plant needs to grow. What happens if it doesn't get one of these?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Plant needs",
                              "statement": "List needs + consequence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lists needs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains consequence.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Water, sun, soil, air; without water it wilts/dies.'**",
          "commonErrors": [
                    "Missing needs.",
                    "No consequence."
          ]
},
        },
        {
          id: "s0-u5-plant-needs-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'healthy' plant is one that...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "is dead"
                    },
                    {
                              "id": "b",
                              "text": "is growing well with all its needs met"
                    },
                    {
                              "id": "c",
                              "text": "has no leaves"
                    },
                    {
                              "id": "d",
                              "text": "is tiny"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Healthy = growing well."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Healthy = growing well.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**growing well**",
          "commonErrors": [
                    "Confuses with dying."
          ]
},
        },
        {
          id: "s0-u5-plant-needs-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare a healthy plant and a struggling plant. What might be different about their needs?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Plant needs",
                              "statement": "Healthy vs struggling comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes healthy plant.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Describes struggling + need difference.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Healthy gets sun+water; struggling lacks water.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "No difference."
          ]
},
        },
        {
          id: "s0-u5-plant-needs-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Need\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Liquid plants need."
                    },
                    {
                              "id": "b",
                              "text": "Something required to live/grow."
                    },
                    {
                              "id": "c",
                              "text": "Light plants need for food."
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
                              "statement": "\"Need\" means Something required to live/grow."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Need\" means Something required to live/grow.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Need** = Something required to live/grow.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u5-plant-needs-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Water\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Light plants need for food."
                    },
                    {
                              "id": "b",
                              "text": "Dirt plants grow in."
                    },
                    {
                              "id": "c",
                              "text": "Plants need air too."
                    },
                    {
                              "id": "d",
                              "text": "Liquid plants need."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Water\" means Liquid plants need."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Water\" means Liquid plants need.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Water** = Liquid plants need.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u5-plant-needs-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sunlight\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Dirt plants grow in."
                    },
                    {
                              "id": "b",
                              "text": "Light plants need for food."
                    },
                    {
                              "id": "c",
                              "text": "Plants need air too."
                    },
                    {
                              "id": "d",
                              "text": "Get bigger."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sunlight\" means Light plants need for food."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sunlight\" means Light plants need for food.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sunlight** = Light plants need for food.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
