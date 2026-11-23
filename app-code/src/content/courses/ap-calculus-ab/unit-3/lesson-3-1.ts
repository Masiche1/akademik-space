import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "apcab-u3-lesson-3-1",
  code: "3-1",
  title: "Mean Value Theorem and Extrema",
  goal: "I CAN apply the MVT and locate local extrema using first and second derivatives.",
  standards: ["MVT-1", "EXT-1"],
  vocabulary: [
    { term: "Rolle's theorem", definition: "If $f$ is continuous on $[a,b]$, differentiable on $(a,b)$, and $f(a)=f(b)$, then $f'(c)=0$ for some $c$." },
    { term: "Mean Value Theorem", definition: "Under the same conditions (without equal endpoints), $f'(c) = \\frac{f(b)-f(a)}{b-a}$ for some $c \\in (a,b)$." },
    { term: "Critical point", definition: "Where $f'(x) = 0$ or $f'(x)$ is undefined — candidates for extrema." },
    { term: "First derivative test", definition: "$f'$ changes $-$ to $+$ at $c$ $\\Rightarrow$ local min; $+$ to $-$ $\\Rightarrow$ local max." },
    { term: "Second derivative test", definition: "$f''(c) > 0$ $\\Rightarrow$ local min; $f''(c) < 0$ $\\Rightarrow$ local max at critical point $c$." },
  ],
  concepts: [
    {
      id: "apcab-u3-mvt-extrema",
      title: "MVT and extrema",
      skill: "Use derivative tests to find and classify critical points.",
      lesson: {
        sections: [
          {
            heading: "Mean Value Theorem",
            body: "If $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, some interior point $c$ has tangent parallel to the secant: $f'(c) = \\frac{f(b) - f(a)}{b - a}$. It guarantees a 'parallel tangent' exists — the analytical backbone of calculus.",
          },
          {
            heading: "Finding extrema",
            body: "Candidates for local extrema are critical points where $f' = 0$ or $f'$ is undefined. Classify with the first derivative test (sign change of $f'$) or second derivative test (sign of $f''$). For $f(x) = x^3 - 3x$: $f' = 3x^2 - 3 = 0$ at $x = \\pm 1$; $f'' = 6x$ gives $f''(-1) < 0$ (max) and $f''(1) > 0$ (min).",
          },
        ],
        keyFormulas: [
          { name: "MVT", statement: "$f'(c) = \\frac{f(b)-f(a)}{b-a}$ for some $c \\in (a,b)$" },
          { name: "Second derivative test", statement: "$f'(c)=0$: $f''(c)>0$ min, $f''(c)<0$ max, $f''(c)=0$ inconclusive" },
        ],
        workedExample: {
          problem: "Find and classify the critical points of $f(x) = x^3 - 3x^2$.",
          solution: "$f' = 3x^2 - 6x = 3x(x-2)$, so $x = 0$ and $x = 2$. $f'' = 6x - 6$: $f''(0) = -6 < 0$ (local max), $f''(2) = 6 > 0$ (local min).",
        },
      },
      questions: [
        {
          id: "apcab-u3-mvt-extrema-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Critical points of $f$ occur where ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$f(x) = 0$"
                    },
                    {
                              "id": "b",
                              "text": "$f'(x) = 0$ or $f'(x)$ undefined"
                    },
                    {
                              "id": "c",
                              "text": "$f''(x) = 0$"
                    },
                    {
                              "id": "d",
                              "text": "$f$ is continuous"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Critical point",
                              "statement": "Where the derivative is zero or undefined."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Extrema candidates are found from $f'$, not $f$ or $f''$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b)",
          "commonErrors": [
                    "Confusing critical points with roots of $f$."
          ]
},
        },
        {
          id: "apcab-u3-mvt-extrema-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "For $f(x) = x^2 - 4x + 1$, the vertex is at $x = $. What is it?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$-2$"
                    },
                    {
                              "id": "b",
                              "text": "$2$"
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
                              "kind": "method",
                              "name": "Solve $f'=0$",
                              "statement": "$f' = 2x - 4 = 0 \\Rightarrow x = 2$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$x = 2$; since $f'' = 2 > 0$ it is a minimum.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$2$",
          "commonErrors": [
                    "Sign error solving $2x - 4 = 0$."
          ]
},
        },
        {
          id: "apcab-u3-mvt-extrema-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "For $f(x) = x^3 - 12x$, find the $x$-value of the local maximum. Enter the value.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "$x$",
                              "answer": -2
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Critical points + test",
                              "statement": "$f' = 3x^2 - 12 = 0 \\Rightarrow x = \\pm 2$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$f'' = 6x$: $f''(-2) = -12 < 0$ so $x = -2$ is the local max; $f''(2) > 0$ is the min.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Local max at $x = -2$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$-2$",
          "commonErrors": [
                    "Picking the minimum instead of the maximum."
          ]
},
        },
        {
          id: "apcab-u3-mvt-extrema-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Verify the MVT for $f(x) = x^2$ on $[1, 3]$: find $c$ where $f'(c)$ equals the secant slope.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "MVT",
                              "statement": "$f'(c) = \\frac{f(3)-f(1)}{3-1} = \\frac{9-1}{2} = 4$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Secant slope $= 4$; $f'(x) = 2x$, so $2c = 4 \\Rightarrow c = 2$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Check $c = 2 \\in (1,3)$ — MVT satisfied.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct $c$ with verification stated.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$c = 2$",
          "commonErrors": [
                    "Using endpoints instead of the open interval, or solving $f'=4$ incorrectly."
          ]
},
        },
      ],
    },
  ],
};
