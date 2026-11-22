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
            { id: "a", text: "$(\\cos\\theta)^n=\\cos n\\theta$" },
            { id: "b", text: "$(\\cos\\theta+i\\sin\\theta)^n=\\cos n\\theta+i\\sin n\\theta$" },
            { id: "c", text: "$(\\cos\\theta+i\\sin\\theta)^n=\\cos\\theta+i\\sin n\\theta$" },
            { id: "d", text: "$(r\\operatorname{cis}\\theta)^n=r\\operatorname{cis}n\\theta$" },
          ], correctChoiceId: "b" },
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
        {
          id: "cialfm-u3-s2-pw-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $z = r\\operatorname{cis}\\theta$, De Moivre gives $z^n =$",
          response: { type: "mcq", choices: [
            { id: "a", text: "$r^n\\operatorname{cis}\\theta$" },
            { id: "b", text: "$r^n\\operatorname{cis}(n\\theta)$" },
            { id: "c", text: "$r\\operatorname{cis}(n\\theta)$" },
            { id: "d", text: "$nr\\operatorname{cis}\\theta$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "law", name: "De Moivre", statement: "$z^n = r^n\\operatorname{cis}n\\theta$." }],
            steps: [{ reasoning: "Both modulus and argument transform.", marks: 1, markCode: "A" }],
            finalAnswer: "$r^n\\operatorname{cis}(n\\theta)$",
          },
        },
        {
          id: "cialfm-u3-s2-pw-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Evaluate $\\left(\\operatorname{cis}\\frac{\\pi}{6}\\right)^6$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -1 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "De Moivre", statement: "Multiply argument by $n$." }],
            steps: [
              { reasoning: "$= \\operatorname{cis}\\pi = -1$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: -1.", marks: 1, markCode: "A" }],
            finalAnswer: "-1",
          },
        },
        {
          id: "cialfm-u3-s2-pw-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "$i^{10}=$",
          response: { type: "mcq", choices: [
            { id: "a", text: "$-i$" },
            { id: "b", text: "$1$" },
            { id: "c", text: "$i$" },
            { id: "d", text: "$-1$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Powers of $i$", statement: "Cycle $i, -1, -i, 1$." }],
            steps: [{ reasoning: "$i^{10} = i^{8}\\cdot i^2 = -1$.", marks: 1, markCode: "A" }],
            finalAnswer: "-1",
          },
        },
        {
          id: "cialfm-u3-s2-pw-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find $(1-i)^4$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -4 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Power via polar", statement: "$1-i=\\sqrt2\\operatorname{cis}(-\\frac{\\pi}{4})$." }],
            steps: [
              { reasoning: "$(1-i)^4 = (\\sqrt2)^4\\operatorname{cis}(-\\pi) = 4(-1)$.", marks: 1, markCode: "M" },
              { reasoning: "$= -4$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: -4.", marks: 1, markCode: "A" }],
            finalAnswer: "-4",
          },
        },
        {
          id: "cialfm-u3-s2-pw-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which statement is true?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(\\operatorname{cis}\\theta)^{-1} = \\operatorname{cis}\\theta$" },
            { id: "b", text: "$(\\operatorname{cis}\\theta)^{-1} = \\operatorname{cis}(-\\theta)$" },
            { id: "c", text: "$(\\operatorname{cis}\\theta)^{-1} = -\\operatorname{cis}\\theta$" },
            { id: "d", text: "$(\\operatorname{cis}\\theta)^{-1} = \\operatorname{cis}\\frac{\\pi}{\\theta}$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "law", name: "Negative powers", statement: "$z^{-1}$ conjugates the argument." }],
            steps: [{ reasoning: "$\\operatorname{cis}^{-1}\\theta = \\operatorname{cis}(-\\theta)$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\operatorname{cis}(-\\theta)$",
          },
        },
        {
          id: "cialfm-u3-s2-pw-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find $|(1+i)^4|$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "theorem", name: "Modulus of power", statement: "$|z^n|=|z|^n$." }],
            steps: [
              { reasoning: "$|1+i|=\\sqrt2$ → $|(1+i)^4| = (\\sqrt2)^4 = 4$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 4.", marks: 1, markCode: "A" }],
            finalAnswer: "4",
          },
        },
        {
          id: "cialfm-u3-s2-pw-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Evaluate $\\left(\\cos\\frac{\\pi}{8} + i\\sin\\frac{\\pi}{8}\\right)^4$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "De Moivre", statement: "Multiply argument by 4." }],
            steps: [
              { reasoning: "$= \\cos\\frac{\\pi}{2} + i\\sin\\frac{\\pi}{2}$.", marks: 1, markCode: "M" },
              { reasoning: "$= i$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $i$.", marks: 1, markCode: "A" }],
            finalAnswer: "$i$",
          },
        },
        {
          id: "cialfm-u3-s2-pw-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "If $z = \\operatorname{cis}\\theta$, then $|z^n|=$",
          response: { type: "mcq", choices: [
            { id: "a", text: "$n$" },
            { id: "b", text: "0" },
            { id: "c", text: "$\\theta^n$" },
            { id: "d", text: "1" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "property", name: "Unit modulus", statement: "$|\\operatorname{cis}\\theta|=1$." }],
            steps: [{ reasoning: "$z^n = \\operatorname{cis}n\\theta$ still has modulus 1.", marks: 1, markCode: "A" }],
            finalAnswer: "1",
          },
        },
        {
          id: "cialfm-u3-s2-pw-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find $(1+i)^8$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 16 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Power via polar", statement: "$1+i=\\sqrt2\\operatorname{cis}\\frac{\\pi}{4}$." }],
            steps: [
              { reasoning: "$(1+i)^8 = (\\sqrt2)^8\\operatorname{cis}(8\\cdot\\frac{\\pi}{4}) = 16\\operatorname{cis}2\\pi$.", marks: 1, markCode: "M" },
              { reasoning: "$= 16$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 16.", marks: 1, markCode: "A" }],
            finalAnswer: "16",
          },
        },
        {
          id: "cialfm-u3-s2-pw-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Evaluate $(1-i)^6$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Power via polar", statement: "Convert then apply De Moivre." }],
            steps: [
              { reasoning: "$1-i = \\sqrt2\\operatorname{cis}(-\\frac{\\pi}{4})$.", marks: 1, markCode: "M" },
              { reasoning: "$(1-i)^6 = 8\\operatorname{cis}(-\\frac{6\\pi}{4}) = 8\\operatorname{cis}(-\\frac{3\\pi}{2})$.", marks: 1, markCode: "M" },
              { reasoning: "$-\\frac{3\\pi}{2} \\equiv \\frac{\\pi}{2}$, so result $= 8i$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $8i$.", marks: 1, markCode: "A" }],
            finalAnswer: "$8i$",
          },
        },
        {
          id: "cialfm-u3-s2-pw-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "For which $n$ is $\\left(\\operatorname{cis}\\frac{\\pi}{6}\\right)^n = i$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "6" },
            { id: "b", text: "2" },
            { id: "c", text: "4" },
            { id: "d", text: "3" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Match arguments", statement: "$\\frac{n\\pi}{6} = \\frac{\\pi}{2} \\pmod{2\\pi}$." }],
            steps: [{ reasoning: "$n\\pi/6 = \\pi/2$ → $n=3$.", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "cialfm-u3-s2-pw-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Let $z = 1+i$.",
          parts: [
            { label: "a", prompt: "Write $z$ in modulus-argument form.", marks: 1 },
            { label: "b", prompt: "Find $z^6$.", marks: 2 },
            { label: "c", prompt: "State $|z^6|$.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Polar power", statement: "Convert then apply De Moivre." }],
            steps: [
              { reasoning: "$z = \\sqrt2\\operatorname{cis}\\frac{\\pi}{4}$.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "$z^6 = (\\sqrt2)^6\\operatorname{cis}\\frac{6\\pi}{4} = 8\\operatorname{cis}\\frac{3\\pi}{2} = -8i$.", marks: 1, markCode: "M", part: "b" },
              { reasoning: "Answer for (b): $-8i$.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "$|z^6| = 8$.", marks: 1, markCode: "A", part: "c" }],
            finalAnswer: "$z=\\sqrt2\\operatorname{cis}\\frac{\\pi}{4}$, $z^6=-8i$, $|z^6|=8$",
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
            { id: "a", text: "2" },
            { id: "b", text: "Infinite" },
            { id: "c", text: "1" },
            { id: "d", text: "4" },
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
        {
          id: "cialfm-u3-s2-rt-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The $n$th roots of unity lie on…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A line" },
            { id: "b", text: "The real axis only" },
            { id: "c", text: "A circle centred at the origin, equally spaced" },
            { id: "d", text: "A parabola" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "property", name: "Roots of unity", statement: "Equally spaced on unit circle." }],
            steps: [{ reasoning: "$z^n=1$ gives $n$ points spaced $2\\pi/n$ on $|z|=1$.", marks: 1, markCode: "A" }],
            finalAnswer: "Unit circle, equally spaced",
          },
        },
        {
          id: "cialfm-u3-s2-rt-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many distinct fourth roots does $16$ have?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "property", name: "nth roots", statement: "$n$ distinct roots." }],
            steps: [
              { reasoning: "$z^4=16$ has 4 roots.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 4.", marks: 1, markCode: "A" }],
            finalAnswer: "4",
          },
        },
        {
          id: "cialfm-u3-s2-rt-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the modulus of each cube root of $8$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Root modulus", statement: "$|z| = |w|^{1/n}$." }],
            steps: [
              { reasoning: "$|8|^{1/3} = 2$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 2.", marks: 1, markCode: "A" }],
            finalAnswer: "2",
          },
        },
        {
          id: "cialfm-u3-s2-rt-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "The square roots of $-4$ are $\\pm 2i$. Find the modulus of each root.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Square roots", statement: "$\\sqrt{-4}=\\pm2i$." }],
            steps: [
              { reasoning: "$-4 = 4\\operatorname{cis}\\pi$; roots $= 2\\operatorname{cis}\\frac{\\pi}{2}, 2\\operatorname{cis}\\frac{3\\pi}{2}$ i.e. $\\pm2i$.", marks: 1, markCode: "M" },
              { reasoning: "Modulus of each: 2.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 2.", marks: 1, markCode: "A" }],
            finalAnswer: "2",
          },
        },
        {
          id: "cialfm-u3-s2-rt-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "The $n$ cube roots of a complex number are spaced apart by an angle of…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{\\pi}{2}$" },
            { id: "b", text: "$\\frac{\\pi}{3}$" },
            { id: "c", text: "$\\frac{2\\pi}{3}$" },
            { id: "d", text: "$\\pi$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "property", name: "Root spacing", statement: "Roots spaced $2\\pi/n$ apart." }],
            steps: [{ reasoning: "For $n=3$: $2\\pi/3$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{2\\pi}{3}$",
          },
        },
        {
          id: "cialfm-u3-s2-rt-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "The principal (smallest positive argument) cube root of $8$ has argument…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$0$" },
            { id: "b", text: "$\\pi$" },
            { id: "c", text: "$\\frac{2\\pi}{3}$" },
            { id: "d", text: "$\\frac{4\\pi}{3}$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "convention", name: "Principal root", statement: "Smallest positive argument." }],
            steps: [{ reasoning: "Root $2\\operatorname{cis}0 = 2$ has argument 0.", marks: 1, markCode: "A" }],
            finalAnswer: "0",
          },
        },
        {
          id: "cialfm-u3-s2-rt-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $z^3 = 8i$, giving all roots.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Cube roots", statement: "$8i = 8\\operatorname{cis}\\frac{\\pi}{2}$." }],
            steps: [
              { reasoning: "$z_k = 2\\operatorname{cis}\\frac{\\frac{\\pi}{2}+2k\\pi}{3}$, $k=0,1,2$.", marks: 1, markCode: "M" },
              { reasoning: "$= 2\\operatorname{cis}\\frac{\\pi}{6},\\ 2\\operatorname{cis}\\frac{5\\pi}{6},\\ 2\\operatorname{cis}\\frac{3\\pi}{2}$.", marks: 1, markCode: "M" },
              { reasoning: "Third root: $2\\operatorname{cis}\\frac{3\\pi}{2} = -2i$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $2\\operatorname{cis}\\frac{\\pi}{6}$, $2\\operatorname{cis}\\frac{5\\pi}{6}$, $-2i$.", marks: 1, markCode: "A" }],
            finalAnswer: "$2\\operatorname{cis}\\frac{\\pi}{6},\\ 2\\operatorname{cis}\\frac{5\\pi}{6},\\ -2i$",
          },
        },
        {
          id: "cialfm-u3-s2-rt-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "The $n$th roots of a complex number $w$ all lie on…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A circle of radius $|w|^{1/n}$ centred at the origin" },
            { id: "b", text: "A line through the origin" },
            { id: "c", text: "The real axis" },
            { id: "d", text: "A circle of radius $|w|$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "Root locus", statement: "Circle radius $|w|^{1/n}$." }],
            steps: [{ reasoning: "All roots have modulus $|w|^{1/n}$.", marks: 1, markCode: "A" }],
            finalAnswer: "Circle radius $|w|^{1/n}$",
          },
        },
        {
          id: "cialfm-u3-s2-rt-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the sum of all three cube roots of $8$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0 }] },
          markscheme: {
            principles: [{ kind: "theorem", name: "Sum of roots", statement: "Roots of $z^n-w$ sum to zero for $n>1$." }],
            steps: [
              { reasoning: "Roots are $2$, $2\\operatorname{cis}\\frac{2\\pi}{3}$, $2\\operatorname{cis}\\frac{4\\pi}{3}$.", marks: 1, markCode: "M" },
              { reasoning: "Sum of the two non-real roots is $-2$; total $= 0$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 0.", marks: 1, markCode: "A" }],
            finalAnswer: "0",
          },
        },
        {
          id: "cialfm-u3-s2-rt-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Find the square roots of $2i$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Square roots", statement: "$2i = 2\\operatorname{cis}\\frac{\\pi}{2}$." }],
            steps: [
              { reasoning: "$z_k = \\sqrt2\\operatorname{cis}\\frac{\\frac{\\pi}{2}+2k\\pi}{2}$, $k=0,1$.", marks: 1, markCode: "M" },
              { reasoning: "$= \\sqrt2\\operatorname{cis}\\frac{\\pi}{4}$ and $\\sqrt2\\operatorname{cis}\\frac{5\\pi}{4}$.", marks: 1, markCode: "M" },
              { reasoning: "In Cartesian: $1+i$ and $-1-i$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\pm(1+i)$.", marks: 1, markCode: "A" }],
            finalAnswer: "$1+i,\\ -1-i$",
          },
        },
        {
          id: "cialfm-u3-s2-rt-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which of these is NOT a fourth root of $-16$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$2\\operatorname{cis}\\frac{\\pi}{2}$" },
            { id: "b", text: "$2\\operatorname{cis}\\frac{5\\pi}{4}$" },
            { id: "c", text: "$2\\operatorname{cis}\\frac{\\pi}{4}$" },
            { id: "d", text: "$2\\operatorname{cis}\\frac{3\\pi}{4}$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Fourth roots", statement: "$-16 = 16\\operatorname{cis}\\pi$; arguments $\\frac{\\pi+2k\\pi}{4}$." }],
            steps: [{ reasoning: "Root arguments are $\\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\frac{5\\pi}{4}, \\frac{7\\pi}{4}$ — $\\frac{\\pi}{2}$ is not among them.", marks: 1, markCode: "A" }],
            finalAnswer: "$2\\operatorname{cis}\\frac{\\pi}{2}$",
          },
        },
        {
          id: "cialfm-u3-s2-rt-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Consider the equation $z^3 = 1$.",
          parts: [
            { label: "a", prompt: "State the number of roots.", marks: 1 },
            { label: "b", prompt: "State the modulus of each root.", marks: 1 },
            { label: "c", prompt: "Find all roots in $\\operatorname{cis}$ form.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Cube roots of unity", statement: "$1 = \\operatorname{cis}0$." }],
            steps: [
              { reasoning: "Three roots.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "Modulus $= 1^{1/3} = 1$.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "$z_k = \\operatorname{cis}\\frac{2k\\pi}{3}$, $k=0,1,2$.", marks: 1, markCode: "M", part: "c" },
              { reasoning: "Roots: $1$, $\\operatorname{cis}\\frac{2\\pi}{3}$, $\\operatorname{cis}\\frac{4\\pi}{3}$.", marks: 1, markCode: "A", part: "c" }],
            finalAnswer: "3 roots, modulus 1: $1$, $\\operatorname{cis}\\frac{2\\pi}{3}$, $\\operatorname{cis}\\frac{4\\pi}{3}$",
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
