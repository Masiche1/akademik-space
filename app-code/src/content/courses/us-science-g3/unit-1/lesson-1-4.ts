import type { Lesson } from "../../../types.ts";

export const lesson14: Lesson = {
  id: "sci3-u1-lesson-1-4",
  code: "1-4",
  title: "Plant Growth",
  goal: "I CAN describe how plants grow from seeds to mature plants.",
  standards: ["LS1.A", "LS1.B"],
  vocabulary: [
    { term: "Seed", definition: "Starts new plant." },
    { term: "Germinate", definition: "Seed starts growing." },
    { term: "Sprout", definition: "First part of plant." },
    { term: "Seedling", definition: "Young plant." },
    { term: "Mature", definition: "Fully grown." },
    { term: "Flower", definition: "Reproductive part." },
    { term: "Fruit", definition: "Contains seeds." },
    { term: "Cycle", definition: "Repeating process." },
  ],
  concepts: [
    {
      id: "sci3-u1-plant-growth",
      title: "Plant growth",
      skill: "Describe plant life cycle: seed -> sprout -> seedling -> mature -> flower -> fruit -> seed.",
      lesson: {
        sections: [
          {
            heading: "From seed to plant",
            body: "A **seed** **germinates** (starts growing) into a **sprout**, becomes a **seedling**, then a **mature** plant with **flowers** and **fruit**.",
          },
          {
            heading: "The cycle repeats",
            body: "Flowers make **seeds** inside **fruit**. Those seeds grow into new plants — the cycle repeats!",
          },
        ],
        keyFormulas: [
          { name: "Plant life cycle", statement: "Seed -> sprout -> seedling -> mature -> flower -> fruit -> seed (repeat)." },
        ],
        workedExample: {
          problem: "Put in order: mature plant, seed, sprout, seedling.",
          solution: "**Seed -> sprout -> seedling -> mature plant.**",
        },
      },
      questions: [
        {
          id: "sci3-u1-plant-growth-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the first stage of a plant's life?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "mature plant"
                    },
                    {
                              "id": "b",
                              "text": "seed"
                    },
                    {
                              "id": "c",
                              "text": "flower"
                    },
                    {
                              "id": "d",
                              "text": "fruit"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Seed comes first."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Seed comes first.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "seed",
          "commonErrors": [
                    "Thinks flower comes first."
          ]
},
        },
        {
          id: "sci3-u1-plant-growth-q2",
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
                              "text": "the seed falls off"
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
          id: "sci3-u1-plant-growth-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Put the plant life cycle stages in order: flower, seed, sprout, mature plant, seedling.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Plant growth",
                              "statement": "Correct order."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Puts stages in correct order.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Seed -> sprout -> seedling -> mature plant -> flower -> (fruit ->) seed**",
          "commonErrors": [
                    "Wrong order.",
                    "Cannot order."
          ]
},
        },
        {
          id: "sci3-u1-plant-growth-q4",
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
          id: "sci3-u1-plant-growth-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Describe the plant life cycle in your own words.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Plant growth",
                              "statement": "Seed->sprout->seedling->mature->flower->fruit->seed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes stages.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Mentions cycle repeats.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Seed grows to sprout, then seedling, then mature plant with flowers and fruit, which make new seeds.'**",
          "commonErrors": [
                    "Cannot describe.",
                    "Wrong order."
          ]
},
        },
        {
          id: "sci3-u1-plant-growth-q6",
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
                              "text": "First part of plant."
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
          id: "sci3-u1-plant-growth-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Germinate\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "First part of plant."
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
          id: "sci3-u1-plant-growth-q8",
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
                              "text": "First part of plant."
                    },
                    {
                              "id": "c",
                              "text": "Fully grown."
                    },
                    {
                              "id": "d",
                              "text": "Reproductive part."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sprout\" means First part of plant."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sprout\" means First part of plant.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sprout** = First part of plant.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
