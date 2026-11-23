import type { Lesson } from "../../../types.ts";

export const lesson34: Lesson = {
  id: "sci3-u3-lesson-3-4",
  code: "3-4",
  title: "Plant Life Cycles",
  goal: "I CAN describe the plant life cycle from seed to mature plant.",
  standards: ["LS1.B"],
  vocabulary: [
    { term: "Seed", definition: "Starts new plant." },
    { term: "Germinate", definition: "Seed starts growing." },
    { term: "Sprout", definition: "First growth." },
    { term: "Seedling", definition: "Young plant." },
    { term: "Mature", definition: "Fully grown." },
    { term: "Flower", definition: "Makes seeds." },
    { term: "Fruit", definition: "Holds seeds." },
    { term: "Cycle", definition: "Repeating stages." },
  ],
  concepts: [
    {
      id: "sci3-u3-plant-cycles",
      title: "Plant life cycles",
      skill: "Describe plant life cycle: seed -> sprout -> seedling -> mature -> flower -> fruit -> seed.",
      lesson: {
        sections: [
          {
            heading: "From seed to seed",
            body: "A plant **life cycle** starts with a **seed**, which **germinates** into a **sprout**, grows to a **seedling**, then a **mature** plant. **Flowers** make **fruit** with **seeds** — and the cycle repeats.",
          },
          {
            heading: "Plants repeat too",
            body: "Just like animals, plants have repeating life cycles. Each generation starts from seeds.",
          },
        ],
        keyFormulas: [
          { name: "Plant cycle", statement: "Seed -> sprout -> seedling -> mature -> flower -> fruit -> seed (repeat)." },
        ],
        workedExample: {
          problem: "Put in order: fruit, seed, sprout, mature plant, seedling, flower.",
          solution: "**Seed -> sprout -> seedling -> mature plant -> flower -> fruit -> (seed).**",
        },
      },
      questions: [
        {
          id: "sci3-u3-plant-cycles-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The plant life cycle starts with...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a flower"
                    },
                    {
                              "id": "b",
                              "text": "a seed"
                    },
                    {
                              "id": "c",
                              "text": "a fruit"
                    },
                    {
                              "id": "d",
                              "text": "a root"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Seed starts the cycle."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Seed starts the cycle.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "a seed",
          "commonErrors": [
                    "Thinks flower starts it."
          ]
},
        },
        {
          id: "sci3-u3-plant-cycles-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Germinate' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the plant dies"
                    },
                    {
                              "id": "b",
                              "text": "the seed starts growing"
                    },
                    {
                              "id": "c",
                              "text": "the plant flowers"
                    },
                    {
                              "id": "d",
                              "text": "the seed falls"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Germinate = seed starts growing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Germinate = seed starts growing.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "the seed starts growing",
          "commonErrors": [
                    "Thinks it's flowering."
          ]
},
        },
        {
          id: "sci3-u3-plant-cycles-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe the plant life cycle in your own words.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Plant cycle",
                              "statement": "Seed->sprout->seedling->mature->flower->fruit->seed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes stages.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Seed grows to sprout, seedling, mature plant with flowers and fruit, which make seeds — cycle repeats.'**",
          "commonErrors": [
                    "Cannot describe.",
                    "Wrong order."
          ]
},
        },
        {
          id: "sci3-u3-plant-cycles-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'seedling' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a seed"
                    },
                    {
                              "id": "b",
                              "text": "a young plant"
                    },
                    {
                              "id": "c",
                              "text": "a flower"
                    },
                    {
                              "id": "d",
                              "text": "a fruit"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Seedling = young plant."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Seedling = young plant.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "a young plant",
          "commonErrors": [
                    "Thinks it's a seed."
          ]
},
        },
        {
          id: "sci3-u3-plant-cycles-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare plant and animal life cycles. How are they similar? How are they different?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Plant vs animal",
                              "statement": "Similar + different."
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
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Both repeat; plants start as seeds, animals born/eggs; plants don't move.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "Only one side."
          ]
},
        },
        {
          id: "sci3-u3-plant-cycles-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Seed\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Seed starts growing."
                    },
                    {
                              "id": "b",
                              "text": "Starts new plant."
                    },
                    {
                              "id": "c",
                              "text": "First growth."
                    },
                    {
                              "id": "d",
                              "text": "Young plant."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Seed\" means Starts new plant."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Seed\" means Starts new plant.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Seed** = Starts new plant.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u3-plant-cycles-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Germinate\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "First growth."
                    },
                    {
                              "id": "b",
                              "text": "Young plant."
                    },
                    {
                              "id": "c",
                              "text": "Fully grown."
                    },
                    {
                              "id": "d",
                              "text": "Seed starts growing."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Germinate\" means Seed starts growing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Germinate\" means Seed starts growing.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Germinate** = Seed starts growing.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u3-plant-cycles-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sprout\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Young plant."
                    },
                    {
                              "id": "b",
                              "text": "First growth."
                    },
                    {
                              "id": "c",
                              "text": "Fully grown."
                    },
                    {
                              "id": "d",
                              "text": "Makes seeds."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sprout\" means First growth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sprout\" means First growth.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sprout** = First growth.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
