import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "mpk-u5-lesson-5-2",
  code: "5-2",
  title: "Triangles and More Shapes",
  goal: "I CAN name triangles and other common shapes.",
  standards: ["ELOF-PK.MATH.GEO.2"],
  vocabulary: [
    { term: "Triangle", definition: "A shape with 3 sides and 3 corners." },
    { term: "Oval", definition: "An egg-like round shape, longer than wide." },
    { term: "Star", definition: "A shape with points." },
    { term: "Diamond", definition: "A slanted square shape (rhombus)." },
    { term: "Heart", definition: "A shape like a valentine heart." },
  ],
  concepts: [
    {
      id: "mpk-u5-shapes-triangle",
      title: "Triangles and other shapes",
      skill: "Identify triangles and less common shapes.",
      lesson: {
        sections: [
          {
            heading: "Triangle",
            body: "A **triangle** has exactly **3 sides and 3 corners**. Pointy roof shapes, slices of pizza — all triangles.",
          },
          {
            heading: "Other shapes",
            body: "An **oval** is like a stretched circle. A **star** has points. A **diamond** is a square turned on its corner. A **heart** is a valentine shape.",
          },
        ],
        keyFormulas: [
          { name: "Triangle", statement: "3 sides, 3 corners" },
          { name: "Oval", statement: "Round but stretched" },
        ],
        workedExample: {
          problem: "A shape has 3 sides and 3 corners. What is it?",
          solution: "3 sides + 3 corners = **triangle**.",
        },
      },
      questions: [
        {
          id: "mpk-u5-shapes-triangle-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many sides does a triangle have?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4"
                    },
                    {
                              "id": "b",
                              "text": "3"
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
                              "statement": "A triangle has 3 sides."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A triangle has 3 sides.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**3**",
          "commonErrors": [
                    "Counts corners instead of sides."
          ]
},
        },
        {
          id: "mpk-u5-shapes-triangle-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A slice of pizza is shaped like a...",
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
                              "statement": "Pizza slices are triangles."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pizza slices are triangles.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Triangle**",
          "commonErrors": [
                    "Thinks all food shapes are circles."
          ]
},
        },
        {
          id: "mpk-u5-shapes-triangle-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "An egg shape — round but stretched — is an...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "oval"
                    },
                    {
                              "id": "b",
                              "text": "circle"
                    },
                    {
                              "id": "c",
                              "text": "square"
                    },
                    {
                              "id": "d",
                              "text": "triangle"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Oval = stretched circle."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Oval = stretched circle.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Oval**",
          "commonErrors": [
                    "Calls it a circle because it is round."
          ]
},
        },
        {
          id: "mpk-u5-shapes-triangle-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many corners does a triangle have?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Corners",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Triangle = 3 corners."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Triangle = 3 corners.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$3$",
          "commonErrors": [
                    "Says 4 corners."
          ]
},
        },
        {
          id: "mpk-u5-shapes-triangle-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Name three shapes you can find in a classroom. Describe one feature of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Look for shape features",
                              "statement": "Circle = round, square = 4 equal sides, triangle = 3 sides."
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        {
                                                  "reasoning": "Names 3 real shapes with features.",
                                                  "marks": 1,
                                                  "markCode": "M"
                                        },
                                        {
                                                  "reasoning": "Features match the shape (e.g., 'clock is a circle').",
                                                  "marks": 1,
                                                  "markCode": "A"
                                        }
                              ],
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "**Circle (round), square (4 sides), triangle (3 sides)**",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": [
                    "Names shapes that are not really there.",
                    "Gives wrong features."
          ]
},
        },
        {
          id: "mpk-u5-shapes-triangle-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Triangle\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "An egg-like round shape, longer than wide."
                    },
                    {
                              "id": "b",
                              "text": "A shape with 3 sides and 3 corners."
                    },
                    {
                              "id": "c",
                              "text": "A shape with points."
                    },
                    {
                              "id": "d",
                              "text": "A slanted square shape (rhombus)."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Triangle\" means A shape with 3 sides and 3 corners."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Triangle\" means A shape with 3 sides and 3 corners.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Triangle** = A shape with 3 sides and 3 corners.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u5-shapes-triangle-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Oval\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A shape with points."
                    },
                    {
                              "id": "b",
                              "text": "A slanted square shape (rhombus)."
                    },
                    {
                              "id": "c",
                              "text": "A shape like a valentine heart."
                    },
                    {
                              "id": "d",
                              "text": "An egg-like round shape, longer than wide."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Oval\" means An egg-like round shape, longer than wide."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Oval\" means An egg-like round shape, longer than wide.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Oval** = An egg-like round shape, longer than wide.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u5-shapes-triangle-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Star\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A slanted square shape (rhombus)."
                    },
                    {
                              "id": "b",
                              "text": "A shape with points."
                    },
                    {
                              "id": "c",
                              "text": "A shape like a valentine heart."
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
                              "statement": "\"Star\" means A shape with points."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Star\" means A shape with points.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Star** = A shape with points.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
