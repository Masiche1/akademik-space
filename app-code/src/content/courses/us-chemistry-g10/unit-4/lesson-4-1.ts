import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "chem10-u4-lesson-4-1",
  code: "4-1",
  title: "Solutions",
  goal: "I CAN calculate molarity, dilute solutions with $M_1V_1 = M_2V_2$, read solubility curves, explain colligative properties and plan how to prepare a solution accurately.",
  standards: ["HS-PS1-3", "SEP: Using Mathematics and Computational Thinking", "SEP: Planning and Carrying Out Investigations"],
  vocabulary: [
    { term: "Solute", definition: "The substance that dissolves in a solution, such as the salt in salt water." },
    { term: "Solvent", definition: "The substance that does the dissolving, usually the larger amount, such as water." },
    { term: "Molarity", definition: "Concentration in moles of solute per liter of solution, $M = \\dfrac{n}{V}$, in $\\text{mol/L}$." },
    { term: "Dilution", definition: "Adding solvent to a solution to lower its concentration; the moles of solute stay the same." },
    { term: "Saturated solution", definition: "A solution holding the maximum mass of solute that can dissolve at that temperature." },
    { term: "Colligative property", definition: "A property of a solution that depends on the number of dissolved particles, not on what they are." },
    { term: "Volumetric flask", definition: "Glassware with a single calibration mark, used to make a solution of an exact volume." },
  ],
  concepts: [
    {
      id: "chem10-u4-molarity-dilution",
      title: "Molarity, dilution and solubility curves",
      skill: "Calculate molarity, use $M_1V_1 = M_2V_2$ and read solubility curves to find how much solute dissolves or crystallizes.",
      lesson: {
        sections: [
          {
            heading: "Molarity",
            body: "**Molarity** ($M$) is the number of moles of solute in one liter of **solution** (not of solvent).\n\n$$M = \\frac{n}{V}$$\n\nwhere $n$ is moles of solute and $V$ is the volume of solution in liters. Convert grams to moles first with $n = \\dfrac{m}{\\text{molar mass}}$, and convert mL to L by dividing by 1000. A \"0.50 M\" solution contains 0.50 mol of solute in every liter.",
          },
          {
            heading: "Dilution",
            body: "When you add solvent, the volume rises but the moles of solute do not change. Since $n = MV$ before and after:\n\n$$M_1V_1 = M_2V_2$$\n\nSubscript 1 is the concentrated stock and subscript 2 is the diluted solution. $V_1$ and $V_2$ can both stay in mL as long as they use the same unit. The final concentration is always lower than the stock, so $V_2 > V_1$.",
          },
          {
            heading: "Solubility curves",
            body: "A solubility curve plots the mass of solute that dissolves in 100 g of water against temperature. For most solids, solubility rises with temperature. A point **on** the curve is a saturated solution, a point **below** it is unsaturated, and a point **above** it is supersaturated (unstable). If a saturated solution is cooled, the difference between the two solubilities crystallizes out. Scale the values in proportion when the mass of water is not 100 g.",
          },
        ],
        keyFormulas: [
          { name: "Molarity", statement: "$M = \\dfrac{n}{V}$ with $V$ in liters" },
          { name: "Moles from mass", statement: "$n = \\dfrac{m}{\\text{molar mass}}$" },
          { name: "Dilution", statement: "$M_1V_1 = M_2V_2$" },
        ],
        workedExample: {
          problem: "Calculate the molarity of a solution made by dissolving 4.00 g of NaOH (molar mass 40.0 g/mol) in enough water to make 250 mL of solution. Then find the volume of this solution needed to make 100 mL of 0.0400 M NaOH.",
          solution: "Moles: $n = \\dfrac{4.00}{40.0} = 0.100\\ \\text{mol}$. Volume: $250\\ \\text{mL} = 0.250\\ \\text{L}$. Molarity: $M = \\dfrac{0.100}{0.250} = 0.400\\ \\text{M}$.\n\nDilution: $V_1 = \\dfrac{M_2V_2}{M_1} = \\dfrac{0.0400 \\times 100}{0.400} = 10.0\\ \\text{mL}$.",
        },
      },
      questions: [
        {
          id: "chem10-u4-molarity-dilution-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement correctly defines the molarity of a solution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Grams of solute per liter of solution" },
              { id: "b", text: "Moles of solute per liter of solvent" },
              { id: "c", text: "Moles of solute per kilogram of solvent" },
              { id: "d", text: "Moles of solute per liter of solution" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Molarity", statement: "$M = \\dfrac{\\text{moles of solute}}{\\text{liters of solution}}$" }],
            steps: [{ reasoning: "Molarity counts moles of solute (not grams) and divides by the volume of the whole solution (not just the solvent).", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Moles of solute per liter of solution",
            commonErrors: ["Choosing (a), which describes molality.", "Choosing (b), which is a mass concentration, not molarity.", "Choosing (c) because the solute dissolves in the solvent; the volume used is that of the final solution."],
            examinerNote: "B1 for moles of solute per liter of solution.",
          },
        },
        {
          id: "chem10-u4-molarity-dilution-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A student dissolves 11.7 g of sodium chloride, NaCl (molar mass 58.5 g/mol), in water and makes the volume up to 500 mL.\n\nCalculate the molarity of the solution. Give your answer in $\\text{mol/L}$.",
          response: { type: "numeric", parts: [{ label: "Molarity", answer: 0.4, unit: "mol/L", tolerance: 0.005 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moles from mass", statement: "$n = \\dfrac{m}{\\text{molar mass}}$" },
              { kind: "formula", name: "Molarity", statement: "$M = \\dfrac{n}{V}$" },
            ],
            steps: [
              { reasoning: "Convert the mass of NaCl into moles.", working: "n = \\frac{11.7}{58.5} = 0.200\\text{ mol}", marks: 1, markCode: "M" },
              { reasoning: "Convert the volume to liters.", working: "V = \\frac{500}{1000} = 0.500\\text{ L}", marks: 1, markCode: "M" },
              { reasoning: "Divide moles by liters.", working: "M = \\frac{0.200}{0.500} = 0.400\\text{ mol/L}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.400\\ \\text{mol/L}$",
            commonErrors: ["Using 500 instead of 0.500 for the volume, giving 0.0004.", "Forgetting to convert grams to moles first, giving 23.4."],
            examinerNote: "M1 for moles, M1 for volume in liters, A1 for 0.400. Allow ecf from an incorrect mole value.",
          },
        },
        {
          id: "chem10-u4-molarity-dilution-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A lab technician has a stock solution of 6.0 M hydrochloric acid. She needs to prepare 250 mL of 1.5 M hydrochloric acid.\n\nCalculate the volume of stock solution, in mL, she must measure out.",
          response: { type: "numeric", parts: [{ label: "Volume of stock", answer: 62.5, unit: "mL", tolerance: 0.1 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Dilution equation", statement: "$M_1V_1 = M_2V_2$ because the moles of solute are unchanged by adding solvent." }],
            steps: [
              { reasoning: "Rearrange the dilution equation for the stock volume $V_1$.", working: "V_1 = \\frac{M_2V_2}{M_1}", marks: 1, markCode: "M" },
              { reasoning: "Substitute the values; the volumes only need the same unit.", working: "V_1 = \\frac{1.5 \\times 250}{6.0}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "V_1 = 62.5\\text{ mL}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$62.5\\ \\text{mL}$",
            commonErrors: ["Swapping the concentrated and dilute values, giving 1000 mL, which is more than the final volume.", "Subtracting concentrations instead of using $M_1V_1 = M_2V_2$."],
            examinerNote: "M1 for rearrangement, M1 for substitution, A1 for 62.5. Allow 63 mL for a correctly rounded answer if the working is shown.",
          },
        },
        {
          id: "chem10-u4-molarity-dilution-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "The table shows the solubility of potassium nitrate, $\\text{KNO}_3$ (molar mass 101 g/mol), in grams per 100 g of water.\n\n| Temperature (°C) | 20 | 40 | 60 | 80 |\n| --- | --- | --- | --- | --- |\n| Solubility (g / 100 g water) | 32 | 64 | 110 | 169 |",
          parts: [
            { label: "a", prompt: "Determine the maximum mass of $\\text{KNO}_3$ that dissolves in 50 g of water at 60 °C.", marks: 2 },
            { label: "b", prompt: "A saturated solution containing 200 g of water at 40 °C is cooled to 20 °C. Calculate the mass of $\\text{KNO}_3$ that crystallizes.", marks: 3 },
            { label: "c", prompt: "10.1 g of $\\text{KNO}_3$ is dissolved in water and made up to 200 mL of solution. Calculate its molarity.", marks: 3 },
            { label: "d", prompt: "A solution at 40 °C contains 40 g of $\\text{KNO}_3$ dissolved in 100 g of water. State whether it is unsaturated, saturated or supersaturated and justify your answer.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Solubility curve", statement: "A saturated solution holds the maximum solute at a given temperature; solubility values scale with the mass of water." },
              { kind: "formula", name: "Molarity", statement: "$M = \\dfrac{n}{V}$ with $n = \\dfrac{m}{\\text{molar mass}}$" },
            ],
            steps: [
              { part: "a", reasoning: "At 60 °C, 110 g dissolves in 100 g of water. Scale by the water mass (50 g is half).", working: "110 \\times \\frac{50}{100}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "55\\text{ g}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Find the solubility in 200 g of water at each temperature (double the table values): 128 g at 40 °C and 64 g at 20 °C.", working: "2 \\times 64 = 128\\text{ g},\\quad 2 \\times 32 = 64\\text{ g}", marks: 2, markCode: "M" },
              { part: "b", reasoning: "The mass that crystallizes is the difference.", working: "128 - 64 = 64\\text{ g}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Convert mass to moles.", working: "n = \\frac{10.1}{101} = 0.100\\text{ mol}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Convert the volume to liters.", working: "V = 0.200\\text{ L}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Divide moles by volume.", working: "M = \\frac{0.100}{0.200} = 0.500\\text{ mol/L}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The solubility at 40 °C is 64 g per 100 g, and 40 g is less than 64 g, so the solution is unsaturated.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "More solute (a further 24 g) could dissolve before the solution becomes saturated.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) 55 g (b) 64 g (c) $0.500\\ \\text{mol/L}$ (d) Unsaturated: 40 g is below the 64 g that would saturate 100 g of water at 40 °C.",
            commonErrors: ["In (b) subtracting the table values (64 - 32 = 32 g) without scaling for 200 g of water.", "In (c) using 200 instead of 0.200 L.", "In (d) calling the solution saturated because it contains a lot of solute."],
            examinerNote: "(b) M1 for each correct solubility for 200 g; allow ecf if one value is wrong. (c) Allow ecf from an incorrect mole value. (d) Allow 'a point below the solubility curve' oe.",
          },
        },
      ],
    },
    {
      id: "chem10-u4-colligative-preparing",
      title: "Colligative properties and preparing solutions",
      skill: "Explain colligative effects qualitatively and plan how to make an accurate solution of a given molarity.",
      lesson: {
        sections: [
          {
            heading: "Colligative properties",
            body: "Some properties of a solution depend only on the **number of dissolved particles**, not on their identity. These are colligative properties:\n\n- **Freezing point depression:** the solution freezes at a lower temperature than the pure solvent.\n- **Boiling point elevation:** the solution boils at a higher temperature.\n- **Vapor pressure lowering:** dissolved particles reduce the number of solvent molecules escaping from the surface.\n\nMore particles means a bigger effect. Ionic compounds split into ions, so 1 mol of $\\text{NaCl}$ gives about 2 mol of particles, 1 mol of $\\text{CaCl}_2$ gives about 3 mol, and 1 mol of glucose (which does not split) gives 1 mol. Salt on icy roads lowers the freezing point of water so ice melts at temperatures below 0 °C.",
          },
          {
            heading: "Preparing a solution of exact molarity",
            body: "To make a solution of known concentration:\n\n1. Calculate the moles needed, $n = MV$, then the mass, $m = n \\times \\text{molar mass}$.\n2. Weigh the solid on a balance and transfer all of it to a **volumetric flask**, rinsing the weighing container into the flask.\n3. Add some distilled water (about half the final volume) and swirl until the solid dissolves.\n4. Fill with water until the bottom of the meniscus sits on the calibration mark, adding the last few drops with a dropper.\n5. Stopper the flask and invert it several times to mix.\n\nThe solute is dissolved first because the final **solution** volume, not the water volume, must equal the mark. Adding water past the mark makes the solution too dilute.",
          },
        ],
        keyFormulas: [
          { name: "Mass needed", statement: "$m = M \\times V \\times \\text{molar mass}$ with $V$ in liters" },
          { name: "Colligative effect", statement: "Depends on the number of dissolved particles: $\\text{CaCl}_2 > \\text{NaCl} > $ glucose at equal molar amounts" },
        ],
        workedExample: {
          problem: "Calculate the mass of $\\text{Na}_2\\text{CO}_3$ (molar mass 106 g/mol) needed to make 100.0 mL of 0.500 M solution.",
          solution: "Volume: $100.0\\ \\text{mL} = 0.1000\\ \\text{L}$. Moles: $n = MV = 0.500 \\times 0.1000 = 0.0500\\ \\text{mol}$. Mass: $m = 0.0500 \\times 106 = 5.30\\ \\text{g}$.",
        },
      },
      questions: [
        {
          id: "chem10-u4-colligative-preparing-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which property of a solution is a colligative property?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The identity of the dissolved particles" },
              { id: "b", text: "The freezing point of the solution" },
              { id: "c", text: "The smell of the solution" },
              { id: "d", text: "The color of the solution" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Colligative property", statement: "A property that depends on the number of dissolved particles, not their identity, such as freezing point depression." }],
            steps: [{ reasoning: "Freezing point depends on how many dissolved particles are present, so it is colligative. Color and smell depend on what the solute is.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** The freezing point of the solution",
            commonErrors: ["Choosing color, which depends on the identity of the solute (for example copper(II) sulfate is blue)."],
            examinerNote: "B1 for freezing point.",
          },
        },
        {
          id: "chem10-u4-colligative-preparing-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A student must prepare 250 mL of 0.100 M sodium hydroxide, NaOH (molar mass 40.0 g/mol).\n\nCalculate the mass of NaOH required. Give your answer in grams.",
          response: { type: "numeric", parts: [{ label: "Mass of NaOH", answer: 1, unit: "g", tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moles from molarity", statement: "$n = M \\times V$" },
              { kind: "formula", name: "Mass from moles", statement: "$m = n \\times \\text{molar mass}$" },
            ],
            steps: [
              { reasoning: "Find the moles needed, converting 250 mL to 0.250 L.", working: "n = 0.100 \\times 0.250 = 0.0250\\text{ mol}", marks: 1, markCode: "M" },
              { reasoning: "Multiply by the molar mass.", working: "m = 0.0250 \\times 40.0", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "m = 1.00\\text{ g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.00\\ \\text{g}$",
            commonErrors: ["Using 250 instead of 0.250 L, giving 1000 g.", "Forgetting to multiply by the molar mass, giving 0.0250."],
            examinerNote: "M1 for moles, M1 for multiplying by 40.0, A1 for 1.00 g.",
          },
        },
        {
          id: "chem10-u4-colligative-preparing-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Three solutions each contain 0.10 mol of solute dissolved in 1.0 kg of water: glucose, $\\text{C}_6\\text{H}_{12}\\text{O}_6$ (does not split into ions), sodium chloride, NaCl, and calcium chloride, $\\text{CaCl}_2$.\n\nPredict the order of their freezing points from lowest to highest. Explain your answer in terms of particles.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Freezing point depression", statement: "The more dissolved particles present, the lower the freezing point of the solution." },
              { kind: "definition", name: "Ionic dissociation", statement: "Ionic compounds split into ions in water, increasing the number of particles." },
            ],
            steps: [
              { reasoning: "Glucose stays as molecules: 0.10 mol of particles.", marks: 1, markCode: "B" },
              { reasoning: "NaCl gives $\\text{Na}^+$ and $\\text{Cl}^-$: about 0.20 mol of particles.", marks: 1, markCode: "B" },
              { reasoning: "$\\text{CaCl}_2$ gives $\\text{Ca}^{2+}$ and two $\\text{Cl}^-$: about 0.30 mol of particles.", marks: 1, markCode: "B" },
              { reasoning: "More particles give a lower freezing point, so the order from lowest to highest is $\\text{CaCl}_2$, NaCl, glucose.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Lowest freezing point: $\\text{CaCl}_2$ (0.30 mol particles), then NaCl (0.20 mol), then glucose (0.10 mol), which has the highest freezing point of the three.",
            commonErrors: ["Saying all three freeze at the same temperature because the moles of solute are equal; the number of particles is what matters.", "Ordering them by molar mass."],
            examinerNote: "B1 for each correct particle count (allow 1, 2, 3 per formula unit). R1 for the correct order linked to particle number. Allow ecf for the order from incorrect counts.",
          },
        },
        {
          id: "chem10-u4-colligative-preparing-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A student prepares 250.0 mL of 0.200 M sodium chloride solution (NaCl, molar mass 58.5 g/mol) using a balance and a 250.0 mL volumetric flask.",
          parts: [
            { label: "a", prompt: "Calculate the mass of NaCl the student must weigh. Give your answer to 3 significant figures.", marks: 3 },
            { label: "b", prompt: "Describe how the student should make up the solution after weighing the solid.", marks: 3 },
            { label: "c", prompt: "The student accidentally adds water slightly above the calibration mark. State the effect on the concentration and explain why.", marks: 2 },
            { label: "d", prompt: "The student then takes 25.0 mL of this solution and dilutes it to 100.0 mL. Calculate the new molarity.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mass from molarity", statement: "$m = M \\times V \\times \\text{molar mass}$" },
              { kind: "formula", name: "Dilution equation", statement: "$M_1V_1 = M_2V_2$" },
              { kind: "principle", name: "Accurate volumes", statement: "The final solution volume must match the calibration mark of the volumetric flask." },
            ],
            steps: [
              { part: "a", reasoning: "Moles needed: 0.200 M times 0.2500 L.", working: "n = 0.200 \\times 0.2500 = 0.0500\\text{ mol}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Multiply by the molar mass.", working: "m = 0.0500 \\times 58.5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate to 3 significant figures (2.925 rounds to 2.93).", working: "m = 2.93\\text{ g}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Transfer all of the solid into the flask (rinsing the container into it), add about half the final volume of distilled water and swirl until the solid dissolves.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Fill carefully to the calibration mark (bottom of the meniscus on the line), adding the last drops with a dropper.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Stopper the flask and invert it several times so the solution is mixed evenly.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The concentration will be lower than 0.200 M.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The same moles of NaCl are now in a larger volume of solution, so moles per liter decreases.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Rearrange $M_1V_1 = M_2V_2$ and substitute.", working: "M_2 = \\frac{0.200 \\times 25.0}{100.0}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "M_2 = 0.0500\\text{ mol/L}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $2.93\\ \\text{g}$ (b) Dissolve in about half the water in the flask, fill to the mark, stopper and invert (c) Concentration is lower: same moles in a larger volume (d) $0.0500\\ \\text{mol/L}$",
            commonErrors: ["In (a) using 250.0 instead of 0.2500 L.", "In (b) adding the solid to a full flask of water, which can overshoot the mark.", "In (c) saying the concentration increases."],
            examinerNote: "(a) Allow 2.9 g only if 2.925 is seen. (b) Allow 'make up to the mark with distilled water' oe. (d) Allow ecf for an incorrect $M_1$ only if stated; the question uses 0.200 M.",
          },
        },
      ],
    },
  ],
};
