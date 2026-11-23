import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "chem10-u7-lesson-7-3",
  code: "7-3",
  title: "Intermolecular Forces and Properties",
  goal: "I CAN identify and rank intermolecular forces and relate them to physical properties.",
  standards: ["HS-PS1-3", "HS-PS2-1", "CCC: Structure and Function", "SEP: Constructing Explanations"],
  vocabulary: [
    { term: "London dispersion", definition: "Temporary dipoles in all molecules; weakest IMF." },
    { term: "Dipole-dipole", definition: "Attraction between permanent dipoles." },
    { term: "Hydrogen bond", definition: "Strong dipole between H and N/O/F." },
    { term: "Boiling point", definition: "Temperature where liquid → gas." },
    { term: "Surface tension", definition: "Force at liquid surface minimizing area." },
    { term: "Viscosity", definition: "Resistance to flow." },
    { term: "Polarizability", definition: "Ease of forming temporary dipoles." },
  ],
  concepts: [
    {
      id: "chem10-u7-imf-types",
      title: "Types of intermolecular forces",
      skill: "Identify and rank London, dipole-dipole, and hydrogen bonding.",
      lesson: {
        sections: [
          {
            heading: "London dispersion forces",
            body: "Temporary dipoles from electron cloud fluctuations. Present in ALL molecules.\n\n- Strength increases with molar mass (more electrons).\n- Only force in nonpolar molecules.\n- Responsible for liquefaction of noble gases.",
          },
          {
            heading: "Dipole-dipole forces",
            body: "Permanent dipoles in polar molecules attract: δ+ of one ↔ δ− of another.\n\nStronger than London. Present in all polar molecules.",
          },
          {
            heading: "Hydrogen bonding",
            body: "Special strong dipole: H bonded to N, O, or F.\n\n- H must be bonded to highly electronegative atom.\n- Very strong → high boiling points (H₂O, NH₃, HF).\n- Also in DNA, proteins.",
          },
        ],
        keyFormulas: [
          { name: "London", statement: "All molecules; weakest; increases with mass" },
          { name: "Dipole-dipole", statement: "Polar molecules; intermediate" },
          { name: "Hydrogen bond", statement: "H-N/O/F; strongest IMF" },
        ],
        workedExample: {
          problem: "Rank IMFs in: O₂, HCl, H₂O.",
          solution: "O₂: London only; HCl: dipole-dipole + London; H₂O: H-bond + dipole + London.",
        },
      },
      questions: [
        {
          id: "chem10-u7-imf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which IMF is present in ALL molecules?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hydrogen bonding" },
              { id: "b", text: "Dipole-dipole" },
              { id: "c", text: "London dispersion" },
              { id: "d", text: "Ionic" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "property", name: "London", statement: "Present in all molecules." }],
            steps: [{ reasoning: "London dispersion = universal IMF.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** London dispersion",
            commonErrors: ["Thinking only polar molecules have IMFs."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "chem10-u7-imf-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Rank IMFs: London < dipole < hydrogen bond. Give one example each.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "IMF ranking", statement: "H-bond > dipole > London." }],
            steps: [
              { reasoning: "London: O₂, CH₄.", marks: 1, markCode: "M" },
              { reasoning: "Dipole: HCl, acetone.", marks: 1, markCode: "M" },
              { reasoning: "H-bond: H₂O, NH₃, HF.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "London (O₂) < dipole (HCl) < H-bond (H₂O).",
            commonErrors: ["Wrong ranking."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "chem10-u7-imf-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why do larger molecules have stronger London forces?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Polarizability", statement: "More electrons → easier to form dipoles." },
            ],
            steps: [
              { reasoning: "Larger molecules have more electrons.", marks: 1, markCode: "R" },
              { reasoning: "Electron cloud easier to distort → temporary dipoles stronger.", marks: 1, markCode: "R" },
              { reasoning: "Stronger London forces → higher boiling point.", marks: 1, markCode: "R" },
              { reasoning: "Example: I₂ (solid) vs F₂ (gas) at room temp.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "More electrons → more polarizable → stronger London.",
            commonErrors: ["Not mentioning polarizability."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "chem10-u7-imf-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Identify all IMFs present in:",
          parts: [
            { label: "a", prompt: "CH₄", marks: 2 },
            { label: "b", prompt: "HCl", marks: 3 },
            { label: "c", prompt: "H₂O", marks: 3 },
            { label: "d", prompt: "Why does H₂O have highest bp?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "IMF identification", statement: "Check polarity + H-bonding." }],
            steps: [
              { reasoning: "CH₄: London only (nonpolar).", marks: 2, markCode: "B", part: "a" },
              { reasoning: "HCl: dipole-dipole + London.", marks: 3, markCode: "B", part: "b" },
              { reasoning: "H₂O: H-bond + dipole + London.", marks: 3, markCode: "B", part: "c" },
              { reasoning: "H₂O has hydrogen bonding → strongest IMF → highest bp.", marks: 2, markCode: "R", part: "d" },
            ],
            finalAnswer: "(a) London (b) dipole+London (c) H-bond+dipole+London (d) H-bonding.",
            commonErrors: ["Missing London (always present)."],
            examinerNote: "2+3+3+2 = 10.",
          },
        },
      ],
    },
    {
      id: "chem10-u7-properties",
      title: "IMF and physical properties",
      skill: "Relate IMF strength to boiling point, viscosity, and surface tension.",
      lesson: {
        sections: [
          {
            heading: "Boiling point",
            body: "Stronger IMF → higher boiling point (more energy to separate molecules).\n\nH₂O (H-bond) > H₂S (dipole) > H₂Se (dipole) > H₂Te — anomalous H₂O bp.",
          },
          {
            heading: "Viscosity and surface tension",
            body: "- **Viscosity**: resistance to flow; stronger IMF → higher viscosity.\n- **Surface tension**: force minimizing surface area; H-bonding → high surface tension (water).",
          },
        ],
        keyFormulas: [
          { name: "Boiling point", statement: "Stronger IMF → higher bp" },
          { name: "Viscosity", statement: "Stronger IMF → higher viscosity" },
          { name: "Surface tension", statement: "Stronger IMF → higher surface tension" },
        ],
        workedExample: {
          problem: "Why does glycerol have high viscosity?",
          solution: "3 OH groups → extensive H-bonding → strong IMF.",
        },
      },
      questions: [
        {
          id: "chem10-u7-props-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What affects boiling point most?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Molar mass only" },
              { id: "b", text: "Strength of IMFs" },
              { id: "c", text: "Molecular shape only" },
              { id: "d", text: "Color" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Boiling point", statement: "IMF strength determines bp." }],
            steps: [{ reasoning: "Stronger IMF → higher bp.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Strength of IMFs",
            commonErrors: ["Thinking mass alone determines bp."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u7-props-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why water has higher surface tension than ethanol.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Surface tension", statement: "H-bonding → high surface tension." }],
            steps: [
              { reasoning: "H₂O has 2 H-bonding sites per molecule.", marks: 1, markCode: "R" },
              { reasoning: "Ethanol has 1 OH → fewer H-bonds.", marks: 1, markCode: "M" },
              { reasoning: "More H-bonding → stronger surface tension.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "More H-bonding → higher surface tension.",
            commonErrors: ["Not comparing H-bond count."],
            examinerNote: "R1, M1, A1.",
          },
        },
        {
          id: "chem10-u7-props-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare boiling points of H₂O, H₂S, H₂Se, H₂Te and explain anomaly.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "H-bonding anomaly", statement: "H₂O bp higher than expected." },
            ],
            steps: [
              { reasoning: "Expected: bp increases down group (increasing mass).", marks: 1, markCode: "M" },
              { reasoning: "But H₂O bp = 100°C > H₂S = −60°C.", marks: 1, markCode: "M" },
              { reasoning: "H₂O has H-bonding; others don't.", marks: 1, markCode: "R" },
              { reasoning: "Anomaly explained by H-bonding.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "H₂O anomalously high due to H-bonding.",
            commonErrors: ["Not recognizing anomaly."],
            examinerNote: "M2, R1, A1.",
          },
        },
        {
          id: "chem10-u7-props-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Predict and explain properties:",
          parts: [
            { label: "a", prompt: "bp of CH₄ vs H₂O?", marks: 3 },
            { label: "b", prompt: "Viscosity of water vs honey?", marks: 2 },
            { label: "c", prompt: "Surface tension of mercury vs water?", marks: 2 },
            { label: "d", prompt: "Why is honey viscous?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "IMF properties", statement: "Stronger IMF → higher bp, viscosity, surface tension." }],
            steps: [
              { reasoning: "H₂O bp > CH₄ — H-bonding vs London only.", marks: 3, markCode: "R", part: "a" },
              { reasoning: "Honey more viscous — larger molecules, more IMFs.", marks: 2, markCode: "M", part: "b" },
              { reasoning: "Mercury higher — metallic bonding strong.", marks: 2, markCode: "M", part: "c" },
              { reasoning: "Honey: sugars → many H-bonding sites → strong IMF → viscous.", marks: 3, markCode: "R", part: "d" },
            ],
            finalAnswer: "(a) H₂O higher (b) honey (c) mercury (d) H-bonding + size.",
            commonErrors: ["Not linking to IMF."],
            examinerNote: "3+2+2+3 = 10.",
          },
        },
      ],
    },
    {
      id: "chem10-u7-solubility",
      title: "Solubility and 'like dissolves like'",
      skill: "Apply solubility principles to predict dissolution.",
      lesson: {
        sections: [
          {
            heading: "Like dissolves like",
            body: "- Polar solutes dissolve in polar solvents.\n- Nonpolar solutes dissolve in nonpolar solvents.\n- Ionic compounds dissolve in polar solvents (water).",
          },
          {
            heading: "Factors affecting solubility",
            body: "- Temperature: most solids more soluble when hot.\n- Pressure: gases more soluble at high pressure.\n- IMF match between solute and solvent.",
          },
        ],
        keyFormulas: [
          { name: "Like dissolves like", statement: "Polar-polar, nonpolar-nonpolar" },
          { name: "Temperature", statement: "Most solids: solubility ↑ with T" },
          { name: "Pressure", statement: "Gases: solubility ↑ with P" },
        ],
        workedExample: {
          problem: "Why doesn't oil dissolve in water?",
          solution: "Oil nonpolar, water polar → IMF mismatch.",
        },
      },
      questions: [
        {
          id: "chem10-u7-solubility-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does "like dissolves like" mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Similar substances dissolve each other" },
              { id: "b", text: "All substances dissolve" },
              { id: "c", text: "Only water dissolves" },
              { id: "d", text: "Heat dissolves" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Like dissolves like", statement: "Similar polarity → dissolves." }],
            steps: [{ reasoning: "Polar-polar and nonpolar-nonpolar dissolve.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Similar substances dissolve each other",
            commonErrors: ["Not understanding principle."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "chem10-u7-solubility-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why does salt dissolve in water but not in oil?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Polarity", statement: "Salt ionic/polar; water polar." },
            ],
            steps: [
              { reasoning: "Salt = ionic → polar.", marks: 1, markCode: "M" },
              { reasoning: "Water = polar → dissolves ionic.", marks: 1, markCode: "M" },
              { reasoning: "Oil = nonpolar → can't dissolve ionic.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Polarity match: salt-water yes, salt-oil no.",
            commonErrors: ["Not mentioning polarity."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "chem10-u7-solubility-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does temperature affect solubility of gases vs solids?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Solubility vs T", statement: "Solids ↑, gases ↓ with T." },
            ],
            steps: [
              { reasoning: "Most solids: solubility increases with T.", marks: 1, markCode: "R" },
              { reasoning: "Gases: solubility decreases with T.", marks: 1, markCode: "R" },
              { reasoning: "Solids: more energy overcomes lattice; gases: escape tendency increases.", marks: 1, markCode: "R" },
              { reasoning: "Example: CO₂ less soluble in warm soda.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Solids ↑, gases ↓ with temperature.",
            commonErrors: ["Same trend for both."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "chem10-u7-solubility-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Predict solubility and explain:",
          parts: [
            { label: "a", prompt: "Sugar in water?", marks: 2 },
            { label: "b", prompt: "Oil in water?", marks: 2 },
            { label: "c", prompt: "O₂ gas in cold vs warm water?", marks: 3 },
            { label: "d", prompt: "Why does pressure affect gas solubility?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Solubility", statement: "Like dissolves like + T/P effects." }],
            steps: [
              { reasoning: "Sugar polar → dissolves in water.", marks: 2, markCode: "M", part: "a" },
              { reasoning: "Oil nonpolar → doesn't dissolve in water.", marks: 2, markCode: "M", part: "b" },
              { reasoning: "More O₂ in cold — gas solubility decreases with T.", marks: 3, markCode: "R", part: "c" },
              { reasoning: "Higher P → more gas dissolves (Henry's law).", marks: 2, markCode: "R", part: "d" },
              { reasoning: "Pressure forces gas molecules into solution.", marks: 1, markCode: "A", part: "d" },
            ],
            finalAnswer: "(a) yes (b) no (c) cold more (d) pressure forces dissolution.",
            commonErrors: ["Not knowing Henry's law."],
            examinerNote: "2+2+3+3 = 10.",
          },
        },
      ],
    },
  ],
};
