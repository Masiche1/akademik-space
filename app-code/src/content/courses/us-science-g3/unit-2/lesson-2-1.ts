import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "sci3-u2-lesson-2-1",
  code: "2-1",
  title: "What Animals Need",
  goal: "I CAN explain what animals need to survive.",
  standards: ["LS1.A"],
  vocabulary: [
    { term: "Animal", definition: "A living thing that moves." },
    { term: "Need", definition: "Something required." },
    { term: "Food", definition: "Energy source." },
    { term: "Water", definition: "Liquid for life." },
    { term: "Shelter", definition: "Place to stay safe." },
    { term: "Air", definition: "Gases to breathe." },
    { term: "Survive", definition: "Stay alive." },
    { term: "Habitat", definition: "Where animal lives." },
  ],
  concepts: [
    {
      id: "sci3-u2-animal-needs",
      title: "What animals need",
      skill: "Identify what animals need: food, water, shelter and air.",
      lesson: {
        sections: [
          {
            heading: "Animals are living things",
            body: "Animals are **living things** that move and need certain things to **survive**.",
          },
          {
            heading: "What they need",
            body: "Animals need **food** (energy), **water**, **shelter** (safe place), and **air** (to breathe). Their **habitat** provides these.",
          },
        ],
        keyFormulas: [
          { name: "Animal needs", statement: "Food + water + shelter + air = animal survives." },
        ],
        workedExample: {
          problem: "What does a pet dog need?",
          solution: "Food, water, shelter (a home), and air to breathe.",
        },
      },
      questions: [
        {
          id: "sci3-u2-animal-needs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What do animals need to survive?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only food"
                    },
                    {
                              "id": "b",
                              "text": "food, water, shelter and air"
                    },
                    {
                              "id": "c",
                              "text": "only water"
                    },
                    {
                              "id": "d",
                              "text": "toys only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Animals need all four."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Animals need all four.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "food, water, shelter and air",
          "commonErrors": [
                    "Thinks animals need only food."
          ]
},
        },
        {
          id: "sci3-u2-animal-needs-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Shelter' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "food"
                    },
                    {
                              "id": "b",
                              "text": "a safe place to stay"
                    },
                    {
                              "id": "c",
                              "text": "water"
                    },
                    {
                              "id": "d",
                              "text": "air"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Shelter = safe place."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Shelter = safe place.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "a safe place to stay",
          "commonErrors": [
                    "Confuses with food."
          ]
},
        },
        {
          id: "sci3-u2-animal-needs-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Name two things an animal needs and explain why.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Animal needs",
                              "statement": "2 needs + why."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names 2 needs + reasons.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Food — gives energy; water — keeps alive.'**",
          "commonErrors": [
                    "Cannot name needs.",
                    "No reasons."
          ]
},
        },
        {
          id: "sci3-u2-animal-needs-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'habitat' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a food"
                    },
                    {
                              "id": "b",
                              "text": "where an animal lives"
                    },
                    {
                              "id": "c",
                              "text": "a toy"
                    },
                    {
                              "id": "d",
                              "text": "a cage only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Habitat = where animal lives."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Habitat = where animal lives.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "where an animal lives",
          "commonErrors": [
                    "Thinks it's just a cage."
          ]
},
        },
        {
          id: "sci3-u2-animal-needs-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "What happens if an animal has no water? Predict and explain.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Animal needs",
                              "statement": "Predict + explain."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Predicts what happens.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains why.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'It gets sick/dies because all living things need water.'**",
          "commonErrors": [
                    "Says it grows better.",
                    "No explanation."
          ]
},
        },
        {
          id: "sci3-u2-animal-needs-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Animal\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Something required."
                    },
                    {
                              "id": "b",
                              "text": "A living thing that moves."
                    },
                    {
                              "id": "c",
                              "text": "Energy source."
                    },
                    {
                              "id": "d",
                              "text": "Liquid for life."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Animal\" means A living thing that moves."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Animal\" means A living thing that moves.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Animal** = A living thing that moves.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u2-animal-needs-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Need\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Energy source."
                    },
                    {
                              "id": "b",
                              "text": "Liquid for life."
                    },
                    {
                              "id": "c",
                              "text": "Place to stay safe."
                    },
                    {
                              "id": "d",
                              "text": "Something required."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Need\" means Something required."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Need\" means Something required.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Need** = Something required.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u2-animal-needs-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Food\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Liquid for life."
                    },
                    {
                              "id": "b",
                              "text": "Energy source."
                    },
                    {
                              "id": "c",
                              "text": "Place to stay safe."
                    },
                    {
                              "id": "d",
                              "text": "Gases to breathe."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Food\" means Energy source."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Food\" means Energy source.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Food** = Energy source.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
