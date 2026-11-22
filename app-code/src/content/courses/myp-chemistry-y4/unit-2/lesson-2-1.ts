import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "mypc4-u2-lesson-2-1",
  code: "2-1",
  title: "Chemical Equations and Reactivity",
  goal: "I CAN write and balance chemical equations and use the reactivity series to predict reactions.",
  standards: [
    "MYP Sciences: Matter",
    "Key concept: Change",
    "Criterion A: Knowing and understanding",
  ],
  vocabulary: [
    { term: "Chemical equation", definition: "Symbolic representation of a reaction showing reactants → products." },
    { term: "Balanced equation", definition: "Equation with equal atoms of each element on both sides (conservation of mass)." },
    { term: "Reactivity series", definition: "Order of metals by reactivity: K Na Ca Mg Al Zn Fe Ni Sn Pb Cu Ag Au." },
    { term: "Displacement reaction", definition: "More reactive element replaces less reactive one in compound." },
    { term: "Combustion", definition: "Reaction with oxygen producing heat/light; hydrocarbons → CO₂ + H₂O." },
    { term: "Catalyst", definition: "Substance speeding reaction without being consumed." },
  ],
  concepts: [
    {
      id: "mypc4-u2-equations",
      title: "Writing and balancing equations",
      skill: "Write word equations and balance chemical equations using conservation of mass.",
      lesson: {
        sections: [
          {
            heading: "Chemical equations",
            body: "Reactants on left, products on right, arrow for 'yields'. Formulae show atom counts: H₂O = 2H + 1O. **Balancing**: adjust coefficients (not subscripts) until atoms equal both sides — mass is conserved.",
          },
          {
            heading: "Common reactions",
            body: "**Combustion**: CH₄ + 2O₂ → CO₂ + 2H₂O. **Decomposition**: 2H₂O₂ → 2H₂O + O₂. **Displacement**: Zn + CuSO₄ → ZnSO₄ + Cu. **Neutralisation**: HCl + NaOH → NaCl + H₂O.",
          },
          {
            heading: "Balancing strategy",
            body: "Balance one element at a time; save oxygen/hydrogen for last; use smallest whole-number coefficients; verify all atoms equal.",
          },
        ],
        keyFormulas: [
          { name: "Balance", statement: "Equal atoms each element both sides" },
          { name: "Combustion", statement: "Hydrocarbon + O₂ → CO₂ + H₂O" },
          { name: "Neutralisation", statement: "Acid + base → salt + water" },
        ],
        workedExample: {
          problem: "Balance: Fe + O₂ → Fe₂O₃",
          solution: "4Fe + 3O₂ → 2Fe₂O₃. Check: 4 Fe each side; 6 O each side.",
        },
      },
      questions: [
        {
          id: "mypc4-u2-eq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why must chemical equations be balanced?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To show energy released" },
              { id: "b", text: "To make equations look neat" },
              { id: "c", text: "To increase reaction rate" },
              { id: "d", text: "To show conservation of mass — same atoms on both sides" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Conservation of mass", statement: "Atoms are neither created nor destroyed." },
            ],
            steps: [
              { reasoning: "Balancing ensures atom counts equal — mass conserved.", working: "\\text{conservation}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Conservation of mass",
            commonErrors: ["Thinking balancing is cosmetic."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc4-u2-eq-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Balance: H₂ + O₂ → H₂O",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2H₂ + O₂ → 2H₂O" },
              { id: "b", text: "H₂ + O₂ → H₂O" },
              { id: "c", text: "2H₂ + 2O₂ → 2H₂O" },
              { id: "d", text: "H₂ + 2O₂ → 2H₂O" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Balancing", statement: "2H₂+O₂ gives 4H+2O; 2H₂O uses same." },
            ],
            steps: [
              { reasoning: "Left needs 4H,2O → 2H₂O product.", working: "2H_2+O_2\\to2H_2O", marks: 1, markCode: "M" },
              { reasoning: "Verify: 4H, 2O both sides.", working: "\\text{balanced}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2H₂ + O₂ → 2H₂O",
            commonErrors: ["Changing subscripts instead of coefficients."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u2-eq-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Balance: C₃H₈ + O₂ → CO₂ + H₂O (propane combustion)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O" },
              { id: "b", text: "C₃H₈ + 3O₂ → 3CO₂ + 4H₂O" },
              { id: "c", text: "C₃H₈ + 5O₂ → 2CO₂ + 4H₂O" },
              { id: "d", text: "C₃H₈ + 4O₂ → 3CO₂ + 4H₂O" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Balancing combustion", statement: "Balance C, then H, then O last." },
            ],
            steps: [
              { reasoning: "3C → 3CO₂; 8H → 4H₂O.", working: "3CO_2+4H_2O", marks: 1, markCode: "M" },
              { reasoning: "O needed: 6+4=10 → 5O₂.", working: "5O_2", marks: 1, markCode: "M" },
              { reasoning: "Verify all atoms.", working: "\\text{balanced}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O",
            commonErrors: ["Balancing O before C/H."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u2-eq-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write and balance equations for these reactions.",
          parts: [
            { label: "a", prompt: "Magnesium burning in oxygen.", marks: 2 },
            { label: "b", prompt: "Zinc reacting with hydrochloric acid.", marks: 2 },
            { label: "c", prompt: "Sodium hydroxide neutralising sulfuric acid.", marks: 3 },
            { label: "d", prompt: "Explain why coefficients not subscripts are used.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Equation writing", statement: "Formulae + coefficients conserve mass." },
            ],
            steps: [
              { part: "a", reasoning: "2Mg + O₂ → 2MgO.", working: "2Mg+O_2\\to2MgO", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Balanced correctly.", working: "\\text{balanced}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Zn + 2HCl → ZnCl₂ + H₂.", working: "Zn+2HCl\\to ZnCl_2+H_2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Balanced correctly.", working: "\\text{balanced}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O.", working: "2NaOH+H_2SO_4\\to Na_2SO_4+2H_2O", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Na and SO₄ balanced; H₂O coefficient 2.", working: "\\text{balanced}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", working: "\\text{done}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Subscripts change compound identity; coefficients change amount only.", working: "\\text{subscripts=identity}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 2Mg+O₂→2MgO (b) Zn+2HCl→ZnCl₂+H₂ (c) 2NaOH+H₂SO₄→Na₂SO₄+2H₂O (d) subscripts define compound",
            commonErrors: ["In (d), saying subscripts balance equations."],
            examinerNote: "M1 A1 for (a),(b); M1 M1 A1 for (c); A1 for (d).",
          },
        },
        {
          id: "mypc4-u2-eq-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a chemical equation, the arrow (→) means...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yields / produces" },
              { id: "b", text: "Reverses" },
              { id: "c", text: "Reacts with" },
              { id: "d", text: "Is equal to" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Equation arrow", statement: "Arrow shows reactants → products." },
            ],
            steps: [
              { reasoning: "Arrow reads 'yields' or 'produces'.", working: "\\to", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Yields",
            commonErrors: ["Reading it as 'and'."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc4-u2-eq-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Balance the equation: N₂ + H₂ → NH₃",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "N₂ + 3H₂ → 2NH₃" },
              { id: "b", text: "2N₂ + 3H₂ → 2NH₃" },
              { id: "c", text: "N₂ + H₂ → NH₃" },
              { id: "d", text: "N₂ + 2H₂ → 2NH₃" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Balancing", statement: "2NH₃ needs 2N and 6H → 3H₂." },
            ],
            steps: [
              { reasoning: "Left has 2N; right needs 2N → 2NH₃.", working: "2NH_3", marks: 1, markCode: "M" },
              { reasoning: "6H needed → 3H₂; verify balanced.", working: "3H_2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "N₂ + 3H₂ → 2NH₃",
            commonErrors: ["Changing subscripts of NH₃."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u2-eq-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the balanced equation 2Mg + O₂ → 2MgO, how many magnesium atoms are on each side?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Atom conservation", statement: "Coefficient × atoms in formula = total atoms." },
            ],
            steps: [
              { reasoning: "2 Mg on left; 2 MgO × 1 Mg = 2 Mg on right.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2",
            commonErrors: ["Answering 4 (counting coefficient as atoms)."],
            examinerNote: "B1 for 2.",
          },
        },
        {
          id: "mypc4-u2-eq-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many oxygen atoms and how many carbon atoms are in 3CO₂?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 6 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Atom counting", statement: "Multiply coefficient by subscripts: 3×CO₂ = 3C + 6O." },
            ],
            steps: [
              { reasoning: "O atoms: 3 × 2 = 6.", working: "3\\times2=6", marks: 1, markCode: "M" },
              { reasoning: "C atoms: 3 × 1 = 3.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6 oxygen, 3 carbon",
            commonErrors: ["Answering 3 for oxygen."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u2-eq-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which equation is correctly balanced?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2K + Cl₂ → K₂Cl" },
              { id: "b", text: "K + Cl₂ → KCl" },
              { id: "c", text: "2K + Cl₂ → 2KCl" },
              { id: "d", text: "K + 2Cl₂ → KCl₂" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Balancing", statement: "Check atom counts: 2K, 2Cl each side." },
            ],
            steps: [
              { reasoning: "Left: 2K + 2Cl; right: 2KCl = 2K + 2Cl.", working: "2K,2Cl", marks: 1, markCode: "M" },
              { reasoning: "Atoms equal → balanced.", working: "\\text{balanced}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2K + Cl₂ → 2KCl",
            commonErrors: ["Changing Cl₂ subscript to balance."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u2-eq-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "When balancing Fe + Cl₂ → FeCl₃, what coefficients are needed for Fe, Cl₂ and FeCl₃ respectively?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 3 },
              { label: "c", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Balancing", statement: "2Fe + 3Cl₂ → 2FeCl₃." },
            ],
            steps: [
              { reasoning: "Cl is odd on right (3) → even number of FeCl₃ → 2FeCl₃.", working: "2FeCl_3", marks: 1, markCode: "M" },
              { reasoning: "6 Cl needed → 3Cl₂; 2 Fe needed → 2Fe.", working: "3Cl_2,2Fe", marks: 1, markCode: "M" },
              { reasoning: "Coefficients 2, 3, 2.", working: "2,3,2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2 Fe, 3 Cl₂, 2 FeCl₃",
            commonErrors: ["Leaving coefficient 1 unstated incorrectly."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u2-eq-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why can't you balance 2H₂ + O₂ → 2H₂O by changing the formula to H₂O₂?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Formulas cannot contain numbers" },
              { id: "b", text: "It would still be unbalanced" },
              { id: "c", text: "H₂O₂ is heavier" },
              { id: "d", text: "Changing the formula changes the substance — water is H₂O, not H₂O₂" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Formula vs coefficient", statement: "Subscripts define the compound; only coefficients may change." },
            ],
            steps: [
              { reasoning: "H₂O and H₂O₂ are different substances.", working: "\\text{different}", marks: 1, markCode: "M" },
              { reasoning: "Changing formula = changing product identity, not balancing.", working: "\\text{identity}", marks: 1, markCode: "M" },
              { reasoning: "State reason.", working: "\\text{subscripts fixed}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Formula change alters the substance",
            commonErrors: ["Thinking any number change balances."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u2-eq-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "For CH₄ + 2O₂ → CO₂ + 2H₂O, how many moles of O₂ react with 2 mol of CH₄?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4, unit: "mol" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Mole ratio", statement: "Equation ratio 1 CH₄ : 2 O₂." },
            ],
            steps: [
              { reasoning: "2 mol CH₄ × 2 = 4 mol O₂.", working: "2\\times2=4", marks: 1, markCode: "M" },
              { reasoning: "State answer with unit.", working: "4\\text{ mol}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4 mol",
            commonErrors: ["Answering 2 (ignoring ratio)."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u2-eq-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many different elements appear in the formula CaCO₃?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2" },
              { id: "b", text: "5" },
              { id: "c", text: "4" },
              { id: "d", text: "3" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Formula", statement: "CaCO₃ contains calcium, carbon and oxygen." },
            ],
            steps: [
              { reasoning: "Ca, C, O = 3 elements.", working: "Ca,C,O", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Counting atoms (5) instead of elements."],
            examinerNote: "B1 for 3.",
          },
        },
        {
          id: "mypc4-u2-eq-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "For 2H₂ + O₂ → 2H₂O, if 4 mol of H₂ reacts completely, how many moles of H₂O are produced?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4, unit: "mol" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Mole ratio", statement: "2H₂ : 2H₂O = 1:1 ratio." },
            ],
            steps: [
              { reasoning: "H₂:H₂O = 2:2 = 1:1 → 4 mol H₂O.", working: "4", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "4\\text{ mol}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4 mol",
            commonErrors: ["Doubling incorrectly to 8 mol."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u2-eq-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Writing and balancing equations.",
          parts: [
            { label: "a", prompt: "Write a word equation for iron reacting with sulfur to form iron sulfide.", marks: 2 },
            { label: "b", prompt: "Balance: Al + O₂ → Al₂O₃.", marks: 2 },
            { label: "c", prompt: "State the type of reaction in (b).", marks: 1 },
            { label: "d", prompt: "Explain why the total mass is the same before and after a reaction.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Equations", statement: "Formulae + coefficients; conservation of mass." },
            ],
            steps: [
              { part: "a", reasoning: "Iron + sulfur → iron sulfide.", working: "\\text{word eq}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Reactants and product correct.", working: "FeS", marks: 1, markCode: "A" },
              { part: "b", reasoning: "4Al + 3O₂ → 2Al₂O₃.", working: "4Al+3O_2\\to2Al_2O_3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Balanced correctly.", working: "\\text{balanced}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Synthesis (combination) reaction.", working: "\\text{synthesis}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Atoms are conserved — same atoms rearranged, none created or destroyed.", working: "\\text{conservation}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) iron+sulfur→iron sulfide (b) 4Al+3O₂→2Al₂O₃ (c) synthesis (d) atoms conserved",
            commonErrors: ["In (b), writing AlO instead of Al₂O₃."],
            examinerNote: "M1 A1 for (a),(b), A1 for (c),(d).",
          },
        },
        {
          id: "mypc4-u2-eq-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Balance and classify these reactions.",
          parts: [
            { label: "a", prompt: "Balance: C₂H₄ + O₂ → CO₂ + H₂O.", marks: 2 },
            { label: "b", prompt: "Balance: KClO₃ → KCl + O₂.", marks: 2 },
            { label: "c", prompt: "Balance: Cu + AgNO₃ → Cu(NO₃)₂ + Ag.", marks: 2 },
            { label: "d", prompt: "Classify each reaction type (combustion, decomposition, displacement).", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Balancing strategy", statement: "Balance one element at a time; save O/H for last." },
            ],
            steps: [
              { part: "a", reasoning: "C₂H₄ + 3O₂ → 2CO₂ + 2H₂O.", working: "C_2H_4+3O_2\\to2CO_2+2H_2O", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Balanced correctly.", working: "\\text{balanced}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "2KClO₃ → 2KCl + 3O₂.", working: "2KClO_3\\to2KCl+3O_2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Balanced correctly.", working: "\\text{balanced}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Cu + 2AgNO₃ → Cu(NO₃)₂ + 2Ag.", working: "Cu+2AgNO_3\\to Cu(NO_3)_2+2Ag", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Balanced correctly.", working: "\\text{balanced}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "(a) combustion; (b) decomposition; (c) displacement.", working: "\\text{3 types}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "All three correct.", working: "\\text{correct}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) C₂H₄+3O₂→2CO₂+2H₂O (b) 2KClO₃→2KCl+3O₂ (c) Cu+2AgNO₃→Cu(NO₃)₂+2Ag (d) combustion, decomposition, displacement",
            commonErrors: ["In (c), forgetting coefficient 2 on Ag."],
            examinerNote: "M1 A1 for each of (a),(b),(c); M1 A1 for (d).",
          },
        },
      ],
    },
    {
      id: "mypc4-u2-reactivity",
      title: "The Reactivity Series",
      skill: "Use the reactivity series to predict displacement reactions and order metals by reactivity.",
      lesson: {
        sections: [
          {
            heading: "The series",
            body: "**K > Na > Ca > Mg > Al > Zn > Fe > Ni > Sn > Pb > Cu > Ag > Au** (most → least reactive). Metals above hydrogen displace it from acids; below hydrogen don't. Metals higher in series displace lower metals from their compounds.",
          },
          {
            heading: "Displacement reactions",
            body: "More reactive metal + less reactive metal's compound → less reactive metal + more reactive metal's compound. Example: Zn + CuSO₄ → ZnSO₄ + Cu (zinc above copper). No reaction if metal below the one in compound.",
          },
          {
            heading: "Observations",
            body: "Displacement often visible: color change (blue CuSO₄ → colorless ZnSO₄ + brown Cu), gas bubbles (H₂ from acid), temperature change. Faster/more vigorous = more reactive.",
          },
        ],
        keyFormulas: [
          { name: "Series", statement: "K>Na>Ca>Mg>Al>Zn>Fe>Ni>Sn>Pb>Cu>Ag>Au" },
          { name: "Displacement", statement: "Higher metal replaces lower in compound" },
          { name: "Hydrogen", statement: "Metals above H react with acids" },
        ],
        workedExample: {
          problem: "Will iron displace copper from CuSO₄ solution?",
          solution: "Yes — Fe is above Cu in series → Fe + CuSO₄ → FeSO₄ + Cu.",
        },
      },
      questions: [
        {
          id: "mypc4-u2-react-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the reactivity series, which metal is most reactive?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Iron (Fe)" },
              { id: "b", text: "Gold (Au)" },
              { id: "c", text: "Potassium (K)" },
              { id: "d", text: "Copper (Cu)" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reactivity series", statement: "K most reactive, Au least." },
            ],
            steps: [
              { reasoning: "K is top of series = most reactive.", working: "K", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Potassium",
            commonErrors: ["Choosing gold — least reactive."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc4-u2-react-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which metal will displace copper from copper sulfate solution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gold (below Cu)" },
              { id: "b", text: "Zinc (above Cu in series)" },
              { id: "c", text: "Copper itself" },
              { id: "d", text: "Silver (below Cu)" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Displacement", statement: "Only metals above the displaced metal react." },
            ],
            steps: [
              { reasoning: "Zn is above Cu → can displace it.", working: "Zn>Cu", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "\\text{zinc}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Zinc",
            commonErrors: ["Choosing metals below copper."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u2-react-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why copper does not react with dilute hydrochloric acid but zinc does.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Copper is too heavy" },
              { id: "b", text: "Zn is above hydrogen in reactivity series so displaces H; Cu is below hydrogen so cannot" },
              { id: "c", text: "Acid only reacts with liquids" },
              { id: "d", text: "Zinc is an acid" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Acid reaction", statement: "Metals above H in series displace hydrogen from acids." },
            ],
            steps: [
              { reasoning: "Zn above H → Zn + 2HCl → ZnCl₂ + H₂.", working: "Zn>H", marks: 1, markCode: "M" },
              { reasoning: "Cu below H → no reaction.", working: "Cu<H", marks: 1, markCode: "M" },
              { reasoning: "State the reason.", working: "\\text{reactivity}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Zn above H reacts; Cu below H doesn't",
            commonErrors: ["Thinking all metals react with acids."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u2-react-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Iron nail placed in copper sulfate solution.",
          parts: [
            { label: "a", prompt: "Predict whether reaction occurs and write equation.", marks: 2 },
            { label: "b", prompt: "Describe expected observations.", marks: 2 },
            { label: "c", prompt: "Explain why this is a displacement reaction.", marks: 2 },
            { label: "d", prompt: "Predict what happens if copper is placed in iron sulfate instead.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Displacement", statement: "More reactive metal displaces less reactive from compound." },
            ],
            steps: [
              { part: "a", reasoning: "Fe + CuSO₄ → FeSO₄ + Cu (Fe above Cu).", working: "Fe+CuSO_4\\to FeSO_4+Cu", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Equation correct.", working: "\\text{equation}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Blue solution fades; brown/orange copper deposits on nail.", working: "\\text{color change}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State observations.", working: "\\text{observations}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Fe (more reactive) displaces Cu (less reactive) from compound.", working: "\\text{displacement}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Explain concept.", working: "\\text{Fe>Cu}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "No reaction — Cu below Fe in series.", working: "\\text{no reaction}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State reason.", working: "\\text{Cu<Fe}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Fe+CuSO₄→FeSO₄+Cu (b) blue fades, brown Cu deposits (c) Fe displaces Cu (d) no reaction",
            commonErrors: ["In (d), expecting reverse displacement."],
            examinerNote: "M1 A1 for each part.",
          },
        },
        {
          id: "mypc4-u2-react-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which metal is the LEAST reactive in the reactivity series?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Calcium (Ca)" },
              { id: "b", text: "Gold (Au)" },
              { id: "c", text: "Sodium (Na)" },
              { id: "d", text: "Potassium (K)" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reactivity series", statement: "K most reactive → Au least reactive." },
            ],
            steps: [
              { reasoning: "Au is at the bottom of the series = least reactive.", working: "Au", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Gold",
            commonErrors: ["Choosing potassium — it's most reactive."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc4-u2-react-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Will magnesium displace zinc from zinc sulfate solution? Explain briefly.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No — Zn is more reactive" },
              { id: "b", text: "Yes — Mg is above Zn in the reactivity series, so it displaces Zn" },
              { id: "c", text: "Only if heated" },
              { id: "d", text: "Yes — all metals displace each other" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Displacement", statement: "Metal higher in series displaces lower metal." },
            ],
            steps: [
              { reasoning: "Mg is above Zn → Mg + ZnSO₄ → MgSO₄ + Zn.", working: "Mg>Zn", marks: 1, markCode: "M" },
              { reasoning: "State conclusion.", working: "\\text{yes}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Yes — Mg displaces Zn",
            commonErrors: ["Reversing the series order."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u2-react-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the reactivity series K > Na > Ca > Mg > Al > Zn > Fe > Ni > Sn > Pb > Cu > Ag > Au, hydrogen sits between lead and copper. How many metals are MORE reactive than hydrogen?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reactivity series", statement: "K,Na,Ca,Mg,Al,Zn,Fe,Ni,Sn,Pb are above H." },
            ],
            steps: [
              { reasoning: "Count metals above H: K,Na,Ca,Mg,Al,Zn,Fe,Ni,Sn,Pb = 10.", working: "10", marks: 1, markCode: "B" },
            ],
            finalAnswer: "10",
            commonErrors: ["Including copper or missing lead."],
            examinerNote: "B1 for 10.",
          },
        },
        {
          id: "mypc4-u2-react-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Zinc reacts with copper sulfate: Zn + CuSO₄ → ZnSO₄ + Cu. If 0.50 mol of Zn reacts completely, how many moles of Cu are produced?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0.5, unit: "mol" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Mole ratio", statement: "1 Zn : 1 Cu in displacement equation." },
            ],
            steps: [
              { reasoning: "Ratio 1:1 → 0.50 mol Cu.", working: "0.50", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "0.5\\text{ mol}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.50 mol",
            commonErrors: ["Using a 2:1 ratio that doesn't exist."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u2-react-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which observation would confirm that iron has displaced copper from copper sulfate solution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The iron dissolves completely" },
              { id: "b", text: "The blue solution fades and a brown/orange solid deposits on the iron" },
              { id: "c", text: "The solution turns green" },
              { id: "d", text: "Bubbles of gas form rapidly" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Observations", statement: "Blue CuSO₄ fades; brown Cu metal deposits." },
            ],
            steps: [
              { reasoning: "Cu²⁺ (blue) is removed; Cu(s) (brown) deposited.", working: "\\text{color change}", marks: 1, markCode: "M" },
              { reasoning: "State observation.", working: "\\text{fades+brown}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Blue fades, brown Cu deposits",
            commonErrors: ["Expecting gas — that's acid reactions."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u2-react-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many metals in the reactivity series are MORE reactive than iron?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reactivity series", statement: "K,Na,Ca,Mg,Al,Zn are above Fe." },
            ],
            steps: [
              { reasoning: "Count above Fe: K,Na,Ca,Mg,Al,Zn = 6.", working: "6", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6",
            commonErrors: ["Including nickel (below Fe)."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u2-react-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why copper does not react with iron(II) sulfate solution.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cu is below Fe in the reactivity series, so it cannot displace iron" },
              { id: "b", text: "Iron sulfate is not a real compound" },
              { id: "c", text: "Copper is too expensive" },
              { id: "d", text: "Copper is a non-metal" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Displacement", statement: "Only metals above the target metal in the series react." },
            ],
            steps: [
              { reasoning: "Cu is below Fe → less reactive → cannot displace.", working: "Cu<Fe", marks: 1, markCode: "M" },
              { reasoning: "No reaction occurs.", working: "\\text{no rxn}", marks: 1, markCode: "M" },
              { reasoning: "State reason.", working: "\\text{series}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cu below Fe — cannot displace",
            commonErrors: ["Expecting all metal salt solutions to react."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u2-react-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "0.20 mol of Zn reacts with excess CuSO₄ solution (Zn + CuSO₄ → ZnSO₄ + Cu). Calculate the mass of copper produced. (Ar Cu = 63.5)",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0.2, unit: "mol" },
              { label: "b", answer: 12.7, unit: "g" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Stoichiometry", statement: "1:1 mole ratio; mass = n × Ar." },
            ],
            steps: [
              { reasoning: "n(Cu) = 0.20 mol (1:1 ratio).", working: "0.20", marks: 1, markCode: "M" },
              { reasoning: "mass = 0.20 × 63.5 = 12.7 g.", working: "12.7\\text{ g}", marks: 1, markCode: "M" },
              { reasoning: "State answers.", working: "0.2,12.7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.20 mol; 12.7 g",
            commonErrors: ["Using Mr instead of Ar."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u2-react-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many metals are listed in the reactivity series K > Na > Ca > Mg > Al > Zn > Fe > Ni > Sn > Pb > Cu > Ag > Au?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 13 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reactivity series", statement: "13 metals listed." },
            ],
            steps: [
              { reasoning: "K,Na,Ca,Mg,Al,Zn,Fe,Ni,Sn,Pb,Cu,Ag,Au = 13.", working: "13", marks: 1, markCode: "B" },
            ],
            finalAnswer: "13",
            commonErrors: ["Counting hydrogen as a metal."],
            examinerNote: "B1 for 13.",
          },
        },
        {
          id: "mypc4-u2-react-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many metals in the reactivity series are LESS reactive than hydrogen (i.e., below it)?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reactivity series", statement: "Cu, Ag, Au are below hydrogen." },
            ],
            steps: [
              { reasoning: "Below H: Cu, Ag, Au = 3 metals.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
            commonErrors: ["Including lead (above H)."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u2-react-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Displacement reactions.",
          parts: [
            { label: "a", prompt: "Define a displacement reaction.", marks: 1 },
            { label: "b", prompt: "Predict and write the equation for magnesium added to copper sulfate solution.", marks: 2 },
            { label: "c", prompt: "Describe two observations expected.", marks: 2 },
            { label: "d", prompt: "Explain why copper + zinc sulfate gives no reaction.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Displacement", statement: "More reactive metal replaces less reactive in compound." },
            ],
            steps: [
              { part: "a", reasoning: "More reactive element displaces less reactive from its compound.", working: "\\text{def}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Mg + CuSO₄ → MgSO₄ + Cu.", working: "Mg+CuSO_4\\to MgSO_4+Cu", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Equation correct (Mg above Cu).", working: "\\text{eq}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Blue solution fades; reddish-brown copper deposits.", working: "\\text{obs}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Second observation.", working: "\\text{2 obs}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Cu below Zn in series → less reactive → cannot displace.", working: "Cu<Zn", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) reactive replaces less reactive (b) Mg+CuSO₄→MgSO₄+Cu (c) fades+brown deposit (d) Cu below Zn",
            commonErrors: ["In (d), ignoring series position."],
            examinerNote: "A1 for (a), M1 A1 for (b), M1 A1 for (c), A1 for (d).",
          },
        },
        {
          id: "mypc4-u2-react-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Four metals W, X, Y, Z were tested: W displaces X and Y but not Z; X displaces Y but not Z; Y displaces Z; Z displaces nothing.",
          parts: [
            { label: "a", prompt: "Deduce the reactivity order of the four metals.", marks: 2 },
            { label: "b", prompt: "Explain your reasoning.", marks: 2 },
            { label: "c", prompt: "Write the equation for W reacting with a compound of Y.", marks: 2 },
            { label: "d", prompt: "Predict whether Z reacts with W's sulfate solution and explain.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reactivity order", statement: "Displacement reveals relative positions in series." },
            ],
            steps: [
              { part: "a", reasoning: "W > X > Y > Z.", working: "W>X>Y>Z", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct order.", working: "\\text{order}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Each metal displaces only metals below it → order follows displacement results.", working: "\\text{logic}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct explanation.", working: "\\text{reason}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "W + YSO₄ → WSO₄ + Y.", working: "W+YSO_4\\to WSO_4+Y", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Equation correct.", working: "\\text{eq}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "No reaction — Z is least reactive, below W.", working: "\\text{no rxn}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct prediction with reason.", working: "Z<W", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) W>X>Y>Z (b) displacement logic (c) W+YSO₄→WSO₄+Y (d) no reaction",
            commonErrors: ["In (a), putting Z higher than Y."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c), M1 A1 for (d).",
          },
        },
      ],
    },
  ],
};
