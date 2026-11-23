import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "mpk-u5-lesson-5-1",
  code: "5-1",
  title: "Circles, Squares and Rectangles",
  goal: "I CAN name circles, squares and rectangles and say what makes them special.",
  standards: ["ELOF-PK.MATH.GEO.1"],
  vocabulary: [
    { term: "Circle", definition: "A round shape with no corners or sides." },
    { term: "Square", definition: "A shape with 4 equal sides and 4 corners." },
    { term: "Rectangle", definition: "A shape with 4 sides; opposite sides match." },
    { term: "Corner", definition: "The point where two sides meet." },
    { term: "Side", definition: "One straight edge of a shape." },
  ],
  concepts: [
    {
      id: "mpk-u5-shapes-circle-square",
      title: "Basic 2D shapes",
      skill: "Identify circles, squares and rectangles by their features.",
      lesson: {
        sections: [
          {
            heading: "Circle",
            body: "A **circle** is perfectly round — no corners, no straight sides. Think of a coin or a wheel.",
          },
          {
            heading: "Square and rectangle",
            body: "A **square** has 4 equal sides and 4 corners. A **rectangle** has 4 sides where opposite sides match — like a door.",
          },
        ],
        keyFormulas: [
          { name: "Circle", statement: "Round, no corners" },
          { name: "Square", statement: "4 equal sides, 4 corners" },
          { name: "Rectangle", statement: "4 sides, opposite sides equal" },
        ],
        workedExample: {
          problem: "A shape has 4 equal sides and 4 corners. What is it?",
          solution: "4 equal sides + 4 corners = **square**.",
        },
      },
      questions: [
        {
          id: "mpk-u5-shapes-circle-square-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which shape is perfectly round with no corners?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Square"
                    },
                    {
                              "id": "b",
                              "text": "Circle"
                    },
                    {
                              "id": "c",
                              "text": "Rectangle"
                    },
                    {
                              "id": "d",
                              "text": "Triangle"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "A circle has no corners or straight sides."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A circle has no corners or straight sides.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Circle**",
          "commonErrors": [
                    "Picks a shape with corners."
          ]
},
        },
        {
          id: "mpk-u5-shapes-circle-square-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A shape has 4 equal sides and 4 corners. It is a...",
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
                              "text": "square"
                    },
                    {
                              "id": "d",
                              "text": "triangle"
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
          id: "mpk-u5-shapes-circle-square-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "A door shape — 4 sides, opposite sides equal but not all equal — is a...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "square"
                    },
                    {
                              "id": "b",
                              "text": "rectangle"
                    },
                    {
                              "id": "c",
                              "text": "circle"
                    },
                    {
                              "id": "d",
                              "text": "triangle"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Opposite sides equal but sides differ = rectangle."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Opposite sides equal but sides differ = rectangle.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Rectangle**",
          "commonErrors": [
                    "Calls every 4-sided shape a square."
          ]
},
        },
        {
          id: "mpk-u5-shapes-circle-square-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many corners does a square have?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Corners",
                              "answer": 4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "A square has 4 corners."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A square has 4 corners.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$4$",
          "commonErrors": [
                    "Says 3 or 5."
          ]
},
        },
        {
          id: "mpk-u5-shapes-circle-square-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Draw or describe a shape that has 4 sides but is NOT a square. What is it called?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Compare side lengths",
                              "statement": "A rectangle has 4 sides but opposite sides only."
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        {
                                                  "reasoning": "A rectangle: 4 sides, opposite sides equal.",
                                                  "marks": 1,
                                                  "markCode": "M"
                                        },
                                        {
                                                  "reasoning": "It is not a square because sides are not all equal.",
                                                  "marks": 1,
                                                  "markCode": "A"
                                        }
                              ],
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "**Rectangle**",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": [
                    "Says triangle.",
                    "Calls it a square anyway."
          ]
},
        },
        {
          id: "mpk-u5-shapes-circle-square-q6",
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
                              "text": "A round shape with no corners or sides."
                    },
                    {
                              "id": "c",
                              "text": "A shape with 4 sides; opposite sides match."
                    },
                    {
                              "id": "d",
                              "text": "The point where two sides meet."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Circle\" means A round shape with no corners or sides."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Circle\" means A round shape with no corners or sides.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Circle** = A round shape with no corners or sides.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u5-shapes-circle-square-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Square\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A shape with 4 sides; opposite sides match."
                    },
                    {
                              "id": "b",
                              "text": "The point where two sides meet."
                    },
                    {
                              "id": "c",
                              "text": "One straight edge of a shape."
                    },
                    {
                              "id": "d",
                              "text": "A shape with 4 equal sides and 4 corners."
                    }
          ],
          "correctChoiceId": "d"
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
        {
          id: "mpk-u5-shapes-circle-square-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Rectangle\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The point where two sides meet."
                    },
                    {
                              "id": "b",
                              "text": "A shape with 4 sides; opposite sides match."
                    },
                    {
                              "id": "c",
                              "text": "One straight edge of a shape."
                    },
                    {
                              "id": "d",
                              "text": "A round shape with no corners or sides."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Rectangle\" means A shape with 4 sides; opposite sides match."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Rectangle\" means A shape with 4 sides; opposite sides match.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Rectangle** = A shape with 4 sides; opposite sides match.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
