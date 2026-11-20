import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "ediaschem-u1-lesson-1-2",
  code: "1-2",
  title: "Bonding and Structure",
  goal: "I CAN describe ionic, covalent and metallic bonding and relate structure to properties.",
  standards: ["IC1 Principles of chemistry", "Bonding"],
  vocabulary: [
    { term: "Ionic bond", definition: "Electrostatic attraction between oppositely charged ions." },
    { term: "Covalent bond", definition: "Shared pair of electrons between atoms." },
    { term: "Coordinate bond", definition: "Covalent bond where both electrons come from one atom." },
    { term: "Metallic bond", definition: "Sea of delocalised electrons holding positive ions." },
  ],
  concepts: [
    {
      id: "ediaschem-u1-ionic-covalent",
      title: "Ionic and covalent bonding",
      skill: "Explain formation of ionic and covalent bonds and predict properties.",
      lesson: {
        sections: [
          {
            heading: "Ionic bonding",
            body: "Metal loses electron(s) → cation; non-metal gains → anion; attraction forms lattice. Examples: NaCl, MgO, CaF₂. Properties: high mp/bp (strong ionic forces), conduct when molten/aqueous (ions mobile), brittle (like charges repel when layers shift), soluble in polar solvents.",
          },
          {
            heading: "Covalent bonding",
            body: "Non-metals share electron pairs to complete octet. Simple molecules (H₂O, CO₂, CH₄): low mp/bp, poor conductors, soluble in non-polar solvents. Giant covalent structures (diamond, graphite, SiO₂): very high mp, diamond doesn't conduct, graphite conducts (delocalised electrons between layers) and is slippery.",
          },
          {
            heading: "Coordinate bonds",
            body: "Both electrons from one atom, e.g. NH₄⁺ (lone pair on N donated to H⁺), H₃O⁺. Common in complexes and hydrated ions.",
          },
        ],
        keyFormulas: [{ name: "Octet rule", statement: "atoms gain/lose/share to achieve 8 valence electrons" }],
        workedExample: {
          problem: "Explain why diamond has a very high melting point but does not conduct electricity.",
          solution: "Every carbon is covalently bonded to four others in a giant lattice — enormous energy needed to break bonds. No free electrons or ions → no conduction.",
        },
      },
      questions: [
        {
          id: "ediaschem-bond-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which substance contains ionic bonds?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "CO₂" },
              { id: "b", text: "NaCl" },
              { id: "c", text: "CH₄" },
              { id: "d", text: "H₂O" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Ionic bond", statement: "Metal + non-metal → ions." }],
            steps: [{ reasoning: "NaCl = Na⁺ and Cl⁻ ions.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** NaCl",
          },
        },
        {
          id: "ediaschem-bond-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "State three properties of ionic compounds.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Ionic properties", statement: "High mp, conduct when molten/aqueous, brittle." }],
            steps: [
              { reasoning: "High melting/boiling points (strong ionic attractions).", marks: 1, markCode: "A" },
              { reasoning: "Conduct electricity when molten or in aqueous solution.", marks: 1, markCode: "A" },
              { reasoning: "Brittle — like charges repel when layers shift.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "High mp, conducts molten/aqueous, brittle",
            commonErrors: ["Saying ionic solids conduct."],
          },
        },
        {
          id: "ediaschem-bond-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why graphite conducts electricity but diamond does not, though both are giant covalent structures.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Giant covalent", statement: "Structure determines properties." }],
            steps: [
              { reasoning: "Graphite: layers of hexagonal carbon sheets; each C bonded to 3 others.", marks: 1, markCode: "M" },
              { reasoning: "Each carbon has a spare electron → delocalised electrons between layers → conducts.", marks: 1, markCode: "M" },
              { reasoning: "Diamond: each C bonded to 4 others tetrahedrally → no free electrons → insulator.", marks: 1, markCode: "A" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Graphite has delocalised electrons; diamond doesn't",
            commonErrors: ["Confusing the two allotropes' bonding."],
          },
        },
        {
          id: "ediaschem-bond-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Compare ionic and covalent bonding.",
          parts: [
            { label: "a", prompt: "Describe the formation of each.", marks: 4 },
            { label: "b", prompt: "Compare physical properties.", marks: 3 },
            { label: "c", prompt: "Give one example compound of each.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Ionic vs covalent", statement: "Electron transfer vs sharing." }],
            steps: [
              { part: "a", reasoning: "Ionic: metal transfers electron(s) to non-metal → ions attracted.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Occurs between metals and non-metals.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Covalent: non-metals share electron pairs.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Occurs between non-metals.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Ionic: high mp/bp, conducts when molten/aqueous, brittle.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Covalent (simple): low mp/bp, poor conductors.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Covalent (giant): high mp, variable conduction.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Ionic example: NaCl/MgO/CaF₂.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Covalent example: H₂O/CO₂/CH₄/diamond.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Conclude.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Transfer vs share; ionic conducts molten, covalent usually doesn't",
            commonErrors: ["Ignoring giant covalent structures."],
          },
        },
      ],
    },
    {
      id: "ediaschem-u1-metallic",
      title: "Metallic bonding and intermolecular forces",
      skill: "Explain metallic bonding and the role of intermolecular forces in molecular substances.",
      lesson: {
        sections: [
          {
            heading: "Metallic bonding",
            body: "Metal atoms release valence electrons into a 'sea' of delocalised electrons; positive metal ions held by attraction to this sea. Explains: conducts electricity/heat (free electrons), malleable/ductile (layers slide without breaking), high mp (strong metallic bonds).",
          },
          {
            heading: "Intermolecular forces",
            body: "Between molecules (weaker than bonds): London dispersion (all molecules, increases with size), dipole-dipole (polar molecules), hydrogen bonding (H bonded to N/O/F — strongest). Determine mp/bp of molecular substances.",
          },
          {
            heading: "Hydrogen bonding",
            body: "H attached to N, O or F forms H-bonds. Explains: water's high mp/bp vs H₂S/H₂Se, ice floating, DNA double helix, protein secondary structure. Boiling point trend: H₂O (100°C) >> H₂S (~-60°C).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why does water have a much higher boiling point than hydrogen sulphide?",
          solution: "Water molecules form hydrogen bonds (H bonded to O); H₂S has only dipole-dipole forces. H-bonds require much more energy to break → higher bp.",
        },
      },
      questions: [
        {
          id: "ediaschem-metal-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What allows metals to conduct electricity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ionic bonds" },
              { id: "b", text: "Delocalised electrons" },
              { id: "c", text: "Covalent bonds" },
              { id: "d", text: "Hydrogen bonds" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Metallic bond", statement: "Sea of delocalised electrons." }],
            steps: [{ reasoning: "Free electrons carry charge.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Delocalised electrons",
          },
        },
        {
          id: "ediaschem-metal-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "State two properties of metals explained by metallic bonding.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Metallic properties", statement: "Delocalised electrons + ion lattice." }],
            steps: [
              { reasoning: "Conducts electricity/heat — free electrons move.", marks: 1, markCode: "A" },
              { reasoning: "Malleable/ductile — layers slide without shattering (electron sea maintains bonding).", marks: 1, markCode: "A" },
              { reasoning: "High mp — strong attractions between ions and electron sea.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any two valid properties",
            commonErrors: ["Saying metals have covalent bonds."],
          },
        },
        {
          id: "ediaschem-metal-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why ice floats on water.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "H-bonding", statement: "Ice has open H-bonded lattice." }],
            steps: [
              { reasoning: "Water forms hydrogen bonds between molecules.", marks: 1, markCode: "M" },
              { reasoning: "In ice, molecules arrange in open hexagonal lattice → larger volume.", marks: 1, markCode: "M" },
              { reasoning: "Lower density than liquid water → ice floats.", marks: 1, markCode: "A" },
              { reasoning: "Significance: insulates water bodies.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Open lattice → lower density → floats",
            commonErrors: ["Saying ice is denser."],
          },
        },
        {
          id: "ediaschem-metal-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Explain the role of intermolecular forces in determining physical properties.",
          parts: [
            { label: "a", prompt: "Name the three types of intermolecular forces.", marks: 3 },
            { label: "b", prompt: "Explain how they affect boiling points.", marks: 4 },
            { label: "c", prompt: "Give one example each of hydrogen bonding's importance.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "IMF", statement: "Weaker than bonds; determine mp/bp." }],
            steps: [
              { part: "a", reasoning: "London dispersion (all molecules).", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Dipole-dipole (polar molecules).", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Hydrogen bonding (H with N/O/F).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Stronger IMF → more energy needed to separate molecules → higher bp.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "H-bonding > dipole-dipole > dispersion in strength.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Example: H₂O bp 100°C vs H₂S bp −60°C.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Conclude.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Water's high bp/specific heat (life-supporting).", marks: 1, markCode: "A" },
              { part: "c", reasoning: "DNA double helix stability.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Protein secondary structure / cellulose strength.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "H-bond > dipole > dispersion; stronger IMF → higher bp",
            commonErrors: ["Confusing IMF with covalent bonds."],
          },
        },
      ],
    },
  ],
};
