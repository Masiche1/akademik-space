import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "chemsl-u3-lesson-3-2",
  code: "3-2",
  title: "Metallic Bonding, Giant Covalent Structures and Intermolecular Forces",
  goal: "I CAN describe metallic and giant covalent bonding, compare their properties, and explain how intermolecular forces determine the physical properties of molecular substances.",
  standards: ["Topic 4.3", "Topic 4.4", "Paper 1", "Paper 2"],
  vocabulary: [
    { term: "Metallic bond", definition: "The attraction between positive metal ions and a sea of delocalised electrons in a metal lattice." },
    { term: "Delocalised electron", definition: "An electron not attached to any one atom, free to move throughout a metal structure or conjugated system." },
    { term: "Giant covalent structure", definition: "A vast network of atoms joined by covalent bonds, e.g. diamond, graphite and silicon dioxide." },
    { term: "Allotrope", definition: "Different structural forms of the same element in the same physical state, e.g. diamond and graphite are allotropes of carbon." },
    { term: "Intermolecular force", definition: "An attractive force between molecules, much weaker than a covalent bond; types include London dispersion, dipole-dipole and hydrogen bonding." },
    { term: "Hydrogen bond", definition: "A strong dipole-dipole attraction between a hydrogen atom bonded to N, O or F and a lone pair on another N, O or F atom." },
  ],
  concepts: [
    {
      id: "chemsl-u3-metallic-giant-covalent",
      title: "Metallic bonding and giant covalent structures",
      skill: "Explain the properties of metals and giant covalent substances from their bonding and structure.",
      lesson: {
        sections: [
          {
            heading: "Metallic bonding",
            body: "In a metal, positive ions sit in a regular lattice surrounded by a 'sea' of delocalised electrons that are free to move throughout the structure. This model explains the characteristic properties: electrical and thermal conductivity (moving electrons carry charge and energy), malleability and ductility (layers of ions can slide without breaking the bonding because the electron sea adjusts), and high melting points (strong attractions between ions and electrons).",
          },
          {
            heading: "Giant covalent structures",
            body: "Some non-metals form vast networks in which every atom is covalently bonded to its neighbours. In diamond each carbon is bonded to four others in a tetrahedral array — extremely hard with a very high melting point. In graphite each carbon is bonded to three others in hexagonal sheets; the spare electron in each atom is delocalised within the sheets, so graphite conducts electricity along the layers and is soft because the sheets slide. Silicon dioxide ($\\mathrm{SiO_2}$) has a similar giant structure and is very hard and high-melting.",
          },
          {
            heading: "Comparing structures",
            body: "The same element can form different allotropes with very different properties because the bonding arrangement differs. Diamond and graphite are both pure carbon, yet diamond is transparent, extremely hard and an electrical insulator, while graphite is dark, soft, slippery and conducts along its layers. Structure determines property — a key idea across the whole bonding topic.",
          },
        ],
        keyFormulas: [
          { name: "Metallic model", statement: "$\\text{metal ions} + \\text{delocalised electrons}$" },
          { name: "Diamond", statement: "$\\text{each C bonded to 4 others, tetrahedral}$" },
          { name: "Graphite", statement: "$\\text{each C bonded to 3 others in sheets; 1 delocalised }e^-$" },
        ],
        workedExample: {
          problem: "Explain why graphite conducts electricity but diamond does not, although both are forms of carbon.",
          solution: "In graphite each carbon is bonded to only three neighbours, leaving one electron per atom delocalised and free to carry charge within the layers. In diamond every electron is localised in a strong covalent bond, so there are no charge carriers.",
        },
      },
      questions: [
        {
          id: "chemsl-u3-metallic-giant-covalent-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Why do metals conduct electricity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are made of molecules" },
              { id: "b", text: "They contain delocalised electrons that can move and carry charge" },
              { id: "c", text: "They have covalent bonds that break easily" },
              { id: "d", text: "They contain free ions that move through the solid" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Metallic bonding", statement: "Delocalised electrons are mobile charge carriers throughout the metal." },
            ],
            steps: [
              { reasoning: "Identify the mobile charge carriers in a metal.", working: "\\text{delocalised electrons}", marks: 1, markCode: "M" },
              { reasoning: "These electrons move under a potential difference and carry current.", working: "\\text{carry charge}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Delocalised electrons move freely and carry charge",
            commonErrors: ["Choosing (b): free ions exist only in molten/aqueous ionic compounds, not solid metals."],
          },
        },
        {
          id: "chemsl-u3-metallic-giant-covalent-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Which substance has a giant covalent structure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\mathrm{CO_2}$" },
              { id: "b", text: "$\\mathrm{NaCl}$" },
              { id: "c", text: "$\\mathrm{H_2O}$" },
              { id: "d", text: "Diamond" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Giant covalent structure", statement: "A continuous network of atoms joined by covalent bonds in all directions." },
            ],
            steps: [
              { reasoning: "Diamond is a network of carbon atoms each covalently bonded to four neighbours.", working: "\\text{diamond network}", marks: 1, markCode: "M" },
              { reasoning: "The others are molecular ($\\mathrm{CO_2}$, $\\mathrm{H_2O}$) or ionic ($\\mathrm{NaCl}$).", working: "\\text{not giant covalent}", marks: 1, markCode: "R" },
              { reasoning: "Select diamond.", working: "\\text{diamond}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Diamond",
            commonErrors: ["Choosing $\\mathrm{NaCl}$ by confusing 'giant' with 'ionic lattice'."],
          },
        },
        {
          id: "chemsl-u3-metallic-giant-covalent-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Diamond and graphite are allotropes of carbon. Explain, in terms of structure and bonding, why graphite is soft and conducts electricity while diamond is hard and does not conduct.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Structure determines property", statement: "Different bonding arrangements of the same atoms give different properties." },
            ],
            steps: [
              { reasoning: "In diamond each carbon is bonded to four others in a rigid 3D tetrahedral network; strong covalent bonds in all directions make it hard.", working: "\\text{4 bonds, 3D network}", marks: 1, markCode: "M" },
              { reasoning: "Every electron is localised in a covalent bond, so there are no charge carriers — diamond does not conduct.", working: "\\text{no free electrons}", marks: 1, markCode: "A" },
              { reasoning: "In graphite each carbon is bonded to three others in flat hexagonal sheets; the layers are held by weak forces and slide, making graphite soft.", working: "\\text{sheets slide}", marks: 1, markCode: "R" },
              { reasoning: "Each carbon has one spare electron delocalised within the sheets, which can carry charge — graphite conducts along the layers.", working: "\\text{delocalised }e^-\\text{ in sheets}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Diamond: rigid 3D covalent network, all electrons localised → hard, non-conducting. Graphite: layered sheets with weak interlayer forces → soft; delocalised electrons in sheets → conducts.",
            commonErrors: ["Saying graphite's layers are held by covalent bonds (they are held by weak intermolecular/dispersion forces).", "Claiming diamond has free electrons."],
          },
        },
        {
          id: "chemsl-u3-metallic-giant-covalent-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Two substances are compared: sodium chloride, $\\mathrm{NaCl}$, and silicon dioxide, $\\mathrm{SiO_2}$.",
          parts: [
            { label: "a", prompt: "Describe the structure and bonding of each substance.", marks: 2 },
            { label: "b", prompt: "Predict and justify the relative melting points of the two substances.", marks: 2 },
            { label: "c", prompt: "State whether each conducts electricity as a solid and justify your answer.", marks: 2 },
            { label: "d", prompt: "Evaluate the statement 'giant structures always have high melting points'.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ionic lattice", statement: "$\\mathrm{NaCl}$ is a giant ionic lattice of $\\mathrm{Na^+}$ and $\\mathrm{Cl^-}$ ions." },
              { kind: "definition", name: "Giant covalent", statement: "$\\mathrm{SiO_2}$ is a giant covalent network of Si and O atoms." },
            ],
            steps: [
              { part: "a", reasoning: "NaCl: ions in a 3D lattice held by electrostatic attraction. SiO2: continuous covalent network like diamond.", working: "\\mathrm{NaCl}=\\text{ionic lattice};\\ \\mathrm{SiO_2}=\\text{covalent network}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both descriptions correct.", working: "\\text{ionic vs covalent}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Both have very high melting points because strong attractions (ionic or covalent) must be overcome throughout the whole structure, not just between molecules.", working: "\\text{both high mp}", marks: 1, markCode: "R" },
              { part: "b", reasoning: "SiO2's covalent network is exceptionally strong so its mp (~1700 °C) is higher than NaCl's (~800 °C).", working: "\\mathrm{SiO_2}>\\mathrm{NaCl}\\ \\text{mp}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Neither conducts as a solid: NaCl ions are fixed in the lattice; SiO2 has no free electrons or ions.", working: "\\text{both non-conducting solids}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "NaCl conducts when molten/dissolved (mobile ions) but SiO2 never conducts.", working: "\\text{NaCl molten conducts}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The statement is essentially correct for the substances compared: both are giant structures with strong bonding in all directions, so melting requires breaking the whole network.", working: "\\text{giant}\\Rightarrow\\text{high mp}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "However 'always' is too strong — giant structures of weakly bonded layers (e.g. graphite along planes) can have lower melting points than some molecular substances in principle; the key factor is the strength of bonding throughout.", working: "\\text{depends on bond strength}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) NaCl ionic lattice; SiO2 covalent network (b) both high mp, SiO2 higher (c) neither conducts as solid; NaCl conducts molten, SiO2 never (d) broadly true — melting a giant structure requires breaking strong bonding throughout",
            commonErrors: ["Saying SiO2 conducts when molten (it does not — no ions)."],
            examinerNote: "Accept either judgement in (d) if justified; the mark is for reasoning about bond strength.",
          },
        },
        {
          id: "chemsl-u3-metallic-giant-covalent-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "What does the 'sea of delocalised electrons' in a metal consist of?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Electrons free to move throughout the metal lattice" },
              { id: "b", text: "Ions that have gained extra electrons" },
              { id: "c", text: "Protons moving between the ions" },
              { id: "d", text: "Electrons shared in fixed pairs between specific atoms" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Delocalised electron", statement: "An electron not attached to any one atom, free to move throughout the metal structure." },
            ],
            steps: [
              { reasoning: "In metallic bonding the valence electrons are released from individual atoms and move freely through the lattice.", working: "\\text{mobile }e^-", marks: 1, markCode: "M" },
              { reasoning: "This mobile 'sea' is what conducts charge and binds the positive ions together.", working: "\\text{electron sea}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Electrons free to move throughout the metal lattice",
            commonErrors: ["Choosing (a): that describes localised covalent bonding, not metallic bonding."],
          },
        },
        {
          id: "chemsl-u3-metallic-giant-covalent-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Why does graphite conduct electricity along its layers?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It contains atoms of a metal" },
              { id: "b", text: "Each carbon atom has a delocalised electron within the layers" },
              { id: "c", text: "It contains free ions between the layers" },
              { id: "d", text: "The layers are joined by ionic bonds" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Graphite structure", statement: "Each carbon is bonded to three neighbours in sheets; the fourth electron is delocalised within the sheet." },
            ],
            steps: [
              { reasoning: "Each carbon forms only three covalent bonds, leaving one electron per atom delocalised over the layer.", working: "1\\ \\text{delocalised }e^-\\ \\text{per C}", marks: 1, markCode: "M" },
              { reasoning: "These mobile electrons can carry charge along the layers, but not between them.", working: "\\text{conducts along layers}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Each carbon has a delocalised electron within the layers",
            commonErrors: ["Saying graphite conducts in all directions — conduction is only along the layers."],
          },
        },
        {
          id: "chemsl-u3-metallic-giant-covalent-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Diamond and graphite are described as ___ of carbon.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "isomers" },
              { id: "b", text: "isotopes" },
              { id: "c", text: "ions" },
              { id: "d", text: "allotropes" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Allotrope", statement: "Different structural forms of the same element in the same physical state." },
            ],
            steps: [
              { reasoning: "Both are pure carbon but with different bonding arrangements: tetrahedral network vs layered sheets.", working: "\\text{same element, different structure}", marks: 1, markCode: "M" },
              { reasoning: "Such forms are called allotropes.", working: "\\text{allotropes}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** allotropes",
            commonErrors: ["Choosing (a) isotopes: isotopes differ in nucleon number, not structure."],
          },
        },
        {
          id: "chemsl-u3-metallic-giant-covalent-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which substance is NOT a giant covalent structure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\mathrm{CO_2}$" },
              { id: "b", text: "Diamond" },
              { id: "c", text: "Graphite" },
              { id: "d", text: "$\\mathrm{SiO_2}$" },
            ],
            correctChoiceIa: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Giant covalent structure", statement: "A continuous network of atoms joined by covalent bonds; $\\mathrm{CO_2}$ consists of discrete molecules." },
            ],
            steps: [
              { reasoning: "Diamond, graphite and $\\mathrm{SiO_2}$ are all extended covalent networks.", working: "\\text{network solids}", marks: 1, markCode: "M" },
              { reasoning: "$\\mathrm{CO_2}$ exists as separate $\\mathrm{O=C=O}$ molecules, so it is molecular, not giant covalent.", working: "\\mathrm{CO_2}\\ \\text{molecular}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $\\mathrm{CO_2}$",
            commonErrors: ["Choosing $\\mathrm{SiO_2}$ because it 'looks ionic' — it is a covalent network like diamond."],
          },
        },
        {
          id: "chemsl-u3-metallic-giant-covalent-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Why do metals conduct heat well?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Delocalised electrons transfer energy rapidly through the lattice" },
              { id: "b", text: "The covalent bonds between atoms break easily" },
              { id: "c", text: "The positive ions move freely through the solid" },
              { id: "d", text: "Metals contain discrete molecules that vibrate" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Metallic bonding", statement: "Delocalised electrons carry both charge and thermal energy through the metal." },
            ],
            steps: [
              { reasoning: "Heat transfer in metals occurs mainly by the mobile delocalised electrons gaining and passing on kinetic energy.", working: "\\text{mobile }e^-\\ \\text{carry energy}", marks: 1, markCode: "M" },
              { reasoning: "The ions themselves stay fixed in the lattice; it is the electrons that move.", working: "\\text{ions fixed}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Delocalised electrons transfer energy through the lattice",
            commonErrors: ["Claiming the ions themselves move — only the electrons are delocalised."],
          },
        },
        {
          id: "chemsl-u3-metallic-giant-covalent-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "In diamond each carbon atom forms four covalent bonds to neighbouring carbons. For $1.00\\ \\mathrm{mol}$ of carbon atoms in diamond, find (a) the number of nearest neighbours of each carbon atom and (b) the amount, in moles, of $\\mathrm{C-C}$ bonds.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) nearest neighbours per C atom", answer: 4 },
              { label: "(b) moles of $\\mathrm{C-C}$ bonds", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Diamond structure", statement: "Each C is tetrahedrally bonded to 4 others; each bond is shared between 2 atoms." },
            ],
            steps: [
              { part: "a", reasoning: "Diamond is a tetrahedral network: each carbon has 4 nearest neighbours.", working: "4", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the coordination number.", working: "4", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Each atom makes 4 bonds but each bond is counted twice, so $1.00\\times4/2=2.00\\ \\mathrm{mol}$ of bonds.", working: "4/2=2.00", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the amount of bonds.", working: "2.00\\ \\mathrm{mol}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $4$ neighbours (b) $2.00\\ \\mathrm{mol}$ of $\\mathrm{C-C}$ bonds",
            commonErrors: ["Answering 4.00 for (b) by not dividing by 2 for shared bonds."],
          },
        },
        {
          id: "chemsl-u3-metallic-giant-covalent-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "In graphite each carbon atom is bonded to three neighbouring carbons in a sheet. Find (a) the number of $\\mathrm{C-C}$ bonds per carbon atom and (b) the number of delocalised electrons per carbon atom.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $\\mathrm{C-C}$ bonds per C atom", answer: 3 },
              { label: "(b) delocalised electrons per C atom", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Graphite structure", statement: "Each C forms 3 sigma bonds in a hexagonal sheet; the remaining electron is delocalised." },
            ],
            steps: [
              { part: "a", reasoning: "Graphite sheets are hexagonal networks in which each carbon is bonded to three others.", working: "3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the number of bonds.", working: "3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Carbon has 4 valence electrons; 3 are used in the three bonds, leaving 1 electron delocalised per atom.", working: "4-3=1", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the number of delocalised electrons.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $3$ bonds (b) $1$ delocalised electron per carbon",
            commonErrors: ["Answering 4 for (b) by forgetting three electrons are used in bonding."],
          },
        },
        {
          id: "chemsl-u3-metallic-giant-covalent-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Each atom of a metal such as copper contributes one delocalised electron to the 'electron sea'. For $0.25\\ \\mathrm{mol}$ of copper atoms, find (a) the amount, in moles, of delocalised electrons and (b) the total number of delocalised electrons.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) moles of delocalised electrons", answer: 0.25 },
              { label: "(b) total number of delocalised electrons", answer: 1.51e23 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Amount to number", statement: "$N=nN_A$ with $N_A=6.02\\times10^{23}\\ \\mathrm{mol^{-1}}$." },
            ],
            steps: [
              { part: "a", reasoning: "One delocalised electron per Cu atom means the amount of electrons equals the amount of atoms.", working: "0.25\\ \\mathrm{mol}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the amount.", working: "0.25\\ \\mathrm{mol}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$N=0.25\\times6.02\\times10^{23}=1.51\\times10^{23}$ electrons.", working: "0.25\\times6.02\\times10^{23}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the number of electrons.", working: "1.51\\times10^{23}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $0.25\\ \\mathrm{mol}$ (b) $1.51\\times10^{23}$ electrons",
            commonErrors: ["Multiplying by Avogadro's number for part (a) — that part asks for moles."],
          },
        },
        {
          id: "chemsl-u3-metallic-giant-covalent-q13",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Diamond has a melting point of approximately $3550\\ \\mathrm{^\\circ C}$. Express this temperature in kelvin.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) melting point in $\\mathrm{K}$", answer: 3823 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Temperature conversion", statement: "$T(\\mathrm{K})=t(\\mathrm{^\\circ C})+273$" },
            ],
            steps: [
              { reasoning: "Add 273 to the Celsius temperature: $3550+273=3823\\ \\mathrm{K}$.", working: "3550+273=3823", marks: 1, markCode: "M" },
              { reasoning: "State the temperature in kelvin.", working: "3823\\ \\mathrm{K}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $3823\\ \\mathrm{K}$",
            commonErrors: ["Adding 273 twice or subtracting 273 instead of adding."],
          },
        },
        {
          id: "chemsl-u3-metallic-giant-covalent-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Silicon dioxide, $\\mathrm{SiO_2}$, has a giant covalent structure in which each Si atom is bonded to four O atoms and each O atom is bonded to two Si atoms. For $1.00\\ \\mathrm{mol}$ of $\\mathrm{SiO_2}$ units, find (a) the amount, in moles, of Si–O bonds and (b) the total amount, in moles, of atoms.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) moles of Si–O bonds", answer: 4 },
              { label: "(b) total moles of atoms", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Bond counting", statement: "Each $\\mathrm{SiO_2}$ unit contains 4 Si–O bonds; each bond is shared between one Si and one O." },
            ],
            steps: [
              { part: "a", reasoning: "Each Si forms 4 bonds to O, giving 4 Si–O bonds per $\\mathrm{SiO_2}$ unit.", working: "4\\ \\mathrm{mol}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the amount of bonds.", working: "4.00\\ \\mathrm{mol}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Each $\\mathrm{SiO_2}$ unit contains 1 Si + 2 O = 3 atoms, so $1.00\\times3=3.00\\ \\mathrm{mol}$ of atoms.", working: "1+2=3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the total amount of atoms.", working: "3.00\\ \\mathrm{mol}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $4.00\\ \\mathrm{mol}$ of Si–O bonds (b) $3.00\\ \\mathrm{mol}$ of atoms",
            commonErrors: ["Counting 6 bonds per unit by adding Si and O valences without sharing."],
          },
        },
        {
          id: "chemsl-u3-metallic-giant-covalent-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Three substances are compared: diamond, graphite and silicon dioxide, $\\mathrm{SiO_2}$.",
          parts: [
            { label: "a", prompt: "Describe the bonding and structure of each substance.", marks: 2 },
            { label: "b", prompt: "Explain why diamond is extremely hard while graphite is soft and slippery.", marks: 2 },
            { label: "c", prompt: "Explain why graphite conducts electricity but diamond and $\\mathrm{SiO_2}$ do not.", marks: 2 },
            { label: "d", prompt: "Evaluate the claim: 'All giant covalent structures are electrical insulators.'", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Giant covalent structures", statement: "Diamond: 3D tetrahedral C network; graphite: layered C sheets; $\\mathrm{SiO_2}$: Si–O network like diamond." },
              { kind: "principle", name: "Structure determines property", statement: "Bonding arrangement controls hardness and conductivity." },
            ],
            steps: [
              { part: "a", reasoning: "Diamond: each C bonded to 4 others in a 3D tetrahedral network. Graphite: each C bonded to 3 others in hexagonal sheets. $\\mathrm{SiO_2}$: Si–O covalent network.", working: "\\text{3D / sheets / Si-O network}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All three descriptions correct.", working: "\\text{all correct}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Diamond's strong covalent bonds act in all directions throughout the rigid 3D network, making it extremely hard.", working: "\\text{3D network hard}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Graphite's layers are held by weak forces and slide over each other, so it is soft and slippery.", working: "\\text{sheets slide}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "In graphite each C has one delocalised electron per atom within the sheets, which can carry charge.", working: "\\text{delocalised }e^-\\text{ in sheets}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "In diamond and $\\mathrm{SiO_2}$ all electrons are localised in covalent bonds, so there are no charge carriers.", working: "\\text{no free }e^-", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The claim is false: graphite is a giant covalent structure that conducts electricity along its layers.", working: "\\text{graphite conducts}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Whether a giant covalent structure conducts depends on whether it has delocalised electrons, not on being giant covalent.", working: "\\text{depends on }e^-\\text{ delocalisation}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) diamond 3D C network, graphite C sheets, SiO2 Si–O network (b) diamond rigid 3D bonds → hard; graphite weak interlayer forces → soft (c) graphite has delocalised e− in sheets; diamond/SiO2 have all electrons localised (d) false — graphite conducts",
            commonErrors: ["Claiming all giant covalent structures are insulators — graphite is the exception."],
          },
        },
        {
          id: "chemsl-u3-metallic-giant-covalent-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Explain, in terms of metallic bonding, the following properties of metals: (a) electrical conductivity, (b) malleability, (c) high melting points.",
          parts: [
            { label: "a", prompt: "Electrical conductivity", marks: 2 },
            { label: "b", prompt: "Malleability", marks: 2 },
            { label: "c", prompt: "High melting points", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Metallic bonding model", statement: "Positive metal ions in a lattice held by attraction to a sea of delocalised electrons." },
            ],
            steps: [
              { part: "a", reasoning: "Delocalised electrons are free to move through the lattice and carry electric charge when a potential difference is applied.", working: "\\text{mobile }e^-\\text{ carry charge}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "This is why metals conduct electricity in the solid state.", working: "\\text{solid conductor}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Layers of positive ions can slide over each other under stress without the structure breaking apart.", working: "\\text{layers slide}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The delocalised electron sea adjusts and maintains attraction to the ions, so the metal deforms rather than fractures.", working: "\\text{electron sea adjusts}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Each positive ion is attracted to the electron sea in all directions, giving strong metallic bonding throughout the lattice.", working: "\\text{strong attractions}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Overcoming these attractions on melting requires a large amount of energy, so metals have high melting points.", working: "\\text{high mp}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) delocalised electrons carry charge (b) ion layers slide while electron sea maintains bonding (c) strong ion–electron attractions throughout lattice require much energy to overcome",
            commonErrors: ["Attributing malleability to 'weak bonds' — the bonding is maintained, not broken."],
          },
        },
      ],
    },
    {
      id: "chemsl-u3-intermolecular-forces",
      title: "Intermolecular forces",
      skill: "Identify and rank London dispersion, dipole-dipole and hydrogen bonding, and use them to explain differences in boiling and melting points.",
      lesson: {
        sections: [
          {
            heading: "Types of intermolecular force",
            body: "Three types act between molecules, all much weaker than covalent bonds. London dispersion forces act between all molecules and arise from temporary fluctuations in electron density; they strengthen with molecular size. Dipole-dipole forces act between polar molecules that have permanent charge separation. Hydrogen bonding is the strongest type, acting only when hydrogen is bonded to nitrogen, oxygen or fluorine and attracted to a lone pair on another such atom — it explains water's unusually high boiling point and the density anomaly of ice.",
          },
          {
            heading: "Effect on physical properties",
            body: "Boiling and melting points depend on the strength of the intermolecular forces: stronger IMFs require more energy to separate molecules. Water ($\\mathrm{H_2O}$, hydrogen bonding, bp $100\\ \\mathrm{^\\circ C}$) boils far higher than hydrogen sulfide ($\\mathrm{H_2S}$, dipole-dipole only, bp $\\approx-60\\ \\mathrm{^\\circ C}$) despite being a smaller molecule, and methane ($\\mathrm{CH_4}$, London forces only, bp $-161\\ \\mathrm{^\\circ C}$) boils lowest of the three. The covalent bonds within each molecule are unaffected by boiling.",
          },
          {
            heading: "Water and ice",
            body: "In liquid water each molecule forms hydrogen bonds to neighbouring molecules in a disordered arrangement. In ice the hydrogen bonds lock into an open hexagonal lattice with molecules further apart than in the liquid, so ice is less dense and floats. This anomaly is why aquatic life survives winter and why ice melts under pressure.",
          },
        ],
        keyFormulas: [
          { name: "IMF strength order", statement: "$\\text{hydrogen bond} > \\text{dipole-dipole} > \\text{London dispersion}$" },
          { name: "Hydrogen bonding condition", statement: "$\\mathrm{H}$ bonded to $\\mathrm{N}$, $\\mathrm{O}$ or $\\mathrm{F}$" },
          { name: "Boiling point", statement: "$\\text{stronger IMF} \\Rightarrow \\text{higher bp}$" },
        ],
        workedExample: {
          problem: "Rank the boiling points of $\\mathrm{CH_4}$, $\\mathrm{H_2O}$ and $\\mathrm{H_2S}$ and explain.",
          solution: "$\\mathrm{CH_4}<\\mathrm{H_2S}<\\mathrm{H_2O}$. Methane has only London forces; $\\mathrm{H_2S}$ has dipole-dipole forces; water has hydrogen bonding, the strongest, so it boils highest.",
        },
      },
      questions: [
        {
          id: "chemsl-u3-intermolecular-forces-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which type of intermolecular force is present between water molecules but absent between methane molecules?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hydrogen bonding" },
              { id: "b", text: "Ionic bonding" },
              { id: "c", text: "Dipole-dipole forces" },
              { id: "d", text: "London dispersion forces" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hydrogen bonding", statement: "Requires H bonded to N, O or F attracted to a lone pair on N, O or F." },
            ],
            steps: [
              { reasoning: "Water has O–H bonds, satisfying the hydrogen-bonding condition; methane has only C–H bonds.", working: "\\mathrm{O-H}\\ \\text{vs}\\ \\mathrm{C-H}", marks: 1, markCode: "M" },
              { reasoning: "Hydrogen bonding is therefore present in water only.", working: "\\text{H-bonding}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Hydrogen bonding",
            commonErrors: ["Choosing (a): London forces are present in both."],
          },
        },
        {
          id: "chemsl-u3-intermolecular-forces-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Why does water have a much higher boiling point ($100\\ \\mathrm{^\\circ C}$) than hydrogen sulfide ($\\approx-60\\ \\mathrm{^\\circ C}$)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water is ionic" },
              { id: "b", text: "Water molecules are larger" },
              { id: "c", text: "The O–H covalent bond is stronger than the S–H bond" },
              { id: "d", text: "Water forms hydrogen bonds, a stronger intermolecular force than the dipole-dipole forces in $\\mathrm{H_2S}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "IMF and boiling point", statement: "Boiling requires overcoming intermolecular forces; stronger IMFs give higher boiling points." },
            ],
            steps: [
              { reasoning: "Identify the IMF in each substance: water hydrogen-bonds; $\\mathrm{H_2S}$ has dipole-dipole (and London) forces only.", working: "\\text{H-bond} > \\text{dipole-dipole}", marks: 1, markCode: "M" },
              { reasoning: "Hydrogen bonding is significantly stronger, so more energy is needed to separate water molecules.", working: "\\text{more energy needed}", marks: 1, markCode: "R" },
              { reasoning: "Select the correct explanation.", working: "\\text{hydrogen bonding}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Hydrogen bonding in water is stronger than the dipole-dipole forces in $\\mathrm{H_2S}$",
            commonErrors: ["Choosing (c): boiling does not break covalent bonds."],
          },
        },
        {
          id: "chemsl-u3-intermolecular-forces-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Rank the following substances in order of increasing boiling point and justify your ranking: $\\mathrm{CH_4}$ (methane), $\\mathrm{HCl}$ (hydrogen chloride), $\\mathrm{H_2O}$ (water).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "IMF strength order", statement: "$\\text{hydrogen bond} > \\text{dipole-dipole} > \\text{London dispersion}$" },
            ],
            steps: [
              { reasoning: "Identify the dominant IMF in each: $\\mathrm{CH_4}$ non-polar → London only; $\\mathrm{HCl}$ polar → dipole-dipole + London; $\\mathrm{H_2O}$ → hydrogen bonding.", working: "\\mathrm{CH_4}<\\mathrm{HCl}<\\mathrm{H_2O}\\ \\text{in IMF strength}", marks: 1, markCode: "M" },
              { reasoning: "State the boiling-point order consistent with IMF strength.", working: "\\mathrm{CH_4}<\\mathrm{HCl}<\\mathrm{H_2O}", marks: 1, markCode: "A" },
              { reasoning: "Justify: methane's only London forces are weakest; HCl's dipole-dipole forces are stronger; water's hydrogen bonds are strongest.", working: "\\text{IMF strength explains bp}", marks: 1, markCode: "R" },
              { reasoning: "Note all three boil well below ionic compounds because only IMFs (not bonds/lattices) are overcome.", working: "\\text{IMFs only}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\mathrm{CH_4} < \\mathrm{HCl} < \\mathrm{H_2O}$ — increasing strength of intermolecular forces (London < dipole-dipole < hydrogen bonding)",
            commonErrors: ["Ranking by molecular mass alone ($\\mathrm{H_2O}$ is lightest but boils highest)."],
          },
        },
        {
          id: "chemsl-u3-intermolecular-forces-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Ice floats on water, and liquid water has an unusually high boiling point compared with similar-sized molecules.",
          parts: [
            { label: "a", prompt: "Explain the origin of the high boiling point of water in terms of intermolecular forces.", marks: 2 },
            { label: "b", prompt: "Describe the arrangement of hydrogen bonds in ice and explain why ice is less dense than liquid water.", marks: 2 },
            { label: "c", prompt: "Predict how the density of ice would change if hydrogen bonding did not exist, and justify your prediction.", marks: 2 },
            { label: "d", prompt: "Evaluate the importance of this density anomaly for life in lakes and oceans.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hydrogen bonding", statement: "Strong IMF between H bonded to N/O/F and a lone pair on N/O/F." },
              { kind: "principle", name: "Ice structure", statement: "Hydrogen bonds lock water molecules into an open hexagonal lattice." },
            ],
            steps: [
              { part: "a", reasoning: "Each water molecule forms up to four hydrogen bonds to neighbours; these strong IMFs require much energy to break on boiling.", working: "\\text{H-bonds need energy}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Hence water's bp ($100\\ \\mathrm{^\\circ C}$) is far higher than comparable hydrides.", working: "\\text{high bp}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "In ice the hydrogen bonds form a rigid open lattice; molecules are held further apart than in the disordered liquid.", working: "\\text{open lattice}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Greater separation per unit mass means lower density, so ice floats.", working: "\\text{ice less dense}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Without hydrogen bonding, water would behave like a normal molecular liquid/solid and contract on freezing like most substances.", working: "\\text{normal contraction}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Ice would be denser than liquid water and sink.", working: "\\text{ice sinks}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Floating ice insulates the water below, so lakes and oceans do not freeze solid from the bottom up, allowing aquatic ecosystems to survive winter.", working: "\\text{insulating ice layer}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "This is a significant ecological consequence of hydrogen bonding.", working: "\\text{ecological importance}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) hydrogen bonds are strong IMFs needing much energy to break (b) open hexagonal lattice → ice less dense → floats (c) without H-bonding ice would be denser and sink (d) floating ice insulates water below, protecting aquatic life",
            commonErrors: ["In (b) claiming hydrogen bonds break in ice (they persist as the lattice)."],
            examinerNote: "Accept any clear ecological justification in (d): insulation, oxygen supply, temperature regulation.",
          },
        },
        {
          id: "chemsl-u3-intermolecular-forces-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which is the strongest type of intermolecular force?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ionic bonding" },
              { id: "b", text: "Dipole-dipole forces" },
              { id: "c", text: "London dispersion forces" },
              { id: "d", text: "Hydrogen bonding" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "IMF strength order", statement: "$\\text{hydrogen bond} > \\text{dipole-dipole} > \\text{London dispersion}$" },
            ],
            steps: [
              { reasoning: "Hydrogen bonding requires H bonded to N, O or F attracted to a lone pair on N, O or F, making it the strongest IMF.", working: "\\text{H-bond strongest}", marks: 1, markCode: "M" },
              { reasoning: "Ionic bonding is not an intermolecular force — it is bonding within a lattice.", working: "\\text{ionic} \\ne \\text{IMF}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Hydrogen bonding",
            commonErrors: ["Choosing (d): ionic bonding is not an intermolecular force."],
          },
        },
        {
          id: "chemsl-u3-intermolecular-forces-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which substance forms hydrogen bonds between its molecules?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\mathrm{CH_4}$" },
              { id: "b", text: "$\\mathrm{CO_2}$" },
              { id: "c", text: "$\\mathrm{NH_3}$" },
              { id: "d", text: "$\\mathrm{H_2}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hydrogen bonding condition", statement: "H must be bonded to N, O or F, and attracted to a lone pair on N, O or F." },
            ],
            steps: [
              { reasoning: "$\\mathrm{NH_3}$ has N–H bonds and a lone pair on nitrogen, satisfying the hydrogen-bonding condition.", working: "\\mathrm{N-H}\\ \\text{and lone pair on N}", marks: 1, markCode: "M" },
              { reasoning: "The others lack either the N/O/F–H bond or the acceptor lone pair ($\\mathrm{CH_4}$, $\\mathrm{CO_2}$, $\\mathrm{H_2}$).", working: "\\text{condition not met}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $\\mathrm{NH_3}$",
            commonErrors: ["Choosing $\\mathrm{CH_4}$ because it contains hydrogen — the H must be bonded to N, O or F."],
          },
        },
        {
          id: "chemsl-u3-intermolecular-forces-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Why does ice float on liquid water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water molecules repel each other strongly in the liquid" },
              { id: "b", text: "Hydrogen bonds hold water molecules in an open lattice, making ice less dense" },
              { id: "c", text: "Ice is warmer than liquid water" },
              { id: "d", text: "Ice contains ionic bonds" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ice structure", statement: "Hydrogen bonds lock molecules into an open hexagonal lattice with molecules further apart than in liquid water." },
            ],
            steps: [
              { reasoning: "In ice each water molecule is hydrogen-bonded to four neighbours in an open lattice.", working: "\\text{open lattice}", marks: 1, markCode: "M" },
              { reasoning: "The greater separation means ice is less dense than liquid water, so it floats.", working: "\\rho_{\\text{ice}}<\\rho_{\\text{water}}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Open hydrogen-bonded lattice makes ice less dense",
            commonErrors: ["Saying solids are always denser than liquids — water is the anomaly."],
          },
        },
        {
          id: "chemsl-u3-intermolecular-forces-q8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "London dispersion forces between molecules generally become stronger when the molecules have...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "smaller size and mass" },
              { id: "b", text: "fewer atoms" },
              { id: "c", text: "no electrons at all" },
              { id: "d", text: "larger size and more electrons" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "London dispersion forces", statement: "Temporary dipoles in larger electron clouds give stronger dispersion forces." },
            ],
            steps: [
              { reasoning: "Larger molecules have bigger electron clouds that are more easily distorted into temporary dipoles.", working: "\\text{bigger cloud} \\Rightarrow \\text{stronger London}", marks: 1, markCode: "M" },
              { reasoning: "Stronger IMFs mean higher boiling points.", working: "\\text{higher bp}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Larger size and more electrons",
            commonErrors: ["Thinking London forces require permanent dipoles — they arise from temporary fluctuations."],
          },
        },
        {
          id: "chemsl-u3-intermolecular-forces-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Which substance has dipole-dipole forces but does NOT form hydrogen bonds?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\mathrm{HCl}$" },
              { id: "b", text: "$\\mathrm{HF}$" },
              { id: "c", text: "$\\mathrm{H_2O}$" },
              { id: "d", text: "$\\mathrm{NH_3}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hydrogen bonding condition", statement: "Requires H bonded to N, O or F; $\\mathrm{HCl}$ has H bonded to Cl, which does not qualify." },
            ],
            steps: [
              { reasoning: "$\\mathrm{HCl}$ is polar, so it has permanent dipole-dipole forces plus London forces.", working: "\\mathrm{HCl}: \\text{dipole-dipole}", marks: 1, markCode: "M" },
              { reasoning: "Hydrogen is bonded to chlorine, not N/O/F, so hydrogen bonding is absent. The other options all hydrogen-bond.", working: "\\mathrm{H-Cl} \\not\\Rightarrow \\text{H-bond}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $\\mathrm{HCl}$",
            commonErrors: ["Choosing $\\mathrm{HF}$: HF does hydrogen-bond despite Cl not qualifying for HCl — F is in the N/O/F list."],
          },
        },
        {
          id: "chemsl-u3-intermolecular-forces-q10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The boiling point of water is $100\\ \\mathrm{^\\circ C}$. Express this temperature in kelvin.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) boiling point in $\\mathrm{K}$", answer: 373 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Temperature conversion", statement: "$T(\\mathrm{K})=t(\\mathrm{^\\circ C})+273$" },
            ],
            steps: [
              { reasoning: "Add 273: $100+273=373\\ \\mathrm{K}$.", working: "100+273=373", marks: 1, markCode: "M" },
              { reasoning: "State the temperature in kelvin.", working: "373\\ \\mathrm{K}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $373\\ \\mathrm{K}$",
            commonErrors: ["Subtracting 273 instead of adding."],
          },
        },
        {
          id: "chemsl-u3-intermolecular-forces-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Each water molecule can form hydrogen bonds with neighbouring molecules. What is the maximum number of hydrogen bonds a single water molecule can form?",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) maximum hydrogen bonds per $\\mathrm{H_2O}$", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hydrogen bonding in water", statement: "Each $\\mathrm{H_2O}$ has 2 O–H groups that can donate and 2 lone pairs on O that can accept." },
            ],
            steps: [
              { reasoning: "A water molecule has two O–H bonds (can donate 2 H-bonds) and two lone pairs on oxygen (can accept 2), giving a maximum of 4.", working: "2+2=4", marks: 1, markCode: "M" },
              { reasoning: "State the maximum number.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $4$ hydrogen bonds",
            commonErrors: ["Answering 2 by counting only the donated bonds."],
          },
        },
        {
          id: "chemsl-u3-intermolecular-forces-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "The boiling points of three hydrides are: $\\mathrm{CH_4}=-161\\ \\mathrm{^\\circ C}$, $\\mathrm{HCl}=-85\\ \\mathrm{^\\circ C}$ and $\\mathrm{H_2O}=100\\ \\mathrm{^\\circ C}$. Find (a) the difference between the boiling points of $\\mathrm{H_2O}$ and $\\mathrm{CH_4}$ and (b) the difference between the boiling points of $\\mathrm{HCl}$ and $\\mathrm{CH_4}$.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $\\mathrm{H_2O}-\\mathrm{CH_4}$ difference", answer: 261 },
              { label: "(b) $\\mathrm{HCl}-\\mathrm{CH_4}$ difference", answer: 76 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "IMF and boiling point", statement: "Stronger intermolecular forces require more energy, giving higher boiling points." },
            ],
            steps: [
              { part: "a", reasoning: "Subtract: $100-(-161)=261\\ \\mathrm{^\\circ C}$.", working: "100+161=261", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the difference.", working: "261\\ \\mathrm{^\\circ C}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Subtract: $-85-(-161)=76\\ \\mathrm{^\\circ C}$.", working: "-85+161=76", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the difference.", working: "76\\ \\mathrm{^\\circ C}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $261\\ \\mathrm{^\\circ C}$ (b) $76\\ \\mathrm{^\\circ C}$",
            commonErrors: ["Subtracting in the wrong order or dropping the negative sign on $-161$."],
          },
        },
        {
          id: "chemsl-u3-intermolecular-forces-q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "The density of ice is $0.92\\ \\mathrm{g\\,cm^{-3}}$ and the density of liquid water is $1.00\\ \\mathrm{g\\,cm^{-3}}$. Find (a) the difference in density between water and ice and (b) the percentage by which ice is less dense than water.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) density difference", answer: 0.08, unit: "g cm$^{-3}$" },
              { label: "(b) percentage less dense", answer: 8 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage difference", statement: "$\\%=(\\text{difference}/\\text{original})\\times100$" },
            ],
            steps: [
              { part: "a", reasoning: "Subtract the densities: $1.00-0.92=0.08\\ \\mathrm{g\\,cm^{-3}}$.", working: "1.00-0.92=0.08", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the difference.", working: "0.08\\ \\mathrm{g\\,cm^{-3}}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Percentage less dense $=(0.08/1.00)\\times100=8\\%$.", working: "0.08/1.00\\times100=8", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the percentage.", working: "8\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $0.08\\ \\mathrm{g\\,cm^{-3}}$ (b) $8\\%$",
            commonErrors: ["Using 0.92 as the denominator — percentages are relative to liquid water, the original."],
          },
        },
        {
          id: "chemsl-u3-intermolecular-forces-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A sample contains exactly $1.00\\ \\mathrm{mol}$ of water molecules, $\\mathrm{H_2O}$. Find (a) the number of water molecules present and (b) the mass of the sample in grams.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) number of $\\mathrm{H_2O}$ molecules", answer: 6.02e23 },
              { label: "(b) mass in $\\mathrm{g}$", answer: 18 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mole relationships", statement: "$N=nN_A$ and $m=nM$ with $M(\\mathrm{H_2O})=18\\ \\mathrm{g\\,mol^{-1}}$." },
            ],
            steps: [
              { part: "a", reasoning: "$N=1.00\\times6.02\\times10^{23}=6.02\\times10^{23}$ molecules.", working: "1.00\\times6.02\\times10^{23}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the number of molecules.", working: "6.02\\times10^{23}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Molar mass of water $=2(1)+16=18\\ \\mathrm{g\\,mol^{-1}}$, so $m=1.00\\times18=18\\ \\mathrm{g}$.", working: "1.00\\times18=18", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the mass.", working: "18\\ \\mathrm{g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $6.02\\times10^{23}$ molecules (b) $18\\ \\mathrm{g}$",
            commonErrors: ["Using molar mass 16 (oxygen only) for part (b)."],
          },
        },
        {
          id: "chemsl-u3-intermolecular-forces-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "The boiling points of the hydrogen halides are: $\\mathrm{HF}=19.5\\ \\mathrm{^\\circ C}$, $\\mathrm{HCl}=-85\\ \\mathrm{^\\circ C}$ and $\\mathrm{HBr}=-67\\ \\mathrm{^\\circ C}$.",
          parts: [
            { label: "a", prompt: "Identify the dominant intermolecular force present in each substance.", marks: 2 },
            { label: "b", prompt: "Explain why $\\mathrm{HF}$ has a much higher boiling point than would be expected from its small molecular mass.", marks: 2 },
            { label: "c", prompt: "Predict and justify the order of boiling points of $\\mathrm{HCl}$ and $\\mathrm{HBr}$.", marks: 2 },
            { label: "d", prompt: "Evaluate the statement 'boiling point always increases with molecular mass'.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hydrogen bonding condition", statement: "HF has H bonded to F, so it hydrogen-bonds; HCl and HBr do not." },
              { kind: "principle", name: "London dispersion", statement: "Within a group, larger molecules have stronger dispersion forces and higher boiling points." },
            ],
            steps: [
              { part: "a", reasoning: "$\\mathrm{HF}$: hydrogen bonding (plus dipole-dipole and London). $\\mathrm{HCl}$ and $\\mathrm{HBr}$: dipole-dipole plus London only.", working: "\\mathrm{HF}>\\mathrm{dipole-dipole}>\\mathrm{London}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All three correctly identified.", working: "\\text{IMFs identified}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "HF forms strong hydrogen bonds because H is bonded to fluorine and attracted to lone pairs on F.", working: "\\text{H-bonding in HF}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "This extra-strong IMF requires much more energy to overcome, raising the boiling point far above the trend.", working: "\\text{high bp anomaly}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$\\mathrm{HBr}$ is larger than $\\mathrm{HCl}$, so it has stronger London dispersion forces and a higher boiling point: $\\mathrm{HCl}<\\mathrm{HBr}$.", working: "\\mathrm{HCl}<\\mathrm{HBr}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Justification via molecular size and dispersion-force strength.", working: "\\text{size} \\Rightarrow \\text{stronger London}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The statement is false in general: $\\mathrm{HF}$ is the smallest molecule yet boils highest among the halides because of hydrogen bonding.", working: "\\text{HF counterexample}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Boiling point depends on the strength of all intermolecular forces, not molecular mass alone.", working: "\\text{IMF strength matters}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) HF hydrogen-bonds; HCl, HBr dipole-dipole + London (b) H–F hydrogen bonding gives anomalously high bp (c) HCl < HBr — larger molecule, stronger dispersion (d) false — IMF type matters more than mass",
            commonErrors: ["Ranking HCl above HBr by ignoring that HBr is larger.", "Claiming HCl hydrogen-bonds."],
          },
        },
        {
          id: "chemsl-u3-intermolecular-forces-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Ammonia, $\\mathrm{NH_3}$, boils at $-33\\ \\mathrm{^\\circ C}$ while phosphine, $\\mathrm{PH_3}$, boils at $-87\\ \\mathrm{^\\circ C}$, even though $\\mathrm{PH_3}$ is the larger molecule. Explain this difference.",
          parts: [
            { label: "a", prompt: "Describe the intermolecular forces present in each substance.", marks: 2 },
            { label: "b", prompt: "Explain why $\\mathrm{NH_3}$ has the higher boiling point despite $\\mathrm{PH_3}$ being larger.", marks: 2 },
            { label: "c", prompt: "Evaluate whether London dispersion forces alone can explain the boiling-point difference.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hydrogen bonding", statement: "$\\mathrm{NH_3}$ has N–H bonds and a lone pair on N, so it hydrogen-bonds; $\\mathrm{PH_3}$ cannot because P–H is not N/O/F–H." },
              { kind: "principle", name: "IMF strength order", statement: "Hydrogen bonding is much stronger than London dispersion forces." },
            ],
            steps: [
              { part: "a", reasoning: "$\\mathrm{NH_3}$ is polar with N–H bonds: hydrogen bonding plus dipole-dipole and London forces. $\\mathrm{PH_3}$ has only dipole-dipole (weak) and London forces.", working: "\\mathrm{NH_3}: \\text{H-bond};\\ \\mathrm{PH_3}: \\text{London}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both correctly described.", working: "\\text{IMFs identified}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Hydrogen bonding in $\\mathrm{NH_3}$ is far stronger than the weak dispersion forces in $\\mathrm{PH_3}$, so more energy is needed to separate $\\mathrm{NH_3}$ molecules.", working: "\\text{H-bond} > \\text{London}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "This outweighs the size advantage of $\\mathrm{PH_3}$, giving $\\mathrm{NH_3}$ the higher boiling point.", working: "\\mathrm{bp}(\\mathrm{NH_3})>-33>\\mathrm{bp}(\\mathrm{PH_3})", marks: 1, markCode: "A" },
              { part: "c", reasoning: "No — London forces alone would predict $\\mathrm{PH_3}$ (the larger molecule) to boil higher, the opposite of what is observed.", working: "\\text{London alone fails}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Hydrogen bonding must be invoked to explain the anomaly.", working: "\\text{need H-bonding}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) NH3 hydrogen-bonds; PH3 has only dipole-dipole/London (b) strong H-bonding in NH3 outweighs PH3's size (c) no — London forces alone predict the wrong order",
            commonErrors: ["Explaining purely by molecular mass, which predicts PH3 higher."],
          },
        },
      ],
    },
  ],
};
