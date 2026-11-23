import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "s0-u7-lesson-7-2",
  code: "7-2",
  title: "Habitat Needs",
  goal: "I CAN match animals to habitats based on their needs.",
  standards: ["K-ESS2-2", "K-LS1-1"],
  vocabulary: [
    { term: "Match", definition: "Fit together well." },
    { term: "Need", definition: "What animal requires." },
    { term: "Water", definition: "Aquatic habitat need." },
    { term: "Land", definition: "Terrestrial habitat need." },
    { term: "Trees", definition: "Forest habitat feature." },
    { term: "Sand", definition: "Desert habitat feature." },
    { term: "Fit", definition: "Suit well." },
    { term: "Adapt", definition: "Fit the environment." },
  ],
  concepts: [
    {
      id: "s0-u7-habitat-needs",
      title: "Habitat needs",
      skill: "Match animals to habitats based on their needs.",
      lesson: {
        sections: [
          {
            heading: "Animals fit habitats",
            body: "Animals **fit** habitats where their **needs** are met. A fish **needs** water; a camel **needs** dry land; a bird **needs** trees or open sky.",
          },
          {
            heading: "Right habitat",
            body: "The **right** habitat has what the animal **needs** — water animals need water, land animals need land, desert animals need dry conditions.",
          },
        ],
        keyFormulas: [
          { name: "Habitat match", statement: "Animal needs -> habitat that provides them." },
        ],
        workedExample: {
          problem: "Where should a fish live: a pond or a desert? Why?",
          solution: "A **pond** — fish **need** water to breathe and live.",
        },
      },
      questions: [
        {
          id: "s0-u7-habitat-needs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A fish needs which habitat?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "desert"
                    },
                    {
                              "id": "b",
                              "text": "water"
                    },
                    {
                              "id": "c",
                              "text": "forest floor"
                    },
                    {
                              "id": "d",
                              "text": "mountain top"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Fish need water."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fish need water.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**water**",
          "commonErrors": [
                    "Picks dry habitat."
          ]
},
        },
        {
          id: "s0-u7-habitat-needs-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A camel lives in the desert because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "it likes cold"
                    },
                    {
                              "id": "b",
                              "text": "it is adapted to dry conditions"
                    },
                    {
                              "id": "c",
                              "text": "it needs water constantly"
                    },
                    {
                              "id": "d",
                              "text": "it is a fish"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Camels are adapted to dry/desert."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Camels are adapted to dry/desert.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**dry adapted**",
          "commonErrors": [
                    "Picks wrong reason."
          ]
},
        },
        {
          id: "s0-u7-habitat-needs-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Choose an animal. What habitat does it need? What features does that habitat have?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Habitat needs",
                              "statement": "Animal + habitat + features."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names habitat + features.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Penguin needs cold ocean; habitat has cold water, fish to eat.'**",
          "commonErrors": [
                    "Wrong habitat.",
                    "No features."
          ]
},
        },
        {
          id: "s0-u7-habitat-needs-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Animals 'adapt' to habitats by...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "changing habitats daily"
                    },
                    {
                              "id": "b",
                              "text": "having features that fit the environment"
                    },
                    {
                              "id": "c",
                              "text": "eating rocks"
                    },
                    {
                              "id": "d",
                              "text": "flying always"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Adapt = features fit environment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Adapt = features fit environment.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**features fit**",
          "commonErrors": [
                    "Thinks adapt means move."
          ]
},
        },
        {
          id: "s0-u7-habitat-needs-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Match three animals to habitats. Explain why each habitat fits that animal's needs.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Habitat match",
                              "statement": "3 matches + reasons."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Matches all 3.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains each fit.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Fish->pond (water); Camel->desert (dry); Bird->trees (nesting).'**",
          "commonErrors": [
                    "Wrong matches.",
                    "No reasons."
          ]
},
        },
        {
          id: "s0-u7-habitat-needs-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Match\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What animal requires."
                    },
                    {
                              "id": "b",
                              "text": "Fit together well."
                    },
                    {
                              "id": "c",
                              "text": "Aquatic habitat need."
                    },
                    {
                              "id": "d",
                              "text": "Terrestrial habitat need."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Match\" means Fit together well."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Match\" means Fit together well.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Match** = Fit together well.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u7-habitat-needs-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Need\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Aquatic habitat need."
                    },
                    {
                              "id": "b",
                              "text": "Terrestrial habitat need."
                    },
                    {
                              "id": "c",
                              "text": "Forest habitat feature."
                    },
                    {
                              "id": "d",
                              "text": "What animal requires."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Need\" means What animal requires."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Need\" means What animal requires.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Need** = What animal requires.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u7-habitat-needs-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Water\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Terrestrial habitat need."
                    },
                    {
                              "id": "b",
                              "text": "Aquatic habitat need."
                    },
                    {
                              "id": "c",
                              "text": "Forest habitat feature."
                    },
                    {
                              "id": "d",
                              "text": "Desert habitat feature."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Water\" means Aquatic habitat need."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Water\" means Aquatic habitat need.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Water** = Aquatic habitat need.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
