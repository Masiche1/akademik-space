import type { Lesson } from "../../../types.ts";

export const lessonp61: Lesson = {
  id: "ciep-u6-lesson-6-1",
  code: "6-1",
  title: "Electricity and Circuits",
  goal: "I CAN describe circuits, Ohm's law and electrical quantities.",
  standards: ["0655 6.1", "0655 6.2"],
  vocabulary: [
    { term: "Current", definition: "Flow of charge (A); I = Q/t." },
    { term: "Voltage", definition: "Energy per unit charge (V); pushes current." },
    { term: "Resistance", definition: "Opposition to current (Ω); R = V/I." },
    { term: "Ohm's law", definition: "V = IR for ohmic conductors." },
    { term: "Series circuit", definition: "One path; same current everywhere." },
    { term: "Parallel circuit", definition: "Multiple paths; same voltage across branches." },
    { term: "Charge", definition: "Q = It (coulombs)." },
    { term: "Power", definition: "P = VI = I²R = V²/R (W)." },
  ],
  concepts: [
    {
      id: "ciep-u6-circuits",
      title: "Circuits and Ohm's law",
      skill: "Calculate current, voltage, resistance, charge and power; distinguish series/parallel.",
      lesson: {
        sections: [
          {
            heading: "Key equations",
            body: "**V = IR** (Ohm's law)\n**I = Q/t**\n**P = VI**\n\nSeries: same I, V splits. Parallel: same V, I splits.",
          },
          {
            heading: "Series vs parallel",
            body: "| | Series | Parallel |\n|---|---|---|\n| Current | same everywhere | splits |\n| Voltage | splits | same everywhere |\n| Resistance | adds (R1+R2) | 1/R = 1/R1+1/R2 |\n| If one breaks | all stop | others work |",
          },
          {
            heading: "Domestic circuits",
            body: "Appliances in parallel (each gets 230V, independent). Fuses/circuit breakers protect against overload.",
          },
        ],
        keyFormulas: [
          { name: "Ohm's law", statement: "$V = IR$" },
          { name: "Charge", statement: "$Q = It$" },
          { name: "Power", statement: "$P = VI$" },
        ],
        workedExample: {
          problem: "A 12 V battery drives 2 A through a resistor. Find resistance.",
          solution: "R = V/I = 12/2 = 6 Ω.",
        },
      },
      questions: [
        {
          id: "ciep-u6-circuits-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is Ohm's law?",
          response: { type: "mcq", choices: [
            { id: "a", text: "V = IR" }, { id: "b", text: "V = I/R" }, { id: "c", text: "I = V/R" }, { id: "d", text: "R = V/I" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "law", name: "Ohm's law", statement: "V = IR." }],
            steps: [{ reasoning: "Recall.", working: "V = IR", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** V = IR",
            commonErrors: ["All are rearrangements — the law is V=IR."],
          },
        },
        {
          id: "ciep-u6-circuits-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 6 V battery drives 0.5 A. Calculate resistance.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "R = V/I", statement: "R = 6/0.5 = 12 Ω." }],
            steps: [
              { reasoning: "Apply.", working: "R = \\frac{6}{0.5}", marks: 1, markCode: "M" },
              { reasoning: "Answer.", working: "12 \\Omega", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12 Ω",
            commonErrors: ["Multiplying instead of dividing."],
          },
        },
        {
          id: "ciep-u6-circuits-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two 4 Ω resistors are in series. Calculate total resistance and explain current.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Series", statement: "R adds; same current." }],
            steps: [
              { reasoning: "R_total = 4+4 = 8 Ω.", marks: 1, markCode: "M" },
              { reasoning: "Same current through both.", marks: 1, markCode: "M" },
              { reasoning: "Voltage splits equally.", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8 Ω; same current flows through both resistors.",
            commonErrors: ["Using parallel formula for series."],
          },
        },
        {
          id: "ciep-u6-circuits-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Compare series and parallel circuits.",
          parts: [
            { label: "a", prompt: "Compare current distribution.", marks: 3 },
            { label: "b", prompt: "Compare voltage distribution.", marks: 3 },
            { label: "c", prompt: "State one practical advantage of parallel for home wiring.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Circuits", statement: "Series: same I, V splits. Parallel: same V, I splits." }],
            steps: [
              { part: "a", reasoning: "Series: same current.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Parallel: current splits.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Series: voltage splits.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Parallel: same voltage.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Each appliance independent/full voltage.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "One failure doesn't affect others.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) series same I, parallel splits (b) series V splits, parallel same V (c) independent/full voltage",
            commonErrors: ["Swapping current/voltage rules."],
          },
        },
      ],
    },
    {
      id: "ciep-u6-magnetism",
      title: "Magnetism and electromagnetism",
      skill: "Describe magnetic fields, electromagnets and electromagnetic induction.",
      lesson: {
        sections: [
          {
            heading: "Magnets and fields",
            body: "Magnetic field: region around magnet where force acts. Field lines: N→S outside magnet. Earth's magnetic field similar. Compass needle aligns with field.",
          },
          {
            heading: "Electromagnets",
            body: "Coil of wire + current → magnetic field. Strength increases with more turns, higher current, iron core. Uses: cranes, relays, motors, generators.",
          },
          {
            heading: "Electromagnetic induction",
            body: "Changing magnetic field → induces voltage/current in conductor. Generator: coil rotates in field → AC current. Transformer: changes voltage via induction (V_p/V_s = N_p/N_s).",
          },
        ],
        keyFormulas: [
          { name: "Transformer", statement: "$\\dfrac{V_p}{V_s} = \\dfrac{N_p}{N_s}$" },
        ],
        workedExample: {
          problem: "A transformer has 1000 primary turns and 100 secondary turns. If input is 230 V, output?",
          solution: "V_s = 230 × (100/1000) = 23 V — step-down transformer.",
        },
      },
      questions: [
        {
          id: "ciep-u6-magnetism-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does an electromagnet consist of?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Permanent magnet only" }, { id: "b", text: "Coil of wire carrying current" }, { id: "c", text: "Battery alone" }, { id: "d", text: "Iron filings" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Electromagnet", statement: "Current-carrying coil." }],
            steps: [{ reasoning: "Recall.", working: "\\text{coil + current}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Coil of wire carrying current",
            commonErrors: ["Permanent magnet — electromagnets are temporary."],
          },
        },
        {
          id: "ciep-u6-magnetism-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two ways to increase electromagnet strength.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Electromagnet", statement: "More turns, higher current, iron core." }],
            steps: [
              { reasoning: "More turns or current.", marks: 1, markCode: "M" },
              { reasoning: "Iron core.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Increase number of turns, increase current, or add an iron core.",
            commonErrors: ["Thicker wire alone — need turns/current/core."],
          },
        },
        {
          id: "ciep-u6-magnetism-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a generator produces electricity.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Generator", statement: "Coil rotates in magnetic field → induced current." }],
            steps: [
              { reasoning: "Coil rotates in magnetic field.", marks: 1, markCode: "M" },
              { reasoning: "Changing flux induces voltage.", marks: 1, markCode: "M" },
              { reasoning: "Current flows — AC as direction alternates.", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A coil rotating in a magnetic field experiences changing magnetic flux, inducing a voltage and current — alternating as rotation reverses the flux direction.",
            commonErrors: ["Saying 'magnet creates electricity' — it's induction."],
          },
        },
        {
          id: "ciep-u6-magnetism-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe electromagnetic induction and its applications.",
          parts: [
            { label: "a", prompt: "Define electromagnetic induction.", marks: 3 },
            { label: "b", prompt: "Explain how a generator uses it.", marks: 3 },
            { label: "c", prompt: "State how a transformer changes voltage.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Induction", statement: "Changing flux → induced voltage; used in generators/transformers." }],
            steps: [
              { part: "a", reasoning: "Changing magnetic field.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Induces voltage in conductor.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Coil rotates → changing flux.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Induces AC current.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Vp/Vs = Np/Ns.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "More turns → higher voltage.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) changing flux→voltage (b) rotating coil→AC (c) turns ratio",
            commonErrors: ["In (c) reversing ratio — Vp/Vs = Np/Ns."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciep-u6-electricity-magnetism-notes",
      title: "Electricity and magnetism — revision notes",
      summary: "V=IR, Q=It, P=VI, series/parallel, electromagnets, induction, transformers.",
      sections: [
        {
          heading: "Key facts",
          body: "V=IR, I=Q/t, P=VI. Series: same I; parallel: same V. Electromagnet: coil+current, stronger with turns/current/iron. Induction: changing flux→voltage. Transformer: Vp/Vs=Np/Ns.",
        },
        {
          heading: "Exam technique",
          body: "- Series adds resistance, parallel divides.\n- Transformer is step-up (more secondary turns) or step-down.",
        },
      ],
    },
  ],
};
