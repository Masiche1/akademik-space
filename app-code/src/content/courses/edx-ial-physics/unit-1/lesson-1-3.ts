import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "edialphys-u1-lesson-1-3",
  code: "1-3",
  title: "Electricity — Current, Voltage and Resistance",
  goal: "I CAN describe current, voltage, resistance and apply Ohm's law and circuit rules.",
  standards: ["P1 Particles and radiation", "Electricity"],
  vocabulary: [
    { term: "Current (I)", definition: "Rate of flow of charge, in amperes (A = C/s)." },
    { term: "Voltage / p.d. (V)", definition: "Energy per unit charge; volts (J/C)." },
    { term: "Resistance (R)", definition: "Opposition to current; ohms (V/A)." },
    { term: "Ohm's law", definition: "V = IR for ohmic conductors at constant temperature." },
  ],
  concepts: [
    {
      id: "edialphys-u1-ohm",
      title: "Ohm's law and circuits",
      skill: "Apply Ohm's law, series/parallel rules and calculate power.",
      lesson: {
        sections: [
          {
            heading: "Basic quantities",
            body: "Current I = Q/t (charge/time). Voltage V = W/Q (energy/charge). Resistance R = V/I. Ohm's law: V = IR for ohmic conductors (constant R). Power P = VI = I²R = V²/R.",
          },
          {
            heading: "Series and parallel",
            body: "Series: same current, voltages add, R_total = R₁+R₂+… Parallel: same voltage, currents add, 1/R_total = 1/R₁+1/R₂+… Household circuits use parallel so appliances get full voltage independently.",
          },
          {
            heading: "Non-ohmic conductors",
            body: "Filament bulb: R increases with T (I-V curve bends). Diode: conducts one direction only. Thermistor: R decreases with T. LDR: R decreases with light. Used in sensors/switches.",
          },
        ],
        keyFormulas: [
          { name: "Key formula", statement: "V = IR" },
          { name: "Key formula", statement: "P = VI = I²R" },
          { name: "Series", statement: "R=ΣR; Parallel: 1/R=Σ(1/R)" },
        ],
        workedExample: {
          problem: "A 12 V battery drives 2 A through a resistor. Find R and P.",
          solution: "R = V/I = 12/2 = 6 Ω. P = VI = 12×2 = 24 W.",
        },
      },
      questions: [
        {
          id: "edialphys-ohm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is Ohm's law?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "V = I/R" },
              { id: "b", text: "V = IR" },
              { id: "c", text: "I = VR" },
              { id: "d", text: "R = VI" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Ohm's law", statement: "V = IR." }],
            steps: [{ reasoning: "Direct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** V = IR",
          },
        },
        {
          id: "edialphys-ohm-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two 6 Ω resistors are in series across 12 V. Find total resistance and current.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "method", name: "Series circuit", statement: "R adds; I same." }],
            steps: [
              { reasoning: "R_total = 6+6 = 12 Ω.", marks: 1, markCode: "M" },
              { reasoning: "I = V/R = 12/12 = 1 A.", marks: 1, markCode: "M" },
              { reasoning: "Answers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "R = 12 Ω, I = 1 A",
            commonErrors: ["Using parallel formula."],
          },
        },
        {
          id: "edialphys-ohm-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a filament bulb's resistance increases as it heats up.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Non-ohmic", statement: "R increases with T in metals." }],
            steps: [
              { reasoning: "Metal ions vibrate more as T rises → impede electron flow.", marks: 1, markCode: "M" },
              { reasoning: "Resistance increases with temperature.", marks: 1, markCode: "M" },
              { reasoning: "Current doesn't rise proportionally with V → non-ohmic.", marks: 1, markCode: "A" },
              { reasoning: "I-V curve bends toward voltage axis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Lattice vibrations increase → R rises",
            commonErrors: ["Saying bulb is ohmic."],
          },
        },
        {
          id: "edialphys-ohm-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Compare series and parallel circuits.",
          parts: [
            { label: "a", prompt: "Current and voltage distribution.", marks: 4 },
            { label: "b", prompt: "Total resistance formulas.", marks: 3 },
            { label: "c", prompt: "Why household circuits use parallel.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "comparison", name: "Series vs parallel", statement: "Current same vs voltage same." }],
            steps: [
              { part: "a", reasoning: "Series: same current through all; voltages add.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Parallel: same voltage across all; currents add.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Series: one break stops all; parallel: independent branches.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "State comparison.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Series: R_total = R₁+R₂+…", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Parallel: 1/R_total = 1/R₁+1/R₂+…", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Parallel total < smallest individual R.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Each appliance gets full mains voltage independently.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "One appliance off/break doesn't affect others.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Total current drawn is sum → can trip fuse.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Series: I same; parallel: V same, used in homes",
            commonErrors: ["Wrong resistance formula."],
          },
        },
      ],
    },
    {
      id: "edialphys-u1-static",
      title: "Static electricity",
      skill: "Explain charging by friction/induction and electrostatic forces.",
      lesson: {
        sections: [
          {
            heading: "Charging",
            body: "Friction: electrons transfer between materials (e.g. polythene rubbed with wool → negative). Conduction: charge moves by contact. Induction: charged object repels/attracts electrons in conductor without contact; earth wire removes charge.",
          },
          {
            heading: "Coulomb's law",
            body: "F = kq₁q₂/r² where k = 9×10⁹ N m² C⁻². Like charges repel, unlike attract. Force ∝ 1/r² — decreases rapidly with distance.",
          },
          {
            heading: "Applications",
            body: "Photocopiers, paint spraying (electrostatic), lightning, electrostatic precipitators remove soot. Sparks can ignite flammable vapours — earthing important.",
          },
        ],
        keyFormulas: [
          { name: "Key formula", statement: "F = (1/4πε₀) × q₁q₂/r²" },
        ],
        workedExample: {
          problem: "Two charges +3 μC and −3 μC are 0.1 m apart. Describe the force direction.",
          solution: "Unlike charges attract — force is attractive, pulling them together.",
        },
      },
      questions: [
        {
          id: "edialphys-static-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Like charges:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Attract" },
              { id: "b", text: "Repel" },
              { id: "c", text: "Cancel" },
              { id: "d", text: "Neutralise" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Coulomb", statement: "Like repel, unlike attract." }],
            steps: [{ reasoning: "Direct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Repel",
          },
        },
        {
          id: "edialphys-static-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain charging by induction.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Induction", statement: "Charge redistributes in conductor near charged object." }],
            steps: [
              { reasoning: "Charged object near conductor repels/attracts electrons → charge separation.", marks: 1, markCode: "M" },
              { reasoning: "Earth wire removes induced charge from far side.", marks: 1, markCode: "M" },
              { reasoning: "Remove earth then charged object → conductor retains induced charge.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Charge redistribution + earthing → induced charge",
            commonErrors: ["Confusing with friction."],
          },
        },
        {
          id: "edialphys-static-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "State Coulomb's law and describe how force varies with distance.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Coulomb's law", statement: "F ∝ q₁q₂/r²." }],
            steps: [
              { reasoning: "F = kq₁q₂/r² (k = 9×10⁹).", marks: 1, markCode: "M" },
              { reasoning: "Force proportional to product of charges.", marks: 1, markCode: "M" },
              { reasoning: "Inverse square law — doubles distance → quarter force.", marks: 1, markCode: "A" },
              { reasoning: "Like repel, unlike attract.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "F ∝ q₁q₂/r²; inverse square",
            commonErrors: ["Linear not inverse-square."],
          },
        },
        {
          id: "edialphys-static-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Describe methods of charging a conductor and compare them.",
          parts: [
            { label: "a", prompt: "Charging by friction.", marks: 3 },
            { label: "b", prompt: "Charging by conduction.", marks: 3 },
            { label: "c", prompt: "Charging by induction.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "comparison", name: "Charging methods", statement: "Friction/conduction/induction." }],
            steps: [
              { part: "a", reasoning: "Rub two insulators → electrons transfer → both charged oppositely.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Only insulators retain charge.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Example: polythene + wool.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Touch charged object to conductor → charge shares.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both end same sign charge.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Requires contact.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Charged object near (not touching) conductor redistributes charge.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Earth connection removes induced charge.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Remove earth then object → net induced charge remains.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "No contact needed — used in photocopiers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Friction: insulators; conduction: contact share; induction: no contact",
            commonErrors: ["Confusing induction and conduction."],
          },
        },
      ],
    },
  ],
};
