import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "mpk-u8-lesson-8-3",
  code: "8-3",
  title: "Review: Measure and Shapes",
  goal: "I CAN compare, measure and name shapes.",
  standards: ["ELOF-PK.MATH.REVIEW.3"],
  vocabulary: [
    { term: "Measure", definition: "Find out how long, heavy or much." },
    { term: "Shape", definition: "A flat or solid form." },
    { term: "Compare", definition: "See how things are alike or different." },
    { term: "Attribute", definition: "A feature like length or color." },
    { term: "Describe", definition: "Say what something is like." },
  ],
  concepts: [
    {
      id: "mpk-u8-review-measure-shapes",
      title: "Measure and shapes review",
      skill: "Apply measurement and geometry concepts.",
      lesson: {
        sections: [
          {
            heading: "Measure",
            body: "Compare **length** (line up ends), **weight** (lift or balance), and **amount** (count). Use the right tool or strategy for each.",
          },
          {
            heading: "Shapes",
            body: "Name 2D shapes (circle, square, triangle, rectangle) and 3D solids (sphere, cube, cylinder, cone). Describe features: sides, corners, faces.",
          },
        ],
        keyFormulas: [
          { name: "Measure", statement: "Length: line up ends. Weight: lift/balance. Amount: count." },
          { name: "Shapes", statement: "2D: sides/corners. 3D: faces/edges." },
        ],
        workedExample: {
          problem: "A shape has 3 sides and 3 corners. Name it and say if it is 2D or 3D.",
          solution: "**Triangle** — it is 2D (flat).",
        },
      },
      questions: [
        {
          id: "mpk-u8-review-measure-shapes-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "To compare which stick is longer, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "guess"
                    },
                    {
                              "id": "b",
                              "text": "line up one end and see which sticks out"
                    },
                    {
                              "id": "c",
                              "text": "weigh them"
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
                              "statement": "Lining up ends is the fair way to compare length."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lining up ends is the fair way to compare length.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Line up ends**",
          "commonErrors": [
                    "Compares without lining up."
          ]
},
        },
        {
          id: "mpk-u8-review-measure-shapes-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A soup can is a...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "sphere"
                    },
                    {
                              "id": "b",
                              "text": "cube"
                    },
                    {
                              "id": "c",
                              "text": "cylinder"
                    },
                    {
                              "id": "d",
                              "text": "cone"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Can = cylinder."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Can = cylinder.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Cylinder**",
          "commonErrors": [
                    "Thinks cans are spheres."
          ]
},
        },
        {
          id: "mpk-u8-review-measure-shapes-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "A ribbon is 7 cubes long. A string is 4 cubes long. How many cubes longer is the ribbon?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Longer by",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "7 - 4 = 3."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "7 - 4 = 3.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$3$",
          "commonErrors": [
                    "Adds 7 + 4."
          ]
},
        },
        {
          id: "mpk-u8-review-measure-shapes-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which shape has 4 equal sides and 4 corners?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "triangle"
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
                              "text": "rectangle"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "4 equal sides + 4 corners = square."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "4 equal sides + 4 corners = square.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Square**",
          "commonErrors": [
                    "Says rectangle because it has 4 sides."
          ]
},
        },
        {
          id: "mpk-u8-review-measure-shapes-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Name two ways to compare objects (length and weight) and describe how to do each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Length: line up ends. Weight: lift or balance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        {
                                                  "reasoning": "Describes length comparison.",
                                                  "marks": 1,
                                                  "markCode": "M"
                                        },
                                        {
                                                  "reasoning": "Describes weight comparison.",
                                                  "marks": 1,
                                                  "markCode": "A"
                                        }
                              ],
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "**Length: line up ends; Weight: lift or balance scale.**",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": [
                    "Only describes one way.",
                    "Wrong methods."
          ]
},
        },
        {
          id: "mpk-u8-review-measure-shapes-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Measure\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A flat or solid form."
                    },
                    {
                              "id": "b",
                              "text": "Find out how long, heavy or much."
                    },
                    {
                              "id": "c",
                              "text": "See how things are alike or different."
                    },
                    {
                              "id": "d",
                              "text": "A feature like length or color."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Measure\" means Find out how long, heavy or much."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Measure\" means Find out how long, heavy or much.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Measure** = Find out how long, heavy or much.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u8-review-measure-shapes-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Shape\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "See how things are alike or different."
                    },
                    {
                              "id": "b",
                              "text": "A feature like length or color."
                    },
                    {
                              "id": "c",
                              "text": "Say what something is like."
                    },
                    {
                              "id": "d",
                              "text": "A flat or solid form."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Shape\" means A flat or solid form."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Shape\" means A flat or solid form.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Shape** = A flat or solid form.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u8-review-measure-shapes-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Compare\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A feature like length or color."
                    },
                    {
                              "id": "b",
                              "text": "See how things are alike or different."
                    },
                    {
                              "id": "c",
                              "text": "Say what something is like."
                    },
                    {
                              "id": "d",
                              "text": "Find out how long, heavy or much."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Compare\" means See how things are alike or different."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Compare\" means See how things are alike or different.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Compare** = See how things are alike or different.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
