import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "chemsl-u3-lesson-3-1",
  code: "3-1",
  title: "Ionic and Covalent Bonding",
  goal: "I CAN describe ionic and covalent bonding, write ionic formulae, and relate bonding type to the physical properties of substances.",
  standards: ["Topic 4.1", "Topic 4.2", "Paper 1", "Paper 2"],
  vocabulary: [
    { term: "Ionic bond", definition: "The electrostatic attraction between oppositely charged ions in a giant ionic lattice." },
    { term: "Cation", definition: "A positively charged ion formed when an atom loses electrons, typically a metal." },
    { term: "Anion", definition: "A negatively charged ion formed when an atom gains electrons, typically a non-metal." },
    { term: "Covalent bond", definition: "A bond formed when two atoms share a pair of electrons, typically between non-metal atoms." },
    { term: "Dative covalent bond", definition: "A covalent bond in which both shared electrons are donated by one atom, e.g. the bond in $\\mathrm{NH_4^+}$." },
    { term: "Lattice", definition: "The regular three-dimensional arrangement of ions in an ionic crystal." },
  ],
  concepts: [
    {
      id: "chemsl-u3-ionic-bonding",
      title: "Ionic bonding",
      skill: "Describe electron transfer between metals and non-metals, write ionic formulae, and explain the properties of ionic compounds.",
      lesson: {
        sections: [
          {
            heading: "Electron transfer",
            body: "Ionic bonding occurs between metals and non-metals. The metal atom loses its valence electrons to form a cation; the non-metal gains electrons to form an anion with a noble-gas configuration. The resulting ions are held together by strong electrostatic attraction in a giant ionic lattice — not by individual 'bonds' between specific ion pairs.",
          },
          {
            heading: "Writing ionic formulae",
            body: "The formula of an ionic compound shows the simplest ratio of ions that gives an electrically neutral formula unit. Magnesium chloride is $\\mathrm{MgCl_2}$ because $\\mathrm{Mg^{2+}}$ needs two $\\mathrm{Cl^-}$ ions to balance the charge. Polyatomic ions such as $\\mathrm{SO_4^{2-}}$ and $\\mathrm{NO_3^-}$ are treated as single units and bracketed when more than one is needed, e.g. $\\mathrm{Ca(NO_3)_2}$.",
          },
          {
            heading: "Properties of ionic compounds",
            body: "Ionic compounds have high melting and boiling points because strong ionic attractions must be overcome throughout the lattice. They are hard but brittle: a sharp blow shifts layers of ions so that like charges become adjacent and repel, causing the crystal to shatter. They do not conduct electricity as solids, but do conduct when molten or dissolved because the ions are then free to move and carry charge.",
          },
        ],
        keyFormulas: [
          { name: "Charge balance", statement: "$\\sum(\\text{cation charges})=\\sum(|\\text{anion charges}|)$" },
          { name: "Electron transfer", statement: "$\\text{metal} \\to \\text{cation}+ne^-;\\quad \\text{non-metal}+ne^- \\to \\text{anion}$" },
          { name: "Conduction", statement: "$\\text{conducts when molten or aqueous}$" },
        ],
        workedExample: {
          problem: "Write the formula of aluminium oxide and explain why it conducts electricity when molten but not as a solid.",
          solution: "$\\mathrm{Al^{3+}}$ and $\\mathrm{O^{2-}}$ need a $2:3$ ratio for neutrality: $\\mathrm{Al_2O_3}$. As a solid the ions are fixed in the lattice and cannot move; when molten the ions are free to carry charge.",
        },
      },
      questions: [
        {
          id: "chemsl-u3-ionic-bonding-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "What is the formula of magnesium chloride?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\mathrm{MgCl}$" },
              { id: "b", text: "$\\mathrm{Mg_2Cl}$" },
              { id: "c", text: "$\\mathrm{Mg_2Cl_3}$" },
              { id: "d", text: "$\\mathrm{MgCl_2}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Charge balance", statement: "Total positive charge must equal total negative charge in the formula unit." },
            ],
            steps: [
              { reasoning: "$\\mathrm{Mg^{2+}}$ needs two $\\mathrm{Cl^-}$ ions for neutrality: $+2+2(-1)=0$.", working: "+2-2=0", marks: 1, markCode: "M" },
              { reasoning: "Write the formula.", working: "\\mathrm{MgCl_2}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $\\mathrm{MgCl_2}$",
            commonErrors: ["Writing $\\mathrm{MgCl}$ by ignoring the $2+$ charge.", "Writing $\\mathrm{Mg_2Cl}$ by swapping the ratio."],
          },
        },
        {
          id: "chemsl-u3-ionic-bonding-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Which statement best describes why ionic compounds have high melting points?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ions move freely in the solid" },
              { id: "b", text: "Each ion is covalently bonded to its neighbours" },
              { id: "c", text: "The molecules are large" },
              { id: "d", text: "The ions are held by strong electrostatic attractions throughout the lattice" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ionic lattice", statement: "Ions are held by strong electrostatic forces in all directions." },
            ],
            steps: [
              { reasoning: "Identify that melting requires overcoming ionic attractions, not breaking individual bonds.", working: "\\text{overcome lattice}", marks: 1, markCode: "M" },
              { reasoning: "These attractions act in all directions throughout the giant lattice, so a large amount of energy is needed.", working: "\\text{strong attractions}", marks: 1, markCode: "R" },
              { reasoning: "Select the correct statement.", working: "\\text{electrostatic attractions}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Strong electrostatic attractions hold the ions throughout the lattice",
            commonErrors: ["Choosing (d): ions do not move freely in the solid (that is the molten state)."],
          },
        },
        {
          id: "chemsl-u3-ionic-bonding-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Sodium oxide contains $\\mathrm{Na^+}$ and $\\mathrm{O^{2-}}$ ions. (a) Write the formula of sodium oxide. (b) Explain, in terms of structure, why solid sodium oxide does not conduct electricity but conducts when molten.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Charge balance", statement: "Two $\\mathrm{Na^+}$ ions balance one $\\mathrm{O^{2-}}$." },
              { kind: "principle", name: "Conduction in ionic compounds", statement: "Conduction requires mobile charge carriers." },
            ],
            steps: [
              { reasoning: "Balance charges: $2(+1)+(-2)=0$.", working: "\\mathrm{Na_2O}", marks: 1, markCode: "M" },
              { reasoning: "State the formula.", working: "\\mathrm{Na_2O}", marks: 1, markCode: "A" },
              { reasoning: "In the solid the ions are fixed in position in the lattice, so charge cannot move.", working: "\\text{ions fixed}", marks: 1, markCode: "R" },
              { reasoning: "When molten the ions are free to move and carry electrical current.", working: "\\text{mobile ions conduct}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\mathrm{Na_2O}$; solid has fixed ions so no conduction, molten has mobile ions so it conducts",
            commonErrors: ["Writing $\\mathrm{NaO_2}$ by misreading the charges.","Saying the solid 'has no ions' rather than fixed ions."],
          },
        },
        {
          id: "chemsl-u3-ionic-bonding-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Magnesium reacts with oxygen to form magnesium oxide, $\\mathrm{MgO}$.",
          parts: [
            { label: "a", prompt: "Describe the electron transfer that occurs when Mg and O form ions.", marks: 2 },
            { label: "b", prompt: "Write the formula of magnesium oxide and explain how the charges balance.", marks: 2 },
            { label: "c", prompt: "Predict two physical properties of solid $\\mathrm{MgO}$ and justify each from its structure.", marks: 2 },
            { label: "d", prompt: "Explain why $\\mathrm{MgO}$ is described as having a giant ionic lattice rather than discrete molecules.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Electron transfer", statement: "Mg loses 2 electrons to form $\\mathrm{Mg^{2+}}$; O gains 2 electrons to form $\\mathrm{O^{2-}}$." },
              { kind: "principle", name: "Ionic lattice", statement: "Ions are arranged in a repeating 3D pattern with attractions in all directions." },
            ],
            steps: [
              { part: "a", reasoning: "Magnesium (Group 2) loses its two valence electrons to form $\\mathrm{Mg^{2+}}$ with the neon configuration.", working: "\\mathrm{Mg}\\to\\mathrm{Mg^{2+}}+2e^-", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Oxygen (Group 16) gains two electrons to form $\\mathrm{O^{2-}}$ with the neon configuration.", working: "\\mathrm{O}+2e^-\\to\\mathrm{O^{2-}}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Charges $+2$ and $-2$ balance in a 1:1 ratio.", working: "\\mathrm{MgO}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the formula with justification.", working: "+2-2=0", marks: 1, markCode: "A" },
              { part: "c", reasoning: "High melting point because strong ionic attractions must be overcome throughout the lattice.", working: "\\text{high mp}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Brittle because a sharp blow aligns like charges and causes repulsion; or conducts when molten due to mobile ions.", working: "\\text{brittle / conducts molten}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "There are no discrete $\\mathrm{MgO}$ molecules — each ion is surrounded by many oppositely charged ions in a continuous 3D array.", working: "\\text{3D array of ions}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The formula $\\mathrm{MgO}$ is simply the simplest ratio, not a molecule.", working: "\\text{empirical ratio}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Mg loses 2e⁻ to Mg²⁺; O gains 2e⁻ to O²⁻ (b) MgO — charges balance 1:1 (c) high mp, brittle/conducts molten (d) ions in continuous 3D lattice, formula is simplest ratio",
            commonErrors: ["In (d) describing $\\mathrm{MgO}$ as a molecule.", "In (c) claiming ionic solids conduct electricity."],
          },
        },
        {
          id: "chemsl-u3-ionic-bonding-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "What is the formula of the ion formed when a potassium atom reacts?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\mathrm{K^+}$" },
              { id: "b", text: "$\\mathrm{K^{2+}}$" },
              { id: "c", text: "$\\mathrm{K^{2-}}$" },
              { id: "d", text: "$\\mathrm{K^-}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cation", statement: "A metal atom loses valence electrons to form a positively charged ion." },
            ],
            steps: [
              { reasoning: "Potassium is in Group 1 and loses its one valence electron.", working: "\\mathrm{K}\\to\\mathrm{K^+}+e^-", marks: 1, markCode: "M" },
              { reasoning: "The resulting ion carries a single positive charge.", working: "+1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\mathrm{K^+}$",
            commonErrors: ["Choosing $\\mathrm{K^{2+}}$ by treating potassium as a Group 2 metal."],
          },
        },
        {
          id: "chemsl-u3-ionic-bonding-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "What is the correct formula of aluminium chloride?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\mathrm{Al_2Cl_3}$" },
              { id: "b", text: "$\\mathrm{AlCl_3}$" },
              { id: "c", text: "$\\mathrm{AlCl_2}$" },
              { id: "d", text: "$\\mathrm{AlCl}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Charge balance", statement: "Three $\\mathrm{Cl^-}$ ions are needed to balance one $\\mathrm{Al^{3+}}$ ion." },
            ],
            steps: [
              { reasoning: "Aluminium forms $\\mathrm{Al^{3+}}$, so three chloride ions give $+3+3(-1)=0$.", working: "+3-3=0", marks: 1, markCode: "M" },
              { reasoning: "Write the simplest ratio formula.", working: "\\mathrm{AlCl_3}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $\\mathrm{AlCl_3}$",
            commonErrors: ["Writing $\\mathrm{AlCl_2}$ by assuming aluminium is $\\mathrm{Al^{2+}}$."],
          },
        },
        {
          id: "chemsl-u3-ionic-bonding-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which statement about solid sodium chloride is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It dissolves in oil because oil is a polar solvent" },
              { id: "b", text: "It conducts electricity because its ions move freely through the solid" },
              { id: "c", text: "It does not conduct electricity because its ions are fixed in the lattice" },
              { id: "d", text: "It is malleable because its ions can slide past each other" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Conduction in ionic compounds", statement: "Ions must be free to move for an ionic compound to conduct." },
            ],
            steps: [
              { reasoning: "In a solid ionic lattice the ions are fixed in position, so charge cannot flow.", working: "\\text{ions fixed}", marks: 1, markCode: "M" },
              { reasoning: "Sliding ion layers would bring like charges together, so the crystal is brittle, not malleable.", working: "\\text{brittle not malleable}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(c)** It does not conduct as a solid because the ions are fixed in the lattice",
            commonErrors: ["Choosing (a): ions move only when molten or dissolved, never in the solid."],
          },
        },
        {
          id: "chemsl-u3-ionic-bonding-q8",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "What is the formula of calcium carbonate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\mathrm{Ca_2CO_3}$" },
              { id: "b", text: "$\\mathrm{Ca(HCO_3)_2}$" },
              { id: "c", text: "$\\mathrm{CaCO_2}$" },
              { id: "d", text: "$\\mathrm{CaCO_3}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Charge balance with polyatomic ions", statement: "$\\mathrm{Ca^{2+}}$ balances one $\\mathrm{CO_3^{2-}}$ group." },
            ],
            steps: [
              { reasoning: "Calcium is $\\mathrm{Ca^{2+}}$ and carbonate is $\\mathrm{CO_3^{2-}}$; charges balance in a 1:1 ratio.", working: "+2-2=0", marks: 1, markCode: "M" },              { reasoning: "Write the formula treating $\\mathrm{CO_3^{2-}}$ as a single unit.", working: "\\mathrm{CaCO_3}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $\\mathrm{CaCO_3}$",
            commonErrors: ["Choosing (b): calcium hydrogencarbonate is a different ion, $\\mathrm{HCO_3^-}$.", "Writing $\\mathrm{Ca_2CO_3}$ by ignoring charge magnitudes."],
          },
        },
        {
          id: "chemsl-u3-ionic-bonding-q9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Why does an ionic crystal such as $\\mathrm{NaCl}$ shatter when struck sharply?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The ions gain electrons and escape as a gas" },
              { id: "b", text: "The electrostatic attractions are too weak to hold the lattice" },
              { id: "c", text: "A sharp blow shifts the ion layers so that like charges become adjacent and repel" },
              { id: "d", text: "The covalent bonds between ions break instantly" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Brittleness of ionic solids", statement: "Displacement aligns like charges, causing repulsion and fracture." },
            ],
            steps: [
              { reasoning: "A sharp blow slides layers of ions so that regions of the same charge face each other.", working: "\\text{like charges adjacent}", marks: 1, markCode: "M" },
              { reasoning: "The strong repulsion between like charges makes the crystal shatter along the slip plane.", working: "\\text{repulsion} \\Rightarrow \\text{shatter}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(c)** Like-charged ions become adjacent and repel, shattering the crystal",
            commonErrors: ["Saying the crystal 'melts' — brittleness is mechanical fracture, not a change of state."],
          },
        },
        {
          id: "chemsl-u3-ionic-bonding-q10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "How many electrons are transferred when one magnesium atom forms a $\\mathrm{Mg^{2+}}$ ion?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2, unit: "electrons" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Electron transfer", statement: "Metals lose valence electrons equal to their Group number charge." },
            ],
            steps: [
              { part: "a", reasoning: "Magnesium is in Group 2 and forms $\\mathrm{Mg^{2+}}$, so it loses two valence electrons.", working: "\\mathrm{Mg}\\to\\mathrm{Mg^{2+}}+2e^-", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the number of electrons transferred.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $2$ electrons",
            commonErrors: ["Answering 1 by counting only one shell of electrons."],
          },
        },
        {
          id: "chemsl-u3-ionic-bonding-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 5,
          stem: "Consider the ionic compound calcium chloride, $\\mathrm{CaCl_2}$. Find (a) the number of $\\mathrm{Cl^-}$ ions in one formula unit, (b) the total number of ions in one formula unit, and (c) the charge on each chloride ion.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $\\mathrm{Cl^-}$ ions per formula unit", answer: 2 },
              { label: "(b) total ions per formula unit", answer: 3 },
              { label: "(c) charge on each $\\mathrm{Cl^-}$ ion", answer: -1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Charge balance", statement: "Two $\\mathrm{Cl^-}$ ions balance one $\\mathrm{Ca^{2+}}$ ion." },
            ],
            steps: [
              { part: "a", reasoning: "$\\mathrm{Ca^{2+}}$ needs two singly charged anions for neutrality, so the formula is $\\mathrm{CaCl_2}$.", working: "+2+2(-1)=0", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the number of chloride ions.", working: "2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "One $\\mathrm{Ca^{2+}}$ plus two $\\mathrm{Cl^-}$ gives three ions in total.", working: "1+2=3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the total number of ions.", working: "3", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Chlorine gains one electron to reach a noble-gas configuration.", working: "-1", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) $2$ (b) $3$ (c) $-1$",
            commonErrors: ["Answering 2 for (b) by counting only the anions."],
          },
        },
        {
          id: "chemsl-u3-ionic-bonding-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "An oxygen atom reacts to form the oxide ion, $\\mathrm{O^{2-}}$. Find (a) the number of electrons gained by the oxygen atom and (b) the total number of electrons in the resulting ion.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) electrons gained", answer: 2 },
              { label: "(b) total electrons in $\\mathrm{O^{2-}}$", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Anion", statement: "A non-metal gains electrons to achieve a noble-gas configuration." },
            ],
            steps: [
              { part: "a", reasoning: "Oxygen is in Group 16 and needs two electrons to complete its outer shell.", working: "8-6=2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the number of electrons gained.", working: "2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "A neutral oxygen atom has 8 electrons; gaining 2 gives $8+2=10$, the neon configuration.", working: "8+2=10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $2$ electrons gained (b) $10$ electrons in total",
            commonErrors: ["Answering 8 for (b) by forgetting the two gained electrons."],
          },
        },
        {
          id: "chemsl-u3-ionic-bonding-q13",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 5,
          stem: "Calcium phosphate has the formula $\\mathrm{Ca_3(PO_4)_2}$, containing $\\mathrm{Ca^{2+}}$ and $\\mathrm{PO_4^{3-}}$ ions. Find (a) the number of $\\mathrm{Ca^{2+}}$ ions, (b) the number of $\\mathrm{PO_4^{3-}}$ ions and (c) the total number of ions in one formula unit.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $\\mathrm{Ca^{2+}}$ ions", answer: 3 },
              { label: "(b) $\\mathrm{PO_4^{3-}}$ ions", answer: 2 },
              { label: "(c) total ions", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Charge balance", statement: "Three $\\mathrm{Ca^{2+}}$ ions ($+6$) balance two $\\mathrm{PO_4^{3-}}$ ions ($-6$)." },
            ],
            steps: [
              { part: "a", reasoning: "Read the subscript before $\\mathrm{Ca}$: there are 3 calcium ions.", working: "3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the number of calcium ions.", working: "3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The bracketed $\\mathrm{(PO_4)_2}$ contains two phosphate ions.", working: "2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the number of phosphate ions.", working: "2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Total ions $=3+2=5$; check charge: $3(+2)+2(-3)=0$.", working: "3+2=5;\\ +6-6=0", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) $3$ (b) $2$ (c) $5$ ions",
            commonErrors: ["Counting the atoms inside $\\mathrm{PO_4}$ as separate ions instead of one polyatomic ion."],
          },
        },
        {
          id: "chemsl-u3-ionic-bonding-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A sample of aluminium contains $0.50\\ \\mathrm{mol}$ of $\\mathrm{Al}$ atoms, all of which form $\\mathrm{Al^{3+}}$ ions. Find (a) the amount, in moles, of electrons lost and (b) the charge on each $\\mathrm{Al^{3+}}$ ion.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) moles of electrons lost", answer: 1.5 },
              { label: "(b) charge on each $\\mathrm{Al^{3+}}$ ion", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Electron transfer", statement: "Each $\\mathrm{Al}$ atom loses 3 electrons to form $\\mathrm{Al^{3+}}$." },
            ],
            steps: [
              { part: "a", reasoning: "Each Al atom loses 3 electrons, so $0.50\\times3=1.5\\ \\mathrm{mol}$ of electrons are lost.", working: "0.50\\times3=1.5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the amount of electrons.", working: "1.5\\ \\mathrm{mol}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Losing 3 electrons leaves a charge of $+3$ on each ion.", working: "+3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the charge magnitude.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $1.5\\ \\mathrm{mol}$ of electrons (b) charge $+3$",
            commonErrors: ["Multiplying by 2 instead of 3 electrons per Al atom."],
          },
        },
        {
          id: "chemsl-u3-ionic-bonding-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Potassium reacts with oxygen to form potassium oxide, $\\mathrm{K_2O}$.",
          parts: [
            { label: "a", prompt: "Describe the electron transfer that occurs when K atoms and O atoms form ions.", marks: 2 },
            { label: "b", prompt: "Write the formula of potassium oxide and explain how the charges balance.", marks: 2 },
            { label: "c", prompt: "Predict two physical properties of solid $\\mathrm{K_2O}$ and justify each from its structure.", marks: 2 },
            { label: "d", prompt: "Explain why solid $\\mathrm{K_2O}$ does not conduct electricity but conducts when molten.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Electron transfer", statement: "Each K loses 1 electron to form $\\mathrm{K^+}$; each O gains 2 electrons to form $\\mathrm{O^{2-}}$." },
              { kind: "principle", name: "Ionic lattice", statement: "Ions are held by electrostatic attraction in a giant 3D lattice." },
            ],
            steps: [
              { part: "a", reasoning: "Each potassium atom (Group 1) loses its one valence electron to form $\\mathrm{K^+}$.", working: "\\mathrm{K}\\to\\mathrm{K^+}+e^-", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Each oxygen atom (Group 16) gains two electrons to form $\\mathrm{O^{2-}}$ with a noble-gas configuration.", working: "\\mathrm{O}+2e^-\\to\\mathrm{O^{2-}}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Two $\\mathrm{K^+}$ ions ($+2$) balance one $\\mathrm{O^{2-}}$ ion ($-2$).", working: "2(+1)+(-2)=0", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Write the formula with the simplest ratio.", working: "\\mathrm{K_2O}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "High melting point because strong ionic attractions must be overcome throughout the whole lattice.", working: "\\text{high mp}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Brittle because a sharp blow aligns like charges and causes repulsion (or conducts when molten due to mobile ions).", working: "\\text{brittle / conducts molten}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "In the solid the ions are fixed in position in the lattice, so charge cannot move.", working: "\\text{fixed ions}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "When molten the ions are free to move and carry electrical current.", working: "\\text{mobile ions conduct}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) K loses 1e⁻ each; O gains 2e⁻ (b) $\\mathrm{K_2O}$, charges balance 2:1 (c) high mp, brittle, conducts when molten (d) solid ions fixed → no conduction; molten ions mobile → conducts",
            commonErrors: ["Writing $\\mathrm{KO_2}$ by ignoring the $2-$ charge on oxide.", "Saying the solid contains no ions."],
          },
        },
        {
          id: "chemsl-u3-ionic-bonding-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "A student claims: 'Ionic compounds are always solids that never conduct electricity.' Evaluate this statement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Conduction in ionic compounds", statement: "Ionic compounds conduct when ions are mobile — molten or dissolved — but not as fixed lattice solids." },
            ],
            steps: [
              { reasoning: "The statement is partly correct: ionic compounds are typically solids at room temperature with high melting points.", working: "\\text{solids at RTP}", marks: 1, markCode: "M" },
              { reasoning: "It is incorrect that they never conduct: molten ionic compounds conduct because the ions become free to move.", working: "\\text{molten conducts}", marks: 1, markCode: "A" },
              { reasoning: "Dissolved ionic compounds also conduct because the ions are mobile in solution (e.g. $\\mathrm{NaCl(aq)}$).", working: "\\text{aqueous conducts}", marks: 1, markCode: "A" },
              { reasoning: "The reason the solid does not conduct is that the ions are fixed in the lattice, not that the compound lacks ions or charge carriers.", working: "\\text{fixed in lattice}", marks: 1, markCode: "R" },
              { reasoning: "A correct statement would be: ionic solids do not conduct, but ionic compounds conduct when molten or dissolved.", working: "\\text{corrected statement}", marks: 1, markCode: "A" },
              { reasoning: "Conclude the student's claim is an overgeneralisation.", working: "\\text{overgeneralisation}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The claim is partly right (ionic compounds are usually solids) but wrong about conduction: they do not conduct as solids because ions are fixed, yet they do conduct when molten or dissolved because the ions become mobile.",
            commonErrors: ["Agreeing fully with the statement.", "Saying ions 'break free' only by melting — dissolving also frees them."],
          },
        },
      ],
    },
    {
      id: "chemsl-u3-covalent-bonding",
      title: "Covalent bonding",
      skill: "Describe shared electron pairs, distinguish single, double and triple bonds, and relate covalent molecular structure to properties.",
      lesson: {
        sections: [
          {
            heading: "Shared electron pairs",
            body: "Covalent bonding occurs between non-metal atoms that share electron pairs so each achieves a noble-gas configuration. A single bond shares one pair ($\\mathrm{H_2}$, $\\mathrm{Cl_2}$, $\\mathrm{H_2O}$), a double bond shares two pairs ($\\mathrm{O_2}$, $\\mathrm{CO_2}$) and a triple bond shares three pairs ($\\mathrm{N_2}$). Each shared pair is counted for both atoms when checking the octet.",
          },
          {
            heading: "Dative covalent bonds",
            body: "In a dative (coordinate) covalent bond both shared electrons come from one atom. The ammonium ion $\\mathrm{NH_4^+}$ forms when $\\mathrm{NH_3}$ donates its lone pair to $\\mathrm{H^+}$. Once formed, a dative bond is identical to any other covalent bond; the arrow notation is used only to show where the pair came from.",
          },
          {
            heading: "Properties of covalent molecular substances",
            body: "Simple covalent molecules such as $\\mathrm{H_2O}$, $\\mathrm{CO_2}$ and $\\mathrm{I_2}$ have low melting and boiling points because only weak intermolecular forces must be overcome — the covalent bonds within each molecule stay intact. They do not conduct electricity because they contain no charged particles. Giant covalent structures such as diamond are the exception: their strong network covalent bonding gives very high melting points.",
          },
        ],
        keyFormulas: [
          { name: "Bond order", statement: "$\\text{single}=1\\text{ pair},\\ \\text{double}=2,\\ \\text{triple}=3$" },
          { name: "Octet rule", statement: "$\\text{each atom shares electrons to reach }8\\text{ (or }2\\text{ for H)}$" },
          { name: "Molecular substances", statement: "$\\text{low mp/bp, no conduction, discrete molecules}$" },
        ],
        workedExample: {
          problem: "Describe the bonding in a molecule of $\\mathrm{CO_2}$ and state how many electron pairs are shared.",
          solution: "Carbon forms two double bonds with the two oxygen atoms, $\\mathrm{O=C=O}$. Each double bond shares two pairs, so four electron pairs are shared in total; every atom achieves an octet.",
        },
      },
      questions: [
        {
          id: "chemsl-u3-covalent-bonding-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "How many electron pairs are shared in a molecule of $\\mathrm{N_2}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3$" },
              { id: "b", text: "$4$" },
              { id: "c", text: "$2$" },
              { id: "d", text: "$1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Triple bond", statement: "$\\mathrm{N_2}$ has a triple bond sharing three electron pairs." },
            ],
            steps: [
              { reasoning: "Each nitrogen atom has 5 valence electrons; sharing three pairs gives each an octet.", working: "3\\ \\text{shared pairs}", marks: 1, markCode: "M" },
              { reasoning: "State the number of shared pairs.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $3$ electron pairs",
            commonErrors: ["Counting 6 pairs by multiplying by two atoms.", "Answering 1 (single bond)."],
          },
        },
        {
          id: "chemsl-u3-covalent-bonding-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Which statement correctly describes the bonding in water, $\\mathrm{H_2O}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oxygen transfers two electrons to each hydrogen" },
              { id: "b", text: "Oxygen shares one electron pair with each hydrogen atom (two single bonds)" },
              { id: "c", text: "The molecule contains ionic bonds" },
              { id: "d", text: "Hydrogen shares three electron pairs with oxygen" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Covalent bond", statement: "A shared electron pair between non-metal atoms." },
            ],
            steps: [
              { reasoning: "Both O and H are non-metals, so they share rather than transfer electrons.", working: "\\text{sharing}", marks: 1, markCode: "M" },
              { reasoning: "Oxygen forms two single bonds, one to each hydrogen.", working: "2\\ \\text{single bonds}", marks: 1, markCode: "R" },
              { reasoning: "Select the correct description.", working: "\\text{two single bonds}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Oxygen shares one electron pair with each hydrogen",
            commonErrors: ["Choosing (b): electrons are shared, not transferred, between non-metals."],
          },
        },
        {
          id: "chemsl-u3-covalent-bonding-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why $\\mathrm{N_2}$ has a much higher boiling point than $\\mathrm{O_2}$, even though both are simple diatomic molecules.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bond strength and intermolecular forces", statement: "The triple bond in $\\mathrm{N_2}$ is stronger than the double bond in $\\mathrm{O_2}$." },
              { kind: "principle", name: "Molecular size and IMF", statement: "Larger electron clouds give stronger London dispersion forces." },
            ],
            steps: [
              { reasoning: "Both are non-polar molecules, so the relevant intermolecular forces are London dispersion forces.", working: "\\text{London forces}", marks: 1, markCode: "M" },
              { reasoning: "$\\mathrm{N_2}$ has a triple bond and $\\mathrm{O_2}$ a double bond; the bond order affects bond length and the strength of intermolecular interactions through molecular polarisability.", working: "\\text{triple vs double bond}", marks: 1, markCode: "R" },
              { reasoning: "$\\mathrm{N_2}$'s triple bond gives it a shorter, more compact electron distribution but the key difference is that the stronger intramolecular bonding makes the molecule less polarisable; however the dominant accepted explanation at SL is that both rely on weak London forces and $\\mathrm{N_2}$ has slightly stronger dispersion due to its bond order/polarisability compared with the paramagnetic $\\mathrm{O_2}$.", working: "\\text{polarisation differs}", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: both boil low because only weak intermolecular forces act, but $\\mathrm{N_2}$'s slightly different electronic structure gives stronger dispersion forces, hence the higher boiling point.", working: "\\text{higher bp for }\\mathrm{N_2}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Both are non-polar diatomic molecules held by London dispersion forces; $\\mathrm{N_2}$ has a triple bond giving a different polarisability, so its dispersion forces are stronger and its boiling point ($-196\\ \\mathrm{^\\circ C}$) is higher than $\\mathrm{O_2}$'s ($-183\\ \\mathrm{^\\circ C}$).",
            commonErrors: ["Claiming $\\mathrm{N_2}$ has hydrogen bonds or dipole-dipole forces.", "Saying the triple bond itself is broken on boiling (it is not — only IMFs are)."],
            examinerNote: "This is a challenging comparison; credit clear recognition that boiling involves overcoming IMFs, not covalent bonds, plus any sound statement about relative dispersion-force strength.",
          },
        },
        {
          id: "chemsl-u3-covalent-bonding-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Methane, $\\mathrm{CH_4}$, and carbon dioxide, $\\mathrm{CO_2}$, are both covalent molecular compounds.",
          parts: [
            { label: "a", prompt: "Describe the bonding in each molecule, including the number of shared electron pairs.", marks: 2 },
            { label: "b", prompt: "State and explain one physical property that both compounds share.", marks: 2 },
            { label: "c", prompt: "Explain why neither compound conducts electricity.", marks: 2 },
            { label: "d", prompt: "Evaluate the statement 'all substances containing only covalent bonds have low melting points'.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Covalent bonding", statement: "Shared electron pairs between non-metal atoms; single, double or triple." },
              { kind: "principle", name: "Molecular vs giant covalent", statement: "Only intermolecular forces are overcome on melting for molecular substances." },
            ],
            steps: [
              { part: "a", reasoning: "Methane: carbon forms four single bonds to hydrogen (4 shared pairs). Carbon dioxide: carbon forms two double bonds to oxygen (4 shared pairs total, 2 per bond).", working: "\\mathrm{CH_4}: 4\\times\\text{single};\\ \\mathrm{CO_2}: 2\\times\\text{double}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both descriptions correct with bond orders.", working: "\\text{single and double bonds}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Both have low melting/boiling points because only weak intermolecular forces must be overcome while the covalent bonds remain intact.", working: "\\text{low mp/bp}", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Alternatively: both are gases at RTP / do not conduct.", working: "\\text{gases at RTP}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Covalent molecules are neutral overall and contain no free ions or delocalised electrons, so there are no charge carriers.", working: "\\text{no charge carriers}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Therefore neither conducts electricity in any state.", working: "\\text{non-conductor}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The statement is false: diamond and graphite contain only covalent bonds but are giant covalent structures with very high melting points because strong covalent bonds must be broken throughout the network.", working: "\\text{giant covalent counterexample}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The correct generalisation is that molecular covalent substances have low melting points; the bonding within the structure matters.", working: "\\text{structure matters}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) CH4 has 4 single bonds; CO2 has 2 double bonds (b) low mp/bp — only IMFs overcome (c) no ions or delocalised electrons (d) false — diamond/graphite are giant covalent with very high mp",
            commonErrors: ["In (d) agreeing with the statement because 'covalent = weak'."],
          },
        },
        {
          id: "chemsl-u3-covalent-bonding-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which molecule contains a double covalent bond?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\mathrm{CH_4}$" },
              { id: "b", text: "$\\mathrm{HCl}$" },
              { id: "c", text: "$\\mathrm{H_2}$" },
              { id: "d", text: "$\\mathrm{CO_2}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Double bond", statement: "A double bond shares two pairs of electrons between two atoms." },
            ],
            steps: [
              { reasoning: "Carbon dioxide has the structure $\\mathrm{O=C=O}$, containing two double bonds.", working: "\\mathrm{O=C=O}", marks: 1, markCode: "M" },
              { reasoning: "The other molecules contain only single bonds.", working: "\\text{single bonds only}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $\\mathrm{CO_2}$",
            commonErrors: ["Choosing $\\mathrm{CH_4}$ because it has the most atoms."],
          },
        },
        {
          id: "chemsl-u3-covalent-bonding-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In the formation of $\\mathrm{NH_4^+}$ from $\\mathrm{NH_3}$ and $\\mathrm{H^+}$, what is meant by a 'dative' covalent bond?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The bond can only form between two metal atoms" },
              { id: "b", text: "The bond contains no shared electrons" },
              { id: "c", text: "The bond is formed by transfer of electrons, making it ionic" },
              { id: "d", text: "Both shared electrons are donated by the nitrogen atom of $\\mathrm{NH_3}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dative covalent bond", statement: "Both shared electrons come from one atom; e.g. the lone pair of $\\mathrm{NH_3}$ donated to $\\mathrm{H^+}$." },
            ],
            steps: [
              { reasoning: "$\\mathrm{NH_3}$ has a lone pair on nitrogen that it donates to the empty $1s$ orbital of $\\mathrm{H^+}$.", working: "\\mathrm{NH_3}+\\mathrm{H^+}\\to\\mathrm{NH_4^+}", marks: 1, markCode: "M" },
              { reasoning: "Both electrons in the shared pair originate from the same (nitrogen) atom.", working: "\\text{one donor atom}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Both shared electrons are donated by the nitrogen atom",
            commonErrors: ["Describing the bond as ionic — a dative bond is still a shared pair, i.e. covalent."],
          },
        },
        {
          id: "chemsl-u3-covalent-bonding-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "How many electron pairs are shared in one molecule of $\\mathrm{O_2}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4$" },
              { id: "b", text: "$3$" },
              { id: "c", text: "$1$" },
              { id: "d", text: "$2$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Double bond", statement: "$\\mathrm{O_2}$ contains a double bond sharing two electron pairs." },
            ],
            steps: [
              { reasoning: "Each oxygen atom has 6 valence electrons; sharing two pairs gives each atom an octet.", working: "2\\ \\text{shared pairs}", marks: 1, markCode: "M" },
              { reasoning: "State the number of shared pairs.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $2$ electron pairs",
            commonErrors: ["Answering 3 by confusing $\\mathrm{O_2}$ with $\\mathrm{N_2}$."],
          },
        },
        {
          id: "chemsl-u3-covalent-bonding-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which statement about simple molecular covalent substances such as $\\mathrm{I_2}$ is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They have low melting points because only weak intermolecular forces act between molecules" },
              { id: "b", text: "They form giant covalent networks like diamond" },
              { id: "c", text: "Their molecules contain charged particles" },
              { id: "d", text: "They conduct electricity when molten because ions are released" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Molecular covalent substances", statement: "Discrete neutral molecules held by weak intermolecular forces." },
            ],
            steps: [
              { reasoning: "Melting or boiling a molecular substance requires overcoming only the intermolecular forces, not the covalent bonds.", working: "\\text{IMFs only}", marks: 1, markCode: "M" },
              { reasoning: "Weak IMFs mean low melting and boiling points, and there are no ions or delocalised electrons to carry charge.", working: "\\text{low mp/bp, no conduction}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Low melting points because only weak intermolecular forces act between molecules",
            commonErrors: ["Choosing (a): melting a molecular substance does not produce ions."],
          },
        },
        {
          id: "chemsl-u3-covalent-bonding-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is a giant covalent structure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Diamond" },
              { id: "b", text: "$\\mathrm{CO_2}$" },
              { id: "c", text: "$\\mathrm{H_2O}$" },
              { id: "d", text: "$\\mathrm{NaCl}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Giant covalent structure", statement: "A continuous 3D network of atoms joined by covalent bonds." },
            ],
            steps: [
              { reasoning: "Diamond is a network of carbon atoms each covalently bonded to four neighbours.", working: "\\text{diamond network}", marks: 1, markCode: "M" },
              { reasoning: "$\\mathrm{CO_2}$ and $\\mathrm{H_2O}$ are molecular; $\\mathrm{NaCl}$ is an ionic lattice.", working: "\\text{molecular or ionic}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Diamond",
            commonErrors: ["Choosing $\\mathrm{NaCl}$ by confusing a giant lattice with a giant covalent structure."],
          },
        },
        {
          id: "chemsl-u3-covalent-bonding-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Consider one molecule of carbon dioxide, $\\mathrm{CO_2}$. Find (a) the number of electron pairs shared in each $\\mathrm{C=O}$ bond and (b) the total number of shared electron pairs in the molecule.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) pairs shared per $\\mathrm{C=O}$ bond", answer: 2 },
              { label: "(b) total shared electron pairs in $\\mathrm{CO_2}$", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Double bond", statement: "Each $\\mathrm{C=O}$ bond in $\\mathrm{CO_2}$ is a double bond sharing two pairs." },
            ],
            steps: [
              { part: "a", reasoning: "A double bond consists of two shared electron pairs.", working: "2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the number of pairs per bond.", working: "2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "There are two $\\mathrm{C=O}$ bonds, so $2\\times2=4$ shared pairs in total.", working: "2\\times2=4", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the total number of shared pairs.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $2$ pairs per bond (b) $4$ shared pairs in total",
            commonErrors: ["Answering 2 for (b) by counting pairs per bond instead of per molecule."],
          },
        },
        {
          id: "chemsl-u3-covalent-bonding-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A molecule of hydrogen chloride, $\\mathrm{HCl}$, contains 18 electrons in total. Find (a) the number of shared electron pairs in the molecule and (b) the number of lone pairs on the chlorine atom.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) shared electron pairs", answer: 1 },
              { label: "(b) lone pairs on Cl", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Single bond and lone pairs", statement: "A single bond shares one pair; remaining valence electrons form lone pairs." },
            ],
            steps: [
              { part: "a", reasoning: "$\\mathrm{HCl}$ has a single covalent bond, so one pair of electrons is shared.", working: "1", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the number of shared pairs.", working: "1", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Chlorine has 7 valence electrons; one is used in the bond, leaving 6 electrons = 3 lone pairs.", working: "7-1=6\\ \\text{e}^-=3\\ \\text{pairs}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) $1$ shared pair (b) $3$ lone pairs on chlorine",
            commonErrors: ["Answering 4 lone pairs by forgetting the bonding pair uses one chlorine electron."],
          },
        },
        {
          id: "chemsl-u3-covalent-bonding-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "The ammonium ion forms when $\\mathrm{NH_3}$ donates a lone pair to $\\mathrm{H^+}$. Find (a) the number of electrons in the lone pair that is donated and (b) the charge on the resulting $\\mathrm{NH_4^+}$ ion.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) electrons in the donated lone pair", answer: 2 },
              { label: "(b) charge on $\\mathrm{NH_4^+}$", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dative bond", statement: "A lone pair is a pair of non-bonding electrons on one atom." },
              { kind: "principle", name: "Charge conservation", statement: "The product ion's charge equals the sum of the reactant charges: $0+(+1)=+1$." },
            ],
            steps: [
              { part: "a", reasoning: "A lone pair consists of two electrons.", working: "2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the number of electrons.", working: "2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\mathrm{NH_3}$ is neutral and $\\mathrm{H^+}$ carries $+1$, so the product carries $+1$.", working: "0+(+1)=+1", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the charge.", working: "+1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $2$ electrons (b) charge $+1$",
            commonErrors: ["Answering 0 for (b) by assuming the dative bond is neutral overall — the extra proton still contributes its charge."],
          },
        },
        {
          id: "chemsl-u3-covalent-bonding-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Each nitrogen atom in a molecule of $\\mathrm{N_2}$ has 5 valence electrons. How many electrons does each nitrogen atom contribute to the triple bond?",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) electrons contributed per N atom", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Triple bond", statement: "$\\mathrm{N_2}$ has a triple bond; each N contributes 3 electrons to the 3 shared pairs." },
            ],
            steps: [
              { reasoning: "Each nitrogen needs 3 more electrons to complete its octet, so it contributes 3 electrons to the bond.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "State the number of electrons contributed.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $3$ electrons per nitrogen atom",
            commonErrors: ["Answering 5 by counting all valence electrons rather than those used in bonding."],
          },
        },
        {
          id: "chemsl-u3-covalent-bonding-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "A sample of carbon dioxide contains $0.50\\ \\mathrm{mol}$ of $\\mathrm{CO_2}$ molecules. Find (a) the amount, in moles, of carbon atoms, (b) the amount, in moles, of oxygen atoms and (c) the total amount, in moles, of atoms.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) moles of C atoms", answer: 0.5 },
              { label: "(b) moles of O atoms", answer: 1 },
              { label: "(c) total moles of atoms", answer: 1.5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mole ratios from formula", statement: "Each $\\mathrm{CO_2}$ molecule contains 1 C atom and 2 O atoms." },
            ],
            steps: [
              { part: "a", reasoning: "There is 1 carbon atom per $\\mathrm{CO_2}$ molecule, so the amount of C equals the amount of $\\mathrm{CO_2}$.", working: "0.50\\ \\mathrm{mol}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the amount of carbon atoms.", working: "0.50\\ \\mathrm{mol}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "There are 2 oxygen atoms per molecule, so $0.50\\times2=1.00\\ \\mathrm{mol}$.", working: "0.50\\times2=1.00", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the amount of oxygen atoms.", working: "1.00\\ \\mathrm{mol}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Total atoms $=0.50+1.00=1.50\\ \\mathrm{mol}$ (or $3\\times0.50$).", working: "0.50+1.00=1.50", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) $0.50\\ \\mathrm{mol}$ (b) $1.00\\ \\mathrm{mol}$ (c) $1.50\\ \\mathrm{mol}$",
            commonErrors: ["Answering 0.50 for (b) by ignoring the subscript 2 on oxygen."],
          },
        },
        {
          id: "chemsl-u3-covalent-bonding-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Consider the ammonia molecule, $\\mathrm{NH_3}$, and the ammonium ion, $\\mathrm{NH_4^+}$.",
          parts: [
            { label: "a", prompt: "Describe how $\\mathrm{NH_4^+}$ forms from $\\mathrm{NH_3}$ and $\\mathrm{H^+}$.", marks: 2 },
            { label: "b", prompt: "State the type of bond formed between the new hydrogen and nitrogen, and explain the term 'dative'.", marks: 2 },
            { label: "c", prompt: "Predict and justify one physical property difference between $\\mathrm{NH_3}$ (a gas at RTP) and a salt containing $\\mathrm{NH_4^+}$ ions (a solid).", marks: 2 },
            { label: "d", prompt: "Evaluate the claim: 'A dative bond is fundamentally different from a normal covalent bond once it has formed.'", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dative covalent bond", statement: "Both shared electrons donated by one atom; identical to a normal covalent bond after formation." },
              { kind: "principle", name: "Structure determines property", statement: "Molecular $\\mathrm{NH_3}$ vs ionic lattice containing $\\mathrm{NH_4^+}$ gives different properties." },
            ],
            steps: [
              { part: "a", reasoning: "The nitrogen lone pair of $\\mathrm{NH_3}$ is donated to the empty $1s$ orbital of $\\mathrm{H^+}$, forming a new $\\mathrm{N-H}$ bond.", working: "\\mathrm{NH_3}+\\mathrm{H^+}\\to\\mathrm{NH_4^+}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The product is the ammonium ion with four $\\mathrm{N-H}$ bonds and charge $+1$.", working: "\\mathrm{NH_4^+}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "A dative (coordinate) covalent bond is formed.", working: "\\text{dative covalent}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "'Dative' means both shared electrons come from the nitrogen atom's lone pair.", working: "\\text{one donor}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$\\mathrm{NH_3}$ is a small polar molecule held by hydrogen bonds and London forces, so it is a gas with a low boiling point.", working: "\\mathrm{NH_3}: \\text{IMFs only}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "A salt containing $\\mathrm{NH_4^+}$ is an ionic lattice with strong electrostatic attractions, giving a high melting point solid.", working: "\\text{ionic lattice}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The claim is incorrect: once formed, a dative bond is a normal shared pair of electrons between two atoms, identical in strength and behaviour to any other covalent bond.", working: "\\text{identical after formation}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Only the origin of the electrons (who donated them) distinguishes it during formation.", working: "\\text{only origin differs}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) NH3 lone pair donated to H+ forming NH4+ (b) dative covalent — both electrons from N (c) NH3 is a low-bp molecular gas; NH4+ salts are high-mp ionic solids (d) false — a dative bond is identical to a normal covalent bond once formed",
            commonErrors: ["In (d) claiming dative bonds are weaker or stronger than normal covalent bonds."],
          },
        },
        {
          id: "chemsl-u3-covalent-bonding-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "A student claims: 'All covalent substances are gases or liquids at room temperature.' Evaluate this statement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Molecular vs giant covalent", statement: "Simple molecular covalent substances have low melting points, but giant covalent networks have very high melting points and are solids." },
            ],
            steps: [
              { reasoning: "The statement is true only for simple molecular covalent substances such as $\\mathrm{CO_2}$ and $\\mathrm{H_2O}$, which are gases or liquids because only weak IMFs act between molecules.", working: "\\text{molecular: low mp}", marks: 1, markCode: "M" },
              { reasoning: "It is false as a general claim: many covalent substances are solids, e.g. iodine $\\mathrm{I_2}$ and sucrose.", working: "\\mathrm{I_2}\\ \\text{solid}", marks: 1, markCode: "A" },
              { reasoning: "More importantly, giant covalent structures such as diamond, graphite and $\\mathrm{SiO_2}$ contain only covalent bonds yet are solids with very high melting points because strong covalent bonds must be broken throughout the network.", working: "\\text{giant covalent solids}", marks: 1, markCode: "R" },
              { reasoning: "The physical state depends on the strength of bonding in the structure, not merely on the presence of covalent bonds.", working: "\\text{structure matters}", marks: 1, markCode: "M" },
              { reasoning: "A corrected statement: simple molecular covalent substances are often gases or liquids, while giant covalent substances are high-melting solids.", working: "\\text{corrected claim}", marks: 1, markCode: "A" },
              { reasoning: "Conclude the student's claim is an overgeneralisation.", working: "\\text{overgeneralisation}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "The claim is an overgeneralisation: simple molecular covalent substances are gases/liquids, but giant covalent structures (diamond, graphite, $\\mathrm{SiO_2}$) are solids with very high melting points because strong covalent bonds span the whole network.",
            commonErrors: ["Forgetting that 'covalent' includes giant covalent networks.", "Saying covalent bonds are 'weak' — intramolecular covalent bonds are strong."],
          },
        },
      ],
    },
  ],
};
