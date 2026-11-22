import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "chem10-u4-lesson-4-3",
  code: "4-3",
  title: "Acids and Bases",
  goal: "I CAN identify acids and bases using the Arrhenius and Brønsted-Lowry definitions, calculate pH and $[\\text{H}^+]$, and solve neutralization and titration problems.",
  standards: ["HS-PS1-2", "HS-PS1-7", "SEP: Using Mathematics and Computational Thinking", "SEP: Analyzing and Interpreting Data"],
  vocabulary: [
    { term: "Arrhenius acid", definition: "A substance that produces hydrogen ions, $\\text{H}^+$, when dissolved in water." },
    { term: "Brønsted-Lowry acid", definition: "A proton ($\\text{H}^+$) donor; a Brønsted-Lowry base is a proton acceptor." },
    { term: "pH", definition: "A measure of acidity, $\\text{pH} = -\\log[\\text{H}^+]$." },
    { term: "Neutralization", definition: "The reaction of an acid with a base to form a salt and water." },
    { term: "Titration", definition: "A method that uses a solution of known concentration to find the concentration of another by reacting them exactly." },
    { term: "Equivalence point", definition: "The point in a titration where the moles of acid and base have reacted in exactly the ratio of the balanced equation." },
    { term: "Indicator", definition: "A substance that changes color over a range of pH, used to show the end point of a titration." },
  ],
  concepts: [
    {
      id: "chem10-u4-acid-base-ph",
      title: "Acid and base definitions and pH",
      skill: "Apply the Arrhenius and Brønsted-Lowry definitions and convert between pH and $[\\text{H}^+]$.",
      lesson: {
        sections: [
          {
            heading: "Two definitions",
            body: "An **Arrhenius acid** produces $\\text{H}^+$ in water (for example HCl) and an **Arrhenius base** produces $\\text{OH}^-$ (for example NaOH).\n\nThe broader **Brønsted-Lowry** definition says an acid is a **proton donor** and a base is a **proton acceptor**. In $\\text{NH}_3 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{NH}_4^+ + \\text{OH}^-$, water donates a proton (acid) and ammonia accepts it (base), even though ammonia has no $\\text{OH}^-$ to release. An acid and the base formed after it loses a proton are a **conjugate pair**.",
          },
          {
            heading: "The pH scale",
            body: "$$\\text{pH} = -\\log[\\text{H}^+] \\qquad [\\text{H}^+] = 10^{-\\text{pH}}$$\n\nwhere $[\\text{H}^+]$ is in mol/L. Each decrease of 1 pH unit means a **tenfold** increase in $[\\text{H}^+]$. At 25 °C, $[\\text{H}^+][\\text{OH}^-] = 1.0 \\times 10^{-14}$, so $\\text{pH} + \\text{pOH} = 14$. Neutral water has pH 7, acids are below 7 and bases above 7.\n\nStrong acids and bases ionize completely, so $[\\text{H}^+]$ equals the acid concentration (for a monoprotic acid like HCl). For a strong base, find $[\\text{OH}^-]$, then $\\text{pOH} = -\\log[\\text{OH}^-]$ and $\\text{pH} = 14 - \\text{pOH}$.",
          },
        ],
        keyFormulas: [
          { name: "pH", statement: "$\\text{pH} = -\\log[\\text{H}^+]$" },
          { name: "Hydrogen ion concentration", statement: "$[\\text{H}^+] = 10^{-\\text{pH}}$" },
          { name: "pH and pOH", statement: "$\\text{pH} + \\text{pOH} = 14$ at 25 °C" },
        ],
        workedExample: {
          problem: "Calculate the pH of 0.0010 M HCl, and the pH of 0.025 M NaOH to 2 decimal places.",
          solution: "HCl is a strong acid: $[\\text{H}^+] = 1.0 \\times 10^{-3}$, so $\\text{pH} = 3.00$.\n\nNaOH is a strong base: $[\\text{OH}^-] = 0.025$, $\\text{pOH} = -\\log(0.025) = 1.602 \\approx 1.60$, so $\\text{pH} = 14 - 1.60 = 12.40$.",
        },
      },
      questions: [
        {
          id: "chem10-u4-acid-base-ph-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "According to the Brønsted-Lowry definition, what is an acid?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An electron pair donor" },
              { id: "b", text: "A proton donor" },
              { id: "c", text: "A substance that produces $\\text{OH}^-$ in water" },
              { id: "d", text: "A proton acceptor" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Brønsted-Lowry acid", statement: "A Brønsted-Lowry acid is a proton ($\\text{H}^+$) donor." }],
            steps: [{ reasoning: "Brønsted-Lowry acids donate protons; bases accept them.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** A proton donor",
            commonErrors: ["Choosing (a), the definition of a base.", "Choosing (d), which describes an Arrhenius base."],
            examinerNote: "B1 for proton donor.",
          },
        },
        {
          id: "chem10-u4-acid-base-ph-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A solution has a hydrogen ion concentration of $[\\text{H}^+] = 2.5 \\times 10^{-4}\\ \\text{mol/L}$.\n\nCalculate the pH of the solution. Give your answer to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "pH", answer: 3.6, tolerance: 0.01 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "pH", statement: "$\\text{pH} = -\\log[\\text{H}^+]$" }],
            steps: [
              { reasoning: "Substitute into the pH equation.", working: "\\text{pH} = -\\log(2.5 \\times 10^{-4})", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $\\log(2.5 \\times 10^{-4}) = -3.602$.", working: "\\text{pH} = 3.60", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\text{pH} = 3.60$",
            commonErrors: ["Giving -3.60 by omitting the negative sign in the equation.", "Giving 4 by looking only at the power of ten."],
            examinerNote: "M1 for $-\\log(2.5 \\times 10^{-4})$. A1 for 3.60. Allow 3.6.",
          },
        },
        {
          id: "chem10-u4-acid-base-ph-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Calculate the pH of a 0.0020 M solution of sodium hydroxide, NaOH (a strong base). Give your answer to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "pH", answer: 11.3, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Strong base", statement: "NaOH ionizes completely, so $[\\text{OH}^-]$ equals the NaOH concentration." },
              { kind: "formula", name: "pH and pOH", statement: "$\\text{pOH} = -\\log[\\text{OH}^-]$ and $\\text{pH} = 14 - \\text{pOH}$" },
            ],
            steps: [
              { reasoning: "NaOH gives one $\\text{OH}^-$ per formula unit.", working: "[\\text{OH}^-] = 0.0020\\text{ mol/L}", marks: 1, markCode: "M" },
              { reasoning: "Find pOH.", working: "\\text{pOH} = -\\log(0.0020) = 2.70", marks: 1, markCode: "M" },
              { reasoning: "Convert to pH.", working: "\\text{pH} = 14 - 2.70 = 11.30", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\text{pH} = 11.30$",
            commonErrors: ["Calculating $-\\log(0.0020)$ and giving 2.70 as the pH, which would mean an acid.", "Forgetting to subtract from 14."],
            examinerNote: "M1 for $[\\text{OH}^-]$, M1 for pOH = 2.70, A1 for 11.30. Allow 11.3.",
          },
        },
        {
          id: "chem10-u4-acid-base-ph-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Ammonia dissolves in water in the reversible reaction $\\text{NH}_3 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{NH}_4^+ + \\text{OH}^-$.",
          parts: [
            { label: "a", prompt: "Identify the Brønsted-Lowry acid and the Brønsted-Lowry base among the reactants. Justify your answer.", marks: 2 },
            { label: "b", prompt: "Calculate the pH of 0.010 M hydrochloric acid, HCl. Give your answer to 2 decimal places.", marks: 1 },
            { label: "c", prompt: "Solution X has pH 2 and solution Y has pH 5. Compare their hydrogen ion concentrations, stating by what factor they differ.", marks: 2 },
            { label: "d", prompt: "Calculate the pH of 0.050 M barium hydroxide, $\\text{Ba(OH)}_2$ (a strong base that releases two $\\text{OH}^-$ per formula unit). Give your answer to 2 decimal places.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Brønsted-Lowry theory", statement: "Acids donate protons and bases accept protons." },
              { kind: "formula", name: "pH", statement: "$\\text{pH} = -\\log[\\text{H}^+]$, $\\text{pH} + \\text{pOH} = 14$" },
            ],
            steps: [
              { part: "a", reasoning: "$\\text{H}_2\\text{O}$ is the acid: it donates a proton to become $\\text{OH}^-$.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "$\\text{NH}_3$ is the base: it accepts a proton to become $\\text{NH}_4^+$.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "HCl is a strong acid, so $[\\text{H}^+] = 0.010$ and $\\text{pH} = -\\log(0.010) = 2.00$.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Solution X has $[\\text{H}^+] = 10^{-2}$ and Y has $10^{-5}$, so X has the higher concentration.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The difference is 3 pH units, a factor of $10^3 = 1000$.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Two hydroxide ions per formula unit.", working: "[\\text{OH}^-] = 2 \\times 0.050 = 0.100\\text{ mol/L}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Find pOH.", working: "\\text{pOH} = -\\log(0.100) = 1.00", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Convert to pH.", working: "\\text{pH} = 14 - 1.00 = 13.00", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Acid: $\\text{H}_2\\text{O}$; base: $\\text{NH}_3$ (b) 2.00 (c) X has 1000 times higher $[\\text{H}^+]$ (d) 13.00",
            commonErrors: ["In (a) calling NH3 an acid or a base only because of the reactant order.", "In (c) saying the difference is a factor of 3 rather than $10^3$.", "In (d) using 0.050 for $[\\text{OH}^-]$, giving 12.70."],
            examinerNote: "(b) Allow 2. (c) Allow '1000 times more acidic' oe. (d) Allow ecf for pOH if $[\\text{OH}^-]$ is incorrect. Allow 13.0.",
          },
        },
      ],
    },
    {
      id: "chem10-u4-neutralization-titration",
      title: "Neutralization and titration calculations",
      skill: "Write neutralization equations and use titration data and mole ratios to find an unknown concentration.",
      lesson: {
        sections: [
          {
            heading: "Neutralization",
            body: "An acid reacts with a base to form a **salt** and **water**:\n\n$$\\text{HCl} + \\text{NaOH} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}$$\n\nThe ionic equation for any strong acid with a strong base is $\\text{H}^+ + \\text{OH}^- \\rightarrow \\text{H}_2\\text{O}$. With a polyprotic acid the ratio changes: $\\text{H}_2\\text{SO}_4 + 2\\text{NaOH} \\rightarrow \\text{Na}_2\\text{SO}_4 + 2\\text{H}_2\\text{O}$, so one mole of sulfuric acid reacts with two moles of NaOH.",
          },
          {
            heading: "Titration calculations",
            body: "In a titration, a solution of known concentration (in the burette) is added to a measured volume of another (in the flask) until an **indicator** changes color at the end point.\n\n1. Write the balanced equation.\n2. Calculate moles of the known solution: $n = MV$ (with $V$ in liters).\n3. Use the **mole ratio** to find moles of the unknown.\n4. Divide by its volume in liters to get molarity.\n\nRepeat until you have **concordant** titres (within about 0.10 mL) and average those, ignoring any rough or anomalous result. For a 1:1 reaction, $M_aV_a = M_bV_b$ is a shortcut. Phenolphthalein (colorless in acid, pink in base) suits a strong acid with a strong base.",
          },
        ],
        keyFormulas: [
          { name: "Moles from molarity", statement: "$n = MV$ with $V$ in liters" },
          { name: "1:1 shortcut", statement: "$M_aV_a = M_bV_b$ (only when mole ratio is 1:1)" },
          { name: "Mole ratio", statement: "Use the coefficients of the balanced equation to convert moles of one substance to moles of another" },
        ],
        workedExample: {
          problem: "A 25.0 mL sample of NaOH is neutralized by 20.0 mL of 0.100 M HCl. Calculate the concentration of the NaOH.",
          solution: "$n(\\text{HCl}) = 0.100 \\times 0.0200 = 0.00200\\ \\text{mol}$. The ratio of HCl to NaOH is 1:1, so $n(\\text{NaOH}) = 0.00200\\ \\text{mol}$. $M = \\dfrac{0.00200}{0.0250} = 0.0800\\ \\text{mol/L}$.",
        },
      },
      questions: [
        {
          id: "chem10-u4-neutralization-titration-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which are the products of the neutralization of hydrochloric acid by sodium hydroxide?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sodium hydroxide and chlorine" },
              { id: "b", text: "Sodium chloride and hydrogen gas" },
              { id: "c", text: "Sodium chloride and carbon dioxide" },
              { id: "d", text: "Sodium chloride and water" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Neutralization", statement: "acid + base $\\rightarrow$ salt + water" }],
            steps: [{ reasoning: "$\\text{HCl} + \\text{NaOH} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}$: the salt is NaCl and water forms.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Sodium chloride and water",
            commonErrors: ["Choosing (a), which is the product of an acid with a metal.", "Choosing (d), which is the product of an acid with a carbonate."],
            examinerNote: "B1 for salt and water.",
          },
        },
        {
          id: "chem10-u4-neutralization-titration-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "In a titration, 25.0 mL of sodium hydroxide solution is exactly neutralized by 20.0 mL of 0.100 M hydrochloric acid.\n\n$\\text{HCl} + \\text{NaOH} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}$\n\nCalculate the molarity of the sodium hydroxide solution.",
          response: { type: "numeric", parts: [{ label: "Molarity of NaOH", answer: 0.08, unit: "mol/L", tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moles", statement: "$n = MV$" },
              { kind: "principle", name: "Mole ratio", statement: "HCl : NaOH is 1 : 1." },
            ],
            steps: [
              { reasoning: "Moles of HCl used.", working: "n(\\text{HCl}) = 0.100 \\times 0.0200 = 0.00200\\text{ mol}", marks: 1, markCode: "M" },
              { reasoning: "Mole ratio 1:1, so the same moles of NaOH.", working: "n(\\text{NaOH}) = 0.00200\\text{ mol}", marks: 1, markCode: "M" },
              { reasoning: "Divide by the NaOH volume in liters.", working: "M = \\frac{0.00200}{0.0250} = 0.0800\\text{ mol/L}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.0800\\ \\text{mol/L}$",
            commonErrors: ["Using mL instead of L without a consistent conversion.", "Dividing by the acid volume instead of the base volume."],
            examinerNote: "M1 for 0.00200 mol, M1 for ratio, A1 for 0.0800. Allow $M_aV_a = M_bV_b$ approach for full marks.",
          },
        },
        {
          id: "chem10-u4-neutralization-titration-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Sulfuric acid reacts with sodium hydroxide: $\\text{H}_2\\text{SO}_4 + 2\\text{NaOH} \\rightarrow \\text{Na}_2\\text{SO}_4 + 2\\text{H}_2\\text{O}$.\n\nCalculate the volume of 0.200 M NaOH, in mL, needed to neutralize 20.0 mL of 0.150 M $\\text{H}_2\\text{SO}_4$.",
          response: { type: "numeric", parts: [{ label: "Volume of NaOH", answer: 30, unit: "mL", tolerance: 0.1 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moles", statement: "$n = MV$" },
              { kind: "principle", name: "Mole ratio", statement: "$\\text{H}_2\\text{SO}_4$ : NaOH is 1 : 2." },
            ],
            steps: [
              { reasoning: "Moles of sulfuric acid.", working: "n(\\text{H}_2\\text{SO}_4) = 0.150 \\times 0.0200 = 0.00300\\text{ mol}", marks: 1, markCode: "M" },
              { reasoning: "The ratio is 1:2, so double.", working: "n(\\text{NaOH}) = 2 \\times 0.00300 = 0.00600\\text{ mol}", marks: 1, markCode: "M" },
              { reasoning: "Volume = moles / molarity.", working: "V = \\frac{0.00600}{0.200} = 0.0300\\text{ L}", marks: 1, markCode: "M" },
              { reasoning: "Convert to mL.", working: "V = 30.0\\text{ mL}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$30.0\\ \\text{mL}$",
            commonErrors: ["Ignoring the 1:2 ratio, which gives 15.0 mL.", "Using $M_aV_a = M_bV_b$ directly, which only works for a 1:1 ratio."],
            examinerNote: "M1 for each of moles of acid, ratio, volume. A1 for 30.0 mL. Allow ecf if the ratio is wrong but the other steps are correct (maximum 3).",
          },
        },
        {
          id: "chem10-u4-neutralization-titration-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student finds the concentration of a hydrochloric acid solution. She places 25.00 mL of the acid in a conical flask with a few drops of phenolphthalein, and titrates it with 0.1000 M sodium hydroxide from a burette. The titres (volume of NaOH added) are:\n\n| Trial | Rough | 1 | 2 | 3 |\n| --- | --- | --- | --- | --- |\n| Titre (mL) | 23.10 | 22.40 | 22.30 | 22.35 |",
          parts: [
            { label: "a", prompt: "Write the balanced equation for the reaction.", marks: 1 },
            { label: "b", prompt: "Calculate the mean titre, using only the concordant results from trials 1 to 3. Give your answer to 2 decimal places in mL.", marks: 2 },
            { label: "c", prompt: "Calculate the molarity of the hydrochloric acid. Give your answer to 3 significant figures.", marks: 4 },
            { label: "d", prompt: "State the color change of phenolphthalein at the end point and explain why a rough titration is carried out first.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moles", statement: "$n = MV$ with $V$ in liters" },
              { kind: "principle", name: "Mole ratio", statement: "HCl : NaOH is 1 : 1." },
              { kind: "skill", name: "Concordant results", statement: "Average titres that agree within about 0.10 mL; ignore the rough titre." },
            ],
            steps: [
              { part: "a", reasoning: "Balanced neutralization equation.", working: "\\text{HCl} + \\text{NaOH} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The rough titre is excluded; trials 1 to 3 agree within 0.10 mL, so average them.", working: "\\frac{22.40 + 22.30 + 22.35}{3}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "22.35\\text{ mL}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Convert the mean titre to liters.", working: "V = 0.02235\\text{ L}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Moles of NaOH added.", working: "n = 0.1000 \\times 0.02235 = 0.002235\\text{ mol}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Mole ratio 1:1, so the same moles of HCl.", working: "n(\\text{HCl}) = 0.002235\\text{ mol}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Divide by 0.02500 L and round to 3 significant figures.", working: "M = \\frac{0.002235}{0.02500} = 0.0894\\text{ mol/L}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Phenolphthalein is colorless in acid and turns (faint) pink at the end point.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The rough titration gives an approximate volume, so near the end point the base can be added drop by drop for accuracy.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $\\text{HCl} + \\text{NaOH} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}$ (b) $22.35\\ \\text{mL}$ (c) $0.0894\\ \\text{mol/L}$ (d) Colorless to pale pink; the rough titre shows roughly where the end point is.",
            commonErrors: ["Including the rough titre of 23.10 in the mean.", "Using 22.35 in place of 0.02235 L.", "In (d) saying the indicator turns from pink to colorless when the base is added to the acid."],
            examinerNote: "(b) Do not credit a mean that includes the rough titre. (c) Allow ecf from (b). Allow 0.089. (d) Allow 'persistent faint pink'.",
          },
        },
      ],
    },
  ],
};
