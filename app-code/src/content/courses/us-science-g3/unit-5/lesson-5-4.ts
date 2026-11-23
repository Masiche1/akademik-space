import type { Lesson } from "../../../types.ts";

export const lesson54: Lesson = {
  id: "sci3-u5-lesson-5-4",
  code: "5-4",
  title: "Balanced and Unbalanced Forces",
  goal: "I CAN explain balanced vs unbalanced forces.",
  standards: ["PS2.A"],
  vocabulary: [
    { term: "Balanced", definition: "Forces equal — no motion change." },
    { term: "Unbalanced", definition: "Forces unequal — motion changes." },
    { term: "Equal", definition: "Same amount." },
    { term: "Opposite", definition: "Different direction." },
    { term: "Net force", definition: "Overall force." },
    { term: "Tug-of-war", definition: "Two teams pulling." },
    { term: "Still", definition: "Not moving." },
    { term: "Move", definition: "In motion." },
  ],
  concepts: [
    {
      id: "sci3-u5-balanced-forces",
      title: "Balanced and unbalanced forces",
      skill: "Explain balanced forces (equal, no motion change) vs unbalanced (unequal, motion changes).",
      lesson: {
        sections: [
          {
            heading: "Two kinds of forces",
            body: "When forces are **balanced** (equal in opposite directions), nothing moves. When **unbalanced** (one stronger), the object **moves**.",
          },
          {
            heading: "Tug-of-war",
            body: "In **tug-of-war**, if both teams pull equally, the rope stays **still** (balanced). If one pulls harder, it moves (unbalanced).",
          },
        ],
        keyFormulas: [
          { name: "Balanced", statement: "Equal forces opposite = no motion." },
          { name: "Unbalanced", statement: "Unequal forces = motion changes." },
        ],
        workedExample: {
          problem: "Two people push a box with equal force from opposite sides. What happens?",
          solution: "The box **stays still** — forces are **balanced**.",
        },
      },
      questions: [
        {
          id: "sci3-u5-balanced-forces-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Balanced forces are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "unequal"
                    },
                    {
                              "id": "b",
                              "text": "equal in opposite directions"
                    },
                    {
                              "id": "c",
                              "text": "only pushes"
                    },
                    {
                              "id": "d",
                              "text": "only pulls"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Balanced = equal opposite."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Balanced = equal opposite.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "equal in opposite directions",
          "commonErrors": [
                    "Thinks balanced means moving."
          ]
},
        },
        {
          id: "sci3-u5-balanced-forces-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Unbalanced forces cause...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "nothing to happen"
                    },
                    {
                              "id": "b",
                              "text": "motion to change"
                    },
                    {
                              "id": "c",
                              "text": "the object to disappear"
                    },
                    {
                              "id": "d",
                              "text": "only gravity"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Unbalanced = motion changes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Unbalanced = motion changes.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "motion to change",
          "commonErrors": [
                    "Thinks unbalanced means still."
          ]
},
        },
        {
          id: "sci3-u5-balanced-forces-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the difference between balanced and unbalanced forces with an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Balanced/unbalanced",
                              "statement": "Equal=still, unequal=move."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains balanced.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains unbalanced + example.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Balanced: two equal pushes = still. Unbalanced: one stronger push = moves.'**",
          "commonErrors": [
                    "Cannot distinguish.",
                    "No example."
          ]
},
        },
        {
          id: "sci3-u5-balanced-forces-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In tug-of-war, if one team pulls harder, the rope...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "stays still"
                    },
                    {
                              "id": "b",
                              "text": "moves toward that team"
                    },
                    {
                              "id": "c",
                              "text": "breaks"
                    },
                    {
                              "id": "d",
                              "text": "disappears"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Unbalanced = moves."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Unbalanced = moves.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "moves toward that team",
          "commonErrors": [
                    "Thinks it stays still."
          ]
},
        },
        {
          id: "sci3-u5-balanced-forces-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Give an example of balanced forces and an example of unbalanced forces in daily life.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Balanced/unbalanced",
                              "statement": "Balanced example + unbalanced example."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gives balanced example.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives unbalanced example.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Balanced: book on table. Unbalanced: pushing door.'**",
          "commonErrors": [
                    "Cannot give examples.",
                    "Only one type."
          ]
},
        },
        {
          id: "sci3-u5-balanced-forces-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Balanced\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Forces unequal — motion changes."
                    },
                    {
                              "id": "b",
                              "text": "Forces equal — no motion change."
                    },
                    {
                              "id": "c",
                              "text": "Same amount."
                    },
                    {
                              "id": "d",
                              "text": "Different direction."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Balanced\" means Forces equal — no motion change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Balanced\" means Forces equal — no motion change.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Balanced** = Forces equal — no motion change.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u5-balanced-forces-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Unbalanced\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Same amount."
                    },
                    {
                              "id": "b",
                              "text": "Different direction."
                    },
                    {
                              "id": "c",
                              "text": "Overall force."
                    },
                    {
                              "id": "d",
                              "text": "Forces unequal — motion changes."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Unbalanced\" means Forces unequal — motion changes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Unbalanced\" means Forces unequal — motion changes.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Unbalanced** = Forces unequal — motion changes.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u5-balanced-forces-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Equal\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Different direction."
                    },
                    {
                              "id": "b",
                              "text": "Same amount."
                    },
                    {
                              "id": "c",
                              "text": "Overall force."
                    },
                    {
                              "id": "d",
                              "text": "Two teams pulling."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Equal\" means Same amount."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Equal\" means Same amount.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Equal** = Same amount.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
