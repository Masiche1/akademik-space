import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "edialphys-u1-lesson-1-2",
  code: "1-2",
  title: "Particles and Quantum Phenomena",
  goal: "I CAN describe atomic and nuclear structure, radioactivity and photon energy.",
  standards: ["P1 Particles and radiation", "Atomic structure", "Radioactivity"],
  vocabulary: [
    { term: "Photon", definition: "Quantum of electromagnetic radiation; energy E = hf." },
    { term: "Alpha / beta / gamma", definition: "Helium nucleus / fast electron / high-energy EM wave emitted in decay." },
    { term: "Half-life", definition: "Time for half the nuclei in a sample to decay." },
    { term: "Photoelectric effect", definition: "Emission of electrons from metal when light above threshold frequency strikes it." },
  ],
  concepts: [
    {
      id: "edialphys-u1-atomic",
      title: "Atomic and nuclear structure",
      skill: "Describe atoms, nuclei, isotopes and photon energy.",
      lesson: {
        sections: [
          {
            heading: "Atomic structure",
            body: "Atom: nucleus (protons +, neutrons neutral) surrounded by electrons in shells. Atomic number Z = protons; mass number A = protons + neutrons. Isotopes: same Z, different A. Most atoms stable; some nuclei unstable → radioactivity.",
          },
          {
            heading: "Photon energy",
            body: "Light comes in photons: E = hf = hc/λ. Planck constant h = 6.63×10⁻³⁴ J s; c = 3×10⁸ m/s. Higher frequency/shorter wavelength = higher energy. Visible light ~400–700 nm; UV more energetic; IR less.",
          },
          {
            heading: "Photoelectric effect",
            body: "Light ejects electrons from metal surface if frequency exceeds threshold f₀. KE_max = hf − φ (work function). Demonstrates light's particle nature; no time delay; instantaneous emission.",
          },
        ],
        keyFormulas: [
          { name: "Key formula", statement: "E = hf = hc/λ" },
          { name: "Key formula", statement: "KE_max = hf − φ" },
        ],
        workedExample: {
          problem: "Calculate photon energy for λ = 500 nm.",
          solution: "E = hc/λ = (6.63×10⁻³⁴ × 3×10⁸)/(500×10⁻⁹) = 3.98×10⁻¹⁹ J ≈ 2.5 eV.",
        },
      },
      questions: [
        {
          id: "edialphys-atom-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What determines the identity of an element?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Atomic (proton) number" },
              { id: "b", text: "Electron mass" },
              { id: "c", text: "Mass number" },
              { id: "d", text: "Neutron number" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Atomic number", statement: "Z = protons = element identity." }],
            steps: [{ reasoning: "Proton number defines element.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Atomic number",
          },
        },
        {
          id: "edialphys-atom-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "State two differences between alpha and beta particles.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "α vs β", statement: "Charge, mass, penetration." }],
            steps: [
              { reasoning: "Alpha: He nucleus (2p+2n), charge +2, mass 4; beta: electron, charge −1, negligible mass.", marks: 1, markCode: "A" },
              { reasoning: "Alpha: low penetration (stopped by paper/skin); beta: medium (stopped by aluminium).", marks: 1, markCode: "A" },
              { reasoning: "Alpha: strong ionisation; beta: weaker.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "α: heavy + charged, weak penetration; β: light −, medium",
            commonErrors: ["Reversing penetration."],
          },
        },
        {
          id: "edialphys-atom-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate the energy of a photon with frequency 6×10¹⁴ Hz.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 3.98e-19, tolerance: 0.01, unit: "J" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Photon energy", statement: "E = hf." }],
            steps: [
              { reasoning: "E = 6.63×10⁻³⁴ × 6×10¹⁴.", marks: 1, markCode: "M" },
              { reasoning: "= 3.978×10⁻¹⁹ J.", marks: 1, markCode: "M" },
              { reasoning: "≈ 3.98×10⁻¹⁹ J.", marks: 1, markCode: "A" },
              { reasoning: "Correct units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3.98×10⁻¹⁹ J",
            commonErrors: ["Using λ instead of f."],
          },
        },
        {
          id: "edialphys-atom-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Explain the photoelectric effect and what it demonstrates about light.",
          parts: [
            { label: "a", prompt: "Describe the phenomenon.", marks: 3 },
            { label: "b", prompt: "Explain threshold frequency.", marks: 3 },
            { label: "c", prompt: "State what it proves about light.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Photoelectric", statement: "E = hf − φ; particle nature." }],
            steps: [
              { part: "a", reasoning: "Light ejects electrons from metal surface.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Only if frequency above threshold.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "KE of electrons depends on frequency, not intensity.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Threshold f₀: minimum frequency to eject electrons.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Below f₀ no emission regardless of intensity.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "hf₀ = work function φ (energy to remove electron).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Proves light has particle nature (photons).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "E = hf quantisation; one photon ejects one electron.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Instantaneous emission → no time delay.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Conclusion.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Photons eject e⁻ if f > f₀; particle nature",
            commonErrors: ["Saying intensity determines KE."],
          },
        },
      ],
    },
    {
      id: "edialphys-u1-radioactivity",
      title: "Radioactivity and decay",
      skill: "Describe alpha/beta/gamma decay, half-life and uses of radioisotopes.",
      lesson: {
        sections: [
          {
            heading: "Decay types",
            body: "Alpha: nucleus emits He nucleus (²⁴He); A−4, Z−2; strong ionisation, weak penetration. Beta (β⁻): neutron → proton + electron; A same, Z+1; medium penetration. Gamma: high-energy EM wave; no mass/charge change; weak ionisation, strong penetration.",
          },
          {
            heading: "Half-life",
            body: "Time for half the undecayed nuclei to decay. N = N₀(½)^(t/T½). Constant for each isotope. Carbon-14: ~5700 years (dating); iodine-131: ~8 days (thyroid); technetium-99m: ~6 hours (imaging).",
          },
          {
            heading: "Uses and safety",
            body: "Uses: medical imaging/tracers, radiotherapy (Co-60), sterilisation, smoke detectors (Am-241), carbon dating. Hazards: ionising radiation damages cells/DNA → cancer; shield with lead, minimise exposure time, increase distance.",
          },
        ],
        keyFormulas: [
          { name: "Key formula", statement: "N = N₀ × (1/2)^(t/T½)" },
        ],
        workedExample: {
          problem: "A sample has 800 Bq initially; after 3 half-lives what remains?",
          solution: "800 × (1/2)³ = 800 × 1/8 = 100 Bq.",
        },
      },
      questions: [
        {
          id: "edialphys-radio-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which radiation is most penetrating?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gamma" },
              { id: "b", text: "Beta" },
              { id: "c", text: "All equal" },
              { id: "d", text: "Alpha" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Gamma", statement: "EM wave, no charge → least interaction." }],
            steps: [{ reasoning: "Gamma penetrates lead/concrete.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Gamma",
          },
        },
        {
          id: "edialphys-radio-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A radioactive sample has activity 400 Bq. What is the activity after 2 half-lives?",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 100, tolerance: 0.1, unit: "Bq" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Half-life", statement: "Halves each half-life." }],
            steps: [
              { reasoning: "After 1: 200 Bq; after 2: 100 Bq.", marks: 1, markCode: "M" },
              { reasoning: "400 × (1/2)² = 100.", marks: 1, markCode: "M" },
              { reasoning: "Answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "100 Bq",
            commonErrors: ["Halving once only."],
          },
        },
        {
          id: "edialphys-radio-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why alpha particles are dangerous if inhaled but gamma is more dangerous externally.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Radiation hazard", statement: "Alpha: high ionisation short range; gamma: penetrates." }],
            steps: [
              { reasoning: "Alpha: strongly ionising but stopped by skin/paper — dangerous only if inside body (lungs).", marks: 1, markCode: "M" },
              { reasoning: "Inhaled alpha irradiates living tissue directly → high dose.", marks: 1, markCode: "M" },
              { reasoning: "Gamma penetrates body → affects internal organs even externally.", marks: 1, markCode: "A" },
              { reasoning: "Conclude hazard depends on exposure route.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "α internal hazard; γ penetrates externally",
            commonErrors: ["Saying alpha is most dangerous always."],
          },
        },
        {
          id: "edialphys-radio-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Describe the three types of radioactive decay and their effects on the nucleus.",
          parts: [
            { label: "a", prompt: "Alpha decay.", marks: 3 },
            { label: "b", prompt: "Beta decay.", marks: 3 },
            { label: "c", prompt: "Gamma decay.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Decay types", statement: "α: A−4,Z−2; β: Z+1; γ: no change." }],
            steps: [
              { part: "a", reasoning: "Alpha: emits ⁴He nucleus (2p+2n).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "A decreases by 4, Z by 2.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Strongly ionising, weak penetration.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Beta: neutron → proton + electron emitted.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "A unchanged, Z increases by 1.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Medium penetration/ionisation.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Gamma: high-energy EM wave emitted.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "No change in A or Z.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Weakly ionising, most penetrating.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Often accompanies α/β to release excess energy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "α: A−4,Z−2; β: Z+1; γ: EM wave",
            commonErrors: ["Wrong A/Z changes."],
          },
        },
      ],
    },
  ],
};
