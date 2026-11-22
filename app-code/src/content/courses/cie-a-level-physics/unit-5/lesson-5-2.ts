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
              { id: "a", text: "$F = BI/(L\\sin\\theta)$" },
              { id: "b", text: "$F = BIL\\sin\\theta$" },
              { id: "c", text: "$F = BL/(I\\sin\\theta)$" },
              { id: "d", text: "$F = BIL/\\sin\\theta$" },
            ],
            correctChoiceId: "b",
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
        {
          id: "cial-p-u5-mg-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the SI unit of magnetic flux density $B$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "tesla" },
              { id: "b", text: "newton per coulomb" },
              { id: "c", text: "ampere-turn" },
              { id: "d", text: "weber" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Flux density", statement: "$B$ measured in tesla (T); $1\\ T = 1\\ Wb\\ m^{-2}$." }],
            steps: [{ reasoning: "Unit of B is the tesla.", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** tesla",
          },
        },
        {
          id: "cial-p-u5-mg-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "A straight wire of length $0.50\\ m$ carries a current of $4.0\\ A$ perpendicular to a uniform magnetic field of $0.20\\ T$. Calculate the force on the wire.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.4, tolerance: 0.01, unit: "N" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Magnetic force", statement: "$F = BIL\\sin\\theta$; $\\theta = 90°$ → $\\sin\\theta = 1$." }],
            steps: [
              { reasoning: "$F = BIL = 0.20 \\times 4.0 \\times 0.50$.", marks: 1, markCode: "M" },
              { reasoning: "$F = 0.40\\ N$.", marks: 1, markCode: "M" },
              { reasoning: "Direction given by Fleming's left-hand rule.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$F = 0.40\\ N$",
          },
        },
        {
          id: "cial-p-u5-mg-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In Fleming's left-hand rule, which finger points in the direction of conventional current?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Thumb" },
              { id: "b", text: "seCond finger" },
              { id: "c", text: "First finger" },
              { id: "d", text: "pinky finger" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "FLHR", statement: "First finger = Field, seCond finger = Current, Thumb = Motion/force." }],
            steps: [{ reasoning: "seCond finger = Current.", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** seCond finger",
          },
        },
        {
          id: "cial-p-u5-mg-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "A proton moving at $1.0 \\times 10^{6}\\ m\\,s^{-1}$ perpendicular to a $0.50\\ T$ magnetic field follows a circular path. Calculate the radius of the path. ($m_p = 1.67 \\times 10^{-27}\\ kg$, $e = 1.60 \\times 10^{-19}\\ C$)",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.0209, tolerance: 0.001, unit: "m" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Circular motion", statement: "$qvB = mv^2/r$ → $r = mv/qB$." }],
            steps: [
              { reasoning: "$r = mv/qB = (1.67\\times10^{-27} \\times 1.0\\times10^{6})/(1.60\\times10^{-19} \\times 0.50)$.", marks: 1, markCode: "M" },
              { reasoning: "$r = 1.67\\times10^{-21}/8.0\\times10^{-20}$.", marks: 1, markCode: "M" },
              { reasoning: "$r = 0.0209\\ m$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$r = 0.021\\ m$",
          },
        },
        {
          id: "cial-p-u5-mg-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A horizontal wire carries conventional current to the right in a region where the magnetic field points vertically upwards. The force on the wire acts",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "horizontally into the page" },
              { id: "b", text: "out of the page" },
              { id: "c", text: "to the left" },
              { id: "d", text: "vertically downwards" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "FLHR", statement: "Current right, Field up → Thumb (force) into the page." }],
            steps: [{ reasoning: "Applying Fleming's left-hand rule: force is perpendicular to both, directed into the page.", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** horizontally into the page",
          },
        },
        {
          id: "cial-p-u5-mg-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the force on a current-carrying wire in a magnetic field is always perpendicular to both the wire and the field.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Cross product", statement: "Force direction is given by $\\vec{I} \\times \\vec{B}$ (Fleming's left-hand rule)." }],
            steps: [
              { reasoning: "The force on each moving charge is $F = qvB\\sin\\theta$ with direction perpendicular to $v$ and $B$.", marks: 1, markCode: "M" },
              { reasoning: "For a wire, $v$ is along the wire (direction of conventional current).", marks: 1, markCode: "M" },
              { reasoning: "The resultant force on all charge carriers points perpendicular to both $I$ and $B$.", marks: 1, markCode: "M" },
              { reasoning: "This is why motors can produce rotation — force does no work along the wire itself.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Force ⊥ to both I and B (cross-product direction)",
          },
        },
        {
          id: "cial-p-u5-mg-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "An electron moving at $2.0 \\times 10^{7}\\ m\\,s^{-1}$ perpendicular to a $0.10\\ T$ magnetic field experiences a force. Calculate the magnitude of this force. ($e = 1.60 \\times 10^{-19}\\ C$)",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3.2e-13, tolerance: 0.1e-13, unit: "N" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Force on charge", statement: "$F = qvB\\sin\\theta$; $\\theta = 90°$." }],
            steps: [
              { reasoning: "$F = qvB = 1.60\\times10^{-19} \\times 2.0\\times10^{7} \\times 0.10$.", marks: 1, markCode: "M" },
              { reasoning: "$F = 3.2\\times10^{-13}\\ N$.", marks: 1, markCode: "M" },
              { reasoning: "Direction given by Fleming's left-hand rule (opposite to positive charge).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$F = 3.2 \\times 10^{-13}\\ N$",
          },
        },
        {
          id: "cial-p-u5-mg-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The magnetic field lines around a long straight current-carrying wire are",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "straight lines parallel to the wire" },
              { id: "b", text: "radial lines spreading from the wire" },
              { id: "c", text: "concentric circles centred on the wire" },
              { id: "d", text: "figure-of-eight patterns" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Wire field", statement: "Field around a straight wire forms concentric circular loops." }],
            steps: [{ reasoning: "Concentric circles, direction by right-hand grip rule.", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** concentric circles centred on the wire",
          },
        },
        {
          id: "cial-p-u5-mg-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "A $0.50\\ m$ length of wire carrying $3.0\\ A$ is placed perpendicular to the Earth's magnetic field of $5.0 \\times 10^{-5}\\ T$. Calculate the force on the wire.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 7.5e-5, tolerance: 0.1e-5, unit: "N" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Magnetic force", statement: "$F = BIL\\sin\\theta$ with $\\theta = 90°$." }],
            steps: [
              { reasoning: "$F = 5.0\\times10^{-5} \\times 3.0 \\times 0.50$.", marks: 1, markCode: "M" },
              { reasoning: "$F = 7.5\\times10^{-5}\\ N$.", marks: 1, markCode: "M" },
              { reasoning: "Very small force — Earth's field is weak.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$F = 7.5 \\times 10^{-5}\\ N$",
          },
        },
        {
          id: "cial-p-u5-mg-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A proton moves at $4.0 \\times 10^{6}\\ m\\,s^{-1}$ perpendicular to a $0.10\\ T$ magnetic field. Calculate the radius of its circular path. ($m_p = 1.67 \\times 10^{-27}\\ kg$, $e = 1.60 \\times 10^{-19}\\ C$)",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.418, tolerance: 0.01, unit: "m" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Circular motion", statement: "$r = mv/qB$." }],
            steps: [
              { reasoning: "$r = (1.67\\times10^{-27} \\times 4.0\\times10^{6})/(1.60\\times10^{-19} \\times 0.10)$.", marks: 1, markCode: "M" },
              { reasoning: "$r = 6.68\\times10^{-21}/1.6\\times10^{-20}$.", marks: 1, markCode: "M" },
              { reasoning: "$r = 0.42\\ m$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$r = 0.42\\ m$",
          },
        },
        {
          id: "cial-p-u5-mg-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A charged particle moves through a uniform magnetic field with its velocity parallel to the field direction. The magnetic force on the particle is",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "opposite to its velocity" },
              { id: "b", text: "zero" },
              { id: "c", text: "maximum" },
              { id: "d", text: "half the maximum value" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Force on charge", statement: "$F = qvB\\sin\\theta$; $\\theta = 0°$ → $F = 0$." }],
            steps: [{ reasoning: "$\\sin 0° = 0$ → no force; particle continues undeflected.", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** zero",
          },
        },
        {
          id: "cial-p-u5-mg-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two long parallel wires carry currents in the same direction. Explain, with reference to the magnetic field produced by one wire, why the wires attract each other.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Wire-wire force", statement: "Each wire lies in the field of the other; force given by Fleming's left-hand rule." }],
            steps: [
              { reasoning: "Wire 1 produces a circular magnetic field around itself (right-hand grip rule).", marks: 1, markCode: "M" },
              { reasoning: "At the position of wire 2, this field is perpendicular to the current in wire 2.", marks: 1, markCode: "M" },
              { reasoning: "Fleming's left-hand rule gives a force on wire 2 directed towards wire 1.", marks: 1, markCode: "M" },
              { reasoning: "By Newton's third law the force is mutual — the wires attract.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Each wire feels force toward the other — mutual attraction",
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
              { id: "a", text: "EMF proportional to flux itself" },
              { id: "b", text: "EMF proportional to rate of change of flux" },
              { id: "c", text: "EMF independent of turns" },
              { id: "d", text: "EMF only in DC circuits" },
            ],
            correctChoiceId: "b",
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
        {
          id: "cial-p-u5-ei-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Lenz's law states that the induced e.m.f. will",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "aid the change producing it" },
              { id: "b", text: "be zero when flux is maximum" },
              { id: "c", text: "depend only on the number of turns" },
              { id: "d", text: "oppose the change producing it" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Lenz's law", statement: "Induced EMF opposes the change in flux that produces it." }],
            steps: [{ reasoning: "Lenz's law = opposition to the change (energy conservation).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** oppose the change producing it",
          },
        },
        {
          id: "cial-p-u5-ei-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "A transformer has $500$ primary turns and steps a $120\\ V$ supply up to $2400\\ V$. Calculate the number of secondary turns.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10000, tolerance: 1, unit: "turns" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Transformer", statement: "$V_s/V_p = N_s/N_p$." }],
            steps: [
              { reasoning: "$N_s = N_p \\times V_s/V_p = 500 \\times 2400/120$.", marks: 1, markCode: "M" },
              { reasoning: "$N_s = 500 \\times 20$.", marks: 1, markCode: "M" },
              { reasoning: "$N_s = 10\\,000$ turns (step-up).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$N_s = 10\\,000$ turns",
          },
        },
        {
          id: "cial-p-u5-ei-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "An e.m.f. is induced in a coil when a bar magnet is",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "kept at constant temperature" },
              { id: "b", text: "held stationary inside the coil" },
              { id: "c", text: "made of non-magnetic material" },
              { id: "d", text: "moved towards or away from the coil" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Faraday", statement: "EMF induced only when flux linkage changes." }],
            steps: [{ reasoning: "Moving the magnet changes the flux through the coil → EMF induced.", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** moved towards or away from the coil",
          },
        },
        {
          id: "cial-p-u5-ei-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "The magnetic flux through a $100$-turn coil changes uniformly from $0.02\\ Wb$ to $0.08\\ Wb$ in $0.50\\ s$. Calculate the average induced e.m.f.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 12, tolerance: 0.2, unit: "V" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Faraday", statement: "$\\varepsilon = -N\\,\\Delta\\Phi/\\Delta t$." }],
            steps: [
              { reasoning: "$\\Delta\\Phi = 0.08 - 0.02 = 0.06\\ Wb$.", marks: 1, markCode: "M" },
              { reasoning: "$\\varepsilon = 100 \\times 0.06/0.50 = 12\\ V$.", marks: 1, markCode: "M" },
              { reasoning: "$\\varepsilon = 12\\ V$ (sign per Lenz's law).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\varepsilon = 12\\ V$",
          },
        },
        {
          id: "cial-p-u5-ei-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why an induced current always opposes the motion that produces it.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Lenz's law", statement: "Induced EMF opposes the change producing it — energy conservation." }],
            steps: [
              { reasoning: "Moving a magnet into a coil induces a current by Faraday's law.", marks: 1, markCode: "M" },
              { reasoning: "The induced current creates its own magnetic field.", marks: 1, markCode: "M" },
              { reasoning: "By Lenz's law this field opposes the incoming magnet → repels it, requiring work to push it in.", marks: 1, markCode: "M" },
              { reasoning: "The mechanical work done equals the electrical energy produced — no energy is created.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Opposition converts mechanical work to electrical energy",
          },
        },
        {
          id: "cial-p-u5-ei-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Eddy currents in a transformer core are reduced by",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "using a solid iron core" },
              { id: "b", text: "removing all secondary turns" },
              { id: "c", text: "increasing the supply frequency" },
              { id: "d", text: "laminating the core with insulated layers" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Eddy currents", statement: "Laminated cores interrupt the circulating currents that waste energy as heat." }],
            steps: [{ reasoning: "Insulated laminations break eddy-current paths → less heating.", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** laminating the core",
          },
        },
        {
          id: "cial-p-u5-ei-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "An ideal transformer has $1000$ primary turns and $100$ secondary turns. The primary is connected to $230\\ V$ and draws $2.0\\ A$. Calculate (a) the secondary voltage and (b) the secondary current.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 23, tolerance: 0.1, unit: "V" },
              { label: "b", answer: 20, tolerance: 0.1, unit: "A" },
            ],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Transformer", statement: "$V_s/V_p = N_s/N_p$; ideal: $V_pI_p = V_sI_s$." }],
            steps: [
              { reasoning: "$V_s = 230 \\times 100/1000 = 23\\ V$.", marks: 1, markCode: "M" },
              { reasoning: "$I_s = V_pI_p/V_s = 230 \\times 2.0/23 = 20\\ A$.", marks: 1, markCode: "M" },
              { reasoning: "$V_s = 23\\ V$, $I_s = 20\\ A$ — power conserved (460 W).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$V_s = 23\\ V$, $I_s = 20\\ A$",
          },
        },
        {
          id: "cial-p-u5-ei-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Magnetic flux linkage is defined as",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the rate of change of flux" },
              { id: "b", text: "the current in the coil" },
              { id: "c", text: "the flux through the coil multiplied by the number of turns" },
              { id: "d", text: "the flux through one turn only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Flux linkage", statement: "Flux linkage $= N\\Phi$ — flux times number of turns." }],
            steps: [{ reasoning: "Flux linkage = $N\\Phi$.", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** flux $\\times$ number of turns",
          },
        },
        {
          id: "cial-p-u5-ei-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "The magnetic flux through each turn of a $500$-turn coil changes by $0.040\\ Wb$ in $0.020\\ s$. Calculate the induced e.m.f.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1000, tolerance: 10, unit: "V" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Faraday", statement: "$\\varepsilon = N\\,\\Delta\\Phi/\\Delta t$." }],
            steps: [
              { reasoning: "$\\varepsilon = 500 \\times 0.040/0.020$.", marks: 1, markCode: "M" },
              { reasoning: "$\\varepsilon = 500 \\times 2.0$.", marks: 1, markCode: "M" },
              { reasoning: "$\\varepsilon = 1000\\ V$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\varepsilon = 1000\\ V$",
          },
        },
        {
          id: "cial-p-u5-ei-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe how a simple a.c. generator produces an alternating e.m.f.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Generator", statement: "Coil rotating in a magnetic field → continually changing flux linkage → alternating EMF." }],
            steps: [
              { reasoning: "A coil is rotated between the poles of a magnet.", marks: 1, markCode: "M" },
              { reasoning: "Rotation changes the angle between the field and the coil → flux linkage varies sinusoidally.", marks: 1, markCode: "M" },
              { reasoning: "By Faraday's law a varying e.m.f. is induced; by Lenz's law its sign reverses each half-turn.", marks: 1, markCode: "M" },
              { reasoning: "Slip rings and brushes carry the alternating current to the external circuit.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Rotating coil → changing flux → sinusoidal EMF",
          },
        },
        {
          id: "cial-p-u5-ei-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which situation would NOT induce an e.m.f. in a coil?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Holding a magnet stationary inside the coil" },
              { id: "b", text: "Changing the current in a neighbouring coil" },
              { id: "c", text: "Rotating the coil in a magnetic field" },
              { id: "d", text: "Moving a magnet into the coil" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Faraday", statement: "EMF requires a change in flux linkage; constant flux gives zero EMF." }],
            steps: [{ reasoning: "Stationary magnet → constant flux → no induced EMF.", marks: 1, markCode: "A" }],
            finalAnswer: "**(c)** holding a magnet stationary",
          },
        },
        {
          id: "cial-p-u5-ei-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A transformer is $80\\%$ efficient: it delivers $200\\ W$ to a load while drawing $250\\ W$ from the supply. Calculate its efficiency as a percentage and state the main cause of the energy loss.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 80, tolerance: 0.5, unit: "%" }],
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Transformer losses", statement: "$\\eta = P_{out}/P_{in} \\times 100\\%$; losses from eddy currents, copper heating, hysteresis." }],
            steps: [
              { reasoning: "$\\eta = 200/250 \\times 100\\%$.", marks: 1, markCode: "M" },
              { reasoning: "$\\eta = 80\\%$.", marks: 1, markCode: "M" },
              { reasoning: "Main loss: eddy currents and $I^2R$ heating of windings (also hysteresis).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\eta = 80\\%$; losses mainly eddy currents and copper heating",
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
