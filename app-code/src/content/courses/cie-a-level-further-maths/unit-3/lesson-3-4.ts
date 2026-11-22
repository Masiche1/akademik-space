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
            { id: "a", text: "$e^{i\\theta} = \\sin\\theta + i\\cos\\theta$" },
            { id: "b", text: "$e^{i\\theta} = \\cos\\theta + i\\sin\\theta$" },
            { id: "c", text: "$e^{\\theta} = \\cos\\theta + i\\sin\\theta$" },
            { id: "d", text: "$e^{i\\theta} = \\cos\\theta - i\\sin\\theta$" },
          ], correctChoiceId: "b" },
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
        {
          id: "cialfm-u3-eu-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The conjugate of $z = re^{i\\theta}$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$re^{i(\\pi-\\theta)}$" },
            { id: "b", text: "$re^{-i\\theta}$" },
            { id: "c", text: "$re^{i\\theta}$" },
            { id: "d", text: "$-re^{i\\theta}$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Conjugate", statement: "Flip sign of $\\theta$." }],
            steps: [{ reasoning: "Conjugation negates the argument.", marks: 1, markCode: "A" }],
            finalAnswer: "$re^{-i\\theta}$",
          },
        },
        {
          id: "cialfm-u3-eu-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Evaluate $e^{i\\pi}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -1 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Euler", statement: "$e^{i\\pi} = \\cos\\pi + i\\sin\\pi$." }],
            steps: [
              { reasoning: "$e^{i\\pi} = -1 + 0i = -1$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: -1.", marks: 1, markCode: "A" }],
            finalAnswer: "-1",
          },
        },
        {
          id: "cialfm-u3-eu-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "$|e^{i\\theta}|=$",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\theta$" },
            { id: "b", text: "$\\cos\\theta$" },
            { id: "c", text: "1" },
            { id: "d", text: "$e^\\theta$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "property", name: "Modulus", statement: "$|e^{i\\theta}|=1$." }],
            steps: [{ reasoning: "$|\\cos\\theta+i\\sin\\theta|=\\sqrt{\\cos^2+\\sin^2}=1$.", marks: 1, markCode: "A" }],
            finalAnswer: "1",
          },
        },
        {
          id: "cialfm-u3-eu-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Express $z = -2$ in exponential form $re^{i\\theta}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Exponential form", statement: "$r=|z|$, $\\theta=\\arg z$." }],
            steps: [
              { reasoning: "$r=2$, $\\theta=\\pi$.", marks: 1, markCode: "M" },
              { reasoning: "$z = 2e^{i\\pi}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$2e^{i\\pi}$",
          },
        },
        {
          id: "cialfm-u3-eu-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "$e^{i\\pi/2}=$",
          response: { type: "mcq", choices: [
            { id: "a", text: "$-1$" },
            { id: "b", text: "$1$" },
            { id: "c", text: "$i$" },
            { id: "d", text: "$-i$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "formula", name: "Euler", statement: "$e^{i\\theta}=\\cos\\theta+i\\sin\\theta$." }],
            steps: [{ reasoning: "$\\cos\\frac{\\pi}{2}+i\\sin\\frac{\\pi}{2} = i$.", marks: 1, markCode: "A" }],
            finalAnswer: "$i$",
          },
        },
        {
          id: "cialfm-u3-eu-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find $\\operatorname{Re}(e^{i\\pi/6})$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.866, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Euler", statement: "$\\operatorname{Re}(e^{i\\theta})=\\cos\\theta$." }],
            steps: [
              { reasoning: "$\\cos\\frac{\\pi}{6} = \\frac{\\sqrt3}{2} \\approx 0.866$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{\\sqrt3}{2}$",
          },
        },
        {
          id: "cialfm-u3-eu-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the three cube roots of $27i$ in exponential form.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "nth roots", statement: "$r^{1/n}e^{i(\\theta+2k\\pi)/n}$, $k=0,1,2$." }],
            steps: [
              { reasoning: "$27i = 27e^{i\\pi/2}$; $r^{1/3}=3$.", marks: 1, markCode: "M" },
              { reasoning: "Angles: $\\frac{\\pi}{6}$, $\\frac{\\pi}{6}+\\frac{2\\pi}{3}=\\frac{5\\pi}{6}$, $\\frac{\\pi}{6}+\\frac{4\\pi}{3}=\\frac{3\\pi}{2}$.", marks: 1, markCode: "M" },
              { reasoning: "Roots: $3e^{i\\pi/6}$, $3e^{i5\\pi/6}$, $3e^{i3\\pi/2}=-3i$.", marks: 1, markCode: "M" },
              { reasoning: "All three stated.", marks: 1, markCode: "A" }],
            finalAnswer: "$3e^{i\\pi/6}$, $3e^{i5\\pi/6}$, $-3i$",
          },
        },
        {
          id: "cialfm-u3-eu-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "For $z = re^{i\\theta}$, $z^n=$",
          response: { type: "mcq", choices: [
            { id: "a", text: "$r^ne^{in\\theta}$" },
            { id: "b", text: "$nre^{i\\theta}$" },
            { id: "c", text: "$re^{in\\theta}$" },
            { id: "d", text: "$r^ne^{i\\theta}$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "formula", name: "De Moivre exp", statement: "$(re^{i\\theta})^n = r^ne^{in\\theta}$." }],
            steps: [{ reasoning: "Both modulus and argument scale.", marks: 1, markCode: "A" }],
            finalAnswer: "$r^ne^{in\\theta}$",
          },
        },
        {
          id: "cialfm-u3-eu-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Evaluate $e^{i\\pi/3} + e^{-i\\pi/3}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Euler sum", statement: "$e^{i\\theta}+e^{-i\\theta}=2\\cos\\theta$." }],
            steps: [
              { reasoning: "$e^{i\\theta}+e^{-i\\theta} = 2\\cos\\frac{\\pi}{3}$.", marks: 1, markCode: "M" },
              { reasoning: "$= 2\\times\\frac12 = 1$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 1.", marks: 1, markCode: "A" }],
            finalAnswer: "1",
          },
        },
        {
          id: "cialfm-u3-eu-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write $z = 1 - i$ in the form $re^{i\\theta}$. Give $r$ and $\\theta$ (in radians).",
          response: { type: "numeric", parts: [
            { label: "a", answer: 1.414, tolerance: 0.001 }, { label: "b", answer: -0.785, tolerance: 0.001 },
          ] },
          markscheme: {
            principles: [{ kind: "technique", name: "Exponential form", statement: "$r=|z|$, $\\theta=\\arg z$." }],
            steps: [
              { reasoning: "$r = \\sqrt{1+1} = \\sqrt2 \\approx 1.414$; $\\theta = -\\frac{\\pi}{4} \\approx -0.785$.", marks: 1, markCode: "M" },
              { reasoning: "$z = \\sqrt2\\,e^{-i\\pi/4}$.", marks: 1, markCode: "M" },
              { reasoning: "Answers: $r \\approx 1.414$, $\\theta \\approx -0.785$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\sqrt2\\,e^{-i\\pi/4}$",
          },
        },
        {
          id: "cialfm-u3-eu-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The square roots of $-4$ in exponential form are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$4e^{i\\pi/2}$ and $4e^{i3\\pi/2}$" },
            { id: "b", text: "$2e^{i\\pi}$ and $2e^{i\\pi/2}$" },
            { id: "c", text: "$2e^{i\\pi/2}$ and $2e^{-i\\pi/2}$" },
            { id: "d", text: "$2e^{i\\pi}$ and $2e^{-i\\pi}$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "formula", name: "nth roots", statement: "$-4 = 4e^{i\\pi}$; roots $2e^{i(\\pi+2k\\pi)/2}$." }],
            steps: [{ reasoning: "Roots: $2e^{i\\pi/2}=2i$ and $2e^{i3\\pi/2}=-2i$ i.e. $\\pm2i$.", marks: 1, markCode: "A" }],
            finalAnswer: "$2e^{i\\pi/2}$ and $2e^{-i\\pi/2}$",
          },
        },
        {
          id: "cialfm-u3-eu-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Consider $w = e^{i\\pi/4}$ and $z = e^{-i\\pi/3}$.",
          parts: [
            { label: "a", prompt: "Write $w$ in Cartesian form.", marks: 1 },
            { label: "b", prompt: "Evaluate $w^6$.", marks: 1 },
            { label: "c", prompt: "State the modulus and argument of $z$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Euler", statement: "$e^{i\\theta}=\\cos\\theta+i\\sin\\theta$." }],
            steps: [
              { reasoning: "$w = \\cos\\frac{\\pi}{4}+i\\sin\\frac{\\pi}{4} = \\frac{\\sqrt2}{2}(1+i)$.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "$w^6 = e^{i6\\pi/4} = e^{i3\\pi/2} = -i$.", marks: 1, markCode: "M", part: "b" },
              { reasoning: "$|z| = 1$.", marks: 1, markCode: "M", part: "c" },
              { reasoning: "$\\arg z = -\\frac{\\pi}{3}$.", marks: 1, markCode: "A", part: "c" }],
            finalAnswer: "$w=\\frac{\\sqrt2}{2}(1+i)$, $w^6=-i$, $|z|=1$, $\\arg z=-\\frac{\\pi}{3}$",
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
