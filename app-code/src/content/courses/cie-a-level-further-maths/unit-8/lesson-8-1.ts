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
            { id: "a", text: "1" }, { id: "b", text: "0" }, { id: "c", text: "f(0)" }, { id: "d", text: "undefined" },
          ], correctChoiceId: "a" },
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
