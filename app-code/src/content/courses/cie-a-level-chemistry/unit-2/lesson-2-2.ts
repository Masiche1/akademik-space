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
              { id: "a", text: "$Na^-$" },
              { id: "b", text: "$Na^+$" },
              { id: "c", text: "$Na^{2+}$" },
              { id: "d", text: "$Na$" },
            ],
            correctChoiceId: "b",
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
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the formula of the ionic compound formed between $Mg^{2+}$ and $O^{2-}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$Mg_2O_3$" },
              { id: "b", text: "$MgO$" },
              { id: "c", text: "$MgO_2$" },
              { id: "d", text: "$Mg_2O$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Charge balance",
                statement: "Total positive = total negative charge.",
              },
            ],
            steps: [{ reasoning: "$+2$ and $-2$ balance in a 1:1 ratio, giving $MgO$.", marks: 1, markCode: "A" }],
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
        {
          id: "cial-c-u2-ib-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which formula is correct for magnesium chloride?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$MgCl_2$" },
              { id: "b", text: "$Mg_2Cl$" },
              { id: "c", text: "$MgCl$" },
              { id: "d", text: "$Mg_2Cl_3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Charge balance", statement: "Total positive = total negative." }],
            steps: [{ reasoning: "Mg2+ needs two Cl- ions.", marks: 1, markCode: "A" }],
            finalAnswer: "$MgCl_2$",
          },
        },
        {
          id: "cial-c-u2-ib-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many chloride ions are needed to balance one $Ca^{2+}$ ion in an ionic compound?",
          response: { type: "numeric", parts: [{ label: "Cl- ions", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "law", name: "Charge balance", statement: "Charges must sum to zero." }],
            steps: [
              { reasoning: "Each Cl- has charge -1; Ca2+ needs two of them.", working: "+2-2=0", marks: 1, markCode: "M" },
              { reasoning: "Number of Cl- ions = 2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$",
          },
        },
        {
          id: "cial-c-u2-ib-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe the electron transfer that occurs when sodium reacts with chlorine.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Ionic bond", statement: "Electron transfer forms ions." }],
            steps: [
              { reasoning: "Na loses its outer electron to form Na+.", marks: 1, markCode: "M" },
              { reasoning: "Cl gains that electron to form Cl-; ions attract in a lattice.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Na -> Na+ + e-; Cl + e- -> Cl-",
          },
        },
        {
          id: "cial-c-u2-ib-q8",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How many electrons are transferred in total when one $Mg^{2+}$ ion and one $O^{2-}$ ion are formed from neutral atoms?",
          response: { type: "numeric", parts: [{ label: "electrons", answer: 4, unit: "e" }] },
          markscheme: {
            principles: [{ kind: "law", name: "Electron transfer", statement: "Count electrons lost plus electrons gained." }],
            steps: [
              { reasoning: "Mg loses 2 electrons.", working: "2", marks: 1, markCode: "M" },
              { reasoning: "O gains 2 electrons.", working: "2", marks: 1, markCode: "M" },
              { reasoning: "Total electrons transferred = 4.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$",
          },
        },
        {
          id: "cial-c-u2-ib-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "When does an ionic compound conduct electricity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only when frozen" },
              { id: "b", text: "When molten or aqueous" },
              { id: "c", text: "When solid" },
              { id: "d", text: "Never" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Ionic conduction", statement: "Mobile ions are required." }],
            steps: [{ reasoning: "Molten or aqueous ionic compounds have mobile ions.", marks: 1, markCode: "A" }],
            finalAnswer: "Molten or aqueous",
          },
        },
        {
          id: "cial-c-u2-ib-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why ionic crystals are brittle.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Brittleness", statement: "Like charges repel when layers shift." }],
            steps: [
              { reasoning: "A sharp blow shifts layers of ions.", marks: 1, markCode: "M" },
              { reasoning: "Like charges become aligned and repel strongly.", marks: 1, markCode: "M" },
              { reasoning: "The crystal shatters instead of bending.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Layer shift aligns like charges and repels.",
          },
        },
        {
          id: "cial-c-u2-ib-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many oxide ions are needed to balance two $Al^{3+}$ ions in $Al_2O_3$?",
          response: { type: "numeric", parts: [{ label: "O2- ions", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "law", name: "Charge balance", statement: "Total charge must be zero." }],
            steps: [
              { reasoning: "Two Al3+ give +6; each O2- gives -2.", working: "+6 and -2", marks: 1, markCode: "M" },
              { reasoning: "Three O2- ions give -6, so 3 ions are needed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$",
          },
        },
        {
          id: "cial-c-u2-ib-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which has the higher melting point, $MgO$ or $NaCl$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$NaCl$" },
              { id: "b", text: "$MgO$" },
              { id: "c", text: "They are equal" },
              { id: "d", text: "Cannot be predicted" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Lattice strength", statement: "Higher ion charges give stronger attraction." }],
            steps: [{ reasoning: "Mg2+ and O2- give a much stronger lattice than Na+ and Cl-.", marks: 1, markCode: "A" }],
            finalAnswer: "$MgO$",
          },
        },
        {
          id: "cial-c-u2-ib-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which substance is most likely to be ionic?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$CO_2$" },
              { id: "b", text: "$CH_4$" },
              { id: "c", text: "$H_2O$" },
              { id: "d", text: "$NaCl$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Ionic compound", statement: "Metal + non-metal electron transfer." }],
            steps: [{ reasoning: "NaCl is formed by electron transfer between metal and non-metal.", marks: 1, markCode: "A" }],
            finalAnswer: "$NaCl$",
          },
        },
        {
          id: "cial-c-u2-ib-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many electrons are transferred when one sodium atom forms $Na^+$ and one chlorine atom forms $Cl^-$?",
          response: { type: "numeric", parts: [{ label: "electrons", answer: 1, unit: "e" }] },
          markscheme: {
            principles: [{ kind: "law", name: "Electron transfer", statement: "One electron is lost and gained." }],
            steps: [
              { reasoning: "Na loses one electron; Cl gains one electron.", working: "1", marks: 1, markCode: "M" },
              { reasoning: "Total transferred = 1 electron.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1$",
          },
        },
        {
          id: "cial-c-u2-ib-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Give three properties of ionic compounds that result from their giant lattice structure.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Ionic properties", statement: "Lattice controls physical properties." }],
            steps: [
              { reasoning: "High melting points because strong ionic bonds must be broken.", marks: 1, markCode: "M" },
              { reasoning: "Conduct when molten or aqueous because ions become mobile.", marks: 1, markCode: "M" },
              { reasoning: "Brittle because shifted layers align like charges.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "High mp, conducts when molten/aqueous, brittle.",
          },
        },
        {
          id: "cial-c-u2-ib-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Ionic bonding problem.",
          parts: [
            { label: "a", prompt: "Give the formula of the compound formed by $Mg^{2+}$ and $Cl^-$.", marks: 1 },
            { label: "b", prompt: "State two properties of ionic compounds.", marks: 2 },
            { label: "c", prompt: "Explain why $MgO$ has a higher melting point than $NaCl$.", marks: 3 },
            { label: "d", prompt: "Describe what happens to ions when an ionic solid melts.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Ionic bonding", statement: "Charge balance and lattice attraction." }],
            steps: [
              { part: "a", reasoning: "Formula MgCl2.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Any two: high mp, conducts when molten/aqueous, brittle, soluble in polar solvents.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Two correct properties stated.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "MgO has 2+ and 2- ions.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Stronger electrostatic attraction than NaCl.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "More energy needed to melt.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Lattice breaks down and ions become mobile.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Mobile ions can then conduct electricity.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) MgCl2 (b) 2 properties (c) stronger lattice (d) mobile ions",
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
              { id: "a", text: "$3$" },
              { id: "b", text: "$1$" },
              { id: "c", text: "$2$" },
              { id: "d", text: "$4$" },
            ],
            correctChoiceId: "c",
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
          totalMarks: 1,
          stem: "What is the shape and bond angle of $CH_4$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Trigonal pyramidal, $107^\\circ$" },
              { id: "b", text: "Trigonal planar, $120^\\circ$" },
              { id: "c", text: "Tetrahedral, $109.5^\\circ$" },
              { id: "d", text: "Linear, $180^\\circ$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "VSEPR",
                statement: "4 bonding pairs, no lone pairs $\\to$ tetrahedral, 109.5°.",
              },
            ],
            steps: [{ reasoning: "4 bonding pairs give a tetrahedral shape with 109.5° bond angles.", marks: 1, markCode: "A" }],
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
        {
          id: "cial-c-u2-cb-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many shared electron pairs are in a triple bond?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3$" },
              { id: "b", text: "$2$" },
              { id: "c", text: "$1$" },
              { id: "d", text: "$6$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Bond order", statement: "Triple = 3 shared pairs." }],
            steps: [{ reasoning: "Triple bond shares three pairs.", marks: 1, markCode: "A" }],
            finalAnswer: "$3$",
          },
        },
        {
          id: "cial-c-u2-cb-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the bond order of the bond in an $O_2$ molecule?",
          response: { type: "numeric", parts: [{ label: "bond order", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Bond order", statement: "Number of shared pairs." }],
            steps: [
              { reasoning: "O2 has a double bond.", working: "O=O", marks: 1, markCode: "M" },
              { reasoning: "Bond order = 2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$",
          },
        },
        {
          id: "cial-c-u2-cb-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Predict the bond angle of $CO_2$.",
          response: { type: "numeric", parts: [{ label: "bond angle", answer: 180, unit: "degrees" }] },
          markscheme: {
            principles: [{ kind: "law", name: "VSEPR", statement: "Two bonding regions, no lone pairs." }],
            steps: [
              { reasoning: "Two electron domains around carbon give a linear shape.", marks: 1, markCode: "M" },
              { reasoning: "Bond angle is 180°.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Linear, 180°",
          },
        },
        {
          id: "cial-c-u2-cb-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the shape and approximate bond angle of $NH_3$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Trigonal pyramidal, $107^\\circ$" },
              { id: "b", text: "Linear, $180^\\circ$" },
              { id: "c", text: "Tetrahedral, $109.5^\\circ$" },
              { id: "d", text: "Trigonal planar, $120^\\circ$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "law", name: "VSEPR", statement: "Lone pairs compress bond angles." }],
            steps: [{ reasoning: "Three bonds plus one lone pair give trigonal pyramidal with about 107°.", marks: 1, markCode: "A" }],
            finalAnswer: "Trigonal pyramidal, $107^\\circ$",
          },
        },
        {
          id: "cial-c-u2-cb-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many lone pairs are on the oxygen atom in $H_2O$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1$" },
              { id: "b", text: "$4$" },
              { id: "c", text: "$2$" },
              { id: "d", text: "$0$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Lone pair", statement: "Non-bonding electron pair." }],
            steps: [{ reasoning: "Oxygen has two lone pairs after two O-H bonds.", marks: 1, markCode: "A" }],
            finalAnswer: "$2$",
          },
        },
        {
          id: "cial-c-u2-cb-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which species contains a dative covalent bond?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$H_2$" },
              { id: "b", text: "$CH_4$" },
              { id: "c", text: "$CO_2$" },
              { id: "d", text: "$NH_4^+$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Dative bond", statement: "Both electrons come from one atom." }],
            steps: [{ reasoning: "In $NH_4^+$, nitrogen donates both electrons of one N-H bond.", marks: 1, markCode: "A" }],
            finalAnswer: "$NH_4^+$",
          },
        },
        {
          id: "cial-c-u2-cb-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many electron pairs surround the nitrogen atom in $NH_3$?",
          response: { type: "numeric", parts: [{ label: "electron pairs", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "law", name: "VSEPR", statement: "Count bonding and lone pairs." }],
            steps: [
              { reasoning: "Three N-H bonds plus one lone pair.", working: "3+1=4", marks: 1, markCode: "M" },
              { reasoning: "Total electron pairs = 4.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$",
          },
        },
        {
          id: "cial-c-u2-cb-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why $H_2O$ is polar but $CO_2$ is non-polar.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Molecular polarity", statement: "Need polar bonds and asymmetry." }],
            steps: [
              { reasoning: "Both have polar bonds due to electronegativity differences.", marks: 1, markCode: "M" },
              { reasoning: "H2O is bent, so bond dipoles do not cancel.", marks: 1, markCode: "M" },
              { reasoning: "CO2 is linear, so the two dipoles cancel.", marks: 1, markCode: "M" },
              { reasoning: "Therefore H2O is polar and CO2 is non-polar.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Shape determines whether dipoles cancel.",
          },
        },
        {
          id: "cial-c-u2-cb-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the shape around an atom with five electron pairs and no lone pairs?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Trigonal planar" },
              { id: "b", text: "Tetrahedral" },
              { id: "c", text: "Trigonal bipyramidal" },
              { id: "d", text: "Octahedral" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "law", name: "VSEPR", statement: "5 pairs = trigonal bipyramidal." }],
            steps: [{ reasoning: "Five domains give trigonal bipyramidal geometry.", marks: 1, markCode: "A" }],
            finalAnswer: "Trigonal bipyramidal",
          },
        },
        {
          id: "cial-c-u2-cb-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Predict the bond angle in $BF_3$, which has three bonding pairs and no lone pairs.",
          response: { type: "numeric", parts: [{ label: "angle", answer: 120, unit: "degrees" }] },
          markscheme: {
            principles: [{ kind: "law", name: "VSEPR", statement: "3 pairs = trigonal planar." }],
            steps: [
              { reasoning: "Three domains give trigonal planar shape.", marks: 1, markCode: "M" },
              { reasoning: "Bond angle = 120°.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$120$°",
          },
        },
        {
          id: "cial-c-u2-cb-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is the bond angle in $H_2O$ ($104.5^\\circ$) smaller than in $NH_3$ ($107^\\circ$)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oxygen is more electronegative than nitrogen" },
              { id: "b", text: "$H_2O$ has more bonding pairs than $NH_3$" },
              { id: "c", text: "$H_2O$ has a linear shape" },
              { id: "d", text: "$H_2O$ has two lone pairs while $NH_3$ has one" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Lone pair repulsion", statement: "More lone pairs compress angles more." }],
            steps: [{ reasoning: "Two lone pairs in $H_2O$ squeeze the bonding pairs together more than one lone pair in $NH_3$.", marks: 1, markCode: "A" }],
            finalAnswer: "More lone pairs = smaller angle",
          },
        },
        {
          id: "cial-c-u2-cb-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Covalent bonding and shapes problem.",
          parts: [
            { label: "a", prompt: "State how many shared pairs are in single, double and triple bonds.", marks: 2 },
            { label: "b", prompt: "Predict the shape and angle of $CH_4$.", marks: 2 },
            { label: "c", prompt: "Predict the shape and angle of $NH_3$.", marks: 2 },
            { label: "d", prompt: "Explain why $NH_3$ has a smaller angle than $CH_4$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "VSEPR", statement: "Count electron domains and lone pairs." }],
            steps: [
              { part: "a", reasoning: "Single=1, double=2, triple=3 shared pairs.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "All three stated correctly.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Four bonding pairs give tetrahedral shape.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Angle is 109.5°.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Three bonding pairs plus one lone pair give trigonal pyramidal shape.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Angle is about 107°.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The lone pair repels bonding pairs more strongly.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "This compresses the H-N-H angles below 109.5°.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 1,2,3 (b) tetrahedral 109.5 (c) pyramidal 107 (d) lone pair",
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
