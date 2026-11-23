import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "sci2-u5-lesson-5-1",
  code: "5-1",
  title: "What Animals Need",
  goal: "I CAN describe what animals need to survive.",
  standards: ["NGSS 2-LS2-2"],
  vocabulary: [
    { term: "Animal", definition: "Living thing that moves." },
    { term: "Food", definition: "Energy for animals." },
    { term: "Water", definition: "Needed for survival." },
    { term: "Shelter", definition: "Protection from weather." },
    { term: "Air", definition: "Needed to breathe." },
    { term: "Space", definition: "Room to move." },
    { term: "Habitat", definition: "Where animal lives." },
    { term: "Survive", definition: "Stay alive." },
    { term: "Need", definition: "Must have." },
    { term: "Predator", definition: "Animal that hunts others." },
  ],
  concepts: [
    {
      id: "sci2-u5-animal-needs",
      title: "What animals need",
      skill: "Describe what animals need to survive: food, water, shelter, air, space.",
      lesson: {
        sections: [
          {
            heading: "Animal needs",
            body: "Animals need **food** (energy), **water**, **shelter** (protection), **air** (to breathe), and **space** to live and move.",
          },
          {
            heading: "Habitat",
            body: "An animal's **habitat** is where it lives — it provides food, water, and shelter. Different animals need different habitats.",
          },
        ],
        keyFormulas: [
          { name: "Animal needs", statement: "Food + water + shelter + air + space = survive." },
        ],
        workedExample: {
          problem: "What does a bird need to survive?",
          solution: "**Food** (seeds/insects), **water**, **shelter** (nest), **air**, and **space** to fly.",
        },
      },
      questions: [
        {
          id: "sci2-u5-animal-needs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Animals need which to survive?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only food"
                    },
                    {
                              "id": "b",
                              "text": "food, water, shelter, air, space"
                    },
                    {
                              "id": "c",
                              "text": "only water"
                    },
                    {
                              "id": "d",
                              "text": "only shelter"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All five needs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All five needs.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**all five**",
          "commonErrors": [
                    "Picks one need."
          ]
},
        },
        {
          id: "sci2-u5-animal-needs-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'habitat' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a cage"
                    },
                    {
                              "id": "b",
                              "text": "where an animal lives"
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
          "finalAnswer": "**where it lives**",
          "commonErrors": [
                    "Confuses with needs."
          ]
},
        },
        {
          id: "sci2-u5-animal-needs-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Name five things animals need and what each provides.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Animal needs",
                              "statement": "Food, water, shelter, air, space."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names 5 needs + functions.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Food: energy. Water: hydration. Shelter: protection. Air: breathe. Space: move.'**",
          "commonErrors": [
                    "Cannot name.",
                    "Fewer than 5."
          ]
},
        },
        {
          id: "sci2-u5-animal-needs-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Shelter' provides...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "energy"
                    },
                    {
                              "id": "b",
                              "text": "protection from weather/danger"
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
                              "statement": "Shelter = protection."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Shelter = protection.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**protection**",
          "commonErrors": [
                    "Confuses with food."
          ]
},
        },
        {
          id: "sci2-u5-animal-needs-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare what a fish needs vs what a bird needs. How are they different?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Animal needs",
                              "statement": "Fish vs bird needs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes fish needs.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Describes bird needs.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Fish: water, no air (gills). Bird: air, nest, seeds.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "Same needs."
          ]
},
        },
        {
          id: "sci2-u5-animal-needs-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Animal\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Energy for animals."
                    },
                    {
                              "id": "b",
                              "text": "Living thing that moves."
                    },
                    {
                              "id": "c",
                              "text": "Needed for survival."
                    },
                    {
                              "id": "d",
                              "text": "Protection from weather."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Animal\" means Living thing that moves."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Animal\" means Living thing that moves.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Animal** = Living thing that moves.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u5-animal-needs-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Food\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Needed for survival."
                    },
                    {
                              "id": "b",
                              "text": "Protection from weather."
                    },
                    {
                              "id": "c",
                              "text": "Needed to breathe."
                    },
                    {
                              "id": "d",
                              "text": "Energy for animals."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Food\" means Energy for animals."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Food\" means Energy for animals.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Food** = Energy for animals.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u5-animal-needs-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Water\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Protection from weather."
                    },
                    {
                              "id": "b",
                              "text": "Needed for survival."
                    },
                    {
                              "id": "c",
                              "text": "Needed to breathe."
                    },
                    {
                              "id": "d",
                              "text": "Room to move."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Water\" means Needed for survival."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Water\" means Needed for survival.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Water** = Needed for survival.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
