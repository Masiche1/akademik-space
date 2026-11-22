import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "cipup-u3-lesson-3-3",
  code: "3-3",
  title: "Thermodynamics and modern physics",
  goal: "I CAN explain gas laws, first law of thermodynamics, and quantum concepts.",
  standards: [
    "Cambridge Pre-U Physics 9792",
    "Paper 1: Thermodynamics, quantum physics",
  ],
  vocabulary: [
    { term: "Ideal gas", definition: "PV = nRT — no intermolecular forces." },
    { term: "Boyle's law", definition: "PV = constant at constant T." },
    { term: "Charles's law", definition: "V/T = constant at constant P." },
    { term: "Pressure law", definition: "P/T = constant at constant V." },
    { term: "Work done by gas", definition: "W = PΔV." },
    { term: "First law", definition: "ΔU = Q - W." },
    {
      term: "Internal energy",
      definition: "Total kinetic + potential energy of molecules.",
    },
    {
      term: "Absolute zero",
      definition: "0 K = -273°C — minimum temperature.",
    },
    { term: "Photon", definition: "Quantum of EM radiation — E = hf." },
    {
      term: "Photoelectric effect",
      definition: "Emission of electrons by light.",
    },
    { term: "De Broglie", definition: "Matter has wavelength λ = h/mv." },
    {
      term: "Nuclear fission",
      definition: "Heavy nucleus splits — energy released.",
    },
  ],
  concepts: [
    {
      id: "cipup-u3-gas",
      title: "Gas laws and thermodynamics",
      skill: "Apply gas laws and first law of thermodynamics.",
      lesson: {
        sections: [
          {
            heading: "Gas laws",
            body: "**Ideal gas**: PV = nRT. **Boyle's law**: PV constant at constant T. **Charles's law**: V/T constant at constant P. **Pressure law**: P/T constant at constant V. **Combined**: P₁V₁/T₁ = P₂V₂/T₂. T in kelvin: K = °C + 273.",
          },
          {
            heading: "First law of thermodynamics",
            body: "**ΔU = Q - W**: change in internal energy = heat added - work done by gas. **Work done by gas**: W = PΔV. **Adiabatic**: Q = 0 → ΔU = -W. **Isothermal**: ΔU = 0 → Q = W. **Isobaric**: constant P. **Isochoric**: constant V → W = 0.",
          },
          {
            heading: "Heat engines",
            body: "**Heat engine**: converts heat to work. **Efficiency**: η = W/Q_in = (Q_in - Q_out)/Q_in. **Carnot**: maximum efficiency depends on temperatures. **Second law**: heat cannot spontaneously flow cold → hot.",
          },
        ],
        keyFormulas: [
          { name: "Ideal gas", statement: "PV = nRT" },
          { name: "Combined gas", statement: "P₁V₁/T₁ = P₂V₂/T₂" },
          { name: "First law", statement: "ΔU = Q - W" },
          { name: "Work by gas", statement: "W = PΔV" },
        ],
        workedExample: {
          problem: "Gas at 300 K, 2 atm, 3 L. Find P at 600 K, same V.",
          solution: "P/T constant: P₂ = P₁T₂/T₁ = 2×600/300 = 4 atm.",
        },
      },
      questions: [
        {
          id: "cipup-u3-gas-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Ideal gas equation:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No equation" },
              { id: "b", text: "P = nRT/V only" },
              { id: "c", text: "PV = nT" },
              { id: "d", text: "PV = nRT" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ideal gas", statement: "PV = nRT." },
            ],
            steps: [{ reasoning: "PV = nRT.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) PV=nRT.",
          },
        },
        {
          id: "cipup-u3-gas-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Boyle's law: at constant T, PV is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Zero" },
              { id: "b", text: "Increasing" },
              { id: "c", text: "Decreasing" },
              { id: "d", text: "Constant" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Boyle", statement: "PV = const." },
            ],
            steps: [
              { reasoning: "PV const at const T.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Constant.",
          },
        },
        {
          id: "cipup-u3-gas-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Charles's law: at constant P, V/T is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increasing" },
              { id: "b", text: "Constant" },
              { id: "c", text: "Decreasing" },
              { id: "d", text: "Zero" },
            ],
          correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Charles", statement: "V/T = const." },
            ],
            steps: [
              { reasoning: "V/T const at const P.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Constant.",
          },
        },
        {
          id: "cipup-u3-gas-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "0°C in kelvin:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "273 K" },
              { id: "b", text: "373 K" },
              { id: "c", text: "100 K" },
              { id: "d", text: "0 K" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "K conversion",
                statement: "K = °C + 273.",
              },
            ],
            steps: [{ reasoning: "0°C = 273 K.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 273 K.",
          },
        },
        {
          id: "cipup-u3-gas-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Absolute zero is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "100°C" },
              { id: "b", text: "273°C" },
              { id: "c", text: "0°C" },
              { id: "d", text: "0 K = -273°C" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Absolute zero", statement: "0 K." },
            ],
            steps: [{ reasoning: "0 K = -273°C.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 0 K.",
          },
        },
        {
          id: "cipup-u3-gas-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "First law of thermodynamics:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Q = W" },
              { id: "b", text: "ΔU = Q - W" },
              { id: "c", text: "ΔU = Q + W" },
              { id: "d", text: "No law" },
            ],
          correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "1st law", statement: "ΔU = Q - W." },
            ],
            steps: [{ reasoning: "ΔU = Q - W.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) ΔU=Q-W.",
          },
        },
        {
          id: "cipup-u3-gas-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work done by gas =:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "nRT" },
              { id: "b", text: "PV" },
              { id: "c", text: "Q" },
              { id: "d", text: "PΔV" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Gas work", statement: "W = PΔV." },
            ],
            steps: [{ reasoning: "W = PΔV.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) PΔV.",
          },
        },
        {
          id: "cipup-u3-gas-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Isothermal process has:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No constant" },
              { id: "b", text: "Constant V" },
              { id: "c", text: "Constant temperature" },
              { id: "d", text: "Constant P" },
            ],
          correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Isothermal", statement: "Const T." },
            ],
            steps: [
              { reasoning: "Isothermal = const T.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Const T.",
          },
        },
        {
          id: "cipup-u3-gas-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Adiabatic process has:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Const T" },
              { id: "b", text: "Const P" },
              { id: "c", text: "No heat transfer" },
              { id: "d", text: "Const V" },
            ],
          correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Adiabatic", statement: "Q = 0." },
            ],
            steps: [
              { reasoning: "Adiabatic = no heat.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) No heat.",
          },
        },
        {
          id: "cipup-u3-gas-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Heat engine efficiency =:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Q_in/W" },
              { id: "b", text: "W/Q_in" },
              { id: "c", text: "Q_out/Q_in" },
              { id: "d", text: "W/Q_out" },
            ],
          correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Efficiency",
                statement: "η = W/Q_in.",
              },
            ],
            steps: [{ reasoning: "η = W/Q_in.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) W/Q_in.",
          },
        },
        {
          id: "cipup-u3-gas-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Gas at 2 atm, 4 L. V at 1 atm (const T):",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "16 L" },
              { id: "b", text: "4 L" },
              { id: "c", text: "2 L" },
              { id: "d", text: "8 L" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Boyle",
                statement: "P₁V₁ = P₂V₂ → 2×4 = 1×V₂ → 8 L.",
              },
            ],
            steps: [{ reasoning: "V₂ = 8 L.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 8 L.",
          },
        },
        {
          id: "cipup-u3-gas-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Gas at 300 K, 6 L. V at 600 K (const P):",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "24 L" },
              { id: "b", text: "3 L" },
              { id: "c", text: "6 L" },
              { id: "d", text: "12 L" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Charles",
                statement: "V/T const → V₂ = 6×600/300 = 12 L.",
              },
            ],
            steps: [{ reasoning: "V₂ = 12 L.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 12 L.",
          },
        },
        {
          id: "cipup-u3-gas-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "In isothermal expansion, ΔU =",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Zero" },
              { id: "b", text: "Negative" },
              { id: "c", text: "Positive" },
              { id: "d", text: "Variable" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Isothermal", statement: "ΔU = 0." },
            ],
            steps: [
              { reasoning: "Isothermal → ΔU = 0.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Zero.",
          },
        },
        {
          id: "cipup-u3-gas-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "In adiabatic compression, temperature:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stays same" },
              { id: "b", text: "Zero" },
              { id: "c", text: "Decreases" },
              { id: "d", text: "Increases" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Adiabatic",
                statement: "Compression → T↑.",
              },
            ],
            steps: [
              {
                reasoning: "Adiabatic compression → T↑.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Increases.",
          },
        },
        {
          id: "cipup-u3-gas-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Second law of thermodynamics:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Heat cannot spontaneously flow cold → hot" },
              { id: "b", text: "Entropy decreases" },
              { id: "c", text: "No law" },
              { id: "d", text: "Energy created" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "2nd law",
                statement: "No spontaneous cold→hot.",
              },
            ],
            steps: [
              { reasoning: "2nd law = entropy.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) No spontaneous cold→hot.",
          },
        },
        {
          id: "cipup-u3-gas-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Entropy measures:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Temperature" },
              { id: "b", text: "Pressure" },
              { id: "c", text: "Energy" },
              { id: "d", text: "Disorder/randomness" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Entropy", statement: "Disorder." },
            ],
            steps: [{ reasoning: "S = disorder.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Disorder.",
          },
        },
        {
          id: "cipup-u3-gas-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "In isochoric process, W =",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "PΔV" },
              { id: "b", text: "nRT" },
              { id: "c", text: "Q" },
              { id: "d", text: "Zero (constant V)" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Isochoric", statement: "W = 0." },
            ],
            steps: [{ reasoning: "V const → W = 0.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Zero.",
          },
        },
        {
          id: "cipup-u3-gas-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "Carnot efficiency depends on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing" },
              { id: "b", text: "Volume" },
              { id: "c", text: "Temperatures of hot and cold reservoirs" },
              { id: "d", text: "Pressure" },
            ],
          correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Carnot", statement: "Depends on T." },
            ],
            steps: [
              { reasoning: "Carnot = T dependent.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Temperatures.",
          },
        },
        {
          id: "cipup-u3-gas-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "R in PV = nRT is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "6.67×10⁻¹¹" },
              { id: "b", text: "9.81" },
              { id: "c", text: "3×10⁸" },
              { id: "d", text: "8.31 J/(mol·K)" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "R", statement: "8.31 J/(mol·K)." },
            ],
            steps: [{ reasoning: "R = 8.31.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 8.31.",
          },
        },
        {
          id: "cipup-u3-gas-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between isothermal and adiabatic processes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Process types",
                statement: "Heat exchange.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Isothermal: const T — heat exchanged with surroundings.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Adiabatic: no heat exchange — Q = 0.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Isothermal = heat exchange; adiabatic = none.",
          },
        },
        {
          id: "cipup-u3-gas-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State Boyle's and Charles's laws.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gas laws",
                statement: "PV const, V/T const.",
              },
            ],
            steps: [
              {
                reasoning: "Boyle: PV constant at const T.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Charles: V/T constant at const P.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "PV const (Boyle); V/T const (Charles).",
          },
        },
        {
          id: "cipup-u3-gas-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why temperature must be in kelvin for gas law calculations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Kelvin",
                statement: "Absolute temperature.",
              },
            ],
            steps: [
              {
                reasoning: "Gas laws derived from absolute temperature scale.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "At 0 K, gas pressure/volume → 0 — must use absolute scale.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Celsius has arbitrary zero — ratios meaningless.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Absolute scale required — K = °C + 273.",
          },
        },
        {
          id: "cipup-u3-gas-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Gas expands isothermally from 2 L at 1 atm to 4 L. Calculate work done (in L·atm, then J with 1 L·atm = 101.3 J).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Isothermal work",
                statement: "W = nRT ln(V₂/V₁) or PΔV approximation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Isothermal: W = P₁V₁ ln(V₂/V₁) = 1×2×ln(4/2) = 2×0.693 = 1.386 L·atm.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "In joules: 1.386 × 101.3 = 140 J.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "ΔU = 0 for isothermal ideal gas.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "W ≈ 140 J, Q = W (heat absorbed).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "≈140 J work, 140 J heat.",
          },
        },
        {
          id: "cipup-u3-gas-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "Ideal gas assumes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No motion" },
              { id: "b", text: "Large molecules" },
              { id: "c", text: "Strong forces" },
              { id: "d", text: "No intermolecular forces, negligible volume" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ideal gas",
                statement: "No forces, negligible V.",
              },
            ],
            steps: [
              { reasoning: "Ideal = no forces.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) No forces.",
          },
        },
        {
          id: "cipup-u3-gas-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is internal energy?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Internal energy",
                statement: "Total molecular energy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sum of kinetic + potential energies of all molecules.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Depends on temperature for ideal gas.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Total molecular kinetic + PE.",
          },
        },
        {
          id: "cipup-u3-gas-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the first law of thermodynamics with an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "1st law",
                statement: "Energy conservation.",
              },
            ],
            steps: [
              {
                reasoning: "ΔU = Q - W — energy conservation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Heat added increases internal energy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Work done by gas decreases internal energy.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "ΔU = Q - W — energy conservation.",
          },
        },
        {
          id: "cipup-u3-gas-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "P₁V₁/T₁ = P₂V₂/T₂ is the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Combined gas law" },
              { id: "b", text: "Charles's law" },
              { id: "c", text: "Ideal gas" },
              { id: "d", text: "Boyle's law" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Combined gas",
                statement: "P₁V₁/T₁ = P₂V₂/T₂.",
              },
            ],
            steps: [
              { reasoning: "Combined gas law.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Combined gas.",
          },
        },
        {
          id: "cipup-u3-gas-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is a heat engine never 100% efficient?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Engine efficiency",
                statement: "Must reject heat.",
              },
            ],
            steps: [
              {
                reasoning: "Must reject some heat to cold reservoir.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Second law — cannot convert all heat to work.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Must reject heat → <100%.",
          },
        },
        {
          id: "cipup-u3-gas-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "1 mole gas at 8.31 J/(mol·K)×... Calculate PV at 300 K (R=8.31).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "PV=nRT", statement: "PV = nRT." },
            ],
            steps: [
              {
                reasoning: "PV = nRT = 1 × 8.31 × 300.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "PV = 2493 J = 2493 Pa·m³.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "At V = 1 m³: P = 2493 Pa ≈ 2.46 atm.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "PV ≈ 2493 J.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "PV = 2493 J.",
          },
        },
        {
          id: "cipup-u3-gas-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "What happens to gas pressure when temperature increases at constant volume?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pressure law",
                statement: "P/T const.",
              },
            ],
            steps: [
              {
                reasoning: "P/T constant → T↑ → P↑ proportionally.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Molecules move faster → more collisions → higher P.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "P increases proportionally.",
          },
        },
      ],
    },
    {
      id: "cipup-u3-modern",
      title: "Quantum and nuclear physics",
      skill: "Explain photoelectric effect, de Broglie, and nuclear processes.",
      lesson: {
        sections: [
          {
            heading: "Photoelectric effect",
            body: "**Photoelectric effect**: light ejects electrons from metal. **Threshold frequency**: minimum f to eject — depends on metal. **Einstein**: E = hf = φ + KE_max. **Intensity** affects number of electrons, not their energy. **Evidence for photons**.",
          },
          {
            heading: "Wave-particle duality",
            body: "**De Broglie**: matter has wavelength λ = h/mv. **Heisenberg**: can't know position and momentum exactly — ΔxΔp ≥ h/4π. **Electron diffraction**: confirms matter waves. **Complementarity**: wave and particle aspects both real.",
          },
          {
            heading: "Nuclear physics",
            body: "**Nucleus**: protons + neutrons. **Binding energy**: energy to separate nucleons — E = mc². **Fission**: heavy nucleus splits — chain reaction, nuclear power. **Fusion**: light nuclei join — stars, hydrogen bomb. **Radioactive decay**: α, β, γ emission.",
          },
        ],
        keyFormulas: [
          { name: "Photoelectric", statement: "E = hf = φ + KE" },
          { name: "De Broglie", statement: "λ = h/mv" },
          { name: "Mass-energy", statement: "E = mc²" },
          { name: "Decay", statement: "N = N₀e^(-λt)" },
        ],
        workedExample: {
          problem:
            "Electron m=9.11×10⁻³¹ kg, v=10⁶ m/s. Find λ (h=6.63×10⁻³⁴).",
          solution: "λ = h/mv = 6.63×10⁻³⁴/(9.11×10⁻³¹×10⁶) = 7.28×10⁻¹⁰ m.",
        },
      },
      questions: [
        {
          id: "cipup-u3-mod-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Photoelectric effect is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nuclear decay" },
              { id: "b", text: "Emission of light by electrons" },
              { id: "c", text: "Emission of electrons by light" },
              { id: "d", text: "No effect" },
            ],
          correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Photoelectric",
                statement: "Light → electrons.",
              },
            ],
            steps: [
              {
                reasoning: "PE = light ejects electrons.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Light → electrons.",
          },
        },
        {
          id: "cipup-u3-mod-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Threshold frequency is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Any f" },
              { id: "b", text: "Zero f" },
              { id: "c", text: "Minimum frequency to eject electrons" },
              { id: "d", text: "Maximum f" },
            ],
          correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Threshold f",
                statement: "Min f for emission.",
              },
            ],
            steps: [
              { reasoning: "Threshold = min f.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Min f.",
          },
        },
        {
          id: "cipup-u3-mod-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Einstein's photoelectric equation:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "E = mc²" },
              { id: "b", text: "hf = φ - KE" },
              { id: "c", text: "hf = φ + KE_max" },
              { id: "d", text: "No equation" },
            ],
          correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Einstein",
                statement: "hf = φ + KE.",
              },
            ],
            steps: [{ reasoning: "hf = φ + KE.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) hf=φ+KE.",
          },
        },
        {
          id: "cipup-u3-mod-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "De Broglie wavelength:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "λ = hf" },
              { id: "b", text: "λ = c/f" },
              { id: "c", text: "λ = mv/h" },
              { id: "d", text: "λ = h/mv" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "De Broglie", statement: "λ = h/mv." },
            ],
            steps: [{ reasoning: "λ = h/mv.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) h/mv.",
          },
        },
        {
          id: "cipup-u3-mod-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Nuclear fission is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Heavy nucleus splits" },
              { id: "b", text: "Light nuclei join" },
              { id: "c", text: "No process" },
              { id: "d", text: "Electron emission" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fission",
                statement: "Heavy splits.",
              },
            ],
            steps: [
              { reasoning: "Fission = heavy splits.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Heavy splits.",
          },
        },
        {
          id: "cipup-u3-mod-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Nuclear fusion is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Electron emission" },
              { id: "b", text: "Light nuclei join" },
              { id: "c", text: "No process" },
              { id: "d", text: "Heavy splits" },
            ],
          correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fusion", statement: "Light joins." },
            ],
            steps: [
              { reasoning: "Fusion = light joins.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Light joins.",
          },
        },
        {
          id: "cipup-u3-mod-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Alpha decay emits:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Photon" },
              { id: "b", text: "Neutron" },
              { id: "c", text: "Electron" },
              { id: "d", text: "Helium nucleus (2p + 2n)" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Alpha", statement: "He nucleus." },
            ],
            steps: [{ reasoning: "α = He nucleus.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) He nucleus.",
          },
        },
        {
          id: "cipup-u3-mod-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Beta decay emits:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Electron" },
              { id: "b", text: "Photon" },
              { id: "c", text: "Neutron" },
              { id: "d", text: "He nucleus" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Beta", statement: "Electron." },
            ],
            steps: [{ reasoning: "β = electron.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Electron.",
          },
        },
        {
          id: "cipup-u3-mod-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Gamma decay emits:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "He nucleus" },
              { id: "b", text: "High-energy photon" },
              { id: "c", text: "Electron" },
              { id: "d", text: "Neutron" },
            ],
          correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Gamma", statement: "Photon." },
            ],
            steps: [{ reasoning: "γ = photon.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Photon.",
          },
        },
        {
          id: "cipup-u3-mod-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work function φ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Any energy" },
              { id: "b", text: "Minimum energy to eject electron" },
              { id: "c", text: "Zero" },
              { id: "d", text: "Max energy" },
            ],
          correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Work function",
                statement: "Min E to eject.",
              },
            ],
            steps: [{ reasoning: "φ = min E.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Min E.",
          },
        },
        {
          id: "cipup-u3-mod-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "In photoelectric effect, increasing intensity:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No effect" },
              {
                id: "b",
                text: "Increases number of electrons, not their energy",
              },
              { id: "c", text: "Increases energy" },
              { id: "d", text: "Decreases" },
            ],
          correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Intensity",
                statement: "More electrons, same KE.",
              },
            ],
            steps: [
              {
                reasoning: "Intensity → more electrons.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) More electrons.",
          },
        },
        {
          id: "cipup-u3-mod-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "In photoelectric effect, increasing frequency:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No effect" },
              { id: "b", text: "Decreases" },
              { id: "c", text: "Only intensity" },
              { id: "d", text: "Increases electron energy" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Frequency", statement: "f↑ → KE↑." },
            ],
            steps: [{ reasoning: "f↑ → KE↑.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Energy↑.",
          },
        },
        {
          id: "cipup-u3-mod-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "De Broglie wavelength decreases as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "m decreases" },
              { id: "b", text: "Momentum increases" },
              { id: "c", text: "No relation" },
              { id: "d", text: "p decreases" },
            ],
          correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "De Broglie",
                statement: "λ = h/mv → p↑ → λ↓.",
              },
            ],
            steps: [{ reasoning: "p↑ → λ↓.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) p↑.",
          },
        },
        {
          id: "cipup-u3-mod-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Heisenberg uncertainty principle:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "ΔxΔp = 0" },
              { id: "b", text: "No limit" },
              { id: "c", text: "ΔxΔp ≥ h/4π" },
              { id: "d", text: "ΔxΔp ≤ h" },
            ],
          correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Heisenberg",
                statement: "ΔxΔp ≥ h/4π.",
              },
            ],
            steps: [{ reasoning: "ΔxΔp ≥ h/4π.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) ≥ h/4π.",
          },
        },
        {
          id: "cipup-u3-mod-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "E = mc² relates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing" },
              { id: "b", text: "Force and motion" },
              { id: "c", text: "Momentum" },
              { id: "d", text: "Mass and energy" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "E=mc²",
                statement: "Mass-energy equivalence.",
              },
            ],
            steps: [{ reasoning: "E = mc².", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Mass-energy.",
          },
        },
        {
          id: "cipup-u3-mod-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Binding energy is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Potential only" },
              { id: "b", text: "Energy to separate nucleons" },
              { id: "c", text: "Kinetic energy" },
              { id: "d", text: "No energy" },
            ],
          correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Binding energy",
                statement: "Separate nucleons.",
              },
            ],
            steps: [
              { reasoning: "BE = separate nucleons.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Separate nucleons.",
          },
        },
        {
          id: "cipup-u3-mod-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "Chain reaction in fission:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only protons" },
              { id: "b", text: "No neutrons" },
              { id: "c", text: "Neutrons split more nuclei" },
              { id: "d", text: "No chain" },
            ],
          correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Chain reaction",
                statement: "Neutrons → more fission.",
              },
            ],
            steps: [
              { reasoning: "Chain = neutrons.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Neutron chain.",
          },
        },
        {
          id: "cipup-u3-mod-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "Fusion requires:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Low T" },
              { id: "b", text: "No conditions" },
              { id: "c", text: "Cold" },
              { id: "d", text: "Very high temperature and pressure" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fusion",
                statement: "High T, P needed.",
              },
            ],
            steps: [
              { reasoning: "Fusion = high T/P.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) High T/P.",
          },
        },
        {
          id: "cipup-u3-mod-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "Alpha particles are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Not ionising" },
              { id: "b", text: "Photons" },
              { id: "c", text: "Lightest" },
              { id: "d", text: "Heaviest and most ionising" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Alpha",
                statement: "Heaviest, most ionising.",
              },
            ],
            steps: [{ reasoning: "α = heaviest.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Heaviest.",
          },
        },
        {
          id: "cipup-u3-mod-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between photoelectric and Compton effects.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "PE vs Compton",
                statement: "Bound vs free electrons.",
              },
            ],
            steps: [
              {
                reasoning: "Photoelectric: bound electrons in metal.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Compton: free electrons — photon scatters with lower E.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "PE = bound; Compton = free electrons.",
          },
        },
        {
          id: "cipup-u3-mod-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the photoelectric equation and explain each term.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Photoelectric eq",
                statement: "hf = φ + KE.",
              },
            ],
            steps: [
              {
                reasoning:
                  "hf = photon energy; φ = work function; KE = max KE.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "E = φ + KE_max.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "hf = φ + KE_max.",
          },
        },
        {
          id: "cipup-u3-mod-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain wave-particle duality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Duality",
                statement: "Both wave and particle.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Light behaves as wave (interference) and particle (photoelectric).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Matter has wavelength (de Broglie) — electron diffraction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both aspects are real — complementarity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Wave + particle both real.",
          },
        },
        {
          id: "cipup-u3-mod-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Electron λ = h/mv. Calculate λ for electron (m=9.11×10⁻³¹ kg) at v=10⁶ m/s.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "De Broglie", statement: "λ = h/mv." },
            ],
            steps: [
              {
                reasoning: "λ = h/mv = 6.63×10⁻³⁴/(9.11×10⁻³¹×10⁶).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Denominator = 9.11×10⁻²⁵.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "λ = 7.28×10⁻¹⁰ m.", marks: 1, markCode: "M" },
              {
                reasoning: "λ ≈ 0.73 nm — atomic scale.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "λ ≈ 7.3×10⁻¹⁰ m.",
          },
        },
        {
          id: "cipup-u3-mod-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "Radioactive decay is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Controlled" },
              { id: "b", text: "No process" },
              { id: "c", text: "Predictable" },
              { id: "d", text: "Random and spontaneous" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Decay",
                statement: "Random, spontaneous.",
              },
            ],
            steps: [{ reasoning: "Decay = random.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Random.",
          },
        },
        {
          id: "cipup-u3-mod-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is half-life?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Half-life",
                statement: "Time for half to decay.",
              },
            ],
            steps: [
              {
                reasoning: "Time for half the nuclei to decay.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Constant for each isotope.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Time for half to decay.",
          },
        },
        {
          id: "cipup-u3-mod-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why fusion powers the Sun.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Solar fusion", statement: "H → He." },
            ],
            steps: [
              {
                reasoning: "Hydrogen nuclei fuse to helium at high T.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Mass defect → energy via E = mc².",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Huge energy released — powers Sun.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "H fusion → He → energy.",
          },
        },
        {
          id: "cipup-u3-mod-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Penetrating power: α < β < γ (least to most). True or false?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "True" },
              { id: "b", text: "All same" },
              { id: "c", text: "Unknown" },
              { id: "d", text: "False — γ < β < α" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Penetration",
                statement: "α least, γ most.",
              },
            ],
            steps: [
              { reasoning: "α < β < γ penetration.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) True.",
          },
        },
        {
          id: "cipup-u3-mod-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a photon?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Photon",
                statement: "Quantum of EM radiation.",
              },
            ],
            steps: [
              {
                reasoning: "Discrete packet of EM energy — E = hf.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Particle aspect of EM waves.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "EM energy quantum — E = hf.",
          },
        },
        {
          id: "cipup-u3-mod-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate KE_max for photon f = 10¹⁵ Hz hitting metal with φ = 2 eV (h = 4.14×10⁻¹⁵ eV·s).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Photoelectric",
                statement: "KE = hf - φ.",
              },
            ],
            steps: [
              {
                reasoning: "E_photon = hf = 4.14×10⁻¹⁵ × 10¹⁵ = 4.14 eV.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "KE_max = E - φ = 4.14 - 2 = 2.14 eV.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "KE_max = 2.14 eV.", marks: 1, markCode: "M" },
              {
                reasoning: "In joules: 2.14 × 1.6×10⁻¹⁹ = 3.4×10⁻¹⁹ J.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "KE_max ≈ 2.14 eV ≈ 3.4×10⁻¹⁹ J.",
          },
        },
        {
          id: "cipup-u3-mod-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is nuclear fusion difficult to achieve on Earth?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fusion difficulty",
                statement: "Repulsion + conditions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Protons repel — need high T to overcome Coulomb barrier.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "High pressure/density needed — hard to contain plasma.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Repulsion + containment difficulty.",
          },
        },
      ],
    },
    {
      id: "cipup-u3-relativity",
      title: "Relativity and astrophysics",
      skill: "Explain special relativity concepts and astrophysical phenomena.",
      lesson: {
        sections: [
          {
            heading: "Special relativity",
            body: "**Postulates**: laws same in all inertial frames; light speed c constant. **Time dilation**: moving clocks run slow — Δt = γΔt₀. **Length contraction**: moving objects shorten — L = L₀/γ. **γ = 1/√(1-v²/c²)**. **Mass-energy**: E = mc² — mass and energy equivalent.",
          },
          {
            heading: "Astrophysics",
            body: "**Stars**: fusion of H → He. **Main sequence**: stable fusion. **Red giant**: H depleted → expands. **White dwarf**: dead star core. **Supernova**: massive star explodes. **Black hole**: gravity so strong nothing escapes. **Dark matter/energy**: unknown components of universe.",
          },
          {
            heading: "Cosmology",
            body: "**Big Bang**: universe began ~13.8 billion years ago. **Expansion**: galaxies recede — redshift. **Cosmic microwave background**: remnant radiation. **Dark matter**: ~27% of universe — gravitational effects. **Dark energy**: ~68% — drives expansion.",
          },
        ],
        keyFormulas: [
          { name: "Time dilation", statement: "Δt = γΔt₀" },
          { name: "Length contraction", statement: "L = L₀/γ" },
          { name: "Lorentz factor", statement: "γ = 1/√(1-v²/c²)" },
          { name: "Redshift", statement: "z = (λ_obs - λ_emit)/λ_emit" },
        ],
        workedExample: {
          problem:
            "Clock on rocket moving at 0.8c. If 1 hour passes on Earth, how much on rocket?",
          solution:
            "γ = 1/√(1-0.64) = 1/0.6 = 1.67. Rocket time = 1/1.67 = 0.6 hour.",
        },
      },
      questions: [
        {
          id: "cipup-u3-rel-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Special relativity postulates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Laws same in all inertial frames; c constant" },
              { id: "b", text: "Time absolute" },
              { id: "c", text: "No postulates" },
              { id: "d", text: "c varies" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Relativity",
                statement: "2 postulates.",
              },
            ],
            steps: [{ reasoning: "2 postulates.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 2 postulates.",
          },
        },
        {
          id: "cipup-u3-rel-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Time dilation means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Moving clocks run slow" },
              { id: "b", text: "Stop" },
              { id: "c", text: "Fast" },
              { id: "d", text: "Same" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Time dilation",
                statement: "Moving clock slow.",
              },
            ],
            steps: [
              { reasoning: "Time dilation = slow.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Slow.",
          },
        },
        {
          id: "cipup-u3-rel-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Length contraction means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Same" },
              { id: "b", text: "Lengthen" },
              { id: "c", text: "Moving objects shorten" },
              { id: "d", text: "Zero" },
            ],
          correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Length contraction",
                statement: "Objects shorten.",
              },
            ],
            steps: [
              {
                reasoning: "Length contraction = shorten.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Shorten.",
          },
        },
        {
          id: "cipup-u3-rel-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Lorentz factor γ =:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "v/c" },
              { id: "b", text: "1/√(1-v²/c²)" },
              { id: "c", text: "c/v" },
              { id: "d", text: "1-v/c" },
            ],
          correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "γ", statement: "1/√(1-v²/c²)." },
            ],
            steps: [
              { reasoning: "γ = Lorentz factor.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) 1/√(1-v²/c²).",
          },
        },
        {
          id: "cipup-u3-rel-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Main sequence star is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dead" },
              { id: "b", text: "No fusion" },
              { id: "c", text: "Exploding" },
              { id: "d", text: "Stable hydrogen fusion" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Main sequence",
                statement: "Stable fusion.",
              },
            ],
            steps: [
              { reasoning: "Main sequence = stable.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Stable fusion.",
          },
        },
        {
          id: "cipup-u3-rel-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Black hole is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hole in space" },
              { id: "b", text: "No gravity" },
              { id: "c", text: "Dark star" },
              {
                id: "d",
                text: "Object with gravity so strong nothing escapes",
              },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Black hole",
                statement: "Nothing escapes.",
              },
            ],
            steps: [
              { reasoning: "BH = escape impossible.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Nothing escapes.",
          },
        },
        {
          id: "cipup-u3-rel-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Redshift indicates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Moving closer" },
              { id: "b", text: "Galaxy moving away (expansion)" },
              { id: "c", text: "No motion" },
              { id: "d", text: "Static" },
            ],
          correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Redshift",
                statement: "Receding galaxy.",
              },
            ],
            steps: [
              { reasoning: "Redshift = receding.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Receding.",
          },
        },
        {
          id: "cipup-u3-rel-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Cosmic microwave background is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Radio waves" },
              { id: "b", text: "No radiation" },
              { id: "c", text: "Star light" },
              { id: "d", text: "Remnant radiation from Big Bang" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "CMB",
                statement: "Big Bang remnant.",
              },
            ],
            steps: [
              { reasoning: "CMB = Big Bang remnant.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Big Bang remnant.",
          },
        },
        {
          id: "cipup-u3-rel-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Dark matter is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Energy" },
              { id: "b", text: "Visible" },
              { id: "c", text: "Matter inferred from gravitational effects" },
              { id: "d", text: "No matter" },
            ],
          correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dark matter",
                statement: "Gravitational effects.",
              },
            ],
            steps: [{ reasoning: "DM = inferred.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Inferred matter.",
          },
        },
        {
          id: "cipup-u3-rel-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Speed of light c =:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "340 m/s" },
              { id: "b", text: "Variable" },
              { id: "c", text: "3 × 10⁸ m/s" },
              { id: "d", text: "Zero" },
            ],
          correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "c", statement: "3×10⁸ m/s." },
            ],
            steps: [{ reasoning: "c = 3×10⁸.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 3×10⁸.",
          },
        },
        {
          id: "cipup-u3-rel-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "At v = 0.8c, γ ≈:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2.0" },
              { id: "b", text: "1.67" },
              { id: "c", text: "1.0" },
              { id: "d", text: "1.25" },
            ],
          correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "γ",
                statement: "γ = 1/√(1-0.64) = 1/0.6 = 1.67.",
              },
            ],
            steps: [{ reasoning: "γ ≈ 1.67.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 1.67.",
          },
        },
        {
          id: "cipup-u3-rel-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Time dilation formula:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Δt = Δt₀/γ" },
              { id: "b", text: "Δt = γΔt₀" },
              { id: "c", text: "No formula" },
              { id: "d", text: "Δt = γt" },
            ],
          correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Time dilation",
                statement: "Δt = γΔt₀.",
              },
            ],
            steps: [{ reasoning: "Δt = γΔt₀.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) γΔt₀.",
          },
        },
        {
          id: "cipup-u3-rel-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Length contraction formula:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "L = γL₀" },
              { id: "b", text: "No formula" },
              { id: "c", text: "L = L₀/γ" },
              { id: "d", text: "L = L₀γ" },
            ],
          correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Length contraction",
                statement: "L = L₀/γ.",
              },
            ],
            steps: [{ reasoning: "L = L₀/γ.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) L₀/γ.",
          },
        },
        {
          id: "cipup-u3-rel-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Red giant forms when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Star explodes" },
              { id: "b", text: "Star born" },
              { id: "c", text: "No fusion" },
              { id: "d", text: "Hydrogen depleted in core" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Red giant",
                statement: "H depleted.",
              },
            ],
            steps: [
              { reasoning: "Red giant = H depleted.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) H depleted.",
          },
        },
        {
          id: "cipup-u3-rel-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "White dwarf is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Planet" },
              { id: "b", text: "Living star" },
              { id: "c", text: "No star" },
              { id: "d", text: "Dead star core — electron degenerate" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "White dwarf",
                statement: "Dead core.",
              },
            ],
            steps: [{ reasoning: "WD = dead core.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Dead core.",
          },
        },
        {
          id: "cipup-u3-rel-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Supernova occurs when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No explosion" },
              { id: "b", text: "Small star dies" },
              { id: "c", text: "Massive star explodes" },
              { id: "d", text: "Planet forms" },
            ],
          correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Supernova",
                statement: "Massive star explodes.",
              },
            ],
            steps: [
              { reasoning: "SN = massive explosion.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Massive explosion.",
          },
        },
        {
          id: "cipup-u3-rel-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "Relativity effects are significant at:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Velocities near c" },
              { id: "b", text: "Zero speed" },
              { id: "c", text: "Low speeds" },
              { id: "d", text: "Any speed" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Relativity", statement: "v ~ c." },
            ],
            steps: [{ reasoning: "Effects at v~c.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) v ~ c.",
          },
        },
        {
          id: "cipup-u3-rel-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "Twin paradox demonstrates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Time dilation" },
              { id: "b", text: "No effect" },
              { id: "c", text: "Length contraction" },
              { id: "d", text: "Gravity" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Twin paradox",
                statement: "Time dilation.",
              },
            ],
            steps: [
              { reasoning: "Twin = time dilation.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Time dilation.",
          },
        },
        {
          id: "cipup-u3-rel-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "Dark energy:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Drives cosmic expansion — ~68% of universe" },
              { id: "b", text: "Light" },
              { id: "c", text: "Matter" },
              { id: "d", text: "No energy" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dark energy",
                statement: "Expansion driver.",
              },
            ],
            steps: [{ reasoning: "DE = expansion.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Expansion.",
          },
        },
        {
          id: "cipup-u3-rel-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between time dilation and length contraction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Relativity effects",
                statement: "Time vs space.",
              },
            ],
            steps: [
              {
                reasoning: "Time dilation: moving clocks run slow — Δt > Δt₀.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Length contraction: moving objects shorten — L < L₀.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Time slow; length short.",
          },
        },
        {
          id: "cipup-u3-rel-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the two postulates of special relativity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Postulates",
                statement: "2 postulates.",
              },
            ],
            steps: [
              {
                reasoning: "Laws of physics same in all inertial frames.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Speed of light constant in all frames.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Laws same; c constant.",
          },
        },
        {
          id: "cipup-u3-rel-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why nothing can travel faster than light.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Speed limit",
                statement: "Infinite energy needed.",
              },
            ],
            steps: [
              { reasoning: "As v → c, γ → ∞.", marks: 1, markCode: "M" },
              {
                reasoning: "Requires infinite energy to reach c.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "c is absolute speed limit.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "γ → ∞ → infinite energy needed.",
          },
        },
        {
          id: "cipup-u3-rel-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Rocket at 0.6c. Earth observer sees 10 years pass. How much time on rocket? (γ = 1/√(1-0.36) = 1.25)",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Time dilation", statement: "Δt = γΔt₀." },
            ],
            steps: [
              {
                reasoning: "Earth time Δt = γΔt₀ → 10 = 1.25Δt₀.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Δt₀ = 10/1.25 = 8 years.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Rocket time = 8 years.", marks: 1, markCode: "M" },
              {
                reasoning: "Rocket clock runs slow — 8 vs 10 years.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "8 years on rocket.",
          },
        },
        {
          id: "cipup-u3-rel-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "Hubble's law relates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mass to size" },
              { id: "b", text: "Temperature to pressure" },
              { id: "c", text: "No relation" },
              { id: "d", text: "Galaxy recession velocity to distance" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Hubble", statement: "v = H₀d." },
            ],
            steps: [{ reasoning: "Hubble = v/d.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) v ∝ d.",
          },
        },
        {
          id: "cipup-u3-rel-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the Big Bang theory?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Big Bang",
                statement: "Universe origin.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Universe began ~13.8 billion years ago from hot dense state.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evidence: CMB, redshift, abundance of elements.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Universe began ~13.8 billion years ago.",
          },
        },
        {
          id: "cipup-u3-rel-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain stellar evolution from main sequence to white dwarf.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stellar evolution",
                statement: "H→He→red giant→WD.",
              },
            ],
            steps: [
              {
                reasoning: "Main sequence: H → He fusion stable.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "H depleted → red giant expands.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Outer layers shed → white dwarf remains.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Main sequence → red giant → white dwarf.",
          },
        },
        {
          id: "cipup-u3-rel-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Parallax is used to measure:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Temperature" },
              { id: "b", text: "Distance to nearby stars" },
              { id: "c", text: "Nothing" },
              { id: "d", text: "Galaxy mass" },
            ],
          correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Parallax",
                statement: "Stellar distance.",
              },
            ],
            steps: [
              { reasoning: "Parallax = distance.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Star distance.",
          },
        },
        {
          id: "cipup-u3-rel-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is redshift and what does it tell us?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Redshift", statement: "λ shift." },
            ],
            steps: [
              {
                reasoning: "Shift of spectral lines to longer wavelengths.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Indicates galaxy receding — universe expanding.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "λ shift → receding galaxy.",
          },
        },
        {
          id: "cipup-u3-rel-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate redshift z if λ_observed = 650 nm, λ_emitted = 500 nm.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Redshift", statement: "z = Δλ/λ." },
            ],
            steps: [
              {
                reasoning: "z = (λ_obs - λ_emit)/λ_emit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "z = (650 - 500)/500 = 150/500 = 0.3.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "z = 0.3 — galaxy receding.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "z = 0.3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "z = 0.3.",
          },
        },
        {
          id: "cipup-u3-rel-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is the speed of light the same in all reference frames?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "c constant",
                statement: "Postulate of relativity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Einstein's second postulate — experimentally verified.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Leads to time dilation and length contraction.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Postulate → relativistic effects.",
          },
        },
      ],
    },
  ],
};
