import type { Lesson } from "../../../types.ts";

export const lesson512: Lesson = {
  id: "cial-p-u5-lesson-5-2",
  code: "5-2",
  title: "Magnetism and electromagnetic induction",
  goal: "I CAN explain magnetic fields, forces on currents and electromagnetic induction.",
  standards: ["9702 12-13: magnetism, EM induction"],
  vocabulary: [
    { term: "Magnetic field", definition: "Region where magnetic force acts — field lines from N to S." },
    { term: "Fleming's left-hand rule", definition: "Current-carrying conductor in field: First finger Field, seCond Current, Thumb Motion/force." },
    { term: "Electromagnetic induction", definition: "EMF induced by changing magnetic flux — Faraday's law." },
    { term: "Flux linkage", definition: "$N\\Phi$ — flux through coil × number of turns." },
    { term: "Lenz's law", definition: "Induced EMF opposes the change producing it." },
    { term: "Transformer", definition: "Device changing AC voltage via mutual induction." },
  ],
  concepts: [
    {
      id: "cial-p-u5-magnetism",
      title: "Magnetic fields and forces",
      skill: "Apply Fleming's left-hand rule and magnetic force equations.",
      lesson: {
        sections: [
          {
            heading: "Magnetic fields",
            body: "Field lines: N to S outside magnet, loop around wire. Field strength $B$ in tesla (T). Uniform field between pole pieces. Earth's field ~50 μT.",
          },
          {
            heading: "Force on current",
            body: "Force on wire: $F = BIL\\sin\\theta$ where $I$ = current, $L$ = length, $\\theta$ = angle between B and I. Direction: Fleming's left-hand rule (First finger Field, seCond finger Current, Thumb Motion). Force perpendicular to both B and I.",
          },
          {
            heading: "Force on moving charge",
            body: "Force on charge: $F = qvB\\sin\\theta$ — same principle. Causes circular motion when v ⊥ B: $qvB = mv^2/r$ → $r = mv/qB$. Basis of mass spectrometer, cyclotron.",
          },
        ],
        keyFormulas: [
          { name: "Force on wire", statement: "$F = BIL\\sin\\theta$" },
          { name: "Force on charge", statement: "$F = qvB\\sin\\theta$" },
          { name: "Circular path", statement: "$r = mv/qB$" },
        ],
        workedExample: {
          problem: "A 0.5 m wire carrying 2 A is perpendicular to a 0.3 T field. Find force.",
          solution: "$F = BIL = 0.3 \\times 2 \\times 0.5 = 0.3\\ N$.",
        },
      },
      questions: [
        {
          id: "cial-p-u5-mg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the formula for force on a current-carrying wire?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$F = BIL\\sin\\theta$" },
              { id: "b", text: "$F = BIL/\\sin\\theta$" },
              { id: "c", text: "$F = BI/(L\\sin\\theta)$" },
              { id: "d", text: "$F = BL/(I\\sin\\theta)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Magnetic force", statement: "$F = BIL\\sin\\theta$." }],
            steps: [{ reasoning: "F = BIL sin θ.", marks: 1, markCode: "A" }],
            finalAnswer: "$F = BIL\\sin\\theta$",
          },
        },
        {
          id: "cial-p-u5-mg-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A 2 m wire carrying 5 A is at 30° to a 0.4 T field. Find force.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Magnetic force", statement: "$F = BIL\\sin\\theta$." }],
            steps: [
              { reasoning: "$F = 0.4 \\times 5 \\times 2 \\times \\sin 30°$.", marks: 1, markCode: "M" },
              { reasoning: "$= 0.4 \\times 5 \\times 2 \\times 0.5 = 2\\ N$.", marks: 1, markCode: "M" },
              { reasoning: "$F = 2\\ N$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$F = 2\\ N$",
          },
        },
        {
          id: "cial-p-u5-mg-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why does a current-carrying wire experience a force in a magnetic field?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Magnetic force", statement: "Moving charges experience force in B field." }],
            steps: [
              { reasoning: "Current = moving charge carriers.", marks: 1, markCode: "M" },
              { reasoning: "Magnetic field exerts force on moving charges.", marks: 1, markCode: "M" },
              { reasoning: "Force perpendicular to both v and B.", marks: 1, markCode: "M" },
              { reasoning: "Wire experiences resultant force on all charges.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Moving charges feel force in B field",
          },
        },
        {
          id: "cial-p-u5-mg-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Magnetism.",
          parts: [
            { label: "a", prompt: "State formula for force on wire.", marks: 2 },
            { label: "b", prompt: "What is Fleming's left-hand rule?", marks: 2 },
            { label: "c", prompt: "A 1 m wire carries 3 A perpendicular to 0.5 T field. Find force.", marks: 2 },
            { label: "d", prompt: "Why does a moving charge in B field move in a circle?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Magnetic force", statement: "$F=BIL\\sin\\theta$; circular motion." }],
            steps: [
              { part: "a", reasoning: "$F = BIL\\sin\\theta$.", marks: 2, markCode: "A" },
              { part: "b", reasoning: "First finger Field, seCond finger Current, Thumb Motion.", marks: 2, markCode: "A" },
              { part: "c", reasoning: "$F = 0.5 \\times 3 \\times 1 \\times 1 = 1.5\\ N$.", marks: 2, markCode: "M" },
              { part: "d", reasoning: "Force always perpendicular to velocity.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Constant magnitude, changing direction.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Produces uniform circular motion.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) F=BILsinθ (b) FLHR (c) 1.5 N (d) ⊥ force → circle",
          },
        },
      ],
    },
    {
      id: "cial-p-u5-induction",
      title: "Electromagnetic induction",
      skill: "Apply Faraday's and Lenz's laws; explain transformers.",
      lesson: {
        sections: [
          {
            heading: "Faraday's law",
            body: "EMF induced = rate of change of flux linkage: $\\varepsilon = -N\\frac{d\\Phi}{dt}$. Flux $\\Phi = BA\\cos\\theta$. Changing B, A, or orientation induces EMF. Generator principle.",
          },
          {
            heading: "Lenz's law",
            body: "Induced EMF opposes the change producing it — conservation of energy. Approaching magnet → induced field repels; receding → attracts. Direction of induced current opposes flux change.",
          },
          {
            heading: "Transformers",
            body: "Step-up: $V_s/V_p = N_s/N_p > 1$; step-down: < 1. Ideal: $V_p I_p = V_s I_s$ (power conserved). Eddy currents cause losses — laminated cores reduce them. AC only — transformers need changing flux.",
          },
        ],
        keyFormulas: [
          { name: "Faraday", statement: "$\\varepsilon = -N\\frac{d\\Phi}{dt}$" },
          { name: "Transformer", statement: "$\\frac{V_s}{V_p} = \\frac{N_s}{N_p}$" },
          { name: "Power", statement: "$V_p I_p = V_s I_s$" },
        ],
        workedExample: {
          problem: "A transformer has 1000 primary turns and 100 secondary turns. Primary voltage 240 V. Find secondary voltage.",
          solution: "$V_s = V_p \\times N_s/N_p = 240 \\times 100/1000 = 24\\ V$.",
        },
      },
      questions: [
        {
          id: "cial-p-u5-ei-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does Faraday's law state?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "EMF proportional to rate of change of flux" },
              { id: "b", text: "EMF proportional to flux itself" },
              { id: "c", text: "EMF independent of turns" },
              { id: "d", text: "EMF only in DC circuits" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Faraday", statement: "$\\varepsilon = -Nd\\Phi/dt$." }],
            steps: [{ reasoning: "EMF ∝ rate of flux change.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\varepsilon = -N\\frac{d\\Phi}{dt}$",
          },
        },
        {
          id: "cial-p-u5-ei-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A transformer steps down 240 V to 12 V with 2000 primary turns. How many secondary turns?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Transformer", statement: "$V_s/V_p = N_s/N_p$." }],
            steps: [
              { reasoning: "$N_s = N_p \\times V_s/V_p = 2000 \\times 12/240$.", marks: 1, markCode: "M" },
              { reasoning: "$N_s = 100$ turns.", marks: 1, markCode: "M" },
              { reasoning: "Step-down transformer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$N_s = 100$ turns",
          },
        },
        {
          id: "cial-p-u5-ei-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why does Lenz's law require the negative sign in Faraday's law?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Lenz's law", statement: "Induced EMF opposes flux change — energy conservation." }],
            steps: [
              { reasoning: "Induced current creates field opposing the change.", marks: 1, markCode: "M" },
              { reasoning: "If flux increases, induced field opposes increase.", marks: 1, markCode: "M" },
              { reasoning: "Negative sign ensures opposition.", marks: 1, markCode: "M" },
              { reasoning: "Conservation of energy — induced current can't create energy.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Opposes change — energy conservation",
          },
        },
        {
          id: "cial-p-u5-ei-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Electromagnetic induction.",
          parts: [
            { label: "a", prompt: "State Faraday's law.", marks: 2 },
            { label: "b", prompt: "State Lenz's law.", marks: 2 },
            { label: "c", prompt: "Transformer ratio equation?", marks: 2 },
            { label: "d", prompt: "Why can't transformers work with DC?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "EM induction", statement: "$\\varepsilon=-Nd\\Phi/dt$; Lenz opposes change." }],
            steps: [
              { part: "a", reasoning: "EMF = rate of change of flux linkage.", marks: 2, markCode: "A" },
              { part: "b", reasoning: "Induced EMF opposes the change.", marks: 2, markCode: "A" },
              { part: "c", reasoning: "$V_s/V_p = N_s/N_p$.", marks: 2, markCode: "A" },
              { part: "d", reasoning: "DC produces constant flux — no change.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Faraday needs changing flux for EMF.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Only transient EMF on connect/disconnect.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Faraday (b) Lenz (c) Vs/Vp=Ns/Np (d) DC=const flux",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-p-u5-magnetism-induction-notes",
      title: "Magnetism and EM induction — revision notes",
      summary: "Magnetic forces, Fleming's rule, Faraday/Lenz laws, transformers.",
      sections: [
        {
          heading: "Magnetic force",
          body: "$F = BIL\\sin\\theta$ on wire; $F = qvB\\sin\\theta$ on charge. Fleming's left-hand: Field, Current, Motion. Perpendicular force → circular motion.",
        },
        {
          heading: "Induction",
          body: "$\\varepsilon = -Nd\\Phi/dt$; Lenz: opposes change. Transformers: $V_s/V_p = N_s/N_p$; AC only (needs changing flux).",
        },
        {
          heading: "Exam checklist",
          body: "For force direction use Fleming's left-hand rule. Induced EMF always opposes the change causing it.",
        },
      ],
    },
  ],
};
