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
              { id: "a", text: "$x \\neq 3$" },
              { id: "b", text: "$x \\geq 3$" },
              { id: "c", text: "$x > 3$" },
              { id: "d", text: "All real $x$" },
            ],
            correctChoiceId: "a",
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
        {
          id: "cipum-u1-fn-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the domain of $f(x) = \\frac{1}{x+2}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x \\neq -2$" },
              { id: "b", text: "$x \\neq 2$" },
              { id: "c", text: "$x > -2$" },
              { id: "d", text: "All real $x$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Domain",
                statement: "Denominator cannot be zero.",
              },
            ],
            steps: [
              {
                reasoning: "$x + 2 \\neq 0 \\Rightarrow x \\neq -2$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x \\neq -2$",
          },
        },
        {
          id: "cipum-u1-fn-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "If $f(x) = 3x - 2$, find $f(4)$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Function evaluation",
                statement: "Substitute the input value into the rule.",
              },
            ],
            steps: [
              {
                reasoning: "$f(4) = 3(4) - 2 = 12 - 2$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$f(4) = 10$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10",
          },
        },
        {
          id: "cipum-u1-fn-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $f(x) = x + 3$ and $g(x) = 2x$, what is $(f \\circ g)(x)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2x^2 + 6x$" },
              { id: "b", text: "$2x + 6$" },
              { id: "c", text: "$2x + 3$" },
              { id: "d", text: "$x + 6$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Composition",
                statement: "$(f \\circ g)(x) = f(g(x))$ — apply $g$ first.",
              },
            ],
            steps: [
              {
                reasoning: "$f(g(x)) = f(2x) = 2x + 3$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$2x + 3$",
          },
        },
        {
          id: "cipum-u1-fn-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "If $f(x) = 2x + 1$, find $f^{-1}(7)$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Inverse",
                statement: "$f^{-1}(y)$ is the $x$ with $f(x) = y$.",
              },
            ],
            steps: [
              {
                reasoning: "Solve $2x + 1 = 7 \\Rightarrow 2x = 6$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$x = 3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cipum-u1-fn-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the domain of $f(x) = \\sqrt{x - 5}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x \\geq 5$" },
              { id: "b", text: "All real $x$" },
              { id: "c", text: "$x \\geq -5$" },
              { id: "d", text: "$x > 5$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Domain",
                statement: "Square-root argument must be non-negative.",
              },
            ],
            steps: [
              {
                reasoning: "$x - 5 \\geq 0 \\Rightarrow x \\geq 5$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x \\geq 5$",
          },
        },
        {
          id: "cipum-u1-fn-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "If $f(x) = x^2 - 1$ and $g(x) = x + 2$, find $(f \\circ g)(x)$.",
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
                reasoning: "$f(g(x)) = f(x+2) = (x+2)^2 - 1$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Expand: $x^2 + 4x + 4 - 1 = x^2 + 4x + 3$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$(f \\circ g)(x) = x^2 + 4x + 3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x^2 + 4x + 3$",
          },
        },
        {
          id: "cipum-u1-fn-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "If $f(x) = x^2 + 1$ and $g(x) = 2x$, find $g(f(3))$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 20 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Composition",
                statement: "Evaluate inner function first.",
              },
            ],
            steps: [
              {
                reasoning: "$f(3) = 3^2 + 1 = 10$; then $g(10) = 2(10)$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$g(f(3)) = 20$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20",
          },
        },
        {
          id: "cipum-u1-fn-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these functions is one-to-one?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$g(x) = 2x + 1$" },
              { id: "b", text: "$k(x) = \\sin x$" },
              { id: "c", text: "$h(x) = |x|$" },
              { id: "d", text: "$f(x) = x^2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "One-to-one",
                statement: "Each output comes from exactly one input.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Only $g$ is strictly increasing; the others repeat outputs.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$g(x) = 2x + 1$",
          },
        },
        {
          id: "cipum-u1-fn-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the range of $f(x) = x^2 + 4x + 1$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Range via completing square",
                statement: "Vertex gives the minimum value.",
              },
            ],
            steps: [
              {
                reasoning: "Complete the square: $f(x) = (x+2)^2 - 3$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Minimum value is $-3$ at $x = -2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "As $x \\to \\pm\\infty$, $f(x) \\to \\infty$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Range: $f(x) \\geq -3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f(x) \\geq -3$",
          },
        },
        {
          id: "cipum-u1-fn-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "If $f(x) = \\frac{x+1}{x-3}$, find the value of $x$ for which $f(x) = 3$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Solving function equations",
                statement: "Set $f(x)$ equal to the target and solve.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\frac{x+1}{x-3} = 3 \\Rightarrow x + 1 = 3x - 9$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$2x = 10 \\Rightarrow x = 5$; check $x \\neq 3$ ✓.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$x = 5$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 5$",
          },
        },
        {
          id: "cipum-u1-fn-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the inverse of $f(x) = \\frac{3x - 1}{x + 2}$, stating its domain.",
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
                reasoning: "$y(x+2) = 3x - 1 \\Rightarrow yx + 2y = 3x - 1$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$x(y - 3) = -1 - 2y \\Rightarrow x = \\frac{2y+1}{3-y}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$f^{-1}(x) = \\frac{2x+1}{3-x}$; denominator zero at $x = 3$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$f^{-1}(x) = \\frac{2x+1}{3-x}$, domain $x \\neq 3$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$f^{-1}(x) = \\frac{2x+1}{3-x}$, $x \\neq 3$",
          },
        },
        {
          id: "cipum-u1-fn-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the range of $f(x) = x^2 - 6x + 10$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All real $f(x)$" },
              { id: "b", text: "$f(x) \\geq 1$" },
              { id: "c", text: "$f(x) \\geq 10$" },
              { id: "d", text: "$f(x) \\leq 1$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Range via completing square",
                statement: "$f(x) = (x-3)^2 + 1 \\geq 1$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Complete the square: $(x-3)^2 + 1$, minimum value 1.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$f(x) \\geq 1$",
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
