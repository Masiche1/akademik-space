import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "chem10-u3-lesson-3-3",
  code: "3-3",
  title: "Stoichiometry",
  goal: "I CAN use mole ratios from balanced equations to do mass-to-mass calculations, identify the limiting reactant, and calculate theoretical and percent yield.",
  standards: ["HS-PS1-7", "SEP: Using Mathematics and Computational Thinking", "CCC: Energy and Matter"],
  vocabulary: [
    { term: "Stoichiometry", definition: "The calculation of the amounts of reactants and products in a chemical reaction using a balanced equation." },
    { term: "Mole ratio", definition: "The ratio of the coefficients of two substances in a balanced equation." },
    { term: "Limiting reactant", definition: "The reactant that is used up first and so limits the amount of product formed." },
    { term: "Excess reactant", definition: "A reactant that is left over after the limiting reactant is used up." },
    { term: "Theoretical yield", definition: "The maximum mass of product that can form, calculated from the limiting reactant." },
    { term: "Percent yield", definition: "$\\dfrac{\\text{actual yield}}{\\text{theoretical yield}} \\times 100$." },
  ],
  concepts: [
    {
      id: "chem10-u3-mole-ratios-mass",
      title: "Mole ratios and mass-to-mass calculations",
      skill: "Use the coefficients of a balanced equation as mole ratios to convert between masses of reactants and products.",
      lesson: {
        sections: [
          {
            heading: "Coefficients are mole ratios",
            body: "The coefficients in a balanced equation give the ratio of **moles**, not grams. In $2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$, 2 mol of $\\text{H}_2$ react with 1 mol of $\\text{O}_2$ to make 2 mol of $\\text{H}_2\\text{O}$. The mole ratio of $\\text{H}_2$ to $\\text{O}_2$ is $2:1$.",
          },
          {
            heading: "The mass-to-mass route",
            body: "To find the mass of one substance from the mass of another:\n\n1. Write the **balanced** equation.\n2. Convert the given mass to moles ($n = m/M$).\n3. Multiply by the **mole ratio** (wanted over given).\n4. Convert moles of the wanted substance to mass ($m = n \\times M$).\n\nYou cannot go straight from grams of one substance to grams of another: the mole step in the middle is essential.",
          },
        ],
        keyFormulas: [
          { name: "Mole ratio step", statement: "$n_{\\text{wanted}} = n_{\\text{given}} \\times \\dfrac{\\text{coefficient of wanted}}{\\text{coefficient of given}}$" },
          { name: "Mass-to-mass route", statement: "grams given $\\rightarrow$ moles given $\\rightarrow$ moles wanted $\\rightarrow$ grams wanted" },
        ],
        workedExample: {
          problem: "How many grams of $\\text{CO}_2$ form when $16.0\\ \\text{g}$ of $\\text{CH}_4$ burns completely? $\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$ (C 12.0, H 1.0, O 16.0)",
          solution: "Molar mass of $\\text{CH}_4 = 16.0$, so $n = 16.0/16.0 = 1.00\\ \\text{mol}$. Mole ratio $\\text{CO}_2 : \\text{CH}_4 = 1:1$, so $1.00\\ \\text{mol}\\ \\text{CO}_2$. Molar mass of $\\text{CO}_2 = 44.0$, so mass $= 1.00 \\times 44.0 = 44.0\\ \\text{g}$.",
        },
      },
      questions: [
        {
          id: "chem10-u3-mole-ratios-mass-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Ammonia is made by $\\text{N}_2 + 3\\text{H}_2 \\rightarrow 2\\text{NH}_3$. How many moles of $\\text{NH}_3$ form from $3.0\\ \\text{mol}$ of $\\text{H}_2$, with plenty of $\\text{N}_2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$9.0\\ \\text{mol}$" },
              { id: "b", text: "$1.0\\ \\text{mol}$" },
              { id: "c", text: "$4.5\\ \\text{mol}$" },
              { id: "d", text: "$2.0\\ \\text{mol}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Mole ratio", statement: "Coefficients give the ratio of moles: $3\\text{H}_2$ gives $2\\text{NH}_3$." },
            ],
            steps: [
              { reasoning: "The ratio $\\text{NH}_3 : \\text{H}_2$ is $2:3$, so $3.0 \\times \\frac{2}{3} = 2.0\\ \\text{mol}$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $2.0\\ \\text{mol}$",
            commonErrors: ["Inverting the ratio to get 4.5 mol.", "Multiplying by 3 to get 9.0 mol."],
            examinerNote: "B1 for 2.0 mol.",
          },
        },
        {
          id: "chem10-u3-mole-ratios-mass-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Hydrogen burns: $2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$. (H 1.0, O 16.0.)\n\nCalculate the mass of water produced when $4.0\\ \\text{g}$ of hydrogen ($\\text{H}_2$) burns completely in excess oxygen.",
          response: { type: "numeric", parts: [{ label: "Mass of water", answer: 36, unit: "g", tolerance: 0.1 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mass-to-mass", statement: "grams $\\rightarrow$ moles $\\rightarrow$ mole ratio $\\rightarrow$ moles $\\rightarrow$ grams" },
            ],
            steps: [
              { reasoning: "Moles of $\\text{H}_2$ using $M = 2.0\\ \\text{g/mol}$.", working: "n = \\frac{4.0}{2.0} = 2.0\\text{ mol}", marks: 1, markCode: "M" },
              { reasoning: "Mole ratio $\\text{H}_2\\text{O} : \\text{H}_2$ is $2:2 = 1:1$.", working: "n_{\\text{H}_2\\text{O}} = 2.0\\text{ mol}", marks: 1, markCode: "M" },
              { reasoning: "Convert to mass using $M = 18.0\\ \\text{g/mol}$.", working: "m = 2.0 \\times 18.0 = 36\\text{ g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$36\\ \\text{g}$",
            commonErrors: ["Using 2.0 g/mol for water.", "Using the ratio 2:1 incorrectly to get 72 g."],
            examinerNote: "M1 moles of H$_2$. M1 mole ratio. A1 for 36 g. Allow ecf.",
          },
        },
        {
          id: "chem10-u3-mole-ratios-mass-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Limestone decomposes on heating: $\\text{CaCO}_3 \\rightarrow \\text{CaO} + \\text{CO}_2$. (Ca 40.0, C 12.0, O 16.0.)\n\nCalculate the mass of carbon dioxide released when $25.0\\ \\text{g}$ of $\\text{CaCO}_3$ decomposes completely.",
          response: { type: "numeric", parts: [{ label: "Mass of CO2", answer: 11.0, unit: "g", tolerance: 0.05 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mass-to-mass", statement: "grams $\\rightarrow$ moles $\\rightarrow$ mole ratio $\\rightarrow$ moles $\\rightarrow$ grams" },
            ],
            steps: [
              { reasoning: "Molar mass of $\\text{CaCO}_3$.", working: "M = 40.0 + 12.0 + 3(16.0) = 100.0\\text{ g/mol}", marks: 1, markCode: "M" },
              { reasoning: "Moles of $\\text{CaCO}_3$.", working: "n = \\frac{25.0}{100.0} = 0.250\\text{ mol}", marks: 1, markCode: "M" },
              { reasoning: "Ratio $\\text{CO}_2 : \\text{CaCO}_3 = 1:1$.", working: "n_{\\text{CO}_2} = 0.250\\text{ mol}", marks: 1, markCode: "B" },
              { reasoning: "Convert to mass using $M(\\text{CO}_2) = 44.0$.", working: "m = 0.250 \\times 44.0 = 11.0\\text{ g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$11.0\\ \\text{g}$",
            commonErrors: ["Using only 40.0 for CaCO$_3$ or forgetting the 3 oxygens.", "Assuming 25.0 g of reactant gives 25.0 g of product."],
            examinerNote: "M1 for 100.0. M1 for 0.250 mol. B1 for 1:1 ratio. A1 for 11.0 g.",
          },
        },
        {
          id: "chem10-u3-mole-ratios-mass-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Sodium reacts with chlorine: $2\\text{Na} + \\text{Cl}_2 \\rightarrow 2\\text{NaCl}$. A student reacts $11.5\\ \\text{g}$ of sodium with excess chlorine. (Na 23.0, Cl 35.5.)",
          parts: [
            { label: "a", prompt: "Calculate the moles of sodium used.", marks: 2 },
            { label: "b", prompt: "Calculate the moles of $\\text{Cl}_2$ that react.", marks: 2 },
            { label: "c", prompt: "Calculate the mass of $\\text{Cl}_2$ that reacts, in grams.", marks: 2 },
            { label: "d", prompt: "Calculate the mass of NaCl formed, in grams.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0.5, unit: "mol", tolerance: 0.005 },
              { label: "b", answer: 0.25, unit: "mol", tolerance: 0.005 },
              { label: "c", answer: 17.75, unit: "g", tolerance: 0.1 },
              { label: "d", answer: 29.25, unit: "g", tolerance: 0.1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mass-to-mass", statement: "grams $\\rightarrow$ moles $\\rightarrow$ mole ratio $\\rightarrow$ moles $\\rightarrow$ grams" },
              { kind: "law", name: "Conservation of mass", statement: "Mass of reactants equals mass of products." },
            ],
            steps: [
              { part: "a", reasoning: "Divide the mass by the molar mass of Na.", working: "n = \\frac{11.5}{23.0}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "0.500\\text{ mol}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Mole ratio $\\text{Cl}_2 : \\text{Na} = 1:2$.", working: "0.500 \\times \\tfrac{1}{2}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "0.250\\text{ mol}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Molar mass of $\\text{Cl}_2 = 71.0$; multiply.", working: "0.250 \\times 71.0", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "17.75\\text{ g} \\approx 17.8\\text{ g}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Ratio $\\text{NaCl} : \\text{Na} = 1:1$, so 0.500 mol; $M(\\text{NaCl}) = 58.5$.", working: "0.500 \\times 58.5", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate. Check: $11.5 + 17.75 = 29.25$, which agrees with conservation of mass.", working: "29.25\\text{ g} \\approx 29.3\\text{ g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $0.500\\ \\text{mol}$ (b) $0.250\\ \\text{mol}$ (c) $17.75\\ \\text{g}$ (d) $29.25\\ \\text{g}$",
            commonErrors: ["Using 35.5 g/mol for $\\text{Cl}_2$.", "Using the 2:1 ratio the wrong way round in (b)."],
            examinerNote: "Allow ecf in (b)-(d). Allow answers rounded to 3 significant figures.",
          },
        },
      ],
    },
    {
      id: "chem10-u3-limiting-yield",
      title: "Limiting reactant, theoretical and percent yield",
      skill: "Identify the limiting reactant, calculate the theoretical yield from it, and find the percent yield.",
      lesson: {
        sections: [
          {
            heading: "Limiting and excess reactants",
            body: "In practice reactants are rarely mixed in exact ratio. The **limiting reactant** runs out first and stops the reaction, so it decides how much product forms. The other reactant is in **excess** and some is left over.\n\nTo find the limiting reactant, convert each reactant to moles, then compare with the mole ratio. Either calculate how much product each reactant could make (the smaller amount wins) or divide moles by coefficient (the smaller value is limiting).",
          },
          {
            heading: "Theoretical and percent yield",
            body: "The **theoretical yield** is the maximum mass of product, found from the limiting reactant. The **actual yield** is what you really collect, which is usually less because of incomplete reactions, side reactions and losses.\n\n$$\\text{percent yield} = \\frac{\\text{actual yield}}{\\text{theoretical yield}} \\times 100$$\n\nPercent yield cannot exceed 100% for a pure, dry product.",
          },
        ],
        keyFormulas: [
          { name: "Limiting reactant test", statement: "moles $\\div$ coefficient: the smallest value is limiting" },
          { name: "Percent yield", statement: "$\\dfrac{\\text{actual yield}}{\\text{theoretical yield}} \\times 100$" },
        ],
        workedExample: {
          problem: "$3.0\\ \\text{mol}$ of $\\text{N}_2$ and $6.0\\ \\text{mol}$ of $\\text{H}_2$ react: $\\text{N}_2 + 3\\text{H}_2 \\rightarrow 2\\text{NH}_3$. Find the limiting reactant and the moles of $\\text{NH}_3$ formed.",
          solution: "Moles $\\div$ coefficient: $\\text{N}_2$: $3.0/1 = 3.0$; $\\text{H}_2$: $6.0/3 = 2.0$. Hydrogen is smaller, so it is limiting. $\\text{NH}_3 = 6.0 \\times \\frac{2}{3} = 4.0\\ \\text{mol}$.",
        },
      },
      questions: [
        {
          id: "chem10-u3-limiting-yield-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the limiting reactant in a chemical reaction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The reactant that is used up first and limits the amount of product" },
              { id: "b", text: "The reactant that is left over at the end" },
              { id: "c", text: "The reactant present in the largest mass" },
              { id: "d", text: "The reactant with the largest coefficient" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Limiting reactant", statement: "The reactant that is completely used up first, limiting the product formed." },
            ],
            steps: [
              { reasoning: "The limiting reactant is used up first. The reactant left over is the excess reactant.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** The reactant that is used up first and limits the amount of product",
            commonErrors: ["Choosing (d), which describes the excess reactant.", "Choosing the reactant with the smallest mass without considering moles and coefficients."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "chem10-u3-limiting-yield-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "$2.0\\ \\text{mol}$ of $\\text{N}_2$ and $3.0\\ \\text{mol}$ of $\\text{H}_2$ react: $\\text{N}_2 + 3\\text{H}_2 \\rightarrow 2\\text{NH}_3$.\n\nCalculate the maximum number of moles of $\\text{NH}_3$ that can form.",
          response: { type: "numeric", parts: [{ label: "Moles of NH3", answer: 2.0, unit: "mol", tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Limiting reactant", statement: "The reactant with the smallest moles ÷ coefficient limits the product." },
            ],
            steps: [
              { reasoning: "Moles ÷ coefficient: $\\text{N}_2$ gives $2.0/1 = 2.0$; $\\text{H}_2$ gives $3.0/3 = 1.0$. Hydrogen is limiting.", marks: 1, markCode: "M" },
              { reasoning: "Use the ratio $\\text{NH}_3 : \\text{H}_2 = 2:3$.", working: "n_{\\text{NH}_3} = 3.0 \\times \\frac{2}{3}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "2.0\\text{ mol}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.0\\ \\text{mol}$",
            commonErrors: ["Using nitrogen as limiting, giving 4.0 mol.", "Choosing the smaller number of moles (2.0 for N$_2$ vs 3.0 for H$_2$) without applying the ratio."],
            examinerNote: "M1 for identifying H$_2$ as limiting. M1 for ratio. A1 for 2.0 mol.",
          },
        },
        {
          id: "chem10-u3-limiting-yield-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student burns $6.0\\ \\text{g}$ of magnesium in excess oxygen: $2\\text{Mg} + \\text{O}_2 \\rightarrow 2\\text{MgO}$. Only $8.5\\ \\text{g}$ of MgO is collected. (Mg 24.0, O 16.0.)\n\nCalculate the percent yield of MgO.",
          response: { type: "numeric", parts: [{ label: "Percent yield", answer: 85, unit: "%", tolerance: 0.5 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percent yield", statement: "$\\dfrac{\\text{actual yield}}{\\text{theoretical yield}} \\times 100$" },
            ],
            steps: [
              { reasoning: "Moles of Mg; the mole ratio MgO : Mg is 1:1.", working: "n = \\frac{6.0}{24.0} = 0.25\\text{ mol}", marks: 1, markCode: "M" },
              { reasoning: "Theoretical mass of MgO with $M = 40.0$.", working: "0.25 \\times 40.0 = 10.0\\text{ g}", marks: 1, markCode: "A" },
              { reasoning: "Divide the actual yield by the theoretical yield.", working: "\\frac{8.5}{10.0} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "85\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$85\\%$",
            commonErrors: ["Dividing the theoretical yield by the actual yield (118%).", "Using the mass of Mg as the theoretical yield."],
            examinerNote: "M1 for 0.25 mol. A1 for 10.0 g. M1 for 8.5/10.0 (ecf). A1 for 85%.",
          },
        },
        {
          id: "chem10-u3-limiting-yield-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Methane burns: $\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$. A burner is supplied with $8.0\\ \\text{g}$ of $\\text{CH}_4$ and $24.0\\ \\text{g}$ of $\\text{O}_2$. (C 12.0, H 1.0, O 16.0.) Oxygen is the limiting reactant.",
          parts: [
            { label: "a", prompt: "Calculate the moles of $\\text{CH}_4$.", marks: 2 },
            { label: "b", prompt: "Calculate the moles of $\\text{O}_2$ (molar mass $32.0\\ \\text{g/mol}$).", marks: 2 },
            { label: "c", prompt: "Calculate the maximum moles of $\\text{CO}_2$ that can form.", marks: 2 },
            { label: "d", prompt: "Calculate the theoretical yield of $\\text{CO}_2$ in grams.", marks: 2 },
            { label: "e", prompt: "Only $13.2\\ \\text{g}$ of $\\text{CO}_2$ is collected. Calculate the percent yield.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0.5, unit: "mol", tolerance: 0.005 },
              { label: "b", answer: 0.75, unit: "mol", tolerance: 0.005 },
              { label: "c", answer: 0.375, unit: "mol", tolerance: 0.002 },
              { label: "d", answer: 16.5, unit: "g", tolerance: 0.1 },
              { label: "e", answer: 80, unit: "%", tolerance: 0.5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Limiting reactant", statement: "The limiting reactant determines the maximum amount of product." },
              { kind: "formula", name: "Percent yield", statement: "$\\dfrac{\\text{actual yield}}{\\text{theoretical yield}} \\times 100$" },
            ],
            steps: [
              { part: "a", reasoning: "Molar mass of $\\text{CH}_4 = 12.0 + 4(1.0) = 16.0$.", working: "n = \\frac{8.0}{16.0}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "0.50\\text{ mol}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divide by the molar mass of $\\text{O}_2$.", working: "n = \\frac{24.0}{32.0}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate. (Check: 0.50 mol of $\\text{CH}_4$ would need 1.00 mol of $\\text{O}_2$, so oxygen runs out first.)", working: "0.75\\text{ mol}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Use the limiting reactant and ratio $\\text{CO}_2 : \\text{O}_2 = 1:2$.", working: "0.75 \\times \\tfrac{1}{2}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "0.375\\text{ mol}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Multiply by $M(\\text{CO}_2) = 44.0$.", working: "0.375 \\times 44.0", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "16.5\\text{ g}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Actual divided by theoretical, times 100.", working: "\\frac{13.2}{16.5} \\times 100", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Evaluate.", working: "80\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $0.50\\ \\text{mol}$ (b) $0.75\\ \\text{mol}$ (c) $0.375\\ \\text{mol}$ (d) $16.5\\ \\text{g}$ (e) $80\\%$",
            commonErrors: ["Using $\\text{CH}_4$ to calculate the yield (0.50 mol, 22.0 g), which overestimates it.", "Forgetting the 1:2 ratio in (c)."],
            examinerNote: "Allow ecf throughout. (d) allow 16.5 g from 0.375 mol exactly; allow 16.6 g if 0.38 mol was used.",
          },
        },
      ],
    },
  ],
};
