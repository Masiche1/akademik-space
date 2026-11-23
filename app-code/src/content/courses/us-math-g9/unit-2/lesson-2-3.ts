import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "m9-u2-lesson-2-3",
  code: "2-3",
  title: "Writing Equations of Lines",
  goal: "I CAN write the equation of a line in slope-intercept and point-slope form.",
  standards: ["F-LE.2", "F-IF.7"],
  vocabulary: [
    { term: "Slope-intercept form", definition: "$y = mx + b$ where $m$ is slope and $b$ is the $y$-intercept." },
    { term: "Point-slope form", definition: "$y - y_1 = m(x - x_1)$ using any point $(x_1, y_1)$ on the line." },
    { term: "$y$-intercept", definition: "The point where the line crosses the $y$-axis, $(0, b)$." },
    { term: "Parallel lines", definition: "Lines with equal slopes that never intersect." },
    { term: "Perpendicular lines", definition: "Lines whose slopes are negative reciprocals, $m_1 m_2 = -1$." },
  ],
  concepts: [
    {
      id: "m9-u2-equations-of-lines",
      title: "Equations of lines",
      skill: "Build a line's equation from slope and a point, or from two points.",
      lesson: {
        sections: [
          {
            heading: "Slope-intercept form",
            body: "With slope $m$ and $y$-intercept $b$, the equation is $y = mx + b$. Given slope $3$ and intercept $-2$: $y = 3x - 2$. If you know slope and a different point, substitute the point to solve for $b$.",
          },
          {
            heading: "Point-slope form and two points",
            body: "$y - y_1 = m(x - x_1)$ works with any point on the line. Given two points, first compute $m = \\frac{y_2-y_1}{x_2-x_1}$, then substitute one point into point-slope form and simplify. Parallel lines share the same slope; perpendicular slopes multiply to $-1$.",
          },
        ],
        keyFormulas: [
          { name: "Slope-intercept", statement: "$y = mx + b$" },
          { name: "Point-slope", statement: "$y - y_1 = m(x - x_1)$" },
          { name: "Perpendicular slopes", statement: "$m_1 m_2 = -1$" },
        ],
        workedExample: {
          problem: "Write the equation of the line through $(2, 5)$ and $(6, 13)$.",
          solution: "$m = \\frac{13-5}{6-2} = 2$. Using $(2,5)$: $y - 5 = 2(x - 2)$, so $y = 2x + 1$.",
        },
      },
      questions: [
        {
          id: "m9-u2-equations-of-lines-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the equation of a line with slope $4$ and $y$-intercept $-1$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$y = 4x - 1$"
                    },
                    {
                              "id": "b",
                              "text": "$y = -x + 4$"
                    },
                    {
                              "id": "c",
                              "text": "$y = x + 4$"
                    },
                    {
                              "id": "d",
                              "text": "$y = 4x + 1$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Slope-intercept",
                              "statement": "$y = mx + b$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$m = 4$, $b = -1$: $y = 4x - 1$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(a)** $y = 4x - 1$",
          "commonErrors": [
                    "Swapping slope and intercept."
          ]
},
        },
        {
          id: "m9-u2-equations-of-lines-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A line passes through $(1, 2)$ with slope $3$. Which equation represents it?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$y = 3x - 1$"
                    },
                    {
                              "id": "b",
                              "text": "$y = 3x + 2$"
                    },
                    {
                              "id": "c",
                              "text": "$y = 2x + 3$"
                    },
                    {
                              "id": "d",
                              "text": "$y = 3x + 5$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve for $b$",
                              "statement": "$2 = 3(1) + b$ gives $b = -1$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Point-slope: $y - 2 = 3(x - 1)$ gives $y = 3x - 1$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct equation.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** $y = 3x - 1$",
          "commonErrors": [
                    "Using the point's $y$-value as $b$ without checking."
          ]
},
        },
        {
          id: "m9-u2-equations-of-lines-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the slope of the line perpendicular to $y = \\frac{2}{3}x + 5$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Slope",
                              "answer": -1.5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "rule",
                              "name": "Perpendicular slopes",
                              "statement": "Negative reciprocal: $-\\frac{3}{2}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Negative reciprocal of $\\frac{2}{3}$ is $-\\frac{3}{2} = -1.5$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct value.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$m = -\\frac{3}{2}$",
          "commonErrors": [
                    "Using the same slope or forgetting to flip the sign."
          ]
},
        },
        {
          id: "m9-u2-equations-of-lines-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Line $A$ passes through $(0, 1)$ and $(3, 7)$. Line $B$ is parallel to $A$ and passes through $(2, 0)$. Write both equations and find where they would intersect if extended — explain why they don't actually intersect.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Build equations",
                              "statement": "Slope of $A$: $m = \\frac{7-1}{3-0} = 2$, so $A: y = 2x + 1$."
                    },
                    {
                              "kind": "skill",
                              "name": "Parallel reasoning",
                              "statement": "Parallel lines share slope but different intercepts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Line $A$: $y = 2x + 1$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Line $B$: slope $2$ through $(2,0)$ gives $y = 2x - 4$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "They never intersect: same slope means the lines stay $5$ units apart vertically — parallel lines have no solution to $2x+1 = 2x-4$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$A: y=2x+1$, $B: y=2x-4$; parallel, no intersection",
          "commonErrors": [
                    "Thinking parallel lines intersect at one point."
          ]
},
        },
      ],
    },
  ],
};
