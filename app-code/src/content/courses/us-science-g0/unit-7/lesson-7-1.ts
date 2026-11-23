import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "s0-u7-lesson-7-1",
  code: "7-1",
  title: "What Is a Habitat?",
  goal: "I CAN describe what a habitat is and what it provides.",
  standards: ["K-ESS2-2", "K-LS1-1"],
  vocabulary: [
    { term: "Habitat", definition: "The place where an animal or plant lives." },
    { term: "Home", definition: "Where a living thing lives." },
    { term: "Provide", definition: "Give what is needed." },
    { term: "Food", definition: "What animals eat there." },
    { term: "Water", definition: "Water in the habitat." },
    { term: "Shelter", definition: "Safe place in habitat." },
    { term: "Space", definition: "Room to live/move." },
    { term: "Environment", definition: "Surroundings of a habitat." },
  ],
  concepts: [
    {
      id: "s0-u7-habitat-intro",
      title: "What is a habitat?",
      skill: "Define habitat as the place where a living thing lives and what it provides.",
      lesson: {
        sections: [
          {
            heading: "Habitat = home",
            body: "A **habitat** is the **place** where an animal or plant **lives** — its home. It **provides** what the living thing **needs**: food, water, shelter and space.",
          },
          {
            heading: "Different habitats",
            body: "Different living things have different **habitats** — fish live in water, birds in trees/nests, animals in forests, deserts, etc.",
          },
        ],
        keyFormulas: [
          { name: "Habitat", statement: "Place where living thing lives; provides food, water, shelter, space." },
        ],
        workedExample: {
          problem: "What does a forest habitat provide for a squirrel?",
          solution: "**Food** (nuts), **water**, **shelter** (trees), and **space** to live.",
        },
      },
      questions: [
        {
          id: "s0-u7-habitat-intro-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'habitat' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a pet"
                    },
                    {
                              "id": "b",
                              "text": "the place where a living thing lives"
                    },
                    {
                              "id": "c",
                              "text": "a food"
                    },
                    {
                              "id": "d",
                              "text": "a toy"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Habitat = living place."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Habitat = living place.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**living place**",
          "commonErrors": [
                    "Confuses with pet."
          ]
},
        },
        {
          id: "s0-u7-habitat-intro-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A habitat provides...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only toys"
                    },
                    {
                              "id": "b",
                              "text": "food, water, shelter, space"
                    },
                    {
                              "id": "c",
                              "text": "only water"
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
                              "statement": "Provides needs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Provides needs.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**food, water, shelter, space**",
          "commonErrors": [
                    "Picks wrong provision."
          ]
},
        },
        {
          id: "s0-u7-habitat-intro-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Choose an animal. Describe its habitat and what the habitat provides.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Habitat",
                              "statement": "Habitat + provisions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes habitat + provides.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Pond habitat: water, food (plants/insects), shelter (plants).'**",
          "commonErrors": [
                    "Cannot describe.",
                    "No provisions."
          ]
},
        },
        {
          id: "s0-u7-habitat-intro-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A fish's habitat is usually...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a forest"
                    },
                    {
                              "id": "b",
                              "text": "water"
                    },
                    {
                              "id": "c",
                              "text": "a desert"
                    },
                    {
                              "id": "d",
                              "text": "a tree"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Fish live in water."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fish live in water.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**water**",
          "commonErrors": [
                    "Picks wrong habitat."
          ]
},
        },
        {
          id: "s0-u7-habitat-intro-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare two habitats (like forest and desert). How are they different? What different animals live there?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Habitats",
                              "statement": "Two habitats + differences + animals."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes two habitats.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Names differences + animals.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Forest: trees, rain; Desert: sand, dry; different animals.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "No animals."
          ]
},
        },
        {
          id: "s0-u7-habitat-intro-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Habitat\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Where a living thing lives."
                    },
                    {
                              "id": "b",
                              "text": "The place where an animal or plant lives."
                    },
                    {
                              "id": "c",
                              "text": "Give what is needed."
                    },
                    {
                              "id": "d",
                              "text": "What animals eat there."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Habitat\" means The place where an animal or plant lives."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Habitat\" means The place where an animal or plant lives.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Habitat** = The place where an animal or plant lives.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u7-habitat-intro-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Home\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Give what is needed."
                    },
                    {
                              "id": "b",
                              "text": "What animals eat there."
                    },
                    {
                              "id": "c",
                              "text": "Water in the habitat."
                    },
                    {
                              "id": "d",
                              "text": "Where a living thing lives."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Home\" means Where a living thing lives."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Home\" means Where a living thing lives.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Home** = Where a living thing lives.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u7-habitat-intro-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Provide\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What animals eat there."
                    },
                    {
                              "id": "b",
                              "text": "Give what is needed."
                    },
                    {
                              "id": "c",
                              "text": "Water in the habitat."
                    },
                    {
                              "id": "d",
                              "text": "Safe place in habitat."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Provide\" means Give what is needed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Provide\" means Give what is needed.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Provide** = Give what is needed.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
