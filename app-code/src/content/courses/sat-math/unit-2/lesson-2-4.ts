import type { Lesson } from "../../../types.ts";

export const lesson24: Lesson = {
  id: "satm-u2-lesson-2-4",
  code: "2-4",
  title: "Analyzing Functions Algebraically",
  goal: "I CAN determine domain, range, and function properties.",
  standards: ["SAT M 2.x"],
  vocabulary: [
    { term: "Domain", definition: "All valid input values." },
    { term: "Range", definition: "All possible output values." },
    { term: "Restriction", definition: "What makes input invalid (division by 0, negative under root)." },
    { term: "Even/odd", definition: "Symmetry properties: f(-x) = ±f(x)." },
    { term: "Increasing/decreasing", definition: "Where function rises or falls." },
    { term: "Inverse", definition: "Function that undoes another: f⁻¹(f(x)) = x." },
  ],
  concepts: [
    {
      id: "satm-u2-function-analysis",
      title: "Function analysis",
      skill: "Determine domain, range, and properties of functions.",
      lesson: {
        sections: [
          {
            heading: "Domain restrictions",
            body: "Domain excludes values causing undefined results: **division by zero** ($\\frac{1}{x-2}$ excludes $x=2$), **square root of negative** ($\\sqrt{x-3}$ requires $x \\ge 3$), **log of non-positive** ($\\log(x)$ requires $x > 0$). Find restrictions first, then domain.",
          },
          {
            heading: "Range and inverses",
            body: "Range = all possible outputs — for quadratics, vertex gives min/max; for rational, horizontal asymptote often bounds range. Inverse $f^{-1}$ swaps input/output — exists only if function is one-to-one (passes horizontal line test). $f(f^{-1}(x)) = x$ and $f^{-1}(f(x)) = x$.",
          },
        ],
        keyFormulas: [
          { name: "Domain rules", statement: "No div by 0; $\\sqrt{\\cdot} \\ge 0$; $\\log(\\cdot) > 0$" },
          { name: "Inverse", statement: "$f(f^{-1}(x)) = x$" },
        ],
        workedExample: {
          problem: "Find the domain of $f(x) = \\frac{1}{x-2} + \\sqrt{x}$.",
          solution: "Two restrictions: $x - 2 \\ne 0$ → $x \\ne 2$ (division); $x \\ge 0$ (square root). Domain: $x \\ge 0$ AND $x \\ne 2$ → $[0, 2) \\cup (2, \\infty)$.",
        },
      },
      questions: [
        {
          id: "satm-u2-function-analysis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The domain of a function is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the outputs"
                    },
                    {
                              "id": "b",
                              "text": "all valid input values"
                    },
                    {
                              "id": "c",
                              "text": "the graph"
                    },
                    {
                              "id": "d",
                              "text": "the maximum"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Domain",
                              "statement": "Allowed inputs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Domain = all x-values for which the function is defined — excludes division by 0, negative roots, etc.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Valid inputs",
          "commonErrors": [
                    "Confusing with range."
          ]
},
        },
        {
          id: "satm-u2-function-analysis-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is excluded from the domain of $\\frac{1}{x+3}$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$x = 3$"
                    },
                    {
                              "id": "b",
                              "text": "$x = -3$"
                    },
                    {
                              "id": "c",
                              "text": "$x = 0$"
                    },
                    {
                              "id": "d",
                              "text": "nothing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Division restriction",
                              "statement": "Denominator ≠ 0."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Denominator $x + 3 = 0$ when $x = -3$ — excluded from domain.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$x = -3$",
          "commonErrors": [
                    "Sign error — set denominator to 0."
          ]
},
        },
        {
          id: "satm-u2-function-analysis-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the domain restriction for $f(x) = \\sqrt{2x - 6}$. What is the minimum x?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Min x",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Radicand ≥ 0",
                              "statement": "$2x - 6 \\ge 0$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$2x - 6 \\ge 0$ → $2x \\ge 6$ → $x \\ge 3$. Minimum $x = 3$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer: 3.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "3",
          "commonErrors": [
                    "Forgetting radicand must be non-negative."
          ]
},
        },
        {
          id: "satm-u2-function-analysis-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why $f(x) = x^2$ has no inverse function, but $f(x) = x^3$ does.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "One-to-one requirement",
                              "statement": "Horizontal line test."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$f(x) = x^2$ is NOT one-to-one — $f(2) = f(-2) = 4$; two inputs give same output, so can't uniquely reverse; fails horizontal line test.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$f(x) = x^3$ IS one-to-one — each output comes from exactly one input; $f^{-1}(x) = \\sqrt[3]{x}$ works for all real x.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Inverses require one-to-one — if two inputs map to same output, the inverse would be ambiguous.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "$x^2$ not one-to-one; $x^3$ is",
          "commonErrors": [
                    "Thinking all functions have inverses."
          ]
},
        },
      ],
    },
  ],
};
