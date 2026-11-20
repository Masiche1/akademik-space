import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "cipum-u1-lesson-1-2",
  code: "1-2",
  title: "Functions: Domain, Range and Composition",
  goal: "I CAN determine domains, ranges and composite functions at Pre-U standard.",
  standards: [
    "Cambridge Pre-U Mathematics 9794",
    "Pure Mathematics: functions",
  ],
  vocabulary: [
    { term: "Domain", definition: "Set of input values a function accepts." },
    { term: "Range", definition: "Set of output values a function produces." },
    {
      term: "Composite function",
      definition: "Function formed by applying one function then another.",
    },
    {
      term: "Inverse function",
      definition: "Function undoing another: $f^{-1}(f(x)) = x$.",
    },
    {
      term: "One-to-one",
      definition: "Function where each output comes from exactly one input.",
    },
  ],
  concepts: [
    {
      id: "cipum-u1-s2-functions",
      title: "Functions and composition",
      skill: "Find domains, ranges and composite/inverse functions.",
      lesson: {
        sections: [
          {
            heading: "Domain and range",
            body: "Domain restrictions come from: denominators (can't be zero), square roots (can't be negative), and logarithms (argument must be positive). Range requires analysing the function's behaviour — complete the square for quadratics, consider asymptotes for rational functions.",
          },
          {
            heading: "Composition and inverse",
            body: "Composite: $(f \\circ g)(x) = f(g(x))$ — apply g first. Inverse exists only for one-to-one functions; to find it, write $y = f(x)$ and rearrange for $x$ in terms of $y$. Domain of inverse = range of original.",
          },
        ],
        keyFormulas: [
          { name: "Composite", statement: "$(f \\circ g)(x) = f(g(x))$" },
          {
            name: "Inverse",
            statement: "$f^{-1}(f(x)) = x$; exists only if one-to-one",
          },
        ],
        workedExample: {
          problem: "Find the domain of $f(x) = \\frac{1}{\\sqrt{x-2}}$.",
          solution:
            "Need $x - 2 > 0$ (square root positive) and $\\sqrt{x-2} \\neq 0$. So $x > 2$.",
        },
      },
      questions: [
        {
          id: "cipum-u1-fn-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the domain of $f(x) = \\frac{1}{x-3}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All real $x$" },
              { id: "b", text: "$x \\neq 3$" },
              { id: "c", text: "$x > 3$" },
              { id: "d", text: "$x \\geq 3$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Domain",
                statement: "Values where function is defined.",
              },
            ],
            steps: [
              {
                reasoning: "Denominator can't be zero: $x - 3 \\neq 0$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x \\neq 3$",
          },
        },
        {
          id: "cipum-u1-fn-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "If $f(x) = 2x + 1$ and $g(x) = x^2$, find $(f \\circ g)(x)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Composition",
                statement: "$(f \\circ g)(x) = f(g(x))$.",
              },
            ],
            steps: [
              {
                reasoning: "$f(g(x)) = f(x^2) = 2x^2 + 1$.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "$2x^2 + 1$",
          },
        },
        {
          id: "cipum-u1-fn-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the inverse of $f(x) = \\frac{2x+1}{x-1}$, stating its domain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Inverse",
                statement: "Rearrange $y = f(x)$ for $x$.",
              },
            ],
            steps: [
              {
                reasoning: "$y(x-1) = 2x+1 \\Rightarrow yx - y = 2x + 1$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$x(y-2) = y+1 \\Rightarrow x = \\frac{y+1}{y-2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$f^{-1}(x) = \\frac{x+1}{x-2}$, domain $x \\neq 2$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$f^{-1}(x) = \\frac{x+1}{x-2}$, $x \\neq 2$",
          },
        },
        {
          id: "cipum-u1-fn-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the range of $f(x) = x^2 - 4x + 7$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Range via completing square",
                statement: "Vertex gives minimum/maximum.",
              },
            ],
            steps: [
              {
                reasoning: "Complete square: $f(x) = (x-2)^2 + 3$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Minimum value is 3 at $x = 2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "As $x \\to \\pm\\infty$, $f(x) \\to \\infty$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Range: $f(x) \\geq 3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f(x) \\geq 3$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipum-u1-functions-notes",
      title: "Functions — revision notes",
      summary:
        "Domain restrictions, composite/inverse, range via completing square.",
      sections: [
        {
          heading: "Key skills",
          body: "Denominators, roots and logs set domain restrictions; completing the square reveals range; inverses need one-to-one functions.",
        },
        {
          heading: "Exam tips",
          body: "For range questions, always complete the square first — it immediately shows the vertex value.",
        },
      ],
    },
  ],
};
