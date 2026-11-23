import type { Lesson } from "../../../types.ts";

export const lesson85: Lesson = {
  id: "m0-u8-lesson-8-5",
  code: "8-5",
  title: "Review: Everything",
  goal: "I CAN use all kindergarten math skills together.",
  standards: ["K.CC.A.1", "K.OA.A.1", "K.NBT.A.1", "K.MD.B.3", "K.G.A.2"],
  vocabulary: [
    { term: "Count", definition: "Say numbers in order." },
    { term: "Add", definition: "Join to find total." },
    { term: "Subtract", definition: "Take away to find left." },
    { term: "Teen", definition: "10 + ones." },
    { term: "Compare", definition: "More/fewer/same." },
    { term: "Shape", definition: "2D and 3D." },
    { term: "Data", definition: "Counted categories." },
    { term: "Measure", definition: "Length and weight." },
  ],
  concepts: [
    {
      id: "m0-u8-review-everything",
      title: "Everything review",
      skill: "Combine all kindergarten math: counting, comparing, add/sub, teens, measurement, data, geometry.",
      lesson: {
        sections: [
          {
            heading: "All of kindergarten math",
            body: "Kindergarten math covers: **counting** to 100, **comparing** groups/numbers, **adding and subtracting** within 20, **teen numbers** (10 + ones), **measurement** (length/weight), **data** (counting categories), and **geometry** (2D/3D shapes).",
          },
          {
            heading: "You are a mathematician!",
            body: "You can count, compare, add, subtract, decompose teen numbers, measure, collect data and identify shapes. These are the foundations of all math!",
          },
        ],
        keyFormulas: [
          { name: "Kindergarten math", statement: "Count + compare + add/sub + teens + measure + data + geometry = number sense and spatial reasoning." },
        ],
        workedExample: {
          problem: "Solve: count 8 objects, add 5, subtract 3, identify a shape.",
          solution: "8 + 5 = 13, 13 - 3 = 10; shape could be triangle (3 sides).",
        },
      },
      questions: [
        {
          id: "m0-u8-review-everything-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 9 + 6 - 4?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 11
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "9 + 6 = 15, 15 - 4 = 11."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "9 + 6 = 15, 15 - 4 = 11.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$11$",
          "commonErrors": [
                    "Does operations in wrong order."
          ]
},
        },
        {
          id: "m0-u8-review-everything-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a 3D shape?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "circle"
                    },
                    {
                              "id": "b",
                              "text": "sphere"
                    },
                    {
                              "id": "c",
                              "text": "triangle"
                    },
                    {
                              "id": "d",
                              "text": "square"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Sphere is 3D."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sphere is 3D.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**sphere**",
          "commonErrors": [
                    "Picks 2D."
          ]
},
        },
        {
          id: "m0-u8-review-everything-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Show all your skills: count objects, compare two groups, add or subtract, and name a shape.",
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
                                                  "All math",
                                                  "Count + compare + add/sub + shape."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All math",
                                                  "Count + compare + add/sub + shape."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Demonstrates all skills.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Counted 7, 7>5, 7+3=10, triangle'**"
          ]
},
        },
        {
          id: "m0-u8-review-everything-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "You are ready for Grade 1 because you can...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "do algebra"
                    },
                    {
                              "id": "b",
                              "text": "count, compare, add, subtract, measure, classify, identify shapes"
                    },
                    {
                              "id": "c",
                              "text": "read novels"
                    },
                    {
                              "id": "d",
                              "text": "write essays"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Kindergarten math skills prepare you for Grade 1."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Kindergarten math skills prepare you for Grade 1.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**K math skills**",
          "commonErrors": [
                    "Thinks you need advanced skills."
          ]
},
        },
        {
          id: "m0-u8-review-everything-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Count\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Join to find total."
                    },
                    {
                              "id": "b",
                              "text": "Say numbers in order."
                    },
                    {
                              "id": "c",
                              "text": "Take away to find left."
                    },
                    {
                              "id": "d",
                              "text": "10 + ones."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Count\" means Say numbers in order."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Count\" means Say numbers in order.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Count** = Say numbers in order.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u8-review-everything-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Add\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Take away to find left."
                    },
                    {
                              "id": "b",
                              "text": "10 + ones."
                    },
                    {
                              "id": "c",
                              "text": "More/fewer/same."
                    },
                    {
                              "id": "d",
                              "text": "Join to find total."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Add\" means Join to find total."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Add\" means Join to find total.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Add** = Join to find total.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u8-review-everything-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Subtract\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "10 + ones."
                    },
                    {
                              "id": "b",
                              "text": "Take away to find left."
                    },
                    {
                              "id": "c",
                              "text": "More/fewer/same."
                    },
                    {
                              "id": "d",
                              "text": "2D and 3D."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Subtract\" means Take away to find left."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Subtract\" means Take away to find left.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Subtract** = Take away to find left.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u8-review-everything-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Teen\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "More/fewer/same."
                    },
                    {
                              "id": "b",
                              "text": "2D and 3D."
                    },
                    {
                              "id": "c",
                              "text": "Counted categories."
                    },
                    {
                              "id": "d",
                              "text": "10 + ones."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Teen\" means 10 + ones."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Teen\" means 10 + ones.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Teen** = 10 + ones.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
