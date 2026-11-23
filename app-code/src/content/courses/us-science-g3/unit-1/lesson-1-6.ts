import type { Lesson } from "../../../types.ts";

export const lesson16: Lesson = {
  id: "sci3-u1-lesson-1-6",
  code: "1-6",
  title: "Plants Review",
  goal: "I CAN describe plant needs, parts, growth and types.",
  standards: ["LS1.A", "LS1.B"],
  vocabulary: [
    { term: "Need", definition: "Something required." },
    { term: "Sunlight", definition: "Light for food." },
    { term: "Water", definition: "Liquid for plants." },
    { term: "Root", definition: "Under ground part." },
    { term: "Leaf", definition: "Makes food." },
    { term: "Seed", definition: "Starts new plant." },
    { term: "Photosynthesis", definition: "Making food." },
    { term: "Cycle", definition: "Repeating process." },
  ],
  concepts: [
    {
      id: "sci3-u1-plants-review",
      title: "Plants review",
      skill: "Combine plant needs, parts, growth and types.",
      lesson: {
        sections: [
          {
            heading: "All plant knowledge",
            body: "Plants need **sunlight, water, air and soil**. They have **roots, stems, leaves, flowers**. They **grow** from seeds through a **cycle**, and come in many **types**.",
          },
          {
            heading: "Put it together",
            body: "Describe a plant's needs, parts, growth and type.",
          },
        ],
        keyFormulas: [
          { name: "Plants", statement: "Needs + parts + growth + types = complete plant knowledge." },
        ],
        workedExample: {
          problem: "Describe a plant: what it needs, its parts, how it grows, what type it is.",
          solution: "Needs: sunlight/water/air/soil. Parts: roots/stem/leaves/flower. Grows: seed->mature. Type: flowering plant.",
        },
      },
      questions: [
        {
          id: "sci3-u1-plants-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Plant knowledge includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only needs"
                    },
                    {
                              "id": "b",
                              "text": "needs, parts, growth, types"
                    },
                    {
                              "id": "c",
                              "text": "only types"
                    },
                    {
                              "id": "d",
                              "text": "only growth"
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
          "finalAnswer": "needs, parts, growth, types",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "sci3-u1-plants-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe a plant: name two needs, two parts, the growth stages, and one type.",
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
                                                  "All plant",
                                                  "Needs + parts + growth + type."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All plant",
                                                  "Needs + parts + growth + type."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Names all parts.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Needs: sunlight/water. Parts: roots/leaves. Growth: seed->mature. Type: tree.'**"
          ]
},
        },
        {
          id: "sci3-u1-plants-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Plants are important because they...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only look pretty"
                    },
                    {
                              "id": "b",
                              "text": "make food and oxygen"
                    },
                    {
                              "id": "c",
                              "text": "make noise"
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
                              "statement": "Plants make food and oxygen."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Plants make food and oxygen.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "make food and oxygen",
          "commonErrors": [
                    "Thinks plants are useless."
          ]
},
        },
        {
          id: "sci3-u1-plants-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Need\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Light for food."
                    },
                    {
                              "id": "b",
                              "text": "Something required."
                    },
                    {
                              "id": "c",
                              "text": "Liquid for plants."
                    },
                    {
                              "id": "d",
                              "text": "Under ground part."
                    }
          ],
          "correctChoiceId": "b"
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
          id: "sci3-u1-plants-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sunlight\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Liquid for plants."
                    },
                    {
                              "id": "b",
                              "text": "Under ground part."
                    },
                    {
                              "id": "c",
                              "text": "Makes food."
                    },
                    {
                              "id": "d",
                              "text": "Light for food."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sunlight\" means Light for food."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sunlight\" means Light for food.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sunlight** = Light for food.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u1-plants-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Water\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Under ground part."
                    },
                    {
                              "id": "b",
                              "text": "Liquid for plants."
                    },
                    {
                              "id": "c",
                              "text": "Makes food."
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
                              "statement": "\"Water\" means Liquid for plants."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Water\" means Liquid for plants.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Water** = Liquid for plants.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u1-plants-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Root\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Makes food."
                    },
                    {
                              "id": "b",
                              "text": "Starts new plant."
                    },
                    {
                              "id": "c",
                              "text": "Making food."
                    },
                    {
                              "id": "d",
                              "text": "Under ground part."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Root\" means Under ground part."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Root\" means Under ground part.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Root** = Under ground part.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u1-plants-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Leaf\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Starts new plant."
                    },
                    {
                              "id": "b",
                              "text": "Makes food."
                    },
                    {
                              "id": "c",
                              "text": "Making food."
                    },
                    {
                              "id": "d",
                              "text": "Repeating process."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Leaf\" means Makes food."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Leaf\" means Makes food.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Leaf** = Makes food.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
