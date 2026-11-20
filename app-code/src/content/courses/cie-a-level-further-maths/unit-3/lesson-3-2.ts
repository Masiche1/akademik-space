import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "cialfm-u3-lesson-3-2",
  code: "3-2",
  title: "De Moivre's theorem",
  goal: "I CAN apply De Moivre's theorem to powers and roots of complex numbers.",
  standards: ["9231 P1: De Moivre's theorem"],
  vocabulary: [
    { term: "De Moivre's theorem", definition: "$(\\cos\\theta+i\\sin\\theta)^n = \\cos n\\theta + i\\sin n\\theta$." },
    { term: "cis notation", definition: "$\\operatorname{cis}\\theta = \\cos\\theta+i\\sin\\theta$." },
    { term: "nth roots", definition: "Solutions of $z^n = w$; there are $n$ of them." },
    { term: "Principal root", definition: "The root with smallest positive argument." },
  ],
  concepts: [
    {
      id: "cialfm-u3-s2-powers",
      title: "Powers of complex numbers",
      skill: "Use De Moivre to compute powers.",
      lesson: {
        sections: [
          {
            heading: "Theorem",
            body: "If $z = r\\operatorname{cis}\\theta$, then $z^n = r^n\\operatorname{cis}(n\\theta)$. Powers are easy in polar form.",
          },
          {
            heading: "Example",
            body: "$(\\operatorname{cis}\\frac{\\pi}{6})^3 = \\operatorname{cis}\\frac{\\pi}{2} = i$.",
          },
        ],
        keyFormulas: [
          { name: "De Moivre", statement: "$z^n = r^n\\operatorname{cis}n\\theta$" },
        ],
        workedExample: {
          problem: "Compute $(1+i)^4$.",
          solution: "$1+i=\\sqrt2\\operatorname{cis}\\frac{\\pi}{4}$; $^4 = 4\\operatorname{cis}\\pi = -4$.",
        },
      },
      questions: [
        {
          id: "cialfm-u3-s2-pw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "De Moivre's theorem states…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(\\cos\\theta+i\\sin\\theta)^n=\\cos n\\theta+i\\sin n\\theta$" }, { id: "b", text: "$(\\cos\\theta+i\\sin\\theta)^n=\\cos\\theta+i\\sin n\\theta$" }, { id: "c", text: "$(r\\operatorname{cis}\\theta)^n=r\\operatorname{cis}n\\theta$" }, { id: "d", text: "$(\\cos\\theta)^n=\\cos n\\theta$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "law", name: "De Moivre", statement: "Standard form." }],
            steps: [{ reasoning: "Correct statement of theorem.", marks: 1, markCode: "A" }],
            finalAnswer: "Option a",
          },
        },
        {
          id: "cialfm-u3-s2-pw-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Compute $(\\operatorname{cis}\\frac{\\pi}{3})^3$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "De Moivre", statement: "Multiply angle by n." }],
            steps: [
              { reasoning: "$= \\operatorname{cis}\\pi = -1$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-1$",
          },
        },
        {
          id: "cialfm-u3-s2-pw-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Express $1+i$ in modulus-argument form, then find $(1+i)^4$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Power via polar", statement: "Convert then apply." }],
            steps: [
              { reasoning: "$1+i = \\sqrt2\\operatorname{cis}\\frac{\\pi}{4}$.", marks: 1, markCode: "M" },
              { reasoning: "$(1+i)^4 = (\\sqrt2)^4\\operatorname{cis}\\pi = 4(-1) = -4$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: -4.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-4$",
          },
        },
        {
          id: "cialfm-u3-s2-pw-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Find $(\\frac{1+i}{\\sqrt2})^8$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Simplify then power", statement: "Recognise cis form." }],
            steps: [
              { reasoning: "$\\frac{1+i}{\\sqrt2} = \\operatorname{cis}\\frac{\\pi}{4}$.", marks: 1, markCode: "M" },
              { reasoning: "$^8 = \\operatorname{cis}(8\\cdot\\frac{\\pi}{4}) = \\operatorname{cis}2\\pi = 1$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 1.", marks: 1, markCode: "M" },
              { reasoning: "Verify: $(1+i)^8 = 16$, $(\\sqrt2)^8=16$ → 1. ✓", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1",
          },
        },
      ],
    },
    {
      id: "cialfm-u3-s2-roots",
      title: "nth roots of complex numbers",
      skill: "Find all nth roots using De Moivre.",
      lesson: {
        sections: [
          {
            heading: "Method",
            body: "To solve $z^n = w = R\\operatorname{cis}\\phi$: roots are $z_k = R^{1/n}\\operatorname{cis}\\frac{\\phi + 2k\\pi}{n}$ for $k=0,1,\\ldots,n-1$.",
          },
          {
            heading: "Key points",
            body: "$n$ distinct roots spaced $\\frac{2\\pi}{n}$ apart. Always find ALL roots, not just principal.",
          },
        ],
        keyFormulas: [
          { name: "nth roots", statement: "$z_k = R^{1/n}\\operatorname{cis}\\frac{\\phi+2k\\pi}{n}$" },
        ],
        workedExample: {
          problem: "Find the cube roots of 8.",
          solution: "$8 = 8\\operatorname{cis}0$; roots $= 2\\operatorname{cis}\\frac{0, 2\\pi, 4\\pi}{3} = 2, 2\\operatorname{cis}\\frac{2\\pi}{3}, 2\\operatorname{cis}\\frac{4\\pi}{3}$.",
        },
      },
      questions: [
        {
          id: "cialfm-u3-s2-rt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many square roots does a nonzero complex number have?",
          response: { type: "mcq", choices: [
            { id: "a", text: "2" }, { id: "b", text: "1" }, { id: "c", text: "4" }, { id: "d", text: "Infinite" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "nth roots", statement: "$n$ roots." }],
            steps: [{ reasoning: "Square roots: 2 distinct roots.", marks: 1, markCode: "A" }],
            finalAnswer: "2",
          },
        },
        {
          id: "cialfm-u3-s2-rt-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the square roots of 4.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Square roots", statement: "$\\pm$ values." }],
            steps: [
              { reasoning: "$z = \\pm 2$ (i.e. $2\\operatorname{cis}0$ and $2\\operatorname{cis}\\pi$).", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$z = \\pm 2$",
          },
        },
        {
          id: "cialfm-u3-s2-rt-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the cube roots of $-8$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Cube roots", statement: "Use $-8 = 8\\operatorname{cis}\\pi$." }],
            steps: [
              { reasoning: "$z_k = 2\\operatorname{cis}\\frac{\\pi + 2k\\pi}{3}$, $k=0,1,2$.", marks: 1, markCode: "M" },
              { reasoning: "$= 2\\operatorname{cis}\\frac{\\pi}{3}, 2\\operatorname{cis}\\pi, 2\\operatorname{cis}\\frac{5\\pi}{3}$.", marks: 1, markCode: "M" },
              { reasoning: "In Cartesian: $1+i\\sqrt3$, $-2$, $1-i\\sqrt3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1+i\\sqrt3$, $-2$, $1-i\\sqrt3$",
          },
        },
        {
          id: "cialfm-u3-s2-rt-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Solve $z^4 = 16$ giving all roots in exact form.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Fourth roots", statement: "$16=16\\operatorname{cis}0$." }],
            steps: [
              { reasoning: "$z_k = 2\\operatorname{cis}\\frac{2k\\pi}{4} = 2\\operatorname{cis}\\frac{k\\pi}{2}$, $k=0,1,2,3$.", marks: 1, markCode: "M" },
              { reasoning: "$= 2, 2i, -2, -2i$.", marks: 1, markCode: "M" },
              { reasoning: "All four roots listed.", marks: 1, markCode: "M" },
              { reasoning: "Answer complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2, 2i, -2, -2i$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cialfm-u3-s2-de-moivre-notes",
      title: "De Moivre's theorem — revision notes",
      summary: "Powers and roots of complex numbers.",
      sections: [
        { heading: "Powers", body: "Convert to polar first: $z^n = r^n\\operatorname{cis}n\\theta$." },
        { heading: "Roots", body: "$z^n=w$ has $n$ roots spaced $2\\pi/n$ apart. Use $\\phi+2k\\pi$." },
      ],
    },
  ],
};
