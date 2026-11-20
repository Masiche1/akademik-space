import type { Lesson } from "../../../types.ts";

export const lessonp62: Lesson = {
  id: "olphys-u6-lesson-6-2",
  code: "6-2",
  title: "Electric Circuits",
  goal: "I CAN analyse series and parallel circuits and apply circuit laws.",
  standards: ["5054 6.2"],
  vocabulary: [
    { term: "Series circuit", definition: "Components in single path — same current." },
    { term: "Parallel circuit", definition: "Components on separate branches — same voltage." },
    { term: "Potential difference (V)", definition: "Voltage — energy per charge (volt)." },
    { term: "Current (I)", definition: "Charge flow rate (ampere = C/s)." },
    { term: "Resistance (R)", definition: "Opposition to current: R = V/I (ohm)." },
    { term: "Ohm's law", definition: "V = IR for ohmic conductor at constant temp." },
    { term: "Fuse", definition: "Safety device melting at excess current." },
    { term: "Circuit breaker", definition: "Switches off at excess current — resettable." },
  ],
  concepts: [
    {
      id: "olphys-u6-series-parallel",
      title: "Series and parallel circuits",
      skill: "Analyse circuit configurations and apply circuit laws.",
      lesson: {
        sections: [
          {
            heading: "Series circuit",
            body: "Single path — current same everywhere.\n\n- **Current**: same through all components\n- **Voltage**: shared — total V = sum of component Vs\n- **Resistance**: total = sum of resistances",
          },
          {
            heading: "Parallel circuit",
            body: "Separate branches — voltage same across each.\n\n- **Voltage**: same across all branches\n- **Current**: total = sum of branch currents\n- **Resistance**: total less than smallest branch",
          },
          {
            heading: "Household wiring",
            body: "Appliances in parallel — each gets full mains voltage, independent switching.\n\nFuses/breakers in series protect against overload.",
          },
        ],
        keyFormulas: [
          { name: "Ohm's law", statement: "$V = IR$" },
          { name: "Series R", statement: "$R_{total} = R_1 + R_2 + \\dots$" },
          { name: "Parallel 1/R", statement: "$\\dfrac{1}{R_{total}} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2} + \\dots$" },
        ],
        workedExample: {
          problem: "Two 10 Ω resistors in parallel. Total resistance?",
          solution: "1/R = 1/10 + 1/10 = 2/10 → R = 5 Ω.",
        },
      },
      questions: [
        {
          id: "olphys-u6-series-parallel-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a series circuit, what is the same through all components?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Voltage" }, { id: "b", text: "Current" }, { id: "c", text: "Resistance" }, { id: "d", text: "Power" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "principle", name: "Series", statement: "Same current." }],
            steps: [{ reasoning: "Recall.", working: "I \\text{ same}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Current",
            commonErrors: ["Series: same I, shared V."],
          },
        },
        {
          id: "olphys-u6-series-parallel-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the same across parallel branches?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Parallel", statement: "Same voltage." }],
            steps: [
              { reasoning: "Voltage same.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Potential difference (voltage) — same across all branches.",
            commonErrors: ["Confusing with series."],
          },
        },
        {
          id: "olphys-u6-series-parallel-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two 20 Ω resistors in series. Total resistance and current if V=12V?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Series", statement: "R=R₁+R₂; I=V/R." }],
            steps: [
              { reasoning: "R = 20+20 = 40 Ω.", marks: 1, markCode: "M" },
              { reasoning: "I = 12/40 = 0.3 A.", marks: 1, markCode: "M" },
              { reasoning: "Correct values.", marks: 1, markCode: "A" },
              { reasoning: "Units Ω, A.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "R = 40 Ω, I = 0.3 A",
            commonErrors: ["Using parallel formula for series."],
          },
        },
        {
          id: "olphys-u6-series-parallel-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Compare series and parallel circuits.",
          parts: [
            { label: "a", prompt: "Current behaviour.", marks: 3 },
            { label: "b", prompt: "Voltage behaviour.", marks: 3 },
            { label: "c", prompt: "Resistance calculation.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Circuits", statement: "Series: same I; parallel: same V; R formulas differ." }],
            steps: [
              { part: "a", reasoning: "Series: same I.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Parallel: splits.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Series: shared V.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Parallel: same V.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Series: sum.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Parallel: reciprocal.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) series same I (b) parallel same V (c) series sum/parallel reciprocal",
            commonErrors: ["Swapping I and V rules."],
          },
        },
      ],
    },
    {
      id: "olphys-u6-electric-power",
      title: "Electrical power and safety",
      skill: "Calculate electrical power and describe safety features.",
      lesson: {
        sections: [
          {
            heading: "Power formulas",
            body: "**P = IV = I²R = V²/R**\n\n- P in watts (W), I in amps, V in volts\n- Energy = P × t (joules or kWh)",
          },
          {
            heading: "Safety devices",
            body: "- **Fuse**: thin wire melts at excess current — one-time use\n- **Circuit breaker**: switches off, resettable\n- **Earth wire**: safety path for fault current\n- **Double insulation**: no earth needed (plastic casing)",
          },
          {
            heading: "Mains supply",
            body: "UK mains: 230 V, 50 Hz. Three wires: live (brown), neutral (blue), earth (green/yellow).\n\nLive at 230 V relative to neutral/earth.",
          },
        ],
        keyFormulas: [
          { name: "Power", statement: "$P = IV = I^2R = \\dfrac{V^2}{R}$" },
        ],
        workedExample: {
          problem: "A 230 V appliance draws 5 A. Power and energy in 2 hours?",
          solution: "P = IV = 230×5 = 1150 W. Energy = 1.15 kW × 2 h = 2.3 kWh.",
        },
      },
      questions: [
        {
          id: "olphys-u6-electric-power-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the formula for electrical power?",
          response: { type: "mcq", choices: [
            { id: "a", text: "P = V/I" }, { id: "b", text: "P = IV" }, { id: "c", text: "P = I/R" }, { id: "d", text: "P = V²I" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "formula", name: "Power", statement: "P = IV." }],
            steps: [{ reasoning: "Recall.", working: "P = IV", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** P = IV",
            commonErrors: ["Inverting to V/I."],
          },
        },
        {
          id: "olphys-u6-electric-power-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does a fuse do?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Fuse", statement: "Melts at excess current." }],
            steps: [
              { reasoning: "Melts/protects.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A fuse melts when current exceeds safe level, breaking the circuit to prevent damage/fire.",
            commonErrors: ["Saying 'slows current' — melts."],
          },
        },
        {
          id: "olphys-u6-electric-power-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A 100 W bulb runs for 5 hours. Energy used in kWh?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Energy", statement: "E = Pt = 0.1 kW × 5 h." }],
            steps: [
              { reasoning: "Convert 100W to 0.1 kW.", marks: 1, markCode: "M" },
              { reasoning: "E = 0.1 × 5 = 0.5 kWh.", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
              { reasoning: "Unit kWh.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "0.5 kWh",
            commonErrors: ["Not converting W to kW."],
          },
        },
        {
          id: "olphys-u6-electric-power-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain electrical power and safety features.",
          parts: [
            { label: "a", prompt: "Power formulas.", marks: 3 },
            { label: "b", prompt: "Explain fuse function.", marks: 3 },
            { label: "c", prompt: "Describe mains wiring colours.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Power/safety", statement: "P=IV; fuse melts; live/neutral/earth." }],
            steps: [
              { part: "a", reasoning: "P=IV basic.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "P=I²R=V²/R.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Melts at excess I.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Breaks circuit.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Prevents fire.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Live brown 230V.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Neutral blue.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Earth green/yellow.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) P=IV=I²R=V²/R (b) fuse melts (c) live/neutral/earth",
            commonErrors: ["In (c) wrong colours."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olphys-u6-series-parallel-notes",
      title: "Circuits, power and safety — revision notes",
      summary: "Series/parallel, Ohm's law, P=IV, fuses.",
      sections: [
        {
          heading: "Key facts",
          body: "Series: same I. Parallel: same V. Ohm: V=IR. P=IV=I²R=V²/R. Fuse melts; breaker switches.",
        },
        {
          heading: "Exam technique",
          body: "- Household wiring is parallel.\n- Series R adds; parallel R uses reciprocal.\n- Earth wire safety only.",
        },
      ],
    },
  ],
};
