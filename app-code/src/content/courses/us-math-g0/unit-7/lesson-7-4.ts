import type { Lesson } from "../../../types.ts";

export const lesson74: Lesson = {
  id: "m0-u7-lesson-7-4",
  code: "7-4",
  title: "Build and Compose Shapes",
  goal: "I CAN build shapes and combine shapes to make new ones.",
  standards: ["K.G.A.1", "K.G.A.2", "K.G.B.4"],
  vocabulary: [
    { term: "Compose", definition: "Put shapes together to make a new shape." },
    { term: "Decompose", definition: "Break a shape into smaller shapes." },
    { term: "Combine", definition: "Join shapes together." },
    { term: "Pattern", definition: "Shapes repeated in order." },
    { term: "Model", definition: "Make a shape out of other shapes." },
    { term: "Build", definition: "Create a shape." },
  ],
  concepts: [
    {
      id: "m0-u7-build-shapes",
      title: "Building and composing shapes",
      skill: "Combine simple shapes to create new shapes and patterns.",
      lesson: {
        sections: [
          {
            heading: "Shapes make shapes",
            body: "You can **compose** (put together) simple shapes to make bigger ones: two triangles make a square, four squares make a bigger square.",
          },
          {
            heading: "Patterns and models",
            body: "Use shapes to make **patterns** (triangle, square, triangle, square) or **models** (build a house from squares and triangles).",
          },
        ],
        keyFormulas: [
          { name: "Compose", statement: "Put shapes together; decompose = break apart." },
        ],
        workedExample: {
          problem: "What two shapes can you combine to make a square?",
          solution: "Two **triangles** can combine to make a square (or rectangle).",
        },
      },
      questions: [
        {
          id: "m0-u7-build-shapes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Compose' shapes means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "break them apart"
                    },
                    {
                              "id": "b",
                              "text": "put them together to make new shapes"
                    },
                    {
                              "id": "c",
                              "text": "throw them away"
                    },
                    {
                              "id": "d",
                              "text": "count them"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Compose = put together."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compose = put together.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**put together**",
          "commonErrors": [
                    "Confuses with decompose."
          ]
},
        },
        {
          id: "m0-u7-build-shapes-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Two triangles can combine to make...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a circle"
                    },
                    {
                              "id": "b",
                              "text": "a square or rectangle"
                    },
                    {
                              "id": "c",
                              "text": "a sphere"
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
                              "statement": "Two triangles = square/rectangle."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Two triangles = square/rectangle.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**square/rectangle**",
          "commonErrors": [
                    "Picks wrong result."
          ]
},
        },
        {
          id: "m0-u7-build-shapes-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Build a shape or picture using two or more simple shapes. What did you make?",
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
                                                  "Compose",
                                                  "Combine shapes."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Compose",
                                                  "Combine shapes."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Builds with 2+ shapes.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Built a house: square + triangle roof.'**"
          ]
},
        },
        {
          id: "m0-u7-build-shapes-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'pattern' of shapes means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "random shapes"
                    },
                    {
                              "id": "b",
                              "text": "shapes repeated in order"
                    },
                    {
                              "id": "c",
                              "text": "only circles"
                    },
                    {
                              "id": "d",
                              "text": "no shapes"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Pattern = repeated in order."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pattern = repeated in order.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**repeated in order**",
          "commonErrors": [
                    "Thinks pattern is random."
          ]
},
        },
        {
          id: "m0-u7-build-shapes-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Make a pattern using two shapes (e.g., triangle, square, triangle, square). Then make a simple picture with shapes.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Pattern + model",
                              "statement": "Repeat shapes + build picture."
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        {
                                                  "reasoning": "Makes a pattern.",
                                                  "marks": 1,
                                                  "markCode": "M"
                                        },
                                        {
                                                  "reasoning": "Builds a picture.",
                                                  "marks": 1,
                                                  "markCode": "A"
                                        }
                              ],
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "**e.g., 'Pattern: △□△□; Picture: house from square+triangle.'**",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": [
                    "No pattern.",
                    "Cannot build."
          ]
},
        },
        {
          id: "m0-u7-build-shapes-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Compose\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Break a shape into smaller shapes."
                    },
                    {
                              "id": "b",
                              "text": "Put shapes together to make a new shape."
                    },
                    {
                              "id": "c",
                              "text": "Join shapes together."
                    },
                    {
                              "id": "d",
                              "text": "Shapes repeated in order."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Compose\" means Put shapes together to make a new shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Compose\" means Put shapes together to make a new shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Compose** = Put shapes together to make a new shape.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u7-build-shapes-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Decompose\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Join shapes together."
                    },
                    {
                              "id": "b",
                              "text": "Shapes repeated in order."
                    },
                    {
                              "id": "c",
                              "text": "Make a shape out of other shapes."
                    },
                    {
                              "id": "d",
                              "text": "Break a shape into smaller shapes."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Decompose\" means Break a shape into smaller shapes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Decompose\" means Break a shape into smaller shapes.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Decompose** = Break a shape into smaller shapes.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u7-build-shapes-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Combine\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Shapes repeated in order."
                    },
                    {
                              "id": "b",
                              "text": "Join shapes together."
                    },
                    {
                              "id": "c",
                              "text": "Make a shape out of other shapes."
                    },
                    {
                              "id": "d",
                              "text": "Create a shape."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Combine\" means Join shapes together."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Combine\" means Join shapes together.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Combine** = Join shapes together.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
