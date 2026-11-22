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
            { id: "a", text: "$[E(X)]^2 - E(X^2)$" },
            { id: "b", text: "$E(X^2) - [E(X)]^2$" },
            { id: "c", text: "$E(X)^2$" },
            { id: "d", text: "$E(X^2)$" },
          ], correctChoiceId: "b" },
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
        {
          id: "cialfm-u8-e-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For a continuous random variable, $E(X)$ is computed by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\int xf(x)\\,dx$" },
            { id: "b", text: "$\\int f(x)\\,dx$" },
            { id: "c", text: "$\\sum xf(x)$" },
            { id: "d", text: "$\\int x^2f(x)\\,dx$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Expectation", statement: "$E(X)=\\int xf(x)\\,dx$." }],
            steps: [{ reasoning: "Continuous expectation uses $\\int xf(x)dx$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\int xf(x)\\,dx$",
          },
        },
        {
          id: "cialfm-u8-e-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "$f(x)=\\tfrac12$ for $0 \\le x \\le 2$. Find $E(X)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "E(X) integral", statement: "$\\int xf(x)dx$." }],
            steps: [
              { reasoning: "$E(X) = \\int_0^2 x \\cdot \\tfrac12\\,dx = \\tfrac12 \\cdot \\tfrac{x^2}{2}\\Big|_0^2 = \\tfrac12 \\cdot 2 = 1$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 1.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1",
          },
        },
        {
          id: "cialfm-u8-e-q7",
          difficulty: "core",
          totalMarks: 4,
          stem: "$f(x)=2(1-x)$ for $0 \\le x \\le 1$. Find $E(X)$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "E(X) integral", statement: "$\\int xf(x)dx$." }],
            steps: [
              { reasoning: "$E(X) = \\int_0^1 x \\cdot 2(1-x)\\,dx = 2\\int_0^1 (x-x^2)\\,dx$.", marks: 1, markCode: "M" },
              { reasoning: "$= 2\\left[\\tfrac{x^2}{2}-\\tfrac{x^3}{3}\\right]_0^1 = 2\\left(\\tfrac12-\\tfrac13\\right)$.", marks: 1, markCode: "M" },
              { reasoning: "$= 2 \\cdot \\tfrac16 = \\tfrac13$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\tfrac13$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\tfrac13$",
          },
        },
        {
          id: "cialfm-u8-e-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $Y = aX+b$, $\\mathrm{Var}(Y)$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$a^2\\mathrm{Var}(X)+b^2$" },
            { id: "b", text: "$a\\mathrm{Var}(X)+b$" },
            { id: "c", text: "$a^2\\mathrm{Var}(X)$" },
            { id: "d", text: "$\\mathrm{Var}(X)+b$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "formula", name: "Variance transform", statement: "$\\mathrm{Var}(aX+b)=a^2\\mathrm{Var}(X)$." }],
            steps: [{ reasoning: "Constant $b$ does not affect variance; scale factor squares.", marks: 1, markCode: "A" }],
            finalAnswer: "$a^2\\mathrm{Var}(X)$",
          },
        },
        {
          id: "cialfm-u8-e-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Given $E(X)=4$ and $\\mathrm{Var}(X)=9$, find $E(2X-1)$ and $\\mathrm{Var}(2X-1)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 7 }, { label: "b", answer: 36 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Linear transform", statement: "$E(aX+b)=aE(X)+b$; $\\mathrm{Var}(aX+b)=a^2\\mathrm{Var}(X)$." }],
            steps: [
              { reasoning: "$E(2X-1) = 2(4)-1 = 7$.", marks: 1, markCode: "M" },
              { reasoning: "$\\mathrm{Var}(2X-1) = 4 \\times 9 = 36$.", marks: 1, markCode: "M" },
              { reasoning: "Answers: 7 and 36.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E=7$, $\\mathrm{Var}=36$",
          },
        },
        {
          id: "cialfm-u8-e-q10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "$f(x)=3x^2$ for $0 \\le x \\le 1$. Find $\\mathrm{Var}(X)$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Var via moments", statement: "$E(X^2)-[E(X)]^2$." }],
            steps: [
              { reasoning: "$E(X) = \\int_0^1 3x^3\\,dx = \\tfrac34$.", marks: 1, markCode: "M" },
              { reasoning: "$E(X^2) = \\int_0^1 3x^4\\,dx = \\tfrac35$.", marks: 1, markCode: "M" },
              { reasoning: "$\\mathrm{Var}(X) = \\tfrac35 - \\left(\\tfrac34\\right)^2 = \\tfrac35 - \\tfrac{9}{16}$.", marks: 1, markCode: "M" },
              { reasoning: "$= \\tfrac{48-45}{80} = \\tfrac{3}{80} = 0.0375$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\tfrac{3}{80}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\tfrac{3}{80}$",
          },
        },
        {
          id: "cialfm-u8-e-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To find $E(X^2)$ for a continuous variable, we compute…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\int x^2f(x)\\,dx$" },
            { id: "b", text: "$\\int xf(x)\\,dx$" },
            { id: "c", text: "$[E(X)]^2$" },
            { id: "d", text: "$\\int f(x)\\,dx$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "E(X²)", statement: "Second moment integral." }],
            steps: [{ reasoning: "$E(X^2)=\\int x^2f(x)dx$ — do not square the mean.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\int x^2f(x)\\,dx$",
          },
        },
        {
          id: "cialfm-u8-e-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "$f(x)=1$ for $0 \\le x \\le 1$ (uniform). Find $\\mathrm{Var}(X)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.0833, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Moments", statement: "Compute $E(X)$ and $E(X^2)$ separately." }],
            steps: [
              { reasoning: "$E(X) = \\int_0^1 x\\,dx = \\tfrac12$; $E(X^2) = \\int_0^1 x^2\\,dx = \\tfrac13$.", marks: 1, markCode: "M" },
              { reasoning: "$\\mathrm{Var}(X) = \\tfrac13 - \\tfrac14 = \\tfrac{1}{12} \\approx 0.0833$.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\tfrac{1}{12}$",
          },
        },
        {
          id: "cialfm-u8-e-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "$X$ takes values 1, 2, 3 with probabilities 0.2, 0.3, 0.5. Find $\\mathrm{Var}(X)$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Var (discrete)", statement: "$E(X^2)-[E(X)]^2$." }],
            steps: [
              { reasoning: "$E(X) = 0.2+0.6+1.5 = 2.3$.", marks: 1, markCode: "M" },
              { reasoning: "$E(X^2) = 0.2+1.2+4.5 = 5.9$.", marks: 1, markCode: "M" },
              { reasoning: "$\\mathrm{Var}(X) = 5.9 - 5.29 = 0.61$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 0.61.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.61",
          },
        },
        {
          id: "cialfm-u8-e-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $Y = X + c$ (constant shift), then $\\mathrm{Var}(Y)$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\mathrm{Var}(X)$" },
            { id: "b", text: "$c^2\\mathrm{Var}(X)$" },
            { id: "c", text: "$0$" },
            { id: "d", text: "$\\mathrm{Var}(X)+c$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "Shift invariance", statement: "Adding a constant does not change spread." }],
            steps: [{ reasoning: "$\\mathrm{Var}(X+c)=\\mathrm{Var}(X)$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\mathrm{Var}(X)$",
          },
        },
        {
          id: "cialfm-u8-e-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Given $\\mathrm{Var}(X)=16$, find the standard deviation of $3X+2$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 12 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "SD transform", statement: "$\\mathrm{SD}(aX+b)=|a|\\,\\mathrm{SD}(X)$." }],
            steps: [
              { reasoning: "$\\mathrm{Var}(3X+2) = 9 \\times 16 = 144$; $\\mathrm{SD} = \\sqrt{144} = 12$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 12.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12",
          },
        },
        {
          id: "cialfm-u8-e-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Given $E(X)=3$ and $\\mathrm{Var}(X)=5$, find $E(X^2)$ and $\\mathrm{Var}(4X)$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Moments", statement: "$E(X^2)=\\mathrm{Var}+[E(X)]^2$; $\\mathrm{Var}(aX)=a^2\\mathrm{Var}(X)$." }],
            steps: [
              { reasoning: "$E(X^2) = 5 + 9 = 14$.", marks: 1, markCode: "M" },
              { reasoning: "$\\mathrm{Var}(4X) = 16 \\times 5 = 80$.", marks: 1, markCode: "M" },
              { reasoning: "Both results computed.", marks: 1, markCode: "M" },
              { reasoning: "Check: rearranging the variance formula. ✓", marks: 1, markCode: "M" },
              { reasoning: "Answers: 14 and 80.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E(X^2)=14$, $\\mathrm{Var}(4X)=80$",
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
