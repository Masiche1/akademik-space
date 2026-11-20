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
              { id: "a", text: "Delocalised electrons" },
              { id: "b", text: "Mobile ions only" },
              { id: "c", text: "Protons moving" },
              { id: "d", text: "Vibrating atoms" },
            ],
            correctChoiceId: "a",
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
          totalMarks: 2,
          stem: "Why are metals malleable and ductile?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Non-directional bonding",
                statement:
                  "Metallic bonds are not directional — layers slide without breaking.",
              },
            ],
            steps: [
              {
                reasoning: "Layers of ions can slide past each other.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Delocalised electrons still hold layers together.",
                marks: 1,
                markCode: "A",
              },
            ],
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
              { id: "a", text: "Hydrogen bond" },
              { id: "b", text: "Van der Waals" },
              { id: "c", text: "Ionic bond" },
              { id: "d", text: "Covalent bond" },
            ],
            correctChoiceId: "a",
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
          totalMarks: 2,
          stem: "Why does $H_2O$ have a much higher boiling point than $H_2S$?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Hydrogen bonding",
                statement:
                  "H bonded to O forms H-bonds; S does not hydrogen-bond comparably.",
              },
            ],
            steps: [
              {
                reasoning: "$H_2O$ forms hydrogen bonds between molecules.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$H_2S$ has only weaker dipole/vdW forces — less energy to boil.",
                marks: 1,
                markCode: "A",
              },
            ],
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
