import type { Lesson } from "../../../types.ts";

export const lesson84: Lesson = {
  id: "s1-u8-lesson-8-4",
  code: "8-4",
  title: "Life Cycles Review",
  goal: "I CAN describe plant and animal life cycles.",
  standards: ["1-LS1-2"],
  vocabulary: [
    { term: "Life cycle", definition: "All stages of life." },
    { term: "Plant", definition: "Seed->plant->flower->seed." },
    { term: "Animal", definition: "Stages of growth." },
    { term: "Seed", definition: "Starts plant." },
    { term: "Flower", definition: "Makes seeds." },
    { term: "Egg", definition: "Starts many animals." },
    { term: "Larva", definition: "Young stage." },
    { term: "Adult", definition: "Fully grown." },
  ],
  concepts: [
    {
      id: "s1-u8-review-life-cycles",
      title: "Life cycles review",
      skill: "Plants and animals go through life cycles with repeating stages.",
      lesson: {
        sections: [
          {
            heading: "Life cycles repeat",
            body: "**Plants**: seed -> plant -> flower -> seed. **Animals**: egg/seed -> young -> adult. Each stage is part of a **cycle** that repeats.",
          },
          {
            heading: "Compare cycles",
            body: "Both plants and animals have **life cycles** — stages that repeat. Plant cycles stay in one place; animal cycles often involve movement.",
          },
        ],
        keyFormulas: [
          { name: "Life cycles", statement: "Plant: seed->plant->flower->seed. Animal: egg->young->adult." },
        ],
        workedExample: {
          problem: "Compare a plant life cycle to a butterfly life cycle.",
          solution: "Both have stages that repeat; plant: seed->plant->flower->seed; butterfly: egg->caterpillar->chrysalis->butterfly.",
        },
      },
      questions: [
        {
          id: "s1-u8-review-life-cycles-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The plant life cycle is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "egg->adult"
                    },
                    {
                              "id": "b",
                              "text": "seed->plant->flower->seed"
                    },
                    {
                              "id": "c",
                              "text": "seed->flower->seed"
                    },
                    {
                              "id": "d",
                              "text": "plant->seed->plant"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Seed->plant->flower->seed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Seed->plant->flower->seed.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**seed->plant->flower->seed**",
          "commonErrors": [
                    "Picks animal cycle."
          ]
},
        },
        {
          id: "s1-u8-review-life-cycles-q2",
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
                              "text": "all stages of life that repeat"
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
          id: "s1-u8-review-life-cycles-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Draw or describe the life cycle of a plant and of an animal you know.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Life cycles",
                              "statement": "Plant + animal cycles."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes plant cycle.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Describes animal cycle.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Plant: seed->plant->flower->seed. Butterfly: egg->caterpillar->chrysalis->butterfly.'**",
          "commonErrors": [
                    "Only one cycle.",
                    "Cannot describe."
          ]
},
        },
        {
          id: "s1-u8-review-life-cycles-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Many animals start life as...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "seeds"
                    },
                    {
                              "id": "b",
                              "text": "eggs"
                    },
                    {
                              "id": "c",
                              "text": "flowers"
                    },
                    {
                              "id": "d",
                              "text": "plants"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Animals often start as eggs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Animals often start as eggs.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**eggs**",
          "commonErrors": [
                    "Picks plant terms."
          ]
},
        },
        {
          id: "s1-u8-review-life-cycles-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare a plant life cycle and an animal life cycle. What is the same? What is different?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Life cycles",
                              "statement": "Compare two cycles."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names similarities.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Names differences.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Both repeat stages; plant stays in place, animal moves.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "Only one side."
          ]
},
        },
        {
          id: "s1-u8-review-life-cycles-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Life cycle\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Seed->plant->flower->seed."
                    },
                    {
                              "id": "b",
                              "text": "All stages of life."
                    },
                    {
                              "id": "c",
                              "text": "Stages of growth."
                    },
                    {
                              "id": "d",
                              "text": "Starts plant."
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
          id: "s1-u8-review-life-cycles-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Plant\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Stages of growth."
                    },
                    {
                              "id": "b",
                              "text": "Starts plant."
                    },
                    {
                              "id": "c",
                              "text": "Makes seeds."
                    },
                    {
                              "id": "d",
                              "text": "Seed->plant->flower->seed."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Plant\" means Seed->plant->flower->seed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Plant\" means Seed->plant->flower->seed.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Plant** = Seed->plant->flower->seed.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u8-review-life-cycles-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Animal\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Starts plant."
                    },
                    {
                              "id": "b",
                              "text": "Stages of growth."
                    },
                    {
                              "id": "c",
                              "text": "Makes seeds."
                    },
                    {
                              "id": "d",
                              "text": "Starts many animals."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Animal\" means Stages of growth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Animal\" means Stages of growth.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Animal** = Stages of growth.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
