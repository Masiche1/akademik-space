import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "s1-u2-lesson-2-1",
  code: "2-1",
  title: "What Animals Need",
  goal: "I CAN identify what animals need to survive.",
  standards: ["1-LS1-2"],
  vocabulary: [
    { term: "Animal", definition: "A living thing that moves and eats." },
    { term: "Need", definition: "Something required to live." },
    { term: "Food", definition: "What animals eat." },
    { term: "Water", definition: "Liquid animals need." },
    { term: "Air", definition: "Animals need air to breathe." },
    { term: "Shelter", definition: "A safe place to live." },
    { term: "Breathe", definition: "Take in air." },
    { term: "Digest", definition: "Break down food." },
  ],
  concepts: [
    {
      id: "s1-u2-animal-needs",
      title: "What animals need",
      skill: "Animals need food, water, air and shelter to survive.",
      lesson: {
        sections: [
          {
            heading: "Animals need care",
            body: "Animals are **living things**. They need **food**, **water**, **air** (to **breathe**) and **shelter** (a safe place) to survive.",
          },
          {
            heading: "Eat and digest",
            body: "Animals **eat** food and their bodies **digest** it to get energy and nutrients they need.",
          },
        ],
        keyFormulas: [
          { name: "Animal needs", statement: "Food + water + air + shelter = healthy animal." },
        ],
        workedExample: {
          problem: "A pet fish is not moving much. What might it need?",
          solution: "It might need more **food** or cleaner **water**.",
        },
      },
      questions: [
        {
          id: "s1-u2-animal-needs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a need of animals?",
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
                              "text": "a rock to sit on"
                    },
                    {
                              "id": "d",
                              "text": "air"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Animals need food/water/air/shelter — a rock is not a need."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Animals need food/water/air/shelter — a rock is not a need.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**a rock**",
          "commonErrors": [
                    "Picks a real need."
          ]
},
        },
        {
          id: "s1-u2-animal-needs-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What do animals use air for?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "to swim"
                    },
                    {
                              "id": "b",
                              "text": "to breathe"
                    },
                    {
                              "id": "c",
                              "text": "to eat"
                    },
                    {
                              "id": "d",
                              "text": "to sleep"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Animals breathe air."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Animals breathe air.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**breathe**",
          "commonErrors": [
                    "Picks wrong use."
          ]
},
        },
        {
          id: "s1-u2-animal-needs-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "List the four things animals need to survive. Explain why each is important.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Animal needs",
                              "statement": "Food + water + air + shelter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lists all four needs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains why each matters.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Food for energy, water to drink, air to breathe, shelter for safety.'**",
          "commonErrors": [
                    "Lists fewer than 4.",
                    "No explanation."
          ]
},
        },
        {
          id: "s1-u2-animal-needs-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Shelter' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "food"
                    },
                    {
                              "id": "b",
                              "text": "a safe place to live"
                    },
                    {
                              "id": "c",
                              "text": "air"
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
          "finalAnswer": "**safe place**",
          "commonErrors": [
                    "Confuses with food."
          ]
},
        },
        {
          id: "s1-u2-animal-needs-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare what plants need vs what animals need. How are they the same? Different?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Needs",
                              "statement": "Compare plant/animal needs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names shared needs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Names differences.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Both need water and air; plants need sunlight, animals need food.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "Only one side."
          ]
},
        },
        {
          id: "s1-u2-animal-needs-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Animal\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Something required to live."
                    },
                    {
                              "id": "b",
                              "text": "A living thing that moves and eats."
                    },
                    {
                              "id": "c",
                              "text": "What animals eat."
                    },
                    {
                              "id": "d",
                              "text": "Liquid animals need."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Animal\" means A living thing that moves and eats."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Animal\" means A living thing that moves and eats.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Animal** = A living thing that moves and eats.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u2-animal-needs-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Need\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What animals eat."
                    },
                    {
                              "id": "b",
                              "text": "Liquid animals need."
                    },
                    {
                              "id": "c",
                              "text": "Animals need air to breathe."
                    },
                    {
                              "id": "d",
                              "text": "Something required to live."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Need\" means Something required to live."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Need\" means Something required to live.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Need** = Something required to live.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u2-animal-needs-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Food\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Liquid animals need."
                    },
                    {
                              "id": "b",
                              "text": "What animals eat."
                    },
                    {
                              "id": "c",
                              "text": "Animals need air to breathe."
                    },
                    {
                              "id": "d",
                              "text": "A safe place to live."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Food\" means What animals eat."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Food\" means What animals eat.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Food** = What animals eat.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
