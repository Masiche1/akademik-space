import type { Lesson } from "../../../types.ts";

export const lesson213: Lesson = {
  id: "cial-c-u2-lesson-2-3",
  code: "2-3",
  title: "Metallic bonding and intermolecular forces",
  goal: "I CAN explain metallic bonding, giant structures and intermolecular forces.",
  standards: ["9701 2.3: metallic bonding and structures"],
  vocabulary: [
    {
      term: "Metallic bond",
      definition:
        "Electrostatic attraction between positive metal ions and delocalised electrons.",
    },
    {
      term: "Delocalised electrons",
      definition:
        "Electrons free to move throughout a metal lattice.",
    },
    {
      term: "Giant structure",
      definition:
        "Lattice extending through the whole crystal (ionic, metallic, covalent).",
    },
    {
      term: "Simple molecular",
      definition: "Structure of discrete molecules held by intermolecular forces.",
    },
    {
      term: "Hydrogen bond",
      definition:
        "Strong dipole–dipole attraction between H bonded to N, O or F and a lone pair.",
    },
    {
      term: "Van der Waals",
      definition:
        "Weak temporary dipole attractions between molecules.",
    },
  ],
  concepts: [
    {
      id: "cial-c-u2-metallic",
      title: "Metallic bonding and giant structures",
      skill: "Explain metallic properties and compare giant and molecular structures.",
      lesson: {
        sections: [
          {
            heading: "The metallic lattice",
            body: "Metal atoms release valence electrons into a 'sea' of delocalised electrons. Positive ions sit in layers held by attraction to these electrons. More delocalised electrons or higher charge $\\to$ stronger bonding $\\to$ higher melting point (e.g. transition metals > Group 1).",
          },
          {
            heading: "Metal properties",
            body: "Conduct electricity (delocalised electrons carry charge), malleable/ductile (layers slide without breaking bonds), lustrous, high melting points. Alloys are harder because different-sized atoms disrupt layers.",
          },
          {
            heading: "Giant covalent",
            body: "Diamond and graphite are giant covalent structures: every atom covalently bonded to neighbours. Diamond: each C bonded to 4 others — hardest, insulator, high mp. Graphite: each C bonded to 3 others in sheets with delocalised electrons between layers — conducts, soft/lubricant.",
          },
        ],
        keyFormulas: [
          {
            name: "Metallic model",
            statement:
              "Positive ions + delocalised electron sea = metallic bond.",
          },
          {
            name: "Structure types",
            statement:
              "Giant ionic/metallic/covalent vs simple molecular vs giant molecular.",
          },
        ],
        workedExample: {
          problem: "Why is graphite soft but diamond hard?",
          solution:
            "Graphite has layers held only by weak forces between sheets — they slide. Diamond has strong covalent bonds in all directions throughout the lattice.",
        },
      },
      questions: [
        {
          id: "cial-c-u2-mb-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What allows metals to conduct electricity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Vibrating atoms" },
              { id: "b", text: "Mobile ions only" },
              { id: "c", text: "Delocalised electrons" },
              { id: "d", text: "Protons moving" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Metallic bonding",
                statement: "Delocalised electrons carry charge.",
              },
            ],
            steps: [
              {
                reasoning: "Delocalised electrons move freely and carry current.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Delocalised electrons",
          },
        },
        {
          id: "cial-c-u2-mb-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why are metals malleable and ductile?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Metals contain only covalent bonds" },
              { id: "b", text: "Metallic bonds are non-directional, so layers slide without breaking" },
              { id: "c", text: "Delocalised electrons are lost when the metal is bent" },
              { id: "d", text: "Metal ions are weakly attracted to each other" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Non-directional bonding",
                statement:
                  "Metallic bonds are not directional — layers slide without breaking.",
              },
            ],
            steps: [{ reasoning: "Layers slide while delocalised electrons keep holding the ions together.", marks: 1, markCode: "A" }],
            finalAnswer: "Layers slide, electrons maintain bonding",
          },
        },
        {
          id: "cial-c-u2-mb-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare diamond and graphite in terms of bonding and properties.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Giant covalent allotropes",
                statement:
                  "Diamond: 4 bonds per C, 3D; graphite: 3 bonds per C in sheets + delocalised electrons.",
              },
            ],
            steps: [
              {
                reasoning: "Diamond: each C covalently bonded to 4 others in 3D.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Graphite: each C bonded to 3 others in hexagonal sheets.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Graphite has delocalised electrons between layers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Hence graphite conducts, diamond does not; sheets slide making graphite soft.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "Diamond 3D insulator; graphite sheets conductor",
          },
        },
        {
          id: "cial-c-u2-mb-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Metallic bonding and structures.",
          parts: [
            {
              label: "a",
              prompt: "Describe the metallic bond.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain why transition metals have higher melting points than Group 1 metals.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Why is an alloy harder than the pure metal?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "State two differences between diamond and graphite.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Metallic bonding",
                statement:
                  "Positive ions + delocalised electrons; strength depends on charge density.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Positive metal ions in a lattice.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Held by attraction to delocalised electrons.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Transition metals have more delocalised electrons per atom.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Higher charge on ions $\\to$ stronger attraction.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "More energy needed to melt.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "Different-sized atoms disrupt the regular layers.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Layers cannot slide as easily $\\to$ harder.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning: "Diamond is an electrical insulator; graphite conducts.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Graphite is soft/lubricant; diamond is hardest known substance.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) ions+e sea (b) more e-/charge (c) disrupted layers (d) conduct/soft vs insulator/hard",
          },
        },
        {
          id: "cial-c-u2-mb-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which particles are mobile in a metallic lattice and allow conduction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Protons" },
              { id: "b", text: "Delocalised electrons" },
              { id: "c", text: "Neutrons" },
              { id: "d", text: "Nuclei" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Metallic bond", statement: "Positive ions + electron sea." }],
            steps: [{ reasoning: "Delocalised electrons carry charge.", marks: 1, markCode: "A" }],
            finalAnswer: "Delocalised electrons",
          },
        },
        {
          id: "cial-c-u2-mb-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many delocalised electrons does each sodium atom contribute to the metallic bond?",
          response: { type: "numeric", parts: [{ label: "electrons", answer: 1, unit: "e" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Metallic bonding", statement: "Valence electrons become delocalised." }],
            steps: [
              { reasoning: "Na has one outer electron.", working: "3s1", marks: 1, markCode: "M" },
              { reasoning: "It contributes 1 delocalised electron per atom.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1$",
          },
        },
        {
          id: "cial-c-u2-mb-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why metals can be hammered into sheets.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Malleability", statement: "Layers slide without losing bonding." }],
            steps: [
              { reasoning: "Layers of positive ions can slide past each other.", marks: 1, markCode: "M" },
              { reasoning: "Delocalised electrons continue to hold the ions together.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Layers slide; electron sea maintains bonding.",
          },
        },
        {
          id: "cial-c-u2-mb-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many valence electrons does each magnesium atom contribute to metallic bonding compared with sodium?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mg contributes 1; Na contributes 2" },
              { id: "b", text: "Neither contributes valence electrons" },
              { id: "c", text: "Both contribute 1" },
              { id: "d", text: "Mg contributes 2; Na contributes 1" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Valence electrons", statement: "Mg contributes two; Na contributes one." }],
            steps: [{ reasoning: "Mg is [Ne]3s2 and Na is [Ne]3s1, so Mg contributes twice as many.", marks: 1, markCode: "A" }],
            finalAnswer: "Mg: 2, Na: 1",
          },
        },
        {
          id: "cial-c-u2-mb-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why does graphite conduct electricity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It contains mobile ions" },
              { id: "b", text: "It contains free protons" },
              { id: "c", text: "It is a metal" },
              { id: "d", text: "It has delocalised electrons between layers" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Graphite", statement: "Delocalised electrons between sheets." }],
            steps: [{ reasoning: "Graphite has mobile electrons between layers.", marks: 1, markCode: "A" }],
            finalAnswer: "Delocalised electrons",
          },
        },
        {
          id: "cial-c-u2-mb-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare diamond and graphite in terms of structure and two properties.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Allotropes", statement: "Different bonding arrangements." }],
            steps: [
              { reasoning: "Diamond has each C bonded to four others in a 3D network.", marks: 1, markCode: "M" },
              { reasoning: "Graphite has each C bonded to three others in sheets.", marks: 1, markCode: "M" },
              { reasoning: "Diamond is hard and does not conduct; graphite is soft and conducts.", marks: 1, markCode: "M" },
              { reasoning: "Reasons: strong 3D covalent bonds vs weak interlayer forces and delocalised electrons.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Diamond 3D insulator; graphite sheets conductor",
          },
        },
        {
          id: "cial-c-u2-mb-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many covalent bonds does each carbon atom form in diamond?",
          response: { type: "numeric", parts: [{ label: "bonds", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "property", name: "Diamond", statement: "Tetrahedral carbon network." }],
            steps: [
              { reasoning: "Each carbon is bonded to four neighbouring carbons.", working: "4", marks: 1, markCode: "M" },
              { reasoning: "Number of bonds per carbon = 4.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$",
          },
        },
        {
          id: "cial-c-u2-mb-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is an alloy usually harder than the pure metal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Atoms of different sizes disrupt the regular layers so they cannot slide easily" },
              { id: "b", text: "The pure metal has too many delocalised electrons" },
              { id: "c", text: "Alloys contain no delocalised electrons" },
              { id: "d", text: "Alloy atoms have stronger ionic bonds" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Alloys", statement: "Disruption of regular layers." }],
            steps: [{ reasoning: "Different-sized atoms distort the lattice and prevent easy layer sliding.", marks: 1, markCode: "A" }],
            finalAnswer: "Different-sized atoms prevent layer sliding.",
          },
        },
        {
          id: "cial-c-u2-mb-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which structure is a giant covalent lattice?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$CO_2$" },
              { id: "b", text: "$H_2O$" },
              { id: "c", text: "$NaCl$" },
              { id: "d", text: "Diamond" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Giant covalent", statement: "Extended covalent network." }],
            steps: [{ reasoning: "Diamond is a giant covalent structure.", marks: 1, markCode: "A" }],
            finalAnswer: "Diamond",
          },
        },
        {
          id: "cial-c-u2-mb-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many electrons per atom does magnesium contribute to metallic bonding?",
          response: { type: "numeric", parts: [{ label: "electrons", answer: 2, unit: "e" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Valence electrons", statement: "Mg has two outer electrons." }],
            steps: [
              { reasoning: "Mg is [Ne]3s2, so two valence electrons.", working: "3s2", marks: 1, markCode: "M" },
              { reasoning: "It contributes 2 electrons per atom.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$",
          },
        },
        {
          id: "cial-c-u2-mb-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why do transition metals generally have higher melting points than Group 1 metals?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Group 1 metals have no delocalised electrons" },
              { id: "b", text: "Transition metals have weaker metallic bonds" },
              { id: "c", text: "More delocalised electrons and higher ion charge give stronger metallic bonding" },
              { id: "d", text: "Transition metals are ionic compounds" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Metallic bonding strength", statement: "More delocalised electrons and higher charge increase strength." }],
            steps: [{ reasoning: "More delocalised electrons and higher charge density strengthen the metallic bond.", marks: 1, markCode: "A" }],
            finalAnswer: "More electrons and higher charge give stronger bonding.",
          },
        },
        {
          id: "cial-c-u2-mb-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Metallic bonding and structures problem.",
          parts: [
            { label: "a", prompt: "Describe the metallic bond.", marks: 2 },
            { label: "b", prompt: "State two properties explained by delocalised electrons.", marks: 2 },
            { label: "c", prompt: "Explain why graphite conducts but diamond does not.", marks: 2 },
            { label: "d", prompt: "Why is an alloy harder than the pure metal?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Metallic structures", statement: "Electron sea and giant covalent networks." }],
            steps: [
              { part: "a", reasoning: "Positive metal ions in a lattice.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Held by attraction to delocalised electrons.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Any two: conducts electricity, malleable, ductile, lustrous.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Two correct properties stated.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Graphite has delocalised electrons between layers.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Diamond has no mobile electrons; all electrons are in covalent bonds.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Different-sized atoms disrupt regular layers.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Layers cannot slide easily, so alloy is harder.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) ions+electron sea (b) 2 properties (c) graphite e- vs diamond none (d) disrupted layers",
          },
        },
      ],
    },
    {
      id: "cial-c-u2-imf",
      title: "Intermolecular forces",
      skill: "Rank and explain van der Waals, dipole–dipole and hydrogen bonds.",
      lesson: {
        sections: [
          {
            heading: "Types of forces",
            body: "Van der Waals (London): temporary dipoles between all molecules — weakest, increases with size/polarisability. Permanent dipole–dipole: between polar molecules. Hydrogen bonds: H bonded to N/O/F attracted to lone pair — strongest intermolecular force.",
          },
          {
            heading: "Effect on properties",
            body: "Stronger intermolecular forces $\\to$ higher melting/boiling points, lower volatility. Hydrogen bonding explains water's high bp, ice floating, and DNA structure. $H_2S$ has lower bp than $H_2O$ despite similar size — no hydrogen bonding.",
          },
          {
            heading: "Comparisons",
            body: "Boiling point order: $H_2O > H_2S > H_2Se$ (H-bonds lost). For alkanes, bp rises with chain length (more vdW contact). Branching lowers bp (less surface contact).",
          },
        ],
        keyFormulas: [
          {
            name: "Force strength",
            statement:
              "Hydrogen bond $>$ dipole–dipole $>$ van der Waals.",
          },
          {
            name: "bp trend",
            statement:
              "Stronger IMF $\\to$ higher bp; size $\\uparrow$ $\\Rightarrow$ vdW $\\uparrow$.",
          },
        ],
        workedExample: {
          problem: "Why does $H_2O$ boil at $100^\\circ$C while $H_2S$ boils at $-60^\\circ$C?",
          solution:
            "Water has hydrogen bonding (H bonded to O); $H_2S$ only has weaker dipole–dipole and vdW forces — much less energy to separate molecules.",
        },
      },
      questions: [
        {
          id: "cial-c-u2-imf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the strongest intermolecular force?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Covalent bond" },
              { id: "b", text: "Van der Waals" },
              { id: "c", text: "Ionic bond" },
              { id: "d", text: "Hydrogen bond" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "IMF strength",
                statement: "H-bond $>$ dipole–dipole $>$ vdW.",
              },
            ],
            steps: [
              {
                reasoning: "Hydrogen bond is strongest intermolecular force.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Hydrogen bond",
          },
        },
        {
          id: "cial-c-u2-imf-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why does $H_2O$ have a much higher boiling point than $H_2S$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$H_2O$ has a larger molecular mass" },
              { id: "b", text: "$H_2S$ is more polar than $H_2O$" },
              { id: "c", text: "$H_2O$ forms hydrogen bonds; $H_2S$ does not" },
              { id: "d", text: "$H_2O$ has stronger covalent bonds than $H_2S$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Hydrogen bonding",
                statement:
                  "H bonded to O forms H-bonds; S does not hydrogen-bond comparably.",
              },
            ],
            steps: [{ reasoning: "Hydrogen bonding between water molecules requires much more energy to overcome.", marks: 1, markCode: "A" }],
            finalAnswer: "Hydrogen bonding in water",
          },
        },
        {
          id: "cial-c-u2-imf-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the trend in boiling points down Group 16: $H_2O > H_2S > H_2Se > H_2Te$ is NOT observed — actual order is $H_2O > H_2Te > H_2Se > H_2S$. Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Competing factors",
                statement:
                  "H-bonds vs increasing molecular size (vdW) compete down the group.",
              },
            ],
            steps: [
              {
                reasoning: "$H_2O$ has hydrogen bonding — highest bp.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Below water, no H-bonds; size/polarisability increases down group.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Larger molecules have stronger vdW forces.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "So bp increases down the group: $H_2S < H_2Se < H_2Te$.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "H-bonds in water; vdW increases down group",
            commonErrors: ["Assuming bp always decreases down the group."],
          },
        },
        {
          id: "cial-c-u2-imf-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Intermolecular forces.",
          parts: [
            {
              label: "a",
              prompt: "Name the three types of intermolecular force and rank their strength.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain why $NH_3$ has a higher boiling point than $PH_3$.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Why do branched alkanes have lower boiling points than straight-chain isomers?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Explain why ice floats on water.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Intermolecular forces",
                statement:
                  "H-bond $>$ dipole–dipole $>$ vdW; strength controls bp/mp.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Hydrogen bond, dipole–dipole, van der Waals.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Strength order: H-bond strongest, vdW weakest.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$NH_3$ forms hydrogen bonds (H–N).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$PH_3$ has only dipole/vdW — weaker.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "More energy needed to separate $NH_3$ molecules.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "Branched molecules have smaller surface area.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Less vdW contact $\\to$ lower bp.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning: "Hydrogen bonding in ice creates an open lattice.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Ice is less dense than liquid water — floats.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) H-bond>dd>vdW (b) H-bonds (c) surface area (d) H-bond lattice",
          },
        },
        {
          id: "cial-c-u2-imf-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which intermolecular force is the weakest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Van der Waals" },
              { id: "b", text: "Hydrogen bond" },
              { id: "c", text: "Ionic bond" },
              { id: "d", text: "Permanent dipole-dipole" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "IMF strength", statement: "vdW weakest." }],
            steps: [{ reasoning: "Van der Waals forces are weakest.", marks: 1, markCode: "A" }],
            finalAnswer: "Van der Waals",
          },
        },
        {
          id: "cial-c-u2-imf-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many hydrogen atoms in $NH_3$ can act as hydrogen-bond donors?",
          response: { type: "numeric", parts: [{ label: "H atoms", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Hydrogen bond", statement: "H bonded to N/O/F can donate." }],
            steps: [
              { reasoning: "NH3 has three N-H bonds.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "Each H can hydrogen-bond, so 3 donors.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$",
          },
        },
        {
          id: "cial-c-u2-imf-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why does water have an unusually high boiling point for a small molecule?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is an ionic compound" },
              { id: "b", text: "It forms hydrogen bonds because H is bonded to O" },
              { id: "c", text: "It has a very large molecular mass" },
              { id: "d", text: "It has very strong covalent bonds" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Hydrogen bonding", statement: "Strong IMF raises bp." }],
            steps: [{ reasoning: "Hydrogen bonding requires extra energy to separate the molecules.", marks: 1, markCode: "A" }],
            finalAnswer: "Hydrogen bonding gives high bp.",
          },
        },
        {
          id: "cial-c-u2-imf-q8",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why boiling points of the hydrogen halides increase from HCl to HI.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "IMF and size", statement: "Larger molecules have stronger vdW." }],
            steps: [
              { reasoning: "All are polar molecules, so dipole-dipole forces are present.", marks: 1, markCode: "M" },
              { reasoning: "Molecular size and polarisability increase down the group.", marks: 1, markCode: "M" },
              { reasoning: "Stronger vdW forces require more energy, so bp rises HCl < HBr < HI.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Size/polarisability increases vdW forces.",
          },
        },
        {
          id: "cial-c-u2-imf-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which substance can form hydrogen bonds between its molecules?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$C_2H_5OH$" },
              { id: "b", text: "$CH_4$" },
              { id: "c", text: "$CCl_4$" },
              { id: "d", text: "$CO_2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Hydrogen bonding", statement: "H bonded to O/N/F required." }],
            steps: [{ reasoning: "Ethanol has O-H bonds and can hydrogen-bond.", marks: 1, markCode: "A" }],
            finalAnswer: "$C_2H_5OH$",
          },
        },
        {
          id: "cial-c-u2-imf-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the boiling-point order $H_2O > H_2S > H_2Se > H_2Te$ except that $H_2O$ is highest.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Competing IMFs", statement: "Hydrogen bonding vs increasing size." }],
            steps: [
              { reasoning: "H2O forms hydrogen bonds; the others do not.", marks: 1, markCode: "M" },
              { reasoning: "Below water, molecules become larger and more polarisable.", marks: 1, markCode: "M" },
              { reasoning: "Van der Waals forces strengthen down the group.", marks: 1, markCode: "M" },
              { reasoning: "Thus H2S < H2Se < H2Te, with H2O highest.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "H-bonds in water; vdW increases down group.",
          },
        },
        {
          id: "cial-c-u2-imf-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the maximum number of hydrogen bonds that can involve one water molecule?",
          response: { type: "numeric", parts: [{ label: "H bonds", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Hydrogen bonding", statement: "Each water has two donors and two acceptors." }],
            steps: [
              { reasoning: "Water can donate two H bonds and accept two via lone pairs.", working: "2+2", marks: 1, markCode: "M" },
              { reasoning: "Maximum involvement = 4 hydrogen bonds.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$",
          },
        },
        {
          id: "cial-c-u2-imf-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why does ice float on liquid water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ice has stronger covalent bonds than liquid water" },
              { id: "b", text: "Hydrogen bonding gives ice an open lattice, making it less dense" },
              { id: "c", text: "Liquid water is less dense than ice" },
              { id: "d", text: "Ice contains ions that make it lighter" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Hydrogen-bond lattice", statement: "Open structure lowers density." }],
            steps: [{ reasoning: "The open hydrogen-bonded lattice makes solid ice less dense than liquid water.", marks: 1, markCode: "A" }],
            finalAnswer: "Hydrogen-bond lattice makes ice less dense.",
          },
        },
        {
          id: "cial-c-u2-imf-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why do branched alkanes usually have lower boiling points than straight-chain isomers?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They have smaller surface area and less van der Waals contact" },
              { id: "b", text: "They cannot form London forces" },
              { id: "c", text: "They have stronger bonds" },
              { id: "d", text: "They are always gases" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Surface area", statement: "Less contact lowers vdW." }],
            steps: [{ reasoning: "Branching reduces surface contact between molecules.", marks: 1, markCode: "A" }],
            finalAnswer: "Smaller surface area",
          },
        },
        {
          id: "cial-c-u2-imf-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How many structural isomers does $C_4H_{10}$ have?",
          response: { type: "numeric", parts: [{ label: "isomers", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Isomers", statement: "Same formula, different structure." }],
            steps: [
              { reasoning: "Butane and 2-methylpropane are the two isomers.", marks: 1, markCode: "M" },
              { reasoning: "Count = 2.", marks: 1, markCode: "M" },
              { reasoning: "Both names correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2: butane and 2-methylpropane",
          },
        },
        {
          id: "cial-c-u2-imf-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why do boiling points increase as alkane chain length increases?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Longer chains have stronger covalent bonds" },
              { id: "b", text: "Longer chains are larger and more polarisable, strengthening van der Waals forces" },
              { id: "c", text: "Shorter chains have more surface area" },
              { id: "d", text: "Longer chains form hydrogen bonds" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "vdW trend", statement: "Larger molecules have stronger vdW." }],
            steps: [{ reasoning: "Greater size and surface contact increase van der Waals attraction.", marks: 1, markCode: "A" }],
            finalAnswer: "Larger size strengthens vdW forces.",
          },
        },
        {
          id: "cial-c-u2-imf-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Intermolecular forces problem.",
          parts: [
            { label: "a", prompt: "Rank hydrogen bond, dipole-dipole and van der Waals by strength.", marks: 2 },
            { label: "b", prompt: "Explain why $NH_3$ has a higher boiling point than $PH_3$.", marks: 3 },
            { label: "c", prompt: "Why do branched alkanes boil lower than straight-chain isomers?", marks: 2 },
            { label: "d", prompt: "Explain why ice floats on water.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "IMFs", statement: "H-bond > dipole-dipole > vdW." }],
            steps: [
              { part: "a", reasoning: "Hydrogen bond strongest; vdW weakest.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Correct order given.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "NH3 forms hydrogen bonds.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "PH3 has only weaker dipole/vdW forces.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "More energy needed to separate NH3 molecules.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Branched molecules have smaller surface area.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Less vdW contact gives lower bp.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Hydrogen bonding makes ice less dense.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) H-bond>dd>vdW (b) H-bonds (c) surface area (d) less dense ice",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-c-u2-metallic-imf-notes",
      title: "Metallic bonding and intermolecular forces — revision notes",
      summary:
        "Metallic lattice model, allotropes and ranking intermolecular forces.",
      sections: [
        {
          heading: "Metallic and giant structures",
          body: "Metals: positive ions + delocalised electron sea — conducts, malleable; more electrons/higher charge $\\to$ higher mp. Diamond: 4-connected 3D covalent — hardest, insulator. Graphite: 3-connected sheets + delocalised electrons — soft, conducts.",
        },
        {
          heading: "IMFs",
          body: "Strength: hydrogen bond $>$ permanent dipole $>$ van der Waals. H-bonds need H bonded to N/O/F. Stronger IMF $\\to$ higher bp/mp. Boiling points generally rise with molecular size (vdW), but $H_2O$ is anomalously high due to hydrogen bonding. Branched alkanes have lower bp (less contact).",
        },
        {
          heading: "Exam checklist",
          body: "Always compare like-with-like: IMF explanations need both the force named AND the property consequence. For Group 16 hydrides, mention hydrogen bonding breaks the simple size trend.",
        },
      ],
    },
  ],
};
