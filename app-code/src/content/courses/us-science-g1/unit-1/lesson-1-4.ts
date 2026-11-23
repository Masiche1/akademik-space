import type { Lesson } from "../../../types.ts";

export const lesson14: Lesson = {
  id: "s1-u1-lesson-1-4",
  code: "1-4",
  title: "Plant Life Cycle",
  goal: "I CAN describe the plant life cycle including flowering and seeds.",
  standards: ["1-LS1-2"],
  vocabulary: [
    { term: "Life cycle", definition: "All stages of life." },
    { term: "Flower", definition: "Makes seeds." },
    { term: "Pollinate", definition: "Move pollen for seeds." },
    { term: "Seed", definition: "Starts new plant." },
    { term: "Fruit", definition: "Protects seeds." },
    { term: "Cycle", definition: "Repeating pattern." },
    { term: "Season", definition: "Time of year." },
    { term: "Reproduce", definition: "Make new plants." },
  ],
  concepts: [
    {
      id: "s1-u1-plant-life-cycle",
      title: "Plant life cycle",
      skill: "Plants go through a life cycle: seed -> plant -> flower -> seed, repeating.",
      lesson: {
        sections: [
          {
            heading: "The cycle repeats",
            body: "The **plant life cycle**: **seed** grows into a **plant**, the plant makes **flowers**, flowers make **seeds**, and those seeds grow into new plants. The **cycle** repeats.",
          },
          {
            heading: "Flowering",
            body: "When a plant is **mature**, it may **flower**. Flowers make seeds so the plant can **reproduce** — make new plants.",
          },
        ],
        keyFormulas: [
          { name: "Life cycle", statement: "Seed -> plant -> flower -> seed = repeating cycle." },
        ],
        workedExample: {
          problem: "Draw the plant life cycle.",
          solution: "**Seed -> grows -> plant -> flowers -> makes seeds -> new seeds grow...**",
        },
      },
      questions: [
        {
          id: "s1-u1-plant-life-cycle-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What comes after a plant flowers?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "it dies"
                    },
                    {
                              "id": "b",
                              "text": "it makes seeds"
                    },
                    {
                              "id": "c",
                              "text": "it grows roots only"
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
          "finalAnswer": "**makes seeds**",
          "commonErrors": [
                    "Thinks plant dies."
          ]
},
        },
        {
          id: "s1-u1-plant-life-cycle-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'life cycle' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "one stage"
                    },
                    {
                              "id": "b",
                              "text": "all the stages of life that repeat"
                    },
                    {
                              "id": "c",
                              "text": "a picture"
                    },
                    {
                              "id": "d",
                              "text": "a fact"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Life cycle = repeating stages."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Life cycle = repeating stages.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**repeating stages**",
          "commonErrors": [
                    "Thinks it's one stage."
          ]
},
        },
        {
          id: "s1-u1-plant-life-cycle-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Draw or describe the complete plant life cycle as a repeating cycle.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Life cycle",
                              "statement": "Seed->plant->flower->seed cycle."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Shows complete cycle.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Seed grows to plant, flowers, makes seeds, seeds grow... repeats.'**",
          "commonErrors": [
                    "Missing parts.",
                    "Not a cycle."
          ]
},
        },
        {
          id: "s1-u1-plant-life-cycle-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What do flowers make?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "leaves"
                    },
                    {
                              "id": "b",
                              "text": "seeds"
                    },
                    {
                              "id": "c",
                              "text": "roots"
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
                    "Picks leaf/root."
          ]
},
        },
        {
          id: "s1-u1-plant-life-cycle-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare the life cycle of a plant to a butterfly. What is the same? What is different?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Life cycle",
                              "statement": "Compare two cycles."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names similarities.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Names differences.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Both have stages that repeat; plant stays in place, butterfly moves.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "Only one side."
          ]
},
        },
        {
          id: "s1-u1-plant-life-cycle-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Life cycle\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Makes seeds."
                    },
                    {
                              "id": "b",
                              "text": "All stages of life."
                    },
                    {
                              "id": "c",
                              "text": "Move pollen for seeds."
                    },
                    {
                              "id": "d",
                              "text": "Starts new plant."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Life cycle\" means All stages of life."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Life cycle\" means All stages of life.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Life cycle** = All stages of life.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u1-plant-life-cycle-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Flower\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Move pollen for seeds."
                    },
                    {
                              "id": "b",
                              "text": "Starts new plant."
                    },
                    {
                              "id": "c",
                              "text": "Protects seeds."
                    },
                    {
                              "id": "d",
                              "text": "Makes seeds."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Flower\" means Makes seeds."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Flower\" means Makes seeds.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Flower** = Makes seeds.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u1-plant-life-cycle-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Pollinate\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Starts new plant."
                    },
                    {
                              "id": "b",
                              "text": "Move pollen for seeds."
                    },
                    {
                              "id": "c",
                              "text": "Protects seeds."
                    },
                    {
                              "id": "d",
                              "text": "Repeating pattern."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Pollinate\" means Move pollen for seeds."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Pollinate\" means Move pollen for seeds.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Pollinate** = Move pollen for seeds.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
