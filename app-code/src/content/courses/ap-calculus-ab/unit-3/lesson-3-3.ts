import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "apcab-u3-lesson-3-3",
  code: "3-3",
  title: "Introduction to Integration",
  goal: "I CAN interpret the definite integral as accumulation and apply the Fundamental Theorem.",
  standards: ["INT-1"],
  vocabulary: [
    { term: "Antiderivative", definition: "A function $F$ with $F' = f$; the general antiderivative is $F + C$." },
    { term: "Definite integral", definition: "$\\int_a^b f(x)\\,dx$ — signed area under $f$ from $a$ to $b$." },
    { term: "Riemann sum", definition: "Approximation of area by rectangles; the integral is the limit as widths shrink." },
    { term: "Fundamental Theorem of Calculus", definition: "$\\int_a^b f(x)\\,dx = F(b) - F(a)$ where $F' = f$." },
    { term: "Accumulation", definition: "The integral sums up a rate of change to give total change." },
  ],
  concepts: [
    {
      id: "apcab-u3-integral-intro",
      title: "Integrals as accumulation",
      skill: "Connect the definite integral to area and net change.",
      lesson: {
        sections: [
          {
            heading: "From derivative to integral",
            body: "Integration reverses differentiation. The definite integral $\\int_a^b f(x)\\,dx$ measures the net signed area between $f$ and the $x$-axis — positive where $f > 0$, negative where $f < 0$. It also answers 'total change': if $v(t)$ is velocity, $\\int_a^b v(t)\\,dt$ is displacement.",
          },
          {
            heading: "Fundamental Theorem",
            body: "Part 1: $\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)$. Part 2: $\\int_a^b f(x)\\,dx = F(b) - F(a)$ for any antiderivative $F$. This turns area problems into antidifferentiation — the computational heart of integral calculus.",
          },
        ],
        keyFormulas: [
          { name: "FTC Part 2", statement: "$\\int_a^b f(x)\\,dx = F(b) - F(a)$" },
          { name: "FTC Part 1", statement: "$\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)$" },
        ],
        workedExample: {
          problem: "Evaluate $\\int_0^2 3x^2\\,dx$.",
          solution: "An antiderivative of $3x^2$ is $x^3$. So $\\int_0^2 3x^2\\,dx = 2^3 - 0^3 = 8$ — the net area under $y = 3x^2$ from $0$ to $2$.",
        },
      },
      questions: [
        {
          id: "apcab-u3-integral-intro-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "$\\int_a^b f(x)\\,dx$ represents ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the slope of $f$"
                    },
                    {
                              "id": "b",
                              "text": "the net signed area under $f$ from $a$ to $b$"
                    },
                    {
                              "id": "c",
                              "text": "$f(b) - f(a)$ always"
                    },
                    {
                              "id": "d",
                              "text": "the maximum of $f$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Definite integral",
                              "statement": "Accumulated signed area / net change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The integral sums $f$ over $[a,b]$ — area above the axis minus area below.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b)",
          "commonErrors": [
                    "Confusing the integral with a derivative or endpoint difference."
          ]
},
        },
        {
          id: "apcab-u3-integral-intro-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is $\\frac{d}{dx}\\int_3^x (t^2 + 1)\\,dt$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$x^2 + 1$"
                    },
                    {
                              "id": "b",
                              "text": "$\\frac{x^3}{3} + x$"
                    },
                    {
                              "id": "c",
                              "text": "$x^2$"
                    },
                    {
                              "id": "d",
                              "text": "$2x$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "FTC Part 1",
                              "statement": "Derivative of integral with variable upper limit is the integrand."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$\\frac{d}{dx}\\int_3^x f(t)\\,dt = f(x) = x^2 + 1$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$x^2 + 1$",
          "commonErrors": [
                    "Differentiating the antiderivative instead of reading off the integrand."
          ]
},
        },
        {
          id: "apcab-u3-integral-intro-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate $\\int_1^3 (2x + 1)\\,dx$. Enter the value.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Integral",
                              "answer": 14
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "FTC Part 2",
                              "statement": "Antiderivative $x^2 + x$; evaluate $F(3) - F(1)$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Antiderivative is $x^2 + x$; $F(3) = 12$ and $F(1) = 2$, so $12 - 2 = 10$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Value $10$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$10$",
          "commonErrors": [
                    "Arithmetic error in $F(b) - F(a)$."
          ]
},
        },
        {
          id: "apcab-u3-integral-intro-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A particle moves with velocity $v(t) = 6t$ m/s for $0 \\le t \\le 4$. (a) Write the integral for displacement. (b) Evaluate it. (c) Interpret the result.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Integral as accumulation",
                              "statement": "Displacement = $\\int v\\,dt$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Displacement $= \\int_0^4 6t\\,dt$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Antiderivative $3t^2$; $3(16) - 0 = 48$ m.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) The particle travels $48$ meters in $4$ seconds; since $v \\ge 0$ throughout, distance equals displacement.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "$48$ m",
          "commonErrors": [
                    "Using $v^2$ or forgetting units."
          ]
},
        },
      ],
    },
  ],
};
