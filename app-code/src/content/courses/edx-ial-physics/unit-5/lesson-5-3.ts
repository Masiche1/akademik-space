import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "edialphys-u5-lesson-5-3",
  code: "5-3",
  title: "Astrophysics and Cosmology",
  goal: "I CAN use redshift and Hubble's law to describe the expanding Universe, and describe stellar properties and evolution.",
  standards: [
    "WPH15 Thermodynamics, Radiation, Oscillations and Cosmology",
    "Astrophysics and cosmology",
  ],
  vocabulary: [
    {
      term: "Redshift",
      definition: "Increase in wavelength of light from a receding source.",
    },
    {
      term: "Hubble's law",
      definition:
        "Recession velocity of a galaxy is proportional to its distance: v = H₀d.",
    },
    {
      term: "Cosmic microwave background",
      definition:
        "Remnant thermal radiation from the early Universe, arriving from all directions.",
    },
    {
      term: "Luminosity",
      definition: "Total power radiated by a star, measured in watts.",
    },
    {
      term: "Apparent brightness",
      definition:
        "Power received per unit area at the observer, measured in W/m².",
    },
  ],
  concepts: [
    {
      id: "edialphys-u5-cosmology",
      title: "Cosmology",
      skill:
        "Use redshift and Hubble's law to describe the expanding Universe and the cosmic microwave background.",
      lesson: {
        sections: [
          {
            heading: "The expanding Universe",
            body: "Spectral lines from distant galaxies are shifted to longer wavelengths (redshift). z = Δλ/λ ≈ v/c for speeds small compared with light. Hubble's law v = H₀d shows recession velocity proportional to distance, evidence that space itself is expanding — more distant galaxies recede faster.",
          },
          {
            heading: "The cosmic microwave background",
            body: "The cosmic microwave background radiation (CMBR) is microwave radiation arriving uniformly from all directions. It is redshifted thermal radiation emitted about 380 000 years after the Big Bang, when atoms first formed and the Universe became transparent. Its near-perfect uniformity, with tiny fluctuations, strongly supports the Big Bang model and seeded galaxy formation.",
          },
          {
            heading: "Evidence for the Big Bang",
            body: "Three main lines of evidence: the expansion of the Universe (redshift and Hubble's law), the CMBR, and the observed abundance of light elements such as hydrogen and helium formed in the early Universe.",
          },
        ],
        keyFormulas: [
          { name: "Redshift", statement: "z = Δλ/λ" },
          { name: "Hubble's law", statement: "v = H₀d" },
          { name: "Recession speed (low z)", statement: "v ≈ zc" },
        ],
        workedExample: {
          problem:
            "A spectral line normally at 656 nm is observed at 658 nm. Calculate the redshift.",
          solution: "Δλ = 2 nm, so z = Δλ/λ = 2/656 ≈ 0.00305.",
        },
      },
      questions: [
        {
          id: "edialphys-u5-cosmology-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Light from a distant galaxy is observed at longer wavelengths than in the laboratory. This is called:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Scattering" },
              { id: "b", text: "Redshift" },
              { id: "c", text: "Doppler broadening" },
              { id: "d", text: "Blueshift" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Redshift",
                statement:
                  "Increase in wavelength of light from a receding source.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Longer wavelength = redshift, indicating the source is receding.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Redshift",
            commonErrors: ["Confusing redshift with blueshift."],
          },
        },
        {
          id: "edialphys-u5-cosmology-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A galaxy recedes at 2100 km/s. Taking H₀ = 70 km s⁻¹ Mpc⁻¹, calculate its distance using Hubble's law.",
          response: {
            type: "numeric",
            parts: [
              { label: "Distance", answer: 30, tolerance: 0.1, unit: "Mpc" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Hubble's law", statement: "v = H₀d." },
            ],
            steps: [
              { reasoning: "Rearrange: d = v/H₀.", marks: 1, markCode: "M" },
              { reasoning: "d = 2100/70.", marks: 1, markCode: "M" },
              { reasoning: "d = 30 Mpc.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "30 Mpc",
            commonErrors: ["Multiplying v by H₀ instead of dividing."],
          },
        },
        {
          id: "edialphys-u5-cosmology-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how Hubble's law provides evidence that the Universe is expanding.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Hubble's law",
                statement:
                  "v = H₀d — recession velocity proportional to distance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Hubble's law: more distant galaxies have greater recession velocities.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Redshift of spectral lines shows galaxies are moving away from us.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "If all galaxies recede from every observer, space itself must be expanding.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "This matches a Universe that was smaller and denser in the past — the Big Bang model.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "v = H₀d implies space expands; distant galaxies recede faster",
            commonErrors: [
              "Claiming galaxies move through static space away from a centre.",
            ],
          },
        },
        {
          id: "edialphys-u5-cosmology-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A spectral line normally at 656 nm is observed at 658 nm from a distant galaxy.",
          parts: [
            { label: "a", prompt: "Calculate the redshift z.", marks: 3 },
            {
              label: "b",
              prompt:
                "State Hubble's law and explain what it implies about the Universe.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Describe the cosmic microwave background radiation and its significance.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cosmology",
                statement: "z = Δλ/λ; v = H₀d; CMBR is Big Bang remnant.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Δλ = 658 − 656 = 2 nm.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "z = Δλ/λ = 2/656 = 0.00305.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "z ≈ 3.0 × 10⁻³.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Hubble's law: recession velocity v = H₀d.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "More distant galaxies recede faster.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Implied: space itself is expanding.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "CMBR is microwave radiation arriving from all directions.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "It is redshifted thermal radiation from ~380 000 years after the Big Bang.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Its near-uniformity supports the Big Bang model.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Small fluctuations seeded galaxy formation.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "z ≈ 0.00305; v = H₀d implies expansion; CMBR is Big Bang remnant",
            commonErrors: ["Using λ_new instead of λ_original in z = Δλ/λ."],
          },
        },
      ],
    },
    {
      id: "edialphys-u5-astrophysics",
      title: "Stars and stellar evolution",
      skill:
        "Use luminosity and apparent brightness, describe the Hertzsprung–Russell diagram and stellar evolution.",
      lesson: {
        sections: [
          {
            heading: "Luminosity and apparent brightness",
            body: "A star's luminosity L is its total power output in watts. The apparent brightness b at Earth follows the inverse-square law: b = L/(4πd²), where d is the distance. A star twice as far away appears one quarter as bright; ten times further, one hundredth as bright.",
          },
          {
            heading: "The Hertzsprung–Russell diagram",
            body: "The H–R diagram plots luminosity (or absolute magnitude) against surface temperature. Most stars lie on the main sequence, where temperature increases with luminosity — these are hydrogen-burning stars like the Sun. Red giants are cool but very luminous; white dwarfs are hot but faint. A star's position reveals its evolutionary stage.",
          },
          {
            heading: "Stellar evolution",
            body: "Stars are born in nebulae and spend most of their lives on the main sequence. When core hydrogen is exhausted, a star like the Sun swells into a red giant, then sheds its outer layers to leave a white dwarf. Massive stars (> about 8 solar masses) end in a supernova, leaving a neutron star or, for the most massive, a black hole.",
          },
        ],
        keyFormulas: [
          { name: "Apparent brightness", statement: "b = L/(4πd²)" },
        ],
        workedExample: {
          problem:
            "A star has luminosity 4.0 × 10²⁶ W and is 10 pc away (1 pc = 3.09 × 10¹⁶ m). Calculate its apparent brightness at Earth.",
          solution:
            "d = 3.09 × 10¹⁷ m; b = 4.0 × 10²⁶/(4π × (3.09 × 10¹⁷)²) = 4.0 × 10²⁶/1.2 × 10³⁶ ≈ 3.3 × 10⁻¹⁰ W/m².",
        },
      },
      questions: [
        {
          id: "edialphys-u5-astrophysics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A star's apparent brightness depends on its luminosity and on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Moon's phase" },
              { id: "b", text: "Its colour only" },
              { id: "c", text: "Its distance (inverse square law)" },
              { id: "d", text: "The Earth's rotation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Brightness",
                statement: "b = L/(4πd²).",
              },
            ],
            steps: [
              {
                reasoning: "Brightness falls with the square of distance.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Distance via inverse-square law",
            commonErrors: ["Thinking brightness falls linearly with distance."],
          },
        },
        {
          id: "edialphys-u5-astrophysics-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A star has apparent brightness 2.0 × 10⁻⁸ W/m² at Earth. Calculate its apparent brightness at half its current distance from Earth.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Brightness",
                answer: 8.0e-8,
                tolerance: 1e-9,
                unit: "W/m²",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Inverse square",
                statement: "b ∝ 1/d².",
              },
            ],
            steps: [
              {
                reasoning: "Halving d multiplies brightness by 2² = 4.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "b_new = 4 × 2.0 × 10⁻⁸.", marks: 1, markCode: "M" },
              { reasoning: "b = 8.0 × 10⁻⁸ W/m².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8.0 × 10⁻⁸ W/m²",
            commonErrors: [
              "Doubling the brightness instead of quadrupling it.",
            ],
          },
        },
        {
          id: "edialphys-u5-astrophysics-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the main regions of the Hertzsprung–Russell diagram and what each reveals about a star.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "H–R diagram",
                statement: "Luminosity vs surface temperature.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Axes: luminosity (vertical) against temperature (horizontal, decreasing to the right).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Main sequence: hydrogen-burning stars like the Sun; hotter means more luminous.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Red giants: cool surface but very high luminosity — large radius.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "White dwarfs: hot but faint — small, dense remnants.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Main sequence, red giants and white dwarfs reveal evolutionary stage",
            commonErrors: ["Plotting temperature increasing to the right."],
          },
        },
        {
          id: "edialphys-u5-astrophysics-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A star has luminosity L = 3.8 × 10²⁶ W and is 1.5 × 10¹¹ m from Earth.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the apparent brightness of the star at Earth.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "The star lies on the main sequence of the H–R diagram. State what this tells you about it.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Describe the likely end states of low-mass and high-mass stars.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Brightness and evolution",
                statement:
                  "b = L/(4πd²); main sequence = hydrogen burning; fate depends on mass.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "b = L/(4πd²) = 3.8 × 10²⁶/(4π × (1.5 × 10¹¹)²).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "d² = 2.25 × 10²²; 4πd² ≈ 2.83 × 10²³.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "b ≈ 1.34 × 10³ W/m².",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Main-sequence stars are fusing hydrogen into helium in their cores.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "The star is in the stable, longest-lived phase of its life.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Its position on the sequence relates temperature to luminosity.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Low-mass stars (like the Sun) become red giants then white dwarfs.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Outer layers are shed as a planetary nebula.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "High-mass stars end in a supernova, leaving a neutron star.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "The most massive collapse to black holes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "b ≈ 1.3 × 10³ W/m²; main sequence = hydrogen burning; low mass → white dwarf, high mass → supernova remnant",
            commonErrors: [
              "Forgetting to square the distance in b = L/(4πd²).",
            ],
          },
        },
      ],
    },
  ],
};
