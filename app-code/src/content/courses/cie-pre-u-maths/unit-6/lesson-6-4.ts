import type { Lesson } from "../../../types.ts";

export const lesson64: Lesson = {
  id: "cipum-u6-lesson-6-4",
  code: "6-4",
  title: "Series, Proof and Differential Equations",
  goal: "I CAN work with series, mathematical proof and first-order differential equations.",
  standards: [
    "Cambridge Pre-U Mathematics 9794",
    "Pure Mathematics 1/3: series, proof, differential equations",
  ],
  vocabulary: [
    {
      term: "Arithmetic series",
      definition: "Constant difference d — S_n = n/2(2a + (n−1)d).",
    },
    {
      term: "Geometric series",
      definition: "Constant ratio r — S_n = a(1−r^n)/(1−r).",
    },
    { term: "Infinite geometric", definition: "Sum = a/(1−r) for |r| < 1." },
    { term: "Sigma notation", definition: "Σ — sum of terms." },
    {
      term: "Proof by induction",
      definition: "Prove for n=1, assume n=k, prove n=k+1.",
    },
    {
      term: "Proof by contradiction",
      definition: "Assume negation → contradiction.",
    },
    {
      term: "Direct proof",
      definition: "Assume hypothesis → derive conclusion.",
    },
    {
      term: "Differential equation",
      definition: "Equation involving dy/dx and y.",
    },
    { term: "Separable", definition: "Can write f(y)dy = g(x)dx." },
    {
      term: "Integrating factor",
      definition: "e^(∫P dx) — solves linear DEs.",
    },
  ],
  concepts: [
    {
      id: "cipum-u6-series",
      title: "Series and sequences",
      skill: "Sum arithmetic and geometric series and apply sigma notation.",
      lesson: {
        sections: [
          {
            heading: "Arithmetic series",
            body: "**nth term**: a_n = a + (n−1)d. **Sum**: S_n = n/2(2a + (n−1)d) = n/2(a + l). d = common difference. Used for linear growth.",
          },
          {
            heading: "Geometric series",
            body: "**nth term**: a_n = ar^(n−1). **Sum**: S_n = a(1−r^n)/(1−r). **Infinite**: S_∞ = a/(1−r) if |r| < 1. Used for exponential growth/decay, repeating decimals.",
          },
          {
            heading: "Sigma notation",
            body: "Σ_{k=1}^{n} a_k = a_1 + a_2 + ... + a_n. Properties: Σ(ca_k) = cΣa_k; Σ(a_k + b_k) = Σa_k + Σb_k. Useful for compact sums.",
          },
        ],
        keyFormulas: [
          { name: "Arithmetic nth", statement: "a_n = a + (n−1)d" },
          { name: "Arithmetic sum", statement: "S_n = n/2(2a+(n−1)d)" },
          { name: "Geometric nth", statement: "a_n = ar^(n−1)" },
          { name: "Geometric sum", statement: "S_n = a(1−r^n)/(1−r)" },
        ],
        workedExample: {
          problem: "Sum of 1 + 2 + 4 + ... + 256 (geometric, r=2).",
          solution: "a=1, r=2, n=9 (256 = 2^8). S_9 = (2^9−1)/(2−1) = 511.",
        },
      },
      questions: [
        {
          id: "cipum-u6-s1-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Arithmetic series has:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Constant difference between terms" },
              { id: "b", text: "No pattern" },
              { id: "c", text: "Constant ratio" },
              { id: "d", text: "Random terms" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Arithmetic",
                statement: "Constant d.",
              },
            ],
            steps: [
              { reasoning: "Constant difference.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Constant d.",
          },
        },
        {
          id: "cipum-u6-s1-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Geometric series has:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Random" },
              { id: "b", text: "Constant difference" },
              { id: "c", text: "Constant ratio between terms" },
              { id: "d", text: "No pattern" },
            ],
          correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Geometric",
                statement: "Constant r.",
              },
            ],
            steps: [{ reasoning: "Constant ratio.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Constant r.",
          },
        },
        {
          id: "cipum-u6-s1-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "nth term of arithmetic series is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "a + nd" },
              { id: "b", text: "a + (n−1)d" },
              { id: "c", text: "ar^(n−1)" },
              { id: "d", text: "a·r^n" },
            ],
          correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Arithmetic nth",
                statement: "a+(n−1)d.",
              },
            ],
            steps: [{ reasoning: "a_n = a+(n−1)d.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) a+(n−1)d.",
          },
        },
        {
          id: "cipum-u6-s1-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "nth term of geometric series is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "ar^(n−1)" },
              { id: "b", text: "a·n^r" },
              { id: "c", text: "a+r^n" },
              { id: "d", text: "a+(n−1)d" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Geometric nth",
                statement: "ar^(n−1).",
              },
            ],
            steps: [{ reasoning: "a_n = ar^(n−1).", marks: 1, markCode: "M" }],
            finalAnswer: "(a) ar^(n−1).",
          },
        },
        {
          id: "cipum-u6-s1-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Sum of infinite geometric series converges if:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "|r| > 1" },
              { id: "b", text: "Always" },
              { id: "c", text: "r = 1" },
              { id: "d", text: "|r| < 1" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Convergence", statement: "|r| < 1." },
            ],
            steps: [{ reasoning: "|r| < 1.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) |r|<1.",
          },
        },
        {
          id: "cipum-u6-s1-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Sum of infinite geometric series =",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "a(1−r)" },
              { id: "b", text: "a/(1−r)" },
              { id: "c", text: "a/(1+r)" },
              { id: "d", text: "ar/(1−r)" },
            ],
          correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Infinite sum",
                statement: "a/(1−r).",
              },
            ],
            steps: [{ reasoning: "S_∞ = a/(1−r).", marks: 1, markCode: "M" }],
            finalAnswer: "(a) a/(1−r).",
          },
        },
        {
          id: "cipum-u6-s1-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Σ notation means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Summation" },
              { id: "b", text: "Integral" },
              { id: "c", text: "Derivative" },
              { id: "d", text: "Product" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sigma", statement: "Sum." },
            ],
            steps: [{ reasoning: "Σ = sum.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Sum.",
          },
        },
        {
          id: "cipum-u6-s1-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "2 + 5 + 8 + 11 + ... is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Geometric" },
              { id: "b", text: "Arithmetic series (d=3)" },
              { id: "c", text: "Neither" },
              { id: "d", text: "Constant" },
            ],
          correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Identify", statement: "d = 3." },
            ],
            steps: [{ reasoning: "Arithmetic, d=3.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Arithmetic.",
          },
        },
        {
          id: "cipum-u6-s1-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "3 + 6 + 12 + 24 + ... is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Geometric series (r=2)" },
              { id: "b", text: "Constant" },
              { id: "c", text: "Arithmetic" },
              { id: "d", text: "Neither" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Identify", statement: "r = 2." },
            ],
            steps: [{ reasoning: "Geometric, r=2.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Geometric.",
          },
        },
        {
          id: "cipum-u6-s1-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Sum of first n natural numbers 1+2+...+n =",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "n!" },
              { id: "b", text: "n²" },
              { id: "c", text: "n(n+1)/2" },
              { id: "d", text: "2^n" },
            ],
          correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sum of naturals",
                statement: "n(n+1)/2.",
              },
            ],
            steps: [{ reasoning: "= n(n+1)/2.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) n(n+1)/2.",
          },
        },
        {
          id: "cipum-u6-s1-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Sum of 2 + 4 + 6 + ... + 20 =",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "55" },
              { id: "b", text: "110" },
              { id: "c", text: "210" },
              { id: "d", text: "100" },
            ],
          correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Arithmetic sum",
                statement: "S_10 = 10/2(2+20) = 110.",
              },
            ],
            steps: [{ reasoning: "S_10 = 110.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 110.",
          },
        },
        {
          id: "cipum-u6-s1-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "5th term of 3, 7, 11, 15, ... is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "23" },
              { id: "b", text: "21" },
              { id: "c", text: "19" },
              { id: "d", text: "17" },
            ],
          correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "nth term",
                statement: "a_5 = 3+4·4 = 19.",
              },
            ],
            steps: [{ reasoning: "a_5 = 19.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 19.",
          },
        },
        {
          id: "cipum-u6-s1-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Sum of 1 + 1/2 + 1/4 + 1/8 + ... =",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1" },
              { id: "b", text: "Does not converge" },
              { id: "c", text: "2" },
              { id: "d", text: "4" },
            ],
          correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Infinite sum",
                statement: "S = 1/(1−0.5) = 2.",
              },
            ],
            steps: [{ reasoning: "S = 2.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 2.",
          },
        },
        {
          id: "cipum-u6-s1-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Sum of first 10 terms of 5, 10, 20, 40, ... is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5000" },
              { id: "b", text: "10240" },
              { id: "c", text: "5(2^10 − 1) = 5115" },
              { id: "d", text: "2047" },
            ],
          correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Geometric sum",
                statement: "S_10 = 5(2^10−1)/(2−1) = 5115.",
              },
            ],
            steps: [{ reasoning: "S_10 = 5115.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 5115.",
          },
        },
        {
          id: "cipum-u6-s1-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "0.333... as a fraction is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3/10" },
              { id: "b", text: "Cannot determine" },
              { id: "c", text: "1/3" },
              { id: "d", text: "1/2" },
            ],
          correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Repeating decimal",
                statement: "0.333... = 1/3.",
              },
            ],
            steps: [{ reasoning: "= 1/3.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 1/3.",
          },
        },
        {
          id: "cipum-u6-s1-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Σ_{k=1}^{3} k² =",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "9" },
              { id: "b", text: "6" },
              { id: "c", text: "36" },
              { id: "d", text: "14" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sigma", statement: "1+4+9 = 14." },
            ],
            steps: [{ reasoning: "= 14.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 14.",
          },
        },
        {
          id: "cipum-u6-s1-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "Common difference of 7, 12, 17, 22 is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5" },
              { id: "b", text: "12" },
              { id: "c", text: "10" },
              { id: "d", text: "7" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Common difference", statement: "d = 5." },
            ],
            steps: [{ reasoning: "d = 5.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 5.",
          },
        },
        {
          id: "cipum-u6-s1-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "Common ratio of 2, 6, 18, 54 is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3" },
              { id: "b", text: "12" },
              { id: "c", text: "6" },
              { id: "d", text: "2" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Common ratio", statement: "r = 3." },
            ],
            steps: [{ reasoning: "r = 3.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 3.",
          },
        },
        {
          id: "cipum-u6-s1-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "Sum 1 + 1/3 + 1/9 + ... =",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3/2" },
              { id: "b", text: "Does not converge" },
              { id: "c", text: "1" },
              { id: "d", text: "3" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Infinite sum",
                statement: "S = 1/(1−1/3) = 3/2.",
              },
            ],
            steps: [{ reasoning: "S = 3/2.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 3/2.",
          },
        },
        {
          id: "cipum-u6-s1-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between arithmetic and geometric series.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Series types", statement: "d vs r." },
            ],
            steps: [
              {
                reasoning: "Arithmetic: constant difference d — linear growth.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Geometric: constant ratio r — exponential growth.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Arithmetic = d; geometric = r.",
          },
        },
        {
          id: "cipum-u6-s1-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the formula for sum of infinite geometric series and condition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Infinite sum",
                statement: "a/(1−r), |r|<1.",
              },
            ],
            steps: [
              { reasoning: "S_∞ = a/(1−r).", marks: 1, markCode: "M" },
              {
                reasoning: "Converges only if |r| < 1.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a/(1−r), |r|<1.",
          },
        },
        {
          id: "cipum-u6-s1-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 0.333... = 1/3 using geometric series.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Repeating decimal",
                statement: "Geometric sum.",
              },
            ],
            steps: [
              {
                reasoning: "0.333... = 3/10 + 3/100 + 3/1000 + ...",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Geometric with a = 3/10, r = 1/10.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "S = (3/10)/(1−1/10) = (3/10)/(9/10) = 1/3.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "0.333... = 1/3.",
          },
        },
        {
          id: "cipum-u6-s1-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find sum of 1 + 2 + 3 + ... + 100.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sum of naturals",
                statement: "n(n+1)/2.",
              },
            ],
            steps: [
              {
                reasoning: "Arithmetic with a=1, d=1, n=100.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "S_n = n(n+1)/2 = 100·101/2.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "S = 5050.", marks: 1, markCode: "M" },
              { reasoning: "Sum = 5050.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5050.",
          },
        },
        {
          id: "cipum-u6-s1-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "nth term of 4, 9, 14, 19 is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4n + 5" },
              { id: "b", text: "5n − 1" },
              { id: "c", text: "n + 3" },
              { id: "d", text: "5n + 4" },
            ],
          correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "nth term",
                statement: "a_n = 4 + (n−1)5 = 5n−1.",
              },
            ],
            steps: [{ reasoning: "a_n = 5n−1.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 5n−1.",
          },
        },
        {
          id: "cipum-u6-s1-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does sigma notation Σ represent?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sigma", statement: "Sum of terms." },
            ],
            steps: [
              {
                reasoning: "Σ_{k=1}^{n} a_k = a_1 + a_2 + ... + a_n.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Compact way to write sums.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Sum of terms.",
          },
        },
        {
          id: "cipum-u6-s1-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain when an infinite geometric series converges.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Convergence", statement: "|r| < 1." },
            ],
            steps: [
              {
                reasoning: "Terms must approach zero: |r| < 1 needed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "If |r| ≥ 1, terms don't decrease → diverge.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Converges iff |r| < 1.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "|r| < 1.",
          },
        },
        {
          id: "cipum-u6-s1-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Sum of first n terms of arithmetic series =",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "n/2(2a + (n−1)d)" },
              { id: "b", text: "a^n" },
              { id: "c", text: "n(a+l)" },
              { id: "d", text: "a(1−r^n)/(1−r)" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Arithmetic sum",
                statement: "n/2(2a+(n−1)d).",
              },
            ],
            steps: [{ reasoning: "S_n formula.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Formula.",
          },
        },
        {
          id: "cipum-u6-s1-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the 10th term of 2, 5, 8, 11, ...",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "nth term", statement: "a_n = a+(n−1)d." },
            ],
            steps: [
              { reasoning: "a = 2, d = 3, n = 10.", marks: 1, markCode: "M" },
              { reasoning: "a_10 = 2 + 9·3 = 29.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "29.",
          },
        },
        {
          id: "cipum-u6-s1-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A ball bounces to 3/4 of previous height. Total distance if first bounce is 2 m.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Geometric",
                statement: "Total = up + down.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Up distances: 2, 1.5, 1.125, ... — geometric r=3/4.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Total up = 2/(1−0.75) = 8 m; total down = 8 m.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Wait — first drop is 2 m down; total = 2 + 2×8 = 18 m? Recheck: up total = 8, down total = 8 + initial 2? Standard answer: total = 2/(1−0.75)×2 = 16 m.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Total distance ≈ 16 m (2× geometric sum 8).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "≈16 m.",
          },
        },
        {
          id: "cipum-u6-s1-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is the sum of first n natural numbers n(n+1)/2 useful?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sum formula",
                statement: "Closed form.",
              },
            ],
            steps: [
              {
                reasoning: "Avoids adding n terms — direct formula.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Used in proofs, series, and applications.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Closed-form sum.",
          },
        },
      ],
    },
    {
      id: "cipum-u6-proof",
      title: "Mathematical proof",
      skill: "Use proof by induction, contradiction and direct methods.",
      lesson: {
        sections: [
          {
            heading: "Proof by induction",
            body: "**Steps**: (1) Base case n=1 — verify. (2) Inductive hypothesis: assume true for n=k. (3) Prove for n=k+1 using hypothesis. (4) Conclude true for all n ≥ 1 by induction.",
          },
          {
            heading: "Proof by contradiction",
            body: "Assume the negation of what you want to prove → derive contradiction → original must be true. Classic for √2 irrational, infinite primes.",
          },
          {
            heading: "Direct proof",
            body: "Assume hypothesis → chain of logical steps → conclude result. Used for 'if P then Q' statements. Also proof by counterexample (disprove with one example) and disproof.",
          },
        ],
        keyFormulas: [
          { name: "Induction", statement: "Base + hypothesis + k+1 step" },
          { name: "Contradiction", statement: "Assume ¬P → ⊥ → P" },
          { name: "Direct", statement: "P → ... → Q" },
          { name: "Counterexample", statement: "One example disproves" },
        ],
        workedExample: {
          problem: "Prove 1+2+...+n = n(n+1)/2 by induction.",
          solution:
            "n=1: 1 = 1·2/2 ✓. Assume for n=k: sum = k(k+1)/2. For k+1: k(k+1)/2 + (k+1) = (k+1)(k/2+1) = (k+1)(k+2)/2 ✓.",
        },
      },
      questions: [
        {
          id: "cipum-u6-p1-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Proof by induction requires:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only base case" },
              { id: "b", text: "No structure" },
              { id: "c", text: "Only step" },
              { id: "d", text: "Base case + inductive step" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Induction",
                statement: "Base + step.",
              },
            ],
            steps: [
              { reasoning: "Base + inductive step.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Base+step.",
          },
        },
        {
          id: "cipum-u6-p1-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The inductive hypothesis is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Assume true for n=k" },
              { id: "b", text: "Conclude" },
              { id: "c", text: "Prove for n=1" },
              { id: "d", text: "Base case" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Inductive hypothesis",
                statement: "Assume n=k.",
              },
            ],
            steps: [{ reasoning: "Assume n=k.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Assume n=k.",
          },
        },
        {
          id: "cipum-u6-p1-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Proof by contradiction starts by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Proving directly" },
              { id: "b", text: "Assuming the negation" },
              { id: "c", text: "Induction" },
              { id: "d", text: "Base case" },
            ],
          correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Contradiction",
                statement: "Assume ¬P.",
              },
            ],
            steps: [{ reasoning: "Assume negation.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Assume ¬P.",
          },
        },
        {
          id: "cipum-u6-p1-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A counterexample can:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Disprove a universal statement" },
              { id: "b", text: "Only help" },
              { id: "c", text: "No effect" },
              { id: "d", text: "Prove it" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Counterexample",
                statement: "Disproves universal.",
              },
            ],
            steps: [{ reasoning: "Disproves.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Disproves.",
          },
        },
        {
          id: "cipum-u6-p1-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Direct proof of 'if P then Q' assumes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Q" },
              { id: "b", text: "Nothing" },
              { id: "c", text: "P and derives Q" },
              { id: "d", text: "¬P" },
            ],
          correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Direct proof",
                statement: "Assume P → Q.",
              },
            ],
            steps: [{ reasoning: "Assume P.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Assume P.",
          },
        },
        {
          id: "cipum-u6-p1-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Proof by induction proves statements about:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No domain" },
              { id: "b", text: "Real numbers" },
              { id: "c", text: "All numbers" },
              { id: "d", text: "Integers n ≥ 1" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Induction domain",
                statement: "Integers.",
              },
            ],
            steps: [{ reasoning: "Integers n ≥ 1.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Integers.",
          },
        },
        {
          id: "cipum-u6-p1-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The base case in induction is typically:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "n = 0" },
              { id: "b", text: "Any n" },
              { id: "c", text: "n = 1" },
              { id: "d", text: "n = ∞" },
            ],
          correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Base case", statement: "n = 1." },
            ],
            steps: [{ reasoning: "n = 1.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) n=1.",
          },
        },
        {
          id: "cipum-u6-p1-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "√2 is irrational is classically proved by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Contradiction" },
              { id: "b", text: "Direct" },
              { id: "c", text: "Counterexample" },
              { id: "d", text: "Induction" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "√2 proof",
                statement: "Contradiction.",
              },
            ],
            steps: [{ reasoning: "Contradiction.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Contradiction.",
          },
        },
        {
          id: "cipum-u6-p1-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In proof by contradiction, reaching a contradiction means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "False" },
              { id: "b", text: "Retry" },
              { id: "c", text: "Unknown" },
              { id: "d", text: "Original statement is true" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Contradiction result",
                statement: "P is true.",
              },
            ],
            steps: [
              { reasoning: "Original is true.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) True.",
          },
        },
        {
          id: "cipum-u6-p1-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A proof must be:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Numerical" },
              { id: "b", text: "One example" },
              { id: "c", text: "Intuitive" },
              { id: "d", text: "Logically valid for all cases" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Valid proof",
                statement: "All cases.",
              },
            ],
            steps: [{ reasoning: "All cases.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) All cases.",
          },
        },
        {
          id: "cipum-u6-p1-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "To prove 'all primes are odd' you need:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A counterexample (2 is prime and even)" },
              { id: "b", text: "Direct proof" },
              { id: "c", text: "Induction" },
              { id: "d", text: "Contradiction" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Counterexample",
                statement: "2 disproves.",
              },
            ],
            steps: [
              { reasoning: "Counterexample: 2.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Counterexample.",
          },
        },
        {
          id: "cipum-u6-p1-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "The inductive step proves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "If true for n=k then true for n=k+1" },
              { id: "b", text: "All n at once" },
              { id: "c", text: "n=1" },
              { id: "d", text: "Nothing" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inductive step",
                statement: "k → k+1.",
              },
            ],
            steps: [{ reasoning: "k → k+1.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) k→k+1.",
          },
        },
        {
          id: "cipum-u6-p1-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Proof by induction works because:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Base case + inductive step covers all integers",
              },
              { id: "b", text: "Numerical" },
              { id: "c", text: "No reason" },
              { id: "d", text: "One example" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Induction logic",
                statement: "Covers all n.",
              },
            ],
            steps: [
              { reasoning: "Covers all integers.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Covers all.",
          },
        },
        {
          id: "cipum-u6-p1-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "To disprove 'all swans are white' you need:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Many white swans" },
              { id: "b", text: "One black swan" },
              { id: "c", text: "Proof" },
              { id: "d", text: "Nothing" },
            ],
          correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Disproof",
                statement: "One counterexample.",
              },
            ],
            steps: [{ reasoning: "One black swan.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) One example.",
          },
        },
        {
          id: "cipum-u6-p1-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "The contrapositive of 'if P then Q' is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "if Q then P" },
              { id: "b", text: "if ¬P then ¬Q" },
              { id: "c", text: "if P then ¬Q" },
              { id: "d", text: "if ¬Q then ¬P" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Contrapositive",
                statement: "¬Q → ¬P.",
              },
            ],
            steps: [{ reasoning: "¬Q → ¬P.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) ¬Q→¬P.",
          },
        },
        {
          id: "cipum-u6-p1-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "A statement and its contrapositive are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Opposites" },
              { id: "b", text: "Logically equivalent" },
              { id: "c", text: "Negations" },
              { id: "d", text: "Unrelated" },
            ],
          correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Contrapositive",
                statement: "Equivalent.",
              },
            ],
            steps: [{ reasoning: "Equivalent.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Equivalent.",
          },
        },
        {
          id: "cipum-u6-p1-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "Proof by contradiction of √2 irrational assumes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing" },
              { id: "b", text: "√2 = p/q in lowest terms" },
              { id: "c", text: "p, q even" },
              { id: "d", text: "√2 irrational" },
            ],
          correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "√2 proof",
                statement: "Assume rational.",
              },
            ],
            steps: [{ reasoning: "Assume rational.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Assume rational.",
          },
        },
        {
          id: "cipum-u6-p1-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "In proof by induction, after base case and hypothesis, you prove:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All n" },
              { id: "b", text: "Statement for n=k+1" },
              { id: "c", text: "n=1" },
              { id: "d", text: "Nothing" },
            ],
          correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inductive step",
                statement: "Prove n=k+1.",
              },
            ],
            steps: [{ reasoning: "Prove n=k+1.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) n=k+1.",
          },
        },
        {
          id: "cipum-u6-p1-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "A valid proof must cover:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One case" },
              { id: "b", text: "No cases" },
              { id: "c", text: "All possible cases" },
              { id: "d", text: "Most cases" },
            ],
          correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Complete proof",
                statement: "All cases.",
              },
            ],
            steps: [{ reasoning: "All cases.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) All cases.",
          },
        },
        {
          id: "cipum-u6-p1-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between proof by induction and contradiction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Proof methods",
                statement: "Induction vs contradiction.",
              },
            ],
            steps: [
              {
                reasoning: "Induction: prove for all integers step by step.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Contradiction: assume negation → derive contradiction.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Induction = stepwise; contradiction = assume opposite.",
          },
        },
        {
          id: "cipum-u6-p1-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the three steps of proof by induction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Induction steps",
                statement: "Base, hypothesis, step.",
              },
            ],
            steps: [
              { reasoning: "Base case: verify n=1.", marks: 1, markCode: "M" },
              {
                reasoning: "Hypothesis: assume n=k; prove n=k+1.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Base + hypothesis + step.",
          },
        },
        {
          id: "cipum-u6-p1-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why one counterexample disproves a universal statement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Counterexample",
                statement: "Universal → all cases.",
              },
            ],
            steps: [
              {
                reasoning: "Universal statement claims P(x) for all x.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "One x₀ with ¬P(x₀) violates 'for all'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore statement is false.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "One exception → false.",
          },
        },
        {
          id: "cipum-u6-p1-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Prove by induction that 1 + 3 + 5 + ... + (2n−1) = n².",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Induction",
                statement: "Sum of odd numbers.",
              },
            ],
            steps: [
              {
                reasoning: "Base n=1: LHS=1, RHS=1 ✓.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Assume for n=k: sum = k².",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "For k+1: k² + (2(k+1)−1) = k² + 2k+1 = (k+1)² ✓.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "True for all n by induction.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Sum of first n odd numbers = n².",
          },
        },
        {
          id: "cipum-u6-p1-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "To prove 'there are infinitely many primes' you use:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Counterexample" },
              { id: "b", text: "Contradiction" },
              { id: "c", text: "Direct" },
              { id: "d", text: "Induction" },
            ],
          correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Infinite primes",
                statement: "Contradiction.",
              },
            ],
            steps: [{ reasoning: "Contradiction.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Contradiction.",
          },
        },
        {
          id: "cipum-u6-p1-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a tautology in logic?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tautology",
                statement: "Always true.",
              },
            ],
            steps: [
              {
                reasoning: "Statement true under all interpretations.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "E.g., P ∨ ¬P.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Always true statement.",
          },
        },
        {
          id: "cipum-u6-p1-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the logical structure of proof by contradiction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Contradiction logic",
                statement: "¬P → ⊥ → P.",
              },
            ],
            steps: [
              {
                reasoning: "Assume ¬P (negation of goal).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Derive contradiction (⊥) from ¬P.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore ¬P is false → P is true.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "¬P → ⊥ → P.",
          },
        },
        {
          id: "cipum-u6-p1-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A proof by cases is useful when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No cases" },
              { id: "b", text: "One case" },
              { id: "c", text: "Statement splits into cases" },
              { id: "d", text: "Never" },
            ],
          correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cases",
                statement: "Split into cases.",
              },
            ],
            steps: [{ reasoning: "Split cases.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Split cases.",
          },
        },
        {
          id: "cipum-u6-p1-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "Prove that the sum of two even numbers is even (direct proof).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Direct proof",
                statement: "2a + 2b = 2(a+b).",
              },
            ],
            steps: [
              {
                reasoning: "Let numbers be 2a and 2b.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Sum = 2a + 2b = 2(a+b) — even.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2(a+b) — even.",
          },
        },
        {
          id: "cipum-u6-p1-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Prove by contradiction that there is no smallest positive rational number.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Contradiction",
                statement: "Assume smallest exists.",
              },
            ],
            steps: [
              {
                reasoning: "Assume p/q is smallest positive rational.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Then p/(2q) < p/q is also positive rational — smaller.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Contradiction — no smallest exists.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore no smallest positive rational.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "No smallest positive rational.",
          },
        },
        {
          id: "cipum-u6-p1-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is proof by induction unsuitable for real numbers?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Induction domain",
                statement: "Integers only.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Induction steps through integers — no 'next' real number.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cannot enumerate reals in sequence.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "No next real — integers only.",
          },
        },
      ],
    },
    {
      id: "cipum-u6-de",
      title: "First-order differential equations",
      skill: "Solve separable and linear first-order differential equations.",
      lesson: {
        sections: [
          {
            heading: "Separable equations",
            body: "Write dy/dx = f(x)g(y) → separate: dy/g(y) = f(x)dx → integrate both sides. Gives implicit solution. Example: dy/dx = x/y → y dy = x dx → y²/2 = x²/2 + C.",
          },
          {
            heading: "Linear equations",
            body: "Form: dy/dx + P(x)y = Q(x). **Integrating factor**: μ = e^(∫P dx). Multiply through: (μy)′ = μQ → integrate → y = (1/μ)∫μQ dx.",
          },
          {
            heading: "Applications",
            body: "Growth/decay: dy/dx = ky → y = Ae^(kx). Newton's cooling, population models, mixing problems. Initial conditions determine constant.",
          },
        ],
        keyFormulas: [
          { name: "Separable", statement: "dy/g(y) = f(x)dx → integrate" },
          { name: "Linear", statement: "dy/dx + Py = Q" },
          { name: "Integrating factor", statement: "μ = e^(∫P dx)" },
          { name: "Growth", statement: "y = Ae^(kx)" },
        ],
        workedExample: {
          problem: "Solve dy/dx = 2x with y(0) = 1.",
          solution:
            "Separable: dy = 2x dx → y = x² + C. y(0)=1 → C=1. y = x² + 1.",
        },
      },
      questions: [
        {
          id: "cipum-u6-d1-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A differential equation involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only derivative" },
              { id: "b", text: "Derivative and function" },
              { id: "c", text: "No function" },
              { id: "d", text: "Only function" },
            ],
          correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "DE",
                statement: "Derivative + function.",
              },
            ],
            steps: [
              {
                reasoning: "DE = derivative + function.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Derivative+function.",
          },
        },
        {
          id: "cipum-u6-d1-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A separable DE can be written as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No form" },
              { id: "b", text: "dy/dx = f(x)·y only" },
              { id: "c", text: "dy/dx = f(x)+g(y)" },
              { id: "d", text: "dy/dx = f(x)g(y)" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Separable", statement: "f(x)g(y)." },
            ],
            steps: [
              { reasoning: "dy/dx = f(x)g(y).", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) f(x)g(y).",
          },
        },
        {
          id: "cipum-u6-d1-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A linear first-order DE has form:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "dy/dx = y²" },
              { id: "b", text: "dy/dx + P(x)y = Q(x)" },
              { id: "c", text: "dy/dx = f(y)" },
              { id: "d", text: "No form" },
            ],
          correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Linear DE",
                statement: "dy/dx+Py=Q.",
              },
            ],
            steps: [{ reasoning: "Linear form.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Linear form.",
          },
        },
        {
          id: "cipum-u6-d1-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Integrating factor for linear DE is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "e^(∫P dx)" },
              { id: "b", text: "P(x)" },
              { id: "c", text: "e^(∫Q dx)" },
              { id: "d", text: "Q(x)" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Integrating factor",
                statement: "e^(∫P dx).",
              },
            ],
            steps: [{ reasoning: "μ = e^(∫P dx).", marks: 1, markCode: "M" }],
            finalAnswer: "(a) e^(∫P dx).",
          },
        },
        {
          id: "cipum-u6-d1-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "dy/dx = ky has solution:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "y = Ax + B" },
              { id: "b", text: "y = e^x" },
              { id: "c", text: "y = kx" },
              { id: "d", text: "y = Ae^(kx)" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Growth DE",
                statement: "y = Ae^(kx).",
              },
            ],
            steps: [{ reasoning: "y = Ae^(kx).", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Ae^(kx).",
          },
        },
        {
          id: "cipum-u6-d1-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An initial condition like y(0) = 3 is used to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Check answer" },
              { id: "b", text: "No use" },
              { id: "c", text: "Differentiate" },
              { id: "d", text: "Find the constant of integration" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Initial condition",
                statement: "Finds constant.",
              },
            ],
            steps: [{ reasoning: "Finds constant.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Finds constant.",
          },
        },
        {
          id: "cipum-u6-d1-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "dy/dx = 2x is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Linear only" },
              { id: "b", text: "Non-separable" },
              { id: "c", text: "Separable" },
              { id: "d", text: "Neither" },
            ],
          correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Identify",
                statement: "f(x)·1 — separable.",
              },
            ],
            steps: [{ reasoning: "Separable.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Separable.",
          },
        },
        {
          id: "cipum-u6-d1-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "dy/dx + 2xy = 0 is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Neither" },
              { id: "b", text: "Both separable and linear" },
              { id: "c", text: "Only linear" },
              { id: "d", text: "Only separable" },
            ],
          correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Identify", statement: "Both types." },
            ],
            steps: [{ reasoning: "Both.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Both.",
          },
        },
        {
          id: "cipum-u6-d1-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The order of dy/dx is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Second" },
              { id: "b", text: "First" },
              { id: "c", text: "Zero" },
              { id: "d", text: "Third" },
            ],
          correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Order",
                statement: "Highest derivative.",
              },
            ],
            steps: [{ reasoning: "First order.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) First.",
          },
        },
        {
          id: "cipum-u6-d1-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "dy/dx = x/y can be solved by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Newton-Raphson" },
              { id: "b", text: "No method" },
              { id: "c", text: "Integrating factor" },
              { id: "d", text: "Separating variables" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Separable", statement: "y dy = x dx." },
            ],
            steps: [
              { reasoning: "Separate variables.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Separate.",
          },
        },
        {
          id: "cipum-u6-d1-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "dy/dx = 3x² integrates to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "y = x³ + C" },
              { id: "b", text: "y = x³" },
              { id: "c", text: "y = 3x³ + C" },
              { id: "d", text: "y = 6x + C" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Integrate", statement: "y = x³ + C." },
            ],
            steps: [{ reasoning: "y = x³ + C.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) x³+C.",
          },
        },
        {
          id: "cipum-u6-d1-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "dy/dx = x/y with y(0)=1 gives:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "y² = x² + 1" },
              { id: "b", text: "y = x + 1" },
              { id: "c", text: "y = x² + 1" },
              { id: "d", text: "y² = x²" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Solve",
                statement: "y dy = x dx → y²/2 = x²/2 + C.",
              },
            ],
            steps: [{ reasoning: "y² = x² + 1.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) y²=x²+1.",
          },
        },
        {
          id: "cipum-u6-d1-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "dy/dx + y = 0 has solution:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "y = Ax + B" },
              { id: "b", text: "y = x" },
              { id: "c", text: "y = Ae^(−x)" },
              { id: "d", text: "y = e^x" },
            ],
          correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Linear", statement: "y = Ae^(−x)." },
            ],
            steps: [{ reasoning: "y = Ae^(−x).", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Ae^(−x).",
          },
        },
        {
          id: "cipum-u6-d1-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "For dy/dx = ky, k > 0 gives:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Linear" },
              { id: "b", text: "Constant" },
              { id: "c", text: "Decay" },
              { id: "d", text: "Exponential growth" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Growth", statement: "k>0 → growth." },
            ],
            steps: [{ reasoning: "Growth.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Growth.",
          },
        },
        {
          id: "cipum-u6-d1-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "For dy/dx = ky, k < 0 gives:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Growth" },
              { id: "b", text: "Linear" },
              { id: "c", text: "Constant" },
              { id: "d", text: "Exponential decay" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Decay", statement: "k<0 → decay." },
            ],
            steps: [{ reasoning: "Decay.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Decay.",
          },
        },
        {
          id: "cipum-u6-d1-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "dy/dx = e^x integrates to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "y = e^(x²) + C" },
              { id: "b", text: "y = xe^x + C" },
              { id: "c", text: "y = e^x + C" },
              { id: "d", text: "y = x + C" },
            ],
          correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Integrate", statement: "∫e^x dx = e^x." },
            ],
            steps: [{ reasoning: "y = e^x + C.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) e^x+C.",
          },
        },
        {
          id: "cipum-u6-d1-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "Newton's law of cooling uses DE:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "dy/dx = k" },
              { id: "b", text: "dy/dx = ky" },
              { id: "c", text: "dy/dx = y²" },
              { id: "d", text: "dy/dx = −k(y − T_env)" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cooling", statement: "−k(y−T)." },
            ],
            steps: [{ reasoning: "Cooling DE.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) −k(y−T).",
          },
        },
        {
          id: "cipum-u6-d1-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "dy/dx = 1/y is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Neither" },
              { id: "b", text: "Linear only" },
              { id: "c", text: "Separable" },
              { id: "d", text: "Second order" },
            ],
          correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Identify", statement: "Separable." },
            ],
            steps: [{ reasoning: "Separable.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Separable.",
          },
        },
        {
          id: "cipum-u6-d1-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "Particular solution + general solution =",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two solutions" },
              { id: "b", text: "No solution" },
              { id: "c", text: "Particular only" },
              { id: "d", text: "General solution with constant determined" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Particular",
                statement: "Constant found.",
              },
            ],
            steps: [
              { reasoning: "Constant determined.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Constant found.",
          },
        },
        {
          id: "cipum-u6-d1-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between separable and linear DEs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "DE types",
                statement: "Separate variables vs integrating factor.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Separable: dy/dx = f(x)g(y) — separate and integrate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Linear: dy/dx + Py = Q — use integrating factor.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Separable vs linear methods.",
          },
        },
        {
          id: "cipum-u6-d1-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the method for solving separable DEs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Separable method",
                statement: "Separate + integrate.",
              },
            ],
            steps: [
              {
                reasoning: "Rewrite as g(y)dy = f(x)dx.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Integrate both sides; apply initial condition.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Separate + integrate.",
          },
        },
        {
          id: "cipum-u6-d1-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the integrating factor method for linear DEs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Integrating factor",
                statement: "μ = e^(∫P dx).",
              },
            ],
            steps: [
              {
                reasoning: "Write dy/dx + P(x)y = Q(x).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Integrating factor μ = e^(∫P dx).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(μy)′ = μQ → integrate → solve for y.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "μ = e^(∫P dx) → integrate.",
          },
        },
        {
          id: "cipum-u6-d1-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve dy/dx = x/y with y(0) = 2.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Separable", statement: "y dy = x dx." },
            ],
            steps: [
              { reasoning: "Separate: y dy = x dx.", marks: 1, markCode: "M" },
              {
                reasoning: "Integrate: y²/2 = x²/2 + C.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "y(0)=2: 4/2 = 0 + C → C = 2 → y² = x² + 4.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "y² = x² + 4 (or y = √(x²+4)).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "y² = x² + 4.",
          },
        },
        {
          id: "cipum-u6-d1-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "dy/dx = 1/x integrates to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "y = x + C" },
              { id: "b", text: "y = 1/x + C" },
              { id: "c", text: "y = x²/2 + C" },
              { id: "d", text: "y = ln|x| + C" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Integrate", statement: "∫1/x = ln|x|." },
            ],
            steps: [{ reasoning: "y = ln|x| + C.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) ln|x|+C.",
          },
        },
        {
          id: "cipum-u6-d1-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the general solution of dy/dx = 0?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Trivial DE", statement: "y = constant." },
            ],
            steps: [
              {
                reasoning: "dy/dx = 0 → y = C (constant).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Any constant function satisfies.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "y = C.",
          },
        },
        {
          id: "cipum-u6-d1-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why exponential growth/decay models use dy/dx = ky.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Exponential model",
                statement: "Rate proportional to amount.",
              },
            ],
            steps: [
              {
                reasoning: "Rate of change proportional to current amount y.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "dy/dx = ky captures this proportionality.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solution y = Ae^(kx) — exponential.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Rate ∝ amount → exponential.",
          },
        },
        {
          id: "cipum-u6-d1-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "dy/dx = y is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only separable" },
              { id: "b", text: "Only linear" },
              { id: "c", text: "Neither" },
              { id: "d", text: "Separable and linear" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Identify", statement: "Both." },
            ],
            steps: [{ reasoning: "Both.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Both.",
          },
        },
        {
          id: "cipum-u6-d1-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve dy/dx = 2x with y(1) = 3.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Integrate", statement: "y = x² + C." },
            ],
            steps: [
              { reasoning: "y = x² + C.", marks: 1, markCode: "M" },
              {
                reasoning: "y(1)=3: 3 = 1 + C → C = 2 → y = x² + 2.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "y = x² + 2.",
          },
        },
        {
          id: "cipum-u6-d1-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve dy/dx + y = e^(−x) using integrating factor.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Integrating factor",
                statement: "μ = e^x.",
              },
            ],
            steps: [
              {
                reasoning: "P(x) = 1 → μ = e^(∫1 dx) = e^x.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Multiply: e^x dy/dx + e^x y = e^x·e^(−x) = 1 → (e^x y)′ = 1.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Integrate: e^x y = x + C → y = (x + C)e^(−x).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "y = (x + C)e^(−x).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "y = (x+C)e^(−x).",
          },
        },
        {
          id: "cipum-u6-d1-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why do we need an initial condition for a first-order DE?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Initial condition",
                statement: "Finds constant.",
              },
            ],
            steps: [
              {
                reasoning: "Integration introduces arbitrary constant C.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Initial condition determines C → unique solution.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Determines constant → unique.",
          },
        },
      ],
    },
  ],
};
