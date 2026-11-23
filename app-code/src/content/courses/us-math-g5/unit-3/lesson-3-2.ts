import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "m5-u3-lesson-3-2",
  code: "3-2",
  title: "Whole Numbers x Fractions",
  goal: "I CAN multiply whole numbers by fractions and fractions by fractions.",
  standards: ["5.NF.B.4"],
  vocabulary: [
    { term: "Whole number", definition: "Integer." },
    { term: "Fraction", definition: "Part of whole." },
    { term: "Multiply", definition: "Repeated addition." },
    { term: "Product", definition: "Answer." },
    { term: "Scale", definition: "Fraction of whole." },
    { term: "Area", definition: "Space." },
    { term: "Length", definition: "Distance." },
    { term: "Model", definition: "Visual representation." },
  ],
  concepts: [
    {
      id: "m5-u3-multiply-whole-fraction",
      title: "Whole numbers times fractions",
      skill: "Multiply whole numbers by fractions to find parts of quantities.",
      lesson: {
        sections: [
          {
            heading: "Part of a quantity",
            body: "Multiplying a whole number by a fraction gives a **part** of that quantity: $4 \\times \\frac{1}{2} = 2$ (half of 4).",
          },
          {
            heading: "Fraction of fraction",
            body: "Multiplying two fractions gives a **fraction of a fraction**: $\\frac{1}{2} \\times \\frac{1}{3} = \\frac{1}{6}$ (half of a third).",
          },
        ],
        keyFormulas: [
          { name: "Multiply", statement: "Whole x fraction = part; fraction x fraction = fraction of fraction." },
        ],
        workedExample: {
          problem: "What is $6 \\times \\frac{2}{3}$?",
          solution: "$6 \\times \\frac{2}{3} = \\frac{12}{3} = 4$.",
        },
      },
      questions: [
        {
          id: "m5-u3-multiply-whole-fraction-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $8 \\times \\frac{1}{2}$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4"
                    },
                    {
                              "id": "b",
                              "text": "8"
                    },
                    {
                              "id": "c",
                              "text": "16"
                    },
                    {
                              "id": "d",
                              "text": "2"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "8 x 1/2 = 4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "8 x 1/2 = 4.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "4",
          "commonErrors": [
                    "Wrong product."
          ]
},
        },
        {
          id: "m5-u3-multiply-whole-fraction-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is $10 \\times \\frac{3}{5}$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "6"
                    },
                    {
                              "id": "b",
                              "text": "5"
                    },
                    {
                              "id": "c",
                              "text": "30"
                    },
                    {
                              "id": "d",
                              "text": "3"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "10 x 3/5 = 30/5 = 6."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "10 x 3/5 = 30/5 = 6.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "6",
          "commonErrors": [
                    "Wrong product."
          ]
},
        },
        {
          id: "m5-u3-multiply-whole-fraction-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Calculate $12 \\times \\frac{3}{4}$ and $15 \\times \\frac{2}{5}$. Show work.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Multiply",
                              "statement": "9 and 6."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Multiplies both.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**12 x 3/4 = 36/4 = 9; 15 x 2/5 = 30/5 = 6**",
          "commonErrors": [
                    "Wrong products.",
                    "No work."
          ]
},
        },
        {
          id: "m5-u3-multiply-whole-fraction-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "$\\frac{1}{2} \\times \\frac{1}{4}$ means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "half of a half"
                    },
                    {
                              "id": "b",
                              "text": "one half plus one fourth"
                    },
                    {
                              "id": "c",
                              "text": "two halves"
                    },
                    {
                              "id": "d",
                              "text": "one fourth"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Fraction of a fraction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fraction of a fraction.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "half of a half",
          "commonErrors": [
                    "Wrong interpretation."
          ]
},
        },
        {
          id: "m5-u3-multiply-whole-fraction-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A recipe needs $\\frac{3}{4}$ cup of flour per batch. How much flour for 8 batches?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Multiply",
                              "statement": "8 x 3/4 = 6 cups."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Multiplies correctly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Interprets answer.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**8 x 3/4 = 24/4 = 6 cups**",
          "commonErrors": [
                    "Wrong amount.",
                    "No interpretation."
          ]
},
        },
        {
          id: "m5-u3-multiply-whole-fraction-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Whole number\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Part of whole."
                    },
                    {
                              "id": "b",
                              "text": "Integer."
                    },
                    {
                              "id": "c",
                              "text": "Repeated addition."
                    },
                    {
                              "id": "d",
                              "text": "Answer."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Whole number\" means Integer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Whole number\" means Integer.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Whole number** = Integer.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u3-multiply-whole-fraction-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fraction\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Repeated addition."
                    },
                    {
                              "id": "b",
                              "text": "Answer."
                    },
                    {
                              "id": "c",
                              "text": "Fraction of whole."
                    },
                    {
                              "id": "d",
                              "text": "Part of whole."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Fraction\" means Part of whole."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fraction\" means Part of whole.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fraction** = Part of whole.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u3-multiply-whole-fraction-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Multiply\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Answer."
                    },
                    {
                              "id": "b",
                              "text": "Repeated addition."
                    },
                    {
                              "id": "c",
                              "text": "Fraction of whole."
                    },
                    {
                              "id": "d",
                              "text": "Space."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Multiply\" means Repeated addition."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Multiply\" means Repeated addition.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Multiply** = Repeated addition.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
