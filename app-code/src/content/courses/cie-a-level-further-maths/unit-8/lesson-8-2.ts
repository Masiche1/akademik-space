import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "cialfm-u8-lesson-8-2",
  code: "8-2",
  title: "Expectation, Variance and Functions of Variables",
  goal: "I CAN compute E(X), Var(X) and transform random variables.",
  standards: ["Cambridge A Level Further Mathematics 9231 Paper 5: Probability & Statistics"],
  vocabulary: [
    { term: "Expectation", definition: "$E(X) = \\int xf(x)\\,dx$ or $\\Sigma xp(x)$ — the mean." },
    { term: "Variance", definition: "$\\text{Var}(X) = E(X^2) - [E(X)]^2$ — spread measure." },
    { term: "Linear transformation", definition: "Y = aX + b scales mean and variance predictably." },
    { term: "Standard deviation", definition: "Square root of variance." },
  ],
  concepts: [
    {
      id: "cialfm-u8-s2-expectation",
      title: "Expectation and variance",
      skill: "Compute means and variances and apply linear transformations.",
      lesson: {
        sections: [
          {
            heading: "Mean and variance",
            body: "For continuous X: $E(X) = \\int xf(x)\\,dx$ and $E(X^2) = \\int x^2 f(x)\\,dx$, giving $\\text{Var}(X) = E(X^2) - [E(X)]^2$. Always compute $E(X^2)$ as its own integral — do not square the mean.",
          },
          {
            heading: "Linear transformations",
            body: "If $Y = aX + b$ then $E(Y) = aE(X) + b$ and $\\text{Var}(Y) = a^2\\text{Var}(X)$ — the constant b does not affect variance. This lets you rescale measurements (e.g. units conversions) without recomputing integrals.",
          },
        ],
        keyFormulas: [
          { name: "Expectation", statement: "$E(X) = \\int xf(x)\\,dx$" },
          { name: "Variance", statement: "$\\text{Var}(X) = E(X^2) - [E(X)]^2$" },
          { name: "Transform", statement: "$Y=aX+b \\Rightarrow E(Y)=aE(X)+b,\\ \\text{Var}(Y)=a^2\\text{Var}(X)$" },
        ],
        workedExample: {
          problem: "$f(x) = 2x$ for $0 \\le x \\le 1$. Find E(X) and Var(X).",
          solution: "$E(X) = \\int_0^1 2x^2 dx = \\tfrac23$. $E(X^2) = \\int_0^1 2x^3 dx = \\tfrac12$. Var $= \\tfrac12 - \\tfrac49 = \\tfrac1{18}$.",
        },
      },
      questions: [
        {
          id: "cialfm-u8-e-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which formula gives Var(X)?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$E(X^2) - [E(X)]^2$" }, { id: "b", text: "$[E(X)]^2 - E(X^2)$" }, { id: "c", text: "$E(X)^2$" }, { id: "d", text: "$E(X^2)$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Variance", statement: "Var = E(X²) − E(X)²." }],
            steps: [{ reasoning: "Correct order: E(X²) − [E(X)]².", marks: 1, markCode: "A" }],
            finalAnswer: "$E(X^2) - [E(X)]^2$",
          },
        },
        {
          id: "cialfm-u8-e-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "X has E(X) = 5 and Var(X) = 4. Find E(2X + 3).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Linear transform", statement: "E(aX+b) = aE(X)+b." }],
            steps: [
              { reasoning: "$E(2X+3) = 2(5) + 3 = 13$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 13.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "13",
          },
        },
        {
          id: "cialfm-u8-e-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "$f(x) = 3x^2$ for $0 \\le x \\le 1$. Find E(X).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "E(X) integral", statement: "$\\int xf(x)dx$." }],
            steps: [
              { reasoning: "$E(X) = \\int_0^1 x \\cdot 3x^2\\,dx = \\int_0^1 3x^3\\,dx$.", marks: 1, markCode: "M" },
              { reasoning: "$= 3 \\cdot \\tfrac14 = \\tfrac34$.", marks: 1, markCode: "M" },
              { reasoning: "Evaluate at bounds: $3 \\cdot \\tfrac14[x^4]_0^1$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 0.75.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.75",
          },
        },
        {
          id: "cialfm-u8-e-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "$f(x) = 2x$ for $0 \\le x \\le 1$. Find Var(X) and hence Var(3X − 2).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Var via E(X²)", statement: "Compute both moments then transform." }],
            steps: [
              { reasoning: "$E(X) = \\int_0^1 2x^2 dx = \\tfrac23$; $E(X^2) = \\int_0^1 2x^3 dx = \\tfrac12$.", marks: 1, markCode: "M" },
              { reasoning: "Var(X) $= \\tfrac12 - \\tfrac49 = \\tfrac1{18}$.", marks: 1, markCode: "M" },
              { reasoning: "Var(3X−2) $= 9\\text{Var}(X) = \\tfrac{9}{18} = \\tfrac12$.", marks: 1, markCode: "M" },
              { reasoning: "Constant −2 does not affect variance.", marks: 1, markCode: "M" },
              { reasoning: "Answer: Var(X)=1/18, Var(3X−2)=1/2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Var(X) = 1/18; Var(3X−2) = 1/2",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cialfm-u8-e-notes",
      title: "Expectation and variance — notes",
      summary: "E(X)=∫xf; Var=E(X²)−E(X)²; Y=aX+b ⇒ Var scales by a².",
      sections: [
        { heading: "Moments", body: "Compute E(X) and E(X²) separately; never square the mean inside the integral." },
        { heading: "Transforms", body: "$E(aX+b) = aE(X)+b$; $\\text{Var}(aX+b) = a^2\\text{Var}(X)$." },
      ],
    },
  ],
};
