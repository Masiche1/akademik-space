import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "esc10-u2-lesson-2-1",
  code: "2-1",
  title: "Atoms, Elements and the Periodic Table",
  goal: "I CAN describe atomic structure and use the periodic table to predict element behaviour.",
  standards: ["Edexcel IGCSE Combined Science 4SC0 — Chemistry"],
  vocabulary: [
    {
      term: "Atom",
      definition: "Smallest unit of an element — protons, neutrons, electrons.",
    },
    {
      term: "Atomic number",
      definition: "Number of protons — defines the element.",
    },
    { term: "Mass number", definition: "Protons + neutrons in the nucleus." },
    {
      term: "Electron shell",
      definition: "Energy level around nucleus holding electrons — max 2,8,8.",
    },
  ],
  concepts: [
    {
      id: "esc10-u2-atomic",
      title: "Atomic Structure",
      skill: "Describe protons, neutrons, electrons and electron arrangement.",
      lesson: {
        sections: [
          {
            heading: "Subatomic particles",
            body: "**Protons**: positive, in nucleus, define element (atomic number). **Neutrons**: neutral, in nucleus, contribute mass. **Electrons**: negative, orbit nucleus in shells, tiny mass. Atom is neutral — protons = electrons.\n\n**Isotopes**: same element, different neutron counts — same chemical properties, different mass. Carbon-12 vs carbon-14. **Ions**: atoms that gained/lost electrons — positive (lost e⁻) or negative (gained e⁻).",
          },
          {
            heading: "Electron arrangement",
            body: "Electrons fill shells in order: **2, 8, 8** rule for first three shells. Sodium (11): 2,8,1; Chlorine (17): 2,8,7; Argon (18): 2,8,8 (full = noble gas).\n\n**Valency**: outer electrons determine bonding — Group 1 lose 1 e⁻, Group 7 gain 1 e⁻, Group 0 full shell (unreactive). Electron arrangement predicts how atoms bond.",
          },
        ],
        keyFormulas: [
          {
            name: "Atomic structure",
            statement:
              "Protons+nucleus/positive, neutrons+nucleus/neutral, electrons+shells/negative.",
          },
          {
            name: "Shell filling",
            statement: "2, 8, 8 pattern; outer electrons = valency.",
          },
        ],
        workedExample: {
          problem:
            "How many protons, neutrons, electrons in sodium-23 (atomic number 11)?",
          solution: "11 protons, 12 neutrons (23-11), 11 electrons.",
        },
      },
      questions: [
        {
          id: "esc10-u2-atomic-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which particle has a positive charge?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Photon" },
              { id: "b", text: "Proton" },
              { id: "c", text: "Electron" },
              { id: "d", text: "Neutron" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Subatomic charges",
                statement: "Proton=+, neutron=0, electron=−.",
              },
            ],
            steps: [
              { reasoning: "Proton positive.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Proton",
            commonErrors: ["Confusing charges."],
          },
        },
        {
          id: "esc10-u2-atomic-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "An atom has 17 protons and 18 neutrons. Give its atomic number, mass number and electron count.",
          response: {
            type: "numeric",
            parts: [
              { label: "Atomic number", answer: 17 },
              { label: "Mass number", answer: 35 },
              { label: "Electrons", answer: 17 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Atomic numbers",
                statement:
                  "Atomic number=protons; mass=protons+neutrons; electrons=protons (neutral).",
              },
            ],
            steps: [
              {
                reasoning: "Atomic number = proton count = 17.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Mass number = 17 + 18 = 35.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Electrons = protons = 17 (neutral atom).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "17, 35, 17",
            commonErrors: [
              "Electrons = neutrons assumed.",
              "Mass = protons only.",
            ],
          },
        },
        {
          id: "esc10-u2-atomic-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why do isotopes have the same chemical properties but different physical properties?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Isotopes",
                statement:
                  "Same protons/electrons → same chemistry; different neutrons → different mass.",
              },
            ],
            steps: [
              {
                reasoning: "Chemistry determined by electrons.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Isotopes have same electron arrangement.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Different neutron count = different mass.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Coherent explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Same electrons → same chemical behaviour; different neutrons → different mass → different physical properties.",
            commonErrors: [
              "Isotopes are different elements view.",
              "No electron link.",
            ],
          },
        },
        {
          id: "esc10-u2-atomic-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Chlorine has atomic number 17.",
          parts: [
            {
              label: "a",
              prompt: "Draw/write its electron arrangement.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Predict how many electrons it needs to fill its outer shell.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain the likely type of ion it forms.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Electron arrangement and ions",
                statement: "Outer shell determines bonding and ion charge.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 2,8,7 arrangement.",
                marks: 2,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(b) Needs 1 more electron for full shell.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Outer shell has 7 electrons.",
                marks: 1,
                markCode: "AO1",
                part: "b",
              },
              {
                reasoning: "(c) Gains 1 electron → negative ion Cl⁻.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
              {
                reasoning: "(c) Charge −1 from extra electron.",
                marks: 1,
                markCode: "AO2",
                part: "c",
              },
            ],
            finalAnswer: "(a) 2,8,7 (b) 1 electron needed (c) Cl⁻ negative ion",
            commonErrors: ["Wrong arrangement.", "Positive ion assumed."],
          },
        },
      ],
    },
    {
      id: "esc10-u2-bonding",
      title: "Chemical Bonding and the Periodic Table",
      skill:
        "Describe ionic and covalent bonding and predict properties from structure.",
      lesson: {
        sections: [
          {
            heading: "Ionic bonding",
            body: "Metal + non-metal → **electron transfer** → ions → electrostatic attraction. NaCl: Na loses e⁻ → Na⁺, Cl gains → Cl⁻. Properties: high melting points (strong ionic lattice), conduct electricity when molten/dissolved (mobile ions), hard but brittle.\n\n**Covalent bonding**: non-metal + non-metal → **electron sharing** → molecules. H₂O, CO₂, O₂, CH₄. Properties: low melting points (weak intermolecular forces), don't conduct (no ions/charged particles), often gases/liquids at room temp.",
          },
          {
            heading: "Periodic table patterns",
            body: "**Groups** (columns): same outer electrons → similar properties. Group 1 alkali metals (reactive metals), Group 7 halogens (reactive non-metals), Group 0 noble gases (unreactive). **Periods** (rows): across = metallic → non-metallic trend.\n\n**Reactivity trends**: Group 1 increases down (easier electron loss); Group 7 decreases down (harder electron gain); Group 0 stable throughout. Atomic radius decreases across period, increases down group.",
          },
        ],
        keyFormulas: [
          {
            name: "Bond types",
            statement:
              "Ionic=transfer (metal+non-metal); covalent=sharing (non-metal+non-metal).",
          },
          {
            name: "Group properties",
            statement:
              "Group 1 metals, Group 7 non-metals, Group 0 unreactive.",
          },
        ],
        workedExample: {
          problem: "Predict the bond type and properties of MgO.",
          solution:
            "Magnesium (metal) + oxygen (non-metal) → ionic; high m.p., conducts when molten.",
        },
      },
      questions: [
        {
          id: "esc10-u2-bonding-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What type of bonding occurs between sodium and chlorine?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Covalent" },
              { id: "b", text: "Ionic" },
              { id: "c", text: "Hydrogen" },
              { id: "d", text: "Metallic" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ionic bonding",
                statement: "Metal + non-metal → electron transfer → ions.",
              },
            ],
            steps: [
              {
                reasoning: "Na metal + Cl non-metal = ionic.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Ionic",
            commonErrors: ["Covalent assumed."],
          },
        },
        {
          id: "esc10-u2-bonding-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why do ionic compounds conduct electricity when dissolved but not as solids?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ionic conductivity",
                statement:
                  "Mobile ions needed — free in solution/molten, fixed in solid lattice.",
              },
            ],
            steps: [
              {
                reasoning: "Solid: ions locked in lattice.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Dissolved/molten: ions mobile.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Mobile ions carry charge.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Ions are fixed in solid lattice but mobile when dissolved/molten — only then can charge flow.",
            commonErrors: [
              "Ions exist in both states view missed.",
              "No mobility link.",
            ],
          },
        },
        {
          id: "esc10-u2-bonding-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why Group 1 metals become MORE reactive down the group.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Group 1 reactivity",
                statement:
                  "Outer electron further from nucleus → easier to lose → more reactive.",
              },
            ],
            steps: [
              {
                reasoning: "Down group = more shells.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Outer electron further from nucleus.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Less nuclear attraction = easier loss.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Coherent explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "More shells → outer electron further away → less attraction → easier to lose → more reactive.",
            commonErrors: ["Opposite trend.", "No shielding/distance link."],
          },
        },
        {
          id: "esc10-u2-bonding-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare NaCl and CO₂.",
          parts: [
            { label: "a", prompt: "Identify the bond type in each.", marks: 2 },
            {
              label: "b",
              prompt: "Predict melting point and conductivity for each.",
              marks: 4,
            },
            {
              label: "c",
              prompt: "Link predictions to bonding structure.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Structure-property",
                statement: "Bond type determines physical properties.",
              },
            ],
            steps: [
              {
                reasoning: "(a) NaCl ionic; CO₂ covalent.",
                marks: 2,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(b) NaCl: high m.p., conducts when molten.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) CO₂: low m.p./gas, doesn't conduct.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(c) Ionic lattice strong; covalent molecules weak forces.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) ionic vs covalent (b) NaCl high/conducts, CO₂ low/non-conductor (c) structure explains",
            commonErrors: ["Properties swapped.", "No structure link."],
          },
        },
      ],
    },
  ],
};
