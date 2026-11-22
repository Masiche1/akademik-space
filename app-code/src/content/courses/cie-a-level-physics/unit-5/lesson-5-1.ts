import type { Lesson } from "../../../types.ts";

export const lesson511: Lesson = {
  id: "cial-p-u5-lesson-5-1",
  code: "5-1",
  title: "Electrostatics and current",
  goal: "I CAN explain electric charge, Coulomb's law, electric fields and current.",
  standards: ["9702 10-11: electricity"],
  vocabulary: [
    { term: "Electric charge", definition: "Property causing electromagnetic force — measured in coulombs (C)." },
    { term: "Coulomb's law", definition: "$F = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q_1q_2}{r^2}$ — inverse square." },
    { term: "Electric field", definition: "Force per unit charge — $E = F/q$ (N/C or V/m)." },
    { term: "Potential", definition: "Energy per unit charge — $V = W/q$ (volts)." },
    { term: "Current", definition: "Rate of charge flow — $I = Q/t$ (amperes)." },
    { term: "Conventional current", definition: "Flow of positive charge — opposite to electron flow." },
  ],
  concepts: [
    {
      id: "cial-p-u5-electrostatics",
      title: "Electric charge and fields",
      skill: "Apply Coulomb's law and electric field/potential concepts.",
      lesson: {
        sections: [
          {
            heading: "Charge and Coulomb's law",
            body: "Charge quantised in units of $e = 1.6 \\times 10^{-19}\\ C$. Like charges repel, unlike attract. $F = kq_1q_2/r^2$ where $k = 9 \\times 10^9\\ N\\ m^2\\ C^{-2}$. Inverse square law like gravity.",
          },
          {
            heading: "Electric fields",
            body: "Field lines: direction = force on positive test charge. Point charge: radial. Uniform field: parallel lines (between plates). Field strength $E = F/q = kQ/r^2$. Field does work moving charge: $W = qEd$.",
          },
          {
            heading: "Potential and potential difference",
            body: "$V = W/q$ — energy per unit charge. Potential difference = work done per unit charge moved. $E = V/d$ for uniform field. Capacitor stores charge: $Q = CV$; energy $E = \\frac12 CV^2$.",
          },
        ],
        keyFormulas: [
          { name: "Coulomb", statement: "$F = \\frac{kq_1q_2}{r^2}$" },
          { name: "Field", statement: "$E = F/q$" },
          { name: "Capacitor", statement: "$Q = CV$, $E = \\frac12 CV^2$" },
        ],
        workedExample: {
          problem: "Two charges of $2 \\times 10^{-6}\\ C$ are 0.1 m apart. Find force ($k = 9\\times10^9$).",
          solution: "$F = \\frac{9\\times10^9 \\times (2\\times10^{-6})^2}{0.01} = \\frac{9\\times10^9 \\times 4\\times10^{-12}}{0.01} = 3.6\\ N$.",
        },
      },
      questions: [
        {
          id: "cial-p-u5-es-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is Coulomb's law?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$F = kq_1q_2r^2$" },
              { id: "b", text: "$F = \\frac{q_1q_2}{kr^2}$" },
              { id: "c", text: "$F = kq_1q_2/r$" },
              { id: "d", text: "$F = \\frac{kq_1q_2}{r^2}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Coulomb", statement: "$F = kq_1q_2/r^2$." }],
            steps: [{ reasoning: "Inverse square law for charges.", marks: 1, markCode: "A" }],
            finalAnswer: "$F = kq_1q_2/r^2$",
          },
        },
        {
          id: "cial-p-u5-es-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the electric field strength at a point where a 2 μC charge experiences 0.1 N force?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Field", statement: "$E = F/q$." }],
            steps: [
              { reasoning: "$E = F/q = 0.1/(2\\times10^{-6})$.", marks: 1, markCode: "M" },
              { reasoning: "$E = 50,000\\ N\\ C^{-1} = 50\\ kN/C$.", marks: 1, markCode: "M" },
              { reasoning: "Units correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E = 50\\ kN\\ C^{-1}$",
          },
        },
        {
          id: "cial-p-u5-es-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A capacitor has C = 100 μF and V = 50 V. Find stored charge and energy.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Capacitor", statement: "$Q=CV$, $E=\\frac12CV^2$." }],
            steps: [
              { reasoning: "$Q = 100\\times10^{-6} \\times 50 = 5\\times10^{-3}\\ C$.", marks: 1, markCode: "M" },
              { reasoning: "$E = \\frac12 \\times 100\\times10^{-6} \\times 2500 = 0.125\\ J$.", marks: 1, markCode: "M" },
              { reasoning: "$Q = 5\\ mC$, $E = 0.125\\ J$.", marks: 1, markCode: "A" },
              { reasoning: "Both calculations correct.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$Q = 5\\ mC$, $E = 0.125\\ J$",
          },
        },
        {
          id: "cial-p-u5-es-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Electrostatics.",
          parts: [
            { label: "a", prompt: "State Coulomb's law.", marks: 2 },
            { label: "b", prompt: "Define electric field strength.", marks: 2 },
            { label: "c", prompt: "What is a capacitor?", marks: 2 },
            { label: "d", prompt: "Two 1 μC charges are 0.5 m apart. Find force.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Electrostatics", statement: "$F=kq_1q_2/r^2$; $E=F/q$; capacitor stores charge." }],
            steps: [
              { part: "a", reasoning: "$F = kq_1q_2/r^2$ — inverse square.", marks: 2, markCode: "A" },
              { part: "b", reasoning: "$E = F/q$ — force per unit charge.", marks: 2, markCode: "A" },
              { part: "c", reasoning: "Device storing charge — two conductors separated by dielectric.", marks: 2, markCode: "A" },
              { part: "d", reasoning: "$F = 9\\times10^9 \\times (10^{-6})^2/0.25$.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "$= 9\\times10^9 \\times 10^{-12}/0.25$.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "$F = 0.036\\ N$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Coulomb (b) E=F/q (c) charge storage (d) 0.036 N",
          },
        },
        {
          id: "cial-p-u5-es-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the SI unit of electric field strength?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$C\\ m^{-2}$" },
              { id: "b", text: "$J\\ C^{-1}$" },
              { id: "c", text: "$A\\ m^{-2}$" },
              { id: "d", text: "$N\\ C^{-1}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Field unit", statement: "$E = F/q$ → N/C (equivalent to V/m)." }],
            steps: [{ reasoning: "Force per unit charge → newtons per coulomb.", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** $N\\ C^{-1}$",
          },
        },
        {
          id: "cial-p-u5-es-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two point charges of $+3.0\\ \\mu C$ and $-3.0\\ \\mu C$ are placed $0.20\\ m$ apart in air. Taking $k = 9\\times10^9\\ N\\ m^2\\ C^{-2}$, calculate the magnitude of the force between them.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2.025, tolerance: 0.01, unit: "N" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Coulomb", statement: "$F = kq_1q_2/r^2$; unlike charges attract." }],
            steps: [
              { reasoning: "$F = 9\\times10^9 \\times (3.0\\times10^{-6})^2/(0.20)^2$.", marks: 1, markCode: "M" },
              { reasoning: "$F = 9\\times10^9 \\times 9.0\\times10^{-12}/0.04 = 2.025\\ N$.", marks: 1, markCode: "M" },
              { reasoning: "Force is attractive; magnitude $2.03\\ N$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$F = 2.03\\ N$ (attractive)",
          },
        },
        {
          id: "cial-p-u5-es-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A small positive test charge is released from rest near a negatively charged conducting sphere. It will initially",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "remain stationary" },
              { id: "b", text: "move in a uniform circular path" },
              { id: "c", text: "accelerate towards the sphere" },
              { id: "d", text: "accelerate away from the sphere" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Field direction", statement: "Field direction = force on positive test charge; unlike charges attract." }],
            steps: [{ reasoning: "Positive charge attracted to negative sphere → accelerates towards it.", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** accelerate towards the sphere",
          },
        },
        {
          id: "cial-p-u5-es-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "How much work is done in moving a charge of $5.0\\ \\mu C$ through a potential difference of $240\\ V$?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.0012, tolerance: 0.0001, unit: "J" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Potential", statement: "$V = W/q$ → $W = qV$." }],
            steps: [
              { reasoning: "$W = qV = 5.0\\times10^{-6} \\times 240$.", marks: 1, markCode: "M" },
              { reasoning: "$W = 1.2\\times10^{-3}\\ J$.", marks: 1, markCode: "M" },
              { reasoning: "$W = 1.2\\ mJ$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$W = 1.2\\ mJ$",
          },
        },
        {
          id: "cial-p-u5-es-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why electric field lines never cross at a point.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Field uniqueness", statement: "The electric field has a single direction at each point." }],
            steps: [
              { reasoning: "Field line direction = direction of force on a positive test charge.", marks: 1, markCode: "M" },
              { reasoning: "If two lines crossed, the test charge would experience two different forces.", marks: 1, markCode: "M" },
              { reasoning: "The resultant field at a point is unique (vector superposition).", marks: 1, markCode: "M" },
              { reasoning: "Hence only one field line can pass through each point.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Field direction is unique at each point",
          },
        },
        {
          id: "cial-p-u5-es-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A $470\\ \\mu F$ capacitor is charged to a potential difference of $24\\ V$. Calculate the energy stored in it.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.13536, tolerance: 0.001, unit: "J" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Capacitor energy", statement: "$E = \\frac12 CV^2$." }],
            steps: [
              { reasoning: "$E = \\frac12 \\times 470\\times10^{-6} \\times (24)^2$.", marks: 1, markCode: "M" },
              { reasoning: "$E = \\frac12 \\times 470\\times10^{-6} \\times 576 = 0.13536\\ J$.", marks: 1, markCode: "M" },
              { reasoning: "$E \\approx 0.135\\ J$ (135 mJ).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E = 0.135\\ J$",
          },
        },
        {
          id: "cial-p-u5-es-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The electric field between two large, closely spaced, oppositely charged parallel plates is best described as",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "radial" },
              { id: "b", text: "zero at the centre" },
              { id: "c", text: "inverse-square everywhere" },
              { id: "d", text: "uniform" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Uniform field", statement: "Between large parallel plates the field is uniform: $E = V/d$." }],
            steps: [{ reasoning: "Parallel plates give a uniform field (edge effects ignored).", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** uniform",
          },
        },
        {
          id: "cial-p-u5-es-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "A charge of $2.0\\ \\mu C$ experiences a force of $3.6\\times10^{-3}\\ N$ in an electric field. Determine the field strength at that point.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1800, tolerance: 1, unit: "N C^{-1}" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Field", statement: "$E = F/q$." }],
            steps: [
              { reasoning: "$E = F/q = 3.6\\times10^{-3}/(2.0\\times10^{-6})$.", marks: 1, markCode: "M" },
              { reasoning: "$E = 1.8\\times10^{3}\\ N\\ C^{-1}$.", marks: 1, markCode: "M" },
              { reasoning: "$E = 1800\\ N\\ C^{-1}$ (or $1.8\\ kN\\ C^{-1}$).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E = 1800\\ N\\ C^{-1}$",
          },
        },
        {
          id: "cial-p-u5-es-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "A capacitor is connected to a steady-voltage battery. Describe and explain what happens to the current and the charge on the plates as the capacitor charges.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "RC charging", statement: "Charge builds exponentially: $Q = Q_0(1 - e^{-t/RC})$." }],
            steps: [
              { reasoning: "Current is maximum at t = 0 when plates are uncharged.", marks: 1, markCode: "M" },
              { reasoning: "Current decreases as the p.d. across the capacitor rises.", marks: 1, markCode: "M" },
              { reasoning: "Charge on plates increases according to $Q = CV$ until $Q_0 = CV_{battery}$.", marks: 1, markCode: "M" },
              { reasoning: "Current falls to zero and charge levels off exponentially once fully charged.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Current decreases to zero; charge rises exponentially to Q = CV",
          },
        },
        {
          id: "cial-p-u5-es-q14",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Electrostatics calculations.",
          parts: [
            { label: "a", prompt: "Define electric potential difference.", marks: 2 },
            { label: "b", prompt: "Two $4.0\\ \\mu C$ charges are $0.30\\ m$ apart. Calculate the force between them ($k = 9\\times10^9$).", marks: 3 },
            { label: "c", prompt: "A force of $1.5\\times10^{-5}\\ N$ acts on a $2.0\\ \\mu C$ charge. Find the field strength.", marks: 2 },
            { label: "d", prompt: "A $100\\ \\mu F$ capacitor at $60\\ V$ — find the stored charge and energy.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Electrostatics", statement: "$V=W/q$; $F=kq_1q_2/r^2$; $E=F/q$; $Q=CV$, $E=\\frac12CV^2$." }],
            steps: [
              { part: "a", reasoning: "Work done per unit charge moved between two points.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Unit: volt; $V = W/q$.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$F = 9\\times10^9 \\times (4.0\\times10^{-6})^2/(0.30)^2$.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$F = 9\\times10^9 \\times 16\\times10^{-12}/0.09 = 1.6\\ N$.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Repulsive force of $1.6\\ N$.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$E = F/q = 1.5\\times10^{-5}/(2.0\\times10^{-6})$.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$E = 7.5\\ N\\ C^{-1}$.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$Q = CV = 100\\times10^{-6} \\times 60 = 6.0\\times10^{-3}\\ C$; $E = \\frac12 CV^2 = 0.18\\ J$.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "$Q = 6.0\\ mC$, $E = 0.18\\ J$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) W/q (b) 1.6 N (c) 7.5 N/C (d) 6 mC, 0.18 J",
          },
        },
        {
          id: "cial-p-u5-es-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two identical positive point charges are moved closer together. The force between them",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "remains unchanged" },
              { id: "b", text: "increases because the force follows an inverse-square law" },
              { id: "c", text: "decreases because the charges are further apart" },
              { id: "d", text: "becomes attractive" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Coulomb", statement: "$F \\propto 1/r^2$ — smaller r gives larger F." }],
            steps: [{ reasoning: "Inverse-square law: reducing r increases F.", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** increases",
          },
        },
        {
          id: "cial-p-u5-es-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A $220\\ \\mu F$ capacitor is charged to a p.d. of $9.0\\ V$. Calculate the charge stored and the energy stored.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0.00198, tolerance: 0.0001, unit: "C" },
              { label: "b", answer: 0.00891, tolerance: 0.0005, unit: "J" },
            ],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Capacitor", statement: "$Q = CV$; $E = \\frac12 CV^2$ (= $\\frac12 QV$)." }],
            steps: [
              { reasoning: "$Q = CV = 220\\times10^{-6} \\times 9.0 = 1.98\\times10^{-3}\\ C$.", marks: 1, markCode: "M" },
              { reasoning: "$E = \\frac12 \\times 220\\times10^{-6} \\times 81 = 8.91\\times10^{-3}\\ J$.", marks: 1, markCode: "M" },
              { reasoning: "$Q = 1.98\\ mC$, $E = 8.91\\ mJ$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$Q = 1.98\\ mC$, $E = 8.91\\ mJ$",
          },
        },
      ],
    },
    {
      id: "cial-p-u5-current",
      title: "Current and circuits",
      skill: "Apply Ohm's law and circuit analysis.",
      lesson: {
        sections: [
          {
            heading: "Current and Ohm's law",
            body: "$I = Q/t$ — charge flow per second. Ohm's law: $V = IR$ — voltage = current × resistance. Resistance $R = \\rho L/A$ — depends on material, length, cross-sectional area. Units: V (volt), A (amp), Ω (ohm).",
          },
          {
            heading: "Series and parallel",
            body: "Series: same current, voltages add, $R_{total} = R_1 + R_2$. Parallel: same voltage, currents add, $1/R_{total} = 1/R_1 + 1/R_2$. Power: $P = VI = I^2R = V^2/R$.",
          },
          {
            heading: "EMF and internal resistance",
            body: "EMF = total energy per unit charge from source. Terminal p.d. $V = \\varepsilon - Ir$ where $r$ = internal resistance. Lost volts $= Ir$. Maximum current when external R = 0.",
          },
        ],
        keyFormulas: [
          { name: "Ohm's law", statement: "$V = IR$" },
          { name: "Series", statement: "$R_T = R_1 + R_2$" },
          { name: "Parallel", statement: "$1/R_T = 1/R_1 + 1/R_2$" },
          { name: "Power", statement: "$P = VI = I^2R$" },
        ],
        workedExample: {
          problem: "Two 6 Ω resistors in parallel. Find total resistance.",
          solution: "$1/R = 1/6 + 1/6 = 2/6$ → $R = 3\\ Ω$.",
        },
      },
      questions: [
        {
          id: "cial-p-u5-cu-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is Ohm's law?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$I = VR$" },
              { id: "b", text: "$V = I/R$" },
              { id: "c", text: "$R = VI$" },
              { id: "d", text: "$V = IR$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Ohm's law", statement: "$V = IR$." }],
            steps: [{ reasoning: "V = IR.", marks: 1, markCode: "A" }],
            finalAnswer: "$V = IR$",
          },
        },
        {
          id: "cial-p-u5-cu-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A 12 V battery drives 2 A through a resistor. Find resistance and power.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Ohm's law", statement: "$R = V/I$; $P = VI$." }],
            steps: [
              { reasoning: "$R = 12/2 = 6\\ Ω$.", marks: 1, markCode: "M" },
              { reasoning: "$P = VI = 12 \\times 2 = 24\\ W$.", marks: 1, markCode: "M" },
              { reasoning: "Both correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$R = 6\\ Ω$, $P = 24\\ W$",
          },
        },
        {
          id: "cial-p-u5-cu-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Three 4 Ω resistors are in parallel. Find total resistance.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Parallel", statement: "$1/R_T = 1/R_1 + 1/R_2 + 1/R_3$." }],
            steps: [
              { reasoning: "$1/R = 1/4 + 1/4 + 1/4 = 3/4$.", marks: 1, markCode: "M" },
              { reasoning: "$R = 4/3 = 1.33\\ Ω$.", marks: 1, markCode: "M" },
              { reasoning: "Parallel < smallest individual.", marks: 1, markCode: "A" },
              { reasoning: "$R_T = 1.33\\ Ω$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$R_T = 1.33\\ Ω$",
          },
        },
        {
          id: "cial-p-u5-cu-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Circuits.",
          parts: [
            { label: "a", prompt: "State Ohm's law.", marks: 1 },
            { label: "b", prompt: "Define current.", marks: 2 },
            { label: "c", prompt: "Compare series and parallel resistance.", marks: 3 },
            { label: "d", prompt: "A 24 V battery with internal resistance 1 Ω drives 3 A. Find terminal p.d.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Circuits", statement: "$V=IR$; series adds, parallel reciprocals." }],
            steps: [
              { part: "a", reasoning: "$V = IR$.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$I = Q/t$ — charge per second.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Unit: ampere.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Series: $R_T = R_1+R_2$.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Parallel: $1/R_T = 1/R_1+1/R_2$.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Parallel < smallest; series > largest.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "$V = \\varepsilon - Ir = 24 - 3 \\times 1$.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "$V = 21\\ V$.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Lost volts = 3 V.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) V=IR (b) Q/t (c) series/parallel (d) 21 V",
          },
        },
        {
          id: "cial-p-u5-cu-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the SI unit of electric charge?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "coulomb" },
              { id: "b", text: "ohm" },
              { id: "c", text: "ampere" },
              { id: "d", text: "volt" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Charge unit", statement: "Charge is measured in coulombs (C)." }],
            steps: [{ reasoning: "Charge unit = coulomb; ampere is current, volt is p.d., ohm is resistance.", marks: 1, markCode: "A" }],
            finalAnswer: "**(c)** coulomb",
          },
        },
        {
          id: "cial-p-u5-cu-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "A current of $0.40\\ A$ flows through a wire for $2.5$ minutes. Calculate the total charge that passes a point in the wire.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 60, tolerance: 0.5, unit: "C" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Current", statement: "$I = Q/t$ → $Q = It$; $t$ in seconds." }],
            steps: [
              { reasoning: "Convert time: $t = 2.5 \\times 60 = 150\\ s$.", marks: 1, markCode: "M" },
              { reasoning: "$Q = It = 0.40 \\times 150$.", marks: 1, markCode: "M" },
              { reasoning: "$Q = 60\\ C$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$Q = 60\\ C$",
          },
        },
        {
          id: "cial-p-u5-cu-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "A $12\\ V$ supply is connected across a $6\\ \\Omega$ resistor and a $3\\ \\Omega$ resistor in series. Calculate the potential difference across the $3\\ \\Omega$ resistor.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4, tolerance: 0.1, unit: "V" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Series circuit", statement: "$R_T = R_1 + R_2$; $V = IR$; p.d. divides in proportion to resistance." }],
            steps: [
              { reasoning: "$R_T = 6 + 3 = 9\\ \\Omega$; $I = 12/9 = 1.33\\ A$.", marks: 1, markCode: "M" },
              { reasoning: "$V_{3\\Omega} = IR = 1.33 \\times 3$.", marks: 1, markCode: "M" },
              { reasoning: "$V = 4.0\\ V$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$V = 4.0\\ V$",
          },
        },
        {
          id: "cial-p-u5-cu-q8",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why an ammeter is connected in series with a low resistance, while a voltmeter is connected in parallel with a high resistance.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Meter connection", statement: "Ammeter measures current through a branch; voltmeter measures p.d. across a component." }],
            steps: [
              { reasoning: "Ammeter must carry the full current of the branch → connected in series.", marks: 1, markCode: "M" },
              { reasoning: "Its resistance must be very small so it does not reduce the current it is measuring.", marks: 1, markCode: "M" },
              { reasoning: "Voltmeter must measure p.d. across a component without taking current → connected in parallel.", marks: 1, markCode: "M" },
              { reasoning: "Its resistance must be very large so it does not significantly change the circuit current.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Ammeter low R in series; voltmeter high R in parallel",
          },
        },
        {
          id: "cial-p-u5-cu-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The e.m.f. of a cell is best described as",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the total energy supplied per unit charge by the cell" },
              { id: "b", text: "the p.d. across the cell when no current flows" },
              { id: "c", text: "the current produced by the cell" },
              { id: "d", text: "the p.d. lost inside the cell" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "EMF", statement: "EMF = energy per unit charge supplied by the source." }],
            steps: [{ reasoning: "EMF is total energy per coulomb; terminal p.d. is lower when current flows.", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** total energy supplied per unit charge",
          },
        },
        {
          id: "cial-p-u5-cu-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "A $24\\ V$ supply is connected across an $8\\ \\Omega$ resistor. Calculate the power dissipated in the resistor.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 72, tolerance: 0.5, unit: "W" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Power", statement: "$P = VI = V^2/R = I^2R$." }],
            steps: [
              { reasoning: "$P = V^2/R = 24^2/8$.", marks: 1, markCode: "M" },
              { reasoning: "$P = 576/8$.", marks: 1, markCode: "M" },
              { reasoning: "$P = 72\\ W$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$P = 72\\ W$",
          },
        },
        {
          id: "cial-p-u5-cu-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why short-circuiting a battery with a piece of thick wire can cause a fire.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Short circuit", statement: "Very small external resistance → very large current → large power dissipation." }],
            steps: [
              { reasoning: "The wire has very low resistance, so by $I = V/R$ the current becomes very large.", marks: 1, markCode: "M" },
              { reasoning: "Power $P = I^2R$ (and heat in the battery/wiring) becomes large.", marks: 1, markCode: "M" },
              { reasoning: "Heat raises temperature of wire and battery.", marks: 1, markCode: "M" },
              { reasoning: "May ignite surrounding materials → fire.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Low R → large I → large heating → fire risk",
          },
        },
        {
          id: "cial-p-u5-cu-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two $12\\ \\Omega$ resistors are connected in parallel across a $12\\ V$ supply. Calculate the total current drawn from the supply.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2, tolerance: 0.05, unit: "A" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Parallel", statement: "$1/R_T = 1/R_1 + 1/R_2$; $I = V/R_T$." }],
            steps: [
              { reasoning: "$1/R_T = 1/12 + 1/12 = 1/6$ → $R_T = 6\\ \\Omega$.", marks: 1, markCode: "M" },
              { reasoning: "$I = V/R_T = 12/6$.", marks: 1, markCode: "M" },
              { reasoning: "$I = 2.0\\ A$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$I = 2.0\\ A$",
          },
        },
        {
          id: "cial-p-u5-cu-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a series circuit containing two lamps and a cell, the current is",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "larger through the brighter lamp" },
              { id: "b", text: "the same at all points" },
              { id: "c", text: "shared unequally between the lamps" },
              { id: "d", text: "zero in the second lamp" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Series current", statement: "Current is the same through every component in a series circuit." }],
            steps: [{ reasoning: "Series = single path → same current everywhere.", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** the same at all points",
          },
        },
        {
          id: "cial-p-u5-cu-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A cell of e.m.f. $12\\ V$ and internal resistance $0.5\\ \\Omega$ delivers a current of $4.0\\ A$. Calculate the terminal potential difference.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Internal resistance", statement: "$V = \\varepsilon - Ir$; lost volts $= Ir$." }],
            steps: [
              { reasoning: "Lost volts $= Ir = 4.0 \\times 0.5 = 2.0\\ V$.", marks: 1, markCode: "M" },
              { reasoning: "$V = \\varepsilon - Ir = 12 - 2.0$.", marks: 1, markCode: "M" },
              { reasoning: "$V = 10\\ V$.", marks: 1, markCode: "M" },
              { reasoning: "Terminal p.d. is less than e.m.f. when current flows.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$V = 10\\ V$",
          },
        },
        {
          id: "cial-p-u5-cu-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "A $60\\ W$ lamp is connected to the $230\\ V$ mains. Calculate the energy it uses in $5.0$ hours, giving your answer in $kWh$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.3, tolerance: 0.01, unit: "kWh" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Energy", statement: "$E = Pt$; $1\\ kWh = 1000\\ W \\times 1\\ h$." }],
            steps: [
              { reasoning: "Power $= 60\\ W = 0.060\\ kW$.", marks: 1, markCode: "M" },
              { reasoning: "$E = Pt = 0.060 \\times 5.0 = 0.30\\ kWh$.", marks: 1, markCode: "M" },
              { reasoning: "$E = 0.30\\ kWh$ ($= 1.08\\ MJ$).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E = 0.30\\ kWh$",
          },
        },
        {
          id: "cial-p-u5-cu-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A $10\\ V$ battery of internal resistance $2.0\\ \\Omega$ is connected to an $8.0\\ \\Omega$ resistor. Calculate (a) the current in the circuit and (b) the terminal p.d. of the battery.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1, tolerance: 0.05, unit: "A" },
              { label: "b", answer: 8, tolerance: 0.1, unit: "V" },
            ],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Internal resistance", statement: "Total resistance $= R + r$; $V = \\varepsilon - Ir$." }],
            steps: [
              { reasoning: "Total resistance $= 8.0 + 2.0 = 10\\ \\Omega$; $I = 10/10 = 1.0\\ A$.", marks: 1, markCode: "M" },
              { reasoning: "Terminal p.d. $= \\varepsilon - Ir = 10 - (1.0 \\times 2.0)$ or $V = IR = 1.0 \\times 8.0$.", marks: 1, markCode: "M" },
              { reasoning: "$I = 1.0\\ A$, $V = 8.0\\ V$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$I = 1.0\\ A$, $V = 8.0\\ V$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-p-u5-electricity-notes",
      title: "Electrostatics and circuits — revision notes",
      summary: "Coulomb's law, electric fields, Ohm's law, series/parallel.",
      sections: [
        {
          heading: "Electrostatics",
          body: "$F = kq_1q_2/r^2$; $E = F/q$; capacitor $Q = CV$, $E = \\frac12 CV^2$. Like charges repel.",
        },
        {
          heading: "Circuits",
          body: "$V = IR$; $I = Q/t$; $P = VI$. Series: R adds; parallel: 1/R reciprocals. EMF − Ir = terminal p.d.",
        },
        {
          heading: "Exam checklist",
          body: "For parallel circuits total R < smallest resistor. Check internal resistance for terminal p.d.",
        },
      ],
    },
  ],
};
