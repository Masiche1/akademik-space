import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "apst-u1-lesson-1-3",
  code: "1-3",
  title: "Bivariate Data and Associations",
  goal: "I CAN describe relationships between two quantitative variables.",
  standards: ["STAT-3"],
  vocabulary: [
    { term: "Bivariate data", definition: "Observations on two variables measured on the same individuals." },
    { term: "Scatterplot", definition: "Graph of paired $(x, y)$ values showing form, direction, strength, clusters, outliers." },
    { term: "Linear association", definition: "Points roughly following a straight-line pattern." },
    { term: "Residual", definition: "Observed $y$ minus predicted $\\hat{y}$ — vertical distance from the line." },
    { term: "Influential point", definition: "A point whose removal would markedly change the association." },
  ],
  concepts: [
    {
      id: "apst-u1-bivariate-data",
      title: "Bivariate data",
      skill: "Describe scatterplot patterns and identify unusual points.",
      lesson: {
        sections: [
          {
            heading: "Reading scatterplots",
            body: "Describe **form** (linear, curved, clusters), **direction** (positive/negative), **strength** (how tightly points follow the pattern), and note **outliers** and clusters. A strong linear association has points close to a line; weak association scatters widely.",
          },
          {
            heading: "Residuals",
            body: "For a linear model $\\hat{y} = a + bx$, the residual $e = y - \\hat{y}$ measures prediction error. Large residuals flag points the line predicts poorly — candidates for outliers or influential points that bend the fit.",
          },
        ],
        keyFormulas: [
          { name: "Residual", statement: "$e = y - \\hat{y}$" },
          { name: "Linear model", statement: "$\\hat{y} = a + bx$" },
        ],
        workedExample: {
          problem: "Line $\\hat{y} = 2x + 1$; observed point $(3, 9)$. Find the residual.",
          solution: "$\\hat{y} = 2(3) + 1 = 7$; residual $= 9 - 7 = 2$ — the point sits $2$ units above the line.",
        },
      },
      questions: [
        {
          id: "apst-u1-bivariate-data-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a scatterplot, points clustered tightly around a line indicate ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "weak association"
                    },
                    {
                              "id": "b",
                              "text": "strong association"
                    },
                    {
                              "id": "c",
                              "text": "no association"
                    },
                    {
                              "id": "d",
                              "text": "nonlinear form"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Strength",
                              "statement": "Tight clustering = strong."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Points close to the pattern line mean a strong association.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Strong association",
          "commonErrors": [
                    "Confusing tightness with direction."
          ]
},
        },
        {
          id: "apst-u1-bivariate-data-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "For $\\hat{y} = 3x - 2$ and observed $y = 10$ at $x = 4$, the residual is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$-4$"
                    },
                    {
                              "id": "b",
                              "text": "$4$"
                    },
                    {
                              "id": "c",
                              "text": "$22$"
                    },
                    {
                              "id": "d",
                              "text": "$0$"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Residual",
                              "statement": "$\\hat{y} = 3(4) - 2 = 10$; residual $= y - \\hat{y} = 10 - 10$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$\\hat{y} = 10$, observed $10$, so residual $= 0$ — the point lies on the line.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$0$",
          "commonErrors": [
                    "Arithmetic error computing $\\hat{y}$."
          ]
},
        },
        {
          id: "apst-u1-bivariate-data-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Line $\\hat{y} = x + 5$; at $x = 3$ observed $y = 12$. Enter the residual.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Residual",
                              "answer": 4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Residual",
                              "statement": "$\\hat{y} = 3 + 5 = 8$; $e = 12 - 8$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Residual $= 12 - 8 = 4$ — observed value is $4$ above prediction.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$e = 4$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$4$",
          "commonErrors": [
                    "Reversing subtraction order ($\\hat{y} - y$)."
          ]
},
        },
        {
          id: "apst-u1-bivariate-data-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A scatterplot of study hours vs test scores shows a strong positive linear association. (a) Interpret the direction. (b) Can you conclude more studying causes higher scores? Explain.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Association",
                              "statement": "Both increase together."
                    },
                    {
                              "kind": "concept",
                              "name": "Causation",
                              "statement": "Needs experiment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Positive association: more study hours correspond to higher scores.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Not necessarily — observational data could have a lurking variable (motivation, prior knowledge). Only a randomized experiment establishes causation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Clear association-vs-causation distinction.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Positive association; causation not established",
          "commonErrors": [
                    "Claiming causation from the scatterplot alone."
          ]
},
        },
      ],
    },
  ],
};
