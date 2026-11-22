import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "cialfm-u8-lesson-8-1",
  code: "8-1",
  title: "Continuous Random Variables",
  goal: "I CAN work with pdfs, cdfs and probabilities for continuous variables.",
  standards: ["Cambridge A Level Further Mathematics 9231 Paper 5: Probability & Statistics"],
  vocabulary: [
    { term: "Continuous random variable", definition: "Variable taking any value in an interval." },
    { term: "Probability density function", definition: "f(x) with $\\int f = 1$; probabilities from areas." },
    { term: "Cumulative distribution function", definition: "F(x) = P(X ≤ x) = area under pdf up to x." },
    { term: "Median", definition: "Value m where F(m) = 0.5." },
  ],
  concepts: [
    {
      id: "cialfm-u8-s1-continuous",
      title: "PDFs and CDFs of continuous variables",
      skill: "Use pdf/cdf relationships to find probabilities, medians and quartiles.",
      lesson: {
        sections: [
          {
            heading: "PDF and CDF",
            body: "For a continuous variable, $f(x) \\ge 0$ and $\\int_{-\\infty}^{\\infty} f(x)\\,dx = 1$. The cdf is $F(x) = \\int_{-\\infty}^{x} f(t)\\,dt$, so $P(a < X < b) = F(b) - F(a) = \\int_a^b f(x)\\,dx$ — probabilities are areas under the pdf curve.",
          },
          {
            heading: "Finding constants and quantiles",
            body: "An unknown constant in f(x) is found from the total-probability condition $\\int f = 1$. The median m solves $F(m) = 0.5$; quartiles solve $F(q) = 0.25, 0.75$.",
          },
        ],
        keyFormulas: [
          { name: "CDF", statement: "$F(x) = \\int_{-\\infty}^{x} f(t)\\,dt$" },
          { name: "Probability", statement: "$P(a<X<b) = \\int_a^b f(x)\\,dx$" },
        ],
        workedExample: {
          problem: "$f(x) = kx$ for $0 \\le x \\le 2$. Find k and P(X > 1).",
          solution: "$\\int_0^2 kx\\,dx = 2k = 1 \\Rightarrow k = \\tfrac12$. $P(X>1) = \\int_1^2 \\tfrac12 x\\,dx = \\tfrac14(4-1) = 0.75$.",
        },
      },
      questions: [
        {
          id: "cialfm-u8-c-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For a continuous random variable, $\\int_{-\\infty}^{\\infty} f(x)\\,dx$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "0" },
            { id: "b", text: "undefined" },
            { id: "c", text: "1" },
            { id: "d", text: "f(0)" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Total probability", statement: "Area under pdf = 1." }],
            steps: [{ reasoning: "Total area under pdf is 1.", marks: 1, markCode: "A" }],
            finalAnswer: "1",
          },
        },
        {
          id: "cialfm-u8-c-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "$f(x) = \\tfrac{3}{8}x^2$ for $0 \\le x \\le 2$. Verify it is a valid pdf.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Check pdf", statement: "Integrate over domain; need = 1." }],
            steps: [
              { reasoning: "$\\int_0^2 \\tfrac{3}{8}x^2 dx = \\tfrac{3}{8} \\cdot \\tfrac{8}{3} = 1$.", marks: 1, markCode: "M" },
              { reasoning: "f(x) ≥ 0 on domain, so valid.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Valid pdf",
          },
        },
        {
          id: "cialfm-u8-c-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "$f(x) = \\tfrac12 x$ for $0 \\le x \\le 2$. Find P(0.5 < X < 1.5).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Area under pdf", statement: "Integrate f over interval." }],
            steps: [
              { reasoning: "$P = \\int_{0.5}^{1.5} \\tfrac12 x\\,dx = \\tfrac14[x^2]_{0.5}^{1.5}$.", marks: 1, markCode: "M" },
              { reasoning: "$= \\tfrac14(2.25 - 0.25) = 0.5$.", marks: 1, markCode: "M" },
              { reasoning: "Alternative via F: F(1.5) − F(0.5).", marks: 1, markCode: "M" },
              { reasoning: "Answer: 0.5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.5",
          },
        },
        {
          id: "cialfm-u8-c-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "$f(x) = 2x$ for $0 \\le x \\le 1$. Find the median.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Median", statement: "Solve F(m) = 0.5." }],
            steps: [
              { reasoning: "$F(x) = \\int_0^x 2t\\,dt = x^2$.", marks: 1, markCode: "M" },
              { reasoning: "Set $x^2 = 0.5$.", marks: 1, markCode: "M" },
              { reasoning: "$m = \\sqrt{0.5} \\approx 0.707$.", marks: 1, markCode: "M" },
              { reasoning: "Take positive root (in domain).", marks: 1, markCode: "M" },
              { reasoning: "Answer: ≈ 0.707.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 0.707$",
          },
        },
        {
          id: "cialfm-u8-c-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For a continuous random variable $X$, the probability $P(X = a)$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "0.5" },
            { id: "b", text: "it depends on $a$" },
            { id: "c", text: "0" },
            { id: "d", text: "$f(a)$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Continuous variable", statement: "Single points carry zero probability." }],
            steps: [{ reasoning: "$P(X=a) = \\int_a^a f(x)\\,dx = 0$.", marks: 1, markCode: "A" }],
            finalAnswer: "0",
          },
        },
        {
          id: "cialfm-u8-c-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "$X$ has pdf $f(x) = \\tfrac{1}{3}$ for $0 \\le x \\le 3$. Find $P(1 < X < 2)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.3333, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Uniform pdf", statement: "Probability = density × width." }],
            steps: [
              { reasoning: "$P = \\int_1^2 \\tfrac{1}{3}\\,dx = \\tfrac{1}{3} \\times 1 = \\tfrac{1}{3}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: ≈ 0.333.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\tfrac{1}{3}$",
          },
        },
        {
          id: "cialfm-u8-c-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "$f(x) = kx^2$ for $0 \\le x \\le 1$. Find the value of $k$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Total probability", statement: "$\\int f = 1$ fixes $k$." }],
            steps: [
              { reasoning: "$\\int_0^1 kx^2\\,dx = \\tfrac{k}{3} = 1 \\Rightarrow k = 3$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cialfm-u8-c-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "The median $m$ of a continuous random variable satisfies…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$f(m) = 0.5$" },
            { id: "b", text: "$F(m) = 1$" },
            { id: "c", text: "$P(X < m) = 0.25$" },
            { id: "d", text: "$F(m) = 0.5$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Median", statement: "Half the probability lies below it." }],
            steps: [{ reasoning: "Median is where the cdf reaches 0.5.", marks: 1, markCode: "A" }],
            finalAnswer: "$F(m) = 0.5$",
          },
        },
        {
          id: "cialfm-u8-c-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "$f(x) = 3x^2$ for $0 \\le x \\le 1$. Find $P(X > 0.5)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.875 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Area under pdf", statement: "Integrate f over the interval." }],
            steps: [
              { reasoning: "$P = \\int_{0.5}^1 3x^2\\,dx = [x^3]_{0.5}^1$.", marks: 1, markCode: "M" },
              { reasoning: "$= 1 - 0.125 = 0.875$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 0.875.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.875",
          },
        },
        {
          id: "cialfm-u8-c-q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "$f(x) = 2x$ for $0 \\le x \\le 1$. Find $F(x)$ and hence $P(X > 0.75)$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "CDF", statement: "$F(x) = \\int_0^x f(t)\\,dt$." }],
            steps: [
              { reasoning: "$F(x) = \\int_0^x 2t\\,dt = x^2$ for $0 \\le x \\le 1$.", marks: 1, markCode: "M" },
              { reasoning: "$P(X > 0.75) = 1 - F(0.75) = 1 - 0.5625$.", marks: 1, markCode: "M" },
              { reasoning: "$= 0.4375$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $F(x) = x^2$; $P(X > 0.75) = 0.4375$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$F(x) = x^2$; $P(X > 0.75) = 0.4375$",
          },
        },
        {
          id: "cialfm-u8-c-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "For a continuous random variable, $P(a < X < b)$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\int_a^b F(x)\\,dx$" },
            { id: "b", text: "$\\int_a^b f(x)\\,dx$" },
            { id: "c", text: "$f(b) - f(a)$" },
            { id: "d", text: "$F(a) - F(b)$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Probability as area", statement: "Area under the pdf curve." }],
            steps: [{ reasoning: "Probability over an interval is the integral of the pdf.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\int_a^b f(x)\\,dx$",
          },
        },
        {
          id: "cialfm-u8-c-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "$f(x) = kx^2$ for $0 \\le x \\le 1$. Find the median.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.7937, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Median", statement: "Solve $F(m) = 0.5$." }],
            steps: [
              { reasoning: "$k = 3$, so $F(x) = \\int_0^x 3t^2\\,dt = x^3$.", marks: 1, markCode: "M" },
              { reasoning: "$x^3 = 0.5 \\Rightarrow m = \\sqrt[3]{0.5}$.", marks: 1, markCode: "M" },
              { reasoning: "$m \\approx 0.7937$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 0.7937$",
          },
        },
        {
          id: "cialfm-u8-c-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "As $x \\to \\infty$, the cumulative distribution function $F(x)$ tends to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "0" },
            { id: "b", text: "1" },
            { id: "c", text: "$f(\\infty)$" },
            { id: "d", text: "undefined" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "CDF limits", statement: "$F \\to 1$ as $x \\to \\infty$; $F \\to 0$ as $x \\to -\\infty$." }],
            steps: [{ reasoning: "All probability is eventually included, so $F(x) \\to 1$.", marks: 1, markCode: "A" }],
            finalAnswer: "1",
          },
        },
        {
          id: "cialfm-u8-c-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "$f(x) = k/x^2$ for $x \\ge 1$. Find (a) $k$ and (b) $P(X > 2)$.",
          response: { type: "numeric", parts: [
            { label: "a", answer: 1 },
            { label: "b", answer: 0.5 },
          ] },
          markscheme: {
            principles: [{ kind: "technique", name: "Total probability", statement: "$\\int_1^\\infty kx^{-2}\\,dx = k$." }],
            steps: [
              { reasoning: "$\\int_1^\\infty kx^{-2}\\,dx = k[-x^{-1}]_1^\\infty = k = 1$.", marks: 1, markCode: "M" },
              { reasoning: "$F(x) = 1 - 1/x$, so $P(X > 2) = 1 - F(2) = 1/2$.", marks: 1, markCode: "M" },
              { reasoning: "Answers: (a) 1, (b) 0.5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 1; (b) 0.5",
          },
        },
        {
          id: "cialfm-u8-c-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "$f(x) = x$ for $0 \\le x \\le \\sqrt{2}$, and $f(x) = 0$ otherwise. Find $P(X < 1)$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Area under pdf", statement: "Integrate f over the required interval." }],
            steps: [
              { reasoning: "Check pdf: $\\int_0^{\\sqrt{2}} x\\,dx = \\tfrac12 \\times 2 = 1$. ✓", marks: 1, markCode: "M" },
              { reasoning: "$P(X < 1) = \\int_0^1 x\\,dx = \\tfrac12[x^2]_0^1$.", marks: 1, markCode: "M" },
              { reasoning: "$= \\tfrac12(1 - 0) = 0.5$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 0.5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.5",
          },
        },
        {
          id: "cialfm-u8-c-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "$X$ is uniform on $2 \\le x \\le 6$, so $f(x) = 0.25$. Find $P(3 < X < 5)$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "1" },
            { id: "b", text: "0.25" },
            { id: "c", text: "0.75" },
            { id: "d", text: "0.5" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Uniform pdf", statement: "Probability = density × interval width." }],
            steps: [{ reasoning: "$P = 0.25 \\times (5-3) = 0.5$.", marks: 1, markCode: "A" }],
            finalAnswer: "0.5",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cialfm-u8-c-notes",
      title: "Continuous variables — revision notes",
      summary: "∫f=1; F(x)=∫f; probabilities are areas; median solves F=0.5.",
      sections: [
        { heading: "Key links", body: "$F(x) = \\int f$; $P(a<X<b) = F(b)-F(a)$; median at $F = 0.5$." },
        { heading: "Pitfall", body: "P(X = a) = 0 for continuous variables — only intervals have probability." },
      ],
    },
  ],
};
