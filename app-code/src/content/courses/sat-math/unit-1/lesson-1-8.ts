import type { Lesson } from "../../../types.ts";

export const lesson18: Lesson = {
  id: "satm-u1-lesson-1-8",
  code: "1-8",
  title: "Exponential Functions",
  goal: "I CAN work with exponential growth and decay.",
  standards: ["SAT M 2.x"],
  vocabulary: [
    { term: "Exponential function", definition: "$f(x) = ab^x$ — constant ratio growth." },
    { term: "Growth factor", definition: "$b > 1$ — increasing; $0 < b < 1$ — decay." },
    { term: "Doubling time", definition: "Time for quantity to double." },
    { term: "Decay factor", definition: "$b < 1$ — shrinking." },
    { term: "Continuous compounding", definition: "$Pe^{rt}$ model." },
    { term: "Exponential vs linear", definition: "Constant ratio vs constant difference." },
  ],
  concepts: [
    {
      id: "satm-u1-exponential",
      title: "Exponential functions",
      skill: "Model exponential growth and decay.",
      lesson: {
        sections: [
          {
            heading: "Exponential form",
            body: "$f(x) = ab^x$ where $b$ is the growth factor: $b > 1$ = growth (each period multiplies by $b$), $0 < b < 1$ = decay. $a$ is initial value. Key difference from linear: exponential changes by CONSTANT RATIO (×2, ×3), linear by constant DIFFERENCE (+5, -3).",
          },
          {
            heading: "Growth and decay models",
            body: "Population: $P(t) = P_0(1 + r)^t$ — grows by rate $r$ each period. Decay: $A(t) = A_0(1 - r)^t$ or $A_0 \\cdot b^t$ with $b < 1$. Doubling time for $b = 2$: $t = \\log_2(2) = 1$ period. Half-life for decay: time to halve.",
          },
        ],
        keyFormulas: [
          { name: "Exponential", statement: "$f(x) = ab^x$, $b > 1$ growth, $0 < b < 1$ decay" },
          { name: "Growth", statement: "$P(t) = P_0(1+r)^t$" },
        ],
        workedExample: {
          problem: "A population of 1000 grows 5% per year. Write the model and find population after 3 years.",
          solution: "$P(t) = 1000(1.05)^t$. After 3 years: $1000(1.05)^3 = 1000(1.157625) \\approx 1157.6$ — about 1158.",
        },
      },
      questions: [
        {
          id: "satm-u1-exponential-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In $f(x) = ab^x$, $b > 1$ represents ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "decay"
                    },
                    {
                              "id": "b",
                              "text": "growth"
                    },
                    {
                              "id": "c",
                              "text": "linear increase"
                    },
                    {
                              "id": "d",
                              "text": "constant value"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Growth factor",
                              "statement": "b>1 multiplies up."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$b > 1$ = growth (each step multiplies by more than 1); $0 < b < 1$ = decay; $b = 1$ = constant.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Growth",
          "commonErrors": [
                    "Confusing growth/decay factors."
          ]
},
        },
        {
          id: "satm-u1-exponential-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A quantity doubles every 3 hours. The growth factor per hour is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "2"
                    },
                    {
                              "id": "b",
                              "text": "$2^{1/3}$"
                    },
                    {
                              "id": "c",
                              "text": "3"
                    },
                    {
                              "id": "d",
                              "text": "$1/2$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Rate conversion",
                              "statement": "Per-period factor."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Doubling every 3 hours means $b^3 = 2$ → $b = 2^{1/3} \\approx 1.26$ per hour.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$2^{1/3}$",
          "commonErrors": [
                    "Using 2 as hourly factor — that's the 3-hour factor."
          ]
},
        },
        {
          id: "satm-u1-exponential-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "A $\\$500$ investment grows 8% per year. What is the value after 2 years? Round to nearest dollar.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Value",
                              "answer": 583
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Compound growth",
                              "statement": "$500(1.08)^2$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$500(1.08)^2 = 500(1.1664) = 583.20$ → $\\$583$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer: 583.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "583",
          "commonErrors": [
                    "Using simple interest — $500 + 2(40) = 580$, wrong."
          ]
},
        },
        {
          id: "satm-u1-exponential-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain the difference between linear and exponential growth, and give a real-world example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Constant difference vs ratio",
                              "statement": "Additive vs multiplicative."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Linear: constant DIFFERENCE — adds same amount each period (e.g., saving $100/month → $100, $200, $300); exponential: constant RATIO — multiplies by same factor (e.g., population growing 5%/year → ×1.05 each year).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Exponential starts slower but eventually overtakes linear dramatically — after many periods, ×1.05 compounds to huge values while +$100 stays linear.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Real examples: linear = fixed savings, constant-speed travel; exponential = compound interest, population growth, viral spread.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Linear=+constant; exponential=×constant",
          "commonErrors": [
                    "Confusing additive and multiplicative change."
          ]
},
        },
      ],
    },
  ],
};
