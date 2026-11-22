import type { Lesson } from "../../../types.ts";

export const lesson132: Lesson = {
  id: "cial-m-u3-lesson-3-2",
  code: "3-2",
  title: "Binomial expansion",
  goal: "I CAN expand expressions using the binomial theorem for positive integer powers.",
  standards: ["9709 Pure Mathematics 1: binomial expansion"],
  vocabulary: [
    {
      term: "Binomial theorem",
      definition: "Formula for expanding $(a+b)^n$ for positive integer n.",
    },
    {
      term: "General term",
      definition: "$T_{r+1} = \\binom{n}{r}a^{n-r}b^r$ — the (r+1)th term.",
    },
    {
      term: "Coefficient",
      definition: "The numerical factor of a term in an expansion.",
    },
    {
      term: "Pascal's triangle",
      definition: "Triangular array of binomial coefficients.",
    },
    {
      term: "Independent term",
      definition: "Term with no variable — found by setting exponent to zero.",
    },
    {
      term: "Expansion validity",
      definition:
        "Theorem applies for integer n ≥ 0; valid for |x| < 1 when n non-integer.",
    },
  ],
  concepts: [
    {
      id: "cial-m-u3-binomial",
      title: "Binomial theorem",
      skill: "Expand $(a+b)^n$ and find specific terms or coefficients.",
      lesson: {
        sections: [
          {
            heading: "The expansion",
            body: "$(a+b)^n = \\sum_{r=0}^{n} \\binom{n}{r} a^{n-r} b^r$. For $(1+x)^n$: $(1+x)^n = 1 + nx + \\frac{n(n-1)}{2!}x^2 + \\frac{n(n-1)(n-2)}{3!}x^3 + \\cdots$ — valid for $|x|<1$ when n is not a positive integer.",
          },
          {
            heading: "General term",
            body: "The term containing $x^r$ in the expansion of $(a+bx)^n$ is $\\binom{n}{r} a^{n-r} (bx)^r$. Identify r by matching the power of x, then compute the coefficient.",
          },
          {
            heading: "Finding terms and coefficients",
            body: "Coefficient of $x^k$: find which r gives power k. Constant term: set exponent of variable to zero and solve for r. For expansions like $(2 + 3x)^5$, substitute carefully.",
          },
        ],
        keyFormulas: [
          {
            name: "Binomial",
            statement: "$(a+b)^n = \\sum \\binom{n}{r} a^{n-r} b^r$",
          },
          {
            name: "General term",
            statement: "$T_{r+1} = \\binom{n}{r}a^{n-r}b^r$",
          },
        ],
        workedExample: {
          problem: "Find the coefficient of $x^3$ in $(2 + x)^6$.",
          solution:
            "$T_{r+1} = \\binom{6}{r} 2^{6-r} x^r$. For $x^3$: $r=3$. Coefficient $= \\binom{6}{3} 2^3 = 20 \\times 8 = 160$.",
        },
      },
      questions: [
        {
          id: "cial-m-u3-bn-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the general term of $(a+b)^n$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\binom{n}{r}a^r b^{n-r}$" },
              { id: "b", text: "$\\frac{n!}{r!}a^n b^r$" },
              { id: "c", text: "$\\binom{n}{r}a^{n-r}b^r$" },
              { id: "d", text: "$na^{n-1}b$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "General term",
                statement: "$T_{r+1} = \\binom{n}{r}a^{n-r}b^r$.",
              },
            ],
            steps: [
              {
                reasoning: "Correct formula: a gets n−r, b gets r.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $\\binom{n}{r}a^{n-r}b^r$",
            commonErrors: ["Swapping exponents of a and b."],
          },
        },
        {
          id: "cial-m-u3-bn-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the coefficient of $x^2$ in $(1 + 2x)^5$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Coefficient",
                statement: "Match power of x, compute binomial coefficient.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$r=2$: $\\binom{5}{2}(2x)^2 = 10 \\times 4x^2 = 40x^2$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Coefficient = $40$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$40$",
            commonErrors: ["Forgetting to raise the coefficient 2 to power r."],
          },
        },
        {
          id: "cial-m-u3-bn-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the constant term in the expansion of $(x^2 + \\frac{2}{x})^6$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Constant term",
                statement: "Set exponent of x to zero and solve for r.",
              },
            ],
            steps: [
              {
                reasoning:
                  "General term: $\\binom{6}{r}(x^2)^{6-r}(\\frac{2}{x})^r = \\binom{6}{r} 2^r x^{12-3r}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Set $12 - 3r = 0$: $r = 4$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\binom{6}{4} \\times 2^4 = 15 \\times 16 = 240$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Constant term = $240$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$240$",
            commonErrors: ["Setting exponent to 1 instead of 0."],
          },
        },
        {
          id: "cial-m-u3-bn-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Binomial expansion.",
          parts: [
            {
              label: "a",
              prompt: "State the binomial theorem for $(a+b)^n$.",
              marks: 1,
            },
            { label: "b", prompt: "Expand $(1+x)^4$ up to $x^3$.", marks: 3 },
            {
              label: "c",
              prompt: "Find coefficient of $x^3$ in $(2+3x)^5$.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "State the validity condition for non-integer n.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Binomial",
                statement: "Theorem+expansion+coefficient+validity.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$(a+b)^n = \\sum \\binom{n}{r}a^{n-r}b^r$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Terms computed correctly.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Coefficients correct.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$1 + 4x + 6x^2 + 4x^3$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$\\binom{5}{3}2^2(3x)^3$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$= 10 \\times 4 \\times 27 = 1080$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Coefficient $1080$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "$|x| < 1$ stated.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "For non-integer n.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Condition complete.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) theorem (b) $1+4x+6x^2+4x^3$ (c) $1080$ (d) $|x|<1$",
          },
        },
        {
          id: "cial-m-u3-bn-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the coefficient of $x$ in the expansion of $(1 + x)^5$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1$" },
              { id: "b", text: "$25$" },
              { id: "c", text: "$5$" },
              { id: "d", text: "$10$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Coefficient",
                statement: "Coefficient of $x^r$ is $\\binom{n}{r}$ for $(1+x)^n$.",
              },
            ],
            steps: [
              { reasoning: "$\\binom{5}{1} = 5$.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $5$",
            commonErrors: ["Using $\\binom{5}{0} = 1$ or $n^2$."],
          },
        },
        {
          id: "cial-m-u3-bn-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the coefficient of $x^2$ in the expansion of $(1 + x)^6$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$6$" },
              { id: "b", text: "$15$" },
              { id: "c", text: "$30$" },
              { id: "d", text: "$12$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Coefficient",
                statement: "Match power of $x$; coefficient is $\\binom{n}{r}$.",
              },
            ],
            steps: [
              {
                reasoning: "Coefficient of $x^2$ is $\\binom{6}{2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\binom{6}{2} = \\frac{6 \\times 5}{2} = 15$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$15$",
            commonErrors: ["Using $\\binom{6}{3}$ or $6 \\times 2$."],
          },
        },
        {
          id: "cial-m-u3-bn-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the coefficient of $x^2$ in the expansion of $(1 + x)^3$?",
          response: {
            type: "numeric",
            parts: [{ label: "coefficient", answer: 3, tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Coefficient",
                statement: "Coefficient is $\\binom{n}{r}$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\binom{3}{2} = 3$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$3$",
            commonErrors: ["Answering the whole coefficient with powers of 1 confused."],
          },
        },
        {
          id: "cial-m-u3-bn-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the coefficient of $x^3$ in the expansion of $(1 + 2x)^4$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Coefficient",
                statement:
                  "Term is $\\binom{n}{r}a^{n-r}(bx)^r$ — include $b^r$.",
              },
            ],
            steps: [
              {
                reasoning: "$r = 3$: $\\binom{4}{3}(2x)^3 = 4 \\times 8x^3 = 32x^3$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Coefficient $= 32$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct coefficient.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$32$",
            commonErrors: ["Forgetting to raise 2 to the power 3."],
          },
        },
        {
          id: "cial-m-u3-bn-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Find the coefficient of $x^2$ in the expansion of $(2 + x)^5$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$10$" },
              { id: "b", text: "$40$" },
              { id: "c", text: "$160$" },
              { id: "d", text: "$80$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Coefficient",
                statement:
                  "$T_{r+1} = \\binom{n}{r}a^{n-r}b^r$ with $r = 2$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\binom{5}{2} \\times 2^3 = 10 \\times 8 = 80$.",
                working: "80",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct coefficient.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$80$",
            commonErrors: ["Using $2^2$ instead of $2^{5-2} = 2^3$."],
          },
        },
        {
          id: "cial-m-u3-bn-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the constant term in the expansion of $\\left(x + \\frac{2}{x}\\right)^4$.",
          response: {
            type: "numeric",
            parts: [{ label: "constant term", answer: 24, tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Constant term",
                statement: "Set exponent of $x$ to zero and solve for $r$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "General term: $\\binom{4}{r}x^{4-r}\\left(\\frac{2}{x}\\right)^r = \\binom{4}{r}2^r x^{4-2r}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Set $4 - 2r = 0$: $r = 2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\binom{4}{2} \\times 2^2 = 6 \\times 4 = 24$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$24$",
            commonErrors: ["Setting exponent to 1 instead of 0."],
          },
        },
        {
          id: "cial-m-u3-bn-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the coefficient of $x^4$ in the expansion of $(1 - x)^6$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Coefficient",
                statement:
                  "Term is $\\binom{n}{r}a^{n-r}(-x)^r$ — track the sign.",
              },
            ],
            steps: [
              {
                reasoning: "$r = 4$: $\\binom{6}{4}(-x)^4 = 15x^4$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Even power of $-1$ is positive: coefficient $+15$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Coefficient $= 15$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct coefficient.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$15$",
            commonErrors: ["Forgetting the sign — $(-x)^4$ is positive."],
          },
        },
        {
          id: "cial-m-u3-bn-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many terms are there in the expansion of $(a + b)^n$ for positive integer $n$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$n + 1$" },
              { id: "b", text: "$n$" },
              { id: "c", text: "$n^2$" },
              { id: "d", text: "$2n$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Binomial",
                statement: "Sum runs $r = 0$ to $n$, giving $n + 1$ terms.",
              },
            ],
            steps: [
              { reasoning: "Terms: $r = 0, 1, \\ldots, n$ — total $n + 1$.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $n + 1$",
            commonErrors: ["Answering $n$ — forgetting the $r=0$ term."],
          },
        },
        {
          id: "cial-m-u3-bn-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Find the coefficient of $x^3$ in the expansion of $(2 + 3x)^4$.",
          response: {
            type: "numeric",
            parts: [{ label: "coefficient", answer: 216, tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Coefficient",
                statement: "Term: $\\binom{4}{r}2^{4-r}(3x)^r$ with $r = 3$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\binom{4}{3} \\times 2^1 \\times 3^3 = 4 \\times 2 \\times 27$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= 8 \\times 27 = 216$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Coefficient $= 216$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct coefficient.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$216$",
            commonErrors: ["Using $3^4$ or forgetting $2^{4-r}$."],
          },
        },
        {
          id: "cial-m-u3-bn-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Find the term independent of $x$ in the expansion of $(x^2 + \\frac{1}{x})^9$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$36$" },
              { id: "b", text: "$84$" },
              { id: "c", text: "$126$" },
              { id: "d", text: "$252$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Constant term",
                statement: "Exponent of $x$: $2(9-r) - r = 18 - 3r = 0 \\Rightarrow r = 6$.",
              },
            ],
            steps: [
              {
                reasoning: "$r = 6$: coefficient $\\binom{9}{6} = \\binom{9}{3} = 84$.",
                working: "84",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct term.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$84$",
            commonErrors: ["Solving $18 - 3r = 0$ incorrectly."],
          },
        },
        {
          id: "cial-m-u3-bn-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Binomial expansion.",
          parts: [
            {
              label: "a",
              prompt: "Expand $(1 + x)^4$ fully.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Find the coefficient of $x^2$ in $(1 + 2x)^5$.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Find the constant term in $(x + \\frac{1}{x})^6$.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Binomial",
                statement: "Expand + coefficient + constant term.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$1 + 4x + 6x^2 + 4x^3 + x^4$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "All coefficients correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$\\binom{5}{2}(2x)^2 = 10 \\times 4x^2 = 40x^2$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Coefficient $= 40$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Exponent: $(6-r) - r = 6 - 2r = 0 \\Rightarrow r = 3$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$\\binom{6}{3} = 20$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $1+4x+6x^2+4x^3+x^4$ (b) $40$ (c) $20$",
          },
        },
        {
          id: "cial-m-u3-bn-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Binomial expansion — mixed practice.",
          parts: [
            {
              label: "a",
              prompt: "State the general term of $(a + b)^n$.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Find the coefficient of $x^3$ in $(1 - 2x)^5$.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Find the coefficient of $x^2$ in $(3 + x)^6$.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "State the validity condition for non-integer $n$.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Binomial",
                statement: "General term + coefficient + validity.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$T_{r+1} = \\binom{n}{r}a^{n-r}b^r$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$\\binom{5}{3}(1)^2(-2x)^3 = 10 \\times (-8)x^3 = -80x^3$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Coefficient $= -80$ (negative).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct signed coefficient.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$\\binom{6}{2}3^4 = 15 \\times 81 = 1215$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$= 1215$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Correct coefficient.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "$|x| < 1$ stated.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "For non-integer $n$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Condition complete.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) general term (b) $-80$ (c) $1215$ (d) $|x|<1$",
          },
        },
      ],
    },
    {
      id: "cial-m-u3-series",
      title: "Series, method of differences and recurrence",
      skill:
        "Evaluate series, use method of differences and work with recurrence relations.",
      lesson: {
        sections: [
          {
            heading: "Sigma notation",
            body: "$\\sum_{r=1}^{n} f(r)$ sums f(r) from r=1 to n. Useful for AP/GP sums and telescoping series where intermediate terms cancel.",
          },
          {
            heading: "Method of differences",
            body: "If $u_r = f(r+1) - f(r)$, then $\\sum_{r=1}^{n} u_r = f(n+1) - f(1)$ — telescoping. Write the summand as a difference of consecutive terms.",
          },
          {
            heading: "Recurrence relations",
            body: "$u_{n+1} = f(u_n)$ defines a sequence recursively. Iterate to find terms; look for patterns to guess closed forms; prove by induction for rigorous answers.",
          },
        ],
        keyFormulas: [
          {
            name: "Method of differences",
            statement: "$\\sum [f(r+1)-f(r)] = f(n+1) - f(1)$",
          },
        ],
        workedExample: {
          problem: "Find $\\sum_{r=1}^{n} \\frac{1}{r(r+1)}$.",
          solution:
            "$\\frac{1}{r(r+1)} = \\frac{1}{r} - \\frac{1}{r+1}$. Sum telescopes: $1 - \\frac{1}{n+1} = \\frac{n}{n+1}$.",
        },
      },
      questions: [
        {
          id: "cial-m-u3-md-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does $\\sum_{r=1}^{n} f(r)$ mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Product of f(r) for r = 1 to n" },
              { id: "b", text: "Derivative of f" },
              { id: "c", text: "Sum of f(r) for r = 1 to n" },
              { id: "d", text: "f applied n times" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sigma notation",
                statement: "Sum of terms f(1) through f(n).",
              },
            ],
            steps: [
              { reasoning: "Sigma = summation.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Sum of f(r) from r=1 to n",
            commonErrors: ["Reading as product."],
          },
        },
        {
          id: "cial-m-u3-md-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate $\\sum_{r=1}^{4} r^2$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Sigma",
                statement: "Sum each term explicitly.",
              },
            ],
            steps: [
              { reasoning: "$1 + 4 + 9 + 16$.", marks: 1, markCode: "M" },
              { reasoning: "$= 30$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$30$",
            commonErrors: ["Summing r instead of r²."],
          },
        },
        {
          id: "cial-m-u3-md-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Use the method of differences to find $\\sum_{r=1}^{n} \\frac{2}{r(r+2)}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Method of differences",
                statement: "Partial fractions → telescoping sum.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\frac{2}{r(r+2)} = \\frac{1}{r} - \\frac{1}{r+2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Sum telescopes to $1 + \\frac{1}{2} - \\frac{1}{n+1} - \\frac{1}{n+2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$= \\frac{3}{2} - \\frac{1}{n+1} - \\frac{1}{n+2}$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct expression.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{3}{2} - \\frac{1}{n+1} - \\frac{1}{n+2}$",
            commonErrors: ["Incorrect partial fraction split."],
          },
        },
        {
          id: "cial-m-u3-md-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Series and recurrence.",
          parts: [
            { label: "a", prompt: "Evaluate $\\sum_{r=1}^{4} r^2$.", marks: 2 },
            {
              label: "b",
              prompt: "What is the method of differences?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Find $\\sum_{r=1}^{n} \\frac{1}{r(r+1)}$.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Define a recurrence relation with an example.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Series",
                statement: "Sigma+differences+recurrence.",
              },
            ],
            steps: [
              { part: "a", reasoning: "$1+4+9+16$.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$=30$.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "Telescoping: f(r+1)−f(r).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Sum = f(n+1)−f(1).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$\\frac{1}{r} - \\frac{1}{r+1}$ split.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Telescopes to $1 - \\frac{1}{n+1}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$= \\frac{n}{n+1}$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "$u_{n+1} = f(u_n)$ defined.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Example e.g. $u_{n+1}=2u_n+1$.",
                marks: 1,
                markCode: "M",
              },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "(a) $30$ (b) telescoping (c) $n/(n+1)$ (d) recursive definition",
          },
        },
        {
          id: "cial-m-u3-md-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does $\\sum_{r=1}^{n} r$ mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$n^2$" },
              { id: "b", text: "$n!$" },
              { id: "c", text: "$\\frac{n}{2}$" },
              { id: "d", text: "$1 + 2 + 3 + \\cdots + n$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sigma notation",
                statement: "Sum of terms $f(1)$ through $f(n)$.",
              },
            ],
            steps: [
              {
                reasoning: "Sum of first $n$ positive integers.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $1 + 2 + \\cdots + n$",
            commonErrors: ["Reading as product or factorial."],
          },
        },
        {
          id: "cial-m-u3-md-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate $\\sum_{r=1}^{3} r$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$9$" },
              { id: "b", text: "$3$" },
              { id: "c", text: "$12$" },
              { id: "d", text: "$6$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Sigma",
                statement: "Sum each term explicitly.",
              },
            ],
            steps: [
              { reasoning: "$1 + 2 + 3 = 6$.", marks: 1, markCode: "M" },
              { reasoning: "Correct total.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6$",
            commonErrors: ["Summing $r^2$ or multiplying."],
          },
        },
        {
          id: "cial-m-u3-md-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $\\sum_{r=1}^{4} 2r$.",
          response: {
            type: "numeric",
            parts: [{ label: "sum", answer: 20, tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Sigma",
                statement: "Sum each term explicitly.",
              },
            ],
            steps: [
              {
                reasoning: "$2(1 + 2 + 3 + 4) = 2 \\times 10 = 20$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$20$",
            commonErrors: ["Summing $r$ not $2r$."],
          },
        },
        {
          id: "cial-m-u3-md-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find $\\sum_{r=1}^{n} \\frac{1}{r(r+1)}$ using the method of differences.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Method of differences",
                statement: "Partial fractions → telescoping sum.",
              },
            ],
            steps: [
              {
                reasoning: "$\\frac{1}{r(r+1)} = \\frac{1}{r} - \\frac{1}{r+1}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Telescopes to $1 - \\frac{1}{n+1}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= \\frac{n}{n+1}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{n}{n+1}$",
            commonErrors: ["Incorrect partial fraction split."],
          },
        },
        {
          id: "cial-m-u3-md-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The sum $\\sum_{r=1}^{n}(2r - 1)$ equals",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$n^2$" },
              { id: "b", text: "$n(n+1)$" },
              { id: "c", text: "$\\frac{n^2}{2}$" },
              { id: "d", text: "$2n^2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Sigma",
                statement: "$\\sum(2r-1) = 2\\sum r - \\sum 1 = n(n+1) - n = n^2$.",
              },
            ],
            steps: [
              {
                reasoning: "Sum of first $n$ odd numbers is $n^2$.",
                working: "n^2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct result.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$n^2$",
            commonErrors: ["Forgetting the $-1$ inside the summand."],
          },
        },
        {
          id: "cial-m-u3-md-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate $\\sum_{r=1}^{5} r(r+1)$.",
          response: {
            type: "numeric",
            parts: [{ label: "sum", answer: 70, tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Sigma",
                statement: "Expand $r(r+1) = r^2 + r$ or sum directly.",
              },
            ],
            steps: [
              {
                reasoning: "$\\sum r^2 = 55$ and $\\sum r = 15$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$55 + 15 = 70$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct total.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$70$",
            commonErrors: ["Summing $r$ instead of $r(r+1)$."],
          },
        },
        {
          id: "cial-m-u3-md-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Use the method of differences to find $\\sum_{r=1}^{n} \\frac{3}{r(r+3)}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Method of differences",
                statement: "Partial fractions → telescoping sum.",
              },
            ],
            steps: [
              {
                reasoning: "$\\frac{3}{r(r+3)} = \\frac{1}{r} - \\frac{1}{r+3}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Telescopes leaving $1 + \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{n+1} - \\frac{1}{n+2} - \\frac{1}{n+3}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= \\frac{11}{6} - \\frac{1}{n+1} - \\frac{1}{n+2} - \\frac{1}{n+3}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct expression.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$\\frac{11}{6} - \\frac{1}{n+1} - \\frac{1}{n+2} - \\frac{1}{n+3}$",
            commonErrors: ["Incorrect partial fraction coefficients."],
          },
        },
        {
          id: "cial-m-u3-md-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A sequence is defined by $u_1 = 2$ and $u_{n+1} = u_n + 3$. What is $u_4$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$14$" },
              { id: "b", text: "$8$" },
              { id: "c", text: "$11$" },
              { id: "d", text: "$5$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Recurrence",
                statement: "Iterate $u_{n+1} = f(u_n)$ from $u_1$.",
              },
            ],
            steps: [
              {
                reasoning: "$u_2 = 5, u_3 = 8, u_4 = 11$.",
                working: "11",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$11$",
            commonErrors: ["Counting terms wrong — $u_4$ needs 3 steps."],
          },
        },
        {
          id: "cial-m-u3-md-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "A sequence is defined by $u_1 = 3$ and $u_{n+1} = 2u_n - 1$. Find $u_4$.",
          response: {
            type: "numeric",
            parts: [{ label: "u4", answer: 17, tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Recurrence",
                statement: "Iterate the recurrence relation.",
              },
            ],
            steps: [
              {
                reasoning: "$u_2 = 2(3) - 1 = 5$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$u_3 = 2(5) - 1 = 9$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$u_4 = 2(9) - 1 = 17$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct term.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$17$",
            commonErrors: ["Arithmetic slip iterating — track each step."],
          },
        },
        {
          id: "cial-m-u3-md-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The sum $\\sum_{r=1}^{n}[f(r+1) - f(r)]$ equals",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$nf(n)$" },
              { id: "b", text: "$f(n+1) - f(1)$" },
              { id: "c", text: "$f(n) - f(1)$" },
              { id: "d", text: "$f(n+1)$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Method of differences",
                statement: "Telescoping sum: intermediate terms cancel.",
              },
            ],
            steps: [
              {
                reasoning: "All middle terms cancel leaving $f(n+1) - f(1)$.",
                working: "f(n+1) - f(1)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct result.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$f(n+1) - f(1)$",
            commonErrors: ["Off-by-one on the endpoints."],
          },
        },
        {
          id: "cial-m-u3-md-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Series and differences.",
          parts: [
            {
              label: "a",
              prompt: "Evaluate $\\sum_{r=1}^{5}(2r + 1)$.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "State the result of the method of differences.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Find $\\sum_{r=1}^{n} \\frac{1}{r(r+1)}$.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Series",
                statement: "Evaluate + telescoping + partial fractions.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Terms: $3 + 5 + 7 + 9 + 11 = 35$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Correct sum.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$\\sum[f(r+1) - f(r)] = f(n+1) - f(1)$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct statement.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$\\frac{1}{r} - \\frac{1}{r+1}$ telescopes to $\\frac{n}{n+1}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Correct result.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $35$ (b) telescoping (c) $n/(n+1)$",
          },
        },
        {
          id: "cial-m-u3-md-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Series and recurrence — mixed practice.",
          parts: [
            {
              label: "a",
              prompt: "Evaluate $\\sum_{r=1}^{4} r^2$.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Write $\\frac{1}{r(r+2)}$ as a difference of two fractions.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Find $\\sum_{r=1}^{n} \\frac{1}{r(r+2)}$.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Define a recurrence relation and give an example.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Series",
                statement: "Evaluate + partial fractions + telescoping + recurrence.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$1 + 4 + 9 + 16 = 30$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Correct total.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$\\frac{1}{r(r+2)} = \\frac{1}{2}\\left(\\frac{1}{r} - \\frac{1}{r+2}\\right)$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct split.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Telescopes to $\\frac{3}{4} - \\frac{1}{2}\\left(\\frac{1}{n+1} + \\frac{1}{n+2}\\right)$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Correct expression.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Simplified correctly.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "$u_{n+1} = f(u_n)$ defined with $u_1$ given.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Example e.g. $u_{n+1} = u_n + 2$, $u_1 = 1$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Correct definition.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $30$ (b) partial fractions (c) telescoped sum (d) recurrence defined",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-m-u3-series-notes",
      title: "Binomial expansion and series — revision notes",
      summary:
        "Binomial theorem, general term, method of differences, recurrence relations.",
      sections: [
        {
          heading: "Binomial",
          body: "$T_{r+1} = \\binom{n}{r}a^{n-r}b^r$. Match power of x to find r; compute coefficient. Constant term: set exponent to 0. Non-integer n needs $|x|<1$.",
        },
        {
          heading: "Series",
          body: "Method of differences: write summand as $f(r+1)-f(r)$ → telescopes to $f(n+1)-f(1)$. Recurrence: $u_{n+1}=f(u_n)$; iterate or prove by induction.",
        },
        {
          heading: "Exam checklist",
          body: "Index r vs r+1 in general term. Partial fractions before telescoping. Verify convergence conditions.",
        },
      ],
    },
  ],
};
