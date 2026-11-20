import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "cipup-u1-lesson-1-2",
  code: "1-2",
  title: "Oscillations, Waves and Sound",
  goal: "I CAN describe SHM, analyse wave behaviour and apply the wave equation at Pre-U standard.",
  standards: ["Cambridge Pre-U Physics 9792", "Waves and oscillations"],
  vocabulary: [
    {
      term: "Simple harmonic motion",
      definition:
        "Acceleration proportional to displacement and opposite in direction: a = −ω²x; x = A sin(ωt + φ).",
    },
    {
      term: "Period and frequency",
      definition:
        "Period T = 2π/ω = 1/f; pendulum T = 2π√(L/g); mass–spring T = 2π√(m/k).",
    },
    {
      term: "Transverse wave",
      definition:
        "Oscillations perpendicular to propagation — e.g. light, waves on strings.",
    },
    {
      term: "Longitudinal wave",
      definition:
        "Oscillations parallel to propagation — e.g. sound, ultrasound.",
    },
    {
      term: "Wave speed",
      definition:
        "v = fλ for all waves; in a medium v is fixed by the medium, f is set by the source.",
    },
    {
      term: "Doppler effect",
      definition:
        "Observed frequency shifts when source/observer move — higher approaching, lower receding.",
    },
  ],
  concepts: [
    {
      id: "cipup-u1-s1-waves",
      title: "Oscillations and wave phenomena",
      skill:
        "Apply SHM equations, calculate wave parameters and explain wave behaviours.",
      lesson: {
        sections: [
          {
            heading: "Simple harmonic motion",
            body: "SHM occurs when restoring force is proportional to displacement: F = −kx, giving a = −(k/m)x = −ω²x with ω² = k/m. Solutions: displacement x = A cos(ωt + φ), velocity v = −Aω sin(ωt + φ), acceleration a = −Aω² cos(ωt + φ). Energy oscillates between kinetic (max at equilibrium) and potential (max at extremes); total E = ½kA². Pendulum: T = 2π√(L/g) — independent of mass and (for small angles) amplitude. Mass–spring: T = 2π√(m/k). Damped oscillations lose energy; driven oscillations reach resonance when driving frequency = natural frequency.",
          },
          {
            heading: "Wave properties",
            body: "All waves satisfy v = fλ. Wavefronts are perpendicular to propagation; rays are perpendicular to wavefronts. **Reflection**: angle in = angle out. **Refraction**: wave slows entering denser medium — bends toward normal; frequency unchanged, wavelength and speed change. **Diffraction**: significant when gap/obstacle ≈ wavelength. **Superposition**: waves add — interference produces constructive (in phase, amplitude adds) and destructive (antiphase, cancel) regions; stationary waves form from two identical waves travelling opposite directions with nodes (no displacement) and antinodes (max displacement). Standing wave on string: L = nλ/2.",
          },
          {
            heading: "Sound and the Doppler effect",
            body: "Sound is a longitudinal pressure wave needing a medium — cannot travel in vacuum. Speed depends on medium: faster in solids (elastic, dense), slower in gases; increases with temperature. Loudness ∝ amplitude² (intensity ∝ amplitude²); pitch = frequency. **Doppler effect**: moving source compresses wavefronts ahead → higher observed frequency; formula f′ = f × (v ± v₀)/(v ∓ vₛ) with signs depending on approach/recede. Applications: radar speed measurement, ultrasound blood-flow imaging, redshift of galaxies.",
          },
        ],
        keyFormulas: [
          {
            name: "SHM",
            statement:
              "$x = A\\cos(\\omega t + \\phi)$; $\\omega = 2\\pi f = \\sqrt{k/m}$",
          },
          {
            name: "Wave equation",
            statement: "$v = f\\lambda$",
          },
          {
            name: "Pendulum",
            statement: "$T = 2\\pi\\sqrt{L/g}$",
          },
        ],
        workedExample: {
          problem:
            "A wave has frequency 500 Hz and wavelength 0.68 m. Find its speed.",
          solution: "v = fλ = 500 × 0.68 = 340 m/s.",
        },
      },
      questions: [
        {
          id: "cipup-u1-wave-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A pendulum of length 1.0 m has period approximately:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1.0 s" },
              { id: "b", text: "2.0 s" },
              { id: "c", text: "3.1 s" },
              { id: "d", text: "6.3 s" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Pendulum period",
                statement:
                  "$T = 2\\pi\\sqrt{L/g} = 2\\pi\\sqrt{1/9.81} \\approx 2.0$ s.",
              },
            ],
            steps: [
              { reasoning: "T ≈ 2π√(0.102) ≈ 2.0 s.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "b",
          },
        },
        {
          id: "cipup-u1-wave-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Light travels from air into glass (refractive index 1.5) at 3.0 × 10⁸ m/s. Calculate its speed in the glass.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Refractive index",
                statement: "$n = c/v$ → $v = c/n$.",
              },
            ],
            steps: [
              {
                reasoning: "v = c/n = 3.0 × 10⁸/1.5.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "v = 2.0 × 10⁸ m/s.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2.0 × 10⁸ m/s",
          },
        },
        {
          id: "cipup-u1-wave-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A string fixed at both ends vibrates in its third harmonic. The string is 1.2 m long. Calculate the wavelength.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Standing waves",
                statement: "L = nλ/2 → third harmonic n = 3 → λ = 2L/3.",
              },
            ],
            steps: [
              {
                reasoning: "Fundamental n=1, second n=2, third n=3.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "λ = 2L/n = 2(1.2)/3 = 0.8 m.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Third harmonic has 3 antinodes and 4 nodes including ends.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "0.80 m",
          },
        },
        {
          id: "cipup-u1-wave-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An ambulance siren emits 700 Hz. The ambulance approaches a stationary observer at 30 m/s in air (v = 340 m/s). Calculate the observed frequency.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Doppler effect",
                statement: "Approaching source: $f' = f\\frac{v}{v - v_s}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Source approaching, observer stationary: f′ = f × v/(v − vs).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "f′ = 700 × 340/(340 − 30) = 700 × 340/310.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "f′ = 700 × 1.097 ≈ 768 Hz.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Frequency increases because wavefronts compress ahead of the moving source.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "≈ 768 Hz",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipup-u1-waves-notes",
      title: "Oscillations and waves — revision notes",
      summary: "SHM, wave equation, interference, Doppler effect.",
      sections: [
        {
          heading: "Key skills",
          body: "For SHM questions, identify whether you're asked for displacement, velocity or acceleration — each is 90° out of phase. For waves, draw wavefronts when unsure.",
        },
        {
          heading: "Exam tips",
          body: "Stationary wave harmonic numbers: nth harmonic has n antinodes. Doppler: frequency increases approaching, decreases receding — always state the sign convention used.",
        },
      ],
    },
  ],
};
