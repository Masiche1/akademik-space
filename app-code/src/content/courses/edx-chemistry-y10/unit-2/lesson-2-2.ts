import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "ech10-u2-lesson-2-2",
  code: "2-2",
  title: "Concentration, Gas Volumes and Titration",
  goal: "I CAN calculate concentrations and gas volumes using moles, and analyse titration results to find an unknown concentration.",
  standards: ["4CH1 1.44", "4CH1 1.45", "4CH1 1.46", "4CH1 1.47", "4CH1 1.48"],
  vocabulary: [
    { term: "Concentration", definition: "The amount of solute dissolved in a given volume of solution, measured in $\\text{mol/dm}^3$ or $\\text{g/dm}^3$." },
    { term: "Molar gas volume", definition: "The volume occupied by one mole of any gas at room temperature and pressure, which is $24\\text{ dm}^3$." },
    { term: "Titration", definition: "A method for finding the volume of one solution that exactly reacts with a known volume of another, using an indicator to show the end-point." },
    { term: "Burette", definition: "A long graduated tube with a tap, used to add a variable volume of solution accurately." },
    { term: "Pipette", definition: "Apparatus used to measure a fixed volume of solution accurately, for example $25.0\\text{ cm}^3$." },
    { term: "End-point", definition: "The point at which the indicator changes colour, showing that the reactants have exactly reacted." },
    { term: "Titre", definition: "The volume of solution added from the burette to reach the end-point." },
  ],
  concepts: [
    {
      id: "ech10-u2-concentration-gas-volumes",
      title: "Concentration and gas volumes",
      skill: "Calculate concentration in $\\text{mol/dm}^3$ and the volume of a gas using $24\\text{ dm}^3$ per mole.",
      lesson: {
        sections: [
          {
            heading: "Concentration of a solution",
            body: "Concentration tells us how much solute is in each $\\text{dm}^3$ of solution. Remember that $1\\text{ dm}^3 = 1000\\text{ cm}^3$, so always convert volumes in $\\text{cm}^3$ by dividing by 1000.\n\n$$\\text{concentration (mol/dm}^3) = \\frac{\\text{moles}}{\\text{volume (dm}^3)}$$\n\nIf a concentration is given in $\\text{g/dm}^3$, multiply the concentration in $\\text{mol/dm}^3$ by $M_r$ to convert it, or divide by $M_r$ to go the other way.",
          },
          {
            heading: "Gas volumes",
            body: "One mole of any gas occupies $24\\text{ dm}^3$ at room temperature and pressure (rtp). This is the **molar gas volume**.\n\n$$\\text{volume of gas (dm}^3) = \\text{moles} \\times 24$$\n\nTo find the volume of gas made in a reaction, work out the moles of the reactant, use the equation ratio to find moles of gas, then multiply by 24. Give the answer in $\\text{cm}^3$ by multiplying the $\\text{dm}^3$ value by 1000.",
          },
        ],
        keyFormulas: [
          { name: "Concentration", statement: "$c = \\frac{n}{V}$ with $V$ in $\\text{dm}^3$" },
          { name: "Gas volume at rtp", statement: "$V = n \\times 24\\text{ dm}^3$" },
          { name: "Unit conversion", statement: "$1\\text{ dm}^3 = 1000\\text{ cm}^3$" },
        ],
        workedExample: {
          problem: "Calculate the volume of hydrogen made when $0.12\\text{ g}$ of magnesium reacts with excess acid. $\\text{Mg} + 2\\text{HCl} \\rightarrow \\text{MgCl}_2 + \\text{H}_2$. ($A_r$: Mg = 24)",
          solution: "Moles of Mg $= \\frac{0.12}{24} = 0.005\\text{ mol}$. The ratio Mg : $\\text{H}_2$ is $1 : 1$, so $0.005\\text{ mol}$ of $\\text{H}_2$. Volume $= 0.005 \\times 24 = 0.12\\text{ dm}^3 = 120\\text{ cm}^3$.",
        },
      },
      questions: [
        {
          id: "ech10-u2-concentration-gas-volumes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A solution contains $0.50\\text{ mol}$ of solute in $250\\text{ cm}^3$. What is its concentration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.50\\text{ mol/dm}^3$" },
              { id: "b", text: "$125\\text{ mol/dm}^3$" },
              { id: "c", text: "$0.125\\text{ mol/dm}^3$" },
              { id: "d", text: "$2.0\\text{ mol/dm}^3$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Concentration", statement: "$c = \\frac{n}{V}$ with $V$ in $\\text{dm}^3$." },
            ],
            steps: [
              { reasoning: "Convert the volume to $\\text{dm}^3$ ($250 \\div 1000 = 0.250$), then divide the moles by it.", working: "\\frac{0.50}{0.250} = 2.0\\text{ mol/dm}^3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $2.0\\text{ mol/dm}^3$",
            commonErrors: ["Multiplying moles by volume in $\\text{dm}^3$ to get 0.125.", "Forgetting to convert $\\text{cm}^3$ to $\\text{dm}^3$ to get 125 or 0.002."],
            examinerNote: "B1 for 2.0.",
          },
        },
        {
          id: "ech10-u2-concentration-gas-volumes-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate the mass of sodium hydroxide, NaOH, in $250\\text{ cm}^3$ of a solution of concentration $0.20\\text{ mol/dm}^3$. ($A_r$: Na = 23, O = 16, H = 1)",
          response: { type: "numeric", parts: [{ label: "Mass of NaOH", answer: 2, unit: "g" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moles from concentration", statement: "$n = c \\times V$ with $V$ in $\\text{dm}^3$." },
            ],
            steps: [
              { reasoning: "Find moles using concentration times volume in $\\text{dm}^3$.", working: "n = 0.20 \\times 0.250 = 0.050\\text{ mol}", marks: 1, markCode: "M" },
              { reasoning: "Find $M_r$ of NaOH and multiply by moles.", working: "M_r = 40,\\quad 0.050 \\times 40", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "2.0\\text{ g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.0\\text{ g}$",
            commonErrors: ["Using $250$ instead of $0.250$ for the volume, giving 2000 g.", "Forgetting to multiply by $M_r$ and giving 0.05."],
            examinerNote: "M1 for 0.050 mol. M1 for $\\times 40$, allow ecf. A1 for 2.0 g.",
          },
        },
        {
          id: "ech10-u2-concentration-gas-volumes-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Magnesium reacts with excess hydrochloric acid: $\\text{Mg} + 2\\text{HCl} \\rightarrow \\text{MgCl}_2 + \\text{H}_2$. Calculate the volume of hydrogen, in $\\text{cm}^3$, produced at room temperature and pressure from $0.60\\text{ g}$ of magnesium. (The molar gas volume is $24\\text{ dm}^3$. $A_r$: Mg = 24)",
          response: { type: "numeric", parts: [{ label: "Volume of hydrogen", answer: 600, unit: "cm³" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gas volume", statement: "$V = n \\times 24\\text{ dm}^3$ at rtp." },
            ],
            steps: [
              { reasoning: "Find the moles of magnesium.", working: "\\frac{0.60}{24} = 0.025\\text{ mol}", marks: 1, markCode: "M" },
              { reasoning: "The ratio Mg : $\\text{H}_2$ is $1 : 1$.", working: "n(\\text{H}_2) = 0.025\\text{ mol}", marks: 1, markCode: "M" },
              { reasoning: "Multiply by the molar gas volume.", working: "0.025 \\times 24 = 0.60\\text{ dm}^3", marks: 1, markCode: "M" },
              { reasoning: "Convert to $\\text{cm}^3$.", working: "0.60 \\times 1000 = 600\\text{ cm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$600\\text{ cm}^3$",
            commonErrors: ["Leaving the answer as 0.60 and not converting to $\\text{cm}^3$.", "Using the 1 : 2 ratio of Mg to HCl for the hydrogen."],
            examinerNote: "M1 0.025 mol. M1 1:1 ratio. M1 $\\times 24$. A1 600 cm$^3$; allow 0.6 dm$^3$ if the stem unit is ignored but the A1 requires cm$^3$.",
          },
        },
        {
          id: "ech10-u2-concentration-gas-volumes-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student adds $5.0\\text{ g}$ of calcium carbonate to excess hydrochloric acid: $\\text{CaCO}_3 + 2\\text{HCl} \\rightarrow \\text{CaCl}_2 + \\text{H}_2\\text{O} + \\text{CO}_2$. ($A_r$: Ca = 40, C = 12, O = 16. Molar gas volume $= 24\\text{ dm}^3$.)",
          parts: [
            { label: "a", prompt: "Calculate the amount, in moles, of calcium carbonate used.", marks: 2 },
            { label: "b", prompt: "Calculate the volume of carbon dioxide produced at room temperature and pressure. Give your answer in $\\text{dm}^3$.", marks: 2 },
            { label: "c", prompt: "Calculate the amount, in moles, of hydrochloric acid that reacts with the calcium carbonate.", marks: 1 },
            { label: "d", prompt: "The acid has a concentration of $2.0\\text{ mol/dm}^3$. Calculate the minimum volume of acid needed to react completely with the calcium carbonate. Give your answer in $\\text{cm}^3$.", marks: 2 },
            { label: "e", prompt: "Name a piece of apparatus that could be used to measure the volume of carbon dioxide produced, and suggest why a gas syringe is better than collecting the gas over water.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moles", statement: "$n = \\frac{\\text{mass}}{M_r}$ and $n = c \\times V$." },
              { kind: "formula", name: "Gas volume", statement: "$V = n \\times 24\\text{ dm}^3$ at rtp." },
            ],
            steps: [
              { part: "a", reasoning: "$M_r$ of $\\text{CaCO}_3$ is 100. Divide mass by $M_r$.", working: "\\frac{5.0}{100}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "0.050\\text{ mol}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The ratio $\\text{CaCO}_3 : \\text{CO}_2$ is $1 : 1$. Multiply moles by 24.", working: "0.050 \\times 24", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "1.2\\text{ dm}^3", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The ratio $\\text{CaCO}_3 : \\text{HCl}$ is $1 : 2$.", working: "0.050 \\times 2 = 0.10\\text{ mol}", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Rearrange $n = cV$ to $V = n \\div c$.", working: "V = \\frac{0.10}{2.0} = 0.050\\text{ dm}^3", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Convert to $\\text{cm}^3$.", working: "0.050 \\times 1000 = 50\\text{ cm}^3", marks: 1, markCode: "A" },
              { part: "e", reasoning: "A gas syringe (or an inverted measuring cylinder or burette over water) can be used.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Carbon dioxide is slightly soluble in water, so some would dissolve and the volume would be too small. A gas syringe avoids this.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $0.050\\text{ mol}$ (b) $1.2\\text{ dm}^3$ (c) $0.10\\text{ mol}$ (d) $50\\text{ cm}^3$ (e) gas syringe; $\\text{CO}_2$ dissolves in water",
            commonErrors: ["Using 0.050 mol of HCl by ignoring the 1 : 2 ratio, giving 25 cm$^3$.", "Not converting $\\text{dm}^3$ to $\\text{cm}^3$ in (d).", "Saying the gas syringe is better because it is 'more accurate' with no reason."],
            examinerNote: "In (e) the first mark is for naming the apparatus; allow 'gas syringe'. Allow ecf from (a) through (b), (c) and (d).",
          },
        },
      ],
    },
    {
      id: "ech10-u2-titration-calculations",
      title: "Titration calculations",
      skill: "Process titration results, identify concordant titres and calculate an unknown concentration.",
      lesson: {
        sections: [
          {
            heading: "Carrying out a titration",
            body: "In an acid-alkali titration a **pipette** measures an exact volume (usually $25.0\\text{ cm}^3$) of one solution into a conical flask, with a few drops of indicator. The other solution is added from a **burette** until the indicator changes colour at the **end-point**. The volume added is the **titre**.\n\nA first rough titration finds the approximate end-point. Then the titration is repeated, adding drop by drop near the end-point, until two or more **concordant** results (within $0.10\\text{ cm}^3$ of each other) are obtained. The **mean titre** is calculated from the concordant results only; anomalous results are ignored.",
          },
          {
            heading: "Calculating the unknown concentration",
            body: "Follow these steps:\n\n- calculate the moles of the solution of known concentration: $n = c \\times V$ (with $V$ in $\\text{dm}^3$)\n- use the balanced equation ratio to find the moles of the other reactant\n- divide by its volume in $\\text{dm}^3$ to get the concentration in $\\text{mol/dm}^3$\n- multiply by $M_r$ if the concentration is needed in $\\text{g/dm}^3$\n\nFor $\\text{NaOH} + \\text{HCl} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}$ the ratio is $1 : 1$. For $\\text{H}_2\\text{SO}_4 + 2\\text{NaOH} \\rightarrow \\text{Na}_2\\text{SO}_4 + 2\\text{H}_2\\text{O}$ the ratio acid : alkali is $1 : 2$.",
          },
        ],
        keyFormulas: [
          { name: "Moles from a solution", statement: "$n = c \\times \\frac{V(\\text{cm}^3)}{1000}$" },
          { name: "Mean titre", statement: "Mean of concordant titres only, which are within $0.10\\text{ cm}^3$" },
          { name: "Concentration units", statement: "$\\text{g/dm}^3 = \\text{mol/dm}^3 \\times M_r$" },
        ],
        workedExample: {
          problem: "$25.0\\text{ cm}^3$ of sodium hydroxide solution is neutralised by $20.0\\text{ cm}^3$ of $0.100\\text{ mol/dm}^3$ hydrochloric acid. Calculate the concentration of the sodium hydroxide.",
          solution: "Moles of HCl $= 0.100 \\times \\frac{20.0}{1000} = 0.00200\\text{ mol}$. The ratio is $1 : 1$, so moles of NaOH $= 0.00200\\text{ mol}$. Concentration $= \\frac{0.00200}{0.0250} = 0.0800\\text{ mol/dm}^3$.",
        },
      },
      questions: [
        {
          id: "ech10-u2-titration-calculations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which piece of apparatus is used in a titration to add a variable volume of solution, drop by drop, to the conical flask?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pipette" },
              { id: "b", text: "Burette" },
              { id: "c", text: "Gas syringe" },
              { id: "d", text: "Measuring cylinder" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Burette", statement: "A burette has a tap and scale so a variable volume can be added accurately." },
            ],
            steps: [
              { reasoning: "The burette adds a variable volume under control. A pipette delivers one fixed volume.", working: "\\text{burette}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Burette",
            commonErrors: ["Choosing the pipette, which measures a fixed volume into the flask."],
            examinerNote: "B1 for burette.",
          },
        },
        {
          id: "ech10-u2-titration-calculations-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "$25.0\\text{ cm}^3$ of sodium hydroxide solution is neutralised by $20.0\\text{ cm}^3$ of $0.100\\text{ mol/dm}^3$ hydrochloric acid. $\\text{NaOH} + \\text{HCl} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}$. Calculate the concentration of the sodium hydroxide solution in $\\text{mol/dm}^3$.",
          response: { type: "numeric", parts: [{ label: "Concentration of NaOH", answer: 0.08, tolerance: 0.001, unit: "mol/dm³" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moles", statement: "$n = c \\times V$ with $V$ in $\\text{dm}^3$." },
            ],
            steps: [
              { reasoning: "Moles of acid used.", working: "0.100 \\times \\frac{20.0}{1000} = 0.00200\\text{ mol}", marks: 1, markCode: "M" },
              { reasoning: "The ratio is $1 : 1$, so moles of NaOH are the same. Divide by its volume in $\\text{dm}^3$.", working: "\\frac{0.00200}{0.0250}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "0.0800\\text{ mol/dm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.0800\\text{ mol/dm}^3$",
            commonErrors: ["Using $c_1V_1 = c_2V_2$ the wrong way round to get 0.125.", "Not converting $\\text{cm}^3$ to $\\text{dm}^3$."],
            examinerNote: "M1 for 0.00200. M1 for dividing by 0.0250, allow ecf. A1 for 0.08.",
          },
        },
        {
          id: "ech10-u2-titration-calculations-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "$25.0\\text{ cm}^3$ of $0.100\\text{ mol/dm}^3$ sodium hydroxide solution is neutralised by $20.0\\text{ cm}^3$ of sulfuric acid. $\\text{H}_2\\text{SO}_4 + 2\\text{NaOH} \\rightarrow \\text{Na}_2\\text{SO}_4 + 2\\text{H}_2\\text{O}$. Calculate the concentration of the sulfuric acid in $\\text{mol/dm}^3$. Give your answer to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Concentration of H₂SO₄", answer: 0.0625, tolerance: 0.0001, unit: "mol/dm³" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moles", statement: "$n = c \\times V$ with $V$ in $\\text{dm}^3$." },
              { kind: "law", name: "Mole ratio", statement: "The coefficients of the balanced equation give the reacting mole ratio, here $\\text{H}_2\\text{SO}_4 : \\text{NaOH} = 1 : 2$." },
            ],
            steps: [
              { reasoning: "Moles of NaOH.", working: "0.100 \\times \\frac{25.0}{1000} = 0.00250\\text{ mol}", marks: 1, markCode: "M" },
              { reasoning: "One mole of acid reacts with two moles of alkali, so halve.", working: "n(\\text{H}_2\\text{SO}_4) = \\frac{0.00250}{2} = 0.00125\\text{ mol}", marks: 1, markCode: "M" },
              { reasoning: "Divide by the acid volume in $\\text{dm}^3$.", working: "\\frac{0.00125}{0.0200}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "0.0625\\text{ mol/dm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.0625\\text{ mol/dm}^3$",
            commonErrors: ["Ignoring the 1 : 2 ratio, giving 0.125 mol/dm$^3$.", "Doubling instead of halving, giving 0.25 mol/dm$^3$."],
            examinerNote: "M1 0.00250. M1 for halving. M1 for dividing by 0.0200, allow ecf. A1 0.0625.",
          },
        },
        {
          id: "ech10-u2-titration-calculations-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A student finds the concentration of a sodium hydroxide solution. She uses a pipette to put $25.0\\text{ cm}^3$ of the sodium hydroxide into a conical flask, adds indicator and titrates with $0.100\\text{ mol/dm}^3$ hydrochloric acid from a burette. $\\text{NaOH} + \\text{HCl} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}$\n\n| Titration | Rough | 1 | 2 | 3 |\n| --- | --- | --- | --- | --- |\n| Titre ($\\text{cm}^3$) | 23.10 | 21.30 | 21.25 | 21.35 |\n\n($A_r$: Na = 23, O = 16, H = 1)",
          parts: [
            { label: "a", prompt: "Explain why the student carried out a rough titration first, and why the rough titre is not used to calculate the mean.", marks: 2 },
            { label: "b", prompt: "Calculate the mean titre using the three accurate titrations. Give your answer in $\\text{cm}^3$.", marks: 2 },
            { label: "c", prompt: "Calculate the amount, in moles, of hydrochloric acid in the mean titre.", marks: 2 },
            { label: "d", prompt: "Calculate the concentration of the sodium hydroxide solution in $\\text{mol/dm}^3$. Give your answer to 3 significant figures.", marks: 2 },
            { label: "e", prompt: "Calculate the concentration of the sodium hydroxide solution in $\\text{g/dm}^3$. Give your answer to 3 significant figures.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moles", statement: "$n = c \\times V$ with $V$ in $\\text{dm}^3$." },
              { kind: "formula", name: "Concentration units", statement: "$\\text{g/dm}^3 = \\text{mol/dm}^3 \\times M_r$." },
            ],
            steps: [
              { part: "a", reasoning: "The rough titration shows the approximate volume at which the end-point occurs, so acid can be added slowly near it in later runs.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "It was added quickly, so it overshot the end-point and is less accurate than the later titrations.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Add the three titres and divide by 3 (all three are within $0.10\\text{ cm}^3$ of each other, so they are concordant).", working: "\\frac{21.30 + 21.25 + 21.35}{3} = \\frac{63.90}{3}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "21.30\\text{ cm}^3", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Moles of HCl $= c \\times V$ with $V$ in $\\text{dm}^3$.", working: "0.100 \\times \\frac{21.30}{1000}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "0.00213\\text{ mol}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Ratio 1 : 1, so moles NaOH $= 0.00213$. Divide by $0.0250\\text{ dm}^3$.", working: "\\frac{0.00213}{0.0250}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate to 3 significant figures.", working: "0.0852\\text{ mol/dm}^3", marks: 1, markCode: "A" },
              { part: "e", reasoning: "$M_r$ of NaOH is 40. Multiply the concentration in mol/dm$^3$ by $M_r$.", working: "0.0852 \\times 40", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Evaluate to 3 significant figures.", working: "3.41\\text{ g/dm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) rough run finds approximate end-point; overshot so excluded (b) $21.30\\text{ cm}^3$ (c) $0.00213\\text{ mol}$ (d) $0.0852\\text{ mol/dm}^3$ (e) $3.41\\text{ g/dm}^3$",
            commonErrors: ["Including the rough titre in the mean, giving 21.75.", "Using the titre volume in $\\text{cm}^3$ without dividing by 1000.", "Dividing by 40 instead of multiplying in (e)."],
            examinerNote: "In (b) allow a mean of 21.3. In (d) allow 0.0852 or 0.085. In (e) allow 3.4 and ecf from (d); using 0.0852 exactly gives 3.408.",
          },
        },
      ],
    },
  ],
};
