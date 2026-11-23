import type { Lesson } from "../../../types.ts";

export const lesson64: Lesson = {
  id: "m5-u6-lesson-6-4",
  code: "6-4",
  title: "Shape Properties",
  goal: "I CAN identify properties of 2D shapes.",
  standards: ["5.G.B.3", "5.G.B.4"],
  vocabulary: [
    { term: "Quadrilateral", definition: "4-sided shape." },
    { term: "Parallelogram", definition: "Opposite sides parallel." },
    { term: "Rectangle", definition: "4 right angles." },
    { term: "Rhombus", definition: "4 equal sides." },
    { term: "Square", definition: "Both rectangle + rhombus." },
    { term: "Trapezoid", definition: "One pair parallel." },
    { term: "Kite", definition: "Two pairs adjacent equal." },
    { term: "Property", definition: "Characteristic." },
  ],
  concepts: [
    {
      id: "m5-u6-shape-properties",
      title: "Shape Properties",
      skill: "Identify and classify 2D shapes by their properties.",
      lesson: {
        sections: [
          {
            heading: "Hierarchy",
            body: "Square -> rectangle/rhombus -> parallelogram.",
          },
          {
            heading: "Properties",
            body: "Sides, angles, symmetry.",
          },
        ],
        keyFormulas: [
          { name: "Shapes", statement: "Classify by properties" },
        ],
        workedExample: {
          problem: "Is a rhombus always a square? Is a square always a rhombus?",
          solution: "No, rhombus needs only equal sides (may not have right angles). Yes, square is always a rhombus (has equal sides) AND a rectangle (has right angles).",
        },
      },
      questions: [
        {
          id: "m5-u6-shape-properties-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A rhombus has...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4 right angles"
                    },
                    {
                              "id": "b",
                              "text": "4 equal sides"
                    },
                    {
                              "id": "c",
                              "text": "one pair parallel"
                    },
                    {
                              "id": "d",
                              "text": "no equal sides"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Rhombus = equal sides."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rhombus = equal sides.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "4 equal sides",
          "commonErrors": [
                    "Confuses with rectangle."
          ]
},
        },
        {
          id: "m5-u6-shape-properties-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A square is both a...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "triangle and rectangle"
                    },
                    {
                              "id": "b",
                              "text": "rectangle and rhombus"
                    },
                    {
                              "id": "c",
                              "text": "trapezoid and kite"
                    },
                    {
                              "id": "d",
                              "text": "parallelogram only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Square = rectangle + rhombus."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Square = rectangle + rhombus.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "rectangle and rhombus",
          "commonErrors": [
                    "Wrong classification."
          ]
},
        },
        {
          id: "m5-u6-shape-properties-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Classify these shapes: parallelogram, rectangle, rhombus, square, trapezoid, kite. Give one property for each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Shapes",
                              "statement": "Six classifications."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Classifies all six.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Parallelogram: parallel sides; Rectangle: 4 right angles; Rhombus: 4 equal sides; Square: both; Trapezoid: one pair parallel; Kite: adjacent equal sides.**",
          "commonErrors": [
                    "Wrong classifications.",
                    "Missing properties."
          ]
},
        },
        {
          id: "m5-u6-shape-properties-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Every rectangle is a...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "square"
                    },
                    {
                              "id": "b",
                              "text": "parallelogram"
                    },
                    {
                              "id": "c",
                              "text": "rhombus"
                    },
                    {
                              "id": "d",
                              "text": "trapezoid"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Rectangles have parallel sides."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rectangles have parallel sides.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "parallelogram",
          "commonErrors": [
                    "Wrong hierarchy."
          ]
},
        },
        {
          id: "m5-u6-shape-properties-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Draw or describe a shape that is a rhombus but not a square. Explain the difference.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Shapes",
                              "statement": "Rhombus not square."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes shape.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains difference.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**A rhombus has 4 equal sides but angles may not be 90°. A square is a rhombus with right angles.**",
          "commonErrors": [
                    "Cannot describe.",
                    "No difference."
          ]
},
        },
        {
          id: "m5-u6-shape-properties-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Quadrilateral\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Opposite sides parallel."
                    },
                    {
                              "id": "b",
                              "text": "4-sided shape."
                    },
                    {
                              "id": "c",
                              "text": "4 right angles."
                    },
                    {
                              "id": "d",
                              "text": "4 equal sides."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Quadrilateral\" means 4-sided shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Quadrilateral\" means 4-sided shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Quadrilateral** = 4-sided shape.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u6-shape-properties-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Parallelogram\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4 right angles."
                    },
                    {
                              "id": "b",
                              "text": "4 equal sides."
                    },
                    {
                              "id": "c",
                              "text": "Both rectangle + rhombus."
                    },
                    {
                              "id": "d",
                              "text": "Opposite sides parallel."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Parallelogram\" means Opposite sides parallel."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Parallelogram\" means Opposite sides parallel.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Parallelogram** = Opposite sides parallel.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u6-shape-properties-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Rectangle\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4 equal sides."
                    },
                    {
                              "id": "b",
                              "text": "4 right angles."
                    },
                    {
                              "id": "c",
                              "text": "Both rectangle + rhombus."
                    },
                    {
                              "id": "d",
                              "text": "One pair parallel."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Rectangle\" means 4 right angles."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Rectangle\" means 4 right angles.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Rectangle** = 4 right angles.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
