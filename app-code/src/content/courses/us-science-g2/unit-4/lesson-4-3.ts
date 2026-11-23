import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "sci2-u4-lesson-4-3",
  code: "4-3",
  title: "Plant Life Cycle",
  goal: "I CAN describe how plants grow from seeds.",
  standards: ["NGSS 2-LS2-1"],
  vocabulary: [
    { term: "Life cycle", definition: "Stages of growth." },
    { term: "Seed", definition: "Starts new plant." },
    { term: "Sprout", definition: "New growth from seed." },
    { term: "Seedling", definition: "Young plant." },
    { term: "Adult", definition: "Grown plant." },
    { term: "Germinate", definition: "Seed starts to grow." },
    { term: "Flower", definition: "Makes seeds." },
    { term: "Fruit", definition: "Protects seeds." },
    { term: "Cycle", definition: "Repeats over time." },
    { term: "Grow", definition: "Get bigger." },
  ],
  concepts: [
    {
      id: "sci2-u4-plant-life-cycle",
      title: "Plant life cycle",
      skill: "Describe the stages of a plant's life cycle.",
      lesson: {
        sections: [
          {
            heading: "From seed to plant",
            body: "A plant's **life cycle** goes: **seed** -> **sprout/seedling** -> **adult plant** -> **flower** -> **fruit with seeds** -> new seeds. The cycle **repeats**.",
          },
          {
            heading: "Germination",
            body: "When a **seed** gets water and warmth, it **germinates** — a **sprout** emerges and grows into a **seedling**, then an **adult** plant.",
          },
        ],
        keyFormulas: [
          { name: "Life cycle", statement: "Seed -> sprout -> seedling -> adult -> flower -> fruit -> seeds." },
        ],
        workedExample: {
          problem: "What is the first stage of a plant's life cycle?",
          solution: "The **seed** — it germinates and grows.",
        },
      },
      questions: [
        {
          id: "sci2-u4-plant-life-cycle-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The first stage of a plant's life cycle is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "flower"
                    },
                    {
                              "id": "b",
                              "text": "seed"
                    },
                    {
                              "id": "c",
                              "text": "fruit"
                    },
                    {
                              "id": "d",
                              "text": "adult plant"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Seed starts the cycle."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Seed starts the cycle.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**seed**",
          "commonErrors": [
                    "Picks later stage."
          ]
},
        },
        {
          id: "sci2-u4-plant-life-cycle-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Germination' is when...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a seed dies"
                    },
                    {
                              "id": "b",
                              "text": "a seed starts to grow"
                    },
                    {
                              "id": "c",
                              "text": "a plant flowers"
                    },
                    {
                              "id": "d",
                              "text": "fruit falls"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Germination = seed starts growing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Germination = seed starts growing.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**starts to grow**",
          "commonErrors": [
                    "Confuses with other stages."
          ]
},
        },
        {
          id: "sci2-u4-plant-life-cycle-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe the plant life cycle in order: seed to new seeds.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Life cycle",
                              "statement": "Seed -> sprout -> adult -> flower -> fruit -> seeds."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes cycle in order.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Seed germinates -> sprout -> seedling -> adult -> flower -> fruit with seeds.'**",
          "commonErrors": [
                    "Wrong order.",
                    "Missing stages."
          ]
},
        },
        {
          id: "sci2-u4-plant-life-cycle-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'seedling' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "an adult plant"
                    },
                    {
                              "id": "b",
                              "text": "a young plant"
                    },
                    {
                              "id": "c",
                              "text": "a seed"
                    },
                    {
                              "id": "d",
                              "text": "a flower"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Seedling = young plant."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Seedling = young plant.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**young plant**",
          "commonErrors": [
                    "Confuses with adult."
          ]
},
        },
        {
          id: "sci2-u4-plant-life-cycle-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Plant a seed and observe its growth. Describe each stage you see.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Life cycle",
                              "statement": "Observe seed -> sprout -> seedling."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Observes germination.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Describes growth stages.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Seed sprouted, then seedling with leaves appeared.'**",
          "commonErrors": [
                    "Cannot observe.",
                    "No stages."
          ]
},
        },
        {
          id: "sci2-u4-plant-life-cycle-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Life cycle\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Starts new plant."
                    },
                    {
                              "id": "b",
                              "text": "Stages of growth."
                    },
                    {
                              "id": "c",
                              "text": "New growth from seed."
                    },
                    {
                              "id": "d",
                              "text": "Young plant."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Life cycle\" means Stages of growth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Life cycle\" means Stages of growth.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Life cycle** = Stages of growth.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u4-plant-life-cycle-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Seed\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "New growth from seed."
                    },
                    {
                              "id": "b",
                              "text": "Young plant."
                    },
                    {
                              "id": "c",
                              "text": "Grown plant."
                    },
                    {
                              "id": "d",
                              "text": "Starts new plant."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Seed\" means Starts new plant."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Seed\" means Starts new plant.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Seed** = Starts new plant.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u4-plant-life-cycle-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sprout\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Young plant."
                    },
                    {
                              "id": "b",
                              "text": "New growth from seed."
                    },
                    {
                              "id": "c",
                              "text": "Grown plant."
                    },
                    {
                              "id": "d",
                              "text": "Seed starts to grow."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sprout\" means New growth from seed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sprout\" means New growth from seed.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sprout** = New growth from seed.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
