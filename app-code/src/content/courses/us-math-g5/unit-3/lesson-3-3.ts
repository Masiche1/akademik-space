import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "m5-u3-lesson-3-3",
  code: "3-3",
  title: "Dividing Fractions",
  goal: "I CAN divide fractions and unit fractions.",
  standards: ["5.NF.B.7"],
  vocabulary: [
    { term: "Divide", definition: "Split into parts." },
    { term: "Quotient", definition: "Answer." },
    { term: "Dividend", definition: "Number divided." },
    { term: "Divisor", definition: "Number divided by." },
    { term: "Reciprocal", definition: "Flip fraction." },
    { term: "Unit fraction", definition: "1 over something." },
    { term: "Multiply", definition: "Repeated addition." },
    { term: "Invert", definition: "Flip." },
  ],
  concepts: [
    {
      id: "m5-u3-divide-fractions",
      title: "Dividing fractions",
      skill: "Divide fractions by multiplying by the reciprocal.",
      lesson: {
        sections: [
          {
            heading: "Flip and multiply",
            body: "To divide fractions, **multiply by the reciprocal** (flip) of the divisor: $\\frac{1}{2} \\div \\div \\frac{1}{4} = \\frac{1}{2} \\times \\frac{4}{1} = 2$.",
          },
          {
            heading: "Unit fractions",
            body: "Dividing by a **unit fraction** (1/n) is the same as multiplying by n: $\\frac{3}{4} \\div \\frac{1}{8} = \\frac{3}{4} \\times 8 = 6$.",
          },
        ],
        keyFormulas: [
          { name: "Divide", statement: "a/b ÷ c/d = a/b x d/c." },
        ],
        workedExample: {
          problem: "Calculate $\\frac{2}{3} \\div \\frac{1}{6}$.",
          solution: "$\\frac{2}{3} \\times 6 = \\frac{12}{3} = 4$.",
        },
      },
      questions: [
        {
          id: "m5-u3-divide-fractions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $\\frac{1}{2} \\div \\frac{1}{4}$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1/8"
                    },
                    {
                              "id": "b",
                              "text": "2"
                    },
                    {
                              "id": "c",
                              "text": "1/2"
                    },
                    {
                              "id": "d",
                              "text": "4"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "1/2 x 4/1 = 2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1/2 x 4/1 = 2.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "2",
          "commonErrors": [
                    "Wrong quotient."
          ]
},
        },
        {
          id: "m5-u3-divide-fractions-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is $\\frac{3}{4} \\div \\frac{1}{8}$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "6"
                    },
                    {
                              "id": "b",
                              "text": "3/32"
                    },
                    {
                              "id": "c",
                              "text": "1/6"
                    },
                    {
                              "id": "d",
                              "text": "24"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "3/4 x 8 = 24/4 = 6."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "3/4 x 8 = 24/4 = 6.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "6",
          "commonErrors": [
                    "Wrong quotient."
          ]
},
        },
        {
          id: "m5-u3-divide-fractions-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Divide $\\frac{2}{3} \\div \\frac{1}{9}$ and $\\frac{5}{6} \\div \\frac{1}{3}$. Show reciprocal multiplication.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Divide",
                              "statement": "6 and 5/2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Divides both.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**2/3 ÷ 1/9 = 2/3 x 9 = 6; 5/6 ÷ 1/3 = 5/6 x 3 = 5/2 = 2 1/2**",
          "commonErrors": [
                    "Wrong quotients.",
                    "No reciprocal."
          ]
},
        },
        {
          id: "m5-u3-divide-fractions-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To divide fractions, you...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "divide numerators and denominators"
                    },
                    {
                              "id": "b",
                              "text": "multiply by the reciprocal"
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
                              "statement": "Multiply by reciprocal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Multiply by reciprocal.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "multiply by the reciprocal",
          "commonErrors": [
                    "Wrong method."
          ]
},
        },
        {
          id: "m5-u3-divide-fractions-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A rope is $\\frac{3}{4}$ meter long. How many $\\frac{1}{8}$ meter pieces fit?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Divide",
                              "statement": "3/4 ÷ 1/8 = 6."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Divides correctly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Interprets answer.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**3/4 ÷ 1/8 = 3/4 x 8 = 6 pieces**",
          "commonErrors": [
                    "Wrong number.",
                    "No interpretation."
          ]
},
        },
        {
          id: "m5-u3-divide-fractions-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Divide\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Answer."
                    },
                    {
                              "id": "b",
                              "text": "Split into parts."
                    },
                    {
                              "id": "c",
                              "text": "Number divided."
                    },
                    {
                              "id": "d",
                              "text": "Number divided by."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Divide\" means Split into parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Divide\" means Split into parts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Divide** = Split into parts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u3-divide-fractions-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Quotient\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Number divided."
                    },
                    {
                              "id": "b",
                              "text": "Number divided by."
                    },
                    {
                              "id": "c",
                              "text": "Flip fraction."
                    },
                    {
                              "id": "d",
                              "text": "Answer."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Quotient\" means Answer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Quotient\" means Answer.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Quotient** = Answer.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u3-divide-fractions-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Dividend\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Number divided by."
                    },
                    {
                              "id": "b",
                              "text": "Number divided."
                    },
                    {
                              "id": "c",
                              "text": "Flip fraction."
                    },
                    {
                              "id": "d",
                              "text": "1 over something."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Dividend\" means Number divided."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Dividend\" means Number divided.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Dividend** = Number divided.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
