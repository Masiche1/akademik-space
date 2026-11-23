import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "m11-u3-lesson-3-1",
  code: "3-1",
  title: "Exponential Functions",
  goal: "I CAN analyze $f(x) = ab^x$ and model growth and decay.",
  standards: ["F-LE.1", "F-IF.8", "F-BF.1"],
  vocabulary: [
    { term: "Exponential function", definition: "$f(x) = ab^x$ with $b > 0$, $b \\ne 1$; $a$ is the initial value." },
    { term: "Growth vs decay", definition: "$b > 1$ grows; $0 < b < 1$ decays." },
    { term: "Asymptote", definition: "The horizontal line $y = 0$ (the $x$-axis) that the graph approaches but never reaches." },
    { term: "Growth factor", definition: "$b = 1 + r$ for growth rate $r$; $b = 1 - r$ for decay rate $r$." },
    { term: "Doubling time", definition: "Time for the quantity to double: $t = \\frac{\\ln 2}{\\ln b}$." },
  ],
  concepts: [
    {
      id: "m11-u3-exponential-functions",
      title: "Exponential models",
      skill: "Interpret parameters and apply growth/decay factors.",
      lesson: {
        sections: [
          {
            heading: "Reading the model",
            body: "In $f(x) = ab^x$: $a$ is the value at $x = 0$ (initial amount), $b$ is the growth factor per unit of $x$. Growth: $b > 1$ (e.g., $b = 1.05$ = $5\\%$ growth). Decay: $b < 1$ (e.g., $b = 0.9$ = $10\\%$ decay). The graph has a horizontal asymptote at $y = 0$ — it never quite reaches zero.",
          },
          {
            heading: "Compound changes",
            body: "Repeated percent change compounds: after $n$ periods, multiply by $b^n$. A $20\\%$ annual decay gives $V = V_0(0.8)^t$; after $5$ years the factor is $0.8^5 \\approx 0.328$, not $1 - 5(0.2) = 0$.",
          },
        ],
        keyFormulas: [
          { name: "Model", statement: "$f(x) = ab^x$; $a$ = initial, $b$ = factor" },
          { name: "Factor", statement: "$b = 1 + r$ growth, $b = 1 - r$ decay" },
          { name: "Asymptote", statement: "$y = 0$ horizontal asymptote" },
        ],
        workedExample: {
          problem: "A $\\$1{,}000$ investment grows at $6\\%$ compounded annually. Write the model and find the value after $10$ years.",
          solution: "$V(t) = 1000(1.06)^t$. After $10$ years: $V = 1000(1.06)^{10} \\approx 1000 \\times 1.791 \\approx \\$1{,}791$.",
        },
      },
      questions: [
        {
          id: "m11-u3-exponential-functions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $f(x) = 5(0.5)^x$, the function ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "grows without bound"
                    },
                    {
                              "id": "b",
                              "text": "decays toward $0$"
                    },
                    {
                              "id": "c",
                              "text": "is constant"
                    },
                    {
                              "id": "d",
                              "text": "oscillates"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Decay",
                              "statement": "$0 < b < 1$ means decay toward the asymptote $y=0$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$b = 0.5 < 1$: halves each step, approaching $0$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(b)** decays toward $0$",
          "commonErrors": [
                    "Thinking $0.5^x$ grows because the base is positive."
          ]
},
        },
        {
          id: "m11-u3-exponential-functions-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A population of $200$ grows by $3\\%$ per year. What is the growth factor $b$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$0.03$"
                    },
                    {
                              "id": "b",
                              "text": "$1.03$"
                    },
                    {
                              "id": "c",
                              "text": "$3$"
                    },
                    {
                              "id": "d",
                              "text": "$0.97$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Growth factor",
                              "statement": "$b = 1 + r = 1 + 0.03 = 1.03$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$b = 1.03$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct factor.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** $1.03$",
          "commonErrors": [
                    "Using the rate $0.03$ as the factor directly."
          ]
},
        },
        {
          id: "m11-u3-exponential-functions-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "A car worth $\\$20{,}000$ depreciates $10\\%$ per year. What is its value after $2$ years?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Value",
                              "answer": 16200,
                              "unit": "dollars"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "model",
                              "name": "Decay",
                              "statement": "$V = 20000(0.9)^2$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$0.9^2 = 0.81$; $20000 \\times 0.81 = \\$16{,}200$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct value.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$\\$16{,}200$",
          "commonErrors": [
                    "Subtracting $10\\%$ twice linearly: $20000 - 4000 = \\$16{,}000$."
          ]
},
        },
        {
          id: "m11-u3-exponential-functions-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Bacteria double every $3$ hours. Starting from $500$, write an exponential model $P(t)$ and find the population after $12$ hours.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "model",
                              "name": "Exponential",
                              "statement": "$P = 500 \\cdot 2^{t/3}$ — doubling every $3$ hours."
                    },
                    {
                              "kind": "method",
                              "name": "Evaluate",
                              "statement": "$t = 12$: $2^{12/3} = 2^4 = 16$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Model: $P(t) = 500 \\cdot 2^{t/3}$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "After $12$ h: $500 \\times 2^4 = 500 \\times 16$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$P = 8{,}000$ bacteria.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$P(t) = 500 \\cdot 2^{t/3}$; $8{,}000$ after $12$ h",
          "commonErrors": [
                    "Using $2^t$ instead of $2^{t/3}$ for the $3$-hour period."
          ]
},
        },
      ],
    },
  ],
};
