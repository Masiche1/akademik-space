import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "m11-u3-lesson-3-2",
  code: "3-2",
  title: "Logarithms",
  goal: "I CAN evaluate logarithms and use log properties to solve exponential equations.",
  standards: ["F-LE.4", "F-IF.8", "A-SSE.6"],
  vocabulary: [
    { term: "Logarithm", definition: "$\\log_b a = x$ means $b^x = a$ — the inverse of exponentiation." },
    { term: "Common log", definition: "$\\log$ (base $10$) and $\\ln$ (base $e$)." },
    { term: "Product rule", definition: "$\\log_b(MN) = \\log_b M + \\log_b N$." },
    { term: "Power rule", definition: "$\\log_b(M^n) = n \\log_b M$." },
    { term: "Change of base", definition: "$\\log_b a = \\frac{\\log a}{\\log b}$." },
  ],
  concepts: [
    {
      id: "m11-u3-logarithms",
      title: "Logarithms as inverses",
      skill: "Convert between exponential and logarithmic form and apply log rules.",
      lesson: {
        sections: [
          {
            heading: "Definition",
            body: "$\\log_b a = x \\iff b^x = a$. So $\\log_2 8 = 3$ because $2^3 = 8$, and $\\ln e = 1$ because $e^1 = e$. Logs answer the question 'what exponent?' — they undo exponentials, which is why they solve equations like $2^x = 10$.",
          },
          {
            heading: "Properties and solving",
            body: "Logs turn multiplication into addition, division into subtraction, and powers into multiplication: $\\log_b(MN) = \\log_b M + \\log_b N$, $\\log_b\\frac{M}{N} = \\log_b M - \\log_b N$, $\\log_b M^n = n\\log_b M$. To solve $b^x = a$, take $\\log$ of both sides: $x = \\frac{\\log a}{\\log b}$ (change of base).",
          },
        ],
        keyFormulas: [
          { name: "Definition", statement: "$\\log_b a = x \\iff b^x = a$" },
          { name: "Properties", statement: "$\\log(MN) = \\log M + \\log N$; $\\log M^n = n\\log M$" },
          { name: "Solve", statement: "$x = \\frac{\\log a}{\\log b}$ for $b^x = a$" },
        ],
        workedExample: {
          problem: "Solve $5^x = 100$.",
          solution: "$x = \\log_5 100 = \\frac{\\log 100}{\\log 5} = \\frac{2}{0.699} \\approx 2.86$.",
        },
      },
      questions: [
        {
          id: "m11-u3-logarithms-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "$\\log_3 27$ equals ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$3$"
                    },
                    {
                              "id": "b",
                              "text": "$9$"
                    },
                    {
                              "id": "c",
                              "text": "$81$"
                    },
                    {
                              "id": "d",
                              "text": "$\\frac{1}{3}$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Logarithm",
                              "statement": "$\\log_3 27 = x$ means $3^x = 27 = 3^3$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$x = 3$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(a)** $3$",
          "commonErrors": [
                    "Confusing $\\log_3 27$ with $3^{27}$."
          ]
},
        },
        {
          id: "m11-u3-logarithms-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which expression equals $\\log_2(x^3 y)$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$3\\log_2 x + \\log_2 y$"
                    },
                    {
                              "id": "b",
                              "text": "$3\\log_2 x \\cdot \\log_2 y$"
                    },
                    {
                              "id": "c",
                              "text": "$\\log_2 x + \\log_2 y$"
                    },
                    {
                              "id": "d",
                              "text": "$3\\log_2(xy)$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "properties",
                              "name": "Log rules",
                              "statement": "$\\log(x^3 y) = \\log x^3 + \\log y = 3\\log x + \\log y$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Power rule then product rule: $3\\log_2 x + \\log_2 y$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct expansion.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** $3\\log_2 x + \\log_2 y$",
          "commonErrors": [
                    "Bringing the $3$ inside the log incorrectly."
          ]
},
        },
        {
          id: "m11-u3-logarithms-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $2^x = 32$. Enter $x$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "$x$",
                              "answer": 5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Log",
                              "statement": "$x = \\log_2 32 = 5$ since $2^5 = 32$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$x = 5$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct value.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$x = 5$",
          "commonErrors": [
                    "Dividing $32/2$ instead of recognizing powers."
          ]
},
        },
        {
          id: "m11-u3-logarithms-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $3^{2x} = 81$ and explain two different methods.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Match bases",
                              "statement": "$81 = 3^4$, so $2x = 4$."
                    },
                    {
                              "kind": "method",
                              "name": "Log method",
                              "statement": "$2x = \\log_3 81 = \\frac{\\log 81}{\\log 3}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Method 1: $81 = 3^4$ gives $3^{2x} = 3^4$, so $2x = 4$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Method 2: $2x = \\log_3 81 = 4$ by change of base.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$x = 2$ either way.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$x = 2$",
          "commonErrors": [
                    "Writing $2x = 81$ by dropping the exponential."
          ]
},
        },
      ],
    },
  ],
};
