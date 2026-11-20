import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "chemsl-u1-lesson-1-2",
  code: "1-2",
  title: "Empirical and Molecular Formulae",
  goal: "I CAN determine the empirical formula from percentage or mass composition and the molecular formula from the empirical formula and molar mass.",
  standards: ["Topic 1.1", "Paper 1", "Paper 2"],
  vocabulary: [
    { term: "Empirical formula", definition: "The simplest whole-number ratio of atoms of each element in a compound, e.g. $\\mathrm{CH_2O}$ for glucose." },
    { term: "Molecular formula", definition: "The actual number of atoms of each element in one molecule of a molecular compound, e.g. $\\mathrm{C_6H_{12}O_6}$ for glucose." },
    { term: "Percentage composition", definition: "The percentage by mass of each element present in a compound." },
    { term: "Empirical formula mass", definition: "The mass of one mole of the empirical formula, i.e. the sum of $A_r$ values in the simplest ratio." },
    { term: "Structural formula", definition: "A formula showing the arrangement of atoms within a molecule, including which atoms are bonded to which." },
    { term: "Hydrate", definition: "A crystalline compound containing a fixed number of water molecules of crystallisation per formula unit, written e.g. $\\mathrm{CuSO_4\\cdot5H_2O}$." },
  ],
  concepts: [
    {
      id: "chemsl-u1-empirical-formula",
      title: "The empirical formula",
      skill: "Convert mass or percentage composition into the simplest whole-number ratio of atoms.",
      lesson: {
        sections: [
          {
            heading: "From masses to a mole ratio",
            body: "The empirical formula gives the simplest ratio of atoms in a compound. When masses of each element are given, convert each mass to an amount in moles using $n=\\frac{m}{A_r}$, since $A_r$ in g mol$^{-1}$ is the molar mass of the element. The mole ratio is the atom ratio.",
          },
          {
            heading: "From percentage composition",
            body: "When composition is given as percentages, assume a $100\\ \\mathrm{g}$ sample so that each percentage is numerically the mass in grams. Convert each to moles with $n=\\frac{m}{A_r}$, then divide every amount by the smallest amount to obtain the simplest ratio. This is the standard IB method for Paper 2.",
          },
          {
            heading: "Obtaining whole numbers",
            body: "The mole ratio rarely comes out as whole numbers immediately. Divide by the smallest value; if the ratio still contains fractions or decimals, multiply all values by a small integer (2, 3, 4...) until all are whole numbers. Check that the result cannot be simplified further. For example a ratio of $1:1.5:2$ becomes $2:3:4$ on multiplying by 2.",
          },
        ],
        keyFormulas: [
          { name: "Amount of element", statement: "$n=\\frac{m}{A_r}$" },
          { name: "Simplest ratio", statement: "$\\text{ratio}=\\frac{n_i}{n_{\\min}}$ for each element" },
          { name: "Percentage to mass", statement: "$m=\\frac{\\%}{100}\\times100\\ \\mathrm{g}$ (assume $100\\ \\mathrm{g}$ sample)" },
        ],
        workedExample: {
          problem: "A compound contains $40.0\\%$ carbon, $6.70\\%$ hydrogen and $53.3\\%$ oxygen by mass. Determine its empirical formula. ($A_r$: C $12.0$, H $1.0$, O $16.0$)",
          solution: "Assume $100\\ \\mathrm{g}$: $n(C)=\\frac{40.0}{12.0}=3.33$, $n(H)=\\frac{6.70}{1.0}=6.70$, $n(O)=\\frac{53.3}{16.0}=3.33$. Dividing by $3.33$ gives $1:2:1$, so the empirical formula is $\\mathrm{CH_2O}$.",
        },
      },
      questions: [
        {
          id: "chemsl-u1-empirical-formula-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which is the empirical formula of ethane, $\\mathrm{C_2H_6}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\mathrm{CH_3}$" },
              { id: "b", text: "$\\mathrm{C_2H_6}$" },
              { id: "c", text: "$\\mathrm{CH_2}$" },
              { id: "d", text: "$\\mathrm{C_3H_9}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Empirical formula", statement: "The simplest whole-number ratio of atoms in a compound." },
            ],
            steps: [
              { reasoning: "Divide the ratio $2:6$ by the highest common factor $2$.", working: "2:6=1:3", marks: 1, markCode: "M" },
              { reasoning: "Write the simplest ratio as a formula.", working: "\\mathrm{CH_3}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\mathrm{CH_3}$",
            commonErrors: ["Choosing $\\mathrm{CH_2}$ by dividing only the carbon coefficient.", "Thinking the empirical formula must have more than one atom of each element."],
          },
        },
        {
          id: "chemsl-u1-empirical-formula-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A compound contains $40.0\\%$ carbon, $6.70\\%$ hydrogen and $53.3\\%$ oxygen by mass. Which is its empirical formula? ($A_r$: C $12.0$, H $1.0$, O $16.0$)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\mathrm{CH_2O}$" },
              { id: "b", text: "$\\mathrm{C_2H_4O_2}$" },
              { id: "c", text: "$\\mathrm{C_3H_6O_3}$" },
              { id: "d", text: "$\\mathrm{CH_4O}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Empirical formula method", statement: "Assume $100\\ \\mathrm{g}$, convert percentages to moles, divide by the smallest." },
            ],
            steps: [
              { reasoning: "Convert percentages to moles in a $100\\ \\mathrm{g}$ sample: $3.33$, $6.70$ and $3.33\\ \\mathrm{mol}$ respectively.", working: "n(C)=3.33,\\ n(H)=6.70,\\ n(O)=3.33", marks: 1, markCode: "M" },
              { reasoning: "Divide by the smallest amount $3.33$ to get the ratio $1:2:1$.", working: "\\frac{3.33}{3.33}:\\frac{6.70}{3.33}:\\frac{3.33}{3.33}=1:2:1", marks: 1, markCode: "A" },
              { reasoning: "Write the simplest whole-number ratio as a formula: $\\mathrm{CH_2O}$.", working: "\\mathrm{CH_2O}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\mathrm{CH_2O}$",
            commonErrors: ["Using the percentages directly as the ratio ($40:6.7:53.3$).", "Failing to simplify, giving $\\mathrm{C_3H_6O_3}$."],
            examinerNote: "Follow-through: a correctly derived ratio earns the final mark even if simplified incorrectly.",
          },
        },
        {
          id: "chemsl-u1-empirical-formula-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A $4.00\\ \\mathrm{g}$ sample of a hydrocarbon contains $3.00\\ \\mathrm{g}$ of carbon and $1.00\\ \\mathrm{g}$ of hydrogen. ($A_r$: C $12.0$, H $1.0$)",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Amount of element", statement: "$n=\\frac{m}{A_r}$" },
              { kind: "definition", name: "Empirical formula", statement: "Simplest whole-number atom ratio." },
            ],
            steps: [
              { reasoning: "Convert each mass to moles.", working: "n(C)=\\frac{3.00}{12.0}=0.250\\ \\mathrm{mol}", marks: 1, markCode: "M" },
              { reasoning: "Convert the hydrogen mass to moles.", working: "n(H)=\\frac{1.00}{1.0}=1.00\\ \\mathrm{mol}", marks: 1, markCode: "A" },
              { reasoning: "Divide both amounts by the smallest, $0.250$.", working: "0.250:1.00=1:4", marks: 1, markCode: "M" },
              { reasoning: "State the empirical formula.", working: "\\mathrm{CH_4}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\mathrm{CH_4}$",
            commonErrors: ["Dividing by $1.00$ (the largest) instead of the smallest.", "Leaving the ratio as $0.250:1.00$ without simplifying."],
          },
        },
        {
          id: "chemsl-u1-empirical-formula-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A student analyses a compound that contains only carbon, hydrogen and oxygen. The percentage composition by mass is $40.0\\%$ carbon, $6.70\\%$ hydrogen and $53.3\\%$ oxygen. ($A_r$: C $12.0$, H $1.0$, O $16.0$)",
          parts: [
            { label: "a", prompt: "Calculate the amount, in moles, of each element in a $100\\ \\mathrm{g}$ sample.", marks: 2 },
            { label: "b", prompt: "Show that the simplest mole ratio is $1:2:1$ and state the empirical formula.", marks: 2 },
            { label: "c", prompt: "Calculate the empirical formula mass.", marks: 2 },
            { label: "d", prompt: "A different analysis of the same compound gives $36.0\\%$ oxygen by mass. Suggest why the empirical formula could appear to change, and explain how this should be handled.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Empirical formula method", statement: "Assume $100\\ \\mathrm{g}$; $n=\\frac{\\%}{A_r}$; divide by smallest." },
              { kind: "formula", name: "Empirical formula mass", statement: "$M_{\\mathrm{emp}}=\\sum A_r$ of the empirical formula." },
            ],
            steps: [
              { part: "a", reasoning: "Convert each percentage to moles in a $100\\ \\mathrm{g}$ sample.", working: "n(C)=\\frac{40.0}{12.0}=3.33,\\ n(H)=\\frac{6.70}{1.0}=6.70,\\ n(O)=\\frac{53.3}{16.0}=3.33", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All three amounts correct with units.", working: "3.33,\\ 6.70,\\ 3.33\\ \\mathrm{mol}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divide each amount by $3.33$.", working: "\\frac{3.33}{3.33}:\\frac{6.70}{3.33}:\\frac{3.33}{3.33}=1:2:1\\ \\text{(AG)}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the empirical formula.", working: "\\mathrm{CH_2O}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Sum the $A_r$ values of $\\mathrm{CH_2O}$.", working: "12.0+2(1.0)+16.0", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "M_{\\mathrm{emp}}=30.0\\ \\mathrm{g\\,mol^{-1}}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The percentages would no longer total $100\\%$ reliably, or analytical uncertainty/rounding shifts the ratio; experimental error means percentages should sum to $100\\%$ and small deviations must be handled by checking totals.", working: "\\text{percentages must total }100\\%", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Recompute the mole ratio from the corrected data; do not average percentages blindly — the simplest whole-number ratio is still required.", working: "\\text{recompute ratio}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $3.33$, $6.70$, $3.33\\ \\mathrm{mol}$ (b) $\\mathrm{CH_2O}$ (c) $30.0\\ \\mathrm{g\\,mol^{-1}}$ (d) inconsistent percentages indicate analytical error; recompute from data summing to $100\\%$",
            commonErrors: ["Forgetting to state the formula in (b) even though the ratio is correct.", "Using $M_{\\mathrm{emp}}=30$ without units."],
            examinerNote: "In (d) accept answers referring to experimental uncertainty, rounding, or percentages not summing to $100\\%$.",
          },
        },
        {
          id: "chemsl-u1-empirical-formula-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which is the empirical formula of $\\mathrm{C_2H_6O_2}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\mathrm{CH_3O}$" },
              { id: "b", text: "$\\mathrm{C_2H_6O_2}$" },
              { id: "c", text: "$\\mathrm{CH_2O}$" },
              { id: "d", text: "$\\mathrm{C_3H_9O_3}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Empirical formula", statement: "The simplest whole-number ratio of atoms in a compound." },
            ],
            steps: [
              { reasoning: "Divide the ratio $2:6:2$ by the highest common factor $2$.", working: "2:6:2=1:3:1", marks: 1, markCode: "M" },
              { reasoning: "Write the simplest ratio as a formula.", working: "\\mathrm{CH_3O}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\mathrm{CH_3O}$",
            commonErrors: ["Choosing $\\mathrm{CH_2O}$ by halving only part of the ratio.", "Thinking the molecular formula $\\mathrm{C_2H_6O_2}$ is the empirical formula."],
          },
        },
        {
          id: "chemsl-u1-empirical-formula-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A compound is $85.7\\%$ carbon and $14.3\\%$ hydrogen by mass. What is its empirical formula? ($A_r$: C $12.0$, H $1.0$)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\mathrm{CH_4}$" },
              { id: "b", text: "$\\mathrm{CH_2}$" },
              { id: "c", text: "$\\mathrm{C_2H_4}$" },
              { id: "d", text: "$\\mathrm{CH}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Empirical formula method", statement: "Assume $100\\ \\mathrm{g}$; $n=\\frac{\\%}{A_r}$; divide by smallest." },
            ],
            steps: [
              { reasoning: "Convert percentages to moles: $n(C)=\\frac{85.7}{12.0}=7.14$, $n(H)=\\frac{14.3}{1.0}=14.3$.", working: "7.14:14.3", marks: 1, markCode: "M" },
              { reasoning: "Divide by $7.14$ to get $1:2$, giving $\\mathrm{CH_2}$.", working: "\\frac{7.14}{7.14}:\\frac{14.3}{7.14}=1:2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $\\mathrm{CH_2}$",
            commonErrors: ["Using the percentages directly as the ratio.", "Forgetting to simplify $7.14:14.3$ correctly."],
          },
        },
        {
          id: "chemsl-u1-empirical-formula-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A $26.3\\ \\mathrm{g}$ sample of a compound contains $24.3\\ \\mathrm{g}$ of magnesium and $2.0\\ \\mathrm{g}$ of hydrogen. What is its empirical formula? ($A_r$: Mg $24.3$, H $1.0$)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\mathrm{MgH}$" },
              { id: "b", text: "$\\mathrm{MgH_2}$" },
              { id: "c", text: "$\\mathrm{Mg_2H}$" },
              { id: "d", text: "$\\mathrm{MgH_4}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Amount of element", statement: "$n=\\frac{m}{A_r}$" },
            ],
            steps: [
              { reasoning: "Convert masses to moles: $n(\\mathrm{Mg})=\\frac{24.3}{24.3}=1.00$, $n(\\mathrm{H})=\\frac{2.0}{1.0}=2.0$.", working: "1.00:2.0=1:2", marks: 1, markCode: "M" },
              { reasoning: "Write the simplest ratio as a formula.", working: "\\mathrm{MgH_2}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $\\mathrm{MgH_2}$",
            commonErrors: ["Dividing by the wrong value to get $2:1$ instead of $1:2$.", "Using $A_r(\\mathrm{Mg})=24$ sloppily and getting a non-whole ratio without scaling."],
          },
        },
        {
          id: "chemsl-u1-empirical-formula-q8",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "The mole ratio of C:H:O in a compound is $1:1.5:2$. Which is its empirical formula?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\mathrm{C_2H_3O_4}$" },
              { id: "b", text: "$\\mathrm{CH_{1.5}O_2}$" },
              { id: "c", text: "$\\mathrm{C_3H_4O_6}$" },
              { id: "d", text: "$\\mathrm{C_2H_4O_4}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Empirical formula", statement: "The simplest whole-number ratio of atoms." },
            ],
            steps: [
              { reasoning: "Multiply every term by 2 to remove the fraction $1.5$.", working: "1:1.5:2\\times2=2:3:4", marks: 1, markCode: "M" },
              { reasoning: "Check the ratio cannot be simplified further and write the formula.", working: "\\mathrm{C_2H_3O_4}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\mathrm{C_2H_3O_4}$",
            commonErrors: ["Leaving $1.5$ as a subscript, which is not allowed in a formula.", "Choosing $\\mathrm{C_3H_4O_6}$ which is a multiple of the simplest ratio."],
          },
        },
        {
          id: "chemsl-u1-empirical-formula-q9",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 3,
          stem: "A compound contains $20.0\\%$ carbon, $6.7\\%$ hydrogen, $46.7\\%$ nitrogen and $26.6\\%$ oxygen by mass. ($A_r$: C $12.0$, H $1.0$, N $14.0$, O $16.0$) In a $100\\ \\mathrm{g}$ sample, (a) calculate the amount of nitrogen in moles, (b) determine the empirical formula and its empirical formula mass.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $n(\\mathrm{N})$ / mol", answer: 3.34, tolerance: 0.01, unit: "mol" },
              { label: "(b) $M_{\\mathrm{emp}}$ / g mol$^{-1}$", answer: 60, tolerance: 0.1, unit: "g mol^-1" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Empirical formula method", statement: "Assume $100\\ \\mathrm{g}$; $n=\\frac{\\%}{A_r}$; divide by smallest." },
            ],
            steps: [
              { reasoning: "Convert the nitrogen percentage to moles.", working: "n(\\mathrm{N})=\\frac{46.7}{14.0}=3.34\\ \\mathrm{mol}", marks: 1, markCode: "M" },
              { reasoning: "Convert all percentages to moles: $1.67$, $6.7$, $3.34$, $1.66$; dividing by $1.67$ gives $1:4:2:1$, so the empirical formula is $\\mathrm{CH_4N_2O}$.", working: "\\mathrm{CH_4N_2O}", marks: 1, markCode: "M" },
              { reasoning: "Sum the $A_r$ values of the empirical formula.", working: "M_{\\mathrm{emp}}=12.0+4(1.0)+2(14.0)+16.0=60.0\\ \\mathrm{g\\,mol^{-1}}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $3.34\\ \\mathrm{mol}$ (b) $\\mathrm{CH_4N_2O}$, $M_{\\mathrm{emp}}=60.0\\ \\mathrm{g\\,mol^{-1}}$",
            commonErrors: ["Using $A_r(\\mathrm{N})=14$ correctly but dividing by the wrong smallest value.", "Stopping at a non-whole-number ratio."],
          },
        },
        {
          id: "chemsl-u1-empirical-formula-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A $4.00\\ \\mathrm{g}$ sample of a compound contains $2.40\\ \\mathrm{g}$ of carbon, $0.40\\ \\mathrm{g}$ of hydrogen and $1.20\\ \\mathrm{g}$ of oxygen. ($A_r$: C $12.0$, H $1.0$, O $16.0$) Find (a) the amount of carbon in moles, (b) the amount of oxygen in moles, (c) the empirical formula mass.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $n(\\mathrm{C})$ / mol", answer: 0.2, tolerance: 0.001, unit: "mol" },
              { label: "(b) $n(\\mathrm{O})$ / mol", answer: 0.075, tolerance: 0.001, unit: "mol" },
              { label: "(c) $M_{\\mathrm{emp}}$ / g mol$^{-1}$", answer: 160, tolerance: 0.1, unit: "g mol^-1" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Amount of element", statement: "$n=\\frac{m}{A_r}$" },
              { kind: "definition", name: "Empirical formula", statement: "Simplest whole-number atom ratio." },
            ],
            steps: [
              { reasoning: "Convert the carbon mass to moles.", working: "n(\\mathrm{C})=\\frac{2.40}{12.0}=0.200\\ \\mathrm{mol}", marks: 1, markCode: "M" },
              { reasoning: "Convert hydrogen and oxygen masses: $n(\\mathrm{H})=\\frac{0.40}{1.0}=0.400$, $n(\\mathrm{O})=\\frac{1.20}{16.0}=0.0750$; ratio $0.200:0.400:0.0750=8:16:3$.", working: "8:16:3", marks: 1, markCode: "M" },
              { reasoning: "The ratio $8:16:3$ cannot be simplified, so the empirical formula is $\\mathrm{C_8H_{16}O_3}$.", working: "\\mathrm{C_8H_{16}O_3}", marks: 1, markCode: "A" },
              { reasoning: "Sum the $A_r$ values.", working: "M_{\\mathrm{emp}}=8(12.0)+16(1.0)+3(16.0)=160\\ \\mathrm{g\\,mol^{-1}}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $0.200\\ \\mathrm{mol}$ (b) $0.0750\\ \\mathrm{mol}$ (c) $\\mathrm{C_8H_{16}O_3}$, $M_{\\mathrm{emp}}=160\\ \\mathrm{g\\,mol^{-1}}$",
            commonErrors: ["Dividing by $0.0750$ directly and stopping at $2.67:5.33:1$ without scaling to whole numbers.", "Simplifying $8:16:3$ incorrectly to $4:8:1.5$."],
          },
        },
        {
          id: "chemsl-u1-empirical-formula-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "A compound contains $54.5\\%$ carbon, $9.1\\%$ hydrogen and $36.4\\%$ oxygen by mass. ($A_r$: C $12.0$, H $1.0$, O $16.0$) In a $100\\ \\mathrm{g}$ sample, (a) calculate the amount of oxygen in moles and (b) calculate the empirical formula mass.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $n(\\mathrm{O})$ / mol", answer: 2.28, tolerance: 0.01, unit: "mol" },
              { label: "(b) $M_{\\mathrm{emp}}$ / g mol$^{-1}$", answer: 44, tolerance: 0.1, unit: "g mol^-1" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Empirical formula method", statement: "Assume $100\\ \\mathrm{g}$; $n=\\frac{\\%}{A_r}$; divide by smallest." },
            ],
            steps: [
              { reasoning: "Convert the oxygen percentage to moles.", working: "n(\\mathrm{O})=\\frac{36.4}{16.0}=2.28\\ \\mathrm{mol}", marks: 1, markCode: "M" },
              { reasoning: "Convert all percentages: $4.54$, $9.1$, $2.28$; dividing by $2.28$ gives $1.99:3.99:1\\approx2:4:1$.", working: "2:4:1", marks: 1, markCode: "M" },
              { reasoning: "State the empirical formula.", working: "\\mathrm{C_2H_4O}", marks: 1, markCode: "A" },
              { reasoning: "Sum the $A_r$ values of $\\mathrm{C_2H_4O}$.", working: "2(12.0)+4(1.0)+16.0=44.0", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "M_{\\mathrm{emp}}=44.0\\ \\mathrm{g\\,mol^{-1}}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $2.28\\ \\mathrm{mol}$ (b) $\\mathrm{C_2H_4O}$, $M_{\\mathrm{emp}}=44.0\\ \\mathrm{g\\,mol^{-1}}$",
            commonErrors: ["Rounding $1.99$ to $2$ without comment — accepted if the ratio is shown.", "Forgetting that $\\mathrm{C_2H_4O}$ is already the simplest ratio."],
          },
        },
        {
          id: "chemsl-u1-empirical-formula-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "A $3.00\\ \\mathrm{g}$ sample of a compound contains $1.80\\ \\mathrm{g}$ of carbon, $0.30\\ \\mathrm{g}$ of hydrogen and $0.90\\ \\mathrm{g}$ of oxygen. ($A_r$: C $12.0$, H $1.0$, O $16.0$) Calculate (a) $n(\\mathrm{C})$, (b) $n(\\mathrm{H})$ and (c) $n(\\mathrm{O})$.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $n(\\mathrm{C})$ / mol", answer: 0.15, tolerance: 0.001, unit: "mol" },
              { label: "(b) $n(\\mathrm{H})$ / mol", answer: 0.3, tolerance: 0.001, unit: "mol" },
              { label: "(c) $n(\\mathrm{O})$ / mol", answer: 0.056, tolerance: 0.001, unit: "mol" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Amount of element", statement: "$n=\\frac{m}{A_r}$" },
              { kind: "definition", name: "Empirical formula", statement: "Simplest whole-number atom ratio." },
            ],
            steps: [
              { reasoning: "Convert each mass to moles.", working: "n(\\mathrm{C})=\\frac{1.80}{12.0}=0.150\\ \\mathrm{mol}", marks: 1, markCode: "M" },
              { reasoning: "Convert hydrogen.", working: "n(\\mathrm{H})=\\frac{0.30}{1.0}=0.300\\ \\mathrm{mol}", marks: 1, markCode: "M" },
              { reasoning: "Convert oxygen.", working: "n(\\mathrm{O})=\\frac{0.90}{16.0}=0.0563\\ \\mathrm{mol}", marks: 1, markCode: "M" },
              { reasoning: "Divide by the smallest $0.0563$: $2.66:5.33:1$; multiply by 3 to get $8:16:3$.", working: "8:16:3", marks: 1, markCode: "M" },
              { reasoning: "State the empirical formula.", working: "\\mathrm{C_8H_{16}O_3}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $0.150\\ \\mathrm{mol}$ (b) $0.300\\ \\mathrm{mol}$ (c) $0.0563\\ \\mathrm{mol}$; ratio $8:16:3$ gives $\\mathrm{C_8H_{16}O_3}$",
            commonErrors: ["Dividing by the largest amount instead of the smallest.", "Leaving the ratio as decimals without scaling to whole numbers."],
          },
        },
        {
          id: "chemsl-u1-empirical-formula-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "An organic compound X contains only carbon, hydrogen and oxygen. Its percentage composition by mass is $55.8\\%$ carbon, $7.0\\%$ hydrogen and $37.2\\%$ oxygen, and its molar mass is $86.0\\ \\mathrm{g\\,mol^{-1}}$. ($A_r$: C $12.0$, H $1.0$, O $16.0$)",
          parts: [
            { label: "a", prompt: "Calculate the amount, in moles, of each element in a $100\\ \\mathrm{g}$ sample.", marks: 2 },
            { label: "b", prompt: "Determine the empirical formula of X.", marks: 2 },
            { label: "c", prompt: "Calculate the empirical formula mass.", marks: 2 },
            { label: "d", prompt: "Use the molar mass to determine whether the empirical formula is also the molecular formula, justifying your answer.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Empirical formula method", statement: "Assume $100\\ \\mathrm{g}$; $n=\\frac{\\%}{A_r}$; divide by smallest." },
              { kind: "formula", name: "Empirical formula mass", statement: "$M_{\\mathrm{emp}}=\\sum A_r$ of the empirical formula." },
            ],
            steps: [
              { part: "a", reasoning: "Convert each percentage to moles in a $100\\ \\mathrm{g}$ sample.", working: "n(C)=\\frac{55.8}{12.0}=4.65,\\ n(H)=\\frac{7.0}{1.0}=7.0,\\ n(O)=\\frac{37.2}{16.0}=2.33", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All three amounts correct with units.", working: "4.65,\\ 7.0,\\ 2.33\\ \\mathrm{mol}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divide by the smallest amount $2.33$.", working: "\\frac{4.65}{2.33}:\\frac{7.0}{2.33}:\\frac{2.33}{2.33}=2:3:1", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the empirical formula.", working: "\\mathrm{C_2H_3O}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Sum the $A_r$ values of $\\mathrm{C_2H_3O}$.", working: "2(12.0)+3(1.0)+16.0", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "M_{\\mathrm{emp}}=43.0\\ \\mathrm{g\\,mol^{-1}}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Compare the molar mass with the empirical formula mass: $\\frac{86.0}{43.0}=2$, a whole number, so the empirical formula is not the molecular formula; the molecular formula is twice the empirical formula.", working: "n=\\frac{86.0}{43.0}=2", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Conclusion: $\\mathrm{C_4H_6O_2}$ is the molecular formula.", working: "\\mathrm{C_4H_6O_2}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $4.65$, $7.0$, $2.33\\ \\mathrm{mol}$ (b) $\\mathrm{C_2H_3O}$ (c) $43.0\\ \\mathrm{g\\,mol^{-1}}$ (d) molecular formula is $\\mathrm{C_4H_6O_2}$ since $n=2$",
            commonErrors: ["Forgetting part (d) requires comparing $M_r$ with $M_{\\mathrm{emp}}$.", "Quoting $43$ without units in (c)."],
            examinerNote: "Accept $\\mathrm{C_4H_6O_2}$ or an explanation that the molecular formula is a multiple of the empirical formula.",
          },
        },
        {
          id: "chemsl-u1-empirical-formula-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "A $4.00\\ \\mathrm{g}$ sample of a compound contains $2.40\\ \\mathrm{g}$ of carbon, $0.40\\ \\mathrm{g}$ of hydrogen and $1.20\\ \\mathrm{g}$ of oxygen. ($A_r$: C $12.0$, H $1.0$, O $16.0$)",
          parts: [
            { label: "a", prompt: "Calculate the amount, in moles, of each element.", marks: 2 },
            { label: "b", prompt: "Determine the empirical formula.", marks: 2 },
            { label: "c", prompt: "Explain why the mole ratio must be scaled to whole numbers before writing the formula.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Amount of element", statement: "$n=\\frac{m}{A_r}$" },
              { kind: "definition", name: "Empirical formula", statement: "Simplest whole-number ratio of atoms." },
            ],
            steps: [
              { part: "a", reasoning: "Convert each mass to moles: $0.200$, $0.400$ and $0.0750\\ \\mathrm{mol}$.", working: "n(C)=0.200,\\ n(H)=0.400,\\ n(O)=0.0750", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All three amounts correct with units.", working: "0.200,\\ 0.400,\\ 0.0750\\ \\mathrm{mol}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divide by the smallest amount $0.0750$ and scale: $2.67:5.33:1$ becomes $8:16:3$.", working: "8:16:3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the empirical formula.", working: "\\mathrm{C_8H_{16}O_3}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A chemical formula must show whole numbers of atoms; fractional subscripts like $2.67$ are meaningless for a real compound.", working: "\\text{whole-number subscripts required}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Multiplying the ratio by a small integer preserves the proportion while giving whole numbers.", working: "\\times3\\Rightarrow8:16:3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $0.200$, $0.400$, $0.0750\\ \\mathrm{mol}$ (b) $\\mathrm{C_8H_{16}O_3}$ (c) formulas require whole-number atom ratios, so fractions are cleared by scaling",
            commonErrors: ["Writing fractional subscripts in the formula.", "Scaling by the wrong factor and obtaining a non-simplest ratio."],
          },
        },
        {
          id: "chemsl-u1-empirical-formula-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A compound has a mole ratio of C:H:O equal to $1:2:3$. What is its empirical formula?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\mathrm{CH_2O_3}$" },
              { id: "b", text: "$\\mathrm{C_2H_4O_6}$" },
              { id: "c", text: "$\\mathrm{CHO_2}$" },
              { id: "d", text: "$\\mathrm{C_3H_6O_9}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Empirical formula", statement: "The simplest whole-number ratio of atoms." },
            ],
            steps: [
              { reasoning: "The ratio $1:2:3$ is already in simplest whole numbers.", working: "1:2:3", marks: 1, markCode: "M" },
              { reasoning: "Write the ratio as a formula with C first, then H, then O.", working: "\\mathrm{CH_2O_3}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\mathrm{CH_2O_3}$",
            commonErrors: ["Choosing $\\mathrm{C_2H_4O_6}$ which is a multiple of the simplest ratio.", "Reordering the elements incorrectly."],
          },
        },
        {
          id: "chemsl-u1-empirical-formula-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "A compound gives $40.0\\%$ carbon, $6.70\\%$ hydrogen and $53.3\\%$ oxygen by mass ($A_r$: C $12.0$, H $1.0$, O $16.0$). A student divides every percentage by $40.0$ and obtains the ratio $1:0.17:1.33$, then writes the formula $\\mathrm{C_{1}H_{0.17}O_{1.33}}$. Explain what the student did wrong and determine the correct empirical formula.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Empirical formula method", statement: "Assume $100\\ \\mathrm{g}$; convert percentages to moles with $n=\\frac{\\%}{A_r}$; divide by smallest." },
              { kind: "definition", name: "Empirical formula", statement: "Simplest whole-number ratio of atoms." },
            ],
            steps: [
              { reasoning: "Percentages are masses, not amounts of substance; they must first be converted to moles using $A_r$ before any ratio is formed.", working: "n=\\frac{\\%}{A_r}", marks: 1, markCode: "M" },
              { reasoning: "Dividing percentages directly ignores the different $A_r$ values of the elements.", working: "\\text{must convert to moles first}", marks: 1, markCode: "M" },
              { reasoning: "Correct moles: $3.33$, $6.70$, $3.33$; dividing by $3.33$ gives $1:2:1$.", working: "1:2:1", marks: 1, markCode: "M" },
              { reasoning: "The correct empirical formula is $\\mathrm{CH_2O}$; fractional subscripts such as $0.17$ are not permitted.", working: "\\mathrm{CH_2O}", marks: 1, markCode: "A" },
              { reasoning: "State the conclusion clearly: the mole ratio, not the percentage ratio, gives the atom ratio.", working: "\\text{mole ratio}\\neq\\text{percentage ratio}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The student used percentages as the ratio; converting to moles first gives $1:2:1$, so the empirical formula is $\\mathrm{CH_2O}$",
            commonErrors: ["Identifying the error but failing to give the correct formula.", "Claiming the student should have divided by a different percentage rather than converting to moles."],
          },
        },
      ],
    },
    {
      id: "chemsl-u1-molecular-formula",
      title: "The molecular formula",
      skill: "Scale the empirical formula by $n=\\frac{M_r}{M_{\\mathrm{emp}}}$ to obtain the molecular formula.",
      lesson: {
        sections: [
          {
            heading: "Empirical versus molecular formula",
            body: "The empirical formula is the simplest ratio and may not represent the actual molecule. Many different molecular formulae share one empirical formula: $\\mathrm{CH_2O}$ could be formaldehyde $\\mathrm{CH_2O}$, acetic acid $\\mathrm{C_2H_4O_2}$ or glucose $\\mathrm{C_6H_{12}O_6}$. To find the molecular formula an additional measurement — the molar mass $M_r$ — is required.",
          },
          {
            heading: "The scaling factor",
            body: "Calculate the empirical formula mass $M_{\\mathrm{emp}}$ by summing $A_r$ in the empirical formula. The molecular formula is the empirical formula multiplied by a whole number $n=\\frac{M_r}{M_{\\mathrm{emp}}}$. For a molecular compound, $n$ must be a whole number; if the quotient is not close to an integer, check the empirical formula or the molar mass for error.",
          },
          {
            heading: "A worked sequence",
            body: "The standard sequence is: percentage composition $\\rightarrow$ moles $\\rightarrow$ empirical formula $\\rightarrow$ empirical formula mass $\\rightarrow$ $n=\\frac{M_r}{M_{\\mathrm{emp}}}$ $\\rightarrow$ molecular formula. IB exam questions typically supply the molar mass (sometimes via gas density, which is studied later in the course).",
          },
        ],
        keyFormulas: [
          { name: "Scaling factor", statement: "$n=\\frac{M_r}{M_{\\mathrm{emp}}}$ (must be a whole number)" },
          { name: "Molecular formula", statement: "$\\mathrm{(empirical\\ formula)}_n$" },
          { name: "Molar mass check", statement: "$M_r=n\\times M_{\\mathrm{emp}}$" },
        ],
        workedExample: {
          problem: "A compound has empirical formula $\\mathrm{CH_2O}$ and molar mass $180\\ \\mathrm{g\\,mol^{-1}}$. Determine its molecular formula. ($A_r$: C $12.0$, H $1.0$, O $16.0$)",
          solution: "$M_{\\mathrm{emp}}=12.0+2(1.0)+16.0=30.0\\ \\mathrm{g\\,mol^{-1}}$, so $n=\\frac{180}{30.0}=6$. The molecular formula is $\\mathrm{C_6H_{12}O_6}$ (glucose).",
        },
      },
      questions: [
        {
          id: "chemsl-u1-molecular-formula-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The empirical formula of a compound is $\\mathrm{CH_2}$ and its molar mass is $42.0\\ \\mathrm{g\\,mol^{-1}}$. What is its molecular formula? ($A_r$: C $12.0$, H $1.0$)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\mathrm{C_3H_6}$" },
              { id: "b", text: "$\\mathrm{CH_2}$" },
              { id: "c", text: "$\\mathrm{C_6H_{12}}$" },
              { id: "d", text: "$\\mathrm{C_2H_4}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Scaling factor", statement: "$n=\\frac{M_r}{M_{\\mathrm{emp}}}$" },
            ],
            steps: [
              { reasoning: "Find the empirical formula mass: $12.0+2(1.0)=14.0\\ \\mathrm{g\\,mol^{-1}}$.", working: "M_{\\mathrm{emp}}=14.0", marks: 1, markCode: "M" },
              { reasoning: "Compute $n=\\frac{42.0}{14.0}=3$, so the molecular formula is $\\mathrm{(CH_2)_3}$.", working: "n=3\\Rightarrow\\mathrm{C_3H_6}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\mathrm{C_3H_6}$",
            commonErrors: ["Choosing $\\mathrm{C_6H_{12}}$ by using $n=6$.", "Forgetting that $n$ must be a whole number."],
          },
        },
        {
          id: "chemsl-u1-molecular-formula-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A compound has the empirical formula $\\mathrm{CH_2O}$ ($M_{\\mathrm{emp}}=30.0\\ \\mathrm{g\\,mol^{-1}}$) and a molar mass of $150\\ \\mathrm{g\\,mol^{-1}}$. Determine its molecular formula. ($A_r$: C $12.0$, H $1.0$, O $16.0$)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\mathrm{C_5H_{10}O_5}$" },
              { id: "b", text: "$\\mathrm{C_6H_{12}O_6}$" },
              { id: "c", text: "$\\mathrm{C_4H_8O_4}$" },
              { id: "d", text: "$\\mathrm{C_{10}H_{20}O_{10}}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Scaling factor", statement: "$n=\\frac{M_r}{M_{\\mathrm{emp}}}$" },
            ],
            steps: [
              { reasoning: "Compute the scaling factor.", working: "n=\\frac{150}{30.0}=5", marks: 1, markCode: "M" },
              { reasoning: "Multiply each subscript in the empirical formula by 5.", working: "\\mathrm{C_5H_{10}O_5}", marks: 1, markCode: "A" },
              { reasoning: "Check: $M_r=5\\times30.0=150\\ \\mathrm{g\\,mol^{-1}}$ — consistent.", working: "5\\times30=150", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\mathrm{C_5H_{10}O_5}$",
            commonErrors: ["Using $n=6$ from a remembered glucose example instead of computing it."],
          },
        },
        {
          id: "chemsl-u1-molecular-formula-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Vitamin C (ascorbic acid) contains $40.9\\%$ carbon, $4.55\\%$ hydrogen and $54.5\\%$ oxygen by mass and has a molar mass of $176\\ \\mathrm{g\\,mol^{-1}}$. ($A_r$: C $12.0$, H $1.0$, O $16.0$)",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Empirical formula method", statement: "Assume $100\\ \\mathrm{g}$; $n=\\frac{\\%}{A_r}$; divide by smallest." },
              { kind: "formula", name: "Scaling factor", statement: "$n=\\frac{M_r}{M_{\\mathrm{emp}}}$" },
            ],
            steps: [
              { reasoning: "Convert percentages to moles in $100\\ \\mathrm{g}$.", working: "n(C)=\\frac{40.9}{12.0}=3.41,\\ n(H)=\\frac{4.55}{1.0}=4.55,\\ n(O)=\\frac{54.5}{16.0}=3.41", marks: 1, markCode: "M" },
              { reasoning: "Divide by $3.41$ to get the ratio $1:1.33:1$; multiply by 3 to clear the fraction.", working: "1:1.33:1\\Rightarrow3:4:3", marks: 1, markCode: "A" },
              { reasoning: "Empirical formula is $\\mathrm{C_3H_4O_3}$ with $M_{\\mathrm{emp}}=88.0\\ \\mathrm{g\\,mol^{-1}}$; compute $n=\\frac{176}{88.0}=2$.", working: "n=2", marks: 1, markCode: "M" },
              { reasoning: "Molecular formula is the empirical formula doubled: $\\mathrm{C_6H_8O_6}$.", working: "\\mathrm{C_6H_8O_6}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\mathrm{C_6H_8O_6}$",
            commonErrors: ["Stopping at the empirical formula $\\mathrm{C_3H_4O_3}$.", "Dividing by the wrong value and obtaining a non-whole-number ratio without scaling."],
            examinerNote: "Check percentages sum to $100\\%$ (here $40.9+4.55+54.5=99.95$, acceptable rounding).",
          },
        },
        {
          id: "chemsl-u1-molecular-formula-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "An unknown organic compound X contains only carbon, hydrogen and oxygen. Its percentage composition by mass is $54.5\\%$ carbon, $9.09\\%$ hydrogen and $36.4\\%$ oxygen, and its molar mass is $88.0\\ \\mathrm{g\\,mol^{-1}}$. ($A_r$: C $12.0$, H $1.0$, O $16.0$)",
          parts: [
            { label: "a", prompt: "Calculate the amount, in moles, of each element in a $100\\ \\mathrm{g}$ sample.", marks: 2 },
            { label: "b", prompt: "Determine the empirical formula of X.", marks: 2 },
            { label: "c", prompt: "Calculate the empirical formula mass.", marks: 2 },
            { label: "d", prompt: "Determine the molecular formula of X and justify that your answer is consistent with the molar mass.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Empirical formula method", statement: "Assume $100\\ \\mathrm{g}$; $n=\\frac{\\%}{A_r}$; divide by smallest." },
              { kind: "formula", name: "Scaling factor", statement: "$n=\\frac{M_r}{M_{\\mathrm{emp}}}$" },
            ],
            steps: [
              { part: "a", reasoning: "Convert percentages to moles in a $100\\ \\mathrm{g}$ sample.", working: "n(C)=\\frac{54.5}{12.0}=4.54,\\ n(H)=\\frac{9.09}{1.0}=9.09,\\ n(O)=\\frac{36.4}{16.0}=2.28", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All three amounts correct.", working: "4.54,\\ 9.09,\\ 2.28\\ \\mathrm{mol}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divide by the smallest amount $2.28$.", working: "\\frac{4.54}{2.28}:\\frac{9.09}{2.28}:\\frac{2.28}{2.28}=1.99:3.99:1\\approx2:4:1", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the empirical formula.", working: "\\mathrm{C_2H_4O}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Sum $A_r$ values of $\\mathrm{C_2H_4O}$.", working: "2(12.0)+4(1.0)+16.0=44.0", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "M_{\\mathrm{emp}}=44.0\\ \\mathrm{g\\,mol^{-1}}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Compute $n=\\frac{88.0}{44.0}=2$, a whole number, so multiply the empirical formula by 2.", working: "n=2\\Rightarrow\\mathrm{C_4H_8O_2}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Consistency: $M_r=2\\times44.0=88.0\\ \\mathrm{g\\,mol^{-1}}$, matching the given molar mass.", working: "2\\times44.0=88.0", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $4.54$, $9.09$, $2.28\\ \\mathrm{mol}$ (b) $\\mathrm{C_2H_4O}$ (c) $44.0\\ \\mathrm{g\\,mol^{-1}}$ (d) $\\mathrm{C_4H_8O_2}$, consistent since $2\\times44.0=88.0$",
            commonErrors: ["In (b) rounding $1.99$ to $2$ without showing the ratio; credit given for correct rounding.", "In (d) giving $\\mathrm{C_2H_4O}$ as the molecular formula."],
            examinerNote: "Accept $\\mathrm{C_4H_8O_2}$ or its equivalent written form.",
          },
        },
        {
          id: "chemsl-u1-molecular-formula-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A compound has the empirical formula $\\mathrm{CH_2}$ and a molar mass of $28.0\\ \\mathrm{g\\,mol^{-1}}$. What is its molecular formula? ($A_r$: C $12.0$, H $1.0$)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\mathrm{C_2H_4}$" },
              { id: "b", text: "$\\mathrm{CH_2}$" },
              { id: "c", text: "$\\mathrm{C_3H_6}$" },
              { id: "d", text: "$\\mathrm{C_4H_8}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Scaling factor", statement: "$n=\\frac{M_r}{M_{\\mathrm{emp}}}$" },
            ],
            steps: [
              { reasoning: "Empirical formula mass: $12.0+2(1.0)=14.0\\ \\mathrm{g\\,mol^{-1}}$; $n=\\frac{28.0}{14.0}=2$.", working: "n=2", marks: 1, markCode: "M" },
              { reasoning: "Double the empirical formula.", working: "\\mathrm{(CH_2)_2=C_2H_4}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\mathrm{C_2H_4}$",
            commonErrors: ["Answering $\\mathrm{CH_2}$ because it is the empirical formula.", "Using $n=4$ to get $\\mathrm{C_4H_8}$."],
          },
        },
        {
          id: "chemsl-u1-molecular-formula-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A compound has the empirical formula $\\mathrm{N_2O}$ ($M_{\\mathrm{emp}}=44.0\\ \\mathrm{g\\,mol^{-1}}$) and a molar mass of $88.0\\ \\mathrm{g\\,mol^{-1}}$. What is its molecular formula?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\mathrm{N_2O}$" },
              { id: "b", text: "$\\mathrm{N_2O_2}$" },
              { id: "c", text: "$\\mathrm{N_4O_2}$" },
              { id: "d", text: "$\\mathrm{NO}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Scaling factor", statement: "$n=\\frac{M_r}{M_{\\mathrm{emp}}}$" },
            ],
            steps: [
              { reasoning: "Compute $n=\\frac{88.0}{44.0}=2$.", working: "n=2", marks: 1, markCode: "M" },
              { reasoning: "Double every subscript: $\\mathrm{(N_2O)_2=N_4O_2}$.", working: "\\mathrm{N_4O_2}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $\\mathrm{N_4O_2}$",
            commonErrors: ["Answering $\\mathrm{N_2O_2}$ by adding an oxygen rather than doubling all subscripts."],
          },
        },
        {
          id: "chemsl-u1-molecular-formula-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A compound has the empirical formula $\\mathrm{CH_2O}$ and a molar mass of $90.0\\ \\mathrm{g\\,mol^{-1}}$. What is its molecular formula? ($M_{\\mathrm{emp}}=30.0\\ \\mathrm{g\\,mol^{-1}}$)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\mathrm{C_3H_6O_3}$" },
              { id: "b", text: "$\\mathrm{C_2H_4O_2}$" },
              { id: "c", text: "$\\mathrm{C_6H_{12}O_6}$" },
              { id: "d", text: "$\\mathrm{CH_2O}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Scaling factor", statement: "$n=\\frac{M_r}{M_{\\mathrm{emp}}}$" },
            ],
            steps: [
              { reasoning: "Compute $n=\\frac{90.0}{30.0}=3$.", working: "n=3", marks: 1, markCode: "M" },
              { reasoning: "Multiply each subscript by 3.", working: "\\mathrm{(CH_2O)_3=C_3H_6O_3}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\mathrm{C_3H_6O_3}$",
            commonErrors: ["Choosing $\\mathrm{C_6H_{12}O_6}$ (glucose) which has $M_r=180$, not $90$.", "Answering the empirical formula $\\mathrm{CH_2O}$."],
          },
        },
        {
          id: "chemsl-u1-molecular-formula-q8",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "A compound has the empirical formula $\\mathrm{C_2H_4O_2}$ ($M_{\\mathrm{emp}}=60.0\\ \\mathrm{g\\,mol^{-1}}$) and a molar mass of $120\\ \\mathrm{g\\,mol^{-1}}$. What is its molecular formula?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\mathrm{C_4H_8O_4}$" },
              { id: "b", text: "$\\mathrm{C_2H_4O_2}$" },
              { id: "c", text: "$\\mathrm{C_6H_{12}O_6}$" },
              { id: "d", text: "$\\mathrm{C_3H_6O_3}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Scaling factor", statement: "$n=\\frac{M_r}{M_{\\mathrm{emp}}}$" },
            ],
            steps: [
              { reasoning: "Compute $n=\\frac{120}{60.0}=2$.", working: "n=2", marks: 1, markCode: "M" },
              { reasoning: "Double the empirical formula: $\\mathrm{C_4H_8O_4}$.", working: "\\mathrm{(C_2H_4O_2)_2=C_4H_8O_4}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\mathrm{C_4H_8O_4}$",
            commonErrors: ["Forgetting to double every subscript, giving e.g. $\\mathrm{C_2H_4O_4}$."],
          },
        },
        {
          id: "chemsl-u1-molecular-formula-q9",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 3,
          stem: "A compound has the empirical formula $\\mathrm{CH_2O}$ ($M_{\\mathrm{emp}}=30.0\\ \\mathrm{g\\,mol^{-1}}$) and a molar mass of $90.0\\ \\mathrm{g\\,mol^{-1}}$. Calculate (a) the scaling factor $n$ and (b) the mass of one mole of the molecular formula.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $n$", answer: 3, tolerance: 0.001 },
              { label: "(b) $M_r$ / g mol$^{-1}$", answer: 90, tolerance: 0.1, unit: "g mol^-1" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Scaling factor", statement: "$n=\\frac{M_r}{M_{\\mathrm{emp}}}$" },
              { kind: "formula", name: "Molar mass check", statement: "$M_r=n\\times M_{\\mathrm{emp}}$" },
            ],
            steps: [
              { reasoning: "Divide the molar mass by the empirical formula mass.", working: "n=\\frac{90.0}{30.0}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $n=3$.", working: "n=3", marks: 1, markCode: "A" },
              { reasoning: "Check: $3\\times30.0=90.0\\ \\mathrm{g\\,mol^{-1}}$, matching the given molar mass.", working: "3\\times30.0=90.0", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $n=3$ (b) $90.0\\ \\mathrm{g\\,mol^{-1}}$",
            commonErrors: ["Dividing $30.0$ by $90.0$ to get $n=0.333$.", "Forgetting that $n$ must be a whole number."],
          },
        },
        {
          id: "chemsl-u1-molecular-formula-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A compound has the percentage composition $40.0\\%$ carbon, $6.7\\%$ hydrogen and $53.3\\%$ oxygen by mass and a molar mass of $60.0\\ \\mathrm{g\\,mol^{-1}}$. ($A_r$: C $12.0$, H $1.0$, O $16.0$) In a $100\\ \\mathrm{g}$ sample, (a) calculate $n(\\mathrm{C})$, (b) determine the empirical formula mass and (c) the molecular formula.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $n(\\mathrm{C})$ / mol", answer: 3.33, tolerance: 0.01, unit: "mol" },
              { label: "(b) $M_{\\mathrm{emp}}$ / g mol$^{-1}$", answer: 30, tolerance: 0.1, unit: "g mol^-1" },
              { label: "(c) $n$", answer: 2, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Empirical formula method", statement: "Assume $100\\ \\mathrm{g}$; $n=\\frac{\\%}{A_r}$; divide by smallest." },
              { kind: "formula", name: "Scaling factor", statement: "$n=\\frac{M_r}{M_{\\mathrm{emp}}}$" },
            ],
            steps: [
              { reasoning: "Convert the carbon percentage to moles.", working: "n(\\mathrm{C})=\\frac{40.0}{12.0}=3.33\\ \\mathrm{mol}", marks: 1, markCode: "M" },
              { reasoning: "Moles are $3.33$, $6.7$, $3.33$; ratio $1:2:1$ gives empirical formula $\\mathrm{CH_2O}$ with $M_{\\mathrm{emp}}=30.0\\ \\mathrm{g\\,mol^{-1}}$.", working: "M_{\\mathrm{emp}}=30.0", marks: 1, markCode: "M" },
              { reasoning: "Compute the scaling factor.", working: "n=\\frac{60.0}{30.0}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $n=2$, so the molecular formula is $\\mathrm{C_2H_4O_2}$.", working: "n=2\\Rightarrow\\mathrm{C_2H_4O_2}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $3.33\\ \\mathrm{mol}$ (b) $30.0\\ \\mathrm{g\\,mol^{-1}}$ (c) $n=2$, molecular formula $\\mathrm{C_2H_4O_2}$",
            commonErrors: ["Stopping at the empirical formula $\\mathrm{CH_2O}$.", "Quoting $n=2.0$ as the molecular formula rather than $\\mathrm{C_2H_4O_2}$."],
          },
        },
        {
          id: "chemsl-u1-molecular-formula-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "An organic compound contains $54.5\\%$ carbon, $9.1\\%$ hydrogen and $36.4\\%$ oxygen by mass and has a molar mass of $88.0\\ \\mathrm{g\\,mol^{-1}}$. ($A_r$: C $12.0$, H $1.0$, O $16.0$) In a $100\\ \\mathrm{g}$ sample, (a) calculate the amount of oxygen in moles, (b) determine the empirical formula mass and (c) the molecular formula.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $n(\\mathrm{O})$ / mol", answer: 2.28, tolerance: 0.01, unit: "mol" },
              { label: "(b) $M_{\\mathrm{emp}}$ / g mol$^{-1}$", answer: 44, tolerance: 0.1, unit: "g mol^-1" },
              { label: "(c) $n$", answer: 2, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Empirical formula method", statement: "Assume $100\\ \\mathrm{g}$; $n=\\frac{\\%}{A_r}$; divide by smallest." },
              { kind: "formula", name: "Scaling factor", statement: "$n=\\frac{M_r}{M_{\\mathrm{emp}}}$" },
            ],
            steps: [
              { reasoning: "Convert the oxygen percentage to moles.", working: "n(\\mathrm{O})=\\frac{36.4}{16.0}=2.28\\ \\mathrm{mol}", marks: 1, markCode: "M" },
              { reasoning: "Moles are $4.54$, $9.1$, $2.28$; dividing by $2.28$ gives $2:4:1$, so the empirical formula is $\\mathrm{C_2H_4O}$ with $M_{\\mathrm{emp}}=44.0\\ \\mathrm{g\\,mol^{-1}}$.", working: "M_{\\mathrm{emp}}=44.0", marks: 1, markCode: "M" },
              { reasoning: "Compute the scaling factor $n=\\frac{88.0}{44.0}=2$.", working: "n=2", marks: 1, markCode: "M" },
              { reasoning: "Double the empirical formula: $\\mathrm{C_4H_8O_2}$.", working: "\\mathrm{C_4H_8O_2}", marks: 1, markCode: "A" },
              { reasoning: "Check: $2\\times44.0=88.0\\ \\mathrm{g\\,mol^{-1}}$ — consistent.", working: "2\\times44.0=88.0", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $2.28\\ \\mathrm{mol}$ (b) $44.0\\ \\mathrm{g\\,mol^{-1}}$ (c) $n=2$, molecular formula $\\mathrm{C_4H_8O_2}$",
            commonErrors: ["Using $n=4$ from $\\frac{88}{22}$ instead of $\\frac{88}{44}$.", "Forgetting the empirical formula itself has two carbons."],
          },
        },
        {
          id: "chemsl-u1-molecular-formula-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "A $3.00\\ \\mathrm{g}$ sample of a compound contains $1.20\\ \\mathrm{g}$ of carbon, $0.20\\ \\mathrm{g}$ of hydrogen and $1.60\\ \\mathrm{g}$ of oxygen. The molar mass of the compound is $90.0\\ \\mathrm{g\\,mol^{-1}}$. ($A_r$: C $12.0$, H $1.0$, O $16.0$) Calculate (a) $n(\\mathrm{C})$, (b) the empirical formula mass and (c) the molecular formula.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $n(\\mathrm{C})$ / mol", answer: 0.1, tolerance: 0.001, unit: "mol" },
              { label: "(b) $M_{\\mathrm{emp}}$ / g mol$^{-1}$", answer: 30, tolerance: 0.1, unit: "g mol^-1" },
              { label: "(c) $n$", answer: 3, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Amount of element", statement: "$n=\\frac{m}{A_r}$" },
              { kind: "formula", name: "Scaling factor", statement: "$n=\\frac{M_r}{M_{\\mathrm{emp}}}$" },
            ],
            steps: [
              { reasoning: "Convert the carbon mass to moles: $n(\\mathrm{C})=\\frac{1.20}{12.0}=0.100\\ \\mathrm{mol}$.", working: "n(\\mathrm{C})=0.100\\ \\mathrm{mol}", marks: 1, markCode: "M" },
              { reasoning: "Moles are $0.100$, $0.200$, $0.100$; ratio $1:2:1$ gives empirical formula $\\mathrm{CH_2O}$ with $M_{\\mathrm{emp}}=30.0\\ \\mathrm{g\\,mol^{-1}}$.", working: "M_{\\mathrm{emp}}=30.0", marks: 1, markCode: "M" },
              { reasoning: "Compute the scaling factor.", working: "n=\\frac{90.0}{30.0}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $n=3$; the molecular formula is $\\mathrm{(CH_2O)_3=C_3H_6O_3}$ (lactic acid).", working: "n=3\\Rightarrow\\mathrm{C_3H_6O_3}", marks: 1, markCode: "A" },
              { reasoning: "Check: $3\\times30.0=90.0\\ \\mathrm{g\\,mol^{-1}}$ — consistent.", working: "3\\times30.0=90.0", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $0.100\\ \\mathrm{mol}$ (b) $30.0\\ \\mathrm{g\\,mol^{-1}}$ (c) $n=3$, molecular formula $\\mathrm{C_3H_6O_3}$",
            commonErrors: ["Using the mass of the sample ($3.00\\ \\mathrm{g}$) instead of individual element masses.", "Forgetting the oxygen mass in the mole ratio."],
          },
        },
        {
          id: "chemsl-u1-molecular-formula-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Lactic acid contains only carbon, hydrogen and oxygen. Its percentage composition by mass is $40.0\\%$ carbon, $6.7\\%$ hydrogen and $53.3\\%$ oxygen, and its molar mass is $90.0\\ \\mathrm{g\\,mol^{-1}}$. ($A_r$: C $12.0$, H $1.0$, O $16.0$)",
          parts: [
            { label: "a", prompt: "Calculate the amount, in moles, of each element in a $100\\ \\mathrm{g}$ sample.", marks: 2 },
            { label: "b", prompt: "Determine the empirical formula of lactic acid.", marks: 2 },
            { label: "c", prompt: "Calculate the empirical formula mass.", marks: 2 },
            { label: "d", prompt: "Determine the molecular formula and show that it is consistent with the molar mass.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Empirical formula method", statement: "Assume $100\\ \\mathrm{g}$; $n=\\frac{\\%}{A_r}$; divide by smallest." },
              { kind: "formula", name: "Scaling factor", statement: "$n=\\frac{M_r}{M_{\\mathrm{emp}}}$" },
            ],
            steps: [
              { part: "a", reasoning: "Convert each percentage to moles.", working: "n(C)=\\frac{40.0}{12.0}=3.33,\\ n(H)=\\frac{6.7}{1.0}=6.7,\\ n(O)=\\frac{53.3}{16.0}=3.33", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All three amounts correct with units.", working: "3.33,\\ 6.7,\\ 3.33\\ \\mathrm{mol}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divide by the smallest amount $3.33$.", working: "1:2:1", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the empirical formula.", working: "\\mathrm{CH_2O}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Sum the $A_r$ values of $\\mathrm{CH_2O}$.", working: "12.0+2(1.0)+16.0", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "M_{\\mathrm{emp}}=30.0\\ \\mathrm{g\\,mol^{-1}}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Compute $n=\\frac{90.0}{30.0}=3$, a whole number.", working: "n=3", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Molecular formula $\\mathrm{C_3H_6O_3}$; check $3\\times30.0=90.0\\ \\mathrm{g\\,mol^{-1}}$ — consistent.", working: "\\mathrm{C_3H_6O_3},\\ 90.0\\ \\mathrm{g\\,mol^{-1}}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $3.33$, $6.7$, $3.33\\ \\mathrm{mol}$ (b) $\\mathrm{CH_2O}$ (c) $30.0\\ \\mathrm{g\\,mol^{-1}}$ (d) $\\mathrm{C_3H_6O_3}$, consistent since $3\\times30.0=90.0$",
            commonErrors: ["Stopping at the empirical formula in (d).", "Using $n=6$ from the glucose example instead of computing $\\frac{90}{30}$."],
          },
        },
        {
          id: "chemsl-u1-molecular-formula-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "A compound has empirical formula $\\mathrm{CH_2}$ ($M_{\\mathrm{emp}}=14.0\\ \\mathrm{g\\,mol^{-1}}$).",
          parts: [
            { label: "a", prompt: "Explain why the scaling factor $n=\\frac{M_r}{M_{\\mathrm{emp}}}$ must be a whole number.", marks: 3 },
            { label: "b", prompt: "A student measures $M_r=95\\ \\mathrm{g\\,mol^{-1}}$ and obtains $n=6.8$. Explain what this result indicates and how the student should respond.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Scaling factor", statement: "$n=\\frac{M_r}{M_{\\mathrm{emp}}}$ (must be a whole number)" },
              { kind: "definition", name: "Molecular formula", statement: "A whole-number multiple of the empirical formula." },
            ],
            steps: [
              { part: "a", reasoning: "The molecular formula is built by multiplying the empirical formula by a whole number, since atoms cannot exist in fractional amounts within a molecule.", working: "\\text{whole-number multiplier required}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$n$ counts how many empirical-formula units fit into one molecule, so it must be an integer such as 1, 2, 3...", working: "n\\in\\mathbb{Z}^+", marks: 1, markCode: "M" },
              { part: "a", reasoning: "If $M_r$ is an exact multiple of $M_{\\mathrm{emp}}$, $n$ will come out as (or very close to) a whole number.", working: "M_r=nM_{\\mathrm{emp}}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$n=6.8$ is not a whole number, so either the empirical formula or the measured molar mass must be wrong.", working: "n=6.8\\notin\\mathbb{Z}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The student should check the percentage composition/mole ratio for an arithmetic error, and re-check the molar mass measurement or its units.", working: "\\text{check empirical formula and }M_r", marks: 1, markCode: "M" },
              { part: "b", reasoning: "A sensible whole number near $6.8$ (e.g. $7$) may be tried only after verifying the data; the answer should not be forced without justification.", working: "\\text{verify data before rounding}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $n$ must be a whole number because the molecular formula is a whole-number multiple of the empirical formula (b) $n=6.8$ indicates an error in the empirical formula or molar mass; recheck both",
            commonErrors: ["Rounding $6.8$ to $7$ without checking the data.", "Claiming $n$ can be a decimal because $M_r$ need not be a multiple of $M_{\\mathrm{emp}}$."],
          },
        },
        {
          id: "chemsl-u1-molecular-formula-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Two compounds share the empirical formula $\\mathrm{CH_2O}$. One is formaldehyde ($M_r=30.0\\ \\mathrm{g\\,mol^{-1}}$) and the other is glucose ($M_r=180\\ \\mathrm{g\\,mol^{-1}}$). Which molar mass corresponds to glucose $\\mathrm{C_6H_{12}O_6}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$30.0\\ \\mathrm{g\\,mol^{-1}}$" },
              { id: "b", text: "$60.0\\ \\mathrm{g\\,mol^{-1}}$" },
              { id: "c", text: "$90.0\\ \\mathrm{g\\,mol^{-1}}$" },
              { id: "d", text: "$180\\ \\mathrm{g\\,mol^{-1}}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Scaling factor", statement: "$n=\\frac{M_r}{M_{\\mathrm{emp}}}$; for $\\mathrm{C_6H_{12}O_6}$, $n=6$" },
            ],
            steps: [
              { reasoning: "Glucose is $\\mathrm{(CH_2O)_6}$, so $M_r=6\\times30.0=180\\ \\mathrm{g\\,mol^{-1}}$.", working: "6\\times30.0=180", marks: 1, markCode: "M" },
              { reasoning: "Only $180\\ \\mathrm{g\\,mol^{-1}}$ gives $n=6$ and hence $\\mathrm{C_6H_{12}O_6}$.", working: "n=\\frac{180}{30}=6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $180\\ \\mathrm{g\\,mol^{-1}}$",
            commonErrors: ["Choosing $30.0$ which is the empirical formula mass (formaldehyde).", "Choosing $90.0$ which gives $\\mathrm{C_3H_6O_3}$."],
          },
        },
        {
          id: "chemsl-u1-molecular-formula-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "A compound has the empirical formula $\\mathrm{CH_2}$ and a molar mass of $84.0\\ \\mathrm{g\\,mol^{-1}}$ ($M_{\\mathrm{emp}}=14.0\\ \\mathrm{g\\,mol^{-1}}$).",
          parts: [
            { label: "a", prompt: "Calculate the scaling factor $n$.", marks: 2 },
            { label: "b", prompt: "Determine the molecular formula.", marks: 2 },
            { label: "c", prompt: "Explain why the molecular formula cannot be $\\mathrm{CH_2}$ itself.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Scaling factor", statement: "$n=\\frac{M_r}{M_{\\mathrm{emp}}}$" },
              { kind: "definition", name: "Molecular formula", statement: "The actual number of atoms in one molecule." },
            ],
            steps: [
              { part: "a", reasoning: "Divide the molar mass by the empirical formula mass.", working: "n=\\frac{84.0}{14.0}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate: $n=6$.", working: "n=6", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Multiply each subscript by 6.", working: "\\mathrm{(CH_2)_6=C_6H_{12}}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the molecular formula.", working: "\\mathrm{C_6H_{12}}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$\\mathrm{CH_2}$ has $M_{\\mathrm{emp}}=14.0\\ \\mathrm{g\\,mol^{-1}}$, but the measured molar mass is $84.0\\ \\mathrm{g\\,mol^{-1}}$, six times larger.", working: "84.0=6\\times14.0", marks: 1, markCode: "M" },
              { part: "c", reasoning: "A single $\\mathrm{CH_2}$ unit cannot have that molar mass; the molecule must contain six such units.", working: "\\text{molecule}=(\\mathrm{CH_2})_6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $n=6$ (b) $\\mathrm{C_6H_{12}}$ (c) $\\mathrm{CH_2}$ would have $M_r=14.0$, not $84.0$",
            commonErrors: ["Writing $\\mathrm{CH_2}$ as the molecular formula.", "Using $n=3$ to get $\\mathrm{C_3H_6}$ which has $M_r=42$."],
          },
        },
      ],
    },
  ],
};
