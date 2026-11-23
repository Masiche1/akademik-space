import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "apcab-u1-lesson-1-3",
  code: "1-3",
  title: "Continuity and the Intermediate Value Theorem",
  goal: "I CAN determine where a function is continuous and apply the IVT.",
  standards: ["LIM-3", "CONT-1"],
  vocabulary: [
    { term: "Continuous at a point", definition: "$\\lim_{x \\to a} f(x) = f(a)$ — the graph has no break there." },
    { term: "Continuity conditions", definition: "Three requirements: $f(a)$ defined, the two-sided limit exists, and they are equal." },
    { term: "Infinite discontinuity", definition: "A vertical asymptote where the function grows without bound." },
    { term: "Intermediate Value Theorem", definition: "If $f$ is continuous on $[a,b]$, it takes every value between $f(a)$ and $f(b)$." },
    { term: "Intermediate value", definition: "A value $k$ strictly between $f(a)$ and $f(b)$ guaranteed to be attained." },
  ],
  concepts: [
    {
      id: "apcab-u1-continuity",
      title: "Continuity",
      skill: "Check the three continuity conditions and use the IVT to guarantee roots.",
      lesson: {
        sections: [
          {
            heading: "Three conditions",
            body: "A function is continuous at $x = a$ only if: (1) $f(a)$ is defined, (2) $\\lim_{x \\to a} f(x)$ exists (left and right agree), and (3) the limit equals $f(a)$. A removable discontinuity fails (3); a jump fails (2); an asymptote fails (1) and (2).",
          },
          {
            heading: "Intermediate Value Theorem",
            body: "If $f$ is continuous on a closed interval $[a, b]$, then for any value $k$ between $f(a)$ and $f(b)$ there is at least one $c \\in [a,b]$ with $f(c) = k$. This guarantees roots without solving — used constantly in existence proofs.",
          },
        ],
        keyFormulas: [
          { name: "Continuity test", statement: "$f(a)$ defined \\;\\&\\; \\lim_{x\\to a}f(x) \\text{ exists} \\;\\&\\; \\lim_{x\\to a}f(x) = f(a)$" },
          { name: "IVT", statement: "$f$ continuous on $[a,b]$, $k$ between $f(a)$ and $f(b)$ $\\Rightarrow \\exists\\, c \\in [a,b]: f(c) = k$" },
        ],
        workedExample: {
          problem: "Show $f(x) = x^3 - x - 2$ has a root in $[1, 2]$.",
          solution: "$f(1) = 1 - 1 - 2 = -2$ and $f(2) = 8 - 2 - 2 = 4$. Since $f$ is a polynomial, it is continuous everywhere, and $0$ lies between $-2$ and $4$. By the IVT, some $c \\in (1,2)$ has $f(c) = 0$.",
        },
      },
      questions: [
        {
          id: "apcab-u1-continuity-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which condition failing makes $f(x) = \\frac{1}{x-2}$ discontinuous at $x = 2$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$f(2)$ is not defined"
                    },
                    {
                              "id": "b",
                              "text": "The limit does not exist"
                    },
                    {
                              "id": "c",
                              "text": "Both (a) and (b)"
                    },
                    {
                              "id": "d",
                              "text": "Neither — it is continuous"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Continuity",
                              "statement": "Requires defined value, existing limit, and equality."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$f(2)$ is undefined and the one-sided limits are $+\\infty$ and $-\\infty$ — an infinite discontinuity fails multiple conditions.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(c) Both",
          "commonErrors": [
                    "Thinking a function can be discontinuous for only one reason."
          ]
},
        },
        {
          id: "apcab-u1-continuity-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Is $f(x) = \\frac{x^2 - 1}{x - 1}$ continuous at $x = 1$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "No — $f(1)$ is undefined (removable discontinuity)"
                    },
                    {
                              "id": "b",
                              "text": "Yes — the limit exists"
                    },
                    {
                              "id": "c",
                              "text": "No — the limit does not exist"
                    },
                    {
                              "id": "d",
                              "text": "Cannot be determined"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Continuity",
                              "statement": "Requires $f(a)$ defined AND limit equal to $f(a)$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The limit is $2$ (removable), but $f(1)$ is undefined, so $f$ fails the first continuity condition — it is discontinuous as written.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) No — $f(1)$ undefined",
          "commonErrors": [
                    "Thinking an existing limit alone makes the function continuous."
          ]
},
        },
        {
          id: "apcab-u1-continuity-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "For $f(x) = x^2 - 4x + 3$ on $[0, 4]$, verify the IVT applies to $k = 0$. Enter the number of guaranteed roots in the interval (minimum).",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Roots",
                              "answer": 2
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "IVT",
                              "statement": "$f(0) = 3$, $f(4) = 3$; $f(2) = -1$ dips below $0$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$f(0) = 3 > 0$ and $f(2) = -1 < 0$: IVT guarantees a root in $(0,2)$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$f(2) = -1 < 0$ and $f(4) = 3 > 0$: another root in $(2,4)$ — minimum $2$ roots.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$2$ guaranteed roots",
          "commonErrors": [
                    "Only checking endpoints and missing the interior dip."
          ]
},
        },
        {
          id: "apcab-u1-continuity-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Define $f(x) = \\frac{x^2 - x - 6}{x - 3}$. (a) Find $\\lim_{x \\to 3} f(x)$. (b) Is $f$ continuous at $x = 3$? (c) What single value could be assigned to $f(3)$ to make it continuous?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Factor",
                              "statement": "$x^2 - x - 6 = (x-3)(x+2)$."
                    },
                    {
                              "kind": "definition",
                              "name": "Continuity",
                              "statement": "Define $f(3)$ equal to the limit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) $\\lim_{x \\to 3} \\frac{(x-3)(x+2)}{x-3} = \\lim (x+2) = 5$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) No — $f(3)$ is undefined, so continuity fails.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "(c) Assign $f(3) = 5$; then limit $=$ value and $f$ becomes continuous (removable discontinuity filled).",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) $5$; (b) No; (c) $f(3) = 5$",
          "commonErrors": [
                    "Forgetting that defining the value is what repairs the discontinuity."
          ]
},
        },
      ],
    },
  ],
};
