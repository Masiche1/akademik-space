import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "m0-u7-lesson-7-1",
  code: "7-1",
  title: "2D Shapes",
  goal: "I CAN name and describe flat shapes like circle, square, triangle and rectangle.",
  standards: ["K.G.A.1", "K.G.A.2"],
  vocabulary: [
    { term: "2D shape", definition: "A flat shape like a circle or square." },
    { term: "Circle", definition: "A round shape with no corners." },
    { term: "Square", definition: "A shape with 4 equal sides and 4 corners." },
    { term: "Triangle", definition: "A shape with 3 sides and 3 corners." },
    { term: "Rectangle", definition: "A shape with 4 sides, opposite sides equal." },
    { term: "Corner", definition: "Where two sides meet." },
    { term: "Side", definition: "An edge of a shape." },
  ],
  concepts: [
    {
      id: "m0-u7-2d-shapes",
      title: "2D shapes",
      skill: "Name and describe basic 2D shapes by their sides and corners.",
      lesson: {
        sections: [
          {
            heading: "Flat shapes",
            body: "**2D shapes** are flat: **circle** (round, no corners), **square** (4 equal sides, 4 corners), **triangle** (3 sides, 3 corners), **rectangle** (4 sides, opposite equal).",
          },
          {
            heading: "Sides and corners",
            body: "Shapes are defined by **sides** (edges) and **corners** (vertices). A triangle has 3 of each; a square has 4 of each.",
          },
        ],
        keyFormulas: [
          { name: "2D shapes", statement: "Circle=0 corners, Triangle=3 sides/corners, Square=4 equal, Rectangle=4 sides." },
        ],
        workedExample: {
          problem: "How many sides does a triangle have?",
          solution: "A triangle has **3 sides** and 3 corners.",
        },
      },
      questions: [
        {
          id: "m0-u7-2d-shapes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which shape has 3 sides and 3 corners?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "square"
                    },
                    {
                              "id": "b",
                              "text": "triangle"
                    },
                    {
                              "id": "c",
                              "text": "circle"
                    },
                    {
                              "id": "d",
                              "text": "rectangle"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Triangle = 3 sides, 3 corners."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Triangle = 3 sides, 3 corners.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**triangle**",
          "commonErrors": [
                    "Picks wrong shape."
          ]
},
        },
        {
          id: "m0-u7-2d-shapes-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A circle has...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4 corners"
                    },
                    {
                              "id": "b",
                              "text": "no corners and is round"
                    },
                    {
                              "id": "c",
                              "text": "3 sides"
                    },
                    {
                              "id": "d",
                              "text": "straight sides"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Circle = round, no corners."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Circle = round, no corners.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**no corners, round**",
          "commonErrors": [
                    "Thinks circle has corners."
          ]
},
        },
        {
          id: "m0-u7-2d-shapes-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Name three 2D shapes and tell how many sides each has.",
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
                                                  "2D shapes",
                                                  "Circle=0, triangle=3, square=4, rectangle=4."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "2D shapes",
                                                  "Circle=0, triangle=3, square=4, rectangle=4."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Names 3 shapes + sides.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Triangle=3, square=4, circle=0 sides.'**"
          ]
},
        },
        {
          id: "m0-u7-2d-shapes-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many sides does a square have?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "3"
                    },
                    {
                              "id": "b",
                              "text": "4"
                    },
                    {
                              "id": "c",
                              "text": "5"
                    },
                    {
                              "id": "d",
                              "text": "0"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Square = 4 sides."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Square = 4 sides.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**4**",
          "commonErrors": [
                    "Picks wrong count."
          ]
},
        },
        {
          id: "m0-u7-2d-shapes-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Draw a triangle and a rectangle. Label the sides and corners of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "2D shapes",
                              "statement": "Draw + label sides/corners."
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        {
                                                  "reasoning": "Draws both shapes.",
                                                  "marks": 1,
                                                  "markCode": "M"
                                        },
                                        {
                                                  "reasoning": "Labels sides and corners.",
                                                  "marks": 1,
                                                  "markCode": "A"
                                        }
                              ],
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "**Triangle: 3 sides, 3 corners; Rectangle: 4 sides, 4 corners.**",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": [
                    "Cannot draw.",
                    "Wrong labels."
          ]
},
        },
        {
          id: "m0-u7-2d-shapes-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"2D shape\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A round shape with no corners."
                    },
                    {
                              "id": "b",
                              "text": "A flat shape like a circle or square."
                    },
                    {
                              "id": "c",
                              "text": "A shape with 4 equal sides and 4 corners."
                    },
                    {
                              "id": "d",
                              "text": "A shape with 3 sides and 3 corners."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"2D shape\" means A flat shape like a circle or square."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"2D shape\" means A flat shape like a circle or square.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**2D shape** = A flat shape like a circle or square.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u7-2d-shapes-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Circle\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A shape with 4 equal sides and 4 corners."
                    },
                    {
                              "id": "b",
                              "text": "A shape with 3 sides and 3 corners."
                    },
                    {
                              "id": "c",
                              "text": "A shape with 4 sides, opposite sides equal."
                    },
                    {
                              "id": "d",
                              "text": "A round shape with no corners."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Circle\" means A round shape with no corners."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Circle\" means A round shape with no corners.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Circle** = A round shape with no corners.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u7-2d-shapes-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Square\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A shape with 3 sides and 3 corners."
                    },
                    {
                              "id": "b",
                              "text": "A shape with 4 equal sides and 4 corners."
                    },
                    {
                              "id": "c",
                              "text": "A shape with 4 sides, opposite sides equal."
                    },
                    {
                              "id": "d",
                              "text": "Where two sides meet."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Square\" means A shape with 4 equal sides and 4 corners."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Square\" means A shape with 4 equal sides and 4 corners.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Square** = A shape with 4 equal sides and 4 corners.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
