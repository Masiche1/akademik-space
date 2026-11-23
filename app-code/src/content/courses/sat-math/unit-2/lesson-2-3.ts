import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "satm-u2-lesson-2-3",
  code: "2-3",
  title: "Nonlinear Function Graphs",
  goal: "I CAN interpret graphs of nonlinear functions.",
  standards: ["SAT M 2.x"],
  vocabulary: [
    { term: "Nonlinear function", definition: "Curve, not straight line — quadratic, exponential, etc." },
    { term: "Intercept", definition: "Where graph crosses axes." },
    { term: "End behavior", definition: "What happens as $x \\to \\pm\\infty$." },
    { term: "Asymptote", definition: "Line graph approaches but never reaches." },
    { term: "Increasing/decreasing", definition: "Where function rises or falls." },
    { term: "Reading graphs", definition: "Extracting values and relationships from visual data." },
  ],
  concepts: [
    {
      id: "satm-u2-nonlinear-graphs",
      title: "Nonlinear graphs",
      skill: "Interpret graphs of quadratic, exponential, and other nonlinear functions.",
      lesson: {
        sections: [
          {
            heading: "Reading nonlinear graphs",
            body: "Unlike linear, nonlinear functions curve — slope changes. Key features: **x-intercepts** (roots/zeros), **y-intercept** (value at $x=0$), **vertex** (max/min for quadratics), **end behavior** (direction as $x \\to \\pm\\infty$), **asymptotes** (lines approached but not reached).",
          },
          {
            heading: "Exponential graphs",
            body: "Exponential growth ($b > 1$) curves upward increasingly steep; decay ($0 < b < 1$) curves toward x-axis asymptotically. Doubling/half-life visible as equal horizontal spacing for equal vertical ratios — characteristic of exponential, unlike linear's equal spacing.",
          },
        ],
        keyFormulas: [
          { name: "Key features", statement: "Intercepts, vertex, end behavior, asymptotes" },
          { name: "Exponential", statement: "Equal x-spacing for equal y-ratios" },
        ],
        workedExample: {
          problem: "A graph shows $y$ doubling every 2 units of $x$. What type of function?",
          solution: "Equal doubling at equal intervals = exponential growth — each 2-unit step multiplies y by 2; linear would add constant amount, not multiply.",
        },
      },
      questions: [
        {
          id: "satm-u2-nonlinear-graphs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The y-intercept of a graph is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "where it crosses x-axis"
                    },
                    {
                              "id": "b",
                              "text": "the value of y when x = 0"
                    },
                    {
                              "id": "c",
                              "text": "the highest point"
                    },
                    {
                              "id": "d",
                              "text": "the slope"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Y-intercept",
                              "statement": "Value at x=0."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Y-intercept = point where graph crosses y-axis = value of y when x = 0.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "y when x=0",
          "commonErrors": [
                    "Confusing with x-intercept."
          ]
},
        },
        {
          id: "satm-u2-nonlinear-graphs-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "An exponential growth graph has ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "constant slope"
                    },
                    {
                              "id": "b",
                              "text": "increasing steepness as x increases"
                    },
                    {
                              "id": "c",
                              "text": "a straight line"
                    },
                    {
                              "id": "d",
                              "text": "equal spacing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Exponential curve",
                              "statement": "Rate increases."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Exponential growth curves upward with increasing steepness — each step multiplies, so slope grows; linear has constant slope.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Increasing steepness",
          "commonErrors": [
                    "Confusing with linear."
          ]
},
        },
        {
          id: "satm-u2-nonlinear-graphs-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "A parabola has vertex at $(2, -3)$ and opens upward. What is the minimum value of y?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Min y",
                              "answer": -3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Vertex = min for upward",
                              "statement": "Lowest point."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Opens upward → vertex is minimum; vertex y-coordinate = -3.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer: $-3$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$-3$",
          "commonErrors": [
                    "Confusing vertex with intercept."
          ]
},
        },
        {
          id: "satm-u2-nonlinear-graphs-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How can you distinguish exponential from linear growth on a graph?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Graph signatures",
                              "statement": "Constant difference vs ratio."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Linear: equal x-intervals produce equal y-DIFFERENCES (constant slope — straight line); exponential: equal x-intervals produce equal y-RATIOS (constant multiplier — curve).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Test: check if y-values double (or halve) at regular intervals → exponential; check if y-values increase by same amount → linear.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Table check is easier: linear has constant first differences; exponential has constant ratios between consecutive terms.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Linear=constant diff; exponential=constant ratio",
          "commonErrors": [
                    "Only looking at shape, not values."
          ]
},
        },
      ],
    },
  ],
};
