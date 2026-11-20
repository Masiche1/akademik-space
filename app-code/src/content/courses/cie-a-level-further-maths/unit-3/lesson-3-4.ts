import type { Lesson } from "../../../types.ts";

export const lesson34: Lesson = {
  id: "cialfm-u3-lesson-3-4",
  code: "3-4",
  title: "Complex Exponentials",
  goal: "I CAN use Euler's formula and complex exponentials.",
  standards: ["Cambridge A Level Further Mathematics 9231: complex numbers"],
  vocabulary: [
    { term: "Euler's formula", definition: "$e^{i\\theta} = \\cos\\theta + i\\sin\\theta$." },
    { term: "Complex exponential", definition: "$re^{i\\theta}$ in polar/exponential form." },
    { term: "De Moivre (exp form)", definition: "$(re^{i\\theta})^n = r^n e^{in\\theta}$." },
  ],
  concepts: [
    {
      id: "cialfm-u3-s4-euler",
      title: "Euler's formula and exponential form",
      skill: "Convert between exponential and Cartesian form of complex numbers.",
      lesson: {
        sections: [
          {
            heading: "Euler's formula",
            body: "$e^{i\\theta} = \\cos\\theta + i\\sin\\theta$ — the bridge between trigonometry and exponentials. Any complex number in modulus-argument form is $z = re^{i\\theta}$ where $r = |z|$ and $\\theta = \\arg z$. Conjugate: $\\overline{z} = re^{-i\\theta}$.",
          },
          {
            heading: "Powers and roots in exponential form",
            body: "De Moivre becomes trivial: $(re^{i\\theta})^n = r^n e^{in\\theta}$. The nth roots of $z = re^{i\\theta}$ are $r^{1/n}e^{i(\\theta + 2k\\pi)/n}$ for $k = 0, 1, \\ldots, n-1$ — equally spaced on a circle of radius $r^{1/n}$.",
          },
        ],
        keyFormulas: [
          { name: "Euler", statement: "$e^{i\\theta} = \\cos\\theta + i\\sin\\theta$" },
          { name: "Exponential form", statement: "$z = re^{i\\theta}$" },
          { name: "nth roots", statement: "$r^{1/n}e^{i(\\theta+2k\\pi)/n}$" },
        ],
        workedExample: {
          problem: "Write $z = 1 + i$ in exponential form.",
          solution: "$r = \\sqrt{2}$, $\\theta = \\frac{\\pi}{4}$, so $z = \\sqrt{2}\\,e^{i\\pi/4}$.",
        },
      },
      questions: [
        {
          id: "cialfm-u3-eu-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "State Euler's formula.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$e^{i\\theta} = \\cos\\theta + i\\sin\\theta$" }, { id: "b", text: "$e^{i\\theta} = \\sin\\theta + i\\cos\\theta$" }, { id: "c", text: "$e^{\\theta} = \\cos\\theta + i\\sin\\theta$" }, { id: "d", text: "$e^{i\\theta} = \\cos\\theta - i\\sin\\theta$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "formula", name: "Euler", statement: "$e^{i\\theta}=\\cos\\theta+i\\sin\\theta$." }],
            steps: [{ reasoning: "Correct statement of Euler's formula.", marks: 1, markCode: "A" }],
            finalAnswer: "$e^{i\\theta} = \\cos\\theta + i\\sin\\theta$",
          },
        },
        {
          id: "cialfm-u3-eu-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Express $z = -i$ in exponential form $re^{i\\theta}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Exponential form", statement: "r = |z|, θ = arg z." }],
            steps: [
              { reasoning: "$r = 1$, $\\theta = -\\frac{\\pi}{2}$ (or $\\frac{3\\pi}{2}$).", marks: 1, markCode: "M" },
              { reasoning: "$z = e^{-i\\pi/2}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$e^{-i\\pi/2}$",
          },
        },
        {
          id: "cialfm-u3-eu-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate $(\\sqrt{2}e^{i\\pi/4})^4$ using exponential form.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "De Moivre exp", statement: "$(re^{i\\theta})^n = r^ne^{in\\theta}$." }],
            steps: [
              { reasoning: "$r^4 = (\\sqrt{2})^4 = 4$; angle $= 4 \\times \\frac{\\pi}{4} = \\pi$.", marks: 1, markCode: "M" },
              { reasoning: "$= 4e^{i\\pi} = 4(-1) = -4$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $-4$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-4$",
          },
        },
        {
          id: "cialfm-u3-eu-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the three cube roots of $z = 8e^{i\\pi/3}$ in exponential form.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "nth roots", statement: "$r^{1/n}e^{i(\\theta+2k\\pi)/n}$, $k=0,1,2$." }],
            steps: [
              { reasoning: "$r^{1/3} = 2$; angles $\\frac{\\pi}{9}$, $\\frac{\\pi}{9}+\\frac{2\\pi}{3}$, $\\frac{\\pi}{9}+\\frac{4\\pi}{3}$.", marks: 1, markCode: "M" },
              { reasoning: "$k=0$: $2e^{i\\pi/9}$.", marks: 1, markCode: "M" },
              { reasoning: "$k=1$: $2e^{i7\\pi/9}$; $k=2$: $2e^{i13\\pi/9}$.", marks: 1, markCode: "M" },
              { reasoning: "All three stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2e^{i\\pi/9}$, $2e^{i7\\pi/9}$, $2e^{i13\\pi/9}$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cialfm-u3-euler-notes",
      title: "Complex exponentials — revision notes",
      summary: "e^{iθ} = cos θ + i sin θ; z = re^{iθ}.",
      sections: [
        { heading: "Form", body: "$z = re^{i\\theta}$; conjugate flips sign of θ." },
        { heading: "Roots", body: "nth roots: $r^{1/n}e^{i(\\theta+2k\\pi)/n}$, k = 0…n−1." },
      ],
    },
  ],
};
