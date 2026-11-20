import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "mypc4-u1-lesson-1-3",
  code: "1-3",
  title: "Chemical Bonding",
  goal: "I CAN describe ionic, covalent and metallic bonding and predict the type of bond formed between elements.",
  standards: [
    "MYP Sciences: Matter",
    "Key concept: Systems",
    "Criterion A: Knowing and understanding",
  ],
  vocabulary: [
    { term: "Ionic bond", definition: "Electrostatic attraction between oppositely charged ions formed by electron transfer." },
    { term: "Ion", definition: "Charged atom or group of atoms formed by gaining or losing electrons." },
    { term: "Covalent bond", definition: "Shared pair of electrons between atoms, usually non-metals." },
    { term: "Metallic bond", definition: "Attraction between positive metal ions and delocalised electrons in a metal lattice." },
    { term: "Dative bond", definition: "Covalent bond where both shared electrons come from one atom." },
    { term: "Electron configuration", definition: "Arrangement of electrons in shells; determines bonding type." },
  ],
  concepts: [
    {
      id: "mypc4-u1-bonding",
      title: "Ionic and covalent bonding",
      skill: "Predict bond type from electron configuration and describe ion formation.",
      lesson: {
        sections: [
          {
            heading: "Ionic bonding",
            body: "Metal + non-metal: metal **loses** electrons → positive ion (cation); non-metal **gains** electrons → negative ion (anion). Opposite charges attract → ionic bond. Example: Na + Cl → Na⁺ + Cl⁻ → NaCl. Ions arrange in giant lattice.",
          },
          {
            heading: "Covalent bonding",
            body: "Non-metal + non-metal: atoms **share** electron pairs to complete outer shell. Examples: H₂ (single bond), O₂ (double), N₂ (triple), H₂O (two single bonds), CO₂ (two double bonds). Can form simple molecules or giant covalent structures (diamond, graphite).",
          },
          {
            heading: "Metallic bonding",
            body: "Metal atoms lose outer electrons into a 'sea' of delocalised electrons. Positive ions attract the electron sea → metallic bond. Explains metals' conductivity, malleability, high melting points.",
          },
        ],
        keyFormulas: [
          { name: "Ionic", statement: "Metal + non-metal → electron transfer → ions" },
          { name: "Covalent", statement: "Non-metal + non-metal → shared electrons" },
          { name: "Metallic", statement: "Metal lattice + delocalised electrons" },
        ],
        workedExample: {
          problem: "Predict bonding in MgO and Cl₂.",
          solution: "MgO: Mg (metal) + O (non-metal) → ionic. Cl₂: two non-metals → covalent (shared pair).",
        },
      },
      questions: [
        {
          id: "mypc4-u1-bond-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What type of bond forms between sodium and chlorine?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ionic" },
              { id: "b", text: "Covalent" },
              { id: "c", text: "Metallic" },
              { id: "d", text: "Hydrogen" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bond prediction", statement: "Metal + non-metal → ionic." },
            ],
            steps: [
              { reasoning: "Na is metal, Cl is non-metal → electron transfer → ionic.", working: "\\text{ionic}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Ionic",
            commonErrors: ["Choosing covalent — that's non-metal pairs."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc4-u1-bond-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What happens when a sodium atom bonds with chlorine?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sodium loses an electron to become Na⁺; chlorine gains it to become Cl⁻" },
              { id: "b", text: "They share electrons equally" },
              { id: "c", text: "Both lose electrons" },
              { id: "d", text: "Nothing changes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ion formation", statement: "Metal loses e⁻ → cation; non-metal gains e⁻ → anion." },
            ],
            steps: [
              { reasoning: "Na donates electron → Na⁺; Cl accepts → Cl⁻.", working: "Na^++Cl^-", marks: 1, markCode: "M" },
              { reasoning: "State the transfer.", working: "\\text{electron transfer}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Na loses e⁻ → Na⁺; Cl gains e⁻ → Cl⁻",
            commonErrors: ["Saying they share electrons — that's covalent."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u1-bond-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why metals conduct electricity.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Delocalised electrons in metallic bond can move freely and carry charge" },
              { id: "b", text: "Metals have free protons" },
              { id: "c", text: "Metals are liquids" },
              { id: "d", text: "Ions move through metal" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Metallic bonding", statement: "Delocalised electrons carry charge → conductivity." },
            ],
            steps: [
              { reasoning: "Metallic bond = positive ions + delocalised electron sea.", working: "\\text{electron sea}", marks: 1, markCode: "M" },
              { reasoning: "Electrons move freely under voltage → current flows.", working: "\\text{charge flow}", marks: 1, markCode: "M" },
              { reasoning: "State the explanation.", working: "\\text{conductivity}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Delocalised electrons carry charge",
            commonErrors: ["Saying ions conduct — it's electrons."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u1-bond-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare ionic and covalent bonding.",
          parts: [
            { label: "a", prompt: "State which elements form each type.", marks: 2 },
            { label: "b", prompt: "Describe what happens to electrons in each.", marks: 2 },
            { label: "c", prompt: "Give two properties of ionic compounds.", marks: 2 },
            { label: "d", prompt: "Give two properties of covalent molecules.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bonding comparison", statement: "Ionic = transfer, lattice, high mp; covalent = sharing, molecules." },
            ],
            steps: [
              { part: "a", reasoning: "Ionic: metal + non-metal; covalent: non-metal + non-metal.", working: "\\text{metal/non-metal}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct element types.", working: "\\text{types}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Ionic: electron transferred → ions; covalent: electrons shared.", working: "\\text{transfer vs share}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State both mechanisms.", working: "\\text{mechanism}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "High melting point; conducts when molten/aqueous.", working: "\\text{mp,conduct}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Second property.", working: "\\text{2 props}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Low melting point; poor conductors (except graphite).", working: "\\text{low mp}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Second property.", working: "\\text{2 props}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) ionic=metal+nonmetal, covalent=nonmetal pairs (b) transfer vs share (c) high mp, conducts when dissolved (d) low mp, poor conductor",
            commonErrors: ["In (c), saying ionic compounds always conduct — only when ions free."],
            examinerNote: "M1 A1 for each part.",
          },
        },
        {
          id: "mypc4-u1-bond-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An ionic bond typically forms between...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A metal and a non-metal" },
              { id: "b", text: "Two non-metals" },
              { id: "c", text: "Two metals" },
              { id: "d", text: "Any two elements" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bond prediction", statement: "Metal + non-metal → ionic; non-metal pairs → covalent." },
            ],
            steps: [
              { reasoning: "Ionic = electron transfer between metal and non-metal.", working: "\\text{metal+nonmetal}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Metal and non-metal",
            commonErrors: ["Choosing two non-metals — that's covalent."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc4-u1-bond-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "When magnesium bonds with oxygen, what happens to the magnesium atom?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It loses 2 electrons to form Mg²⁺" },
              { id: "b", text: "It gains 2 electrons to form Mg²⁻" },
              { id: "c", text: "It shares electrons equally" },
              { id: "d", text: "Nothing changes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ion formation", statement: "Metal loses electrons → positive ion." },
            ],
            steps: [
              { reasoning: "Mg is a metal → loses electrons.", working: "Mg\\to Mg^{2+}", marks: 1, markCode: "M" },
              { reasoning: "Loses 2 electrons → charge +2.", working: "2e^-", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Loses 2e⁻ → Mg²⁺",
            commonErrors: ["Saying Mg gains electrons."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u1-bond-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many electrons does a Na⁺ ion have? (Sodium has 11 electrons in a neutral atom.)",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ion electrons", statement: "Na loses 1 electron → 10 electrons remain." },
            ],
            steps: [
              { reasoning: "11 − 1 = 10 electrons.", working: "11-1=10", marks: 1, markCode: "B" },
            ],
            finalAnswer: "10",
            commonErrors: ["Answering 11."],
            examinerNote: "B1 for 10.",
          },
        },
        {
          id: "mypc4-u1-bond-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "An oxygen atom forms O²⁻. How many electrons does it gain and how many electrons does it then have?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Ion formation", statement: "O gains 2 electrons → 8 + 2 = 10 electrons." },
            ],
            steps: [
              { reasoning: "O²⁻ charge −2 → gained 2 electrons.", working: "2e^-", marks: 1, markCode: "M" },
              { reasoning: "O has 8 electrons; +2 = 10.", working: "8+2=10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gains 2; has 10 electrons",
            commonErrors: ["Answering 8 for total electrons."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u1-bond-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A covalent bond involves...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sharing of electron pairs between atoms" },
              { id: "b", text: "Transfer of electrons" },
              { id: "c", text: "Attraction between ions" },
              { id: "d", text: "Movement of protons" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Covalent bond", statement: "Shared electron pair(s), usually between non-metals." },
            ],
            steps: [
              { reasoning: "Covalent = shared electrons.", working: "\\text{share}", marks: 1, markCode: "M" },
              { reasoning: "State mechanism.", working: "\\text{shared pair}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Shared electron pairs",
            commonErrors: ["Confusing with ionic transfer."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u1-bond-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How many shared electron pairs are there in a nitrogen molecule N₂, and what type of bond is it?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bond order", statement: "N₂ has a triple bond = 3 shared pairs." },
            ],
            steps: [
              { reasoning: "N₂ forms a triple covalent bond.", working: "N\\equiv N", marks: 1, markCode: "M" },
              { reasoning: "Triple bond = 3 shared electron pairs.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "\\text{triple}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 shared pairs (triple bond)",
            commonErrors: ["Answering 1 (single bond)."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u1-bond-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why do ionic compounds form giant lattice structures?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Each ion is attracted to many oppositely charged ions in all directions" },
              { id: "b", text: "Ions share electrons in a network" },
              { id: "c", text: "Ions are neutral particles" },
              { id: "d", text: "They contain only one type of ion" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ionic lattice", statement: "Opposite charges attract in all directions → giant lattice." },
            ],
            steps: [
              { reasoning: "Cations and anions attract each other.", working: "\\text{attraction}", marks: 1, markCode: "M" },
              { reasoning: "Each ion surrounded by many opposites → extended lattice.", working: "\\text{lattice}", marks: 1, markCode: "M" },
              { reasoning: "State reason.", working: "\\text{giant}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Opposite charges attract in all directions",
            commonErrors: ["Saying ions share electrons."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u1-bond-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In magnesium chloride MgCl₂, how many chloride ions are needed for each magnesium ion, and what is the charge on each chloride ion?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: -1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Charge balance", statement: "Total positive charge = total negative charge: Mg²⁺ needs 2 Cl⁻." },
            ],
            steps: [
              { reasoning: "Mg²⁺ has +2 charge; each Cl⁻ has −1.", working: "+2,-1", marks: 1, markCode: "M" },
              { reasoning: "Need 2 chloride ions to balance.", working: "2Cl^-", marks: 1, markCode: "M" },
              { reasoning: "State answers.", working: "2,-1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2 chloride ions; charge −1 each",
            commonErrors: ["Writing MgCl instead of MgCl₂."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u1-bond-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the charge on a chloride ion (Cl⁻)?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: -1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ion charge", statement: "Cl gains 1 electron → charge −1." },
            ],
            steps: [
              { reasoning: "One extra electron → −1 charge.", working: "-1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "−1",
            commonErrors: ["Answering +1."],
            examinerNote: "B1 for −1.",
          },
        },
        {
          id: "mypc4-u1-bond-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calcium has atomic number 20. How many electrons does it lose to form Ca²⁺, and how many protons does it have?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 20 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Ion formation", statement: "Group 2 metal loses 2 electrons; protons = atomic number." },
            ],
            steps: [
              { reasoning: "Ca²⁺ charge +2 → lost 2 electrons; protons = 20.", working: "2e^-,20p", marks: 1, markCode: "M" },
              { reasoning: "State both answers.", working: "2,20", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Loses 2 electrons; 20 protons",
            commonErrors: ["Saying protons change in ion formation."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u1-bond-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Types of chemical bonding.",
          parts: [
            { label: "a", prompt: "Define an ionic bond.", marks: 1 },
            { label: "b", prompt: "Describe what happens to electrons when sodium bonds with chlorine.", marks: 2 },
            { label: "c", prompt: "Give one example of a covalently bonded molecule and its bond type.", marks: 2 },
            { label: "d", prompt: "Describe metallic bonding in one sentence.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bonding types", statement: "Ionic = transfer; covalent = sharing; metallic = electron sea." },
            ],
            steps: [
              { part: "a", reasoning: "Electrostatic attraction between oppositely charged ions.", working: "\\text{ionic def}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Na loses 1 electron → Na⁺; Cl gains it → Cl⁻.", working: "Na^+Cl^-", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Opposite ions attract → ionic bond.", working: "\\text{attract}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "e.g. H₂O or CO₂ — covalent bonds.", working: "H_2O/CO_2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct example and bond type.", working: "\\text{covalent}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Positive metal ions attracted to delocalised electron sea.", working: "\\text{electron sea}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) ion attraction (b) Na loses e⁻, Cl gains (c) e.g. H₂O covalent (d) ions + electron sea",
            commonErrors: ["In (c), giving an ionic compound as example."],
            examinerNote: "A1 for (a), M1 A1 for (b), M1 A1 for (c), A1 for (d).",
          },
        },
        {
          id: "mypc4-u1-bond-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Predict bonding and properties.",
          parts: [
            { label: "a", prompt: "State the type of bond formed between each pair: NaCl, CO₂, MgO, Cl₂.", marks: 4 },
            { label: "b", prompt: "Explain why metals conduct electricity.", marks: 2 },
            { label: "c", prompt: "Compare the melting points of ionic and covalent molecular substances.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bond prediction", statement: "Metal+non-metal→ionic; non-metal pairs→covalent." },
            ],
            steps: [
              { part: "a", reasoning: "NaCl ionic, CO₂ covalent, MgO ionic, Cl₂ covalent.", working: "\\text{4 answers}", marks: 2, markCode: "M" },
              { part: "a", reasoning: "All four correct.", working: "\\text{correct}", marks: 2, markCode: "A" },
              { part: "b", reasoning: "Delocalised electrons in metallic bond move freely and carry charge.", working: "e^{-}\\ \\text{flow}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State explanation.", working: "\\text{conduct}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Ionic: high mp (strong lattice forces); covalent molecular: low mp (weak intermolecular forces).", working: "\\text{mp compare}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct comparison.", working: "\\text{high vs low}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) ionic, covalent, ionic, covalent (b) delocalised electrons (c) ionic high, molecular low",
            commonErrors: ["In (a), calling MgO covalent."],
            examinerNote: "M2 A2 for (a), M1 A1 for (b), M1 A1 for (c).",
          },
        },
      ],
    },
    {
      id: "mypc4-u1-structures",
      title: "Structures and Properties",
      skill: "Relate bonding and structure to physical properties of substances.",
      lesson: {
        sections: [
          {
            heading: "Giant structures",
            body: "**Ionic lattice**: strong electrostatic forces throughout → high mp, brittle, conducts when ions mobile. **Metallic**: delocalised electrons → conducts, malleable, high mp. **Covalent giant** (diamond, graphite, SiO₂): strong covalent bonds throughout → very high mp; diamond hardest, graphite conducts (delocalised electrons between layers) and slippery.",
          },
          {
            heading: "Simple molecular",
            body: "Small covalent molecules (H₂O, CO₂, I₂): weak intermolecular forces between molecules → low mp/bp, don't conduct. Graphite exception conducts due to delocalised electrons.",
          },
          {
            heading: "Property prediction",
            body: "Structure determines property: bonding type → forces → melting point, conductivity, hardness. Ionic solids brittle because like-charged ions align and repel when shifted.",
          },
        ],
        keyFormulas: [
          { name: "Ionic", statement: "Giant lattice; high mp; brittle; conducts dissolved" },
          { name: "Metallic", statement: "Delocalised e⁻; conducts; malleable" },
          { name: "Molecular", statement: "Weak forces; low mp; non-conductor" },
        ],
        workedExample: {
          problem: "Why does diamond have a very high melting point but graphite conducts electricity?",
          solution: "Diamond: every carbon covalently bonded to 4 others — huge energy to break. Graphite: layers with delocalised electrons between them → conducts; weak forces between layers → slippery.",
        },
      },
      questions: [
        {
          id: "mypc4-u1-struct-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why do simple molecular substances have low melting points?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Weak intermolecular forces between molecules" },
              { id: "b", text: "Strong covalent bonds" },
              { id: "c", text: "Ionic bonds" },
              { id: "d", text: "Metallic bonds" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Molecular solids", statement: "Weak forces between molecules → low mp." },
            ],
            steps: [
              { reasoning: "Covalent bonds within molecule strong, but between molecules weak.", working: "\\text{weak forces}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Weak intermolecular forces",
            commonErrors: ["Saying covalent bonds are weak — they're strong but only within molecules."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc4-u1-struct-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is graphite used as a lubricant and electrode?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Layers slide easily (lubricant) and delocalised electrons conduct (electrode)" },
              { id: "b", text: "It is very hard" },
              { id: "c", text: "It is an insulator" },
              { id: "d", text: "It melts easily" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Graphite structure", statement: "Layered structure: weak interlayer forces + delocalised electrons." },
            ],
            steps: [
              { reasoning: "Weak forces between layers → slippery/lubricant.", working: "\\text{layers slide}", marks: 1, markCode: "M" },
              { reasoning: "Delocalised electrons → conductor.", working: "\\text{conducts}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Slippery layers + conducts electricity",
            commonErrors: ["Confusing graphite with diamond."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u1-struct-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why ionic compounds are brittle.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "When layers shift, like charges come opposite and repel, causing the lattice to break" },
              { id: "b", text: "Ions are weakly bonded" },
              { id: "c", text: "They have low melting points" },
              { id: "d", text: "They are always liquids" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ionic brittleness", statement: "Like-charge repulsion on lattice shift → fracture." },
            ],
            steps: [
              { reasoning: "Ions in lattice held by electrostatic attraction.", working: "\\text{lattice}", marks: 1, markCode: "M" },
              { reasoning: "Shift → like charges adjacent → repel → crystal shatters.", working: "\\text{repulsion}", marks: 1, markCode: "M" },
              { reasoning: "State the result.", working: "\\text{brittle}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Like-charge repulsion fractures lattice",
            commonErrors: ["Saying ionic bonds are weak."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u1-struct-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Three substances: NaCl, diamond, and iodine (I₂).",
          parts: [
            { label: "a", prompt: "State the bonding/structure type of each.", marks: 3 },
            { label: "b", prompt: "Predict which has the highest melting point and explain.", marks: 2 },
            { label: "c", prompt: "Predict which conducts electricity when solid and explain.", marks: 2 },
            { label: "d", prompt: "Explain why iodine is a poor conductor but diamond is also poor.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Structure-property", statement: "Bonding type determines physical properties." },
            ],
            steps: [
              { part: "a", reasoning: "NaCl: ionic lattice; diamond: giant covalent; I₂: simple molecular.", working: "\\text{3 types}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All three correct.", working: "\\text{correct}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", working: "\\text{all}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Diamond — strongest covalent network, every atom bonded to 4 others.", working: "\\text{diamond}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explain strength.", working: "\\text{network}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "None conduct as solids — NaCl ions fixed, diamond no free electrons, I₂ molecules neutral.", working: "\\text{none}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Explain each briefly.", working: "\\text{no mobile charge}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "I₂: no charged particles; diamond: all electrons in covalent bonds — no delocalised electrons.", working: "\\text{no free charge}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) ionic, giant covalent, molecular (b) diamond highest mp (c) none as solids (d) no mobile charge carriers",
            commonErrors: ["In (c), saying NaCl conducts as solid."],
            examinerNote: "M1 M1 A1 for (a), M1 A1 for (b), M1 A1 for (c), A1 for (d).",
          },
        },
        {
          id: "mypc4-u1-struct-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which substance has a giant covalent structure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Diamond" },
              { id: "b", text: "Water" },
              { id: "c", text: "Carbon dioxide" },
              { id: "d", text: "Sodium chloride" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Giant covalent", statement: "Atoms covalently bonded in a continuous network, e.g. diamond." },
            ],
            steps: [
              { reasoning: "Diamond = every carbon bonded to 4 others in a network.", working: "\\text{diamond}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Diamond",
            commonErrors: ["Choosing CO₂ — that's a simple molecule."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc4-u1-struct-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why does graphite conduct electricity while diamond does not?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Graphite has delocalised electrons between its layers; diamond has all electrons in covalent bonds" },
              { id: "b", text: "Graphite is a metal" },
              { id: "c", text: "Diamond is too hard to conduct" },
              { id: "d", text: "Graphite contains ions" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Graphite vs diamond", statement: "Graphite: delocalised electrons; diamond: all electrons bonded." },
            ],
            steps: [
              { reasoning: "Graphite has one delocalised electron per carbon between layers.", working: "\\text{delocalised}", marks: 1, markCode: "M" },
              { reasoning: "Diamond: every electron in a covalent bond → no free charge carriers.", working: "\\text{diamond}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Graphite has delocalised electrons",
            commonErrors: ["Saying diamond has free electrons."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u1-struct-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a diamond crystal, each carbon atom is covalently bonded to how many other carbon atoms?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Diamond structure", statement: "Each C forms 4 covalent bonds in a tetrahedral network." },
            ],
            steps: [
              { reasoning: "Diamond: 4 bonds per carbon.", working: "4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "4",
            commonErrors: ["Answering 3 (that's graphite)."],
            examinerNote: "B1 for 4.",
          },
        },
        {
          id: "mypc4-u1-struct-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Sodium chloride melts at 801 °C and iodine melts at 114 °C. What is the difference in melting points?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 687, unit: "°C" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Melting point", statement: "Ionic lattice mp far exceeds molecular mp." },
            ],
            steps: [
              { reasoning: "801 − 114 = 687 °C.", working: "801-114=687", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "687\\text{ °C}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "687 °C",
            commonErrors: ["Subtracting in the wrong order."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u1-struct-q9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why ionic compounds are brittle.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "When the lattice is shifted, like charges become adjacent and repel, shattering the crystal" },
              { id: "b", text: "Ionic bonds are weak" },
              { id: "c", text: "Ions are free to move" },
              { id: "d", text: "The lattice has gaps" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ionic brittleness", statement: "Like-charge repulsion on lattice shift → fracture." },
            ],
            steps: [
              { reasoning: "Ions held by electrostatic attraction in lattice.", working: "\\text{lattice}", marks: 1, markCode: "M" },
              { reasoning: "Shift → like charges opposite → repulsion breaks crystal.", working: "\\text{repel}", marks: 1, markCode: "M" },
              { reasoning: "State result.", working: "\\text{brittle}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Like-charge repulsion fractures lattice",
            commonErrors: ["Saying ionic bonds are weak."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u1-struct-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A molecular covalent substance melts at −95 °C and an ionic compound melts at 700 °C. By how many degrees Celsius is the ionic compound's melting point higher?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 795, unit: "°C" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Structure vs mp", statement: "Giant ionic lattice mp ≫ simple molecular mp." },
            ],
            steps: [
              { reasoning: "700 − (−95) = 795 °C.", working: "700-(-95)=795", marks: 1, markCode: "M" },
              { reasoning: "Handle negative sign correctly.", working: "795", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "795\\text{ °C}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "795 °C",
            commonErrors: ["Computing 700 − 95 = 605."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u1-struct-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why is graphite used as a lubricant in pencil leads and machinery?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Weak forces between its layers allow them to slide over each other easily" },
              { id: "b", text: "It is extremely hard" },
              { id: "c", text: "It melts at low temperature" },
              { id: "d", text: "It is soluble in oil" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Graphite layers", statement: "Weak interlayer forces → layers slide → lubricant." },
            ],
            steps: [
              { reasoning: "Graphite = stacked layers of carbon sheets.", working: "\\text{layers}", marks: 1, markCode: "M" },
              { reasoning: "Weak forces between layers → slip easily.", working: "\\text{weak forces}", marks: 1, markCode: "M" },
              { reasoning: "State consequence.", working: "\\text{lubricant}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Layers slide due to weak interlayer forces",
            commonErrors: ["Confusing with diamond's hardness."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u1-struct-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In diamond each carbon atom forms 4 covalent bonds; in graphite each forms 3. How many more bonds per atom does diamond have, and why does this matter?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bond count", statement: "More bonds per atom → stronger network → higher mp." },
            ],
            steps: [
              { reasoning: "4 − 3 = 1 more bond per atom in diamond.", working: "4-3=1", marks: 1, markCode: "M" },
              { reasoning: "Extra bond strengthens network → higher melting point.", working: "\\text{stronger}", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1 more bond per atom",
            commonErrors: ["Answering 4 instead of the difference."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u1-struct-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many electrons does each carbon atom contribute to the 'sea' of delocalised electrons in graphite?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1" },
              { id: "b", text: "2" },
              { id: "c", text: "3" },
              { id: "d", text: "4" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Graphite bonding", statement: "Each C forms 3 bonds, leaving 1 electron delocalised." },
            ],
            steps: [
              { reasoning: "3 bonds use 3 electrons; the 4th is delocalised → 1 per atom.", working: "1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "1",
            commonErrors: ["Answering 3."],
            examinerNote: "B1 for 1.",
          },
        },
        {
          id: "mypc4-u1-struct-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A simple molecular substance consists of small covalent molecules. What can you predict about its melting point and electrical conductivity?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Molecular substances", statement: "Weak intermolecular forces → low mp; no ions/free electrons → non-conductor." },
            ],
            steps: [
              { reasoning: "Low melting point and does not conduct electricity.", working: "\\text{low mp, no conduct}", marks: 1, markCode: "M" },
              { reasoning: "Both predictions correct.", working: "\\text{both}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Low mp; does not conduct",
            commonErrors: ["Predicting high melting point."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u1-struct-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Three substances: NaCl, diamond and CO₂.",
          parts: [
            { label: "a", prompt: "Name the structure type of each.", marks: 3 },
            { label: "b", prompt: "Predict which has the highest melting point and explain why.", marks: 2 },
            { label: "c", prompt: "Predict which conducts electricity when dissolved in water.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Structure-property", statement: "Bonding/structure determines mp and conductivity." },
            ],
            steps: [
              { part: "a", reasoning: "NaCl ionic lattice; diamond giant covalent; CO₂ simple molecular.", working: "\\text{3 types}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All three correct.", working: "\\text{correct}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", working: "\\text{all}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Diamond — strongest covalent network.", working: "\\text{diamond}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Every atom bonded to 4 others → huge energy to break.", working: "\\text{network}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "NaCl — ions free to move when dissolved.", working: "\\text{NaCl}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) ionic, giant covalent, molecular (b) diamond (c) NaCl",
            commonErrors: ["In (b), choosing NaCl without comparing bond strength."],
            examinerNote: "M1 M1 A1 for (a), M1 A1 for (b), A1 for (c).",
          },
        },
        {
          id: "mypc4-u1-struct-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Three mystery solids: A melts at 65 °C, conducts when molten but not solid; B melts at 1200 °C and conducts as solid; C melts at −10 °C and never conducts.",
          parts: [
            { label: "a", prompt: "Deduce the structure type of each substance.", marks: 3 },
            { label: "b", prompt: "Explain your reasoning for each deduction.", marks: 3 },
            { label: "c", prompt: "Give one example of a real substance matching B.", marks: 1 },
            { label: "d", prompt: "Explain why C cannot conduct even when liquid.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Property deduction", statement: "mp and conductivity reveal structure type." },
            ],
            steps: [
              { part: "a", reasoning: "A = ionic; B = metallic; C = simple molecular.", working: "\\text{A,B,C}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All three correct.", working: "\\text{correct}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", working: "\\text{all}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "A: moderate mp + conducts only when ions mobile (molten).", working: "\\text{A reason}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "B: very high mp + conducts as solid → delocalised electrons.", working: "\\text{B reason}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "C: very low mp → weak intermolecular forces.", working: "\\text{C reason}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "e.g. copper, iron or any metal.", working: "\\text{metal}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "C has neutral molecules — no ions or free electrons even when liquid.", working: "\\text{no charge carriers}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) A ionic, B metallic, C molecular (b) conductivity/mp reasoning (c) e.g. copper (d) neutral molecules",
            commonErrors: ["In (a), swapping A and C."],
            examinerNote: "M1 M1 A1 for (a), M1 M1 A1 for (b), A1 for (c),(d).",
          },
        },
      ],
    },
  ],
};
