import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "m12-u1-lesson-1-2",
  code: "1-2",
  title: "Inverse Functions and Composition",
  goal: "I CAN find inverses, verify them, and evaluate composite functions.",
  standards: ["F-BF.3", "F-BF.1"],
  vocabulary: [
    { term: "Inverse function", definition: "$f^{-1}$ undoes $f$: $f^{-1}(f(x)) = x$; found by swapping $x$ and $y$ and solving for $y$." },
    { term: "One-to-one", definition: "A function has an inverse only if each output comes from exactly one input (passes the horizontal line test)." },
    { term: "Composition", definition: "$(f \\circ g)(x) = f(g(x))$ — apply $g$ first, then $f$." },
    { term: "Domain of composite", definition: "$g(x)$ must land inside the domain of $f$." },
    { term: "Graph of inverse", definition: "The inverse's graph is the reflection of $f$'s graph across $y = x$." },
  ],
  concepts: [
    {
      id: "m12-u1-inverse-composition",
      title: "Inverses and composition",
      skill: "Find and verify inverses; evaluate $f(g(x))$ in the correct order.",
      lesson: {
        sections: [
          {
            heading: "Finding inverses",
            body: "Only **one-to-one** functions have inverses. To find $f^{-1}$: write $y = f(x)$, swap $x \\leftrightarrow y$, solve for $y$. Verify by composing: $f(f^{-1}(x)) = x$. For $f(x) = 2x + 3$: swap to $x = 2y + 3$, solve $y = \\frac{x-3}{2}$.",
          },
          {
            heading: "Composition",
            body: "$(f \\circ g)(x) = f(g(x))$ reads right-to-left: innermost function first. Unlike multiplication, composition is **not** commutative — $f(g(x)) \\ne g(f(x))$ in general. The domain of $f \\circ g$ requires $g(x)$ to be in $f$'s domain.",
          },
        ],
        keyFormulas: [
          { name: "Inverse", statement: "Swap $x,y$ and solve; verify $f(f^{-1}(x)) = x$" },
          { name: "Composition", statement: "$(f \\circ g)(x) = f(g(x))$ — rightmost first" },
        ],
        workedExample: {
          problem: "Find $f^{-1}$ for $f(x) = \\frac{x}{x-2}$ and verify.",
          solution: "$x = \\frac{y}{y-2} \\Rightarrow x(y-2) = y \\Rightarrow xy - 2x = y \\Rightarrow y(x-1) = 2x \\Rightarrow f^{-1}(x) = \\frac{2x}{x-1}$.",
        },
      },
      questions: [
        {
          id: "m12-u1-inverse-composition-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The inverse of $f(x) = x^3$ is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$f^{-1}(x) = \\sqrt[3]{x}$"
                    },
                    {
                              "id": "b",
                              "text": "$f^{-1}(x) = \\frac{1}{x^3}$"
                    },
                    {
                              "id": "c",
                              "text": "$f^{-1}(x) = x^{-3}$"
                    },
                    {
                              "id": "d",
                              "text": "It does not exist"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Undo the operation",
                              "statement": "Cube root undoes cubing; $f$ is one-to-one."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$f^{-1}(x) = \\sqrt[3]{x}$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(a)** $\\sqrt[3]{x}$",
          "commonErrors": [
                    "Reciprocating instead of taking the inverse operation."
          ]
},
        },
        {
          id: "m12-u1-inverse-composition-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "If $f(x) = 2x - 1$ and $g(x) = x^2$, then $(f \\circ g)(3)$ equals ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$17$"
                    },
                    {
                              "id": "b",
                              "text": "$11$"
                    },
                    {
                              "id": "c",
                              "text": "$35$"
                    },
                    {
                              "id": "d",
                              "text": "$7$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Rightmost first",
                              "statement": "$g(3) = 9$; $f(9) = 17$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$f(g(3)) = f(9) = 2(9) - 1 = 17$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct value.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** $17$",
          "commonErrors": [
                    "Computing $g(f(3))$ instead — composition order matters."
          ]
},
        },
        {
          id: "m12-u1-inverse-composition-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find $f^{-1}(7)$ for $f(x) = 3x + 4$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "$f^{-1}(7)$",
                              "answer": 1
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve $f(x) = 7$",
                              "statement": "$3x + 4 = 7 \\Rightarrow x = 1$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$f^{-1}(7) = 1$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct value.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$1$",
          "commonErrors": [
                    "Applying $f$ to $7$ instead of solving."
          ]
},
        },
        {
          id: "m12-u1-inverse-composition-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Let $f(x) = x^2 - 4$ for $x \\ge 0$ and $g(x) = \\sqrt{x}$. Find $(f \\circ g)(x)$, simplify, and state its domain.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Compose",
                              "statement": "$f(g(x)) = (\\sqrt{x})^2 - 4 = x - 4$."
                    },
                    {
                              "kind": "concept",
                              "name": "Domain",
                              "statement": "$g(x) = \\sqrt{x}$ needs $x \\ge 0$; $f$'s restricted domain is satisfied since $\\sqrt{x} \\ge 0$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$(f \\circ g)(x) = (\\sqrt{x})^2 - 4 = x - 4$ for $x \\ge 0$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Simplification valid because $\\sqrt{x} \\ge 0$ keeps $g(x)$ in $f$'s domain $x \\ge 0$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Domain of composite: $x \\ge 0$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$x - 4$ for $x \\ge 0$",
          "commonErrors": [
                    "Claiming domain is all reals — the inner square root restricts it."
          ]
},
        },
      ],
    },
  ],
};
