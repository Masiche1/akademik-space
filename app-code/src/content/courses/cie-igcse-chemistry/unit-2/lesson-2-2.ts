import type { Lesson } from "../../../types.ts";

export const lesson122: Lesson = {
  id: "ciecy-u2-lesson-2-2",
  code: "2-2",
  title: "Chemical Bonding: Ionic and Covalent",
  goal: "I CAN describe ionic and covalent bonding and predict the formulae and properties of compounds.",
  standards: ["0654 2.2"],
  vocabulary: [
    { term: "Ionic bond", definition: "Electrostatic attraction between oppositely charged ions." },
    { term: "Ion", definition: "Charged particle formed by losing or gaining electrons." },
    { term: "Cation", definition: "Positively charged ion (metal loses electrons)." },
    { term: "Anion", definition: "Negatively charged ion (non-metal gains electrons)." },
    { term: "Covalent bond", definition: "Shared pair of electrons between atoms." },
    { term: "Dative bond", definition: "Covalent bond where both electrons come from one atom." },
    { term: "Octet rule", definition: "Atoms bond to achieve 8 outer electrons (like noble gases)." },
    { term: "Lewis diagram", definition: "Diagram showing outer electrons and bonding pairs as dots/crosses." },
  ],
  concepts: [
    {
      id: "ciecy-u2-ionic-bonding",
      title: "Ionic bonding",
      skill: "Describe ionic bonding, ion formation and the properties of ionic compounds.",
      lesson: {
        sections: [
          {
            heading: "Forming ions",
            body: "Metals lose electrons → positive ions (cations): Na → Na⁺ + e⁻. Non-metals gain electrons → negative ions (anions): Cl + e⁻ → Cl⁻.\n\nIons form to achieve a stable electron arrangement (noble gas config).",
          },
          {
            heading: "The ionic bond",
            body: "The strong electrostatic attraction between oppositely charged ions holds the giant ionic lattice together.\n\nFormula examples: NaCl (1:1), MgCl₂ (Mg²⁺ needs 2 Cl⁻), CaO (Ca²⁺ + O²⁻).",
          },
          {
            heading: "Properties of ionic compounds",
            body: "- High melting/boiling points (strong lattice forces)\n- Conduct electricity **only when molten or dissolved** (ions must be free)\n- Brittle — like charges repel when layers shift\n- Usually soluble in water",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why does sodium chloride conduct electricity when molten but not as a solid?",
          solution: "In the solid, ions are fixed in the lattice and cannot move. When molten, ions are free to move and carry charge.",
        },
      },
      questions: [
        {
          id: "ciecy-u2-ionic-bonding-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an ionic bond?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Shared electrons" }, { id: "b", text: "Electrostatic attraction between ions" }, { id: "c", text: "Metallic attraction" }, { id: "d", text: "Hydrogen bonding" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Ionic bond", statement: "Attraction between oppositely charged ions." }],
            steps: [{ reasoning: "Recall.", working: "\\text{ion-ion attraction}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Electrostatic attraction between ions",
            commonErrors: ["Confusing with covalent (shared electrons)."],
          },
        },
        {
          id: "ciecy-u2-ionic-bonding-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why ionic compounds have high melting points.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Ionic lattice", statement: "Strong electrostatic forces between all ions." }],
            steps: [
              { reasoning: "Strong attractions throughout lattice.", marks: 1, markCode: "M" },
              { reasoning: "Much energy needed to overcome.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ionic compounds have giant lattices with strong electrostatic attractions between every ion — large amounts of energy are needed to separate them, so melting points are high.",
            commonErrors: ["Saying 'ions are heavy' — it's the lattice forces."],
          },
        },
        {
          id: "ciecy-u2-ionic-bonding-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why solid sodium chloride does not conduct electricity but dissolved NaCl does.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Ionic conduction", statement: "Only mobile ions conduct." }],
            steps: [
              { reasoning: "Solid: ions fixed in lattice.", marks: 1, markCode: "M" },
              { reasoning: "Cannot move to carry charge.", marks: 1, markCode: "M" },
              { reasoning: "Dissolved: ions free to move.", marks: 1, markCode: "M" },
              { reasoning: "Conclude conduction.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "In solid NaCl the ions are locked in the lattice and cannot move. When dissolved, ions are free to move through the solution and carry electric current.",
            commonErrors: ["Saying electrons carry the charge — ions do."],
          },
        },
        {
          id: "ciecy-u2-ionic-bonding-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the formation of magnesium chloride from magnesium and chlorine.",
          parts: [
            { label: "a", prompt: "Describe electron transfer.", marks: 3 },
            { label: "b", prompt: "Write the ions formed.", marks: 2 },
            { label: "c", prompt: "Explain the bonding and formula.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Ionic bonding", statement: "Mg loses 2e⁻ → Mg²⁺; Cl gains 1e⁻ each → 2Cl⁻." }],
            steps: [
              { part: "a", reasoning: "Mg (2,8,2) loses 2 outer electrons.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Each Cl (2,8,7) gains 1 electron.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both achieve noble gas arrangement.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Mg²⁺ and Cl⁻.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State charges.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Ions attract electrostatically.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Giant ionic lattice.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Formula MgCl₂ balances charges.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Mg loses 2e⁻, 2Cl gain 1e⁻ each (b) Mg²⁺+2Cl⁻ (c) ionic lattice, MgCl₂",
            commonErrors: ["In (c) formula MgCl — charge not balanced."],
          },
        },
      ],
    },
    {
      id: "ciecy-u2-covalent-bonding",
      title: "Covalent bonding",
      skill: "Describe covalent bonding, simple molecules and their properties.",
      lesson: {
        sections: [
          {
            heading: "Sharing electrons",
            body: "Non-metal atoms share electron pairs to complete their outer shell.\n\n- H₂: each H shares 1 pair (duplet)\n- Cl₂: each Cl shares 1 pair (octet)\n- H₂O: O shares 2 pairs with 2 H\n- CH₄: C shares 4 pairs with 4 H\n- CO₂: C shares 2 pairs with each O (double bonds)",
          },
          {
            heading: "Dative bonds",
            body: "Both electrons in the shared pair come from one atom. Common in NH₄⁺ (NH₃ donates lone pair to H⁺).",
          },
          {
            heading: "Properties of simple molecular substances",
            body: "- Low melting/boiling points (weak intermolecular forces between molecules)\n- Do not conduct electricity (no ions/free electrons)\n- Often gases or volatile liquids at room temperature",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why is methane a gas at room temperature while sodium chloride is a solid?",
          solution: "Methane has simple molecules with weak forces between them; NaCl has a giant ionic lattice with strong ionic bonds.",
        },
      },
      questions: [
        {
          id: "ciecy-u2-covalent-bonding-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a covalent bond?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Electron transfer" }, { id: "b", text: "Shared electron pair" }, { id: "c", text: "Ion attraction" }, { id: "d", text: "Metallic bonding" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Covalent bond", statement: "Shared pair of electrons." }],
            steps: [{ reasoning: "Recall.", working: "\\text{shared pair}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Shared electron pair",
            commonErrors: ["Confusing with ionic (electron transfer)."],
          },
        },
        {
          id: "ciecy-u2-covalent-bonding-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why simple molecular substances have low melting points.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Intermolecular forces", statement: "Weak forces between molecules." }],
            steps: [
              { reasoning: "Strong covalent bonds within molecules.", marks: 1, markCode: "M" },
              { reasoning: "Only weak forces between molecules to overcome.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The covalent bonds within each molecule are strong, but the forces between separate molecules are weak — little energy is needed to separate them, so melting points are low.",
            commonErrors: ["Saying covalent bonds are weak — the intermolecular forces are."],
          },
        },
        {
          id: "ciecy-u2-covalent-bonding-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Draw a Lewis diagram for water and state how many bonding pairs and lone pairs oxygen has.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "H₂O", statement: "O with 2 bonding pairs + 2 lone pairs; bent shape." }],
            steps: [
              { reasoning: "O (6 outer e⁻) + 2H → 2 shared pairs.", marks: 1, markCode: "M" },
              { reasoning: "O retains 2 lone pairs.", marks: 1, markCode: "M" },
              { reasoning: "State 2 bonding + 2 lone pairs.", marks: 1, markCode: "A" },
              { reasoning: "Bent/angular shape.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "O has 2 bonding pairs and 2 lone pairs — bent (V-shaped) molecule.",
            commonErrors: ["Drawing linear H-O-H — lone pairs bend the molecule."],
          },
        },
        {
          id: "ciecy-u2-covalent-bonding-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Compare ionic and covalent bonding.",
          parts: [
            { label: "a", prompt: "Compare electron arrangement.", marks: 3 },
            { label: "b", prompt: "Compare structure types formed.", marks: 3 },
            { label: "c", prompt: "Compare two properties of the compounds.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Bonding comparison", statement: "Ionic: transfer, lattice; covalent: sharing, molecules." }],
            steps: [
              { part: "a", reasoning: "Ionic: electron transfer metal→non-metal.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Covalent: shared pairs between non-metals.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both achieve noble gas config.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Ionic → giant lattice.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Covalent → simple molecules (or giant structures).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Ionic: high mp, conducts when molten.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Covalent: low mp, does not conduct.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correctly matched.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) transfer vs sharing (b) lattice vs molecules (c) ionic high mp/cond molten; covalent low mp/no conduct",
            commonErrors: ["In (c) not comparing like-with-like."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciecy-u2-bonding-notes",
      title: "Chemical bonding — revision notes",
      summary: "Ionic and covalent bonding, ion formation, properties comparison.",
      sections: [
        {
          heading: "Key facts",
          body: "Metal + non-metal → ionic (electron transfer, ions, lattice). Non-metal + non-metal → covalent (shared pairs, molecules). Ionic: high mp, conducts molten/aqueous. Covalent molecules: low mp, no conduction. Dative = both electrons from one atom.",
        },
        {
          heading: "Exam technique",
          body: "- Ionic formula balances charges: Mg²⁺ needs 2Cl⁻ → MgCl₂.\n- Covalent: count electrons to check octet/duplet.\n- Lone pairs bend molecules (H₂O bent).",
        },
      ],
    },
  ],
};
