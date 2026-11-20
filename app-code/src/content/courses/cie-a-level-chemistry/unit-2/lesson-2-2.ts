import type { Lesson } from "../../../types.ts";

export const lesson212: Lesson = {
  id: "cial-c-u2-lesson-2-2",
  code: "2-2",
  title: "Ionic and covalent bonding",
  goal: "I CAN explain ionic and covalent bonding and predict molecular shapes.",
  standards: ["9701 2.2: ionic and covalent bonding"],
  vocabulary: [
    {
      term: "Ionic bond",
      definition:
        "Electrostatic attraction between oppositely charged ions in a lattice.",
    },
    {
      term: "Covalent bond",
      definition:
        "Shared pair of electrons between two atoms.",
    },
    {
      term: "Lattice",
      definition:
        "Regular 3D arrangement of ions in an ionic crystal.",
    },
    {
      term: "Coordinate bond",
      definition:
        "Covalent bond where both shared electrons come from one atom.",
    },
    {
      term: "Bond enthalpy",
      definition: "Energy required to break one mole of a bond.",
    },
    {
      term: "VSEPR",
      definition:
        "Electron-pair repulsion theory used to predict molecular shapes.",
    },
  ],
  concepts: [
    {
      id: "cial-c-u2-ionic",
      title: "Ionic bonding and lattices",
      skill: "Explain formation of ions and properties of ionic compounds.",
      lesson: {
        sections: [
          {
            heading: "Formation",
            body: "Metals lose electrons to form cations; non-metals gain electrons to form anions. The compound is neutral overall: $Na^+$ and $Cl^-$ combine as $NaCl$; $Mg^{2+}$ needs two $Cl^-$ for $MgCl_2$. Strong electrostatic forces hold ions in a giant lattice.",
          },
          {
            heading: "Properties",
            body: "High melting points (strong ionic bonds throughout lattice), conduct electricity when molten or aqueous (free ions) but not solid, brittle (like charges align and repel when layers shift), soluble in polar solvents.",
          },
          {
            heading: "Electron diagrams",
            body: "$Na$ ($2,8,1$) transfers its outer electron to $Cl$ ($2,8,7$), giving $Na^+$ ($2,8$) and $Cl^-$ ($2,8,8$). Write dot-and-cross diagrams showing only outer-shell electrons.",
          },
        ],
        keyFormulas: [
          {
            name: "Ionic formula",
            statement:
              "Total positive charge = total negative charge.",
          },
          {
            name: "Lattice",
            statement:
              "Giant structure of ions; strong electrostatic attraction.",
          },
        ],
        workedExample: {
          problem: "Why does $MgO$ have a higher melting point than $NaCl$?",
          solution:
            "$Mg^{2+}$ and $O^{2-}$ have higher charges than $Na^+$ and $Cl^-$, so stronger electrostatic attraction — more energy to overcome.",
        },
      },
      questions: [
        {
          id: "cial-c-u2-ib-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which particle is formed when a sodium atom loses an electron?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$Na^+$" },
              { id: "b", text: "$Na^-$" },
              { id: "c", text: "$Na^{2+}$" },
              { id: "d", text: "$Na$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ion formation",
                statement: "Losing electrons gives positive ions.",
              },
            ],
            steps: [
              {
                reasoning: "Electron loss $\\Rightarrow +1$ charge: $Na^+$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$Na^+$",
          },
        },
        {
          id: "cial-c-u2-ib-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give the formula of the ionic compound formed between $Mg^{2+}$ and $O^{2-}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Charge balance",
                statement: "Total positive = total negative charge.",
              },
            ],
            steps: [
              {
                reasoning: "$+2$ and $-2$ balance in a 1:1 ratio.",
                working: "1:1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Formula $MgO$.",
                working: "MgO",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$MgO$",
            commonErrors: ["Writing $Mg_2O$ or $MgO_2$ — charges already balance."],
          },
        },
        {
          id: "cial-c-u2-ib-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why ionic compounds conduct electricity when molten but not when solid.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ionic conduction",
                statement: "Conduction requires mobile charged particles.",
              },
            ],
            steps: [
              {
                reasoning: "In solid, ions are fixed in the lattice — cannot move.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "When molten, lattice breaks and ions become mobile.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Mobile ions carry charge to electrodes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Hence conducts when molten, not solid.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "Mobile ions only when molten/aqueous",
            commonErrors: ["Saying electrons carry the current — it's ions."],
          },
        },
        {
          id: "cial-c-u2-ib-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Ionic bonding.",
          parts: [
            {
              label: "a",
              prompt: "Describe the formation of sodium chloride from sodium and chlorine atoms.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Give the electron configuration of $Na^+$ and $Cl^-$.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Explain why ionic compounds have high melting points.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Why are ionic compounds brittle?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ionic bonding",
                statement:
                  "Electron transfer $\\to$ ions $\\to$ giant lattice of electrostatic attraction.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Na loses its outer electron to form $Na^+$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Cl gains the electron to form $Cl^-$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Opposite charges attract in a lattice.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "$Na^+$: $1s^22s^22p^6$ ($[Ne]$).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$Cl^-$: $[Ne]3s^23p^6$ ($[Ar]$).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Strong ionic bonds throughout the giant lattice.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Much energy needed to overcome them.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning: "Layers shift when struck.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Like charges align $\\to$ repulsion $\\to$ crystal shatters.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) transfer+lattice (b) [Ne], [Ar] (c) strong lattice (d) like-charge repulsion",
          },
        },
      ],
    },
    {
      id: "cial-c-u2-covalent",
      title: "Covalent bonding and shapes",
      skill: "Describe covalent bonds, lone pairs and predict molecular shapes.",
      lesson: {
        sections: [
          {
            heading: "Covalent bonds",
            body: "Non-metals share electron pairs to complete outer shells. Single (1 pair), double (2 pairs, e.g. $O=O$), triple (3 pairs, e.g. $N\\equiv N$). Dative/coordinate bonds have both electrons from one atom, e.g. $NH_4^+$.",
          },
          {
            heading: "Shapes — VSEPR",
            body: "Electron pairs repel to maximum separation. 2 pairs: linear (180°); 3: trigonal planar (120°); 4: tetrahedral (109.5°); 5: trigonal bipyramidal; 6: octahedral. Lone pairs repel MORE than bonding pairs, compressing bond angles (e.g. $NH_3$ 107°, $H_2O$ 104.5°).",
          },
          {
            heading: "Polarity",
            body: "Bond polarity depends on electronegativity difference; molecular polarity needs both polar bonds AND asymmetric shape. $CO_2$ has polar bonds but is non-polar (linear, symmetrical).",
          },
        ],
        keyFormulas: [
          {
            name: "Shapes",
            statement:
              "2=linear, 3=trigonal planar, 4=tetrahedral; lone pairs compress angles.",
          },
          {
            name: "Bond order",
            statement: "Single=1 pair, double=2, triple=3 shared pairs.",
          },
        ],
        workedExample: {
          problem: "Predict the shape and bond angle of $NH_3$.",
          solution:
            "4 electron pairs (3 bonding + 1 lone pair) $\\to$ trigonal pyramidal; lone pair compresses angle to $107^\\circ$.",
        },
      },
      questions: [
        {
          id: "cial-c-u2-cb-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many shared electron pairs are in a double bond?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2$" },
              { id: "b", text: "$1$" },
              { id: "c", text: "$3$" },
              { id: "d", text: "$4$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bond order",
                statement: "Double bond = 2 shared pairs.",
              },
            ],
            steps: [
              {
                reasoning: "Double bond shares 2 pairs.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$2$",
          },
        },
        {
          id: "cial-c-u2-cb-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Predict the shape of $CH_4$ and give its bond angle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "VSEPR",
                statement: "4 bonding pairs, no lone pairs $\\to$ tetrahedral, 109.5°.",
              },
            ],
            steps: [
              {
                reasoning: "4 bonding pairs, 0 lone pairs $\\to$ tetrahedral.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Bond angle $109.5^\\circ$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Tetrahedral, $109.5^\\circ$",
          },
        },
        {
          id: "cial-c-u2-cb-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why $NH_3$ has a smaller bond angle ($107^\\circ$) than $CH_4$ ($109.5^\\circ$).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Lone pair repulsion",
                statement:
                  "Lone pairs repel more strongly than bonding pairs.",
              },
            ],
            steps: [
              {
                reasoning: "$NH_3$ has 4 electron pairs: 3 bonding + 1 lone pair.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Lone pair repels bonding pairs more strongly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Bond pairs are squeezed together, reducing the angle.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$107^\\circ < 109.5^\\circ$ explained.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "Lone pair compresses bond angle",
            commonErrors: ["Ignoring the lone pair — $NH_3$ is pyramidal, not tetrahedral."],
          },
        },
        {
          id: "cial-c-u2-cb-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Covalent bonding and shapes.",
          parts: [
            {
              label: "a",
              prompt: "Distinguish between a single, double and triple covalent bond.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Predict the shape and bond angle of $H_2O$.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "What is a dative (coordinate) bond? Give an example.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Explain why $CO_2$ is non-polar despite having polar bonds.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Covalent bonding",
                statement:
                  "Shared pairs; VSEPR shapes; polarity needs asymmetry.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Single=1 pair, double=2 pairs, triple=3 pairs shared.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "More pairs = shorter, stronger bond.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "4 pairs (2 bonding + 2 lone) $\\to$ bent/angular.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Angle $104.5^\\circ$ (two lone pairs compress more).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Both electrons come from one atom.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Example: $NH_4^+$ or $H_3O^+$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "$CO_2$ is linear and symmetrical.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Bond dipoles cancel out.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Net dipole moment zero $\\to$ non-polar.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) pair counts (b) bent 104.5 (c) dative NH4+ (d) symmetrical cancels",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-c-u2-bonding-notes",
      title: "Ionic and covalent bonding — revision notes",
      summary:
        "Ion formation, lattice properties and covalent shapes via VSEPR.",
      sections: [
        {
          heading: "Ionic vs covalent",
          body: "Ionic: electron transfer between metal and non-metal $\\to$ giant lattice; conducts when molten/aqueous; high mp; brittle. Covalent: shared pairs between non-metals; low mp (intermolecular forces); poor conductors.",
        },
        {
          heading: "Shapes",
          body: "Count electron pairs: 2=linear 180°, 3=trigonal planar 120°, 4=tetrahedral 109.5°, 5=trigonal bipyramidal, 6=octahedral. Lone pairs repel more and shrink angles: $NH_3$ 107°, $H_2O$ 104.5°. $CO_2$ is non-polar because linear dipoles cancel.",
        },
        {
          heading: "Exam checklist",
          body: "For ionic formulae balance total charge. For shapes state the number of bonding AND lone pairs — marks are lost when lone pairs are ignored.",
        },
      ],
    },
  ],
};
