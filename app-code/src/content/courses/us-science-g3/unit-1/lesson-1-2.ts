import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "sci3-u1-lesson-1-2",
  code: "1-2",
  title: "Parts of a Plant",
  goal: "I CAN identify and describe the parts of a plant.",
  standards: ["LS1.A"],
  vocabulary: [
    { term: "Root", definition: "Part under ground." },
    { term: "Stem", definition: "Supports plant." },
    { term: "Leaf", definition: "Makes food." },
    { term: "Flower", definition: "Colorful part." },
    { term: "Seed", definition: "Grows new plant." },
    { term: "Fruit", definition: "Holds seeds." },
    { term: "Photosynthesis", definition: "Making food from sunlight." },
    { term: "Nutrient", definition: "Food for plant." },
  ],
  concepts: [
    {
      id: "sci3-u1-plant-parts",
      title: "Parts of a plant",
      skill: "Identify roots, stems, leaves, flowers, seeds and their jobs.",
      lesson: {
        sections: [
          {
            heading: "Above and below",
            body: "**Roots** are under the ground and absorb **water** and nutrients. **Stems** support the plant. **Leaves** make food through **photosynthesis**. **Flowers** make seeds.",
          },
          {
            heading: "Seeds and fruit",
            body: "**Seeds** grow into new plants. **Fruit** holds and protects seeds. A flower becomes a fruit.",
          },
        ],
        keyFormulas: [
          { name: "Plant parts", statement: "Roots (water) + stems (support) + leaves (food) + flowers (seeds) = plant." },
        ],
        workedExample: {
          problem: "Which part of a plant makes food?",
          solution: "**Leaves** make food using sunlight, water and air.",
        },
      },
      questions: [
        {
          id: "sci3-u1-plant-parts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which part of a plant absorbs water?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "leaves"
                    },
                    {
                              "id": "b",
                              "text": "roots"
                    },
                    {
                              "id": "c",
                              "text": "flowers"
                    },
                    {
                              "id": "d",
                              "text": "seeds"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Roots absorb water."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Roots absorb water.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "roots",
          "commonErrors": [
                    "Thinks leaves do it."
          ]
},
        },
        {
          id: "sci3-u1-plant-parts-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Leaves make food through...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "sleeping"
                    },
                    {
                              "id": "b",
                              "text": "photosynthesis"
                    },
                    {
                              "id": "c",
                              "text": "playing"
                    },
                    {
                              "id": "d",
                              "text": "eating soil"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Leaves use photosynthesis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Leaves use photosynthesis.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "photosynthesis",
          "commonErrors": [
                    "Thinks leaves eat soil."
          ]
},
        },
        {
          id: "sci3-u1-plant-parts-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Name two parts of a plant and what each does.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Plant parts",
                              "statement": "2 parts + jobs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names 2 parts + jobs.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Roots absorb water; leaves make food.'**",
          "commonErrors": [
                    "Cannot name parts.",
                    "Wrong jobs."
          ]
},
        },
        {
          id: "sci3-u1-plant-parts-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Seeds are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "leaves"
                    },
                    {
                              "id": "b",
                              "text": "new plants waiting to grow"
                    },
                    {
                              "id": "c",
                              "text": "roots"
                    },
                    {
                              "id": "d",
                              "text": "stems"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Seeds grow into new plants."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Seeds grow into new plants.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "new plants waiting to grow",
          "commonErrors": [
                    "Thinks seeds are parts of one plant."
          ]
},
        },
        {
          id: "sci3-u1-plant-parts-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Draw or describe a plant. Label three parts and explain what each does.",
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
                              "reasoning": "Labels 3 parts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains jobs.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Root=water, stem=support, leaf=food.'**",
          "commonErrors": [
                    "Fewer than 3.",
                    "No jobs."
          ]
},
        },
        {
          id: "sci3-u1-plant-parts-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Root\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Supports plant."
                    },
                    {
                              "id": "b",
                              "text": "Part under ground."
                    },
                    {
                              "id": "c",
                              "text": "Makes food."
                    },
                    {
                              "id": "d",
                              "text": "Colorful part."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Root\" means Part under ground."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Root\" means Part under ground.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Root** = Part under ground.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u1-plant-parts-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Stem\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Makes food."
                    },
                    {
                              "id": "b",
                              "text": "Colorful part."
                    },
                    {
                              "id": "c",
                              "text": "Grows new plant."
                    },
                    {
                              "id": "d",
                              "text": "Supports plant."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Stem\" means Supports plant."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Stem\" means Supports plant.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Stem** = Supports plant.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u1-plant-parts-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Leaf\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Colorful part."
                    },
                    {
                              "id": "b",
                              "text": "Makes food."
                    },
                    {
                              "id": "c",
                              "text": "Grows new plant."
                    },
                    {
                              "id": "d",
                              "text": "Holds seeds."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Leaf\" means Makes food."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Leaf\" means Makes food.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Leaf** = Makes food.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
