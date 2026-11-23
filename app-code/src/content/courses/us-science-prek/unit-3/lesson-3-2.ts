import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "spk-u3-lesson-3-2",
  code: "3-2",
  title: "Parts of a Plant",
  goal: "I CAN name the parts of a plant and what each does.",
  standards: ["ELOF-PK.SCI.PLANT.1"],
  vocabulary: [
    { term: "Root", definition: "Part under ground that anchors plant and absorbs water." },
    { term: "Stem", definition: "Supports the plant and carries water." },
    { term: "Leaf", definition: "Makes food for the plant using sunlight." },
    { term: "Flower", definition: "The colorful part that makes seeds." },
    { term: "Seed", definition: "Can grow into a new plant." },
    { term: "Photosynthesis", definition: "How plants make food from sunlight." },
  ],
  concepts: [
    {
      id: "spk-u3-plant-parts",
      title: "Parts of a plant",
      skill: "Name plant parts and their functions.",
      lesson: {
        sections: [
          {
            heading: "Plant parts",
            body: "A plant has **roots** (under ground, absorb water), a **stem** (supports), **leaves** (make food), **flowers** (make seeds), and **seeds** (grow into new plants).",
          },
          {
            heading: "What each does",
            body: "Roots hold the plant and drink water. Leaves use **sunlight** to make food (**photosynthesis**). Flowers attract pollinators and make seeds.",
          },
        ],
        keyFormulas: [
          { name: "Plant parts", statement: "Roots absorb, stem supports, leaves make food, flowers make seeds." },
        ],
        workedExample: {
          problem: "Which part of a plant absorbs water from the soil?",
          solution: "The **roots** absorb water from the soil.",
        },
      },
      questions: [
        {
          id: "spk-u3-plant-parts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which plant part absorbs water from the soil?",
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
                              "text": "seed"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Roots absorb water and anchor the plant."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Roots absorb water and anchor the plant.",
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
          id: "spk-u3-plant-parts-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Leaves make food for the plant using...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "soil"
                    },
                    {
                              "id": "b",
                              "text": "sunlight"
                    },
                    {
                              "id": "c",
                              "text": "air only"
                    },
                    {
                              "id": "d",
                              "text": "water only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Leaves use sunlight for photosynthesis to make food."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Leaves use sunlight for photosynthesis to make food.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sunlight**",
          "commonErrors": [
                    "Thinks leaves eat soil."
          ]
},
        },
        {
          id: "spk-u3-plant-parts-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Name three parts of a plant and what each one does.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Plant parts",
                              "statement": "Roots absorb, stem supports, leaves make food."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names 3 parts + functions.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Roots absorb water, stem supports, leaves make food.'**",
          "commonErrors": [
                    "Cannot name parts.",
                    "Wrong functions."
          ]
},
        },
        {
          id: "spk-u3-plant-parts-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "The function of a flower is to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "absorb water"
                    },
                    {
                              "id": "b",
                              "text": "make seeds and attract pollinators"
                    },
                    {
                              "id": "c",
                              "text": "support the plant"
                    },
                    {
                              "id": "d",
                              "text": "make food"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Flowers make seeds and attract pollinators."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Flowers make seeds and attract pollinators.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Make seeds**",
          "commonErrors": [
                    "Confuses with leaves."
          ]
},
        },
        {
          id: "spk-u3-plant-parts-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Draw or describe a plant. Label the root, stem, leaf and flower. Explain what each part does.",
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
                              "reasoning": "Labels all 4 parts.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains each function.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Root=water, stem=support, leaf=food, flower=seeds'**",
          "commonErrors": [
                    "Missing parts.",
                    "Wrong functions."
          ]
},
        },
        {
          id: "spk-u3-plant-parts-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Root\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Supports the plant and carries water."
                    },
                    {
                              "id": "b",
                              "text": "Part under ground that anchors plant and absorbs water."
                    },
                    {
                              "id": "c",
                              "text": "Makes food for the plant using sunlight."
                    },
                    {
                              "id": "d",
                              "text": "The colorful part that makes seeds."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Root\" means Part under ground that anchors plant and absorbs water."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Root\" means Part under ground that anchors plant and absorbs water.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Root** = Part under ground that anchors plant and absorbs water.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u3-plant-parts-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Stem\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Makes food for the plant using sunlight."
                    },
                    {
                              "id": "b",
                              "text": "The colorful part that makes seeds."
                    },
                    {
                              "id": "c",
                              "text": "Can grow into a new plant."
                    },
                    {
                              "id": "d",
                              "text": "Supports the plant and carries water."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Stem\" means Supports the plant and carries water."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Stem\" means Supports the plant and carries water.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Stem** = Supports the plant and carries water.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u3-plant-parts-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Leaf\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The colorful part that makes seeds."
                    },
                    {
                              "id": "b",
                              "text": "Makes food for the plant using sunlight."
                    },
                    {
                              "id": "c",
                              "text": "Can grow into a new plant."
                    },
                    {
                              "id": "d",
                              "text": "How plants make food from sunlight."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Leaf\" means Makes food for the plant using sunlight."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Leaf\" means Makes food for the plant using sunlight.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Leaf** = Makes food for the plant using sunlight.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
