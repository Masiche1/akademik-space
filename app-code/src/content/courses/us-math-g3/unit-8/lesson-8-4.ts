import type { Lesson } from "../../../types.ts";

export const lesson84: Lesson = {
  id: "m3-u8-lesson-8-4",
  code: "8-4",
  title: "Area vs Perimeter",
  goal: "I CAN distinguish between area and perimeter.",
  standards: ["3.MD.C.5", "3.MD.C.6", "3.MD.D.8"],
  vocabulary: [
    { term: "Area", definition: "Space inside." },
    { term: "Perimeter", definition: "Distance around." },
    { term: "Square units", definition: "Area measure." },
    { term: "Units", definition: "Perimeter measure." },
    { term: "Count", definition: "For area." },
    { term: "Add", definition: "For perimeter." },
    { term: "Inside", definition: "Area." },
    { term: "Outside", definition: "Perimeter." },
  ],
  concepts: [
    {
      id: "m3-u8-area-perimeter",
      title: "Area vs perimeter",
      skill: "Distinguish between area (inside) and perimeter (around).",
      lesson: {
        sections: [
          {
            heading: "Area vs perimeter",
            body: "**Area** measures the **space inside** a shape (in square units); **perimeter** measures the **distance around** it (in linear units).",
          },
          {
            heading: "Don't confuse",
            body: "Area uses **multiplication** (rows x columns); perimeter uses **addition** (sum of sides).",
          },
        ],
        keyFormulas: [
          { name: "Area", statement: "Inside space; square units." },
          { name: "Perimeter", statement: "Around distance; linear units." },
        ],
        workedExample: {
          problem: "A rectangle is 4 units by 3 units. What is its area and perimeter?",
          solution: "Area: $4 \\times 3 = 12$ square units. Perimeter: $4+3+4+3 = 14$ units.",
        },
      },
      questions: [
        {
          id: "m3-u8-area-perimeter-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Area measures...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "distance around"
                    },
                    {
                              "id": "b",
                              "text": "space inside"
                    },
                    {
                              "id": "c",
                              "text": "a side"
                    },
                    {
                              "id": "d",
                              "text": "an angle"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Area = inside."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Area = inside.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "space inside",
          "commonErrors": [
                    "Confuses with perimeter."
          ]
},
        },
        {
          id: "m3-u8-area-perimeter-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Perimeter measures...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "space inside"
                    },
                    {
                              "id": "b",
                              "text": "distance around"
                    },
                    {
                              "id": "c",
                              "text": "area"
                    },
                    {
                              "id": "d",
                              "text": "volume"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Perimeter = around."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Perimeter = around.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "distance around",
          "commonErrors": [
                    "Confuses with area."
          ]
},
        },
        {
          id: "m3-u8-area-perimeter-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "A rectangle is 4 units by 3 units. What is its area? (Write just the number)",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 12
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "4 x 3 = 12 square units."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "12",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "12",
          "commonErrors": [
                    "Wrong area."
          ]
},
        },
        {
          id: "m3-u8-area-perimeter-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A rectangle is 4 units by 3 units. What is its perimeter? (Write just the number)",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 14
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "4+3+4+3 = 14 units."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "14",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "14",
          "commonErrors": [
                    "Wrong perimeter."
          ]
},
        },
        {
          id: "m3-u8-area-perimeter-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "For a 5x3 rectangle, find both area and perimeter. Explain the difference.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Area vs perimeter",
                              "statement": "Area=inside, perimeter=around."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds area.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Finds perimeter.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**15 sq units and 16 units**",
          "commonErrors": [
                    "Wrong answers.",
                    "Confuses concepts."
          ]
},
        },
        {
          id: "m3-u8-area-perimeter-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Area\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Distance around."
                    },
                    {
                              "id": "b",
                              "text": "Space inside."
                    },
                    {
                              "id": "c",
                              "text": "Area measure."
                    },
                    {
                              "id": "d",
                              "text": "Perimeter measure."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Area\" means Space inside."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Area\" means Space inside.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Area** = Space inside.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u8-area-perimeter-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Perimeter\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Area measure."
                    },
                    {
                              "id": "b",
                              "text": "Perimeter measure."
                    },
                    {
                              "id": "c",
                              "text": "For area."
                    },
                    {
                              "id": "d",
                              "text": "Distance around."
                    }
          ],
          "correctChoiceId": "d"
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
          id: "m3-u8-area-perimeter-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Square units\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Perimeter measure."
                    },
                    {
                              "id": "b",
                              "text": "Area measure."
                    },
                    {
                              "id": "c",
                              "text": "For area."
                    },
                    {
                              "id": "d",
                              "text": "For perimeter."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Square units\" means Area measure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Square units\" means Area measure.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Square units** = Area measure.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
