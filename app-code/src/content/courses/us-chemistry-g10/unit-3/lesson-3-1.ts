import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "chem10-u3-lesson-3-1",
  code: "3-1",
  title: "Reactions and Equations",
  goal: "I CAN balance chemical equations using conservation of mass, classify reactions, and predict products using the activity series and solubility rules.",
  standards: ["HS-PS1-7", "HS-PS1-2", "SEP: Using Mathematics and Computational Thinking", "CCC: Energy and Matter"],
  vocabulary: [
    { term: "Reactant", definition: "A substance that is present at the start of a chemical reaction and is used up." },
    { term: "Product", definition: "A substance formed in a chemical reaction." },
    { term: "Coefficient", definition: "The number written in front of a formula in an equation that shows how many units of that substance take part." },
    { term: "Law of conservation of mass", definition: "In a chemical reaction, atoms are neither created nor destroyed, so the total mass of the reactants equals the total mass of the products." },
    { term: "Activity series", definition: "A list of metals ranked by how readily they react; a more active metal can replace a less active metal from its compound." },
    { term: "Precipitate", definition: "An insoluble solid that forms when two solutions are mixed." },
    { term: "Spectator ion", definition: "An ion that is present in solution but does not take part in the reaction." },
  ],
  concepts: [
    {
      id: "chem10-u3-balancing-equations",
      title: "Balancing equations and conservation of mass",
      skill: "Balance chemical equations by adjusting coefficients so that each element has the same number of atoms on both sides.",
      lesson: {
        sections: [
          {
            heading: "Atoms are conserved",
            body: "In a chemical reaction, bonds break and new bonds form, but the atoms themselves are rearranged, not created or destroyed. This is the **law of conservation of mass**: the total mass of the reactants equals the total mass of the products.\n\nA **balanced equation** shows this. Every element must have the same number of atoms on the left (reactants) and on the right (products).",
          },
          {
            heading: "A method for balancing",
            body: "1. Write the correct formulas for all reactants and products. **Never change a subscript**, because that changes the substance.\n2. Count the atoms of each element on both sides.\n3. Change **coefficients** (the numbers in front of formulas) to balance. Start with the element that appears in the fewest formulas and leave oxygen and hydrogen until last when they appear in many places.\n4. Recount every element, then reduce the coefficients to the smallest whole numbers.\n\nFor example, $\\text{H}_2 + \\text{O}_2 \\rightarrow \\text{H}_2\\text{O}$ has 2 oxygen atoms on the left but 1 on the right. Placing a 2 in front of $\\text{H}_2\\text{O}$ balances oxygen, then a 2 in front of $\\text{H}_2$ balances hydrogen: $2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$.",
          },
        ],
        keyFormulas: [
          { name: "Conservation of mass", statement: "total mass of reactants = total mass of products" },
          { name: "Balancing rule", statement: "Change coefficients only, never subscripts" },
        ],
        workedExample: {
          problem: "Balance $\\text{Al} + \\text{O}_2 \\rightarrow \\text{Al}_2\\text{O}_3$.",
          solution: "Oxygen: 2 atoms on the left, 3 on the right. The lowest common multiple is 6, so use $3\\text{O}_2$ and $2\\text{Al}_2\\text{O}_3$. Now aluminum: $2 \\times 2 = 4$ atoms on the right, so use $4\\text{Al}$. The balanced equation is $4\\text{Al} + 3\\text{O}_2 \\rightarrow 2\\text{Al}_2\\text{O}_3$. Check: Al $4 = 4$, O $6 = 6$.",
        },
      },
      questions: [
        {
          id: "chem10-u3-balancing-equations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement explains why chemical equations must be balanced?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Atoms are conserved, so each element has the same number of atoms on both sides." },
              { id: "b", text: "The number of molecules is always the same before and after a reaction." },
              { id: "c", text: "The number of compounds is always the same before and after a reaction." },
              { id: "d", text: "Subscripts can be changed to make the numbers of atoms equal." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of mass", statement: "Atoms are neither created nor destroyed in a chemical reaction." },
            ],
            steps: [
              { reasoning: "Because atoms are only rearranged, every element must appear in equal numbers on both sides of a balanced equation.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Atoms are conserved, so each element has the same number of atoms on both sides.",
            commonErrors: ["Thinking the number of molecules is conserved: $2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$ goes from 3 molecules to 2.", "Changing subscripts, which changes the identity of the substance."],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "chem10-u3-balancing-equations-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Iron rusts according to the unbalanced equation $\\text{Fe} + \\text{O}_2 \\rightarrow \\text{Fe}_2\\text{O}_3$.\n\nBalance the equation using the smallest whole-number coefficients, then calculate the **sum of all the coefficients** (including any that are 1).",
          response: { type: "numeric", parts: [{ label: "Sum of coefficients", answer: 9 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of mass", statement: "Each element must have equal numbers of atoms on both sides." },
            ],
            steps: [
              { reasoning: "Balance oxygen with the lowest common multiple of 2 and 3 (which is 6), then balance iron.", working: "4\\text{Fe} + 3\\text{O}_2 \\rightarrow 2\\text{Fe}_2\\text{O}_3", marks: 1, markCode: "M" },
              { reasoning: "Add the coefficients.", working: "4 + 3 + 2 = 9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4\\text{Fe} + 3\\text{O}_2 \\rightarrow 2\\text{Fe}_2\\text{O}_3$; sum of coefficients $= 9$",
            commonErrors: ["Writing $2\\text{Fe} + \\text{O}_2 \\rightarrow \\text{Fe}_2\\text{O}_3$, which is unbalanced for oxygen.", "Forgetting that a missing coefficient counts as 1 when summing."],
            examinerNote: "M1 for the correct balanced equation. A1 for 9. Allow ecf from a different but internally balanced equation (for example doubled coefficients).",
          },
        },
        {
          id: "chem10-u3-balancing-equations-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Magnesium burns in oxygen: $2\\text{Mg} + \\text{O}_2 \\rightarrow 2\\text{MgO}$.\n\nA student burns $4.8\\ \\text{g}$ of magnesium and collects $8.0\\ \\text{g}$ of magnesium oxide, with no other product and nothing lost.\n\nCalculate the mass of oxygen that reacted.",
          response: { type: "numeric", parts: [{ label: "Mass of oxygen", answer: 3.2, unit: "g", tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of mass", statement: "mass of reactants = mass of products" },
            ],
            steps: [
              { reasoning: "Apply conservation of mass: mass of Mg + mass of $\\text{O}_2$ = mass of MgO.", working: "m_{\\text{Mg}} + m_{\\text{O}_2} = m_{\\text{MgO}}", marks: 1, markCode: "M" },
              { reasoning: "Substitute the masses.", working: "4.8 + m_{\\text{O}_2} = 8.0", marks: 1, markCode: "M" },
              { reasoning: "Solve for the mass of oxygen.", working: "m_{\\text{O}_2} = 8.0 - 4.8 = 3.2\\text{ g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3.2\\ \\text{g}$",
            commonErrors: ["Adding the masses to get 12.8 g.", "Trying to use the coefficients as masses."],
            examinerNote: "M1 for mass of reactants = mass of product (oe). M1 for substitution. A1 for 3.2 g. Full marks for the correct answer with clear working.",
          },
        },
        {
          id: "chem10-u3-balancing-equations-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Propane gas, $\\text{C}_3\\text{H}_8$, burns in a camping stove. The unbalanced equation is\n\n$$\\text{C}_3\\text{H}_8 + \\text{O}_2 \\rightarrow \\text{CO}_2 + \\text{H}_2\\text{O}$$",
          parts: [
            { label: "a", prompt: "Balance the equation using the smallest whole-number coefficients.", marks: 2 },
            { label: "b", prompt: "Iron is extracted in a furnace by $\\text{Fe}_2\\text{O}_3 + \\text{CO} \\rightarrow \\text{Fe} + \\text{CO}_2$. Balance this equation.", marks: 2 },
            { label: "c", prompt: "For your balanced equation in (a), state the total number of oxygen atoms on the left-hand side.", marks: 1 },
            { label: "d", prompt: "A student tries to balance the equation in (a) by changing $\\text{H}_2\\text{O}$ to $\\text{H}_2\\text{O}_2$. Explain why this is not allowed and state what the student should change instead.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of mass", statement: "Each element has equal numbers of atoms on both sides of a balanced equation." },
              { kind: "principle", name: "Subscripts and coefficients", statement: "Subscripts define a substance; only coefficients may be changed to balance an equation." },
            ],
            steps: [
              { part: "a", reasoning: "Balance carbon and hydrogen first (3 CO$_2$ and 4 H$_2$O), then oxygen last.", working: "\\text{C}_3\\text{H}_8 + 5\\text{O}_2 \\rightarrow 3\\text{CO}_2 + 4\\text{H}_2\\text{O}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Right side has $3\\times2 + 4 = 10$ oxygen atoms, so $5\\text{O}_2$ is needed.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Oxygen: 3 atoms in $\\text{Fe}_2\\text{O}_3$ plus one per CO means 3 CO are needed to give 3 $\\text{CO}_2$; iron needs a 2.", working: "\\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\rightarrow 2\\text{Fe} + 3\\text{CO}_2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Check: Fe $2 = 2$, C $3 = 3$, O $3 + 3 = 6 = 6$.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$5\\text{O}_2$ contains $5 \\times 2 = 10$ oxygen atoms.", working: "10", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Changing a subscript changes the substance: $\\text{H}_2\\text{O}_2$ is hydrogen peroxide, a different compound from water.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The reaction produces water, so the formula must stay $\\text{H}_2\\text{O}$.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The student should change the coefficients (the numbers in front of the formulas) instead.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $\\text{C}_3\\text{H}_8 + 5\\text{O}_2 \\rightarrow 3\\text{CO}_2 + 4\\text{H}_2\\text{O}$ (b) $\\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\rightarrow 2\\text{Fe} + 3\\text{CO}_2$ (c) 10 (d) Subscripts define the substance; changing one makes a different compound. Change coefficients instead.",
            commonErrors: ["Balancing oxygen first, which leads to fractions or repeated changes.", "In (c) giving 5, the coefficient, rather than the atom count of 10."],
            examinerNote: "(a) A1 for the fully correct equation; allow M1 for 3CO$_2$ and 4H$_2$O. (b) Allow any multiple only if reduced to smallest whole numbers for A1. (d) Allow 'it would be a different substance' oe.",
          },
        },
      ],
    },
    {
      id: "chem10-u3-reaction-types",
      title: "Reaction types and predicting products",
      skill: "Classify reactions as synthesis, decomposition, single replacement, double replacement or combustion, and predict products using the activity series and solubility rules.",
      lesson: {
        sections: [
          {
            heading: "Five reaction types",
            body: "- **Synthesis**: two or more reactants combine into one product, $\\text{A} + \\text{B} \\rightarrow \\text{AB}$.\n- **Decomposition**: one reactant breaks into two or more products, $\\text{AB} \\rightarrow \\text{A} + \\text{B}$.\n- **Single replacement**: one element replaces another in a compound, $\\text{A} + \\text{BC} \\rightarrow \\text{AC} + \\text{B}$.\n- **Double replacement**: two compounds swap partners, $\\text{AB} + \\text{CD} \\rightarrow \\text{AD} + \\text{CB}$.\n- **Combustion**: a substance reacts with oxygen releasing energy. A hydrocarbon gives $\\text{CO}_2$ and $\\text{H}_2\\text{O}$.",
          },
          {
            heading: "Predicting: the activity series",
            body: "In a single replacement, a metal replaces another metal in solution only if it is **more active**. From more to less active: Li, K, Ca, Na, Mg, Al, Zn, Fe, Pb, (H), Cu, Ag, Au.\n\nZinc is above copper, so $\\text{Zn} + \\text{CuSO}_4 \\rightarrow \\text{ZnSO}_4 + \\text{Cu}$ happens. Copper is below zinc, so copper in zinc sulfate solution gives **no reaction**.",
          },
          {
            heading: "Predicting: solubility rules",
            body: "A double replacement in water happens when one product is insoluble (a **precipitate**), a gas, or water. Useful rules: all nitrates and all Group 1 (alkali metal) salts are soluble; most sulfates are soluble except those of $\\text{Ba}^{2+}$, $\\text{Pb}^{2+}$ and $\\text{Ca}^{2+}$; most iodides and chlorides are soluble except those of $\\text{Ag}^+$ and $\\text{Pb}^{2+}$.\n\nA **net ionic equation** shows only the ions that react. Ions that stay dissolved unchanged are **spectator ions** and are left out.",
          },
        ],
        keyFormulas: [
          { name: "Single replacement", statement: "$\\text{A} + \\text{BC} \\rightarrow \\text{AC} + \\text{B}$ (A must be more active than B)" },
          { name: "Double replacement", statement: "$\\text{AB} + \\text{CD} \\rightarrow \\text{AD} + \\text{CB}$ (needs a precipitate, gas or water)" },
          { name: "Hydrocarbon combustion", statement: "hydrocarbon + $\\text{O}_2 \\rightarrow \\text{CO}_2 + \\text{H}_2\\text{O}$" },
        ],
        workedExample: {
          problem: "Predict the products when aqueous silver nitrate is mixed with aqueous sodium chloride, and write the balanced equation.",
          solution: "This is a double replacement: the ions swap partners to give AgCl and $\\text{NaNO}_3$. Silver chloride is insoluble (a chloride of $\\text{Ag}^+$) and sodium nitrate is soluble. The balanced equation is $\\text{AgNO}_3(aq) + \\text{NaCl}(aq) \\rightarrow \\text{AgCl}(s) + \\text{NaNO}_3(aq)$. Each element is already balanced with all coefficients equal to 1.",
        },
      },
      questions: [
        {
          id: "chem10-u3-reaction-types-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What type of reaction is $2\\text{KClO}_3 \\rightarrow 2\\text{KCl} + 3\\text{O}_2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Synthesis" },
              { id: "b", text: "Decomposition" },
              { id: "c", text: "Single replacement" },
              { id: "d", text: "Combustion" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Decomposition", statement: "One reactant breaks down into two or more simpler products." },
            ],
            steps: [
              { reasoning: "A single compound, $\\text{KClO}_3$, breaks into two products, so this is decomposition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Decomposition",
            commonErrors: ["Choosing combustion because oxygen appears in the equation; here oxygen is a product, not a reactant.", "Choosing synthesis by reading the equation right to left."],
            examinerNote: "B1 for decomposition.",
          },
        },
        {
          id: "chem10-u3-reaction-types-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A strip of zinc is placed in aqueous copper(II) sulfate, $\\text{CuSO}_4$. In the activity series, zinc is more active than copper.\n\nPredict whether a reaction occurs. If it does, write the balanced equation and name the reaction type.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Activity series", statement: "A more active metal replaces a less active metal from a solution of its compound." },
            ],
            steps: [
              { reasoning: "Zinc is more active than copper, so it replaces copper: a reaction occurs.", marks: 1, markCode: "R" },
              { reasoning: "Zinc takes the sulfate and copper is released as a metal.", working: "\\text{Zn} + \\text{CuSO}_4 \\rightarrow \\text{ZnSO}_4 + \\text{Cu}", marks: 1, markCode: "B" },
              { reasoning: "One element replaces another in a compound: single replacement.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Yes; $\\text{Zn} + \\text{CuSO}_4 \\rightarrow \\text{ZnSO}_4 + \\text{Cu}$; single replacement.",
            commonErrors: ["Predicting no reaction by reversing the activity series.", "Writing $\\text{ZnCu}$ or an unbalanced sulfate such as $\\text{Zn}_2\\text{SO}_4$."],
            examinerNote: "R1 for reaction occurs because Zn more active (oe). B1 for correct equation. B1 for single replacement (allow single displacement).",
          },
        },
        {
          id: "chem10-u3-reaction-types-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Aqueous lead(II) nitrate, $\\text{Pb(NO}_3)_2$, is mixed with aqueous potassium iodide, KI. Use these solubility rules: all nitrates and all Group 1 salts are soluble; iodides are soluble except those of $\\text{Pb}^{2+}$ and $\\text{Ag}^+$.\n\nWrite the balanced equation, and identify the precipitate with a reason.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Double replacement", statement: "The cations swap anions; a reaction occurs if a product is insoluble." },
              { kind: "property", name: "Solubility rules", statement: "Nitrates and Group 1 salts are soluble; lead(II) iodide is insoluble." },
            ],
            steps: [
              { reasoning: "Swap partners to give $\\text{PbI}_2$ (Pb is $2+$, I is $1-$) and $\\text{KNO}_3$.", working: "\\text{Pb(NO}_3)_2 + \\text{KI} \\rightarrow \\text{PbI}_2 + \\text{KNO}_3", marks: 1, markCode: "M" },
              { reasoning: "Balance: two iodide ions are needed per lead, so use 2 KI and 2 $\\text{KNO}_3$.", working: "\\text{Pb(NO}_3)_2(aq) + 2\\text{KI}(aq) \\rightarrow \\text{PbI}_2(s) + 2\\text{KNO}_3(aq)", marks: 1, markCode: "A" },
              { reasoning: "The precipitate is lead(II) iodide, $\\text{PbI}_2$.", marks: 1, markCode: "B" },
              { reasoning: "Iodides of $\\text{Pb}^{2+}$ are insoluble, whereas $\\text{KNO}_3$ is soluble (all nitrates and Group 1 salts are soluble).", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$\\text{Pb(NO}_3)_2 + 2\\text{KI} \\rightarrow \\text{PbI}_2(s) + 2\\text{KNO}_3$; the precipitate is $\\text{PbI}_2$ because lead(II) iodide is insoluble.",
            commonErrors: ["Writing $\\text{PbI}$ with the wrong charge balance.", "Naming potassium nitrate as the precipitate."],
            examinerNote: "M1 for correct product formulas. A1 for fully balanced. B1 for $\\text{PbI}_2$. R1 for the solubility reason. Allow state symbols to be omitted.",
          },
        },
        {
          id: "chem10-u3-reaction-types-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A class studies the following reactions:\n\n(i) $2\\text{Na} + \\text{Cl}_2 \\rightarrow 2\\text{NaCl}$\n\n(ii) $\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$\n\nSolubility rules: all nitrates and Group 1 salts are soluble; most sulfates are soluble except those of $\\text{Ba}^{2+}$ and $\\text{Pb}^{2+}$.",
          parts: [
            { label: "a", prompt: "Classify reactions (i) and (ii).", marks: 2 },
            { label: "b", prompt: "A piece of copper is placed in aqueous zinc sulfate, $\\text{ZnSO}_4$. Zinc is more active than copper. Predict what happens and explain.", marks: 2 },
            { label: "c", prompt: "Aqueous barium nitrate is mixed with aqueous sodium sulfate. Complete and balance the equation: $\\text{Ba(NO}_3)_2 + \\text{Na}_2\\text{SO}_4 \\rightarrow$", marks: 2 },
            { label: "d", prompt: "Write the net ionic equation for the reaction in (c) and name the spectator ions.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reaction types", statement: "Synthesis: reactants combine; combustion: reaction with oxygen releasing energy." },
              { kind: "principle", name: "Activity series", statement: "A metal replaces another from solution only if it is more active." },
              { kind: "property", name: "Solubility rules", statement: "Barium sulfate is insoluble; nitrates and Group 1 salts are soluble." },
            ],
            steps: [
              { part: "a", reasoning: "(i) Two elements combine into one compound: synthesis.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "(ii) A hydrocarbon reacts with oxygen giving $\\text{CO}_2$ and $\\text{H}_2\\text{O}$: combustion.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "No reaction occurs.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Copper is less active than zinc, so it cannot replace zinc in its compound.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Swap partners: barium sulfate and sodium nitrate.", working: "\\text{BaSO}_4 + \\text{NaNO}_3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Two nitrate ions and two sodium ions require a coefficient of 2.", working: "\\text{Ba(NO}_3)_2 + \\text{Na}_2\\text{SO}_4 \\rightarrow \\text{BaSO}_4(s) + 2\\text{NaNO}_3", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Only barium and sulfate ions react to form the precipitate.", working: "\\text{Ba}^{2+}(aq) + \\text{SO}_4^{2-}(aq) \\rightarrow \\text{BaSO}_4(s)", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The ions that stay dissolved are the spectator ions: $\\text{Na}^+$ and $\\text{NO}_3^-$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) (i) synthesis (ii) combustion (b) No reaction; Cu is less active than Zn (c) $\\text{Ba(NO}_3)_2 + \\text{Na}_2\\text{SO}_4 \\rightarrow \\text{BaSO}_4(s) + 2\\text{NaNO}_3$ (d) $\\text{Ba}^{2+} + \\text{SO}_4^{2-} \\rightarrow \\text{BaSO}_4(s)$; spectators $\\text{Na}^+$ and $\\text{NO}_3^-$",
            commonErrors: ["In (b) predicting that copper replaces zinc.", "In (d) including spectator ions in the net ionic equation or forgetting the charges."],
            examinerNote: "(a) Allow 'redox' only with the correct type. (b) Allow 'no displacement'. (c) Reject BaSO$_4$ shown as soluble. (d) Allow ecf for the precipitate from (c).",
          },
        },
      ],
    },
  ],
};
