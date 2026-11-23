import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "chem10-u7-lesson-7-1",
  code: "7-1",
  title: "Ionic and Covalent Bonding",
  goal: "I CAN distinguish ionic and covalent bonding, predict bond types, and write Lewis structures.",
  standards: [
    "HS-PS1-2",
    "HS-PS2-1",
    "SEP: Constructing Explanations",
    "CCC: Structure and Function",
  ],
  vocabulary: [
    {
      term: "Ionic bond",
      definition: "Electrostatic attraction between oppositely charged ions.",
    },
    {
      term: "Covalent bond",
      definition: "Sharing of electron pairs between atoms.",
    },
    {
      term: "Lewis structure",
      definition: "Diagram showing valence electrons and bonds.",
    },
    {
      term: "Octet rule",
      definition: "Atoms tend to have 8 valence electrons.",
    },
    {
      term: "Electronegativity",
      definition: "Ability to attract bonding electrons.",
    },
    {
      term: "Polarity",
      definition: "Unequal electron sharing → partial charges.",
    },
    {
      term: "Coordinate bond",
      definition: "Covalent bond where both electrons come from one atom.",
    },
  ],
  concepts: [
    {
      id: "chem10-u7-ionic",
      title: "Ionic bonding",
      skill: "Predict ionic compounds and explain formation of ions.",
      lesson: {
        sections: [
          {
            heading: "Ionic bond formation",
            body: "Occurs between metal and nonmetal:\n1. Metal loses electrons → cation (+).\n2. Nonmetal gains electrons → anion (−).\n3. Electrostatic attraction → ionic bond.\n\nExample: Na + Cl → Na⁺ + Cl⁻ → NaCl.\n\nIonic compounds form crystal lattices, have high melting points, conduct when dissolved/molten.",
          },
          {
            heading: "Predicting ionic compounds",
            body: "- Metal + nonmetal → ionic.\n- Charge balance: Na⁺ + Cl⁻ → NaCl; Ca²⁺ + 2Cl⁻ → CaCl₂.\n- Polyatomic ions: NO₃⁻, SO₄²⁻, OH⁻.",
          },
        ],
        keyFormulas: [
          {
            name: "Ionic bond",
            statement: "Metal + nonmetal → ions + lattice",
          },
          {
            name: "Charge balance",
            statement: "Total positive = total negative",
          },
          {
            name: "Cation/anion",
            statement: "Metal loses e⁻; nonmetal gains e⁻",
          },
        ],
        workedExample: {
          problem: "What compound forms between calcium and oxygen?",
          solution: "Ca²⁺ + O²⁻ → CaO (1:1 ratio).",
        },
      },
      questions: [
        {
          id: "chem10-u7-ionic-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What types of elements form ionic bonds?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two nonmetals" },
              { id: "b", text: "Metal + nonmetal" },
              { id: "c", text: "Two metals" },
              { id: "d", text: "Noble gases" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Ionic bond",
                statement: "Metal + nonmetal.",
              },
            ],
            steps: [
              {
                reasoning: "Ionic = metal loses e⁻, nonmetal gains e⁻.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Metal + nonmetal",
            commonErrors: ["Choosing two nonmetals (that's covalent)."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u7-ionic-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the formula for the compound formed by magnesium and chlorine.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Ions", statement: "Mg²⁺, Cl⁻." },
              {
                kind: "formula",
                name: "Charge balance",
                statement: "2 Cl⁻ needed per Mg²⁺.",
              },
            ],
            steps: [
              { reasoning: "Mg loses 2e⁻ → Mg²⁺.", marks: 1, markCode: "M" },
              { reasoning: "Cl gains 1e⁻ → Cl⁻.", marks: 1, markCode: "M" },
              {
                reasoning: "MgCl₂ (2 Cl⁻ balance Mg²⁺).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "MgCl₂.",
            commonErrors: ["MgCl or MgCl₃."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "chem10-u7-ionic-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why ionic compounds have high melting points.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Ionic lattice",
                statement: "Strong electrostatic forces throughout crystal.",
              },
            ],
            steps: [
              {
                reasoning: "Ions arranged in crystal lattice.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Strong electrostatic attraction between all ions.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Breaking lattice requires lots of energy.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Compare: covalent molecular compounds have weak intermolecular forces.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Strong ionic lattice → high melting point.",
            commonErrors: ["Not mentioning lattice."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "chem10-u7-ionic-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Predict formulas for compounds formed by:",
          parts: [
            { label: "a", prompt: "Na and O", marks: 2 },
            { label: "b", prompt: "Ca and Cl", marks: 2 },
            { label: "c", prompt: "Al and S", marks: 3 },
            { label: "d", prompt: "K and NO₃", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Ionic formulas",
                statement: "Balance charges.",
              },
            ],
            steps: [
              {
                reasoning: "Na⁺ + O²⁻ → Na₂O.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Ca²⁺ + 2Cl⁻ → CaCl₂.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Al³⁺ + S²⁻ → Al₂S₃ (2 Al³⁺ = 6+, 3 S²⁻ = 6−).",
                marks: 3,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "K⁺ + NO₃⁻ → KNO₃ (1:1).",
                marks: 2,
                markCode: "M",
                part: "d",
              },
              {
                reasoning: "Correct polyatomic ion recognition.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer: "(a) Na₂O (b) CaCl₂ (c) Al₂S₃ (d) KNO₃.",
            commonErrors: ["Wrong charge balance."],
            examinerNote: "2+2+3+3 = 10.",
          },
        },
      ],
    },
    {
      id: "chem10-u7-covalent",
      title: "Covalent bonding and Lewis structures",
      skill:
        "Draw Lewis structures and distinguish single, double, and triple bonds.",
      lesson: {
        sections: [
          {
            heading: "Covalent bond formation",
            body: "Occurs between nonmetals:\n- Atoms share electron pairs.\n- Each atom achieves octet (or duet for H).\n\nSingle bond = 1 shared pair; double = 2; triple = 3.\n\nExample: H₂O — O shares 2 pairs with H.",
          },
          {
            heading: "Lewis structures",
            body: "- Show valence electrons as dots.\n- Bonds as lines (pairs).\n- Lone pairs shown.\n\nSteps: count valence e⁻, place central atom, connect with bonds, distribute remaining e⁻ to complete octets.",
          },
        ],
        keyFormulas: [
          { name: "Covalent", statement: "Nonmetal + nonmetal → shared pairs" },
          { name: "Octet", statement: "8 valence electrons (except H=2)" },
          { name: "Bond order", statement: "Single=1, double=2, triple=3" },
        ],
        workedExample: {
          problem: "Draw Lewis structure for CO₂.",
          solution: "O=C=O — each O has 2 lone pairs, C has no lone pairs.",
        },
      },
      questions: [
        {
          id: "chem10-u7-covalent-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is shared in a covalent bond?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Protons" },
              { id: "b", text: "Electron pairs" },
              { id: "c", text: "Neutrons" },
              { id: "d", text: "Ions" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Covalent",
                statement: "Shared electron pairs.",
              },
            ],
            steps: [
              {
                reasoning: "Covalent = shared electrons.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Electron pairs",
            commonErrors: ["Confusing with ionic."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u7-covalent-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "How many bonds are in N₂ and what type?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Triple bond",
                statement: "N≡N shares 3 electron pairs.",
              },
            ],
            steps: [
              {
                reasoning: "N has 5 valence electrons.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Each N needs 3 more electrons for octet.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Triple bond (N≡N) shares 3 pairs.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Triple bond.",
            commonErrors: ["Single or double bond."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "chem10-u7-covalent-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between polar and nonpolar covalent bonds.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Polar",
                statement: "Unequal sharing → δ+/δ−.",
              },
              {
                kind: "definition",
                name: "Nonpolar",
                statement: "Equal sharing → no charge separation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Polar: different electronegativities → unequal sharing.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Nonpolar: same/similar electronegativity → equal sharing.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Example polar: H₂O, HCl; nonpolar: O₂, N₂.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Polarity affects physical properties (boiling point, solubility).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Polar = unequal sharing; nonpolar = equal.",
            commonErrors: ["Not giving examples."],
            examinerNote: "R2, M1, A1.",
          },
        },
        {
          id: "chem10-u7-covalent-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Draw Lewis structures for:",
          parts: [
            { label: "a", prompt: "H₂O", marks: 2 },
            { label: "b", prompt: "CO₂", marks: 3 },
            { label: "c", prompt: "NH₃", marks: 2 },
            { label: "d", prompt: "O₂", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Lewis structures",
                statement: "Show bonds + lone pairs.",
              },
            ],
            steps: [
              {
                reasoning: "H₂O: O central, 2 single bonds, 2 lone pairs.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "CO₂: O=C=O, each O has 2 lone pairs.",
                marks: 3,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "NH₃: N central, 3 single bonds, 1 lone pair.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "O₂: O=O double bond, 2 lone pairs each.",
                marks: 3,
                markCode: "M",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) bent (b) linear (c) trigonal pyramidal (d) linear.",
            commonErrors: ["Wrong number of bonds."],
            examinerNote: "2+3+2+3 = 10.",
          },
        },
      ],
    },
    {
      id: "chem10-u7-metallic",
      title: "Metallic bonding and properties",
      skill: "Explain metallic bonding and relate to properties of metals.",
      lesson: {
        sections: [
          {
            heading: "Metallic bond",
            body: "Metal atoms release valence electrons into a **sea of delocalized electrons** shared by all atoms.\n\n- Positive metal ions in lattice.\n- Delocalized electrons move freely.\n- Strong attraction between ions and electron sea.",
          },
          {
            heading: "Properties explained",
            body: "- **Conductivity**: free electrons carry charge.\n- **Malleability**: layers slide without breaking bonds.\n- **Ductility**: can be drawn into wire.\n- **Luster**: electrons reflect light.",
          },
        ],
        keyFormulas: [
          {
            name: "Metallic bond",
            statement: "Ions + delocalized electron sea",
          },
          { name: "Conductivity", statement: "Free electrons carry current" },
          { name: "Malleability", statement: "Layers slide easily" },
        ],
        workedExample: {
          problem: "Why are metals good conductors?",
          solution:
            "Delocalized electrons move freely → carry electric current.",
        },
      },
      questions: [
        {
          id: "chem10-u7-metallic-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What holds metal atoms together?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shared electron pairs" },
              { id: "b", text: "Ions + delocalized electrons" },
              { id: "c", text: "Hydrogen bonds" },
              { id: "d", text: "Van der Waals" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Metallic bond",
                statement: "Ions + electron sea.",
              },
            ],
            steps: [
              {
                reasoning: "Metallic = positive ions + delocalized electrons.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Ions + delocalized electrons",
            commonErrors: ["Confusing with covalent."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u7-metallic-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why metals are malleable.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Malleability",
                statement: "Layers slide without breaking bonds.",
              },
            ],
            steps: [
              { reasoning: "Metal ions in layers.", marks: 1, markCode: "R" },
              {
                reasoning: "Delocalized electrons not tied to specific atoms.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Layers slide past each other → deforms without breaking.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Electron sea allows layer sliding.",
            commonErrors: ["Not mentioning electron sea."],
            examinerNote: "R2, A1.",
          },
        },
        {
          id: "chem10-u7-metallic-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare metallic, ionic, and covalent bonding.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bond types",
                statement: "Ionic=transfer, covalent=share, metallic=sea.",
              },
            ],
            steps: [
              {
                reasoning: "Ionic: electron transfer → ions + lattice.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Covalent: electron sharing → molecules.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Metallic: electron sea → conducts, malleable.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Different properties → different applications.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Ionic=ions, covalent=molecules, metallic=sea.",
            commonErrors: ["Not comparing properties."],
            examinerNote: "M3, A1.",
          },
        },
        {
          id: "chem10-u7-metallic-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Explain metallic properties using copper as example.",
          parts: [
            { label: "a", prompt: "Structure?", marks: 2 },
            { label: "b", prompt: "Why conducts electricity?", marks: 3 },
            { label: "c", prompt: "Why malleable?", marks: 2 },
            { label: "d", prompt: "Why shiny?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Metallic bonding",
                statement: "Ions + electron sea.",
              },
            ],
            steps: [
              {
                reasoning: "Cu²⁺ ions in lattice + delocalized electrons.",
                marks: 2,
                markCode: "R",
                part: "a",
              },
              {
                reasoning: "Free electrons carry current through metal.",
                marks: 3,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Layers slide → malleable.",
                marks: 2,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "Electrons reflect visible light → metallic luster.",
                marks: 3,
                markCode: "R",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) ions+sea (b) free electrons (c) layer slide (d) reflect light.",
            commonErrors: ["Not linking to electron sea."],
            examinerNote: "2+3+2+3 = 10.",
          },
        },
      ],
    },
    {
      id: "chem10-u7-polarity",
      title: "Polarity and intermolecular forces",
      skill: "Predict molecular polarity and identify intermolecular forces.",
      lesson: {
        sections: [
          {
            heading: "Bond vs molecular polarity",
            body: "- **Bond polarity**: unequal electron sharing in a bond (δ+/δ−).\n- **Molecular polarity**: overall charge distribution — depends on bond polarity AND molecular geometry (VSEPR).\n\nSymmetric molecules (CO₂, CCl₄) = nonpolar despite polar bonds.\nAsymmetric (H₂O, NH₃) = polar.",
          },
          {
            heading: "Intermolecular forces",
            body: "- **London dispersion**: all molecules; weakest.\n- **Dipole-dipole**: polar molecules.\n- **Hydrogen bonding**: H bonded to N, O, F — strongest IMF.",
          },
        ],
        keyFormulas: [
          { name: "Bond polarity", statement: "Unequal sharing → δ+/δ−" },
          { name: "Molecular polarity", statement: "Geometry + bond polarity" },
          { name: "IMF strength", statement: "H-bond > dipole > London" },
        ],
        workedExample: {
          problem: "Is CCl₄ polar?",
          solution: "No — symmetric tetrahedral → bond polarities cancel.",
        },
      },
      questions: [
        {
          id: "chem10-u7-polarity-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What makes a molecule polar?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only polar bonds" },
              { id: "b", text: "Polar bonds + asymmetric geometry" },
              { id: "c", text: "Any covalent bond" },
              { id: "d", text: "Ionic bonds" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Molecular polarity",
                statement: "Polar bonds + asymmetric shape.",
              },
            ],
            steps: [
              {
                reasoning: "Need both polar bonds AND asymmetric geometry.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Polar bonds + asymmetric geometry",
            commonErrors: ["Ignoring geometry."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u7-polarity-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Rank IMF strength: London, dipole-dipole, hydrogen bonding.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "IMF",
                statement: "H-bond strongest, London weakest.",
              },
            ],
            steps: [
              {
                reasoning: "Hydrogen bonding strongest.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Dipole-dipole intermediate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "London dispersion weakest.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "H-bond > dipole > London.",
            commonErrors: ["Wrong order."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "chem10-u7-polarity-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why water has unusually high boiling point.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Hydrogen bonding",
                statement: "H bonded to O → strong IMF.",
              },
            ],
            steps: [
              {
                reasoning: "H₂O is polar → hydrogen bonding between molecules.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "H-bonds much stronger than typical IMFs.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "More energy needed to separate molecules → high bp.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Compare: H₂S (no H-bonding) boils much lower.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Hydrogen bonding → high boiling point.",
            commonErrors: ["Not mentioning H-bonding."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "chem10-u7-polarity-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Classify molecules as polar or nonpolar:",
          parts: [
            { label: "a", prompt: "CO₂", marks: 2 },
            { label: "b", prompt: "H₂O", marks: 2 },
            { label: "c", prompt: "CCl₄", marks: 3 },
            { label: "d", prompt: "NH₃", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Molecular polarity",
                statement: "Geometry + bond polarity.",
              },
            ],
            steps: [
              {
                reasoning: "CO₂: linear, symmetric → nonpolar.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "H₂O: bent, asymmetric → polar.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning:
                  "CCl₄: tetrahedral, symmetric → nonpolar despite polar bonds.",
                marks: 3,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "NH₃: trigonal pyramidal, asymmetric → polar.",
                marks: 2,
                markCode: "M",
                part: "d",
              },
              {
                reasoning: "Lone pair on N contributes to asymmetry.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer: "(a) nonpolar (b) polar (c) nonpolar (d) polar.",
            commonErrors: ["Ignoring geometry (CCl₄)."],
            examinerNote: "2+2+3+3 = 10.",
          },
        },
      ],
    },
  ],
};
