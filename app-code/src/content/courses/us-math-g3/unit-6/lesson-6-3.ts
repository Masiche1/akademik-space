import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "m3-u6-lesson-6-3",
  code: "6-3",
  title: "Mass",
  goal: "I CAN measure mass in grams and kilograms.",
  standards: ["3.MD.B.4"],
  vocabulary: [
    { term: "Mass", definition: "How much matter." },
    { term: "Gram", definition: "Small unit." },
    { term: "Kilogram", definition: "1000 grams." },
    { term: "Heavy", definition: "More mass." },
    { term: "Light", definition: "Less mass." },
    { term: "Scale", definition: "Measures mass." },
    { term: "Balance", definition: "Compares mass." },
    { term: "Convert", definition: "Change units." },
  ],
  concepts: [
    {
      id: "m3-u6-mass",
      title: "Mass",
      skill: "Measure mass using grams and kilograms.",
      lesson: {
        sections: [
          {
            heading: "What is mass?",
            body: "**Mass** measures how much **matter** is in an object. We use **grams** (g) for light objects and **kilograms** (kg) for heavy ones: **1000 g = 1 kg**.",
          },
          {
            heading: "Choosing units",
            body: "A **pencil** might be 10 g; a **backpack** might be 3 kg; a **person** might be 50 kg. Use the unit that makes sense.",
          },
        ],
        keyFormulas: [
          { name: "Mass", statement: "g for light, kg for heavy." },
          { name: "Convert", statement: "1000 g = 1 kg." },
        ],
        workedExample: {
          problem: "A bag of apples has a mass of 2 kg. How many grams?",
          solution: "$2 \\times 1000 = 2000$ g.",
        },
      },
      questions: [
        {
          id: "m3-u6-mass-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "1000 grams equals...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1 gram"
                    },
                    {
                              "id": "b",
                              "text": "1 kilogram"
                    },
                    {
                              "id": "c",
                              "text": "100 grams"
                    },
                    {
                              "id": "d",
                              "text": "10 kilograms"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "1000 g = 1 kg."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1000 g = 1 kg.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "1 kg",
          "commonErrors": [
                    "Wrong conversion."
          ]
},
        },
        {
          id: "m3-u6-mass-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which unit for a backpack?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "grams"
                    },
                    {
                              "id": "b",
                              "text": "kilograms"
                    },
                    {
                              "id": "c",
                              "text": "milligrams"
                    },
                    {
                              "id": "d",
                              "text": "liters"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Heavy objects use kg."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Heavy objects use kg.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "kilograms",
          "commonErrors": [
                    "Wrong unit."
          ]
},
        },
        {
          id: "m3-u6-mass-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "A bag of apples has a mass of 3 kg. How many grams? (Write just the number)",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 3000
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "3 x 1000 = 3000 g."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "3000",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "3000",
          "commonErrors": [
                    "Wrong conversion."
          ]
},
        },
        {
          id: "m3-u6-mass-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A pencil has a mass of 15 g. About how many pencils equal 1 kg?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "67"
                    },
                    {
                              "id": "b",
                              "text": "15"
                    },
                    {
                              "id": "c",
                              "text": "100"
                    },
                    {
                              "id": "d",
                              "text": "150"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "1000 / 15 ≈ 67 pencils."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1000 / 15 ≈ 67 pencils.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "67",
          "commonErrors": [
                    "Wrong estimate."
          ]
},
        },
        {
          id: "m3-u6-mass-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare the mass of a pencil (10 g) and a book (500 g). Which is heavier and by how much?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Mass",
                              "statement": "Compare + subtract."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compares masses.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Finds difference.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**Book is heavier by 490 g (500 - 10 = 490)**",
          "commonErrors": [
                    "Wrong comparison.",
                    "Wrong difference."
          ]
},
        },
        {
          id: "m3-u6-mass-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Mass\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Small unit."
                    },
                    {
                              "id": "b",
                              "text": "How much matter."
                    },
                    {
                              "id": "c",
                              "text": "1000 grams."
                    },
                    {
                              "id": "d",
                              "text": "More mass."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Mass\" means How much matter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Mass\" means How much matter.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Mass** = How much matter.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u6-mass-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Gram\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1000 grams."
                    },
                    {
                              "id": "b",
                              "text": "More mass."
                    },
                    {
                              "id": "c",
                              "text": "Less mass."
                    },
                    {
                              "id": "d",
                              "text": "Small unit."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Gram\" means Small unit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Gram\" means Small unit.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Gram** = Small unit.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u6-mass-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Kilogram\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "More mass."
                    },
                    {
                              "id": "b",
                              "text": "1000 grams."
                    },
                    {
                              "id": "c",
                              "text": "Less mass."
                    },
                    {
                              "id": "d",
                              "text": "Measures mass."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Kilogram\" means 1000 grams."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Kilogram\" means 1000 grams.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Kilogram** = 1000 grams.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
