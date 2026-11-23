import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "m6-u4-lesson-4-1",
  code: "4-1",
  title: "Area Basics",
  goal: "I CAN find the area of triangles, parallelograms and trapezoids.",
  standards: ["6.G.A.1"],
  vocabulary: [
    { term: "Area", definition: "Space inside 2D shape." },
    { term: "Triangle", definition: "3-sided." },
    { term: "Parallelogram", definition: "Slanted rectangle." },
    { term: "Trapezoid", definition: "One pair parallel." },
    { term: "Base", definition: "Bottom side." },
    { term: "Height", definition: "Perpendicular distance." },
    { term: "Formula", definition: "Math rule." },
    { term: "Square unit", definition: "Unit of area." },
  ],
  concepts: [
    {
      id: "m6-u4-area-basics",
      title: "Area basics",
      skill: "Find area of triangles, parallelograms and trapezoids.",
      lesson: {
        sections: [
          {
            heading: "Formulas",
            body: "**Triangle**: $A = \\frac{1}{2}bh$. **Parallelogram**: $A = bh$. **Trapezoid**: $A = \\frac{1}{2}(b_1 + b_2)h$ where $b_1, b_2$ are the two parallel sides.",
          },
          {
            heading: "Base and height",
            body: "**Base** = one side; **height** = perpendicular distance (not slanted side for triangle/parallelogram).",
          },
        ],
        keyFormulas: [
          { name: "Triangle", statement: "A = 1/2 x b x h." },
          { name: "Parallelogram", statement: "A = b x h." },
          { name: "Trapezoid", statement: "A = 1/2 x (b1+b2) x h." },
        ],
        workedExample: {
          problem: "Find the area of a triangle with base 10 and height 6.",
          solution: "$A = \\frac{1}{2} \\times 10 \\times 6 = 30$ square units.",
        },
      },
      questions: [
        {
          id: "m6-u4-area-basics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Area of a triangle with base 8, height 5 is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "20"
                    },
                    {
                              "id": "b",
                              "text": "40"
                    },
                    {
                              "id": "c",
                              "text": "13"
                    },
                    {
                              "id": "d",
                              "text": "80"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "1/2 x 8 x 5 = 20."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1/2 x 8 x 5 = 20.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "20",
          "commonErrors": [
                    "Wrong formula."
          ]
},
        },
        {
          id: "m6-u4-area-basics-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Area of a parallelogram with base 12, height 7 is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "19"
                    },
                    {
                              "id": "b",
                              "text": "84"
                    },
                    {
                              "id": "c",
                              "text": "42"
                    },
                    {
                              "id": "d",
                              "text": "38"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "12 x 7 = 84."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "12 x 7 = 84.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "84",
          "commonErrors": [
                    "Wrong formula."
          ]
},
        },
        {
          id: "m6-u4-area-basics-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Find the area of: triangle (b=9,h=4), parallelogram (b=11,h=6), trapezoid (b1=5,b2=9,h=4).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Area",
                              "statement": "18, 66, 28."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds all three.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Triangle: 1/2x9x4=18; Parallelogram: 11x6=66; Trapezoid: 1/2x(5+9)x4=28.**",
          "commonErrors": [
                    "Wrong areas.",
                    "Missing shapes."
          ]
},
        },
        {
          id: "m6-u4-area-basics-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For a triangle, 'height' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "slanted side"
                    },
                    {
                              "id": "b",
                              "text": "perpendicular distance from base"
                    },
                    {
                              "id": "c",
                              "text": "longest side"
                    },
                    {
                              "id": "d",
                              "text": "any side"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Perpendicular distance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Perpendicular distance.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "perpendicular distance from base",
          "commonErrors": [
                    "Wrong height."
          ]
},
        },
        {
          id: "m6-u4-area-basics-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Find the area of a trapezoid and explain why the formula uses the average of the two bases.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Area",
                              "statement": "Area + explanation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds area.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains formula.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**A = 1/2(b1+b2)h; average base because trapezoid is like rectangle with slanted sides cut.**",
          "commonErrors": [
                    "Cannot find.",
                    "No explanation."
          ]
},
        },
        {
          id: "m6-u4-area-basics-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Area\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "3-sided."
                    },
                    {
                              "id": "b",
                              "text": "Space inside 2D shape."
                    },
                    {
                              "id": "c",
                              "text": "Slanted rectangle."
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
                              "statement": "\"Area\" means Space inside 2D shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Area\" means Space inside 2D shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Area** = Space inside 2D shape.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u4-area-basics-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Triangle\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Slanted rectangle."
                    },
                    {
                              "id": "b",
                              "text": "One pair parallel."
                    },
                    {
                              "id": "c",
                              "text": "Bottom side."
                    },
                    {
                              "id": "d",
                              "text": "3-sided."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Triangle\" means 3-sided."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Triangle\" means 3-sided.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Triangle** = 3-sided.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u4-area-basics-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Parallelogram\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "One pair parallel."
                    },
                    {
                              "id": "b",
                              "text": "Slanted rectangle."
                    },
                    {
                              "id": "c",
                              "text": "Bottom side."
                    },
                    {
                              "id": "d",
                              "text": "Perpendicular distance."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Parallelogram\" means Slanted rectangle."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Parallelogram\" means Slanted rectangle.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Parallelogram** = Slanted rectangle.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
