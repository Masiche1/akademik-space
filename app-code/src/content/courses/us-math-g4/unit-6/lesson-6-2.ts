import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "m4-u6-lesson-6-2",
  code: "6-2",
  title: "Perimeter",
  goal: "I CAN find the perimeter of rectangles and irregular shapes.",
  standards: ["4.MD.A.3"],
  vocabulary: [
    { term: "Perimeter", definition: "Distance around." },
    { term: "Rectangle", definition: "4-sided shape." },
    { term: "Side", definition: "Edge of shape." },
    { term: "Add", definition: "Combine lengths." },
    { term: "Irregular", definition: "Not regular shape." },
    { term: "Formula", definition: "Rule for calculating." },
    { term: "Unit", definition: "Measurement unit." },
    { term: "Length", definition: "How long." },
  ],
  concepts: [
    {
      id: "m4-u6-perimeter",
      title: "Perimeter",
      skill: "Find the perimeter of rectangles and irregular shapes.",
      lesson: {
        sections: [
          {
            heading: "What is perimeter?",
            body: "**Perimeter** is the distance **around** a shape. For a rectangle, add all four sides: $P = 2(l + w)$ or just add each side.",
          },
          {
            heading: "Irregular shapes",
            body: "For **irregular** shapes, add all the sides. Make sure to include every edge.",
          },
        ],
        keyFormulas: [
          { name: "Rectangle", statement: "P = 2(l + w) or P = 2l + 2w." },
          { name: "Irregular", statement: "Add all sides." },
        ],
        workedExample: {
          problem: "A rectangle is 5 cm long and 3 cm wide. What is its perimeter?",
          solution: "$P = 2(5 + 3) = 2(8) = 16$ cm.",
        },
      },
      questions: [
        {
          id: "m4-u6-perimeter-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the perimeter of a rectangle 5 cm by 3 cm?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "16 cm"
                    },
                    {
                              "id": "b",
                              "text": "15 cm"
                    },
                    {
                              "id": "c",
                              "text": "8 cm"
                    },
                    {
                              "id": "d",
                              "text": "30 cm"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "2(5+3) = 16 cm."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "2(5+3) = 16 cm.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "16 cm",
          "commonErrors": [
                    "Wrong formula."
          ]
},
        },
        {
          id: "m4-u6-perimeter-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A square has sides of 4 cm. What is its perimeter?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "16 cm"
                    },
                    {
                              "id": "b",
                              "text": "8 cm"
                    },
                    {
                              "id": "c",
                              "text": "12 cm"
                    },
                    {
                              "id": "d",
                              "text": "4 cm"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "4 x 4 = 16 cm."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "4 x 4 = 16 cm.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "16 cm",
          "commonErrors": [
                    "Wrong perimeter."
          ]
},
        },
        {
          id: "m4-u6-perimeter-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Find the perimeter of an irregular shape with sides 3, 4, 5, and 6 cm.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Perimeter",
                              "statement": "3+4+5+6 = 18 cm."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Adds all sides.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**18 cm**",
          "commonErrors": [
                    "Wrong perimeter.",
                    "Missing sides."
          ]
},
        },
        {
          id: "m4-u6-perimeter-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Perimeter is measured in...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "square units"
                    },
                    {
                              "id": "b",
                              "text": "linear units"
                    },
                    {
                              "id": "c",
                              "text": "cubic units"
                    },
                    {
                              "id": "d",
                              "text": "units squared"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Perimeter = linear units (cm, m, etc.)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Perimeter = linear units (cm, m, etc.).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "linear units",
          "commonErrors": [
                    "Confuses with area."
          ]
},
        },
        {
          id: "m4-u6-perimeter-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Find the perimeter of a rectangle 8 m by 5 m AND a square with side 6 m.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Perimeter",
                              "statement": "26 m and 24 m."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds rectangle perimeter.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Finds square perimeter.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Rectangle: 2(8+5) = 26 m; Square: 4 x 6 = 24 m**",
          "commonErrors": [
                    "Wrong perimeters.",
                    "Only one found."
          ]
},
        },
        {
          id: "m4-u6-perimeter-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Perimeter\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4-sided shape."
                    },
                    {
                              "id": "b",
                              "text": "Distance around."
                    },
                    {
                              "id": "c",
                              "text": "Edge of shape."
                    },
                    {
                              "id": "d",
                              "text": "Combine lengths."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Perimeter\" means Distance around."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Perimeter\" means Distance around.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Perimeter** = Distance around.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u6-perimeter-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Rectangle\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Edge of shape."
                    },
                    {
                              "id": "b",
                              "text": "Combine lengths."
                    },
                    {
                              "id": "c",
                              "text": "Not regular shape."
                    },
                    {
                              "id": "d",
                              "text": "4-sided shape."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Rectangle\" means 4-sided shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Rectangle\" means 4-sided shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Rectangle** = 4-sided shape.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u6-perimeter-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Side\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Combine lengths."
                    },
                    {
                              "id": "b",
                              "text": "Edge of shape."
                    },
                    {
                              "id": "c",
                              "text": "Not regular shape."
                    },
                    {
                              "id": "d",
                              "text": "Rule for calculating."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Side\" means Edge of shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Side\" means Edge of shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Side** = Edge of shape.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
