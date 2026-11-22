import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "cipup-u3-lesson-3-2",
  code: "3-2",
  title: "Waves and electromagnetism",
  goal: "I CAN explain wave properties and electromagnetic phenomena.",
  standards: [
    "Cambridge Pre-U Physics 9792",
    "Paper 1: Waves, electromagnetism",
  ],
  vocabulary: [
    {
      term: "Wavelength",
      definition: "Distance between consecutive crests — λ.",
    },
    { term: "Frequency", definition: "Oscillations per second — f, Hz." },
    { term: "Amplitude", definition: "Maximum displacement from equilibrium." },
    { term: "Wave speed", definition: "v = fλ." },
    {
      term: "Transverse wave",
      definition: "Oscillation perpendicular to propagation.",
    },
    {
      term: "Longitudinal wave",
      definition: "Oscillation parallel to propagation.",
    },
    { term: "Refraction", definition: "Bending of wave at boundary." },
    { term: "Diffraction", definition: "Spreading of wave around obstacle." },
    {
      term: "Interference",
      definition: "Superposition of waves — constructive/destructive.",
    },
    {
      term: "Doppler effect",
      definition: "Frequency change due to relative motion.",
    },
    {
      term: "Electric field",
      definition: "Force field around charge — E = F/q.",
    },
    {
      term: "Magnetic field",
      definition: "Force field around magnet/current.",
    },
  ],
  concepts: [
    {
      id: "cipup-u3-wave",
      title: "Wave properties",
      skill: "Apply v = fλ and explain wave phenomena.",
      lesson: {
        sections: [
          {
            heading: "Wave basics",
            body: "**Wavelength (λ)**: crest-to-crest distance. **Frequency (f)**: oscillations/second, Hz. **Amplitude (A)**: max displacement. **Wave speed**: v = fλ — all waves. **Period**: T = 1/f.",
          },
          {
            heading: "Wave types and phenomena",
            body: "**Transverse**: light, water — oscillation ⊥ propagation. **Longitudinal**: sound — oscillation ∥ propagation. **Refraction**: bends at boundary — Snell's law n₁sinθ₁ = n₂sinθ₂. **Diffraction**: spreads around obstacles — significant when gap ~ λ. **Interference**: superposition — path difference determines constructive/destructive.",
          },
          {
            heading: "Doppler effect",
            body: "Frequency observed changes when source/observer move. Approaching → higher frequency (blue shift); receding → lower (red shift). Used in radar, astronomy.",
          },
        ],
        keyFormulas: [
          { name: "Wave speed", statement: "v = fλ" },
          { name: "Period", statement: "T = 1/f" },
          { name: "Snell's law", statement: "n₁sinθ₁ = n₂sinθ₂" },
          {
            name: "Path difference",
            statement: "nλ constructive, (n+½)λ destructive",
          },
        ],
        workedExample: {
          problem: "Wave f=5 Hz, λ=0.4 m. Find speed.",
          solution: "v = fλ = 5×0.4 = 2 m/s.",
        },
      },
      questions: [
        {
          id: "cipup-u3-wave-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Wave speed =:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "fλ" },
              { id: "b", text: "f+λ" },
              { id: "c", text: "λ/f" },
              { id: "d", text: "f/λ" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "v=fλ", statement: "v = fλ." },
            ],
            steps: [{ reasoning: "v = fλ.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) fλ.",
          },
        },
        {
          id: "cipup-u3-wave-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Frequency is measured in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Watts" },
              { id: "b", text: "Hertz (Hz)" },
              { id: "c", text: "m/s" },
              { id: "d", text: "metres" },
            ],
          correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Frequency units", statement: "Hz." },
            ],
            steps: [{ reasoning: "f in Hz.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Hz.",
          },
        },
        {
          id: "cipup-u3-wave-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Wavelength is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Speed" },
              { id: "b", text: "Frequency" },
              { id: "c", text: "Distance between consecutive crests" },
              { id: "d", text: "Max displacement" },
            ],
          correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Wavelength",
                statement: "Crest-to-crest.",
              },
            ],
            steps: [
              { reasoning: "λ = crest distance.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Crest distance.",
          },
        },
        {
          id: "cipup-u3-wave-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Amplitude is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Frequency" },
              { id: "b", text: "Wavelength" },
              { id: "c", text: "Max displacement from equilibrium" },
              { id: "d", text: "Speed" },
            ],
          correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Amplitude",
                statement: "Max displacement.",
              },
            ],
            steps: [
              { reasoning: "A = max displacement.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Max displacement.",
          },
        },
        {
          id: "cipup-u3-wave-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Transverse wave oscillates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Perpendicular to propagation" },
              { id: "b", text: "No direction" },
              { id: "c", text: "Parallel to propagation" },
              { id: "d", text: "Circular only" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Transverse",
                statement: "⊥ propagation.",
              },
            ],
            steps: [{ reasoning: "Transverse = ⊥.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Perpendicular.",
          },
        },
        {
          id: "cipup-u3-wave-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Longitudinal wave oscillates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Perpendicular" },
              { id: "b", text: "Circular only" },
              { id: "c", text: "No direction" },
              { id: "d", text: "Parallel to propagation" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Longitudinal",
                statement: "∥ propagation.",
              },
            ],
            steps: [
              { reasoning: "Longitudinal = ∥.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Parallel.",
          },
        },
        {
          id: "cipup-u3-wave-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Refraction is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bending of wave at boundary" },
              { id: "b", text: "Absorption" },
              { id: "c", text: "Reflection" },
              { id: "d", text: "Spreading around obstacle" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Refraction",
                statement: "Bending at boundary.",
              },
            ],
            steps: [
              { reasoning: "Refraction = bending.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Bending.",
          },
        },
        {
          id: "cipup-u3-wave-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Diffraction is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reflection" },
              { id: "b", text: "Absorption" },
              { id: "c", text: "Bending" },
              { id: "d", text: "Spreading of wave around obstacle" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Diffraction",
                statement: "Spreading around obstacle.",
              },
            ],
            steps: [
              {
                reasoning: "Diffraction = spreading.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Spreading.",
          },
        },
        {
          id: "cipup-u3-wave-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Sound is a:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Transverse wave" },
              { id: "b", text: "Longitudinal wave" },
              { id: "c", text: "Electromagnetic" },
              { id: "d", text: "Not a wave" },
            ],
          correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sound", statement: "Longitudinal." },
            ],
            steps: [
              { reasoning: "Sound = longitudinal.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Longitudinal.",
          },
        },
        {
          id: "cipup-u3-wave-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Light is a:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sound" },
              { id: "b", text: "Transverse electromagnetic wave" },
              { id: "c", text: "Not a wave" },
              { id: "d", text: "Longitudinal" },
            ],
          correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Light",
                statement: "Transverse EM.",
              },
            ],
            steps: [
              { reasoning: "Light = transverse EM.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Transverse EM.",
          },
        },
        {
          id: "cipup-u3-wave-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "v = 340 m/s, f = 170 Hz. Find λ.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "0.5 m" },
              { id: "b", text: "4 m" },
              { id: "c", text: "2 m" },
              { id: "d", text: "1 m" },
            ],
          correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "v=fλ",
                statement: "λ = v/f = 340/170 = 2 m.",
              },
            ],
            steps: [{ reasoning: "λ = 2 m.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 2 m.",
          },
        },
        {
          id: "cipup-u3-wave-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "f = 10 Hz, λ = 5 m. Find v.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "500 m/s" },
              { id: "b", text: "50 m/s" },
              { id: "c", text: "2 m/s" },
              { id: "d", text: "15 m/s" },
            ],
          correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "v=fλ", statement: "v = 10×5 = 50 m/s." },
            ],
            steps: [{ reasoning: "v = 50 m/s.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 50 m/s.",
          },
        },
        {
          id: "cipup-u3-wave-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Period T =:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "fλ" },
              { id: "b", text: "λ/f" },
              { id: "c", text: "f" },
              { id: "d", text: "1/f" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Period", statement: "T = 1/f." },
            ],
            steps: [{ reasoning: "T = 1/f.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 1/f.",
          },
        },
        {
          id: "cipup-u3-wave-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Diffraction is greatest when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gap >> wavelength" },
              { id: "b", text: "Gap size ≈ wavelength" },
              { id: "c", text: "No gap" },
              { id: "d", text: "Gap << wavelength" },
            ],
          correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Diffraction", statement: "Gap ~ λ." },
            ],
            steps: [
              {
                reasoning: "Diffraction max when gap ~ λ.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Gap ≈ λ.",
          },
        },
        {
          id: "cipup-u3-wave-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Constructive interference occurs when path difference is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Half wavelength" },
              { id: "b", text: "Whole number of wavelengths" },
              { id: "c", text: "Zero only" },
              { id: "d", text: "Any" },
            ],
          correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Constructive", statement: "nλ." },
            ],
            steps: [
              { reasoning: "Constructive = nλ.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) nλ.",
          },
        },
        {
          id: "cipup-u3-wave-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Destructive interference occurs when path difference is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "nλ" },
              { id: "b", text: "Zero" },
              { id: "c", text: "Any" },
              { id: "d", text: "(n+½)λ" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Destructive", statement: "(n+½)λ." },
            ],
            steps: [
              { reasoning: "Destructive = (n+½)λ.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) (n+½)λ.",
          },
        },
        {
          id: "cipup-u3-wave-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "Snell's law states:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "v₁ = v₂" },
              { id: "b", text: "n₁sinθ₁ = n₂sinθ₂" },
              { id: "c", text: "f₁ = f₂" },
              { id: "d", text: "n₁cosθ₁ = n₂cosθ₂" },
            ],
          correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Snell",
                statement: "n₁sinθ₁ = n₂sinθ₂.",
              },
            ],
            steps: [{ reasoning: "Snell's law.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) n₁sinθ₁ = n₂sinθ₂.",
          },
        },
        {
          id: "cipup-u3-wave-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "When wave enters denser medium, it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stops" },
              { id: "b", text: "No change" },
              { id: "c", text: "Speeds up" },
              { id: "d", text: "Slows down and bends toward normal" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Refraction",
                statement: "Denser → slower, toward normal.",
              },
            ],
            steps: [{ reasoning: "Denser = slower.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Slower, toward normal.",
          },
        },
        {
          id: "cipup-u3-wave-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "Doppler effect: approaching source → observed frequency:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lower" },
              { id: "b", text: "Zero" },
              { id: "c", text: "Higher" },
              { id: "d", text: "Same" },
            ],
          correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Doppler",
                statement: "Approach → higher f.",
              },
            ],
            steps: [
              { reasoning: "Approach = higher f.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Higher.",
          },
        },
        {
          id: "cipup-u3-wave-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between transverse and longitudinal waves.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Wave types",
                statement: "Direction of oscillation.",
              },
            ],
            steps: [
              {
                reasoning: "Transverse: oscillation ⊥ propagation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Longitudinal: oscillation ∥ propagation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Transverse ⊥; longitudinal ∥.",
          },
        },
        {
          id: "cipup-u3-wave-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State three wave phenomena.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Wave phenomena",
                statement: "Refraction, diffraction, interference.",
              },
            ],
            steps: [
              {
                reasoning: "Refraction, diffraction, interference.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Also reflection, Doppler.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Refraction, diffraction, interference.",
          },
        },
        {
          id: "cipup-u3-wave-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why diffraction is more noticeable for longer wavelengths.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Diffraction", statement: "Gap ~ λ." },
            ],
            steps: [
              {
                reasoning: "Diffraction significant when gap ≈ λ.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Long λ → easier for gap to be ~ λ.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Short λ → gap >> λ → less spreading.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Long λ → gap ~ λ → more diffraction.",
          },
        },
        {
          id: "cipup-u3-wave-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two speakers 3 m apart emit 340 Hz sound (v=340 m/s). At what distances do constructive and first destructive interference occur on perpendicular bisector?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Interference",
                statement: "Path difference.",
              },
            ],
            steps: [
              {
                reasoning: "λ = v/f = 340/340 = 1 m.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "On bisector path difference = 0 → always constructive.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "First destructive at path diff = λ/2 = 0.5 m.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Constructive on bisector; destructive elsewhere.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Constructive on bisector; destructive at 0.5m path diff.",
          },
        },
        {
          id: "cipup-u3-wave-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "Electromagnetic waves travel at:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Zero" },
              { id: "b", text: "Variable" },
              { id: "c", text: "3 × 10⁸ m/s in vacuum" },
              { id: "d", text: "340 m/s" },
            ],
          correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "c", statement: "3×10⁸ m/s." },
            ],
            steps: [{ reasoning: "c = 3×10⁸.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 3×10⁸ m/s.",
          },
        },
        {
          id: "cipup-u3-wave-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the Doppler effect?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Doppler",
                statement: "Frequency shift from motion.",
              },
            ],
            steps: [
              {
                reasoning: "Frequency change due to relative motion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Approach → higher f; recede → lower f.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Frequency shift from relative motion.",
          },
        },
        {
          id: "cipup-u3-wave-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why waves refract when entering a different medium.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Refraction",
                statement: "Speed change → bend.",
              },
            ],
            steps: [
              {
                reasoning: "Wave speed changes in new medium.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Frequency stays same → wavelength changes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Wave bends toward/away from normal.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Speed change → bend.",
          },
        },
        {
          id: "cipup-u3-wave-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Standing wave is formed by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One wave only" },
              {
                id: "b",
                text: "Two identical waves travelling opposite directions",
              },
              { id: "c", text: "Sound only" },
              { id: "d", text: "No waves" },
            ],
          correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Standing wave",
                statement: "Two counter-propagating waves.",
              },
            ],
            steps: [
              { reasoning: "Standing = 2 waves.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Two waves.",
          },
        },
        {
          id: "cipup-u3-wave-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a node in a standing wave?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Node",
                statement: "Zero amplitude point.",
              },
            ],
            steps: [
              {
                reasoning: "Point of zero amplitude — no oscillation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Between nodes are antinodes (max amplitude).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Zero amplitude point.",
          },
        },
        {
          id: "cipup-u3-wave-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate fundamental frequency of string length 1 m, wave speed 200 m/s.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Standing wave", statement: "f = v/λ." },
            ],
            steps: [
              {
                reasoning: "Fundamental: λ = 2L = 2 m.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "f = v/λ = 200/2 = 100 Hz.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "First harmonic = 100 Hz.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "f = 100 Hz.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "100 Hz.",
          },
        },
        {
          id: "cipup-u3-wave-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why do we see objects around corners but not hear around them as well?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Diffraction",
                statement: "λ vs obstacle size.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Light λ ~ 10⁻⁷ m — tiny vs obstacles → little diffraction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Sound λ ~ 1 m — comparable to obstacles → more diffraction.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Sound λ larger → more diffraction.",
          },
        },
      ],
    },
    {
      id: "cipup-u3-em",
      title: "Electromagnetism",
      skill:
        "Explain electric and magnetic fields, circuits, and EM induction.",
      lesson: {
        sections: [
          {
            heading: "Electric fields and circuits",
            body: "**Electric field**: E = F/q — force per unit charge. **Coulomb's law**: F = kq₁q₂/r². **Ohm's law**: V = IR. **Power**: P = VI = I²R = V²/R. **Series**: same current; **parallel**: same voltage.",
          },
          {
            heading: "Magnetic fields",
            body: "**Magnetic field**: region around magnet/current. **Force on charge**: F = qvB sin θ. **Force on wire**: F = BIL. **Field lines**: N to S outside magnet. **Solenoid**: current → magnetic field like bar magnet.",
          },
          {
            heading: "EM induction",
            body: "**Faraday's law**: induced EMF = rate of change of flux linkage. **Lenz's law**: induced current opposes change causing it. **Transformer**: Vp/Vs = Np/Ns. **AC generator**: rotating coil → alternating current. **DC motor**: current in field → force → rotation.",
          },
        ],
        keyFormulas: [
          { name: "Ohm's law", statement: "V = IR" },
          { name: "Power", statement: "P = VI = I²R" },
          { name: "Force on charge", statement: "F = qvB" },
          { name: "Transformer", statement: "Vp/Vs = Np/Ns" },
        ],
        workedExample: {
          problem: "12 V across 4 Ω. Find current.",
          solution: "I = V/R = 12/4 = 3 A.",
        },
      },
      questions: [
        {
          id: "cipup-u3-em-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Ohm's law states:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "V = IR" },
              { id: "b", text: "I = VR" },
              { id: "c", text: "V = I/R" },
              { id: "d", text: "R = VI" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ohm", statement: "V = IR." },
            ],
            steps: [{ reasoning: "V = IR.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) V=IR.",
          },
        },
        {
          id: "cipup-u3-em-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Electrical power P =:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "VI" },
              { id: "b", text: "I/V" },
              { id: "c", text: "V+I" },
              { id: "d", text: "V/I" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Power", statement: "P = VI." },
            ],
            steps: [{ reasoning: "P = VI.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) VI.",
          },
        },
        {
          id: "cipup-u3-em-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In series circuit, current is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Same through all components" },
              { id: "b", text: "Variable" },
              { id: "c", text: "Different" },
              { id: "d", text: "Zero" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Series", statement: "Same I." },
            ],
            steps: [{ reasoning: "Series = same I.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Same.",
          },
        },
        {
          id: "cipup-u3-em-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In parallel circuit, voltage is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Same across all components" },
              { id: "b", text: "Variable" },
              { id: "c", text: "Zero" },
              { id: "d", text: "Different" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Parallel", statement: "Same V." },
            ],
            steps: [
              { reasoning: "Parallel = same V.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Same.",
          },
        },
        {
          id: "cipup-u3-em-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Coulomb's law states force ∝:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "q²r" },
              { id: "b", text: "q₁q₂/r²" },
              { id: "c", text: "qr" },
              { id: "d", text: "q/r" },
            ],
          correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Coulomb", statement: "F ∝ q₁q₂/r²." },
            ],
            steps: [{ reasoning: "F ∝ q₁q₂/r².", marks: 1, markCode: "M" }],
            finalAnswer: "(a) q₁q₂/r².",
          },
        },
        {
          id: "cipup-u3-em-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Faraday's law of induction:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No law" },
              { id: "b", text: "EMF = VI" },
              { id: "c", text: "EMF = IR" },
              { id: "d", text: "EMF = rate of change of flux linkage" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Faraday", statement: "EMF = dΦ/dt." },
            ],
            steps: [
              { reasoning: "Faraday = flux change.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Flux change.",
          },
        },
        {
          id: "cipup-u3-em-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Lenz's law states induced current:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Enhances change" },
              { id: "b", text: "No effect" },
              { id: "c", text: "Opposes the change causing it" },
              { id: "d", text: "Random" },
            ],
          correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Lenz", statement: "Opposes change." },
            ],
            steps: [{ reasoning: "Lenz = opposes.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Opposes.",
          },
        },
        {
          id: "cipup-u3-em-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Transformer equation:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Vp = Vs" },
              { id: "b", text: "Vp/Vs = Np/Ns" },
              { id: "c", text: "Vp/Vs = Ns/Np" },
              { id: "d", text: "No equation" },
            ],
          correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Transformer",
                statement: "Vp/Vs = Np/Ns.",
              },
            ],
            steps: [{ reasoning: "Vp/Vs = Np/Ns.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Vp/Vs=Np/Ns.",
          },
        },
        {
          id: "cipup-u3-em-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Force on moving charge in magnetic field:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "F = qvB sin θ" },
              { id: "b", text: "F = BIL" },
              { id: "c", text: "F = qE" },
              { id: "d", text: "F = qv" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Magnetic force",
                statement: "F = qvB sinθ.",
              },
            ],
            steps: [{ reasoning: "F = qvB sinθ.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) qvB sinθ.",
          },
        },
        {
          id: "cipup-u3-em-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An AC generator produces:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Static" },
              { id: "b", text: "Alternating current" },
              { id: "c", text: "Direct current" },
              { id: "d", text: "No current" },
            ],
          correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "AC generator",
                statement: "Alternating current.",
              },
            ],
            steps: [{ reasoning: "Generator = AC.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) AC.",
          },
        },
        {
          id: "cipup-u3-em-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "12 V across 4 Ω → I =",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "48 A" },
              { id: "b", text: "0.33 A" },
              { id: "c", text: "16 A" },
              { id: "d", text: "3 A" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Ohm", statement: "I = V/R = 3 A." },
            ],
            steps: [{ reasoning: "I = 3 A.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 3 A.",
          },
        },
        {
          id: "cipup-u3-em-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Power dissipated by 2 A through 6 Ω:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3 W" },
              { id: "b", text: "36 W" },
              { id: "c", text: "12 W" },
              { id: "d", text: "24 W" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "P=I²R", statement: "P = 4×6 = 24 W." },
            ],
            steps: [{ reasoning: "P = 24 W.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 24 W.",
          },
        },
        {
          id: "cipup-u3-em-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Two 4 Ω resistors in series → total R =",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4 Ω" },
              { id: "b", text: "16 Ω" },
              { id: "c", text: "8 Ω" },
              { id: "d", text: "2 Ω" },
            ],
          correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Series R",
                statement: "R = R₁+R₂ = 8 Ω.",
              },
            ],
            steps: [{ reasoning: "R = 8 Ω.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 8 Ω.",
          },
        },
        {
          id: "cipup-u3-em-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Two 4 Ω resistors in parallel → total R =",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4 Ω" },
              { id: "b", text: "16 Ω" },
              { id: "c", text: "8 Ω" },
              { id: "d", text: "2 Ω" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Parallel R",
                statement: "1/R = 1/R₁+1/R₂ = 2 Ω.",
              },
            ],
            steps: [{ reasoning: "R = 2 Ω.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 2 Ω.",
          },
        },
        {
          id: "cipup-u3-em-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Step-up transformer increases:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Resistance" },
              { id: "b", text: "Voltage" },
              { id: "c", text: "Current" },
              { id: "d", text: "Nothing" },
            ],
          correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Step-up",
                statement: "Increases V.",
              },
            ],
            steps: [{ reasoning: "Step-up = V↑.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Voltage.",
          },
        },
        {
          id: "cipup-u3-em-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "EMF is induced when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Magnetic flux changes" },
              { id: "b", text: "No field" },
              { id: "c", text: "Flux constant" },
              { id: "d", text: "Static" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "EMF", statement: "Flux change." },
            ],
            steps: [
              { reasoning: "EMF = flux change.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Flux changes.",
          },
        },
        {
          id: "cipup-u3-em-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "Force on current-carrying wire in field =:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "qvB" },
              { id: "b", text: "IR" },
              { id: "c", text: "BIL" },
              { id: "d", text: "VI" },
            ],
          correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Wire force", statement: "F = BIL." },
            ],
            steps: [{ reasoning: "F = BIL.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) BIL.",
          },
        },
        {
          id: "cipup-u3-em-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "A solenoid behaves like:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bar magnet when current flows" },
              { id: "b", text: "Conductor only" },
              { id: "c", text: "No magnet" },
              { id: "d", text: "Insulator" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Solenoid",
                statement: "Like bar magnet.",
              },
            ],
            steps: [
              { reasoning: "Solenoid = magnet.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Bar magnet.",
          },
        },
        {
          id: "cipup-u3-em-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "DC motor works by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Static" },
              { id: "b", text: "EMF induction" },
              {
                id: "c",
                text: "Force on current-carrying coil in magnetic field",
              },
              { id: "d", text: "No force" },
            ],
          correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "DC motor",
                statement: "Force on coil.",
              },
            ],
            steps: [
              { reasoning: "Motor = force on coil.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Force on coil.",
          },
        },
        {
          id: "cipup-u3-em-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between series and parallel circuits.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Circuit types",
                statement: "Current vs voltage.",
              },
            ],
            steps: [
              {
                reasoning: "Series: same current, voltage splits.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Parallel: same voltage, current splits.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Series = same I; parallel = same V.",
          },
        },
        {
          id: "cipup-u3-em-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State Faraday's and Lenz's laws.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "EM induction",
                statement: "Faraday + Lenz.",
              },
            ],
            steps: [
              {
                reasoning: "Faraday: EMF = rate of flux change.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Lenz: induced current opposes change.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "EMF from flux change; opposes change.",
          },
        },
        {
          id: "cipup-u3-em-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a transformer works.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Transformer",
                statement: "Mutual induction.",
              },
            ],
            steps: [
              {
                reasoning: "AC in primary creates changing magnetic flux.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Flux links secondary coil → induced EMF.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Vp/Vs = Np/Ns — turns ratio sets voltage ratio.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Mutual induction → V ratio = N ratio.",
          },
        },
        {
          id: "cipup-u3-em-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Step-down transformer: 240 V primary, 12 V secondary, 1000 turns primary. Find secondary turns and current ratio if input 2 A.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Transformer",
                statement: "Vp/Vs = Np/Ns.",
              },
            ],
            steps: [
              { reasoning: "Vp/Vs = 240/12 = 20.", marks: 1, markCode: "M" },
              {
                reasoning: "Ns = Np/20 = 1000/20 = 50 turns.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Is = Ip×20 = 40 A (power conserved).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Ns = 50, Is = 40 A.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "50 turns, 40 A.",
          },
        },
        {
          id: "cipup-u3-em-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "Electric field strength E =:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "F/q" },
              { id: "b", text: "IR" },
              { id: "c", text: "q/F" },
              { id: "d", text: "V/d only" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "E field", statement: "E = F/q." },
            ],
            steps: [{ reasoning: "E = F/q.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) F/q.",
          },
        },
        {
          id: "cipup-u3-em-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is magnetic flux?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Flux", statement: "B×A×cosθ." },
            ],
            steps: [
              {
                reasoning: "Magnetic field through area — Φ = BA cos θ.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Unit: Weber (Wb).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Φ = BA cos θ — Wb.",
          },
        },
        {
          id: "cipup-u3-em-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why induced current opposes the change (Lenz's law).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Lenz",
                statement: "Energy conservation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Induced current creates field opposing flux change.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Requires work to change flux — energy conserved.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "If it aided change, energy would be created.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Opposes change → conserves energy.",
          },
        },
        {
          id: "cipup-u3-em-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A fuse protects circuit by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Storing charge" },
              { id: "b", text: "No effect" },
              { id: "c", text: "Increasing current" },
              { id: "d", text: "Melting when current too high" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fuse",
                statement: "Melts on excess I.",
              },
            ],
            steps: [{ reasoning: "Fuse = melts.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Melts.",
          },
        },
        {
          id: "cipup-u3-em-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the difference between AC and DC?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "AC vs DC",
                statement: "Direction of current.",
              },
            ],
            steps: [
              {
                reasoning: "AC: current reverses direction periodically.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "DC: current flows one direction.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "AC reverses; DC one direction.",
          },
        },
        {
          id: "cipup-u3-em-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate power dissipated in 8 Ω resistor with 4 A current, and voltage across it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Circuit calcs",
                statement: "P=I²R, V=IR.",
              },
            ],
            steps: [
              { reasoning: "P = I²R = 16×8 = 128 W.", marks: 1, markCode: "M" },
              { reasoning: "V = IR = 4×8 = 32 V.", marks: 1, markCode: "M" },
              {
                reasoning: "Check: P = VI = 32×4 = 128 W. ✓",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "P = 128 W, V = 32 V.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "128 W, 32 V.",
          },
        },
        {
          id: "cipup-u3-em-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why are transformers only used with AC?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Transformer AC",
                statement: "Needs changing flux.",
              },
            ],
            steps: [
              {
                reasoning: "Transformer needs changing magnetic flux.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "DC produces constant flux → no induced EMF.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "AC → changing flux → induction.",
          },
        },
      ],
    },
    {
      id: "cipup-u3-emwaves",
      title: "Electromagnetic spectrum",
      skill: "Identify EM wave types, uses, and hazards.",
      lesson: {
        sections: [
          {
            heading: "EM spectrum",
            body: "All EM waves travel at c = 3×10⁸ m/s in vacuum. **Spectrum** (increasing frequency/energy): radio → microwave → infrared → visible → ultraviolet → X-ray → gamma. **Wavelength decreases** as frequency increases: λ = c/f.",
          },
          {
            heading: "Uses and hazards",
            body: "**Radio**: communication. **Microwave**: cooking, satellite. **Infrared**: thermal imaging, remote controls. **Visible**: sight. **UV**: sterilisation, causes sunburn/cancer. **X-ray**: medical imaging. **Gamma**: cancer treatment, sterilisation — ionising.",
          },
          {
            heading: "Photon energy",
            body: "EM waves are photons — E = hf = hc/λ. Higher frequency → higher energy → more ionising. Ionising radiation can damage cells/DNA.",
          },
        ],
        keyFormulas: [
          { name: "c", statement: "3×10⁸ m/s" },
          { name: "E = hf", statement: "Photon energy" },
          { name: "λ = c/f", statement: "Wavelength-frequency" },
          { name: "Spectrum order", statement: "Radio → gamma" },
        ],
        workedExample: {
          problem: "Photon f = 5×10¹⁴ Hz. Find E (h=6.63×10⁻³⁴).",
          solution: "E = hf = 6.63×10⁻³⁴×5×10¹⁴ = 3.3×10⁻¹⁹ J.",
        },
      },
      questions: [
        {
          id: "cipup-u3-spect-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "All EM waves travel at:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Variable" },
              { id: "b", text: "3 × 10⁸ m/s in vacuum" },
              { id: "c", text: "Zero" },
              { id: "d", text: "340 m/s" },
            ],
          correctChoiceId: "b",
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
          id: "cipup-u3-spect-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Order of EM spectrum (low to high frequency):",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Random" },
              { id: "b", text: "Visible only" },
              {
                id: "c",
                text: "Radio → microwave → IR → visible → UV → X-ray → gamma",
              },
              { id: "d", text: "Gamma → radio" },
            ],
          correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Spectrum",
                statement: "Radio→gamma.",
              },
            ],
            steps: [{ reasoning: "Spectrum order.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Radio→gamma.",
          },
        },
        {
          id: "cipup-u3-spect-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Photon energy E =:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "h/f" },
              { id: "b", text: "hf" },
              { id: "c", text: "hc" },
              { id: "d", text: "f/h" },
            ],
          correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Photon E", statement: "E = hf." },
            ],
            steps: [{ reasoning: "E = hf.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) hf.",
          },
        },
        {
          id: "cipup-u3-spect-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Microwaves are used for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sunburn" },
              { id: "b", text: "Medical imaging" },
              { id: "c", text: "Nothing" },
              { id: "d", text: "Cooking and satellite communication" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Microwave uses",
                statement: "Cooking, satellites.",
              },
            ],
            steps: [
              {
                reasoning: "Microwave = cooking/satellite.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Cooking/satellite.",
          },
        },
        {
          id: "cipup-u3-spect-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "X-rays are used for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Radio" },
              { id: "b", text: "Cooking" },
              { id: "c", text: "Nothing" },
              { id: "d", text: "Medical imaging" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "X-ray uses",
                statement: "Medical imaging.",
              },
            ],
            steps: [{ reasoning: "X-ray = imaging.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Imaging.",
          },
        },
        {
          id: "cipup-u3-spect-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "UV radiation can cause:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing" },
              { id: "b", text: "Sunburn and skin cancer" },
              { id: "c", text: "Cooling" },
              { id: "d", text: "Vision only" },
            ],
          correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "UV hazard",
                statement: "Sunburn, cancer.",
              },
            ],
            steps: [{ reasoning: "UV = harmful.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Sunburn/cancer.",
          },
        },
        {
          id: "cipup-u3-spect-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Gamma rays are used for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Radio" },
              { id: "b", text: "Cooking" },
              { id: "c", text: "Cancer treatment and sterilisation" },
              { id: "d", text: "Nothing" },
            ],
          correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Gamma uses",
                statement: "Cancer treatment.",
              },
            ],
            steps: [
              { reasoning: "Gamma = treatment.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Treatment.",
          },
        },
        {
          id: "cipup-u3-spect-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "As frequency increases across spectrum, wavelength:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Decreases" },
              { id: "b", text: "Zero" },
              { id: "c", text: "Stays same" },
              { id: "d", text: "Increases" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "λ=c/f", statement: "f↑ → λ↓." },
            ],
            steps: [{ reasoning: "f↑ → λ↓.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Decreases.",
          },
        },
        {
          id: "cipup-u3-spect-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Infrared radiation is felt as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Heat" },
              { id: "b", text: "Sound" },
              { id: "c", text: "Nothing" },
              { id: "d", text: "Light" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "IR", statement: "Heat." },
            ],
            steps: [{ reasoning: "IR = heat.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Heat.",
          },
        },
        {
          id: "cipup-u3-spect-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Ionising radiation can:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Heal" },
              { id: "b", text: "Cool" },
              { id: "c", text: "Damage cells and DNA" },
              { id: "d", text: "Nothing" },
            ],
          correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ionising",
                statement: "Damages cells.",
              },
            ],
            steps: [
              { reasoning: "Ionising = harmful.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Damages.",
          },
        },
        {
          id: "cipup-u3-spect-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Radio waves have:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Highest f" },
              { id: "b", text: "Lowest frequency and longest wavelength" },
              { id: "c", text: "Shortest λ" },
              { id: "d", text: "No λ" },
            ],
          correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Radio",
                statement: "Lowest f, longest λ.",
              },
            ],
            steps: [
              { reasoning: "Radio = lowest f.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Lowest f.",
          },
        },
        {
          id: "cipup-u3-spect-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Gamma rays have:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lowest f" },
              { id: "b", text: "Highest frequency and shortest wavelength" },
              { id: "c", text: "No λ" },
              { id: "d", text: "Longest λ" },
            ],
          correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gamma",
                statement: "Highest f, shortest λ.",
              },
            ],
            steps: [
              { reasoning: "Gamma = highest f.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Highest f.",
          },
        },
        {
          id: "cipup-u3-spect-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Visible light wavelength range ≈:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1-10 m" },
              { id: "b", text: "1-10 km" },
              { id: "c", text: "10⁻¹⁵ m" },
              { id: "d", text: "400-700 nm" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Visible", statement: "400-700 nm." },
            ],
            steps: [
              { reasoning: "Visible = 400-700 nm.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) 400-700 nm.",
          },
        },
        {
          id: "cipup-u3-spect-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is ionising?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "X-rays and gamma" },
              { id: "b", text: "Visible" },
              { id: "c", text: "Radio" },
              { id: "d", text: "Microwave" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ionising",
                statement: "X-ray, gamma, UV.",
              },
            ],
            steps: [
              { reasoning: "X-ray/gamma ionise.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) X-ray, gamma.",
          },
        },
        {
          id: "cipup-u3-spect-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "E = hf, h =",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3×10⁸" },
              { id: "b", text: "1.6×10⁻¹⁹" },
              { id: "c", text: "6.63 × 10⁻³⁴ J s" },
              { id: "d", text: "9.81" },
            ],
          correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "h", statement: "6.63×10⁻³⁴ J s." },
            ],
            steps: [
              { reasoning: "h = Planck constant.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) 6.63×10⁻³⁴.",
          },
        },
        {
          id: "cipup-u3-spect-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Microwave oven heats food by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water molecules absorbing microwave energy" },
              { id: "b", text: "Conduction only" },
              { id: "c", text: "Burning" },
              { id: "d", text: "No mechanism" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Microwave oven",
                statement: "Water absorption.",
              },
            ],
            steps: [
              {
                reasoning: "Microwaves → water molecules.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Water absorption.",
          },
        },
        {
          id: "cipup-u3-spect-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "Radio telescopes detect:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Visible light" },
              { id: "b", text: "Nothing" },
              { id: "c", text: "Radio waves from space" },
              { id: "d", text: "Sound" },
            ],
          correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Radio telescope",
                statement: "Radio waves.",
              },
            ],
            steps: [
              { reasoning: "Telescope = radio.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Radio waves.",
          },
        },
        {
          id: "cipup-u3-spect-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "Higher frequency EM wave has:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Same energy" },
              { id: "b", text: "No energy" },
              { id: "c", text: "Lower energy" },
              { id: "d", text: "Higher photon energy" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "E=hf", statement: "f↑ → E↑." },
            ],
            steps: [{ reasoning: "f↑ → E↑.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Higher energy.",
          },
        },
        {
          id: "cipup-u3-spect-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "UV is more dangerous than visible because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lower energy" },
              { id: "b", text: "Higher photon energy — ionising" },
              { id: "c", text: "Same" },
              { id: "d", text: "No reason" },
            ],
          correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "UV danger",
                statement: "Higher E → ionising.",
              },
            ],
            steps: [
              { reasoning: "UV E > visible E.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Higher energy.",
          },
        },
        {
          id: "cipup-u3-spect-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between ionising and non-ionising radiation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ionising",
                statement: "Can remove electrons.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ionising: enough E to remove electrons — X-ray, gamma, UV.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Non-ionising: insufficient E — radio, microwave, IR, visible.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Ionising removes electrons; non-ionising doesn't.",
          },
        },
        {
          id: "cipup-u3-spect-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the relationship between frequency and wavelength for EM waves.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "λ=c/f",
                statement: "Inverse relationship.",
              },
            ],
            steps: [
              {
                reasoning: "λ = c/f — inverse relationship.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "c constant = 3×10⁸ m/s.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "λ = c/f — inverse.",
          },
        },
        {
          id: "cipup-u3-spect-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why gamma rays are more dangerous than radio waves.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Radiation danger",
                statement: "Photon energy.",
              },
            ],
            steps: [
              { reasoning: "Gamma f >> radio f.", marks: 1, markCode: "M" },
              {
                reasoning: "E = hf → gamma photons much more energetic.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Can ionise atoms → damage cells/DNA.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Higher f → higher E → ionising.",
          },
        },
        {
          id: "cipup-u3-spect-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate photon energy for f = 1×10¹⁵ Hz (h = 6.63×10⁻³⁴).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "E=hf", statement: "E = hf." }],
            steps: [
              {
                reasoning: "E = hf = 6.63×10⁻³⁴ × 1×10¹⁵.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "E = 6.63×10⁻¹⁹ J.", marks: 1, markCode: "M" },
              {
                reasoning: "In eV: 6.63×10⁻¹⁹/1.6×10⁻¹⁹ ≈ 4.14 eV.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "E ≈ 6.63×10⁻¹⁹ J ≈ 4.14 eV.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "6.63×10⁻¹⁹ J ≈ 4.14 eV.",
          },
        },
        {
          id: "cipup-u3-spect-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "Radio waves are used for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing" },
              { id: "b", text: "Medical imaging" },
              { id: "c", text: "Cooking" },
              { id: "d", text: "Communication" },
            ],
          correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Radio uses",
                statement: "Communication.",
              },
            ],
            steps: [
              { reasoning: "Radio = communication.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Communication.",
          },
        },
        {
          id: "cipup-u3-spect-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the electromagnetic spectrum?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "EM spectrum",
                statement: "All EM waves.",
              },
            ],
            steps: [
              {
                reasoning: "Range of all EM waves by frequency/wavelength.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Radio → microwave → IR → visible → UV → X-ray → gamma.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "All EM waves ordered by frequency.",
          },
        },
        {
          id: "cipup-u3-spect-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why we can't see radio waves.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Visibility",
                statement: "Eye detects visible only.",
              },
            ],
            steps: [
              {
                reasoning: "Eye only detects visible light (400-700 nm).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Radio waves outside visible range.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Different frequencies — not detected by photoreceptors.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Eye only detects visible range.",
          },
        },
        {
          id: "cipup-u3-spect-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Infrared is used in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cooking" },
              { id: "b", text: "Nothing" },
              { id: "c", text: "Thermal imaging and remote controls" },
              { id: "d", text: "Radio" },
            ],
          correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "IR uses",
                statement: "Thermal imaging.",
              },
            ],
            steps: [
              { reasoning: "IR = thermal imaging.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Thermal imaging.",
          },
        },
        {
          id: "cipup-u3-spect-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why are X-rays used in medical imaging?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "X-ray imaging",
                statement: "Penetrates soft tissue.",
              },
            ],
            steps: [
              {
                reasoning: "X-rays penetrate soft tissue but absorbed by bone.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Creates image showing bone structure.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Penetrates tissue, absorbed by bone.",
          },
        },
        {
          id: "cipup-u3-spect-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the photoelectric effect using photon energy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Photoelectric",
                statement: "E=hf threshold.",
              },
            ],
            steps: [
              {
                reasoning: "Light consists of photons with E = hf.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Electron emitted only if photon E > work function.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Higher frequency → more energetic electrons.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Intensity affects number, not energy of electrons.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Photon E > work function → emission.",
          },
        },
        {
          id: "cipup-u3-spect-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "What safety precautions are needed for X-ray and gamma use?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Radiation safety",
                statement: "Limit exposure.",
              },
            ],
            steps: [
              {
                reasoning: "Use shielding (lead, concrete).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Minimise exposure time and distance.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Shielding + minimise exposure.",
          },
        },
      ],
    },
  ],
};
