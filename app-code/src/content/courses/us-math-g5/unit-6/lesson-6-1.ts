import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "m5-u6-lesson-6-1",
  code: "6-1",
  title: "Classifying 2D Shapes",
  goal: "I CAN classify quadrilaterals by their properties.",
  standards: ["5.G.B.3", "5.G.B.4"],
  vocabulary: [
    { term: "Quadrilateral", definition: "4-sided shape." },
    { term: "Parallelogram", definition: "Opposite sides parallel." },
    { term: "Rectangle", definition: "4 right angles." },
    { term: "Rhombus", definition: "4 equal sides." },
    { term: "Square", definition: "4 equal sides + right angles." },
    { term: "Trapezoid", definition: "One pair parallel." },
    { term: "Kite", definition: "Two pairs adjacent equal." },
    { term: "Property", definition: "Characteristic." },
  ],
  concepts: [
    {
      id: "m5-u6-classify-2d",
      title: "Classifying 2D shapes",
      skill: "Classify quadrilaterals by their properties.",
      lesson: {
        sections: [
          {
            heading: "Types",
            body: "**Parallelogram** (opposite sides parallel), **rectangle** (4 right angles), **rhombus** (4 equal sides), **square** (both), **trapezoid** (one pair parallel), **kite** (two pairs adjacent equal).",
          },
          {
            heading: "Hierarchy",
            body: "Squares are special rectangles AND special rhombuses. Rectangles and rhombuses are special parallelograms.",
          },
        ],
        keyFormulas: [
          { name: "Shapes", statement: "Parallelogram -> rectangle/rhombus -> square = hierarchy." },
        ],
        workedExample: {
          problem: "Is a square a rectangle? Why?",
          solution: "Yes — a square has 4 right angles like a rectangle, plus 4 equal sides.",
        },
      },
      questions: [
        {
          id: "m5-u6-classify-2d-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'parallelogram' has...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4 right angles"
                    },
                    {
                              "id": "b",
                              "text": "opposite sides parallel"
                    },
                    {
                              "id": "c",
                              "text": "4 equal sides"
                    },
                    {
                              "id": "d",
                              "text": "one pair parallel"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Parallelogram = parallel sides."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Parallelogram = parallel sides.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "opposite sides parallel",
          "commonErrors": [
                    "Confuses with rectangle."
          ]
},
        },
        {
          id: "m5-u6-classify-2d-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'trapezoid' has...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4 equal sides"
                    },
                    {
                              "id": "b",
                              "text": "one pair of parallel sides"
                    },
                    {
                              "id": "c",
                              "text": "4 right angles"
                    },
                    {
                              "id": "d",
                              "text": "no parallel sides"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Trapezoid = one pair parallel."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Trapezoid = one pair parallel.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "one pair of parallel sides",
          "commonErrors": [
                    "Wrong property."
          ]
},
        },
        {
          id: "m5-u6-classify-2d-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Classify these shapes: rectangle, rhombus, square, trapezoid. Give a property for each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Shapes",
                              "statement": "Four classifications."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Classifies all four.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Rectangle: 4 right angles; Rhombus: 4 equal sides; Square: both; Trapezoid: one pair parallel.**",
          "commonErrors": [
                    "Wrong classifications.",
                    "Missing properties."
          ]
},
        },
        {
          id: "m5-u6-classify-2d-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'rhombus' has...",
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
          id: "m5-u6-classify-2d-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Is every rectangle a parallelogram? Is every parallelogram a rectangle? Explain.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Shapes",
                              "statement": "Hierarchy explanation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Answers both questions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains why.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Yes, rectangles are parallelograms (opposite sides parallel). No, not all parallelograms have right angles.**",
          "commonErrors": [
                    "Wrong answers.",
                    "No explanation."
          ]
},
        },
        {
          id: "m5-u6-classify-2d-q6",
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
          id: "m5-u6-classify-2d-q7",
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
                              "text": "4 equal sides + right angles."
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
          id: "m5-u6-classify-2d-q8",
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
                              "text": "4 equal sides + right angles."
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
