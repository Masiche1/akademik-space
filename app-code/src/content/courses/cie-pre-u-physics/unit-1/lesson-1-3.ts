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
