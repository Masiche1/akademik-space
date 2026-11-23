import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "s1-u1-lesson-1-3",
  code: "1-3",
  title: "Plant Growth",
  goal: "I CAN describe how plants grow from seeds.",
  standards: ["1-LS1-2"],
  vocabulary: [
    { term: "Seed", definition: "Starts a new plant." },
    { term: "Sprout", definition: "Tiny new plant." },
    { term: "Grow", definition: "Get bigger." },
    { term: "Stages", definition: "Steps of growth." },
    { term: "Root", definition: "First part to grow down." },
    { term: "Shoot", definition: "Part that grows up." },
    { term: "Seedling", definition: "Young plant." },
    { term: "Mature", definition: "Fully grown." },
  ],
  concepts: [
    {
      id: "s1-u1-plant-growth",
      title: "How plants grow",
      skill: "Plants grow from seeds through stages: seed, sprout, seedling, mature plant.",
      lesson: {
        sections: [
          {
            heading: "From seed to plant",
            body: "A **seed** planted in soil grows: first a **root** grows down, then a **shoot** grows up. This young plant is a **seedling**. With sun and water it becomes a **mature** plant.",
          },
          {
            heading: "Growth stages",
            body: "**Stages** of growth: seed -> sprout -> seedling -> mature plant. Each stage needs the right conditions.",
          },
        ],
        keyFormulas: [
          { name: "Plant growth", statement: "Seed -> sprout -> seedling -> mature plant." },
        ],
        workedExample: {
          problem: "Put in order: mature plant, seed, seedling, sprout.",
          solution: "**Seed -> sprout -> seedling -> mature plant.**",
        },
      },
      questions: [
        {
          id: "s1-u1-plant-growth-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the first stage of plant growth?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "mature plant"
                    },
                    {
                              "id": "b",
                              "text": "seed"
                    },
                    {
                              "id": "c",
                              "text": "flower"
                    },
                    {
                              "id": "d",
                              "text": "fruit"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Growth starts with a seed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Growth starts with a seed.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**seed**",
          "commonErrors": [
                    "Picks mature/flower."
          ]
},
        },
        {
          id: "s1-u1-plant-growth-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What grows first from a seed?",
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
                              "text": "fruit"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Root grows first."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Root grows first.",
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
          id: "s1-u1-plant-growth-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe or draw the stages of plant growth from seed to mature plant.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Growth",
                              "statement": "Stages in order."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lists stages in correct order.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Seed -> sprout -> seedling -> mature plant.'**",
          "commonErrors": [
                    "Wrong order.",
                    "Missing stages."
          ]
},
        },
        {
          id: "s1-u1-plant-growth-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'seedling' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a seed"
                    },
                    {
                              "id": "b",
                              "text": "a young plant"
                    },
                    {
                              "id": "c",
                              "text": "a mature plant"
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
                    "Confuses with seed/mature."
          ]
},
        },
        {
          id: "s1-u1-plant-growth-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Plant a seed and observe it over time. Describe each growth stage you see.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Growth",
                              "statement": "Observe stages."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Observes sprout/root.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Describes growth stages.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Day 1: seed; Day 5: root appears; Day 10: sprout; Day 20: seedling.'**",
          "commonErrors": [
                    "No observation.",
                    "Cannot describe stages."
          ]
},
        },
        {
          id: "s1-u1-plant-growth-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Seed\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Tiny new plant."
                    },
                    {
                              "id": "b",
                              "text": "Starts a new plant."
                    },
                    {
                              "id": "c",
                              "text": "Get bigger."
                    },
                    {
                              "id": "d",
                              "text": "Steps of growth."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Seed\" means Starts a new plant."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Seed\" means Starts a new plant.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Seed** = Starts a new plant.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u1-plant-growth-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sprout\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Get bigger."
                    },
                    {
                              "id": "b",
                              "text": "Steps of growth."
                    },
                    {
                              "id": "c",
                              "text": "First part to grow down."
                    },
                    {
                              "id": "d",
                              "text": "Tiny new plant."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sprout\" means Tiny new plant."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sprout\" means Tiny new plant.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sprout** = Tiny new plant.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u1-plant-growth-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Grow\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Steps of growth."
                    },
                    {
                              "id": "b",
                              "text": "Get bigger."
                    },
                    {
                              "id": "c",
                              "text": "First part to grow down."
                    },
                    {
                              "id": "d",
                              "text": "Part that grows up."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Grow\" means Get bigger."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Grow\" means Get bigger.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Grow** = Get bigger.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
