import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "m1-u7-lesson-7-3",
  code: "7-3",
  title: "Composing Shapes",
  goal: "I CAN put shapes together to make new shapes.",
  standards: ["1.G.A.2"],
  vocabulary: [
    { term: "Compose", definition: "Put together." },
    { term: "Decompose", definition: "Break apart." },
    { term: "Shape", definition: "2D or 3D form." },
    { term: "Combine", definition: "Join together." },
    { term: "New shape", definition: "Result of combining." },
    { term: "Rectangle", definition: "4-sided shape." },
    { term: "Triangle", definition: "3-sided shape." },
    { term: "Square", definition: "4 equal sides." },
  ],
  concepts: [
    {
      id: "m1-u7-compose-shapes",
      title: "Composing shapes",
      skill: "Put 2D shapes together to make new shapes.",
      lesson: {
        sections: [
          {
            heading: "Combine shapes",
            body: "We can **compose** (put together) shapes to make new shapes. Two triangles can make a **square** or **rectangle**; two rectangles can make a bigger rectangle.",
          },
          {
            heading: "Decompose shapes",
            body: "We can also **decompose** (break apart) shapes — a rectangle can be split into two triangles or two squares.",
          },
        ],
        keyFormulas: [
          { name: "Compose", statement: "Shapes together -> new shape" },
          { name: "Decompose", statement: "Shape apart -> smaller shapes." },
        ],
        workedExample: {
          problem: "Two triangles are put together. What shape can they make?",
          solution: "They can make a **square** or **rectangle** (or a bigger triangle).",
        },
      },
      questions: [
        {
          id: "m1-u7-compose-shapes-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Two triangles put together can make...",
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
                              "statement": "Two triangles -> square/rectangle."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Two triangles -> square/rectangle.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**square/rectangle**",
          "commonErrors": [
                    "Picks impossible shape."
          ]
},
        },
        {
          id: "m1-u7-compose-shapes-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Decompose' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "put together"
                    },
                    {
                              "id": "b",
                              "text": "break apart"
                    },
                    {
                              "id": "c",
                              "text": "measure"
                    },
                    {
                              "id": "d",
                              "text": "color"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Decompose = break apart."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Decompose = break apart.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**break apart**",
          "commonErrors": [
                    "Confuses with compose."
          ]
},
        },
        {
          id: "m1-u7-compose-shapes-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Draw or describe how you could put two squares together to make a new shape.",
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
                                                  "method",
                                                  "Compose",
                                                  "Two squares -> rectangle."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "method",
                                                  "Compose",
                                                  "Two squares -> rectangle."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Describes composition.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**Two squares side by side = rectangle**"
          ]
},
        },
        {
          id: "m1-u7-compose-shapes-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Compose' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "break apart"
                    },
                    {
                              "id": "b",
                              "text": "put together"
                    },
                    {
                              "id": "c",
                              "text": "measure"
                    },
                    {
                              "id": "d",
                              "text": "color"
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
          id: "m1-u7-compose-shapes-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Break a rectangle into two triangles. Describe how.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Decompose",
                              "statement": "Cut rectangle diagonally -> 2 triangles."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes decomposition.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Names resulting shapes.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Cut diagonally -> two triangles**",
          "commonErrors": [
                    "Cannot decompose.",
                    "Wrong shapes."
          ]
},
        },
        {
          id: "m1-u7-compose-shapes-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Compose\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Break apart."
                    },
                    {
                              "id": "b",
                              "text": "Put together."
                    },
                    {
                              "id": "c",
                              "text": "2D or 3D form."
                    },
                    {
                              "id": "d",
                              "text": "Join together."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Compose\" means Put together."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Compose\" means Put together.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Compose** = Put together.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u7-compose-shapes-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Decompose\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "2D or 3D form."
                    },
                    {
                              "id": "b",
                              "text": "Join together."
                    },
                    {
                              "id": "c",
                              "text": "Result of combining."
                    },
                    {
                              "id": "d",
                              "text": "Break apart."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Decompose\" means Break apart."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Decompose\" means Break apart.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Decompose** = Break apart.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u7-compose-shapes-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Shape\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Join together."
                    },
                    {
                              "id": "b",
                              "text": "2D or 3D form."
                    },
                    {
                              "id": "c",
                              "text": "Result of combining."
                    },
                    {
                              "id": "d",
                              "text": "4-sided shape."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Shape\" means 2D or 3D form."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Shape\" means 2D or 3D form.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Shape** = 2D or 3D form.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u7-compose-shapes-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Combine\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Result of combining."
                    },
                    {
                              "id": "b",
                              "text": "4-sided shape."
                    },
                    {
                              "id": "c",
                              "text": "3-sided shape."
                    },
                    {
                              "id": "d",
                              "text": "Join together."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Combine\" means Join together."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Combine\" means Join together.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Combine** = Join together.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
