import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "apcab-u2-lesson-2-1",
  code: "2-1",
  title: "The Derivative",
  goal: "I CAN compute derivatives from the limit definition and interpret them as rates of change.",
  standards: ["DER-1"],
  vocabulary: [
    { term: "Derivative", definition: "$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$ — the instantaneous rate of change." },
    { term: "Tangent line", definition: "The line touching a curve at a point with slope $f'(a)$." },
    { term: "Secant line", definition: "A line through two points on a curve; its slope approximates the derivative." },
    { term: "Velocity", definition: "The derivative of position; $v = s'(t)$." },
    { term: "Differentiable", definition: "A function whose derivative exists at a point — must be continuous and have no corner or cusp there." },
  ],
  concepts: [
    {
      id: "apcab-u2-derivative-definition",
      title: "The derivative as a limit",
      skill: "Apply the limit definition and interpret derivatives as slopes and rates.",
      lesson: {
        sections: [
          {
            heading: "Definition",
            body: "The derivative of $f$ at $x$ is $f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$. Geometrically it is the slope of the tangent line — the limit of secant slopes as the second point slides toward the first.",
          },
          {
            heading: "Computing from the definition",
            body: "Expand $f(x+h)$, subtract $f(x)$, divide by $h$, then take the limit. For $f(x) = x^2$: $\\frac{(x+h)^2 - x^2}{h} = \\frac{2xh + h^2}{h} = 2x + h \\to 2x$. The derivative of $x^2$ is $2x$.",
          },
        ],
        keyFormulas: [
          { name: "Definition", statement: "$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h)-f(x)}{h}$" },
          { name: "Power rule preview", statement: "$\\frac{d}{dx} x^n = nx^{n-1}$" },
        ],
        workedExample: {
          problem: "Use the definition to find $f'(x)$ for $f(x) = 3x - 5$.",
          solution: "$\\frac{[3(x+h) - 5] - (3x - 5)}{h} = \\frac{3h}{h} = 3$ for all $h \\ne 0$. So $f'(x) = 3$ — a constant slope, matching the line's steepness.",
        },
      },
      questions: [
        {
          id: "apcab-u2-derivative-definition-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The derivative $f'(x)$ gives the slope of ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the secant line"
                    },
                    {
                              "id": "b",
                              "text": "the tangent line"
                    },
                    {
                              "id": "c",
                              "text": "the $x$-axis"
                    },
                    {
                              "id": "d",
                              "text": "the normal line only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Derivative",
                              "statement": "Instantaneous rate of change = tangent slope."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$f'(x)$ is the limit of secant slopes, i.e., the tangent line's slope at $x$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) tangent line",
          "commonErrors": [
                    "Confusing the secant (two points) with the tangent (limit)."
          ]
},
        },
        {
          id: "apcab-u2-derivative-definition-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "If position is $s(t) = t^2$ meters, what is the velocity at $t = 3$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$3$ m/s"
                    },
                    {
                              "id": "b",
                              "text": "$6$ m/s"
                    },
                    {
                              "id": "c",
                              "text": "$9$ m/s"
                    },
                    {
                              "id": "d",
                              "text": "$2$ m/s"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Velocity = derivative",
                              "statement": "$v = s'(t) = 2t$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$v(3) = 2(3) = 6$ m/s.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$6$ m/s",
          "commonErrors": [
                    "Differentiating to $2t^2$ or forgetting to evaluate at $t=3$."
          ]
},
        },
        {
          id: "apcab-u2-derivative-definition-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Use the limit definition to find $f'(2)$ for $f(x) = x^2$. Enter the value.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "$f'(2)$",
                              "answer": 4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Definition",
                              "statement": "$f'(x) = \\lim_{h\\to0}\\frac{(x+h)^2-x^2}{h} = 2x$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$f'(x) = 2x$, so $f'(2) = 4$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct value $4$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$4$",
          "commonErrors": [
                    "Sign errors when expanding $(x+h)^2$."
          ]
},
        },
        {
          id: "apcab-u2-derivative-definition-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Let $f(x) = |x|$. (a) Is $f$ differentiable at $x = 0$? (b) Explain using one-sided derivatives or the graph.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Differentiability",
                              "statement": "Requires a single tangent slope — no corners."
                    },
                    {
                              "kind": "concept",
                              "name": "Corner",
                              "statement": "$|x|$ has slopes $-1$ and $+1$ meeting at the origin."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) No, $f$ is not differentiable at $0$.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Left derivative is $-1$, right derivative is $+1$; they disagree, so no single tangent slope exists — a corner.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Graph shows a sharp point at the origin confirming the corner.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Not differentiable at $x=0$ (corner)",
          "commonErrors": [
                    "Saying $|x|$ has derivative $0$ or undefined everywhere."
          ]
},
        },
      ],
    },
  ],
};
