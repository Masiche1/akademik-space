import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "cipup-u1-lesson-1-3",
  code: "1-3",
  title: "Electricity, Magnetism and Electromagnetic Induction",
  goal: "I CAN apply circuit laws, analyse magnetic fields and use Faraday's law at Pre-U standard.",
  standards: ["Cambridge Pre-U Physics 9792", "Electricity and magnetism"],
  vocabulary: [
    {
      term: "Ohm's law",
      definition:
        "V = IR for ohmic conductors — resistance constant regardless of current/voltage.",
    },
    {
      term: "Resistivity",
      definition:
        "$\\rho = RA/L$ — intrinsic property of material; resistance depends on geometry and material.",
    },
    {
      term: "Internal resistance",
      definition:
        "Resistance inside a source — terminal pd = emf − Ir; causes voltage drop under load.",
    },
    {
      term: "Magnetic flux",
      definition:
        "$\\Phi = BA$ for perpendicular field — rate of change induces emf (Faraday's law).",
    },
    {
      term: "Lenz's law",
      definition:
        "Induced current opposes the change producing it — energy conservation ensures this.",
    },
    {
      term: "RMS values",
      definition:
        "Equivalent DC values for AC — V_rms = V₀/√2, I_rms = I₀/√2; power uses RMS values.",
    },
  ],
  concepts: [
    {
      id: "cipup-u1-s1-elec",
      title: "Circuits, fields and induction",
      skill:
        "Analyse circuits, calculate magnetic effects and apply induction laws.",
      lesson: {
        sections: [
          {
            heading: "DC circuits",
            body: "Ohm's law V = IR defines resistance. Series: same current, voltages add, R_total = ΣR. Parallel: same voltage, currents add, 1/R_total = Σ(1/R). Power P = VI = I²R = V²/R — total energy in resistor converts to heat. Kirchhoff's laws: junction rule (charge conserved — currents sum to zero), loop rule (energy conserved — pds around loop sum to zero). Cells: emf ε = V + Ir where V is terminal pd; internal resistance r dissipates power I²r. Potentiometer measures emf by balancing lengths. Wheatstone bridge: balanced when R₁/R₂ = R₃/R₄.",
          },
          {
            heading: "Magnetic fields and forces",
            body: "Current-carrying conductor in field: F = BIL sinθ (θ between current and field). Direction by Fleming's left-hand rule. Force between parallel wires: F/L = μ₀I₁I₂/(2πd) — attractive if currents same direction. Solenoid field inside: B = μ₀nI (uniform); outside ≈ 0. Moving charge in field: F = qvB sinθ — circular path radius r = mv/(qB). Magnetic flux Φ = BA cosθ through area A at angle θ. Flux linkage = NΦ for coils.",
          },
          {
            heading: "Electromagnetic induction",
            body: "Faraday's law: induced emf = −rate of change of flux linkage = −N dΦ/dt. Lenz's law: induced current opposes the change (energy conservation). AC generator: rotating coil in field produces sinusoidal emf ε = NBAω sin(ωt) — peak ε₀ = NBAω. Transformer: V_s/V_p = N_s/N_p (ideal); power in = power out for 100% efficient. Step-up increases voltage, decreases current — reduces transmission losses (I²R). Self-inductance: coil opposes change in its own current (back emf = −L dI/dt).",
          },
        ],
        keyFormulas: [
          {
            name: "Ohm's law",
            statement: "$V = IR$; power $P = VI = I^2R = V^2/R$",
          },
          {
            name: "Faraday's law",
            statement:
              "$\\varepsilon = -N\\frac{d\\Phi}{dt}$; $\\varepsilon_0 = NBA\\omega$",
          },
          {
            name: "Transformer",
            statement:
              "$\\frac{V_s}{V_p} = \\frac{N_s}{N_p}$; $P_{in} = P_{out}$ (ideal)",
          },
        ],
        workedExample: {
          problem:
            "A 6.0 V cell with internal resistance 0.50 Ω drives a 2.0 Ω resistor. Find the current and terminal pd.",
          solution:
            "I = ε/(R+r) = 6.0/(2.0+0.5) = 2.4 A; V = ε − Ir = 6.0 − 2.4(0.5) = 4.8 V.",
        },
      },
      questions: [
        {
          id: "cipup-u1-elec-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two 4.0 Ω resistors are connected in parallel. What is the total resistance?",
          response: {
            type: "numeric",
            parts: [{ label: "Resistance", answer: 2, unit: "Ω" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Parallel resistors",
                statement: "$1/R = 1/R_1 + 1/R_2$.",
              },
            ],
            steps: [
              {
                reasoning: "1/R = 1/4 + 1/4 = 0.5 → R = 2.0 Ω.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2.0 Ω",
          },
        },
        {
          id: "cipup-u1-elec-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 12 V battery with internal resistance 0.8 Ω supplies a 3.2 Ω load. Calculate the power dissipated in the internal resistance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Internal resistance",
                statement: "$I = \\varepsilon/(R+r)$; power lost = $I^2r$.",
              },
            ],
            steps: [
              {
                reasoning: "I = 12/(3.2 + 0.8) = 3.0 A.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "P = I²r = 9.0 × 0.8 = 7.2 W.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "7.2 W",
          },
        },
        {
          id: "cipup-u1-elec-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A coil of 200 turns and area 0.050 m² rotates at 50 rev/s in a 0.20 T field. Calculate the peak emf.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "AC generator",
                statement:
                  "$\\varepsilon_0 = NBA\\omega$; $\\omega = 2\\pi f$.",
              },
            ],
            steps: [
              {
                reasoning: "ω = 2πf = 2π(50) = 314 rad/s.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "ε₀ = NBAω = 200 × 0.20 × 0.050 × 314 = 628 V.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Peak emf ≈ 630 V (accept 628).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "≈ 630 V",
          },
        },
        {
          id: "cipup-u1-elec-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A transformer steps 240 V down to 12 V. The secondary coil has 60 turns. Calculate the primary turns and the secondary current if the primary current is 0.50 A (assume 100% efficiency).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Transformer",
                statement: "$V_s/V_p = N_s/N_p$; $V_pI_p = V_sI_s$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Turns ratio = voltage ratio: N_p/N_s = 240/12 = 20.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "N_p = 20 × 60 = 1200 turns.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Power conserved: I_s = V_pI_p/V_s = 240 × 0.50/12 = 10 A.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Step-down transformer increases current while decreasing voltage.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1200 turns; 10 A",
          },
        },
        {
          id: "cipup-u1-elec-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two resistors of 6.0 Ω and 3.0 Ω are connected in series. What is the total resistance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "9.0 Ω" },
              { id: "b", text: "3.0 Ω" },
              { id: "c", text: "18 Ω" },
              { id: "d", text: "4.5 Ω" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Series resistors",
                statement: "$R_{total} = R_1 + R_2$.",
              },
            ],
            steps: [
              {
                reasoning: "R = 6.0 + 3.0 = 9.0 Ω.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "b",
          },
        },
        {
          id: "cipup-u1-elec-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A current of 3.0 A passes through a resistor of resistance 4.0 Ω. Calculate the potential difference across the resistor.",
          response: {
            type: "numeric",
            parts: [{ label: "Potential difference", answer: 12, unit: "V" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Ohm's law",
                statement: "$V = IR$.",
              },
            ],
            steps: [
              {
                reasoning: "V = IR = 3.0 × 4.0 = 12 V.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "12 V",
          },
        },
        {
          id: "cipup-u1-elec-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Resistors of 6.0 Ω and 3.0 Ω are connected in parallel. Calculate the total resistance.",
          response: {
            type: "numeric",
            parts: [{ label: "Resistance", answer: 2, unit: "Ω" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Parallel resistors",
                statement: "$1/R = 1/R_1 + 1/R_2$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "1/R = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 0.5 → R = 2.0 Ω.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2.0 Ω",
          },
        },
        {
          id: "cipup-u1-elec-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A straight wire carrying a current of 5.0 A is placed perpendicular to a magnetic field of flux density 0.20 T. What is the force per unit length on the wire?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4.0 N/m" },
              { id: "b", text: "25 N/m" },
              { id: "c", text: "1.0 N/m" },
              { id: "d", text: "0.04 N/m" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Force on a conductor",
                statement: "$F = BIL\\sin\\theta$ → $F/L = BI$ when $\\theta = 90^\\circ$.",
              },
            ],
            steps: [
              {
                reasoning: "F/L = BI = 0.20 × 5.0 = 1.0 N/m.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "b",
          },
        },
        {
          id: "cipup-u1-elec-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A cell of emf 12 V and internal resistance 0.50 Ω supplies current to an external circuit. Explain why the terminal potential difference is less than 12 V and why it falls further as the current increases.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Internal resistance",
                statement: "$V = \\varepsilon - Ir$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Some of the emf is used to drive current through the cell's own internal resistance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Terminal pd V = ε − Ir, so V is always less than the emf ε by the amount Ir.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "As current I increases, the 'lost volts' Ir increase, so the terminal pd falls further.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "V = ε − Ir; larger current → larger voltage drop inside the cell.",
          },
        },
        {
          id: "cipup-u1-elec-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "An ideal transformer has a primary coil of 200 turns and a secondary coil of 800 turns. The primary potential difference is 120 V. Calculate the secondary potential difference.",
          response: {
            type: "numeric",
            parts: [{ label: "Secondary pd", answer: 480, unit: "V" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Transformer",
                statement: "$V_s/V_p = N_s/N_p$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Vs = Vp × Ns/Np = 120 × 800/200 = 120 × 4.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Vs = 480 V.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "480 V",
          },
        },
        {
          id: "cipup-u1-elec-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "A bar magnet is moved towards a coil connected to a sensitive ammeter. The induced current will:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "depend only on the ammeter resistance" },
              { id: "b", text: "flow so as to attract the magnet" },
              { id: "c", text: "be zero" },
              { id: "d", text: "flow so as to repel the magnet" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Lenz's law",
                statement:
                  "The induced current flows so as to oppose the change producing it — here, it repels the approaching magnet.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Lenz's law: the induced field opposes the increase in flux, so the coil's near pole repels the magnet.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "b",
          },
        },
        {
          id: "cipup-u1-elec-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A coil of 400 turns experiences a change of magnetic flux from 0.050 Wb to zero in 0.20 s. Calculate the magnitude of the induced emf.",
          response: {
            type: "numeric",
            parts: [{ label: "Emf", answer: 100, unit: "V" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Faraday's law",
                statement: "$\\varepsilon = N\\,\\Delta\\Phi/\\Delta t$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "ε = N ΔΦ/Δt = 400 × 0.050/0.20 = 400 × 0.25.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "ε = 100 V.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "100 V",
          },
        },
        {
          id: "cipup-u1-elec-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why electrical power is transmitted through the National Grid at very high voltages.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Power and transmission losses",
                statement: "$P = VI$; power lost in cables $= I^2R$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "For a fixed power P = VI, increasing the transmission voltage decreases the current.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Power dissipated in the cables is I²R, which falls rapidly as current decreases.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Step-up transformers raise the voltage before transmission and step-down transformers restore a safe voltage for consumers.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "High voltage → low current → much smaller I²R heating losses in cables.",
          },
        },
        {
          id: "cipup-u1-elec-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A charged particle moves in a circle in a uniform magnetic field. The radius of its orbit increases if:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the particle's charge increases" },
              { id: "b", text: "the particle's speed decreases" },
              { id: "c", text: "the particle's mass increases" },
              { id: "d", text: "the magnetic flux density decreases" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Circular motion in a field",
                statement: "$r = mv/(qB)$ — radius is inversely proportional to B.",
              },
            ],
            steps: [
              {
                reasoning:
                  "r = mv/(qB): a smaller B gives a larger radius; smaller v, larger q or larger m all give smaller r.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "b",
          },
        },
        {
          id: "cipup-u1-elec-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "A long solenoid has 1500 turns per metre and carries a current of 2.0 A. Calculate the magnetic flux density at its centre (μ₀ = 4π × 10⁻⁷ T m/A).",
          response: {
            type: "numeric",
            parts: [
              { label: "Flux density", answer: 0.0038, unit: "T", tolerance: 0.0001 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Solenoid field",
                statement: "$B = \\mu_0 n I$ inside a long solenoid.",
              },
            ],
            steps: [
              {
                reasoning:
                  "B = μ₀nI = (4π × 10⁻⁷) × 1500 × 2.0 = 4π × 3.0 × 10⁻⁴.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "B ≈ 3.8 × 10⁻³ T.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "≈ 3.8 × 10⁻³ T",
          },
        },
        {
          id: "cipup-u1-elec-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An alternating current generator consists of a coil rotating in a magnetic field. Explain how a sinusoidal emf is generated, and state what determines its frequency and its peak value.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "AC generator",
                statement:
                  "$\\varepsilon = -N\\,d\\Phi/dt$; $\\varepsilon_0 = NBA\\omega$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "As the coil rotates, the flux linkage through it varies sinusoidally with time.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "By Faraday's law the induced emf is the rate of change of flux linkage, so it too varies sinusoidally.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The frequency of the emf equals the rotation frequency of the coil (and is twice the frequency for a simple single-coil arrangement referred to slip rings).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The peak emf ε₀ = NBAω depends on the number of turns, field strength, coil area and angular speed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Rotating flux linkage → sinusoidal emf; frequency = rotation rate; ε₀ = NBAω.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipup-u1-elec-notes",
      title: "Electricity and magnetism — revision notes",
      summary: "Circuits, magnetic forces, electromagnetic induction.",
      sections: [
        {
          heading: "Key skills",
          body: "For circuit problems, identify series vs parallel first — series adds R, parallel adds conductance. For induction, always check flux change: moving magnet, changing area, changing angle.",
        },
        {
          heading: "Exam tips",
          body: "Lenz's law questions: state the direction of induced current AND why (opposes the change). Transformer: ideal assumes 100% efficiency — real transformers have losses.",
        },
      ],
    },
  ],
};
