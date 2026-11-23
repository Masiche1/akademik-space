import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "s1-u1-lesson-1-2",
  code: "1-2",
  title: "Plant Parts",
  goal: "I CAN identify the main parts of a plant and their jobs.",
  standards: ["1-LS1-2"],
  vocabulary: [
    { term: "Root", definition: "Takes in water and anchors plant." },
    { term: "Stem", definition: "Supports plant and carries water." },
    { term: "Leaf", definition: "Makes food from sunlight." },
    { term: "Flower", definition: "Makes seeds." },
    { term: "Seed", definition: "Starts a new plant." },
    { term: "Anchor", definition: "Hold firmly in place." },
    { term: "Food", definition: "What plant makes." },
    { term: "Part", definition: "Piece of the plant." },
  ],
  concepts: [
    {
      id: "s1-u1-plant-parts",
      title: "Plant parts and their jobs",
      skill: "Each plant part has a job: roots take water, stems support, leaves make food, flowers make seeds.",
      lesson: {
        sections: [
          {
            heading: "Every part has a job",
            body: "**Roots** take in water and hold the plant in soil. **Stems** carry water and support the plant. **Leaves** make food using sunlight. **Flowers** make seeds.",
          },
          {
            heading: "Seeds make new plants",
            body: "A **seed** can grow into a new plant. Flowers make seeds so the plant can reproduce.",
          },
        ],
        keyFormulas: [
          { name: "Plant parts", statement: "Roots=water, Stem=support, Leaves=food, Flowers=seeds." },
        ],
        workedExample: {
          problem: "What is the job of a plant's leaves?",
          solution: "Leaves **make food** for the plant using sunlight.",
        },
      },
      questions: [
        {
          id: "s1-u1-plant-parts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which plant part makes food?",
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
                              "text": "stem"
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
          "finalAnswer": "**leaf**",
          "commonErrors": [
                    "Picks root/stem."
          ]
},
        },
        {
          id: "s1-u1-plant-parts-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What do roots do?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "make food"
                    },
                    {
                              "id": "b",
                              "text": "take in water and hold plant"
                    },
                    {
                              "id": "c",
                              "text": "make seeds"
                    },
                    {
                              "id": "d",
                              "text": "catch sunlight"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Roots take water + anchor."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Roots take water + anchor.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**take water + hold**",
          "commonErrors": [
                    "Picks leaf job."
          ]
},
        },
        {
          id: "s1-u1-plant-parts-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Draw or describe a plant. Label root, stem, leaf, flower and say each part's job.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Plant parts",
                              "statement": "4 parts + jobs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names all 4 parts + jobs.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Root takes water; stem supports; leaf makes food; flower makes seeds.'**",
          "commonErrors": [
                    "Fewer than 4 parts.",
                    "No jobs."
          ]
},
        },
        {
          id: "s1-u1-plant-parts-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What do flowers make?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "water"
                    },
                    {
                              "id": "b",
                              "text": "seeds"
                    },
                    {
                              "id": "c",
                              "text": "leaves"
                    },
                    {
                              "id": "d",
                              "text": "roots"
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
          "finalAnswer": "**seeds**",
          "commonErrors": [
                    "Picks water/leaves."
          ]
},
        },
        {
          id: "s1-u1-plant-parts-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Match each plant part to its job: root, stem, leaf, flower.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Plant parts",
                              "statement": "Part-job matches."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Matches root->water+hold.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Matches leaf->food, flower->seeds.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Root=water, stem=support, leaf=food, flower=seeds.'**",
          "commonErrors": [
                    "Wrong matches.",
                    "Cannot match."
          ]
},
        },
        {
          id: "s1-u1-plant-parts-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Root\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Supports plant and carries water."
                    },
                    {
                              "id": "b",
                              "text": "Takes in water and anchors plant."
                    },
                    {
                              "id": "c",
                              "text": "Makes food from sunlight."
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
                              "statement": "\"Root\" means Takes in water and anchors plant."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Root\" means Takes in water and anchors plant.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Root** = Takes in water and anchors plant.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u1-plant-parts-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Stem\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Makes food from sunlight."
                    },
                    {
                              "id": "b",
                              "text": "Makes seeds."
                    },
                    {
                              "id": "c",
                              "text": "Starts a new plant."
                    },
                    {
                              "id": "d",
                              "text": "Supports plant and carries water."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Stem\" means Supports plant and carries water."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Stem\" means Supports plant and carries water.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Stem** = Supports plant and carries water.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u1-plant-parts-q8",
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
                              "text": "Makes food from sunlight."
                    },
                    {
                              "id": "c",
                              "text": "Starts a new plant."
                    },
                    {
                              "id": "d",
                              "text": "Hold firmly in place."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Leaf\" means Makes food from sunlight."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Leaf\" means Makes food from sunlight.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Leaf** = Makes food from sunlight.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
