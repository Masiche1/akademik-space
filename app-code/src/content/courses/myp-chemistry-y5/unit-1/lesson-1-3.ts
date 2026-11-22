import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "mypc5-u1-lesson-1-3",
  code: "1-3",
  title: "Bonding and Intermolecular Forces",
  goal: "I CAN describe ionic, covalent and metallic bonding in detail, explain intermolecular forces, and relate structure to physical properties.",
  standards: [
    "MYP Sciences: Matter",
    "Key concept: Change",
    "Criterion A: Knowing and understanding",
  ],
  vocabulary: [
    { term: "Ionic bond", definition: "Electrostatic attraction between oppositely charged ions in a giant lattice." },
    { term: "Covalent bond", definition: "Shared pair of electrons between non-metal atoms; may be single, double or triple." },
    { term: "Metallic bond", definition: "Attraction between positive metal ions and a sea of delocalised electrons." },
    { term: "Hydrogen bond", definition: "Strong dipole-dipole attraction between H bonded to N, O or F and a lone pair on another molecule." },
    { term: "Van der Waals forces", definition: "Weak temporary dipole attractions between molecules; present in all molecules." },
    { term: "Giant structure", definition: "Lattice of atoms/ions/molecules extending throughout the solid; explains high melting points." },
  ],
  concepts: [
    {
      id: "mypc5-u1-bonding",
      title: "Ionic, covalent and metallic bonding",
      skill: "Describe the three types of bonding and link bonding type to physical properties.",
      lesson: {
        sections: [
          {
            heading: "Ionic bonding",
            body: "Formed by **complete electron transfer** from metal to non-metal, creating a giant lattice of ions held by strong electrostatic forces. Properties: high melting point, brittle (like charges align when shifted → repel), conducts when molten/aqueous (mobile ions), insoluble in non-polar solvents.",
          },
          {
            heading: "Covalent bonding",
            body: "Formed by **shared electron pairs** between non-metals. Simple molecules (H₂O, CO₂, CH₄) have low melting/boiling points because only weak intermolecular forces must be overcome. Giant covalent structures (diamond, graphite, SiO₂) have very high melting points and do not conduct (except graphite, via delocalised electrons).",
          },
          {
            heading: "Metallic bonding",
            body: "Metal atoms release valence electrons into a **delocalised 'sea'** shared by all ions. Properties: conducts electricity/heat (mobile electrons), malleable and ductile (layers slide without breaking bonds), lustrous, high melting points (except Hg, liquid).",
          },
        ],
        keyFormulas: [
          { name: "Ionic", statement: "Ions + electron transfer; brittle, conducts when molten" },
          { name: "Covalent", statement: "Shared e^- pairs; simple molecules low mp/bp" },
          { name: "Metallic", statement: "Metal ions + delocalised e^-; conducts, malleable" },
        ],
        workedExample: {
          problem: "Explain why diamond has a very high melting point but does not conduct electricity.",
          solution: "Diamond is a giant covalent lattice — each carbon is bonded to four others by strong covalent bonds. Melting requires breaking these throughout the lattice. All electrons are localised in bonds, so no free charges → no conduction.",
        },
      },
      questions: [
        {
          id: "mypc5-u1-bonding-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which type of bonding involves a sea of delocalised electrons?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hydrogen" },
              { id: "b", text: "Metallic" },
              { id: "c", text: "Ionic" },
              { id: "d", text: "Covalent" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Metallic bonding", statement: "Positive ions in a sea of delocalised electrons." },
            ],
            steps: [
              { reasoning: "Delocalised electrons are the hallmark of metallic bonding.", working: "\\text{metallic}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Metallic",
            commonErrors: ["Choosing covalent — shared pairs are localised."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc5-u1-bonding-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why do simple covalent molecules have low melting points?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They contain no atoms" },
              { id: "b", text: "They are all gases" },
              { id: "c", text: "Only weak intermolecular forces must be overcome; the covalent bonds within molecules stay intact" },
              { id: "d", text: "Covalent bonds are weak" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "IMF vs bonds", statement: "Melting breaks intermolecular forces, not covalent bonds." },
            ],
            steps: [
              { reasoning: "Melting separates molecules — only IMFs overcome.", working: "\\text{IMF}", marks: 1, markCode: "M" },
              { reasoning: "IMFs are weak → low mp/bp.", working: "\\text{weak}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Weak intermolecular forces between molecules",
            commonErrors: ["Claiming covalent bonds break on melting."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u1-bonding-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why ionic compounds are brittle.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ions move freely" },
              { id: "b", text: "When layers shift, like-charged ions align and repel, causing the lattice to shatter" },
              { id: "c", text: "Ionic bonds are weak" },
              { id: "d", text: "Ions are too large to touch" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Brittleness", statement: "Displacement aligns like charges → repulsion → fracture." },
            ],
            steps: [
              { reasoning: "Force shifts an ionic layer.", working: "\\text{shift}", marks: 1, markCode: "M" },
              { reasoning: "Like ions face each other → electrostatic repulsion.", working: "\\text{repel}", marks: 1, markCode: "M" },
              { reasoning: "Lattice fractures → brittle.", working: "\\text{brittle}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Like-charge repulsion on displacement shatters lattice",
            commonErrors: ["Saying ionic bonds are weak — they are strong."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u1-bonding-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Diamond and graphite are both made only of carbon atoms but have very different properties.",
          parts: [
            { label: "a", prompt: "Describe the structure of diamond and graphite (bonds per carbon).", marks: 2 },
            { label: "b", prompt: "Explain why graphite conducts electricity but diamond does not.", marks: 2 },
            { label: "c", prompt: "Explain why graphite is used as a lubricant while diamond is used in drill bits.", marks: 2 },
            { label: "d", prompt: "Evaluate one benefit and one drawback of using diamond-tipped tools in industry.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Allotropy", statement: "Same element, different structures → different properties." },
            ],
            steps: [
              { part: "a", reasoning: "Diamond: each C bonded to 4 others in a tetrahedral giant lattice; graphite: each C bonded to 3 in hexagonal layers.", working: "\\text{4 vs 3 bonds}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both are giant covalent structures.", working: "\\text{giant covalent}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Graphite has delocalised electrons between layers → conducts; diamond electrons all localised in bonds.", working: "\\text{delocalised}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Conclusion stated for both.", working: "\\text{conducts vs not}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Graphite layers slide over each other → lubricant; diamond's rigid 3D lattice is extremely hard → cutting/drilling.", working: "\\text{slide vs hard}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Properties linked to applications.", working: "\\text{applications}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Benefit: long-lasting, precise cutting (diamond hardest natural material); drawback: expensive, mining impact.", working: "\\text{cost/impact}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Balanced evaluation.", working: "\\text{evaluation}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) diamond 4-bond 3D, graphite 3-bond layers (b) delocalised e⁻ in graphite (c) slide→lubricant, hard→drill (d) durable but costly/mining impact",
            commonErrors: ["Saying graphite and diamond have the same bonding arrangement."],
            examinerNote: "M1 A1 for (a); M1 A1 for (b); M1 A1 for (c); M1 A1 for (d).",
          },
        },
        {
          id: "mypc5-u1-bonding-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which bonding type involves the complete transfer of electrons from a metal to a non-metal?",
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
              { kind: "definition", name: "Ionic bond", statement: "Electron transfer metal→non-metal creates ions." },
            ],
            steps: [
              { reasoning: "Complete electron transfer is the hallmark of ionic bonding.", working: "\\text{ionic}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Ionic",
            commonErrors: ["Choosing covalent — that is electron sharing."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc5-u1-bonding-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which substance contains covalent bonds?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sodium chloride" },
              { id: "b", text: "Copper metal" },
              { id: "c", text: "Magnesium oxide" },
              { id: "d", text: "Water (H₂O)" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Covalent bond", statement: "Shared electron pairs between non-metal atoms." },
            ],
            steps: [
              { reasoning: "H₂O has shared electron pairs between H and O.", working: "H_2O", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Water",
            commonErrors: ["Choosing NaCl — that is ionic."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc5-u1-bonding-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why can metals be drawn into wires (ductile) and hammered into sheets (malleable)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Metallic bonds are weak" },
              { id: "b", text: "Ions move freely in all directions" },
              { id: "c", text: "Layers of positive ions can slide over each other while the sea of delocalised electrons keeps them bonded" },
              { id: "d", text: "Metals have no bonds" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Metallic malleability", statement: "Non-directional metallic bonding allows layer sliding." },
            ],
            steps: [
              { reasoning: "Delocalised electrons are not tied to specific ion pairs.", working: "e^-\\text{ delocalised}", marks: 1, markCode: "M" },
              { reasoning: "Layers slide without breaking attractions → malleable and ductile.", working: "\\text{slide}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Layers slide while delocalised electrons maintain bonding",
            commonErrors: ["Comparing to ionic brittleness incorrectly."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u1-bonding-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Diamond and iodine are both covalent substances, yet diamond melts at ~3550 °C while iodine melts at ~114 °C. Explain the difference.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Diamond's bonds are weaker" },
              { id: "b", text: "Diamond is metallic" },
              { id: "c", text: "Diamond is a giant covalent lattice needing many bonds broken; iodine consists of small I₂ molecules held by weak intermolecular forces" },
              { id: "d", text: "Iodine atoms are larger" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Giant vs simple", statement: "Giant covalent lattices have very high mp; simple molecules low mp." },
            ],
            steps: [
              { reasoning: "Diamond: every C bonded to 4 others — melting breaks the whole lattice.", working: "\\text{giant}", marks: 1, markCode: "M" },
              { reasoning: "Iodine: I₂ molecules separated by weak IMFs → melts easily.", working: "\\text{IMF}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Giant lattice vs simple molecules",
            commonErrors: ["Saying all covalent substances have high melting points."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u1-bonding-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why does graphite conduct electricity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Its bonds are ionic" },
              { id: "b", text: "Each carbon has a delocalised electron free to move between layers" },
              { id: "c", text: "It is a liquid" },
              { id: "d", text: "It contains metal ions" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Graphite conduction", statement: "One delocalised electron per C moves through the layers." },
            ],
            steps: [
              { reasoning: "Each C forms 3 bonds; the 4th electron is delocalised.", working: "e^-\\text{ deloc}", marks: 1, markCode: "M" },
              { reasoning: "Mobile charge carriers → conducts electricity (and heat).", working: "\\text{conductor}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Delocalised electrons between layers",
            commonErrors: ["Saying all covalent substances conduct."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u1-bonding-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why ionic compounds dissolve in water but not in hexane (a non-polar solvent).",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ionic compounds always dissolve in any liquid" },
              { id: "b", text: "Hexane is too dense" },
              { id: "c", text: "Water is non-polar" },
              { id: "d", text: "Polar water molecules surround and stabilise ions (hydration); non-polar hexane cannot interact strongly enough with charged ions to overcome lattice energy" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Solubility rule", statement: "Ionic solutes dissolve in polar solvents; non-polar solvents cannot stabilise ions." },
            ],
            steps: [
              { reasoning: "Polar H₂O has δ+ and δ− ends attracted to ions → hydration shells.", working: "\\text{hydration}", marks: 1, markCode: "M" },
              { reasoning: "Hydration energy compensates lattice energy → dissolution.", working: "E_{hydration}>E_{lattice}", marks: 1, markCode: "M" },
              { reasoning: "Hexane is non-polar → no ion-dipole attraction → insoluble.", working: "\\text{non-polar}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Polar solvent stabilises ions; non-polar cannot",
            commonErrors: ["Claiming solubility is unrelated to solvent polarity."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u1-bonding-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Silicon dioxide (SiO₂) and carbon dioxide (CO₂) both contain only covalent bonds, yet SiO₂ melts at ~1700 °C and CO₂ sublimes at −78 °C. Explain.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "SiO₂ is ionic" },
              { id: "b", text: "SiO₂ is a giant covalent network; CO₂ consists of discrete O=C=O molecules held by weak intermolecular forces" },
              { id: "c", text: "They have the same structure" },
              { id: "d", text: "CO₂ has stronger bonds" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Structure-property", statement: "Giant covalent networks vs discrete molecules determine melting behaviour." },
            ],
            steps: [
              { reasoning: "SiO₂ forms a 3D network of Si–O bonds — melting breaks the lattice.", working: "\\text{giant}", marks: 1, markCode: "M" },
              { reasoning: "CO₂ is discrete linear molecules; only IMFs hold them together.", working: "O=C=O", marks: 1, markCode: "M" },
              { reasoning: "Weak IMFs → very low sublimation temperature.", working: "mp\\downarrow", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Giant network vs discrete molecules",
            commonErrors: ["Assuming same formula type means same structure."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u1-bonding-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Mercury is liquid at room temperature mainly because...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is a non-metal" },
              { id: "b", text: "It has covalent bonds" },
              { id: "c", text: "Its metallic bonds are relatively weak for a metal" },
              { id: "d", text: "It has no metallic bonding" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Metallic mp", statement: "Most metals solid; Hg is the exception — weak metallic bonding." },
            ],
            steps: [
              { reasoning: "Hg's metallic bonds are unusually weak → low melting point (−39 °C).", working: "mp=-39^\\circ C", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Weak metallic bonds",
            commonErrors: ["Claiming mercury is not a metal."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc5-u1-bonding-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A strip of copper is placed in silver nitrate solution and silver metal deposits. Identify the type of bonding in each substance involved.",
          response: {
            type: "numeric",
            parts: [
              { label: "Bonding in Cu metal", answer: 1 },
              { label: "Bonding in AgNO₃", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bond types", statement: "Metals → metallic; metal+non-metal compounds → ionic." },
            ],
            steps: [
              { reasoning: "Copper is a metal → metallic bonding.", working: "\\text{metallic}", marks: 1, markCode: "M" },
              { reasoning: "AgNO₃ is a compound of metal + non-metal (polyatomic nitrate) → ionic.", working: "\\text{ionic}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cu metallic; AgNO₃ ionic",
            commonErrors: ["Classifying AgNO₃ as covalent because of the polyatomic ion."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u1-bonding-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why simple molecular substances are often gases or low-melting liquids at room temperature.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "IMF melting", statement: "Melting/breaking apart molecules requires only overcoming weak IMFs." },
            ],
            steps: [
              { reasoning: "Simple molecules (e.g. CO₂, CH₄) have strong covalent bonds within each molecule.", working: "\\text{intra-molecular}", marks: 1, markCode: "M" },
              { reasoning: "Between molecules only weak van der Waals/dipole forces act.", working: "\\text{weak IMF}", marks: 1, markCode: "M" },
              { reasoning: "Little energy needed to separate molecules → gases or low mp/bp.", working: "mp,bp\\downarrow", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Weak intermolecular forces require little energy to overcome",
            commonErrors: ["Claiming covalent bonds within molecules are weak."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u1-bonding-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A jeweller must choose between a diamond-tipped drill and a steel drill bit for cutting masonry.",
          parts: [
            { label: "a", prompt: "Explain, in terms of bonding, why diamond can cut hard materials.", marks: 2 },
            { label: "b", prompt: "Explain, in terms of bonding, why steel is used for the drill body.", marks: 2 },
            { label: "c", prompt: "Evaluate one advantage and one disadvantage of using diamond in tools.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Property-application", statement: "Bonding type determines hardness, toughness and suitability." },
            ],
            steps: [
              { part: "a", reasoning: "Diamond is a giant covalent lattice — each C bonded to 4 others by strong covalent bonds.", working: "\\text{giant covalent}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Extremely hard — resists abrasion when cutting masonry.", working: "\\text{hard}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Steel is a metallic alloy — metallic bonding gives strength plus some flexibility/toughness.", working: "\\text{metallic}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Malleable/ductile body absorbs vibration without shattering (unlike brittle diamond).", working: "\\text{tough}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Advantage: diamond is the hardest natural material → long-lasting cutting edge; drawback: expensive and brittle — can shatter on impact.", working: "\\text{trade-off}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Balanced evaluation of cost vs performance.", working: "\\text{evaluation}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) giant covalent = hard (b) metallic = tough/malleable (c) durable but costly/brittle",
            commonErrors: ["Saying diamond is chosen because it is cheap."],
            examinerNote: "M1 A1 for (a); M1 A1 for (b); M1 A1 for (c).",
          },
        },
        {
          id: "mypc5-u1-bonding-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Classify the bonding in each substance and state one property that follows: (a) NaCl, (b) CH₄, (c) Cu wire. Give the property linked to each.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) NaCl bonding type (ionic=1, covalent=2, metallic=3)", answer: 1 },
              { label: "(b) CH₄ bonding type", answer: 2 },
              { label: "(c) Cu bonding type", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bond classification", statement: "Metal+non-metal → ionic; non-metal+non-metal → covalent; metal → metallic." },
            ],
            steps: [
              { reasoning: "NaCl: metal + non-metal → ionic (1).", working: "1", marks: 1, markCode: "M" },
              { reasoning: "CH₄: C and H are non-metals → covalent (2).", working: "2", marks: 1, markCode: "M" },
              { reasoning: "Cu is a metal → metallic (3).", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1 (ionic); 2 (covalent); 3 (metallic)",
            commonErrors: ["Classifying CH₄ as ionic — C–H is covalent."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
    {
      id: "mypc5-u1-imf",
      title: "Intermolecular forces",
      skill: "Describe van der Waals forces, dipole-dipole attractions and hydrogen bonding, and rank IMF strength.",
      lesson: {
        sections: [
          {
            heading: "Types of IMF",
            body: "**Van der Waals (dispersion) forces** exist between all molecules; strength increases with molecular size/mass. **Dipole-dipole forces** act between polar molecules (e.g. HCl). **Hydrogen bonding** is the strongest IMF: H covalently bonded to N, O or F attracted to a lone pair on another N/O/F — explains water's high boiling point, ice floating, and protein/DNA structure.",
          },
          {
            heading: "Ranking and properties",
            body: "Strength order: **hydrogen bond > dipole-dipole > van der Waals**. Boiling point rises with IMF strength: water (H-bonded, bp 100 °C) vs hydrogen sulphide (dipole/VdW only, bp −60 °C). Larger molecules have stronger VdW forces → higher boiling points (methane −161 °C → butane −0.5 °C).",
          },
          {
            heading: "Solubility and states",
            body: "Substances dissolve when solute-solvent IMFs are comparable: polar/ionic substances dissolve in water (H-bonding/dipole interactions), non-polar substances dissolve in non-polar solvents ('like dissolves like'). Strong IMFs also give solids high melting points and liquids high surface tension.",
          },
        ],
        keyFormulas: [
          { name: "IMF order", statement: "Hydrogen bond > dipole-dipole > van der Waals" },
          { name: "H-bond rule", statement: "H bonded to N, O or F can hydrogen bond" },
          { name: "Like dissolves like", statement: "Polar solute in polar solvent; non-polar in non-polar" },
        ],
        workedExample: {
          problem: "Why does water have a much higher boiling point than hydrogen sulphide (H₂S)?",
          solution: "Water molecules form hydrogen bonds (H bonded to O); H₂S has only weaker dipole-dipole and van der Waals forces, so less energy is needed to separate H₂S molecules.",
        },
      },
      questions: [
        {
          id: "mypc5-u1-imf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which intermolecular force is strongest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ionic bond" },
              { id: "b", text: "Dipole-dipole" },
              { id: "c", text: "Hydrogen bond" },
              { id: "d", text: "Van der Waals" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "IMF ranking", statement: "H-bond strongest IMF; ionic is a chemical bond, not IMF." },
            ],
            steps: [
              { reasoning: "Hydrogen bonding is the strongest intermolecular force.", working: "\\text{H-bond}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Hydrogen bond",
            commonErrors: ["Choosing ionic bond — that is not an intermolecular force."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc5-u1-imf-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which molecule can form hydrogen bonds with water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ammonia (NH₃)" },
              { id: "b", text: "Nitrogen (N₂)" },
              { id: "c", text: "Methane (CH₄)" },
              { id: "d", text: "Carbon dioxide (CO₂)" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "H-bond requirement", statement: "Need H bonded to N, O or F, plus a lone pair acceptor." },
            ],
            steps: [
              { reasoning: "NH₃ has N–H bonds and a lone pair on N.", working: "\\text{N-H}", marks: 1, markCode: "M" },
              { reasoning: "CH₄, CO₂, N₂ lack H bonded to N/O/F → no H-bonding.", working: "\\text{no H-bond}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ammonia",
            commonErrors: ["Choosing methane — C–H bonds do not hydrogen bond."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u1-imf-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Ice floats on water. Explain this using bonding and structure.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ice contains air bubbles" },
              { id: "b", text: "Ice is warmer than water" },
              { id: "c", text: "Hydrogen bonding holds water molecules in an open hexagonal lattice in ice, making it less dense than liquid water" },
              { id: "d", text: "Water molecules are larger in ice" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ice anomaly", statement: "H-bonded lattice → ice less dense than liquid water." },
            ],
            steps: [
              { reasoning: "H-bonds form an open, spaced hexagonal arrangement on freezing.", working: "\\text{lattice}", marks: 1, markCode: "M" },
              { reasoning: "Open structure = lower density than liquid where molecules pack closer.", working: "\\rho_{ice}<\\rho_{water}", marks: 1, markCode: "M" },
              { reasoning: "Ice therefore floats — insulates water bodies below.", working: "\\text{floats}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Open H-bonded lattice makes ice less dense",
            commonErrors: ["Saying ice is denser because it is solid."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u1-imf-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A sports drinks manufacturer wants a formulation that keeps athletes hydrated in heat.",
          parts: [
            { label: "a", prompt: "Identify the independent and dependent variables in testing hydration formulations.", marks: 2 },
            { label: "b", prompt: "Explain, using intermolecular forces, why water is an effective solvent for the ions in sports drinks.", marks: 2 },
            { label: "c", prompt: "Explain why a drink with added sugars may be less effective for hydration than plain water.", marks: 2 },
            { label: "d", prompt: "Evaluate one benefit and one drawback of adding electrolytes to sports drinks.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Solubility", statement: "Polar solutes dissolve in polar solvents via ion-dipole/H-bonding interactions." },
            ],
            steps: [
              { part: "a", reasoning: "Independent: formulation composition; dependent: hydration/absorption rate measured.", working: "\\text{variables}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Controlled: temperature, volume, athlete group, exercise intensity.", working: "\\text{controlled}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Water is polar and H-bonds; ions are attracted to the δ+ / δ− ends of water molecules (ion-dipole).", working: "\\text{ion-dipole}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Hydration shells surround ions → dissolution.", working: "\\text{hydration shell}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "High sugar concentration raises osmotic pressure in the intestine, slowing water absorption.", working: "\\text{osmotic}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Less water absorbed per volume → poorer hydration.", working: "\\text{slower absorption}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Benefit: replaces Na⁺/K⁺/Cl⁻ lost in sweat, supporting nerve and muscle function and preventing cramps.", working: "\\text{electrolytes}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Drawback: excess sugar/calories in some formulations can reduce hydration efficiency; plain water suffices for light exercise.", working: "\\text{sugar drawback}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) formulation/hydration + controls (b) ion-dipole, hydration shells (c) osmotic pressure slows absorption (d) replaces electrolytes; sugar can hinder",
            commonErrors: ["In (c), saying sugar increases hydration."],
            examinerNote: "M1 A1 for (a); M1 A1 for (b); M1 A1 for (c); M1 A1 for (d).",
          },
        },
        {
          id: "mypc5-u1-imf-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which intermolecular force is present between ALL molecules, including non-polar ones?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Van der Waals (dispersion) forces" },
              { id: "b", text: "Dipole-dipole attractions" },
              { id: "c", text: "Ionic bonds" },
              { id: "d", text: "Hydrogen bonds" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Van der Waals", statement: "Temporary dipoles attract all molecules; only IMF in non-polar substances." },
            ],
            steps: [
              { reasoning: "Every molecule has temporary fluctuations in electron density → VdW forces.", working: "\\text{VdW}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Van der Waals forces",
            commonErrors: ["Thinking non-polar molecules have no intermolecular forces."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc5-u1-imf-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The boiling point of water is 100 °C and of hydrogen sulphide is −60 °C. By how much is water's boiling point higher?",
          response: {
            type: "numeric",
            parts: [{ label: "Difference", answer: 160, unit: "°C" }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "IMF and boiling point", statement: "Higher IMF strength → higher boiling point." },
            ],
            steps: [
              { reasoning: "$100-(-60)=160$ °C — water boils much higher due to hydrogen bonding.", working: "100-(-60)=160", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$160\\ °\\text{C}$",
            commonErrors: ["Subtracting 100 − 60 = 40, ignoring the negative sign."],
            examinerNote: "B1 for 160 °C.",
          },
        },
        {
          id: "mypc5-u1-imf-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Rank these substances by boiling point from lowest to highest (boiling points: CH₄ −161 °C, H₂S −60 °C, H₂O 100 °C). Assign 1 = lowest.",
          response: {
            type: "numeric",
            unordered: true,
            parts: [
              { label: "CH₄", answer: 1 },
              { label: "H₂S", answer: 2 },
              { label: "H₂O", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "IMF and boiling point", statement: "Stronger IMFs → higher boiling point: VdW only < dipole/VdW < hydrogen bonding." },
            ],
            steps: [
              { part: "CH₄", reasoning: "CH₄ is non-polar, only van der Waals forces → lowest bp.", working: "\\text{VdW}", marks: 1, markCode: "M" },
              { part: "H₂S", reasoning: "H₂S is polar with dipole-dipole + VdW, but no H-bonding → middle.", working: "\\text{dipole}", marks: 1, markCode: "M" },
              { part: "H₂O", reasoning: "H₂O hydrogen bonds (H–O) → strongest IMFs → highest bp.", working: "\\text{H-bond}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "CH₄ (1) < H₂S (2) < H₂O (3)",
            commonErrors: ["Ranking H₂S above H₂O — it lacks hydrogen bonding."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u1-imf-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "The boiling points of the first four alkanes are: methane −161 °C, ethane −89 °C, propane −42 °C, butane −0.5 °C. By how much does the boiling point rise from methane to butane?",
          response: {
            type: "numeric",
            parts: [{ label: "Rise", answer: 160.5, unit: "°C" }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "VdW and chain length", statement: "Longer chains → stronger van der Waals forces → higher boiling point." },
            ],
            steps: [
              { reasoning: "Bigger molecules have more electrons → stronger temporary dipoles → stronger VdW forces.", working: "\\text{size}\\uparrow", marks: 1, markCode: "M" },
              { reasoning: "$-0.5-(-161)=160.5$ °C rise from methane to butane.", working: "-0.5-(-161)=160.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$160.5\\ ^\\circ\\text{C}$",
            commonErrors: ["Forgetting the negative signs when subtracting."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u1-imf-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which substance would dissolve best in water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Polythene — non-polar polymer" },
              { id: "b", text: "Ethanol (C₂H₅OH) — polar with O–H bonds that hydrogen bond with water" },
              { id: "c", text: "Vegetable oil — non-polar mixture" },
              { id: "d", text: "Hexane (C₆H₁₄) — non-polar hydrocarbon" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Like dissolves like", statement: "Polar solute needs polar solvent with comparable IMFs." },
            ],
            steps: [
              { reasoning: "Ethanol is polar and H-bonds → solute-water IMFs comparable.", working: "\\text{polar}", marks: 1, markCode: "M" },
              { reasoning: "Non-polar substances cannot overcome strong water-water H-bonds.", working: "\\text{non-polar}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ethanol — polar, hydrogen bonds with water",
            commonErrors: ["Choosing a hydrocarbon — 'like dissolves like'."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u1-imf-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Water boils at 100 °C. Convert this temperature to kelvin.",
          response: {
            type: "numeric",
            parts: [{ label: "Temperature", answer: 373, unit: "K", tolerance: 0.2 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Kelvin conversion", statement: "$T(\\text{K}) = T(^\\circ\\text{C}) + 273$" },
            ],
            steps: [
              { reasoning: "Add 273 to Celsius temperature.", working: "100+273", marks: 1, markCode: "M" },
              { reasoning: "$100+273=373$ K.", working: "373", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$373\\ \\text{K}$",
            commonErrors: ["Adding 273 twice or subtracting instead."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u1-imf-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why do ionic compounds such as NaCl have very high melting points compared with molecular substances such as methane?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Methane contains no atoms" },
              { id: "b", text: "Ionic lattices are held by strong electrostatic forces between ions throughout the crystal; methane molecules are held only by weak van der Waals forces" },
              { id: "c", text: "NaCl molecules are larger" },
              { id: "d", text: "Ionic compounds contain metals only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Lattice energy", statement: "Strong ionic attractions require much more energy to break than weak IMFs." },
            ],
            steps: [
              { reasoning: "NaCl is an ionic lattice — every ion attracts many oppositely charged neighbours.", working: "\\text{lattice}", marks: 1, markCode: "M" },
              { reasoning: "Melting requires separating all ions → very high temperature needed.", working: "\\text{high mp}", marks: 1, markCode: "M" },
              { reasoning: "Methane only has weak VdW between molecules → melts/b boils at very low temperature.", working: "\\text{VdW}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ionic lattice forces >> van der Waals forces",
            commonErrors: ["Comparing molecule sizes instead of bond/force types."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u1-imf-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Convert the boiling points of water (100 °C) and hydrogen sulphide (−60 °C) into kelvin.",
          response: {
            type: "numeric",
            unordered: true,
            parts: [
              { label: "Water", answer: 373, unit: "K", tolerance: 0.2 },
              { label: "H₂S", answer: 213, unit: "K", tolerance: 0.2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Kelvin conversion", statement: "$T(\\text{K}) = T(^\\circ\\text{C}) + 273$" },
            ],
            steps: [
              { part: "Water", reasoning: "Water: $100+273=373$ K.", working: "373", marks: 1, markCode: "M" },
              { part: "H₂S", reasoning: "H₂S: $-60+273=213$ K.", working: "213", marks: 1, markCode: "M" },
              { reasoning: "Both values correct in kelvin with correct handling of the negative Celsius value.", working: "\\text{K}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Water $373\\ \\text{K}$; H₂S $213\\ \\text{K}$",
            commonErrors: ["Computing $-60+273$ as $-333$ or forgetting the offset entirely."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u1-imf-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Rank these molecules by the strength of intermolecular forces between their molecules, from weakest (1) to strongest (4): HF, HCl, Cl₂, CH₄.",
          response: {
            type: "numeric",
            unordered: true,
            parts: [
              { label: "CH₄", answer: 1 },
              { label: "Cl₂", answer: 2 },
              { label: "HCl", answer: 3 },
              { label: "HF", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "IMF ranking", statement: "H-bond > dipole-dipole > van der Waals; non-polar molecules have only VdW." },
            ],
            steps: [
              { part: "CH₄", reasoning: "CH₄ is non-polar → only weak van der Waals forces → weakest.", working: "\\text{VdW}", marks: 1, markCode: "M" },
              { part: "Cl₂", reasoning: "Cl₂ is non-polar diatomic → only van der Waals; slightly stronger than CH₄ due to more electrons.", working: "\\text{VdW}", marks: 1, markCode: "M" },
              { part: "HCl", reasoning: "HCl is polar → dipole-dipole forces, stronger than VdW only.", working: "\\text{dipole}", marks: 1, markCode: "M" },
              { part: "HF", reasoning: "HF hydrogen bonds (H–F) → strongest IMF of the four.", working: "\\text{H-bond}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "CH₄ (1) < Cl₂ (2) < HCl (3) < HF (4)",
            commonErrors: ["Ranking HCl above HF — H–F hydrogen bond is stronger."],
            examinerNote: "M1 M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u1-imf-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the phrase 'like dissolves like' using intermolecular forces, giving one example of a polar and one of a non-polar solute in water.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Like dissolves like", statement: "Solute dissolves when solute-solvent IMFs are comparable in strength/type." },
            ],
            steps: [
              { reasoning: "Polar solutes (e.g. ethanol, NaCl) interact strongly with polar water via dipole-dipole/H-bonding or ion-dipole forces.", working: "\\text{polar}", marks: 1, markCode: "M" },
              { reasoning: "Non-polar solutes (e.g. oil, hexane) only have weak VdW forces; cannot compete with strong water-water hydrogen bonds.", working: "\\text{non-polar}", marks: 1, markCode: "M" },
              { reasoning: "Non-polar solutes instead dissolve in non-polar solvents (e.g. oil in petrol).", working: "\\text{oil/petrol}", marks: 1, markCode: "A" },
              { reasoning: "Clear statement of the principle with correct examples.", working: "\\text{principle}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Polar dissolves polar; non-polar dissolves non-polar — IMF compatibility decides solubility",
            commonErrors: ["Saying all substances dissolve in water."],
            examinerNote: "M1 M1 A1 A1.",
          },
        },
        {
          id: "mypc5-u1-imf-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Discuss two environmental consequences of water's unusually high boiling point and ice being less dense than liquid water.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Water anomaly", statement: "H-bonded lattice → ice floats; high bp → stable liquid at Earth temperatures." },
            ],
            steps: [
              { reasoning: "Ice floats → forms insulating layer on lakes/rivers in winter → water below doesn't freeze → aquatic life survives.", working: "\\text{insulation}", marks: 1, markCode: "M" },
              { reasoning: "If ice sank, lakes would freeze bottom-up and life would be destroyed.", working: "\\text{contrast}", marks: 1, markCode: "A" },
              { reasoning: "High boiling point → water stays liquid over most of Earth's temperature range → solvent for biological/chemical processes.", working: "\\text{liquid range}", marks: 1, markCode: "M" },
              { reasoning: "Also moderates climate: large heat capacity from H-bonding buffers temperature changes.", working: "\\text{climate}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Floating ice insulates water bodies; high bp keeps water liquid for life and climate",
            commonErrors: ["Saying ice floats because it is 'lighter material' without H-bond explanation."],
            examinerNote: "M1 A1 M1 A1.",
          },
        },
        {
          id: "mypc5-u1-imf-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A chemist claims 'intermolecular forces explain almost every everyday property of molecular substances.' Evaluate this claim for boiling point, solubility and state at room temperature.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "IMF governs properties", statement: "Boiling point, solubility and state depend on IMF type/strength." },
            ],
            steps: [
              { reasoning: "Boiling point: stronger IMFs need more energy → higher bp (H₂O 100 °C vs CH₄ −161 °C).", working: "\\text{bp}", marks: 1, markCode: "M" },
              { reasoning: "Solubility: 'like dissolves like' — IMF compatibility decides whether a solute dissolves.", working: "\\text{solubility}", marks: 1, markCode: "M" },
              { reasoning: "State at room temperature: strong IMFs → liquid/solid; weak IMFs → gas (compare Br₂ liquid vs I₂ solid vs Cl₂ gas trends).", working: "\\text{state}", marks: 1, markCode: "M" },
              { reasoning: "Counterpoint: molecular size/shape, molar mass and polarity also matter; IMF is dominant but not the only factor.", working: "\\text{nuance}", marks: 1, markCode: "A" },
              { reasoning: "Claim largely correct — IMF is the key explanatory tool for molecular substances.", working: "\\text{evaluate}", marks: 1, markCode: "A" },
              { reasoning: "Conclusion consistent with evidence given.", working: "\\text{conclusion}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "IMF explains bp, solubility and state well; supported with molecular-size nuance",
            commonErrors: ["One-sided answer with no evaluation."],
            examinerNote: "M1 M1 M1 A1 A1 A1.",
          },
        },
      ],
    },
  ],
};
