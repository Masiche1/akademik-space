import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "edialphys-u5-lesson-5-2",
  code: "5-2",
  title: "Oscillations and Nuclear Decay",
  goal: "I CAN analyse simple harmonic motion and resonance, and use half-life and activity to describe radioactive decay.",
  standards: [
    "WPH15 Thermodynamics, Radiation, Oscillations and Cosmology",
    "Oscillations",
    "Nuclear decay",
  ],
  vocabulary: [
    {
      term: "Simple harmonic motion",
      definition:
        "Motion where acceleration is proportional to displacement and directed toward equilibrium.",
    },
    {
      term: "Natural frequency",
      definition: "Frequency at which a system oscillates freely.",
    },
    {
      term: "Resonance",
      definition:
        "Maximum amplitude of forced oscillation when driving frequency equals natural frequency.",
    },
    {
      term: "Half-life",
      definition: "Time for half the undecayed nuclei in a sample to decay.",
    },
    {
      term: "Activity",
      definition:
        "Rate of radioactive decays per second, measured in becquerels.",
    },
  ],
  concepts: [
    {
      id: "edialphys-u5-oscillation",
      title: "Oscillations",
      skill:
        "Describe simple harmonic motion, forced oscillations and resonance, and apply SHM energy ideas.",
      lesson: {
        sections: [
          {
            heading: "Simple harmonic motion",
            body: "In SHM acceleration is proportional to displacement and directed toward equilibrium: a = −ω²x. For a mass on a spring T = 2π√(m/k) and ω = √(k/m). A pendulum has T = 2π√(L/g) for small angles. Displacement, velocity and acceleration vary sinusoidally with time; maximum speed occurs at equilibrium and maximum acceleration at maximum displacement.",
          },
          {
            heading: "Energy in SHM",
            body: "The total energy of an SHM oscillator is constant. At maximum displacement all the energy is elastic potential energy; at equilibrium all of it is kinetic energy. Energy is continually exchanged between KE and PE twice per cycle. Light damping slowly reduces amplitude; heavy damping stops oscillation quickly.",
          },
          {
            heading: "Forced oscillations and resonance",
            body: "A driven oscillator reaches maximum amplitude when the driving frequency equals its natural frequency — resonance. Damping reduces amplitude; light damping gives a sharp resonance peak, heavy damping broadens it. Resonance is useful in musical instruments and radio tuning but can damage structures such as bridges.",
          },
        ],
        keyFormulas: [
          { name: "SHM period (spring)", statement: "T = 2π√(m/k)" },
          { name: "SHM period (pendulum)", statement: "T = 2π√(L/g)" },
          { name: "Angular frequency", statement: "ω = √(k/m) = 2πf" },
        ],
        workedExample: {
          problem:
            "A 0.20 kg mass on a spring of constant 8.0 N/m oscillates. Calculate the period.",
          solution: "T = 2π√(m/k) = 2π√(0.20/8.0) = 2π × 0.158 = 0.99 s.",
        },
      },
      questions: [
        {
          id: "edialphys-u5-oscillation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In simple harmonic motion, acceleration is always proportional to which quantity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Velocity" },
              { id: "b", text: "Displacement from equilibrium" },
              { id: "c", text: "Time squared" },
              { id: "d", text: "Amplitude squared" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "SHM", statement: "a = −ω²x." },
            ],
            steps: [
              {
                reasoning:
                  "Acceleration is proportional to displacement and opposite in direction.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Displacement",
            commonErrors: ["Saying acceleration is proportional to velocity."],
          },
        },
        {
          id: "edialphys-u5-oscillation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate the period of a 0.50 kg mass oscillating on a spring of constant 20 N/m.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 0.993, tolerance: 0.01, unit: "s" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "SHM period",
                statement: "T = 2π√(m/k).",
              },
            ],
            steps: [
              {
                reasoning: "Substitute: T = 2π√(0.50/20).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "m/k = 0.025, √0.025 = 0.158.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "T = 2π × 0.158 = 0.993 s.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "0.993 s",
            commonErrors: ["Using T = 2π√(k/m) instead of m/k."],
          },
        },
        {
          id: "edialphys-u5-oscillation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain what is meant by resonance and describe one beneficial and one harmful effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Resonance",
                statement: "Maximum amplitude at natural frequency.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Resonance occurs when driving frequency equals natural frequency.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Amplitude reaches a maximum.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Beneficial example: musical instrument or radio tuning uses resonance.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Harmful example: bridge or building oscillation can cause damage.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Resonance at natural frequency; useful in instruments, harmful in structures",
            commonErrors: ["Describing resonance as minimum amplitude."],
          },
        },
        {
          id: "edialphys-u5-oscillation-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A simple pendulum of length 0.80 m swings with small amplitude in a place where g = 9.81 m/s².",
          parts: [
            {
              label: "a",
              prompt: "Calculate the period of the pendulum.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Describe the energy transfers during one complete swing.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Explain how damping affects the oscillation and how resonance could be produced.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "SHM",
                statement: "T = 2π√(L/g); energy exchanges between KE and PE.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "T = 2π√(L/g) = 2π√(0.80/9.81).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "0.80/9.81 = 0.0816, √0.0816 = 0.286.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "T = 2π × 0.286 = 1.79 s ≈ 1.8 s.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "At maximum displacement all energy is gravitational PE.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "At equilibrium all energy is kinetic — maximum speed.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "KE and PE interchange twice per cycle; total energy constant (no damping).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "KE is zero instantaneously at the turning points.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Damping transfers energy to surroundings, so amplitude decreases over time.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Resonance occurs when a periodic driving force matches the natural frequency.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Light damping gives a sharp large-amplitude response; heavy damping reduces it.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "T ≈ 1.8 s; KE ↔ PE exchange; damping reduces amplitude, resonance at natural frequency",
            commonErrors: ["Saying KE is maximum at maximum displacement."],
          },
        },
      ],
    },
    {
      id: "edialphys-u5-nuclear",
      title: "Radioactive decay",
      skill:
        "Describe alpha, beta and gamma decay, and use half-life, decay constant and activity.",
      lesson: {
        sections: [
          {
            heading: "Types of decay",
            body: "Alpha decay emits a helium nucleus (²He, charge +2e): the mass number falls by 4 and the atomic number by 2, e.g. ²³⁸U → ²³⁴Th + ⁴He. Beta-minus decay converts a neutron into a proton, emitting an electron and an electron antineutrino: n → p + e⁻ + ν̄ₑ. Gamma decay emits a high-energy photon when a nucleus drops to a lower energy state; it changes neither mass nor atomic number.",
          },
          {
            heading: "Half-life and activity",
            body: "The half-life T½ is the time for half the undecayed nuclei to decay — it is constant for each nuclide. The number remaining follows N = N₀(½)^(t/T½). Activity A = λN where λ = ln2/T½ is the decay constant and N is the number of undecayed nuclei. Activity is measured in becquerels (1 Bq = 1 decay per second) and falls as the sample decays.",
          },
          {
            heading: "Uses of radioactivity",
            body: "Carbon-14 dating measures the age of organic material from its remaining ¹⁴C fraction. Medical tracers use gamma emitters to image organs, and radiotherapy uses controlled doses to destroy cancer cells. Safety depends on shielding (alpha stopped by skin or paper, beta by thin metal, gamma by thick lead or concrete) and on limiting exposure time and distance.",
          },
        ],
        keyFormulas: [
          { name: "Decay constant", statement: "λ = ln2 / T½" },
          { name: "Activity", statement: "A = λN" },
          { name: "Undecayed nuclei", statement: "N = N₀(½)^(t/T½)" },
        ],
        workedExample: {
          problem:
            "A sample has an initial activity of 800 Bq and half-life 10 days. Find its activity after 30 days.",
          solution:
            "30 days = 3 half-lives, so activity falls by (½)³ = 1/8: A = 800/8 = 100 Bq.",
        },
      },
      questions: [
        {
          id: "edialphys-u5-nuclear-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which type of nuclear radiation is the most penetrating?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Alpha" },
              { id: "b", text: "Beta" },
              { id: "c", text: "Gamma" },
              { id: "d", text: "All equally penetrating" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Gamma",
                statement: "High-energy photon; most penetrating.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Gamma rays are electromagnetic photons and penetrate furthest.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Gamma",
            commonErrors: [
              "Thinking alpha is most penetrating because it is heaviest.",
            ],
          },
        },
        {
          id: "edialphys-u5-nuclear-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A radioactive source has an activity of 800 Bq and a half-life of 10 days. Calculate its activity after 30 days.",
          response: {
            type: "numeric",
            parts: [
              { label: "Activity", answer: 100, tolerance: 0.5, unit: "Bq" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Half-life",
                statement: "N ∝ (½)^(t/T½).",
              },
            ],
            steps: [
              {
                reasoning: "Number of half-lives = 30/10 = 3.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Activity falls by the same factor as N: ×(½)³ = 1/8.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "A = 800/8 = 100 Bq.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "100 Bq",
            commonErrors: ["Halving once instead of three times."],
          },
        },
        {
          id: "edialphys-u5-nuclear-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the half-life of a radioactive nuclide is constant even though the activity decreases with time.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Half-life",
                statement: "T½ is a property of the nuclide; decay is random.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each undecayed nucleus has the same probability of decaying per unit time.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Half-life is the time for half to decay — this fraction is constant for the nuclide.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "As nuclei decay, fewer remain, so fewer decays occur per second: activity A = λN falls.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Decay cannot be speeded up or slowed down by heating, cooling or chemical change.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Half-life is intrinsic; activity falls because fewer nuclei remain",
            commonErrors: [
              "Saying the half-life gets longer as the sample ages.",
            ],
          },
        },
        {
          id: "edialphys-u5-nuclear-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Carbon-14 (¹⁴C) has a half-life of 5700 years and decays by beta-minus emission to nitrogen-14.",
          parts: [
            {
              label: "a",
              prompt:
                "Write down the nuclear equation for the beta-minus decay of ¹⁴C.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "A sample initially contains 8.0 × 10²³ undecayed ¹⁴C nuclei. Calculate how many remain after 11 400 years.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Describe one medical and one archaeological use of radioactive isotopes.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Beta decay",
                statement:
                  "n → p + e⁻ + ν̄ₑ; mass number unchanged, atomic number +1.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Beta-minus: a neutron becomes a proton, emitting an electron.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Mass number stays 14; atomic number rises from 6 to 7.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "¹⁴C → ¹⁴N + e⁻ + ν̄ₑ (antineutrino may be omitted at this level).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "11 400/5700 = 2 half-lives.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "After 2 half-lives the fraction remaining is (½)² = 1/4.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "N = 8.0 × 10²³/4.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "N = 2.0 × 10²³ nuclei.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Medical: gamma tracers image organs or radiotherapy destroys cancer cells.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Archaeological: ¹⁴C dating estimates the age of organic remains.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Both rely on known half-lives to infer time elapsed.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "¹⁴C → ¹⁴N + e⁻ + ν̄ₑ; 2.0 × 10²³ nuclei; tracers/therapy and ¹⁴C dating",
            commonErrors: ["Writing an alpha decay equation for ¹⁴C."],
          },
        },
      ],
    },
  ],
};
