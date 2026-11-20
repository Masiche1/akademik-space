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
              { id: "a", text: "Current doubles" },
              { id: "b", text: "Current unchanged" },
              { id: "c", text: "Stopping potential doubles" },
              { id: "d", text: "Photoelectrons have more energy" },
            ],
            correctChoiceId: "a",
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
