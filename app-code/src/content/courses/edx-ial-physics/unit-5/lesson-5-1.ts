import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "edialphys-u5-lesson-5-1",
  code: "5-1",
  title: "Thermodynamics and Radiation",
  goal: "I CAN apply the gas laws and first law of thermodynamics, and explain the photoelectric effect, wave–particle duality and pair production.",
  standards: ["WPH15 Thermodynamics, Radiation, Oscillations and Cosmology"],
  vocabulary: [
    {
      term: "Absolute zero",
      definition:
        "0 K, the temperature at which the kinetic energy of particles is minimum.",
    },
    {
      term: "Isothermal process",
      definition:
        "Change at constant temperature; heat exchanged equals work done.",
    },
    {
      term: "Adiabatic process",
      definition:
        "Change with no heat transfer between system and surroundings.",
    },
    {
      term: "Work function",
      definition:
        "Minimum energy needed to remove an electron from a metal surface.",
    },
    {
      term: "Photon",
      definition: "Quantum of electromagnetic radiation with energy E = hf.",
    },
    {
      term: "Pair production",
      definition:
        "Creation of a particle–antiparticle pair from photon energy.",
    },
  ],
  concepts: [
    {
      id: "edialphys-u5-thermo",
      title: "Thermodynamics and the gas laws",
      skill:
        "Apply pV = nRT, describe thermodynamic processes and use the first law of thermodynamics.",
      lesson: {
        sections: [
          {
            heading: "Ideal gas and gas laws",
            body: "For an ideal gas, pV = nRT where p is pressure, V is volume, n is amount of substance, T is absolute temperature and R = 8.31 J K⁻¹ mol⁻¹. At constant temperature pV is constant (Boyle's law); at constant pressure V/T is constant; at constant volume p/T is constant. Temperature must be in kelvin.",
          },
          {
            heading: "First law of thermodynamics",
            body: "ΔU = Q − W, where ΔU is change in internal energy, Q is heat supplied to the system and W is work done by the system. In an isothermal process ΔU = 0 so Q = W. In an adiabatic process Q = 0 so ΔU = −W. On a p–V diagram the area under the curve gives work done.",
          },
          {
            heading: "Heat engines and entropy",
            body: "A heat engine converts internal energy into mechanical work but cannot be 100% efficient; some heat is always rejected to a cold reservoir. Entropy is a measure of disorder: processes that spread energy are irreversible.",
          },
        ],
        keyFormulas: [
          { name: "Ideal gas law", statement: "pV = nRT" },
          { name: "First law", statement: "ΔU = Q − W" },
          { name: "Adiabatic relation", statement: "pV^γ = constant" },
        ],
        workedExample: {
          problem:
            "Calculate the pressure of 2.0 mol of ideal gas at 300 K occupying 0.050 m³.",
          solution:
            "p = nRT/V = (2.0 × 8.31 × 300)/0.050 = 99720 Pa ≈ 1.0 × 10⁵ Pa.",
        },
      },
      questions: [
        {
          id: "edialphys-u5-thermo-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which process occurs with no heat transfer between the system and its surroundings?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Isothermal" },
              { id: "b", text: "Isochoric" },
              { id: "c", text: "Isobaric" },
              { id: "d", text: "Adiabatic" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Adiabatic",
                statement: "No heat transfer: Q = 0.",
              },
            ],
            steps: [
              { reasoning: "Adiabatic means Q = 0.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Adiabatic",
            commonErrors: ["Confusing isothermal with adiabatic."],
          },
        },
        {
          id: "edialphys-u5-thermo-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate the pressure exerted by 0.50 mol of ideal gas at 288 K in a volume of 0.020 m³.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 59832, tolerance: 50, unit: "Pa" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Ideal gas law",
                statement: "p = nRT/V.",
              },
            ],
            steps: [
              {
                reasoning: "Substitute values: p = (0.50 × 8.31 × 288)/0.020.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Numerator = 0.50 × 8.31 × 288 = 1196.6.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "p = 1196.6/0.020 = 59832 Pa ≈ 5.98 × 10⁴ Pa.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "5.98 × 10⁴ Pa",
            commonErrors: ["Using Celsius temperature instead of kelvin."],
          },
        },
        {
          id: "edialphys-u5-thermo-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the first law of thermodynamics applies to an isothermal expansion of an ideal gas.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "First law",
                statement: "ΔU = Q − W.",
              },
            ],
            steps: [
              {
                reasoning: "In an isothermal process temperature is constant.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "For an ideal gas internal energy depends only on temperature, so ΔU = 0.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Substituting ΔU = 0 gives Q = W: heat supplied equals work done.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The gas does work on the surroundings by expanding.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "ΔU = 0, so Q = W",
            commonErrors: [
              "Claiming internal energy changes at constant temperature.",
            ],
          },
        },
        {
          id: "edialphys-u5-thermo-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A fixed mass of ideal gas is compressed quickly and then allowed to expand slowly.",
          parts: [
            {
              label: "a",
              prompt: "State what is meant by an adiabatic process.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain why the quick compression is approximately adiabatic.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Describe how entropy changes during the expansion and justify your answer.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Thermodynamic processes",
                statement: "Adiabatic: Q = 0; entropy measures disorder.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Adiabatic = no heat transfer between system and surroundings.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Q = 0 for the process.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "Work and internal energy change instead.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning:
                  "Quick compression leaves too little time for heat exchange.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning:
                  "Therefore Q ≈ 0 and the process is approximately adiabatic.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "Temperature rises because work done increases internal energy.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "Expansion spreads the gas and increases disorder.",
                marks: 1,
                markCode: "B",
                part: "c",
              },
              {
                reasoning: "Entropy therefore increases.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning:
                  "The process is irreversible because heat cannot fully return the system.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning:
                  "Second law: entropy of an isolated system does not decrease.",
                marks: 1,
                markCode: "R",
                part: "c",
              },
            ],
            finalAnswer:
              "Adiabatic: Q = 0; quick compression ~ adiabatic; entropy increases",
            commonErrors: ["Saying entropy decreases when a gas expands."],
          },
        },
      ],
    },
    {
      id: "edialphys-u5-radiation",
      title: "Quantum radiation and particles",
      skill:
        "Use photon energy, the photoelectric effect, pair production and the de Broglie wavelength.",
      lesson: {
        sections: [
          {
            heading: "Photons and the photoelectric effect",
            body: "Light behaves as photons of energy E = hf = hc/λ. In the photoelectric effect a photon ejects an electron only if its energy exceeds the work function φ; the maximum kinetic energy is KE_max = hf − φ. Increasing intensity adds more photons but does not change the maximum KE or the threshold frequency.",
          },
          {
            heading: "Wave–particle duality",
            body: "Electrons and other particles have wavelength λ = h/mv (de Broglie). Pair production creates an electron–positron pair from a photon of at least 1.02 MeV; annihilation produces two photons.",
          },
          {
            heading: "Evidence for the photon model",
            body: "The photoelectric effect, Compton scattering and pair production support the particle nature of light, while interference and diffraction support its wave nature.",
          },
        ],
        keyFormulas: [
          { name: "Photon energy", statement: "E = hf = hc/λ" },
          { name: "Photoelectric equation", statement: "KE_max = hf − φ" },
          { name: "de Broglie wavelength", statement: "λ = h/mv" },
        ],
        workedExample: {
          problem: "Calculate the energy of a photon of wavelength 500 nm.",
          solution:
            "E = hc/λ = (6.63 × 10⁻³⁴ × 3.00 × 10⁸)/(500 × 10⁻⁹) = 3.98 × 10⁻¹⁹ J.",
        },
      },
      questions: [
        {
          id: "edialphys-u5-radiation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the photoelectric effect, the threshold frequency depends on which quantity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Area of the surface" },
              { id: "b", text: "Intensity of the light" },
              { id: "c", text: "Number of photons" },
              { id: "d", text: "Work function of the metal" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Threshold frequency",
                statement: "hf = φ at threshold.",
              },
            ],
            steps: [
              {
                reasoning: "Threshold frequency is set by the work function.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(d)** Work function",
            commonErrors: ["Thinking intensity sets the threshold."],
          },
        },
        {
          id: "edialphys-u5-radiation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate the energy of a photon of wavelength 400 nm.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Answer",
                answer: 4.97e-19,
                tolerance: 1e-20,
                unit: "J",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Photon energy",
                statement: "E = hc/λ.",
              },
            ],
            steps: [
              {
                reasoning: "Convert wavelength: λ = 400 nm = 4.00 × 10⁻⁷ m.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "E = (6.63 × 10⁻³⁴ × 3.00 × 10⁸)/(4.00 × 10⁻⁷).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "E = 4.97 × 10⁻¹⁹ J.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4.97 × 10⁻¹⁹ J",
            commonErrors: ["Forgetting to convert nm to m."],
          },
        },
        {
          id: "edialphys-u5-radiation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why increasing the intensity of light below the threshold frequency does not cause photoelectrons to be emitted.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Photoelectric effect",
                statement: "Emission requires hf ≥ φ.",
              },
            ],
            steps: [
              {
                reasoning: "Each photon has energy E = hf set by frequency.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Below threshold frequency, hf < φ for every photon.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Intensity only increases the number of photons per second.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "No single photon has enough energy to overcome the work function.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Photon energy depends on frequency, not intensity",
            commonErrors: ["Claiming more photons each gain energy."],
          },
        },
        {
          id: "edialphys-u5-radiation-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A gamma-ray photon interacts with matter near a heavy nucleus.",
          parts: [
            {
              label: "a",
              prompt:
                "State the minimum photon energy required for electron–positron pair production.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Calculate the wavelength of a photon with energy 1.5 MeV.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Explain how the de Broglie hypothesis applies to electrons and give one piece of evidence.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Quantum radiation",
                statement: "Pair production needs ≥ 1.02 MeV; λ = h/mv.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Pair production creates an electron and a positron.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning:
                  "Rest energies total about 2 × 0.511 MeV = 1.02 MeV.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "Minimum photon energy ≈ 1.02 MeV.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning:
                  "E = 1.5 MeV = 1.5 × 10⁶ × 1.60 × 10⁻¹⁹ J = 2.40 × 10⁻¹³ J.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning:
                  "λ = hc/E = (6.63 × 10⁻³⁴ × 3.00 × 10⁸)/(2.40 × 10⁻¹³).",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "λ = 8.29 × 10⁻¹³ m.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "de Broglie: particles have wavelength λ = h/mv.",
                marks: 1,
                markCode: "B",
                part: "c",
              },
              {
                reasoning:
                  "Faster or lighter particles have shorter wavelength.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning:
                  "Evidence: electron diffraction from crystals shows wave behaviour.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning: "Links wave–particle duality to quantum theory.",
                marks: 1,
                markCode: "R",
                part: "c",
              },
            ],
            finalAnswer:
              "1.02 MeV; λ ≈ 8.3 × 10⁻¹³ m; λ = h/mv with diffraction evidence",
            commonErrors: ["Using 0.511 MeV as the pair-production threshold."],
          },
        },
      ],
    },
  ],
};
