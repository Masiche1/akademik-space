import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "s0-u5-lesson-5-1",
  code: "5-1",
  title: "Parts of a Plant",
  goal: "I CAN identify the parts of a plant and their jobs.",
  standards: ["K-LS1-1", "K-LS1-2"],
  vocabulary: [
    { term: "Plant", definition: "A living thing that grows in soil." },
    { term: "Root", definition: "Part underground that holds plant and takes water." },
    { term: "Stem", definition: "Part that holds plant up and carries water." },
    { term: "Leaf", definition: "Flat green part that makes food." },
    { term: "Flower", definition: "Colorful part that makes seeds." },
    { term: "Seed", definition: "Small part that can grow into a new plant." },
    { term: "Soil", definition: "Dirt where plants grow." },
    { term: "Grow", definition: "Get bigger over time." },
  ],
  concepts: [
    {
      id: "s0-u5-plant-parts",
      title: "Parts of a plant",
      skill: "Identify plant parts (root, stem, leaf, flower, seed) and their jobs.",
      lesson: {
        sections: [
          {
            heading: "Plant parts",
            body: "A **plant** has **roots** (underground, hold it and take water), a **stem** (holds it up, carries water), **leaves** (make food), **flowers** (make seeds), and **seeds** (can grow new plants).",
          },
          {
            heading: "Each part has a job",
            body: "Each part does a **job** — roots anchor and drink, stems support and transport, leaves make food, flowers make seeds. All parts work together.",
          },
        ],
        keyFormulas: [
          { name: "Plant parts", statement: "Roots (anchor+water), Stem (support+transport), Leaves (food), Flowers (seeds)." },
        ],
        workedExample: {
          problem: "Which plant part makes food? Which holds the plant in the ground?",
          solution: "**Leaves** make food (photosynthesis). **Roots** hold the plant in the ground.",
        },
      },
      questions: [
        {
          id: "s0-u5-plant-parts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'root' of a plant...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "makes food"
                    },
                    {
                              "id": "b",
                              "text": "holds the plant and takes up water"
                    },
                    {
                              "id": "c",
                              "text": "makes seeds"
                    },
                    {
                              "id": "d",
                              "text": "is the flower"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Roots anchor + absorb water."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Roots anchor + absorb water.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**anchor + water**",
          "commonErrors": [
                    "Confuses with leaf."
          ]
},
        },
        {
          id: "s0-u5-plant-parts-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The 'leaf' of a plant...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "holds it up"
                    },
                    {
                              "id": "b",
                              "text": "makes food for the plant"
                    },
                    {
                              "id": "c",
                              "text": "makes seeds"
                    },
                    {
                              "id": "d",
                              "text": "takes water only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Leaves make food."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Leaves make food.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**makes food**",
          "commonErrors": [
                    "Confuses with stem."
          ]
},
        },
        {
          id: "s0-u5-plant-parts-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Draw or describe a plant. Label its parts: root, stem, leaf, flower, seed.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Plant parts",
                              "statement": "Name all plant parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names all plant parts.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Root under soil, stem up, leaves on sides, flower on top, seeds in flower.'**",
          "commonErrors": [
                    "Missing parts.",
                    "Cannot identify."
          ]
},
        },
        {
          id: "s0-u5-plant-parts-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'stem' of a plant...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "makes seeds"
                    },
                    {
                              "id": "b",
                              "text": "holds the plant up and carries water"
                    },
                    {
                              "id": "c",
                              "text": "is underground"
                    },
                    {
                              "id": "d",
                              "text": "is the flower"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Stem = support + transport."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Stem = support + transport.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**support + water**",
          "commonErrors": [
                    "Confuses with root."
          ]
},
        },
        {
          id: "s0-u5-plant-parts-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Name three plant parts and describe what each does.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Plant parts",
                              "statement": "3 parts + jobs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names 3 parts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Describes their jobs.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Roots take water; leaves make food; flowers make seeds.'**",
          "commonErrors": [
                    "Fewer than 3.",
                    "No jobs."
          ]
},
        },
        {
          id: "s0-u5-plant-parts-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Plant\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Part underground that holds plant and takes water."
                    },
                    {
                              "id": "b",
                              "text": "A living thing that grows in soil."
                    },
                    {
                              "id": "c",
                              "text": "Part that holds plant up and carries water."
                    },
                    {
                              "id": "d",
                              "text": "Flat green part that makes food."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Plant\" means A living thing that grows in soil."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Plant\" means A living thing that grows in soil.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Plant** = A living thing that grows in soil.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u5-plant-parts-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Root\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Part that holds plant up and carries water."
                    },
                    {
                              "id": "b",
                              "text": "Flat green part that makes food."
                    },
                    {
                              "id": "c",
                              "text": "Colorful part that makes seeds."
                    },
                    {
                              "id": "d",
                              "text": "Part underground that holds plant and takes water."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Root\" means Part underground that holds plant and takes water."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Root\" means Part underground that holds plant and takes water.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Root** = Part underground that holds plant and takes water.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u5-plant-parts-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Stem\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Flat green part that makes food."
                    },
                    {
                              "id": "b",
                              "text": "Part that holds plant up and carries water."
                    },
                    {
                              "id": "c",
                              "text": "Colorful part that makes seeds."
                    },
                    {
                              "id": "d",
                              "text": "Small part that can grow into a new plant."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Stem\" means Part that holds plant up and carries water."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Stem\" means Part that holds plant up and carries water.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Stem** = Part that holds plant up and carries water.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
