import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "spk-u3-lesson-3-3",
  code: "3-3",
  title: "What Animals Need",
  goal: "I CAN describe what animals need to survive.",
  standards: ["ELOF-PK.SCI.ANIMAL.1"],
  vocabulary: [
    { term: "Food", definition: "What animals eat for energy." },
    { term: "Water", definition: "What animals drink to survive." },
    { term: "Shelter", definition: "A safe place to live." },
    { term: "Air", definition: "What animals breathe." },
    { term: "Space", definition: "Room to move and live." },
    { term: "Survive", definition: "Stay alive." },
  ],
  concepts: [
    {
      id: "spk-u3-animal-needs",
      title: "What animals need",
      skill: "Describe the basic needs of animals.",
      lesson: {
        sections: [
          {
            heading: "Basic needs",
            body: "All animals need **food** (energy), **water** (to drink), **air** (to breathe), **shelter** (a safe place), and **space** (room to move). Without these, they cannot survive.",
          },
          {
            heading: "Different animals, different needs",
            body: "A fish needs water to live in. A bird needs air and a nest. A camel needs very little water. Each animal's needs match its environment.",
          },
        ],
        keyFormulas: [
          { name: "Animal needs", statement: "Food + water + air + shelter + space = survival." },
        ],
        workedExample: {
          problem: "What does a pet dog need to survive?",
          solution: "A dog needs **food, water, air, shelter** (a home) and **space** to run and play.",
        },
      },
      questions: [
        {
          id: "spk-u3-animal-needs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a basic need of animals?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "food"
                    },
                    {
                              "id": "b",
                              "text": "water"
                    },
                    {
                              "id": "c",
                              "text": "shelter"
                    },
                    {
                              "id": "d",
                              "text": "toys only"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Toys are not a basic need; food, water, shelter are."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Toys are not a basic need; food, water, shelter are.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Toys only**",
          "commonErrors": [
                    "Picks a real need."
          ]
},
        },
        {
          id: "spk-u3-animal-needs-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A fish lives in water because it needs...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "air only"
                    },
                    {
                              "id": "b",
                              "text": "water to breathe and live"
                    },
                    {
                              "id": "c",
                              "text": "land"
                    },
                    {
                              "id": "d",
                              "text": "shelter only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Fish need water to breathe and survive."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fish need water to breathe and survive.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Water**",
          "commonErrors": [
                    "Thinks fish need air like us."
          ]
},
        },
        {
          id: "spk-u3-animal-needs-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Name three things a pet (dog, cat, hamster) needs to survive.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Animal needs",
                              "statement": "Food, water, shelter, etc."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names 3 needs correctly.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Food, water, shelter/a home.'**",
          "commonErrors": [
                    "Cannot name needs.",
                    "Names non-needs."
          ]
},
        },
        {
          id: "spk-u3-animal-needs-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Shelter' for an animal means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a toy"
                    },
                    {
                              "id": "b",
                              "text": "a safe place to live"
                    },
                    {
                              "id": "c",
                              "text": "food"
                    },
                    {
                              "id": "d",
                              "text": "water"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Shelter = a safe place to live."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Shelter = a safe place to live.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Safe place**",
          "commonErrors": [
                    "Confuses shelter with food."
          ]
},
        },
        {
          id: "spk-u3-animal-needs-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare what a fish needs vs what a bird needs. What is the same? What is different?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Animal needs",
                              "statement": "Compare needs across animals."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compares fish and bird needs.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Notes same and different.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Both need food/water/air; fish need water to live in, bird needs nest and air.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "No differences noted."
          ]
},
        },
        {
          id: "spk-u3-animal-needs-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Food\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What animals drink to survive."
                    },
                    {
                              "id": "b",
                              "text": "What animals eat for energy."
                    },
                    {
                              "id": "c",
                              "text": "A safe place to live."
                    },
                    {
                              "id": "d",
                              "text": "What animals breathe."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Food\" means What animals eat for energy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Food\" means What animals eat for energy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Food** = What animals eat for energy.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u3-animal-needs-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Water\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A safe place to live."
                    },
                    {
                              "id": "b",
                              "text": "What animals breathe."
                    },
                    {
                              "id": "c",
                              "text": "Room to move and live."
                    },
                    {
                              "id": "d",
                              "text": "What animals drink to survive."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Water\" means What animals drink to survive."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Water\" means What animals drink to survive.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Water** = What animals drink to survive.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u3-animal-needs-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Shelter\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What animals breathe."
                    },
                    {
                              "id": "b",
                              "text": "A safe place to live."
                    },
                    {
                              "id": "c",
                              "text": "Room to move and live."
                    },
                    {
                              "id": "d",
                              "text": "Stay alive."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Shelter\" means A safe place to live."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Shelter\" means A safe place to live.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Shelter** = A safe place to live.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
