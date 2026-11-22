import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "esc7-u2-lesson-2-3",
  code: "2-3",
  title: "Elements, Compounds and the Periodic Table",
  goal: "I CAN distinguish elements from compounds and use the periodic table to predict properties.",
  standards: ["Edexcel KS3 Science — Chemistry"],
  vocabulary: [
    {
      term: "Element",
      definition: "A pure substance containing only one type of atom.",
    },
    {
      term: "Compound",
      definition:
        "A substance formed when two or more elements chemically bond.",
    },
    {
      term: "Periodic table",
      definition:
        "Arrangement of elements by atomic number showing repeating property patterns.",
    },
    {
      term: "Group",
      definition:
        "Vertical column of elements with similar chemical properties.",
    },
  ],
  concepts: [
    {
      id: "esc7-u2-elements",
      title: "Elements and Compounds",
      skill:
        "Distinguish pure elements from compounds and understand chemical bonding basics.",
      lesson: {
        sections: [
          {
            heading: "Elements vs compounds",
            body: "**Elements**: pure substances of one atom type — cannot be broken down chemically. 118 known elements; ~90 naturally occurring. Represented by symbols: H, O, Fe, Au. Grouped in periodic table by properties.\n\n**Compounds**: two or more elements chemically bonded — fixed ratio, new properties, can only be separated by chemical means. Examples: H₂O (water), CO₂, NaCl, C₆H₁₂O₆ (glucose). **Mixtures** contain elements/compounds physically combined — separable physically.",
          },
          {
            heading: "Chemical bonding basics",
            body: "Atoms bond to achieve stable electron arrangements (full outer shell). **Ionic bonding**: metal + non-metal — electrons transferred → ions attract (NaCl). **Covalent bonding**: non-metal + non-metal — electrons shared (H₂O, CO₂). **Metallic bonding**: metal atoms — delocalised electrons (conductivity).\n\nBond type predicts properties: ionic compounds = hard, high melting, conduct when dissolved/molten; covalent = low melting, poor conductors (except graphite); metals = conductive, malleable.",
          },
        ],
        keyFormulas: [
          {
            name: "Element vs compound",
            statement:
              "Element=one atom type; compound=elements chemically bonded.",
          },
          {
            name: "Bond types",
            statement: "Ionic=transfer, covalent=share, metallic=delocalised.",
          },
        ],
        workedExample: {
          problem: "Is NaCl an element, compound or mixture? Explain.",
          solution:
            "Compound — sodium and chlorine chemically bonded in fixed 1:1 ratio forming new substance with different properties.",
        },
      },
      questions: [
        {
          id: "esc7-u2-elements-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What defines an element?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A mixture of gases" },
              {
                id: "b",
                text: "A pure substance containing only one type of atom",
              },
              { id: "c", text: "Any pure substance" },
              { id: "d", text: "Two or more atoms bonded" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Element",
                statement: "Pure substance of one atom type.",
              },
            ],
            steps: [
              {
                reasoning: "Element = one atom type only.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** One type of atom",
            commonErrors: ["Confusing with compound."],
          },
        },
        {
          id: "esc7-u2-elements-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the difference between ionic and covalent bonding?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bond types",
                statement:
                  "Ionic=electron transfer; covalent=electron sharing.",
              },
            ],
            steps: [
              {
                reasoning: "Ionic: electrons transferred, ions formed.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Covalent: electrons shared between atoms.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Different atom types involved.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Ionic = electron transfer (metal+non-metal); covalent = electron sharing (non-metal+non-metal).",
            commonErrors: ["Reversed definitions.", "No examples."],
          },
        },
        {
          id: "esc7-u2-elements-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why do elements in the same group have similar chemical properties?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Periodic trends",
                statement:
                  "Same group = same outer electron arrangement = similar reactivity.",
              },
            ],
            steps: [
              {
                reasoning: "Group = same outer shell electrons.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Outer electrons determine chemical behaviour.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Similar electron arrangement = similar reactions.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Coherent explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Same group = same outer electron count → similar bonding behaviour → similar chemical properties.",
            commonErrors: ["Random grouping view.", "No electron link."],
          },
        },
        {
          id: "esc7-u2-elements-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare sodium chloride (NaCl) and water (H₂O).",
          parts: [
            {
              label: "a",
              prompt: "Classify each as element, compound or mixture.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Identify the bonding type in each.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Predict one property difference between them.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bonding and properties",
                statement: "Bond type determines physical properties.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Both compounds.",
                marks: 2,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(b) NaCl = ionic (metal+non-metal).",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) H₂O = covalent (non-metal+non-metal).",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) NaCl: high melting, conducts when dissolved.",
                marks: 1,
                markCode: "AO2",
                part: "c",
              },
              {
                reasoning: "(c) H₂O: low melting, doesn't conduct.",
                marks: 1,
                markCode: "AO2",
                part: "c",
              },
              {
                reasoning: "(c) Property linked to bonding.",
                marks: 1,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) both compounds (b) NaCl ionic, H₂O covalent (c) NaCl high m.p./conducts; H₂O low m.p./doesn't",
            commonErrors: ["Wrong bond types.", "No property link."],
          },
        },
      ],
    },
    {
      id: "esc7-u2-periodic",
      title: "The Periodic Table",
      skill:
        "Navigate the periodic table and predict element properties from position.",
      lesson: {
        sections: [
          {
            heading: "Periodic table structure",
            body: "Elements arranged by **atomic number** (proton count) — 118 elements in 7 periods (rows) and 18 groups (columns). **Metals** on left/centre (most elements), **non-metals** on right, **metalloids** along diagonal boundary.\n\n**Groups**: Group 1 = alkali metals (reactive, soft, low density); Group 7 = halogens (reactive non-metals); Group 0 = noble gases (unreactive, full outer shell); Group 2 = alkaline earth metals. **Periods**: elements in same period have same number of electron shells.",
          },
          {
            heading: "Predicting properties",
            body: "Position predicts behaviour: **down a group** = more reactive for Group 1 (easier electron loss), less reactive for Group 7 (harder electron gain); **across a period** = properties change gradually from metallic to non-metallic.\n\n**Uses**: periodic table organises elements for prediction — scientists can anticipate reactions, find elements with needed properties (conductors, catalysts), and understand relationships. Mendeleev's 1869 table left gaps later filled by discovered elements.",
          },
        ],
        keyFormulas: [
          {
            name: "Periodic organisation",
            statement:
              "Periods=rows (electron shells); groups=columns (outer electrons/properties).",
          },
          {
            name: "Group trends",
            statement:
              "Group 1 reactive metals; Group 7 reactive non-metals; Group 0 unreactive gases.",
          },
        ],
        workedExample: {
          problem:
            "Predict the reactivity of potassium (Group 1) vs fluorine (Group 7) when reacting with water.",
          solution:
            "Potassium reacts violently (Group 1 metals increasingly reactive down group); fluorine is a gas that reacts differently — non-metal, not metal-water reaction.",
        },
      },
      questions: [
        {
          id: "esc7-u2-periodic-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What do elements in the same group share?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Same atomic number" },
              { id: "b", text: "Same mass" },
              {
                id: "c",
                text: "Same number of outer electrons → similar properties",
              },
              { id: "d", text: "Same state" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Groups",
                statement:
                  "Same outer electrons = similar chemical properties.",
              },
            ],
            steps: [
              {
                reasoning: "Group = similar outer electrons/properties.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Same outer electrons → similar properties",
            commonErrors: ["Atomic number confusion."],
          },
        },
        {
          id: "esc7-u2-periodic-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why are noble gases (Group 0) unreactive?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Noble gases",
                statement:
                  "Full outer electron shell = stable = no tendency to react.",
              },
            ],
            steps: [
              {
                reasoning: "Full outer shell already stable.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "No need to gain/lose electrons.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Stable configuration prevents reactions.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Noble gases have full outer shells — stable, no need to react for stability.",
            commonErrors: [
              "They're just 'inert' view.",
              "No electron explanation.",
            ],
          },
        },
        {
          id: "esc7-u2-periodic-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Predict and explain the reactivity trend going down Group 1.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Group 1 reactivity",
                statement:
                  "Down group = outer electron further from nucleus = easier to lose = more reactive.",
              },
            ],
            steps: [
              {
                reasoning: "Outer electron gets further from nucleus.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Less nuclear attraction = easier loss.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reactivity increases down group.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Coherent prediction.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Reactivity increases down Group 1 — outer electron further from nucleus, easier to lose.",
            commonErrors: ["Opposite trend.", "No electron distance link."],
          },
        },
        {
          id: "esc7-u2-periodic-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Three elements: sodium (Group 1), chlorine (Group 7), neon (Group 0).",
          parts: [
            {
              label: "a",
              prompt: "Predict which is most reactive with water.",
              marks: 2,
            },
            { label: "b", prompt: "Explain why neon is unreactive.", marks: 3 },
            {
              label: "c",
              prompt: "Predict what happens when sodium reacts with chlorine.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Periodic predictions",
                statement: "Group position predicts reactivity and bonding.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Sodium most reactive — Group 1 metal.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Neon has full outer shell.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Stable = no reaction tendency.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Group 0 = noble gases.",
                marks: 1,
                markCode: "AO1",
                part: "b",
              },
              {
                reasoning: "(c) Sodium donates electron to chlorine.",
                marks: 1,
                markCode: "AO2",
                part: "c",
              },
              {
                reasoning: "(c) Forms ionic NaCl.",
                marks: 1,
                markCode: "AO2",
                part: "c",
              },
              {
                reasoning: "(c) Both achieve stable electron arrangement.",
                marks: 1,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) sodium (b) full shell/stable (c) electron transfer → NaCl",
            commonErrors: ["Neon reactive view.", "No electron transfer."],
          },
        },
      ],
    },
  ],
};
