import type { Lesson } from "../../../types.ts";

export const lesson102: Lesson = {
  id: "chem10-u10-lesson-10-2",
  code: "10-2",
  title: "Matter and Energy Integration",
  goal: "I CAN integrate matter classification, atomic structure, and energy concepts in problem-solving.",
  standards: [
    "HS-PS1-1",
    "HS-PS1-2",
    "HS-PS1-4",
    "CCC: Systems and System Models",
    "SEP: Constructing Explanations",
  ],
  vocabulary: [
    {
      term: "Pure substance",
      definition: "Element or compound with fixed composition.",
    },
    {
      term: "Mixture",
      definition: "Combination of substances not chemically bonded.",
    },
    {
      term: "Heterogeneous mixture",
      definition: "Components visibly distinct.",
    },
    {
      term: "Homogeneous mixture",
      definition: "Uniform composition throughout.",
    },
    {
      term: "Physical change",
      definition: "Change without new substance formation.",
    },
    { term: "Chemical change", definition: "Change producing new substances." },
    {
      term: "Conservation of mass",
      definition: "Mass conserved in chemical reactions.",
    },
    {
      term: "Conservation of energy",
      definition: "Energy conserved in reactions.",
    },
  ],
  concepts: [
    {
      id: "chem10-u10-matter",
      title: "Classification of matter",
      skill: "Classify substances as elements, compounds, or mixtures.",
      lesson: {
        sections: [
          {
            heading: "Matter classification",
            body: "- **Element**: single type of atom (Fe, O₂).\n- **Compound**: two+ elements chemically bonded (H₂O, NaCl).\n- **Mixture**: two+ substances physically combined.",
          },
          {
            heading: "Mixture types",
            body: "- **Heterogeneous**: visibly different parts (sand + water).\n- **Homogeneous**: uniform (salt water, air).",
          },
        ],
        keyFormulas: [
          { name: "Element", statement: "One type of atom" },
          { name: "Compound", statement: "Chemically bonded elements" },
          { name: "Mixture", statement: "Physically combined" },
        ],
        workedExample: {
          problem: "Classify: iron filings, water, salt water, air.",
          solution:
            "Iron = element; water = compound; salt water = homogeneous mixture; air = homogeneous mixture.",
        },
      },
      questions: [
        {
          id: "chem10-u10-matter-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a compound?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Single element" },
              { id: "b", text: "Chemically bonded elements" },
              { id: "c", text: "Physical mixture" },
              { id: "d", text: "Solution" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Compound",
                statement: "Chemically bonded elements.",
              },
            ],
            steps: [
              {
                reasoning: "Compound = elements chemically combined.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Chemically bonded elements",
            commonErrors: ["Confusing with mixture."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u10-matter-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Classify: (a) bronze, (b) distilled water, (c) granite.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Matter types",
                statement: "Element/compound/mixture.",
              },
            ],
            steps: [
              {
                reasoning: "Bronze: homogeneous mixture (Cu+Sn alloy).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Distilled water: compound (H₂O).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Granite: heterogeneous mixture (minerals).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) mixture (b) compound (c) heterogeneous mixture.",
            commonErrors: ["Bronze as compound."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "chem10-u10-matter-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Distinguish physical vs chemical change with examples.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Physical vs chemical",
                statement: "New substance or not.",
              },
            ],
            steps: [
              {
                reasoning: "Physical: no new substance (melting, dissolving).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Chemical: new substance formed (rusting, burning).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Physical reversible; chemical often irreversible.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Example: ice melting (physical) vs water electrolysis (chemical).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Physical=no new substance; chemical=new substance.",
            commonErrors: ["Dissolving as chemical."],
            examinerNote: "M2, R1, A1.",
          },
        },
        {
          id: "chem10-u10-matter-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Conservation laws in reactions.",
          parts: [
            { label: "a", prompt: "What is conservation of mass?", marks: 2 },
            { label: "b", prompt: "What is conservation of energy?", marks: 2 },
            { label: "c", prompt: "Example of mass conservation?", marks: 3 },
            { label: "d", prompt: "Example of energy conservation?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conservation",
                statement: "Mass and energy conserved.",
              },
            ],
            steps: [
              {
                reasoning: "Total mass before = total mass after.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Total energy before = total energy after.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning:
                  "Burning wood: mass of wood+O₂ = mass of ash+CO₂+H₂O.",
                marks: 3,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Exothermic: chemical energy → heat+light.",
                marks: 3,
                markCode: "M",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) mass conserved (b) energy conserved (c) burning (d) energy transform.",
            commonErrors: ["Mass not conserved in reactions."],
            examinerNote: "2+2+3+3 = 10.",
          },
        },
      ],
    },
    {
      id: "chem10-u10-atomic-structure",
      title: "Atomic structure integration",
      skill: "Connect atomic structure to chemical properties.",
      lesson: {
        sections: [
          {
            heading: "Atomic structure review",
            body: "- **Nucleus**: protons (+), neutrons (0).\n- **Electrons** (−): in orbitals/shells.\n- **Atomic number** = protons.\n- **Mass number** = protons + neutrons.\n- **Ions**: gained/lost electrons.",
          },
          {
            heading: "Structure → properties",
            body: "- Valence electrons → chemical behavior.\n- Electron configuration → position in table.\n- Nuclear charge → atomic radius, IE, electronegativity.",
          },
        ],
        keyFormulas: [
          { name: "Atomic number", statement: "Protons = element identity" },
          { name: "Ion", statement: "Gained/lost electrons" },
          {
            name: "Valence electrons",
            statement: "Determine chemical properties",
          },
        ],
        workedExample: {
          problem: "Why is Na more reactive than Mg?",
          solution:
            "Na has 1 valence electron → easier to lose → more reactive.",
        },
      },
      questions: [
        {
          id: "chem10-u10-atomic-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What determines an element's identity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mass number" },
              { id: "b", text: "Atomic number" },
              { id: "c", text: "Neutron count" },
              { id: "d", text: "Electron count" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Atomic number",
                statement: "Protons = identity.",
              },
            ],
            steps: [
              {
                reasoning: "Atomic number = protons defines element.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Atomic number",
            commonErrors: ["Mass number."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u10-atomic-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the difference between an atom and an ion?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Atom vs ion",
                statement: "Ions have different electron count.",
              },
            ],
            steps: [
              {
                reasoning: "Atom: neutral, protons = electrons.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ion: gained/lost electrons → charged.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cation: lost e⁻ (+); anion: gained e⁻ (−).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Ion = atom ± electrons.",
            commonErrors: ["Different protons."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "chem10-u10-atomic-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does electron configuration relate to periodic position?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Configuration→position",
                statement: "Valence e⁻ = group; shells = period.",
              },
            ],
            steps: [
              {
                reasoning: "Period = number of electron shells.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Group = valence electrons (main group).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Same group = same valence → similar chemistry.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Example: Na and K both group 1 → similar.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Config determines position; position predicts chemistry.",
            commonErrors: ["Not linking to valence."],
            examinerNote: "M2, R1, A1.",
          },
        },
        {
          id: "chem10-u10-atomic-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Atomic structure and chemical properties.",
          parts: [
            { label: "a", prompt: "What are valence electrons?", marks: 2 },
            {
              label: "b",
              prompt: "Why do they determine chemistry?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "How does nuclear charge affect size?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Example: why is Cl more electronegative than I?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Structure→properties",
                statement: "Electrons determine behavior.",
              },
            ],
            steps: [
              {
                reasoning: "Outermost shell electrons.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "They participate in bonding → determine reactions.",
                marks: 3,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Higher Z → stronger pull → smaller atom.",
                marks: 2,
                markCode: "R",
                part: "c",
              },
              {
                reasoning:
                  "Cl smaller → stronger pull on bonding electrons → higher EN.",
                marks: 2,
                markCode: "R",
                part: "d",
              },
              {
                reasoning: "I larger → weaker pull → lower EN.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) outermost (b) bonding (c) size (d) Cl> I due to size.",
            commonErrors: ["Not linking structure to EN."],
            examinerNote: "2+3+2+3 = 10.",
          },
        },
      ],
    },
    {
      id: "chem10-u10-bonding-energy",
      title: "Bonding and energy integration",
      skill: "Connect bonding types to energy changes and properties.",
      lesson: {
        sections: [
          {
            heading: "Bond types and energy",
            body: "- **Ionic**: electron transfer → lattice energy.\n- **Covalent**: electron sharing → bond energy.\n- **Metallic**: electron sea → delocalized bonding.\n\nBreaking bonds: endothermic. Forming: exothermic.",
          },
          {
            heading: "Properties from bonding",
            body: "- Ionic: high mp, brittle, conducts when dissolved.\n- Covalent: low mp (molecular), insulators.\n- Metallic: conducts, malleable.",
          },
        ],
        keyFormulas: [
          { name: "Ionic", statement: "Transfer → lattice" },
          { name: "Covalent", statement: "Share → bond energy" },
          { name: "Metallic", statement: "Sea → conducts" },
        ],
        workedExample: {
          problem: "Why does NaCl have high melting point but sugar doesn't?",
          solution:
            "NaCl ionic lattice (strong) vs sugar molecular (weak IMFs).",
        },
      },
      questions: [
        {
          id: "chem10-u10-be-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which bond type involves electron transfer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Covalent" },
              { id: "b", text: "Ionic" },
              { id: "c", text: "Metallic" },
              { id: "d", text: "Hydrogen" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Ionic bond",
                statement: "Electron transfer.",
              },
            ],
            steps: [
              {
                reasoning: "Ionic = transfer; covalent = share.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Ionic",
            commonErrors: ["Confusing with covalent."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u10-be-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why are ionic compounds brittle?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Ionic brittleness",
                statement: "Like charges repel when shifted.",
              },
            ],
            steps: [
              { reasoning: "Ions in lattice.", marks: 1, markCode: "M" },
              {
                reasoning: "Shift → like charges align → repel.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Crystal breaks → brittle.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Like-charge repulsion → brittle.",
            commonErrors: ["Not explaining mechanism."],
            examinerNote: "M1, R1, A1.",
          },
        },
        {
          id: "chem10-u10-be-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare melting points: NaCl vs sugar vs iron.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Bonding→mp",
                statement: "Ionic/metallic > covalent.",
              },
            ],
            steps: [
              {
                reasoning: "Iron (metallic): highest mp.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "NaCl (ionic): high mp.", marks: 1, markCode: "M" },
              {
                reasoning: "Sugar (covalent molecular): low mp.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Metallic/ionic > molecular IMFs.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Fe > NaCl > sugar.",
            commonErrors: ["Sugar higher than NaCl."],
            examinerNote: "M3, R1.",
          },
        },
        {
          id: "chem10-u10-be-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Bonding and energy changes.",
          parts: [
            { label: "a", prompt: "Breaking bonds: exo or endo?", marks: 2 },
            { label: "b", prompt: "Forming bonds: exo or endo?", marks: 2 },
            { label: "c", prompt: "Net ΔH for reaction?", marks: 3 },
            { label: "d", prompt: "Example calculation?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Bond energy",
                statement: "Break=endo, form=exo.",
              },
            ],
            steps: [
              {
                reasoning: "Breaking: endothermic (+).",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Forming: exothermic (−).",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "$ΔH = ΣE_{broken} - ΣE_{formed}$.",
                marks: 3,
                markCode: "M",
                part: "c",
              },
              {
                reasoning:
                  "H₂ + Cl₂ → 2HCl: ΔH = (436+243) − 2(431) = −183 kJ.",
                marks: 3,
                markCode: "M",
                part: "d",
              },
            ],
            finalAnswer: "(a) endo (b) exo (c) broken−formed (d) −183 kJ.",
            commonErrors: ["Wrong formula."],
            examinerNote: "2+2+3+3 = 10.",
          },
        },
      ],
    },
  ],
};
