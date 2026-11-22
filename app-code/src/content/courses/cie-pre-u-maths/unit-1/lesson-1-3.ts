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
              { id: "a", text: "6" },
              { id: "b", text: "4" },
              { id: "c", text: "2" },
              { id: "d", text: "3" },
            ],
            correctChoiceId: "d",
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
        {
          id: "cipum-u1-se-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the common difference of the arithmetic sequence $5, 9, 13, 17, \\ldots$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4" },
              { id: "b", text: "5" },
              { id: "c", text: "9" },
              { id: "d", text: "3" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Arithmetic sequence",
                statement: "Constant difference between consecutive terms.",
              },
            ],
            steps: [
              {
                reasoning: "$9 - 5 = 13 - 9 = 4$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "cipum-u1-se-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the sum of the first 20 terms of the geometric sequence $3, 6, 12, 24, \\ldots$",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3145725 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Geometric series",
                statement: "$S_n = \\frac{a(1-r^n)}{1-r}$.",
              },
            ],
            steps: [
              {
                reasoning: "$a = 3$, $r = 2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$S_{20} = \\frac{3(1-2^{20})}{1-2} = 3(2^{20}-1) = 3 \\times 1048575 = 3145725$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "3145725",
          },
        },
        {
          id: "cipum-u1-se-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Determine whether the geometric series $4 - 2 + 1 - \\frac{1}{2} + \\cdots$ has a sum to infinity, and find it if it does.",
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
                reasoning: "$r = -\\frac{1}{2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$|r| = \\frac{1}{2} < 1$, so the series converges.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$S_\\infty = \\frac{4}{1-(-1/2)} = \\frac{4}{3/2} = \\frac{8}{3}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Converges; $S_\\infty = \\frac{8}{3}$",
          },
        },
        {
          id: "cipum-u1-se-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the coefficient of $x^3$ in the expansion of $(1+x)^6$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "6" },
              { id: "b", text: "120" },
              { id: "c", text: "20" },
              { id: "d", text: "15" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Binomial theorem",
                statement: "Coefficient of $x^r$ is $\\binom{n}{r}$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\binom{6}{3} = \\frac{6 \\times 5 \\times 4}{3 \\times 2 \\times 1} = 20$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "20",
          },
        },
        {
          id: "cipum-u1-se-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the coefficient of $x^2$ in the expansion of $(1+2x)^4$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 24 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Binomial theorem",
                statement: "Term is $\\binom{n}{r}a^{n-r}b^r$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The $x^2$ term is $\\binom{4}{2}(2x)^2 = 6 \\times 4x^2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Coefficient $= 24$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "24",
          },
        },
        {
          id: "cipum-u1-se-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Expand $(1-2x)^5$ in ascending powers of $x$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Binomial theorem",
                statement: "$(a+b)^n = \\sum \\binom{n}{r}a^{n-r}b^r$.",
              },
            ],
            steps: [
              {
                reasoning: "Binomial coefficients for $n=5$: $1, 5, 10, 10, 5, 1$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$1 + 5(-2x) + 10(-2x)^2 + 10(-2x)^3 + 5(-2x)^4 + (-2x)^5$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$1 - 10x + 40x^2 - 80x^3 + 80x^4 - 32x^5$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Alternating signs correct throughout.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$1 - 10x + 40x^2 - 80x^3 + 80x^4 - 32x^5$",
          },
        },
        {
          id: "cipum-u1-se-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $\\sum_{k=1}^{4} k^2$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "20" },
              { id: "b", text: "14" },
              { id: "c", text: "30" },
              { id: "d", text: "40" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sigma notation",
                statement: "$\\sum_{k=1}^{n} u_k = u_1 + u_2 + \\cdots + u_n$.",
              },
            ],
            steps: [
              {
                reasoning: "$1 + 4 + 9 + 16 = 30$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "30",
          },
        },
        {
          id: "cipum-u1-se-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the sum to infinity of $12 + 6 + 3 + \\frac{3}{2} + \\cdots$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 24 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Infinite geometric series",
                statement: "$S_\\infty = \\frac{a}{1-r}$ when $|r| < 1$.",
              },
            ],
            steps: [
              {
                reasoning: "$a = 12$, $r = \\frac{1}{2}$; $|r| < 1$ so converges.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$S_\\infty = \\frac{12}{1-1/2} = \\frac{12}{1/2} = 24$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "24",
          },
        },
        {
          id: "cipum-u1-se-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "The 3rd term of an arithmetic series is 11 and the 7th term is 23. Find the sum of the first 20 terms.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 670 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Arithmetic series",
                statement: "$u_n = a + (n-1)d$; $S_n = \\frac{n}{2}[2a+(n-1)d]$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$(7-3)d = 23 - 11 \\Rightarrow 4d = 12 \\Rightarrow d = 3$; $a + 2d = 11 \\Rightarrow a = 5$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$S_{20} = \\frac{20}{2}[2(5) + 19(3)] = 10 \\times 67 = 670$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$S_{20} = 670$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "670",
          },
        },
        {
          id: "cipum-u1-se-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "For which values of $x$ does the binomial expansion of $(1+x)^{-\\frac{1}{2}}$ converge?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$|x| \\leq 1$" },
              { id: "b", text: "$|x| < 1$" },
              { id: "c", text: "For all real $x$" },
              { id: "d", text: "$x < 1$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Binomial convergence",
                statement: "Non-integer binomial expansions require $|b/a| < 1$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "With $a = 1$, $b = x$: convergence requires $|x| < 1$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$|x| < 1$",
          },
        },
        {
          id: "cipum-u1-se-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Evaluate $\\sum_{k=1}^{5} 2^k$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "62" },
              { id: "b", text: "30" },
              { id: "c", text: "63" },
              { id: "d", text: "32" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sigma notation",
                statement: "Sum the listed terms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$2 + 4 + 8 + 16 + 32 = 62$ (or $S_5 = \\frac{2(2^5-1)}{2-1} = 62$).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "62",
          },
        },
        {
          id: "cipum-u1-se-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the sum to infinity of the geometric series $\\frac{5}{3} + \\frac{5}{9} + \\frac{5}{27} + \\cdots$",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Infinite geometric series",
                statement: "$S_\\infty = \\frac{a}{1-r}$ when $|r| < 1$.",
              },
            ],
            steps: [
              {
                reasoning: "$a = \\frac{5}{3}$; each term is $\\frac{1}{3}$ of the previous, so $r = \\frac{1}{3}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$|r| = \\frac{1}{3} < 1$, so the series converges.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$S_\\infty = \\frac{5/3}{1 - 1/3} = \\frac{5/3}{2/3} = \\frac{5}{2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Sum to infinity is $\\frac{5}{2}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$S_\\infty = \\frac{5}{2}$",
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
