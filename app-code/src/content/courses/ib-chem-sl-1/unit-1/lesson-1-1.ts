import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "chemsl-u1-lesson-1-1",
  code: "1-1",
  title: "The Mole Concept",
  goal: "I CAN use the mole, molar mass and Avogadro's constant to convert between mass, amount of substance and number of particles.",
  standards: ["Topic 1.1", "Paper 1", "Paper 2"],
  vocabulary: [
    { term: "Mole", definition: "The SI unit of amount of substance; one mole contains exactly $6.022\\times10^{23}$ particles." },
    { term: "Avogadro constant", definition: "$N_A=6.022\\times10^{23}\\,\\mathrm{mol^{-1}}$; the number of particles in one mole of any substance." },
    { term: "Relative atomic mass", definition: "$A_r$: the mass of an atom of an element relative to one twelfth of the mass of a $^{12}\\mathrm{C}$ atom; numerically equal to the molar mass in g mol$^{-1}$." },
    { term: "Molar mass", definition: "$M$: the mass of one mole of a substance in g mol$^{-1}$; for a compound it equals the sum of the $A_r$ values of all atoms in the formula unit." },
    { term: "Amount of substance", definition: "$n$, measured in moles; the quantity of a substance counted in moles of particles." },
    { term: "Formula unit", definition: "The simplest group of atoms or ions that represents the composition of an ionic compound or the molecule of a covalent substance." },
  ],
  concepts: [
    {
      id: "chemsl-u1-molar-mass",
      title: "The mole and molar mass",
      skill: "Use $n=\\frac{m}{M}$ and $M_r=\\sum A_r$ to convert between mass and amount of substance.",
      lesson: {
        sections: [
          {
            heading: "Counting particles in moles",
            body: "Chemists cannot count individual atoms, so they use the mole. One mole of any substance contains exactly $6.022\\times10^{23}$ particles (atoms, molecules or formula units), the Avogadro constant $N_A$. One mole of carbon atoms, one mole of water molecules and one mole of sodium ions all contain the same number of particles, but their masses are very different.",
          },
          {
            heading: "Relative atomic mass and molar mass",
            body: "The relative atomic mass $A_r$ of an element is the mass of one atom compared with one twelfth of the mass of a $^{12}\\mathrm{C}$ atom. Because the scale is relative, the $A_r$ of an element is numerically equal to its molar mass in g mol$^{-1}$. The molar mass of a compound is found by adding the $A_r$ values of every atom in its formula. For example, $M_r(\\mathrm{CaCO_3})=40.1+12.0+3\\times16.0=100.1\\ \\mathrm{g\\,mol^{-1}}$.",
          },
          {
            heading: "Amount of substance",
            body: "The central conversion is $n=\\frac{m}{M}$, where $m$ is the mass in grams, $M$ the molar mass in g mol$^{-1}$ and $n$ the amount in moles. The same equation rearranges to $m=nM$. Always write units and check that the molar mass is calculated from the correct formula, including waters of crystallisation in hydrated salts.",
          },
        ],
        keyFormulas: [
          { name: "Amount of substance", statement: "$n=\\frac{m}{M}$" },
          { name: "Molar mass of a compound", statement: "$M_r=\\sum A_r\\ \\text{(all atoms in the formula unit)}$" },
          { name: "Number of particles", statement: "$N=n\\times N_A$" },
        ],
        workedExample: {
          problem: "Calculate the amount, in moles, of $25.0\\ \\mathrm{g}$ of calcium carbonate, $\\mathrm{CaCO_3}$ ($A_r$: Ca $40.1$, C $12.0$, O $16.0$).",
          solution: "$M_r=40.1+12.0+3(16.0)=100.1\\ \\mathrm{g\\,mol^{-1}}$, so $n=\\frac{25.0}{100.1}=0.250\\ \\mathrm{mol}$ (3 s.f.).",
        },
      },
      questions: [
        {
          id: "chemsl-u1-molar-mass-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "What is the molar mass, in g mol$^{-1}$, of sodium carbonate, $\\mathrm{Na_2CO_3}$? ($A_r$: Na $23.0$, C $12.0$, O $16.0$)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$106$" },
              { id: "b", text: "$84$" },
              { id: "c", text: "$98$" },
              { id: "d", text: "$116$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Molar mass", statement: "$M_r=\\sum A_r$ of all atoms in the formula unit." },
            ],
            steps: [
              { reasoning: "Add the relative atomic masses of all atoms in $\\mathrm{Na_2CO_3}$.", working: "M_r=2(23.0)+12.0+3(16.0)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $46.0+12.0+48.0=106$.", working: "M_r=106\\ \\mathrm{g\\,mol^{-1}}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $106$ g mol$^{-1}$",
            commonErrors: ["Counting only one Na atom, giving $83$.", "Forgetting the three oxygen atoms, giving $70$."],
          },
        },
        {
          id: "chemsl-u1-molar-mass-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate the amount, in moles, of $8.80\\ \\mathrm{g}$ of carbon dioxide, $\\mathrm{CO_2}$ ($M_r=44.0\\ \\mathrm{g\\,mol^{-1}}$). Give your answer to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "$n$ / mol", answer: 0.2, tolerance: 0.001, unit: "mol" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Amount of substance", statement: "$n=\\frac{m}{M}$" },
            ],
            steps: [
              { reasoning: "Substitute the mass and molar mass into $n=\\frac{m}{M}$.", working: "n=\\frac{8.80}{44.0}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "n=0.200\\ \\mathrm{mol}", marks: 1, markCode: "A" },
              { reasoning: "Give the answer to 3 s.f. with units.", working: "n=0.200\\ \\mathrm{mol}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$n=0.200\\ \\mathrm{mol}$",
            commonErrors: ["Inverting the ratio to obtain $5.00\\ \\mathrm{mol}$.", "Quoting $0.2$ without the trailing zero needed for 3 s.f."],
            examinerNote: "Follow-through applies if $M_r$ was miscalculated earlier in the paper.",
          },
        },
        {
          id: "chemsl-u1-molar-mass-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A student is given $9.50\\ \\mathrm{g}$ of hydrated magnesium sulfate, $\\mathrm{MgSO_4\\cdot7H_2O}$ ($A_r$: Mg $24.3$, S $32.1$, O $16.0$, H $1.0$). Find (a) the molar mass of $\\mathrm{MgSO_4\\cdot7H_2O}$, (b) the amount of substance in moles.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $M_r$ / g mol$^{-1}$", answer: 246.4, tolerance: 0.1, unit: "g mol^-1" },
              { label: "(b) $n$ / mol", answer: 0.0385, tolerance: 0.0001, unit: "mol" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Molar mass of a hydrate", statement: "$M_r$ includes the waters of crystallisation as $7\\times M_r(\\mathrm{H_2O})$." },
              { kind: "formula", name: "Amount of substance", statement: "$n=\\frac{m}{M}$" },
            ],
            steps: [
              { reasoning: "Sum $A_r$ values including seven waters of crystallisation: $\\mathrm{MgSO_4}$ contributes $24.3+32.1+4(16.0)=120.4$ and $7\\mathrm{H_2O}$ contributes $7(18.0)=126.0$.", working: "M_r=24.3+32.1+64.0+7(18.0)=246.4\\ \\mathrm{g\\,mol^{-1}}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the molar mass.", working: "M_r=246.4\\ \\mathrm{g\\,mol^{-1}}", marks: 1, markCode: "A" },
              { reasoning: "Substitute into $n=\\frac{m}{M}$.", working: "n=\\frac{9.50}{246.4}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate to 3 s.f.", working: "n=0.0385\\ \\mathrm{mol}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $M_r=246.4\\ \\mathrm{g\\,mol^{-1}}$ (b) $n=0.0385\\ \\mathrm{mol}$",
            commonErrors: ["Ignoring the seven waters of crystallisation, using $M_r=120.4$.", "Using $M_r(\\mathrm{H_2O})=18.0$ correctly but forgetting the factor of $7$."],
          },
        },
        {
          id: "chemsl-u1-molar-mass-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A technician prepares a solution by dissolving $4.96\\ \\mathrm{g}$ of copper(II) sulfate pentahydrate, $\\mathrm{CuSO_4\\cdot5H_2O}$ ($A_r$: Cu $63.5$, S $32.1$, O $16.0$, H $1.0$) in water.",
          parts: [
            { label: "a", prompt: "Calculate the molar mass of $\\mathrm{CuSO_4\\cdot5H_2O}$.", marks: 2 },
            { label: "b", prompt: "Calculate the amount of substance, in moles, of $\\mathrm{CuSO_4\\cdot5H_2O}$ dissolved.", marks: 2 },
            { label: "c", prompt: "Calculate the number of moles of water of crystallisation present in this mass.", marks: 2 },
            { label: "d", prompt: "Explain why the mass of water of crystallisation must be included when choosing the mass to weigh out.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Molar mass of a hydrate", statement: "$M_r(\\mathrm{CuSO_4\\cdot5H_2O})=M_r(\\mathrm{CuSO_4})+5M_r(\\mathrm{H_2O})$" },
              { kind: "formula", name: "Amount of substance", statement: "$n=\\frac{m}{M}$" },
            ],
            steps: [
              { part: "a", reasoning: "Add the $A_r$ values of $\\mathrm{CuSO_4}$ and five waters of crystallisation.", working: "M_r=63.5+32.1+4(16.0)+5(18.0)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "M_r=249.6\\ \\mathrm{g\\,mol^{-1}}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divide the mass weighed by the molar mass.", working: "n=\\frac{4.96}{249.6}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "n=0.0199\\ \\mathrm{mol}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Each formula unit contains five waters of crystallisation, so multiply the moles of salt by five.", working: "n(\\mathrm{H_2O})=5\\times0.0199", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "n(\\mathrm{H_2O})=0.0994\\ \\mathrm{mol}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The hydrate has a larger molar mass than anhydrous $\\mathrm{CuSO_4}$, so the same mass contains fewer moles of copper(II) ions.", working: "\\text{hydrate is heavier per mole}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "If the water of crystallisation were ignored the amount of substance (and hence solution concentration) would be overestimated.", working: "\\text{concentration would be wrong}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $249.6\\ \\mathrm{g\\,mol^{-1}}$ (b) $0.0199\\ \\mathrm{mol}$ (c) $0.0994\\ \\mathrm{mol}$ (d) waters of crystallisation contribute mass, so ignoring them overestimates $n$",
            commonErrors: ["Forgetting to multiply by five in (c).", "Using $M_r=159.6$ (anhydrous $\\mathrm{CuSO_4}$) in (b)."],
            examinerNote: "Allow follow-through from an incorrect $M_r$ in (b) and (c).",
          },
        },
        {
          id: "chemsl-u1-molar-mass-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "What is the molar mass, in g mol$^{-1}$, of potassium nitrate, $\\mathrm{KNO_3}$? ($A_r$: K $39.1$, N $14.0$, O $16.0$)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$101.1$" },
              { id: "b", text: "$54.1$" },
              { id: "c", text: "$85.1$" },
              { id: "d", text: "$69.1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Molar mass", statement: "$M_r=\\sum A_r$ of all atoms in the formula unit." },
            ],
            steps: [
              { reasoning: "Add the $A_r$ values of K, N and three O atoms.", working: "M_r=39.1+14.0+3(16.0)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "M_r=101.1\\ \\mathrm{g\\,mol^{-1}}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $101.1$ g mol$^{-1}$",
            commonErrors: ["Using only one oxygen atom, giving $69.1$.", "Adding K and N only, giving $54.1$."],
          },
        },
        {
          id: "chemsl-u1-molar-mass-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "What is the mass, in grams, of $0.250\\ \\mathrm{mol}$ of sulfuric acid, $\\mathrm{H_2SO_4}$? ($M_r=98.1\\ \\mathrm{g\\,mol^{-1}}$)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$24.5\\ \\mathrm{g}$" },
              { id: "b", text: "$12.3\\ \\mathrm{g}$" },
              { id: "c", text: "$49.0\\ \\mathrm{g}$" },
              { id: "d", text: "$98.1\\ \\mathrm{g}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mass from moles", statement: "$m=nM$" },
            ],
            steps: [
              { reasoning: "Multiply the amount in moles by the molar mass.", working: "m=0.250\\times98.1", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $0.250\\times98.1=24.525$, which rounds to $24.5\\ \\mathrm{g}$ to 3 s.f.", working: "m=24.5\\ \\mathrm{g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $24.5$ g",
            commonErrors: ["Dividing by the molar mass instead of multiplying.", "Quoting $24.525\\ \\mathrm{g}$ without rounding to 3 s.f."],
          },
        },
        {
          id: "chemsl-u1-molar-mass-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which sample contains the greatest amount of substance? ($A_r$: H $1.0$, C $12.0$, O $16.0$; $M_r(\\mathrm{H_2})=2.0$, $M_r(\\mathrm{CH_4})=16.0$, $M_r(\\mathrm{H_2O})=18.0$, $M_r(\\mathrm{CO_2})=44.0\\ \\mathrm{g\\,mol^{-1}}$)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$8.0\\ \\mathrm{g}$ of $\\mathrm{H_2}$" },
              { id: "b", text: "$16\\ \\mathrm{g}$ of $\\mathrm{CH_4}$" },
              { id: "c", text: "$18\\ \\mathrm{g}$ of $\\mathrm{H_2O}$" },
              { id: "d", text: "$44\\ \\mathrm{g}$ of $\\mathrm{CO_2}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Amount of substance", statement: "$n=\\frac{m}{M}$" },
            ],
            steps: [
              { reasoning: "Convert each mass to moles; the smallest molar mass gives the largest amount for a similar mass.", working: "n(\\mathrm{H_2})=\\frac{8.0}{2.0}=4.0\\ \\mathrm{mol}", marks: 1, markCode: "M" },
              { reasoning: "The other samples each contain about $1.0\\ \\mathrm{mol}$, so $8.0\\ \\mathrm{g}$ of $\\mathrm{H_2}$ is greatest.", working: "n\\approx1.0\\ \\mathrm{mol}\\ \\text{for the others}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $8.0\\ \\mathrm{g}$ of $\\mathrm{H_2}$ ($4.0\\ \\mathrm{mol}$)",
            commonErrors: ["Choosing the largest mass ($44\\ \\mathrm{g}$ of $\\mathrm{CO_2}$) without converting to moles.", "Comparing masses instead of amounts of substance."],
          },
        },
        {
          id: "chemsl-u1-molar-mass-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A sample of $\\mathrm{CuSO_4\\cdot5H_2O}$ has $M_r=249.6\\ \\mathrm{g\\,mol^{-1}}$. How many moles of water of crystallisation are present in $0.0200\\ \\mathrm{mol}$ of the hydrate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.0200\\ \\mathrm{mol}$" },
              { id: "b", text: "$0.100\\ \\mathrm{mol}$" },
              { id: "c", text: "$0.0400\\ \\mathrm{mol}$" },
              { id: "d", text: "$0.500\\ \\mathrm{mol}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hydrate", statement: "Each formula unit of $\\mathrm{CuSO_4\\cdot5H_2O}$ contains five $\\mathrm{H_2O}$ molecules." },
            ],
            steps: [
              { reasoning: "Multiply the moles of hydrate by five, the number of waters per formula unit.", working: "n(\\mathrm{H_2O})=5\\times0.0200", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "n(\\mathrm{H_2O})=0.100\\ \\mathrm{mol}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $0.100\\ \\mathrm{mol}$",
            commonErrors: ["Dividing by five instead of multiplying.", "Forgetting the waters of crystallisation entirely."],
          },
        },
        {
          id: "chemsl-u1-molar-mass-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "What mass of sodium carbonate, $\\mathrm{Na_2CO_3}$ ($M_r=106\\ \\mathrm{g\\,mol^{-1}}$), contains $1.204\\times10^{24}$ formula units? ($N_A=6.022\\times10^{23}\\,\\mathrm{mol^{-1}}$)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$106\\ \\mathrm{g}$" },
              { id: "b", text: "$212\\ \\mathrm{g}$" },
              { id: "c", text: "$53.0\\ \\mathrm{g}$" },
              { id: "d", text: "$424\\ \\mathrm{g}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Amount from particle number", statement: "$n=\\frac{N}{N_A}$" },
              { kind: "formula", name: "Mass from moles", statement: "$m=nM$" },
            ],
            steps: [
              { reasoning: "Convert the number of formula units to moles: $\\frac{1.204\\times10^{24}}{6.022\\times10^{23}}=2.00\\ \\mathrm{mol}$.", working: "n=\\frac{1.204\\times10^{24}}{6.022\\times10^{23}}=2.00\\ \\mathrm{mol}", marks: 1, markCode: "M" },
              { reasoning: "Convert moles to mass using $m=nM$.", working: "m=2.00\\times106=212\\ \\mathrm{g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $212\\ \\mathrm{g}$",
            commonErrors: ["Answering $106\\ \\mathrm{g}$ (one mole) without halving the particle number.", "Using $212\\ \\mathrm{g}$ per mole by doubling the molar mass."],
          },
        },
        {
          id: "chemsl-u1-molar-mass-q10",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 2,
          stem: "Calculate the amount, in moles, of $15.0\\ \\mathrm{g}$ of ammonium nitrate, $\\mathrm{NH_4NO_3}$ ($M_r=80.0\\ \\mathrm{g\\,mol^{-1}}$). Give your answer to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "$n$ / mol", answer: 0.188, tolerance: 0.001, unit: "mol" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Amount of substance", statement: "$n=\\frac{m}{M}$" },
            ],
            steps: [
              { reasoning: "Substitute the mass and molar mass into $n=\\frac{m}{M}$.", working: "n=\\frac{15.0}{80.0}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and quote to 3 s.f.", working: "n=0.1875=0.188\\ \\mathrm{mol}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$n=0.188\\ \\mathrm{mol}$",
            commonErrors: ["Inverting the ratio to obtain $5.33\\ \\mathrm{mol}$.", "Quoting $0.19\\ \\mathrm{mol}$ (2 s.f.) when 3 s.f. is required."],
          },
        },
        {
          id: "chemsl-u1-molar-mass-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate the mass, in grams, of $2.50\\ \\mathrm{mol}$ of calcium hydroxide, $\\mathrm{Ca(OH)_2}$ ($A_r$: Ca $40.1$, O $16.0$, H $1.0$). Give your answer to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "$m$ / g", answer: 185, tolerance: 0.5, unit: "g" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Molar mass", statement: "$M_r=\\sum A_r$ of all atoms in the formula unit." },
              { kind: "formula", name: "Mass from moles", statement: "$m=nM$" },
            ],
            steps: [
              { reasoning: "Sum the $A_r$ values: $\\mathrm{Ca(OH)_2}$ contains one Ca, two O and two H atoms.", working: "M_r=40.1+2(16.0)+2(1.0)", marks: 1, markCode: "M" },
              { reasoning: "Substitute into $m=nM$.", working: "m=2.50\\times74.1", marks: 1, markCode: "M" },
              { reasoning: "Evaluate to 3 s.f. with units.", working: "m=185.25=185\\ \\mathrm{g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$m=185\\ \\mathrm{g}$",
            commonErrors: ["Using $M_r=58.1$ (forgetting one OH group).", "Dividing by $M_r$ instead of multiplying."],
          },
        },
        {
          id: "chemsl-u1-molar-mass-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A student weighs out $4.92\\ \\mathrm{g}$ of hydrated magnesium sulfate, $\\mathrm{MgSO_4\\cdot7H_2O}$ ($M_r=246.4\\ \\mathrm{g\\,mol^{-1}}$). Calculate the amount, in moles, of the hydrate. Give your answer to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "$n$ / mol", answer: 0.02, tolerance: 0.0001, unit: "mol" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Amount of substance", statement: "$n=\\frac{m}{M}$" },
            ],
            steps: [
              { reasoning: "Use the full molar mass including the seven waters of crystallisation.", working: "n=\\frac{4.92}{246.4}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "n=0.01997\\ \\mathrm{mol}", marks: 1, markCode: "M" },
              { reasoning: "Quote to 3 s.f. with units.", working: "n=0.0200\\ \\mathrm{mol}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$n=0.0200\\ \\mathrm{mol}$",
            commonErrors: ["Using $M_r=120.4$ for anhydrous $\\mathrm{MgSO_4}$, giving a much larger amount.", "Quoting $0.02\\ \\mathrm{mol}$ without 3 s.f."],
          },
        },
        {
          id: "chemsl-u1-molar-mass-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Sodium carbonate decahydrate, $\\mathrm{Na_2CO_3\\cdot10H_2O}$, has $M_r=286\\ \\mathrm{g\\,mol^{-1}}$ and $M_r(\\mathrm{H_2O})=18.0\\ \\mathrm{g\\,mol^{-1}}$. A $10.0\\ \\mathrm{g}$ sample is analysed.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $n(\\mathrm{Na_2CO_3\\cdot10H_2O})$ / mol", answer: 0.035, tolerance: 0.0001, unit: "mol" },
              { label: "(b) $n(\\mathrm{H_2O})$ / mol", answer: 0.35, tolerance: 0.001, unit: "mol" },
              { label: "(c) $m(\\mathrm{H_2O})$ / g", answer: 6.29, tolerance: 0.01, unit: "g" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Amount of substance", statement: "$n=\\frac{m}{M}$" },
              { kind: "definition", name: "Hydrate ratio", statement: "Each formula unit of the decahydrate contains ten $\\mathrm{H_2O}$ molecules." },
            ],
            steps: [
              { reasoning: "Convert the mass of hydrate to moles using the full molar mass.", working: "n=\\frac{10.0}{286}=0.03497\\ \\mathrm{mol}", marks: 1, markCode: "M" },
              { reasoning: "Quote the amount of hydrate to 3 s.f.", working: "n=0.0350\\ \\mathrm{mol}", marks: 1, markCode: "A" },
              { reasoning: "Multiply by ten for the waters of crystallisation, then convert moles of water to mass with $m=nM$.", working: "n(\\mathrm{H_2O})=10\\times0.03497=0.3497\\ \\mathrm{mol};\\ m=0.3497\\times18.0=6.29\\ \\mathrm{g}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the final answers: $0.350\\ \\mathrm{mol}$ of water and $6.29\\ \\mathrm{g}$.", working: "0.350\\ \\mathrm{mol},\\ 6.29\\ \\mathrm{g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $0.0350\\ \\mathrm{mol}$ (b) $0.350\\ \\mathrm{mol}$ (c) $6.29\\ \\mathrm{g}$",
            commonErrors: ["Forgetting to multiply by ten in (b).", "Using $M_r=106$ (anhydrous salt) in the first step."],
            examinerNote: "Allow follow-through from a slip in (a) into (b) and (c).",
          },
        },
        {
          id: "chemsl-u1-molar-mass-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "A solution is prepared from $12.48\\ \\mathrm{g}$ of $\\mathrm{CuSO_4\\cdot5H_2O}$ ($M_r=249.6\\ \\mathrm{g\\,mol^{-1}}$; $A_r$: Cu $63.5$).",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $n(\\mathrm{CuSO_4\\cdot5H_2O})$ / mol", answer: 0.05, tolerance: 0.0001, unit: "mol" },
              { label: "(b) $n(\\mathrm{Cu^{2+}})$ / mol", answer: 0.05, tolerance: 0.0001, unit: "mol" },
              { label: "(c) $m(\\mathrm{Cu^{2+}})$ / g", answer: 3.18, tolerance: 0.01, unit: "g" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Amount of substance", statement: "$n=\\frac{m}{M}$" },
              { kind: "definition", name: "Formula unit of the hydrate", statement: "Each formula unit contains one $\\mathrm{Cu^{2+}}$ ion." },
            ],
            steps: [
              { reasoning: "Convert the mass of hydrate to moles.", working: "n=\\frac{12.48}{249.6}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "n=0.0500\\ \\mathrm{mol}", marks: 1, markCode: "A" },
              { reasoning: "Each formula unit contains one copper ion, so $n(\\mathrm{Cu^{2+}})=n(\\mathrm{hydrate})$.", working: "n(\\mathrm{Cu^{2+}})=0.0500\\ \\mathrm{mol}", marks: 1, markCode: "M" },
              { reasoning: "Convert moles of copper ions to mass using $m=nM$ with $A_r(\\mathrm{Cu})=63.5$.", working: "m=0.0500\\times63.5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "m=3.175=3.18\\ \\mathrm{g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $0.0500\\ \\mathrm{mol}$ (b) $0.0500\\ \\mathrm{mol}$ (c) $3.18\\ \\mathrm{g}$",
            commonErrors: ["Using the mass of the whole hydrate instead of $A_r(\\mathrm{Cu})$ in (c).", "Forgetting that the hydrate contributes one Cu per formula unit."],
          },
        },
        {
          id: "chemsl-u1-molar-mass-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A $10.0\\ \\mathrm{g}$ sample of washing soda contains only sodium carbonate, $\\mathrm{Na_2CO_3}$ ($M_r=106\\ \\mathrm{g\\,mol^{-1}}$; $A_r$: Na $23.0$).",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $n(\\mathrm{Na_2CO_3})$ / mol", answer: 0.0943, tolerance: 0.0001, unit: "mol" },
              { label: "(b) $m(\\mathrm{Na})$ / g", answer: 4.34, tolerance: 0.01, unit: "g" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Amount of substance", statement: "$n=\\frac{m}{M}$" },
              { kind: "definition", name: "Formula unit of $\\mathrm{Na_2CO_3}$", statement: "Each formula unit contains two Na atoms." },
            ],
            steps: [
              { reasoning: "Convert the mass of $\\mathrm{Na_2CO_3}$ to moles.", working: "n=\\frac{10.0}{106}=0.09434\\ \\mathrm{mol}", marks: 1, markCode: "M" },
              { reasoning: "Quote the amount to 3 s.f.", working: "n=0.0943\\ \\mathrm{mol}", marks: 1, markCode: "A" },
              { reasoning: "There are two Na atoms per formula unit, so $n(\\mathrm{Na})=2n$; convert to mass with $m=nM$.", working: "m(\\mathrm{Na})=2\\times0.09434\\times23.0=4.34\\ \\mathrm{g}", marks: 1, markCode: "M" },
              { reasoning: "Quote the mass to 3 s.f.", working: "m(\\mathrm{Na})=4.34\\ \\mathrm{g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $0.0943\\ \\mathrm{mol}$ (b) $4.34\\ \\mathrm{g}$",
            commonErrors: ["Using only one Na per formula unit in (b).", "Using $M_r=106$ for the sodium mass instead of $23.0$."],
          },
        },
        {
          id: "chemsl-u1-molar-mass-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A fertilizer contains ammonium nitrate, $\\mathrm{NH_4NO_3}$ ($M_r=80.0\\ \\mathrm{g\\,mol^{-1}}$; $A_r$: N $14.0$). A scoop contains $40.0\\ \\mathrm{g}$ of $\\mathrm{NH_4NO_3}$.",
          parts: [
            { label: "a", prompt: "Calculate the amount, in moles, of $\\mathrm{NH_4NO_3}$ in the scoop.", marks: 2 },
            { label: "b", prompt: "Calculate the amount, in moles, of nitrogen atoms in the scoop.", marks: 2 },
            { label: "c", prompt: "Calculate the mass, in grams, of nitrogen in the scoop.", marks: 2 },
            { label: "d", prompt: "Calculate the percentage by mass of nitrogen in $\\mathrm{NH_4NO_3}$ and state whether it is a rich source of nitrogen.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Amount of substance", statement: "$n=\\frac{m}{M}$" },
              { kind: "definition", name: "Formula unit of $\\mathrm{NH_4NO_3}$", statement: "Each formula unit contains two nitrogen atoms." },
            ],
            steps: [
              { part: "a", reasoning: "Convert mass to moles.", working: "n=\\frac{40.0}{80.0}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "n=0.500\\ \\mathrm{mol}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Each formula unit has two N atoms, so double the amount.", working: "n(N)=2\\times0.500", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "n(N)=1.00\\ \\mathrm{mol}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Convert moles of nitrogen atoms to mass using $m=nM$.", working: "m=1.00\\times14.0", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "m=14.0\\ \\mathrm{g}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Percentage nitrogen: $\\frac{14.0}{40.0}\\times100=35.0\\%$.", working: "\\frac{14.0}{40.0}\\times100=35.0\\%", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Comment: $35.0\\%$ is a reasonably high nitrogen content, comparable to other common fertilizers.", working: "35.0\\%\\ \\text{N}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $0.500\\ \\mathrm{mol}$ (b) $1.00\\ \\mathrm{mol}$ (c) $14.0\\ \\mathrm{g}$ (d) $35.0\\%$ — a good source of nitrogen",
            commonErrors: ["Counting only one N atom per formula unit in (b).", "Forgetting to convert moles of N atoms to grams in (c)."],
          },
        },
        {
          id: "chemsl-u1-molar-mass-q17",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Hydrated cobalt(II) chloride, $\\mathrm{CoCl_2\\cdot6H_2O}$, has $M_r=237.9\\ \\mathrm{g\\,mol^{-1}}$ ($A_r$: Co $58.9$, Cl $35.5$, H $1.0$, O $16.0$).",
          parts: [
            { label: "a", prompt: "Show that the molar mass of $\\mathrm{CoCl_2\\cdot6H_2O}$ is $237.9\\ \\mathrm{g\\,mol^{-1}}$.", marks: 2 },
            { label: "b", prompt: "Calculate the percentage by mass of water of crystallisation in the hydrate.", marks: 2 },
            { label: "c", prompt: "Calculate the amount, in moles, of water of crystallisation in $23.79\\ \\mathrm{g}$ of the hydrate.", marks: 2 },
            { label: "d", prompt: "Explain why the waters of crystallisation must be included when choosing the mass to weigh out for preparing a solution.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Molar mass of a hydrate", statement: "$M_r(\\mathrm{CoCl_2\\cdot6H_2O})=M_r(\\mathrm{CoCl_2})+6M_r(\\mathrm{H_2O})$" },
              { kind: "formula", name: "Amount of substance", statement: "$n=\\frac{m}{M}$" },
            ],
            steps: [
              { part: "a", reasoning: "Sum the $A_r$ values including six waters of crystallisation.", working: "M_r=58.9+2(35.5)+6(18.0)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate to confirm.", working: "M_r=58.9+71.0+108.0=237.9\\ \\mathrm{g\\,mol^{-1}}\\ \\text{(AG)}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Mass of water per formula unit is $6\\times18.0=108\\ \\mathrm{g}$; find the percentage.", working: "\\frac{108}{237.9}\\times100", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "=45.4\\%", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Convert mass to moles of hydrate, then multiply by six.", working: "n=\\frac{23.79}{237.9}=0.1000\\ \\mathrm{mol};\\ n(\\mathrm{H_2O})=6\\times0.1000", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "n(\\mathrm{H_2O})=0.600\\ \\mathrm{mol}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The hydrate is heavier per mole than anhydrous $\\mathrm{CoCl_2}$, so the same mass contains fewer moles of $\\mathrm{Co^{2+}}$.", working: "\\text{hydrate is heavier per mole}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Ignoring the waters would overestimate the amount of substance and hence the concentration.", working: "\\text{concentration would be overestimated}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $237.9\\ \\mathrm{g\\,mol^{-1}}$ (b) $45.4\\%$ (c) $0.600\\ \\mathrm{mol}$ (d) waters of crystallisation contribute mass, so ignoring them overestimates $n$ and concentration",
            commonErrors: ["Forgetting the factor of six in (c).", "Using $M_r=129.9$ (anhydrous $\\mathrm{CoCl_2}$) anywhere."],
          },
        },
        {
          id: "chemsl-u1-molar-mass-q18",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "One mole of any substance contains $6.022\\times10^{23}$ particles ($N_A=6.022\\times10^{23}\\,\\mathrm{mol^{-1}}$). A student has $0.250\\ \\mathrm{mol}$ of sulfur atoms ($A_r$: S $32.1$).",
          parts: [
            { label: "a", prompt: "Explain why one mole of sulfur atoms and one mole of iron atoms contain the same number of particles, although their masses are very different.", marks: 3 },
            { label: "b", prompt: "Calculate the number of sulfur atoms in the sample, giving your answer in standard form.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mole", statement: "One mole is the amount containing $N_A$ particles, regardless of the identity of the particles." },
              { kind: "formula", name: "Number of particles", statement: "$N=nN_A$" },
            ],
            steps: [
              { part: "a", reasoning: "The mole is defined by the number of particles, not by mass; $n=1\\ \\mathrm{mol}$ always means $N_A$ particles.", working: "N=nN_A", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Sulfur and iron atoms have different $A_r$ values, so one mole of each has a different mass.", working: "\\text{different }A_r\\Rightarrow\\text{different mass per mole}", marks: 1, markCode: "B" },
              { part: "a", reasoning: "The particle count is identical because the definition of a mole fixes $N=nN_A$ for every substance.", working: "N=6.022\\times10^{23}\\ \\text{for both}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Multiply the amount in moles by the Avogadro constant.", working: "N=0.250\\times6.022\\times10^{23}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "N=1.5055\\times10^{23}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Express in standard form to 3 s.f.", working: "N=1.51\\times10^{23}\\ \\mathrm{atoms}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) the mole counts particles, so any $1\\ \\mathrm{mol}$ contains $N_A$ particles; different $A_r$ gives different mass (b) $1.51\\times10^{23}$ atoms",
            commonErrors: ["Claiming heavier atoms means more particles per mole.", "Giving the answer as $1.5055\\times10^{23}$ without standard form."],
          },
        },
      ],
    },
    {
      id: "chemsl-u1-particle-conversions",
      title: "Converting between moles, mass and particles",
      skill: "Use $N=nN_A$ and $n=\\frac{m}{M}$ to convert between number of particles, amount and mass, including atoms within formula units.",
      lesson: {
        sections: [
          {
            heading: "Number of particles",
            body: "The number of particles $N$ in a sample is $N=nN_A$. Since $n=\\frac{m}{M}$, any two of the quantities $N$, $n$ and $m$ can be converted once the third is known: first convert mass to moles, then moles to particles, or vice versa. Answers are usually quoted in standard form because particle numbers are very large.",
          },
          {
            heading: "Atoms versus formula units",
            body: "For an ionic compound or a molecule, the mole counts formula units or molecules, not individual atoms. For example, one mole of $\\mathrm{NaCl}$ contains $6.022\\times10^{23}$ formula units but $1.204\\times10^{24}$ ions in total — one mole of $\\mathrm{Na^+}$ ions and one mole of $\\mathrm{Cl^-}$ ions. Always read the question to see whether it asks for particles, formula units, molecules or atoms.",
          },
          {
            heading: "Multi-step conversions",
            body: "Typical exam questions chain two or three conversions, such as mass of a compound to number of atoms of one element. The safe strategy is to work one quantity at a time: mass $\\rightarrow$ moles of formula units $\\rightarrow$ moles (or number) of the required particles. Write down each conversion factor and its unit.",
          },
        ],
        keyFormulas: [
          { name: "Number of particles", statement: "$N=n\\times N_A$" },
          { name: "Amount from particle number", statement: "$n=\\frac{N}{N_A}$" },
          { name: "Mass from moles", statement: "$m=nM$" },
        ],
        workedExample: {
          problem: "Calculate the number of oxygen atoms in $4.00\\ \\mathrm{g}$ of carbon dioxide, $\\mathrm{CO_2}$ ($M_r=44.0\\ \\mathrm{g\\,mol^{-1}}$; $N_A=6.022\\times10^{23}\\,\\mathrm{mol^{-1}}$).",
          solution: "$n(\\mathrm{CO_2})=\\frac{4.00}{44.0}=0.0909\\ \\mathrm{mol}$. Each molecule contains two O atoms, so $N(O)=2\\times0.0909\\times6.022\\times10^{23}=1.09\\times10^{23}$ atoms.",
        },
      },
      questions: [
        {
          id: "chemsl-u1-particle-conversions-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "How many particles are there in $2.00\\ \\mathrm{mol}$ of a substance? ($N_A=6.022\\times10^{23}\\,\\mathrm{mol^{-1}}$)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1.20\\times10^{24}$" },
              { id: "b", text: "$3.01\\times10^{23}$" },
              { id: "c", text: "$6.02\\times10^{23}$" },
              { id: "d", text: "$2.41\\times10^{24}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Number of particles", statement: "$N=nN_A$" },
            ],
            steps: [
              { reasoning: "Multiply the amount in moles by the Avogadro constant.", working: "N=2.00\\times6.022\\times10^{23}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "N=1.20\\times10^{24}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $1.20\\times10^{24}$ particles",
            commonErrors: ["Dividing by $N_A$ instead of multiplying, giving $3.01\\times10^{23}$.", "Using $N_A=6.02\\times10^{23}$ but forgetting to double for $2\\ \\mathrm{mol}$."],
          },
        },
        {
          id: "chemsl-u1-particle-conversions-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A sample of water contains $3.01\\times10^{23}$ molecules of $\\mathrm{H_2O}$. Calculate the mass of the sample, in grams. ($M_r(\\mathrm{H_2O})=18.0\\ \\mathrm{g\\,mol^{-1}}$; $N_A=6.022\\times10^{23}\\,\\mathrm{mol^{-1}}$)",
          response: { type: "numeric", parts: [{ label: "$m$ / g", answer: 9, tolerance: 0.01, unit: "g" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Amount from particle number", statement: "$n=\\frac{N}{N_A}$" },
              { kind: "formula", name: "Mass from moles", statement: "$m=nM$" },
            ],
            steps: [
              { reasoning: "Convert the number of molecules to moles.", working: "n=\\frac{3.01\\times10^{23}}{6.022\\times10^{23}}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the amount: $n=0.500\\ \\mathrm{mol}$.", working: "n=0.500\\ \\mathrm{mol}", marks: 1, markCode: "A" },
              { reasoning: "Convert moles to mass using $m=nM$.", working: "m=0.500\\times18.0=9.00\\ \\mathrm{g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$m=9.00\\ \\mathrm{g}$",
            commonErrors: ["Treating $3.01\\times10^{23}$ as $3.01\\ \\mathrm{mol}$.", "Multiplying by $18$ before converting to moles."],
          },
        },
        {
          id: "chemsl-u1-particle-conversions-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A sample of sodium chloride contains $1.20\\times10^{24}$ sodium ions. ($M_r(\\mathrm{NaCl})=58.5\\ \\mathrm{g\\,mol^{-1}}$; $N_A=6.022\\times10^{23}\\,\\mathrm{mol^{-1}}$) Find (a) the amount of sodium ions in moles, (b) the amount of chloride ions in moles, (c) the mass of the sodium chloride sample in grams.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $n(\\mathrm{Na^+})$ / mol", answer: 1.99, tolerance: 0.01, unit: "mol" },
              { label: "(b) $n(\\mathrm{Cl^-})$ / mol", answer: 1.99, tolerance: 0.01, unit: "mol" },
              { label: "(c) $m$ / g", answer: 116.6, tolerance: 0.1, unit: "g" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Amount from particle number", statement: "$n=\\frac{N}{N_A}$" },
              { kind: "definition", name: "Formula unit of NaCl", statement: "Each formula unit contains one $\\mathrm{Na^+}$ and one $\\mathrm{Cl^-}$ ion." },
            ],
            steps: [
              { reasoning: "Convert the number of sodium ions to moles.", working: "n(\\mathrm{Na^+})=\\frac{1.20\\times10^{24}}{6.022\\times10^{23}}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $n(\\mathrm{Na^+})=1.99\\ \\mathrm{mol}$.", working: "n(\\mathrm{Na^+})=1.99\\ \\mathrm{mol}", marks: 1, markCode: "A" },
              { reasoning: "NaCl is 1:1, so $n(\\mathrm{Cl^-})=n(\\mathrm{Na^+})$; the amount of formula units equals the amount of each ion.", working: "n(\\mathrm{Cl^-})=1.99\\ \\mathrm{mol}", marks: 1, markCode: "A" },
              { reasoning: "Convert moles of formula units to mass using $m=nM$.", working: "m=1.99\\times58.5=116.6\\ \\mathrm{g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $1.99\\ \\mathrm{mol}$ (b) $1.99\\ \\mathrm{mol}$ (c) $117\\ \\mathrm{g}$",
            commonErrors: ["Using $M_r=58.5$ for each ion separately and doubling the mass.", "Forgetting that $N$ counts ions, not formula units, and dividing by two unnecessarily."],
            examinerNote: "Allow 3 s.f. answers $1.99\\ \\mathrm{mol}$ and $116\\ \\mathrm{g}$.",
          },
        },
        {
          id: "chemsl-u1-particle-conversions-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A student investigates a $0.500\\ \\mathrm{mol}$ sample of glucose, $\\mathrm{C_6H_{12}O_6}$ ($M_r=180\\ \\mathrm{g\\,mol^{-1}}$; $N_A=6.022\\times10^{23}\\,\\mathrm{mol^{-1}}$).",
          parts: [
            { label: "a", prompt: "Calculate the mass of the sample in grams.", marks: 2 },
            { label: "b", prompt: "Calculate the number of glucose molecules in the sample.", marks: 2 },
            { label: "c", prompt: "Calculate the total number of carbon atoms in the sample.", marks: 2 },
            { label: "d", prompt: "Explain why the number of hydrogen atoms in the sample is not $0.500\\times6.022\\times10^{23}\\times6$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mass from moles", statement: "$m=nM$" },
              { kind: "formula", name: "Number of particles", statement: "$N=nN_A$" },
              { kind: "definition", name: "Molecular formula", statement: "Each molecule of $\\mathrm{C_6H_{12}O_6}$ contains 6 C, 12 H and 6 O atoms." },
            ],
            steps: [
              { part: "a", reasoning: "Multiply moles by molar mass.", working: "m=0.500\\times180", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "m=90.0\\ \\mathrm{g}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Multiply moles of glucose by the Avogadro constant.", working: "N=0.500\\times6.022\\times10^{23}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "N=3.01\\times10^{23}\\ \\mathrm{molecules}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Each glucose molecule contains six carbon atoms, so multiply the number of molecules by six.", working: "N(C)=6\\times3.01\\times10^{23}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "N(C)=1.81\\times10^{24}\\ \\mathrm{atoms}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The factor of six applies to carbon because there are six carbon atoms per molecule; glucose has twelve hydrogen atoms, not six.", working: "\\text{12 H per molecule}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Correct expression: $N(H)=0.500\\times12\\times6.022\\times10^{23}$.", working: "N(H)=3.61\\times10^{24}\\ \\mathrm{atoms}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $90.0\\ \\mathrm{g}$ (b) $3.01\\times10^{23}$ molecules (c) $1.81\\times10^{24}$ C atoms (d) glucose has 12 H atoms per molecule, so the multiplier is 12",
            commonErrors: ["Using six as the multiplier for hydrogen in (d).", "Forgetting to convert moles to particles in (b)."],
          },
        },
        {
          id: "chemsl-u1-particle-conversions-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "How many moles of particles are there in $3.01\\times10^{23}$ particles? ($N_A=6.022\\times10^{23}\\,\\mathrm{mol^{-1}}$)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.250\\ \\mathrm{mol}$" },
              { id: "b", text: "$0.500\\ \\mathrm{mol}$" },
              { id: "c", text: "$1.00\\ \\mathrm{mol}$" },
              { id: "d", text: "$3.01\\ \\mathrm{mol}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Amount from particle number", statement: "$n=\\frac{N}{N_A}$" },
            ],
            steps: [
              { reasoning: "Divide the number of particles by the Avogadro constant.", working: "n=\\frac{3.01\\times10^{23}}{6.022\\times10^{23}}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and state with units.", working: "n=0.500\\ \\mathrm{mol}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $0.500\\ \\mathrm{mol}$",
            commonErrors: ["Dividing by $10^{23}$ only, forgetting $N_A$.", "Multiplying by $N_A$ instead of dividing."],
          },
        },
        {
          id: "chemsl-u1-particle-conversions-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A sample of sodium chloride contains $0.500\\ \\mathrm{mol}$ of $\\mathrm{NaCl}$ formula units. What is the total amount, in moles, of ions present?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.500\\ \\mathrm{mol}$" },
              { id: "b", text: "$1.00\\ \\mathrm{mol}$" },
              { id: "c", text: "$0.250\\ \\mathrm{mol}$" },
              { id: "d", text: "$2.00\\ \\mathrm{mol}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Formula unit of NaCl", statement: "Each formula unit contains two ions, $\\mathrm{Na^+}$ and $\\mathrm{Cl^-}$." },
            ],
            steps: [
              { reasoning: "Each formula unit gives two ions, so double the amount of formula units.", working: "n(\\mathrm{ions})=2\\times0.500", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "n(\\mathrm{ions})=1.00\\ \\mathrm{mol}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $1.00\\ \\mathrm{mol}$ of ions",
            commonErrors: ["Answering $0.500\\ \\mathrm{mol}$ by forgetting each formula unit gives two ions.", "Answering $2.00\\ \\mathrm{mol}$ by doubling twice."],
          },
        },
        {
          id: "chemsl-u1-particle-conversions-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "What is the mass, in grams, of $1.20\\times10^{24}$ molecules of hydrogen, $\\mathrm{H_2}$? ($M_r=2.0\\ \\mathrm{g\\,mol^{-1}}$; $N_A=6.022\\times10^{23}\\,\\mathrm{mol^{-1}}$)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1.0\\ \\mathrm{g}$" },
              { id: "b", text: "$2.0\\ \\mathrm{g}$" },
              { id: "c", text: "$4.0\\ \\mathrm{g}$" },
              { id: "d", text: "$8.0\\ \\mathrm{g}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Amount from particle number", statement: "$n=\\frac{N}{N_A}$" },
              { kind: "formula", name: "Mass from moles", statement: "$m=nM$" },
            ],
            steps: [
              { reasoning: "Convert molecules to moles: $n=\\frac{1.20\\times10^{24}}{6.022\\times10^{23}}\\approx2.0\\ \\mathrm{mol}$.", working: "n\\approx2.0\\ \\mathrm{mol}", marks: 1, markCode: "M" },
              { reasoning: "Convert moles to mass: $m=2.0\\times2.0=4.0\\ \\mathrm{g}$.", working: "m=4.0\\ \\mathrm{g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $4.0\\ \\mathrm{g}$",
            commonErrors: ["Using the molar mass of H atoms ($1.0$) instead of $\\mathrm{H_2}$ molecules.", "Multiplying $1.20\\times10^{24}$ by $2.0$ without converting to moles."],
          },
        },
        {
          id: "chemsl-u1-particle-conversions-q8",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "How many oxygen atoms are present in $0.100\\ \\mathrm{mol}$ of calcium carbonate, $\\mathrm{CaCO_3}$? ($N_A=6.022\\times10^{23}\\,\\mathrm{mol^{-1}}$)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$6.02\\times10^{22}$" },
              { id: "b", text: "$1.21\\times10^{23}$" },
              { id: "c", text: "$1.81\\times10^{23}$" },
              { id: "d", text: "$3.61\\times10^{23}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Formula unit of CaCO3", statement: "Each formula unit contains three oxygen atoms." },
              { kind: "formula", name: "Number of particles", statement: "$N=nN_A$" },
            ],
            steps: [
              { reasoning: "Amount of O atoms is three times the amount of formula units: $n(O)=3\\times0.100=0.300\\ \\mathrm{mol}$.", working: "n(O)=0.300\\ \\mathrm{mol}", marks: 1, markCode: "M" },
              { reasoning: "Convert to a number of atoms.", working: "N=0.300\\times6.022\\times10^{23}=1.81\\times10^{23}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $1.81\\times10^{23}$ oxygen atoms",
            commonErrors: ["Using one oxygen per formula unit, giving $6.02\\times10^{22}$.", "Using four atoms per formula unit (counting Ca), giving $2.41\\times10^{23}$."],
          },
        },
        {
          id: "chemsl-u1-particle-conversions-q9",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 2,
          stem: "Calculate the amount, in moles, of particles in a sample containing $2.41\\times10^{24}$ particles. Give your answer to 3 significant figures. ($N_A=6.022\\times10^{23}\\,\\mathrm{mol^{-1}}$)",
          response: { type: "numeric", parts: [{ label: "$n$ / mol", answer: 4, tolerance: 0.001, unit: "mol" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Amount from particle number", statement: "$n=\\frac{N}{N_A}$" },
            ],
            steps: [
              { reasoning: "Divide the number of particles by the Avogadro constant.", working: "n=\\frac{2.41\\times10^{24}}{6.022\\times10^{23}}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate to 3 s.f.", working: "n=4.00\\ \\mathrm{mol}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$n=4.00\\ \\mathrm{mol}$",
            commonErrors: ["Multiplying by $N_A$ instead of dividing.", "Quoting $4\\ \\mathrm{mol}$ without 3 s.f."],
          },
        },
        {
          id: "chemsl-u1-particle-conversions-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A sample contains $6.02\\times10^{23}$ molecules of oxygen, $\\mathrm{O_2}$ ($M_r=32.0\\ \\mathrm{g\\,mol^{-1}}$). Calculate the mass of the sample in grams. ($N_A=6.022\\times10^{23}\\,\\mathrm{mol^{-1}}$)",
          response: { type: "numeric", parts: [{ label: "$m$ / g", answer: 32, tolerance: 0.1, unit: "g" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Amount from particle number", statement: "$n=\\frac{N}{N_A}$" },
              { kind: "formula", name: "Mass from moles", statement: "$m=nM$" },
            ],
            steps: [
              { reasoning: "Convert molecules to moles.", working: "n=\\frac{6.02\\times10^{23}}{6.022\\times10^{23}}=1.00\\ \\mathrm{mol}", marks: 1, markCode: "M" },
              { reasoning: "Convert moles to mass with $m=nM$.", working: "m=1.00\\times32.0", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "m=32.0\\ \\mathrm{g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$m=32.0\\ \\mathrm{g}$",
            commonErrors: ["Using $M_r=16.0$ for oxygen atoms instead of $\\mathrm{O_2}$ molecules.", "Stopping at $1.00\\ \\mathrm{mol}$ without converting to mass."],
          },
        },
        {
          id: "chemsl-u1-particle-conversions-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A sample of carbon dioxide contains $1.50\\times10^{24}$ molecules of $\\mathrm{CO_2}$ ($M_r=44.0\\ \\mathrm{g\\,mol^{-1}}$; $N_A=6.022\\times10^{23}\\,\\mathrm{mol^{-1}}$). Find (a) the amount of $\\mathrm{CO_2}$ in moles, (b) the mass of the sample, (c) the number of oxygen atoms.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $n(\\mathrm{CO_2})$ / mol", answer: 2.49, tolerance: 0.01, unit: "mol" },
              { label: "(b) $m$ / g", answer: 109.6, tolerance: 0.1, unit: "g" },
              { label: "(c) $N(O)$", answer: 3000000000000000000000000, tolerance: 10000000000000000000000, unit: "atoms" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Amount from particle number", statement: "$n=\\frac{N}{N_A}$" },
              { kind: "formula", name: "Mass from moles", statement: "$m=nM$" },
              { kind: "definition", name: "Molecular formula of CO2", statement: "Each molecule contains two oxygen atoms." },
            ],
            steps: [
              { reasoning: "Convert molecules to moles.", working: "n=\\frac{1.50\\times10^{24}}{6.022\\times10^{23}}=2.49\\ \\mathrm{mol}", marks: 1, markCode: "M" },
              { reasoning: "Convert moles to mass.", working: "m=2.49\\times44.0=109.6\\ \\mathrm{g}", marks: 1, markCode: "M" },
              { reasoning: "Each molecule has two O atoms: $n(O)=2\\times2.49=4.98\\ \\mathrm{mol}$; $N(O)=4.98\\times6.022\\times10^{23}=3.00\\times10^{24}$.", working: "N(O)=3.00\\times10^{24}\\ \\mathrm{atoms}", marks: 1, markCode: "M" },
              { reasoning: "Quote all three answers to 3 s.f.", working: "2.49\\ \\mathrm{mol},\\ 110\\ \\mathrm{g},\\ 3.00\\times10^{24}\\ \\mathrm{atoms}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $2.49\\ \\mathrm{mol}$ (b) $110\\ \\mathrm{g}$ (c) $3.00\\times10^{24}$ atoms",
            commonErrors: ["Counting only one oxygen atom per molecule in (c).", "Using $M_r=12.0$ (carbon only) for the mass."],
          },
        },
        {
          id: "chemsl-u1-particle-conversions-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "A sample of sodium chloride has a mass of $11.7\\ \\mathrm{g}$ ($M_r(\\mathrm{NaCl})=58.5\\ \\mathrm{g\\,mol^{-1}}$; $A_r(\\mathrm{Na})=23.0$; $N_A=6.022\\times10^{23}\\,\\mathrm{mol^{-1}}$). Find (a) the amount of $\\mathrm{NaCl}$ formula units, (b) the total amount of ions, (c) the number of $\\mathrm{Cl^-}$ ions, (d) the mass of sodium in the sample.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $n(\\mathrm{NaCl})$ / mol", answer: 0.2, tolerance: 0.001, unit: "mol" },
              { label: "(b) $n(\\mathrm{ions})$ / mol", answer: 0.4, tolerance: 0.001, unit: "mol" },
              { label: "(c) $N(\\mathrm{Cl^-})$", answer: 120000000000000000000000, tolerance: 1000000000000000000000, unit: "ions" },
              { label: "(d) $m(\\mathrm{Na})$ / g", answer: 4.6, tolerance: 0.01, unit: "g" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Amount of substance", statement: "$n=\\frac{m}{M}$" },
              { kind: "definition", name: "Formula unit of NaCl", statement: "Each formula unit contains one $\\mathrm{Na^+}$ and one $\\mathrm{Cl^-}$ ion." },
              { kind: "formula", name: "Number of particles", statement: "$N=nN_A$" },
            ],
            steps: [
              { reasoning: "Convert mass to moles of formula units.", working: "n=\\frac{11.7}{58.5}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $n(\\mathrm{NaCl})=0.200\\ \\mathrm{mol}$.", working: "n=0.200\\ \\mathrm{mol}", marks: 1, markCode: "A" },
              { reasoning: "Two ions per formula unit give $0.400\\ \\mathrm{mol}$ of ions; $0.200\\ \\mathrm{mol}$ of $\\mathrm{Cl^-}$ gives $N=0.200\\times6.022\\times10^{23}=1.20\\times10^{23}$ ions.", working: "N(\\mathrm{Cl^-})=1.20\\times10^{23}", marks: 1, markCode: "M" },
              { reasoning: "Mass of sodium: $m=0.200\\times23.0=4.60\\ \\mathrm{g}$.", working: "m(\\mathrm{Na})=4.60\\ \\mathrm{g}", marks: 1, markCode: "M" },
              { reasoning: "Quote all answers with units.", working: "0.200,\\ 0.400,\\ 1.20\\times10^{23},\\ 4.60", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $0.200\\ \\mathrm{mol}$ (b) $0.400\\ \\mathrm{mol}$ (c) $1.20\\times10^{23}$ ions (d) $4.60\\ \\mathrm{g}$",
            commonErrors: ["Using $58.5\\ \\mathrm{g\\,mol^{-1}}$ as the molar mass of sodium in (d).", "Reporting the mass of the whole sample instead of just the sodium."],
          },
        },
        {
          id: "chemsl-u1-particle-conversions-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A student has $0.400\\ \\mathrm{mol}$ of magnesium chloride, $\\mathrm{MgCl_2}$ ($M_r=95.2\\ \\mathrm{g\\,mol^{-1}}$; $N_A=6.022\\times10^{23}\\,\\mathrm{mol^{-1}}$).",
          parts: [
            { label: "a", prompt: "Calculate the mass of the sample in grams.", marks: 2 },
            { label: "b", prompt: "Calculate the total amount, in moles, of ions in the sample.", marks: 2 },
            { label: "c", prompt: "Calculate the number of $\\mathrm{Mg^{2+}}$ ions in the sample.", marks: 2 },
            { label: "d", prompt: "Explain why the amount of ions is three times the amount of $\\mathrm{MgCl_2}$ formula units.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mass from moles", statement: "$m=nM$" },
              { kind: "definition", name: "Formula unit of MgCl2", statement: "Each formula unit contains three ions: one $\\mathrm{Mg^{2+}}$ and two $\\mathrm{Cl^-}$." },
              { kind: "formula", name: "Number of particles", statement: "$N=nN_A$" },
            ],
            steps: [
              { part: "a", reasoning: "Multiply moles by molar mass.", working: "m=0.400\\times95.2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "m=38.1\\ \\mathrm{g}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Three ions per formula unit: $n(\\mathrm{ions})=3\\times0.400$.", working: "n(\\mathrm{ions})=1.20\\ \\mathrm{mol}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the amount with units.", working: "1.20\\ \\mathrm{mol}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "One $\\mathrm{Mg^{2+}}$ per formula unit: $N=0.400\\times6.022\\times10^{23}$.", working: "N=2.41\\times10^{23}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Express in standard form to 3 s.f.", working: "N=2.41\\times10^{23}\\ \\mathrm{ions}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The formula unit $\\mathrm{MgCl_2}$ consists of one $\\mathrm{Mg^{2+}}$ ion and two $\\mathrm{Cl^-}$ ions, so each formula unit produces three ions.", working: "1+2=3\\ \\text{ions per formula unit}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Therefore $n(\\mathrm{ions})=3n(\\mathrm{MgCl_2})=3\\times0.400=1.20\\ \\mathrm{mol}$.", working: "n(\\mathrm{ions})=3\\times0.400", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $38.1\\ \\mathrm{g}$ (b) $1.20\\ \\mathrm{mol}$ (c) $2.41\\times10^{23}$ ions (d) each $\\mathrm{MgCl_2}$ unit gives three ions",
            commonErrors: ["Using two ions per formula unit instead of three.", "Using $3\\times0.400$ for the number of $\\mathrm{Mg^{2+}}$ ions in (c) — there is only one Mg per formula unit."],
          },
        },
        {
          id: "chemsl-u1-particle-conversions-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Water has the formula $\\mathrm{H_2O}$ ($M_r=18.0\\ \\mathrm{g\\,mol^{-1}}$; $N_A=6.022\\times10^{23}\\,\\mathrm{mol^{-1}}$).",
          parts: [
            { label: "a", prompt: "Explain why $1\\ \\mathrm{mol}$ of water contains $1\\ \\mathrm{mol}$ of molecules but $3\\ \\mathrm{mol}$ of atoms.", marks: 3 },
            { label: "b", prompt: "Calculate the number of atoms in $18.0\\ \\mathrm{g}$ of water, giving your answer in standard form.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mole", statement: "One mole counts particles; the particle counted depends on what the substance is." },
              { kind: "definition", name: "Molecular formula of water", statement: "Each $\\mathrm{H_2O}$ molecule contains three atoms." },
            ],
            steps: [
              { part: "a", reasoning: "For a molecular substance the mole counts molecules, so $1\\ \\mathrm{mol}$ of water contains $1\\ \\mathrm{mol}$ (i.e. $N_A$) of $\\mathrm{H_2O}$ molecules.", working: "1\\ \\mathrm{mol}\\ \\mathrm{H_2O}\\text{ molecules}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Each molecule contains two H atoms and one O atom, three atoms in total.", working: "2+1=3\\ \\text{atoms per molecule}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Hence the same sample contains three times as many moles of atoms: $3\\ \\mathrm{mol}$ of atoms.", working: "n(\\mathrm{atoms})=3\\times1=3\\ \\mathrm{mol}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$18.0\\ \\mathrm{g}$ is $1.00\\ \\mathrm{mol}$ of water, containing $3.00\\ \\mathrm{mol}$ of atoms; convert to a number.", working: "N=3.00\\times6.022\\times10^{23}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "N=1.81\\times10^{24}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Express in standard form to 3 s.f.", working: "N=1.81\\times10^{24}\\ \\mathrm{atoms}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) the mole counts molecules of $\\mathrm{H_2O}$, each with 3 atoms, so 1 mol of molecules contains 3 mol of atoms (b) $1.81\\times10^{24}$ atoms",
            commonErrors: ["Claiming $1\\ \\mathrm{mol}$ of water contains $3\\ \\mathrm{mol}$ of molecules.", "Using six atoms per water molecule."],
          },
        },
        {
          id: "chemsl-u1-particle-conversions-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "How many moles of $\\mathrm{Na^+}$ ions are present in $2.00\\ \\mathrm{mol}$ of sodium carbonate, $\\mathrm{Na_2CO_3}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1.00\\ \\mathrm{mol}$" },
              { id: "b", text: "$2.00\\ \\mathrm{mol}$" },
              { id: "c", text: "$4.00\\ \\mathrm{mol}$" },
              { id: "d", text: "$6.00\\ \\mathrm{mol}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Formula unit of Na2CO3", statement: "Each formula unit contains two $\\mathrm{Na^+}$ ions." },
            ],
            steps: [
              { reasoning: "Multiply the amount of formula units by two.", working: "n(\\mathrm{Na^+})=2\\times2.00", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "n(\\mathrm{Na^+})=4.00\\ \\mathrm{mol}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $4.00\\ \\mathrm{mol}$",
            commonErrors: ["Answering $2.00\\ \\mathrm{mol}$ by ignoring the two sodium ions per formula unit.", "Answering $6.00\\ \\mathrm{mol}$ by counting all ions (2 Na + 1 CO3 gives 3 per unit, but the question asks only for Na+)."],
          },
        },
        {
          id: "chemsl-u1-particle-conversions-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Explain the difference between the amount of substance of an ionic compound and the total amount of its ions, and calculate the number of ions in $0.250\\ \\mathrm{mol}$ of sodium chloride, $\\mathrm{NaCl}$ ($N_A=6.022\\times10^{23}\\,\\mathrm{mol^{-1}}$).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Formula unit of NaCl", statement: "Each formula unit contains one $\\mathrm{Na^+}$ and one $\\mathrm{Cl^-}$ ion." },
              { kind: "formula", name: "Number of particles", statement: "$N=nN_A$" },
            ],
            steps: [
              { reasoning: "The mole of an ionic compound counts formula units; the ions exist only in the crystal or in solution, so $0.250\\ \\mathrm{mol}$ of NaCl means $0.250\\ \\mathrm{mol}$ of formula units.", working: "n(\\mathrm{NaCl})=0.250\\ \\mathrm{mol\\ formula\\ units}", marks: 1, markCode: "M" },
              { reasoning: "Each formula unit contains two ions, so the total amount of ions is twice the amount of formula units.", working: "n(\\mathrm{ions})=2\\times0.250=0.500\\ \\mathrm{mol}", marks: 1, markCode: "M" },
              { reasoning: "Convert the amount of ions to a number using $N=nN_A$.", working: "N=0.500\\times6.022\\times10^{23}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "N=3.01\\times10^{23}", marks: 1, markCode: "A" },
              { reasoning: "Express in standard form with units.", working: "N=3.01\\times10^{23}\\ \\mathrm{ions}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The mole counts formula units, but each gives two ions; $0.250\\ \\mathrm{mol}$ NaCl contains $0.500\\ \\mathrm{mol}$ of ions, i.e. $3.01\\times10^{23}$ ions",
            commonErrors: ["Reporting $3.01\\times10^{23}$ formula units as the answer to 'number of ions'.", "Doubling twice: using $4\\times0.250$ for the ion amount."],
          },
        },
      ],
    },
  ],
};

