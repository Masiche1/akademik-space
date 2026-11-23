import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "sci2-u4-lesson-4-2",
  code: "4-2",
  title: "Parts of a Plant",
  goal: "I CAN identify and describe plant parts.",
  standards: ["NGSS 2-LS2-1"],
  vocabulary: [
    { term: "Root", definition: "Underground part." },
    { term: "Stem", definition: "Supports plant." },
    { term: "Leaf", definition: "Makes food." },
    { term: "Flower", definition: "Makes seeds." },
    { term: "Seed", definition: "Starts new plant." },
    { term: "Fruit", definition: "Protects seeds." },
    { term: "Petal", definition: "Colorful part of flower." },
    { term: "Pollination", definition: "How seeds are made." },
    { term: "Grow", definition: "Get bigger." },
    { term: "Part", definition: "Piece of plant." },
  ],
  concepts: [
    {
      id: "sci2-u4-plant-parts",
      title: "Parts of a plant",
      skill: "Identify and describe the parts of a plant and their functions.",
      lesson: {
        sections: [
          {
            heading: "Plant parts",
            body: "A plant has **roots** (absorb water), **stem** (supports), **leaves** (make food), **flowers** (reproduce), **seeds** (start new plants), and **fruit** (protects seeds).",
          },
          {
            heading: "Each part has a job",
            body: "**Roots** take in water, **stem** carries it up, **leaves** make food, **flowers** make seeds for new plants.",
          },
        ],
        keyFormulas: [
          { name: "Plant parts", statement: "Roots + stem + leaves + flowers + seeds = complete plant." },
        ],
        workedExample: {
          problem: "What part of a plant makes seeds?",
          solution: "The **flower** makes seeds through pollination.",
        },
      },
      questions: [
        {
          id: "sci2-u4-plant-parts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which part absorbs water?",
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
          "finalAnswer": "**root**",
          "commonErrors": [
                    "Picks wrong part."
          ]
},
        },
        {
          id: "sci2-u4-plant-parts-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Seeds are made in the...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "root"
                    },
                    {
                              "id": "b",
                              "text": "flower"
                    },
                    {
                              "id": "c",
                              "text": "stem"
                    },
                    {
                              "id": "d",
                              "text": "leaf"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Flowers make seeds."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Flowers make seeds.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**flower**",
          "commonErrors": [
                    "Picks wrong part."
          ]
},
        },
        {
          id: "sci2-u4-plant-parts-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Name three plant parts and what each does.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Plant parts",
                              "statement": "Root, stem, leaf, flower, seed functions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names 3 parts + functions.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Roots: absorb. Stem: support. Leaves: make food.'**",
          "commonErrors": [
                    "Cannot name.",
                    "Fewer than 3."
          ]
},
        },
        {
          id: "sci2-u4-plant-parts-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'stem' of a plant...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "absorbs water"
                    },
                    {
                              "id": "b",
                              "text": "supports the plant"
                    },
                    {
                              "id": "c",
                              "text": "makes seeds"
                    },
                    {
                              "id": "d",
                              "text": "makes food"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Stem supports plant."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Stem supports plant.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**supports**",
          "commonErrors": [
                    "Picks wrong function."
          ]
},
        },
        {
          id: "sci2-u4-plant-parts-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Draw or describe a plant and label its parts and functions.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Plant parts",
                              "statement": "Label parts + functions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Labels parts.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Gives functions.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Root: absorb. Stem: support. Leaf: food.'**",
          "commonErrors": [
                    "Cannot label.",
                    "No functions."
          ]
},
        },
        {
          id: "sci2-u4-plant-parts-q6",
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
                              "text": "Underground part."
                    },
                    {
                              "id": "c",
                              "text": "Makes food."
                    },
                    {
                              "id": "d",
                              "text": "Makes seeds."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Root\" means Underground part."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Root\" means Underground part.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Root** = Underground part.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u4-plant-parts-q7",
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
                              "text": "Makes seeds."
                    },
                    {
                              "id": "c",
                              "text": "Starts new plant."
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
          id: "sci2-u4-plant-parts-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Leaf\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Makes seeds."
                    },
                    {
                              "id": "b",
                              "text": "Makes food."
                    },
                    {
                              "id": "c",
                              "text": "Starts new plant."
                    },
                    {
                              "id": "d",
                              "text": "Protects seeds."
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
