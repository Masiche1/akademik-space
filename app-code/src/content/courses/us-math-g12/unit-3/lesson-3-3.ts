import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "m12-u3-lesson-3-3",
  code: "3-3",
  title: "Introduction to Limits and Rates of Change",
  goal: "I CAN estimate limits and compute average rates of change leading to instantaneous rates.",
  standards: ["F-IF.3", "F-LE.3", "Calculus preview"],
  vocabulary: [
    { term: "Limit", definition: "The value a function approaches as $x$ gets close to a point — may differ from the function's value there." },
    { term: "One-sided limit", definition: "$\\lim_{x \\to a^-} f(x)$ approaches from the left; $\\lim_{x \\to a^+}$ from the right." },
    { term: "Limit exists", definition: "Both one-sided limits exist and are equal." },
    { term: "Average rate of change", definition: "$\\frac{f(b) - f(a)}{b - a}$ — slope of the secant line." },
    { term: "Instantaneous rate", definition: "The limit of average rates as the interval shrinks to zero — the derivative." },
  ],
  concepts: [
    {
      id: "m12-u3-limits-rates",
      title: "Limits and rates of change",
      skill: "Estimate limits from tables/graphs and connect secant slopes to tangent slopes.",
      lesson: {
        sections: [
          {
            heading: "Limits",
            body: "$\\lim_{x \\to a} f(x) = L$ means $f(x)$ gets arbitrarily close to $L$ as $x$ approaches $a$ — regardless of $f(a)$ itself. If left and right limits disagree, the limit **does not exist**. For $f(x) = \\frac{x^2 - 1}{x - 1}$, the limit as $x \\to 1$ is $2$ even though $f(1)$ is undefined (removable discontinuity).",
          },
          {
            heading: "Rates of change",
            body: "The **average rate of change** of $f$ on $[a, b]$ is $\\frac{f(b) - f(a)}{b - a}$ — the slope of the secant line. The **instantaneous rate** at $a$ is the limit of these averages as $b \\to a$: $f'(a) = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$. For $f(x) = x^2$, this limit gives $f'(a) = 2a$ — the tangent slope.",
          },
        ],
        keyFormulas: [
          { name: "Limit", statement: "$\\lim_{x \\to a} f(x) = L$ — value approached, not necessarily $f(a)$" },
          { name: "Average rate", statement: "$\\frac{f(b)-f(a)}{b-a}$" },
          { name: "Derivative", statement: "$f'(a) = \\lim_{h \\to 0} \\frac{f(a+h)-f(a)}{h}$" },
        ],
        workedExample: {
          problem: "Find the average rate of change of $f(x) = x^2$ on $[1, 3]$.",
          solution: "$\\frac{f(3) - f(1)}{3 - 1} = \\frac{9 - 1}{2} = 4$. The instantaneous rate at $x = 2$ is also $4$ — the secant from $1$ to $3$ happens to match the tangent at the midpoint.",
        },
      },
      questions: [
        {
          id: "m12-u3-limits-rates-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The average rate of change of $f(x) = 2x + 1$ on $[0, 4]$ is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$2$"
                    },
                    {
                              "id": "b",
                              "text": "$9$"
                    },
                    {
                              "id": "c",
                              "text": "$8$"
                    },
                    {
                              "id": "d",
                              "text": "$4$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Average rate",
                              "statement": "$\\frac{f(4)-f(0)}{4} = \\frac{9-1}{4} = 2$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rate $= 2$ — the slope of the linear function.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(a)** $2$",
          "commonErrors": [
                    "Reporting $f(4) = 9$ instead of the rate."
          ]
},
        },
        {
          id: "m12-u3-limits-rates-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "$\\lim_{x \\to 2} (3x - 1)$ equals ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$5$"
                    },
                    {
                              "id": "b",
                              "text": "$6$"
                    },
                    {
                              "id": "c",
                              "text": "undefined"
                    },
                    {
                              "id": "d",
                              "text": "$0$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Direct substitution",
                              "statement": "Continuous function: substitute $x = 2$: $3(2) - 1 = 5$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Limit $= 5$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct value.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** $5$",
          "commonErrors": [
                    "Thinking limits always require special techniques."
          ]
},
        },
        {
          id: "m12-u3-limits-rates-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "For $f(x) = x^2$, the instantaneous rate of change at $x = 3$ is $2(3)$. What is it?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Rate",
                              "answer": 6
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Derivative of $x^2$",
                              "statement": "$f'(x) = 2x$; at $x=3$: $6$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$f'(3) = 6$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct value.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$6$",
          "commonErrors": [
                    "Using $x^2$ instead of $2x$."
          ]
},
        },
        {
          id: "m12-u3-limits-rates-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Estimate $\\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1}$ using a table of values $x = 0.9, 0.99, 1.01, 1.1$ (compute $f(x)$ for each), then explain the result algebraically.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Table approach",
                              "statement": "Compute $f$ near $x = 1$ (avoiding $x = 1$ itself)."
                    },
                    {
                              "kind": "method",
                              "name": "Algebraic",
                              "statement": "Factor: $\\frac{(x-1)(x+1)}{x-1} = x + 1$ for $x \\ne 1$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Values: $f(0.9) = 1.9$, $f(0.99) = 1.99$, $f(1.01) = 2.01$, $f(1.1) = 2.1$ — approaching $2$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Algebra: for $x \\ne 1$, $f(x) = x + 1$, so the limit is $1 + 1 = 2$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Limit $= 2$ even though $f(1)$ is undefined — removable discontinuity.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$2$",
          "commonErrors": [
                    "Plugging in $x = 1$ and reporting undefined instead of the limit."
          ]
},
        },
      ],
    },
  ],
};
