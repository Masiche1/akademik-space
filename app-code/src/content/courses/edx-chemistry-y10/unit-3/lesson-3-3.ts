import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "ech10-u3-lesson-3-3",
  code: "3-3",
  title: "Acids, Salts and Chemical Tests",
  goal: "I CAN prepare soluble salts, describe acid-base reactions, and identify common ions and gases using chemical tests.",
  standards: ["4CH1 2.30", "4CH1 2.31", "4CH1 2.32", "4CH1 2.35", "4CH1 2.37", "4CH1 2.38"],
  vocabulary: [
    { term: "Acid", definition: "A substance that forms $\\text{H}^+$ ions in aqueous solution and has a pH below 7." },
    { term: "Alkali", definition: "A soluble base that forms $\\text{OH}^-$ ions in aqueous solution and has a pH above 7." },
    { term: "Neutralisation", definition: "The reaction of an acid with a base to form a salt and water: $\\text{H}^+ + \\text{OH}^- \\rightarrow \\text{H}_2\\text{O}$." },
    { term: "Salt", definition: "A compound formed when the hydrogen of an acid is replaced by a metal or ammonium ion." },
    { term: "Precipitate", definition: "An insoluble solid formed when two solutions react." },
    { term: "Crystallisation", definition: "Evaporating some of the solvent and cooling a saturated solution so that crystals form." },
    { term: "Flame test", definition: "A test in which a compound is heated in a flame and the colour identifies a metal ion." },
  ],
  concepts: [
    {
      id: "ech10-u3-acids-salts",
      title: "Acids, alkalis, salts and preparing salts",
      skill: "Describe acid reactions, name salts, prepare a pure soluble salt and calculate the mass of salt formed.",
      lesson: {
        sections: [
          {
            heading: "Acids, alkalis and their reactions",
            body: "Acids have pH below 7 and alkalis above 7. Universal indicator is red in strong acid, green at pH 7 and purple in strong alkali. The general reactions of dilute acids are:\n\n- acid + metal $\\rightarrow$ salt + hydrogen\n- acid + metal oxide (or hydroxide) $\\rightarrow$ salt + water\n- acid + metal carbonate $\\rightarrow$ salt + water + carbon dioxide\n- acid + alkali $\\rightarrow$ salt + water\n\nHydrochloric acid gives **chlorides**, sulfuric acid gives **sulfates** and nitric acid gives **nitrates**. Neutralisation is $\\text{H}^+ + \\text{OH}^- \\rightarrow \\text{H}_2\\text{O}$.",
          },
          {
            heading: "Preparing a soluble salt",
            body: "To make **copper(II) sulfate** from an insoluble base:\n\n1. Warm dilute sulfuric acid and add copper(II) oxide in small portions, stirring, until some solid is left (it is in **excess**, so all the acid has reacted).\n2. **Filter** to remove the excess solid.\n3. Heat the filtrate to evaporate some water until saturated, then leave to cool so **crystals** form.\n4. Filter, wash with a little cold water and dry.\n\n$$\\text{CuO} + \\text{H}_2\\text{SO}_4 \\rightarrow \\text{CuSO}_4 + \\text{H}_2\\text{O}$$\n\nSoluble salts of sodium, potassium or ammonium are made by **titration** because the excess cannot be filtered off. **Insoluble** salts are made by **precipitation**, mixing two solutions and filtering.",
          },
          {
            heading: "Calculating the mass of salt",
            body: "Convert mass of reactant to moles, use the ratio in the equation, then convert moles of salt to mass. $\\text{percentage yield} = \\frac{\\text{actual mass}}{\\text{theoretical mass}} \\times 100\\%$.",
          },
        ],
        keyFormulas: [
          { name: "Acid + carbonate", statement: "acid + metal carbonate $\\rightarrow$ salt + water + carbon dioxide" },
          { name: "Neutralisation (ionic)", statement: "$\\text{H}^+ + \\text{OH}^- \\rightarrow \\text{H}_2\\text{O}$" },
          { name: "Moles", statement: "$\\text{moles} = \\frac{\\text{mass (g)}}{M_r}$" },
          { name: "Percentage yield", statement: "$\\frac{\\text{actual mass}}{\\text{theoretical mass}} \\times 100\\%$" },
        ],
        workedExample: {
          problem: "Calculate the maximum mass of magnesium sulfate, $\\text{MgSO}_4$, made from $2.0\\text{ g}$ of magnesium oxide and excess dilute sulfuric acid. ($A_r$: Mg $= 24$, O $= 16$, S $= 32$)",
          solution: "$\\text{MgO} + \\text{H}_2\\text{SO}_4 \\rightarrow \\text{MgSO}_4 + \\text{H}_2\\text{O}$. $M_r(\\text{MgO}) = 40$, so moles $= \\frac{2.0}{40} = 0.050$. Ratio $1:1$, so $0.050$ mol of $\\text{MgSO}_4$. $M_r(\\text{MgSO}_4) = 24 + 32 + 64 = 120$. Mass $= 0.050 \\times 120 = 6.0\\text{ g}$.",
        },
      },
      questions: [
        {
          id: "ech10-u3-acids-salts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Sulfuric acid reacts with sodium hydroxide solution. Which is the salt formed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sodium sulfate" },
              { id: "b", text: "Sodium sulfide" },
              { id: "c", text: "Sodium nitrate" },
              { id: "d", text: "Sodium chloride" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Naming salts", statement: "The metal comes from the base or alkali and the anion from the acid. Sulfuric acid gives sulfates." },
            ],
            steps: [
              { reasoning: "$2\\text{NaOH} + \\text{H}_2\\text{SO}_4 \\rightarrow \\text{Na}_2\\text{SO}_4 + 2\\text{H}_2\\text{O}$, so the salt is sodium sulfate.", working: "\\text{Na}_2\\text{SO}_4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Sodium sulfate",
            commonErrors: ["Choosing sodium sulfide because the names look similar."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ech10-u3-acids-salts-q2",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe how you would prepare a pure dry sample of crystals of copper(II) sulfate from copper(II) oxide and dilute sulfuric acid.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Preparing a soluble salt", statement: "Add an insoluble base in excess to the acid, filter off the excess, then crystallise the filtrate." },
            ],
            steps: [
              { reasoning: "Warm the acid and add copper(II) oxide a little at a time, stirring, until no more dissolves (the oxide is in excess).", marks: 1, markCode: "B" },
              { reasoning: "Filter to remove the excess copper(II) oxide.", marks: 1, markCode: "B" },
              { reasoning: "Heat the filtrate to evaporate some of the water (until saturated) and leave to cool so crystals form.", marks: 1, markCode: "B" },
              { reasoning: "Filter off the crystals, wash with a little cold water and dry between filter paper.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Add excess CuO to warm acid, filter, evaporate to saturation, cool to crystallise, filter and dry.",
            commonErrors: ["Evaporating the filtrate to dryness, which can decompose the crystals and leave them impure.", "Not using an excess of the oxide, so acid remains in the product."],
            examinerNote: "Allow 'until the solution is saturated' or 'crystals start to form on a glass rod'. Reject 'titrate' for this method.",
          },
        },
        {
          id: "ech10-u3-acids-salts-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Zinc carbonate reacts with dilute hydrochloric acid: $\\text{ZnCO}_3 + 2\\text{HCl} \\rightarrow \\text{ZnCl}_2 + \\text{H}_2\\text{O} + \\text{CO}_2$. Calculate the mass of zinc chloride, in grams, formed from $12.5\\text{ g}$ of zinc carbonate in excess acid. Give your answer to 3 significant figures. ($A_r$: Zn $= 65$, C $= 12$, O $= 16$, Cl $= 35.5$)",
          response: { type: "numeric", parts: [{ label: "Mass of zinc chloride", answer: 13.6, tolerance: 0.05, unit: "g" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moles", statement: "$\\text{moles} = \\frac{\\text{mass}}{M_r}$" },
            ],
            steps: [
              { reasoning: "$M_r(\\text{ZnCO}_3) = 65 + 12 + 48 = 125$.", working: "\\frac{12.5}{125} = 0.100\\text{ mol}", marks: 1, markCode: "M" },
              { reasoning: "Ratio $\\text{ZnCO}_3 : \\text{ZnCl}_2$ is $1:1$.", working: "0.100\\text{ mol ZnCl}_2", marks: 1, markCode: "M" },
              { reasoning: "$M_r(\\text{ZnCl}_2) = 65 + 71 = 136$.", working: "M_r = 136", marks: 1, markCode: "M" },
              { reasoning: "Mass of zinc chloride.", working: "0.100 \\times 136 = 13.6\\text{ g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$13.6\\text{ g}$",
            commonErrors: ["Using $M_r(\\text{ZnCl}_2) = 100.5$ (using one chlorine atom).", "Multiplying by 2 because of the 2HCl in the equation."],
            examinerNote: "Allow ecf. A1 for 13.6 with correct unit.",
          },
        },
        {
          id: "ech10-u3-acids-salts-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A student prepares copper(II) sulfate crystals by adding $4.0\\text{ g}$ of copper(II) oxide to excess warm dilute sulfuric acid: $\\text{CuO} + \\text{H}_2\\text{SO}_4 \\rightarrow \\text{CuSO}_4 + \\text{H}_2\\text{O}$. She obtains $6.0\\text{ g}$ of dry copper(II) sulfate.\n\nUse $A_r$: Cu $= 64$, O $= 16$, S $= 32$.",
          parts: [
            { label: "a", prompt: "Universal indicator is added to a sample of the dilute sulfuric acid. State the colour of the indicator and the type of ion that causes this.", marks: 2 },
            { label: "b", prompt: "Explain why the copper(II) oxide is added in excess.", marks: 2 },
            { label: "c", prompt: "Calculate the theoretical mass of copper(II) sulfate that can be formed from $4.0\\text{ g}$ of copper(II) oxide.", marks: 3 },
            { label: "d", prompt: "Calculate the percentage yield.", marks: 1 },
            { label: "e", prompt: "Suggest two reasons why the percentage yield is less than $100\\%$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moles", statement: "$\\text{moles} = \\frac{\\text{mass}}{M_r}$" },
              { kind: "formula", name: "Percentage yield", statement: "$\\text{percentage yield} = \\frac{\\text{actual mass}}{\\text{theoretical mass}} \\times 100\\%$" },
            ],
            steps: [
              { part: "a", reasoning: "Universal indicator is red or orange in a strong acid.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "The colour is caused by hydrogen ions, $\\text{H}^+$.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Excess oxide ensures that all the sulfuric acid reacts, so the product is not contaminated by acid.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Copper(II) oxide is insoluble, so the excess can easily be removed by filtration.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "$M_r(\\text{CuO}) = 80$.", working: "\\frac{4.0}{80} = 0.050\\text{ mol}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Ratio $1:1$; $M_r(\\text{CuSO}_4) = 64 + 32 + 64 = 160$.", working: "0.050 \\times 160", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "8.0\\text{ g}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Actual divided by theoretical.", working: "\\frac{6.0}{8.0} \\times 100 = 75\\%", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Any one: some solution or crystals lost on filter paper or in transfers; some crystals remained dissolved in the solution.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Any second different reason: crystals lost when washing; incomplete reaction; crystals not fully recovered.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) red/orange, $\\text{H}^+$ (b) so all acid reacts; excess filtered off (c) $8.0\\text{ g}$ (d) $75\\%$ (e) loss during filtering or transfer, crystals left in solution",
            commonErrors: ["Using $M_r(\\text{CuO}) = 64 + 32$.", "Dividing theoretical by actual mass in (d), giving $133\\%$.", "Saying the percentage yield is low because mass is 'destroyed'."],
            examinerNote: "In (a) allow orange or red. In (d) allow ecf from (c). Reject 'human error' alone in (e).",
          },
        },
      ],
    },
    {
      id: "ech10-u3-ion-gas-tests",
      title: "Chemical tests for ions and gases",
      skill: "Use flame tests, precipitation tests and gas tests to identify ions and gases and write relevant equations.",
      lesson: {
        sections: [
          {
            heading: "Tests for gases",
            body: "- **Hydrogen**: a lit splint gives a squeaky pop\n- **Oxygen**: relights a glowing splint\n- **Carbon dioxide**: turns limewater cloudy\n- **Chlorine**: bleaches damp blue litmus paper (it first turns red)\n- **Ammonia**: turns damp red litmus paper blue",
          },
          {
            heading: "Tests for positive ions",
            body: "**Flame tests**: lithium crimson, sodium yellow, potassium lilac, calcium brick-red, copper blue-green.\n\nAdd **sodium hydroxide solution** to a solution of the compound:\n\n- $\\text{Cu}^{2+}$: blue precipitate\n- $\\text{Fe}^{2+}$: green precipitate\n- $\\text{Fe}^{3+}$: brown (red-brown) precipitate\n- $\\text{Al}^{3+}$, $\\text{Ca}^{2+}$, $\\text{Mg}^{2+}$: white precipitate; the aluminium precipitate **redissolves in excess** alkali, the others do not\n- $\\text{NH}_4^+$: warm with sodium hydroxide to give ammonia gas\n\nExample: $\\text{FeSO}_4 + 2\\text{NaOH} \\rightarrow \\text{Fe(OH)}_2 + \\text{Na}_2\\text{SO}_4$",
          },
          {
            heading: "Tests for negative ions",
            body: "- **Carbonate**: add dilute acid, carbon dioxide is given off\n- **Chloride, bromide, iodide**: add dilute nitric acid then silver nitrate solution: white (chloride), cream (bromide), yellow (iodide) precipitate. The ionic equation for chloride is $\\text{Ag}^+ + \\text{Cl}^- \\rightarrow \\text{AgCl}$.\n- **Sulfate**: add dilute hydrochloric acid then barium chloride solution: white precipitate of barium sulfate, $\\text{Ba}^{2+} + \\text{SO}_4^{2-} \\rightarrow \\text{BaSO}_4$.\n\nThe acid is added first to remove carbonate ions, which would otherwise also give a white precipitate.",
          },
        ],
        keyFormulas: [
          { name: "Halide test", statement: "$\\text{HNO}_3$ then $\\text{AgNO}_3$: white (Cl$^-$), cream (Br$^-$), yellow (I$^-$)" },
          { name: "Sulfate test", statement: "$\\text{HCl}$ then $\\text{BaCl}_2$: white precipitate" },
          { name: "Ammonium test", statement: "$\\text{NH}_4^+ + \\text{OH}^- \\rightarrow \\text{NH}_3 + \\text{H}_2\\text{O}$ (warm); damp red litmus turns blue" },
          { name: "Hydroxide precipitates", statement: "Cu$^{2+}$ blue, Fe$^{2+}$ green, Fe$^{3+}$ brown" },
        ],
        workedExample: {
          problem: "A solid gives a lilac flame. A solution of it gives a white precipitate with dilute nitric acid and silver nitrate. Identify the solid.",
          solution: "Lilac flame means potassium ions. White precipitate with silver nitrate means chloride ions. The solid is potassium chloride, KCl.",
        },
      },
      questions: [
        {
          id: "ech10-u3-ion-gas-tests-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the result of the test for hydrogen gas?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A glowing splint relights" },
              { id: "b", text: "A lit splint gives a squeaky pop" },
              { id: "c", text: "Damp litmus paper is bleached" },
              { id: "d", text: "Limewater turns cloudy" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Test for hydrogen", statement: "Hydrogen burns explosively with a squeaky pop when a lit splint is applied." },
            ],
            steps: [
              { reasoning: "A lit splint makes a squeaky pop in hydrogen. (a) is oxygen, (c) is carbon dioxide and (d) is chlorine.", working: "\\text{squeaky pop}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A lit splint gives a squeaky pop",
            commonErrors: ["Choosing (a), which is the test for oxygen."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ech10-u3-ion-gas-tests-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A white solid gives a lilac flame in a flame test. When dissolved in water, adding dilute nitric acid and then silver nitrate solution gives a white precipitate. Identify the solid, giving the ions present and its name.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Identifying ions", statement: "The flame colour identifies the metal ion; the silver nitrate precipitate colour identifies the halide ion." },
            ],
            steps: [
              { reasoning: "Lilac flame shows potassium ions, $\\text{K}^+$.", marks: 1, markCode: "B" },
              { reasoning: "White precipitate with acidified silver nitrate shows chloride ions, $\\text{Cl}^-$.", marks: 1, markCode: "B" },
              { reasoning: "The compound is potassium chloride.", working: "\\text{KCl}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Potassium chloride, KCl",
            commonErrors: ["Giving a cream precipitate as bromide and a yellow precipitate as chloride.", "Naming sodium because 'yellow' and 'lilac' are confused."],
            examinerNote: "A1 for the name or formula, dependent on both ions being correct. Allow ecf if one ion is wrong but the name matches.",
          },
        },
        {
          id: "ech10-u3-ion-gas-tests-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A green solid, X, dissolves in water. Adding sodium hydroxide solution to this solution gives a green precipitate. Adding dilute hydrochloric acid and then barium chloride solution gives a white precipitate. Identify X and explain why dilute acid is added before the barium chloride.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ion tests", statement: "Hydroxide precipitates identify metal ions by colour. Acidified barium chloride gives a white precipitate with sulfate ions." },
            ],
            steps: [
              { reasoning: "A green precipitate with sodium hydroxide shows iron(II) ions, $\\text{Fe}^{2+}$.", marks: 1, markCode: "B" },
              { reasoning: "A white precipitate with acidified barium chloride shows sulfate ions, $\\text{SO}_4^{2-}$.", marks: 1, markCode: "B" },
              { reasoning: "X is iron(II) sulfate, $\\text{FeSO}_4$.", marks: 1, markCode: "A" },
              { reasoning: "The acid removes carbonate ions (or sulfite), which would also form a white precipitate with barium ions, so only sulfate gives the precipitate.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Iron(II) sulfate; acid removes carbonate ions that would give a false positive.",
            commonErrors: ["Identifying the green precipitate as copper(II).", "Saying the acid 'speeds up' the reaction."],
            examinerNote: "Reject iron(III) for the first mark. A1 requires both ions correct (ecf allowed).",
          },
        },
        {
          id: "ech10-u3-ion-gas-tests-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A technician tests a white solid, Y, and records the results.\n\n| Test | Result |\n| --- | --- |\n| Flame test | brick-red flame |\n| Y dissolved in water, sodium hydroxide added until in excess | white precipitate that does not dissolve |\n| Y dissolved in water, dilute nitric acid then silver nitrate added | white precipitate |\n\nUse $A_r$: Ca $= 40$, Cl $= 35.5$, Ag $= 108$.",
          parts: [
            { label: "a", prompt: "Identify the metal ion in Y and give the evidence.", marks: 2 },
            { label: "b", prompt: "Identify the negative ion in Y and give the test and result.", marks: 2 },
            { label: "c", prompt: "Name Y.", marks: 1 },
            { label: "d", prompt: "Write the ionic equation, with charges, for the formation of the white precipitate in the silver nitrate test.", marks: 1 },
            { label: "e", prompt: "$0.555\\text{ g}$ of Y (formula $\\text{CaCl}_2$) is dissolved in water and excess silver nitrate solution is added. Calculate the mass of silver chloride, AgCl, formed. Give your answer in g.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ion tests", statement: "Flame colour and hydroxide precipitates identify metal ions; acidified silver nitrate identifies halide ions." },
              { kind: "formula", name: "Moles", statement: "$\\text{moles} = \\frac{\\text{mass}}{M_r}$" },
            ],
            steps: [
              { part: "a", reasoning: "The brick-red flame shows calcium ions, $\\text{Ca}^{2+}$.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "A white precipitate with sodium hydroxide that does not redissolve in excess supports calcium (it rules out aluminium).", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Add dilute nitric acid and then silver nitrate solution.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "A white precipitate shows chloride ions, $\\text{Cl}^-$.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Calcium ions with chloride ions.", working: "\\text{calcium chloride}", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Silver ions and chloride ions form solid silver chloride.", working: "\\text{Ag}^+ + \\text{Cl}^- \\rightarrow \\text{AgCl}", marks: 1, markCode: "B" },
              { part: "e", reasoning: "$M_r(\\text{CaCl}_2) = 40 + 71 = 111$.", working: "\\frac{0.555}{111} = 0.00500\\text{ mol}", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Each $\\text{CaCl}_2$ contains 2 chloride ions, so $\\text{AgCl}$ moles is double.", working: "0.00500 \\times 2 = 0.0100\\text{ mol}", marks: 1, markCode: "M" },
              { part: "e", reasoning: "$M_r(\\text{AgCl}) = 108 + 35.5 = 143.5$.", working: "0.0100 \\times 143.5 = 1.435\\text{ g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\text{Ca}^{2+}$ (b) $\\text{Cl}^-$ (c) calcium chloride (d) $\\text{Ag}^+ + \\text{Cl}^- \\rightarrow \\text{AgCl}$ (e) $1.435\\text{ g}$ (1.44 g)",
            commonErrors: ["Forgetting the factor of 2 in (e), giving 0.7175 g.", "Identifying the cation as sodium because of a yellow flame.", "Omitting the nitric acid in (b)."],
            examinerNote: "In (e) allow 1.4 or 1.44 or 1.435. Allow ecf for the wrong $M_r$. Ignore state symbols in (d); charges are required.",
          },
        },
      ],
    },
  ],
};
