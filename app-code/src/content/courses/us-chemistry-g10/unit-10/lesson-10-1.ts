import type { Lesson } from "../../../types.ts";

export const lesson101: Lesson = {
  id: "chem10-u10-lesson-10-1",
  code: "10-1",
  title: "Organic Chemistry Basics",
  goal: "I CAN identify organic compounds, functional groups, and basic organic reactions.",
  standards: [
    "HS-PS1-6",
    "HS-PS1-2",
    "CCC: Structure and Function",
    "SEP: Constructing Explanations",
  ],
  vocabulary: [
    {
      term: "Organic compound",
      definition: "Carbon-containing compound (usually C-H bonds).",
    },
    { term: "Hydrocarbon", definition: "Compound of only C and H." },
    { term: "Alkane", definition: "Saturated hydrocarbon, single bonds only." },
    {
      term: "Alkene",
      definition: "Unsaturated hydrocarbon with C=C double bond.",
    },
    {
      term: "Alkyne",
      definition: "Unsaturated hydrocarbon with C≡C triple bond.",
    },
    {
      term: "Functional group",
      definition: "Atom/group determining chemical properties.",
    },
    { term: "Isomer", definition: "Same formula, different structure." },
    {
      term: "Homologous series",
      definition: "Related compounds differing by CH₂.",
    },
  ],
  concepts: [
    {
      id: "chem10-u10-hydrocarbons",
      title: "Hydrocarbons",
      skill: "Classify hydrocarbons and predict properties.",
      lesson: {
        sections: [
          {
            heading: "Types of hydrocarbons",
            body: "- **Alkanes**: single bonds (C-C), saturated. CH₄, C₂H₆, C₃H₈.\n- **Alkenes**: C=C double bond, unsaturated. C₂H₄, C₃H₆.\n- **Alkynes**: C≡C triple bond, unsaturated. C₂H₂.\n- **Aromatic**: ring structures (benzene).",
          },
          {
            heading: "General formulas",
            body: "- Alkane: CₙH₂ₙ₊₂\n- Alkene: CₙH₂ₙ\n- Alkyne: CₙH₂ₙ₋₂",
          },
        ],
        keyFormulas: [
          { name: "Alkane", statement: "CₙH₂ₙ₊₂, single bonds" },
          { name: "Alkene", statement: "CₙH₂ₙ, C=C" },
          { name: "Alkyne", statement: "CₙH₂ₙ₋₂, C≡C" },
        ],
        workedExample: {
          problem: "What's the formula of propane?",
          solution: "C₃H₈ — alkane (CₙH₂ₙ₊₂, n=3).",
        },
      },
      questions: [
        {
          id: "chem10-u10-hc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a hydrocarbon?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only carbon" },
              { id: "b", text: "Only hydrogen" },
              { id: "c", text: "Only C and H" },
              { id: "d", text: "C, H, and O" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hydrocarbon",
                statement: "Only C and H.",
              },
            ],
            steps: [
              {
                reasoning: "Hydrocarbon = carbon + hydrogen only.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Only C and H",
            commonErrors: ["Including oxygen."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "chem10-u10-hc-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Classify: methane, ethene, ethyne.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Hydrocarbon types",
                statement: "Alkane/alkene/alkyne.",
              },
            ],
            steps: [
              { reasoning: "Methane CH₄: alkane.", marks: 1, markCode: "M" },
              { reasoning: "Ethene C₂H₄: alkene.", marks: 1, markCode: "M" },
              { reasoning: "Ethyne C₂H₂: alkyne.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Alkane, alkene, alkyne.",
            commonErrors: ["Wrong classification."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "chem10-u10-hc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What's the general formula for C₅H₁₀? What type?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "General formulas",
                statement: "CₙH₂ₙ = alkene.",
              },
            ],
            steps: [
              {
                reasoning: "C₅H₁₀: H = 2×C → matches CₙH₂ₙ.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "n = 5.", marks: 1, markCode: "M" },
              { reasoning: "Alkene (pentene).", marks: 1, markCode: "M" },
              { reasoning: "Has C=C double bond.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "CₙH₂ₙ (alkene), pentene.",
            commonErrors: ["Wrong formula identification."],
            examinerNote: "M3, A1.",
          },
        },
        {
          id: "chem10-u10-hc-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Compare methane, ethene, ethyne.",
          parts: [
            { label: "a", prompt: "Formulas?", marks: 2 },
            { label: "b", prompt: "Bond types?", marks: 3 },
            { label: "c", prompt: "Reactivity?", marks: 3 },
            { label: "d", prompt: "Uses?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Hydrocarbons",
                statement: "Alkane<alkene<alkyne reactivity.",
              },
            ],
            steps: [
              {
                reasoning: "CH₄, C₂H₄, C₂H₂.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Single, double, triple C-C bonds.",
                marks: 3,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Alkyne most reactive (π bonds), alkane least.",
                marks: 3,
                markCode: "R",
                part: "c",
              },
              {
                reasoning:
                  "CH₄ fuel, C₂H₄ plastic/fruit ripening, C₂H₂ welding.",
                marks: 2,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) CH₄/C₂H₄/C₂H₂ (b) single/double/triple (c) alkyne>alkene>alkane (d) fuel/plastic/welding.",
            commonErrors: ["Wrong reactivity order."],
            examinerNote: "2+3+3+2 = 10.",
          },
        },
      ],
    },
    {
      id: "chem10-u10-functional",
      title: "Functional groups",
      skill: "Identify functional groups and predict properties.",
      lesson: {
        sections: [
          {
            heading: "Key functional groups",
            body: "- **Alcohol**: -OH (ethanol).\n- **Carboxylic acid**: -COOH (acetic acid).\n- **Ester**: -COO- (fragrances).\n- **Ether**: -O- (diethyl ether).\n- **Amine**: -NH₂ (amines).\n- **Aldehyde**: -CHO (formaldehyde).\n- **Ketone**: C=O (acetone).",
          },
          {
            heading: "Properties",
            body: "Functional groups determine chemical properties more than carbon skeleton.\n\n- Alcohols: polar, H-bonding.\n- Acids: donate H⁺.\n- Esters: pleasant odors.",
          },
        ],
        keyFormulas: [
          { name: "Alcohol", statement: "-OH group" },
          { name: "Carboxylic acid", statement: "-COOH group" },
          { name: "Ester", statement: "-COO- group" },
        ],
        workedExample: {
          problem: "Identify functional group in CH₃COOH.",
          solution: "Carboxylic acid (-COOH) — acetic acid.",
        },
      },
      questions: [
        {
          id: "chem10-u10-fg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What functional group is in ethanol (CH₃CH₂OH)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Carboxylic acid" },
              { id: "b", text: "Alcohol (-OH)" },
              { id: "c", text: "Ester" },
              { id: "d", text: "Ketone" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Functional groups",
                statement: "-OH = alcohol.",
              },
            ],
            steps: [
              { reasoning: "-OH group → alcohol.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Alcohol (-OH)",
            commonErrors: ["Confusing with acid."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u10-fg-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name the functional group in each: CH₃COOH, CH₃CHO, CH₃COCH₃.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Functional groups",
                statement: "-COOH, -CHO, C=O.",
              },
            ],
            steps: [
              {
                reasoning: "CH₃COOH: carboxylic acid.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "CH₃CHO: aldehyde.", marks: 1, markCode: "M" },
              { reasoning: "CH₃COCH₃: ketone.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Carboxylic acid, aldehyde, ketone.",
            commonErrors: ["Confusing aldehyde/ketone."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "chem10-u10-fg-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why do esters have pleasant odors while acids smell sour?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Functional groups",
                statement: "Different groups → different properties.",
              },
            ],
            steps: [
              {
                reasoning: "Esters (-COO-) → volatile, pleasant-smelling.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Carboxylic acids (-COOH) → sour, acidic.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Functional group determines properties.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Same C skeleton, different group → different smell.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Functional group determines odor/properties.",
            commonErrors: ["Not linking to functional group."],
            examinerNote: "M2, R1, A1.",
          },
        },
        {
          id: "chem10-u10-fg-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Identify functional groups in:",
          parts: [
            { label: "a", prompt: "CH₃CH₂OH", marks: 2 },
            { label: "b", prompt: "CH₃COOH", marks: 2 },
            { label: "c", prompt: "CH₃COOCH₃", marks: 3 },
            { label: "d", prompt: "CH₃NH₂", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Functional groups",
                statement: "Identify by structure.",
              },
            ],
            steps: [
              {
                reasoning: "CH₃CH₂OH: alcohol (-OH).",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "CH₃COOH: carboxylic acid (-COOH).",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "CH₃COOCH₃: ester (-COO-).",
                marks: 3,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "CH₃NH₂: amine (-NH₂).",
                marks: 3,
                markCode: "M",
                part: "d",
              },
            ],
            finalAnswer: "(a) alcohol (b) carboxylic acid (c) ester (d) amine.",
            commonErrors: ["Missing ester vs acid distinction."],
            examinerNote: "2+2+3+3 = 10.",
          },
        },
      ],
    },
    {
      id: "chem10-u10-isomers",
      title: "Isomers and polymers",
      skill: "Distinguish isomers and describe polymer formation.",
      lesson: {
        sections: [
          {
            heading: "Isomers",
            body: "Same molecular formula, different structure:\n\n- **Structural isomers**: different connectivity (butane vs isobutane).\n- **Geometric isomers**: different spatial arrangement (cis/trans).\n- **Optical isomers**: mirror images (enantiomers).",
          },
          {
            heading: "Polymers",
            body: "Long chains of repeating units (monomers).\n\n- **Addition**: monomers add without byproduct (polyethylene).\n- **Condensation**: monomers join releasing small molecule (nylon, polyester).",
          },
        ],
        keyFormulas: [
          { name: "Isomer", statement: "Same formula, different structure" },
          { name: "Polymer", statement: "Repeating monomer units" },
          { name: "Addition polymerization", statement: "No byproduct" },
        ],
        workedExample: {
          problem: "What are the isomers of C₄H₁₀?",
          solution: "Butane and isobutane (2-methylpropane).",
        },
      },
      questions: [
        {
          id: "chem10-u10-isomers-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are isomers?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Same formula, different structure" },
              { id: "b", text: "Different formulas" },
              { id: "c", text: "Same structure, different formula" },
              { id: "d", text: "Different elements" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Isomer",
                statement: "Same formula, different structure.",
              },
            ],
            steps: [
              {
                reasoning: "Isomers = same atoms, different arrangement.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Same formula, different structure",
            commonErrors: ["Different formulas."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "chem10-u10-isomers-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "How many structural isomers does C₄H₁₀ have? Name them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Isomers",
                statement: "Butane + isobutane.",
              },
            ],
            steps: [
              { reasoning: "Butane: straight chain.", marks: 1, markCode: "M" },
              {
                reasoning: "Isobutane (2-methylpropane): branched.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Total: 2 isomers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2: butane and isobutane.",
            commonErrors: ["Missing isobutane."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "chem10-u10-isomers-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Distinguish addition vs condensation polymerization.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Polymerization",
                statement: "Addition vs condensation.",
              },
            ],
            steps: [
              {
                reasoning: "Addition: monomers add directly, no byproduct.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Condensation: monomers join releasing small molecule (H₂O).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example addition: polyethylene; condensation: nylon.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Condensation requires bifunctional monomers.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Addition=no byproduct; condensation=releases molecule.",
            commonErrors: ["Same mechanism for both."],
            examinerNote: "M3, R1.",
          },
        },
        {
          id: "chem10-u10-isomers-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Polymers and everyday materials.",
          parts: [
            { label: "a", prompt: "What is a polymer?", marks: 2 },
            {
              label: "b",
              prompt: "Addition polymerization example?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Condensation polymerization example?",
              marks: 3,
            },
            { label: "d", prompt: "Why are polymers useful?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Polymers",
                statement: "Repeating units, varied properties.",
              },
            ],
            steps: [
              {
                reasoning: "Long chain of repeating monomer units.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Polyethylene from ethene (no byproduct).",
                marks: 3,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Nylon from diamine + diacid (releases H₂O).",
                marks: 3,
                markCode: "M",
                part: "c",
              },
              {
                reasoning:
                  "Tunable properties: strength, flexibility, durability.",
                marks: 2,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) repeating units (b) polyethylene (c) nylon (d) tunable properties.",
            commonErrors: ["Not distinguishing types."],
            examinerNote: "2+3+3+2 = 10.",
          },
        },
      ],
    },
    {
      id: "chem10-u10-biochemistry",
      title: "Biochemistry basics",
      skill: "Identify biological molecules and their functions.",
      lesson: {
        sections: [
          {
            heading: "Biological molecules",
            body: "- **Carbohydrates**: sugars, starch (energy).\n- **Lipids**: fats, oils (energy storage, membranes).\n- **Proteins**: amino acid chains (structure, enzymes).\n- **Nucleic acids**: DNA, RNA (genetic info).",
          },
          {
            heading: "Monomers and polymers",
            body: "Biological molecules are polymers:\n- Carbohydrates: monosaccharide monomers.\n- Proteins: amino acid monomers.\n- Nucleic acids: nucleotide monomers.\n- Lipids: not true polymers (glycerol + fatty acids).",
          },
        ],
        keyFormulas: [
          { name: "Carbohydrates", statement: "Sugar monomers → energy" },
          {
            name: "Proteins",
            statement: "Amino acid monomers → structure/enzyme",
          },
          {
            name: "Nucleic acids",
            statement: "Nucleotide monomers → genetic info",
          },
        ],
        workedExample: {
          problem: "What are the monomers of proteins?",
          solution: "Amino acids — linked by peptide bonds.",
        },
      },
      questions: [
        {
          id: "chem10-u10-biochem-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the monomers of proteins?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Glucose" },
              { id: "b", text: "Amino acids" },
              { id: "c", text: "Nucleotides" },
              { id: "d", text: "Fatty acids" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Proteins",
                statement: "Amino acid monomers.",
              },
            ],
            steps: [
              {
                reasoning: "Proteins = amino acid polymers.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Amino acids",
            commonErrors: ["Wrong monomer."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u10-biochem-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name the four major biological molecule types.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Biomolecules",
                statement: "Carbs, lipids, proteins, nucleic acids.",
              },
            ],
            steps: [
              { reasoning: "Carbohydrates.", marks: 1, markCode: "M" },
              { reasoning: "Lipids.", marks: 1, markCode: "M" },
              {
                reasoning: "Proteins + nucleic acids.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Carbs, lipids, proteins, nucleic acids.",
            commonErrors: ["Missing one."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "chem10-u10-biochem-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare carbohydrates and lipids as energy sources.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Energy storage",
                statement: "Carbs quick, lipids long-term.",
              },
            ],
            steps: [
              {
                reasoning: "Carbs: quick energy, water-soluble.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Lipids: dense energy (9 kcal/g vs 4), long-term storage.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Lipids hydrophobic → compact storage.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Carbs used first; lipids when carbs depleted.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Carbs=quick, lipids=long-term dense energy.",
            commonErrors: ["Same energy density."],
            examinerNote: "M2, R1, A1.",
          },
        },
        {
          id: "chem10-u10-biochem-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Biological molecules and their functions.",
          parts: [
            { label: "a", prompt: "Carbohydrate function?", marks: 2 },
            { label: "b", prompt: "Lipid function?", marks: 2 },
            { label: "c", prompt: "Protein function?", marks: 3 },
            { label: "d", prompt: "Nucleic acid function?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Biomolecule functions",
                statement: "Energy, structure, catalysis, info.",
              },
            ],
            steps: [
              {
                reasoning: "Carbs: energy (glucose, glycogen).",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Lipids: energy storage, membranes, insulation.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Proteins: structure, enzymes, transport, defense.",
                marks: 3,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Nucleic acids: genetic information (DNA, RNA).",
                marks: 3,
                markCode: "M",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) energy (b) storage/membrane (c) structure/enzyme (d) genetic info.",
            commonErrors: ["Vague functions."],
            examinerNote: "2+2+3+3 = 10.",
          },
        },
      ],
    },
    {
      id: "chem10-u10-capstone",
      title: "Chemistry Capstone",
      skill: "Integrate all chemistry concepts in real-world scenarios.",
      lesson: {
        sections: [
          {
            heading: "Integration",
            body: "Chemistry connects:\n- **Atomic** → bonding → molecules.\n- **Reactions** → stoichiometry → equilibrium.\n- **Properties** → IMFs → phase behavior.\n- **Applications** → industry, medicine, environment.",
          },
          {
            heading: "Real-world chemistry",
            body: "- **Pharmaceuticals**: synthesis, purity, dosage.\n- **Environmental**: pollution, remediation, green chemistry.\n- **Energy**: fuels, batteries, solar cells.\n- **Materials**: polymers, ceramics, composites.",
          },
        ],
        keyFormulas: [
          {
            name: "Integration",
            statement: "Atomic → molecular → reaction → application",
          },
          {
            name: "Green chemistry",
            statement: "Reduce waste, safer processes",
          },
          { name: "Life cycle", statement: "Source → use → disposal → impact" },
        ],
        workedExample: {
          problem: "How does chemistry apply to water purification?",
          solution:
            "Coagulation, filtration, disinfection, pH adjustment — all chemical processes.",
        },
      },
      questions: [
        {
          id: "chem10-u10-cap-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is green chemistry?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Chemistry of plants" },
              { id: "b", text: "Reducing waste and hazards" },
              { id: "c", text: "Natural products only" },
              { id: "d", text: "Biodegradable only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Green chemistry",
                statement: "Reduce waste/hazards.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Green chemistry = environmentally benign processes.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Reducing waste and hazards",
            commonErrors: ["Thinking only plants."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u10-cap-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does chemistry apply to water purification?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Water purification",
                statement: "Chemical processes remove contaminants.",
              },
            ],
            steps: [
              {
                reasoning: "Coagulation: chemicals clump particles.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Disinfection: chlorine/ozone kills microbes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "pH adjustment: chemicals optimize treatment.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Coagulation, disinfection, pH adjustment.",
            commonErrors: ["Only physical processes."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "chem10-u10-cap-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why are drugs tested for purity and dosage?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Pharmaceutical chemistry",
                statement: "Purity + dose critical.",
              },
            ],
            steps: [
              {
                reasoning: "Impurities can be toxic.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Dose must be effective but safe.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Chemical analysis ensures purity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Stoichiometry/dosage calculations critical.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Purity prevents toxicity; dosage ensures safety/efficacy.",
            commonErrors: ["Not mentioning stoichiometry."],
            examinerNote: "R2, M1, A1.",
          },
        },
        {
          id: "chem10-u10-cap-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Design a green chemistry process.",
          parts: [
            { label: "a", prompt: "What is the goal?", marks: 2 },
            { label: "b", prompt: "What principles apply?", marks: 3 },
            { label: "c", prompt: "Example process?", marks: 3 },
            { label: "d", prompt: "Benefits?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Green chemistry",
                statement: "Reduce waste, safer, efficient.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Reduce waste, eliminate hazards, use renewable feedstocks.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning:
                  "Prevent waste, atom economy, safer solvents, energy efficiency.",
                marks: 3,
                markCode: "R",
                part: "b",
              },
              {
                reasoning:
                  "Example: enzymatic synthesis (mild conditions, no toxic solvents).",
                marks: 3,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Less waste, safer, cheaper, sustainable.",
                marks: 2,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) reduce waste (b) atom economy+safer (c) enzymatic (d) sustainable.",
            commonErrors: ["Not specific enough."],
            examinerNote: "2+3+3+2 = 10.",
          },
        },
      ],
    },
  ],
};
