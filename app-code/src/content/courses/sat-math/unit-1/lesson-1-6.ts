import type { Lesson } from "../../../types.ts";

export const lesson16: Lesson = {
  id: "satm-u1-lesson-1-6",
  code: "1-6",
  title: "Absolute Value Equations",
  goal: "I CAN solve absolute value equations.",
  standards: ["SAT M 2.x"],
  vocabulary: [
    { term: "Absolute value", definition: "$|x|$ = distance from 0 — always non-negative." },
    { term: "|x| = a", definition: "Two solutions: $x = a$ or $x = -a$ (if $a \\ge 0$)." },
    { term: "|x - c| = a", definition: "Distance from $c$ equals $a$ — two points." },
    { term: "No solution", definition: "$|x| = -3$ impossible — absolute value can't be negative." },
    { term: "Geometric interpretation", definition: "Points on number line at distance $a$ from $c$." },
    { term: "Inequality form", definition: "$|x - c| \\le a$ = interval $[c-a, c+a]$." },
  ],
  concepts: [
    {
      id: "satm-u1-absolute-value",
      title: "Absolute value",
      skill: "Solve absolute value equations and interpret geometrically.",
      lesson: {
        sections: [
          {
            heading: "Absolute value meaning",
            body: "$|x|$ is the DISTANCE from 0 — always non-negative. $|x - c|$ is distance from $c$. $|x| = 5$ means $x$ is 5 units from 0 → $x = 5$ or $x = -5$. $|x - 3| = 4$ means $x$ is 4 units from 3 → $x = 7$ or $x = -1$.",
          },
          {
            heading: "Solving strategy",
            body: "For $|expression| = a$: if $a < 0$, no solution; if $a \\ge 0$, split into two equations: $expression = a$ OR $expression = -a$. Solve each, check both. For inequalities: $|x - c| \\le a$ gives interval $[c-a, c+a]$; $|x - c| > a$ gives $x < c-a$ or $x > c+a$.",
          },
        ],
        keyFormulas: [
          { name: "Solve", statement: "$|x-c| = a \\Rightarrow x = c+a$ or $x = c-a$" },
          { name: "Inequality", statement: "$|x-c| \\le a \\Rightarrow c-a \\le x \\le c+a$" },
        ],
        workedExample: {
          problem: "Solve $|x + 2| = 5$.",
          solution: "Split: $x + 2 = 5$ → $x = 3$; or $x + 2 = -5$ → $x = -7$. Check: $|3+2| = 5$ ✓; $|-7+2| = |-5| = 5$ ✓.",
        },
      },
      questions: [
        {
          id: "satm-u1-absolute-value-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "$|x|$ represents ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "x squared"
                    },
                    {
                              "id": "b",
                              "text": "distance from 0 — always non-negative"
                    },
                    {
                              "id": "c",
                              "text": "x or -x randomly"
                    },
                    {
                              "id": "d",
                              "text": "the sign of x"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Absolute value",
                              "statement": "Distance from zero."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$|x|$ = distance from 0 on number line — $|{-3}| = 3$, $|5| = 5$; always $\\ge 0$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Distance from 0",
          "commonErrors": [
                    "Thinking it preserves sign."
          ]
},
        },
        {
          id: "satm-u1-absolute-value-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The equation $|x - 4| = 3$ has solutions ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$x = 7$ only"
                    },
                    {
                              "id": "b",
                              "text": "$x = 1$ and $x = 7$"
                    },
                    {
                              "id": "c",
                              "text": "$x = -1$ and $x = 7$"
                    },
                    {
                              "id": "d",
                              "text": "no solution"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Two cases",
                              "statement": "$x-4=3$ or $x-4=-3$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$x - 4 = 3$ → $x = 7$; $x - 4 = -3$ → $x = 1$. Both check: $|7-4|=3$, $|1-4|=|-3|=3$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$x = 1, 7$",
          "commonErrors": [
                    "Finding only one solution."
          ]
},
        },
        {
          id: "satm-u1-absolute-value-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $|2x - 1| = 7$. Enter the larger solution.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Larger x",
                              "answer": 4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Split into cases",
                              "statement": "$2x-1=7$ or $2x-1=-7$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$2x - 1 = 7$ → $2x = 8$ → $x = 4$; $2x - 1 = -7$ → $2x = -6$ → $x = -3$. Larger: $x = 4$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer: 4.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$4$",
          "commonErrors": [
                    "Forgetting the negative case or solving wrong."
          ]
},
        },
        {
          id: "satm-u1-absolute-value-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why $|x| = -5$ has no solution, geometrically and algebraically.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Absolute value range",
                              "statement": "Always non-negative."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Geometric: $|x|$ is distance from 0 — distance can't be negative; $-5$ would mean '5 units in negative direction' which is meaningless for distance.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Algebraic: splitting gives $x = -5$ or $x = 5$ — but checking: $|-5| = 5 \\ne -5$ and $|5| = 5 \\ne -5$; both fail because absolute value is always positive.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Contrast: $|x| = 5$ works (distance 5 either direction); $|x| = -5$ impossible — the right side must be $\\ge 0$.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "No solution — absolute value can't equal negative",
          "commonErrors": [
                    "Splitting without checking if RHS is negative."
          ]
},
        },
      ],
    },
  ],
};
