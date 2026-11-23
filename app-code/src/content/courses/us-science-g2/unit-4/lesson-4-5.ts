import type { Lesson } from "../../../types.ts";

export const lesson45: Lesson = {
  id: "sci2-u4-lesson-4-5",
  code: "4-5",
  title: "Plants Review",
  goal: "I CAN describe plant needs, parts, life cycle and tests.",
  standards: ["NGSS 2-LS2-1", "NGSS 2-LS4-1"],
  vocabulary: [
    { term: "Plant", definition: "Living thing." },
    { term: "Need", definition: "What it requires." },
    { term: "Part", definition: "Piece of plant." },
    { term: "Life cycle", definition: "Stages of growth." },
    { term: "Seed", definition: "Starts new plant." },
    { term: "Test", definition: "Experiment." },
    { term: "Variable", definition: "What you change." },
    { term: "Grow", definition: "Get bigger." },
  ],
  concepts: [
    {
      id: "sci2-u4-plants-review",
      title: "Plants review",
      skill: "Combine plant needs, parts, life cycle and testing.",
      lesson: {
        sections: [
          {
            heading: "All plant skills",
            body: "Plants need **sunlight, water, soil, air**; have **parts** (roots, stem, leaves, flowers); go through **life cycles**; and we can **test** their needs.",
          },
          {
            heading: "Put it together",
            body: "Describe needs, parts, cycle, and how to test them.",
          },
        ],
        keyFormulas: [
          { name: "Plants review", statement: "Needs + parts + life cycle + tests = all plant skills." },
        ],
        workedExample: {
          problem: "Describe everything about a plant: needs, parts, life cycle, and how to test one need.",
          solution: "All plant skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "sci2-u4-plants-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Plant skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only watering"
                    },
                    {
                              "id": "b",
                              "text": "needs, parts, life cycle, tests"
                    },
                    {
                              "id": "c",
                              "text": "only parts"
                    },
                    {
                              "id": "d",
                              "text": "only cycles"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All plant skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All plant skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**all skills**",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "sci2-u4-plants-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe a plant's needs, name its parts, describe its life cycle, and design a test for one need.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": [
                                        [
                                                  "skill",
                                                  "All plants",
                                                  "Needs + parts + cycle + test."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All plants",
                                                  "Needs + parts + cycle + test."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Describes all four.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Needs: sun/water/soil. Parts: roots/stem/leaves. Cycle: seed->adult. Test: no water.'**"
          ]
},
        },
        {
          id: "sci2-u4-plants-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Plants reproduce through...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "leaves"
                    },
                    {
                              "id": "b",
                              "text": "flowers and seeds"
                    },
                    {
                              "id": "c",
                              "text": "roots"
                    },
                    {
                              "id": "d",
                              "text": "stems"
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
          "finalAnswer": "**flowers + seeds**",
          "commonErrors": [
                    "Picks wrong part."
          ]
},
        },
        {
          id: "sci2-u4-plants-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Plant\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What it requires."
                    },
                    {
                              "id": "b",
                              "text": "Living thing."
                    },
                    {
                              "id": "c",
                              "text": "Piece of plant."
                    },
                    {
                              "id": "d",
                              "text": "Stages of growth."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Plant\" means Living thing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Plant\" means Living thing.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Plant** = Living thing.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u4-plants-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Need\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Piece of plant."
                    },
                    {
                              "id": "b",
                              "text": "Stages of growth."
                    },
                    {
                              "id": "c",
                              "text": "Starts new plant."
                    },
                    {
                              "id": "d",
                              "text": "What it requires."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Need\" means What it requires."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Need\" means What it requires.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Need** = What it requires.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u4-plants-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Part\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Stages of growth."
                    },
                    {
                              "id": "b",
                              "text": "Piece of plant."
                    },
                    {
                              "id": "c",
                              "text": "Starts new plant."
                    },
                    {
                              "id": "d",
                              "text": "Experiment."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Part\" means Piece of plant."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Part\" means Piece of plant.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Part** = Piece of plant.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u4-plants-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Life cycle\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Starts new plant."
                    },
                    {
                              "id": "b",
                              "text": "Experiment."
                    },
                    {
                              "id": "c",
                              "text": "What you change."
                    },
                    {
                              "id": "d",
                              "text": "Stages of growth."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Life cycle\" means Stages of growth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Life cycle\" means Stages of growth.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Life cycle** = Stages of growth.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u4-plants-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Seed\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Experiment."
                    },
                    {
                              "id": "b",
                              "text": "Starts new plant."
                    },
                    {
                              "id": "c",
                              "text": "What you change."
                    },
                    {
                              "id": "d",
                              "text": "Get bigger."
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
      ],
    },
  ],
};
