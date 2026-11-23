import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "apcbc-u2-lesson-2-2",
  code: "2-2",
  title: "Polar Coordinates and Curves",
  goal: "I CAN convert between polar and rectangular forms and find polar derivatives.",
  standards: ["POL-1"],
  vocabulary: [
    { term: "Polar coordinates", definition: "Point given by $(r, \\theta)$ — distance from origin and angle from positive $x$-axis." },
    { term: "Conversion", definition: "$x = r\\cos\\theta$, $y = r\\sin\\theta$, $r = \\sqrt{x^2+y^2}$, $\\tan\\theta = \\frac{y}{x}$." },
    { term: "Polar curve", definition: "Graph of $r = f(\\theta)$ — e.g., $r = 2$ is a circle, $r = 1 + \\cos\\theta$ a cardioid." },
    { term: "Polar derivative", definition: "$\\frac{dy}{dx} = \\frac{r'\\sin\\theta + r\\cos\\theta}{r'\\cos\\theta - r\\sin\\theta}$." },
  ],
  concepts: [
    {
      id: "apcbc-u2-polar",
      title: "Polar coordinates",
      skill: "Convert representations and analyze polar curves.",
      lesson: {
        sections: [
          {
            heading: "Polar vs rectangular",
            body: "Polar $(r,\\theta)$ describes a point by distance and angle; rectangular $(x,y)$ by horizontal and vertical position. Convert with $x = r\\cos\\theta$ and $y = r\\sin\\theta$; the inverse uses $r = \\sqrt{x^2+y^2}$. A full circle is simply $r = \\text{constant}$.",
          },
          {
            heading: "Slopes in polar",
            body: "Treat $x(\\theta) = r(\\theta)\\cos\\theta$ and $y(\\theta) = r(\\theta)\\sin\\theta$ as parametric equations in $\\theta$. Then $\\frac{dy}{dx} = \\frac{dy/d\\theta}{dx/d\\theta}$, computed with the product rule — messier than Cartesian but mechanical.",
          },
        ],
        keyFormulas: [
          { name: "Conversion", statement: "$x = r\\cos\\theta$, $y = r\\sin\\theta$" },
          { name: "Polar slope", statement: "$\\frac{dy}{dx} = \\frac{r'\\sin\\theta + r\\cos\\theta}{r'\\cos\\theta - r\\sin\\theta}$" },
        ],
        workedExample: {
          problem: "Convert the polar point $(2, \\frac{\\pi}{3})$ to rectangular.",
          solution: "$x = 2\\cos\\frac{\\pi}{3} = 2 \\cdot \\frac{1}{2} = 1$; $y = 2\\sin\\frac{\\pi}{3} = 2 \\cdot \\frac{\\sqrt{3}}{2} = \\sqrt{3}$. Point: $(1, \\sqrt{3})$.",
        },
      },
      questions: [
        {
          id: "apcbc-u2-polar-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The polar point $(3, 0)$ in rectangular coordinates is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$(0, 3)$"
                    },
                    {
                              "id": "b",
                              "text": "$(3, 0)$"
                    },
                    {
                              "id": "c",
                              "text": "$(3, 3)$"
                    },
                    {
                              "id": "d",
                              "text": "$(0, 0)$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Conversion",
                              "statement": "$x = 3\\cos 0 = 3$, $y = 3\\sin 0 = 0$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$(3,0)$ — on the positive $x$-axis at distance $3$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$(3, 0)$",
          "commonErrors": [
                    "Swapping $r$ and $\\theta$ roles."
          ]
},
        },
        {
          id: "apcbc-u2-polar-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The curve $r = 2$ is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a line"
                    },
                    {
                              "id": "b",
                              "text": "a circle of radius $2$"
                    },
                    {
                              "id": "c",
                              "text": "a cardioid"
                    },
                    {
                              "id": "d",
                              "text": "a spiral"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Polar curves",
                              "statement": "Constant $r$ means constant distance from origin."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Every point is distance $2$ from the origin — a circle of radius $2$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Circle radius $2$",
          "commonErrors": [
                    "Thinking $r$ is like $y$ in Cartesian."
          ]
},
        },
        {
          id: "apcbc-u2-polar-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Convert rectangular point $(0, 4)$ to polar $(r, \\theta)$. Enter $r$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "$r$",
                              "answer": 4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Conversion",
                              "statement": "$r = \\sqrt{0^2 + 4^2}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$r = 4$ (and $\\theta = \\frac{\\pi}{2}$).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$r = 4$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$4$",
          "commonErrors": [
                    "Forgetting $r$ is always non-negative distance."
          ]
},
        },
        {
          id: "apcbc-u2-polar-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "For the circle $r = 2\\cos\\theta$, find $\\frac{dy}{dx}$ at $\\theta = \\frac{\\pi}{4}$.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Polar slope",
                              "statement": "$r = 2\\cos\\theta$, $r' = -2\\sin\\theta$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$\\frac{dy}{dx} = \\frac{r'\\sin\\theta + r\\cos\\theta}{r'\\cos\\theta - r\\sin\\theta}$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "At $\\theta = \\frac{\\pi}{4}$: numerator $= -2(\\frac{\\sqrt2}{2})(\\frac{\\sqrt2}{2}) + 2(\\frac{\\sqrt2}{2})(\\frac{\\sqrt2}{2}) = 0$; denominator $= -2(\\frac{\\sqrt2}{2})(\\frac{\\sqrt2}{2}) - 2(\\frac{\\sqrt2}{2})(\\frac{\\sqrt2}{2}) = -2$. So $\\frac{dy}{dx} = \\frac{0}{-2} = 0$ — horizontal tangent at the top of the circle.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Slope $0$ with correct substitution.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$0$ (horizontal tangent)",
          "commonErrors": [
                    "Arithmetic slips with $\\frac{\\sqrt2}{2}$ values."
          ]
},
        },
      ],
    },
  ],
};
