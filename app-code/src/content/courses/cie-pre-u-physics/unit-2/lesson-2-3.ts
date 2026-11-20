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
              { id: "a", text: "It runs faster" },
              { id: "b", text: "It runs slower" },
              { id: "c", text: "It runs at the same rate" },
              { id: "d", text: "It stops completely" },
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
