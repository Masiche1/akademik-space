import type { Lesson } from "../../../types.ts";

export const lesson54: Lesson = {
  id: "cialfm-u5-lesson-5-4",
  code: "5-4",
  title: "Reduction Formulae",
  goal: "I CAN derive and apply reduction formulae for integrals.",
  standards: ["Cambridge A Level Further Mathematics 9231: further calculus"],
  vocabulary: [
    { term: "Reduction formula", definition: "Recurrence relating $I_n$ to $I_{n-1}$ or $I_{n-2}$." },
    { term: "Integration by parts", definition: "Method behind most reduction formulae." },
    { term: "Reduction", definition: "Expressing a harder integral in terms of an easier one." },
  ],
  concepts: [
    {
      id: "cialfm-u5-s4-reduction",
      title: "Reduction formulae",
      skill: "Derive and use reduction formulae for definite and indefinite integrals.",
      lesson: {
        sections: [
          {
            heading: "Deriving a reduction formula",
            body: "For $I_n = \\int x^n e^{x}\\,dx$, integrate by parts with $u = x^n$, $dv = e^x dx$: $I_n = x^n e^x - n\\int x^{n-1}e^x dx = x^n e^x - nI_{n-1}$. The key step is choosing parts so the remaining integral has a LOWER power of n.",
          },
          {
            heading: "Using the formula",
            body: "Start from the known base case $I_0$ (or $I_1$) and apply the recurrence repeatedly. For definite integrals, evaluate the boundary term at each step. Always check n is a positive integer and state the base case explicitly.",
          },
        ],
        keyFormulas: [
          { name: "Example reduction", statement: "$I_n = x^n e^x - n I_{n-1}$" },
          { name: "Base case", statement: "$I_0 = \\int e^x dx = e^x + c$" },
        ],
        workedExample: {
          problem: "Given $I_n = \\int_0^1 x^n e^x\\,dx$ satisfies $I_n = e - nI_{n-1}$, find $I_2$ given $I_0 = e - 1$.",
          solution: "$I_1 = e - 1( e-1) = 1$; $I_2 = e - 2(1) = e - 2$.",
        },
      },
      questions: [
        {
          id: "cialfm-u5-rr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a reduction formula?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A recurrence expressing $I_n$ in terms of $I_{n-1}$" }, { id: "b", text: "A formula for reducing fractions" }, { id: "c", text: "The chain rule" }, { id: "d", text: "A matrix reduction" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Reduction formula", statement: "Recurrence for $I_n$." }],
            steps: [{ reasoning: "It relates $I_n$ to easier integrals $I_{n-1}$, $I_{n-2}$.", marks: 1, markCode: "A" }],
            finalAnswer: "Recurrence for $I_n$",
          },
        },
        {
          id: "cialfm-u5-rr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "For $I_n = \\int x^n e^x dx$, what substitution pattern gives the reduction?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Integration by parts", statement: "$u = x^n$, $dv = e^x dx$." }],
            steps: [
              { reasoning: "Choose $u = x^n$ so differentiation lowers the power.", marks: 1, markCode: "M" },
              { reasoning: "Result: $I_n = x^ne^x - nI_{n-1}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$I_n = x^ne^x - nI_{n-1}$",
          },
        },
        {
          id: "cialfm-u5-rr-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Given $I_n = \\int_0^{\\pi/2} \\sin^n x\\,dx$ satisfies $I_n = \\frac{n-1}{n}I_{n-2}$ with $I_0 = \\frac{\\pi}{2}$, $I_1 = 1$, find $I_3$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Reduction", statement: "Apply recurrence from base case." }],
            steps: [
              { reasoning: "$I_3 = \\frac{2}{3}I_1 = \\frac{2}{3}(1)$.", marks: 1, markCode: "M" },
              { reasoning: "$= \\frac{2}{3}$.", marks: 1, markCode: "M" },
              { reasoning: "Correct use of $I_1$ base case.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\frac{2}{3}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{2}{3}$",
          },
        },
        {
          id: "cialfm-u5-rr-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Derive the reduction formula for $I_n = \\int x^n \\cos x\\,dx$ and state the base case needed.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Derivation", statement: "Parts with $u=x^n$, $dv=\\cos x\\,dx$." }],
            steps: [
              { reasoning: "$I_n = x^n\\sin x - n\\int x^{n-1}\\sin x\\,dx$.", marks: 1, markCode: "M" },
              { reasoning: "Second integral needs parts again with $u=x^{n-1}$, $dv=\\sin x\\,dx$.", marks: 1, markCode: "M" },
              { reasoning: "$\\int x^{n-1}\\sin x\\,dx = -x^{n-1}\\cos x + (n-1)\\int x^{n-2}\\cos x\\,dx$.", marks: 1, markCode: "M" },
              { reasoning: "$I_n = x^n\\sin x + nx^{n-1}\\cos x - n(n-1)I_{n-2}$.", marks: 1, markCode: "M" },
              { reasoning: "Base case: $I_0 = \\sin x + c$ (and $I_1$ if needed).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$I_n = x^n\\sin x + nx^{n-1}\\cos x - n(n-1)I_{n-2}$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cialfm-u5-reduction-notes",
      title: "Reduction formulae — revision notes",
      summary: "Derive via parts; iterate from base case.",
      sections: [
        { heading: "Derive", body: "Parts with $u = x^n$ lowers the power; may need two rounds for trig." },
        { heading: "Apply", body: "Start at $I_0$ or $I_1$; definite integrals evaluate boundary terms each step." },
      ],
    },
  ],
};
