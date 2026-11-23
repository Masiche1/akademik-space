import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "s0-u5-lesson-5-3",
  code: "5-3",
  title: "Plant Life Cycle",
  goal: "I CAN describe how a plant grows from seed to adult.",
  standards: ["K-LS1-1", "K-LS1-2"],
  vocabulary: [
    { term: "Lifecycle", definition: "The stages of life." },
    { term: "Seed", definition: "Starts a new plant." },
    { term: "Sprout", definition: "Young plant emerging." },
    { term: "Seedling", definition: "Small young plant." },
    { term: "Adult", definition: "Grown-up plant." },
    { term: "Grow", definition: "Get bigger." },
    { term: "Bloom", definition: "Flower opens." },
    { term: "Cycle", definition: "Repeating stages." },
  ],
  concepts: [
    {
      id: "s0-u5-plant-lifecycle",
      title: "Plant life cycle",
      skill: "Describe the stages: seed -> sprout -> seedling -> adult -> flower/seed.",
      lesson: {
        sections: [
          {
            heading: "From seed to plant",
            body: "A plant's **lifecycle** goes: **seed** -> **sprout** (emerges) -> **seedling** (small plant) -> **adult** (grown-up) -> **flower** -> new **seeds** -> cycle repeats.",
          },
          {
            heading: "Each stage",
            body: "Each **stage** looks different — a seed is small and dry, a sprout has tiny leaves, an adult plant is large with flowers.",
          },
        ],
        keyFormulas: [
          { name: "Life cycle", statement: "Seed -> sprout -> seedling -> adult -> flower -> seeds (cycle repeats)." },
        ],
        workedExample: {
          problem: "Put in order: adult plant, seed, sprout, seedling.",
          solution: "**Seed -> sprout -> seedling -> adult plant** (then flowers make new seeds).",
        },
      },
      questions: [
        {
          id: "s0-u5-plant-lifecycle-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The first stage of a plant's life is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "adult"
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
                              "statement": "Starts as a seed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Starts as a seed.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**seed**",
          "commonErrors": [
                    "Picks wrong stage."
          ]
},
        },
        {
          id: "s0-u5-plant-lifecycle-q2",
          difficulty: "core",
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
                              "text": "a small young plant"
                    },
                    {
                              "id": "c",
                              "text": "an adult plant"
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
                              "statement": "Seedling = small young plant."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Seedling = small young plant.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**small young plant**",
          "commonErrors": [
                    "Confuses with seed."
          ]
},
        },
        {
          id: "s0-u5-plant-lifecycle-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe the stages of a plant's life from seed to adult. Put them in order.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Life cycle",
                              "statement": "Seed -> sprout -> seedling -> adult."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Puts stages in order.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Seed, sprout, seedling, adult plant.'**",
          "commonErrors": [
                    "Wrong order.",
                    "Missing stages."
          ]
},
        },
        {
          id: "s0-u5-plant-lifecycle-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Lifecycle' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "one stage only"
                    },
                    {
                              "id": "b",
                              "text": "the stages of life"
                    },
                    {
                              "id": "c",
                              "text": "a single moment"
                    },
                    {
                              "id": "d",
                              "text": "death"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Lifecycle = all stages."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lifecycle = all stages.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**stages of life**",
          "commonErrors": [
                    "Thinks it's one stage."
          ]
},
        },
        {
          id: "s0-u5-plant-lifecycle-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Draw or describe a plant at two different life stages. How are they different?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Life cycle",
                              "statement": "Two stages + difference."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes two stages.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Names difference.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Seed: small dry; Adult: big with flowers.'**",
          "commonErrors": [
                    "Only one stage.",
                    "No difference."
          ]
},
        },
        {
          id: "s0-u5-plant-lifecycle-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Lifecycle\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Starts a new plant."
                    },
                    {
                              "id": "b",
                              "text": "The stages of life."
                    },
                    {
                              "id": "c",
                              "text": "Young plant emerging."
                    },
                    {
                              "id": "d",
                              "text": "Small young plant."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Lifecycle\" means The stages of life."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Lifecycle\" means The stages of life.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Lifecycle** = The stages of life.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u5-plant-lifecycle-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Seed\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Young plant emerging."
                    },
                    {
                              "id": "b",
                              "text": "Small young plant."
                    },
                    {
                              "id": "c",
                              "text": "Grown-up plant."
                    },
                    {
                              "id": "d",
                              "text": "Starts a new plant."
                    }
          ],
          "correctChoiceId": "d"
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
          id: "s0-u5-plant-lifecycle-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sprout\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Small young plant."
                    },
                    {
                              "id": "b",
                              "text": "Young plant emerging."
                    },
                    {
                              "id": "c",
                              "text": "Grown-up plant."
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
                              "statement": "\"Sprout\" means Young plant emerging."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sprout\" means Young plant emerging.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sprout** = Young plant emerging.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
