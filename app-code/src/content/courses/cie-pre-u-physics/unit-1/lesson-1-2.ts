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
              { id: "b", text: "6.3 s" },
              { id: "c", text: "3.1 s" },
              { id: "d", text: "2.0 s" },
            ],
            correctChoiceId: "d",
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
        {
          id: "cipup-u1-wave-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A wave on a string has frequency 250 Hz and wavelength 1.2 m. What is its speed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "300 m/s" },
              { id: "b", text: "520 m/s" },
              { id: "c", text: "480 m/s" },
              { id: "d", text: "208 m/s" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Wave equation",
                statement: "$v = f\\lambda$.",
              },
            ],
            steps: [
              {
                reasoning: "v = fλ = 250 × 1.2 = 300 m/s.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "b",
          },
        },
        {
          id: "cipup-u1-wave-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Sound travels at 340 m/s in air. A tuning fork produces a note of frequency 170 Hz. Calculate the wavelength of the sound.",
          response: {
            type: "numeric",
            parts: [{ label: "Wavelength", answer: 2, unit: "m" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Wave equation",
                statement: "$v = f\\lambda$ → $\\lambda = v/f$.",
              },
            ],
            steps: [
              {
                reasoning: "λ = v/f = 340/170 = 2.0 m.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2.0 m",
          },
        },
        {
          id: "cipup-u1-wave-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A mass of 0.25 kg oscillates on a spring of force constant 40 N/m. Calculate the period of oscillation.",
          response: {
            type: "numeric",
            parts: [{ label: "Period", answer: 0.5, unit: "s", tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Mass–spring period",
                statement: "$T = 2\\pi\\sqrt{m/k}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "T = 2π√(m/k) = 2π√(0.25/40) = 2π√(0.00625).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "T = 2π × 0.0791 ≈ 0.50 s.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "0.50 s",
          },
        },
        {
          id: "cipup-u1-wave-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A body undergoes simple harmonic motion. Its speed is greatest when its displacement is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "half the amplitude" },
              { id: "b", text: "zero" },
              { id: "c", text: "at a negative maximum" },
              { id: "d", text: "at a maximum" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SHM phase relation",
                statement:
                  "$v = -A\\omega\\sin(\\omega t + \\phi)$ — velocity is 90° out of phase with displacement; maximum speed at equilibrium.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Velocity and displacement are 90° out of phase, so speed is greatest as the body passes through equilibrium (x = 0).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "b",
          },
        },
        {
          id: "cipup-u1-wave-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A string of length 1.5 m fixed at both ends vibrates in its fifth harmonic. Calculate the wavelength of the standing wave.",
          response: {
            type: "numeric",
            parts: [{ label: "Wavelength", answer: 0.6, unit: "m" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Standing waves on a string",
                statement: "L = nλ/2 → λ = 2L/n.",
              },
            ],
            steps: [
              {
                reasoning: "λ = 2L/n = 2(1.5)/5 = 0.60 m.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "0.60 m",
          },
        },
        {
          id: "cipup-u1-wave-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "A wave travelling in air enters water in which its speed is lower. Explain, using the wave equation, why the wave changes direction towards the normal.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Refraction",
                statement:
                  "Frequency is fixed by the source; v = fλ means wavelength changes when the speed changes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The frequency is unchanged because the wave is driven by the same source.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Since v = fλ and v decreases, the wavelength must decrease in the water.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Wavefronts slow down first on the side that enters the water first, so the wavefronts pivot and the wave bends towards the normal.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Lower speed → shorter wavelength → wavefronts bend towards the normal.",
          },
        },
        {
          id: "cipup-u1-wave-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Two coherent sources emit waves of equal amplitude. At a point where the waves arrive in antiphase (path difference = λ/2), the resultant amplitude is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "half that of a single wave" },
              { id: "b", text: "twice that of a single wave" },
              { id: "c", text: "zero" },
              { id: "d", text: "equal to that of a single wave" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Superposition",
                statement:
                  "Waves in antiphase cancel — destructive interference gives zero resultant amplitude for equal amplitudes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A path difference of λ/2 puts the waves in antiphase, so equal amplitudes cancel exactly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "b",
          },
        },
        {
          id: "cipup-u1-wave-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "An ambulance travelling away from a stationary observer at 20 m/s emits a siren of frequency 600 Hz. Calculate the frequency heard by the observer (speed of sound = 340 m/s).",
          response: {
            type: "numeric",
            parts: [
              { label: "Frequency", answer: 566.7, unit: "Hz", tolerance: 1 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Doppler effect",
                statement:
                  "Receding source, stationary observer: $f' = f\\frac{v}{v + v_s}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "f′ = f × v/(v + vs) = 600 × 340/(340 + 20) = 600 × 340/360.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "f′ = 204000/360 ≈ 567 Hz (566.7 Hz).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "≈ 567 Hz",
          },
        },
        {
          id: "cipup-u1-wave-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A body in simple harmonic motion has its amplitude doubled. Its total energy becomes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "unchanged" },
              { id: "b", text: "four times as great" },
              { id: "c", text: "twice as great" },
              { id: "d", text: "half as great" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "SHM energy",
                statement: "$E = \\tfrac{1}{2}kA^2$ — energy is proportional to amplitude squared.",
              },
            ],
            steps: [
              {
                reasoning:
                  "E = ½kA², so doubling A multiplies E by 2² = 4.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "c",
          },
        },
        {
          id: "cipup-u1-wave-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A child on a swing is given a small push each time the swing reaches its greatest displacement on the same side. Explain why the amplitude of the swing grows, and why it eventually stops growing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Resonance and damping",
                statement:
                  "Driving at the natural frequency adds energy most efficiently; damping removes energy at a rate that increases with amplitude.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each push does positive work on the swing, adding energy every cycle.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The amplitude grows fastest when the pushing frequency equals the swing's natural frequency (resonance).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Air resistance and friction dissipate energy, and the rate of loss increases as the amplitude grows.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The amplitude levels off when the energy added per cycle equals the energy dissipated per cycle.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Resonant driving adds energy; damping losses balance input at a steady amplitude.",
          },
        },
        {
          id: "cipup-u1-wave-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two identical waves travel along a string in opposite directions. Explain how a stationary wave is produced, and describe what is observed at a node and at an antinode.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stationary waves",
                statement:
                  "Two identical waves travelling in opposite directions superpose to give fixed points of zero and maximum displacement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Where the two waves meet they superpose; at certain fixed positions they are always in antiphase.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "At a node the displacements always cancel — the point on the string remains at rest.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "At an antinode the waves are always in phase — the displacement is maximum, twice the amplitude of one wave.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Superposition of counter-propagating waves; nodes at rest, antinodes of maximum displacement.",
          },
        },
        {
          id: "cipup-u1-wave-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A simple pendulum has a period of 2.0 s. Calculate its length (g = 9.81 m/s²).",
          response: {
            type: "numeric",
            parts: [{ label: "Length", answer: 0.99, unit: "m", tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Pendulum",
                statement: "$T = 2\\pi\\sqrt{L/g}$ → $L = gT^2/4\\pi^2$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "L = gT²/(4π²) = 9.81 × (2.0)²/(4π²) = 39.24/39.48.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "L ≈ 0.99 m.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "≈ 0.99 m",
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
