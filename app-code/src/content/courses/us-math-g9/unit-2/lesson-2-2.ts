import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "m9-u2-lesson-2-2",
  code: "2-2",
  title: "Slope and Rate of Change",
  goal: "I CAN calculate and interpret slope as a rate of change.",
  standards: ["F-IF.6", "8.EE.B.5"],
  vocabulary: [
    { term: "Slope", definition: "The rate of change of a linear function: rise over run, $m = \\frac{y_2 - y_1}{x_2 - x_1}$." },
    { term: "Rate of change", definition: "How quickly one quantity changes relative to another, such as miles per hour." },
    { term: "Positive slope", definition: "Line rises left to right." },
    { term: "Negative slope", definition: "Line falls left to right." },
    { term: "Zero slope", definition: "Horizontal line; constant output." },
  ],
  concepts: [
    {
      id: "m9-u2-slope-rate-of-change",
      title: "Slope",
      skill: "Compute slope from two points, a graph, or a table and interpret it as a rate.",
      lesson: {
        sections: [
          {
            heading: "The slope formula",
            body: "Slope measures steepness: $m = \\frac{\\text{rise}}{\\text{run}} = \\frac{y_2 - y_1}{x_2 - x_1}$. From points $(1, 3)$ and $(4, 9)$: $m = \\frac{9-3}{4-1} = \\frac{6}{3} = 2$. The order of subtraction must be consistent — swapping both pairs gives the same answer.",
          },
          {
            heading: "Slope as rate of change",
            body: "In a real context, slope is a unit rate with meaning. A line showing distance vs time with slope $60$ means $60$ miles per hour. A negative slope means the quantity decreases; zero slope means it stays constant.",
          },
        ],
        keyFormulas: [
          { name: "Slope", statement: "$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{\\text{rise}}{\\text{run}}$" },
          { name: "From equation", statement: "$y = mx + b$ has slope $m$" },
        ],
        workedExample: {
          problem: "Find the slope of the line through $(-2, 5)$ and $(3, -5)$ and interpret it.",
          solution: "$m = \\frac{-5 - 5}{3 - (-2)} = \\frac{-10}{5} = -2$. The line falls $2$ units for every $1$ unit it moves right.",
        },
      },
      questions: [
        {
          id: "m9-u2-slope-rate-of-change-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the slope of the line through $(0, 1)$ and $(3, 7)$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$2$"
                    },
                    {
                              "id": "b",
                              "text": "$3$"
                    },
                    {
                              "id": "c",
                              "text": "$6$"
                    },
                    {
                              "id": "d",
                              "text": "$\\frac{1}{2}$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Slope",
                              "statement": "$m = \\frac{7-1}{3-0} = \\frac{6}{3} = 2$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rise $6$, run $3$, slope $= 2$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(a)** $2$",
          "commonErrors": [
                    "Subtracting in mismatched order gives $-2$ — keep pairs consistent."
          ]
},
        },
        {
          id: "m9-u2-slope-rate-of-change-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A line has equation $y = -4x + 9$. What is its slope?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$9$"
                    },
                    {
                              "id": "b",
                              "text": "$-4$"
                    },
                    {
                              "id": "c",
                              "text": "$4$"
                    },
                    {
                              "id": "d",
                              "text": "$0$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Slope-intercept form",
                              "statement": "$y = mx + b$, slope is $m$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Slope is the coefficient of $x$: $-4$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** $-4$",
          "commonErrors": [
                    "Picking the $y$-intercept $9$."
          ]
},
        },
        {
          id: "m9-u2-slope-rate-of-change-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "A table shows $(1, 8), (3, 14), (5, 20)$. What is the slope?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Slope",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Slope from table",
                              "statement": "$m = \\frac{14-8}{3-1} = \\frac{6}{2} = 3$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Using any two rows: $\\frac{6}{2} = 3$ (constant across the table).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct slope.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$m = 3$",
          "commonErrors": [
                    "Using values that are not aligned by row."
          ]
},
        },
        {
          id: "m9-u2-slope-rate-of-change-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A bike courier's distance from the depot is modeled by $d = 5 - 0.5t$ where $t$ is hours and $d$ is miles. Interpret the slope, find when the courier reaches the depot, and explain what a steeper negative slope would mean.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "interpret",
                              "name": "Slope meaning",
                              "statement": "Slope $-0.5$ means distance decreases $0.5$ mile per hour — speed toward depot."
                    },
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Set $d = 0$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Slope $-0.5$: the courier approaches the depot at $0.5$ mph.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$0 = 5 - 0.5t$ gives $t = 10$ hours.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "A steeper negative slope means a faster approach — greater speed toward the depot.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Slope $-0.5$ mph toward depot; arrives at $t=10$ h; steeper = faster",
          "commonErrors": [
                    "Interpreting the slope as total distance rather than rate."
          ]
},
        },
      ],
    },
  ],
};
