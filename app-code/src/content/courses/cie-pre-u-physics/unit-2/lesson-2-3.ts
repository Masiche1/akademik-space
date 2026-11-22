import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "cipup-u2-lesson-2-3",
  code: "2-3",
  title: "Relativity, Astrophysics and Applications",
  goal: "I CAN apply special relativity, describe stellar evolution and analyse modern physics applications at Pre-U standard.",
  standards: ["Cambridge Pre-U Physics 9792", "Modern physics"],
  vocabulary: [
    {
      term: "Special relativity",
      definition:
        "Einstein's theory: laws of physics same in all inertial frames; c is constant speed limit.",
    },
    {
      term: "Time dilation",
      definition:
        "Moving clocks run slow: Δt = γΔt₀ where γ = 1/√(1−v²/c²) — proper time is shortest.",
    },
    {
      term: "Length contraction",
      definition:
        "Moving objects shorten along motion: L = L₀/γ — transverse dimensions unchanged.",
    },
    {
      term: "Relativistic mass-energy",
      definition:
        "E = γmc² — total energy includes rest energy mc² plus kinetic; mass increases with speed.",
    },
    {
      term: "Stellar evolution",
      definition:
        "Stars evolve based on mass: main sequence → red giant → white dwarf/neutron star/black hole.",
    },
    {
      term: "Hertzsprung–Russell diagram",
      definition:
        "Plots luminosity vs temperature — reveals stellar classes, main sequence, giants, white dwarfs.",
    },
  ],
  concepts: [
    {
      id: "cipup-u2-s1-modern",
      title: "Relativity and astrophysics",
      skill:
        "Apply relativistic equations, describe stellar processes and explain modern applications.",
      lesson: {
        sections: [
          {
            heading: "Special relativity",
            body: "Postulates: (1) physical laws identical in all inertial frames; (2) speed of light c is constant for all observers. Consequences: **time dilation** — Δt = γΔt₀ (moving clocks tick slower; twin paradox resolves via acceleration/non-inertial frames); **length contraction** — L = L₀/γ only along direction of motion; **relativity of simultaneity** — events simultaneous in one frame may not be in another; **mass–energy equivalence** — E = mc², total relativistic energy E = γmc², momentum p = γmv. As v→c, γ→∞ making acceleration to c impossible. Applications: GPS satellite corrections, particle accelerators, muon decay extended lifetime.",
          },
          {
            heading: "Stellar structure and evolution",
            body: "Stars form from collapsing gas clouds (nebulae) — gravity compresses until fusion ignites (main sequence). Energy from fusion balances gravity. Low-mass stars (<8 M☉): main sequence → red giant → planetary nebula → white dwarf (electron degeneracy pressure resists collapse). High-mass stars (>8 M☉): → supergiant → supernova → neutron star (neutron degeneracy) or black hole (>3 M☉ remnant, escape velocity > c). HR diagram: main sequence diagonal (hot-luminous to cool-dim), giants upper right (cool-luminous), white dwarfs lower left (hot-dim). Sun: G2V, ~10 billion year main sequence lifetime, will become red giant then white dwarf.",
          },
          {
            heading: "Cosmology and modern applications",
            body: "Big Bang evidence: cosmic microwave background (2.7 K blackbody radiation), redshift of galaxies (Hubble's law v = H₀d, H₀ ≈ 70 km/s/Mpc), abundance of light elements. Redshift z = Δλ/λ — larger z = faster recession. Dark matter inferred from galactic rotation curves; dark energy from accelerating expansion (1998 supernova observations). Modern physics applications: semiconductors (band theory, doping n/p types), lasers (stimulated emission, population inversion), superconductors (zero resistance below Tc, Meissner effect, magnetic levitation), medical imaging (MRI uses nuclear magnetic resonance), particle detectors (cloud chambers, bubble chambers, silicon trackers).",
          },
        ],
        keyFormulas: [
          {
            name: "Lorentz factor",
            statement: "$\\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}}$",
          },
          {
            name: "Time dilation",
            statement: "$\\Delta t = \\gamma \\Delta t_0$; $L = L_0/\\gamma$",
          },
          {
            name: "Mass–energy",
            statement: "$E = mc^2$; relativistic $E = \\gamma mc^2$",
          },
        ],
        workedExample: {
          problem: "Calculate γ for a particle moving at 0.6c.",
          solution: "γ = 1/√(1 − 0.36) = 1/√0.64 = 1/0.8 = 1.25.",
        },
      },
      questions: [
        {
          id: "cipup-u2-modern-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What happens to a moving clock compared to a stationary clock?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It stops completely" },
              { id: "b", text: "It runs slower" },
              { id: "c", text: "It runs at the same rate" },
              { id: "d", text: "It runs faster" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Time dilation",
                statement:
                  "$\\Delta t = \\gamma\\Delta t_0$ — moving clock (proper time Δt₀) appears to run slow to stationary observer.",
              },
            ],
            steps: [
              {
                reasoning:
                  "γ > 1 for any v > 0 → Δt > Δt₀ → moving clock ticks slower.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "b",
          },
        },
        {
          id: "cipup-u2-modern-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A spacecraft travels at 0.8c for 10 years (ship time). Calculate the time elapsed on Earth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Time dilation",
                statement:
                  "$\\gamma = 1/\\sqrt{1-v^2/c^2}$; $\\Delta t = \\gamma \\Delta t_0$.",
              },
            ],
            steps: [
              {
                reasoning: "γ = 1/√(1 − 0.64) = 1/√0.36 = 1/0.6 = 1.667.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Earth time = γ × ship time = 1.667 × 10 = 16.7 years.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "16.7 years",
          },
        },
        {
          id: "cipup-u2-modern-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "On the HR diagram, where are: (a) the Sun; (b) red giants; (c) white dwarfs?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "HR diagram",
                statement:
                  "Luminosity vs temperature — main sequence diagonal, giants upper right, white dwarfs lower left.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Sun: middle of main sequence — medium temperature, medium luminosity (G2V).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Red giants: upper right — cool (red) but very luminous due to huge size.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) White dwarfs: lower left — hot (blue-white) but very dim due to small size.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Main sequence, upper right, lower left respectively.",
          },
        },
        {
          id: "cipup-u2-modern-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate the rest energy of a 1.0 g mass using E = mc².",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Mass–energy equivalence",
                statement: "$E = mc^2$; $c = 3.0 \\times 10^8$ m/s.",
              },
            ],
            steps: [
              {
                reasoning: "m = 1.0 g = 0.001 kg.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "E = 0.001 × (3.0 × 10⁸)² = 0.001 × 9.0 × 10¹⁶ = 9.0 × 10¹³ J.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "In MeV: 9.0 × 10¹³ J / 1.6 × 10⁻¹³ J/MeV = 5.6 × 10²⁶ MeV.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Small mass contains enormous energy — basis of nuclear power and E = mc².",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "9.0 × 10¹³ J",
          },
        },
        {
          id: "cipup-u2-modern-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the value of the Lorentz factor $\\gamma$ for an object at rest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0$" },
              { id: "b", text: "$\\infty$" },
              { id: "c", text: "$c$" },
              { id: "d", text: "$1$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Lorentz factor",
                statement:
                  "$\\gamma = 1/\\sqrt{1 - v^2/c^2}$; at $v = 0$, $\\gamma = 1$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "With $v = 0$: $\\gamma = 1/\\sqrt{1 - 0} = 1$ — no relativistic effects at rest.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "b",
          },
        },
        {
          id: "cipup-u2-modern-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate $\\gamma$ for a particle moving at $0.8c$.",
          response: {
            type: "numeric",
            parts: [{ label: "Lorentz factor", answer: 1.667, tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Lorentz factor",
                statement: "$\\gamma = 1/\\sqrt{1 - v^2/c^2}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\gamma = 1/\\sqrt{1 - 0.64} = 1/\\sqrt{0.36} = 1/0.6$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\gamma = 1.667$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1.67",
          },
        },
        {
          id: "cipup-u2-modern-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "A meter stick moves past an observer at 0.6c parallel to its length. Calculate its observed length.",
          response: {
            type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Length contraction",
                statement: "$L = L_0/\\gamma$ along the direction of motion only.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\gamma = 1/\\sqrt{1 - 0.36} = 1/0.8 = 1.25$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$L = L_0/\\gamma = 1.0/1.25$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$L = 0.80$ m — the stick appears shortened by 20%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "0.80 m",
          },
        },
        {
          id: "cipup-u2-modern-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which time interval is called the 'proper time' $\\Delta t_0$ in time dilation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The time measured by the moving clock itself" },
              { id: "b", text: "The time measured by the stationary observer" },
              { id: "c", text: "The longest possible time interval" },
              { id: "d", text: "The time at which events are simultaneous" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Proper time",
                statement:
                  "$\\Delta t_0$ is measured in the frame where the events occur at the same position — the shortest interval.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Proper time is the interval measured by a clock present at both events; it is always the shortest.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a",
          },
        },
        {
          id: "cipup-u2-modern-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A spacecraft of proper length 100 m travels at 0.6c. Calculate its length as measured by a stationary observer.",
          response: {
            type: "numeric",
            parts: [{ label: "Observed length", answer: 80, tolerance: 0.5, unit: "m" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Length contraction",
                statement: "$L = L_0/\\gamma$; $\\gamma(0.6c) = 1.25$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$L = 100/1.25$ m.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$L = 80$ m.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "80 m",
          },
        },
        {
          id: "cipup-u2-modern-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the evolution of a low-mass star like the Sun from formation to its final state.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stellar evolution",
                statement:
                  "Low-mass stars (< 8 M☉): nebula → main sequence → red giant → planetary nebula → white dwarf.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A gas cloud collapses under gravity until hydrogen fusion ignites — the star enters the main sequence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "When core hydrogen is exhausted, the core contracts and outer layers expand and cool — the star becomes a red giant.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Outer layers are shed as a planetary nebula; the remaining core is supported by electron degeneracy pressure as a white dwarf.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Nebula → main sequence → red giant → planetary nebula → white dwarf.",
          },
        },
        {
          id: "cipup-u2-modern-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "What determines whether a massive star's core becomes a neutron star or a black hole after a supernova?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Its surface temperature" },
              { id: "b", text: "The colour of the star" },
              { id: "c", text: "The mass of the remaining core" },
              { id: "d", text: "Its distance from Earth" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stellar remnants",
                statement:
                  "Remnant below ~3 M☉ → neutron star; above ~3 M☉ → black hole (escape velocity exceeds $c$).",
              },
            ],
            steps: [
              {
                reasoning:
                  "The remnant's mass decides whether neutron degeneracy pressure can halt collapse; too much mass → black hole.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "b",
          },
        },
        {
          id: "cipup-u2-modern-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A galaxy is 20 Mpc away. Using Hubble's law with $H_0 = 70$ km s⁻¹ Mpc⁻¹, calculate its recession velocity.",
          response: {
            type: "numeric",
            parts: [{ label: "Recession velocity", answer: 1400, tolerance: 1, unit: "km/s" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Hubble's law",
                statement: "$v = H_0 d$.",
              },
            ],
            steps: [
              {
                reasoning: "$v = 70 \\times 20$ km/s.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$v = 1400$ km/s.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1400 km/s",
          },
        },
        {
          id: "cipup-u2-modern-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why GPS satellite clocks must be corrected for both special and general relativistic effects, and state the direction of each correction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Relativistic time dilation",
                statement:
                  "Moving clocks run slow (special relativity); clocks in weaker gravitational fields run fast (general relativity).",
              },
            ],
            steps: [
              {
                reasoning:
                  "Satellites orbit at high speed → special relativistic time dilation makes their clocks run slow relative to Earth.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Satellites are farther from Earth's gravitational well → general relativistic effect makes their clocks run fast.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The gravitational (general relativistic) effect is larger, so net effect is satellite clocks gaining ~38 μs per day.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Uncorrected, position errors would accumulate ~10 km/day, so corrections are essential for navigation accuracy.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Speed slows satellite clocks; weaker gravity speeds them up — net gain corrected daily.",
          },
        },
        {
          id: "cipup-u2-modern-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A galaxy's spectral lines are shifted to longer wavelengths. What does this 'redshift' indicate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The galaxy is moving toward us" },
              { id: "b", text: "The galaxy contains little hydrogen" },
              { id: "c", text: "The galaxy is moving away from us" },
              { id: "d", text: "The galaxy is very hot" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Doppler redshift",
                statement:
                  "Receding sources shift spectral lines to longer (redder) wavelengths; $z = \\Delta\\lambda/\\lambda$ grows with recession speed.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Longer observed wavelengths mean the source is receding — the Doppler effect.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "b",
          },
        },
        {
          id: "cipup-u2-modern-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate the total relativistic energy of an electron ($m = 9.1 \\times 10^{-31}$ kg) moving at 0.6c. ($c = 3.0 \\times 10^8$ m/s)",
          response: {
            type: "numeric",
            parts: [{ label: "Total energy", answer: 1.02e-13, tolerance: 2e-15, unit: "J" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Relativistic energy",
                statement: "$E = \\gamma mc^2$; $\\gamma(0.6c) = 1.25$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Rest energy: $mc^2 = 9.1 \\times 10^{-31} \\times 9.0 \\times 10^{16} = 8.19 \\times 10^{-14}$ J.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$E = \\gamma mc^2 = 1.25 \\times 8.19 \\times 10^{-14}$ J.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Kinetic energy = $(\\gamma - 1)mc^2 = 0.25 \\times 8.19 \\times 10^{-14} = 2.05 \\times 10^{-14}$ J.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$E_{total} \\approx 1.02 \\times 10^{-13}$ J.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "≈ 1.02 × 10⁻¹³ J",
          },
        },
        {
          id: "cipup-u2-modern-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how doping a silicon crystal with phosphorus and boron creates n-type and p-type semiconductors, and how their junction forms a diode.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Band theory and doping",
                statement:
                  "Doping adds extra electrons (n-type) or holes (p-type); their junction creates a depletion region that rectifies current.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Phosphorus has 5 valence electrons — one extra donated to the conduction band, giving an n-type semiconductor with free electrons.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Boron has 3 valence electrons — it accepts an electron leaving a mobile hole, giving a p-type semiconductor.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "At the p–n junction electrons diffuse to the p-side and holes to the n-side, creating a depletion region and a potential barrier.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Forward bias reduces the barrier (current flows); reverse bias widens it (negligible current) — the basis of a diode/rectifier.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Doping creates n- and p-types; junction depletion region rectifies current.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipup-u2-modern-notes",
      title: "Relativity and astrophysics — revision notes",
      summary: "Special relativity, stellar evolution, cosmology.",
      sections: [
        {
          heading: "Key skills",
          body: "For relativity problems, always calculate γ first — most formulas need it. For stellar evolution, remember mass determines fate: low mass → white dwarf, high mass → neutron star or black hole.",
        },
        {
          heading: "Exam tips",
          body: "Time dilation: the proper time (Δt₀) is measured in the frame where events occur at same place — usually the moving object's own clock.",
        },
      ],
    },
  ],
};
