import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "ech10-u2-lesson-2-3",
  code: "2-3",
  title: "Ionic, Covalent and Metallic Bonding",
  goal: "I CAN describe ionic, covalent and metallic bonding and explain the properties of the substances they form.",
  standards: ["4CH1 1.49", "4CH1 1.50", "4CH1 1.51", "4CH1 1.52", "4CH1 1.53", "4CH1 1.54", "4CH1 1.55"],
  vocabulary: [
    { term: "Ion", definition: "An atom or group of atoms that has gained or lost electrons and so has an electrical charge." },
    { term: "Ionic bond", definition: "The strong electrostatic attraction between oppositely charged ions in an ionic compound." },
    { term: "Giant ionic lattice", definition: "A regular three-dimensional arrangement of positive and negative ions held together by ionic bonds." },
    { term: "Covalent bond", definition: "A shared pair of electrons between two atoms, held by the attraction of both nuclei to the shared electrons." },
    { term: "Intermolecular force", definition: "A weak force of attraction between separate molecules." },
    { term: "Metallic bond", definition: "The strong electrostatic attraction between positive metal ions and the sea of delocalised electrons." },
    { term: "Delocalised electrons", definition: "Electrons that are not attached to one atom and are free to move through a structure." },
  ],
  concepts: [
    {
      id: "ech10-u2-ionic-bonding",
      title: "Ionic bonding and properties",
      skill: "Draw and describe ionic bonding, work out ionic formulae and explain the properties of ionic compounds.",
      lesson: {
        sections: [
          {
            heading: "Forming ions",
            body: "Metal atoms lose outer-shell electrons to form positive ions (**cations**). Non-metal atoms gain electrons to form negative ions (**anions**). Atoms do this to obtain a full outer shell, like a noble gas.\n\nFor example, sodium (2,8,1) loses one electron to become $\\text{Na}^+$ (2,8), and chlorine (2,8,7) gains one electron to become $\\text{Cl}^-$ (2,8,8). Magnesium forms $\\text{Mg}^{2+}$ and oxygen forms $\\text{O}^{2-}$.\n\nThe formula of an ionic compound has equal total positive and negative charge. Magnesium chloride is $\\text{MgCl}_2$ because one $\\text{Mg}^{2+}$ needs two $\\text{Cl}^-$ ions. Aluminium oxide is $\\text{Al}_2\\text{O}_3$ because 2 $\\text{Al}^{3+}$ (+6) balance 3 $\\text{O}^{2-}$ (-6).",
          },
          {
            heading: "Structure and properties",
            body: "Ionic compounds form a **giant ionic lattice**, in which each ion is surrounded by oppositely charged ions. There are strong electrostatic attractions between them in all directions.\n\n- **High melting and boiling points:** a lot of energy is needed to overcome the strong attractions between many ions.\n- **Do not conduct when solid:** the ions are fixed in position and cannot move.\n- **Conduct when molten or dissolved in water:** the ions are free to move and carry charge.\n- Many are soluble in water and are brittle, because layers shift and like charges repel.",
          },
        ],
        keyFormulas: [
          { name: "Common ions", statement: "$\\text{Na}^+$, $\\text{Mg}^{2+}$, $\\text{Al}^{3+}$, $\\text{Cl}^-$, $\\text{O}^{2-}$, $\\text{OH}^-$, $\\text{SO}_4^{2-}$" },
          { name: "Charge balance", statement: "total positive charge = total negative charge" },
          { name: "Conductivity", statement: "Conduct when molten or aqueous because ions are free to move" },
        ],
        workedExample: {
          problem: "Write the formula of calcium nitrate, which contains $\\text{Ca}^{2+}$ and $\\text{NO}_3^-$ ions.",
          solution: "One $\\text{Ca}^{2+}$ has charge +2, so two $\\text{NO}_3^-$ ions (total -2) are needed. The formula is $\\text{Ca}(\\text{NO}_3)_2$, with brackets around the nitrate group.",
        },
      },
      questions: [
        {
          id: "ech10-u2-ionic-bonding-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the formula of magnesium oxide, formed from $\\text{Mg}^{2+}$ and $\\text{O}^{2-}$ ions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\text{Mg}_2\\text{O}_2$" },
              { id: "b", text: "$\\text{MgO}_2$" },
              { id: "c", text: "$\\text{Mg}_2\\text{O}$" },
              { id: "d", text: "$\\text{MgO}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Charge balance", statement: "The total positive charge equals the total negative charge in an ionic compound." },
            ],
            steps: [
              { reasoning: "+2 and -2 cancel in a 1 : 1 ratio. The formula is the simplest ratio.", working: "\\text{MgO}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $\\text{MgO}$",
            commonErrors: ["Using the numbers of charges as subscripts crossed over incorrectly.", "Choosing $\\text{Mg}_2\\text{O}_2$, which is not the simplest ratio."],
            examinerNote: "B1 for MgO.",
          },
        },
        {
          id: "ech10-u2-ionic-bonding-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how sodium atoms and chlorine atoms form sodium chloride. Refer to electrons in your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ionic bonding", statement: "Electron transfer from a metal to a non-metal forms oppositely charged ions that attract strongly." },
            ],
            steps: [
              { reasoning: "A sodium atom loses one electron (from its outer shell) to form a $\\text{Na}^+$ ion.", marks: 1, markCode: "B" },
              { reasoning: "A chlorine atom gains that electron to form a $\\text{Cl}^-$ ion, with a full outer shell.", marks: 1, markCode: "B" },
              { reasoning: "The oppositely charged ions attract each other by strong electrostatic forces (ionic bonding).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Na loses an electron to give $\\text{Na}^+$; Cl gains it to give $\\text{Cl}^-$; electrostatic attraction between the ions.",
            commonErrors: ["Saying electrons are shared between sodium and chlorine.", "Saying the atoms 'gain' or 'lose' protons."],
            examinerNote: "Allow 'transfer of one electron from sodium to chlorine' for the first two marks together if both ions are named. Reject 'sharing'.",
          },
        },
        {
          id: "ech10-u2-ionic-bonding-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why solid sodium chloride does not conduct electricity but molten sodium chloride does.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Electrical conduction", statement: "A substance conducts if it contains charged particles that are free to move." },
            ],
            steps: [
              { reasoning: "Sodium chloride is made of ions, which are charged particles.", marks: 1, markCode: "B" },
              { reasoning: "In the solid the ions are held in fixed positions in the lattice by strong attractions.", marks: 1, markCode: "B" },
              { reasoning: "So the ions cannot move and carry charge when solid.", marks: 1, markCode: "B" },
              { reasoning: "When molten the lattice breaks down and the ions are free to move, so they carry the current.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Ions fixed in solid so cannot carry charge; in the molten state ions are free to move and conduct.",
            commonErrors: ["Saying electrons move through molten sodium chloride.", "Saying there are no ions in the solid."],
            examinerNote: "Reject 'the electrons are free to move' for the molten state. Allow 'mobile ions'.",
          },
        },
        {
          id: "ech10-u2-ionic-bonding-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Magnesium oxide, MgO, has a melting point of $2852^\\circ\\text{C}$. Sodium chloride, NaCl, has a melting point of $801^\\circ\\text{C}$. Magnesium atoms have 2 electrons in their outer shell. Oxygen atoms have 6 electrons in their outer shell.",
          parts: [
            { label: "a", prompt: "Describe what happens to the electrons when magnesium reacts with oxygen to form magnesium oxide.", marks: 2 },
            { label: "b", prompt: "Give the formulae of the two ions in magnesium oxide.", marks: 2 },
            { label: "c", prompt: "Explain why magnesium oxide has a very high melting point.", marks: 2 },
            { label: "d", prompt: "Suggest why the melting point of magnesium oxide is higher than that of sodium chloride.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ionic bonding", statement: "Electron transfer forms oppositely charged ions held by electrostatic attraction in a giant lattice." },
              { kind: "property", name: "Melting point", statement: "Melting an ionic compound requires energy to overcome the strong electrostatic attraction between ions." },
            ],
            steps: [
              { part: "a", reasoning: "Each magnesium atom loses two electrons.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Each oxygen atom gains these two electrons.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Magnesium forms a 2+ ion.", working: "\\text{Mg}^{2+}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Oxygen forms a 2- ion.", working: "\\text{O}^{2-}", marks: 1, markCode: "B" },
              { part: "c", reasoning: "It is a giant lattice of ions with many strong electrostatic attractions between oppositely charged ions.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "A lot of energy is needed to overcome these attractions.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "$\\text{Mg}^{2+}$ and $\\text{O}^{2-}$ have higher charges than $\\text{Na}^+$ and $\\text{Cl}^-$.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "So the electrostatic attractions are stronger and more energy is needed to melt it.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Mg loses 2 electrons, O gains 2 (b) $\\text{Mg}^{2+}$, $\\text{O}^{2-}$ (c) strong attractions in giant lattice need much energy (d) higher ionic charges give stronger attractions",
            commonErrors: ["Writing that covalent bonds are broken when MgO melts.", "Saying 'the ions are bigger' in (d) with no reference to charge."],
            examinerNote: "In (a) allow 'two electrons transferred from Mg to O'. In (b) reject charges written as 2+ on O. In (c) reject 'strong bonds between molecules'.",
          },
        },
      ],
    },
    {
      id: "ech10-u2-covalent-metallic-bonding",
      title: "Covalent and metallic bonding",
      skill: "Describe covalent and metallic bonding and explain the properties of simple molecules, giant covalent structures and metals.",
      lesson: {
        sections: [
          {
            heading: "Covalent bonding",
            body: "A **covalent bond** is a shared pair of electrons between two non-metal atoms. Each atom gains a full outer shell. Examples include $\\text{H}_2$, $\\text{Cl}_2$, $\\text{H}_2\\text{O}$, $\\text{NH}_3$, $\\text{CH}_4$ and $\\text{CO}_2$ (which has two double bonds).\n\n**Simple molecular substances** have strong covalent bonds within each molecule but only weak **intermolecular forces** between molecules. When they melt or boil it is the weak intermolecular forces that are overcome, not the covalent bonds. So they have low melting and boiling points, are usually gases or liquids at room temperature, and do not conduct electricity because they have no ions or free electrons.",
          },
          {
            heading: "Giant covalent structures",
            body: "In a **giant covalent structure** millions of atoms are joined by strong covalent bonds in a network. They have very high melting points and are hard.\n\n- **Diamond:** each carbon is bonded to four others, so it is very hard and does not conduct.\n- **Graphite:** each carbon is bonded to three others in layers; the layers slide over each other and each carbon has one delocalised electron, so graphite is soft and conducts electricity.\n- **Silicon dioxide:** a giant structure with high melting point, hard and non-conducting.",
          },
          {
            heading: "Metallic bonding",
            body: "A metal is a lattice of positive ions in a **sea of delocalised electrons**. The strong electrostatic attraction between the ions and electrons is the metallic bond. This explains:\n\n- high melting points (strong attraction)\n- good electrical conductivity (delocalised electrons carry charge)\n- malleability and ductility (layers of ions slide over each other while the electrons keep holding the structure together)",
          },
        ],
        keyFormulas: [
          { name: "Covalent bond", statement: "A shared pair of electrons between two non-metal atoms" },
          { name: "Simple molecules", statement: "Low melting point because weak intermolecular forces are overcome, not covalent bonds" },
          { name: "Metallic bonding", statement: "Positive ions in a sea of delocalised electrons" },
        ],
        workedExample: {
          problem: "Explain why graphite conducts electricity but diamond does not.",
          solution: "In graphite each carbon atom forms three covalent bonds, leaving one electron that is delocalised and free to move between the layers, so charge can flow. In diamond each carbon atom forms four covalent bonds, so all outer electrons are used in bonding and there are no free electrons or ions.",
        },
      },
      questions: [
        {
          id: "ech10-u2-covalent-metallic-bonding-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement describes a covalent bond?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The attraction between positive ions and delocalised electrons" },
              { id: "b", text: "A shared pair of electrons between two atoms" },
              { id: "c", text: "The attraction between oppositely charged ions" },
              { id: "d", text: "A weak force between molecules" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Covalent bond", statement: "A shared pair of electrons between two non-metal atoms." },
            ],
            steps: [
              { reasoning: "Covalent bonds are formed by sharing electrons. (a) is metallic, (b) is ionic, (d) is an intermolecular force.", working: "\\text{shared pair of electrons}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)**",
            commonErrors: ["Choosing (d) because molecules are 'covalent'. Intermolecular forces are not covalent bonds."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "ech10-u2-covalent-metallic-bonding-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why methane, $\\text{CH}_4$, has a low boiling point.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Simple molecular substances", statement: "Strong covalent bonds within molecules, weak intermolecular forces between molecules." },
            ],
            steps: [
              { reasoning: "Methane is a simple molecular substance.", marks: 1, markCode: "B" },
              { reasoning: "There are weak intermolecular forces between the molecules.", marks: 1, markCode: "B" },
              { reasoning: "Little energy is needed to overcome these forces; the strong covalent bonds within molecules are not broken.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Weak intermolecular forces between simple molecules need little energy to overcome.",
            commonErrors: ["Saying the covalent bonds are weak.", "Saying covalent bonds break when methane boils."],
            examinerNote: "Reject 'weak covalent bonds' and 'weak bonds between atoms'. Allow 'forces between molecules'.",
          },
        },
        {
          id: "ech10-u2-covalent-metallic-bonding-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why copper is malleable and conducts electricity. Refer to its structure and bonding.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Metallic bonding", statement: "Positive metal ions in a lattice are attracted to a sea of delocalised electrons." },
            ],
            steps: [
              { reasoning: "Copper has a lattice of positive ions surrounded by delocalised electrons.", marks: 1, markCode: "B" },
              { reasoning: "The layers of ions can slide over each other when a force is applied.", marks: 1, markCode: "B" },
              { reasoning: "The electrons still attract the ions, so the metallic bonding holds and the shape changes without breaking.", marks: 1, markCode: "B" },
              { reasoning: "The delocalised electrons are free to move and carry charge through the metal.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Layers of ions slide while the sea of delocalised electrons keeps them bonded; the electrons carry the current.",
            commonErrors: ["Saying ions move through the metal to carry current.", "Saying the metallic bond breaks when the metal is bent."],
            examinerNote: "Reject 'ions are free to move' for conduction. Allow 'sea of electrons'.",
          },
        },
        {
          id: "ech10-u2-covalent-metallic-bonding-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "The table shows some properties of four substances.\n\n| Substance | Melting point ($^\\circ\\text{C}$) | Conducts when solid | Conducts when molten |\n| --- | --- | --- | --- |\n| W | -219 | no | no |\n| X | 801 | no | yes |\n| Y | 1085 | yes | yes |\n| Z | 3550 | no | no |",
          parts: [
            { label: "a", prompt: "Identify the type of structure and bonding in each of W, X and Y.", marks: 3 },
            { label: "b", prompt: "Substance Z is diamond. Explain why it has a very high melting point.", marks: 2 },
            { label: "c", prompt: "Graphite is another form of carbon and conducts electricity. Explain why graphite conducts but diamond does not.", marks: 2 },
            { label: "d", prompt: "In a molecule of water, state how many electrons are shared in total and how many non-bonding pairs of electrons the oxygen atom has.", marks: 2 },
            { label: "e", prompt: "Explain why substance W has a very low melting point.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Structure and properties", statement: "Properties such as melting point and conductivity are explained by the particles present and the forces between them." },
              { kind: "definition", name: "Covalent bond", statement: "A shared pair of electrons between two non-metal atoms." },
            ],
            steps: [
              { part: "a", reasoning: "W has a very low melting point and does not conduct: simple molecular, covalent bonding.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "X has a high melting point and conducts only when molten: giant ionic lattice, ionic bonding.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Y has a high melting point and conducts when solid: metal, metallic bonding.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Diamond is a giant covalent structure in which every carbon atom is joined to four others by strong covalent bonds.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "A lot of energy is needed to break these many strong covalent bonds.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "In graphite each carbon atom bonds to three others, leaving one delocalised electron that is free to move and carry charge.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "In diamond all four outer electrons of each carbon atom are used in bonding, so there are no free electrons.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Each O-H bond is a shared pair, and there are two such bonds, so 4 electrons are shared in total.", working: "2 \\times 2 = 4", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Oxygen has 6 outer electrons, uses 2 in bonding, so 4 remain as 2 non-bonding (lone) pairs.", working: "6 - 2 = 4 \\Rightarrow 2\\text{ pairs}", marks: 1, markCode: "B" },
              { part: "e", reasoning: "W is simple molecular, so only weak intermolecular forces are overcome on melting and little energy is needed.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) W simple molecular covalent; X giant ionic; Y metallic (b) many strong covalent bonds in giant structure (c) graphite has delocalised electrons, diamond has none (d) 4 shared electrons, 2 lone pairs (e) weak intermolecular forces need little energy to overcome",
            commonErrors: ["Saying W has 'weak covalent bonds'.", "Saying diamond has weak forces between layers (that is graphite).", "Giving 4 non-bonding pairs on oxygen instead of 4 non-bonding electrons (2 pairs)."],
            examinerNote: "In (e) reject 'covalent bonds are weak'. Allow ecf in (a).",
          },
        },
      ],
    },
  ],
};
