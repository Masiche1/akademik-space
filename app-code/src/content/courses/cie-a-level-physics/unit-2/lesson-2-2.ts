import type { Lesson } from "../../../types.ts";

export const lesson212: Lesson = {
  id: "cial-p-u2-lesson-2-2",
  code: "2-2",
  title: "Simple harmonic motion",
  goal: "I CAN describe SHM, use $x = A\\sin(\\omega t)$ and relate SHM to circular motion.",
  standards: ["9702 14: oscillations"],
  vocabulary: [
    { term: "SHM", definition: "Acceleration proportional to displacement, opposite direction: $a = -\\omega^2 x$." },
    { term: "Amplitude", definition: "Maximum displacement from equilibrium — $A$." },
    { term: "Period", definition: "Time for one complete oscillation — $T$ (s)." },
    { term: "Frequency", definition: "Oscillations per second — $f = 1/T$ (Hz)." },
    { term: "Angular frequency", definition: "$\\omega = 2\\pi f = 2\\pi/T$ (rad/s)." },
    { term: "Restoring force", definition: "Force pulling object back to equilibrium — $F = -kx$." },
  ],
  concepts: [
    {
      id: "cial-p-u2-shm",
      title: "SHM equations",
      skill: "Apply SHM equations for displacement, velocity, acceleration and energy.",
      lesson: {
        sections: [
          {
            heading: "Defining equation",
            body: "SHM: $a = -\\omega^2 x$ where $x$ = displacement from equilibrium. Equivalent: $F = -kx$ (Hooke's law / restoring force). Acceleration always toward equilibrium, max at extremes, zero at centre.",
          },
          {
            heading: "Displacement and velocity",
            body: "If $x = A\\sin(\\omega t)$: velocity $v = A\\omega\\cos(\\omega t)$, acceleration $a = -A\\omega^2\\sin(\\omega t) = -\\omega^2 x$. At extremes: $v=0$, $a$ max. At equilibrium: $v$ max, $a=0$.",
          },
          {
            heading: "Energy in SHM",
            body: "Total energy constant: $E = \\frac12 kA^2$. Kinetic max at equilibrium ($E_k = \\frac12 kA^2$), potential max at extremes. $E_k + E_p = $ const. Graphs of $x$, $v$, $a$ vs $t$ are sinusoidal, phase-shifted by $\\pi/2$.",
          },
        ],
        keyFormulas: [
          { name: "SHM", statement: "$a = -\\omega^2 x$, $\\omega = 2\\pi f$" },
          { name: "Displacement", statement: "$x = A\\sin(\\omega t)$" },
          { name: "Energy", statement: "$E = \\frac12 kA^2$" },
        ],
        workedExample: {
          problem: "An oscillator has $A = 0.1\\ m$, $f = 2\\ Hz$. Find $\\omega$ and max acceleration.",
          solution: "$\\omega = 2\\pi \\times 2 = 4\\pi \\approx 12.6\\ rad\\ s^{-1}$. $a_{max} = \\omega^2 A = 158 \\times 0.1 = 15.8\\ m\\ s^{-2}$.",
        },
      },
      questions: [
        {
          id: "cial-p-u2-sh-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the defining condition for SHM?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Acceleration proportional to displacement, opposite direction" },
              { id: "b", text: "Constant velocity" },
              { id: "c", text: "Maximum speed at extremes" },
              { id: "d", text: "Zero acceleration throughout" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "SHM", statement: "$a = -\\omega^2 x$." }],
            steps: [{ reasoning: "$a \\propto -x$ defines SHM.", marks: 1, markCode: "A" }],
            finalAnswer: "$a = -\\omega^2 x$",
          },
        },
        {
          id: "cial-p-u2-sh-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "An oscillator has $f = 0.5\\ Hz$. Find period and angular frequency.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "SHM", statement: "$T=1/f$, $\\omega=2\\pi f$." }],
            steps: [
              { reasoning: "$T = 1/0.5 = 2\\ s$.", marks: 1, markCode: "M" },
              { reasoning: "$\\omega = 2\\pi \\times 0.5 = \\pi \\approx 3.14\\ rad\\ s^{-1}$.", marks: 1, markCode: "M" },
              { reasoning: "Both values correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$T = 2\\ s$, $\\omega = \\pi\\ rad\\ s^{-1}$",
          },
        },
        {
          id: "cial-p-u2-sh-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "At what point in SHM is kinetic energy maximum and potential energy minimum?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "SHM energy", statement: "KE max at equilibrium; PE max at extremes." }],
            steps: [
              { reasoning: "At equilibrium ($x = 0$): velocity max, acceleration zero.", marks: 1, markCode: "M" },
              { reasoning: "$E_k = \\frac12 mv^2$ max → KE max at centre.", marks: 1, markCode: "M" },
              { reasoning: "PE $= \\frac12 kx^2$ zero at centre → PE min.", marks: 1, markCode: "M" },
              { reasoning: "Total energy remains constant.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "At equilibrium — KE max, PE min",
          },
        },
        {
          id: "cial-p-u2-sh-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "SHM.",
          parts: [
            { label: "a", prompt: "Define SHM and state the key equation.", marks: 2 },
            { label: "b", prompt: "For $x = A\\sin(\\omega t)$, what are $v$ and $a$?", marks: 3 },
            { label: "c", prompt: "Where is acceleration maximum in SHM?", marks: 1 },
            { label: "d", prompt: "Explain how SHM relates to circular motion.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "SHM", statement: "$a=-\\omega^2 x$; projection of circular motion." }],
            steps: [
              { part: "a", reasoning: "$a \\propto -x$; $a = -\\omega^2 x$.", marks: 2, markCode: "A" },
              { part: "b", reasoning: "$v = A\\omega\\cos(\\omega t)$.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$a = -A\\omega^2\\sin(\\omega t)$.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "At maximum displacement (extremes).", marks: 1, markCode: "A" },
              { part: "d", reasoning: "SHM = projection of uniform circular motion.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Reference circle: radius = amplitude.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Same period/frequency as circular motion.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) a=-ω²x (b) v,v,a sinusoidal (c) extremes (d) circular projection",
          },
        },
      ],
    },
    {
      id: "cial-p-u2-spring",
      title: "Hooke's law and elasticity",
      skill: "Apply $F = kx$ and elastic energy $E = \\frac12 kx^2$.",
      lesson: {
        sections: [
          {
            heading: "Hooke's law",
            body: "$F = kx$ within elastic limit — force proportional to extension. $k$ = spring constant (N/m). Beyond elastic limit: permanent deformation. Stress = $F/A$, strain = $\\Delta L/L$; Hooke's law: stress $\\propto$ strain.",
          },
          {
            heading: "Elastic potential energy",
            body: "$E_p = \\frac12 kx^2$ for spring extension $x$. Area under F–x graph = work done = elastic PE. For SHM mass on spring: $\\omega = \\sqrt{k/m}$, $T = 2\\pi\\sqrt{m/k}$.",
          },
          {
            heading: "Stress, strain and Young's modulus",
            body: "Stress $\\sigma = F/A$ (Pa); strain $\\epsilon = \\Delta L/L$ (unitless). Young's modulus $E = \\sigma/\\epsilon$ (Pa). Stiff materials: high $E$ (steel); flexible: low $E$ (rubber). Elastic limit: point beyond which deformation permanent.",
          },
        ],
        keyFormulas: [
          { name: "Hooke's law", statement: "$F = kx$" },
          { name: "Elastic PE", statement: "$E = \\frac12 kx^2$" },
          { name: "Young's modulus", statement: "$E = \\frac{\\sigma}{\\epsilon}$" },
        ],
        workedExample: {
          problem: "A spring with $k = 200\\ N\\ m^{-1}$ is extended 0.05 m. Find force and elastic PE.",
          solution: "$F = kx = 200 \\times 0.05 = 10\\ N$. $E = \\frac12 \\times 200 \\times 0.0025 = 0.25\\ J$.",
        },
      },
      questions: [
        {
          id: "cial-p-u2-sp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is Hooke's law?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Force proportional to extension within elastic limit" },
              { id: "b", text: "Force inversely proportional to extension" },
              { id: "c", text: "Constant force regardless of extension" },
              { id: "d", text: "Force proportional to mass" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Hooke's law", statement: "$F = kx$." }],
            steps: [{ reasoning: "F ∝ x within elastic limit.", marks: 1, markCode: "A" }],
            finalAnswer: "$F = kx$",
          },
        },
        {
          id: "cial-p-u2-sp-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A spring has $k = 50\\ N\\ m^{-1}$. What extension produces 10 N force?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Hooke's law", statement: "$x = F/k$." }],
            steps: [
              { reasoning: "$x = F/k = 10/50$.", marks: 1, markCode: "M" },
              { reasoning: "$x = 0.2\\ m$.", marks: 1, markCode: "M" },
              { reasoning: "Correct units (m).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 0.2\\ m$",
          },
        },
        {
          id: "cial-p-u2-sp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What is the elastic potential energy stored in a spring extended 0.1 m with $k = 100\\ N\\ m^{-1}$?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Elastic PE", statement: "$E = \\frac12 kx^2$." }],
            steps: [
              { reasoning: "$E = \\frac12 \\times 100 \\times 0.01$.", marks: 1, markCode: "M" },
              { reasoning: "$E = 0.5\\ J$.", marks: 1, markCode: "A" },
              { reasoning: "Area under F–x graph = PE.", marks: 1, markCode: "B" },
              { reasoning: "Units correct (J).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$E = 0.5\\ J$",
          },
        },
        {
          id: "cial-p-u2-sp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Elasticity.",
          parts: [
            { label: "a", prompt: "State Hooke's law.", marks: 1 },
            { label: "b", prompt: "Define stress and strain.", marks: 3 },
            { label: "c", prompt: "What is Young's modulus?", marks: 2 },
            { label: "d", prompt: "A mass oscillates on a spring. How does period depend on mass and spring constant?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Elasticity", statement: "$F=kx$; $\\sigma=F/A$; $\\epsilon=\\Delta L/L$; $E=\\sigma/\\epsilon$." }],
            steps: [
              { part: "a", reasoning: "$F = kx$ within elastic limit.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Stress $= F/A$ (Pa).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Strain $= \\Delta L/L$ (unitless).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both defined correctly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$E = \\sigma/\\epsilon$ — stiffness.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Units Pa; higher = stiffer.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "$T = 2\\pi\\sqrt{m/k}$.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Period increases with mass, decreases with k.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "SHM with $\\omega = \\sqrt{k/m}$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) F=kx (b) σ=F/A, ε=ΔL/L (c) E=σ/ε (d) T=2π√(m/k)",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-p-u2-shm-spring-notes",
      title: "SHM and elasticity — revision notes",
      summary: "Simple harmonic motion, Hooke's law, stress/strain and Young's modulus.",
      sections: [
        {
          heading: "SHM",
          body: "$a = -\\omega^2 x$; $x = A\\sin(\\omega t)$; $\\omega = 2\\pi f$. KE max at equilibrium, PE max at extremes. SHM = projection of circular motion.",
        },
        {
          heading: "Elasticity",
          body: "$F = kx$; $E_p = \\frac12 kx^2$; $\\sigma = F/A$; $\\epsilon = \\Delta L/L$; $E = \\sigma/\\epsilon$. Mass-spring: $T = 2\\pi\\sqrt{m/k}$.",
        },
        {
          heading: "Exam checklist",
          body: "For SHM identify amplitude, period, angular frequency. For springs check if within elastic limit.",
        },
      ],
    },
  ],
};
