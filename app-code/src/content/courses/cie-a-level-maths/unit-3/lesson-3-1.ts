import type { Lesson } from "../../../types.ts";

export const lesson131: Lesson = {
  id: "cial-m-u3-lesson-3-1",
  code: "3-1",
  title: "Arithmetic and geometric progressions",
  goal: "I CAN work with arithmetic and geometric sequences, their nth terms and sums.",
  standards: ["9709 Pure Mathematics 1: sequences and series"],
  vocabulary: [
    {
      term: "Arithmetic progression",
      definition:
        "Sequence with constant difference d between consecutive terms.",
    },
    {
      term: "Geometric progression",
      definition: "Sequence with constant ratio r between consecutive terms.",
    },
    {
      term: "Common difference",
      definition: "The fixed amount added in an arithmetic progression.",
    },
    {
      term: "Common ratio",
      definition: "The fixed multiplier in a geometric progression.",
    },
    { term: "nth term", definition: "Formula for the term at position n." },
    {
      term: "Sum to n terms",
      definition: "Total of first n terms of a sequence.",
    },
  ],
  concepts: [
    {
      id: "cial-m-u3-arithmetic",
      title: "Arithmetic progressions",
      skill: "Find nth terms and sums of arithmetic sequences.",
      lesson: {
        sections: [
          {
            heading: "Recognising APs",
            body: "An AP has a constant difference: 3, 7, 11, 15, ... with d = 4. Check by subtracting consecutive terms — same result each time.",
          },
          {
            heading: "nth term and sum",
            body: "nth term: $u_n = a + (n-1)d$. Sum to n terms: $S_n = \\frac{n}{2}[2a + (n-1)d]$ or equivalently $S_n = \\frac{n}{2}(a + l)$ where $l$ is the last term.",
          },
          {
            heading: "Finding terms and sums",
            body: "Find a and d from given terms, then substitute. For sums, identify n, a, d (or l) and apply the formula. Always check whether the question asks for a term or a sum.",
          },
        ],
        keyFormulas: [
          { name: "AP nth term", statement: "$u_n = a + (n-1)d$" },
          { name: "AP sum", statement: "$S_n = \\frac{n}{2}[2a + (n-1)d]$" },
        ],
        workedExample: {
          problem:
            "Find the 20th term and sum of first 20 terms of 5, 9, 13, ...",
          solution:
            "d = 4, a = 5. $u_{20} = 5 + 19 \\times 4 = 81$. $S_{20} = \\frac{20}{2}[2(5) + 19(4)] = 10 \\times 86 = 860$.",
        },
      },
      questions: [
        {
          id: "cial-m-u3-ap-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the common difference of 2, 5, 8, 11, ...?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3$" },
              { id: "b", text: "$5$" },
              { id: "c", text: "$2$" },
              { id: "d", text: "$11$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Common difference",
                statement: "Constant gap between consecutive AP terms.",
              },
            ],
            steps: [
              { reasoning: "$5-2=3$ — constant.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $d=3$",
            commonErrors: ["Reading a term instead of the difference."],
          },
        },
        {
          id: "cial-m-u3-ap-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the 10th term of the AP 7, 12, 17, ...",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "nth term",
                statement: "$u_n = a + (n-1)d$",
              },
            ],
            steps: [
              { reasoning: "$a=7, d=5$.", marks: 1, markCode: "M" },
              {
                reasoning: "$u_{10} = 7 + 9(5) = 52$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$52$",
            commonErrors: ["Using $n$ instead of $n-1$ in the formula."],
          },
        },
        {
          id: "cial-m-u3-ap-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The 3rd term of an AP is 11 and the 8th term is 26. Find the first term, common difference, and sum of the first 15 terms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Simultaneous AP",
                statement: "Two term equations solve for a and d.",
              },
            ],
            steps: [
              {
                reasoning: "$a+2d=11$ and $a+7d=26$; subtract: $5d=15$, $d=3$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$a = 11 - 6 = 5$.", marks: 1, markCode: "M" },
              {
                reasoning:
                  "$S_{15} = \\frac{15}{2}[10 + 14(3)] = \\frac{15}{2} \\times 52 = 390$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$a=5, d=3, S_{15}=390$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a=5,\\ d=3,\\ S_{15}=390$",
            commonErrors: ["Sign errors when subtracting equations."],
          },
        },
        {
          id: "cial-m-u3-ap-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Arithmetic progressions.",
          parts: [
            {
              label: "a",
              prompt: "Write the nth term formula for an AP.",
              marks: 1,
            },
            { label: "b", prompt: "Find $u_{10}$ of 7, 12, 17, ...", marks: 2 },
            {
              label: "c",
              prompt: "Derive the sum formula $S_n = \\frac{n}{2}[2a+(n-1)d]$.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Find the sum of first 100 terms of 1, 4, 7, ...",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "AP",
                statement: "nth term + sum formula + derivation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$u_n = a + (n-1)d$.",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "$a=7, d=5$.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$u_{10}=52$.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Write series forwards and backwards.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Add: $2S_n = n[2a + (n-1)d]$.",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "Divide by 2.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$a=1, d=3$.", marks: 1, markCode: "M" },
              {
                part: "d",
                reasoning: "$S_{100} = \\frac{100}{2}[2 + 99(3)]$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$= 50 \\times 299 = 14950$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Correct total.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $u_n=a+(n-1)d$ (b) $52$ (c) derivation (d) $14950$",
          },
        },
      ],
    },
    {
      id: "cial-m-u3-geometric",
      title: "Geometric progressions",
      skill:
        "Find nth terms and sums of geometric sequences, including infinite series.",
      lesson: {
        sections: [
          {
            heading: "Recognising GPs",
            body: "A GP has a constant ratio: 2, 6, 18, 54, ... with $r = 3$. Check by dividing consecutive terms.",
          },
          {
            heading: "nth term and sum",
            body: "nth term: $u_n = ar^{n-1}$. Sum to n terms: $S_n = \\frac{a(r^n - 1)}{r - 1}$ for $r \\ne 1$.",
          },
          {
            heading: "Infinite geometric series",
            body: "When $|r| < 1$, terms shrink towards zero and the sum converges: $S_\\infty = \\frac{a}{1 - r}$. If $|r| \\ge 1$ the series diverges — no finite sum.",
          },
        ],
        keyFormulas: [
          { name: "GP nth term", statement: "$u_n = ar^{n-1}$" },
          { name: "GP sum", statement: "$S_n = \\frac{a(r^n-1)}{r-1}$" },
          {
            name: "GP infinite",
            statement: "$S_\\infty = \\frac{a}{1-r}$ when $|r|<1$",
          },
        ],
        workedExample: {
          problem: "Find $S_\\infty$ of 12, 6, 3, 1.5, ...",
          solution:
            "$a=12, r=\\frac{1}{2}$. $S_\\infty = \\frac{12}{1 - 1/2} = 24$.",
        },
      },
      questions: [
        {
          id: "cial-m-u3-gp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the common ratio of 5, 15, 45, 135, ...?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3$" },
              { id: "b", text: "$10$" },
              { id: "c", text: "$5$" },
              { id: "d", text: "$\\frac{1}{3}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Common ratio",
                statement: "Constant multiplier between GP terms.",
              },
            ],
            steps: [
              { reasoning: "$15 \\div 5 = 3$.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $r=3$",
            commonErrors: ["Subtracting instead of dividing."],
          },
        },
        {
          id: "cial-m-u3-gp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the 8th term of 3, 6, 12, 24, ...",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "GP nth term",
                statement: "$u_n = ar^{n-1}$",
              },
            ],
            steps: [
              { reasoning: "$a=3, r=2$.", marks: 1, markCode: "M" },
              {
                reasoning: "$u_8 = 3 \\times 2^7 = 384$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$384$",
            commonErrors: ["Forgetting $n-1$ exponent."],
          },
        },
        {
          id: "cial-m-u3-gp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An infinite GP has first term 8 and sum to infinity 12. Find r and the 5th term.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Infinite GP",
                statement: "$S_\\infty = a/(1-r)$ rearranged for r.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$12 = \\frac{8}{1-r}$, so $1-r = \\frac{2}{3}$, $r = \\frac{1}{3}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$u_5 = 8 \\times (1/3)^4 = \\frac{8}{81}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Check $|r|<1$ — converges.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$r=\\frac{1}{3}, u_5=\\frac{8}{81}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$r=\\frac{1}{3},\\ u_5=\\frac{8}{81}$",
            commonErrors: ["Using $S_n$ formula for infinite case."],
          },
        },
        {
          id: "cial-m-u3-gp-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Geometric progressions.",
          parts: [
            {
              label: "a",
              prompt: "Write the nth term formula for a GP.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Find the 8th term of 3, 6, 12, ...",
              marks: 2,
            },
            {
              label: "c",
              prompt: "State the condition for $S_\\infty$ to exist.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Find $S_\\infty$ of 9, 6, 4, ...",
              marks: 5,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "GP",
                statement: "nth term + convergence condition + infinite sum.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$u_n = ar^{n-1}$.",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "$a=3, r=2$.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$u_8 = 384$.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$|r| < 1$.", marks: 1, markCode: "M" },
              {
                part: "c",
                reasoning: "Correct condition stated.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "$r = 6/9 = 2/3$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$S_\\infty = \\frac{9}{1 - 2/3}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$= \\frac{9}{1/3} = 27$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$|r|<1$ verified.",
                marks: 1,
                markCode: "M",
              },
              { part: "d", reasoning: "Correct sum.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $ar^{n-1}$ (b) $384$ (c) $|r|<1$ (d) $27$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-m-u3-progressions-notes",
      title: "Progressions — revision notes",
      summary:
        "Arithmetic and geometric sequences: nth terms, sums, infinite series.",
      sections: [
        {
          heading: "Arithmetic",
          body: "Constant difference d. $u_n = a + (n-1)d$; $S_n = \\frac{n}{2}[2a+(n-1)d]$.",
        },
        {
          heading: "Geometric",
          body: "Constant ratio r. $u_n = ar^{n-1}$; $S_n = \\frac{a(r^n-1)}{r-1}$. Infinite: $S_\\infty = \\frac{a}{1-r}$ for $|r|<1$.",
        },
        {
          heading: "Exam checklist",
          body: "Identify a and d (or r) first. Check whether term or sum is asked. Verify $|r|<1$ before using $S_\\infty$.",
        },
      ],
    },
  ],
};
