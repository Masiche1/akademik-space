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
              { id: "c", text: "−373 °C" },
              { id: "d", text: "−273 °C" },
            ],
            correctChoiceId: "d",
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
        {
          id: "cipup-u2-therm-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the ideal gas equation $PV = NkT$, what does the constant $k$ represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The gas constant per mole" },
              { id: "b", text: "The Boltzmann constant — energy per molecule per kelvin" },
              { id: "c", text: "The Planck constant" },
              { id: "d", text: "The universal gravitational constant" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Boltzmann constant",
                statement:
                  "$k = R/N_A = 1.38 \\times 10^{-23}$ J/K — relates temperature to molecular KE.",
              },
            ],
            steps: [
              {
                reasoning:
                  "k is the Boltzmann constant for single molecules; R is the molar gas constant.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a",
          },
        },
        {
          id: "cipup-u2-therm-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A gas at constant pressure occupies 3.0 dm³ at 200 K. Calculate its volume at 500 K.",
          response: {
            type: "numeric",
            parts: [{ label: "Volume", answer: 7.5, tolerance: 0.05, unit: "dm³" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Charles's law",
                statement: "$V/T = \\text{constant}$ at constant pressure.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$V_2 = V_1 \\times T_2/T_1 = 3.0 \\times 500/200$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$V_2 = 7.5$ dm³.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "7.5 dm³",
          },
        },
        {
          id: "cipup-u2-therm-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "During an isobaric expansion, a gas does 400 J of work on its surroundings while its internal energy increases by 150 J. Calculate the heat supplied to the gas.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "First law of thermodynamics",
                statement:
                  "$\\Delta U = Q + W$ with $W$ the work done ON the gas; here work done BY gas is +400 J so $W = -400$ J.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Work done on the gas is negative of work done by gas: $W = -400$ J.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$Q = \\Delta U - W = 150 - (-400)$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$Q = 550$ J supplied to the gas.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "550 J",
          },
        },
        {
          id: "cipup-u2-therm-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "During a slow adiabatic compression of an ideal gas, what happens to its temperature?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It first increases then decreases" },
              { id: "b", text: "It decreases" },
              { id: "c", text: "It stays constant" },
              { id: "d", text: "It increases" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Adiabatic process",
                statement:
                  "No heat exchange ($Q=0$); work done on the gas raises its internal energy and temperature.",
              },
            ],
            steps: [
              {
                reasoning:
                  "With $Q = 0$, $\\Delta U = W$; compression does positive work on the gas so $\\Delta U > 0$ and $T$ rises.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "c",
          },
        },
        {
          id: "cipup-u2-therm-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate the rms speed of nitrogen molecules ($m = 4.7 \\times 10^{-26}$ kg) at 300 K. Use $\\tfrac{1}{2}mc^2 = \\tfrac{3}{2}kT$ with $k = 1.38 \\times 10^{-23}$ J/K.",
          response: {
            type: "numeric",
            parts: [{ label: "Rms speed", answer: 515, tolerance: 5, unit: "m/s" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Kinetic theory temperature",
                statement:
                  "$\\tfrac{1}{2}mc^2 = \\tfrac{3}{2}kT$ gives the rms speed of gas molecules.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$c = \\sqrt{3kT/m} = \\sqrt{3 \\times 1.38 \\times 10^{-23} \\times 300 / 4.7 \\times 10^{-26}}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$c \\approx 5.15 \\times 10^2$ m/s.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "≈ 515 m/s",
          },
        },
        {
          id: "cipup-u2-therm-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A fixed mass of ideal gas expands freely into a vacuum (no external work done). Explain, using entropy, why this process is irreversible.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Second law of thermodynamics",
                statement:
                  "Total entropy of an isolated system increases in any spontaneous process; a decrease is impossible.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Free expansion fills twice the volume — molecules can occupy many more positions, so the number of microstates $W$ increases greatly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$S = k\\ln W$ → entropy of the gas increases even though no heat flows and $Q = 0$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The reverse (gas spontaneously confining itself to half the container) would require $W$ to decrease, violating $\\Delta S \\geq 0$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Hence the process cannot spontaneously reverse — it is irreversible.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Entropy increases; the reverse would decrease entropy, which never happens spontaneously.",
          },
        },
        {
          id: "cipup-u2-therm-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In an isothermal process on an ideal gas, what is the change in internal energy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It equals the heat supplied" },
              { id: "b", text: "It is zero" },
              { id: "c", text: "It increases" },
              { id: "d", text: "It decreases" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Isothermal process",
                statement:
                  "Constant temperature — internal energy of an ideal gas depends only on $T$, so $\\Delta U = 0$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$U$ depends only on temperature; $\\Delta T = 0$ → $\\Delta U = 0$, and $Q = -W$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "c",
          },
        },
        {
          id: "cipup-u2-therm-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A heat engine absorbs 800 J from the hot reservoir and rejects 500 J to the cold reservoir. Calculate its efficiency.",
          response: {
            type: "numeric",
            parts: [{ label: "Efficiency", answer: 0.375, tolerance: 0.005 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Engine efficiency",
                statement: "$\\eta = W/Q_h = (Q_h - Q_c)/Q_h$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$W = 800 - 500 = 300$ J; $\\eta = 300/800$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\eta = 0.375 = 37.5\\%$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "0.375 (37.5%)",
          },
        },
        {
          id: "cipup-u2-therm-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the four processes that make up a Carnot cycle, stating what is held constant in each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Carnot cycle",
                statement:
                  "Reversible cycle between two reservoirs: isothermal expansion, adiabatic expansion, isothermal compression, adiabatic compression.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Isothermal expansion at $T_h$: gas absorbs $Q_h$ from hot reservoir while doing work.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Adiabatic expansion: no heat exchange, temperature falls from $T_h$ to $T_c$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Isothermal compression at $T_c$ followed by adiabatic compression back to the start; $Q_c$ is rejected to the cold reservoir.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Isothermal expansion (Th), adiabatic expansion, isothermal compression (Tc), adiabatic compression.",
          },
        },
        {
          id: "cipup-u2-therm-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which thermodynamic process is the heat exchanged equal to zero?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Adiabatic" },
              { id: "b", text: "Isobaric" },
              { id: "c", text: "Isothermal" },
              { id: "d", text: "Isochoric" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Adiabatic process",
                statement: "Perfectly insulated — $Q = 0$ throughout.",
              },
            ],
            steps: [
              {
                reasoning: "Adiabatic means no heat transfer; all energy change is via work.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "d",
          },
        },
        {
          id: "cipup-u2-therm-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A Carnot engine operates between reservoirs at 800 K and 320 K. Calculate its efficiency and the heat rejected to the cold reservoir per 1000 J absorbed.",
          response: {
            type: "numeric",
            parts: [
              { label: "Efficiency", answer: 0.6, tolerance: 0.005 },
              { label: "Heat rejected", answer: 400, tolerance: 1, unit: "J" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Carnot relations",
                statement:
                  "$\\eta = 1 - T_c/T_h$ and $Q_c/Q_h = T_c/T_h$ for a reversible engine.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\eta = 1 - 320/800 = 0.60$; $W = 0.60 \\times 1000 = 600$ J.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Energy balance: $Q_c = Q_h - W = 1000 - 600 = 400$ J (equivalently $Q_c = 1000 \\times 320/800$).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Efficiency 60%, heat rejected 400 J.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "η = 0.60; Qc = 400 J",
          },
        },
        {
          id: "cipup-u2-therm-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Heat of 1000 J flows spontaneously from a reservoir at 400 K to one at 300 K. Calculate the entropy change of the universe and explain the significance of the result.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Entropy change",
                statement: "$\\Delta S = Q/T$ for each reservoir.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Hot reservoir loses heat: $\\Delta S_h = -1000/400 = -2.5$ J/K.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Cold reservoir gains heat: $\\Delta S_c = +1000/300 = +3.33$ J/K.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Total $\\Delta S_{universe} = 3.33 - 2.5 = +0.83$ J/K > 0.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Positive total entropy confirms the process is spontaneous and consistent with the second law; the reverse flow would give $\\Delta S < 0$ and never occurs.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "≈ +0.83 J/K — universe entropy increases.",
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
