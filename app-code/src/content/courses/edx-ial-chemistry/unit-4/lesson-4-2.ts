import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "edialchem-u4-lesson-4-2",
  code: "4-2",
  title: "Analysis and Identification",
  goal: "I CAN describe spectroscopic and chromatographic techniques for identifying organic compounds.",
  standards: ["IC4 Organic chemistry II", "Analytical techniques"],
  vocabulary: [
    { term: "Mass spectrometry", definition: "Technique measuring mass-to-charge ratio of ions." },
    { term: "IR spectroscopy", definition: "Identifies functional groups by bond vibrations absorbing IR." },
    { term: "Chromatography", definition: "Separates mixtures by differential movement through medium." },
    { term: "R_f value", definition: "Retention factor = distance moved by substance / distance moved by solvent." },
  ],
  concepts: [
    {
      id: "edialchem-u4-spec",
      title: "Mass and IR spectroscopy",
      skill: "Interpret mass spectra and IR spectra to identify compounds.",
      lesson: {
        sections: [
          {
            heading: "Mass spectrometry",
            body: "Sample ionised → accelerated → magnetic field separates by m/z. Molecular ion peak = molecular mass. Fragment peaks identify structure. Base peak = most abundant fragment. Isotope peaks (Cl: 35/37; Br: 79/81) aid identification.",
          },
          {
            heading: "IR spectroscopy",
            body: "IR radiation absorbed by bonds vibrating. Each functional group absorbs at characteristic wavenumber: O–H ~3200-3600 cm⁻¹ (broad = alcohol/acid), C=O ~1700 cm⁻¹, C≡N ~2200 cm⁻¹, C–H ~2850-3300 cm⁻¹. Absence of O–H peak rules out alcohol/acid.",
          },
          {
            heading: "Combined techniques",
            body: "Mass spec gives molecular formula/mass; IR gives functional groups; NMR gives carbon/hydrogen environment; chromatography separates components. Together provide complete structural identification.",
          },
        ],
        keyFormulas: [
          { name: "Key formula", statement: "m/z = mass/charge ratio" },
          { name: "Key formula", statement: "R_f = distance substance / distance solvent" },
        ],
        workedExample: {
          problem: "An IR spectrum shows broad peak at 3300 cm⁻¹ and strong peak at 1710 cm⁻¹. What functional groups are present?",
          solution: "Broad 3300 = O–H (alcohol or acid); 1710 = C=O (carbonyl). Likely carboxylic acid.",
        },
      },
      questions: [
        {
          id: "edialchem-spec-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the molecular ion peak in mass spectrometry show?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Most abundant fragment" },
              { id: "b", text: "Molecular mass" },
              { id: "c", text: "Number of carbons" },
              { id: "d", text: "Functional groups" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Molecular ion", statement: "Intact molecule ionised." }],
            steps: [{ reasoning: "Peak at m/z = molecular mass.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Molecular mass",
          },
        },
        {
          id: "edialchem-spec-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What wavenumber region indicates an O–H bond in IR?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "~1700 cm⁻¹" },
              { id: "b", text: "~3300 cm⁻¹" },
              { id: "c", text: "~2200 cm⁻¹" },
              { id: "d", text: "~1400 cm⁻¹" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "IR", statement: "O–H ~3200-3600 cm⁻¹." }],
            steps: [{ reasoning: "Broad peak = H-bonded O–H.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** ~3300 cm⁻¹",
          },
        },
        {
          id: "edialchem-spec-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how mass spectrometry can distinguish between ethanol and dimethyl ether (both C₂H₆O).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Mass spec", statement: "Fragment patterns differ." }],
            steps: [
              { reasoning: "Both have same molecular ion peak at m/z = 46.", marks: 1, markCode: "M" },
              { reasoning: "Ethanol fragments: m/z 31 (CH₂OH⁺), 45 (M−H).", marks: 1, markCode: "M" },
              { reasoning: "Dimethyl ether fragments differently (m/z 45, 29).", marks: 1, markCode: "A" },
              { reasoning: "Different fragmentation → distinguishable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fragment patterns differ despite same mass",
            commonErrors: ["Saying same mass = indistinguishable."],
          },
        },
        {
          id: "edialchem-spec-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Describe how IR spectroscopy identifies functional groups.",
          parts: [
            { label: "a", prompt: "Principle.", marks: 3 },
            { label: "b", prompt: "Key absorption regions.", marks: 4 },
            { label: "c", prompt: "Example interpretation.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "method", name: "IR spectroscopy", statement: "Bond vibrations absorb IR." }],
            steps: [
              { part: "a", reasoning: "IR radiation passed through sample.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Bonds vibrate at specific frequencies.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Absorbed frequencies → characteristic peaks.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "O–H: ~3200-3600 (broad).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "C=O: ~1700.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "C≡N: ~2200; C–H: ~2850-3300.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Each group unique fingerprint.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Example: 3300 broad + 1710 = carboxylic acid.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "O–H confirms acid/alcohol; C=O confirms carbonyl.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Combined = COOH.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "IR peaks identify functional groups",
            commonErrors: ["Confusing with mass spec."],
          },
        },
      ],
    },
    {
      id: "edialchem-u4-chromatography",
      title: "Chromatography and titrations",
      skill: "Describe chromatography types and use titrations to determine concentrations.",
      lesson: {
        sections: [
          {
            heading: "Chromatography",
            body: "Separates mixture components by differential movement. Paper chromatography: stationary = paper, mobile = solvent. Thin-layer: silica gel on glass. Gas chromatography: stationary = coating in column, mobile = carrier gas. R_f = distance substance/distance solvent — identifies compounds.",
          },
          {
            heading: "Titration of organic acids",
            body: "Carboxylic acids titrated with standard NaOH using phenolphthalein. c₁V₁ = c₂V₂. Used to determine acid content (e.g. ethanoic acid in vinegar). pH curves show weak acid vs strong acid differences.",
          },
          {
            heading: "Combined analysis",
            body: "Unknown compound: chromatography separates components → each spot's R_f compared to knowns → mass spec gives molecular mass → IR gives functional groups → NMR gives structure. Complete identification possible.",
          },
        ],
        keyFormulas: [
          { name: "Key formula", statement: "R_f = distance substance / distance solvent" },
          { name: "Key formula", statement: "c₁V₁ = c₂V₂" },
        ],
        workedExample: {
          problem: "A compound travels 3.2 cm while solvent travels 8.0 cm. Find R_f.",
          solution: "R_f = 3.2/8.0 = 0.40.",
        },
      },
      questions: [
        {
          id: "edialchem-chrom-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does R_f value measure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mass of compound" },
              { id: "b", text: "Distance ratio in chromatography" },
              { id: "c", text: "pH of solution" },
              { id: "d", text: "Melting point" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "R_f", statement: "Substance distance / solvent distance." }],
            steps: [{ reasoning: "Direct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Distance ratio",
          },
        },
        {
          id: "edialchem-chrom-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A spot moves 2.4 cm while solvent front moves 6.0 cm. Calculate R_f.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 0.4, tolerance: 0.01 }] },
          markscheme: {
            principles: [{ kind: "method", name: "R_f", statement: "Distance ratio." }],
            steps: [
              { reasoning: "R_f = 2.4/6.0.", marks: 1, markCode: "M" },
              { reasoning: "= 0.40.", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.40",
            commonErrors: ["Inverting ratio."],
          },
        },
        {
          id: "edialchem-chrom-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why different compounds have different R_f values.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Chromatography", statement: "Different solubility/adsorption → different movement." }],
            steps: [
              { reasoning: "Compounds have different solubility in mobile phase.", marks: 1, markCode: "M" },
              { reasoning: "Different attraction to stationary phase (adsorption).", marks: 1, markCode: "M" },
              { reasoning: "Balance determines speed of movement.", marks: 1, markCode: "A" },
              { reasoning: "More soluble in solvent → higher R_f; more attracted to stationary → lower R_f.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Different solubility/adsorption → different R_f",
            commonErrors: ["Saying all compounds move together."],
          },
        },
        {
          id: "edialchem-chrom-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Describe paper chromatography and its uses.",
          parts: [
            { label: "a", prompt: "Apparatus and procedure.", marks: 4 },
            { label: "b", prompt: "How separation works.", marks: 3 },
            { label: "c", prompt: "Uses and limitations.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "method", name: "Paper chromatography", statement: "Stationary paper, mobile solvent." }],
            steps: [
              { part: "a", reasoning: "Baseline drawn near bottom of paper.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Sample spotted on baseline; solvent in beaker.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Paper suspended so baseline above solvent level.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Cap to saturate atmosphere.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Solvent rises by capillary action.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Components separate by different solubility/adsorption.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Different R_f values identify components.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Uses: separating pigments, amino acids, drugs.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Purity testing, forensic analysis.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Limitation: only separates, doesn't identify alone.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Paper chromatography separates by R_f",
            commonErrors: ["Saying it identifies compounds alone."],
          },
        },
      ],
    },
  ],
};
