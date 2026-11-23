import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "apcab-u3-lesson-3-2",
  code: "3-2",
  title: "Curve Sketching and Optimization",
  goal: "I CAN use derivatives to sketch curves and solve optimization problems.",
  standards: ["SK-1", "OPT-1"],
  vocabulary: [
    { term: "Increasing/decreasing", definition: "$f' > 0$ on an interval $\\Rightarrow f$ increasing there; $f' < 0 \\Rightarrow$ decreasing." },
    { term: "Concavity", definition: "$f'' > 0 \\Rightarrow$ concave up; $f'' < 0 \\Rightarrow$ concave down." },
    { term: "Inflection point", definition: "Where concavity changes — typically where $f'' = 0$ and changes sign." },
    { term: "Optimization", definition: "Translate a word problem into a function, find critical points, and justify the optimum." },
    { term: "Closed interval extrema", definition: "Always check endpoints when optimizing on a closed interval." },
  ],
  concepts: [
    {
      id: "apcab-u3-curve-sketching",
      title: "Applications of the derivative",
      skill: "Analyze function behavior and solve max/min word problems.",
      lesson: {
        sections: [
          {
            heading: "Sketching with derivatives",
            body: "Use $f'$ for increasing/decreasing intervals and critical points, $f''$ for concavity and inflection points, and evaluate key points. The sign chart of $f'$ and $f''$ across critical values gives the complete shape.",
          },
          {
            heading: "Optimization",
            body: "Model the quantity to optimize as a function of one variable (use constraints to eliminate others), differentiate, find critical points, and compare with endpoints if the domain is closed. Justify that your answer is a max or min using the second derivative test or endpoint comparison.",
          },
        ],
        keyFormulas: [
          { name: "Monotonicity", statement: "$f'>0$ increasing, $f'<0$ decreasing" },
          { name: "Concavity", statement: "$f''>0$ concave up, $f''<0$ concave down" },
        ],
        workedExample: {
          problem: "A rectangle has perimeter $100$. Maximize its area.",
          solution: "$2l + 2w = 100 \\Rightarrow w = 50 - l$. Area $A = l(50 - l) = 50l - l^2$. $A' = 50 - 2l = 0 \\Rightarrow l = 25$, $w = 25$. $A'' = -2 < 0$ confirms a maximum: a $25 \\times 25$ square, area $625$.",
        },
      },
      questions: [
        {
          id: "apcab-u3-curve-sketching-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $f'(x) > 0$ on $(0, 4)$, then $f$ is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "decreasing"
                    },
                    {
                              "id": "b",
                              "text": "increasing"
                    },
                    {
                              "id": "c",
                              "text": "concave up"
                    },
                    {
                              "id": "d",
                              "text": "constant"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Sign of $f'$",
                              "statement": "Positive derivative means rising graph."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$f' > 0$ means the function increases on the interval.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) increasing",
          "commonErrors": [
                    "Confusing $f'$ sign with $f''$ concavity."
          ]
},
        },
        {
          id: "apcab-u3-curve-sketching-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Where is $f(x) = x^3 - 3x$ concave up?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$x < 0$"
                    },
                    {
                              "id": "b",
                              "text": "$x > 0$"
                    },
                    {
                              "id": "c",
                              "text": "All $x$"
                    },
                    {
                              "id": "d",
                              "text": "Nowhere"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Second derivative",
                              "statement": "$f'' = 6x$; concave up when $f'' > 0$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$6x > 0$ when $x > 0$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$x > 0$",
          "commonErrors": [
                    "Using $f'$ instead of $f''$ for concavity."
          ]
},
        },
        {
          id: "apcab-u3-curve-sketching-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "A box with a square base and no top has volume $32\\text{ ft}^3$. What base side length minimizes surface area? Enter the side length.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Side",
                              "answer": 4,
                              "unit": "ft"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "model",
                              "name": "Optimize",
                              "statement": "$V = x^2 h = 32 \\Rightarrow h = 32/x^2$; $S = x^2 + 4xh = x^2 + 128/x$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$S' = 2x - 128/x^2 = 0 \\Rightarrow 2x^3 = 128 \\Rightarrow x = 4$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Side length $4$ ft (min since $S \\to \\infty$ at boundaries).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$4$ ft",
          "commonErrors": [
                    "Including a top face or mishandling the constraint."
          ]
},
        },
        {
          id: "apcab-u3-curve-sketching-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the absolute maximum and minimum of $f(x) = x^3 - 3x$ on $[-2, 2]$.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Closed interval method",
                              "statement": "Check critical points and endpoints."
                    },
                    {
                              "kind": "concept",
                              "name": "Critical points",
                              "statement": "$f' = 3x^2 - 3 = 0 \\Rightarrow x = \\pm 1$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Values: $f(-2) = -2$, $f(-1) = 2$, $f(1) = -2$, $f(2) = 2$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Absolute max $= 2$ (at $x = -1$ and $x = 2$); absolute min $= -2$ (at $x = -2$ and $x = 1$).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both extrema correctly identified.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Max $2$, min $-2$",
          "commonErrors": [
                    "Forgetting to check endpoints."
          ]
},
        },
      ],
    },
  ],
};
