import type { Lesson } from "../../../types.ts";

export const lesson111: Lesson = {
  id: "chem11-u1-lesson-1-1",
  code: "1-1",
  title: "Ionic, Covalent and Metallic Bonding",
  goal: "I CAN explain how ionic, covalent and metallic bonds form, compare the properties of ionic and molecular compounds, and draw Lewis structures for molecules and polyatomic ions.",
  standards: ["HS-PS1-1", "HS-PS1-2"],
  vocabulary: [
    { term: "Ionic bond", definition: "The electrostatic attraction between oppositely charged ions formed when electrons are transferred from a metal to a nonmetal." },
    { term: "Covalent bond", definition: "A bond formed when two atoms share one or more pairs of electrons, typically between nonmetals." },
    { term: "Metallic bond", definition: "The attraction between positive metal ions and a 'sea' of delocalized electrons." },
    { term: "Lewis structure", definition: "A diagram showing atoms, bonding electron pairs as lines or dots, lone pairs, and formal charges." },
    { term: "Octet rule", definition: "Atoms tend to gain, lose or share electrons so each atom has eight valence electrons, like a noble gas." },
    { term: "Electronegativity", definition: "A measure of an atom's ability to attract shared electrons in a bond; higher values pull electrons more strongly." },
    { term: "Polyatomic ion", definition: "An ion made of two or more covalently bonded atoms that carries an overall charge, such as $\\text{SO}_4^{2-}$ or $\\text{NH}_4^+$." },
  ],
  concepts: [
    {
      id: "chem11-u1-ionic-covalent-metallic",
      title: "Ionic, covalent and metallic bonds",
      skill: "Distinguish the three bond types by how electrons are arranged and by the resulting properties.",
      lesson: {
        sections: [
          {
            heading: "Three ways atoms bond",
            body: "Atoms bond to reach a stable electron configuration, usually a full outer shell. There are three main mechanisms.\n\n- **Ionic bonding**: a metal transfers one or more electrons to a nonmetal. The metal becomes a positive ion (cation) and the nonmetal a negative ion (anion). The bond is the electrostatic attraction between the ions in a crystal lattice.\n- **Covalent bonding**: two nonmetal atoms share one or more pairs of electrons. A single bond shares one pair, a double bond two pairs, a triple bond three pairs.\n- **Metallic bonding**: metal atoms release their valence electrons into a delocalized 'sea' shared by all the positive metal ions.",
          },
          {
            heading: "Properties that reveal the bond type",
            body: "Ionic compounds form crystalline solids with high melting points because strong attractions hold the lattice together. They are brittle: pushing ions of like charge together causes repulsion and the crystal shatters. They conduct electricity only when molten or dissolved, because the ions must be free to move.\n\nMolecular (covalent) compounds have much lower melting and boiling points because only weak attractions between molecules must be overcome. Many are liquids or gases at room temperature, and none conduct electricity because there are no charged particles.\n\nMetals are malleable, ductile and shiny because the electron sea lets ions slide past each other without breaking. They conduct electricity and heat well at any temperature because the delocalized electrons carry charge and energy.",
          },
          {
            heading: "Electronegativity decides",
            body: "The difference in electronegativity between two atoms predicts the bond type. A large difference (roughly greater than $1.7$) gives an ionic bond. A small or zero difference gives a nonpolar covalent bond, and an intermediate difference gives a polar covalent bond in which the shared electrons are pulled toward the more electronegative atom.",
          },
        ],
        keyFormulas: [
          { name: "Ionic vs covalent test", statement: "Metal + nonmetal $\\rightarrow$ ionic; nonmetal + nonmetal $\\rightarrow$ covalent; metal + metal $\\rightarrow$ metallic." },
          { name: "Conductivity", statement: "Ionic compounds conduct only when molten or in solution; metals always conduct; molecular compounds never conduct." },
        ],
        workedExample: {
          problem: "Classify the bonding in sodium chloride ($\\text{NaCl}$), carbon dioxide ($\\text{CO}_2$) and copper ($\\text{Cu}$), and predict which conducts electricity as a solid.",
          solution: "NaCl is a metal plus a nonmetal, so it is ionic. $\\text{CO}_2$ is two nonmetals sharing electrons, so covalent. Copper is a metal, so metallic. Only copper conducts electricity as a solid, because its delocalized electrons move freely. NaCl conducts only when dissolved or molten.",
        },
      },
      questions: [
        {
          id: "chem11-u1-ionic-covalent-metallic-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which substance is held together by metallic bonding?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\text{NaCl}$" },
              { id: "b", text: "$\\text{H}_2\\text{O}$" },
              { id: "c", text: "$\\text{CO}_2$" },
              { id: "d", text: "$\\text{Cu}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Metallic bond", statement: "Metallic bonding occurs between atoms of a metal, involving a sea of delocalized electrons." }],
            steps: [{ reasoning: "Copper is a pure metal element; the other options are ionic or molecular compounds.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** $\\text{Cu}$",
            commonErrors: ["Choosing an ionic compound because metals are involved in its formation; metallic bonding requires a metal element.", "Choosing water because it contains hydrogen."],
            examinerNote: "B1 for (d).",
          },
        },
        {
          id: "chem11-u1-ionic-covalent-metallic-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student tests three solids with a conductivity probe. Solid A conducts when molten but not as a solid. Solid B conducts as a solid. Solid C does not conduct in any state.\n\nIdentify the bond type in each solid.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Ionic conductivity", statement: "Ionic compounds conduct electricity only when ions are free to move: molten or in aqueous solution." },
              { kind: "property", name: "Metallic conductivity", statement: "Metals conduct in all states because of delocalized electrons." },
              { kind: "property", name: "Molecular conductivity", statement: "Covalent molecular compounds have no mobile charged particles and never conduct." },
            ],
            steps: [
              { reasoning: "A conducts only when molten, so its ions are locked in a solid lattice: ionic.", marks: 1, markCode: "B" },
              { reasoning: "B conducts as a solid, so it has mobile electrons: metallic. C never conducts, so it is a molecular covalent solid.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "A: ionic; B: metallic; C: covalent (molecular).",
            commonErrors: ["Calling A metallic because it conducts when molten.", "Forgetting that molecular compounds never conduct, even when dissolved (unless they react)."],
            examinerNote: "B1 each correct identification.",
          },
        },
        {
          id: "chem11-u1-ionic-covalent-metallic-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why ionic crystals are hard but brittle, while metals are hard but can be hammered into thin sheets without shattering.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Lattice and repulsion", statement: "In an ionic crystal each ion is surrounded by oppositely charged ions; shifting layers brings like charges together." },
              { kind: "principle", name: "Electron sea", statement: "In metals the delocalized electrons hold positive ions together while allowing the layers to slide." },
            ],
            steps: [
              { reasoning: "In an ionic crystal, each ion is held rigidly in place by attractions to neighbors of opposite charge.", marks: 1, markCode: "B" },
              { reasoning: "When force shifts one layer, ions of the same charge are forced adjacent, causing strong repulsion that splits the crystal along a plane.", marks: 1, markCode: "B" },
              { reasoning: "In a metal the electron sea is not tied to particular ions, so layers slide past each other and the electrons keep bonding them: the metal deforms (malleable) instead of shattering.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Ionic crystals shatter because shifting layers brings like-charged ions together; metals deform because the electron sea maintains bonding while layers slide.",
            commonErrors: ["Saying ionic bonds are weak; they are strong but directional in effect through the lattice.", "Attributing metal malleability to weak metallic bonds rather than the non-directional electron sea."],
            examinerNote: "B1 lattice rigidity. B1 like-charge repulsion on slip. R1 electron sea allows slip without breaking bonds.",
          },
        },
        {
          id: "chem11-u1-ionic-covalent-metallic-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A materials scientist compares four substances: magnesium oxide ($\\text{MgO}$), methane ($\\text{CH}_4$), iron ($\\text{Fe}$), and hydrogen chloride ($\\text{HCl}$).",
          parts: [
            { label: "a", prompt: "State the type of bonding in each substance.", marks: 2 },
            { label: "b", prompt: "Predict which substances conduct electricity as solids and which conduct only when molten or dissolved.", marks: 2 },
            { label: "c", prompt: "Rank the four from lowest to highest melting point and justify your ranking using bond type.", marks: 3 },
            { label: "d", prompt: "Explain why $\\text{MgO}$ is soluble in water while $\\text{CH}_4$ is not, in terms of particle charges.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bond types", statement: "Ionic: electron transfer between metal and nonmetal; covalent: electron sharing between nonmetals; metallic: electron sea in metals." },
              { kind: "property", name: "Melting points", statement: "Ionic and metallic lattices have high melting points; molecular covalent substances have low melting points." },
              { kind: "property", name: "Solubility", statement: "Ionic compounds dissolve in polar solvents like water because ions are attracted to polar water molecules; nonpolar molecules do not." },
            ],
            steps: [
              { reasoning: "MgO is metal + nonmetal: ionic. CH4 and HCl are nonmetal combinations: covalent. Fe is a metal: metallic.", marks: 2, markCode: "B", part: "a" },
              { reasoning: "Only Fe conducts as a solid. MgO conducts when molten or dissolved because ions become mobile; CH4 and HCl do not conduct in any state.", marks: 2, markCode: "B", part: "b" },
              { reasoning: "CH4 lowest (weak intermolecular forces only), then HCl, then Fe and MgO highest. Fe and MgO have strong lattice/metallic bonding.", marks: 1, markCode: "B", part: "c" },
              { reasoning: "Fe and MgO both involve strong bonding but MgO's high charge density gives it the highest melting point.", marks: 1, markCode: "A", part: "c" },
              { reasoning: "MgO dissociates into Mg2+ and O2- ions that are strongly attracted to polar water molecules; CH4 is nonpolar and water cannot pull it apart.", marks: 1, markCode: "R", part: "c" },
              { reasoning: "Water is polar with partial charges; it surrounds and stabilizes the ions. CH4 has no charges for water to attract.", marks: 1, markCode: "B", part: "d" },
              { reasoning: "Like dissolves like: polar/ionic solutes dissolve in polar solvents; nonpolar solutes do not.", marks: 1, markCode: "R", part: "d" },
            ],
            finalAnswer: "(a) MgO ionic, CH4 covalent, Fe metallic, HCl covalent. (b) Fe conducts as solid; MgO conducts molten/dissolved; CH4 and HCl never. (c) CH4 < HCl < Fe < MgO, because molecular < ionic/metallic lattice strength. (d) Ions are attracted to polar water; nonpolar CH4 is not.",
            commonErrors: ["Claiming HCl conducts as a gas; it is molecular until dissolved, where it ionizes.", "Ranking Fe below MgO without justification; accept reasonable ordering of Fe and MgO with justification."],
            examinerNote: "2 marks for all four bond types. 2 for conductivity. 3 for ranking with justification. 2 for solubility explanation.",
          },
        },
      ],
    },
    {
      id: "chem11-u1-lewis-structures",
      title: "Lewis structures and the octet rule",
      skill: "Draw Lewis structures for covalent molecules and polyatomic ions, placing lone pairs and formal charges correctly.",
      lesson: {
        sections: [
          {
            heading: "Drawing Lewis structures",
            body: "A Lewis structure shows valence electrons as dots or bonds. For a molecule:\n\n1. Count the total valence electrons: group number for each atom (H has 1, C has 4, O has 6, N has 5, halogens have 7).\n2. Connect atoms with single bonds (the least electronegative atom, except H, is usually central).\n3. Distribute remaining electrons as lone pairs so each atom reaches an octet (H reaches a duet).\n4. If an atom is short of electrons, convert lone pairs on neighboring atoms into multiple bonds.\n5. For ions, add electrons for negative charges and remove for positive charges before distributing.",
          },
          {
            heading: "Formal charge",
            body: "Formal charge checks whether electrons are placed reasonably:\n\n$$\\text{formal charge} = \\text{valence electrons} - \\text{nonbonding electrons} - \\tfrac{1}{2}(\\text{bonding electrons})$$\n\nThe best Lewis structure puts formal charges as close to zero as possible, with negative formal charge on the more electronegative atom. For polyatomic ions the sum of formal charges must equal the ion's charge.",
          },
          {
            heading: "Exceptions and resonance",
            body: "Some atoms exceed the octet (e.g. $\\text{SF}_6$ has 12 electrons around S) or have fewer than eight (e.g. $\\text{BF}_3$ has 6 around B). **Resonance** occurs when electrons can be arranged in more than one valid way, as in $\\text{O}_3$ or the carbonate ion $\\text{CO}_3^{2-}$; the real structure is a blend of the resonance forms.",
          },
        ],
        keyFormulas: [
          { name: "Valence electrons", statement: "$\\text{Group 1: 1, Group 14: 4, Group 15: 5, Group 16: 6, Group 17: 7}$" },
          { name: "Formal charge", statement: "$FC = V - N - \\tfrac{1}{2}B$ where $V$ = valence, $N$ = nonbonding, $B$ = bonding electrons" },
        ],
        workedExample: {
          problem: "Draw the Lewis structure for the carbonate ion $\\text{CO}_3^{2-}$ and give the formal charge on carbon.",
          solution: "Valence electrons: C has 4, each O has 6 ($3 \\times 6 = 18$), plus 2 for the charge: total $24$. Connect C to the three O atoms with single bonds ($3 \\times 2 = 6$ electrons used, $18$ left). Give each O two lone pairs ($3 \\times 4 = 12$ electrons, $6$ left). Carbon has only 6 electrons, so move one lone pair from an O to form a C=O double bond. Now C has an octet. Two resonance forms place the double bond on different oxygens. Formal charge on C: $4 - 0 - \\tfrac{1}{2}(8) = 0$. Each single-bonded O: $6 - 6 - \\tfrac{1}{2}(2) = -1$; the double-bonded O: $6 - 4 - \\tfrac{1}{2}(4) = 0$. Total: $-2$, matching the ion.",
        },
      },
      questions: [
        {
          id: "chem11-u1-lewis-structures-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many valence electrons does a neutral nitrogen atom contribute to a Lewis structure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3$" },
              { id: "b", text: "$5$" },
              { id: "c", text: "$7$" },
              { id: "d", text: "$8$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Valence electrons", statement: "Valence electrons equal the group number for main-group elements: N is in Group 15, so 5." }],
            steps: [{ reasoning: "Nitrogen is in Group 15, so it has 5 valence electrons.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** $5$",
            commonErrors: ["Confusing group number with period number.", "Counting all 7 electrons of nitrogen instead of only valence electrons."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem11-u1-lewis-structures-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Draw the Lewis structure for water ($\\text{H}_2\\text{O}$) by stating: (a) the total number of valence electrons, (b) the number of bonding pairs, and (c) the number of lone pairs on oxygen.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "method", name: "Lewis procedure", statement: "Sum valence electrons, connect atoms with single bonds, then distribute remaining electrons as lone pairs to complete octets (duet for H)." }],
            steps: [
              { reasoning: "O contributes 6 and each H contributes 1: total $6 + 1 + 1 = 8$ valence electrons.", working: "6+1+1=8", marks: 1, markCode: "M" },
              { reasoning: "Two O-H single bonds use 4 electrons, leaving 4 electrons = 2 lone pairs on oxygen.", working: "8-4=4 \\text{ electrons} = 2 \\text{ lone pairs}", marks: 1, markCode: "M" },
              { reasoning: "Bonding pairs = 2 (the two O-H bonds); lone pairs on O = 2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 8 valence electrons (b) 2 bonding pairs (c) 2 lone pairs on oxygen",
            commonErrors: ["Putting lone pairs on hydrogen; H can only hold a duet.", "Forgetting the charge adjustment step for ions (not needed here)."],
            examinerNote: "M1 electron count, M1 distribution, A1 correct counts.",
          },
        },
        {
          id: "chem11-u1-lewis-structures-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For the cyanide ion $\\text{CN}^-$, the Lewis structure is $[:\\text{C}\\equiv\\text{N}:]^-$.\n\n(a) Calculate the total number of valence electrons in $\\text{CN}^-$.\n(b) Calculate the formal charge on carbon and on nitrogen.\n(c) Explain why the structure places a lone pair on carbon and nitrogen rather than forming additional bonds.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "method", name: "Electron counting", statement: "Add electrons for a negative charge: C (4) + N (5) + 1 = 10 valence electrons." },
              { kind: "formula", name: "Formal charge", statement: "$FC = V - N - \\tfrac{1}{2}B$" },
              { kind: "principle", name: "Octet rule", statement: "Each atom is most stable with a complete octet (or duet for H)." },
            ],
            steps: [
              { reasoning: "C contributes 4 valence electrons, N contributes 5, and the -1 charge adds 1: total 10.", working: "4+5+1=10", marks: 1, markCode: "M", part: "a" },
              { reasoning: "Carbon has 2 nonbonding electrons and 6 bonding electrons (a triple bond): $FC = 4 - 2 - 3 = -1$. Nitrogen has 2 nonbonding and 6 bonding: $FC = 5 - 2 - 3 = 0$. The charges sum to -1, matching the ion.", marks: 2, markCode: "A", part: "b" },
              { reasoning: "Both atoms already have complete octets with the triple bond; adding more bonds would require more than 8 electrons around an atom (impossible for period-2 atoms) or would leave an atom electron-deficient.", marks: 1, markCode: "R", part: "c" },
            ],
            finalAnswer: "(a) 10 valence electrons (b) FC(C) = -1, FC(N) = 0 (c) Both atoms have full octets; period-2 atoms cannot exceed 8 electrons, so the triple bond plus lone pairs is the stable arrangement.",
            commonErrors: ["Forgetting the extra electron for the negative charge.", "Miscalculating formal charge by forgetting to halve bonding electrons.", "Suggesting a quadruple bond, which would give 10 electrons around each atom."],
            examinerNote: "M1 count, A2 formal charges, R1 octet explanation. Accept 'cannot exceed octet' or 'would give expanded octet which period-2 atoms cannot have'.",
          },
        },
        {
          id: "chem11-u1-lewis-structures-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "The sulfate ion is $\\text{SO}_4^{2-}$. Sulfur is the central atom.",
          parts: [
            { label: "a", prompt: "Calculate the total number of valence electrons in $\\text{SO}_4^{2-}$.", marks: 1 },
            { label: "b", prompt: "Draw a valid Lewis structure using only single and double bonds (one resonance form is acceptable). State how many S=O double bonds it contains.", marks: 3 },
            { label: "c", prompt: "Calculate the formal charge on sulfur and on each type of oxygen in your structure.", marks: 3 },
            { label: "d", prompt: "Explain why $\\text{SO}_4^{2-}$ has resonance structures rather than a single fixed structure.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "method", name: "Electron counting", statement: "S (6) + 4 O (24) + 2 charge = 32 valence electrons." },
              { kind: "formula", name: "Formal charge", statement: "$FC = V - N - \\tfrac{1}{2}B$" },
              { kind: "principle", name: "Resonance", statement: "When electrons can be arranged in more than one equivalent way, the true structure is a hybrid of the resonance forms." },
            ],
            steps: [
              { reasoning: "S contributes 6, four O contribute 24, plus 2 for the 2- charge: total 32.", marks: 1, markCode: "M", part: "a" },
              { reasoning: "Four S-O single bonds use 8 electrons; each O gets 3 lone pairs (24 electrons); 32 - 8 - 24 = 0 left, so S has only 8 electrons but formal charges: each O is -1 and S is +2. To reduce charges, convert two O lone pairs into two S=O double bonds. Structure: two S=O and two S-O(-).", marks: 2, markCode: "M", part: "b" },
              { reasoning: "The structure contains 2 double bonds and 2 single bonds.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "FC(S) = $6 - 0 - \\tfrac{1}{2}(12) = 0$. FC(double-bond O) = $6 - 4 - \\tfrac{1}{2}(4) = 0$. FC(single-bond O) = $6 - 6 - \\tfrac{1}{2}(2) = -1$ each.", marks: 2, markCode: "A", part: "c" },
              { reasoning: "The formal charges sum to $0 + 0 + (-1) + (-1) = -2$, matching the ion's charge.", marks: 1, markCode: "A", part: "c" },
              { reasoning: "Any of the four oxygens can be double-bonded, giving equivalent resonance forms; the real ion is a blend with partial double-bond character.", marks: 2, markCode: "R", part: "d" },
              { reasoning: "Resonance means the bonding cannot be represented by one Lewis structure; all equivalent arrangements contribute.", marks: 1, markCode: "B", part: "d" },
            ],
            finalAnswer: "(a) 32 valence electrons (b) two S=O double bonds and two S-O single bonds (c) FC(S) = 0, double-bonded O = 0, single-bonded O = -1 each (d) The double bonds can be placed on any of the four oxygens, so the real structure is a resonance hybrid.",
            commonErrors: ["Drawing four single bonds only and leaving S with 8 electrons but all O at -1 and S at +2 without minimizing formal charge.", "Forgetting the 2- charge adds 2 electrons."],
            examinerNote: "1+3+3+3 = 10. Accept structures with formal charges minimized; resonance explanation needs the idea of equivalent arrangements.",
          },
        },
      ],
    },
  ],
};
