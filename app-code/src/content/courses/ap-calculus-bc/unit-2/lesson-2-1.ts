import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "apcbc-u2-lesson-2-1",
  code: "2-1",
  title: "Parametric Equations and Motion",
  goal: "I CAN eliminate the parameter, find derivatives, and analyze parametric motion.",
  standards: ["PAR-1"],
  vocabulary: [
    { term: "Parametric equations", definition: "$x = x(t)$, $y = y(t)$ — both coordinates functions of a parameter $t$." },
    { term: "Eliminating the parameter", definition: "Solve one equation for $t$ and substitute into the other to get $y(x)$." },
    { term: "Parametric derivative", definition: "$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$ — the chain rule in parametric form." },
    { term: "Speed", definition: "$\\sqrt{(dx/dt)^2 + (dy/dt)^2}$ — magnitude of the velocity vector." },
    { term: "Particle motion", definition: "Position $(x(t), y(t))$ traces a path; velocity is $(x'(t), y'(t))$." },
  ],
  concepts: [
    {
      id: "apcbc-u2-parametric",
      title: "Parametric equations",
      skill: "Convert between parametric and Cartesian forms and compute motion quantities.",
      lesson: {
        sections: [
          {
            heading: "Eliminating $t$",
            body: "From $x = t^2$ and $y = t^3$, solve $t = \\sqrt{x}$ (for $t \\ge 0$) and substitute: $y = x^{3/2}$. Not every parametrization eliminates cleanly — try solving the simpler equation for $t$.",
          },
          {
            heading: "Derivatives and motion",
            body: "$\\frac{dy}{dx} = \\frac{y'(t)}{x'(t)}$ gives the slope of the path. Speed is $\\sqrt{x'(t)^2 + y'(t)^2}$, and acceleration is $(x''(t), y''(t))$. For $x = \\cos t$, $y = \\sin t$ (the unit circle), $\\frac{dy}{dx} = \\frac{\\cos t}{-\\sin t} = -\\cot t$.",
          },
        ],
        keyFormulas: [
          { name: "Parametric derivative", statement: "$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$" },
          { name: "Speed", statement: "$v = \\sqrt{\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2}$" },
        ],
        workedExample: {
          problem: "For $x = t^2$, $y = t^3 - t$, find $\\frac{dy}{dx}$ at $t = 1$.",
          solution: "$\\frac{dx}{dt} = 2t$, $\\frac{dy}{dt} = 3t^2 - 1$. At $t=1$: $\\frac{dy}{dx} = \\frac{3 - 1}{2} = 1$.",
        },
      },
      questions: [
        {
          id: "apcbc-u2-parametric-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $x = t$, $y = t^2$, eliminating $t$ gives ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$y = x$"
                    },
                    {
                              "id": "b",
                              "text": "$y = x^2$"
                    },
                    {
                              "id": "c",
                              "text": "$y = x^3$"
                    },
                    {
                              "id": "d",
                              "text": "$x = y^2$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Substitute",
                              "statement": "$t = x$, so $y = x^2$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Direct substitution since $x = t$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$y = x^2$",
          "commonErrors": [
                    "Squaring the wrong variable or keeping $t$."
          ]
},
        },
        {
          id: "apcbc-u2-parametric-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "For $x = \\cos t$, $y = \\sin t$, what is $\\frac{dy}{dx}$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$\\tan t$"
                    },
                    {
                              "id": "b",
                              "text": "$-\\cot t$"
                    },
                    {
                              "id": "c",
                              "text": "$-\\tan t$"
                    },
                    {
                              "id": "d",
                              "text": "$\\cot t$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Parametric derivative",
                              "statement": "$\\frac{\\cos t}{-\\sin t} = -\\cot t$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$\\frac{dy/dt}{dx/dt} = \\frac{\\cos t}{-\\sin t} = -\\cot t$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$-\\cot t$",
          "commonErrors": [
                    "Sign error from $\\frac{d}{dt}\\cos t = -\\sin t$."
          ]
},
        },
        {
          id: "apcbc-u2-parametric-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "A particle has $x(t) = t^2$, $y(t) = 2t$. Find its speed at $t = 3$. Enter the value.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Speed",
                              "answer": 6.325,
                              "tolerance": 0.01
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Speed formula",
                              "statement": "$x'=2t$, $y'=2$; $v = \\sqrt{(2t)^2 + 4}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "At $t=3$: $v = \\sqrt{36 + 4} = \\sqrt{40} \\approx 6.32$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Speed $\\approx 6.32$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$6.32$",
          "commonErrors": [
                    "Adding components instead of using the Pythagorean form."
          ]
},
        },
        {
          id: "apcbc-u2-parametric-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "For the curve $x = e^t \\cos t$, $y = e^t \\sin t$ (a spiral), find $\\frac{dy}{dx}$ in terms of $t$.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Parametric derivative",
                              "statement": "Compute $x'(t)$ and $y'(t)$ via product rule."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$x' = e^t(\\cos t - \\sin t)$, $y' = e^t(\\sin t + \\cos t)$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$\\frac{dy}{dx} = \\frac{\\sin t + \\cos t}{\\cos t - \\sin t}$ — the $e^t$ factors cancel.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct simplified expression.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$\\frac{\\sin t + \\cos t}{\\cos t - \\sin t}$",
          "commonErrors": [
                    "Not canceling the common $e^t$ factor."
          ]
},
        },
      ],
    },
  ],
};
