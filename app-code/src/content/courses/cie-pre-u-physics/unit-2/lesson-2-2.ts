import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "cipup-u2-lesson-2-2",
  code: "2-2",
  title: "Quantum Physics and Atomic Structure",
  goal: "I CAN describe the photoelectric effect, atomic spectra and nuclear processes at Pre-U standard.",
  standards: ["Cambridge Pre-U Physics 9792", "Quantum physics"],
  vocabulary: [
    {
      term: "Photoelectric effect",
      definition:
        "Emission of electrons from metal when light above threshold frequency strikes it — instantaneous, intensity affects number not energy.",
    },
    {
      term: "Photon",
      definition:
        "Quantum of electromagnetic radiation — energy E = hf; particle-like despite being wave.",
    },
    {
      term: "Work function",
      definition:
        "Minimum energy to remove electron from metal surface — φ = hf₀ where f₀ is threshold frequency.",
    },
    {
      term: "de Broglie wavelength",
      definition:
        "$\\lambda = h/p$ — matter has wave properties; electrons show diffraction.",
    },
    {
      term: "Nuclear fission",
      definition:
        "Heavy nucleus splits into lighter fragments + neutrons + energy — chain reaction in reactors.",
    },
    {
      term: "Nuclear fusion",
      definition:
        "Light nuclei combine to form heavier + energy — powers stars; requires high T/pressure.",
    },
  ],
  concepts: [
    {
      id: "cipup-u2-s1-quantum",
      title: "Quantum phenomena and nuclear physics",
      skill:
        "Apply quantum equations, interpret spectra and describe nuclear processes.",
      lesson: {
        sections: [
          {
            heading: "Photoelectric effect and photons",
            body: "Einstein's equation: hf = φ + ½mv²_max where φ = hf₀ (work function). Key observations: emission only above threshold frequency f₀ (not intensity); emission instantaneous (no time lag); number of photoelectrons ∝ intensity; max KE depends on frequency not intensity. Stopping potential V_s relates KE_max = eV_s. Photon energy E = hf = hc/λ; momentum p = E/c = h/λ. Compton scattering: photon loses energy to electron — wavelength increases, demonstrating particle nature.",
          },
          {
            heading: "Atomic structure and spectra",
            body: "Bohr model: electrons orbit in quantised orbits with angular momentum nh/2π; energy levels E_n = −13.6/n² eV for hydrogen. Transitions between levels emit/absorb photons with hf = E_i − E_f — produces line spectra. Balmer series (visible): n→2; Lyman (UV): n→1; Paschen (IR): n→3. Rydberg formula: 1/λ = R(1/n₁² − 1/n₂²). Wave nature of electrons (de Broglie) explains quantised orbits — standing waves must fit integer wavelengths. Uncertainty principle: ΔxΔp ≥ ħ/2 — cannot know position and momentum precisely simultaneously.",
          },
          {
            heading: "Nuclear physics",
            body: "Nucleus contains protons + neutrons (nucleons); isotopes have same Z, different A. Mass defect Δm = Zm_p + Nm_n − m_nucleus → binding energy E = Δmc² (E in MeV: 1 u = 931.5 MeV). Binding energy per nucleon peaks at Fe-56 (~8.8 MeV) — fission of heavy nuclei and fusion of light nuclei both release energy. **Fission**: neutron capture → nucleus splits → 2-3 neutrons → chain reaction; controlled in reactors with moderators (slow neutrons), control rods (absorb neutrons), coolant. **Fusion**: ²H + ³H → ⁴He + n + 17.6 MeV — needs ~10⁸ K; occurs in stars and H-bombs. Radioactive decay: α (⁴He, weakly ionising, stopped by paper), β⁻ (electron, medium ionising, stopped by aluminium), γ (photon, highly ionising, needs lead/concrete). Half-life: N = N₀(½)^(t/T½).",
          },
        ],
        keyFormulas: [
          {
            name: "Photoelectric effect",
            statement:
              "$hf = \\phi + \\frac{1}{2}mv^2_{max}$; $E = hf = hc/\\lambda$",
          },
          {
            name: "Bohr energy",
            statement: "$E_n = -13.6/n^2$ eV; $hf = E_i - E_f$",
          },
          {
            name: "Mass–energy",
            statement: "$E = \\Delta mc^2$; 1 u = 931.5 MeV",
          },
        ],
        workedExample: {
          problem: "Calculate the energy of a photon with wavelength 500 nm.",
          solution:
            "E = hc/λ = (6.63 × 10⁻³⁴ × 3.0 × 10⁸)/(500 × 10⁻⁹) = 3.98 × 10⁻¹⁹ J = 2.5 eV.",
        },
      },
      questions: [
        {
          id: "cipup-u2-quant-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What happens to the photoelectric current when light intensity is doubled (frequency above threshold)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Current unchanged" },
              { id: "b", text: "Photoelectrons have more energy" },
              { id: "c", text: "Current doubles" },
              { id: "d", text: "Stopping potential doubles" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Photoelectric effect",
                statement:
                  "Intensity ∝ number of photons ∝ number of photoelectrons; KE per electron depends on frequency only.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Doubling intensity doubles photon rate → doubles photoelectron rate → current doubles.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a",
          },
        },
        {
          id: "cipup-u2-quant-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The work function of sodium is 2.3 eV. Calculate the threshold frequency.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Threshold frequency",
                statement:
                  "$f_0 = \\phi/h$; $1\\ \\text{eV} = 1.6 \\times 10^{-19}$ J.",
              },
            ],
            steps: [
              {
                reasoning: "φ = 2.3 × 1.6 × 10⁻¹⁹ = 3.68 × 10⁻¹⁹ J.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "f₀ = φ/h = 3.68 × 10⁻¹⁹/6.63 × 10⁻³⁴ = 5.55 × 10¹⁴ Hz.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "5.6 × 10¹⁴ Hz",
          },
        },
        {
          id: "cipup-u2-quant-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate the energy released in the fusion reaction ²H + ³H → ⁴He + n. (masses: ²H = 2.014 u, ³H = 3.016 u, ⁴He = 4.003 u, n = 1.009 u; 1 u = 931.5 MeV)",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Mass defect",
                statement:
                  "$E = \\Delta mc^2$; mass of ²H = 2.014 u, ⁴He = 4.003 u, n = 1.009 u.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Reaction: ²H + ³H → ⁴He + n; mass before = 2.014 + 3.016 = 5.030 u.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Mass after = 4.003 + 1.009 = 5.012 u; Δm = 5.030 − 5.012 = 0.018 u.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "E = Δmc² = 0.018 × 931.5 ≈ 17 MeV.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "≈ 17 MeV",
          },
        },
        {
          id: "cipup-u2-quant-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why gamma rays are more dangerous than alpha particles despite alpha having greater ionising power.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Radiation types",
                statement:
                  "Alpha: high ionisation, low penetration. Gamma: low ionisation, high penetration.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Alpha particles are massive and doubly charged → strong ionisation but stopped by skin/paper.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Gamma rays are uncharged photons → weak ionisation per interaction but penetrate tissue and bone.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "External alpha is harmless (stopped by skin); external gamma irradiates internal organs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Internal alpha (inhaled/ingested) is very dangerous — concentrated ionisation in cells.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Penetration vs ionisation trade-off determines hazard.",
          },
        },
        {
          id: "cipup-u2-quant-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the energy of a photon of frequency $f$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$E = h\\lambda$" },
              { id: "b", text: "$E = f/h$" },
              { id: "c", text: "$E = hf$" },
              { id: "d", text: "$E = h/f$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Photon energy",
                statement: "$E = hf = hc/\\lambda$.",
              },
            ],
            steps: [
              {
                reasoning: "Photon energy is proportional to frequency via Planck's constant.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a",
          },
        },
        {
          id: "cipup-u2-quant-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Light of frequency $6.0 \\times 10^{14}$ Hz falls on a metal with work function $3.0 \\times 10^{-19}$ J. Calculate the maximum kinetic energy of the photoelectrons. ($h = 6.63 \\times 10^{-34}$ J s)",
          response: {
            type: "numeric",
            parts: [{ label: "Maximum KE", answer: 9.8e-20, tolerance: 5e-21, unit: "J" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Photoelectric equation",
                statement: "$hf = \\phi + \\tfrac{1}{2}mv^2_{max}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$hf = 6.63 \\times 10^{-34} \\times 6.0 \\times 10^{14} = 3.98 \\times 10^{-19}$ J.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$KE_{max} = hf - \\phi = 3.98 \\times 10^{-19} - 3.0 \\times 10^{-19} = 9.8 \\times 10^{-20}$ J.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "≈ 9.8 × 10⁻²⁰ J",
          },
        },
        {
          id: "cipup-u2-quant-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Classical wave theory predicts a time lag before photoelectron emission when light below threshold frequency is applied. Explain why no such delay is observed and why this supports the photon model.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Photon model",
                statement:
                  "Energy arrives in discrete quanta $E = hf$; one photon transfers all its energy to one electron instantly.",
              },
            ],
            steps: [
              {
                reasoning:
                  "In the wave picture, energy is spread continuously over the wavefront and would need time to accumulate to the work function.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Experimentally, emission is instantaneous even at very low intensities — each photon either has enough energy ($hf \\geq \\phi$) or it does not.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Below threshold frequency no amount of waiting helps because individual photons each carry $hf < \\phi$ — confirming energy quantisation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Instantaneous emission and threshold frequency cannot be explained by continuous waves — only by photons.",
          },
        },
        {
          id: "cipup-u2-quant-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Using the de Broglie relation $\\lambda = h/p$, which particle has the longest wavelength when all have the same momentum?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They all have the same wavelength" },
              { id: "b", text: "The heaviest particle" },
              { id: "c", text: "It depends on their charge" },
              { id: "d", text: "The lightest particle" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "de Broglie wavelength",
                statement: "$\\lambda = h/p$ — wavelength depends only on momentum.",
              },
            ],
            steps: [
              {
                reasoning:
                  "At equal momentum $p$, $\\lambda = h/p$ is identical for all particles — mass and charge are irrelevant.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a",
          },
        },
        {
          id: "cipup-u2-quant-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate the energy of a photon with wavelength 600 nm. ($h = 6.63 \\times 10^{-34}$ J s, $c = 3.0 \\times 10^8$ m/s)",
          response: {
            type: "numeric",
            parts: [{ label: "Photon energy", answer: 3.3e-19, tolerance: 2e-20, unit: "J" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Photon energy",
                statement: "$E = hc/\\lambda$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$E = (6.63 \\times 10^{-34} \\times 3.0 \\times 10^8)/(600 \\times 10^{-9})$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$E \\approx 3.3 \\times 10^{-19}$ J (≈ 2.1 eV).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "≈ 3.3 × 10⁻¹⁹ J",
          },
        },
        {
          id: "cipup-u2-quant-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe how a controlled nuclear fission chain reaction is sustained in a reactor, mentioning the roles of the moderator and control rods.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Nuclear fission",
                statement:
                  "Neutron capture splits a heavy nucleus, releasing 2–3 neutrons that can induce further fissions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A neutron is captured by a fissile nucleus (e.g. $^{235}$U), which becomes unstable and splits into fragments plus 2–3 fast neutrons.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The moderator (water/graphite) slows the fast neutrons so they have the right energy to cause further fissions efficiently.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Control rods (boron/cadmium) absorb surplus neutrons, keeping the multiplication factor at exactly 1 — one fission per fission — for steady power.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Coolant removes the energy released as heat for electricity generation; excess neutrons cause runaway (supercritical) conditions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Fission releases neutrons; moderator slows them, control rods absorb them to keep the chain reaction controlled.",
          },
        },
        {
          id: "cipup-u2-quant-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which nucleus has the greatest binding energy per nucleon, and is therefore the most stable?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hydrogen-1" },
              { id: "b", text: "Uranium-235" },
              { id: "c", text: "Helium-4" },
              { id: "d", text: "Iron-56" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Binding energy curve",
                statement:
                  "Binding energy per nucleon peaks at $^{56}$Fe (~8.8 MeV); both fission of heavy nuclei and fusion of light nuclei release energy toward this peak.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$^{56}$Fe sits at the peak of the binding-energy-per-nucleon curve — the most stable nucleus.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "b",
          },
        },
        {
          id: "cipup-u2-quant-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A radioactive sample has a half-life of 5.0 days. What fraction of the original nuclei remain after 15 days?",
          response: {
            type: "numeric",
            parts: [{ label: "Fraction", answer: 0.125, tolerance: 0.005 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Half-life",
                statement: "$N = N_0 (1/2)^{t/T_{1/2}}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$t/T_{1/2} = 15/5 = 3$ half-lives; fraction $= (1/2)^3$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Fraction remaining = 1/8 = 0.125.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "0.125 (1/8)",
          },
        },
        {
          id: "cipup-u2-quant-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "A nucleus $^{238}_{92}$U undergoes alpha decay. Write the decay equation and state the new proton and nucleon numbers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Alpha decay",
                statement:
                  "Emission of an alpha particle $^{4}_{2}$He; $A$ decreases by 4 and $Z$ by 2.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Alpha particle is $^{4}_{2}$He — mass number 4, atomic number 2.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conservation: daughter has $A = 238 - 4 = 234$ and $Z = 92 - 2 = 90$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Equation: $^{238}_{92}$U $\\rightarrow$ $^{234}_{90}$Th $+$ $^{4}_{2}$He (thorium-234).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$^{238}_{92}$U → $^{234}_{90}$Th + $^{4}_{2}$He",
          },
        },
        {
          id: "cipup-u2-quant-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which series of the hydrogen spectrum lies entirely in the ultraviolet region?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lyman" },
              { id: "b", text: "Brackett" },
              { id: "c", text: "Paschen" },
              { id: "d", text: "Balmer" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Spectral series",
                statement:
                  "Lyman (n→1) = UV, Balmer (n→2) = visible, Paschen (n→3) = IR.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Transitions to n = 1 (Lyman) have the largest energy gaps → shortest wavelengths → ultraviolet.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "c",
          },
        },
        {
          id: "cipup-u2-quant-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Monochromatic light of wavelength 450 nm illuminates a metal with threshold wavelength 620 nm. Calculate the maximum kinetic energy of the emitted photoelectrons. ($h = 6.63 \\times 10^{-34}$ J s, $c = 3.0 \\times 10^8$ m/s)",
          response: {
            type: "numeric",
            parts: [{ label: "Maximum KE", answer: 1.21e-19, tolerance: 2e-20, unit: "J" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Photoelectric equation",
                statement:
                  "$hc/\\lambda - hc/\\lambda_0 = \\tfrac{1}{2}mv^2_{max}$ using threshold wavelength.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Photon energy: $E = hc/\\lambda = (6.63 \\times 10^{-34} \\times 3.0 \\times 10^8)/(450 \\times 10^{-9}) = 4.42 \\times 10^{-19}$ J.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Work function: $\\phi = hc/\\lambda_0 = (\\ldots)/(620 \\times 10^{-9}) = 3.21 \\times 10^{-19}$ J.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$KE_{max} = 4.42 \\times 10^{-19} - 3.21 \\times 10^{-19} = 1.21 \\times 10^{-19}$ J.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$KE_{max} = 1.21 \\times 10^{-19}$ J (≈ 0.76 eV).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "≈ 1.2 × 10⁻¹⁹ J",
          },
        },
        {
          id: "cipup-u2-quant-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the Davisson–Germer experiment demonstrated the wave nature of electrons, and state what the de Broglie hypothesis predicts.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Wave–particle duality",
                statement: "$\\lambda = h/p$ — all matter has wave properties.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A beam of electrons was scattered from a nickel crystal; the angular distribution showed maxima and minima.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This is a diffraction/interference pattern — impossible for purely particle beams, proving electrons behave as waves.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "De Broglie predicted $\\lambda = h/p$; the observed fringe spacing matched the wavelength computed from the electrons' momentum.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This confirmed matter–wave duality: electrons show wave behaviour when their wavelength is comparable to atomic spacings.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Electron diffraction pattern + de Broglie wavelength matching → matter has wave properties.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipup-u2-quantum-notes",
      title: "Quantum physics — revision notes",
      summary: "Photoelectric effect, atomic spectra, nuclear processes.",
      sections: [
        {
          heading: "Key skills",
          body: "For photoelectric questions, identify whether intensity or frequency is changing — they have different effects. For nuclear questions, always convert mass defect to energy via E = Δmc².",
        },
        {
          heading: "Exam tips",
          body: "Bohr model only works for hydrogen-like atoms. Nuclear decay: alpha decreases A by 4 and Z by 2; beta decreases A by 0 and Z increases by 1.",
        },
      ],
    },
  ],
};
