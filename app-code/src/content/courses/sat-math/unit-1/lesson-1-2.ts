import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "satm-u1-lesson-1-2",
  code: "1-2",
  title: "Linear Functions and Slope",
  goal: "I CAN interpret slope and write linear equations.",
  standards: ["SAT M 1.x"],
  vocabulary: [
    { term: "Linear function", definition: "$f(x) = mx + b$ — straight line." },
    { term: "Slope", definition: "$m = \\frac{\\Delta y}{\\Delta x}$ — rate of change." },
    { term: "Y-intercept", definition: "$b$ — value at $x = 0$." },
    { term: "Point-slope form", definition: "$y - y_1 = m(x - x_1)$." },
    { term: "Parallel lines", definition: "Same slope, different intercept." },
    { term: "Rate of change", definition: "Slope = how y changes per unit x." },
  ],
  concepts: [
    {
      id: "satm-u1-linear-functions",
      title: "Linear functions",
      skill: "Interpret slope, write equations, and analyze linear relationships.",
      lesson: {
        sections: [
          {
            heading: "Slope meaning",
            body: "Slope $m = \\frac{y_2 - y_1}{x_2 - x_1}$ measures rate of change — rise over run. Positive = increasing, negative = decreasing, zero = horizontal, undefined = vertical. In context, slope is a RATE: 'dollars per hour', 'meters per second'.",
          },
          {
            heading: "Writing equations",
            body: "Given two points: compute slope, use point-slope form $y - y_1 = m(x - x_1)$, simplify to slope-intercept $y = mx + b$. Given slope and a point: plug into point-slope. Given slope and y-intercept: directly $y = mx + b$.",
          },
        ],
        keyFormulas: [
          { name: "Slope", statement: "$m = \\frac{y_2-y_1}{x_2-x_1} = \\frac{\\Delta y}{\\Delta x}$" },
          { name: "Point-slope", statement: "$y - y_1 = m(x - x_1)$" },
        ],
        workedExample: {
          problem: "Find the equation of the line through $(2, 5)$ and $(6, 13)$.",
          solution: "Slope $= \\frac{13-5}{6-2} = \\frac{8}{4} = 2$. Point-slope: $y - 5 = 2(x - 2)$ → $y = 2x + 1$. Check: at $x=6$, $y = 13$. ✓",
        },
      },
      questions: [
        {
          id: "satm-u1-linear-functions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The slope of a line measures ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the y-intercept"
                    },
                    {
                              "id": "b",
                              "text": "rate of change — rise over run"
                    },
                    {
                              "id": "c",
                              "text": "the x-intercept"
                    },
                    {
                              "id": "d",
                              "text": "the length"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Slope",
                              "statement": "Rate of change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Slope $= \\frac{\\Delta y}{\\Delta x}$ — how much y changes per unit change in x.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$m = \\frac{\\Delta y}{\\Delta x}$",
          "commonErrors": [
                    "Confusing slope with intercept."
          ]
},
        },
        {
          id: "satm-u1-linear-functions-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the slope of the line through $(1, 3)$ and $(4, 12)$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "3"
                    },
                    {
                              "id": "b",
                              "text": "4"
                    },
                    {
                              "id": "c",
                              "text": "9"
                    },
                    {
                              "id": "d",
                              "text": "27"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Rise over run",
                              "statement": "$\\frac{12-3}{4-1}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$m = \\frac{12-3}{4-1} = \\frac{9}{3} = 3$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$3$",
          "commonErrors": [
                    "Subtracting in wrong order or dividing wrong."
          ]
},
        },
        {
          id: "satm-u1-linear-functions-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "A line has slope $-2$ and passes through $(3, 7)$. What is $y$ when $x = 5$?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "y",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Point-slope",
                              "statement": "Use $y - y_1 = m(x - x_1)$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$y - 7 = -2(5 - 3) = -2(2) = -4$ → $y = 7 - 4 = 3$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer: $y = 3$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$3$",
          "commonErrors": [
                    "Sign error — slope is negative."
          ]
},
        },
        {
          id: "satm-u1-linear-functions-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two lines are parallel. Line 1 passes through $(0, 2)$ and $(3, 8)$. Line 2 passes through $(1, 5)$. Find the equation of Line 2.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Parallel = same slope",
                              "statement": "Compute slope of L1."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Line 1 slope: $\\frac{8-2}{3-0} = \\frac{6}{3} = 2$. Parallel → Line 2 also has slope 2.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Line 2 through $(1,5)$ with $m=2$: $y - 5 = 2(x - 1)$ → $y = 2x + 3$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Check: at $x=1$, $y = 2(1)+3 = 5$. ✓",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$y = 2x + 3$",
          "commonErrors": [
                    "Using wrong slope — parallel means SAME slope."
          ]
},
        },
      ],
    },
  ],
};
