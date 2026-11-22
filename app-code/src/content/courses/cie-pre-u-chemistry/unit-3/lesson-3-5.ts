import type { Lesson } from "../../../types.ts";

export const lesson35: Lesson = {
  id: "cipuc-u3-lesson-3-5",
  code: "3-5",
  title: "Polymers, transition metals and environmental chemistry",
  goal: "I CAN explain polymers, transition metals, and environmental issues.",
  standards: ["Cambridge Pre-U Chemistry 9791", "Paper 1: Applied chemistry"],
  vocabulary: [
    {
      term: "Polymer",
      definition: "Large molecule made of many monomers.",
    },
    {
      term: "Monomer",
      definition: "Small molecule that joins to form polymer.",
    },
    {
      term: "Addition polymer",
      definition: "Polymer from C=C monomers — no byproduct.",
    },
    {
      term: "Condensation polymer",
      definition: "Polymer with loss of small molecule.",
    },
    {
      term: "Transition metal",
      definition: "Group 3-12 element — variable oxidation states.",
    },
    {
      term: "Complex ion",
      definition: "Metal ion + ligands — coordination compound.",
    },
    {
      term: "Ligand",
      definition: "Molecule/ion bonded to metal in complex.",
    },
    {
      term: "Catalyst",
      definition: "Speeds up reaction without being consumed.",
    },
    {
      term: "Greenhouse gas",
      definition: "Gas trapping heat — CO₂, CH₄.",
    },
    {
      term: "Acid rain",
      definition: "Rain with pH < 5.6 from SO₂/NOₓ.",
    },
    {
      term: "Ozone depletion",
      definition: "Destruction of O₃ layer by CFCs.",
    },
    {
      term: "Biofuel",
      definition: "Fuel from biological sources — ethanol, biodiesel.",
    },
  ],
  concepts: [
    {
      id: "cipuc-u3-polymer",
      title: "Polymers and materials",
      skill: "Explain polymer types, properties, and applications.",
      lesson: {
        sections: [
          {
            heading: "Addition polymers",
            body: "**Addition polymerisation**: C=C monomers join — no byproduct. **Polyethene** (PE): ethene → plastic bags, bottles. **PVC**: vinyl chloride → pipes, cables. **Polystyrene** (PS): styrene → packaging, insulation. **PMMA**: methyl methacrylate → Perspex. **PTFE**: tetrafluoroethene → non-stick coating.",
          },
          {
            heading: "Condensation polymers",
            body: "**Condensation polymerisation**: monomers join with loss of small molecule (usually water). **Nylon**: diamine + dicarboxylic acid → polyamide — fibres, ropes. **Polyester**: diol + dicarboxylic acid → PET — bottles, fibres. **Terylene**: polyester fibre. **Proteins**: amino acids → polypeptides.",
          },
          {
            heading: "Polymer properties",
            body: "**Thermoplastics**: soften when heated — can be reshaped (PE, PVC, PS). **Thermosets**: harden permanently — can't be reshaped (bakelite, epoxy). **Properties**: strength, flexibility, transparency, chemical resistance. **Environmental issues**: non-biodegradable — pollution, landfill.",
          },
        ],
        keyFormulas: [
          {
            name: "Addition polymer",
            statement: "C=C monomers → polymer",
          },
          {
            name: "Condensation polymer",
            statement: "Monomers + small molecule loss",
          },
          {
            name: "Thermoplastic",
            statement: "Softens when heated",
          },
          {
            name: "Thermoset",
            statement: "Hardens permanently",
          },
        ],
        workedExample: {
          problem: "What type of polymer is nylon?",
          solution:
            "Condensation polymer — diamine + dicarboxylic acid, loses water.",
        },
      },
      questions: [
        {
          id: "cipuc-u3-pol-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A polymer is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Large molecule made of many monomers" },
              { id: "b", text: "No molecule" },
              { id: "c", text: "Small molecule" },
              { id: "d", text: "Monomer" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Polymer",
                statement: "Many monomers.",
              },
            ],
            steps: [
              {
                reasoning: "Polymer = many monomers.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Many monomers.",
          },
        },
        {
          id: "cipuc-u3-pol-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Polyethene is made from:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ethanol" },
              { id: "b", text: "Ethane" },
              { id: "c", text: "Ethene" },
              { id: "d", text: "Ethanoic acid" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Polyethene",
                statement: "Ethene monomer.",
              },
            ],
            steps: [{ reasoning: "PE = ethene.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Ethene.",
          },
        },
        {
          id: "cipuc-u3-pol-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "PVC is made from:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Vinyl chloride" },
              { id: "b", text: "Propene" },
              { id: "c", text: "Styrene" },
              { id: "d", text: "Ethene" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "PVC", statement: "Vinyl chloride." },
            ],
            steps: [
              { reasoning: "PVC = vinyl chloride.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Vinyl chloride.",
          },
        },
        {
          id: "cipuc-u3-pol-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Polystyrene is made from:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ethene" },
              { id: "b", text: "Vinyl chloride" },
              { id: "c", text: "Styrene" },
              { id: "d", text: "Propene" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Polystyrene",
                statement: "Styrene.",
              },
            ],
            steps: [{ reasoning: "PS = styrene.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Styrene.",
          },
        },
        {
          id: "cipuc-u3-pol-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Nylon is a:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Condensation polymer" },
              { id: "b", text: "No polymer" },
              { id: "c", text: "Monomer" },
              { id: "d", text: "Addition polymer" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nylon",
                statement: "Condensation polymer.",
              },
            ],
            steps: [
              { reasoning: "Nylon = condensation.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Condensation polymer.",
          },
        },
        {
          id: "cipuc-u3-pol-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Polyester is a:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No polymer" },
              { id: "b", text: "Condensation polymer" },
              { id: "c", text: "Monomer" },
              { id: "d", text: "Addition polymer" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Polyester",
                statement: "Condensation polymer.",
              },
            ],
            steps: [
              {
                reasoning: "Polyester = condensation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Condensation polymer.",
          },
        },
        {
          id: "cipuc-u3-pol-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A thermoplastic:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Softens when heated — can be reshaped" },
              { id: "b", text: "No change" },
              { id: "c", text: "Burns" },
              { id: "d", text: "Hardens permanently" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Thermoplastic",
                statement: "Softens when heated.",
              },
            ],
            steps: [
              {
                reasoning: "Thermoplastic = softens.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Softens when heated.",
          },
        },
        {
          id: "cipuc-u3-pol-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A thermoset polymer:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Melts" },
              { id: "b", text: "Hardens permanently — can't be reshaped" },
              { id: "c", text: "No change" },
              { id: "d", text: "Softens when heated" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Thermoset",
                statement: "Hardens permanently.",
              },
            ],
            steps: [
              { reasoning: "Thermoset = permanent.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Hardens permanently.",
          },
        },
        {
          id: "cipuc-u3-pol-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "PTFE is used for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Non-stick coatings" },
              { id: "b", text: "Bottles" },
              { id: "c", text: "Ropes" },
              { id: "d", text: "Clothing" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "PTFE", statement: "Non-stick." },
            ],
            steps: [
              { reasoning: "PTFE = non-stick.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Non-stick coatings.",
          },
        },
        {
          id: "cipuc-u3-pol-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Perspex is made from:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "PS" },
              { id: "b", text: "PVC" },
              { id: "c", text: "PMMA (methyl methacrylate)" },
              { id: "d", text: "PE" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Perspex", statement: "PMMA." },
            ],
            steps: [{ reasoning: "Perspex = PMMA.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) PMMA.",
          },
        },
        {
          id: "cipuc-u3-pol-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Addition polymerisation produces:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only monomer" },
              { id: "b", text: "Polymer + water" },
              { id: "c", text: "Polymer without byproduct" },
              { id: "d", text: "Gas" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Addition polymer",
                statement: "No byproduct.",
              },
            ],
            steps: [
              {
                reasoning: "Addition = no byproduct.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) No byproduct.",
          },
        },
        {
          id: "cipuc-u3-pol-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Condensation polymerisation produces:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only polymer" },
              { id: "b", text: "Only monomer" },
              { id: "c", text: "No product" },
              { id: "d", text: "Polymer + small molecule (e.g., water)" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Condensation polymer",
                statement: "Polymer + byproduct.",
              },
            ],
            steps: [
              {
                reasoning: "Condensation = byproduct.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Polymer + small molecule.",
          },
        },
        {
          id: "cipuc-u3-pol-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A natural polymer is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "PE" },
              { id: "b", text: "PVC" },
              { id: "c", text: "Cellulose" },
              { id: "d", text: "Nylon" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Natural polymer",
                statement: "Cellulose.",
              },
            ],
            steps: [
              { reasoning: "Cellulose = natural.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Cellulose.",
          },
        },
        {
          id: "cipuc-u3-pol-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Starch is a:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Monomer" },
              { id: "b", text: "No polymer" },
              { id: "c", text: "Synthetic polymer" },
              { id: "d", text: "Natural polymer of glucose" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Starch",
                statement: "Glucose polymer.",
              },
            ],
            steps: [
              {
                reasoning: "Starch = glucose polymer.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Glucose polymer.",
          },
        },
        {
          id: "cipuc-u3-pol-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Proteins are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Natural condensation polymers of amino acids" },
              { id: "b", text: "Synthetic" },
              { id: "c", text: "No polymer" },
              { id: "d", text: "Monomers" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Proteins",
                statement: "Amino acid polymers.",
              },
            ],
            steps: [
              {
                reasoning: "Proteins = amino acid polymers.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Amino acid polymers.",
          },
        },
        {
          id: "cipuc-u3-pol-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "DNA is a:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Synthetic polymer" },
              { id: "b", text: "No polymer" },
              { id: "c", text: "Natural polymer of nucleotides" },
              { id: "d", text: "Monomer" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "DNA",
                statement: "Nucleotide polymer.",
              },
            ],
            steps: [
              {
                reasoning: "DNA = nucleotide polymer.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Nucleotide polymer.",
          },
        },
        {
          id: "cipuc-u3-pol-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "A biodegradable polymer is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Burns" },
              { id: "b", text: "No change" },
              { id: "c", text: "Decomposes naturally" },
              { id: "d", text: "Lasts forever" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Biodegradable",
                statement: "Decomposes naturally.",
              },
            ],
            steps: [
              {
                reasoning: "Biodegradable = decomposes.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Decomposes naturally.",
          },
        },
        {
          id: "cipuc-u3-pol-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "Most synthetic polymers are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Natural" },
              { id: "b", text: "Non-biodegradable" },
              { id: "c", text: "No change" },
              { id: "d", text: "Biodegradable" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Synthetic polymers",
                statement: "Non-biodegradable.",
              },
            ],
            steps: [
              {
                reasoning: "Synthetic = non-biodegradable.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Non-biodegradable.",
          },
        },
        {
          id: "cipuc-u3-pol-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "Terylene is a:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Polyester fibre" },
              { id: "b", text: "Addition polymer" },
              { id: "c", text: "Polyamide" },
              { id: "d", text: "Monomer" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Terylene", statement: "Polyester." },
            ],
            steps: [
              { reasoning: "Terylene = polyester.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Polyester fibre.",
          },
        },
        {
          id: "cipuc-u3-pol-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between addition and condensation polymerisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Polymer types",
                statement: "No byproduct vs byproduct.",
              },
            ],
            steps: [
              {
                reasoning: "Addition: C=C monomers, no byproduct.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Condensation: monomers + small molecule loss.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Addition = no byproduct; condensation = byproduct.",
          },
        },
        {
          id: "cipuc-u3-pol-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two environmental problems with synthetic polymers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Polymer problems",
                statement: "Non-biodegradable, pollution.",
              },
            ],
            steps: [
              {
                reasoning: "Non-biodegradable — persist in environment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cause pollution — landfill, oceans.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Non-biodegradable + pollution.",
          },
        },
        {
          id: "cipuc-u3-pol-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why thermoplastics can be recycled but thermosets cannot.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Recycling",
                statement: "Thermoplastic vs thermoset.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Thermoplastics soften when heated — can be reshaped.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Thermosets harden permanently — can't be reshaped.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Thermoplastics recyclable; thermosets not.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Thermoplastic = recyclable; thermoset = not.",
          },
        },
        {
          id: "cipuc-u3-pol-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between natural and synthetic polymers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Polymer types",
                statement: "Natural vs synthetic.",
              },
            ],
            steps: [
              {
                reasoning: "Natural: cellulose, starch, proteins, DNA.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Synthetic: PE, PVC, nylon, polyester.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Natural often biodegradable; synthetic not.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Synthetic designed for specific properties.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Natural = biological; synthetic = man-made.",
          },
        },
        {
          id: "cipuc-u3-pol-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "Bakelite is a:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Thermoset polymer" },
              { id: "b", text: "Monomer" },
              { id: "c", text: "No polymer" },
              { id: "d", text: "Thermoplastic" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bakelite", statement: "Thermoset." },
            ],
            steps: [
              { reasoning: "Bakelite = thermoset.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Thermoset polymer.",
          },
        },
        {
          id: "cipuc-u3-pol-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a monomer? Give example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Monomer",
                statement: "Polymer building block.",
              },
            ],
            steps: [
              {
                reasoning: "Small molecule joining to form polymer.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "E.g., ethene for PE, vinyl chloride for PVC.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Building block — ethene.",
          },
        },
        {
          id: "cipuc-u3-pol-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why PVC is used for pipes and cables.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "PVC properties",
                statement: "Durable, flexible, resistant.",
              },
            ],
            steps: [
              {
                reasoning: "PVC is durable and strong.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Resistant to chemicals and water.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Flexible enough for cables, rigid for pipes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Durable + resistant + versatile.",
          },
        },
        {
          id: "cipuc-u3-pol-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A transition metal is in groups:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3-12" },
              { id: "b", text: "13-18" },
              { id: "c", text: "1-2" },
              { id: "d", text: "All groups" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Transition metals",
                statement: "Groups 3-12.",
              },
            ],
            steps: [
              { reasoning: "Transition = 3-12.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Groups 3-12.",
          },
        },
        {
          id: "cipuc-u3-pol-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a complex ion? Give example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Complex ion",
                statement: "Metal + ligands.",
              },
            ],
            steps: [
              {
                reasoning: "Metal ion bonded to ligands.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "E.g., [Cu(NH₃)₄]²⁺, [Fe(CN)₆]⁴⁻.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Metal + ligands — [Cu(NH₃)₄]²⁺.",
          },
        },
        {
          id: "cipuc-u3-pol-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why transition metals have variable oxidation states.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Variable oxidation",
                statement: "d-electrons participate.",
              },
            ],
            steps: [
              {
                reasoning: "Transition metals have d-electrons.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "d-electrons can be lost at different levels.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiple oxidation states possible.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "E.g., Fe²⁺ and Fe³⁺, Mn²⁺ to Mn⁷⁺.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "d-electrons → variable oxidation states.",
          },
        },
        {
          id: "cipuc-u3-pol-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a greenhouse gas? Give examples.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Greenhouse gas",
                statement: "Traps heat.",
              },
            ],
            steps: [
              {
                reasoning: "Gas that traps infrared radiation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "E.g., CO₂, CH₄, N₂O, water vapour.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Traps heat — CO₂, CH₄.",
          },
        },
      ],
    },
    {
      id: "cipuc-u3-transition",
      title: "Transition metals and catalysis",
      skill:
        "Explain transition metal properties, complexes, and catalytic applications.",
      lesson: {
        sections: [
          {
            heading: "Transition metal properties",
            body: "**Variable oxidation states**: d-electrons participate — e.g., Fe²⁺/Fe³⁺. **Coloured compounds**: d-d transitions absorb visible light — e.g., CuSO₄ blue. **Catalytic activity**: provide alternative pathways — e.g., Fe in Haber, Ni in hydrogenation. **Complex formation**: ligands bond to metal — coordination compounds.",
          },
          {
            heading: "Complex ions and ligands",
            body: "**Complex ion**: metal + ligands — e.g., [Cu(NH₃)₄]²⁺. **Ligand**: electron donor — H₂O, NH₃, CN⁻, Cl⁻. **Coordination number**: number of ligand bonds — typically 4 or 6. **Shapes**: tetrahedral (4), octahedral (6). **Colour**: depends on ligand and oxidation state.",
          },
          {
            heading: "Industrial catalysts",
            body: "**Haber process**: Fe catalyst — N₂ + 3H₂ → 2NH₃. **Contact process**: V₂O₅ catalyst — 2SO₂ + O₂ → 2SO₃. **Hydrogenation**: Ni catalyst — C=C + H₂ → C-C. **Catalytic converter**: Pt/Pd/Rh — reduces CO, NOₓ emissions.",
          },
        ],
        keyFormulas: [
          {
            name: "Variable oxidation",
            statement: "d-electrons participate",
          },
          {
            name: "Complex ion",
            statement: "Metal + ligands",
          },
          {
            name: "Coordination number",
            statement: "Number of ligand bonds",
          },
          {
            name: "Industrial catalysts",
            statement: "Fe, V₂O₅, Ni, Pt",
          },
        ],
        workedExample: {
          problem: "Why is [Cu(NH₃)₄]²⁺ blue?",
          solution: "d-d transitions absorb red light — transmits blue.",
        },
      },
      questions: [
        {
          id: "cipuc-u3-tr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Transition metals are in groups:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3-12" },
              { id: "b", text: "All groups" },
              { id: "c", text: "1-2" },
              { id: "d", text: "13-18" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Transition metals",
                statement: "Groups 3-12.",
              },
            ],
            steps: [
              { reasoning: "Transition = 3-12.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Groups 3-12.",
          },
        },
        {
          id: "cipuc-u3-tr-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Transition metals have variable oxidation states because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "d-electrons participate in bonding" },
              { id: "b", text: "No electrons" },
              { id: "c", text: "s-electrons only" },
              { id: "d", text: "Fixed oxidation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Variable oxidation",
                statement: "d-electrons participate.",
              },
            ],
            steps: [
              { reasoning: "d-electrons → variable.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) d-electrons participate.",
          },
        },
        {
          id: "cipuc-u3-tr-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Transition metal compounds are often coloured because of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "d-d transitions" },
              { id: "b", text: "No transitions" },
              { id: "c", text: "s-s transitions" },
              { id: "d", text: "p-p transitions" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Transition colour",
                statement: "d-d transitions.",
              },
            ],
            steps: [{ reasoning: "d-d = colour.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) d-d transitions.",
          },
        },
        {
          id: "cipuc-u3-tr-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A ligand is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Any atom" },
              { id: "b", text: "No bond" },
              { id: "c", text: "Molecule/ion bonded to metal in complex" },
              { id: "d", text: "Metal ion" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ligand",
                statement: "Bonds to metal.",
              },
            ],
            steps: [
              {
                reasoning: "Ligand = bonds to metal.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Bonds to metal.",
          },
        },
        {
          id: "cipuc-u3-tr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A complex ion contains:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No metal" },
              { id: "b", text: "Only ligands" },
              { id: "c", text: "Metal ion + ligands" },
              { id: "d", text: "Only metal" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Complex ion",
                statement: "Metal + ligands.",
              },
            ],
            steps: [
              {
                reasoning: "Complex = metal + ligands.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Metal + ligands.",
          },
        },
        {
          id: "cipuc-u3-tr-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Coordination number is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Number of ligand bonds" },
              { id: "b", text: "No number" },
              { id: "c", text: "Number of metals" },
              { id: "d", text: "Number of electrons" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Coordination number",
                statement: "Ligand bonds.",
              },
            ],
            steps: [
              {
                reasoning: "Coordination = ligand bonds.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Ligand bonds.",
          },
        },
        {
          id: "cipuc-u3-tr-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Haber process uses catalyst:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Platinum" },
              { id: "b", text: "Iron (Fe)" },
              { id: "c", text: "No catalyst" },
              { id: "d", text: "Nickel" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Haber catalyst", statement: "Fe." },
            ],
            steps: [{ reasoning: "Haber = Fe.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Iron.",
          },
        },
        {
          id: "cipuc-u3-tr-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Contact process uses catalyst:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "V₂O₅ (vanadium pentoxide)" },
              { id: "b", text: "No catalyst" },
              { id: "c", text: "Fe" },
              { id: "d", text: "Ni" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Contact catalyst",
                statement: "V₂O₅.",
              },
            ],
            steps: [{ reasoning: "Contact = V₂O₅.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) V₂O₅.",
          },
        },
        {
          id: "cipuc-u3-tr-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Hydrogenation uses catalyst:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No catalyst" },
              { id: "b", text: "Nickel (Ni)" },
              { id: "c", text: "Fe" },
              { id: "d", text: "Pt" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hydrogenation catalyst",
                statement: "Ni.",
              },
            ],
            steps: [
              { reasoning: "Hydrogenation = Ni.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Nickel.",
          },
        },
        {
          id: "cipuc-u3-tr-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Catalytic converters contain:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pt, Pd, Rh" },
              { id: "b", text: "Fe only" },
              { id: "c", text: "No metals" },
              { id: "d", text: "Ni only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Catalytic converter",
                statement: "Pt, Pd, Rh.",
              },
            ],
            steps: [
              { reasoning: "Converter = Pt/Pd/Rh.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Pt, Pd, Rh.",
          },
        },
        {
          id: "cipuc-u3-tr-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Fe²⁺ and Fe³⁺ show:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No oxidation" },
              { id: "b", text: "Variable oxidation states" },
              { id: "c", text: "Same oxidation" },
              { id: "d", text: "Fixed oxidation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fe oxidation",
                statement: "Variable.",
              },
            ],
            steps: [
              { reasoning: "Fe²⁺/Fe³⁺ = variable.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Variable oxidation.",
          },
        },
        {
          id: "cipuc-u3-tr-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "CuSO₄ solution is blue because of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ionic bonds" },
              { id: "b", text: "d-d transitions" },
              { id: "c", text: "s-s transitions" },
              { id: "d", text: "No transitions" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CuSO₄ colour",
                statement: "d-d transitions.",
              },
            ],
            steps: [{ reasoning: "CuSO₄ = d-d.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) d-d transitions.",
          },
        },
        {
          id: "cipuc-u3-tr-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A ligand donates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No electrons" },
              { id: "b", text: "Proton" },
              { id: "c", text: "Electron pair to metal" },
              { id: "d", text: "Neutron" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ligand",
                statement: "Donates electron pair.",
              },
            ],
            steps: [
              {
                reasoning: "Ligand = electron donor.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Electron pair.",
          },
        },
        {
          id: "cipuc-u3-tr-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Common ligands include:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only NH₃" },
              { id: "b", text: "No ligands" },
              { id: "c", text: "Only H₂O" },
              { id: "d", text: "H₂O, NH₃, CN⁻, Cl⁻" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Common ligands",
                statement: "H₂O, NH₃, CN⁻, Cl⁻.",
              },
            ],
            steps: [
              {
                reasoning: "Ligands = H₂O, NH₃, CN⁻, Cl⁻.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) H₂O, NH₃, CN⁻, Cl⁻.",
          },
        },
        {
          id: "cipuc-u3-tr-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "An octahedral complex has coordination number:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "6" },
              { id: "b", text: "2" },
              { id: "c", text: "8" },
              { id: "d", text: "4" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Octahedral",
                statement: "Coordination 6.",
              },
            ],
            steps: [{ reasoning: "Octahedral = 6.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 6.",
          },
        },
        {
          id: "cipuc-u3-tr-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "A tetrahedral complex has coordination number:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4" },
              { id: "b", text: "2" },
              { id: "c", text: "6" },
              { id: "d", text: "8" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tetrahedral",
                statement: "Coordination 4.",
              },
            ],
            steps: [{ reasoning: "Tetrahedral = 4.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 4.",
          },
        },
        {
          id: "cipuc-u3-tr-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "Transition metals are good catalysts because they:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Are consumed" },
              { id: "b", text: "Provide alternative reaction pathways" },
              { id: "c", text: "No mechanism" },
              { id: "d", text: "Increase temperature" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Transition catalysis",
                statement: "Alternative pathways.",
              },
            ],
            steps: [
              { reasoning: "Transition = catalyst.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Alternative pathways.",
          },
        },
        {
          id: "cipuc-u3-tr-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "The colour of [Cu(NH₃)₄]²⁺ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Colourless" },
              { id: "b", text: "Red" },
              { id: "c", text: "Green" },
              { id: "d", text: "Deep blue" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cu(NH₃)₄ colour",
                statement: "Deep blue.",
              },
            ],
            steps: [
              { reasoning: "[Cu(NH₃)₄]²⁺ = blue.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Deep blue.",
          },
        },
        {
          id: "cipuc-u3-tr-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "Mn can have oxidation states from:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only +4" },
              { id: "b", text: "+2 to +7" },
              { id: "c", text: "Only +2" },
              { id: "d", text: "+1 to +2" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mn oxidation",
                statement: "+2 to +7.",
              },
            ],
            steps: [{ reasoning: "Mn = +2 to +7.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) +2 to +7.",
          },
        },
        {
          id: "cipuc-u3-tr-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between oxidation state and coordination number.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Oxidation vs coordination",
                statement: "Charge vs ligand count.",
              },
            ],
            steps: [
              {
                reasoning: "Oxidation state: charge on metal.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Coordination number: number of ligand bonds.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Oxidation = charge; coordination = ligand count.",
          },
        },
        {
          id: "cipuc-u3-tr-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two properties of transition metals.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Transition properties",
                statement: "Variable oxidation, coloured.",
              },
            ],
            steps: [
              {
                reasoning: "Variable oxidation states.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Coloured compounds.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Variable oxidation + coloured.",
          },
        },
        {
          id: "cipuc-u3-tr-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why transition metals form coloured compounds.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Transition colour",
                statement: "d-d transitions.",
              },
            ],
            steps: [
              {
                reasoning: "d-electrons can be promoted between d-orbitals.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Absorbs visible light — colour observed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Colour depends on ligand and oxidation state.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "d-d transitions absorb visible light.",
          },
        },
        {
          id: "cipuc-u3-tr-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a catalyst works in industrial processes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Industrial catalysis",
                statement: "Lower Ea pathway.",
              },
            ],
            steps: [
              {
                reasoning: "Provides alternative reaction pathway.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Lowers activation energy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Faster reaction at lower temperature.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Saves energy — economical.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Lower Ea → faster → saves energy.",
          },
        },
        {
          id: "cipuc-u3-tr-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "A dative bond is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ionic" },
              { id: "b", text: "No bond" },
              { id: "c", text: "Shared equally" },
              { id: "d", text: "Both electrons from one atom" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dative bond",
                statement: "Both electrons from one.",
              },
            ],
            steps: [
              {
                reasoning: "Dative = both electrons one atom.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Both electrons from one.",
          },
        },
        {
          id: "cipuc-u3-tr-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a chelate? Give example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Chelate",
                statement: "Ring-forming ligand.",
              },
            ],
            steps: [
              {
                reasoning: "Ligand forming ring with metal.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "E.g., EDTA complexes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Ring-forming ligand — EDTA.",
          },
        },
        {
          id: "cipuc-u3-tr-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why [Cu(NH₃)₄]²⁺ is more stable than [Cu(H₂O)₄]²⁺.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Complex stability",
                statement: "Ligand strength.",
              },
            ],
            steps: [
              {
                reasoning: "NH₃ is stronger ligand than H₂O.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Stronger ligand = more stable complex.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Colour change indicates complex formation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "NH₃ stronger ligand → more stable.",
          },
        },
        {
          id: "cipuc-u3-tr-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Transition metals conduct electricity because of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Delocalised electrons" },
              { id: "b", text: "No electrons" },
              { id: "c", text: "Ions" },
              { id: "d", text: "Shared electrons" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Metal conduction",
                statement: "Delocalised electrons.",
              },
            ],
            steps: [
              { reasoning: "Metals = delocalised.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Delocalised electrons.",
          },
        },
        {
          id: "cipuc-u3-tr-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the role of catalysts in industry?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Industrial catalysts",
                statement: "Faster, cheaper.",
              },
            ],
            steps: [
              {
                reasoning: "Speed up reactions — less time needed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Allow lower temperatures — save energy.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Faster + cheaper.",
          },
        },
        {
          id: "cipuc-u3-tr-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why transition metals are used as catalysts rather than alkali metals.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Catalyst selection",
                statement: "Transition metals ideal.",
              },
            ],
            steps: [
              {
                reasoning: "Transition metals have variable oxidation states.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Can form complexes — provide active sites.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Alkali metals too reactive — can't be catalysts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Transition metals stable enough to be reused.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Variable oxidation + complexes + stability.",
          },
        },
        {
          id: "cipuc-u3-tr-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is an oxidation state?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Oxidation state",
                statement: "Apparent charge.",
              },
            ],
            steps: [
              {
                reasoning: "Apparent charge on atom in compound.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Positive = lost electrons; negative = gained.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Apparent charge on atom.",
          },
        },
      ],
    },
    {
      id: "cipuc-u3-environment",
      title: "Environmental chemistry",
      skill:
        "Explain atmospheric chemistry, pollution, and environmental issues.",
      lesson: {
        sections: [
          {
            heading: "Atmospheric composition and pollution",
            body: "**Air**: 78% N₂, 21% O₂, 0.04% CO₂, argon, water vapour. **Pollutants**: CO (incomplete combustion), NOₓ (high temp combustion), SO₂ (sulfur fuels), particulates. **Effects**: smog, acid rain, greenhouse effect, ozone depletion.",
          },
          {
            heading: "Greenhouse effect and climate change",
            body: "**Greenhouse effect**: natural — traps heat, keeps Earth warm. **Enhanced**: more CO₂ → more warming. **Sources**: fossil fuels, deforestation, agriculture. **Effects**: rising temperatures, sea level rise, extreme weather. **Solutions**: renewable energy, carbon capture, reduced emissions.",
          },
          {
            heading: "Acid rain and ozone depletion",
            body: "**Acid rain**: SO₂ + NOₓ → H₂SO₄/HNO₃ → pH < 5.6. Effects: lake acidification, building corrosion, forest damage. **Ozone depletion**: CFCs release Cl → destroy O₃. Effects: UV radiation increase — skin cancer, crop damage. **Solutions**: catalytic converters, scrubbers, CFC bans.",
          },
        ],
        keyFormulas: [
          {
            name: "Air composition",
            statement: "78% N₂, 21% O₂, 0.04% CO₂",
          },
          {
            name: "Greenhouse gases",
            statement: "CO₂, CH₄, N₂O, water vapour",
          },
          {
            name: "Acid rain",
            statement: "pH < 5.6 from SO₂/NOₓ",
          },
          {
            name: "Ozone depletion",
            statement: "CFCs destroy O₃",
          },
        ],
        workedExample: {
          problem: "What causes acid rain?",
          solution:
            "SO₂ and NOₓ from combustion react with water → acids → rain pH < 5.6.",
        },
      },
      questions: [
        {
          id: "cipuc-u3-env-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Air is approximately:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "78% N₂, 21% O₂" },
              { id: "b", text: "50% N₂, 50% O₂" },
              { id: "c", text: "21% N₂, 78% O₂" },
              { id: "d", text: "90% N₂, 10% O₂" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Air composition",
                statement: "78% N₂, 21% O₂.",
              },
            ],
            steps: [
              { reasoning: "Air = 78% N₂, 21% O₂.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) 78% N₂, 21% O₂.",
          },
        },
        {
          id: "cipuc-u3-env-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "CO is produced by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Complete combustion" },
              { id: "b", text: "Respiration" },
              { id: "c", text: "Incomplete combustion" },
              { id: "d", text: "Photosynthesis" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "CO source",
                statement: "Incomplete combustion.",
              },
            ],
            steps: [
              {
                reasoning: "CO = incomplete combustion.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Incomplete combustion.",
          },
        },
        {
          id: "cipuc-u3-env-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "NOₓ is produced by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "High temperature combustion" },
              { id: "b", text: "Low temperature" },
              { id: "c", text: "Respiration" },
              { id: "d", text: "Photosynthesis" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "NOₓ source",
                statement: "High temp combustion.",
              },
            ],
            steps: [{ reasoning: "NOₓ = high temp.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) High temp combustion.",
          },
        },
        {
          id: "cipuc-u3-env-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "SO₂ is produced by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Photosynthesis" },
              { id: "b", text: "Burning sulfur-containing fuels" },
              { id: "c", text: "Respiration" },
              { id: "d", text: "Complete combustion" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "SO₂ source",
                statement: "Sulfur fuels.",
              },
            ],
            steps: [
              { reasoning: "SO₂ = sulfur fuels.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Sulfur fuels.",
          },
        },
        {
          id: "cipuc-u3-env-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A greenhouse gas:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "CO₂" },
              { id: "b", text: "O₂" },
              { id: "c", text: "Ar" },
              { id: "d", text: "N₂" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Greenhouse gas", statement: "CO₂." },
            ],
            steps: [
              { reasoning: "CO₂ = greenhouse.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) CO₂.",
          },
        },
        {
          id: "cipuc-u3-env-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Acid rain has pH:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "> 7" },
              { id: "b", text: "= 7" },
              { id: "c", text: "< 5.6" },
              { id: "d", text: "Any pH" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Acid rain", statement: "pH < 5.6." },
            ],
            steps: [
              { reasoning: "Acid rain = pH < 5.6.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) < 5.6.",
          },
        },
        {
          id: "cipuc-u3-env-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Ozone depletion is caused by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "CFCs" },
              { id: "b", text: "N₂" },
              { id: "c", text: "CO₂" },
              { id: "d", text: "O₂" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ozone depletion",
                statement: "CFCs.",
              },
            ],
            steps: [
              { reasoning: "CFCs = ozone depletion.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) CFCs.",
          },
        },
        {
          id: "cipuc-u3-env-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The greenhouse effect is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Global warming only" },
              { id: "b", text: "Natural warming of Earth by atmosphere" },
              { id: "c", text: "Cooling" },
              { id: "d", text: "No effect" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Greenhouse effect",
                statement: "Natural warming.",
              },
            ],
            steps: [
              {
                reasoning: "Greenhouse = natural warming.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Natural warming.",
          },
        },
        {
          id: "cipuc-u3-env-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Particulates are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gases only" },
              { id: "b", text: "Tiny solid/liquid particles in air" },
              { id: "c", text: "No particles" },
              { id: "d", text: "Large objects" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Particulates",
                statement: "Tiny particles.",
              },
            ],
            steps: [
              {
                reasoning: "Particulates = tiny particles.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Tiny particles.",
          },
        },
        {
          id: "cipuc-u3-env-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Smog is caused by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water only" },
              { id: "b", text: "No pollutants" },
              { id: "c", text: "Clean air" },
              { id: "d", text: "Pollutants + sunlight" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Smog",
                statement: "Pollutants + sunlight.",
              },
            ],
            steps: [
              {
                reasoning: "Smog = pollutants + sunlight.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Pollutants + sunlight.",
          },
        },
        {
          id: "cipuc-u3-env-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "CO₂ concentration in air is approximately:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4%" },
              { id: "b", text: "40%" },
              { id: "c", text: "0.4%" },
              { id: "d", text: "0.04%" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "CO₂ concentration",
                statement: "0.04%.",
              },
            ],
            steps: [{ reasoning: "CO₂ = 0.04%.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 0.04%.",
          },
        },
        {
          id: "cipuc-u3-env-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Catalytic converters reduce:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "CO and NOₓ emissions" },
              { id: "b", text: "O₂" },
              { id: "c", text: "CO₂" },
              { id: "d", text: "N₂" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Catalytic converter",
                statement: "Reduces CO, NOₓ.",
              },
            ],
            steps: [
              { reasoning: "Converter = CO, NOₓ.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) CO and NOₓ.",
          },
        },
        {
          id: "cipuc-u3-env-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Flue gas desulfurisation removes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "SO₂" },
              { id: "b", text: "NOₓ" },
              { id: "c", text: "CO₂" },
              { id: "d", text: "CO" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "FGD", statement: "Removes SO₂." },
            ],
            steps: [{ reasoning: "FGD = SO₂.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) SO₂.",
          },
        },
        {
          id: "cipuc-u3-env-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A biofuel is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nuclear fuel" },
              { id: "b", text: "No fuel" },
              { id: "c", text: "Fossil fuel" },
              { id: "d", text: "Fuel from biological sources" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Biofuel",
                statement: "Biological source.",
              },
            ],
            steps: [
              { reasoning: "Biofuel = biological.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Biological source.",
          },
        },
        {
          id: "cipuc-u3-env-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Ethanol is produced by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No process" },
              { id: "b", text: "Photosynthesis" },
              { id: "c", text: "Combustion" },
              { id: "d", text: "Fermentation of sugars" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ethanol production",
                statement: "Fermentation.",
              },
            ],
            steps: [
              { reasoning: "Ethanol = fermentation.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Fermentation.",
          },
        },
        {
          id: "cipuc-u3-env-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Carbon capture and storage:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Adds CO₂" },
              { id: "b", text: "Removes CO₂ from atmosphere" },
              { id: "c", text: "No effect" },
              { id: "d", text: "Produces CO₂" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "CCS", statement: "Removes CO₂." },
            ],
            steps: [
              { reasoning: "CCS = removes CO₂.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Removes CO₂.",
          },
        },
        {
          id: "cipuc-u3-env-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "Acid rain forms when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "CO₂ dissolves" },
              { id: "b", text: "SO₂/NOₓ react with water" },
              { id: "c", text: "O₂ dissolves" },
              { id: "d", text: "No reaction" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Acid rain formation",
                statement: "SO₂/NOₓ + water.",
              },
            ],
            steps: [
              {
                reasoning: "Acid rain = SO₂/NOₓ + water.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) SO₂/NOₓ + water.",
          },
        },
        {
          id: "cipuc-u3-env-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "Ozone layer protects Earth from:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "UV radiation" },
              { id: "b", text: "All radiation" },
              { id: "c", text: "Infrared" },
              { id: "d", text: "Visible light" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ozone layer",
                statement: "Blocks UV.",
              },
            ],
            steps: [
              { reasoning: "Ozone = blocks UV.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) UV radiation.",
          },
        },
        {
          id: "cipuc-u3-env-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "CFCs release:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No radicals" },
              { id: "b", text: "Oxygen" },
              { id: "c", text: "Nitrogen" },
              { id: "d", text: "Chlorine radicals" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CFC mechanism",
                statement: "Release Cl radicals.",
              },
            ],
            steps: [
              { reasoning: "CFCs = Cl radicals.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Chlorine radicals.",
          },
        },
        {
          id: "cipuc-u3-env-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between greenhouse effect and global warming.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Greenhouse vs warming",
                statement: "Natural vs enhanced.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Greenhouse effect: natural warming — essential for life.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Global warming: enhanced effect from extra CO₂ — harmful.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Greenhouse = natural; warming = enhanced.",
          },
        },
        {
          id: "cipuc-u3-env-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two effects of acid rain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Acid rain effects",
                statement: "Lake acidification, corrosion.",
              },
            ],
            steps: [
              {
                reasoning: "Lake acidification — kills fish.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Building corrosion, forest damage.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Lake acidification + corrosion.",
          },
        },
        {
          id: "cipuc-u3-env-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how CFCs deplete the ozone layer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CFC mechanism",
                statement: "Cl radical chain reaction.",
              },
            ],
            steps: [
              {
                reasoning: "UV breaks CFC → releases Cl radical.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cl radical reacts with O₃ → ClO + O₂.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "ClO + O → Cl + O₂ — Cl regenerated — chain continues.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Cl radical chain destroys O₃.",
          },
        },
        {
          id: "cipuc-u3-env-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how increasing CO₂ causes global warming.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Greenhouse mechanism",
                statement: "IR trapping.",
              },
            ],
            steps: [
              {
                reasoning: "CO₂ absorbs infrared radiation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "More CO₂ = more IR trapped.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Earth temperature increases.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Enhanced greenhouse effect → climate change.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "CO₂ traps IR → warming.",
          },
        },
        {
          id: "cipuc-u3-env-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "Renewable energy sources include:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Solar, wind, hydro" },
              { id: "b", text: "No sources" },
              { id: "c", text: "Coal, oil, gas" },
              { id: "d", text: "Nuclear only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Renewable energy",
                statement: "Solar, wind, hydro.",
              },
            ],
            steps: [
              {
                reasoning: "Renewable = solar/wind/hydro.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Solar, wind, hydro.",
          },
        },
        {
          id: "cipuc-u3-env-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is smog? What causes it?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Smog",
                statement: "Pollutant + sunlight mixture.",
              },
            ],
            steps: [
              {
                reasoning: "Air pollution + sunlight → photochemical smog.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Caused by NOₓ + VOCs + sunlight.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Pollutants + sunlight → photochemical smog.",
          },
        },
        {
          id: "cipuc-u3-env-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how catalytic converters reduce pollution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Catalytic converter",
                statement: "Converts harmful gases.",
              },
            ],
            steps: [
              {
                reasoning: "CO + NOₓ → CO₂ + N₂ + H₂O.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Pt/Pd/Rh catalyst speeds reaction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reduces harmful emissions from vehicles.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Converts CO, NOₓ → CO₂, N₂.",
          },
        },
        {
          id: "cipuc-u3-env-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The ozone layer is in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mesosphere" },
              { id: "b", text: "Stratosphere" },
              { id: "c", text: "Troposphere" },
              { id: "d", text: "Surface" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ozone layer",
                statement: "Stratosphere.",
              },
            ],
            steps: [
              { reasoning: "Ozone = stratosphere.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Stratosphere.",
          },
        },
        {
          id: "cipuc-u3-env-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the difference between air pollution and water pollution?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pollution types",
                statement: "Air vs water.",
              },
            ],
            steps: [
              {
                reasoning: "Air pollution: gases, particulates in atmosphere.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Water pollution: chemicals, waste in water bodies.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Air = atmosphere; water = water bodies.",
          },
        },
        {
          id: "cipuc-u3-env-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how deforestation contributes to climate change.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Deforestation",
                statement: "CO₂ increase + less absorption.",
              },
            ],
            steps: [
              {
                reasoning: "Trees absorb CO₂ — less trees = less absorption.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Burning trees releases stored CO₂.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "CO₂ concentration increases.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Enhanced greenhouse effect → warming.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Less absorption + more CO₂ → warming.",
          },
        },
        {
          id: "cipuc-u3-env-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is eutrophication?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Eutrophication",
                statement: "Nutrient enrichment.",
              },
            ],
            steps: [
              {
                reasoning: "Excess nutrients (N, P) in water.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Algal bloom → oxygen depletion → fish death.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Nutrient enrichment → algal bloom.",
          },
        },
      ],
    },
  ],
};
