import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "myps3-u1-lesson-1-2",
  code: "1-2",
  title: "Chemical Reactions",
  goal: "I CAN write and balance chemical equations, identify types of reaction, and explain energy changes in reactions.",
  standards: [
    "Key concept: Change",
    "MYP Sciences: Matter",
    "Criterion A: Knowing and understanding",
    "Criterion C: Processing and evaluating",
  ],
  vocabulary: [
    { term: "Chemical reaction", definition: "A process where substances change into new substances with different properties." },
    { term: "Reactant", definition: "A substance that is used up in a chemical reaction (written on the left of the arrow)." },
    { term: "Product", definition: "A substance formed in a chemical reaction (written on the right of the arrow)." },
    { term: "Balanced equation", definition: "An equation where the number of atoms of each element is the same on both sides." },
    { term: "Synthesis reaction", definition: "Two or more substances combine to form one product, e.g. $2H_2+O_2\\to2H_2O$." },
    { term: "Decomposition reaction", definition: "One substance breaks down into two or more products." },
    { term: "Displacement reaction", definition: "A more reactive element replaces a less reactive one in a compound." },
    { term: "Exothermic reaction", definition: "A reaction that releases energy to the surroundings, usually as heat." },
    { term: "Endothermic reaction", definition: "A reaction that absorbs energy from the surroundings." },
  ],
  concepts: [
    {
      id: "myps3-u1-equations",
      title: "Writing and balancing equations",
      skill: "Write word and symbol equations and balance them using the conservation of mass.",
      lesson: {
        sections: [
          {
            heading: "Word equations",
            body: "A **word equation** describes a reaction in words:\n\nhydrogen + oxygen → water\n\nThe reactants are on the left, products on the right, and the arrow means \"reacts to form\".",
          },
          {
            heading: "Symbol equations",
            body: "Use chemical formulae instead of names:\n\n$H_2+O_2\\to H_2O$\n\nThis is **unbalanced** — there are 2 oxygen atoms on the left but only 1 on the right.",
          },
          {
            heading: "Balancing",
            body: "Balance by adding **coefficients** (numbers in front of formulae) until each element has the same number of atoms on both sides. Never change the formulae themselves.\n\n$2H_2+O_2\\to2H_2O$: left has 4 H and 2 O; right has 4 H and 2 O. Balanced!",
          },
        ],
        keyFormulas: [
          { name: "Conservation of mass", statement: "Atoms are neither created nor destroyed in a chemical reaction" },
          { name: "Balancing rule", statement: "Use coefficients to balance; never change subscripts in formulae" },
        ],
        workedExample: {
          problem: "Balance the equation $CH_4+O_2\\to CO_2+H_2O$.",
          solution: "Carbon: 1 on each side, balanced. Hydrogen: 4 on left, 2 on right — need $2H_2O$. Oxygen: 2 on left, $2+2=4$ on right — need $2O_2$. Result: $CH_4+2O_2\\to CO_2+2H_2O$.",
        },
      },
      questions: [
        {
          id: "myps3-u1-equations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a balanced equation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$H_2+O_2\\to H_2O$" },
              { id: "b", text: "$2H_2+O_2\\to 2H_2O$" },
              { id: "c", text: "$H_2+2O_2\\to 2H_2O$" },
              { id: "d", text: "$2H_2+2O_2\\to 2H_2O$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Conservation of mass", statement: "Atoms must balance on both sides." },
            ],
            steps: [
              { reasoning: "Check each: (b) has 4 H and 2 O on both sides.", working: "4H,2O\\text{ each side}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $2H_2+O_2\\to 2H_2O$",
            commonErrors: ["Choosing (d) which has 4 O on left but only 2 on right."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u1-equations-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Balance the equation $N_2+H_2\\to NH_3$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Conservation of mass", statement: "Balance atoms using coefficients." },
            ],
            steps: [
              { reasoning: "Nitrogen is balanced (2 each side). Hydrogen: 2 on left, 3 on right — need $2NH_3$ for 6 H, so $3H_2$ for 6 H.", working: "N_2+3H_2\\to2NH_3", marks: 1, markCode: "M" },
              { reasoning: "Check: 2 N and 6 H on each side.", working: "2N,6H\\text{ each side}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$N_2+3H_2\\to2NH_3$",
            commonErrors: ["Changing $NH_3$ to $NH_2$ to balance."],
            examinerNote: "M1 for coefficients, A1 for verified balance.",
          },
        },
        {
          id: "myps3-u1-equations-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Write a balanced symbol equation for the reaction: calcium carbonate decomposes on heating to form calcium oxide and carbon dioxide.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Decomposition reaction", statement: "One substance breaks down into two or more products." },
              { kind: "principle", name: "Conservation of mass", statement: "Balance atoms using coefficients." },
            ],
            steps: [
              { reasoning: "Write the formulae: $CaCO_3\\to CaO+CO_2$.", working: "CaCO_3\\to CaO+CO_2", marks: 1, markCode: "M" },
              { reasoning: "Check atoms: Ca 1=1, C 1=1, O 3=1+2=3. Already balanced.", working: "3O=3O\\checkmark", marks: 1, markCode: "M" },
              { reasoning: "State the balanced equation.", working: "CaCO_3\\to CaO+CO_2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$CaCO_3\\to CaO+CO_2$",
            commonErrors: ["Writing $CaCO_3\\to CaO+CO_2$ but adding unnecessary coefficients.", "Getting the formulae wrong: $CaCO_3$ not $CaCO_2$."],
            examinerNote: "M1 for formulae, M1 for checking, A1 for balanced equation.",
          },
        },
        {
          id: "myps3-u1-equations-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student investigates the reaction between iron and copper(II) sulfate solution. The word equation is: iron + copper(II) sulfate → iron(II) sulfate + copper.",
          parts: [
            { label: "a", prompt: "Write the symbol equation for this reaction using $Fe$, $CuSO_4$, $FeSO_4$ and $Cu$.", marks: 2 },
            { label: "b", prompt: "Balance the equation.", marks: 2 },
            { label: "c", prompt: "Identify the type of reaction and explain why it occurs.", marks: 2 },
            { label: "d", prompt: "The student observes the blue solution fades and a reddish-brown solid appears. Explain these observations in terms of the reaction.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Displacement reaction", statement: "A more reactive element displaces a less reactive one from its compound." },
              { kind: "principle", name: "Conservation of mass", statement: "Balance atoms using coefficients." },
            ],
            steps: [
              { part: "a", reasoning: "Write formulae for reactants and products.", working: "Fe+CuSO_4\\to FeSO_4+Cu", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the equation.", working: "Fe+CuSO_4\\to FeSO_4+Cu", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Check atoms: Fe 1=1, Cu 1=1, S 1=1, O 4=4. Already balanced.", working: "already\\ balanced", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State balanced.", working: "Fe+CuSO_4\\to FeSO_4+Cu", marks: 1, markCode: "A" },
              { part: "c", reasoning: "This is a displacement reaction: iron is more reactive than copper.", working: "\\text{displacement}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Explain: iron displaces copper from its sulfate solution.", working: "\\text{Fe more reactive than Cu}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Blue colour fades because $CuSO_4$ (blue) is used up and $FeSO_4$ (pale green) forms.", working: "\\text{blue }CuSO_4\\to\\text{pale green }FeSO_4", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Red-brown solid is copper metal deposited.", working: "\\text{Cu metal deposited}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $Fe+CuSO_4\\to FeSO_4+Cu$ (b) already balanced (c) displacement; iron is more reactive than copper (d) blue $CuSO_4$ fades as pale green $FeSO_4$ forms; red-brown copper metal appears",
            commonErrors: ["Adding coefficients unnecessarily in (b).", "Not linking colour changes to specific chemicals."],
            examinerNote: "M1 A1 per part; R1 R1 for displacement explanation.",
          },
        },
        {
          id: "myps3-u1-equations-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a chemical equation, the reactants are written:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "On the left of the arrow" },
              { id: "b", text: "On the right of the arrow" },
              { id: "c", text: "Above the arrow" },
              { id: "d", text: "Below the arrow" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reactant", statement: "A substance used up in a reaction; written on the left of the arrow." },
            ],
            steps: [
              { reasoning: "Reactants are on the left; products on the right.", working: "\\text{reactants}\\to\\text{products}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** On the left of the arrow",
            commonErrors: ["Reversing reactants and products."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "myps3-u1-equations-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the arrow (→) represent in a chemical equation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reversible reaction" },
              { id: "b", text: "Reacts to form" },
              { id: "c", text: "Equals" },
              { id: "d", text: "Produces energy" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Chemical equation", statement: "Reactants → products; the arrow means reacts to form." },
            ],
            steps: [
              { reasoning: "The arrow shows the direction of the reaction.", working: "\\text{reacts to form}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Reacts to form",
            commonErrors: ["Reading it as 'equals' — atoms are conserved but substances change."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u1-equations-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many hydrogen atoms are present in $2H_2O$?",
          response: { type: "numeric", parts: [{ label: "Hydrogen atoms", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Chemical formula", statement: "Subscripts show the number of atoms; coefficients multiply the whole formula." },
            ],
            steps: [
              { reasoning: "Each $H_2O$ has 2 hydrogen atoms; the coefficient 2 doubles it.", working: "2\\times2=4", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "4\\text{ H atoms}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$ hydrogen atoms",
            commonErrors: ["Answering 2 — forgetting the coefficient multiplies."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u1-equations-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "In the balanced equation $2H_2+O_2\\to2H_2O$, how many oxygen atoms are on each side?",
          response: { type: "numeric", parts: [{ label: "Oxygen atoms", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Conservation of mass", statement: "Each element must have the same number of atoms on both sides." },
            ],
            steps: [
              { reasoning: "Left: $O_2$ has 2 oxygen atoms. Right: each $H_2O$ has 1 oxygen; coefficient 2 gives 2.", working: "2=2\\checkmark", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "2\\text{ oxygen atoms}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$ oxygen atoms on each side",
            commonErrors: ["Counting only one side of the equation."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u1-equations-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "In the balanced equation $2Mg+O_2\\to2MgO$, how many magnesium atoms are on each side of the equation?",
          response: { type: "numeric", parts: [{ label: "Magnesium atoms", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Conservation of mass", statement: "Atoms must be equal in number on both sides." },
            ],
            steps: [
              { reasoning: "Left side: $2Mg$ contains 2 magnesium atoms.", working: "2\\times1=2", marks: 1, markCode: "M" },
              { reasoning: "Right side: $2MgO$ also contains 2 magnesium atoms — they match.", working: "2=2\\checkmark", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$ magnesium atoms on each side",
            commonErrors: ["Counting the coefficient 2 plus the atom inside $MgO$ as separate atoms."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u1-equations-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these equations is unbalanced?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$H_2+O_2\\to2H_2O$" },
              { id: "b", text: "$2H_2+O_2\\to2H_2O$" },
              { id: "c", text: "$2Mg+O_2\\to2MgO$" },
              { id: "d", text: "$N_2+3H_2\\to2NH_3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Conservation of mass", statement: "Atoms must be equal in number on both sides." },
            ],
            steps: [
              { reasoning: "(a) has 2 H on the left but 4 H on the right.", working: "2H\\neq4H", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $H_2+O_2\\to2H_2O$",
            commonErrors: ["Checking only one element."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "myps3-u1-equations-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In the balanced equation $2KClO_3\\to2KCl+3O_2$, what is the coefficient of $O_2$?",
          response: { type: "numeric", parts: [{ label: "Coefficient", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Coefficient", statement: "The number in front of a formula showing how many units react or form." },
            ],
            steps: [
              { reasoning: "Identify the number written before $O_2$.", working: "3O_2", marks: 1, markCode: "M" },
              { reasoning: "State the coefficient.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$",
            commonErrors: ["Counting the oxygen atoms (6) instead of the coefficient."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u1-equations-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In the balanced equation $2H_2+O_2\\to2H_2O$, what is the total number of atoms on each side of the equation?",
          response: { type: "numeric", parts: [{ label: "Total atoms", answer: 6 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Conservation of mass", statement: "Atoms must be equal in number on both sides." },
            ],
            steps: [
              { reasoning: "Left: $2H_2$ has 4 H atoms and $O_2$ has 2 O atoms, total $4+2=6$.", working: "4+2=6", marks: 1, markCode: "M" },
              { reasoning: "Right: $2H_2O$ has 6 atoms total, matching the left.", working: "2\\times3=6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6$ atoms on each side",
            commonErrors: ["Counting only hydrogen atoms and ignoring oxygen."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u1-equations-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why must you never change the subscripts (the small numbers inside a formula) when balancing an equation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It makes the equation look untidy" },
              { id: "b", text: "It changes the identity of the substance" },
              { id: "c", text: "It adds extra atoms" },
              { id: "d", text: "It removes the need for coefficients" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balancing rule", statement: "Use coefficients only; changing subscripts changes the substance." },
            ],
            steps: [
              { reasoning: "Subscripts define the formula — changing them makes a different substance.", working: "\\text{subscripts}=\\text{identity}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It changes the identity of the substance",
            commonErrors: ["Thinking subscripts can be adjusted like coefficients."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u1-equations-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "In the balanced equation $Zn+2HCl\\to ZnCl_2+H_2$, what is the total number of atoms on each side of the equation?",
          response: { type: "numeric", parts: [{ label: "Total atoms", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Conservation of mass", statement: "Atoms must be equal in number on both sides." },
            ],
            steps: [
              { reasoning: "Left: $Zn$ (1) + $2HCl$ (4 atoms) = 5 atoms total.", working: "1+4=5", marks: 1, markCode: "M" },
              { reasoning: "Right: $ZnCl_2$ (3) + $H_2$ (2) = 5 atoms total.", working: "3+2=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$ atoms on each side",
            commonErrors: ["Forgetting that $2HCl$ contains four atoms, not two."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u1-equations-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "In the balanced equation $2Al+3Cl_2\\to2AlCl_3$, how many chlorine atoms are on each side?",
          response: { type: "numeric", parts: [{ label: "Chlorine atoms", answer: 6 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Conservation of mass", statement: "Each element has the same number of atoms on both sides." },
            ],
            steps: [
              { reasoning: "Left: $3Cl_2$ gives $3\\times2=6$ chlorine atoms.", working: "3\\times2=6", marks: 1, markCode: "M" },
              { reasoning: "Right: $2AlCl_3$ gives $2\\times3=6$ chlorine atoms.", working: "6=6\\checkmark", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6$ chlorine atoms on each side",
            commonErrors: ["Counting coefficient 3 as the atom count."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u1-equations-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In the balanced equation $N_2+3H_2\\to2NH_3$, how many atoms are there on each side of the equation?",
          response: { type: "numeric", parts: [{ label: "Total atoms", answer: 8 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Conservation of mass", statement: "Atoms must be equal in number on both sides." },
            ],
            steps: [
              { reasoning: "Left: $N_2$ (2) + $3H_2$ (6) = 8 atoms.", working: "2+6=8", marks: 1, markCode: "M" },
              { reasoning: "Right: $2NH_3$ (8) matches — atoms are conserved.", working: "2\\times4=8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8$ atoms on each side",
            commonErrors: ["Counting $NH_3$ as only two atoms instead of four."],
            examinerNote: "M1 A1.",
          },
        },
      ],
    },
    {
      id: "myps3-u1-reaction-types",
      title: "Types of reaction and energy changes",
      skill: "Identify synthesis, decomposition, displacement and combustion reactions, and explain exothermic and endothermic changes.",
      lesson: {
        sections: [
          {
            heading: "Types of reaction",
            body: "**Synthesis**: $A+B\\to AB$ (two combine to one). **Decomposition**: $AB\\to A+B$ (one breaks into two). **Displacement**: $A+BC\\to AC+B$ (more reactive element replaces less reactive). **Combustion**: a substance reacts with oxygen, usually producing $CO_2$ and $H_2O$.",
          },
          {
            heading: "Energy changes",
            body: "**Exothermic** reactions release energy (heat, light) — the surroundings get warmer. Examples: combustion, respiration, neutralisation. **Endothermic** reactions absorb energy — the surroundings get cooler. Example: thermal decomposition of calcium carbonate, photosynthesis.",
          },
          {
            heading: "Energy profiles",
            body: "On an energy profile diagram, exothermic reactions show products **lower** than reactants (energy released). Endothermic reactions show products **higher** than reactants (energy absorbed). The difference is the energy change $\\Delta H$.",
          },
        ],
        keyFormulas: [
          { name: "Exothermic", statement: "Releases energy; products lower in energy than reactants" },
          { name: "Endothermic", statement: "Absorbs energy; products higher in energy than reactants" },
        ],
        workedExample: {
          problem: "Classify each: (a) $2Mg+O_2\\to2MgO$, (b) $CaCO_3\\to CaO+CO_2$, (c) combustion of methane.",
          solution: "(a) Synthesis (two → one). (b) Decomposition (one → two). (c) Combustion.",
        },
      },
      questions: [
        {
          id: "myps3-u1-reaction-types-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which type of reaction is $2H_2+O_2\\to2H_2O$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Decomposition" },
              { id: "b", text: "Displacement" },
              { id: "c", text: "Synthesis" },
              { id: "d", text: "Combustion" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Synthesis reaction", statement: "Two or more reactants form one product." },
            ],
            steps: [
              { reasoning: "Two reactants ($H_2$ and $O_2$) form one product ($H_2O$).",
                working: "2\\to1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Synthesis",
            commonErrors: ["Choosing combustion — no oxygen is consumed as a separate reactant here (it's part of $O_2$)."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "myps3-u1-reaction-types-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A reaction causes the surroundings to get colder. Is it exothermic or endothermic? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Endothermic reaction", statement: "Absorbs energy from surroundings." },
            ],
            steps: [
              { reasoning: "Surroundings getting colder means energy is being absorbed.", working: "\\text{energy absorbed}", marks: 1, markCode: "M" },
              { reasoning: "Conclude endothermic.", working: "\\text{endothermic}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Endothermic — it absorbs energy from the surroundings",
            commonErrors: ["Confusing endothermic with exothermic."],
            examinerNote: "M1 for reasoning, A1 for conclusion.",
          },
        },
        {
          id: "myps3-u1-reaction-types-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The reaction $N_2+3H_2\\to2NH_3$ is exothermic. On an energy profile diagram, would the products be higher or lower than the reactants? Explain what this means.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Exothermic reaction", statement: "Releases energy; products lower in energy than reactants." },
            ],
            steps: [
              { reasoning: "Exothermic means energy is released to surroundings.", working: "\\text{energy released}", marks: 1, markCode: "M" },
              { reasoning: "On the diagram, products are lower than reactants.", working: "\\text{products lower}", marks: 1, markCode: "M" },
              { reasoning: "Explain: the energy difference is released as heat/light.", working: "\\Delta H<0", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Products are lower than reactants; energy is released",
            commonErrors: ["Drawing products higher (that's endothermic)."],
            examinerNote: "M1 for exothermic meaning, M1 for diagram position, R1 for explanation.",
          },
        },
        {
          id: "myps3-u1-reaction-types-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Consider these reactions:",
          parts: [
            { label: "a", prompt: "Classify $CaCO_3\\to CaO+CO_2$ as synthesis, decomposition or displacement.", marks: 1 },
            { label: "b", prompt: "Classify $2Mg+O_2\\to2MgO$ as synthesis, decomposition or displacement.", marks: 1 },
            { label: "c", prompt: "Classify $Zn+CuSO_4\\to ZnSO_4+Cu$ as synthesis, decomposition or displacement.", marks: 1 },
            { label: "d", prompt: "For each reaction in (a), (b) and (c), state whether it is likely exothermic or endothermic, giving a reason.", marks: 3 },
            { label: "e", prompt: "Explain why combustion reactions are always exothermic.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reaction types", statement: "Synthesis: many→one; Decomposition: one→many; Displacement: element replaces element in compound." },
              { kind: "definition", name: "Exothermic/endothermic", statement: "Exothermic releases energy; endothermic absorbs." },
            ],
            steps: [
              { part: "a", reasoning: "One reactant forms two products.", working: "\\text{decomposition}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Two reactants form one product.", working: "\\text{synthesis}", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Zinc displaces copper from its compound.", working: "\\text{displacement}", marks: 1, markCode: "B" },
              { part: "d", reasoning: "(a) Thermal decomposition of calcium carbonate is endothermic — it needs continuous heating.", working: "\\text{endothermic}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "(b) Formation of magnesium oxide is exothermic — it burns brightly releasing heat and light.", working: "\\text{exothermic}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "(c) Displacement of copper by zinc is exothermic — the reaction warms the mixture.", working: "\\text{exothermic}", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Combustion releases energy stored in the fuel's bonds as heat and light.", working: "\\text{energy released from bonds}", marks: 1, markCode: "R" },
              { part: "e", reasoning: "The products (CO₂, H₂O) are more stable and lower in energy than the reactants.", working: "\\text{products lower in energy}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) decomposition (b) synthesis (c) displacement (d) (a) endothermic, (b) exothermic, (c) exothermic (e) combustion releases energy from fuel bonds as the products are more stable",
            commonErrors: ["Classifying by number of products alone without checking reactants.", "Saying all reactions are exothermic."],
            examinerNote: "B1 each for classification; R1 each for energy type with reason; R1 A1 for combustion explanation.",
          },
        },
        {
          id: "myps3-u1-reaction-types-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the typical products of a complete combustion reaction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Carbon monoxide and water" },
              { id: "b", text: "Carbon dioxide and water" },
              { id: "c", text: "Oxygen and hydrogen" },
              { id: "d", text: "Carbon and hydrogen" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Combustion reaction", statement: "A fuel reacts with oxygen to form carbon dioxide and water." },
            ],
            steps: [
              { reasoning: "Complete combustion of a hydrocarbon gives $CO_2$ and $H_2O$.", working: "CO_2+H_2O", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Carbon dioxide and water",
            commonErrors: ["Choosing carbon monoxide — that is incomplete combustion."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u1-reaction-types-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A synthesis reaction involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One reactant forming two products" },
              { id: "b", text: "Two or more reactants forming one product" },
              { id: "c", text: "An element replacing another in a compound" },
              { id: "d", text: "A fuel reacting with oxygen" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Synthesis reaction", statement: "Two or more substances combine to form one product." },
            ],
            steps: [
              { reasoning: "Synthesis means 'putting together' — many reactants to one product.", working: "\\text{many}\\to\\text{one}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Two or more reactants forming one product",
            commonErrors: ["Confusing synthesis with decomposition."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u1-reaction-types-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Classify the reaction $CaO+H_2O\\to Ca(OH)_2$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Synthesis" },
              { id: "b", text: "Decomposition" },
              { id: "c", text: "Displacement" },
              { id: "d", text: "Combustion" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Synthesis reaction", statement: "Two or more reactants form one product." },
            ],
            steps: [
              { reasoning: "Two reactants ($CaO$ and $H_2O$) form one product ($Ca(OH)_2$).", working: "2\\to1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Synthesis",
            commonErrors: ["Choosing decomposition — there is only one product."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "myps3-u1-reaction-types-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "In the decomposition of water, $2H_2O\\to2H_2+O_2$, how many product substances are formed?",
          response: { type: "numeric", parts: [{ label: "Products", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Decomposition reaction", statement: "One substance breaks down into two or more products." },
            ],
            steps: [
              { reasoning: "The products are $H_2$ and $O_2$ — two substances.", working: "H_2+O_2", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "2\\text{ products}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$ product substances",
            commonErrors: ["Counting coefficients (2 and 1) instead of substances."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u1-reaction-types-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "In the reaction $Fe+S\\to FeS$, how many atoms are on each side of the equation?",
          response: { type: "numeric", parts: [{ label: "Atoms", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Synthesis reaction", statement: "Two or more reactants form one product." },
            ],
            steps: [
              { reasoning: "Left: one Fe atom and one S atom = 2 atoms; right: one FeS molecule = 2 atoms.", working: "1+1=2;\\ 2=2", marks: 1, markCode: "M" },
              { reasoning: "The equation is balanced with 2 atoms on each side.", working: "2=2\\checkmark", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$ atoms on each side",
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u1-reaction-types-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "An exothermic reaction:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Absorbs energy from the surroundings" },
              { id: "b", text: "Releases energy to the surroundings" },
              { id: "c", text: "Requires continuous heating" },
              { id: "d", text: "Produces no energy change" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Exothermic reaction", statement: "Releases energy to the surroundings, usually as heat." },
            ],
            steps: [
              { reasoning: "Exo- means 'out' — energy leaves the reaction system.", working: "\\text{energy released}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Releases energy to the surroundings",
            commonErrors: ["Confusing exothermic with endothermic."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u1-reaction-types-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which of these reactions is most likely to be endothermic?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Burning methane in a Bunsen flame" },
              { id: "b", text: "Respiration in cells" },
              { id: "c", text: "Thermal decomposition of calcium carbonate" },
              { id: "d", text: "Neutralisation of an acid and alkali" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Endothermic reaction", statement: "Absorbs energy from the surroundings." },
            ],
            steps: [
              { reasoning: "Thermal decomposition needs continuous heating, so it absorbs energy.", working: "\\text{needs heat}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Thermal decomposition of calcium carbonate",
            commonErrors: ["Choosing combustion — combustion is always exothermic."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "myps3-u1-reaction-types-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "On an energy profile diagram, an endothermic reaction shows:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Products at a lower energy level than reactants" },
              { id: "b", text: "Products at a higher energy level than reactants" },
              { id: "c", text: "No change in energy level" },
              { id: "d", text: "Two peaks of equal height" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Energy profile", statement: "Endothermic: products higher than reactants; exothermic: products lower." },
            ],
            steps: [
              { reasoning: "Endo- means 'in' — energy is absorbed, so products sit higher on the profile.", working: "\\text{products higher}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Products at a higher energy level than reactants",
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u1-reaction-types-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "In the combustion reaction $CH_4+2O_2\\to CO_2+2H_2O$, how many oxygen atoms are on each side of the equation?",
          response: { type: "numeric", parts: [{ label: "Oxygen atoms", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Conservation of mass", statement: "Each element has the same number of atoms on both sides." },
            ],
            steps: [
              { reasoning: "Left: $2O_2$ contains $2\\times2=4$ oxygen atoms.", working: "2\\times2=4", marks: 1, markCode: "M" },
              { reasoning: "Right: $CO_2$ has 2 O and $2H_2O$ has 2 O, total $2+2=4$.", working: "2+2=4\\checkmark", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$ oxygen atoms on each side",
            commonErrors: ["Counting only the coefficient 2 instead of the 4 atoms."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u1-reaction-types-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "In the combustion of methane, $CH_4+2O_2\\to CO_2+2H_2O$, how many reactant substances are there?",
          response: { type: "numeric", parts: [{ label: "Reactants", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reactant", statement: "A substance used up in the reaction; written on the left of the arrow." },
            ],
            steps: [
              { reasoning: "The reactants are methane ($CH_4$) and oxygen ($O_2$).", working: "CH_4+O_2", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "2\\text{ reactants}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$ reactant substances",
            commonErrors: ["Counting products instead of reactants."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u1-reaction-types-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Cellular respiration releases energy. Explain, in terms of chemical bonds, where this energy comes from.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Energy release in reactions", statement: "Breaking bonds in reactants and forming new bonds in products releases energy if products are more stable." },
            ],
            steps: [
              { reasoning: "Bonds in glucose and oxygen are broken during respiration.", working: "\\text{bonds broken}", marks: 1, markCode: "R" },
              { reasoning: "New bonds form in carbon dioxide and water, releasing energy.", working: "\\text{bonds formed release energy}", marks: 1, markCode: "R" },
              { reasoning: "The products are lower in energy than the reactants, so the difference is released as heat for the cell.", working: "\\Delta H<0", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Energy is released when new, more stable bonds form in the products, which are lower in energy than the reactants",
            commonErrors: ["Saying energy is 'created' during respiration."],
            examinerNote: "R1 R1 A1.",
          },
        },
        {
          id: "myps3-u1-reaction-types-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these is NOT one of the main types of reaction described?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Synthesis" },
              { id: "b", text: "Decomposition" },
              { id: "c", text: "Displacement" },
              { id: "d", text: "Neutralisation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reaction types", statement: "Synthesis, decomposition, displacement and combustion are the main types." },
            ],
            steps: [
              { reasoning: "Neutralisation is a specific acid–base reaction, not one of the four main types.", working: "\\text{neutralisation}\\neq\\text{type}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Neutralisation",
            commonErrors: ["Thinking neutralisation is a separate main type."],
            examinerNote: "B1 for (d).",
          },
        },
      ],
    },
  ],
};
