import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "cipum-u1-lesson-1-3",
  code: "1-3",
  title: "Sequences, Series and Binomial Expansion",
  goal: "I CAN work with arithmetic/geometric sequences, sigma notation and binomial expansion at Pre-U standard.",
  standards: [
    "Cambridge Pre-U Mathematics 9794",
    "Pure Mathematics: sequences and series",
  ],
  vocabulary: [
    {
      term: "Arithmetic sequence",
      definition: "Sequence with constant difference between terms.",
    },
    {
      term: "Geometric sequence",
      definition: "Sequence with constant ratio between terms.",
    },
    {
      term: "Sigma notation",
      definition: "Compact notation for sums of sequences.",
    },
    {
      term: "Binomial expansion",
      definition: "Expansion of $(a+b)^n$ using coefficients.",
    },
    { term: "Convergence", definition: "Sum approaching a finite limit." },
  ],
  concepts: [
    {
      id: "cipum-u1-s3-series",
      title: "Sequences, series and binomial theorem",
      skill: "Sum series, use sigma notation and expand binomial expressions.",
      lesson: {
        sections: [
          {
            heading: "Series and sigma",
            body: "Arithmetic series: $S_n = \\frac{n}{2}[2a + (n-1)d]$. Geometric series: $S_n = \\frac{a(1-r^n)}{1-r}$ for $r \\neq 1$; infinite sum converges only if $|r| < 1$, giving $S_\\infty = \\frac{a}{1-r}$. Sigma notation $\\sum_{k=1}^{n} u_k$ sums terms $u_1$ to $u_n$.",
          },
          {
            heading: "Binomial expansion",
            body: "$(a+b)^n = \\sum_{r=0}^{n} \\binom{n}{r} a^{n-r} b^r$ for positive integer $n$. For fractional/negative $n$, the expansion is infinite and valid only for $|b/a| < 1$ — used for approximations.",
          },
        ],
        keyFormulas: [
          {
            name: "Geometric sum",
            statement:
              "$S_n = \\frac{a(1-r^n)}{1-r}$; $S_\\infty = \\frac{a}{1-r}$ if $|r|<1$",
          },
          {
            name: "Binomial",
            statement: "$(a+b)^n = \\sum \\binom{n}{r} a^{n-r}b^r$",
          },
        ],
        workedExample: {
          problem:
            "Find the sum to infinity of $9 + 3 + 1 + \\frac{1}{3} + \\cdots$.",
          solution:
            "$a = 9$, $r = \\frac{1}{3}$, $|r| < 1$: $S_\\infty = \\frac{9}{1 - 1/3} = \\frac{27}{2} = 13.5$.",
        },
      },
      questions: [
        {
          id: "cipum-u1-se-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the common ratio of the geometric sequence $2, 6, 18, 54, \\ldots$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2" },
              { id: "b", text: "3" },
              { id: "c", text: "4" },
              { id: "d", text: "6" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Geometric ratio",
                statement: "Constant multiplier between terms.",
              },
            ],
            steps: [
              { reasoning: "$6/2 = 18/6 = 3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cipum-u1-se-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the sum of the first 10 terms of the arithmetic series $3 + 7 + 11 + \\cdots$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Arithmetic series",
                statement: "$S_n = \\frac{n}{2}[2a + (n-1)d]$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$a = 3$, $d = 4$, $S_{10} = \\frac{10}{2}[2(3) + 9(4)] = 5 \\times 42 = 210$.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "210",
          },
        },
        {
          id: "cipum-u1-se-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Does the geometric series $1 + \\frac{2}{3} + \\frac{4}{9} + \\cdots$ have a sum to infinity? If so, find it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Convergence",
                statement: "Infinite sum exists only if $|r| < 1$.",
              },
            ],
            steps: [
              {
                reasoning: "$r = \\frac{2}{3}$, $|r| < 1$ so it converges.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$S_\\infty = \\frac{1}{1 - 2/3} = \\frac{1}{1/3} = 3$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Yes, $S_\\infty = 3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Yes, $S_\\infty = 3$",
          },
        },
        {
          id: "cipum-u1-se-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Expand $(2 - 3x)^4$ in ascending powers of $x$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Binomial theorem",
                statement: "$(a+b)^n = \\sum \\binom{n}{r} a^{n-r} b^r$.",
              },
            ],
            steps: [
              {
                reasoning: "Coefficients: $1, 4, 6, 4, 1$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$16 - 4 \\cdot 8 \\cdot 3x + 6 \\cdot 4 \\cdot 9x^2 - 4 \\cdot 2 \\cdot 27x^3 + 81x^4$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$16 - 96x + 216x^2 - 216x^3 + 81x^4$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Final expansion correct with alternating signs.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$16 - 96x + 216x^2 - 216x^3 + 81x^4$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipum-u1-series-notes",
      title: "Sequences and series — revision notes",
      summary:
        "AP/GP formulas, sigma notation, binomial expansion, convergence.",
      sections: [
        {
          heading: "Key skills",
          body: "Check |r| < 1 before using $S_\\infty$; for binomial expansions track signs carefully when b is negative.",
        },
        {
          heading: "Exam tips",
          body: "Write the general term $u_n$ first when finding series sums — it prevents substitution errors.",
        },
      ],
    },
  ],
};
