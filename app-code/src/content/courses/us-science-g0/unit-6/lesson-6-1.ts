import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "s0-u6-lesson-6-1",
  code: "6-1",
  title: "What Animals Need",
  goal: "I CAN describe what animals need to live.",
  standards: ["K-LS1-1"],
  vocabulary: [
    { term: "Animal", definition: "A living thing that moves and eats." },
    { term: "Need", definition: "Something required to live." },
    { term: "Food", definition: "What animals eat." },
    { term: "Water", definition: "Liquid animals need." },
    { term: "Shelter", definition: "A safe place to live." },
    { term: "Air", definition: "Animals need air to breathe." },
    { term: "Live", definition: "Be alive." },
    { term: "Grow", definition: "Get bigger." },
  ],
  concepts: [
    {
      id: "s0-u6-animal-needs",
      title: "What animals need",
      skill: "Describe what animals need to live: food, water, shelter, air.",
      lesson: {
        sections: [
          {
            heading: "Animals need things to live",
            body: "Animals need **food**, **water**, **shelter**, and **air** to **live** and **grow**. Different animals need different amounts and kinds.",
          },
          {
            heading: "Compare to plants",
            body: "Like plants, animals need water and air. But animals also need **food** (they eat) and **shelter** (a safe place).",
          },
        ],
        keyFormulas: [
          { name: "Animal needs", statement: "Food + water + shelter + air = living." },
        ],
        workedExample: {
          problem: "What does a dog need to live? List its needs.",
          solution: "**Food, water, shelter (a home), and air** to breathe.",
        },
      },
      questions: [
        {
          id: "s0-u6-animal-needs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Animals need which of these to live?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "sunlight only"
                    },
                    {
                              "id": "b",
                              "text": "food, water, shelter, air"
                    },
                    {
                              "id": "c",
                              "text": "soil"
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
                              "statement": "Food + water + shelter + air."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Food + water + shelter + air.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**food, water, shelter, air**",
          "commonErrors": [
                    "Picks wrong needs."
          ]
},
        },
        {
          id: "s0-u6-animal-needs-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Shelter' for an animal is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "its food"
                    },
                    {
                              "id": "b",
                              "text": "a safe place to live"
                    },
                    {
                              "id": "c",
                              "text": "its water"
                    },
                    {
                              "id": "d",
                              "text": "its air"
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
          id: "s0-u6-animal-needs-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Choose an animal. List what it needs to live and where it gets each need.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Animal needs",
                              "statement": "List needs + sources."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lists needs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Says where each comes from.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Dog: food (kibble), water (bowl), shelter (doghouse), air (outside).'**",
          "commonErrors": [
                    "Missing needs.",
                    "No sources."
          ]
},
        },
        {
          id: "s0-u6-animal-needs-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Animals get 'food' by...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "photosynthesis"
                    },
                    {
                              "id": "b",
                              "text": "eating other things"
                    },
                    {
                              "id": "c",
                              "text": "making it in leaves"
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
                              "statement": "Animals eat food."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Animals eat food.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**eating**",
          "commonErrors": [
                    "Confuses with plants."
          ]
},
        },
        {
          id: "s0-u6-animal-needs-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare what a plant needs and what an animal needs. What is the same? What is different?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Needs",
                              "statement": "Plant vs animal needs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names same needs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Names different needs.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Both need water/air; animals also need food/shelter, plants need sunlight/soil.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "Only same or only different."
          ]
},
        },
        {
          id: "s0-u6-animal-needs-q6",
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
          id: "s0-u6-animal-needs-q7",
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
                              "text": "A safe place to live."
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
          id: "s0-u6-animal-needs-q8",
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
                              "text": "A safe place to live."
                    },
                    {
                              "id": "d",
                              "text": "Animals need air to breathe."
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
