import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "cipup-u2-lesson-2-1",
  code: "2-1",
  title: "Thermodynamics and Thermal Physics",
  goal: "I CAN apply gas laws, analyse heat engines and explain entropy at Pre-U standard.",
  standards: ["Cambridge Pre-U Physics 9792", "Thermal physics"],
  vocabulary: [
    {
      term: "Absolute zero",
      definition:
        "0 K = −273 °C — temperature at which molecular kinetic energy is minimum.",
    },
    {
      term: "Ideal gas",
      definition:
        "Point particles with no intermolecular forces — obeys PV = nRT exactly.",
    },
    {
      term: "Isothermal process",
      definition:
        "Constant temperature — ideal gas internal energy unchanged; heat in = work out.",
    },
    {
      term: "Adiabatic process",
      definition:
        "No heat exchange — PV^γ = constant; temperature changes as work done.",
    },
    {
      term: "Heat engine",
      definition:
        "Device converting heat to work — efficiency η = W/Q_h = 1 − T_c/T_h (Carnot).",
    },
    {
      term: "Entropy",
      definition:
        "Measure of disorder — ΔS = Q_rev/T; spontaneous processes increase total entropy.",
    },
  ],
  concepts: [
    {
      id: "cipup-u2-s1-thermal",
      title: "Gas laws, engines and entropy",
      skill:
        "Apply gas equations, analyse thermodynamic cycles and explain entropy.",
      lesson: {
        sections: [
          {
            heading: "Gas laws and kinetic theory",
            body: "Ideal gas equation: PV = nRT or PV = NkT where k = R/N_A = 1.38 × 10⁻²³ J/K. Pressure arises from molecular collisions with walls — P = (1/3)ρc² where c is rms speed. Temperature measures average KE: ½m⟨c²⟩ = (3/2)kT. Gas laws: Boyle's (PV const at const T), Charles's (V/T const at const P), Gay-Lussac's (P/T const at const V). Real gases deviate at high pressure/low temperature — van der Waals equation adds correction terms.",
          },
          {
            heading: "Thermodynamic processes and engines",
            body: "First law: ΔU = Q + W (W positive when done ON gas). Processes: isothermal (T const, ΔU = 0, Q = −W), isobaric (P const, W = PΔV), isochoric (V const, W = 0, Q = ΔU), adiabatic (Q = 0, TV^(γ−1) = const). Heat engines cycle through processes converting Q_h to work with waste heat Q_c rejected to cold reservoir. Carnot efficiency (maximum possible): η = 1 − T_c/T_h — depends only on absolute temperatures. Refrigerators reverse the cycle — work input moves heat from cold to hot.",
          },
          {
            heading: "Entropy and the second law",
            body: "Entropy S measures disorder/microstates — ΔS = Q_rev/T for reversible processes. Spontaneous processes always increase total entropy (second law). Examples: ice melting (solid→liquid increases S), gas expansion (more volume = more states), heat flow hot→cold. Entropy decreases locally only if compensated by greater increase elsewhere. Statistical interpretation: S = k ln W where W = number of microstates. Third law: perfect crystal at 0 K has S = 0.",
          },
        ],
        keyFormulas: [
          {
            name: "Ideal gas",
            statement: "$PV = nRT = NkT$; $\\frac{1}{2}mc^2 = \\frac{3}{2}kT$",
          },
          {
            name: "First law",
            statement: "$\\Delta U = Q + W$ (W = work done ON gas)",
          },
          {
            name: "Carnot efficiency",
            statement: "$\\eta = 1 - \\frac{T_c}{T_h}$",
          },
        ],
        workedExample: {
          problem:
            "An engine operates between 600 K and 300 K. What is its maximum efficiency?",
          solution: "η = 1 − 300/600 = 0.50 = 50%.",
        },
      },
      questions: [
        {
          id: "cipup-u2-therm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the temperature of absolute zero in Celsius?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "−100 °C" },
              { id: "b", text: "−200 °C" },
              { id: "c", text: "−273 °C" },
              { id: "d", text: "−373 °C" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Absolute zero",
                statement: "0 K = −273.15 °C — minimum possible temperature.",
              },
            ],
            steps: [
              {
                reasoning: "T(°C) = T(K) − 273 → 0 K = −273 °C.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "c",
          },
        },
        {
          id: "cipup-u2-therm-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A gas occupies 2.0 dm³ at 300 K and 100 kPa. Calculate its volume at 600 K and 200 kPa.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Combined gas law",
                statement: "$\\frac{P_1V_1}{T_1} = \\frac{P_2V_2}{T_2}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$V_2 = V_1 \\times (P_1/P_2) \\times (T_2/T_1) = 2.0 \\times (100/200) \\times (600/300)$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "V₂ = 2.0 × 0.5 × 2.0 = 2.0 dm³.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2.0 dm³",
          },
        },
        {
          id: "cipup-u2-therm-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "An engine absorbs 1000 J from a hot reservoir at 500 K and rejects 600 J to a cold reservoir. Calculate the cold reservoir temperature.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Carnot relation",
                statement: "$Q_c/Q_h = T_c/T_h$ for reversible engine.",
              },
            ],
            steps: [
              {
                reasoning: "Work output W = 1000 − 600 = 400 J.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "For Carnot: η = W/Qh = 0.40 = 1 − Tc/Th → Tc/Th = 0.60.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Tc = 0.60 × 500 = 300 K.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "300 K",
          },
        },
        {
          id: "cipup-u2-therm-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why entropy increases when ice melts, using the statistical definition of entropy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Statistical entropy",
                statement: "$S = k\\ln W$ — more microstates = higher entropy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "In ice, water molecules are locked in fixed lattice positions — few arrangements possible (low W).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "In liquid water, molecules move freely — vastly more arrangements and energy distributions (high W).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "S = k ln W → liquid has higher entropy than solid at same temperature.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Melting is spontaneous above 0 °C because ΔS_universe > 0 — heat flows from warmer surroundings into the ice.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Liquid has more microstates → higher entropy.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipup-u2-thermal-notes",
      title: "Thermodynamics — revision notes",
      summary: "Gas laws, heat engines, entropy.",
      sections: [
        {
          heading: "Key skills",
          body: "For gas law problems, convert all temperatures to kelvin and ensure consistent pressure/volume units. For engine questions, identify which reservoir is hot and which is cold.",
        },
        {
          heading: "Exam tips",
          body: "Entropy questions: always relate to number of microstates. Carnot efficiency is the MAXIMUM — real engines are less efficient due to irreversibilities.",
        },
      ],
    },
  ],
};
