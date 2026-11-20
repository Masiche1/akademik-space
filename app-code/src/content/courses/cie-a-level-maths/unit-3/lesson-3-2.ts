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
              { id: "a", text: "$\\binom{n}{r}a^{n-r}b^r$" },
              { id: "b", text: "$\\binom{n}{r}a^r b^{n-r}$" },
              { id: "c", text: "$na^{n-1}b$" },
              { id: "d", text: "$\\frac{n!}{r!}a^n b^r$" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "Sum of f(r) for r = 1 to n" },
              { id: "b", text: "Product of f(r) for r = 1 to n" },
              { id: "c", text: "f applied n times" },
              { id: "d", text: "Derivative of f" },
            ],
            correctChoiceId: "a",
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
