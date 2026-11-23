import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "m5-u3-lesson-3-1",
  code: "3-1",
  title: "Multiplying Fractions",
  goal: "I CAN multiply fractions and mixed numbers.",
  standards: ["5.NF.B.4"],
  vocabulary: [
    { term: "Multiply", definition: "Repeated addition." },
    { term: "Numerator", definition: "Top." },
    { term: "Denominator", definition: "Bottom." },
    { term: "Product", definition: "Answer." },
    { term: "Cross-cancel", definition: "Simplify first." },
    { term: "Mixed number", definition: "Whole + fraction." },
    { term: "Convert", definition: "Change to improper." },
    { term: "Simplify", definition: "Reduce." },
  ],
  concepts: [
    {
      id: "m5-u3-multiply-fractions",
      title: "Multiplying fractions",
      skill: "Multiply fractions by multiplying numerators and denominators.",
      lesson: {
        sections: [
          {
            heading: "Multiply parts",
            body: "Multiply **numerators** together and **denominators** together: $\\frac{1}{2} \\times \\frac{3}{4} = \\frac{3}{8}$. Then **simplify**.",
          },
          {
            heading: "Cross-cancel",
            body: "You can **cancel** common factors first to simplify: $\\frac{2}{3} \\times \\frac{3}{4} = \\frac{1}{2} \\times \\frac{1}{4} = \\frac{1}{8}$.",
          },
        ],
        keyFormulas: [
          { name: "Multiply", statement: "(a/b) x (c/d) = ac/bd, then simplify." },
        ],
        workedExample: {
          problem: "Calculate $\\frac{2}{3} \\times \\frac{3}{4}$.",
          solution: "$\\frac{2}{3} \\times \\frac{3}{4} = \\frac{6}{12} = \\frac{1}{2}$.",
        },
      },
      questions: [
        {
          id: "m5-u3-multiply-fractions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $\\frac{1}{2} \\times \\frac{3}{4}$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "3/8"
                    },
                    {
                              "id": "b",
                              "text": "3/6"
                    },
                    {
                              "id": "c",
                              "text": "4/6"
                    },
                    {
                              "id": "d",
                              "text": "1/4"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "1/2 x 3/4 = 3/8."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1/2 x 3/4 = 3/8.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "3/8",
          "commonErrors": [
                    "Wrong product."
          ]
},
        },
        {
          id: "m5-u3-multiply-fractions-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is $\\frac{2}{3} \\times \\frac{3}{4}$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "6/12"
                    },
                    {
                              "id": "b",
                              "text": "1/2"
                    },
                    {
                              "id": "c",
                              "text": "5/7"
                    },
                    {
                              "id": "d",
                              "text": "6/7"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "6/12 = 1/2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "6/12 = 1/2.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "1/2",
          "commonErrors": [
                    "Not simplified."
          ]
},
        },
        {
          id: "m5-u3-multiply-fractions-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Multiply $\\frac{2}{5} \\times \\frac{3}{4}$ and $\\frac{3}{4} \\times \\frac{4}{5}$. Simplify.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Multiply",
                              "statement": "3/10 and 3/5."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Multiplies both.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**2/5 x 3/4 = 6/20 = 3/10; 3/4 x 4/5 = 12/20 = 3/5**",
          "commonErrors": [
                    "Wrong products.",
                    "Not simplified."
          ]
},
        },
        {
          id: "m5-u3-multiply-fractions-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To multiply fractions, you multiply...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "denominators only"
                    },
                    {
                              "id": "b",
                              "text": "numerators and denominators separately"
                    },
                    {
                              "id": "c",
                              "text": "add them"
                    },
                    {
                              "id": "d",
                              "text": "subtract them"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Numerators x numerators, denominators x denominators."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Numerators x numerators, denominators x denominators.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "numerators and denominators separately",
          "commonErrors": [
                    "Wrong method."
          ]
},
        },
        {
          id: "m5-u3-multiply-fractions-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Multiply $1\\frac{1}{2} \\times \\frac{2}{3}$. Convert to improper fraction first.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Multiply",
                              "statement": "1."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Converts correctly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Multiplies correctly.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**1 1/2 = 3/2; 3/2 x 2/3 = 6/6 = 1**",
          "commonErrors": [
                    "Wrong answer.",
                    "No conversion."
          ]
},
        },
        {
          id: "m5-u3-multiply-fractions-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Multiply\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Top."
                    },
                    {
                              "id": "b",
                              "text": "Repeated addition."
                    },
                    {
                              "id": "c",
                              "text": "Bottom."
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
        {
          id: "m5-u3-multiply-fractions-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Numerator\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Bottom."
                    },
                    {
                              "id": "b",
                              "text": "Answer."
                    },
                    {
                              "id": "c",
                              "text": "Simplify first."
                    },
                    {
                              "id": "d",
                              "text": "Top."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Numerator\" means Top."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Numerator\" means Top.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Numerator** = Top.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u3-multiply-fractions-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Denominator\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Answer."
                    },
                    {
                              "id": "b",
                              "text": "Bottom."
                    },
                    {
                              "id": "c",
                              "text": "Simplify first."
                    },
                    {
                              "id": "d",
                              "text": "Whole + fraction."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Denominator\" means Bottom."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Denominator\" means Bottom.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Denominator** = Bottom.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
