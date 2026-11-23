import type { Lesson } from "../../../types.ts";

export const lesson17: Lesson = {
  id: "satm-u1-lesson-1-7",
  code: "1-7",
  title: "Function Notation and Evaluation",
  goal: "I CAN evaluate functions and interpret function notation.",
  standards: ["SAT M 2.x"],
  vocabulary: [
    { term: "Function", definition: "$f(x)$ — output for input $x$." },
    { term: "Function notation", definition: "$f(a)$ means evaluate at $x = a$." },
    { term: "Composition", definition: "$f(g(x))$ — apply g first, then f." },
    { term: "Domain", definition: "Allowed input values." },
    { term: "Range", definition: "Possible output values." },
    { term: "Piecewise", definition: "Different rules for different inputs." },
  ],
  concepts: [
    {
      id: "satm-u1-function-notation",
      title: "Function notation",
      skill: "Evaluate functions, compose them, and interpret notation.",
      lesson: {
        sections: [
          {
            heading: "Reading function notation",
            body: "$f(x) = 2x + 1$ means 'f of x equals 2x plus 1'. $f(3)$ means evaluate at $x = 3$: $f(3) = 2(3) + 1 = 7$. $f(a + 2)$ means substitute $(a+2)$ for every $x$ — careful with parentheses: $f(a+2) = 2(a+2) + 1 = 2a + 5$, NOT $2a + 2 + 1$.",
          },
          {
            heading: "Composition",
            body: "$f(g(x))$ = apply $g$ FIRST, then $f$ to the result. If $f(x) = x + 1$ and $g(x) = 2x$, then $f(g(x)) = f(2x) = 2x + 1$ — note order matters: $g(f(x)) = g(x+1) = 2(x+1) = 2x + 2$ is different.",
          },
        ],
        keyFormulas: [
          { name: "Evaluate", statement: "$f(a) = $ substitute $a$ for $x$" },
          { name: "Compose", statement: "$(f \\circ g)(x) = f(g(x))$ — g first, then f" },
        ],
        workedExample: {
          problem: "If $f(x) = x^2 - 3$ and $g(x) = x + 2$, find $f(g(1))$.",
          solution: "First $g(1) = 1 + 2 = 3$. Then $f(3) = 3^2 - 3 = 9 - 3 = 6$.",
        },
      },
      questions: [
        {
          id: "satm-u1-function-notation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "$f(3)$ means ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "f times 3"
                    },
                    {
                              "id": "b",
                              "text": "evaluate f at x = 3"
                    },
                    {
                              "id": "c",
                              "text": "3 times f(x)"
                    },
                    {
                              "id": "d",
                              "text": "f plus 3"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Function notation",
                              "statement": "Input value."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$f(3)$ means substitute 3 for $x$ in $f(x)$ — evaluate the function at input 3.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Evaluate at x=3",
          "commonErrors": [
                    "Reading as multiplication."
          ]
},
        },
        {
          id: "satm-u1-function-notation-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "If $f(x) = 2x + 1$, what is $f(a + 2)$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$2a + 3$"
                    },
                    {
                              "id": "b",
                              "text": "$2a + 5$"
                    },
                    {
                              "id": "c",
                              "text": "$2a + 2$"
                    },
                    {
                              "id": "d",
                              "text": "$a + 5$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Substitution",
                              "statement": "Replace x with (a+2)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$f(a+2) = 2(a+2) + 1 = 2a + 4 + 1 = 2a + 5$ — substitute the WHOLE expression with parentheses.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$2a + 5$",
          "commonErrors": [
                    "Dropping parentheses — $2a + 2 + 1$ is wrong."
          ]
},
        },
        {
          id: "satm-u1-function-notation-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "If $f(x) = x^2$ and $g(x) = x - 1$, what is $f(g(3))$?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "f(g(3))",
                              "answer": 4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Compose inner first",
                              "statement": "$g(3) = 2$, then $f(2)$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$g(3) = 3 - 1 = 2$; $f(2) = 2^2 = 4$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer: 4.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$4$",
          "commonErrors": [
                    "Applying f first — composition order matters."
          ]
},
        },
        {
          id: "satm-u1-function-notation-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why $f(g(x)) \\ne g(f(x))$ in general, using $f(x) = x + 1$ and $g(x) = 2x$.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Composition order",
                              "statement": "Inner function first."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$f(g(x))$: apply g first → $g(x) = 2x$, then f → $f(2x) = 2x + 1$.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "$g(f(x))$: apply f first → $f(x) = x + 1$, then g → $g(x+1) = 2(x+1) = 2x + 2$ — DIFFERENT result.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Composition is NOT commutative — order matters; always identify which function is 'inner' (applied first).",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "$f(g(x)) \\ne g(f(x))$ — order matters",
          "commonErrors": [
                    "Assuming composition is commutative."
          ]
},
        },
      ],
    },
  ],
};
