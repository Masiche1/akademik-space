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
              { id: "a", text: "$5$" },
              { id: "b", text: "$3$" },
              { id: "c", text: "$2$" },
              { id: "d", text: "$11$" },
            ],
            correctChoiceId: "b",
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
            finalAnswer: "**(b)** $d=3$",
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
        {
          id: "cial-m-u3-ap-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the common difference of $10, 7, 4, 1, \\ldots$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3$" },
              { id: "b", text: "$-3$" },
              { id: "c", text: "$-1$" },
              { id: "d", text: "$7$" },
            ],
            correctChoiceId: "b",
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
              { reasoning: "$7 - 10 = -3$ — constant.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** $d=-3$",
            commonErrors: ["Giving the absolute difference instead of signed $d$."],
          },
        },
        {
          id: "cial-m-u3-ap-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the 10th term of the AP $3, 7, 11, \\ldots$",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$39$" },
              { id: "b", text: "$43$" },
              { id: "c", text: "$36$" },
              { id: "d", text: "$40$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "nth term",
                statement: "$u_n = a + (n-1)d$",
              },
            ],
            steps: [
              { reasoning: "$a = 3, d = 4$.", marks: 1, markCode: "M" },
              {
                reasoning: "$u_{10} = 3 + 9(4) = 39$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$39$",
            commonErrors: ["Using $n$ instead of $n-1$."],
          },
        },
        {
          id: "cial-m-u3-ap-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the 5th term of the AP $2, 5, 8, \\ldots$",
          response: {
            type: "numeric",
            parts: [{ label: "term", answer: 14, tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "nth term",
                statement: "$u_n = a + (n-1)d$",
              },
            ],
            steps: [
              {
                reasoning: "$u_5 = 2 + 4(3) = 14$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$14$",
            commonErrors: ["Counting terms from 0 instead of 1."],
          },
        },
        {
          id: "cial-m-u3-ap-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the sum of the first 10 terms of the AP $1, 4, 7, \\ldots$",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Sum",
                statement: "$S_n = \\frac{n}{2}[2a + (n-1)d]$",
              },
            ],
            steps: [
              { reasoning: "$a = 1, d = 3$.", marks: 1, markCode: "M" },
              {
                reasoning: "$S_{10} = \\frac{10}{2}[2(1) + 9(3)] = 5 \\times 29$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$= 145$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$145$",
            commonErrors: ["Using $n$ terms of $u_n$ formula instead of sum formula."],
          },
        },
        {
          id: "cial-m-u3-ap-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which of the following sequences is an arithmetic progression?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1, 4, 9, 16$" },
              { id: "b", text: "$3, 3, 3, 4$" },
              { id: "c", text: "$2, 4, 8, 16$" },
              { id: "d", text: "$2, 5, 8, 11$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "AP",
                statement: "Constant difference between consecutive terms.",
              },
            ],
            steps: [
              {
                reasoning: "$2,5,8,11$ has constant difference 3.",
                working: "d = 3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Others are geometric or have no constant gap.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** $2, 5, 8, 11$",
            commonErrors: ["Choosing a geometric sequence like $2,4,8,16$."],
          },
        },
        {
          id: "cial-m-u3-ap-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "An AP has first term $5$ and common difference $-2$. Find its 6th term.",
          response: {
            type: "numeric",
            parts: [{ label: "term", answer: -5, tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "nth term",
                statement: "$u_n = a + (n-1)d$",
              },
            ],
            steps: [
              {
                reasoning: "$u_6 = 5 + 5(-2) = 5 - 10$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$= -5$.", marks: 1, markCode: "M" },
              {
                reasoning: "Negative term is expected with $d = -2$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$-5$",
            commonErrors: ["Dropping the negative sign on $d$."],
          },
        },
        {
          id: "cial-m-u3-ap-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The 4th term of an AP is $14$ and the 9th term is $29$. Find the first term, common difference, and 20th term.",
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
                reasoning:
                  "$a + 3d = 14$ and $a + 8d = 29$; subtract: $5d = 15$, $d = 3$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$a = 14 - 9 = 5$.", marks: 1, markCode: "M" },
              {
                reasoning: "$u_{20} = 5 + 19(3) = 62$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$a = 5, d = 3, u_{20} = 62$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$a=5,\\ d=3,\\ u_{20}=62$",
            commonErrors: ["Sign errors when subtracting the equations."],
          },
        },
        {
          id: "cial-m-u3-ap-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The nth term of an arithmetic progression is",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$a r^{n-1}$" },
              { id: "b", text: "$\\frac{n}{2}[2a + (n-1)d]$" },
              { id: "c", text: "$a + (n-1)d$" },
              { id: "d", text: "$a + nd$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "nth term",
                statement: "$u_n = a + (n-1)d$.",
              },
            ],
            steps: [
              { reasoning: "Correct formula stated.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** $u_n = a + (n-1)d$",
            commonErrors: ["Confusing nth term with sum formula."],
          },
        },
        {
          id: "cial-m-u3-ap-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Find the sum of the first 20 terms of the AP $7, 11, 15, \\ldots$",
          response: {
            type: "numeric",
            parts: [{ label: "sum", answer: 900, tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Sum",
                statement: "$S_n = \\frac{n}{2}[2a + (n-1)d]$",
              },
            ],
            steps: [
              { reasoning: "$a = 7, d = 4$.", marks: 1, markCode: "M" },
              {
                reasoning: "$S_{20} = 10[14 + 19(4)] = 10 \\times 90$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= 900$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct total.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$900$",
            commonErrors: ["Arithmetic slip in bracket — $14 + 76 = 90$."],
          },
        },
        {
          id: "cial-m-u3-ap-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The sum of the first $n$ terms of an arithmetic progression is",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "$\\frac{n}{2}[2a + (n-1)d]$",
              },
              { id: "b", text: "$a + (n-1)d$" },
              { id: "c", text: "$n \\times a$" },
              {
                id: "d",
                text: "$\\frac{a(r^n - 1)}{r - 1}$",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sum",
                statement: "$S_n = \\frac{n}{2}[2a + (n-1)d]$.",
              },
            ],
            steps: [
              { reasoning: "Correct sum formula.", marks: 1, markCode: "M" },
              {
                reasoning: "Distinguishes AP from GP and nth term.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $S_n = \\frac{n}{2}[2a + (n-1)d]$",
            commonErrors: ["Confusing with GP sum formula."],
          },
        },
        {
          id: "cial-m-u3-ap-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Arithmetic progressions.",
          parts: [
            {
              label: "a",
              prompt: "Find $d$ for the AP $5, 9, 13, \\ldots$",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Find $u_{12}$ for this AP.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Find $S_{12}$ for this AP.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "AP",
                statement: "Identify a, d then apply formulas.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$d = 9 - 5 = 4$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$u_{12} = 5 + 11(4) = 49$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct term.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$S_{12} = \\frac{12}{2}[10 + 11(4)] = 6 \\times 54$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$= 6 \\times 54 = 324$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Correct sum.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $d=4$ (b) $49$ (c) $324$",
          },
        },
        {
          id: "cial-m-u3-ap-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Arithmetic progressions — mixed practice.",
          parts: [
            {
              label: "a",
              prompt: "Write down the nth term formula for an AP.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Find $u_{15}$ of $4, 7, 10, \\ldots$",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "The 3rd term of an AP is $10$ and the 7th term is $22$. Find $a$ and $d$.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "For the AP in part (c), find $S_{30}$.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "AP",
                statement: "nth term + sum + simultaneous equations.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$u_n = a + (n-1)d$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$a = 4, d = 3$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$u_{15} = 4 + 14(3) = 46$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$a + 2d = 10$ and $a + 6d = 22$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Subtract: $4d = 12$, $d = 3$; $a = 4$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$a = 4, d = 3$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "$S_{30} = \\frac{30}{2}[2(4) + 29(3)] = 15 \\times 95$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$= 1425$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Check bracket: $8 + 87 = 95$.",
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
              "(a) $u_n=a+(n-1)d$ (b) $46$ (c) $a=4,d=3$ (d) $1425$",
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
              { id: "a", text: "$5$" },
              { id: "b", text: "$10$" },
              { id: "c", text: "$\\frac{1}{3}$" },
              { id: "d", text: "$3$" },
            ],
            correctChoiceId: "d",
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
            finalAnswer: "**(d)** $r=3$",
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
        {
          id: "cial-m-u3-gp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the common ratio of $2, 6, 18, 54, \\ldots$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4$" },
              { id: "b", text: "$3$" },
              { id: "c", text: "$16$" },
              { id: "d", text: "$\\frac{1}{3}$" },
            ],
            correctChoiceId: "b",
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
              { reasoning: "$6 \\div 2 = 3$.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** $r=3$",
            commonErrors: ["Subtracting instead of dividing."],
          },
        },
        {
          id: "cial-m-u3-gp-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the 6th term of the GP $5, 10, 20, \\ldots$",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$100$" },
              { id: "b", text: "$160$" },
              { id: "c", text: "$320$" },
              { id: "d", text: "$80$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "GP nth term",
                statement: "$u_n = ar^{n-1}$",
              },
            ],
            steps: [
              { reasoning: "$a = 5, r = 2$.", marks: 1, markCode: "M" },
              {
                reasoning: "$u_6 = 5 \\times 2^5 = 160$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$160$",
            commonErrors: ["Using exponent $n$ instead of $n-1$."],
          },
        },
        {
          id: "cial-m-u3-gp-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the 4th term of the GP $3, 6, 12, \\ldots$",
          response: {
            type: "numeric",
            parts: [{ label: "term", answer: 24, tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "GP nth term",
                statement: "$u_n = ar^{n-1}$",
              },
            ],
            steps: [
              {
                reasoning: "$u_4 = 3 \\times 2^3 = 24$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$24$",
            commonErrors: ["Using $r^n$ instead of $r^{n-1}$."],
          },
        },
        {
          id: "cial-m-u3-gp-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the sum of the first 6 terms of the GP $1, 2, 4, \\ldots$",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "GP sum",
                statement: "$S_n = \\frac{a(r^n - 1)}{r - 1}$",
              },
            ],
            steps: [
              { reasoning: "$a = 1, r = 2$.", marks: 1, markCode: "M" },
              {
                reasoning: "$S_6 = \\frac{1(2^6 - 1)}{2 - 1} = 63$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct sum.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$63$",
            commonErrors: ["Forgetting to subtract 1 in numerator."],
          },
        },
        {
          id: "cial-m-u3-gp-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Find $S_\\infty$ of the GP $10, 5, 2.5, \\ldots$",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$15$" },
              { id: "b", text: "$25$" },
              { id: "c", text: "$\\infty$" },
              { id: "d", text: "$20$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Infinite GP",
                statement: "$S_\\infty = \\frac{a}{1 - r}$ for $|r| < 1$.",
              },
            ],
            steps: [
              {
                reasoning: "$r = \\frac{1}{2}$, $|r| < 1$ converges: $S_\\infty = \\frac{10}{1 - 1/2} = 20$.",
                working: "20",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct sum.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$20$",
            commonErrors: ["Using $S_n$ formula with $n = \\infty$."],
          },
        },
        {
          id: "cial-m-u3-gp-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "A GP has first term $4$ and common ratio $\\frac{1}{2}$. Find the 5th term.",
          response: {
            type: "numeric",
            parts: [{ label: "term", answer: 0.25, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "GP nth term",
                statement: "$u_n = ar^{n-1}$",
              },
            ],
            steps: [
              {
                reasoning: "$u_5 = 4 \\times (\\frac{1}{2})^4 = 4 \\times \\frac{1}{16}$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$= \\frac{1}{4} = 0.25$.", marks: 1, markCode: "M" },
              {
                reasoning: "Correct term.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.25$",
            commonErrors: ["Computing $(\\frac{1}{2})^5$ — exponent is $n-1=4$."],
          },
        },
        {
          id: "cial-m-u3-gp-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An infinite GP has first term $6$ and sum to infinity $15$. Find $r$ and the 3rd term.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Infinite GP",
                statement: "$S_\\infty = \\frac{a}{1-r}$ rearranged for $r$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$15 = \\frac{6}{1-r}$, so $1 - r = \\frac{6}{15} = \\frac{2}{5}$, $r = \\frac{3}{5}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$u_3 = 6 \\times (\\frac{3}{5})^2 = 6 \\times \\frac{9}{25} = \\frac{54}{25}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Check $|r| = \\frac{3}{5} < 1$ — converges.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$r = \\frac{3}{5}, u_3 = \\frac{54}{25}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$r=\\frac{3}{5},\\ u_3=\\frac{54}{25}$",
            commonErrors: ["Forgetting to verify $|r| < 1$."],
          },
        },
        {
          id: "cial-m-u3-gp-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $S_\\infty$ to exist for a geometric progression, the common ratio must satisfy",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$r > 1$" },
              { id: "b", text: "$r = 1$" },
              { id: "c", text: "$r < 0$" },
              { id: "d", text: "$|r| < 1$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Convergence",
                statement: "Infinite GP converges only when $|r| < 1$.",
              },
            ],
            steps: [
              { reasoning: "Condition: $|r| < 1$.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(d)** $|r| < 1$",
            commonErrors: ["Thinking any $r$ gives a finite sum."],
          },
        },
        {
          id: "cial-m-u3-gp-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Find the sum of the first 10 terms of the GP $3, 6, 12, \\ldots$",
          response: {
            type: "numeric",
            parts: [{ label: "sum", answer: 3069, tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "GP sum",
                statement: "$S_n = \\frac{a(r^n - 1)}{r - 1}$",
              },
            ],
            steps: [
              { reasoning: "$a = 3, r = 2$.", marks: 1, markCode: "M" },
              {
                reasoning: "$S_{10} = \\frac{3(2^{10} - 1)}{2 - 1} = 3 \\times 1023$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$= 3069$.", marks: 1, markCode: "M" },
              {
                reasoning: "Correct total.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$3069$",
            commonErrors: ["Forgetting $r^n - 1$ or computing $2^{10}$ wrong."],
          },
        },
        {
          id: "cial-m-u3-gp-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In a GP, $u_3 = 12$ and $u_6 = 96$. Find the common ratio, given that it is positive.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4$" },
              { id: "b", text: "$2$" },
              { id: "c", text: "$\\frac{1}{2}$" },
              { id: "d", text: "$-2$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "GP nth term",
                statement: "$\\frac{u_6}{u_3} = r^3$.",
              },
            ],
            steps: [
              {
                reasoning: "$r^3 = \\frac{96}{12} = 8$, so $r = 2$.",
                working: "r^3 = 8",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Positive root: $r = 2$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $r = 2$",
            commonErrors: ["Using $\\frac{u_6}{u_3} = r$ instead of $r^3$."],
          },
        },
        {
          id: "cial-m-u3-gp-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Geometric progressions.",
          parts: [
            {
              label: "a",
              prompt: "Find $r$ for the GP $4, 8, 16, \\ldots$",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Find $u_8$ for this GP.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Find $S_8$ for this GP.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "GP",
                statement: "Identify a, r then apply formulas.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$r = 8 \\div 4 = 2$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$u_8 = 4 \\times 2^7 = 512$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct term.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$S_8 = \\frac{4(2^8 - 1)}{2 - 1} = 4 \\times 255$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$= 1020$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Correct sum.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $r=2$ (b) $512$ (c) $1020$",
          },
        },
        {
          id: "cial-m-u3-gp-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Geometric progressions — mixed practice.",
          parts: [
            {
              label: "a",
              prompt: "Write down the nth term formula for a GP.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Find $u_7$ of $2, 6, 18, \\ldots$",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Find $S_\\infty$ of $20, 10, 5, \\ldots$",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "An infinite GP has $a = 8$ and $S_\\infty = 24$. Find $r$ and the 5th term.",
              marks: 5,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "GP",
                statement: "nth term + infinite sum + convergence.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$u_n = ar^{n-1}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$a = 2, r = 3$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$u_7 = 2 \\times 3^6 = 1458$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$r = \\frac{1}{2}$; $S_\\infty = \\frac{20}{1 - 1/2} = 40$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Correct sum.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "$24 = \\frac{8}{1 - r}$, so $1 - r = \\frac{1}{3}$, $r = \\frac{2}{3}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$|r| = \\frac{2}{3} < 1$ — converges.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$u_5 = 8 \\times (\\frac{2}{3})^4$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$= \\frac{128}{81}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$r = \\frac{2}{3}, u_5 = \\frac{128}{81}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $ar^{n-1}$ (b) $1458$ (c) $40$ (d) $r=\\frac{2}{3}, u_5=\\frac{128}{81}$",
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
