import type { Lesson } from "../../../types.ts";

export const lesson36: Lesson = {
  id: "spk-u3-lesson-3-6",
  code: "3-6",
  title: "Plants and Animals Review",
  goal: "I CAN describe living things, plant parts, animal needs, groups and habitats.",
  standards: ["ELOF-PK.SCI.LIFE.2"],
  vocabulary: [
    { term: "Living", definition: "Grows, reproduces, needs food/water/air." },
    { term: "Plant parts", definition: "Roots, stem, leaves, flowers, seeds." },
    { term: "Animal needs", definition: "Food, water, air, shelter, space." },
    { term: "Groups", definition: "Mammals, birds, fish, insects, reptiles." },
    { term: "Habitat", definition: "Where an animal lives." },
  ],
  concepts: [
    {
      id: "spk-u3-plants-animals-review",
      title: "Plants and animals review",
      skill: "Combine living things, plant parts, animal needs, groups and habitats.",
      lesson: {
        sections: [
          {
            heading: "All about living things",
            body: "Living things grow, reproduce and need food/water/air. Plants have roots/stem/leaves/flowers/seeds. Animals need food/water/air/shelter/space and live in habitats.",
          },
          {
            heading: "Connect it",
            body: "A plant's leaves make food using sunlight; an animal eats the plant for energy. The plant's roots absorb water; the animal drinks water. Everything connects.",
          },
        ],
        keyFormulas: [
          { name: "Review", statement: "Living things + plant parts + animal needs + groups + habitats = understanding life." },
        ],
        workedExample: {
          problem: "How do plants and animals depend on each other?",
          solution: "Plants make food (photosynthesis); animals eat plants for energy. Animals breathe out CO2; plants use it. They depend on each other.",
        },
      },
      questions: [
        {
          id: "spk-u3-plants-animals-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Plants and animals are connected because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "they are unrelated"
                    },
                    {
                              "id": "b",
                              "text": "animals eat plants and plants use animal waste"
                    },
                    {
                              "id": "c",
                              "text": "plants eat animals"
                    },
                    {
                              "id": "d",
                              "text": "they never interact"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Animals eat plants; plants use CO2 from animals — they depend on each other."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Animals eat plants; plants use CO2 from animals — they depend on each other.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Depend on each other**",
          "commonErrors": [
                    "Thinks they are unrelated."
          ]
},
        },
        {
          id: "spk-u3-plants-animals-review-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a plant part that makes food?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "root"
                    },
                    {
                              "id": "b",
                              "text": "leaf"
                    },
                    {
                              "id": "c",
                              "text": "seed"
                    },
                    {
                              "id": "d",
                              "text": "flower"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Leaves make food via photosynthesis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Leaves make food via photosynthesis.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**leaf**",
          "commonErrors": [
                    "Picks wrong part."
          ]
},
        },
        {
          id: "spk-u3-plants-animals-review-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe one living thing (plant or animal): what it needs, its parts, and its habitat.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Living things",
                              "statement": "Needs + parts + habitat."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes living thing completely.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Dog: needs food/water/shelter, has fur, lives in a home/forest.'**",
          "commonErrors": [
                    "Incomplete.",
                    "Wrong info."
          ]
},
        },
        {
          id: "spk-u3-plants-animals-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Animals are grouped by...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "their names only"
                    },
                    {
                              "id": "b",
                              "text": "shared features like fur, feathers, scales"
                    },
                    {
                              "id": "c",
                              "text": "their size only"
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
                              "statement": "Animals grouped by shared features."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Animals grouped by shared features.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Shared features**",
          "commonErrors": [
                    "Thinks grouping is random."
          ]
},
        },
        {
          id: "spk-u3-plants-animals-review-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Create a food chain: plant -> animal -> animal. Explain how energy flows. Then describe the habitat of one animal in your chain.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Food chain",
                              "statement": "Plant->animal->animal energy flow."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Creates food chain.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains energy flow + habitat.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Grass -> rabbit -> fox; rabbit lives in meadow with grass.'**",
          "commonErrors": [
                    "Broken chain.",
                    "No explanation."
          ]
},
        },
        {
          id: "spk-u3-plants-animals-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Living\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Roots, stem, leaves, flowers, seeds."
                    },
                    {
                              "id": "b",
                              "text": "Grows, reproduces, needs food/water/air."
                    },
                    {
                              "id": "c",
                              "text": "Food, water, air, shelter, space."
                    },
                    {
                              "id": "d",
                              "text": "Mammals, birds, fish, insects, reptiles."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Living\" means Grows, reproduces, needs food/water/air."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Living\" means Grows, reproduces, needs food/water/air.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Living** = Grows, reproduces, needs food/water/air.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u3-plants-animals-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Plant parts\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Food, water, air, shelter, space."
                    },
                    {
                              "id": "b",
                              "text": "Mammals, birds, fish, insects, reptiles."
                    },
                    {
                              "id": "c",
                              "text": "Where an animal lives."
                    },
                    {
                              "id": "d",
                              "text": "Roots, stem, leaves, flowers, seeds."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Plant parts\" means Roots, stem, leaves, flowers, seeds."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Plant parts\" means Roots, stem, leaves, flowers, seeds.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Plant parts** = Roots, stem, leaves, flowers, seeds.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u3-plants-animals-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Animal needs\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Mammals, birds, fish, insects, reptiles."
                    },
                    {
                              "id": "b",
                              "text": "Food, water, air, shelter, space."
                    },
                    {
                              "id": "c",
                              "text": "Where an animal lives."
                    },
                    {
                              "id": "d",
                              "text": "Grows, reproduces, needs food/water/air."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Animal needs\" means Food, water, air, shelter, space."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Animal needs\" means Food, water, air, shelter, space.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Animal needs** = Food, water, air, shelter, space.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
