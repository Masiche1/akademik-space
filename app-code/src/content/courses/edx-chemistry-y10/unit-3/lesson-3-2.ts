import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "ech10-u3-lesson-3-2",
  code: "3-2",
  title: "Metals: Reactivity, Extraction and Rusting",
  goal: "I CAN use the reactivity series to predict reactions and choose an extraction method, and explain how rusting happens and how it is prevented.",
  standards: ["4CH1 2.19", "4CH1 2.20", "4CH1 2.21", "4CH1 2.22", "4CH1 2.23"],
  vocabulary: [
    { term: "Reactivity series", definition: "A list of metals in order of how readily they react, with the most reactive at the top." },
    { term: "Displacement reaction", definition: "A reaction in which a more reactive metal takes the place of a less reactive metal in a compound." },
    { term: "Ore", definition: "A rock that contains enough of a metal compound for the metal to be extracted economically." },
    { term: "Reduction", definition: "The removal of oxygen from a compound, or the gain of electrons." },
    { term: "Oxidation", definition: "The gain of oxygen by a substance, or the loss of electrons." },
    { term: "Sacrificial protection", definition: "Protecting iron by attaching a more reactive metal, which corrodes instead of the iron." },
    { term: "Galvanising", definition: "Coating iron or steel with a layer of zinc." },
  ],
  concepts: [
    {
      id: "ech10-u3-reactivity-extraction",
      title: "Reactivity series and extraction of metals",
      skill: "Use the reactivity series to predict reactions, choose an extraction method and calculate the mass of metal obtained.",
      lesson: {
        sections: [
          {
            heading: "The reactivity series",
            body: "From most to least reactive: **potassium, sodium, calcium, magnesium, aluminium, (carbon), zinc, iron, (hydrogen), copper, silver, gold**.\n\nMore reactive metals react more vigorously with water, dilute acid and oxygen. Magnesium, zinc and iron react with dilute acid to give a salt and hydrogen; copper does not react because it is below hydrogen. For example:\n\n$$\\text{Mg} + \\text{H}_2\\text{SO}_4 \\rightarrow \\text{MgSO}_4 + \\text{H}_2$$\n\nA more reactive metal **displaces** a less reactive metal from its compound:\n\n$$\\text{Zn} + \\text{CuSO}_4 \\rightarrow \\text{ZnSO}_4 + \\text{Cu}$$",
          },
          {
            heading: "Extracting metals",
            body: "Unreactive metals such as gold occur uncombined. Most metals are found as ores (compounds, often oxides) and must be extracted.\n\n- Metals **below carbon** (such as zinc and iron) are extracted by **reduction with carbon** (or carbon monoxide). The oxide loses oxygen.\n- Metals **above carbon** (such as aluminium) hold on to oxygen too strongly, so their molten compounds are broken down by **electrolysis**.\n\nIn the blast furnace, iron(III) oxide is reduced by carbon monoxide:\n\n$$\\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\rightarrow 2\\text{Fe} + 3\\text{CO}_2$$",
          },
          {
            heading: "Calculating the mass of metal",
            body: "Use moles $= \\frac{\\text{mass}}{M_r}$ and the ratio in the equation. For $\\text{Fe}_2\\text{O}_3$, $M_r = 2 \\times 56 + 3 \\times 16 = 160$. One mole of $\\text{Fe}_2\\text{O}_3$ gives two moles of iron.",
          },
        ],
        keyFormulas: [
          { name: "Reactivity series", statement: "K, Na, Ca, Mg, Al, (C), Zn, Fe, (H), Cu, Ag, Au" },
          { name: "Blast furnace reaction", statement: "$\\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\rightarrow 2\\text{Fe} + 3\\text{CO}_2$" },
          { name: "Extraction rule", statement: "Below carbon: reduce with carbon. Above carbon: electrolysis" },
          { name: "Moles", statement: "$\\text{moles} = \\frac{\\text{mass (g)}}{M_r}$" },
        ],
        workedExample: {
          problem: "Calculate the mass of iron produced from $320\\text{ g}$ of iron(III) oxide. ($A_r$: Fe $= 56$, O $= 16$)",
          solution: "$M_r(\\text{Fe}_2\\text{O}_3) = 160$. Moles $= \\frac{320}{160} = 2.0$. Ratio $\\text{Fe}_2\\text{O}_3 : \\text{Fe} = 1:2$, so moles of Fe $= 4.0$. Mass $= 4.0 \\times 56 = 224\\text{ g}$.",
        },
      },
      questions: [
        {
          id: "ech10-u3-reactivity-extraction-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which metal is extracted from its ore by electrolysis rather than by heating with carbon?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Iron" },
              { id: "b", text: "Zinc" },
              { id: "c", text: "Aluminium" },
              { id: "d", text: "Copper" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Extraction and reactivity", statement: "Metals more reactive than carbon cannot be reduced by carbon and are extracted by electrolysis." },
            ],
            steps: [
              { reasoning: "Aluminium is above carbon in the reactivity series, so carbon cannot remove its oxygen. Iron, zinc and copper are below carbon.", working: "\\text{aluminium}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Aluminium",
            commonErrors: ["Choosing iron because it is a very common metal that is extracted in industry."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "ech10-u3-reactivity-extraction-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A piece of zinc is added to blue copper(II) sulfate solution. Describe what you would see and explain why the reaction takes place. Include a balanced symbol equation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Displacement", statement: "A more reactive metal displaces a less reactive metal from a solution of its salt." },
            ],
            steps: [
              { reasoning: "Observation: a reddish-brown solid (copper) forms on the zinc and the blue colour fades.", marks: 1, markCode: "B" },
              { reasoning: "Zinc is more reactive than copper, so it displaces copper from the solution.", marks: 1, markCode: "B" },
              { reasoning: "Balanced equation.", working: "\\text{Zn} + \\text{CuSO}_4 \\rightarrow \\text{ZnSO}_4 + \\text{Cu}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Brown copper forms and the blue colour fades; zinc is more reactive; $\\text{Zn} + \\text{CuSO}_4 \\rightarrow \\text{ZnSO}_4 + \\text{Cu}$",
            commonErrors: ["Saying copper is more reactive than zinc.", "Saying the solution turns green."],
            examinerNote: "Allow 'pink', 'orange' or 'brown' solid. Allow ionic equation $\\text{Zn} + \\text{Cu}^{2+} \\rightarrow \\text{Zn}^{2+} + \\text{Cu}$. Ignore state symbols.",
          },
        },
        {
          id: "ech10-u3-reactivity-extraction-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Iron is extracted by the reaction $\\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\rightarrow 2\\text{Fe} + 3\\text{CO}_2$. Calculate the mass of iron, in grams, produced from $480\\text{ g}$ of iron(III) oxide. ($A_r$: Fe $= 56$, O $= 16$)",
          response: { type: "numeric", parts: [{ label: "Mass of iron", answer: 336, unit: "g" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moles", statement: "$\\text{moles} = \\frac{\\text{mass}}{M_r}$" },
              { kind: "law", name: "Conservation of mass", statement: "The balanced equation gives the mole ratio of reactant to product." },
            ],
            steps: [
              { reasoning: "$M_r(\\text{Fe}_2\\text{O}_3) = 2 \\times 56 + 3 \\times 16 = 160$.", working: "M_r = 160", marks: 1, markCode: "M" },
              { reasoning: "Moles of iron(III) oxide.", working: "\\frac{480}{160} = 3.0\\text{ mol}", marks: 1, markCode: "M" },
              { reasoning: "The ratio $\\text{Fe}_2\\text{O}_3 : \\text{Fe}$ is $1:2$.", working: "3.0 \\times 2 = 6.0\\text{ mol}", marks: 1, markCode: "M" },
              { reasoning: "Mass of iron.", working: "6.0 \\times 56 = 336\\text{ g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$336\\text{ g}$",
            commonErrors: ["Using the ratio 1:1 to get 168 g.", "Using $M_r = 72$ (Fe + O) for the oxide."],
            examinerNote: "Award M marks in sequence with ecf. A1 for 336 with a correct unit.",
          },
        },
        {
          id: "ech10-u3-reactivity-extraction-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student adds small pieces of four metals to dilute sulfuric acid at $25^\\circ\\text{C}$ and records what happens.\n\n| Metal | Observation |\n| --- | --- |\n| Magnesium | rapid fizzing, metal disappears quickly |\n| Zinc | steady fizzing |\n| Iron | a few bubbles slowly |\n| Copper | no bubbles |\n\nUse $A_r$: Fe $= 56$, O $= 16$.",
          parts: [
            { label: "a", prompt: "Put the four metals in order of reactivity, most reactive first, and justify your order.", marks: 2 },
            { label: "b", prompt: "Write the balanced symbol equation for the reaction between magnesium and dilute sulfuric acid.", marks: 2 },
            { label: "c", prompt: "Explain why aluminium is extracted by electrolysis but iron is extracted using carbon monoxide.", marks: 2 },
            { label: "d", prompt: "Iron(III) oxide is reduced in the blast furnace: $\\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\rightarrow 2\\text{Fe} + 3\\text{CO}_2$. Calculate the mass of iron, in kg, obtained from $160\\text{ kg}$ of iron(III) oxide.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reactivity", statement: "More reactive metals react more vigorously with dilute acid." },
              { kind: "definition", name: "Reduction", statement: "Reduction is the removal of oxygen from a compound." },
              { kind: "formula", name: "Moles", statement: "$\\text{moles} = \\frac{\\text{mass}}{M_r}$" },
            ],
            steps: [
              { part: "a", reasoning: "Order of reactivity.", working: "\\text{Mg} > \\text{Zn} > \\text{Fe} > \\text{Cu}", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Justification: the more vigorously a metal reacts with acid (more bubbles), the more reactive it is; copper does not react.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Correct formulae: magnesium sulfate and hydrogen are formed.", working: "\\text{Mg} + \\text{H}_2\\text{SO}_4 \\rightarrow \\text{MgSO}_4 + \\text{H}_2", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The equation is already balanced (1 Mg, 2 H, 1 S, 4 O on each side), so no coefficients are needed.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Aluminium is more reactive than carbon, so carbon cannot reduce aluminium oxide; the molten compound must be broken down by electrolysis.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Iron is less reactive than carbon, so carbon monoxide can remove the oxygen from iron(III) oxide (reduction).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "$M_r(\\text{Fe}_2\\text{O}_3) = 160$, so $160\\text{ kg}$ is $1000$ mol; ratio to Fe is $1:2$.", working: "\\frac{160000}{160} = 1000\\text{ mol} \\rightarrow 2000\\text{ mol Fe}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Mass of iron in grams.", working: "2000 \\times 56 = 112000\\text{ g}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Convert to kilograms.", working: "112\\text{ kg}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Mg > Zn > Fe > Cu (b) $\\text{Mg} + \\text{H}_2\\text{SO}_4 \\rightarrow \\text{MgSO}_4 + \\text{H}_2$ (c) aluminium above carbon, iron below carbon (d) $112\\text{ kg}$",
            commonErrors: ["Saying iron is extracted by electrolysis because it is a metal.", "Giving the equation product as $\\text{H}_2\\text{O}$ instead of $\\text{H}_2$.", "Forgetting the 1:2 ratio and giving 56 kg."],
            examinerNote: "In (a) the order must be fully correct for B1. In (c) allow 'carbon is more reactive than iron so it can displace it' oe. In (d) alternatively: 160 kg gives 112 kg by direct proportion with $M_r$ (160 : 112). Allow ecf.",
          },
        },
      ],
    },
    {
      id: "ech10-u3-rusting-prevention",
      title: "Rusting and its prevention",
      skill: "State the conditions needed for rusting, interpret rusting experiments and explain barrier and sacrificial protection.",
      lesson: {
        sections: [
          {
            heading: "What is rust?",
            body: "Rusting is the **oxidation** of iron (and steel) to hydrated iron(III) oxide. It needs **both oxygen (air) and water**. Iron does not rust if either is missing. A simplified equation is:\n\n$$4\\text{Fe} + 3\\text{O}_2 \\rightarrow 2\\text{Fe}_2\\text{O}_3$$\n\nRust is flaky and falls away, exposing fresh iron underneath, so rusting continues. Salt speeds up rusting.",
          },
          {
            heading: "Investigating rusting",
            body: "In a standard investigation, nails are placed in different tubes:\n\n- air and water: the nail rusts\n- boiled (air removed) water with a layer of oil: no rust, because there is no dissolved oxygen\n- dry air using anhydrous calcium chloride (removes water): no rust\n\nThe independent variable is the condition in the tube, the dependent variable is the amount of rust, and the control variables include the type and size of nail and the time.",
          },
          {
            heading: "Preventing rust",
            body: "**Barriers** keep oxygen and water away from the iron: painting, oiling or greasing, plastic coating, or plating with tin or chromium. If the barrier is scratched, iron coated with a less reactive metal (such as tin) rusts.\n\n**Sacrificial protection**: a more reactive metal such as zinc or magnesium is in contact with iron. It loses electrons (is oxidised) in preference to iron and corrodes instead. **Galvanising** (zinc coating) gives both a barrier and sacrificial protection, so it works even when scratched.",
          },
        ],
        keyFormulas: [
          { name: "Conditions for rusting", statement: "Iron + oxygen + water" },
          { name: "Rusting equation", statement: "$4\\text{Fe} + 3\\text{O}_2 \\rightarrow 2\\text{Fe}_2\\text{O}_3$ (simplified)" },
          { name: "Sacrificial protection", statement: "A more reactive metal (Zn, Mg) corrodes instead of iron" },
          { name: "Percentage change", statement: "$\\frac{\\text{final} - \\text{initial}}{\\text{initial}} \\times 100\\%$" },
        ],
        workedExample: {
          problem: "A nail of mass $5.6\\text{ g}$ is fully converted to $\\text{Fe}_2\\text{O}_3$. Calculate the mass of $\\text{Fe}_2\\text{O}_3$ formed. ($A_r$: Fe $= 56$, O $= 16$)",
          solution: "Moles of Fe $= \\frac{5.6}{56} = 0.10$. From $4\\text{Fe} + 3\\text{O}_2 \\rightarrow 2\\text{Fe}_2\\text{O}_3$, moles of $\\text{Fe}_2\\text{O}_3 = 0.05$. $M_r = 160$, so mass $= 0.05 \\times 160 = 8.0\\text{ g}$.",
        },
      },
      questions: [
        {
          id: "ech10-u3-rusting-prevention-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which conditions are both needed for iron to rust?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oxygen and water" },
              { id: "b", text: "Nitrogen and water" },
              { id: "c", text: "Oxygen and carbon dioxide" },
              { id: "d", text: "Water and salt" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rusting", statement: "Iron rusts only when both oxygen and water are present." },
            ],
            steps: [
              { reasoning: "Rusting is oxidation of iron, which requires oxygen and water.", working: "\\text{oxygen and water}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Oxygen and water",
            commonErrors: ["Choosing (d): salt speeds rusting up but is not essential."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "ech10-u3-rusting-prevention-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A steel bucket is galvanised. Explain why the steel does not rust even when the zinc coating is scratched and the steel is exposed.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sacrificial protection", statement: "A more reactive metal in contact with iron is oxidised in preference to the iron." },
            ],
            steps: [
              { reasoning: "Zinc is more reactive than iron.", marks: 1, markCode: "B" },
              { reasoning: "Zinc loses electrons (is oxidised or corrodes) in preference to the iron.", marks: 1, markCode: "B" },
              { reasoning: "So the zinc is sacrificed and protects the iron, even though the barrier is broken.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Zinc is more reactive than iron so it corrodes instead of the iron (sacrificial protection).",
            commonErrors: ["Saying the zinc coating still keeps out air and water after it is scratched.", "Saying zinc is less reactive than iron."],
            examinerNote: "Allow 'zinc reacts first' for the second mark. Ignore references to a barrier alone.",
          },
        },
        {
          id: "ech10-u3-rusting-prevention-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A $5.6\\text{ g}$ iron nail is completely converted to iron(III) oxide by the reaction $4\\text{Fe} + 3\\text{O}_2 \\rightarrow 2\\text{Fe}_2\\text{O}_3$. Calculate the mass of iron(III) oxide formed, in grams. ($A_r$: Fe $= 56$, O $= 16$)",
          response: { type: "numeric", parts: [{ label: "Mass of iron(III) oxide", answer: 8, unit: "g" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moles", statement: "$\\text{moles} = \\frac{\\text{mass}}{M_r}$" },
            ],
            steps: [
              { reasoning: "Moles of iron.", working: "\\frac{5.6}{56} = 0.10\\text{ mol}", marks: 1, markCode: "M" },
              { reasoning: "Ratio Fe : $\\text{Fe}_2\\text{O}_3 = 4:2 = 2:1$, so moles of oxide is $0.05$; $M_r = 160$.", working: "0.10 \\div 2 = 0.050\\text{ mol}", marks: 1, markCode: "M" },
              { reasoning: "Mass of oxide.", working: "0.050 \\times 160 = 8.0\\text{ g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8.0\\text{ g}$",
            commonErrors: ["Using a 1:1 ratio to get 16 g.", "Forgetting that the mass increases because oxygen is gained."],
            examinerNote: "Allow ecf. A1 for 8 or 8.0.",
          },
        },
        {
          id: "ech10-u3-rusting-prevention-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student sets up four test tubes, each containing an iron nail, and leaves them for one week.\n\n| Tube | Contents | Result |\n| --- | --- | --- |\n| A | nail in tap water open to the air | rusted |\n| B | nail in boiled water with a layer of oil on top | no rust |\n| C | nail in dry air with anhydrous calcium chloride | no rust |\n| D | nail wrapped in magnesium ribbon in tap water open to the air | no rust on the nail |\n\nUse $A_r$: Fe $= 56$, O $= 16$.",
          parts: [
            { label: "a", prompt: "Explain why the water in tube B was boiled and a layer of oil was added.", marks: 2 },
            { label: "b", prompt: "State what tube C shows about the conditions for rusting.", marks: 1 },
            { label: "c", prompt: "Explain the result in tube D.", marks: 2 },
            { label: "d", prompt: "A nail of mass $5.6\\text{ g}$ in tube A is completely converted to $\\text{Fe}_2\\text{O}_3$, mass $8.0\\text{ g}$. Calculate the percentage increase in mass. Give your answer to the nearest whole number.", marks: 2 },
            { label: "e", prompt: "Tin-plated steel cans rust quickly if the tin layer is scratched. Explain why.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rusting", statement: "Iron rusts when oxygen and water are both present." },
              { kind: "principle", name: "Sacrificial protection", statement: "A more reactive metal is oxidised in preference to iron." },
              { kind: "formula", name: "Percentage increase", statement: "$\\frac{\\text{final} - \\text{initial}}{\\text{initial}} \\times 100\\%$" },
            ],
            steps: [
              { part: "a", reasoning: "Boiling removes dissolved oxygen from the water.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "The oil layer stops air (oxygen) dissolving in the water again.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Tube C: water is absent and there is no rust, so water is needed for rusting.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Magnesium is more reactive than iron, so it is oxidised in preference to iron.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "So magnesium corrodes instead and protects the iron (sacrificial protection).", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Find the increase and divide by the original mass.", working: "\\frac{8.0 - 5.6}{5.6} \\times 100", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate: $\\frac{2.4}{5.6} \\times 100 = 42.86\\ldots$", working: "\\approx 43\\%", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Tin is less reactive than iron, so it does not corrode in preference to the iron.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Oxygen and water reach the exposed iron, which rusts (and forms a cell with tin, speeding corrosion).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) removes dissolved oxygen; oil stops oxygen re-entering (b) water is needed (c) magnesium is more reactive and corrodes instead (d) $43\\%$ (e) tin less reactive than iron, so exposed iron rusts",
            commonErrors: ["Saying boiling kills bacteria.", "Giving 2.4 g or 2.4% for the answer to (d).", "Saying the magnesium forms a barrier in tube D."],
            examinerNote: "In (d) allow 42.9 or 43. In (e) allow 'tin only acts as a barrier' for the first mark.",
          },
        },
      ],
    },
  ],
};
