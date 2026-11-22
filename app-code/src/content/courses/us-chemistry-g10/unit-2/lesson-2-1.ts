import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "chem10-u2-lesson-2-1",
  code: "2-1",
  title: "Chemical Bonding",
  goal: "I CAN classify ionic, covalent and metallic bonding, write and name compounds, draw Lewis structures, predict molecular shapes with VSEPR and decide whether a molecule is polar.",
  standards: ["HS-PS1-1", "HS-PS1-3", "SEP: Developing and Using Models", "CCC: Structure and Function"],
  vocabulary: [
    { term: "Ionic bond", definition: "The electrostatic attraction between positive and negative ions, formed when a metal transfers electrons to a nonmetal." },
    { term: "Covalent bond", definition: "A bond formed when two nonmetal atoms share one or more pairs of electrons." },
    { term: "Polyatomic ion", definition: "A group of covalently bonded atoms that carries an overall charge, such as $\\text{SO}_4^{2-}$." },
    { term: "Lone pair", definition: "A pair of valence electrons on an atom that is not involved in bonding." },
    { term: "VSEPR theory", definition: "Valence shell electron pair repulsion: electron domains around a central atom spread as far apart as possible, which determines molecular shape." },
    { term: "Electronegativity", definition: "A measure of how strongly an atom attracts the shared electrons in a bond." },
    { term: "Polar molecule", definition: "A molecule with an uneven distribution of charge, because its bond dipoles do not cancel." },
  ],
  concepts: [
    {
      id: "chem10-u2-bond-types-naming",
      title: "Ionic, covalent and metallic bonding; formulas and names",
      skill: "Classify a substance by bond type and write or name ionic and molecular compounds.",
      lesson: {
        sections: [
          {
            heading: "Three types of bonding",
            body: "**Ionic bonding**: a metal gives electrons to a nonmetal. The resulting cations and anions attract each other and pack into a crystal lattice. Ionic solids have high melting points, are brittle, and conduct electricity only when molten or dissolved, because only then can the ions move.\n\n**Covalent bonding**: two nonmetals share electron pairs, forming discrete molecules (or giant networks such as diamond). Molecular substances usually have low melting points and do not conduct electricity.\n\n**Metallic bonding**: metal atoms release their valence electrons into a shared \"sea\" of delocalized electrons that surrounds a lattice of positive ions. This explains why metals conduct electricity as solids and can be hammered into shape (malleable).",
          },
          {
            heading: "Writing ionic formulas",
            body: "An ionic formula is neutral overall, so the total positive charge equals the total negative charge. Use the **crisscross** idea: find the smallest whole-number ratio of ions that balances the charges, and put brackets around a polyatomic ion if you need more than one.\n\nCommon polyatomic ions: $\\text{NH}_4^+$ (ammonium), $\\text{NO}_3^-$ (nitrate), $\\text{OH}^-$ (hydroxide), $\\text{CO}_3^{2-}$ (carbonate), $\\text{SO}_4^{2-}$ (sulfate), $\\text{PO}_4^{3-}$ (phosphate).\n\nTransition metals can form more than one ion, so the charge is written as a Roman numeral: iron(III) is $\\text{Fe}^{3+}$.",
          },
          {
            heading: "Naming compounds",
            body: "**Ionic**: name the cation, then the anion. A single-atom anion ends in -ide (chloride, oxide). Example: $\\text{CaCl}_2$ is calcium chloride. Do not use prefixes.\n\n**Molecular (two nonmetals)**: use Greek prefixes for the number of atoms: mono-, di-, tri-, tetra-, penta-, hexa-. Drop \"mono-\" on the first element. Example: $\\text{N}_2\\text{O}_5$ is dinitrogen pentoxide.",
          },
        ],
        keyFormulas: [
          { name: "Neutral ionic compound", statement: "total positive charge = total negative charge" },
          { name: "Ionic properties", statement: "high melting point; conducts only when molten or dissolved" },
          { name: "Metallic bonding", statement: "positive ions in a sea of delocalized electrons" },
        ],
        workedExample: {
          problem: "Write the formula and name for the compound formed from $\\text{Fe}^{3+}$ and $\\text{SO}_4^{2-}$.",
          solution: "Find the smallest ratio that balances charges. The least common multiple of 3 and 2 is 6, so we need 2 iron ions ($2\\times3=6$) and 3 sulfate ions ($3\\times2=6$). The sulfate is polyatomic, so it goes in brackets: $\\text{Fe}_2(\\text{SO}_4)_3$. The name is iron(III) sulfate.",
        },
      },
      questions: [
        {
          id: "chem10-u2-bond-types-naming-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the correct formula for aluminum oxide, made from $\\text{Al}^{3+}$ and $\\text{O}^{2-}$ ions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\text{Al}_2\\text{O}$" },
              { id: "b", text: "$\\text{AlO}$" },
              { id: "c", text: "$\\text{Al}_3\\text{O}_2$" },
              { id: "d", text: "$\\text{Al}_2\\text{O}_3$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Charge balance", statement: "An ionic compound is electrically neutral: total positive charge equals total negative charge." },
            ],
            steps: [
              { reasoning: "Two $\\text{Al}^{3+}$ ions give $+6$ and three $\\text{O}^{2-}$ ions give $-6$, so the charges balance.", working: "2(+3)+3(-2)=0", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $\\text{Al}_2\\text{O}_3$",
            commonErrors: ["Writing $\\text{AlO}$ by ignoring the charges.", "Swapping the subscripts ($\\text{Al}_3\\text{O}_2$) so the charges do not balance."],
            examinerNote: "B1 for $\\text{Al}_2\\text{O}_3$.",
          },
        },
        {
          id: "chem10-u2-bond-types-naming-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write the correct formula for each compound.\n\n(i) magnesium chloride\n\n(ii) ammonium sulfate",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Charge balance", statement: "Subscripts are chosen so that total positive charge equals total negative charge; polyatomic ions needing a subscript are placed in brackets." },
            ],
            steps: [
              { reasoning: "$\\text{Mg}^{2+}$ needs two $\\text{Cl}^-$ ions: $\\text{MgCl}_2$.", marks: 1, markCode: "B" },
              { reasoning: "$\\text{NH}_4^+$ and $\\text{SO}_4^{2-}$: two ammonium ions balance one sulfate ion, with brackets round the ammonium: $(\\text{NH}_4)_2\\text{SO}_4$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(i) $\\text{MgCl}_2$ (ii) $(\\text{NH}_4)_2\\text{SO}_4$",
            commonErrors: ["Writing $\\text{NH}_42\\text{SO}_4$ with no brackets.", "Writing $\\text{MgCl}$ or $\\text{Mg}_2\\text{Cl}$."],
            examinerNote: "B1 for each correct formula. Reject (ii) without brackets round the ammonium ion.",
          },
        },
        {
          id: "chem10-u2-bond-types-naming-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Sodium chloride does not conduct electricity as a solid but does when molten. Copper conducts electricity as a solid.\n\nExplain these observations in terms of bonding and structure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Electrical conductivity", statement: "A substance conducts only if it contains charged particles that are free to move." },
            ],
            steps: [
              { reasoning: "Solid sodium chloride is a lattice of ions held in fixed positions by strong ionic bonds, so the ions cannot move.", marks: 1, markCode: "B" },
              { reasoning: "When molten, the lattice breaks down and the ions are free to move and carry charge.", marks: 1, markCode: "B" },
              { reasoning: "Copper has metallic bonding: positive ions surrounded by delocalized valence electrons.", marks: 1, markCode: "B" },
              { reasoning: "These delocalized electrons are free to move through the solid, so copper conducts when solid.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Solid NaCl: ions fixed in lattice, no mobile charge carriers. Molten NaCl: ions free to move. Copper: delocalized electrons move through the metal lattice even when solid.",
            commonErrors: ["Saying NaCl contains no charged particles when solid; it does, but they cannot move.", "Saying that the ions in copper move; in metals it is the electrons that carry the charge."],
            examinerNote: "Allow 'sea of electrons' for delocalized electrons. Reject 'electrons move in NaCl' for the molten case.",
          },
        },
        {
          id: "chem10-u2-bond-types-naming-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A chemist studies several substances: potassium bromide ($\\text{KBr}$), carbon dioxide ($\\text{CO}_2$), copper ($\\text{Cu}$), iron(III) oxide and magnesium oxide ($\\text{MgO}$).",
          parts: [
            { label: "a", prompt: "State the type of bonding in $\\text{KBr}$, $\\text{CO}_2$ and $\\text{Cu}$.", marks: 3 },
            { label: "b", prompt: "Write the formula of iron(III) oxide, and name the compound $\\text{N}_2\\text{O}_5$.", marks: 2 },
            { label: "c", prompt: "Write the formula of lead(II) nitrate.", marks: 1 },
            { label: "d", prompt: "Magnesium oxide melts at about $2850\\ ^\\circ\\text{C}$ and sodium chloride at about $801\\ ^\\circ\\text{C}$. Explain why $\\text{MgO}$ has the higher melting point.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Bond types", statement: "Metal + nonmetal: ionic. Two nonmetals: covalent. Metal only: metallic." },
              { kind: "principle", name: "Charge balance", statement: "Total positive charge equals total negative charge in an ionic formula." },
              { kind: "principle", name: "Lattice strength", statement: "Electrostatic attraction increases as ionic charges increase and as ions get smaller." },
            ],
            steps: [
              { part: "a", reasoning: "$\\text{KBr}$ is a metal with a nonmetal: ionic.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "$\\text{CO}_2$ is two nonmetals: covalent.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "$\\text{Cu}$ is a metal: metallic.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "$\\text{Fe}^{3+}$ and $\\text{O}^{2-}$ balance as 2 and 3: $\\text{Fe}_2\\text{O}_3$.", working: "2(+3)+3(-2)=0", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Two nitrogen atoms and five oxygen atoms: dinitrogen pentoxide.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "$\\text{Pb}^{2+}$ needs two $\\text{NO}_3^-$ ions, so the nitrate is bracketed: $\\text{Pb}(\\text{NO}_3)_2$.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "$\\text{MgO}$ contains $\\text{Mg}^{2+}$ and $\\text{O}^{2-}$ ions, whereas $\\text{NaCl}$ contains $\\text{Na}^+$ and $\\text{Cl}^-$, so the ionic charges in $\\text{MgO}$ are larger.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Greater charges give stronger electrostatic attraction in the lattice, so more energy is needed to melt it.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) ionic, covalent, metallic (b) $\\text{Fe}_2\\text{O}_3$; dinitrogen pentoxide (c) $\\text{Pb}(\\text{NO}_3)_2$ (d) Larger charges (2+ and 2-) mean stronger attraction between ions, so a higher melting point.",
            commonErrors: ["In (b) naming $\\text{N}_2\\text{O}_5$ as nitrogen oxide with no prefixes.", "In (d) saying the covalent bonds in MgO are strong; it is an ionic compound.", "In (c) writing $\\text{PbNO}_3$ or $\\text{Pb}(\\text{NO}_3)_2$ without checking charges."],
            examinerNote: "(a) Allow 'molecular' for covalent. (b) Allow 'iron(III) oxide' formula only as $\\text{Fe}_2\\text{O}_3$. (d) Allow 'greater charge density' oe. Reject any answer referring to breaking covalent bonds.",
          },
        },
      ],
    },
    {
      id: "chem10-u2-lewis-vsepr-polarity",
      title: "Lewis structures, VSEPR shapes and polarity",
      skill: "Draw Lewis structures, predict molecular shape and decide if a molecule is polar.",
      lesson: {
        sections: [
          {
            heading: "Drawing Lewis structures",
            body: "1. Add up the valence electrons of all atoms (adjust for ion charge: add one per negative charge, subtract one per positive charge).\n2. Put the least electronegative atom (not hydrogen) in the center and join the other atoms to it with single bonds.\n3. Complete the octets of the outer atoms with lone pairs (hydrogen needs only 2).\n4. Put any electrons left over on the central atom. If it lacks an octet, form double or triple bonds with lone pairs from outer atoms.\n\nCheck: the number of electrons drawn must equal the total in step 1.",
          },
          {
            heading: "VSEPR: predicting shape",
            body: "Count the **electron domains** (bonded atoms plus lone pairs; a double bond counts as one domain) around the central atom. Domains repel and spread as far apart as possible. Lone pairs take up more space than bonding pairs, so they squeeze bond angles slightly.\n\n- 2 domains, 0 lone pairs: **linear**, $180^\\circ$ (e.g. $\\text{CO}_2$)\n- 3 domains, 0 lone pairs: **trigonal planar**, $120^\\circ$ (e.g. $\\text{BF}_3$)\n- 3 domains, 1 lone pair: **bent**, about $117^\\circ$ (e.g. $\\text{SO}_2$)\n- 4 domains, 0 lone pairs: **tetrahedral**, $109.5^\\circ$ (e.g. $\\text{CH}_4$)\n- 4 domains, 1 lone pair: **trigonal pyramidal**, about $107^\\circ$ (e.g. $\\text{NH}_3$)\n- 4 domains, 2 lone pairs: **bent**, about $104.5^\\circ$ (e.g. $\\text{H}_2\\text{O}$)",
          },
          {
            heading: "Molecular polarity",
            body: "A bond is **polar** when the atoms differ in electronegativity (roughly a difference above 0.4). Electronegativities (Pauling): H 2.1, C 2.5, N 3.0, O 3.5, F 4.0, Cl 3.0.\n\nA molecule is polar only if (1) it has polar bonds **and** (2) its shape is asymmetric, so the bond dipoles do not cancel. $\\text{CO}_2$ and $\\text{CCl}_4$ have polar bonds but are symmetric, so they are nonpolar. $\\text{H}_2\\text{O}$ and $\\text{NH}_3$ are polar.",
          },
        ],
        keyFormulas: [
          { name: "Electron domains", statement: "domains = bonded atoms + lone pairs on the central atom" },
          { name: "Tetrahedral family", statement: "4 domains: 0 lone pairs tetrahedral; 1 pyramidal; 2 bent" },
          { name: "Polar molecule", statement: "polar bonds and asymmetric shape" },
        ],
        workedExample: {
          problem: "Predict the shape and polarity of $\\text{PCl}_3$.",
          solution: "Valence electrons: $5+3(7)=26$. Phosphorus is the central atom with three single bonds to chlorine (6 electrons) and each chlorine has 3 lone pairs (18 electrons), leaving 2 electrons as a lone pair on phosphorus. That gives 4 domains with 1 lone pair: **trigonal pyramidal**. The P-Cl bonds are polar (electronegativities 2.1 and 3.0) and the pyramid is asymmetric, so the dipoles do not cancel. $\\text{PCl}_3$ is **polar**.",
        },
      },
      questions: [
        {
          id: "chem10-u2-lewis-vsepr-polarity-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the molecular shape of a water molecule, $\\text{H}_2\\text{O}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bent" },
              { id: "b", text: "Tetrahedral" },
              { id: "c", text: "Linear" },
              { id: "d", text: "Trigonal planar" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "VSEPR", statement: "Four electron domains with two lone pairs give a bent shape." },
            ],
            steps: [
              { reasoning: "Oxygen has two bonded atoms and two lone pairs: four domains, two of which are lone pairs, so the shape is bent.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Bent",
            commonErrors: ["Choosing linear because there are only three atoms; this ignores the lone pairs.", "Choosing tetrahedral, which describes the arrangement of domains, not the shape of the molecule."],
            examinerNote: "B1 for bent.",
          },
        },
        {
          id: "chem10-u2-lewis-vsepr-polarity-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate the total number of valence electrons that must appear in the Lewis structure of the phosphate ion, $\\text{PO}_4^{3-}$.",
          response: { type: "numeric", parts: [{ label: "Valence electrons", answer: 32 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Counting valence electrons", statement: "Sum the valence electrons of all atoms, then add one electron for each unit of negative charge." },
            ],
            steps: [
              { reasoning: "Phosphorus has 5 valence electrons and each of four oxygen atoms has 6. Add 3 for the $3-$ charge.", working: "5+4(6)+3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "5+24+3=32", marks: 1, markCode: "A" },
            ],
            finalAnswer: "32 valence electrons",
            commonErrors: ["Forgetting to add the extra electrons for the negative charge (giving 29).", "Subtracting 3 instead of adding (giving 26)."],
            examinerNote: "M1 for 5 + 24 + 3 (oe). A1 for 32.",
          },
        },
        {
          id: "chem10-u2-lewis-vsepr-polarity-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Both $\\text{CO}_2$ and $\\text{SO}_2$ contain polar bonds, but $\\text{CO}_2$ is a nonpolar molecule and $\\text{SO}_2$ is a polar molecule.\n\nExplain this difference using their molecular shapes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "VSEPR", statement: "Lone pairs on the central atom change the molecular shape." },
              { kind: "principle", name: "Polarity", statement: "A molecule is polar only if its bond dipoles do not cancel." },
            ],
            steps: [
              { reasoning: "Carbon in $\\text{CO}_2$ has two domains and no lone pairs, so the molecule is linear.", marks: 1, markCode: "B" },
              { reasoning: "The two equal C=O dipoles point in opposite directions and cancel, so $\\text{CO}_2$ is nonpolar.", marks: 1, markCode: "R" },
              { reasoning: "Sulfur in $\\text{SO}_2$ has three domains including one lone pair, so the molecule is bent.", marks: 1, markCode: "B" },
              { reasoning: "In a bent shape the S=O dipoles do not cancel, giving a net dipole, so $\\text{SO}_2$ is polar.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$\\text{CO}_2$ is linear, so its dipoles cancel (nonpolar). $\\text{SO}_2$ is bent because of the lone pair on sulfur, so its dipoles do not cancel (polar).",
            commonErrors: ["Saying the bonds in $\\text{CO}_2$ are nonpolar; they are polar but the molecule is symmetric.", "Describing $\\text{SO}_2$ as linear."],
            examinerNote: "Allow 'asymmetric' for shape in the polar case. Reject 'CO2 has no polar bonds'.",
          },
        },
        {
          id: "chem10-u2-lewis-vsepr-polarity-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Ammonia, $\\text{NH}_3$, is a gas used to make fertilizer. Electronegativities: N = 3.0, H = 2.1.",
          parts: [
            { label: "a", prompt: "Calculate the total number of valence electrons in $\\text{NH}_3$.", marks: 1 },
            { label: "b", prompt: "State the molecular shape of $\\text{NH}_3$ and its approximate bond angle.", marks: 2 },
            { label: "c", prompt: "The bond angle in methane, $\\text{CH}_4$, is $109.5^\\circ$. Explain why the bond angle in $\\text{NH}_3$ is smaller.", marks: 2 },
            { label: "d", prompt: "Decide whether $\\text{NH}_3$ is polar or nonpolar, justifying your answer.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "VSEPR", statement: "Electron domains repel; lone pairs repel more strongly than bonding pairs." },
              { kind: "principle", name: "Polarity", statement: "A polar molecule has polar bonds and an asymmetric shape." },
            ],
            steps: [
              { part: "a", reasoning: "Nitrogen contributes 5 and three hydrogens contribute 1 each.", working: "5+3(1)=8", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Nitrogen has three bonded atoms and one lone pair (four domains): trigonal pyramidal.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The bond angle is about $107^\\circ$.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The lone pair on nitrogen repels the bonding pairs more strongly than bonding pairs repel each other.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "This squeezes the N-H bonds closer together than the $109.5^\\circ$ in methane, which has no lone pairs.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The N-H bonds are polar because the electronegativity difference is $3.0-2.1=0.9$.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The pyramidal shape is asymmetric, so the bond dipoles do not cancel.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Conclusion: $\\text{NH}_3$ is a polar molecule.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) 8 (b) trigonal pyramidal, about $107^\\circ$ (c) The lone pair repels bonding pairs more strongly (d) Polar: polar bonds and an asymmetric shape give a net dipole.",
            commonErrors: ["Giving the shape as trigonal planar or tetrahedral.", "In (c) saying hydrogen atoms repel each other more in ammonia.", "In (d) stating that the molecule is polar without referring to shape."],
            examinerNote: "(b) Accept any angle from 106 to 108 degrees. Allow 'pyramidal'. (d) The conclusion mark depends on a correct reason.",
          },
        },
      ],
    },
  ],
};
