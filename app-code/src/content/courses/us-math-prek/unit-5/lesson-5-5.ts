import type { Lesson } from "../../../types.ts";

export const lesson55: Lesson = {
  id: "mpk-u5-lesson-5-5",
  code: "5-5",
  title: "Build Shapes From Parts",
  goal: "I CAN combine shapes to make new shapes.",
  standards: ["ELOF-PK.MATH.GEO.5"],
  vocabulary: [
    { term: "Compose", definition: "Put parts together to make a whole." },
    { term: "Combine", definition: "Join two or more shapes." },
    { term: "Part", definition: "A piece of a bigger shape." },
    { term: "Whole", definition: "The complete shape made from parts." },
    { term: "Build", definition: "Put shapes together to create something." },
  ],
  concepts: [
    {
      id: "mpk-u5-compose-shapes",
      title: "Composing shapes",
      skill: "Combine simple shapes to make new shapes.",
      lesson: {
        sections: [
          {
            heading: "Two triangles make a square",
            body: "Two right triangles can be put together to make a **square** or a **rectangle**. Shapes can be built from smaller parts.",
          },
          {
            heading: "Build and describe",
            body: "Use pattern blocks or paper shapes to combine into bigger shapes. Describe what you made: 'I put two triangles together to make a square.'",
          },
        ],
        keyFormulas: [
          { name: "Compose", statement: "Combine parts to make a whole shape." },
        ],
        workedExample: {
          problem: "Two identical right triangles are joined along their long side. What shape do they make?",
          solution: "Two right triangles joined along the long side make a **rectangle** (or square if sides match).",
        },
      },
      questions: [
        {
          id: "mpk-u5-compose-shapes-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Two identical right triangles joined along their long side make a...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "circle"
                    },
                    {
                              "id": "b",
                              "text": "rectangle"
                    },
                    {
                              "id": "c",
                              "text": "triangle"
                    },
                    {
                              "id": "d",
                              "text": "oval"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Two right triangles = rectangle or square."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Two right triangles = rectangle or square.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Rectangle**",
          "commonErrors": [
                    "Thinks triangles cannot combine."
          ]
},
        },
        {
          id: "mpk-u5-compose-shapes-q2",
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
                              "text": "put parts together"
                    },
                    {
                              "id": "c",
                              "text": "color only"
                    },
                    {
                              "id": "d",
                              "text": "measure only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Compose = combine parts into a whole."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compose = combine parts into a whole.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Put parts together**",
          "commonErrors": [
                    "Confuses compose with decompose."
          ]
},
        },
        {
          id: "mpk-u5-compose-shapes-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many triangles are needed to make a square (along the diagonal)?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Triangles",
                              "answer": 2
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "2 triangles joined along the diagonal make a square."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "2 triangles joined along the diagonal make a square.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$2$",
          "commonErrors": [
                    "Says 1 or 4."
          ]
},
        },
        {
          id: "mpk-u5-compose-shapes-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "You put 3 squares together in a row. What did you make?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a triangle"
                    },
                    {
                              "id": "b",
                              "text": "a bigger rectangle"
                    },
                    {
                              "id": "c",
                              "text": "a circle"
                    },
                    {
                              "id": "d",
                              "text": "a single square"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "3 squares in a row = a rectangle."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "3 squares in a row = a rectangle.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**A bigger rectangle**",
          "commonErrors": [
                    "Thinks they stay separate."
          ]
},
        },
        {
          id: "mpk-u5-compose-shapes-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Use two shapes to compose a new shape. Name the parts and the whole.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Combine parts",
                              "statement": "Join two shapes along a matching edge."
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        {
                                                  "reasoning": "Combines 2 shapes into a new shape.",
                                                  "marks": 1,
                                                  "markCode": "M"
                                        },
                                        {
                                                  "reasoning": "Names parts and whole correctly.",
                                                  "marks": 1,
                                                  "markCode": "A"
                                        }
                              ],
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "**e.g., two triangles -> rectangle**",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": [
                    "Only names shapes without combining.",
                    "Wrong combination."
          ]
},
        },
        {
          id: "mpk-u5-compose-shapes-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Compose\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Join two or more shapes."
                    },
                    {
                              "id": "b",
                              "text": "Put parts together to make a whole."
                    },
                    {
                              "id": "c",
                              "text": "A piece of a bigger shape."
                    },
                    {
                              "id": "d",
                              "text": "The complete shape made from parts."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Compose\" means Put parts together to make a whole."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Compose\" means Put parts together to make a whole.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Compose** = Put parts together to make a whole.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u5-compose-shapes-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Combine\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A piece of a bigger shape."
                    },
                    {
                              "id": "b",
                              "text": "The complete shape made from parts."
                    },
                    {
                              "id": "c",
                              "text": "Put shapes together to create something."
                    },
                    {
                              "id": "d",
                              "text": "Join two or more shapes."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Combine\" means Join two or more shapes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Combine\" means Join two or more shapes.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Combine** = Join two or more shapes.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u5-compose-shapes-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Part\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The complete shape made from parts."
                    },
                    {
                              "id": "b",
                              "text": "A piece of a bigger shape."
                    },
                    {
                              "id": "c",
                              "text": "Put shapes together to create something."
                    },
                    {
                              "id": "d",
                              "text": "Put parts together to make a whole."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Part\" means A piece of a bigger shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Part\" means A piece of a bigger shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Part** = A piece of a bigger shape.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
