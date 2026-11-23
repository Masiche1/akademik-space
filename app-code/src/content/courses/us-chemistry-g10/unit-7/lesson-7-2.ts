import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "chem10-u7-lesson-7-2",
  code: "7-2",
  title: "VSEPR and Molecular Geometry",
  goal: "I CAN use VSEPR theory to predict molecular shapes and explain their effect on polarity.",
  standards: [
    "HS-PS1-2",
    "HS-PS2-1",
    "CCC: Structure and Function",
    "SEP: Constructing Explanations",
  ],
  vocabulary: [
    {
      term: "VSEPR",
      definition:
        "Valence Shell Electron Pair Repulsion — electron pairs repel.",
    },
    {
      term: "Electron geometry",
      definition: "Arrangement of electron domains.",
    },
    {
      term: "Molecular geometry",
      definition: "Arrangement of atoms (ignoring lone pairs).",
    },
    {
      term: "Steric number",
      definition: "Bonding pairs + lone pairs on central atom.",
    },
    {
      term: "Lone pair",
      definition: "Non-bonding electron pair on central atom.",
    },
    { term: "Bonding pair", definition: "Electron pair shared between atoms." },
    { term: "Trigonal planar", definition: "3 electron domains, 120° angles." },
    { term: "Tetrahedral", definition: "4 electron domains, 109.5° angles." },
  ],
  concepts: [
    {
      id: "chem10-u7-vsepr-basics",
      title: "VSEPR basics",
      skill: "Determine steric number and predict electron/molecular geometry.",
      lesson: {
        sections: [
          {
            heading: "VSEPR principle",
            body: "Electron pairs (bonding and lone) repel each other → arrange to maximize distance.\n\n**Steric number** = bonding pairs + lone pairs on central atom.\n\n| Steric # | Electron geometry | Bonding | Lone pairs | Molecular geometry | Angle |\n|---|---|---|---|---|---|\n| 2 | Linear | 2 | 0 | Linear | 180° |\n| 3 | Trigonal planar | 3 | 0 | Trigonal planar | 120° |\n| 4 | Tetrahedral | 4 | 0 | Tetrahedral | 109.5° |\n| 4 | Tetrahedral | 3 | 1 | Trigonal pyramidal | ~107° |\n| 4 | Tetrahedral | 2 | 2 | Bent | ~104.5° |",
          },
          {
            heading: "Lone pair effect",
            body: "Lone pairs repel MORE than bonding pairs → compress bond angles.\n\nH₂O: tetrahedral electron geometry but bent molecular (104.5° < 109.5°).",
          },
        ],
        keyFormulas: [
          { name: "Steric number", statement: "Bonding pairs + lone pairs" },
          { name: "Linear", statement: "2 domains, 180°" },
          { name: "Tetrahedral", statement: "4 domains, 109.5°" },
        ],
        workedExample: {
          problem: "Predict geometry of NH₃ (N has 3 bonds + 1 lone pair).",
          solution:
            "Steric # = 4 → tetrahedral electron, trigonal pyramidal molecular.",
        },
      },
      questions: [
        {
          id: "chem10-u7-vsepr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does VSEPR stand for?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Valence Shell Electron Pair Repulsion" },
              { id: "b", text: "Variable Shell Electron Probability" },
              { id: "c", text: "Valence Structure Electron Pair Repulsion" },
              { id: "d", text: "Vibrational Spectroscopy Electron Pair" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "VSEPR",
                statement: "Valence Shell Electron Pair Repulsion.",
              },
            ],
            steps: [
              {
                reasoning: "VSEPR = electron pairs repel.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Valence Shell Electron Pair Repulsion",
            commonErrors: ["Not knowing acronym."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "chem10-u7-vsepr-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the molecular geometry of a molecule with steric number 4 and 2 lone pairs?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "VSEPR",
                statement: "4 domains + 2 LP = bent.",
              },
            ],
            steps: [
              {
                reasoning: "Steric # 4 → tetrahedral electron geometry.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "2 lone pairs → bent molecular geometry.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Bond angle ~104.5° (compressed by lone pairs).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Bent, ~104.5°.",
            commonErrors: ["Tetrahedral (ignoring lone pairs)."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "chem10-u7-vsepr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is the H-O-H bond angle in water less than 109.5°?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Lone pair repulsion",
                statement: "Lone pairs repel more than bonds.",
              },
            ],
            steps: [
              {
                reasoning:
                  "O has 2 bonding + 2 lone pairs (tetrahedral electron).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Lone pairs repel more strongly than bonding pairs.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Lone pairs push bonding pairs closer → smaller angle.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Angle = 104.5° < 109.5°.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Lone pair repulsion compresses bond angle.",
            commonErrors: ["Not mentioning lone pairs."],
            examinerNote: "M1, R2, A1.",
          },
        },
        {
          id: "chem10-u7-vsepr-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Predict electron and molecular geometry for:",
          parts: [
            { label: "a", prompt: "CO₂ (steric # 2)", marks: 2 },
            { label: "b", prompt: "BF₃ (steric # 3)", marks: 2 },
            { label: "c", prompt: "CH₄ (steric # 4)", marks: 3 },
            { label: "d", prompt: "NH₃ (steric # 4, 1 LP)", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "VSEPR table",
                statement: "Geometry from steric number.",
              },
            ],
            steps: [
              {
                reasoning: "CO₂: linear electron, linear molecular, 180°.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "BF₃: trigonal planar both, 120°.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "CH₄: tetrahedral both, 109.5°.",
                marks: 3,
                markCode: "M",
                part: "c",
              },
              {
                reasoning:
                  "NH₃: tetrahedral electron, trigonal pyramidal molecular, ~107°.",
                marks: 2,
                markCode: "M",
                part: "d",
              },
              {
                reasoning: "Lone pair compresses angle.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) linear (b) trigonal planar (c) tetrahedral (d) trigonal pyramidal.",
            commonErrors: ["Confusing electron vs molecular geometry."],
            examinerNote: "2+2+3+3 = 10.",
          },
        },
      ],
    },
    {
      id: "chem10-u7-geometry-polarity",
      title: "Geometry and polarity",
      skill: "Relate molecular geometry to polarity.",
      lesson: {
        sections: [
          {
            heading: "Symmetry and polarity",
            body: "Molecular polarity depends on:\n1. Bond polarity (electronegativity difference).\n2. Molecular geometry (symmetry).\n\n**Symmetric** molecules → polarities cancel → nonpolar.\n**Asymmetric** → don't cancel → polar.",
          },
          {
            heading: "Examples",
            body: "- **CO₂** (linear): polar bonds but symmetric → nonpolar.\n- **CCl₄** (tetrahedral): polar bonds but symmetric → nonpolar.\n- **H₂O** (bent): polar bonds + asymmetric → polar.\n- **NH₃** (trigonal pyramidal): polar bonds + asymmetric → polar.",
          },
        ],
        keyFormulas: [
          { name: "Symmetric", statement: "Bond polarities cancel → nonpolar" },
          {
            name: "Asymmetric",
            statement: "Bond polarities don't cancel → polar",
          },
          { name: "Dipole moment", statement: "Measure of molecular polarity" },
        ],
        workedExample: {
          problem: "Is BF₃ polar?",
          solution: "No — trigonal planar symmetric → polarities cancel.",
        },
      },
      questions: [
        {
          id: "chem10-u7-geopol-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why is CO₂ nonpolar despite polar bonds?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It has no bonds" },
              { id: "b", text: "Linear geometry → polarities cancel" },
              { id: "c", text: "C and O have same electronegativity" },
              { id: "d", text: "It's ionic" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Molecular polarity",
                statement: "Symmetry cancels bond polarities.",
              },
            ],
            steps: [
              {
                reasoning: "Linear symmetric → C=O dipoles cancel.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Linear geometry → polarities cancel",
            commonErrors: ["Thinking polar bonds = polar molecule."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u7-geopol-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Predict polarity of CCl₄ and explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "CCl₄",
                statement: "Tetrahedral symmetric → nonpolar.",
              },
            ],
            steps: [
              {
                reasoning: "C-Cl bonds are polar (Cl more electronegative).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Tetrahedral geometry is symmetric.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Four bond dipoles cancel → nonpolar molecule.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Nonpolar — symmetric tetrahedral cancels dipoles.",
            commonErrors: ["Ignoring symmetry."],
            examinerNote: "M1, R1, A1.",
          },
        },
        {
          id: "chem10-u7-geopol-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare polarity of H₂O and CO₂.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Geometry effect",
                statement: "Bent vs linear → different polarity.",
              },
            ],
            steps: [
              { reasoning: "Both have polar bonds.", marks: 1, markCode: "M" },
              {
                reasoning: "H₂O bent → asymmetric → polar.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "CO₂ linear → symmetric → nonpolar.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Geometry determines whether dipoles cancel.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "H₂O polar, CO₂ nonpolar — geometry decides.",
            commonErrors: ["Not comparing geometry."],
            examinerNote: "M3, R1.",
          },
        },
        {
          id: "chem10-u7-geopol-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Predict molecular geometry and polarity for:",
          parts: [
            { label: "a", prompt: "SO₂ (steric # 3, 1 LP)", marks: 3 },
            { label: "b", prompt: "CH₄", marks: 2 },
            { label: "c", prompt: "H₂S", marks: 2 },
            { label: "d", prompt: "BF₃", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "VSEPR + polarity",
                statement: "Geometry → symmetry → polarity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "SO₂: trigonal planar electron, bent molecular → polar.",
                marks: 3,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "CH₄: tetrahedral, nonpolar (no polar bonds).",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "H₂S: bent → polar (like H₂O).",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "BF₃: trigonal planar, symmetric → nonpolar.",
                marks: 2,
                markCode: "M",
                part: "d",
              },
              {
                reasoning: "B-F bonds polar but symmetric → cancel.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) bent, polar (b) tetrahedral, nonpolar (c) bent, polar (d) trigonal planar, nonpolar.",
            commonErrors: ["Forgetting lone pairs affect geometry."],
            examinerNote: "3+2+2+3 = 10.",
          },
        },
      ],
    },
    {
      id: "chem10-u7-network",
      title: "Network covalent solids",
      skill:
        "Describe network covalent bonding in diamond, graphite, and SiO₂.",
      lesson: {
        sections: [
          {
            heading: "Network solids",
            body: "Atoms bonded in 3D network → extremely strong, high melting points.\n\n- **Diamond**: each C bonded to 4 others → hardest natural substance.\n- **Graphite**: layers of C hexagons → slippery, conducts (delocalized electrons).\n- **SiO₂ (quartz)**: Si-O network → very hard, high mp.",
          },
          {
            heading: "Comparison",
            body: "Same element (C) can form different structures → different properties.\n\nDiamond: all bonds → insulator, hard.\nGraphite: layered → conductor, soft.",
          },
        ],
        keyFormulas: [
          {
            name: "Network solid",
            statement: "3D covalent network → very strong",
          },
          { name: "Diamond", statement: "Tetrahedral C network → hardest" },
          { name: "Graphite", statement: "Layered C → conductor" },
        ],
        workedExample: {
          problem: "Why does diamond have extremely high melting point?",
          solution:
            "Every C bonded to 4 others in 3D network → breaking requires huge energy.",
        },
      },
      questions: [
        {
          id: "chem10-u7-network-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a network covalent solid?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Molecules held by IMFs" },
              { id: "b", text: "Atoms bonded in 3D network" },
              { id: "c", text: "Ions in lattice" },
              { id: "d", text: "Metal atoms" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Network solid",
                statement: "3D covalent network.",
              },
            ],
            steps: [
              {
                reasoning: "Network = atoms bonded throughout 3D structure.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Atoms bonded in 3D network",
            commonErrors: ["Confusing with molecular solid."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u7-network-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is graphite a good electrical conductor but diamond is not?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Graphite",
                statement: "Delocalized electrons between layers.",
              },
              {
                kind: "property",
                name: "Diamond",
                statement: "All electrons in bonds.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Graphite: each C has 1 delocalized electron → conducts.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Diamond: all 4 electrons in bonds → no free electrons.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Structure determines conductivity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Graphite has delocalized electrons; diamond doesn't.",
            commonErrors: ["Not linking structure to property."],
            examinerNote: "R2, A1.",
          },
        },
        {
          id: "chem10-u7-network-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Diamond and graphite are both carbon. Explain how same element has different properties.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Allotropes",
                statement: "Same element, different structure.",
              },
            ],
            steps: [
              {
                reasoning: "Different arrangements of C atoms.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Diamond: 3D tetrahedral → hard, insulator.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Graphite: layered hexagonal → soft, conductor.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Structure determines properties (allotropes).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Allotropes — different structures → different properties.",
            commonErrors: ["Saying they're different elements."],
            examinerNote: "R1, M2, A1.",
          },
        },
        {
          id: "chem10-u7-network-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Compare diamond, graphite, and SiO₂ (quartz).",
          parts: [
            { label: "a", prompt: "Structure of each?", marks: 3 },
            { label: "b", prompt: "Hardness?", marks: 2 },
            { label: "c", prompt: "Conductivity?", marks: 2 },
            { label: "d", prompt: "Why so different?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Network solids",
                statement: "Structure → properties.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Diamond: 3D C network; graphite: layered C; quartz: Si-O network.",
                marks: 3,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Diamond/quartz hard; graphite soft.",
                marks: 2,
                markCode: "B",
                part: "b",
              },
              {
                reasoning: "Graphite conducts; diamond/quartz don't.",
                marks: 2,
                markCode: "B",
                part: "c",
              },
              {
                reasoning:
                  "Different bonding arrangements → different properties.",
                marks: 3,
                markCode: "R",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) structures (b) diamond/quartz hard (c) graphite conducts (d) structure→properties.",
            commonErrors: ["Not linking structure to property."],
            examinerNote: "3+2+2+3 = 10.",
          },
        },
      ],
    },
  ],
};
